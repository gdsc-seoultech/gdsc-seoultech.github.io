---
layout: post
title: WIL 5주차 - 스프링
date: 2021-11-08 23:00:00
author: shinyubin989
description: 5주차 spring WIL입니다.
categories: ["web"]
---



## Mapping

### @RequestMapping
@RequestMapping은 URL을 Controller의 Method와 매핑할 때 class 레벨에서 사용합니다...
```java
@RequestMapping("/api/user")
```
client가 URL로 요청을 전송하고, 요청 URL을 어떤 method가 처리할지를 결정합니다...

### @GetMapping && @PostMapping && @DeleteMapping && @PutMapping
get || Post || Delete || Put 요청 방식으로 통신하고자 할때 사용하는데, 
```java
@RequestMapping(method=RequestMethod.GET||POST||DELETE||PUT...)
```
와 같은 효과를 낸다. (method 레벨에서 사용)




## UnsatisfiedDependencyException
일부 Bean 또는 property dependency가 충족되지 않으면 발생하는 에러... 


저는 어노테이션을 빼먹어서 이 에러가 떴네요.. 


별거아니지만 다른 경우에도 많이 뜨는 에러길래...


이 에러가 왜 발생하는지 설명해준 영어 사이트가 있는데 괜찮길래 번역해봅니다...   
예를 들어 다음 코드들이 하나의 패키지 안에 존재할때 spring boot 어플리케이션을 실행하면 모든 것이 순차롭게 작동합니다.
```java
public interface InventoryRepository {
}
```
```java
@Repository
public class ShoeRepository implements InventoryRepository {
}
```
```java
@Service
public class PurchaseDeptService {
    public PurchaseDeptService(InventoryRepository repository) {
        this.repository = repository;
    }
}
```
```java
@SpringBootApplication
public class SpringDependenciesExampleApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringDependenciesExampleApplication.class, args);
    }
}
```
하지만 구성 단계를 건너뛰면 UnsatisfiedDependencyException 에러가 발생하는데요, 예를들어 component 주석을 누락하면
```java
public class ShoeRepository implements InventoryRepository{

}
```
UnsatisfiedDependencyException: Error creating bean with name ‘purchaseDeptService': Unsatisfied dependency expressed through constructor parameter 0 라는 오류 메시지가 뜨게 됩니다.      


spring은 ShoeRepository Bean을 연결하고 이를 application context에 추가하도록 지시받지 못했기 때문에 이를 inject할 수 없고, 따라서 예외가 발생하게 된 것입니다.


또 한가지 예로, non-unique dependency가 있습니다. 다음과 같이 DressRepository를 추가했다고 합시다.
```java
@Repository
public class DressRepository implements InventoryRepository {
}
```
이 때 app을 실행시키면 또 UnsatisfiedDependencyException 에러가 뜨게됩니다. 그러나 이번에는 상황이 다릅니다. 종속성을 만족하는 Bean이 하나를 초과할 때 종속성을 해결하지 못합니다.


다음과 같은 문제를 해결하기 위해 @Qualifier를 추가하여 저장소를 구분할 수 있습니다.
```java
@Qualifier("shoes")
@Repository
public class ShoeRepository implements InventoryRepository {
}
```
```java
@Qualifier("dresses")
@Repository
public class DressRepository implements InventoryRepository {
}
```
또한 PurchaseDeptService Constructor dependency에 한정자를 추가합니다.
```java
public PurchaseDeptService(@Qualifier("dresses") InventoryRepository repository) {
    this.repository = repository;
}
```


## session
###### session에 저장된 데이터 갖고오기
 -> session.getAttribute("저장한 변수명");
###### session에 데이터 저장하기
 -> session.setAttribute("저장하고자 하는 변수명", 저장변수값);
###### session 초기화하기
 -> session.invalidate();



## 느낀점..
Springboot구조.. 처음에 봤을땐 저게뭐시당가 싶었지만 직접 만들어보니 각자 뭔 역할을 맡았는지 이해가됩니다... 


그리고 주의할점.. 어노테이션 빼먹지 않기...... 이상한데서 시간 안날리기.. 


그리고 스프링 공부를 굉장히 많이 해야겠다는 생각...


500번 에러가 많이뜬다.......


OTL






