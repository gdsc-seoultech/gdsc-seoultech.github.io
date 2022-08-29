---
layout: post
title: CandiFormation 8주차 보고서
date: 2022-02-17
author: shinyubin989
categories: ["1st_term"]
tags: ["solution_challenge", "candiformation"]
---

# CandiFormation 8번째 이야기
안녕하세요 이번 캔디포메이션의 글을 작성하게 된 신유빈입니다.   
벌써 8주차라니 시간이 참 빠르네요. 다들 수강신청은 잘 하셨나요?   
저는 대면인 수업이 꽤 많네요 ..   
허허 아무튼 글을 작성하도록 하겠습니다.

# 뭘 했을까요?
우선 저희는 저번 화요일 7시 반 세션전에 좀더 일찍 만나서 같이 야무지게 코딩 했습니다~   
<img height="200" alt="KakaoTalk_Photo_2022-02-17-13-37-25 001" src="https://user-images.githubusercontent.com/69676101/154406353-2e1ac991-707d-4063-8bcb-4e9b4dd5140c.jpeg">
<img height="200" alt="KakaoTalk_Photo_2022-02-17-13-37-25 002" src="https://user-images.githubusercontent.com/69676101/154406576-68f8fc0e-6457-44b0-8d27-74dcd93f8924.jpeg">

중간에 피자스쿨 시켜서 피자도 먹고~ 코딩도 기깔나게 했습니다.   
확실히 다같이 모여서 하니 혼자하는것보다 좋았습니다!   
그래서 저희는 지금까지 뭘 완성했냐면요~~~

### 안드로이드

- 후보자 화면   
<img width="200" alt="Untitled (1)" src="https://user-images.githubusercontent.com/69676101/154407932-bbda625b-e222-4727-a24e-67069046db8a.png">


- 설정화면(내정보화면)   
<img width="200" alt="Untitled (2)" src="https://user-images.githubusercontent.com/69676101/154407930-b7fc09d0-2e3c-4dad-b615-967bf3304d3c.png">


- 안에서 로그인 / 회원가입 둘 다 가능   
<img width="200" alt="Untitled (3)" src="https://user-images.githubusercontent.com/69676101/154407928-4998cc9e-d0f2-42fb-ba80-85094d3e861b.png">


- 앱정보(버전관리) 화면   
<img width="200" alt="Untitled (4)" src="https://user-images.githubusercontent.com/69676101/154407922-674e7ab8-86fe-4a40-bfba-efd52419c1ff.png">


- 뉴스기사 화면(좋아요 구현 완성)   
<img width="200" alt="Untitled (5)" src="https://user-images.githubusercontent.com/69676101/154407918-ba6c8390-fbaf-489d-9673-6b7fecabc6fe.png">


- 뉴스 화면도 완성   
<img width="200" alt="Untitled (6)" src="https://user-images.githubusercontent.com/69676101/154407910-0011e3e3-693d-4ab9-8895-162631a5e8ce.png">


### 백엔드

<img width="300" alt="스크린샷 2022-02-17 오후 2 03 38" src="https://user-images.githubusercontent.com/69676101/154409251-2431709e-ad5e-4775-b531-936768957891.png">   
<img width="300" alt="스크린샷 2022-02-17 오후 2 04 12" src="https://user-images.githubusercontent.com/69676101/154409268-874605e4-1432-4b3b-beaa-a3ac88307d15.png">
<img width="300" alt="스크린샷 2022-02-17 오후 2 05 24" src="https://user-images.githubusercontent.com/69676101/154409269-11aca147-cdfa-4a49-bfde-73f3fbae78af.png">

깃허브 이슈는 처음 사용해보는데, 친숙해지면 플젝할때 더 용이하게 쓸 수 있을 것 같습니다~~


# 앞으로 할 것들
### 안드로이드

- Information 화면을 어떻게 구성할까 → 머리 속에 있음
- 후보화면에서 카드로 띄워서 후보자 정보 정적 데이터 삽입
- 홈 화면 → 주표 투표소 정보가 
  1. text로 가져와서 
  2. Map API 제공할 때까지 기다림 
  3. 홈 화면에서 주변 투표소를 빼고 주요 대선 후보 4명을 넣고 토론 날짜를 띄워주자 
  4. 정보가 있는데 어디 시, 어디 구가 이렇게 나오는데 알아서 변환을 해서 map에 띄우기
- 뉴스 디자인 개선

### 백엔드

- 뉴스에서 신문사만 뽑는 거(일단 백엔드가)
- 이메일 인증
- OAuth를 이용한 구글로그인, 카카오 로그인등
- 로그아웃(임시로 구현은 되어있으나 → 다른 방법??)
