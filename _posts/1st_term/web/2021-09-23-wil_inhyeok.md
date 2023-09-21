---
layout: post
title: WIL 1주차
date: 2021-09-22 21:00:00
author: InHyeok-J
description:
categories: ["1st_term"]
tags: ["web"]
---

# GDSC 웹 1주차 기록

> 1주차 스터디와 과제를 진행하고 작성한 글입니다.

> 소스코드는 <a href="https://github.com/InHyeok-J/GDSCTimeFront" target="_blank" rel="noopener">링크</a> 에 가면 자세히 보실 수 있습니다.

# 스터디 진행

- 1주차에는 클론할 서비스인 **`에브리타임`**의 기능 분석과 프로젝트 구조를 어떻게 짤지 배우고 `BottomNavigation` 컴포넌트를 직접 만들어봤습니다.

## 1. 에브리타임 기능 분석.

### 사용자 인증

- 회원가입
- 로그인
- 로그아웃
- 비밀번호 변경
- 회원 탈퇴

### 게시글

- 게시글 작성/수정/삭제
- 게시글 스크랩
- 좋아요(공감)
- 핫 게시글 구현
- 댓글/답글 작성
- 게시글 검색
- 게시판 판

### 쪽지뽀내기

- 쪽지보내기

## 2. 아토믹 디자인 구현

> **`아토믹 디자인`** ?  
> 아토믹 디자인은 뷰를 Atoms(원자) -> Molecules(분자) -> Organisms(유기체) -> Templates -> Pages 순으로 작은 것들을 만들고, 결합해 좀 더 큰 단위의 뷰를 만들어 나가는 디자인 시스템입니다.

<img width="950" alt="스크린샷 2021-09-23 오후 8 46 32" src="https://user-images.githubusercontent.com/28949213/134501541-46b4e7de-398f-4c0a-970d-52e3968dc8ba.png">

- 실제 이렇게 5단계로 구분해 버리면 복잡하기 때문에 components(atom), layout(Organisms), Pages로 분리해서 작업을 진행합니다. 프로젝트 구조는 다음과 같습니다.

```
- src
    - assets
    - components    -> 공통으로 쓰이는 작은 요소(또는 따로 분리해서 쓰고 싶은 것들 )
    - hooks         -> coustom hooks or uilts 폴더
    - layout        -> components가 모여서 이루어진 요소들 또는 큰 덩어리 (ex 네비게이션)
    - pages         -> 말 그대로 페이지
        - Main
            - components -> Main 페이지에서만 사용되는 특정 컴포넌트들
            - index.jsx   -> 페이지의 index 파일
        - Board
            - components
            - index.jsx
    - App.jsx   -> 클라이언트 라우팅
    - index.css -> 글로벌 스타일
    - index.js  -> App('root')선택, 프로젝트 시작지점
```

## 3. 프로젝트 시작전 약속 사항

- 화면 작업을 시작할때 공통의 약속을 하고 시작해야 한다.
- css
  - `styled-components`를 활용한 css작업
  - `-`하이픈을 사용한 class네임을 케밥케이스로 사용.
- js
  - 함수명 변수명은 카멜 케이스
  - 폴더명은 파스칼 케이스
  - 페이지 상단은 index.js
  - 비슷한 이름은 접두사를 통한 분리.

# 1주차 과제

- 에브리타임의 메인 페이지와 메시지 목록 페이지 구현하기 (추석 다음주)

## 결과

![숙제](https://user-images.githubusercontent.com/28949213/134502438-2b925f9f-ad09-4e17-9522-29ae5444ba59.gif)

## 상세 내용

- 보더가 적용된 카드는 컴포넌트를 만들어서 재사용 했습니다(size를 props로 받으려고..)
  - globla class를 적용시키는것이 좋아보여서 리팩토링 예정입니다(index.css)
- 배너 페이지는 모바일 페이지를 클론하기에 슬라이드 방식을 좌우 < > 버튼을 눌러서 움직이는 것이 아닌 마우스 클릭 후 좌우로 이동하는걸 감지해서 움직이게 구현했습니다(모바일 터치처럼 작동하길 기대..)
- **`즐겨찾는 게시판 + 더보기>`** 이렇게 한줄을 컴포넌트`components/ShowMore.jsx`로 만들어서 더보기가 필요한 친구는 props로 값을 `more={true}`로 전달해서 더보기를 렌더링해주고 더보기가 없는 칸은 false로 더보기 없이 렌더링해줍니다.
- **`즐겨찾는 게시판`**의 한줄을 `layout/BoardBody`
- **`실시간 인기 글`**의 **`익명+날짜`**컴포넌트를 `layout/PreviewProfile`
- 그 밑에 내용과 카테고리, 좋아요 댓글 갯수를 `layout/PreviewBoard`
- **`HOT 게시글`** 의 내용을 `layout/PreviewOnly`로 만들었습니다.

## 추가 구현 내용

- 효율적인 개발을 위해 `eslint`랑 `prettier`를 적용시켰습니다.
- `prettier`가 추천해주는 형식으로 검사해줍니다.
- 자세한 내용은 github에서ㅎㅎ

## 스터디 후기

- 예전에 아토믹 디자인을 적용해본적이 있는데 5단계로 강제로 분리하느라 고생을 했었는데 이렇게 적절하게 타협해서 개발하는게 더욱 효율적인 것 같습니다.
- 코어님의 열정이 느껴집니다..
