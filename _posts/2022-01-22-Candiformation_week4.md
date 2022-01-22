---
layout: post
title: CandiFormation 4주차 보고서
date: 2022-01-22 23:59:59
author: suee97
categories: ["candiformation"]
---

### Candiformation 4주차 보고서
안녕하세요. 4주차 Candiformation 포스팅을 맡은 오승언입니다.  
기존의 계획은 주중회의를 통해 와이어프레임을 완성시키고 디자이너분께 전달하는 것이었으나 디자이너분의 개인적인 사정으로 같이 하지 못하게 되었습니다.  
또한, 대선이 얼마 남지 않은 시점에서 디테일한 부분에 신경을 쓰는 것보다 주요 기능을 넣고 빠르게 배포하는 것이 낫다고 생각했습니다.  
따라서 이번 주는 **언제까지 어떤 기능을 포함해서 배포할지**에 대해서 이야기를 나눴습니다.  

## 1. 진행상황
성률님, 유빈님은 API를 설계하는 데에 집중을 했습니다.  
<img src="https://images.velog.io/images/suee97/post/07d0b6f6-eaa9-44da-a4c3-53efad609d40/4-1.PNG" width=300/>  
<img src="https://images.velog.io/images/suee97/post/15c23a52-d78b-48c1-878d-13251b4a423e/4-4.PNG" width=300/>  
저와 용수님은 바텀 바를 통한 네비게이션과 스플래쉬 화면을 만들었습니다.  
<img src="https://images.velog.io/images/suee97/post/31c0dd7b-fa5a-4b9c-8338-005a23ac2071/4-2.png" width=200/>  
<img src="https://images.velog.io/images/suee97/post/3014a595-6df8-4721-b853-047b37ac38d6/4-3.png" width=200/>    

## 2. 해야할 것
- 마감
대선이 3월 9일이라서 그 전까지는 앱이 배포까지 되어야 피드백을 하기 수월합니다. 따라서 마감은 개강 날인 **2월21일** 로 잡았고 그 전에 주요기능을 넣어서 완성시키기로 했습니다.  
- 주요 기능
가장 중요한 기능은 뉴스 크롤링과 로그인 기능입니다. 이번 주는 백엔드, 안드로이드 모두 이 기능 위주로 준비를 하기로 했습니다.
- 백엔드
뉴스 기사를 크롤링해서 DB에 저장해보기  
user api(유저) (휴대폰 인증은 나중에,,)  
article api(뉴스 기사)  
- 안드로이드
로그인/회원가입 페이지 구현  
뉴스 기사 화면 UI
가능하면 백엔드와 연동해서 DB 가져오기
  
이상으로 Candiformation 4주차 포스팅을 마치겠습니다. 감사합니다. 