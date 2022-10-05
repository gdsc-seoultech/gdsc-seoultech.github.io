---
layout: post
title:  02 Git? Git이 뭐길래!😵‍💫
date:   2022-09-16 00:00:00
author: yexjin
categories: ["2nd_term"]
tags: ["seminar"]
---

9월 26일에는 “Git? Git이 뭐길래!” 라는 주제로 두번째 세미나가 진행되었습니다!

20-30분이라는 짧은 시간 동안 많은 내용이 한번에 머릿속에 들어왔음에도 불구하고, 멤버들은 끝까지 잘 참여해주셨어요 🥺

무슨 내용이었는지 다시 상기시켜보도록 할까요?!
<br><br>
# Agenda

1. Git vs Github
2. Git 명령어와 흐름
3. GDSC 팀 블로그에 코드 기여해보기
4. 번외, 프로필 꾸미기
5. 과제 리마인드 🚀
<br><br>
<br><br>
<br><br>

## 1️⃣ Git vs Github

### Git ?

- 로컬 분산 버전 관리 시스템 (Local Distributed Version Control System)
- 버전관리를 위한 소프트웨어

### Github

- 클라우드형 Git 호스팅 지원 웹 서비스
- git이 원격 전송된 프로젝트들이 저장되는 공간을 제공하는 웹 서비스

#### 📌 추가적으로 알고가자, Distributed VCS!

![git1.png](https://user-images.githubusercontent.com/49095587/193058274-9f532f58-c60b-4a99-a0f2-b9f85cd12cd4.png)

- 분산 버전 관리 시스템
- 서버 뿐만 아니라, 개발자들이 프로젝트 소스코드의 history 내역들을 모두 확인할 수 있어서, 서버가 다운되어도 개발자들간의 코드공유를 통해 버전관리가 가능
- 이 시스템을 Git, 서버역할을 클라우드형으로 Github이 제공해주는 것!
<br><br>
<br><br>

## 2️⃣ Git 명령어와 흐름

![Untitled](https://user-images.githubusercontent.com/49095587/193058456-080c8ec1-184b-4fcd-b93d-a6b8cf4b2243.png)

1. Working Directory : 실제 코드를 작성하고 수정하는 공간
2. Staging Area : `git add` 명령어를 통해 수정된 내역이 올라가는 공간
3. Local Repository : `git commit` 명령어를 통해 자신의 로컬 레포에 등록!
4. Remote Repository : git repository와 같다고 보면 됨, `git push` 명령어를 통해 변경사항이 remote repository에 등록!

#### Git 명령어 코드

```bash
$ git add . <or> git add [modified file]				
$ git commit -m “커밋메시지”						// git commit -m “first commit”
$ git push [원격저장소] [현재 작업하고 있는 branch]		// git push origin main
```

<br><br>
<br><br>


## 3️⃣ GDSC 팀블로그에 코드 기여해보기

#### 📌 Fork

- 다른 사람의 Github repository 에서 어떤 부분을 수정, 추가 하고 싶을 때 해당 Repository를 내 Github repository로 그대로 복제하는 기능
- 흔히, 포크를 뜬다고 표현

#### 📌 PR (Pull & Request)

- 코드를 변경하고 변경사항에 대한 request를 보내 merge가 되기 전, 코드를 리뷰하고 확인하는 과정입니다.

#### 📌 Branch

- 여러명의 개발자들이 각자 코드를 수정하는 작업공간
- 이전 버전(main) 혹은 다른 브랜치 간의 코드를 비교 + 통합하여 새로운 버전을 만들어냅니다.
<br><br>

#### 이제 진짜 GDSC 팀블로그 수정을 위해 Fork해서 PR을 날려볼까요?!

순서대로 따라하면 끝! 

```bash
$ git clone [https://github.com/yexjin/…] 		// 내 저장소에 생성된 repository clone		
$ git remote add [원본 저장소명] [gdsc 기존 레포 url]		// 원격 저장소 remote
	// ex) git remote add upstream https://github.com/gdsc-seoultech…

$ git branch [branch_name]					// 브랜치 만들기
$ git checkout [branch_name]				// 해당 브랜치로 이동	

// ~~~ 코드 수정 ~~~
```

![Untitled](https://user-images.githubusercontent.com/49095587/193058565-60c2ec75-14aa-4840-9799-213523f947f5.png)

```bash
// ~~~ 코드 수정 ~~~ 

$ git add .
$ git commit -m “add yejin profile”
$ git push origin develop					//origin (내 저장소명), develop(작업 브랜치명)
// 포크된 내 브랜치에만 반영이 됨
// 그러면 원본 레포로 PR 날리기가 필요!
```

![Untitled](https://user-images.githubusercontent.com/49095587/193058706-7f977307-d014-4c46-8ebb-31d50ee43713.png)

![Untitled](https://user-images.githubusercontent.com/49095587/193058799-acd1266b-7387-4ebd-b2b0-932fba66edb2.png)

이후,, merge가 완료됐다면,,

#### 코드 동기화 및 Branch 삭제가 필요!

```bash
$ git pull [원격저장소명] [원격저장소의 기본브랜치명]		// 동기화를 위한 pull 코드
// git pull upstream main			
$ git checkout [기본 브랜치명]						// 브랜치 이동			
// git checkout main
$ git branch -D [작업한 브랜치명]					// 브랜치 삭제
// git branch -D develop
// -> develop 브랜치 삭제
```

→ 브랜치 삭제는 삭제하려는 브랜치에서 벗어나야만 삭제가 됩니다!

😵‍💫 어~ 지럽죠?! 

한번 더 흐름을 잡고 갈게요!

![Untitled](https://user-images.githubusercontent.com/49095587/193058876-327e374c-9715-40be-a508-d56e38606671.png)
<br><br>
<br><br>

## 4️⃣ 번외, Github 프로필 꾸미기

마지막으로 아주 빠~르게 넘어갔던 프로필 꾸미기!

![Untitled](https://user-images.githubusercontent.com/49095587/193058958-6c66069c-49fc-4a8d-aa71-2f5e7b7a6113.png)

우리 member 분들도 이렇게 므찐 ~~슬비, 하은, 건주님~~ 프로필처럼 자신만의 깃헙 프로필을 꾸미고 싶지 않나요?

어렵지 않아요!

![Untitled](https://user-images.githubusercontent.com/49095587/193059052-2bcca2a6-5db6-41c0-9062-186c2e9fba51.png)

기존 레포 만들듯 자신의 깃헙 닉네임으로 레포를 파고

Public, Add a README file 체크!

![Untitled](https://user-images.githubusercontent.com/49095587/193059140-222ca01c-df21-46a5-97bb-854a3834d3a0.png)

다음 위에 빨간색으로 체크된 수정 버튼을 클릭하여 readme 마크다운 파일을 작성하시면 됩니다!
<br><br>

#### 📌 Markdown 파일

- 일반 텍스트 기반의 경량 마크업 언어
- HTML등 서식문자로 쉽게 변환 가능
- 응용 소프트웨어와 함께 배포되는 README 파일이나 온라인 게시물 등에 많이 사용된다.

![Untitled](https://user-images.githubusercontent.com/49095587/193059219-3ef0f907-d641-4813-a572-c3ecd7462254.png)

제 리드미.. 파일.. ㅎ
<br><br>

#### 🌱 깃헙을 꾸밀 수 있는 라이브러리

- [Header 꾸미기](https://github.com/kyechan99/capsule-render#rotate)
- [깃허브 스택 테마](https://github.com/anuraghazra/github-readme-stats)
- [배지](https://shields.io/)
- [아이콘](https://simpleicons.org/)
- 파라미터 형태 : **https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>**
- logo, logoColor, labelColor등의 쿼리 추가 가능
- [백준 티어](https://solved.ac/백준아이디/)
<br><br>
<br><br>

## 5️⃣ 과제 리마인드 🚀

자! 이제 세미나 내용은 마칩니당~!~! 저 이때 발표할때 숨차 죽는 줄 알았어요.. 폐활량 딸려가꼬 목소리 막 떨리고 그랬는데.. 다들 눈치채셨나요?ㅋㅎㅎ 

그래서 여러분들은 무슨 코드 기여를 할것이냐 하면~ 아~~~주 간단합니다 

**지디엣씨 멤버가 되기 위한 필 수 관 문**

![Untitled](https://user-images.githubusercontent.com/49095587/193059318-8afc572f-6136-4c0e-93b4-84a148cb265c.png)

이렇게 LEAD, CORE 멤버들은 있는데 아직 일반 멤버분들은 없으시죵.. 언능 들어오세요!!

[https://github.com/gdsc-seoultech/gdsc-seoultech.github.io](https://github.com/gdsc-seoultech/gdsc-seoultech.github.io) 로 이동해서 직접 **Fork**해보고

**PR** 날려보기!!! (merge X!! PR만!!)

- **_data/members_2.yml** 에서 정보수정!
- **“role: member”**
- 다음주 커리큘럼 전까지 각 파트 코어에게 확인받아주세요 :)

다들 세미나 과제! 각 커리 과제! 화이팅입니다~!~!

제 부족한… 설명 듣느라 수고 많으셨습니당 낄낄…..
<br><br>
<br><br>
