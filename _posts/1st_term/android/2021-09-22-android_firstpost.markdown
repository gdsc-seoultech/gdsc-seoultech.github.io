---
layout: post
title: Android 1주차의 추억
date: 2021-09-22 16:40:16
description: 
author: KangInyeong
categories: ["1st_term"]
tags: ["android"]
---

# 9월 14일 Android 커리큘럼 1주차
<br>
우리의 GDSC 안드로이드 커리큘럼에서는 "Chegg Prep"라는 어플리케이션을 클론 코딩하기로 하였습니다!
![](https://images.velog.io/images/kiyoog02/post/29681844-f2b2-4074-a496-46b8b4debbe7/image.png)

이 앱은 텍스트와 버튼부터 시작해서 하단 탭과 같은 좀 더 복잡한 UI까지 Kotlin을 사용한 단계적 UI 학습에 최적일 것이라는 예원 코어님의 판단하에 당당히 선정된 녀석! 과연 안드로이드 커리큘럼은 무사히 앱을 구현해낼 수 있을지?! 두둥탁!
<br>
<br>


## +) 과제 확인
![](https://images.velog.io/images/kiyoog02/post/6922bde6-de77-4c16-bd86-cb703aa5e27e/image.png) 지난 첫 커리큘럼 시간에는 Kotlin과 Jetpack Compose가 무엇인지 그리고 앞으로의 목표는 무엇인지에 대해 수업하였습니다. 그리고 안드로이드 스튜디오 develops에서 제공하는 [Jetpack Compose Tutorial](https://developer.android.com/jetpack/compose/tutorial)을 읽어 오는 과제가 있었는데요! Composable functions, Layout, Material Design, Lists and Animations에 대해 공부하는 과제였습니다. 하은님, 승언님, 윤재님, 용수님 모두 멋지게 과제 완료-!

그리하여 드디어 Kotlin 그리고 Jetpack Compose와 함께 하는 본격적인 첫 수업에서는 Row, Column, Icon, Divider 등을 활용하여 앱의 Home 화면을 구현해 보기로 하였습니다.
<br>
<br>
<br>


## 1. Column과 Row
![](https://images.velog.io/images/kiyoog02/post/1bb85e40-e13f-4f21-bbd4-c251d45d9f31/image.png)    
Column과 Row는 내부 요소들을 나열하는 컨테이너입니다. Column은 위에서 아래의 수직 방향으로, Row는 왼쪽에서 오른쪽의 수평 방향으로 요소들을 배열하므로 두 가지를 헷갈리지 않도록 조심해야겠죠?! <strong>Row</strong>에는 <strong>horizontalArrangement</strong>와 <strong>verticalAlignment</strong>를, <strong>Column</strong>에는 <strong>verticalArrangement</strong>와 <strong>horizontalAlignment</strong>를 설정하여 레이아웃을 구성할 수 있습니다. 또한 <strong>modifier</strong>를 사용하여 다양한 변경 사항들을 설정해 줄 수 있습니다. 다만, modifier는 바깥부터 안쪽으로 적용되기 때문에 구현할 때에 적용 순서를 주의하여 사용해야 합니다.
- Row를 활용한 코드 예시
```kotlin
Row(
    modifier = Modifier
    	.fillMaxWidth()
    	.border(
    		shape = RoundedCornerShape(size = 8.dp),
        	width = 2.dp,
        	color = Color.LightGray
        )
        .padding(20.dp),
    verticalAlignment = Alignment.CenterVertically
) 
```

+) horiontalArrangement 옵션
Start(왼쪽 정렬), Center(중간 정렬), End(오른쪽 정렬), SpaceAround(항목 주변에 동일 공간), SpaceEvenly(동일 간격), SpaceBetween(양 끝 정렬), EqualWeight(동일 크기),,,

+) verticalArrangement 옵션
Top(위쪽 정렬), Center(중간 정렬), End(아래쪽 정렬), SpaceAround(항목 주변에 동일 공간), SpaceEvenly(동일 간격), SpaceBetween(양 끝 정렬), EqualWeight(동일 크기),,,
<br>
<br>
<br>

## 2. Icon 사용
아래의 코드를 gradle 안에 있는 dependencies 부분에 추가한 뒤에 [사이트](https://fonts.google.com/icons)에서 원하는 Icon을 검색하여 이름을 찾아 직접 사용할 수 있습니다.

- Icon 사용을 위한 build.gradle 추가 코드
```java
//build.gradle (:app) 
implementation "androidx.compose.material:material-icons-core:$compose_version"
implementation "androidx.compose.material:material-icons-extended:$compose_version"
```

- Computer 아이콘 넣기
```kotlin
Icon(
	imageVector = Icons.Default.Computer,
    contentDescription = "computer icon",
    tint = DeepOrange,
    modifier = Modifier.size(36.dp)
)
```
<br>
<br>

## 3. 색상 추가
기본으로 제공해 주는 색이 아니라 원하는 <span style="color:orange">컬</span><span style="color:purple">뤄</span><span style="color:green">~</span>를 사용하기 위해서 __ui/theme/Color.kt__ 안에 코드를 추가해 줘야 합니다.

- 오렌지색 추가 코드
```kotlin
val DeepOrange = Color(0xFFF57700)
```
<br>
<br>


## 4. Divider 사용
Divider 기능을 사용하여 width와 height를 지정하고 구분선을 그릴 수 있습니다. (이 선 넘으면 침범이야 beep🎵)

- Divider 코드 예시

```kotlin
Divider(modifier = Modifier
	.fillMaxWidth()
    .height(2.dp), color = Color.LightGray)
```
<br>

### ex) Row에 Icon과 Text를 추가하여 만든 SubjectItem

![](https://images.velog.io/images/kiyoog02/post/9e95233b-1979-44be-b7d1-8864445e97a2/image.png) 
```kotlin
@Composable
fun SubjectItem() {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .border(
                shape = RoundedCornerShape(size = 8.dp),
                width = 2.dp,
                color = Color.LightGray
            )
            .padding(20.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Icon(
            imageVector = Icons.Default.Computer,
            contentDescription = "bookmark",
            tint = DeepOrange,
            modifier = Modifier.size(36.dp)
        )
        Text(
            text = "  Computer Science",
            style = MaterialTheme.typography.h5,
            fontWeight = FontWeight.Bold
        )
    }
}
```
 
<br>
<br>

## ❤ <span style="color:red">G</span><span style="color:orange">D</span><span style="color:green">S</span><span style="color:blue">C</span> GitHub에서 구경하세오 ❤
![](https://images.velog.io/images/kiyoog02/post/7abf9d86-e12e-4d03-94b4-9bd51279891e/image.png) [GDSC Seoultech GitHub](https://github.com/gdsc-seoultech)에 있는 ["CheggPrep_Clone"](https://github.com/gdsc-seoultech/CheggPrep_Clone)에 앱 클론 프로젝트가 꾸준히 업로드될 예정이니 많은 관심 부탁드립니다😜