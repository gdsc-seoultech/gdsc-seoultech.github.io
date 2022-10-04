---
layout: post
title: NestJS 스터디 - Dockerfile 작성법!
date: 2022-02-01
author: InHyeok-J
description: 세미나 내용 정리
categories: ["1st_term"]
tags: ["study"]
---

> 1월 28일 스터디에서 진행했던 도커 파일 작성법 세미나에 대한 문서입니다!

## 도커이미지와 컨테이너

도커에서 컨테이너를 생성하기 위해서는 어떻게 해야 할까요 ? 도커 이미지 라는 것이 있어야 합니다.
도커 이미지와 컨테이너의 관계는 다음과 같은데요

<p align="center" >
<img src="https://user-images.githubusercontent.com/28949213/151983374-58437872-6e71-4619-a2b0-ed801a8a277a.png" width="500px"  />
</p>

위 그림처럼 이미지로 여러개의 컨테이너를 생성할 수 있습니다.

또 알아둬야 할 개념이 이 베이스 이미지 인데요  
도커 이미지는 여러 레이어로 구성되며, 베이스 이미지란 생성하고자 하는 이미지의 기반이 되는 이미지입니다.  
예를들어 쉘 프로그램을 만들기 위해서 OS 위에 설치되어야 한다고 할때, 이 OS 이미지가 베이스 이미지가 됩니다.

세미나에서는 Node로 만든 웹 서버 를 도커 컨테이너에 띄웁니다.

## 이미지가 컨테이너를 생성하는 과정

<p align="center" >
<img src="https://user-images.githubusercontent.com/28949213/151987138-9f880ae7-c765-4785-baf4-5387c3be4150.png" width="800px"  />
</p>

도커 이미지가 도커 컨테이너를 생성하는 과정은 위와 같은데요.  
node 관련 베이스 이미지를 선택해서 베이스 이미지에 있는 node 관련 파일 스냅샷이 임시 컨테이너를 통해 하드웨어에 추가되고, 우리가 이제 작성해야 하는 Dockerfile을 통해 우리만의 웹 서버 관련 파일과 명령어들이 컨테이너로 추가되어 새로운 이미지를 만들게 됩니다.

-   여기서 Dockerfile은 도커 이미지를 만들기 위한 설정 파일(스크립트)입니다.
-   자 그럼 Dockerfile을 만들어 봅시다!

## Dockerfile 작성

도커 파일 작성하기 전에, 이 문서를 실습하고 싶으신 분들을 위해 간단 준비 사항을 적어주자면

-   컴퓨터에 nodejs LTS버전을 다운받습니다.
-   서버 스터디는 nestjs로 진행됩니다. `npm i -g @nestjs/cli` nest js cli를 전역 global 설치 해줍니다.
-   원하는 폴더에 nest new <프로젝트 이름>을 수행합니다.
-   설치된 파일들 중 `app.controller.ts` 을 다음과 같이 수정합시다.

```Typescript
import { Controller, Get } from '@nestjs/common';

@Controller("/")
export class AppController {
    constructor(){}

    @Get("/")
    helloDocker() {
        return "Hello Nest";
    }
}
```

-   터미널에서 `npm run start:dev` 명령어를 통해 3000번 포트로 Hello Nest를 확인합시다!
-   컴퓨터에 Docker은 설치됐다는 가정하에 진행됩니다.

노드js에서 서버가 실행하기 위해 어떤 파일들이 필요한지는 package.json 파일에 적혀있습니다. 터미널에서 `npm install` 명령어를 입력하면 이 package.json 파일을 읽고 의존성 파일들을 node_modules에 설치해 줍니다.

-   그럼 도커 파일은 어떻게 작성되어야 할까요?
    프로젝트 루트 폴더에서 `Dockerfile` 이라는 파일을 새로 생성하고 다음과 같이 적어줍니다.(DockerFile 안됩니다.)

```
FROM node:16

RUN npm install

CMD ['npm','run','start:dev']
```

위에서 말한 nodejs의 서버 방식 대로 도커파일을 일단 작성해봤습니다.

-   FROM : 이미지 생성시 기반이 되는 이미지 레이어 명시, node의 이미지를 적고, :로 16v를 다운받았습니다.(태그가 없으면 가장 최신 버전을 다운받음.)
    -   https://hub.docker.com/_/node <- 도커 허브 노드 페이지
-   RUN : 도커 이미지가 생성되기 전 수행할 쉘 명령어, `npm install` 을 명시해줌.
-   CMD : 컨테이너가 시작됐을때 실행할 쉘 스크립트, 위에서 설명한 npm run start:dev를 적어줍시다.

=> 이제 도커 파일을 작성했으면 도커 파일을 빌드해서 이미지를 만들어야 합니다.  
빌드 명령어 : `docker build` , -t 옵션으로 이미지의 이름을 붙일 수 있습니다.
`docker build -t nest .` 을 실행해 줍시다.

하지만 이 상태에서 빌드를 하면 npm install 에서 에러를 만나게 되는데요, npm install은 package.json 파일을 보고 인스톨을 해준다고 했지만, 베이스 이미지에 package.json 파일이 없고 저희가 따로 넣어주지 않아서 이고, 뿐만 아니라 저희의 소스코드 또한 따로 설정하지 않아서 안넣었습니다.

-   Dockerfile을 다음과 같이 수정합니다.

```
FROM node:16

COPY . .

RUN npm install

CMD ['npm','run','start:dev']
```

-   COPY : 호스트의 파일 및 디렉토리를 컨테이너로 복사하는 명령어.  
    저희의 파일을 이미지에 복사해서 담게 된다면 이제 위에서 만나는 에러는 발생하지 않습니다.

이후 빌드 후 `docker images`로 방금 `nest` 라는 이름으로 생성한 이미지를 확인할 수 있고 이 이미지를 통해 컨테이너를 실행해보면
`docker run -d nest`...당연히 아직 안됩니다.

<p align="center" >
<img src="https://user-images.githubusercontent.com/28949213/151995962-fd43ac83-42ce-4d50-ac03-d6ead3332903.png" width="600px"  />
</p>

왜냐면 도커 컨테이너 내부에서 3000번 포트로 웹 서버는 돌아가지만, 현재 로컬 호스트에서 컨테이너 내부로 바로 접근할 수 없기 때문입니다.
이 문제를 해결하기 위해서 컨테이너를 실행시킬때 포트번호를 명시해서 로컬 호스트와 컨테이너의 포트를 연결(맵핑)해줘야 합니다.  
`docker run -d -p 3000:3000 nest` 이렇게 하면 위에서 적은 Hello Nest 문구를 localhost:3000 으로 확인하실 수 있습니다.

### 워크 디렉토리 설정.

컨테이너 내부는 어떤 상황일까요?
컨테이너가 실행중이라면 exec, 실행중이지 않다면 run 명령어로 컨테이너 내부 폴더를 볼 수 있습니다/

```
$ docker run -it nest ls
Dockerfile  dev   lib    mnt           package-lock.json  root  server.js  tmp
bin         etc   lib64  node_modules  package.json       run   srv        usr
boot        home  media  opt           proc               sbin  sys        var
```

ls 명령어를 보면 이런 비슷한 상태입니다(실습환경에 따라 다름)  
보면 COPY로 컨테이너 안에 복사한 파일과, 기존 이미지들에 있던 파일들이 섞여있습니다.

-   이렇게 섞이면 어떤 문제가 발생할까요?
-   만약 최상위 폴더 안에 있는 파일 및 폴더의 이름이 COPY 지시자로 복사한 파일 및 폴더의 이름과 같다면 원래 있던 파일을 덮어쓰게 된다.
-   정리정돈되지 않고 복잡함.
-   위 문제를 해결하기 위해 Dockerfile을 수정합시다.

```
FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD ['npm','run','start:dev']
```

-   WORKDIR : cd 명령어와 같다고 볼 수 있으며 현재 컨테이너 안에서 스크립트가 실행할 위치를 지정해줍니다.  
    다시 이미지를 빌드하고 실행해보면

```
$ docker run -it nest ls
Dockerfile  node_modules  package-lock.json  package.json  files..
```

<p align="center" >
<img src="https://user-images.githubusercontent.com/28949213/151997633-386ae6d8-41d5-4545-9c64-16e5d3c90013.png" width="500px"  />
</p>
- 위 사진이 현재 컨테이너 내부의 모습이라고 볼 수 있습니다.

## 소스코드 변경 시에

지금까지 이미지를 계속 빌드하고 컨테이너를 다시 생성하고 실행하는 과정을 반복했는데 현재 2가지 문제점이 있습니다.

1. 만약 소스코드를 변경해도, `COPY . . , RUN npm install` 로 인해 node_modules를 계속 설치함.
2. 도커 이미지를 생성하고 컨테이너를 다시 생성하는 과정이 매우 번거로움.

1번 문제를 해결하기 위해 도커 파일을 수정합니다.

```
FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ['npm','run','start:dev']
```

npm install 전에 package.json 관련 파일을 복사하고, 이후 COPY를 진행하게 되는데요, 이렇게 분리하게 된다면 추가적으로 install을 하지 않고 소스코드 변경만 이루어지는 경우에는 이미지 재 생성시에 기존 캐시를 활용하게 됩니다.

## 도커 볼륨

이미지를 다시 빌드하고 컨테이너를 생성하는 과정을 좀더 단순화하기 위해 도커 볼륨을 사용할 건데요

<p align="center" >
<img src="https://user-images.githubusercontent.com/28949213/151999531-78cc7382-bafd-47bb-8a4e-efd7c98d3c58.png" width="800px"  />
</p>
COPY 지시자는 로컬 호스트의 디렉터리 파일을 도커 컨테이너로 그대로 복사하는 방식입니다.

도커 볼륨은 도커 컨테이너에서 호스트 디렉토리에 있는 파일들을 참조해서 사용하는 방식.  
복사하지않고 참조한다면 소스코드를 변경해도 다시 COPY를 사용해 이미지를 빌드할 필요가 없습니다.

볼륨을 사용하는 방식에는 여러가지가 있는데. 그 중에서 특정 호스트 디렉토리와 바로 연결하기 위해 컨테이너를 실행(run)할때 맵핑해주는 방식입니다.
`docker run -d -p 3000:3000 -v /usr/src/app/node_modules -v $(pwd):/usr/src/app <이미지>`

-v 옵션을 사용해 볼륨을 사용할 수 있으며 첫 -v (호스트 디렉토리):(컨테이너 디렉토리) 로 지정 가능합니다.(pwd활용)  
node_modules는 새로 컨테이너에서 install 하기 때문에 안할 부분을 따로 명시하며 `-v /usr/src/app/node_modules ` 호스트에 없기 때문에 참조하지 말라는 의미입니다.

위처럼 도커 볼륨을 지정한다면, 이미지를 새로 빌드할 필요가 없이 소스코드가 변경하면 컨테이너 재시작으로 변경된 코드를 확인할 수 있습니다.

다음주는 도커 컴포즈에 대해서 다뤄보겠습니다~!
