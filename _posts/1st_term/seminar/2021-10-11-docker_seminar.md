---
layout: post
title: 다섯 번째 세션 - 똑독독, 도커 있나요...?🐳
date: 2021-10-11 10:00:00
author: twinklesu
description:
categories: ["1st_term"]
tags: ["seminar"]
---

# 들어가며
🚨본 세미나는 도커를 당장 개발에 사용할 수 있게 해주는게 아니라, 미래의 도커 사용을 위해 문을 열어주는 난이도임을 알려드립니다!

**목차**
1. 도커: 태몽 썰 푼다
2. 나 도커쓰, 9살인디
3. 도커와 친-바

<br>

# 1. 도커: 태몽 썰 푼다🐳
<br>

도커는 어떤 이유로 세상에 나오게 되었을까요?  
자, 여러분이 백엔드 개발을 한다고 상상해봅시다.

![](https://images.velog.io/images/twinklesu914/post/3cf2d690-f2ae-4121-ad8c-aa27144e8878/image.png)

Java깔고, DB 필요하니까 mysql깔고, 서버 돌려야하니까 톰캣 깔고... 환경설정도 하고.   
정말 **"설치가 반이다"** 라는 말이 나올정도로 복잡합니다.  
여차저차 환경 설정을 마치고, 팀원과 개발을 하고 있었다고 칩시다.  
 
<br>

그러던 어느날, 팀원이 얘기합니다.

![](https://images.velog.io/images/twinklesu914/post/b7557a4b-eed0-408d-b4cb-68f0ff15e9a2/image.png)

나는 되는데, 남은 안되는 경험. 다들 해보셨죠?  
운영체제가 다르거나, 버전이 다르다거나 하는 이유로 우리를 곤란하게 합니다.😥😥

그래서 사람들은 생각했습니다.  
*"전문가가 노트북에 같은 OS와 같은 프로그램을 잘 설치해 환경설정한 후 우리에게 주면, 얼마나 편할까!"*  

그렇게 **가상머신**이라는 개념이 등장합니다.

## Virtual Machine

![](https://images.velog.io/images/twinklesu914/post/7b884240-8458-4c09-a69f-7234f8584725/image.png)

하지만 가상머신은 OS위에 또, OS를 설치하기 때문에 **무겁고**, 하나의 컴퓨터 안에서 격리된 실행공간을 구성하기 때문에 **느리다**는 문제를 만들었습니다. 
그럼 그냥 OS 설치 없이 격리된 공간만 구성하면 어떨까요?

## Container

![](https://images.velog.io/images/twinklesu914/post/7c516829-f739-49fe-91c0-378214e9b5ae/image.png)

이런 생각에서 시작된게 바로 **컨테이너** 기술입니다. 
호스트 컴퓨터에 컨테이너라는 격리된 실행 공간을 만들고, 그 안에 앱을 실행하기 위한 라이브러리만 저장합니다. 
이렇게 하면 가상머신에 비해서 빠르고, 저장용량도 아낄 수 있게 됩니다.
리눅스 운영체제에는 이런 컨테이너 기술이 내장 되어있고, 오늘 우리가 알아볼 **도커**도 이 LXC에서 시작되었습니다. 

# 2. 나 도커쓰, 9살인디

도커는 2013년, Pycon conference에서 dotcloud의 창업자인 **Solomon Hykes**가 발표한 [The future of Linux Container](https://www.youtube.com/watch?v=wW9CAH9nSLs)라는 세션을 통해 세상에 공개되었습니다. 
~~세션 영상 5분짜리니 궁금하면 보세요!~~


## Docker Engine

![](https://images.velog.io/images/twinklesu914/post/5e0ff981-4e95-4397-a7c8-1de5067e0aec/image.png)

우리가 *도커를 설치한다*라고 하면 바로 **Docker Engine**을 설치한다는 뜻입니다.
Docker Engine에는 **Docker CLI, Docker Engine API, Docker Daemon**이 있습니다. 

![](https://images.velog.io/images/twinklesu914/post/87bc76e3-a35c-4065-bd40-418ba01c5078/image.png)

Docker Engine은 다음과 같은 방식으로 동작합니다. 
> 1. 사용자가 **Docker CLI**에 명령어를 입력한다.
  2. **Docker CLI**가 **Docker Engine API**를 호출한다.
  3. **Docker Daemon**은 호출된 **API**에 따라, 이미지를 빌드하고, 컨테이너를 시작하는 등 명령어를 수행한다.
>
  
생각보다 간단한 방식으로 동작하죠!?  
사실 도커는 정말 많은 기술 위에서 동작되는 도구입니다.  
하지만 오늘 세미나에서는 *"아~도커~ 알지~"* 를 목표로 하기 때문에 어려운 이야기는 여기에서 멈출게요!

## Docker Image

위에서 Docker Daemon이 **이미지**를 실행한다고 이야기했죠?  
도커 이미지는 컨테이너 실행에 필요한 파일과 설정값 등을 포함한 파일입니다.  
프로그램을 실행하면 프로세스가 되듯, **이미지**를 실행하면 **컨테이너**가 됩니다.  
이미지는 정적이고, 컨테이너는 실제로 동작하고 있는 것이지요!  
프로그램이 여러 프로세스를 갖듯, 이미지도 여러 컨테이너를 갖을 수 있습니다. 

## Docker Hub

도커 이미지는 [Docker Hub](https://hub.docker.com/)에 올라와 있습니다.   
도커 허브는 도커가 많은 개발자 사이에서 쓰이게 해준 1등 공신입니다.  
**깃**을 위한 **깃헙**이 있다면, **도커**를 위한 **도커헙**이 있다고 생각하면 됩니다.

![](https://images.velog.io/images/twinklesu914/post/99d07e13-4eda-48bf-a0ed-73c3d30782dc/image.png)

도커 허브의 이미지에는 위의 두가지 뱃지가 붙어있는 공식 이미지가 있고, 사용자들이 업로드 한 일반 이미지들이 아주 많이 공유되어 있습니다.  
여러분이 개발 공부를 하면서 들어본 웬만한 것들이 다 도커허브에 올라와있을거에요

## Docker File

도커 이미지를 공유하려면, 도커 이미지를 먼저 만들어야겠죠?  
도커 이미지를 만들기 위해서는 **Docker File**이라는게 필요합니다.


![](https://images.velog.io/images/twinklesu914/post/34142921-0454-4c06-b632-f0194dfbf914/image.png)

Docker File을 작성해 빌드하면, 도커 이미지가 됩니다.  
Docker File은 문법이 간단하다는게 큰 장점입니다.

![](https://images.velog.io/images/twinklesu914/post/86496dbf-0d2a-4dec-9a46-869ed76eb254/image.png)

위의 예시를 살펴봅시다.  
리눅스 운영체제의 하나인 Alpine을 이용하는 컨테이너를 만든다고 합시다.  

>
`FROM alpine:3.10`: 알파인 3.10 운영체제에서
`ENTRYPOINT`: 컨테이너가 시작될 때,
`"echo", "hello"`: hello라고 출력해줘
>

이렇게 Docker file을 작성하고, 빌드해 이미지를 만든 후, 실행하면 hello가 출력되는 컨테이너가 실행될거에요!

이런 방식으로 여러분은 docker file을 작성해 개발 환경을 설정한 이미지를 만들고, 도커허브에 올려 팀원들과 공유할 수 있답니다!👍🏻👍🏻

# 3. 도커와 친-바
## 도커 기본 명령어

우선 도커의 기본적인 명령어를 알아볼까요? 

- 내 로컬의 도커 **이미지** 목록 확인하기

```
	$ docker images
```

- 내 로컬의 **실행 중**인 **컨테이너** 목록

```
	$ docker ps
```

- 내 로컬의 **전체 컨테이너** 목록

```
	$ docker ps -a
    	$ docker ps --all
```

- **도커허브**에서 이미지 다운로드

```
	$ docker pull [이미지 이름]
    	$ docker pull [레포지토리/이미지]
```

- 이미지로 **컨테이너** 실행

```
	$ docker run [이미지 이름]
    	$ docker run [레포지토리/이미지]
```

- 컨테이너 **중단**

```
	$ docker stop [컨테이너 이름]
```

- 컨테이너 삭제

```
	$ docker rm [컨테이너 이름]
```

- 이미지 삭제

```
    $ docker rmi [이미지 이름]
```

## Docker/whalesay

간단한 실습을 위애 [Docker/whalesay](https://hub.docker.com/r/docker/whalesay) 이미지를 이용해 컨테이너를 실행해 볼까요?   

윈도우라면 cmd, 맥이라면 terminal을 켜고 시작할게요! [도커 설치하기](https://docs.docker.com/get-docker/)  
  
우선 이미지를 다운로드 해보겠습니다.  

```
	$ docker pull docker/whalesay
```

다운로드가 완료 되었다면, 이미지가 잘 다운로드 되었는지 확인해 봅시다.  

```
	$ docker images
```

**docker/whalesay** 이미지가 리스트에 뜨면, 다운로드 성공입니다!

이제 이 이미지를 컨테이너로 실행해 볼 텐데요, [문서](https://hub.docker.com/r/docker/whalesay)에서 이미지 사용법과, 도커파일을 볼 수 있습니다.  
문서가 시키는대로 이미지를 실행해 보겠습니다.

```
	$ docker run docker/whalesay cowsay [출력할 말]
```

![](https://images.velog.io/images/twinklesu914/post/cc243f27-90ac-460a-bf62-748e67db5bcc/image.png)

저는 **GDSC**를 말하는 귀여운 도커 고래를 만나 보았습니다 🐳🐳  

이제 컨테이너의 상태를 확인해볼까요?

```
	$ docker ps
```

어랏? 아무것도 뜨지 않죠..😮😮
docker/whalesay는 실행되자마자 종료되는 컨테이너기 때문입니다.

```
	$ docker ps -a
    	$ docker ps --all
```

명령어를 쳐보면, 방금 전에 종료된 컨테이너를 확인해 볼 수 있습니다.  
도커 컨테이너의 이름은 지어주지 않으면 **형용사_과학자**로 랜덤 배정됩니다!  

이제 도커 컨테이너를 지우고, 이미지도 지워보겠습니다.  
컨테이너가 있으면 이미지가 지워지지 않기 때문에, 이미지를 지우려면 꼭! 컨테이너부터 지워주세요.

```
	// 컨테이너 지우기
    	$ docker rm [컨테이너 이름]
    	// 컨테이너 삭제 확인
        $ docker ps -a
        
        // 이미지 지우기
        $ docker rmi [이미지 이름]
        // 이미지 삭제 확인
        $ docker images
```


## httpd 이미지

[httpd](https://hub.docker.com/_/httpd) 는 아파치 서버 이미지입니다.  
앞서 사용한 docker/whalesay는 시작하자마자 종료되는 컨테이너 이미지였기 때문에, 이번에는 계속해서 돌아가는 컨테이너를 만들어보려고 해요!  
우선 이미지를 다운받아 실행해 봅시다


```
	// 이미지 pull
    	$ docker pull httpd
    	// 확인
    	$ docker images
        // 컨테이너 실행
        $ docker run httpd
```

![](https://images.velog.io/images/twinklesu914/post/8c144873-7910-4748-adc4-d60a1320e7bd/image.png)

아까와는 다르게 cmd창이 계속해서 실행 중이죠?

자, 그럼 이제 **또 다른 cmd**를 켜서 상태를 확인해 보겠습니다.

```
	$ docker ps
```

![](https://images.velog.io/images/twinklesu914/post/b8044f9a-ae98-4bdc-a0cd-4f8b8e63e418/image.png)

80번 포트에서 실행 중인 컨테이너가 보이죠?  
계속해서 실행되고 있기 때문에 **STATUS**에 **Up About a minute**라고 떠있는 것을 볼 수 있습니다. 

같은 cmd에서 돌아가고 있는 컨테이너를 정지시키고 상태를 확인해볼게요

```
  // 컨테이너 정지
  $ docker stop [컨테이너 이름]
  // 컨테이너 확인
  $ docker ps
  $ docker ps -a
```

`ps` 명령어에서는 더 이상 컨테이너를 확인할 수 없고, `ps -a`에서는 종료되었음을 확인할 수 있습니다.  

**컨테이너를 실행 중**이던 cmd로 돌아가보면 컨테이너가 종료되고, 새로운 인풋을 받을 준비가 되어있는 것을 확인할 수 있습니다. 

![](https://images.velog.io/images/twinklesu914/post/ff977ede-d8e9-4f2a-9792-3bc09a689b70/image.png)

# 마치며

![](https://images.velog.io/images/twinklesu914/post/923c232f-33cd-4e1b-b772-6b0b31bee4b8/image.png)

구글에 **docker meme**을 검색하면 위와 같은 짤이 나옵니다.  
도커가 요즘 정말 많이 쓰이지만, 그게 어떤 기술이라고 설명하기는 쉽지 않은 듯 합니다.  

도커를 첫 술에 완벽히 알 수는 없기에! 도커를 더 잘 알고 싶다면   

>
- docker file 작성해보기
- 실제 프로젝트 환경 docker로 구성해보기
- docker hub에 내가 만든 이미지 올려보기
>

이런거 해보시면 좋을 것 같아요 🐥🐥  

[도커 다큐먼트](https://docs.docker.com/engine/reference/run/)도 친절하고, [생활코딩](https://opentutorials.org/course/4781/30609), 그리고 유튜브에도 많은 튜토리얼 영상이 있으니 충분히! 여러분은 스스로 습득할 수 있을거에요 🥰🥰

여러분, 이번 세미나를 통해 도커와 한걸음 가까워지셨나요?  
다음번에 다른 곳에서 **도커**라는 이야기를 들었을 때, **"아~ 도커 알지~😏😏"**할 수 있겠죠??
그럼 시험기간 지나고 11월에 만나요 여러분~!👋🏻👋🏻👋🏻

~~도커 개념은 생활코딩을 참조하였습니다~~
