---
layout: post
title: Android 8주차의 추억
date: 2021-11-24 12:58:59
description: 
author: KangInyeong
categories: ["1st_term"]
tags: ["android"]
---

# 11월 23일 Android 커리큘럼 8주차  

지난주 Pager Layout을 배워서 활용해 보았고, 뒷부분에서는 조금 어려운 Reposity와 Hilt 맛보기를 했는데요. Repository와 Hilt를 배운 이유는 바로..! 앱에서 데이터를 활용하기 위함이겠죠?! 그리하여 이러한 데이터를 저장하고 불러올 수 있는 만능 도구인 "Firebase"와 "Chegg Prep" 앱을 연동하고 로그인 기능을 구현하기 위한 커리큘럼 시간이 진행되었습니다. 그럼 같이 한 번 따라가 보시죠!!   

<br/>


## Firebase는 무엇인가요?
![](https://images.velog.io/images/kiyoog02/post/e9b0a589-46c5-43cc-910a-23bcb986717f/image.png)
일단 가장 먼저 Firebase가 무엇인지 간단하게 알고 넘어가 보도록 할게요! 
Firebase는 2011년 Firebase사가 개발하고 2014년 Google에 인수된 모바일 및 웹 애플리케이션 개발 플랫폼입니다. 즉, 현재는 구글에서 운영 중인 플랫폼이라고 할 수 있겠죠.    
![](https://images.velog.io/images/kiyoog02/post/476190f5-ed21-4cea-9ffb-89d02c81a406/image.png)
이러한 파이어베이스는 Android, iOS, 웹, Unity 등과 연결하여 사용할 수 있으며 데이터를 저장하고 앱을 지원하는 백엔드 서버, 사용자 인증, 수익 창출과 같은 앱 구축 시 필요한 다양한 기능을 제공하기 때문에 제가 만능 도구라고 표현했던 것입니다~!  
사실 다른 데이터 및 서버보다도 간단한 UI와 사용방법 그리고 여러 참고 자료들로 인해 많은 사람들이 앱을 만들 때에는 파이어베이스를 우선순위로 사용하고자 마음을 먹는 것이라고 생각합니다.  
웹/머신러닝 멤버분들도 기회가 된다면 Firebase 꼭 한 번 사용해 보시기 바랍니다!! <br><br>



## Firebase의 Authentication 기능

그리하여 우리는 이 Firebase로 무엇을 할 것이냐! 가장 먼저 이번 시간에 해볼 것은 앱에 구글 SignIn 기능을 구현하는 것입니다. 
![](https://images.velog.io/images/kiyoog02/post/b571a47a-9433-4651-8775-7a7c5d3caec1/image.png)
Firebase는 앱에서 사용자 인증 및 로그인을 쉽게 할 수 있도록 Google, Facebook, Twitter, email, phone 등의 다양한 인증 방식을 지원합니다. 우리는 그중에서도 Google을 사용해 볼 것이구요!
![](https://images.velog.io/images/kiyoog02/post/53cf3bcb-c6f3-488b-abd7-6fa3d6baa960/image.png) Android Studio에서 작업 중인 Chegg Prepp 프로젝트에서 상단 탭의 __Tools__ 를 클릭하면 __Firebase__ 를 찾을 수 있는데요. 클릭하면 화면 오른쪽에 Firebase를 활용할 수 있는 다양한 기능들을 보여줍니다. 그중에서도 __Authentication__ 을 사용하여 __Google Sin-in__ 을 구현할 수 있습니다.

- Firebase 연동 방법
1) __"Connect to Firebase"__ 버튼을 클릭하면 Firebase에서 프로젝트를 추가할 수 있고, 해당 프로젝트와 Android Studio를 연결할 수 있습니다.   
2) __"Add the Firebase Authentication SDK to your app"__ 버튼을 클릭해서 손쉽게 자동으로 Gradle을 수정해 줄 수 있습니다.   
3) Firebase로 이동하여 프로젝트의 __google-service.json__ 을 다운로드한 후에 Android Studio에 추가합니다.  
4) Android Studio 화면 오른쪽에 있는 Gradle 버튼을 클릭하면 있는 __signingReport__ 를 클릭하여 __SHA-1 키__ 를 찾고, 이를 복사하여 Firebase의 프로젝트 설정 안에 SHA 인증서 추가 부분에 붙여 넣습니다.  
해당 과정은 간단하게 정리한 것이므로 [참고 영상](https://youtu.be/eKGPsErT0bU)을 통해 따라하시면 쉽게 하실 수 있으실거라고 생각합니다.

<br>


## SignIn 코드 작성
사용자가 앱을 통해 구글 로그인 기능을 사용하려면 버튼이 필요하겠죠? 해당 버튼을 먼저 만들어주겠습니다!

- __버튼UI 구현__   
<br>
![](https://images.velog.io/images/kiyoog02/post/d427fd74-2318-4837-bdac-bebf0c265e7a/image.png)  
```kotlin
@ExperimentalMaterialApi
@Composable
fun GoogleSignInButtonUi(
    text: String = "",
    loadingText: String = "",
    onClick: () -> Unit
) {
    var clicked by remember {
        mutableStateOf(false)
    }

    Surface(
        onClick = { clicked = !clicked },
        shape = MaterialTheme.shapes.medium,
        border = BorderStroke(width = 1.dp, color = Color.LightGray),
        color = MaterialTheme.colors.surface
    ) {
        Row(
            Modifier
                .padding(
                    start = 12.dp,
                    end = 16.dp,
                    top = 12.dp,
                    bottom = 12.dp
                )
                .animateContentSize(
                    animationSpec = tween(
                        durationMillis = 300,
                        easing = LinearOutSlowInEasing
                    )
                ),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.Center
        ) {
            Icon(
                painter = painterResource(id = R.drawable.ic_google_icon),
                contentDescription = "Google SignIn Button",
                tint = Color.Unspecified
            )
            Spacer(modifier = Modifier.width(8.dp))
            Text(text = if (clicked) loadingText else text)

            if (clicked) {
                Spacer(modifier = Modifier.width(16.dp))
                CircularProgressIndicator(
                    modifier = Modifier
                        .height(16.dp)
                        .width(16.dp),
                    strokeWidth = 2.dp,
                    color = MaterialTheme.colors.primary
                )
                onClick()
            }
        }
    }
}
```

이렇---게에ㅔㅔ 긴 코드를 작성하면, 위의 사진에서 보시는 것처럼 버튼을 구현하실 수 있답니다. 우리의 Jetpack Compose 덕분에 코드가 좀 길어질 수는 있지만 클릭 이벤트에 대한 처리도 한 번에 가능하다는 점은 아주 큰 장점이죠!!

<br>

- __API를 통해 Google SignIn과 상호작용__ 
```kotlin
fun getGoogleSignInClient(context: Context): GoogleSignInClient {
   val signInOptions = GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
       .requestEmail()
       .requestIdToken(context.getString(R.string.web_client_id))
       .build()


   Log.d("client", R.string.web_client_id.toString())
   return GoogleSignIn.getClient(context, signInOptions)
}
```
Google SignIn과의 소통을 위해서는 Firebase 연동 시에 프로젝트에 추가해 줬던 __google-service.json__ 파일이 필요합니다. 그 파일 안에 있는 __"oauth_client"___ 의 __"client_id"__ 를 사용해야 하기 때문이죠. 해당 client_id를 복사한 뒤에 res 폴더 -> values 폴더 안에 __"strings.xml"__ 를 열어 그 안에 선언해 줍니다. 우리는 web_client_id라는 이름으로 선언을 해주었기 때문에 사용할 때는 R.string.web_client_id로 사용할 수 있습니다. 해당 id는 Google SignIn을 위한 요청 토큰으로 사용됩니다.

<br>

- __로그인 후 사용자 인증__   
로그인이 이루어지면 getCredential을 통해 ID 토큰을 받아서 해당 credential을 사용하여 인증함으로써 구글 계정 로그인을 진행할 수 있습니다. 또한 인증에 성공하면 getCurrentUser 메서드를 통해 사용자의 계정 정보(이메일, 이름 등)를 가져와 활용할 수 있습니다.
```kotlin
private fun firebaseAuthWithGoogle(
        idToken: String,
        signIn: (String, String) -> Unit
    ) { 
        val credential = GoogleAuthProvider.getCredential(idToken, null)
        auth.signInWithCredential(credential)
            .addOnCompleteListener(this) { task ->
                if (task.isSuccessful) {
                    // Sign in success, update UI with the signed-in user's information
                    Log.d("Firebase", "signInWithCredential:success")
                    signIn(auth!!.currentUser!!.email!!, auth!!.currentUser!!.displayName!!)
                }
                else {
                    // If sign in fails, display a message to the user.
                    Log.d("Firebase", "signInWithCredential:failure", task.exception)
                }
            }
    }
```


<br>

## StateFlow에 대해 알아보자.
Android에서 코틀린을 사용하면 __"Flow"__ 에 대한 이야기를 자주 접하게 되실 텐데요. 코루틴에서 flow는 여러 값들을 순차적으로 내보낼 수 있는 유형을 말한다고 해요. 즉, flow를 사용하면 DB로부터 실시간 업데이트를 받을 수 있는 것이죠.  
이러한 Flow는 flow builder API들을 통해서 만들 수 있는데요. StateFlow가 바로 이 flow를 통해 상태 업데이트를 UI 표현을 위해 최적으로 내보내주는 Flow API입니다. 그리하여 __StateFlow__ 는 현재 상태에서 state가 업데이트되면 해당 상태의 변화를 관찰하고 있다가 변화 흐름을 전달해 주는 녀석입니다. 이러한 StateFlow도 코드에 잘 녹여 낸다면 사용자에게 UI를 통해 데이터를 빠르게 효율적으로 보여줄 수 있겠죠?!

<br>

## 마무리
이렇게 본격 8주 차에 달하는 Chegg Prepp 클론 코딩 커리큘럼이 마무리되었는데요...! 미처 다루지 못한 데이터 구조화 및 처리 등은 종강 이후의 추가 커리큘럼을 통해 진행될 예정입니다. 마지막 특별 커리큘럼까지 많은 기대와 관심 부탁드립니다~! 그럼 종강 후에 만나요~ 안녕~!😊 