---
layout: post
title: "네트워크 스터디 2주차 보고"
date: 2023-03-21 23:59:59 +0900
author: higeuni
description: Network Study
categories: ["2nd_term"]
tags: ["스터디"]
---

# 네트워크 스터디 2주차 보고

안녕하세요!

다들 솔루션 챌린지 마무리하느라 바쁘시죠 ㅠㅠ 조금만 더 고생해서 좋은 결과 만들어봐요!

이번 주는 **Chapter 01. 웹 브라우저가 메시지를 만든다 - 웹 브라우저의 내부 탐험**에 대해서 알아보았습니다.

세부 내용이 다음과 같이 있었고, 솔루션 챌린지가 끝나면 많이많이씩 공부해나가려고 합니다.

Story 01. HTTP 리퀘스트 메시지를 작성한다

① 탐험 여행은 URL 입력부터 시작한다

② 브라우저는 먼저 URL을 해독한다

③ 파일명을 생략한 경우

④ HTTP의 기본 개념

⑤ HTTP 리퀘스트 메시지를 만든다

⑥ 리퀘스트 메시지를 보내면 응답이 되돌아온다

가볍게 살펴볼까요?

---

## 브라우저 동작원리

### URL을 입력하면 어떻게 될까요?

1. 브라우저가 URL을 해석합니다.
2. HSTS 목록을 조회해서 HTTPS인지, HTTP인지 확인합니다.
3. URL을 IP로 변환합니다.
4. 라우터를 통해 해당 서버의 게이트웨이로 이동하고
5. IP주소를 MAC주소로 ARP를 이용해서 변환합니다.
6. 대상 서버와 TCP 소켓 연결을 확립합니다.
7. HTTP 프로토콜로 요청, 응답
8. 브라우저가 파싱

### 브라우저가 파싱합니다.

![Untitled](https://cdn.discordapp.com/attachments/909308714161410071/1087752036625420388/Untitled.png)

## HTTP

### HTTP란?

Hyper Text Transfer Protocol의 약자입니다.

### Request, Response

요청, 응답이라는 두가지 특징을 가지고 있습니다.

**Request**

Start Line, Headers, Body를 가지고 있습니다.

**Response**

Status Line, Headers, Body를 가지고 있습니다.

### Stateless

이전의 통신 상태에 대해 알지 못한다.

### HTTP Method

GET, POST, DELETE 등이 있습니다.
