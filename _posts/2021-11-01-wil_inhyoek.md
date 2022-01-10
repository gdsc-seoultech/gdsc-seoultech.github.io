---
layout: post
title: WIL 4주차 - 스프링...
date: 2021-11-01 01:00:00
author: InHyeok-J
description:
categories: ["web"]
---

# GDSC 웹 4주차 기록

> 4주차 스터디와 과제를 진행하고 작성한 글입니다.

> 소스코드는 <a href="https://github.com/InHyeok-J/GDSCTimeBack" target="_blank" rel="noopener">링크</a> 에 가면 자세히 보실 수 있습니다.

-   리더님의 스프링 스터디를 듣고 특히 테스트 할때 자동 롤백을 지원해주는 기가막힌 기능에 스프링에 흥미를 느끼고
    시작했으나......

## 스프링 입문 강의 수강

시험 끝나고 김영한님의 스프링 입문 강의 들었습니다.

-   Gradle : 라이브러리를 가져오고 빌드 라이프 사이클을 관리해 주는 툴, build.gradle에서 의존관계 관리, 마치 node의 package.json같은 친구.
-   자바에서는 톰켓 내장 웹서버 탑재돼서, 서버를 시작하면 톰켓이 알아서 웹서버 시작해줌.
-   `@Controller` , `@Service` , `@Repository` 등 특정 어노테이션을 붙이면 스프링 컨테이너에 빈이 생성되고 관리됨. -> 컴포넌트 스캔 방식
-   자바 코드로 직접 등록하는 방식도 있는데 `@Configuration`, `@Bean` 으로 직접 등록가능.
-   위의 스프링 컨테이너에게 객체 생성을 넘기는 방식이 IOC, 하나의 객체로 사용 -> 싱글톤

### 기가막힌 스프링 데이터 JPA

강의에서 JDBC 부터 시작해서 스프링 데이터 JPA 까지 직접 알려주면서 코딩함.
스프링 JPA는 다음과 같이 구현함.

```java
public interface SpringDataJpa~~Repository extends JpaRepository<Entity,indexType> {
}
```

-   놀랍게도 위의 구현이 기본적인 끝.
-   스프링JPA가 스프링 빈으로 자동으로 등록 해준다.
-   또한 공통 인터페이스는 자동으로 만들어주는데 기본 crud 기능이 내장되어 있음
-   `findAll`, `findById`, `save` ...etc
-   find 시 id만 공통 인터페이스이기 때문에 구현이 되어있고 그 외. ex) findByName 같은 것은 직접 등륵해줘야 하는데
-   만약 `findByName` 이라고 정의하면 그 외의 추가적인 코드 없이, Jpa가 내부적으로 `Select m from Table m where m.name =? ` 라는 SQL로 처리해준다.

## 과제하면서 헷갈렸던 것

## 객체의 관계 맵핑

-   테이블간의 관계는 FK로 이루어진 양방향 관계, 하지만 객체는 필드를 추가해서 참조하기 때문에 테이블같은 자동 양방향이 아니게 된다.
-   객체에서도 양방향을 구현할 수있으나 사실 이건 각 객체마다 서로가 서로를 참조하는 단방향을 두번 쓴 방법임.
-   JPA에서 이런 양방향 참조를 가질지, 단방향 참조를 가질지 결정해야 한다
-   Nodejs 진영의 ORM을 사용할때는 기본적으로 양방향 참조로 진행하는데 JPA에서는 이렇지 않아서 좀 당황했음.
-   JPA에서는 단방향 참조를 권장하는데 성능 이슈가 줄어들고 양방향 참조시 고려해야 할 사항(관계 주인 지정, 추가적인 코드 작성)이 있기 때문 (?)

## Test 코드 작성

-   테스트 코드를 작성할때 이 테스트 코드가 DB에 의존적이지 않아야 한다고 생각했음. 예를들어 `findById(1)` 이라고 했을때, 실제 DB에 id가 1이 없는 경우 테스트코드는 성립되지 않기 때문에
-   그래서 UserRepository를 테스트할때 아래와 같이 `@BeforeEach()`로 유저를 생성해 준후 테스트 코드를 작성해줬음.

```java
 @BeforeEach()
    private void beforeSaveUser(){
        newUser = new User();
        this.newUser.setUserId("test1");
        this.newUser.setPassword("qwer1234");
        this.newUser.setEmail("ss112d86@gmail.com");
        this.newUser.setHp("010-2642-2713");
        this.newUser.setName("홍길동");
        this.newUser.setNickname("cocoding");
        this.newUser.setMajor("computerScience");

        this.userRepository.save(newUser);
    }
```

-   `@BeforeEach()`는 각 테스트가 실행 전에 동작시키는 어노테이션.
-   이후 find를 할때 코드

```java
@Test
public void findTest(){
    Optional<User> findUser = userRepository.findById(this.newUser.getId());
       findUser.ifPresent(user->{
             Assertions.assertThat( user.getName()).isEqualTo("홍길동");
            System.out.println("findUserName: "+ user.getName());
        });
 }
```

-   `@Transactional` 어노테이션이 테스트 클래스 상단에 있기 떄문에 커밋이 안되고 롤백됨.
-   다만 위의 방식은 Board, BoardCategory로 가면 갈수록.. crud의 유닛 테스트 영역을 넘어선다고 생각이 들어서 User 이후에는 단순 CRUD가 잘 동작하는지만 검사함.
-   DB에 의존하지 않으려면 관계된 객체들을 미리 만들어줘야 하는데, 검사하는 대상이 이미 잘 구현된 Jpa의 crud기 떄문에 불필요한 작업이라고 생각이 들어서 위의 방식을 사용하지는 않았는데 추후 통합 테스트때는 적용해야할 것 같다는 생각이 듭니다.

### 추가적으로 공부하고싶은것,(공부해야할 것)

-   스프링의 철학?개념? node와 코딩 패러다임이 너무 다른것 같다.
-   java 기본 문법
-   jpa 관련 설계 및 응용 기술들....
