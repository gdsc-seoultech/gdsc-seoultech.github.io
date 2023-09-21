---
layout: post
title: CI/CD 스터디 1주차 보고
date: 2023-03-22 23:59:59 +0900
author: dustnehowl
categories: ["2nd_term"]
tags: [”study”]
---

# CI/CD 스터디 2주차 보고

안녕하세요 CI/CD 스터디장을 맡은 김연수입니다.

2주차 CI/CD 스터디에서는 "Introduction to CI/CD"라는 주제로 짧막하게 세미나를 진행한 후 유석님이 찾아주신 레퍼런스 (https://velog.io/@jmjmjmz732002/Github-Action-Docker-EC2-Nginx-%ED%99%9C%EC%9A%A9%ED%95%9C-Springboot-CICD-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0-1-EC2-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0)의 1장을 다같이 따라해보는 시간을 가졌습니다.

세미나 자료는 앞으로도 팀블로그에 함께 공유드릴테니 CI/CD에 관심있으신분들 누구나 한번 보시고 질문하시면 좋을 것 같아요!

---

## Introduce to CI/CD
## CI/CD의 개념과 이점

CI/CD는 애플리케이션 개발 단계를 자동화하여 애플리케이션을 더욱 짧은 주기로 고객에게 제공하는 방법

CI - **Continuous Integration (지속적 통합)**

코드 변경이 발생하면, 코드의 품질을 측정하는 자동화된 빌드 및 테스트 프로세스를 실행하여 개발자들이 최신 변경 사항을 신속하게 통합하고, 코드 품질 문제를 빠르게 발견할 수 있도록 합니다.

CD - **Continuous Delivery** or **Continuous Deployment (지속적 서비스 제공, 지속적 배포)**

Continuous Delivery: 소프트웨어의 빌드 및 테스트를 자동화하여, 배포 가능한 상태의 `패키지를 만들고, 수동 또는 자동으로 스테이징 환경`에 배포합니다. 이를 통해 개발자는 신속하게 고객에게 새로운 기능과 개선된 제품을 제공할 수 있습니다.

Continuous Deployment: Continuous Delivery와 비슷하지만, 배포 가능한 상태의 소프트웨어를 자동으로 프로덕션 환경에 배포합니다. 이를 통해, 최신 변경 사항을 빠르게 사용자들에게 제공할 수 있으며, 개발자들은 실시간으로 사용자들의 피드백을 반영하여 제품을 지속적으로 개선할 수 있습니다.

## CI/CD를 구성하는 기술 및 도구 소개

1. 버전 관리 시스템 (Version Control System, VCS): 코드 변경사항을 관리하고 팀원들과 협업할 수 있도록 도와주는 도구입니다. 대표적으로 git, svn 등이 있습니다.

1. 지속적 통합 서버 (Continuous Integration Server): 코드 변경사항을 자동으로 빌드, 테스트하고 배포하는 서버입니다. 대표적으로 Jenkins, CircleCI, Travis CI, GitLab CI 등이 있습니다.


1. 지속적 배포 서버 (Continuous Deployment Server): 지속적 통합 서버에서 빌드된 코드를 실제 서비스 서버에 배포하는 서버입니다. 대표적으로 AWS CodeDeploy, Google Cloud Build 등이 있습니다.


1. 컨테이너 기술: 어플리케이션을 쉽게 배포하고 관리하기 위한 기술입니다. 대표적으로 Docker, Kubernetes 등이 있습니다.


1. 자동화 테스트 도구: 코드 변경사항을 자동으로 테스트하고 결과를 알려주는 도구입니다. 대표적으로 JUnit, Selenium 등이 있습니다.


1. 로깅 및 모니터링 도구: 서비스 운영 중에 발생한 이슈를 모니터링하고, 로그를 수집하고 분석할 수 있는 도구입니다. 대표적으로 ELK Stack, Prometheus 등이 있습니다.
2. 인프라 구성 자동화 도구: 서버, 네트워크, 스토리지 등 인프라를 코드로 관리하고 자동화하는 도구입니다. 대표적으로 Ansible, Terraform 등이 있습니다.

## CI/CD 구현 방법 및 구축 과정 소개

1. 코드 버전 관리 시스템(VCS, Version Control System) 선택
    - 대표적으로 Git, SVN 등이 있으며, 코드 변경 이력을 관리하기 위해 사용됩니다.
2. 빌드 도구(Build Tool) 선택
    - 대표적으로 Maven, Gradle, Ant 등이 있으며, 코드를 컴파일하고 패키징하는 등의 작업을 자동화합니다.
3. 지속적인 통합(CI, Continuous Integration) 도구 선택
    - 대표적으로 Jenkins, CircleCI, Travis CI 등이 있으며, 코드 변경 사항을 자동으로 빌드하고 테스트하는 등의 작업을 수행합니다.
4. 지속적인 배포(CD, Continuous Deployment/Delivery) 도구 선택
    - 대표적으로 Kubernetes, Docker, AWS CodeDeploy, Google Cloud Build 등이 있으며, 빌드된 결과물을 자동으로 배포하는 등의 작업을 수행합니다.
5. 테스트 코드 작성
    - 유닛 테스트, 통합 테스트, E2E 테스트 등을 작성하여 코드 변경에 대한 영향을 최소화합니다.
6. **CI/CD 파이프라인 구축**
    - **선택한 도구를 이용하여 CI/CD 파이프라인을 구축합니다.**
    - **코드 변경 사항을 VCS에서 감지하면, 자동으로 빌드, 테스트, 배포 작업을 수행하도록 구성합니다.**
7. 모니터링 구성
    - 구성한 파이프라인에서 발생하는 문제를 신속하게 파악할 수 있도록 모니터링 도구를 구성합니다.
    

위와 같은 과정을 거쳐 CI/CD를 구축하면, 개발자들은 코드 변경 사항을 더욱 빠르게 반영할 수 있으며, 배포 과정에서 발생하는 문제를 미리 예방할 수 있습니다. 또한, 지속적인 모니터링을 통해 문제를 신속하게 파악하고 대응할 수 있습니다.

---

실습까지 끝낸 후에는 각자 개발하면서 생긴 이슈들에 대해서 서로의 경험을 공유하는 시간을 가졌습니다. 다음주까지 저희는 위 레퍼런스의 2장을 각자 해오기로 하고 해산했습니다! 스터디원 분들이 다들 열정적이셔서 너무 좋네요. 그럼 다음주에 봐용 안녕!@!@!!!@~@!@@~@@