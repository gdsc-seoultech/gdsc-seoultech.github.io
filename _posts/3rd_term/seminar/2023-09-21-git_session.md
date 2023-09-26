---
layout: post
title:  02 창하가 알려주는 Git/GitHub 🔥
date:   2023-09-21 00:00:00
author: changha
categories: ["3rd_term"]
tags: ["seminar"]
---
GDSC의 두 번째 세션에서는 Git과 GitHub의 개념 대해 알아보고 GDSC 팀블로그에 자신의 프로필을 작성하여 배운 내용을 적용해보는 시간을 가졌습니다! 

### 버전관리를 사용하는 이유

Git은 분산형 버전관리 시스템(DVCS)으로 우리가 주목해야 할 단어는 **버전관리**입니다. 과제로 레포트를 작성하는 등 문서를 작성하면서 `문서_1`. `문서_2`와 같이 번호나 자신만의 기호를 붙여 파일을 관리해본 경험이 있을겁니다. 간단한 문서를 작성한다면 이는 물론 좋은 방법이 될 수 있지만 우리는 개발을 진행하면서 여러 파일로 이루어진 소스코드를 관리하고 심지어 다른 사람과의 협업까지 진행하다 보면 파일의 변경사항을 완벽히 추적하여 관리하는 건 사실상 불가능합니다. 

물론 Git과 같은 도구를 사용해서 버전관리를 하는 것이 귀찮고 처음에는 어느 정도 진입장벽이 있는 것이 사실입니다. 하지만 문제가 발생했을 때 Git은 그 진가를 발휘합니다. 평소에 버전관리를 잘 해왔다면 굉장히 쉽게 해결할 수 있는 일이 하지 않았을 때는 조금 과장하자면 끝이 없는 지옥에서 헤매는 경험이 될 수도 있습니다.

### GitHub

GitHub는 쉽게 말하자면 Git으로 관리하는 폴더를 클라우드에 업로드하여 관리할 수 있도록 도와주는 일종의 서비스로 부가적인 기능을 제공합니다. 국내외의 많은 IT기업들이 GitHub를 통해 오픈소스로 프로젝트를 관리하고 있으며 여러분들도 꼭 복잡한 기능이 아니더라도 오타나 로직 오류 등을 발견하여 다양한 경로로 프로젝트에 기여하여 어디 가서 "내가 구글 텐서플로우 개발에 참여했어!"라고 말하고 다닐 수 있습니다.

## Git & GitHub 워크플로우

### 기본 워크플로우

`git init`명령을 수행하면 해당 경로에 위치한 폴더를 git으로 관리할 수 있습니다.

![](https://velog.velcdn.com/images/hong-mu/post/3639d8dc-115d-48c5-985e-13a9bad6c063/image.png)

### 로컬 저장소? 원격 저장소?

실제 Git과 GitHub를 활용하기 앞서 저장소(레포지토리)의 개념을 이해할 할 필요가 있습니다. Git으로 관리하는 PC 내의 자신의 폴더를 **로컬 저장소(Local Repository)**, GitHub에 업로드된 자신의 폴더를 **원격 저장소(Remote Repository)**라고 부릅니다. 

로컬 저장소에 작업내용이 반영되기 이전에 **Working Directory**와 **StagingArea**라는 개념이 존재합니다. Working Directory는 실제 파일의 수정이 발생하는 영역으로 변경사항을 추적하지 않습니다. 해당 파일을 `git add`명령을 통해 Staging Area 영역으로 보내면 변경사항을 추적하기 시작합니다. 여기서 더 나아가 변경사항을 `git commit` 명령을 통해 하나의 버전으로 만들게 되면 로컬 저장소에 반영됩니다.

로컬 저장소의 버전(커밋)을 원격 저장소에 업로드할 때는 `git push`명령을 사용하고, 반대로 원격 저장소에서 업데이트 된 내용을 로컬 저장소에 반영할 때는 `git pull`명령을 사용합니다.

### 브랜치 알아보기

브랜치는 독립적인 작업을 진행하기 위한 개발 라인으로 브랜치를 활용한 Git-flow, GitHub-flow 등 다양한 전략들이 존재합니다. 

간단히 브랜치 작업 명령어만 나열하겠습니다.

```bash
// 브랜치 생성
git branch [브랜치이름]

// 브랜치/커밋 이동
git checkout [브랜치이름 | 커밋 아이디]

// 브랜치 목록 및 현재 브랜치 확인
git branch

// 브랜치 삭제
git branch -d [브랜치이름]

// 브랜치 병합
git merge [브랜치이름]
```

### Fork를 통해 작업하기

GitHub 저장소를 fork하면 해당 저장소가 복제되어 오로지 자신만의 공간이 만들어집니다. 붉은색 네모박스 공간에서는 어떠한 작업을 하든 상관없습니다. 추가로 작업 공간이 집과 학교, 두 곳이라면 학교에서 작업한 내용을 업로드한 후 집에서 해당 내용을 업데이트하여 작업을 이어갈 수 있습니다.

![](https://velog.velcdn.com/images/hong-mu/post/4cc95c97-02a3-4740-8e79-c7f3d52f04bd/image.png)

### GUI 소개

명령어를 직접 작성하여 작업을 진행하는 것이 처음에 어려울 수 있기에 처음에는 UI를 통해 작업하면서 천천히 익혀 나가시기를 추천드립니다. 아래는 추천하는 프로그램들이며 [여기](https://git-scm.com/downloads/guis)서 더 많은 프로그램들을 찾아볼 수 있으니 마음에 드는 걸로 픽하시면 됩니다. 

1. GitKraken
2. SourceTree
3. Fork

## 실습! GDSC 팀블로그 프로필 작성하기

### Git 설치 및 GitHub 가입

[Git](https://git-scm.com/downloads)은 자신의 운영체제에 맞는 것을 다운로드 받을 수 있으며 기본 옵션으로 설치하면 됩니다. [GitHub](https://github.com/)에 가입되어 있지 않은 경우 가입을 진행합니다.

### 초기 설정

해당 버전을 누가 작성하였는지 식별하기 위해 처음이자 마지막으로 이름과 이메일을 설정합니다.

```bash
git config --global user.name "Your Name"
git config --global user.email "example@gmail.com"
```

### 준비과정

우리는 팀블로그 저장소에 직접 push를 보낼 권한이 없기 때문에 앞서 배운 fork하여 사용하는 방법을 사용합니다.

#### 1. fork

[팀블로그 저장소](https://github.com/gdsc-seoultech/gdsc-seoultech.github.io)로 이동하여 fork를 진행하여 저장소 생성 후 우측 상단 아이콘을 눌러 [Your Repository]로 이동하면 나의 저장소 목록에서 새로 생긴 저장소를 확인할 수 있습니다. 

![](https://velog.velcdn.com/images/hong-mu/post/66b045bd-373d-4cd5-8aa3-3dda860cf6af/image.png)

#### 2. clone

새성된 저장소로 이동하여 초록색 [Code] 버튼을 클릭하여 HTTPS 주소를 복사합니다.

**![](https://lh3.googleusercontent.com/bfa8WDAfKmZFzuUMmtopOFxt2RLGuxUzZZA43O_IjFYPClm_Na-haWP0xKQ8T6c448ae7APUT8_G1-OED3S-OG_3afAFqY505V7TlMroIxLdkvE3A95y5KSlrHQ4LPKp5PveWOxxidQjc-oJxPqtqNFfsA=s2048)**

자신이 원하는 경로를 이용한 후 복사한 주소를 이용하여 `git clone`명령을 수행합니다. 원격 저장소 프로젝트가 복제되어 해당 경로에 새로운 폴더로 생성됨을 확인할 수 있습니다. 생성된 폴더로 이동한 후 `git remote -v`명령으로 원격 저장소 목록을 확인해보면 자동으로 origin이 추가되어 있음을 확인할 수 있습니다.

하지만 팀블로그 원래의 저장소는 `git remote add`명령을 수행하여 upstream으로 직접 추가해야 합니다. 추후에 upstream 저장소의 변경사항을 fetch/pull을 통해 받아오기 위함입니다.

```bash
git clone 복사한 주소
cd gdsc-seoultech.github.io
git remote -v

git remote add upstream https://github.com/gdsc-seoultech/gdsc-seoultech.github.io.git
git remote -v
```

#### 3. checkout

main 브랜치에서 작업할 경우 추후 fetch/pull 작업에서 충돌이 일어날 수 있기에 develop 브랜치를 생성한 후 이동합니다. 세션 및 자료에서는 main 브랜치에서 작업하였습니다.

```bash
// 브랜치 생성 및 이동
git branch develop
git checkout develop

// 브랜치 생성 및 이동 동시에 하는 방법
git checkout -b develop
```

### 작업 반영

#### 1. 프로필 수정

**![](https://lh3.googleusercontent.com/azFlxKEa4ojVC9lwaQy6s1QDhYYAtYbm4NvAGJPBdxW0aItVW2D1ZLf5IlL9zL4W-uqZt0cgGFWlug15qsyD5wcbi4rGDbcX7qmuJeJUBYHXFVS4bGa3v_WQE_-dZOQ8aNmIUPd5n4Cplc5CejjsnXt6lw=s2048)**
![](https://velog.velcdn.com/images/hong-mu/post/3a0d0cd3-22d8-4fa5-b54d-00c3622eca8a/image.png)
메모장 또는 코드에디터를 이용하여 `_data/members/members_3.yml`파일 아래쪽에 자신의 프로필을 추가합니다. 아래 양식이나 이미 추가한 다른 멤버들을 참고해서 작성해 주시면 되고 자신의 블로그가 있을 경우 선택적으로 추가해주시면 됩니다. 

```yml
changha:
  name: 전창하
  author_name: 창하
  role: core
  email: mentenseoul@gmail.com
  github: Changha-dev
  description: Just Do It! 
  introduce: 안녕하세요, 웹파트 코어를 맡게 된 컴퓨터공학과 20학번 전창하입니다. 현재 스프링 부트를 활용한 백엔드 개발을 공부하고 있으며, 올해 안에는 최대한 높은 수준의 숙련도를 달성하는 것을 목표로 하고 있습니다. 공부할 수록 어렵지만 함께 스터디를 진행하고 다양한 행사에 참여함으로써 폭넓은 경험을 쌓으며 성장하고자 합니다. 1년동안 함께 멋진 GDSC 3기를 만들어봐요! 🌴  
  blogs:  
    tistory: https://changha-dev.tistory.com
```

#### 2. add

수정한 파일을 Staging Area로 이동시켜 변경사항을 추적하기 시작합니다. 아래 3가지 방법 중 선택하여 사용하면 되고 `git status`명령을 통해 해당 파일이 잘 추가되었는지 확인할 수 있습니다.

```bash
git add _data/members/members_3.yml
git add .
git add -A

git status
```

#### 3. commit

Staging Area의 변경사항을 하나의 버전으로 만듭니다. 커밋 후 `git log`명령을 통해 결과를 확인할 수 있습니다.

```bash
git commit -m "Add Changha profile"

git log
git log --oneline
```

#### 4. push

커밋된 버전을 GitHub에 업로드합니다. 

```bash
git push origin develop
```

#### 5. Pull Request

![](https://velog.velcdn.com/images/hong-mu/post/395fc702-6a0d-4646-a263-a5c9e0ea1e31/image.png)
**![](https://lh5.googleusercontent.com/Y90l6CLyCgt9GZTsufQNzRdd8vld54lKCwsNZjrkmv8Mh8iNG8P21vxTf0CpURnGM3nsn06gXuEw1n7KXGCDYYCSvlBZbxbgvskpeLgrH_gKw2BKBGkgFgF8aLMqjs_S6rKmDoaHkEmwwhr8bhnoczddgw=s2048)**
**자신의 저장소**로 이동하여 [Pull requests]탭으로 이동하여 PR 요청을 보내면 됩니다. 주의할 점은 Comparing changes에서 좌측은 main 브랜치 우측은 자신이 작업한 브랜치로 설정해 주셔야 합니다. develop브랜치에서 작업하였으면 develop으로 설정해 주셔야 합니다!

팀블로그 관리자가 확인후 PR요청이 승인되어 브랜치가 병합되면 [여기](https://gdsc-seoultech.github.io/members/3)서 자신의 프로필을 확인할 수 있습니다.

> 실습 진행 중 문제가 발생하면 **전창하**(또는 채홍무)에게 슬랙 또는 카톡으로 연락해주시면 친절하게 해결해드리겠습니다! 

## 알아두면 좋은 명령어

세션에서 소개하지는 않았지만 자주 쓰이는 명령어들이니 관심 있으신 분은 찾아보면 좋을거 같습니다. 이외에도 더 많은 명령어들이 존재합니다!

- `git stash`
- `git revert`
- `git reset`