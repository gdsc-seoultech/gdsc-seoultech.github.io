---
layout: post
title: Android 7주차의 추억
date: 2021-11-16 12:58:59
description: 
author: KangInyeong
categories: ["android"]
---

# 11월 16일 Android 커리큘럼 7주차
그동안은 안드로이드의 멤버분들이 복습 블로그를 정성스레 업로드해 주셨는데요. 드디어 다시 저의 차례가 되었답니다 :) 반가워요 여러분!! 그렇다면 지난주 승언 님의 복습에 이어서 이번 주에도 "Chegg Prep" 어플리케이션 클론 코딩을 이어나가봅시다~!

<br>
<br>

## Pager layouts 알아보기
![](https://images.velog.io/images/kiyoog02/post/5ee1e0a0-793a-4c3c-a954-8a7f1a823006/image.png) 
**Pager layouts**은 'Accompanist'에서 제공하는 __Jetpack Compose를 위한 라이브러리__ 중에 하나이며, 기존 안드로이드의 ViewPager와 비슷하다고 생각하시면 된답니다. 이름에서부터 알 수 있듯이 레이아웃을 페이지 넘기는 것처럼 구현하는 것인데요. 해당 라이브러리는 API를 이용해서 지원되는데 아직 개발 진행 중이기에 __'@ExperimentalPagerApi'__ 어노테이션과 함께 사용해 주셔야 한답니다!

**- Pager의 종류**
- HorizontalPager : 항목들이 가로로 배치되며 가로 스와이프가 가능한 레이아웃
- VerticalPager : 항목들이 세로로 배치되며 수직 스와이프가 가능한 레이아웃


**- Pager와 함께 알아야 하는 것**
- Lazy 생성 방식 : HorizontalPager와 VerticalPager는 사용자가 페이지를 스와이프 할 때에 필요하지 않은 페이지는 제거하는 식의 lazy한 생성 방식을 가짐.
- content 파라미터 : 페이지 수 지정할 때에 필요시 됨.
- state 파라미터 : 전달하지 않으면 자동으로 생성되고, 외부에서 pagerState remeber과 함께 전달 및 사용됨.

- gradle에 아래의 코드를 추가한 후 사용 가능. ( 작성일 기준으로 version은 0.19.0 사용 )

```kotlin
/* dependencies {
    implementation "com.google.accompanist:accompanist-pager:<version>"

    // If using indicators, also depend on 
    implementation "com.google.accompanist:accompanist-pager-indicators:<version>"
} */
```

<br><br>

## CreateScreen 구현
![](https://images.velog.io/images/kiyoog02/post/93575fff-b9e8-4eea-bb31-350bd69b705d/image.png)  
상단에는 Scaffold를 활용한 topBar 그리고 오른쪽 하단에는 floatingActionButton이 있습니다. 카드를 생성하는 화면이기에 중앙에는 카드의 앞과 뒤에 내용을 작성할 수 있는 UI가 있답니다. <br>

### CreateCardScreen 컴포저블 함수 사용
```kotlin
CreateCardScreen(
    cardList = cardList, //SnapshotStateList<Card> 전달
    setCard = { index, card ->
        cardList[index] = card // Card 수정
    },
    addCard = { cardList.add(Card("", "")) }, // 새로운 Card 추가
    removeCard = { index ->
        cardList.removeAt(index) // Card 삭제
        if (cardList.size == 0) cardList.add(Card("", ""))
        // card가 cardList에서 삭제된 후 cardList의 사이즈가 0이면 비어 있는 새로운 Card 추가
    },
    navigateBack = { navController.popBackStack() },
    onDone = { Log.d("cardList", cardList.joinToString("\n")) }
)
```
CreateScreen은 ViewModel을 가지며, mutableStateListOf로 Card 형식의 cardList를 생성하여 card 정보들을 가지고 해당 card 정보가 해당 스크린에서 주요하게 사용됩니다. `val cardList = remember { mutableStateListOf(Card("", "")) }` 코드를 통해 Card로 이루어진 cardList에 하나의 Card를 비어 있도록 초기화하고, cardList는 CreateCardScreen으로 전달됩니다. 최종적으로 when 문을 통해 뷰모델의 createScreenState의 값이 createSate의 Cardscreen이라면 위의 코드가 실행되어 card를 수정, 생성, 삭제 가능하도록 구현할 수 있다는 것입니다! <br>


### HorizontalPager 사용
```kotlin
HorizontalPager( 
    count = cardList.size,
    state = pagerState, // 선언된 pagerState 사용 (선언하지 않으면 내부에서 자동으로 사용)
    contentPadding = PaddingValues(start = 32.dp, end = 32.dp) // 양쪽에 이전&다음 카드 보기
) { page ->
    CardItemField(
        card = cardList[page], // cardList에서 page에 해당하는 card 전달
        setCard = { card ->
            setCard(page, card) // CardItemField가 전달하는 card 정보로 해당 page를 set
        },
        removeCard = { removeCard(page) } // page에 해당하는 card 삭제
    )
}
```
Pager layouts를 활용해 볼 타이밍~! 🎺   
`val pagerState = rememberPagerState()`의 pagerState를 통해 페이지의 수, 현재 페이지 등의 Pager 상태를 파악할 수 있습니다. 이전 페이지 수를 기억하기 위해 `var prevPageCount by remember { mutableStateOf(pagerState.pageCount) }` 코드를 작성할 수 있고, 해당 prevPageCount는 Pager의 스크롤 애니메이션을 처리할 때 사용한답니다.

<br><br>


## PracticeScreen 구현
![](https://images.velog.io/images/kiyoog02/post/cceef87e-d157-46aa-9555-3450d83187be/image.png)  
상단의 __topBar__ 는 CreateScreen과 거의 유사하므로 설명을 생략하고 넘어가 보겠습니다! 모두들 알 거라고 믿습니다??!!🏄‍♀️ __ProgressBar__ 는 멤버분들이 과제로 구현해 보았던 UI인데요. 본 스크린에서는 카드의 스와이프 진행에 따라 progressBar 게이지가 채워집니다. 아래의 __Card__ 는 CreateScreen에서 생성한 대로 앞과 뒤에 각 내용이 들어가 있습니다. 또한, __HorizontalPager__ 를 사용하여 스와이프가 가능하고, __Flip__ 기능을 통해서 카드를 클릭 시 앞면 -> 뒷면 / 뒷면 -> 앞면으로 전환할 수 있습니다. 멋지죠?! <br>

### Flip 기능
[Stackoverflow](https://stackoverflow.com/questions/68044576/how-to-make-flipcard-animation-in-jetpack-compose) 에 있던 Flip 기능 구현 방식을 예원 코어님이 발견하시어 CheggPrep에도 적절히 녹여내어 주셨답니닷! CardFace라는 __enum 클래스__ 를 생성하여 angle에 따라 Front와 Back을 구별해 주고, Front의 next로는 Back / Back의 next로는 Front를 가져옵니다.
```kotlin
var cardFace by remember {
    mutableStateOf(CardFace.Front)
} // 카드의 앞면, 뒷면 상태

 /*..생략..*/

Card(
    onClick = {  cardFace = cardFace.next  }, // 클릭하면, 카드 뒤집기
    modifier = modifier
        .graphicsLayer {
            // 변화하는 rotation 값을 rotationX 또는 rotationY로 사용
            if (axis == RotationAxis.AxisX) {
                rotationX = rotation.value
            } else {
                rotationY = rotation.value
            }
            cameraDistance = 12f * density
        },
)


```

<br><br>


## Repository 패턴이 뭘까요?
![](https://images.velog.io/images/kiyoog02/post/92c3f27d-eb66-410d-b250-6c6eb38ab4dc/image.png)  
**Repository 패턴**은 **Android Jetpack의 권장하는 앱 아키텍처**입니다. <br>
Activity 또는 Fragment에 모든 코드를 작성하게 되면 '관심사 분리'가 어려워서 문제가 발생할 수 있답니다. 그렇기 때문에 Jetpack Compose와 같은 UI 기반의 작동을 관리하기 위해서는 클래스를 가볍게 유지하고 Life Cycle 관리에 주의를 기울여야 합니다. 즉, 클래스에 대한 **의존성을 최소화**해야 하는 것이죠. <br>
위 사진의 예시를 통해 자세히 알아봅시다! 각 구성요소는 다른 하나의 구성요소 아래에 종속되고 있습니다. Repository는 DataSource를 캡슐화하며 ViewModel이 데이터를 요청하면 상황에 따라 Model(지속 데이터 모델)과 Remote Data Source(원격 백엔드 데이터 소스)에서 데이터를 가져와서 전해 줍니다. 즉, 데이터를 로컬에서 보존하다가 사용할 것인지, 백그라운드에서 업데이트를 통해 다시 불러와서 사용할 것인지를 결정해 주는 것이죠-! <br>
이 외에도 Repository 패턴에 대한 내용이 더 궁금하다면 [안드로이드 공식 문서](https://developer.android.com/jetpack/guide#overview) 를 참고해주세요😉


<br><br>

## Hilt는 무엇일까요?
클래스의 의존성을 줄이기 위해서 외부에서 생성된 객체를 수정하여 주입하는 방식으로 객체를 변경할 수 있는데요. 이것을 **'의존성 주입(Dependency Injection)'** 이라고 합니다. 의존성 주입 방식으로는 생성자 주입과 필드 주입이 있다고 합니다. 어렵죠?! ㅠㅠ 또한, 의존성 주입을 통해서 __Reusability of code__, __Ease of refactoring__, __Ease of testing__ 의 장점을 가질 수 있다고 합니다. 이러한 의존성 주입을 쉽게 해주기 위해서 안드로이드 의존성 주입 라이브러리 __'Dagger'__ 가 존재하는데요. Dagger를 기반으로 하며 더욱 사용하기 편하게 만든 것이 __'Hilt'__ 라고 보시면 됩니다. 고로 의존성이 높아지면 이러한 자동 의존성 주입 라이브러리를 활용하여 __런타임에 연결__ 또는 __컴파일 타임에 연결__ 방식으로 의존성을 관리할 수 있답니다. (추가로 런타임보다 컴파일이 더욱 안정성이 높다고 합니닷!)
-> 조금은 어려운 개념이기에 일단 간단하게 여기까지만 진행했습니다...! 😥

<br><br>

## 마무리
자..! 오늘은 스크린 구현 코드의 양도 많고, 개념 부분도 전보다 난이도가 올라 쉽지 않으셨을 것 같아요. 모두들 이해하기 힘드셨겠지만 스스로 시간을 들여 공부하다 보면 어느 순간 익숙해지고, 조금 더 쉽게 받아들일 수 있는 날이 오게 될 거라고 생각합니다! 저도 더 열심히 해보겠습니다!! 이번 주 세션도 다들 수고가 많으셨어요~! 다음 주에 웃는 얼굴로 뵙시다 😊 모두들 허리 펴고 스트레칭 한 번 하기🦾