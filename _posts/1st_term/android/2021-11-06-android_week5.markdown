---
layout: post
title: Android 5주차 세션 복습
date: 2021-11-05
description: 
author: yoon-H
categories: ["1st_term"]
tags: ["android"]
---

안녕하세요! GDSC Android 멤버 한윤재입니다.<br>
5주차 세션 복습 포스팅 시작하겠습니다!
<br>

# 1. Navigation destination에서 화면 전환

## 1) SearchScreen

![SearchScreen](https://user-images.githubusercontent.com/71068767/140611561-146edde7-3034-4c96-9278-c0955d80ebae.png)

위 그림과 같이 Search에서는 3가지 화면전환이 필요합니다.<br>

전보다 화면이 늘어나 navigation destination에 일일이 추가하기는 어려워졌습니다. <br>

따라서 각 화면을 상위, 하위 composable로 구분해 SearchScreen 안에서 호출해줍니다. <br>

이를 위해서는 SearchScreen 안에 데이터를 보관해야 합니다. 각 화면별 composable에 데이터 값과 setter를 전달하여 조작할 수 있도록 하는 것이죠. State hoisting라고 볼 수 있습니다. <br>

```kotlin
enum class SearchState { //Searchscreen의 하위 composable 열거
    ButtonScreen,
    QueryScreen,
    ResultScreen
}
```

먼저 enum class로 화면 상태를 나타내는 SearchState를 선언합니다.<br>

enum class는 열거형 클래스로 각 상수는 객체입니다. 정수 값 대신 이름으로 화면 상태를 나열합니다. (자세한 [enum class](https://kotlinlang.org/docs/enum-classes.html#working-with-enum-constants)의 정보는 밑의 사이트를 링크를 타고 가주세요!)

```kotlin
val (screenState, setScreenState) = remember { // setScreenState로 화면 전환
        mutableStateOf(SearchState.ButtonScreen)
    }

val (queryString, setQueryString) = remember { // 검색 단어로 QueryScreen에서 저장, ResultScreen에서 사용
        mutableStateOf("")
    }
```

위와 같이 SearchScreen 안에 상태를 선언합니다. 

```kotlin
when (screenState) { // 각각의 화면에서 작동할 일을 적어준다.
        SearchState.ButtonScreen -> {
            SearchButtonScreen {
                if(queryString.isNotBlank()){ //한 번 검색 후 다시 QueryScreen이 나오게 해주는 조건문
                    setScreenState(SearchState.ResultScreen)
                }else{
                    setScreenState(SearchState.QueryScreen)
                }
                setScreenState(SearchState.QueryScreen)
            }
        }
        SearchState.QueryScreen -> {
            SearchQueryScreen(
                queryString = queryString,
                setQueryString = setQueryString,
                toButtonScreen = { setScreenState(SearchState.ButtonScreen) },
                toResultScreen = { setScreenState(SearchState.ResultScreen) }
            )
        }
        SearchState.ResultScreen -> {
            SearchResultScreen(
                queryString = queryString,
                setQueryString = setQueryString,
                toButtonScreen = { setScreenState(SearchState.ButtonScreen) },
                onSearchKey = { /*검색 결과 업데이트*/ }
            )
        }
    }
```

when 으로 screenState에 따라 다른 composable 로드합니다. <br>

위에서 선언한 screenState와 queryString을 하위에서 활용하고 변경해 화면을 전환할 수 있습니다.

```kotlin
@Composable
fun SearchResultScreen( //파라미터로 데이터 값을 받아 작동!
    queryString: String,
    setQueryString: (String) -> Unit,
    toButtonScreen: () -> Unit,
    onSearchKey: () -> Unit
) {
    Scaffold(
        topBar = {
            SearchTopBar(
                queryString = queryString,
                setQueryString = setQueryString,
                onBackButtonClick = toButtonScreen,
                onSearchKey = onSearchKey/*Todo 검색 결과 업데이트*/
            )
        }
                        "...(생략)..."
```

파라미터 작성으로 navigation을 작동합니다. SearchQueryScreen도 위와 같습니다.
    
```kotlin
@Composable
fun SearchTopBar(
    queryString: String,
    setQueryString: (String) -> Unit,
    onBackButtonClick: () -> Unit,
    onSearchKey: () -> Unit
) {
    TopAppBar(
        elevation = 0.dp,
        backgroundColor = Color.White,
        navigationIcon = {
            IconButton(onClick = onBackButtonClick) {
                        "...(중략)..."

                keyboardOptions = KeyboardOptions( //돋보기 버튼
                    imeAction = ImeAction.Search
                ),
                keyboardActions = KeyboardActions(
                    onSearch = {
                        onSearchKey()
                    }
                ),
            )
        },
        actions = {
            if (queryString.isNotBlank()) {
                IconButton(onClick = { setQueryString("") }) {
                    Icon(imageVector = Icons.Default.Close, contentDescription = "delete")
                }
            }
        }
    )
}
```

SearchScreen 에서 topbar는 계속 떠있어서 따로 composable을 만들어줍니다. <br>

이 bar에서는 검색을 할 수 있도록 하는데 keyboardOptions와 keyboardActions는 핸드폰으로 텍스트를 입력할 때 나타나는 키보드의 검색 버튼을 관리합니다. 버튼을 누르면 검색 결과를 보여주는 onSearchKey()를 넣어서 말이죠. ([KeyboardOptions](https://developer.android.com/reference/kotlin/androidx/compose/foundation/text/KeyboardOptions)에 관한 자세한 정보는 클릭!)

→ 버튼 구현 등은 이전 시간에 다뤘으므로 스킵!

[참고자료](https://blog.naver.com/comye1/222555753843)

## 2) CreateScreen
![CreateScreen](https://user-images.githubusercontent.com/71068767/140611545-2ae99d5d-4bbd-4429-b393-a5d085d4b17b.png)

다음은 CraeteScreen입니다. <br>


앞서 SearchScreen에서 다룬 navagation 내용과 거의 비슷합니다. 화면 상태는 2가지입니다.

```kotlin
enum class CreateState { //CreateScreen의 하위 composable 열거
    TitleScreen,
    CardScreen
}
```

enum class로 상태를 나열하고,

```kotlin
val (deckTitle, setDeckTitle) = remember {
        mutableStateOf("")
    }

    val (visibility, setVisibility) = remember {
        mutableStateOf(true)
    }

    val (screenState, setScreenState) = remember {
        mutableStateOf(CreateState.TitleScreen)
    }
```

상태를 screenState로 선언합니다.

```kotlin
when (screenState) {
        CreateState.TitleScreen -> {
            CreateTitleScreen(
                deckTitle = deckTitle,
                setDeckTitle = setDeckTitle,
                visibility = visibility,
                setVisibility = setVisibility,
                navigateBack = { navController.popBackStack() },
                toCardScreen = { setScreenState(CreateState.CardScreen) }
            )
        }
        CreateState.CardScreen -> {
            CreateCardScreen(
                navigateBack = { navController.popBackStack() },
                onDone = {}
            )
        }
    }
```

when으로 화면을 나눠 TitleScreen에서는  decktitle, visibility, navigateBack, ScreenState의 값을 받고, CardScreen으로 넘어가서는 navigateBack과 onDone을 실행할 수 있도록 합니다.

```kotlin
fun CreateCardScreen(
    navigateBack: () -> Unit,
    onDone: () -> Unit
) {
    Scaffold(
        topBar = {
            TopAppBar(
                        "...(중략)..."

                navigationIcon = {
                    IconButton(onClick = navigateBack) { // close navi
                        Icon(
                            imageVector = Icons.Outlined.Close,
                            contentDescription = "close create screen"
                        )

                    }
                },
                actions = {
                    TextButton(onClick = onDone) {
                        Text(
                            "Done", style = MaterialTheme.typography.h6,
                            fontWeight = FontWeight.Bold
                        )
                    }
                }
            )
        },
        floatingActionButton = { //스크롤을 내려도 같이 내려가는 버튼
            FloatingActionButton(
                onClick = { /*TODO*/ },
                backgroundColor = Color.White,
                modifier = Modifier
                    .size(48.dp)
                    .border(
                        width = 2.dp,
                        color = DeepOrange,
                        shape = CircleShape
                    )
            ) {
```

위의 코드를 보면 composable CreateCardScreen 안에 파라미터로 navigateBack과 onDone이 지정되어 있습니다.<br>

더 밑을 보면 onClick에 해당 파라미터의 이름이 붙여진 것을 확인할 수 있습니다. 기존에 navController로 작동하던 것을 밖으로 꺼내 이름으로 데이터를 composable끼리 주고 받을 수 있게 합니다. 더 깔끔하게 정리된 것입니다.
                
# 2. View Model

다음 주에 진행할 **View Model**에 대해 알아봅시다.<br>
<br>
Android에서 Activity는 **configuration change**이 발생할 때마다 onCreate를 호출해서 View를 다시 로드합니다. Activity가 끝나기 전에 리로드되는 것이죠. 이때 뷰가 가지고 있던 데이터는 모두 날아갑니다.<br>
<br>
**configuration change**는 화면 회전, 멀티 화면 등 화면이 달라지는 변화를 말합니다.<br>
<br>

![View1](https://user-images.githubusercontent.com/71068767/140611566-a7163daa-44e0-4f1b-a6c9-60c7d990d03f.png)

이런 상황을 방지하려면 데이터를 일시적으로 저장해야합니다. 그래서 **View Model**을 도입합니다. View Model은 Activity가 완전히 끝날 때까지(finished) 보존됩니다.<br>
<br>

자세한 Activity 생명주기는 다음 링크에서 알아볼 수 있습니다.<br>
[https://blog.naver.com/comye1/222280060131](https://blog.naver.com/comye1/222280060131)<br>
<br>

![View2](https://user-images.githubusercontent.com/71068767/140611568-d0576852-665b-4f32-a3bd-dbbe3c57393a.png)

그림을 보면 composable과 View Model의 역할이 나뉘어 있습니다<br>
<br>
데이터가 변수로 view model에 보관되어 있고, 이 데이터를 activity 내의 composable이 받아 화면을 보여줍니다. 사용자와의 상호작용, 뷰와 관련된 동작을 담당하고 있습니다.<br>
<br>
이렇게 말하면 이해하기 어려운데요, 다음 그림을 한번 봅시다.<br>
<br>

![View3](https://user-images.githubusercontent.com/71068767/140611571-5f690fb8-6b9a-4619-b5f3-4079d6f69042.png)

위 그림에서 볼 수 있듯이 ViewModel과 Activity는 각각 state와 event를 주고 받습니다.<br>
<br>
View Model에서 UI를 통해 state가 업데이트되면, flow down으로 Activity에 전달됩니다. 전달받은 state로 event가 발생하고, 이는 다시 View Model로 flow up됩니다.<br>
<br>
이 동작이 반복되면서 android 화면이 변화합니다.<br>
<br>

![View4](https://user-images.githubusercontent.com/71068767/140611572-b9ffd892-f619-4404-a0bb-0efc77ae2d02.png)

state hoisting이 일어날 때는 3가지 조건이 있습니다.<br>
<br>
1. State는 적어도 state를 사용하는 모든 컴포저블의 **가장 낮은 공통 부모**(가장 가까운 상위 composable)로 호이스팅되어야 한다.
2. State가 변경 또는 수정될 수 있는 적어도 최고의 수준으로 호이스팅되어야 한다.
3. 만약 두 개의 state가 같은 이벤트에 대해 반응하면 그들은 함께 호이스팅된다.<br>
-> 해당 규칙보다 더 높은 state로 호이스트할 수는 있지만, 하위로 호이스팅을 하는 것은 불가능하다.

[State Hoisting](https://developer.android.com/jetpack/compose/state#state-hoisting)의 내용을 알면 View Model의 개념을 더 잘 이해할 수 있습니다!<br>
<br>

![View5](https://user-images.githubusercontent.com/71068767/140611573-87a311ed-e64d-4e29-973f-f1bdb0ca01ae.png)

Composable은 State 타입을 observe하기 때문에 viewmodel에는 state로 저장되는 것이 좋습니다. 바로 접근이 가능하기 때문이죠.<br>
<br>
위에서 LiveData로 저장되었을 때는 관찰하는 composable인 observeAsState가 overhead되는 것을 볼 수 있습니다.<br>
<br>
Livedata는 mutableStateListOf로 대체가 가능합니다.<br>
<br>

Livedata는 다음 링크에서 알아볼 수 있습니다.
[https://developer.android.com/topic/libraries/architecture/livedata?hl=ko](https://developer.android.com/topic/libraries/architecture/livedata?hl=ko)

# 마무리

긴 5주차 복습이 끝났습니다. 점점 회차가 늘어날 수록 실습에 사용되는 지식이 어렵고 복잡하네요.. ViewModel의 개념이 어려워서 글을 쓰면서도 공식문서나 세션 슬라이드의 내용을 그대로 가져오는 표현이 많은 것을 느낍니다. 다른 분들처럼 이해가 잘 되는 정리글을 작성하고 싶었는데, 아쉬운 마음이 큽니다. 😥<br>
<br>

하지만 이것도 시행착오겠지요! 수많은 경험이 쌓여 실력이 되는 거니까요 ㅎㅎ 안드로이드 화이팅!! 🎉🎉
