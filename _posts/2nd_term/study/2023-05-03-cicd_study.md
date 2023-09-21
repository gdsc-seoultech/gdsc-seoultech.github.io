---
layout: post
title: CI/CD 스터디 11주차 보고
date: 2023-05-03 18:59:59 +0900
author: dustnehowl
categories: ["2nd_term"]
tags: ["study"]
---

# CI/CD 스터디 11주차 보고

안녕하세요. 11주차 스터디 보고를 맡은 김연수입니다.
이번주에는 CI 파이프라인을 작성하고 프로젝트에 적용해보는 시간을 가졌습니다. 내용을 공유해드릴테니 다들 ci 적용하실 때 참고하시면 좋을 것 같습니다!

<br />

## Github Actions를 이용해 CI 적용하기

### Github Action 이란?
github action은 github에서 제공하는 ci와 cd를 위한 서비스이다. github action을 사용하면 자동으로 코드 저장소에서 어떤 이벤트(pull request, push)가 발생했을 때 특정 작업이 일어나게 하거나 주기적으로 어떤 작업들을 반복해서 실행시킬 수 있다. 또한 특정 시각에 이벤트를 설정하여 작업을 실행할 수 있다.
이렇게 소프트웨어 프로젝트에서 지속적으로 수행해야하는 반복 작업들을 CI/CD라고 많이 줄여서 부른다. 사람이 매번 직접하기에는 비효율적이기 때문에 github actions와 같은 자동화시키는 것이 유리하다.

### **Workflows** 
github actions에서 가장 상위 개념인 워크플로우는 쉽게 말해 자동화해놓은 작업 과정이다. 워크플로우는 repository 내에서 .github/worflows 폴더 아래에 YAML파일로 설정하며, 하나의 repository에는 여러 개의 YAML 파일을 생성할 수 있다.

워크 플로우에는 크게 2가지를 정의해야한다. 첫번째는 **on** 속성을 통해 해당 워크플로우가 언제 실행되는지를 정의한다. 이벤트가 발생할 때마다 워크플로우를 정의한 YAML 파일의 예이다. 
```yaml
# push 이벤트 발생 시
on:
  push:
    branches:
      - main

# 매일 자정에 워크플로우 실행하려고 할때
on:
  schedule:
  - cron: "0 0 * * *"

jobs:
  # ...(생략)...
  ```

### **Jobs**
Job 이란 독립된 가상 머신 또는 컨테이너에서 돌아가는 하나의 처리 단위를 의미한다. 하나의 워크 플로우는 여러 개의 작업으로 구성되며 적어도 하나의 작업이 있어야한다. Jobs는 다음과 같이 설정한다.
```yaml

jobs:
  job1:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install
      - run: npm test
```

### **적용**
저희는 스터디원 5명 중에 4명이 springboot 프레임워크를 사용하기 때문에 YAML 파일을 java 에 맞추어 작성했습니다. 

다음은 저희가 작성한 YAML 파일입니다.
```yaml
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
```
보통 빌드를 할때 gradlew에 실행권한을 추가시켜 주고 ./gradlew build -x test 명령어를 통해 빌드해주는데요. yaml 파일에서 확인할 수 있습니다.!!

이렇게 작성하고 커밋 & 푸시를 해보면!!
![Actions 탭](https://cdn.discordapp.com/attachments/874897301292875836/1103317545529901106/2023-05-03_10.49.15.png)
다음과 같이 Actions 탭에서 가상환경안에서 CI가 완료된것을 확인할 수 있습니다. 앞으로 main 브랜치에 push가 될때마다 build를 자동으로 실행해주겠네요!!!
테스트 코드가 없어 테스트를 하지 못하는 것은 아쉽지만 test과정은 테스트 코드를 작성하고 마저 적용해보겠슴니다,,,(-x test 만빼면됨!!)

## 차주 계획
이번주에는 CI를 github actions를 통해 적용해보았는데요. build만 하는건 의미가 없죠?? 다음주에는 build 결과인 jar파일을 클라우드 서버에 배포하고 무중단으로 배포하는 것까지 해볼 계획입니다. 스터디가 마무리되는 것 같아 아쉽지만 다들 많이 얻어가셨으면 좋겠습니당 그럼 이만!@!@#@#!#~@