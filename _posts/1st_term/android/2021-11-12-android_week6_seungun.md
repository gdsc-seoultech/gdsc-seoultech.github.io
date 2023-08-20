---
layout: post
title: 안드로이드 6주차 세션 복습/정리
date: 2021-11-12
author: Seung Un Oh
description:
categories: ["1st_term"]
tags: ["android"]
---

안드로이드 6주차 세션 정리를 맡은 오승언입니다.  
지난 세션 : https://gdsc-seoultech.github.io/posts/2021-11-06-android_week5/ <br>
이번 주 세션은 지난 세션에서 배운 ViewModel의 개념을 활용해서 적용하는 것을 위주로 진행되었습니다.<br>
ViewModel이 없다면 지금까지 진행한 방식처럼 직접적으로 데이터를 가지고 와야 합니다. <br>

# 1. ViewModel Class 만들기

ViewModel을 사용하기 위해서는 우선 ViewModel 클래스를 만들어야 합니다. <br>

```kotlin
class CheggViewModel : ViewModel() {
    //생략
}
```

<details>
<summary>전체 코드 보기</summary>
<div markdown="1">

```kotlin
class CheggViewModel : ViewModel() {
    var myDeckList = mutableStateListOf<Deck>()
        private set

    var totalDeckList = mutableStateListOf<Deck>()
        private set

    var searchScreenState = mutableStateOf(SearchState.ButtonScreen)
        private set

    var queryString = mutableStateOf("")
        private set

    fun setQueryString(query: String) {
        queryString.value = query
    }

    fun toButtonScreen() {
        searchScreenState.value = SearchState.ButtonScreen
    }

    fun toQueryScreen() {
        searchScreenState.value = SearchState.QueryScreen
    }

    fun toResultScreen() {
        searchScreenState.value = SearchState.ResultScreen
    }

    fun getQueryResult() =
        totalDeckList.filter { deck ->
            deck.deckTitle.lowercase(Locale.getDefault()).contains(queryString.value.lowercase())
        }.toMutableStateList()

    init {
        myDeckList = SampleDataSet.myDeckSample.toMutableStateList()
        totalDeckList = SampleDataSet.totalDeckSample.toMutableStateList()
    }
}
```

</div>
</details>

변수선언 부분 먼저 보겠습니다.

```kotlin
var myDeckList = mutableStateListOf<Deck>()
    private set

var totalDeckList = mutableStateListOf<Deck>()
    private set

var searchScreenState = mutableStateOf(SearchState.ButtonScreen)
    private set

var queryString = mutableStateOf("")
    private set
```

사용되는 데이터를 ViewModel에서 선언을 해줍니다.<br>

<details>
<summary>remember는 왜 안쓰나요?</summary>
<div markdown="1">

`remember`의 역할은 recomposition이 발생했을 때, state가 변하지 않고 유지하게끔 하는 것입니다. 이 기능은 ViewModel에서 자동으로 처리하기 때문에 ViewModel에서는 `remember`를 사용하여 선언하지 않아도 됩니다.

</div>
</details>

<details>
<summary>private set이 뭔가요?</summary>
<div markdown="1">

자바와 다르게, 코틀린에서는 getter/setter 메소드를 따로 만들지 않아도 직접 접근해서(실제로는 직접 접근은 아니지만, 사용자 입장에선) 사용할 수 있습니다. `private set`은 getter메소드는 자유롭게 두는 반면, setter메소드의 기능을 제한한다고 보시면 됩니다.

</div>
</details>

다음은 함수 부분입니다.

```kotlin
// queryString값 변경
fun setQueryString(query: String) {
        queryString.value = query
}

// ButtonScreen으로 이동
fun toButtonScreen() {
    searchScreenState.value = SearchState.ButtonScreen
}

// QueryScreen으로 이동
fun toQueryScreen() {
    searchScreenState.value = SearchState.QueryScreen
}

// ResultScreen으로 이동
fun toResultScreen() {
    searchScreenState.value = SearchState.ResultScreen
}

// 쿼리 결과를 가져오는 함수
fun getQueryResult() =
    totalDeckList.filter { deck ->
        deck.deckTitle.lowercase(Locale.getDefault())
        .contains(queryString.value.lowercase())
    }.toMutableStateList()
```

<details>
<summary>getQueryResult()의 문법이 이해가 가지 않습니다.</summary>
<div markdown="1">

이 5줄짜리 코드는 편의를 위해 바뀐 부분이 있습니다.

```kotlin
fun getQueryResult() =
```

기존에는 `fun getQueryResult() : Int { return 100 }`이런 식으로 사용했는데, 이렇게 리턴하는 것을 간략화 한 것입니다. Kotlin에서는 타입을 유추하기 때문에 타입을 생략하고 return도 `=`으로 대체할 수 있기 때문에 생략한 것입입니다. 다음은 리턴 생략 제거버전입니다.

```kotlin
fun getQueryResult() : SnapshotStateList<Deck> {
        return totalDeckList.filter{
            it.deckTitle.lowercase(Locale.getDefault()).contains(queryString.value.lowercase())
        }.toMutableStateList()
    }
```

`it`제거 버전입니다.

```kotlin
fun getQueryResult() : SnapshotStateList<Deck> {
        return totalDeckList.filter{ deck ->
            deck.deckTitle.lowercase(Locale.getDefault()).contains(queryString.value.lowercase())
        }.toMutableStateList()
    }
```

`totalDeckList`에서 `deck`의 `deckTitle`를 소문자로 바꾸고, 그 deckTitle이 `queryString`값을 포함하고 있으면 List로 반환합니다.

</div>
</details>

마지막으로 초기화하는 부분입니다.

```kotlin
init {
    // SampleDataSet의 myDeckSample 리스트에서 데이터를 가져옴
    // myDeckSample : 내가 생성한 Deck
    myDeckList = SampleDataSet.myDeckSample.toMutableStateList()

    // SampleDataSet의 totalDeckSample 리스트에서 데이터를 가져옴
    // totalDeckSample : 모든 사용자가 생성한 Deck
    totalDeckList = SampleDataSet.totalDeckSample.toMutableStateList()
}
```

<details>
<summary>초기화를 그냥 하면 되지 init{}은 왜 쓰나요?</summary>
<div markdown="1">

Kotlin에서는 초기화를 하는 방법은 두 가지입니다. 첫 번째는 자바와같이 constructor를 쓰는 것이고 두 번째는 init block(`init{}`)을 사용하는 것입니다.  
두 방법 모두 객체 호출 시 실행됩니다.  
constructor는 다시 Primary constructor, Secondary constructor로 나눌 수 있는데, 클래스를 생성할 때 클래스 이름 오른쪽 부분`class Person(val name : String, val age : Int){ }`이 바로 Primary constructor이며 Secondary constructor는 클래스 내부에 constuctor키워드로 선언할 수 있습니다.(init block도 내부에 선언)  
특이한 부분은 `init`은 Primary constructor의 일부라는 점입니다.  
또한 `init`은 Primary constructor가 초기화 한 후 바로 실행이 됩니다.
즉, `Primary constructor` -> `init block` -> `Secondary constructor` 순서로 초기화가 됩니다.

그래서 왜 쓰나요?  
Primary constructor(`(val name : String, val age : Int)`부분)는 `print`와 같은 코드를 넣을 수 없습니다. 하지만 `init{ }`은 넣을 수있으며 Primary constructor이후 바로 실행이 됩니다. 이런 이유로 사용한다고 보면 될 것 같습니다.

</div>
</details>

# 2. ViewModel의 적용

ViewModel class를 만들었으니 적용할 차례입니다.

**ViewModel을 사용하기 전에, 사용할 composable의 인자와 그 composable이 사용되는 곳의 인자를 꼭 넣어주도록 합시다.**  
(예시)

```kotlin
HomeScreen(navController, cheggViewModel)

@Composable
fun HomeScreen(navController: NavHostController, viewModel: CheggViewModel){
    ...
}
```

## HomeScreen.kt

`HomeScreen.kt`로 이동해서 데이터를 직접가져오는게 아니라 만든 ViewModel을 활용해서 가져오도록 고칩니다.

```kotlin
0 -> SampleDataSet.deckSample.forEach{ ... }
1 -> SampleDataSet.deckSample.filter { it.bookmarked }.forEach{ ... }
2 -> SampleDataSet.deckSample.filter { it.deckType == DECK_CREATED }.forEach{ ... }
```

to

```kotlin
0 -> viewModel.myDeckList.forEach{ ... }
1 -> viewModel.myDeckList.filter { it.bookmarked }.forEach { ... }
2 -> viewModel.myDeckList.filter { it.deckType == DECK_CREATED }.forEach{ ... }
```

## SearchScreen.kt

다음은 `SearchScreen.kt`에서의 ViewModel 적용입니다.  
기존의 screenState remember변수와 queryString remember 변수는 ViewModel로 이동했습니다.  
코드를 보시면 아시겠지만, 대부분의 동작이 ViewModel로 넘어갔습니다.

```kotlin
@Composable
fun SearchScreen(navController: NavHostController, viewModel: CheggViewModel) {
    when (viewModel.searchScreenState.value) {
        SearchState.ButtonScreen -> {
            SearchButtonScreen {
                if(viewModel.queryString.value.isNotBlank()) {
                    viewModel.toResultScreen()
                } else {
                    viewModel.toQueryScreen()
                }
            }
        }
        SearchState.QueryScreen -> {
            SearchQueryScreen(
                queryString = viewModel.queryString.value,
                setQueryString = viewModel::setQueryString,
                toButtonScreen = viewModel::toButtonScreen,
                toResultScreen = viewModel::toResultScreen
            )
        }
        SearchState.ResultScreen -> {
            SearchResultScreen(
                queryString = viewModel.queryString.value,
                setQueryString = viewModel::setQueryString,
                getQueryResult = viewModel::getQueryResult,
                toButtonScreen = viewModel::toButtonScreen,
                toDeckScreen = {
                    navController.navigate(Screen.Deck.route + "/${it.deckTitle}/${it.cardList.size}")
                }
            )
        }
    }
}
```

<details>
<summary>[viewModel::] <- 이거 뭔가요?</summary>
<div markdown="1">

위 코드의 경우 `viewModel::`은 함수 참조를 위해 쓰인 것입니다.  
또한, 함수를 참조함과 동시에 값으로서 사용할 수 있습니다.  
이외에도 `::`(더블콜론)은 클래스참조, 프로퍼티참조, 생성자참조를 위해 쓰이기도 합니다.

</div>
</details>
  
# 3. 마무리
이번 주차는 ViewModel class를 만들고 이를 ```HomeScreen```과 ```searchScreen```에 적용하는 것을 했습니다.  
사실 진도를 별로 못나가서 복습 내용보다 저를 포함한 멤버분들이 궁금할만한 부분들을 알아와서 정리를 해봤습니다.  
끝!
