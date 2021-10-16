---
layout: post
title:  211015 Spring WIL 신유빈
date: 2021-10-14 23:59:00
author: shinyubin989
description: 21년 10월 15일에 작성한 web backend spring WIL입니다.
categories: ["web"]
---


### 211015 Backend (Spring) 과제를 진행하며 배운 것 정리
***
## nullable=false
```java
@Id
@Column(nullable = false)
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
```
위 코드 중 
`
@Column(nullable = false)
`
에서 nullable은 null값을 허용하는 지를 명확하게 보여주기 위해 사용합니다.  
이는 @Column의 속성 중 하나로, 기본값은 true입니다.
***
## @GeneratedValue
유저 아이디로 사용하는 기본키는 서로 다른 키 값을 가져야 하므로, 다음과 같이 Auto Increment를 적용시킵니다.
`
@GeneratedValue(strategy = GenerationType.IDENTITY)
`
***
## @Id
@Id는 해당 property가 테이블의 primary key 역할을 한다는 것을 나타냅니다.  
***
## 네이밍규칙
1. db, json: snake_case 
2. java 변수: camelCase 
3. java class명: PascalCase 
4. 폴더명: camelCase
***
## LocalDateTime 
`
private LocalDateTime createdAt = LocalDateTime.now(); // now시각으로 default값
`
LocalDateTime.now()를 이용해 createdAt이 현재 시각을 default값으로 갖게 합니다.
***
## @ManyToOne
###### Message.java
```java
@ManyToOne(targetEntity = User.class)
private User fromUser;

@ManyToOne(targetEntity = User.class)
private User toUser;
```
ManyToOne은 N:1관계로, 이는 사원과 부서를 예로 들 수 있습니다. 유재석, 박명수, 정준하, 정형돈, 노홍철, 하하, 길성준 사원들이 무한상사 영업부에 속한 것 처럼요! 
ManyToOne은 키가 있는 곳에 참조를 걸고 연관관계 매핑을 하게 됩니다.

#### 번외로 @OneToMany는?
찾아본 결과, 일대다 관계는 권장되지 않는다고 합니다.  
일대다 관계는 일대다(1:N)에서 일(1)이 연관관계의 주인인데, 항상 다(N) 쪽에 외래 키가 있기때문에  
무한상사를 예로 들면 영업부를 건드렸을때 사원들의 테이블에도 영향이 가는 것이지요.  
그래서 OneToMany를 사용하면 이해, 추적이 조금 어려워진다고 합니다.
***
## @Autowired 
@Autowired는 생성되어있는 하나의 객체 (bean)을 가져다 쓸 때 사용합니다.  
이때 필요한 의존 객체의 “타입"에 해당하는 빈을 찾아 주입하게 되는데요, 다음과 같이
- 생성자
- 세터(setter)
- 필드
3가지의 경우에 Autowired를 사용할 수 있습니다. 
***
## 제약 조건 추가(length)
```java
@Column(nullable = false, length = 10)
private String name;
```
회원 이름, 휴대전화번호와 같이 길이의 제한이 필요할 때 사용합니다.  
위 코드는 name이 10글자를 초과하지 못하게 합니다.  
또한 String 타입에만 사용할 수 있습니다.
***
## columnDefinition
`
@Column(columnDefinition = "varchar(100) default 'EMPTY'")
`
columnDefinition을 사용해 직접 컬럼 정보를 작성할 수 있습니다.
***
## 느낀점
세미나 날에는 정신이없어가지고 코드가 눈에서 튕겨나갔는데  
피피티 다시 복습하고 과제해보니 점점 이해가되고있어요!!!  
백엔드 화이팅~!~!  
제 좌우명이 채찍질해주네요 ㅎ.. 