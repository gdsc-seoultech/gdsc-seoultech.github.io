---
layout: post
title: Andriod와 나는 운명일까?
date: 2021-10-08 12:00:00 +0900
author: Yangyongsu
description: "안드로이드 3주차 복습"
categories: ["1st_term"]
tags: ["android"]
---

# 시작하기에 앞서...

안녕하세요 안드로이드 맴버 양용수입니다.
<br>제가 첫 복습 맴버로 선정되었습니다. _너무 신나~~!_

얼마전까지만 해도 제가 이런 코드를 공부하고 연습할 거라고 상상도 못했습니다. <br>
'내가 감히...' 이런 느낌이랄까...

~~그래서 따라가기 좀 버거워요.~~ 아마 안드로이드 맴버님들은 모두 눈치 채셨겠지만 세션 들어가면 급격히 우울해지는 그런 느낌이랍니다. 근데 또 뭔가 하면 또 알 것 같고, 알 것 같으면 또 기분 좋고, 안되다가 되면 기분 좋고 뭐... 예... 그렇습니다.

근데 오늘 코어맴버님인 인영님이 이런 말을 하더라구요.<br>
_"안드로이드를 운명으로 생각하세요~^^"_

뭐...제가 듣기에는 약간 _"용사여 일어나세요!"_ 뭐... 이런 느낌이었습니다.

자! 그래서! **일단 해보자!** 그런 마인드로, 운명이라고 생각하고 나름 긍정적인 마인드 갖고 출발하는, 코딩 최약체 양용수의 안드로이드 세션 3주차 복습 리뷰 시작하겠습니다.<br>

# 복습

## Screen Package로 옮기기

지난주까지 저는 하나의 **MainActivity.kt** 에서만 작업을 진행해왔습니다. 하지만 이제 진짜 어플을 구성하는 작업을 해주었습니다.<br> 바로 **Package** 를 만들어서 정리하는 작업입니다.
**Screens** 라는 **Package** 를 만들어 **MainActivity.kt** 에 있는 코드들을 옮겨와 작업합니다.

HomeScreen.kt - HomeScreen, FilterSection, FilterText, DeckItem, MakeMyDeck <br>
SearchScreen.kt - FindFlashCards, SubjectItem <br>
CreateScreen.kt - DeckTitleTextField<br>
MoreScreen.kt <br>

![패키지 묶기](https://i.esdrop.com/d/0ozqkozkzp8j/VZPXkYbnx4.png)

이런 식으로 만들어줍니다!

이렇게 옮겨옵니다. 옮겨올때는 crtl+x 단축기를 활용할 수 있습니다.<Br>

---

## HomeScreen.kt

이 곳에서는 지난시간까지 열심히 만들었던 홈스크린을 작업합니다.

바로 이 화면이죠.

![홈스크린](https://i.esdrop.com/d/0ozqkozkzp8j/sDtLXcBLuP.png)

그리고 아래에 **MakeMyDeck** 버튼도 추가해줍니다.

```kotlin
@Composable
fun MakeMyDeck(onClick: () -> Unit) {
    Column(modifier = Modifier
        .fillMaxWidth()
        .border(
            width = 2.dp,
            color = Color.LightGray
        )
        .clickable(onClick = onClick)
        .padding(20.dp)) {
        Text(
            text = "Make your own cards",
            style = MaterialTheme.typography.h5,
            fontWeight = FontWeight.Bold
        )
        Spacer(modifier = Modifier.height(4.dp))
        Text(
            text = "It's easy to create your own flashcard deck -for free.",
            style = MaterialTheme.typography.subtitle1,
            fontWeight = FontWeight.Bold,
        )
        Spacer(modifier = Modifier.height(4.dp))
        Row(
            modifier = Modifier.fillMaxWidth(),
        ) {
            Icon(
                imageVector = Icons.Default.NoteAdd,
                contentDescription = "bookmark",
                tint = Color.Blue
            )
            Text(
                text = "Get started",
                style = MaterialTheme.typography.subtitle1,
                fontWeight = FontWeight.Bold,
                color = Color.Blue
            )
        }
    }
}
```

이렇게 추가하면 아래에 이렇게 하나의 버튼이 더 만들어줍니다.

![최종home화면](https://i.esdrop.com/d/0ozqkozkzp8j/F2BuQ1Ge8f.jpg)

얍! <br> 여기까지는 지난주까지 계속 적은 코드입니다. 그럼 이제 다음으로 넘어가보겠습니다.

---

## Search

이제 요리할 부분은 Search 부분입니다.
원래는 왼쪽 화면과 같이 클론을 따는게 목적이지만 지금은 편의상 오른쪽으로 화면구성을 하였습니다. <br>
![search창](https://i.esdrop.com/d/0ozqkozkzp8j/MWZcznkgEH.png)

## Scaffold를 활용한 topBar

```kotlin
Scaffold(
        topBar = {
            TopAppBar (
                elevation = 0.dp,
                backgroundColor = Color.Transparent,
                title = {
                    Row(
                        horizontalArrangement = Arrangement.Center,
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Text(
                            text = "Find flashcards",
                            style = MaterialTheme.typography.h5,
                            fontWeight = FontWeight.Bold

                        )
                    }
                }
            )
        }
    )
```

스케폴드를 활용해서 탑바를 만들었다면 이제 검색창을 만들어볼 차례입니다.

---

### FindFlashCard

검색창은 클릭할 수 있게 활성화해주어야겠죠?

```kotlin
FindFlashCards(onClick:()->Unit)
```

후에 **modifier**에서 세부 설정을 해줍니다.

그 후에 오랜지색의 짧은 나눔 바와 그 다음에 나오는 네모 창을 그려보겠습니다. 아래에 나오는 코드는 탑바를 그린 스케폴드 밑에 코드를 추가하시면 됩니다.
<br>

```kotlin

{
        Column(
            Modifier
                .fillMaxSize()
                .padding(vertical = 8.dp, horizontal = 16.dp)
        ){
            FindFlashCards(onClick ={})
            Spacer(modifier = Modifier.height(24.dp))
            Divider(
                Modifier
                    .fillMaxWidth(.15f)
                    .height(4.dp), color =DeepOrange
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = "Choose your subject",
                style = MaterialTheme.typography.h6,
                fontWeight = FontWeight.Bold
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = "Jump into studying with free flashcards that are right for you",
                style = MaterialTheme.typography.h6,
            )
            Spacer(modifier = Modifier.height(16.dp))
            repeat(7){
                SubjectItem()
                Spacer(modifier = Modifier.height(8.dp))
            }
        }
    }

```

여기서 눈여겨 볼 코드가 있다면 **FindFlashCards(onClick ={})** 과 **repeat(7)** 이지 않을까 싶은데요!

`FindFlashCards(onClick ={})`

<br> FindFlashCard 함수를 다시 불러와 안에 **onClick** 을 활성화 시켜주었고, <br>

`repeat(7){ SubjectItem() Spacer(modifier = Modifier.height(8.dp))}`

코드를 활용해서 위에서 그린 네모상자를 반복해줄 수 있습니다.

여기서 개인적으로 아직도 **padding** 에서 **vertical** 과 **horizontal** 값을 주는게 아직도 많이 헷갈리는데, 이 부분은 개인적으로 연습해야겠습니다.

---

## Creat

다음 볼 것은 creat 화면입니다.
여기서 중요하게 다뤄야 하는 부분은 바로 텍스트가 들어올 때에만 **Next** 버튼이 활성화되는 부분입니다.

먼저 **CreatScreeen** 에서 만들 화면은 이렇습니다.

![CreatScreen](https://i.esdrop.com/d/0ozqkozkzp8j/bNpwwwD5HM.jpg)

이 UI를 구성하는 것은 그 동안 배운 것들을 활용한다면 그렇게 어려운 부분은 아닐 것입니다. 하지만 지금 우리가 시도해볼 것은 바로 _Untitled deck_ 에 글자가 들어와야만 오른쪽 상단의 _Next_ 버튼을 활성화 시키는 작업입니다.

` val(deckTitle, setDeckTitle) = remember { mutableStateOf("") }`

**remember** 와 **mutableStateOf** 을 활용하여 **DeckTitle** 을 가져옵니다.

그리고 아래 **action** 코드으로 넘어가 **isNotBlank** 코드를 추가할 것입니다.

```kotlin

actions = {
                TextButton(onClick = { /*TODO*/ }, enabled = deckTitle.isNotBlank()) {
                    Text(
                        "Next",
                        style = MaterialTheme.typography.h6,
                        fontWeight = FontWeight.Bold
                    )
                }
```

바로 이렇게 말이죠.

`enabled = deckTitle.isNotBlank()`

**onClick** 뒤에 위 코드를 추가하시면 초기 상태 "" 일 때 활성화되지 않고 공백 문자만 계속 입력할 때에도 활성화 되지 않습니다. 아래 화면처럼요!

![before](https://i.esdrop.com/d/0ozqkozkzp8j/I15gALhtNE.jpg)

<br>

![after](https://i.esdrop.com/d/0ozqkozkzp8j/u8WJcdnVVn.jpg)

<br>

이렇게 **Next 버튼** 이 안에 텍스트가 들어감에 따라 활성화되는 것을 확인할 수 있었습니다!

---

## MoreScreen

마지막으로는 이 화면을 만들어 볼겁니다.

![MoreScreen](https://i.esdrop.com/d/0ozqkozkzp8j/OjePmFXG5p.jpg)
<br>

마지 어플에서 더보기와도 같은 창의 UI를 만들어보겠습니다.

최상단에 **TopBar** 를 메인함수에서 그대로 갖고오고,

**AccountSection** 을 구현합니다.

```kotlin

@Composable
fun AccountSection(name: String, signOut: () -> Unit, modifier: Modifier = Modifier) {
    Row(
        verticalAlignment = Alignment.CenterVertically,
        modifier = modifier
    ) {
        Icon(
            imageVector = Icons.Outlined.AccountCircle,
            contentDescription = "account image",
            Modifier.size(64.dp)
        )
        Spacer(modifier = Modifier.width(12.dp))
        Column {
            Text(
                text = "Hello $name",
                style = MaterialTheme.typography.h6,
                fontWeight = FontWeight.Bold
            )
            Text(
                text = "Sign out",
                color = MaterialTheme.colors.secondaryVariant,
                fontWeight = FontWeight.Bold,
                modifier = Modifier.clickable(onClick = signOut)
            )
        }
    }
}
```

그리고 **Column** 으로 **AccountSection** 을 구현한 것을 호출한 후 전에 구현해 놓은 **MoreItems** 까지 호출합니다.

여기서 한번 눈여겨볼 것은 바로 **swich** 버튼입니다.

상단 UI에서 확인할 수 있는 **Push Notification** 옆에 버튼이 하나 있습니다.

그것을 구현해보고 복습 마치겠습니다.

` val(notified, setNotified) = remember{ mutableStateOf(true) }`

**notified** 와 **setNotified** 를 기억시켜놓고,

```kotlin
                Switch(
                    checked = notified,
                    onCheckedChange = setNotified,
                    colors = SwitchDefaults.colors(
                        checkedThumbColor = DeepOrange,
                        checkedTrackColor = LightOrange
                    )
                )
```

Swich 코드를 알맞은 위치에 넣어주면~?

**짜잔~!**

![swichCodeAdd](https://i.esdrop.com/d/0ozqkozkzp8j/7el3ZsSNs5.jpg)

옆에 스위치가 생겨났습니다!
<br>
<br>
<br>

# 마지막으로

이렇게 gdsc코딩 최약체 양용수의 3주차 리뷰가 끝이 났습니다. ~~드디어~~

세션시간에는 헬렐레 따라가기만 하던 초딩 쾨약체 양용수가 저번주차의 모든 내용을 이해한 것 같습니다. 복습이 정말 중요하죠?<br>
최근에는 운이 좋게 GDSC 코어맴버님 집에 방문할 기회가 생겨서 이런 저런 얘기를 나눴습니다.<br>

저는 그 코어님과의 만남이 참 위로가 되더군요. 나보다 훨씬 잘하는 사람이 나보다 공부를 훨씬 많이 한다는 것에서 큰 충격을 받았습니다. 뭐 얼마 하지도 않고 징징댄 기분이었습니다. 당분간은 이 기억을 연료삼아 달릴 것 같습니다.

코딩 최약체 양용수의 글을 봐주신 여러분 정말 감사합니다. 싸이클이 한 번 더 돌면 다시 찾아뵙겠습니다.

~~그럼 이만... 방금 파스타 받았다~~~
