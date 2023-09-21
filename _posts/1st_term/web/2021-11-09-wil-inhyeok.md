---
layout: post
title: WIL 5주차 - 회원관련
date: 2021-11-08 01:00:00
author: InHyeok-J
description:
categories: ["1st_term"]
tags: ["web"]
---

# GDSC 웹 5주차 기록

> 4주차 스터디와 과제를 진행하고 작성한 글입니다.

> 소스코드는 <a href="https://github.com/InHyeok-J/GDSCTimeBack" target="_blank" rel="noopener">링크</a> 에 가면 자세히 보실 수 있습니다.

---

-   개발(삽질) 순서로 작성됩니다!

## status 코드 미적용?

-   리드님의 스터디 시간때 유저의 회원가입까지 했습니다!  
    **Response** 를 각각 성공과 실패형태로 작성을 했는데요

```java
@Getter
@Setter
@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class FailResponse<T> extends BasicResponse{
    private boolean success = false;
    private T data;
    private String  message;


    public FailResponse( String message,T data) {
        this.data = data;
        this.message = message;
    }
}
```

실패시에 Status Code가 400(BadRequest) 로 기대했지만 포스트맨에서는 200이 찍히는 이슈 발생..
프론트 입장에서 실패시 200이 온다면 API 요청에 대한 예외처리가 복잡해지기 때문에 status를 변경해줘야 합니다...  
왜 안되는지는 모르지만,,, 스프링에서 `ResponseEntity`라는 걸 지원해줘서 모든 응답을 감싸줬습니다.

```java
//회원가입
@PostMapping("")
public ResponseEntity<BasicResponse> signUp(@RequestBody() UserDto.SignUpRequest user){
    String message = userService.signUp(user);
    if(message.equals("ok")){
        return ResponseEntity.ok(new SuccessResponse<>(new EmptyJsonResponse()));
    }else{
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
        .body(new FailResponse<>(message, new EmptyJsonResponse()));
    }
}
```

## 세션 체크

이번에 개발하면서 많이 막혔던 부분.. 중복 로그인을 막거나, 로그인이 꼭 필요한 유저인데 매번 세션에서꺼내서 확인할 수도 없는 부분이고 해서 찾아보던 차에 인터셉터라는걸로 구현을 한다길래 적용했습니다.

```java
//interceptor
@Component
public class AuthInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object Handler)
            throws Exception {
                ...
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
                    @Nullable ModelAndView modelAndView) throws Exception {
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
    }
}
```

인터셉터는 preHandler, postHandler, afterCompletion 3개를 구현하는데 `WebMvcConfigurer`을 구현한 Config 파일에서 Override로 적용할 수 있었습니다.

```java
public class AuthInterceptor implements HandlerInterceptor {
    private static final String[] ExceptionController =
            {"GET/api/user", "POST/api/user"};

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object Handler)
            throws Exception {

        //path가 중복되는 것은 예외처리로 제외함
        String method = request.getMethod();
        String requestUrl = request.getRequestURI();
        if(Arrays.asList(ExceptionController).contains((method + requestUrl))){
            return true;
        }

        //세션이 있는지 체크 없으면 401 리턴
        HttpSession session = request.getSession();
        Object user = session.getAttribute("sessionId");
         if(ObjectUtils.isEmpty(user)){
             FailResponse fail = new FailResponse<>("로그인이 필요합니다",new EmptyJsonResponse());
             ObjectMapper objectMapper = new ObjectMapper();
             String result = objectMapper.writeValueAsString(fail);
             response.setStatus(401);
             response.setContentType("application/json");
             response.setCharacterEncoding("utf-8");
             response.getWriter().write(result);
             return false;
         }else{
             return true;
         }
    }
```

-   실제 구현 코드,.. 실화?
-   세션이 있어야 하는 컨트롤러에 없으면 로그인이 필요하다는 응답과 401을 보내줍니다..  
    컨트롤러에 등록할때는 url로 등록해주기 때문에 같은 url에 다른 메소드가 적용된다면 구분할 수 없어서... 위에서 같은 url에 예외처리를 해줬는데요..

```java
    @Override
    public void addInterceptors(InterceptorRegistry registry){
        registry.addInterceptor(new LogInterceptor())
                .addPathPatterns("/**");
        registry.addInterceptor(new AuthInterceptor())
                .addPathPatterns(AuthUrlList);
    }
```

-   같은 방식으로 로그도 구현해봤습니다.

## 추가 리팩토링 방안

-   이 글을 작성하면서 잠시 검색해보니 커스텀 어노테이션을 만들어서 컨트롤러 단위로 맵핑하는 코드를 발견.. 추후에 리팩토링 하고싶네요
-   Log를 인터셉터에 구현했는데 filter 레이어에 구현하는게 더 맞는것 같네요 이것도 바꿔야 된다!
