---
layout: post
title: NestJS 1주차 과제
date: 2022-01-08
author: seongryool
description: 모두 화이팅!
categories: ["study"]
---

# NestJS 1주차 과제

안녕하세요. NestJS 스터디에 참여하는 위성률입니다.  
이번 글에서는 NestJS 1주차 과제에 대해서 적어보겠습니다.

![image](https://user-images.githubusercontent.com/66999675/148632520-bf5bd516-6473-44ef-9f7d-91cf527919b7.png)

만들어야하는 데이터베이스 스키마와 과제는 위와 같습니다.

먼저 이번 NestJS 스터디에서는 TypeScript + NestJS + ORM + MySQL을 사용합니다.  
설치 과정또한 적어보겠습니다.

```JavaScript
npm install -g @nestjs/cli
nest new hello-prisma
```

첫번째 코드를 통해서 nestjs/cli를 설치해주고 두번째 코드를 통해서 nestJS 프로젝트를 만들어줍니다.

```JavaScript
npm install prisma --save-dev
npx prisma init
```

prisma를 설치해 주고 prisma를 로컬에서 호출해 줍니다.  
npx prisma init을 하게 되면 아래의 사진과 같이 폴더들이 만들어집니다.  
![image](https://user-images.githubusercontent.com/66999675/148632582-238d865d-e536-49f6-97c8-913ed4d47f7f.png)

위와 같이 prisma 폴더에 schema.prisma가 생성됩니다.

![image](https://user-images.githubusercontent.com/66999675/148632594-ab6ea65d-4037-46f5-9463-bafe58efad6d.png)

mysql을 사용하기에 db의 provide를 mysql로 바꿔줍니다.
이제 MySQL로 갑니다.

![image](https://user-images.githubusercontent.com/66999675/148632610-ff7fa529-d646-4523-bcd6-930f378a88f9.png)  
아이디 root로 하고 port 3306으로 DB를 만들어줍니다.  
다시 nestJs .env 파일로 갑니다.

![image](https://user-images.githubusercontent.com/66999675/148632624-5e960399-6a09-4f42-b9ff-c8f0e9b1bd4a.png)

DATABASE_URL을 위와 같이 바꿔줍니다.  
root:DB 비밀번호@포트 번호/DB에 만들 스키마 이름

다시 schema.prisma 파일로 가서 스키마를 정의해줍니다.  
![image](https://user-images.githubusercontent.com/66999675/148632817-238c1212-7ac7-449e-8bc1-120d5a49ea6f.png)  
1대 다 관계도 정의해 주고  
id에서는 @default(autoincrement())를 통해서 자동으로 값이 생성되게 해줍니다.  
@map("created*at") visual studio code에서 코드를 짤 때는 카멜 케이스 형식으로 변수명을 했지만  
DB에서는 *를 이용해야 하기에 map을 이용해서 바꿔줍니다.

```JavaScript
npx prisma db push
```

를 통해서 mysql db와 연결을 해줍니다.  
![image](https://user-images.githubusercontent.com/66999675/148632870-cf864f41-c073-4f30-bbbb-a39adcec2e6d.png)  
![image](https://user-images.githubusercontent.com/66999675/148632884-bc60e05a-dbe0-41f4-a556-d4e20d1ce91e.png)
DB에 잘 들어간 걸 확인할 수 있습니다.

```JavaScript
npm install @prisma/client
```

위의 코드를 통해서 prisma client를 설치해줍니다.  
앞으로 생성된 prisma client를 업데이트 하려면

```JavaScript
npx prisma generate
```

코드를 사용하면 됩니다.  
![image](https://user-images.githubusercontent.com/66999675/148632964-ca42f409-dc24-4370-8dca-1bbf476adf95.png)  
src 폴더 밑에 prisma 폴더를 만들고 prisma.service.ts 파일을 만들고 공식문서에 나와있는 코드를 추가합니다.

```
nest g resource user
nest g resource board
nest g resource comment
```

nest g resource 폴더이름을 통해서 각 모델들의 service, controller, module ,dto 등을 한 번에 만들어줍니다.

# User

User에 대한 기능부터 만들어보겠습니다.

크게 controller, service, repository 구조를 가집니다.  
로직 관련은 service에 로직 중 DB 관련은 repository에 넣습니다.  
이제 controller에서 service를 불러옵니다.

먼저 Dto를 만들어줍니다.

```
npm i --save class-validator class-transformer
```

또한 유효성 검사를 위해서 class-validate도 설치합니다.

createUserDto 파일로 가서 아래와 같이 코드를 작성해줍니다.

```JavaScript
import {IsString, IsInt, IsNotEmpty, MaxLength, IsEmail, Max} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  nickname: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(12)
  password: string;
}
```

@ 데코레이터를 이용해서 유효성 검사를 해줍니다.  
user를 생성할 때는 default로 정의한 값들을 제외하고 user가 직접 넣어줘야하는 값들을 넣어줍니다.

updateUserDto로 가서 update에 필요한 값들을 넣어줍니다.  
user의 id를 확인해서 있으면 nickname을 바꾸기에 id, nickname을 넣어줍니다.

```JavaScript
import {IsString, IsInt, IsNotEmpty, MaxLength, IsEmail, Max} from 'class-validator';
export class UpdateUserDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @MaxLength(15)
  @IsString()
  nickname: string;
}
```

### UserController

```JavaScript
import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(updateUserDto);
  }
}
```

user 기능은 유저 생성, 1명 조회, 닉네임 변경만 있기에 위와 같이 바꿔줍니다.  
이제 레포지토리 패턴을 사용할 것이기에 repository 폴더를 만들고 그 아래에  
user.repository.ts를 만들어줍니다.

### UserService

```JavaScript
import { UserRepository } from './../repository/user.repository';
import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const emailFound = await this.userRepository.findEmail(createUserDto.email);
    //console.log('email : ', emailFound);
    if (emailFound) {
      throw new HttpException(`duplicated ${createUserDto.email}`, 400);
      //400은 BadRequest, 데이터요청
    }

    const nicknameFound = await this.userRepository.findNickName(
      createUserDto.nickname,
    );

    if (nicknameFound) {
      throw new HttpException(`duplicated ${createUserDto.nickname}`, 400);
      //400은 BadRequest, 데이터요청
    }
    return await this.userRepository.create(createUserDto);
  }

  async findOne(id: number) {
    const found = await this.userRepository.findOne(id);
    if (!found) {
      throw new HttpException(`there is no ${id}`, 400);
    }
    //password 같은 걸 해주면 안돼

    // delete found.password;
    const { password, id: userId, ...result } = found;
    return result;
  }

  async update(updateUserDto: UpdateUserDto) {
    const idFound = await this.userRepository.findOne(updateUserDto.id);

    if (!idFound) {
      throw new HttpException(`there is no ${updateUserDto.id}`, 400);
    }

    const nicknameFound = await this.userRepository.findNickName(
      updateUserDto.nickname,
    );

    if (nicknameFound) {
      throw new HttpException(`duplicated ${updateUserDto.nickname}`, 400);
      //400은 BadRequest, 데이터요청
    }
    return await this.userRepository.update(updateUserDto);
  }
}
```

먼저 create입니다.  
user를 만들 때 중복된 아이디와 닉네임이 있으면 안 되기에 이 둘을 예외 처리해 줍니다.  
둘 다 중복된 아이디가 없을 때만 create로 유저를 생성해 줍니다.

findOne에서는 아이디에 해당하는 유저를 찾아주고 user를 리턴해줍니다.  
이때 유저가 없다면 예외를 발생시켜주고 있다면 user를 리턴해주돼 중요한 정보인 password는  
제외하고 return 해줍니다.

update에서는 id와 nickname을 활용합니다.  
먼저 id가 없는 걸 update 할 수 없기에 예외 처리를 해주고  
nickname이 중복되면 안 되기에 이것 또한 예외 처리를 해줍니다.

id가 있고 nickname이 중복이 안되면 update 해줍니다.  
service에서는 로직과 관련된 예외 처리를 해줍니다.  
DB 관련한 건 repository에 만들어줍니다.

### UserRepository

```JavaScript
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password, nickname } = createUserDto;

    return await this.prisma.user.create({
      data: {
        email,
        password,
        nickname,
      },
    });
  }

  async findEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async findNickName(nickname: string) {
    return await this.prisma.user.findUnique({
      where: {
        nickname,
      },
    });
  }
  async findOne(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(updateUserDto: UpdateUserDto) {
    const { id, nickname } = updateUserDto;
    return await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        nickname,
      },
    });
  }
}
```

repository의 create는 prisma의 create를 이용해서 DB에 user를 생성합니다.  
findId, findEmail, findNickname은 DB에서 각각 조건에 맞는 user들을 찾아줍니다.  
하나로 만들 수 있다는데 다시 해봐야 되겠습니다.  
update는 먼저 조건에 맞는 id를 찾아주고 nickname을 update 해줍니다.

service와 repository에 둘 다 async await를 이용해서 비동기를 동기처럼 할 수 있게 만들어줍니다.

comment와 board도 유사한 과정으로 하면 되기에 user까지만 작성하겠습니다.  
너무 재밌습니다!
