---
layout: post
title: Android 4주차 세션 복습
date: 2021-10-12
description: 
author: leeeha
categories: ["android"]
---

안녕하세요. 저는 GDSC 안드로이드 파트 멤버 이하은입니다. 이번 4주차 세션에서 진행한 내용을 복습해보겠습니다. 내용도 쉽지 않고 정리하다보니 많이 길어진 거 같은데 끝까지 잘 따라와주세요! 그리고 잘못 설명한 부분이 있다면 댓글로 꼭 알려주시기 바랍니다!

<br>

![image](https://user-images.githubusercontent.com/68090939/136978265-709bf3c1-26f0-42ad-abee-702315e21581.png)

저희는 1주차에 Jetpack Compose의 기초 UI를 실습하고, 2주차에 state의 개념 이해를 바탕으로 CheggPrep 앱의 여러 기능을 구현해봤습니다. 그리고 저번 3주차에는 다음 4가지 화면을 만들었습니다.<br>


1. 카테고리별로 플래시카드 목록을 보여주는 HomeScreen
2. 플래시카드 검색을 위한 SearchScreen
3. 새로운 플래시카드 생성을 위한 CreateScreen
4. 추가 정보를 보여주는 MoreScreen

<br>

이번 4주차에 진행한 내용은 크게 3가지입니다.
1. ProgressBar를 이용해 현재 카드가 몇번째 카드인지 보여주기
2. 여러 화면들 간의 전환을 가능하게 해주는 Navigation의 개념 이해 및 적용
3. 플래시카드의 내용을 보여주는 DeckScreen 추가하기

<hr>

# 1. ProgressBar

![image](https://user-images.githubusercontent.com/68090939/136987136-a675d38c-fffc-4832-ac9f-d1cf8cf34b79.png)
<br>

위 사진과 같이 막대 모양의 프로그래스바를 구현하려면, LinearProgressIndicator의 progress 인자에 버튼 클릭에 따른 tween 애니메이션을 적용해주면 됩니다. 전체 코드는 다음과 같습니다.

```kotlin
@Composable
fun MainScreen() {
    val (count, setCount) = remember { // 현재 카드 수
        mutableStateOf(0f)
    }

    val totalCount = 7 // 총 카드 수

    LaunchedEffect(key1 = true){ // 아래 부연 설명 참고
        setCount(1f)
    }

    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier.padding(16.dp)
    ){
        // TopBar에 들어갈 텍스트
        Text(
            text = "${count.toInt()} / $totalCount",
            fontWeight = FontWeight.Bold
        )

        Spacer(modifier = Modifier.height(16.dp))

        // ProgressBar
        MyProgressBar(count = count, totalCount = totalCount)

        Spacer(modifier = Modifier.height(16.dp))

        // 버튼을 누르면 ProgressBar 상태가 바뀌면서 카드가 넘어간다.
        Row(
            Modifier
                .padding(horizontal = 16.dp)
                .fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceEvenly
        ) {
            Button(
                onClick = { if (count > 1) setCount(count - 1) }
            ){
                Text("이전 카드")
            }

            Button(
                onClick = { if (count < totalCount) setCount(count + 1) }
            ){
                Text("다음 카드")
            }
        }
    }
}

@Composable
fun MyProgressBar(
    modifier: Modifier = Modifier,
    color: Color = DeepOrange,
    animDuration: Int = 300,
    animDelay: Int = 0,
    count: Float,
    totalCount: Int,
) {
    val curPercentage by animateFloatAsState(
        targetValue = count / totalCount,
        animationSpec = tween(
            durationMillis = animDuration,
            delayMillis = animDelay,
            easing = LinearOutSlowInEasing // 아래 부연 설명 참고
        )
    )

    LinearProgressIndicator(
        modifier = Modifier
            .fillMaxWidth()
            .height(12.dp)
            .clip(CircleShape),
        progress = curPercentage,
        color = color,
        backgroundColor = Color.LightGray
    )
}
```
<br>

**코드 부연 설명** (LaunchedEffect, LinearOutSlowInEasing)

<br>

```kotlin
 LaunchedEffect(key1 = true){
    setCount(1f)
}
```

여기서 LaunchedEffect는 처음에 progress bar의 상태를 0에서 1로 증가시킬 때 setCount(1f)가 제대로 동작할 수 있게 해줍니다. launched effect 말그대로 애니메이션이 시작될 때 적용되는 효과인데, 안전하게 상태를 변경할 수 있게 해주는 composable이라고 이해하면 됩니다.<br>

[https://developer.android.com/jetpack/compose/side-effects#launchedeffect](https://developer.android.com/jetpack/compose/side-effects#launchedeffect)<br>

이 공식 문서에 나오는 코루틴, suspend 함수의 개념은 다음에 시간날 때 다시 공부해봐야겠습니다,,

<br>

```kotlin
val curPercentage by animateFloatAsState(
    targetValue = count / totalCount,
    animationSpec = tween(
        durationMillis = animDuration,
        delayMillis = animDelay,
        easing = LinearOutSlowInEasing
    )
)
```

[참고 링크](https://medium.com/@Kjoon/%EC%9D%B8%ED%84%B0%EB%9E%99%EC%85%98-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%9D%B4%EC%95%BC%EA%B8%B0-2-easing-functions-cf0f6cb213a2)

easing curve가 무엇인지 몰라서 잠깐 검색해봤습니다. 애니메이션에서 시작과 끝의 움직임을 보간해주는 것이라고 이해하면 될 거 같습니다.<br>

<hr>
<br>

# 2. Navigation

## Navigation의 개념과 구성요소

[https://developer.android.com/guide/navigation](https://developer.android.com/guide/navigation)

Navigation은 사용자가 앱 내의 다양한 콘텐츠를 탐색하고, 들어가고, 뒤로 이동할 때 사용되는 개념입니다. 즉, 여러 화면 간의 전환을 가능하게 해주는 것이라고 생각하면 됩니다. Navigation에는 크게 3가지 구성 요소가 있습니다.

<br>

**1. Navigation graph**

navigation과 관련된 모든 정보가 포함되어 있는 XML 리소스입니다. 따라서 여기에는 **navigation의 목적지(destination), 즉 앱 내에서 이동 가능한 모든 화면들**이 포함됩니다. 다음 그래프는 결국 a, b, c, d 화면 간의 전환을 나타낸 것입니다.<br>

![image](https://user-images.githubusercontent.com/68090939/137103343-4d24adc8-7f4e-4595-8aa1-42a245ffe825.png)

<br>

**2. NavHost**

**네비게이션 그래프의 목적지를 담는 컨테이너입니다. 즉, 앱 내에서 이동할 모든 화면들이 이 컨테이너에 스택 구조로 쌓이게 됩니다.** 네비게이션 구성요소에는 NavHost의 기본 구현으로서, NavHostFragment가 포함되어 있습니다. 따라서 NavHost는 **fragment들이 들어가게 될 자리**라고 볼 수 있습니다. (fragment는 부분, 파편이라는 뜻이죠? 말그대로 프래그먼트는 액티비티를 본떠서 만든 "부분 화면"으로서, UI를 여러 개의 모듈 단위로 작성할 수 있게 해줍니다.) <br>

→ 정정: 지금 저희는 composable로 화면을 만들고 있으며, 그래프에 composable단위로 destination들을 정의하고 있기 때문에 NavHost는 composable이 들어가는 자리라고 표현하는 게 더 정확합니다! <br>

<img src="https://user-images.githubusercontent.com/68090939/137103507-a83cafc4-bb12-4564-9eca-7663844dd019.png" width="450px"/><br>

<br>

**3. NavController**

**NavHost내에서 네비게이션을 관리하는 객체입니다. NavController는 사용자가 앱 전체를 이동할 때, NavHost 자리에 프래그먼트들을 들여보내거나 내보내면서, 여러 화면 간의 전환이 이루어질 수 있게 해줍니다.** 
앱을 탐색할 때 네비게이션 그래프의 특정 경로를 따라 탐색하거나, 특정 대상으로 직접 탐색하고 싶다고 NavController에게 알리면, NavController는 해당 destination을 NavHost에 지정하게 됩니다. <br>

- destination - navigation의 목적지, 이동할 모든 화면
- route를 통해 navigate (다른 목적지 화면으로 이동)
- BackStackEntry - navigation을 위해 사용하는 스택

<hr>
<br>

## Navigation의 적용

예원님이 블로그에 상세히 설명을 잘 해두셨기 때문에, 나머지 포스트를 읽기 전에 이 두 개의 링크에서 꼭 기본 예제를 먼저 공부하고 오시길 권장합니다! <br>
[https://blog.naver.com/comye1/222457844226](https://blog.naver.com/comye1/222457844226)<br>
[https://blog.naver.com/comye1/222482497797](https://blog.naver.com/comye1/222482497797)

<br>

먼저, app 수준의 build.gradle에 다음 코드를 추가해줍니다.<br>

`implementation "androidx.navigation:navigation-compose:2.4.0-alpha05"`

<br>

**1. navController를 생성해 기억한다.**

![image](https://user-images.githubusercontent.com/68090939/137104388-fa4038e5-e38a-418a-b541-7f5017458aa0.png)
<br>

NavController는 stateful이어서, 앱 화면을 구성하는 composable의 back stack과 각 화면의 상태를 추적합니다. 다음과 같이 **rememberNavController() 함수를 통해 NavController를 생성하고 그 상태를 기억할 수 있습니다.**
<br>

`val navController = rememberNavController()`

<br>

**NavController는 모든 composable이 접근할 수 있는 위치에 생성하는 것이 중요합니다!** 이는 composable의 state를 caller쪽으로 넘기는 state hoisting 원칙을 따르는 것입니다. 화면 외부에서 composable을 업데이트할 때, `currentBackStackEntryAsState()` 함수로 넘겨받은 NavController의 state를 사용하려면, NavController를 모든 composable이 접근 가능한 위치에 생성해줘야 합니다.

<br>

**2. NavHost를 정의한다.**

![image](https://user-images.githubusercontent.com/68090939/137104684-896394c5-dfc0-42ae-826e-2e24f85bb9ef.png)<br>

각 NavController는 하나의 NavHost composable과 연결되어야 합니다. **composable 간에 네비게이션을 할 때, NavHost의 내용은 자동으로 재구성됩니다.**<br>

화면을 구성하는 여러 composable들은 **route를 통해** composable간의 이동 경로를 정의하고, 다른 composable로부터 인자도 전달 받을 수 있습니다. 다시 말해, **네비게이션 그래프의 각 destination은 route와 연결되어 있는 것입니다.**

```kotlin
@Composable
public fun NavHost(
    navController: NavHostController,
    startDestination: String,
    modifier: Modifier,
    route: String?,
    builder: NavGraphBuilder.() → Unit
): Unit
```
<br>

**NavHost는 미리 생성한 navController와 startDestination을 지정함으로써 생성할 수 있습니다.** builder 블록을 통해 네비게이션 그래프를 만드는데, 이는 함수 형식이기 때문에 중괄호를 밖으로 빼내서 내용을 작성할 수 있습니다.

<br>

**3. navigate() 함수의 인자에 이동할 화면의 route를 적는다.**

![image](https://user-images.githubusercontent.com/68090939/137104941-5d2615cd-a216-44b2-ac5d-71e76a95f998.png)<br>


네비게이션 그래프의 composable간에 서로 네비게이션을 하기 위해서, navigate()라는 함수를 사용할 수 있습니다. **navigate 함수의 매개변수인 route를 통해 특정 composable에 인자를 전달할 수 있습니다.**

<br>

**4. back stack 추가 설명**

![image](https://user-images.githubusercontent.com/68090939/137105101-fd925a7c-8332-4098-9fbf-1b4bf966d46d.png)<br>


기본적으로 navigate() 함수는 **새로운 destination을 back stack에 추가**합니다. 그리고 추가적인 네비게이션 옵션을 navigate()의 호출에 덧붙임으로써 navigate의 동작을 수정할 수 있습니다.<br>
예를 들어, **popUpTo() 함수**는 새로운 destination으로 네비게이션 하기 전에 back stack으로부터 기존 destination의 모든 내용을 꺼냅니다. (stack에서 삽입은 push, 삭제는 pop)<br>
**lauchSingleTop = true**는 동일한 destination에 대한 복사본이 스택의 top에 쌓이는 것을 방지합니다. 따라서, 기존에 스택 top에 존재하지 않았던 destination만 네비게이션 할 수 있게 합니다.<br>

<hr>
<br>

## CheggPrep 앱에 Navigation 활용하기!

<br>

### 1. BottomNavigationBar로 화면 전환하기

<br>

<div style="float:left; margin-right:20px;">
    <img src="https://user-images.githubusercontent.com/68090939/137105414-7e24f099-19b8-4a6d-87e9-14d4f5a9d0b6.png" width="300px"> 
</div>
<div style="float:left;">
    <img src="https://user-images.githubusercontent.com/68090939/137105437-831110d0-9c8e-4773-ac02-0bf85a1ebec8.png" width="300px">
</div>

<div style="float:left; margin-right:20px;">
    <img src="https://user-images.githubusercontent.com/68090939/137105457-ff326ef1-c086-4401-bdb4-a938a1f92524.png" width="300px"> 
</div>
<div style="float:left;">
    <img src="https://user-images.githubusercontent.com/68090939/137105476-b9dc1e5e-4a85-42a3-bfd4-7c83d76b1a2a.png" width="300px">
</div><div style="clear:both"></div>


위처럼 BottomNavigationBar에서 클릭한 아이콘에 따라 다른 화면이 나올 수 있게 만들어봅시다!<br><br>

<img src="https://user-images.githubusercontent.com/68090939/137106417-a214eca9-dd36-4637-a145-d29622146c63.png" width="350px">

일단, 위 사진과 같이 navigation 패키지와 navigation.kt 파일을 생성해서 다음과 같이 코드를 작성해줍니다. <br>

```kotlin
package com.gdsc.cheggprepreview.navigation

import ...

sealed class Screen(val route: String){
    object Home: Screen("home")
    object Search: Screen("search")
    object Create: Screen("create")
    object More: Screen("more")
    object Deck: Screen("deck")
}

data class BottomNavItem(
    val route: String,
    val name: String,
    val icon: ImageVector
)

object BottomNav{
    val items = listOf(
        BottomNavItem(Screen.Home.route, "Home", Icons.Outlined.Home),
        BottomNavItem(Screen.Search.route, "Search", Icons.Outlined.Search),
        BottomNavItem(Screen.Create.route, "Create", Icons.Outlined.AddBox),
        BottomNavItem(Screen.More.route, "More", Icons.Outlined.Menu),
    )
}

@Composable
fun BottomNavigationBar(navController: NavController) {
    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentRoute = navBackStackEntry?.destination?.route

    BottomNavigation(
        backgroundColor = Color.White,
        elevation = 4.dp,
        modifier = Modifier.padding(4.dp)
    ){
        BottomNav.items.forEach { item ->
            BottomNavigationItem(
                selected = item.route == currentRoute,
                enabled = item.route != currentRoute,
                onClick = { navController.navigate(item.route) },
                icon = { Icon(imageVector = item.icon, contentDescription = item.name) },
                label = { Text(item.name) },
                selectedContentColor = DeepOrange,
                unselectedContentColor = Color.DarkGray
            )
        }
    }
}
```
<br>

- sealed class인 Screen을 생성하고, object로 Home, Search, Create, More라는 4가지 화면을 정의합니다. (Deck 화면은 뒤에서 설명합니다.)
- BottomNavigation() composable은 머티리얼 디자인의 API이므로 Alt + Enter 단축키로 import를 잘 해줍니다. 전환할 화면들은 items 리스트의 BottomNavItem로 생성합니다.

<br>

- 이제 MainActivity에서 BottomNavigationBar의 배치 여부를 정하고, NavHost의 block 부분에는 전환할 composable들을 정의합니다.

```kotlin
	val navController = rememberNavController()
	
	val (bottomBarShown, showBottomBar) = remember {
	    mutableStateOf(true)
	}
	
	Scaffold(
	    bottomBar = {
	        if (bottomBarShown) {
	            BottomNavigationBar(navController = navController)
	        }
	    }
	) {
	    NavHost(navController = navController, startDestination = Screen.Home.route) {
	        composable(Screen.Home.route) {
	            showBottomBar(true)
	            HomeScreen(navController)
	        }
	
	        composable(Screen.Search.route) {
	            showBottomBar(true)
	            SearchScreen(navController)
	        }
	
	        composable(Screen.Create.route) {
	            showBottomBar(false)
	            CreateScreen(navController)
	        }
	
	        composable(Screen.More.route) {
	            showBottomBar(true)
	            MoreScreen(navController)
	        }
			}
	}
```
<hr>
<br>

### 2. DeckScreen 구현

<br>

<img src="https://user-images.githubusercontent.com/68090939/137108405-1985e6ee-ab72-4870-babf-f6eb60782b2a.png" width="400px">

DeckScreen은 각 DeckItem을 클릭했을 때 나타나는 화면입니다.

<br>

<img src="https://user-images.githubusercontent.com/68090939/137108636-e4e29d57-6c76-46ca-ae89-d8505a2bc750.png" width="350px">

먼저, screens 패키지에 DeckScreen.kt 이라는 파일을 생성하고 다음과 같이 코드를 작성해줍니다. <br>

```kotlin
package com.gdsc.cheggprepreview.screens

import ...

@Composable
fun DeckScreen(navController: NavController, title: String, cardsNum: Int) {
    Scaffold(topBar = {
        TopAppBar(
            elevation = 0.dp,
            backgroundColor = Color.White,
            title = { Text(text = title) },
            navigationIcon = {
                IconButton(onClick = { navController.popBackStack() }) {
                    Icon(
                        imageVector = Icons.Default.ArrowBack,
                        contentDescription = "navigation back"
                    )
                }
            },
            actions = {
                IconButton(onClick = { /* 공유하기 버튼 클릭했을 때 */ }) {
                    Icon(imageVector = Icons.Default.Share, contentDescription = "share")
                }
                IconButton(onClick = { /* 더보기 버튼 클릭했을 때 */}) {
                    Icon(imageVector = Icons.Default.MoreVert, contentDescription = "more")
                }
            }
        )
    }, bottomBar = {
        Column(modifier = Modifier.background(color = Color.White)) {
            Divider(Modifier.height(2.dp), color = Color.LightGray)
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 16.dp),
                horizontalArrangement = Arrangement.Center,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Row(modifier = Modifier
                    .clip(shape = CircleShape)
                    .clickable { /* 카드 연습하기 텍스트 클릭했을 때 */ }
                    .background(color = DeepOrange)
                    .padding(horizontal = 24.dp, vertical = 8.dp)
                ) {
                    Text(
                        text = "Practice all cards",
                        color = Color.White,
                        style = MaterialTheme.typography.h5,
                        fontWeight = FontWeight.ExtraBold
                    )
                }
            }
        }
    }) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(
                text = cardsNum.toString() + if (cardsNum > 1) " Cards" else " Card",
                color = Color.Gray
            )
            Spacer(modifier = Modifier.height(16.dp))
            repeat(cardsNum) {
                CardItem(card = Card("Title", "description"))
                Spacer(modifier = Modifier.height(8.dp))
            }
        }
    }
}
```

<br>

 1. DeckScreen에서는 BottomNavigationBar를 보여주지 않을 것이기 때문에 MainActivitiy에서 showBottomBar()를 false로 설정해줍니다.

```kotlin
composable(Screen.Deck.route + "/{deckTitle}/{cardsNum}") { backStackEntry ->
    val deckTitle =
        backStackEntry.arguments?.getString("deckTitle") ?: "no title"
    val cardsNum =
        backStackEntry.arguments?.getString("cardsNum")?.toInt() ?: 0
    showBottomBar(false)
    DeckScreen(
        navController = navController,
        title = deckTitle,
        cardsNum = cardsNum
    )
}
```

<br>

 2. Scaffold를 활용해 topBar를 구현해봅시다. TopAppBar composable에 크게 navigationIcon, title, actions 이 세가지를 설정해줍니다. 뒤로가기 화살표를 누르면 navController.popBackStack() 이 메소드를 통해 이전 화면으로 돌아가게 하고, 공유하기와 더보기 아이콘 버튼도 추가해줍니다. (뒤로가기 navigationIcon은 CreateScreen의 Close 아이콘에도 똑같이 적용해줍니다.) <br> title은 현재 deck에 해당하는 타이틀을 보여줘야 하기 때문에 back stack에서 인자를 꺼내와서 보여줍니다.

```kotlin
Scaffold(topBar = {
        TopAppBar(
            elevation = 0.dp,
            backgroundColor = Color.White,
            title = { Text(text = title) },
            navigationIcon = {
                IconButton(onClick = { navController.popBackStack() }) {
                    Icon(
                        imageVector = Icons.Default.ArrowBack,
                        contentDescription = "navigation back"
                    )
                }
            },
            actions = {
                IconButton(onClick = { /* 공유하기 버튼 클릭했을 때 */ }) {
                    Icon(imageVector = Icons.Default.Share, contentDescription = "share")
                }
                IconButton(onClick = { /* 더보기 버튼 클릭했을 때 */}) {
                    Icon(imageVector = Icons.Default.MoreVert, contentDescription = "more")
                }
            }
        )
    }, bottomBar = { ...
```

<br>

 3. 이제 bottomBar 부분을 살펴봅시다! 일단, "Practice all cards" 라는 텍스트를 제일 아래에 보여주고, 위의 Column에는 repeat을 사용해서 인자로 전달 받은 cardsNum 개수만큼 CardItem을 보여줍니다!

```kotlin
... }, bottomBar = {
        Column(modifier = Modifier.background(color = Color.White)) {
            Divider(Modifier.height(2.dp), color = Color.LightGray)
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 16.dp),
                horizontalArrangement = Arrangement.Center,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Row(modifier = Modifier
                    .clip(shape = CircleShape)
                    .clickable { /* 카드 연습하기 텍스트 클릭했을 때 */ }
                    .background(color = DeepOrange)
                    .padding(horizontal = 24.dp, vertical = 8.dp)
                ) {
                    Text(
                        text = "Practice all cards",
                        color = Color.White,
                        style = MaterialTheme.typography.h5,
                        fontWeight = FontWeight.ExtraBold
                    )
                }
            }
        }
    }) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(
                text = cardsNum.toString() + if (cardsNum > 1) " Cards" else " Card",
                color = Color.Gray
            )
            Spacer(modifier = Modifier.height(16.dp))
            repeat(cardsNum) {
                CardItem(card = Card("Title", "description"))
                Spacer(modifier = Modifier.height(8.dp))
            }
        }
    }
}
```

<br>

 4. CardItem은 저번에 작성했던 text 부분을 **card.front, card.back으로 수정**해줘야 합니다!

```kotlin
package com.gdsc.cheggprepreview.models

// 앞면과 뒷면의 텍스트가 카드를 구성한다.
data class Card(val front: String, val back: String)
```

```kotlin
@Composable
fun CardItem(card: Card) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .border(width = 2.dp, color = Color.LightGray)
    ) {
        Text(
            text = card.front,
            modifier = Modifier.padding(16.dp),
            fontWeight = FontWeight.ExtraBold
        )
        // 구분선 만들기
        Divider(
            modifier = Modifier
                .fillMaxWidth()
                .height(2.dp),
            color = Color.LightGray
        )
        Text(
            text = card.back,
            modifier = Modifier.padding(16.dp),
            color = Color.Gray
        )
    }
}
```

<br>
<hr>
<br>

<div style="float:left; margin-right:20px;">
    <img src="https://user-images.githubusercontent.com/68090939/137109445-e2be7fce-e98f-4b70-85c7-e4017b806225.png" width="300px"> 
</div>
<div style="float:left;">
    <img src="https://user-images.githubusercontent.com/68090939/137109476-2f2f6a01-7455-4d1a-8f64-23c88764ff0c.png" width="300px">
</div><div style="clear:both"></div>
<br>

title과 cardsNum 이 두가지는 위의 사진처럼 deck 종류에 따라 달라져야 하기 때문에, 로직이 좀 복잡합니다.

<br>

 1. HomeScreen에서 DeckItem을 클릭할 때, Screen.Deck.route에 deckTitle, cardsNum 인자를 추가한다.

```kotlin
@Composable
public fun DeckItem(
    deck: Deck,
    modifier: Modifier,
    onClick: () → Unit
): Unit
```

```kotlin
LazyColumn(modifier = Modifier.padding(16.dp)) {
    when(selectedFilterIndex){
        0-> // SampleDataSet의 모든 리스트 보여주기
            SampleDataSet.deckSample.forEach{
                item{
                    DeckItem(deck = it, modifier = Modifier.padding(bottom = 8.dp))
                    {
                        navController.navigate(
                            Screen.Deck.route + "/${it.deckTitle}/${it.cardList.size}"
                        )
                    }
                }
            }
				... (생략)
}
```

<br>

 2. MainActivity에서 정의한 다음 composable은 backStackEntry에 있는 deckTitle, cardsNum의 값을 얻어서, DeckScreen composable에 전달한다.

```kotlin
composable(Screen.Deck.route + "/{deckTitle}/{cardsNum}") { backStackEntry ->
    val deckTitle =
        backStackEntry.arguments?.getString("deckTitle") ?: "no title"
    val cardsNum =
        backStackEntry.arguments?.getString("cardsNum")?.toInt() ?: 0
    showBottomBar(false)
    DeckScreen(
        navController = navController,
        title = deckTitle,
        cardsNum = cardsNum
    )
}
```

<br>

 3. DeckScreen은 인자로 받은 deckTitle, cardsNum을 사용한다.

```kotlin
@Composable
fun DeckScreen(navController: NavController, title: String, cardsNum: Int)
```

<br>

세션 시간에 코드를 따라치기만 할 때는 이렇게 복잡한 로직인 줄 몰랐는데, Ctrl + B로 계속해서 근원지를 찾아가보니 이렇게나 여러 파일들이 얽혀있는 상당히 복잡한 로직이었습니다. <br>

여기서 기억할 것은, 
- **destination - navigation의 목적지, 이동할 모든 화면**
- **route를 통해 navigate (다른 목적지 화면으로 이동)**
- **BackStackEntry - navigation을 위해 사용하는 스택**
바로 이 내용입니다. 처음에는 이게 무슨 소리인지 잘 와닿지 않았는데, CheggPrep에서 직접 사용을 해보니 이제 조금 감이 잡히는 느낌입니다!
<br>

마지막으로 다시 정리하자면,
1. destination에 argument를 전달하는 방법은 route에 해당 인자를 추가하는 것입니다.
2. 이 인자는 backstackEntry의 arguments에 Bundle 형태로 저장되기 때문에, 이를 다시 꺼내려면 getString 등의 함수를 통해 키에 해당하는 값을 얻으면 됩니다.
<br>

cf) 개인적으로 헷갈렸던 부분<br>

 1. Screen.Deck.route의 Deck은 **sealed class Screen에서 정의한 화면 중 하나**이고,

```kotlin
sealed class Screen(val route: String){
    object Home: Screen("home")
    object Search: Screen("search")
    object Create: Screen("create")
    object More: Screen("more")
    object Deck: Screen("deck")
}
```
<br>

 2. DeckItem의 Deck은 **models 패키지에 있는 데이터 클래스**이다.

```kotlin
package com.gdsc.cheggprepreview.models

data class Deck(
    val deckType: Int,
    val deckTitle: String,
    val shared: Boolean,
    val bookmarked: Boolean,
    val cardList: List<Card> // deck에 포함된 Card의 리스트
)

// deckType 구분
const val DECK_CREATED = 0
const val DECK_ADDED = 1
```

<hr>
<br>

# 마무리

와우 드디어 끝났네요! &#128079;&#128079;&#128079; 세션 시간에는 네비게이션이라는 개념도 낯설었고, 코드도 아무 생각없이 따라치기만 했던 거 같은데, 이렇게 복습을 하고 나니 제가 작성한 코드가 어떤 원리로 동작하는지 이제 좀 이해가 됩니다!<br>
혹시 제가 설명한 내용 중에 잘못된 부분이 있다면 꼭 댓글 남겨주시길 바랍니다! 중간고사가 2주도 안 남았다는 게 충격적이지만, 그래도 4주차 세션 내용 잊어버리기 전에 복습해둬서 다행입니다! 다들 시험기간 파이팅하시고 2주 뒤에 만나요~ &#128075;&#128075;



