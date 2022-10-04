---
layout: post
title: Android 2주차의 추억
date: 2021-09-28 16:37:22
description: 
author: KangInyeong
categories: ["1st_term"]
tags: ["android"]
---

# 9월 28일 Android 커리큘럼 2주차

지난주에 이어서 이번 주에도 "Chegg Prep" 어플리케이션 클론 코딩을 이어나가기로 하였는데요~!
그전에 추석 연휴 동안에도 쉬지 않고 열심히 과제를 해준 안드로이드 멤버들의 과제 확인을 해볼까요?

## +) 과제 확인
![](https://images.velog.io/images/kiyoog02/post/4b2c2a0e-1f4c-4aa0-a1e5-c6f54d0a3b51/image.png) 😎 승언님께서는 지난 커리큘럼 시간에 배운 내용을 활용하여 직접 인스타그램 상단바를 구현해 보셨대요! 

🤗 윤재님은 경로 설정에 대해 큰 깨달음을 얻으셨구요!

🤩 하은님은 GitHub을 활용하여 Instagram profile UI 클론 코딩을 아주 정성껏 정리해 주셨네요!

🤠용수님은 구글링의 중요성을 체감하신 것 같군요!

<br>
<br>


## 1. FindFlashCards 구현
지난 커리큘럼 시간에 배운 내용을 활용하여 flashcard들을 찾아볼 수 있는 검색창 UI를 클릭 가능한 Row 버튼으로 구현해 보았습니다. Row 안에 **Icon**과 **Text**를 **verticalAlignment**로 배치한 후에 둥근 모서리를 위해서 CircleShape 속성을 활용하여 **clip**과 **border**를 설정하고, **padding**과 **clikable**도 설정해 줍니다. ![](https://images.velog.io/images/kiyoog02/post/ce1c1432-fc61-41d5-ab64-c70985690ce0/image.png)
```kotlin
@Composable
fun FindFlashCards() {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .border(width = 1.dp, color = Color.LightGray, shape = CircleShape)
            .padding(horizontal = 8.dp, vertical = 14.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Icon(
            imageVector = Icons.Default.Search,
            contentDescription = "search flashcards",
            tint = Color.Gray
        )
        Text(text = " Find flashcards", style = MaterialTheme.typography.body1, color = Color.Gray)
    }
}
```

<br>
<br>

## 2. State 개념
앱에서 **State**는 시간에 지남에 따라 변할 수 있는 값인데요. Compose를 업데이트하려면 새 argument들로 동일한 composable을 호출해야 합니다. 아래의 그림처럼 텍스트 Uargument들은 UI를 표현합니다. 그리고 State가 업데이트될 때마다 **recomposition**이 일어납니다. 모든 Composable은 XML처럼 자동으로 업데이트가 되지 않기 대문에 새로운 State를 명시적으로 알려줘야 합니다! (-> Compose는 선언형 UI 프레임워크이기 때문에 화면을 변경하고 싶다면 해당 UI를 표현하는 composable 함수에 변경된 값을 전달하여 다시 호출해야 하는 것입니다.) ![](https://images.velog.io/images/kiyoog02/post/e81c7a67-6c15-4782-881f-de8a7d3129db/image.png)

- Composable 함수는 remember를 사용해서 메모리에 단일 객체 저장
- **remember**는 첫 composition에 값을 저장해서 recomposition이 발생할 때 그 값을 다시 사용
- remember를 호출한 Composable은 composition에서 삭제되면 해당 객체를 잊음
- mutable / immutable 객체들을 모두 저장할 수 있음 -> **mutableStateOf** 사용
- State<T>는 observable type으로 값이 바뀔 때에 그 값을 사용하는 모든 Composable이 recompositon됨
<br>
=> State는 바뀔 수 있고, 바뀌면 recomposition을 일으키며, recomposition 뒤에도 remember를 활용하여 값을 기억할 수 있다.

<br>

### MutableState 선언 방법
① `val value = remember { mutableStateOf(default) }`
<br>

② `var value by remember { mutableStateOf(default) }`
<br>

③ `val (value, setValue) = remember { mutableStateOf(default) }`

<br>

### 예시 코드
![](https://images.velog.io/images/kiyoog02/post/31efeb95-21ab-4276-bf7e-d2171f7fa21b/image.png)
위의 코드처럼 Text와 OutlinedTextField를 배치하고 실행하면 입력값에 따라 화면에 변화를 줄 수 있습니다. name 변수에 대해 remember를 활용하여 초기 composition 때에는 빈 값에서 입력이 있을 때 즉, recomposition(onValueChange가 it으로 입력을 인식하고 name에 넣어줌) 될 때마다 입력된 Text를 보여줄 수 있습니다. 추가로 HelloContent 함수를 caller라고 한다면 변화에 따라 onValueChange가 caller에게 callback을 주는데 해당 callback의 파라미터로 텍스트가 업데이트된다고도 표현할 수 있답니다.

<br>

### Stateful vs Stateless
위의 예시 코드에서 등장하는 HelloContent는 외부에서 State의 변화를 고려하지 않으며 내부에서만 State를 가지는 stateful한 Composable이라고 할 수 있습니다.
- **stateful** : remember로 State를 저장 & caller가 State를 제어할 필요가 없을 때 사용하며, 재사용성이 떨어지고 테스트하기 힘듦
  
- **stateless** : Composable이 State를 갖지 않음 & caller가 State를 제어할 필요가 있을 때 사용하며, state hosting 사용
즉, HelloContent는 stateful하므로 caller에서 State를 변경할 수 없어서 재사용성이 줄어들겠죠? 이를 극복하기 위해서 state hosting 즉, stateless한 Composable을 만들어줄 수 있습니다.
  
<br>

### State Hosting
Composable의 state를 caller 쪽으로 옮기는 것을 hosting이라고 표현하는데요.
State hosting을 하여 State가 caller로 이동하면 **Singlesource of truth, Encapsulated, Shareable, Interceptable, Decoupled**의 특성들을 가지게 됩니다.
![](https://images.velog.io/images/kiyoog02/post/f786c110-5234-46d4-8b8f-0fae7c3ab94d/image.png)
State hosting을 통해 HelloContent는 재사용에 용이하게 되었으며, 파라미터로 값을 변경할 수 있습니다. HelloContent는 HelloScreen과 코드가 나누어짐으로써 HelloScreen에서 생기는 변화에 영향을 받지 않습니다.

<br>

### +) Compose UI 설계
[Architecting your Compose UI](https://developer.android.com/jetpack/compose/architecture)과 함께 추가적으로 설명을 덧붙이려고 합니다. 아래의 그림처럼 state는 위에서 아래로 전달되어 UI가 State를 표현합니다. 그리고 UI에 의해 event가 생성되면 해당 event는 아래에서 위로 전달되구요. 이렇게 Compose UI는 단방향의 데이터 흐름을 가지고 설계되어야 한다는 점을 꼭 기억해 주세요😊 ![](https://images.velog.io/images/kiyoog02/post/2a01d79f-1392-412e-a418-c98bfffb5379/image.png)
  
<br>
<br>

## 3. State 활용
DeckTitleTextField라는 이름으로 State를 활용하여 Deck의 제목을 작성할 수 있는 입력창을 만들어 보았습니다. 위에서 배운 remember와 mutableStateOf도 보이네요~! 추가로, **placeholder**로 XML의 hint 기능을 사용할 수 있답니다 : )
![](https://images.velog.io/images/kiyoog02/post/0e8b0cce-e6c8-47c3-93fa-d05ae9f554bc/image.png)
```kotlin
@Composable
fun DeckTitleTextField() {

    var text by remember {
        mutableStateOf("")
    }
    Column(modifier = Modifier.fillMaxWidth()) {
        TextField(
            value = text,
            onValueChange = { newText ->
                text = newText
            },
            modifier = Modifier.fillMaxWidth(),
            textStyle = MaterialTheme.typography.h4,
            placeholder = {
                Text(
                    text = " Untitled deck",
                    style = MaterialTheme.typography.h4,
                    fontWeight = FontWeight.ExtraBold,
                    color = Color.LightGray
                )
            },
            colors = TextFieldDefaults.textFieldColors(
                cursorColor = DeepOrange,
                backgroundColor = Color.Transparent,
                focusedIndicatorColor = Color.LightGray,
                unfocusedIndicatorColor = Color.LightGray
            ),
            maxLines = 2
        )
    }
}
```

<br>
<br>

## 4. HomeScreen 구현 
HomeScreen은 CheggPrep라는 Text, All/Bookmarks/Created 옵션들을 가지는 FilterSection, DeckItem들의 목록으로 구성됩니다.

  - **Scaffold**는 Snackbar, floatingActionButton 등의 material design을 쉽게 구현할 수 있도록 도와줍니다. HomeScreen에서는 topBar를 만들기 위해서 사용이 되었죠!
  - **FilterSection**을 통해 선택된 옵션의 인덱스를 받아 화면에 보여줄 수 있습니다.
  - **LazyColumn**을 활용하여 DeckItem들을 목록으로 보여줄 수 있습니다.
  
![](https://images.velog.io/images/kiyoog02/post/170539f8-628a-4e70-90e8-9d95aa34de7a/image.png)
  
<br>

### HomeScreen 화면 코드
```kotlin
  @Composable
fun HomeScreen() {
    var (selectedFilterIndex, setFilterIndex) = remember {
        mutableStateOf(0)
    }

    Scaffold(
        topBar = {
            Column(
                modifier = Modifier.padding(
                    top = 8.dp,
                    bottom = 4.dp,
                    start = 16.dp,
                    end = 16.dp
                )
            ) {
                Text(
                    text = "CheggPrep",
                    style = MaterialTheme.typography.h5,
                    color = DeepOrange,
                    fontWeight = FontWeight.Bold
                )
                Spacer(modifier = Modifier.height(24.dp))
                FilterSection(selectedFilterIndex, setFilterIndex)
            }
        }
    ) {
        LazyColumn(modifier = Modifier.padding(16.dp)) {
            repeat(20) {
                item {
                    DeckItem()
                }
                item {
                    Spacer(modifier = Modifier.height(8.dp))
                }
            }
        }
    }
}
```

위에서 배웠던 State hosting을 활용하여 HomeScreen은 FilterText 3개를 호출하는 FilterSection을  호출하므로 HomeScreen에 State를 선언하고 하위로 입력 데이터를 전달하게 됩니다. 

<br>

### FilterSection 코드
```kotlin
  @Composable
fun FilterSection(selectedFilterIndex: Int, setIndex: (Int) -> Unit) {
    Row {
        FilterText("All", selectedFilterIndex == 0) { setIndex(0) }
        Spacer(modifier = Modifier.width(8.dp))
        FilterText("Bookmarks", selectedFilterIndex == 1) { setIndex(1) }
        Spacer(modifier = Modifier.width(8.dp))
        FilterText("Created", selectedFilterIndex == 2) { setIndex(2) }
    }
}
```  
<br>
<br>
  

## 5. ConstraintLayout 활용
ConstraintLayout은 Constraint 즉, 제약을 통해 복잡한 UI를 보다 유연하게 구현할 수 있는 레이아웃입니다. ConstraintLayout을 사용할 때에는 다른 요소 또는 레이아웃들과의 관계를 통해서 배치가 이루어지므로 요소의 가로 & 세로에 제약 조건을 하나 이상 설정해 줘야 합니다. 또한, gradle에 `implementation "androidx.constraintlayout:constraintlayout-compose:1.0.0-beta02"` 코드를 추가한 후에 사용이 가능합니다. 

```kotlin
modifier = Modifier
    .constrainAs(front) {
    top.linkTo(parent.top) 
    }

```
위의 코드처럼 constrainAs와 linkTo를 활용하여 ConstraintLayout을 만드는데요. 해당 코드는 front(본인 요소)의 top parent(부모 요소)의 top에 배치한다는 의미가 있습니다.


<br>
<br>

## 마무리
![](https://images.velog.io/images/kiyoog02/post/1f48be95-736f-46fa-9677-86153e807159/image.png) 

그리하여 커리큘럼 2주 차에서는 TextField, State, ConstraintLayout에 대해 배우고, Scaffold를 활용해 TopBar를 만들어서 앱의 홈 화면 구현까지 완료해 보았습니다 : ) 이번 커리큘럼 시간에서는 조금 어려운 개념들이 등장하기 시작했는데요. 계속 듣고, 쓰다 보면 어렵던 개념들도 쉽게 사용할 날이 오겠죠...? 열심히 해봅시다~! 열정-! 열정-! 열정-!
다음 주에도 Jetpack Compose를 통한 UI 구현은 계속된다....! **To be Continued🐾**