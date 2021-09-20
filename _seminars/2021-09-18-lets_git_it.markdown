---
layout: post
title:  두 번째 세션 - Let's GIT it~! 돌아보기
date:   2021-09-17 17:36:17
author: KangInyeong
---

9월 14일, GDSC Seoultech의 두 번째 정기 세션이 있었습니다. <br>
두 번째 세미나로는 **Let's GIT it~!**이 진행되었습니다😎<br>
그 뜨거웠던 현장을 돌아보시죠!

# Agenda

1. Git과 GitHub이란?
2. Repository 생성 및 clone 해보기
3. GDSC 블로그 Fork 해보기


<br>

## 1. Git과 GitHub이란?

![](https://images.velog.io/images/kiyoog02/post/7593b82c-c6e8-410e-8e6a-43d7b3a212b3/image.png) 

Git과 GitHub은 엄연히 다른 것!
개발자라면 이 두 가지를 모두 사용해 본 경험이 있거나 사용하게 될 텐데요.
둘의 차이점에 대해서 간단히 알아보았습니다 :)

<br>

### - Git

![](https://images.velog.io/images/kiyoog02/post/705874ca-c1a1-4cb9-a008-ebee9434d933/image.png) 

**Git**은 소스코드를 효과적으로 관리하기 위해 개발된 **분산 버전 관리 시스템**(DVCS : Distributed Version Control Systems)입니다. Git 데이터베이스에 작업 기록을 남길 수 있고 덕분에 효과적인 코드 관리는 물론 코드 손상을 예방할 수 있답니다! 

<br>

### - GitHub

![](https://images.velog.io/images/kiyoog02/post/c608b9c5-fe6c-42f9-a358-0308e82f16c9/image.png) 

**GitHub**는 **Git 호스팅 웹 서비스**로 Git의 Remote Repository(원격 저장소)를 제공해 주는 일종의 클라우드 서비스입니다. GitHub 외에 원격 저장소 서비스로는 GitLab, GitBucket 등도 존재한다고 하네요. 저장소를 여러 사람들과 공유하고 협업할 수 있기에 많은 개발자들이 사용하는 플랫폼으로 거듭날 수 있었습니다!

<br>

### - 버전 관리 유형

- **로컬 버전 관리** : 디렉토리로 파일을 복사하는 방법이며, 작업 중인 디렉토리를 삭제하는 등의 실수로 인해 문제가 생길 수 있으니 주의해야 함.
- **중앙 집중 버전 관리** : 파일을 관리하는 서버가 별도로 존재하며 클라이언트가 중앙 서버에서 파일을 받아서 사용하는데 이러한 중앙 서버 관리에 주의해야 함.
- **분산 버전 관리** : 히스토리를 포함한 저장소 전부를 복제하므로 서버 저장소에 문제가 생기더라도 로컬 저장소에서 다시 복구하여 사용할 수 있는 장점이 있음. 

<br>

### - Git 명령어와 Git 플로우

![](https://images.velog.io/images/kiyoog02/post/df7e54e3-da08-4c56-8570-d841ccd48f59/image.png) 

**Reposiory**는 저장소라고 불리며 실제 코드가 담겨 있는데요. 커밋 내역 등의 모든 작업 기록들이 담겨 있는 공간이라고도 볼 수 있습니다.

<br/>

## 2. Repository 생성 및 Clone 해보기

### - GitHub에 Repository 생성

- **New 버튼 -> Repository name 설정 (Public) -> Create repository 버튼**

![](https://images.velog.io/images/kiyoog02/post/d2f14710-2888-4c5f-92e0-fee3fa66ad39/image.png) 

GitHub에 계정을 생성하고 Repositories 목록에 있는 **"New" 버튼**을 클릭하여 새로운 Repository를 생성할 수 있습니다. 

![](https://images.velog.io/images/kiyoog02/post/8b00427c-8fc8-4233-a613-86d8e7226a9d/image.png) 

**Repository name**을 원하는 대로 설정할 수 있습니다. 또한 프로젝트에 대한 설명을 적고 싶다면 Description을 작성할 수도 있어요! Public과 Private 옵션 중에서는 Public을 선택하여 프로젝트를 공개해둘 수 있습니다. 그리고 **"Create repository" 버튼**을 클릭하면 Repository에 접근할 수 있는 HTTPS와 SSH 주소가 생성됩니다.

<br>

### - 로컬에 Repository를 Clone 하기

파일을 Clone 할 폴더를 우클릭하여 CMD 또는 Git Bash를 실행 or CMD 또는 Git Bash 실행 후 명령어를 사용하여 Clone 할 디렉토리로 이동 -> Repository 주소를 사용해 Clone 진행

- 파일 경로 이동 명령어

  > **cd [경로]**

- Clone 코드

  >**git clone [복사한 주소]**

#### +) 유용한 Git 코드

- Git 상태 및 파일 수정 정보 확인

  > **git status**

- add 코드

  >**git add .** 또는 **git add [수정 파일명]**

- commit 코드

  > **git commit -m "[커밋 메세지]"**

- push 코드

  >**git push**

<br/>

## 3. GitHub에서 Fork 해보기

### - GitHub의 Fork 기능

GitHub에 참여하고 싶은 프로젝트가 있는데 push 권한이 없어서 프로젝트에 참여하지 못할 때에 Fork 기능을 활용하여 프로젝트를 통째로 내 저장소로 복사한 뒤에 **pull request(PR)**을 하여 프로젝트에 기여할 수 있습니다. 우리 GDSC 멤버들은 GDSC의 GitHub 블로그 프로젝트를 직접 Fork 하여 볼까요~?

<br>

### - 프로젝트 Fork 하기

- **GitHub**에 있는 프로젝트 중 마음에 드는 것을 골라 **Fork**한다.
- 나의 로컬에 해당 프로젝트를 내 저장소로 Fork한 후 생성된 주소로 **clone**한다.
- 기존 프로젝트의 주소로 **remote** 한다.
- 코드 수정 작업을 위한 **branch를 생성**한다.
- 에디터 등을 활용하여 파일 및 코드를 수정한다.
- 수정한 정보를 GitHub에 반영한다.
- 내 GitHub  저장소에서 기존 프로젝트 저장소로 **pull request** 한다.
- 기존 프로젝트 저장소에 내 수정 정보를 **merge** 한다. -> 해당 작업은 프로젝트에 대한 권한이 있을 때에만 가능하고, 권한이 없는 사람의 수정 정보는 프로젝트 관리자가 코드를 확인하는 절차를 거친 후 merge 된다.
- 코드를 동기화하고, 작업을 위해 생성했던 **branch를 삭제**한다.


\* 해당 작업 이후에도 추가적으로 코드를 수정하고 반영하고자 한다면 pull을 하여 프로젝트 정보를 다시 불러오고 4 ~ 9번을 통해 작업을 수행할 수 있습니다!

<br>

### - Fork 과정 중 사용 코드

- 파일 경로 이동 명령어

    > **cd [경로]**

- clone 코드

  >**git clone [주소]**

- remote  코드

  >**git remote add [새로운원격저장소명**upstream**] [기존프로젝트주소]**

- 원격 저장소 정보 조회

  > **git remote -v**

- branch 생성 후 변경

  >**git checkout -b [새로운브랜치명**develop**]**

- add 코드

  >**git add .** 또는 **git add [수정 파일명]**

- commit 코드

  > **git commit -m "[커밋 메세지]"**

- push 코드

  >**git push [내저장소명**origin**] [작업브랜치명**develop**]**

- pull 코드

  >**git pull [원격저장소명**upstream**] [기본브랜치명**main**]**

- branch 변경

  >**git checkout [브랜치명**main**]**

- branch 삭제

  >**git branch -D [작업브랜치명**develop**]**


<br>

## 마무리

게더 연결 문제로 조금 늦게 세미나를 시작하게 되었고, GDSC 블로그를 Fork 하는 실습까지 진행되어 세션이 길어지게 되었는데요. 그럼에도 불구하고 세미나에 집중해 주시고, 커리큘럼 내에서도 끝까지 잘 참여해 주신 GDSC 멤버분들에게 감사하다는 말씀을 드리고 싶네요!! 오늘 소개한 Git의 사용법 외에도 코드 에디터와 Git 연동 등 Git과 GitHub의 활용도는 정말 다양한데요. 오늘 저의 세미나를 계기로 여러분이 Git & GitHub과 조금이나마 친해진 계기가 되었다면 정말 기쁠 것 같네요🙏 다음에 더 좋은 세미나로 돌아오겠습니다~! 그럼 이만, let's git it-!