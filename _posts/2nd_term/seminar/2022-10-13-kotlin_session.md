---
layout: post
title:  03 코틀린의 매력이 궁금해? 😎
date:   2022-10-31 00:00:00
author: leeeha
categories: ["2nd_term"]
tags: ["seminar"]
---

10월 13일에는 코틀린을 주제로 한 세미나가 열렸습니다! 코틀린의 탄생 배경부터 언어적인 특성, 그리고 다양한 활용 분야까지 알아봤는데요, 다들 이 세미나를 통해 코틀린의 매력에 빠지는 계기가 되었으면 좋겠네요 🤗

<br>

# 목차  

1. 코틀린이란? 
2. 코틀린의 탄생 배경 
3. 안드로이드의 공식 지원 
4. 본격! 코틀린의 매력 탐방! 
5. 코틀린의 활용 분야 

<br>

--- 

# 코틀린이란? 

코틀린이라는 이름은 러시아에 있는 코틀린 섬에서 유래했다고 합니다. 그리고 코틀린은 IntelliJ로 유명한 JetBrains에서 만든 프로그래밍 언어입니다. 

![image](https://user-images.githubusercontent.com/68090939/198893678-20722838-093c-44f2-b7b1-06db84edd8cd.png) 

2022년 스택오버플로우 조사에 따르면, 코틀린은 63% 가량의 개발자들에게 사랑 받는 언어라고 볼 수 있습니다. 무엇 때문에 개발자들은 코틀린을 이렇게 좋아하는 걸까요? 그 이유를 차차 알아보도록 하겠습니다!

![image](https://user-images.githubusercontent.com/68090939/198893757-01d4cfdf-c50a-49f0-914f-156a69e7c677.png)

<br>

---

# 코틀린의 탄생 배경 

## 코틀린이 없던 시절에는... 

코틀린이 없던 시절에는 대부분 자바를 사용했는데, 자바는 언어적 특성상 보일러 플레이트 코드가 많이 발생해서 코드량이 늘어날수록 유지보수가 힘들어진다는 문제점이 있었습니다. 여기서 **보일러 플레이트 코드**란 최소한의 변경으로 여러 곳에서 재사용되며, 반복적으로 비슷한 형태를 띄는 코드를 말합니다. 자바에서는 대표적으로 getter, setter를 예로 들 수 있습니다. 그리고 자바는 **Null Pointer Exception** (NPE)을 컴파일 타임에 미리 방지할 수 없다는 한계점도 있었습니다.

![image](https://user-images.githubusercontent.com/68090939/198893896-4e1b5ce5-da04-4649-9583-4fa563f0fa39.png)

<br>

## 코틀린의 탄생 (2011)

이런 문제들을 해결하기 위해 JetBrains는 아예 새로운 언어를 개발하기로 결심하게 됩니다! JetBrains의 공식 블로그에 있는 글을 확인해보면 다음과 같은 이유로 코틀린을 개발했다는 걸 알 수 있습니다. 

![image](https://user-images.githubusercontent.com/68090939/198894104-a00dab91-ee18-4c1c-91de-79c31e5f34e8.png)

<br>

## 왜 코틀린이 필요했을까? 

그리고 더 구체적으로 그때 당시의 상황을 얘기해보자면, **JetBrains 제품의 70% 이상이 Java로 구축**되어 있었고, 나머지 대부분은 Microsoft의 C#으로 작성되어 있었습니다. Java는 매우 강력했지만 보일러 플레이트 코드로 인해 유지 보수가 어려워졌습니다. 그래서 JetBrains는 이전 코드를 있는 그대로 유지하면서 새로운 언어로 새 기능을 추가할 수 있도록 **Java와 100% 호환되는 언어가 필요**했습니다. 이를 위해 Scala, Groovy와 같은 언어로도 시도를 해봤으나 여러 한계점이 있어서, 결국에는 JetBrains가 원하는 모든 기능을 갖춘 새로운 언어를 만들기로 결심하게 됩니다. 

또한, 젯브레인즈는 코틀린을 개발하는 과정에서 다음 3가지에 주목했습니다. 

![image](https://user-images.githubusercontent.com/68090939/198894124-6ae40f82-19e5-48b1-a413-830bc2809e3b.png)

1. 적어도 자바만큼 빠를 것.  
2. 자바와 100% 호환될 것. 
3. 간결하고 표현적인 코드일 것. 

이러한 가치를 중시하여 코틀린이라는 언어가 탄생하게 됩니다. 

<br>

## 코틀린 공식 릴리즈 (2016)

그리고 2016년에 코틀린 버전 1.0이 공식적으로 릴리즈 됩니다! 

![image](https://user-images.githubusercontent.com/68090939/198894329-666ed5a8-1488-4af8-9cc1-689cc99dd21e.png)

<br>

---

# 안드로이드의 공식 지원 

## Kotlin on Android. Now official (2017)

그리고 2017년부터 코틀린에 대한 관심과 인기가 급격히 증가하게 되는데요, 그 이유는 바로 **2017년 구글 I/O에서 코틀린이 안드로이드 개발을 위한 공식 언어로 채택**되었기 때문입니다! 많은 개발자들의 환호를 받으며 코틀린은 안드로이드 개발에 본격적으로 사용되게 됩니다.

![image](https://user-images.githubusercontent.com/68090939/198894439-acf06d9a-d99b-443c-9338-bafcd533133a.png)

<br>

## Kotlin-first Android (2019)

그리고 2019년 구글 I/O에서 안드로이드 팀은 코틀린을 우선으로 안드로이드 개발을 할 것이라고 발표하게 됩니다. 이후 현재는 60%가 넘는 안드로이드 개발자들이 코틀린으로 앱을 개발하고 있다고 합니다. 

![image](https://user-images.githubusercontent.com/68090939/198894465-bdec174e-4f08-4e59-962e-1767f786fc88.png)

<br>

---

# 본격! 코틀린의 매력 탐방! 

## Statically Typed 

![image](https://user-images.githubusercontent.com/68090939/198894612-730d051c-ce15-48f0-b8e6-6f38160d1da9.png)

## Inter-operable (자바와 100% 호환)

![image](https://user-images.githubusercontent.com/68090939/198894639-d5f3388a-1a39-4246-bc0a-64006eab480c.png) 

## Null-Safety 

![image](https://user-images.githubusercontent.com/68090939/198894649-bd71efbc-63c5-4b19-a716-480cfd99eab5.png)

## Immutable 

![image](https://user-images.githubusercontent.com/68090939/198894696-c5a625bf-c03c-457e-ba56-32342dee0d3d.png)

## Concise 

![image](https://user-images.githubusercontent.com/68090939/198894757-c0676a9e-a06e-44f6-b280-7f3d76abac1b.png)

## Coroutine 

![image](https://user-images.githubusercontent.com/68090939/198894769-89148145-dbbf-4793-8160-5eb58822198b.png) 

## Extension Function 

![image](https://user-images.githubusercontent.com/68090939/198894782-9396266c-eeb5-4d24-b5fb-8534f9df4de8.png)

## 함수형 프로그래밍 

![image](https://user-images.githubusercontent.com/68090939/198894792-bbb55da8-4332-444e-ac46-fc877ebee740.png)

<img width="350" src="https://user-images.githubusercontent.com/68090939/198894891-1593599d-1bc9-4563-873c-57aafd96957c.gif">

<br>

---

# 코틀린의 활용 분야 

## 코틀린이 이런데도 쓰인다고?!

코틀린은 안드로이드 개발에만 사용되는 언어가 아닙니다. IOS와 안드로이드의 로직을 공유하는 멀티플랫폼 모바일, 웹 풀스택 개발, 심지어는 데이터 사이언스 분야에서도 코틀린을 사용할 수 있습니다. 

![image](https://user-images.githubusercontent.com/68090939/198894993-88fb2eee-c308-4bdd-95bb-3850aea75633.png)

<br>

## 코틀린 멀티 플랫폼의 작동 방식 

Common Kotlin에는 언어, 핵심 라이브러리, 그리고 기본 도구가 모두 포함되어 있습니다. Common Kotlin으로 작성된 코드는 Kotlin/JVM, Kotlin/JS, Kotlin/Native와 같이 다양한 플랫폼에서 모두 작동합니다. 

![image](https://user-images.githubusercontent.com/68090939/198894981-140bfe6b-c910-4ccd-ab12-4d58854f6f0d.png)

<br>

## Kotlin/JVM

- 코틀린을 JVM에서 작동시키기 위한 컴파일러
- 코틀린 표준 라이브러리는 자바 클래스 라이브러리를 기반으로 작성되어 있음. 
- 일반적으로 안드로이드 및 서버 사이드 (스프링 프레임워크 등) 개발에 사용됨. 
- 자바와의 상호운용성을 보장함.

<br>

## Kotlin/JS

- 코틀린을 브라우저 및 Node.js 등 자바스크립트 엔진에서 작동시키기 위한 컴파일러
- 타입 스크립트의 타입 정의 파일을 감지 및 생성할 수 있고, 코틀린 표준 라이브러리에서 사용하지 않는 코드를 제거하는 플러그인이 내장되어 있음. 
- 자바스크립트와의 상호운용성을 보장함. 

<br>

## Kotlin/Native 

- 코틀린으로 응용 소프트웨어를 개발하기 위한 컴파일러로, LLVM (Low-Level Virtual Machine)을 기반으로 작동함. 
- LLVM 기반의 네이티브 컴파일을 지원해서 여러 타깃의 앱을 만들 수 있음.  
  - IOS (arm32, arm64, emulator x86_64)
  - MacOS (x86_64)
  - Android (arm32, arm64)
  - Windows (mingw x86_64)
  - Linux (x86_64, arm32, MIPS, MIPS little endian)
  - WebAssembly (wasm32)

<br>

## Kotlin for Data Science 

![image](https://user-images.githubusercontent.com/68090939/198895173-5246bb2a-dc5a-4c5e-8cb0-69e4e82fabb3.png)

<br>

--- 

<br>

여러분도 이 세미나를 통해 코틀린의 매력에 빠지셨나요?! 사실 이렇게 말로만 들어서는 확 와닿지가 않으실텐데요, 실제로 여러분이 직접 코틀린을 사용해보면서 그 장점을 확실히 체감해보셨으면 좋겠습니다! 다들 발표 들어주셔서 감사합니다 🙇‍♀️

