---
layout: post
title: 네 번째 세션 - 앗, 코틀린! 자바보다 짧다!
date: 2021-10-08 14:55 +0900
author: comye1
categories: ["seminar"]
---

지난 10월 5일, GDSC Seoultech의 네 번째 정기 세션이 진행되었습니다.  
네 번째 세미나의 주제는 **앗, 코틀린! 자바보다 짧다!** 였습니다.

# Agenda

1.  코틀린이 뭐야?
2.  JetBrains는 이렇게 말했다.
3.  코틀린의 탄생 배경
4.  비슷한 시기 구글은..
5.  정말 자바보다 짧다!
6.  코틀린의 현재와 미래

---

# 코틀린이 뭐야?

대부분은 코틀린이라는 말을 프로그래밍 언어의 이름으로 처음 들어보셨을 텐데요. 사실 코틀린은 러시아의 상트페테르부르크에 있는 섬의 이름입니다!
코틀린을 만든 JetBrains의 지사가 상트페테르부르크에 위치해 있어서 새 언어의 이름을 코틀린 섬에서 따왔다고 합니다.

<img src="https://user-images.githubusercontent.com/50735594/136506479-1e6f0bd1-4015-4d85-96c7-49222cc6d909.png" width="500dp"/><img src="https://th.bing.com/th/id/OIP.rno28c1JQkMqJ6RcNbS8_AAAAA?pid=ImgDet&rs=1" width="200dp"/>

코틀린 개발자로서 한번쯤 가보고 싶다는 생각이 드네요😊

코틀린을 개발한 JetBrains는 사실 IDE를 전문으로 개발하는 회사입니다. 
가장 유명한 IntelliJ IDEA가 대표적인 상품이고
IntelliJ IDEA를 기반으로 다른 IDE를 만든다고 합니다. 
여러분들이 많이 들어보셨을 것 같은 PyCharm도 이를 기반으로 만든 JetBrains가 만든 IDE입니다.

---
# JetBrains는 이렇게 말했다.

JetBrains는 2010년에 코틀린을 개발하기 시작합니다.

<img src="https://user-images.githubusercontent.com/50735594/136507991-551446ad-2414-41c7-aebf-be427b061202.png" width="500dp"/>

2011년에 Hello World라는 제목으로 코틀린을 만들고 있다는 소식을 알립니다.
오늘날의 개발 환경에 맞게 생산적이면서 동시에 심플한 개발 도구를 만들고 있다고 적혀 있네요.

<img src="https://user-images.githubusercontent.com/50735594/136508421-45ad09ee-ba4e-40bb-bebb-b7fd681f795d.png" width="500dp"/>

이 글은 왜 JetBrains에게 코틀린이 필요한지에 대한 내용입니다.
자신들이 왜 코틀린에 이런 노력과 투자를 쏟고 있는지 이야기를 합니다. 

그 이유 중 첫번째는 IDE 개발에 생산성을 높이기 위해서였습니다. 당시에 자바로 개발을 하고 있었습니다.

두번째 이유는 인텔리제이 아이디어의 판매 실적을 올리기 위해, 

세번째는 새로운 프로그래밍 언어는 언제나 사람들의 관심을 받기 때문이라고 밝혔습니다.

---
# 코틀린의 탄생 배경

위에서 보았듯 JetBrains는 Java로 IDE를 개발하고 있었습니다. <br>
그런데 자바로 개발을 할 때 작성하게 되는 보일러 플레이트 코드가 굉장히 많다는 점! 느껴 보셨죠? <br>
클래스를 작성할 때 필드의 세터 게터 이런 것들을 전부 개발자가 작성을 해야 합니다. <br>
개발자가 작성한 코드는 아무리 형식적일지라도 한 줄 한 줄이 유지보수해야 할 대상이 되기 때문에 개발자들이 고통을 겪었던 것입니다.

![image](https://user-images.githubusercontent.com/50735594/136509474-aed802f4-16e2-49c9-8921-fcf4e03f339c.png)
~~이 짤 제가 만들었어요~~
<img src="https://www.memecreator.org/static/images/memes/4829722.jpg" width="250dp"/>

그러면 다른 언어로 새로 개발을 할 것이냐? 생각만 해도 머리가 아픕니다.


![image](https://user-images.githubusercontent.com/50735594/136510186-f94f3376-7176-42e5-8a6f-166e04011dec.png)

들어가는 시간과 비용이 상당할 것으로 예상됐습니다.

그래서 모던 언어이면서 자바와 호환되는 언어를 고려하기 시작합니다. <br>
그루비, 클로저, 스칼라가 있었는데 가장 언어적으로 마음에 든 것은 스칼라였다고 합니다.<br>
그런데 스칼라의 컴파일 시간이 너무나도 느렸던 것이 문제였습니다.


결국 새로운 언어를 만들기로 결정하게 되었습니다.

- 자바만큼 빠를 것
- 자바와 100프로 호환될 것
- 간결하고 표현적인 코드일 것


이라는 조건으로 말이죠 🤩

바로 그 결과가 코틀린입니다!

---
# 비슷한 시기 구글은..

하필, 우연히도
비슷한 시기에 구글에게도 고민거리가 생겼습니다.

## 구글 vs 오라클

자바를 개발한 썬 마이크로시스템즈를 오라클이 인수를 하고 바로 구글을 고소합니다.<br>
안드로이드 운영체제에 자바 API를 사용한 것은 저작권의 침해라는 것이었습니다.

물론 자바 언어 자체는 오픈소스이지만 자바의 선언부를 베껴 써서 이 부분에 대한 소송이 진행되게 됩니다.

한참 소송중이던 2015년에는 구글에게 불리한 판결이 내려졌습니다. (물론 소송은 한참 나중까지 진행됩니다.)<br>
구글은 일단 안드로이드 누가 버전부터 open JDK로 새로 작성합니다.

구글은 자바를 대체할 언어가 필요했습니다. <br>
소송 때문이 아니더라도 자바에서 벗어나고 싶었습니다.<br>
마이크로소프트나 애플이나 자신들의 플랫폼을 위한 언어를 만들어서 사용하고 있는데 
구글은 그렇지 못했던 것입니다.<br>
자바가 범용적인 만큼 안드로이드에 특화되기는 더욱 어려웠습니다. <br>
때문에 개발자들도 더욱 재밌게 사용할 수 있는 언어를 원했습니다.

## 코틀린 공식 릴리즈 (2016)
<img src="https://user-images.githubusercontent.com/50735594/136513780-d70eba71-41b7-4674-a13c-218b9e79ea9a.png" width="500dp"/>

얼마 뒤인 2016년에 코틀린이 공식으로 출시됩니다. <br>
JVM과 안드로이드를 위한 프로그래밍 언어. <br>
객체 지향과 함수형 기능을 결합했으며 <br>
**자바와의 호환성, 안전성, 명확성, 그리고 툴링**에 집중했다고 하니 <br>
구글과 안드로이드 개발자들이 찾던 그런 언어였던 것입니다.

## 안드로이드 코틀린 공식 서포트 (2017) 그리고 Kotlin-first (2019)
<img src="https://user-images.githubusercontent.com/50735594/136516552-a4da959d-b20a-426e-aa28-b47c7f63942a.png" width="300dp"/>
코틀린은 안드로이드 개발자들의 성원을 받으며 2017년에 안드로이드 공식 서포트를 받게 됩니다. <br>


- 자바에 비해 간결하고 표현적인 코드를 작성할 수 있다는 점
- 코틀린에서는 개발자가 null을 허용할지를 결정하게 만듦으로써 자바의 NullPointerException 문제를 해결한 점
- JetBrains의 IDE 차원 지원으로 코틀린 사용 및 자바코드에서의 변환이 쉬웠던 점

덕분이었습니다.

2019년에는 안드로이드가 **Kotlin-first를 선언**하며 앞으로의 라이브러리 개발에 코틀린을 우선시하겠다고 밝혔습니다. <br>
현재는 안드로이드 프로 개발자 중 60% 이상이 코틀린을 사용하고 있다고 합니다. 😮😆

---
# 정말 자바보다 짧다!
제목부터 코틀린이 자바보다 짧다고 했으니 이제 그 이야기를 하겠습니다. <br>
안드로이드가 공식 서포트를 선언하면서 소개했던 내용들을 빌려 와봤습니다. <br>

## 코틀린 기본사항
- 프로그래밍 패러다임 - 객체지향, 함수형, 비동기, 스크립트
- 정적 타입 언어 + 타입 추론

## 자바와 코틀린에서 클래스 작성 비교
![04 앗!코틀린, 자바보다 짧다(예원) pptx](https://user-images.githubusercontent.com/50735594/136518029-54e49c71-5efe-40bd-975f-52f85e8fad24.jpg)

자바에서 Customer 클래스를 구현해보았습니다. <br>
name, email, company 필드가 있고 각각의 getter, setter와 클래스 생성자, toString & equals 메소드를 구현한 코드입니다.<br>

``` kotlin
data class Customer(
  var name: String, 
  var email: String = "",
  var company: String = ""
)
```
코틀린에서는 이렇게 다섯 줄이면 모든 것이 해결됩니다!

<img src="https://user-images.githubusercontent.com/50735594/136518515-cd1bf689-9b57-415f-9074-2e8863334b24.png" width="500dp">

이러한 실행 결과를 확인할 수 있습니다:) 참고로 [코틀린 Playground](https://play.kotlinlang.org/)에서 자유롭게 코드를 실행해볼 수 있습니다.

또한 
``` kotlin
 var age:Int = 0
 	get() = field + 1
 	set(value)
   {field = if(value>=0) value else 0} // val 의 경우 getter만 정의 가능
```
이러한 방식으로 getter 및 setter를 필요한 대로 바꿀 수 있으며 OOP에서 핵심인 은닉 또한 가능합니다.<br>
코틀린, 정말 깔끔하지 않나요?!

## 코틀린의 null-safety

자바를 쓰면서 NullPointerException 다들 만나보셨을 텐데요. <br>
자바는 null을 허용하기 때문에 런타임에 예외가 발생하게 됩니다. <br>

코틀린은 이 문제를 해결하기 위해 nullable 타입을 도입했습니다. <br>
기본적으로는 null이 될 수 없고, 
물음표를 붙이면 null을 대입할 수 있게 한 것입니다. <br>
그러니까 **String? 타입**의 값은 **String이거나 null**인 것입니다. <br>
이렇게 해서 개발자의 필요에 따라 null을 허용하고 문제를 처리하도록 만들었습니다.

```kotlin
var neverNull: String = "something"
var mightBeNull: String? = null // "?" indicates this can be null
if (neverNull.length > 0) {   // This is OK
    …
}
if (mightBeNull.length > 0) { // Compiler catches this error for you
    …
}
```
nullable로 선언하고 length 속성에 접근했을 때 컴파일러가 바로 에러를 감지합니다!

## 명시적 인자와 기본 파라미터
```kotlin
fun orderPizza(size: Size,
               pepperoni: Boolean = false,
               mushrooms: Boolean = false,
               ham: Boolean = false,
               pineapple: Boolean = false,
               pickles: Boolean = false,
               sausage: Boolean = false,
               peppers: Boolean = false,
               onion: Boolean = false)
{
    ...
}

orderPizza(Size.LARGE, ham = true, mushrooms = true
```
인자에 기본값을 지정하고 원하는 파라미터만 이름을 통해 전달하여 더욱 간결하며 표현적인 코드를 작성할 수 있습니다.

## 폭넓게 사용할 수 있는 when문
```kotlin
when {
    password.equals("password") -> println("Insecure password!")
    password.length < 4 -> println("Too short!")
    else -> {
        println("Secure password!")
    }
}
```
코틀린의 when문은 우리가 아는 switch-case 문과 비슷한데요. <br> 
더욱 폭넓게 사용할 수 있습니다. <br>
코틀린의 when 내에서 **다양한 표현식을 체크해서 분기**시킬 수가 있습니다. <br>
예시 코드의 경우 패스워드라는 스트링이 password 단어인 경우, 패스워드 길이가 4보다 짧은 경우를 체크하는데 <br>
if와 else if로 작성했을 때 가독성이 굉장히 떨어질 수 있는 부분이 <br>
작성하기도 이해하기도 훨씬 쉽게 바뀐 것을 보실 수 있습니다.

## 확장 함수
```kotlin
// The "String." prefix indicates that this method should
// extend the existing String class
fun String.toPigLatin() : String {
    ...
}
val plainOldString : String = "some text"
// Can now call toPigLatin as if were a method on String
println(plainOldString.toPigLatin())
// Or:
println("some text".toPigLatin())
```
코틀린의 확장함수를 사용하면 <br>
기존에 정의된 클래스, 예시처럼 String 클래스를 상속하지 않고도 함수를 추가할수 있습니다. <br>
마치 클래스 멤버 함수처럼 사용을 할 수가 있게 됩니다. <br>

---
# 코틀린의 현재와 미래
<img src="https://user-images.githubusercontent.com/50735594/136521009-41f2e4b4-3ffd-4b67-a9ec-919b37ece2f3.png" width="800dp">

코틀린은 현재 멀티플랫폼 모바일, 서버에서, 웹 프론트엔드에서, 또 제가 공부하고 있는 안드로이드에서 사용할 수 있는 
다재다능한 언어로 활용되고 있습니다.<br>
Spring 프레임워크도 안드로이드처럼 코틀린을 공식 언어로 채택하여 코틀린을 이용한 서버개발이 활발히 이루어지고 있습니다!

<img src="https://user-images.githubusercontent.com/50735594/136521052-b7091e9a-0ef4-4a3d-8443-a7ecb624d121.png" width="600dp">

그리고 이러한 미래를 그리고 있다고 합니다. <br>
[10 years of Kotlin](https://kotlinlang.org/lp/10yearsofkotlin/) 여기에서 확인해 보세요 🤗

---
# 마무리

이번 세미나에서는 **코틀린의 탄생 배경과 몇 년 후 자바를 제치게 된 이야기 + 코틀린의 핵심적인 특징들**까지 알아보았습니다!!

혹시 잊은 건 없나요 ?? 오라클과 구글의 소송은 어떻게 되었을까요? <br><br>
불과 몇 달 전인 2021년 4월 5일, 미국 연방대법원은 <br>
구글이 안드로이드에 자바 API를 사용한 것은 공정이용에 해당하므로 저작권 침해를 인정할 수 없다. <br>
라는 판결을 내렸다고 합니다.

긴 글 읽어주셔서 감사합니다! 
