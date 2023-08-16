---
layout: post
title: CI/CD 스터디 12주차 보고
date: 2023-05-017 18:59:59 +0900
author: yeonsu
categories: ["2nd_term"]
tags: [”study”]
---

# Github Actions + docker로 CD 적용하기

지금까지 해온 CI/CD 스터디의 마지막 파트이다. CD란 **Continuous** Deploy 와 Continuous Delivery로 무중단 배포, 배포 자동화 인데 사실 이것을 위해 지금까지 ci/cd 스터디를 진행해왔다. 매번 github에 push하고 클라우드 서버(ec2, gcp vm)에서 pull 하고, 빌드하고,, docker 이미지 만들고,,, docker run하는 이 과정들이 너무너무 귀찮았고 자동화 할 수 있는 방법이 분명히 있을텐데,, 하고 찾아보니 ci/cd의 개념을 알게 되었었다. 지금까지 함께 해준 스터디원들 너무너무 고맙고 스터디장이 부족해 다들 많은 것을 못 얻어간 것 같아 미안하다. 그럼 지금부터 github actions 와 docker를 이용한 배포 자동화에 대한 내용들이다.

## CI **: Continuous Integration**

pull request 시에 자동으로 빌드하고 테스트하는 과정을 자동화 해주는 것.

지난 시간에 github actions의 파이프 라인 개념과 ci 적용까지 해봤다. (`./gradlew build -x test`라 사실 테스트는 하지 않았다.)

그렇다면 빌드 이후에 하는 과정들(deploy)을 파이프라인에 추가해보자.

## CD : Continuous Deploy or Continuous Delivery

1. Docker login : 깃헙 액션에서 ci/cd 파이프라인을 구축하면 가상환경 내에서 일련의 과정들이 진행된다. 이때 docker hub에서 이미지들을 가져오고 혹은 올리는 데 docker hub 유저 이름(이메일 아님)과 비밀번호가 필요하다. 이때 유저 이름과 비밀번호가 workflow 파일에 올라가면 안되므로 github secret을 이용한다.

```bash
# workflow 파일

# DockerHub 로그인
    - name: DockerHub Login
      uses: docker/login-action@v2
      with:
        username: ${{ secrets.DOCKERHUB_USERNAME}}
        password: ${{ secrets.DOCKERHUB_PASSWORD}}
```

${{}} 에 들어가는 것이 github secret인데 환경변수라고 생각하면 편하다. 

- secret key 설정하는 방법
    
    ![스크린샷 2023-05-18 오전 2.41.32.png](https://cdn.discordapp.com/attachments/874897301292875836/1108458504324386946/2023-05-18_2.41.32.png)
    
    Repository의 Settings → Security → Secrets and variables → Actions → New repository secret 클릭 후 key, value를 넣어주면 된다.
    
    ex )
    
    ![스크린샷 2023-05-18 오전 2.43.54.png](https://cdn.discordapp.com/attachments/874897301292875836/1108458537627160586/2023-05-18_2.43.54.png)
    
1. Docker 이미지 빌드 & push : `./gradlew build -x test`의 결과로 나온 .jar 을 docker image로 만들어주는 과정이다. 여담이지만 이 과정이 ci/cd를 적용해보고 싶었던 2번째 이유인데, EC2 인스턴스를 t2.micro를 사용하고 있는데 진짜 너무너무너무너무너무너무 쪼잔하다,,, 그래서 자꾸 위의 빌드를 실행하다가 인스턴스가 터져버렸다. 그래서 ‘아 그냥 jar 파일을 이미지로 만들어서 도커 허브에 올리고 싶다..’ 라는 생각을 했었는데 이 과정이 그 과정이다.

```bash
	# Docker 이미지 빌드
  - name: Docker Image Build
    run: docker build -t ${{ secrets.DOCKERHUB_USERNAME}}/${{ secrets.PROJECT_NAME }} .

  # DockerHub Push
  - name: DockerHub Push
    run: docker push ${{ secrets.DOCKERHUB_USERNAME }}/${{ secrets.PROJECT_NAME }}
```

1. 인스턴스 접속 및 애플리케이션 실행 : 이제 docker image를 만들고 docker hub 에 push 했으니 인스턴스에 접속해서 pull 하고 run 만 하면 된다. docker를 사용하지 않을 때는 이 과정을 aws code deploy와 s3를 이용해서 s3에 올린 .jar을 가져와서 실행하는 과정을 공부했었는데, docker를 사용하는 방법이 내가 지금까지 배포 해왔던 방법과 유사하고 더 쉬워서 이 방법을 채택했다.

```bash
	# EC2 인스턴스 접속 및 애플리케이션 실행
  - name: Application Run
    uses: appleboy/ssh-action@v0.1.6
    with:
      host: ${{ secrets.EC2_HOST }}
      username: ${{ secrets.EC2_USERNAME }}
      key: ${{ secrets.EC2_KEY }}

      script: |
        sudo docker kill ${{ secrets.PROJECT_NAME }}
        sudo docker rm -f ${{ secrets.PROJECT_NAME }}
        sudo docker rmi ${{ secrets.DOCKERHUB_USERNAME }}/${{ secrets.PROJECT_NAME }}
        sudo docker pull ${{ secrets.DOCKERHUB_USERNAME }}/${{ secrets.PROJECT_NAME }}

        sudo docker run -p ${{ secrets.PORT }}:${{ secrets.PORT }} \
        --name ${{ secrets.PROJECT_NAME }} \
        -d ${{ secrets.DOCKERHUB_USERNAME }}/${{ secrets.PROJECT_NAME }}
```

사실 수동으로 배포할 때 또 귀찮았던 것은 docker 이미지가 몇백 MB씩 하기 때문에 만들때마다 전의 이미지를 삭제해 주었어야 했는데 이것 또한 자동화 할 수 있다니,,,,,세상엔 똑똑한 사람들이 정말 많다.. 알려주셔서 감사합니다..

### 전체 workflow 파일

```bash
# This workflow will build a Java project with Gradle
# For more information see: https://help.github.com/actions/language-and-framework-guides/building-and-testing-java-with-gradle

# Repo Action 페이지에 나타날 이름 
name: Spring Boot & Gradle CI/CD 

# Event Trigger
# master branch에 push 또는 pull request가 발생할 경우 동작
# branch 단위 외에도, tag나 cron 식 등을 사용할 수 있음 
on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  build:
    # 실행 환경 지정
    runs-on: ubuntu-latest

    # Task의 sequence를 명시한다.
    steps:
    - uses: actions/checkout@v2
    
    - name: Set up JDK 17
      uses: actions/setup-java@v1
      with:
        java-version: 17
    
    - name: Grant execute permission for gradlew
      run: chmod +x gradlew
    
    - name: Build with Gradle
      run: ./gradlew build -x test
    
    # DockerHub 로그인
    - name: DockerHub Login
      uses: docker/login-action@v2
      with:
        username: ${{ secrets.DOCKERHUB_USERNAME}}
        password: ${{ secrets.DOCKERHUB_PASSWORD}}
        
    # Docker 이미지 빌드
    - name: Docker Image Build
      run: docker build -t ${{ secrets.DOCKERHUB_USERNAME}}/${{ secrets.PROJECT_NAME }} .

    # DockerHub Push
    - name: DockerHub Push
      run: docker push ${{ secrets.DOCKERHUB_USERNAME }}/${{ secrets.PROJECT_NAME }}

    # EC2 인스턴스 접속 및 애플리케이션 실행
    - name: Application Run
      uses: appleboy/ssh-action@v0.1.6
      with:
        host: ${{ secrets.EC2_HOST }}
        username: ${{ secrets.EC2_USERNAME }}
        key: ${{ secrets.EC2_KEY }}

        script: |
          sudo docker kill ${{ secrets.PROJECT_NAME }}
          sudo docker rm -f ${{ secrets.PROJECT_NAME }}
          sudo docker rmi ${{ secrets.DOCKERHUB_USERNAME }}/${{ secrets.PROJECT_NAME }}
          sudo docker pull ${{ secrets.DOCKERHUB_USERNAME }}/${{ secrets.PROJECT_NAME }}

          sudo docker run -p ${{ secrets.PORT }}:${{ secrets.PORT }} \
          --name ${{ secrets.PROJECT_NAME }} \
          -d ${{ secrets.DOCKERHUB_USERNAME }}/${{ secrets.PROJECT_NAME }}
```

## 회고

CI/CD 스터디 모든 과정이 끝났다. 스터디 목표는 스터디원들이 모두 자신의 프로젝트에 ci/cd를 적용해 보는 것이 목적이었는데 잘 했을랑가..모르겠다. 사실 치명적인 단점이 있는데 위 방법대로 파이프 라인을 작성하면 public 레포지토리(application.yml을 올리지 않는 github repository) 에서는 제대로 실행되지 않을 것이다. 왜냐면,, application.yml에 있는 정보들을 모르기 때문이다. 이를 해결하기 위해 사방팔방 여기저기 물어봤는데 `.env와 함께 이미지로 만들고 배포하기`, `secret에 넣고 .yml로 만들어주는 스크립트(echo) 추가하기` 등 다양한 방법들을 알려주셨다. private repository면 .yml 파일도 레포지토리에 올리기 때문에 문제가 없지만 **public에서 가능한 방법은 secret 환경변수에 넣고 이를 .yml로 만들어주는 스크립트를 추가하는 것**이 가장 합리적으로 보였다. 시험기간이 끝나면 이것도 적용한 후에 스터디원들에게 공유할 예정이다. 다들 부족한 스터디장 따라와줘서 너무너무 고마웠고 앞으로 적게 일하고 많이들 벌었으면 좋겠다. 그럼 20000~