---
layout: post
title: 세 번째 세션 - git똥차게 git profile 꾸미기 돌아보기
date: 2021-09-28 12:21:17
author: Seongryool Wee
categories: ["ml"]
---

9월 28일, GDSC Seoultech의 세 번째 정기 세션이 진행되었습니다.  
세 번째 세미나의 주제는 **git똥차게 git profile 꾸미기** 였습니다.

# Agenda

1. Markdown 익히기
2. Github Profile 꾸미기

목차는 먼저 Markdown에 대해서 배우고 github Profile을 다채롭게 꾸미는 방법에 대해서 배웁니다.

# Markdown 익히기

## - Markdown 이란?

1. 먼저 Markdown은 텍스트 기반이고,쉽게 쓰고 읽을 수 있으며 HTML로 변환이 가능합니다.
2. Markdown은 특수기호와 문자를 이용한 매우 간단한 구조의 문법을 사용합니다.
3. 마크다운이 최근 각광받기 시작한 이유는 Github 때문입니다.
4. Github 저장소 Repository에 관한 정보를 기록하는 README에 Markdown을 통해서 설치 방법, 소스코드 설명, 이슈 등을 간단하게 기록하고 가독성을 높일 수 있다는 강점이 부각되어서 각광 받고 있습니다.

## - Markdown 장점

1. 먼저 Markdown은 별도의 도구 없이 작성 가능하고 굉장히 간결한 문법을 가지고 있습니다.
2. Text로 저장되기에 용량이 적어서 보관이 용이하고 Text 파일이기에 버전관리시스템을 이용해서 변경이력 관리가 가능합니다.
3. 지원하는 프로그램과 플랫폼이 매우 다양합니다.

## - Markdown 단점

마크다운에도 단점이 존재합니다.

1. 정해진 표준이 없습니다. 표준이 없기 때문에 도구에 따라서 변환방식이나 생성물이 달라집니다.
2. 아쉽게도 모든 HTML 마크업을 대신하지 못 하기 때문에 모든걸 Markdown을 통해서 생성할 수 없습니다.

---

## - 강의자료 보는 법

![image](https://user-images.githubusercontent.com/66999675/134665134-57657fc1-e308-441b-bba3-9eec137cb486.png)
![image](https://user-images.githubusercontent.com/66999675/134665187-ff70ad10-bb56-4365-b171-08bf7fe8e5da.png)

앞으로 사진이 왼쪽 오른쪽 두 개가 나올 겁니다. 왼쪽은 Edit file로 readme에서 코드를 작성하는 곳입니다.  
오른쪽은 Edit file에서 작성한 코드를 미리볼 수 있는 Preview입니다.

## - 헤더 Headres

![image](https://user-images.githubusercontent.com/66999675/134665541-96c838a3-0faa-424c-95f5-871e3d4ce7b2.png)
![image](https://user-images.githubusercontent.com/66999675/134665571-39b750cc-5f24-4ad6-afb4-f29be90c0329.png)

먼저 제목, 소제목으로 사용되는 헤더입니다.
헤더는 #를 이용해서 표현할 수 있습니다.  
'#' 1개가 가장 큰 헤더이고 '#' 6개가 가장 작은 헤더입니다.  
오른쪽 사진에서 보시다 싶이 '#' 1개와 # 2개는 기본적으로 밑줄까지 제공해줍니다.  
'#' 7개 이상부터는 헤더로 출력되지 않고 '#'으로 나오게 됩니다.

## - BlockQute

![image](https://user-images.githubusercontent.com/66999675/134666018-e193ad29-4cc4-44e9-bc19-d26be209aa1f.png)

BlockQuote 입니다. BlockQuote는 '>'를 이용해서 표현할 수 있습니다.  
BlockQuote를 여러 개 사용하고 싶으시면 왼쪽의 사진처럼 한 개 넣고 그 밑에 2개 넣고 갯수를 늘려가는 방식으로 하면 됩니다.

## - 순서 있는 목록

![image](https://user-images.githubusercontent.com/66999675/134666248-d1c9d310-7e49-4b1b-bae4-43921c1e1310.png)

숫자있는 목록입니다. 간단하게 오른쪽 사진처럼 숫자와 점을 사용해서 표현할 수 있습니다.

![image](https://user-images.githubusercontent.com/66999675/134666374-86ce810c-d0f2-4e58-b11a-5e987f4a92e7.png)

위의 사진처럼 순서있는 목록은 항상 맨 앞 숫자 기준으로해서 오름차순으로 정렬을 하게 됩니다.  
왼쪽의 사진을 보면 1 4 2 3 이렇게 적었는데 맨 앞 숫자 1을 기준으로 해서 1 2 3 4로 정렬이 됩니다.

## - 순서 없는 목록

![image](https://user-images.githubusercontent.com/66999675/134666515-da4a638b-17e1-4e3f-88f0-e2b6b77e5551.png)

순서 없는 목록입니다. 별표, 플러스, 마이너스를 이용해서 사용 가능합니다.  
셋 중에 어느 걸 사용해도 다 똑같이 나옵니다.

![image](https://user-images.githubusercontent.com/66999675/134666658-4ef0b013-a823-4320-9d91-c35dbff8da26.png)

또한 꼭 하나의 종류만 사용 가능한 것이 아니라 별표, 플러스, 마이너스를 혼합해서 사용이 가능합니다.  
저 같은 경우는 보통 - 를 많이 사용합니다.

## - 코드 작성

![image](https://user-images.githubusercontent.com/66999675/134666804-1273eac1-dd19-4921-b182-7eef986efaab.png)

코드를 작성하는 방법은 들여쓰기를 해야됩니다. 보통 space bar 4번이나 tab 4번 눌러서 들여쓰기 하시면 코드블럭이 만들어집니다.  
 참고로 위 아래에 code라고 써져있는데 이거는 안 쓰셔도 됩니다. 제가 단순히 code라는 걸 확실하게 보여주기 위해서 쓴 단어입니다.  
 코드블럭은 들여쓰기를 하지 않은 행을 만나면 코드블럭이 끝나게 됩니다.

![image](https://user-images.githubusercontent.com/66999675/134667266-f3a0b108-ccd0-42eb-93bb-fbf13e916b7b.png)

space bar 4번이나 tab 4번을 눌러서 코드블럭을 사용할 때에는 주의사항이 하나 있습니다.  
위의 사진에서 보는 바와 같이 한 줄 띄어쓰기를 하지 않으면 코드블럭이 정상적으로 나오게 되지 않기에 꼭 한 줄을 띄고 해야지만 정상적으로 나오게 됩니다.

![image](https://user-images.githubusercontent.com/66999675/134667612-68dd7018-7027-4f2a-9723-24b3a2473819.png)

코드를 작성하는 또 다른 방법이 있습니다. 저는 이 방식이 더 편해서 주로 이 방식을 사용합니다.  
숫자 키 1번 옆에 있는 `를 3번 눌러서도 코드블럭을 만들 수 있습니다.  
일단 기본적으로 ```을 해도 코드블럭이 만들어지고 여기에 작성하려는 언어를 입력하면 언어에 맞게 문법 강조 기능이 되어집니다.  
코드를 다 작성했으면 마지막줄에 똑같은 개수로 닫아주면 됩니다.

## - Inline Code

![image](https://user-images.githubusercontent.com/66999675/135014714-5dd65bd1-60d4-4cde-914a-6184644bbdea.png)
이번엔 코드 블럭이랑 매우 유사한 인라인 코드를 알아보도록 하겠습니다.  
인라인 코드는 코드블록과 유사하지만 코드 블록이 여러 줄을 한 번에 감쌀 수 있다면
인라인 코드는 위의 사진에서 보시다 싶이 한 줄만 감쌀 수 있습니다.
왼쪽 코드에서 줄 바꿈을 적용해도 한 줄로만 적용이 됩니다.

## - 수평선

![image](https://user-images.githubusercontent.com/66999675/134667928-c1cbcd2d-4fba-459e-974f-3b1bb6931a3f.png)

수평선 입니다. \*, - 을 사용하면 됩니다. 어느 것을 사용해도 똑같이 나오게 됩니다.  
참고로 꼭 3개 이상을 하셔야 정상적으로 수평선이 나오게 됩니다.

## - 표

![image](https://user-images.githubusercontent.com/66999675/134668133-17ebd3a9-1641-46f5-9a13-837ead2239ee.png)

이번엔 간단한 표 형식입니다. 왼쪽 사진처럼 '-' 3개를 이용하면 됩니다.  
먼저 위에 3개를 쓰고표에 작성할 내용을 이름 : 위성률와 같은 형식으로 만들면 됩니다.  
내용을 다 작성했다면 마지막 줄에 ---으로 닫아주면 됩니다.

![image](https://user-images.githubusercontent.com/66999675/134668678-d06f26c8-68d9-44c4-868f-7ac415975418.png)

이번에는 '|'을 이용해서 표를 만드는 법을 알아보겠습니다. 왼쪽 사진처럼 '|' 사이에 원하는 내용을 넣으면 표가 만들어집니다.  
정렬을 하고 싶다면 :--- 을 사용하면 왼쪽 정렬, ---:을 사용하면 오른쪽 정렬 :---:을 사용하면 중앙정렬이 됩니다.  
위에서 오른쪽 사진을 보면 맨 위의 행만 정렬이 된 것처럼 보이지만 실제로는 각각의 행에 왼쪽, 오른쪽, 중앙정렬이 됩니다. (~~칸이 작아서 다 중앙정렬로만 보입니다.~~)

## - 링크

![image](https://user-images.githubusercontent.com/66999675/134761307-e865d5eb-0eb5-40b7-a8ae-5880b1b5a0ce.png)

글자에 링크를 달아야되는 경우도 있습니다. 이때는 대괄호와 소괄호를 이용해서 하면 됩니다.  
예를 들어서 GDSC글자에 GDSC 블로그 갈 수 있게 해주는 링크를 연결해주고 싶다고 하면 왼쪽 사진 처럼 대괄호 안에 GDSC를 넣고 소괄호에 주소를 넣어주시면 됩니다. 여기서 꼭 대괄호와 소괄호는 붙여서 써야 정상적으로 작동이 됩니다.

## - 강조

![image](https://user-images.githubusercontent.com/66999675/134761413-e6144a2c-40b3-4d00-b004-691a4b227ba5.png)

이번엔 강조입니다. 먼저 이탤릭 체를 쓰고 싶으시면 '\*','\_'를 사용하면 됩니다.  
둘 중에 어느것을 사용해도 똑같은 결과가 나옵니다. bold체는 '\*\*','\_\_'를 사용하면 됩니다.
취소선은 '~~'을 사용하면 됩니다.  
참고로 꼭 앞 뒤 둘다에 사용해주셔야 되고 기호 앞뒤로 띄어쓰기를 하면 안됩니다.

## - 줄바꿈

![image](https://user-images.githubusercontent.com/66999675/134761504-1b83b12d-ee37-4ad5-9c41-9fee126402b0.png)

Markdown에서는 enter로는 줄 바꿈이 되지 않습니다.
먼저 위의 사진은 enter를 이용해서 줄 바꿈을 한 경우입니다.  
edit file에서 작성을 할 때는 줄바꿈이 적용 된 것처럼 보이나 preview로 보게 되면 한 줄로 나오게 됩니다.  
 그래서 Markdown에서는 enter 말고 스페이스바 2번 이상을 해주면 됩니다.  
 즉 문장 끝에 스페이스바 두 번 이상 누르면 줄바꿈이 됩니다.

![image](https://user-images.githubusercontent.com/66999675/134761563-aa4665d4-4143-45dd-b832-6f6b41ec3dc0.png)

이렇게 위에서 설명한대로 스페이스바를 두 번 누르게 되면 줄 바꿈이 됩니다.  
 스페이스바 2번을 눌렀다는 걸 잘 보여주기 위해서 드래그를 했습니다.

## - 이미지

![image](https://user-images.githubusercontent.com/66999675/134761583-f9cf1c76-99b8-40da-bb1b-06ce312c0632.png)

이미지와 동영상을 넣는 건 간단합니다. Edit File 가장 밑에 보면 attach files라는 문구가 있습니다.  
이걸 클릭하면 파일을 선택해서 올릴 수 있습니다.  
또한 단순히 드래그앤드랍 방식으로도 사진을 넣을 수 있습니다.  
참고로 동영상도 똑같은 방식으로 올릴 수 있으나 10MB 이상은 안 올라갑니다.

![image](https://user-images.githubusercontent.com/66999675/134761626-b97a585e-603c-41db-8e55-404e7b6e5b26.png)

이미지를 넣는 또 다른 방법이 있습니다. 임의의 repository에 들어가서 issue 탭을 누르면 위의 사진처럼 뜨게 됩니다.  
여기서 new issues를 누릅니다.

![image](https://user-images.githubusercontent.com/66999675/134761694-7681e64e-5fe5-4ecc-847c-e28887b00692.png)

new issues를 누르면 위의 사진처럼 뜨게 됩니다. 그럼 write 부분에 사진을 드래그앤드랍 한 후 시간이 몇 조 지나면 링크가 뜨게 됩니다.  
이걸 edit file 부분에 붙여넣기 하면 사진이 올라갑니다.

# Github Profile 꾸미기

![image](https://user-images.githubusercontent.com/90545035/134761815-7d61e629-e851-4eb0-877a-0954b84ed2a0.png)

## - repository 생성

이제 본격적으로 github profile을 꾸며보도록 하겠습니다. 꾸미기 위해서 가장 먼저 해야될 일은 repository를 생성을 해야됩니다.  
repository 생성을 누르게 되면 왼쪽과 같은 화면이 나오게 됩니다.
여기서 제일 중요한게 **repository 이름을 자신의 github 아이디와 똑같이 지정** 해줘야됩니다. 저는 이 세션을 위해서 새로 아이디를 하나 만들었는데 tjdfbf1입니다. 그렇기에 repository 네임도 tjdfbf1로 해야됩니다.  
그러면 secret, special repository라고 초록색 창이 뜨게 됩니다. 만일 이게 안뜨면 어딘가에 오타가 있다는 겁니다.
description은 원하는대로 작성하시면 됩니다. 그다음 public 체크 하시고 프로필은 readme에 작성을 하기 때문에 add a readme file을 눌러줍니다. 마지막으로 create repository를 누르면 됩니다.

![image](https://user-images.githubusercontent.com/66999675/135014614-bd629a29-822c-473a-9051-6f3113507fd0.png)

create repository를 누르면 기본적인 화면이 뜨게 됩니다. 여기서 Edit README를 누르면 됩니다!

![image](https://user-images.githubusercontent.com/90545035/134762032-eb6cc969-edb7-4de5-84bf-debed537e16e.png)  
이게 편집의 기본화면 입니다. edit file은 코드 작성 preview는 작성한 코드를 미리 볼 수 잇는 곳입니다.

## - 상단꾸미기

자 이제 본격적으로 해보겠습니다. 먼저 상단 꾸미기 입니다.  
 상단꾸미기에 대한 자료는 [링크](https://github.com/kyechan99/capsule-render)에서 가져왔습니다. 더 자세한 내용을 알고 싶다면 [링크](https://github.com/kyechan99/capsule-render)를 참고 하시면 됩니다.  
일단은 상단을 꾸미고 싶다면 아래 링크를 복사하면 됩니다.

```
![header](https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=GDSC&fontSize=90)

```

그럼 아래 사진처럼 나오게 됩니다.

![image](https://user-images.githubusercontent.com/66999675/134762127-be83f3d6-9b59-41ec-b347-49e75f499945.png)

참고로 뒤에 상단 꾸미기 내용이 더 있는데 이 링크를 기준으로 해서 이걸 바꾸는 형식으로 설명을 할껍니다.

## - 상단꾸미기 type

먼저 background type를 바꿔보겠습니다. 배경은 총 10가지의 type이 있습니다.  
기본은 wave이고 10번째 transparent까지 있습니다.

1. wave : default
2. egg
3. shark
4. slice
5. rect
6. soft
7. rounded
8. cylinder
9. waving
10. transparent

백그라운드를 바꾸고 싶으면 type 부분을 바꾸면 됩니다. type = 원하는 타입을 쓰시면 됩니다.

```
![header](https://capsule-render.vercel.app/api?type=rect&color=auto&height=300&section=header&text=GDSC&fontSize=90)
```

몇 가지의 type을 해봤습니다. egg을 하고 싶으면 type = egg로 하시면 되고 slice, cylinder, waving, shark, rect도 똑같이 하면 됩니다.

![image](https://user-images.githubusercontent.com/66999675/134762476-df9abf57-cdaa-4921-9fd2-04026bbaf1dc.png)

## - 상단꾸미기 Backgroundcolor

![image](https://user-images.githubusercontent.com/66999675/134762502-912387bd-c4aa-49a5-8d9b-ef2d8500ee62.png)

배경색깔입니다. 총 6가지를 할 수 있습니다. auto, timeauto, random, gradient timeGradient, hexcode가 있습니다.  
hexcode를 제외한 나머지 5가지는 다 random으로 색깔이 배정이 됩니다. 즉 깃허브 들어올 때마다 색깔이 바뀌게 됩니다.  
또한 배경색깔에 맞춰서 글자색깔도 똑같이 바뀝니다. 배경색깔은 color = 부분에 원하는 백그라운드를 넣으면 됩니다.

```
![header](https://capsule-render.vercel.app/api?type=rect&color=gradient&height=300&section=header&text=seong%20ryool&fontSize=90)
```

![header](https://capsule-render.vercel.app/api?type=rect&color=gradient&height=300&section=header&text=GDSC&fontSize=90)

위는 gradient입니다. 전 갠적으로 gradient가 이뻐서 이걸로 사용합니다.

## - 상단 꾸미기 Text

이번에 Text입니다. 상단에 보여질 글자를 의미합니다. 바로 아래의 위성률 짱짱맨처럼요.  
text에는 몇 가지 규칙이 있는데 스페셜 캐릭터('#','&','/')를 사용할 수 없고 space도 안됩니다.  
space를 해주고 싶으면 %20을 하면 space 한 번 한 것과 똑같은 효과를 얻을 수 있습니다. text는 text 부분을 바꾸시면 됩니다.

![header](https://capsule-render.vercel.app/api?type=rect&color=gradient&height=300&section=header&text=위성률%20짱짱맨&fontSize=90)

## - 상단 꾸미기 Text animation

text에도 애니메이션을 넣을 수 있습니다. 애니메이션에는 5가지 애니메이션을 넣을 수 있습니다.  
애니메이션은 따로 링크에 추가를 해주셔야됩니다. &animation = 원하는 애니메이션을 넣어주면 됩니다.  
애니메이션의 종류는 아래와 같습니다.

---

1. fadein : fadein 1.2s
2. scalein : scaleIn 0.8s
3. blink : blink 0.6s
4. blinking : 1.6s
5. twinkling : twinkling 4s

---

- twinkling  
  https://user-images.githubusercontent.com/66999675/134764988-09f4fdf0-7ec8-4e51-845e-bd6a876264b5.mp4
  ![header](https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=twinkling&fontSize=90&animation=twinkling)
- blink  
  https://user-images.githubusercontent.com/66999675/134764963-5ef0b8af-7c3a-4797-8922-0cf82612242d.mp4
  ![header](https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=blink&fontSize=90&animation=blink)

- fadein  
  https://user-images.githubusercontent.com/66999675/134764964-3684deba-8a14-4f13-b65e-d33e6d3c8784.mp4
  ![header](https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=fadein&fontSize=90&animation=fadein)

3가지 종류의 애니메이션을 찍어보았습니다. 참고하시면 됩니다.

# 이모티콘

이번엔 이모티콘에 대해서 알아보겠습니다. readme를 꾸밀 때 이모티콘도 많이 사용합니다. 저는 주로 [이모지 사이트](https://www.webfx.com/tools/emoji-cheat-sheet/)에서 이모티콘을 가져옵니다.
![image](https://user-images.githubusercontent.com/66999675/134794289-93388030-9cf0-48b9-8f49-f0d4a297a89b.png)
사이트에 들어가시면 위와 같은 화면이 뜹니다. 마음에 드는 이모티콘을 클릭하면 복사가 됩니다. edit file에 가서 붙여넣기 하면 이모티콘이 생성됩니다.

![image](https://user-images.githubusercontent.com/66999675/134794356-69e92e4e-7ba5-45d6-aa61-3d50fca624d3.png)

이모티콘은 edit 파일에서도 직접 사용 가능합니다. 먼저 ':'을 해주고 사용하고 싶은 이모티콘을 적으면 관련된 이모티콘들이 나오게 됩니다.  
여기서 원하는 걸로 사용하면 됩니다.

# 방문자 수 표시

Github 방문자 수 표시입니다. [링크](https://hits.seeyoufarm.com/)를 타고 들어가면 만들 수 있습니다. 방문자 수 표시는 하루 동안의 방문자 수가 얼마이고 지금까지의 총 방문자 수를 알려줍니다.(참고로 방문자 수 표시를 만들고 난 뒤의 today와 total만 알 수 있습니다.)

![image](https://user-images.githubusercontent.com/66999675/134794413-9ba8c9d9-b8ca-4cf7-a24a-440dcc9fc699.png)

사이트에 들어가게 되면 위와 같이 뜨게 됩니다. TAGET URL에 자신의 Github 주소를 입력하면 됩니다.  
OPTIONS에는 먼저 BORDER가 있는데 FLAT, ROUND를 설정할 수 있습니다. FLAT은 직사각형처럼 뾰족한 사각형이 되고 ROUND는 둥근 모양이 됩니다.TITLE은 hit이라고 써져 있는 부분의 글씨를 바꿀 수 있습니다.  
TITLE BG COLOR는 hit 써져 있는 부분의 색깔을 바꿀 수 있습니다.  
COUNT BG COLOR는 today/total 부분의 색깔을 바꿀 수 있습니다.

![image](https://user-images.githubusercontent.com/66999675/134794519-11f72f0a-24e2-4efb-aa95-b7fa90a35294.png)

작성을 완료한 뒤 스크롤을 내리면 위의 사진처럼 3가지가 뜹니다.  
여기서 MARKDOWN에 있는 COPY를 누르고 Edit File에 붙여넣기 하면 됩니다.

# 뱃지

이번엔 뱃지입니다. 각종 언어, 프레임워크, 라이브러리, 사이트 등에 대한 뱃지가 있습니다.이걸 사용하는 이유는 readme에 단순히 c++, python, java 이렇게 적는 것보다 뱃지를 사용해서 작성하는게 더 이쁘고 보기 좋기 때문입니다.
![image](https://user-images.githubusercontent.com/66999675/134794565-2c77eaf3-91d6-4d12-a35d-dc7a7c43098b.png)

사용 방법은 [링크](https://github.com/Ileriayo/markdown-badges)로 들어가게 되면 위의 사진처럼 뜨게 됩니다.  
여기서 자신이 사용하고 싶은 뱃지의 Markdown을 복사해서 Edit File에 붙여넣기 하면 됩니다.

![image](https://user-images.githubusercontent.com/66999675/134794595-16bf7410-4bc3-4760-a642-d345569126cd.png)

붙여넣기를 하고 깔끔하게 꾸미면 위와 같이 나오게 됩니다. 저는 Github에 제가 어떤 기술 스택이 있는지 보여주기 위해서 뱃지를 사용했습니다.

# Stats

Stats입니다. stats에 대한 자세한 내용은 [링크](https://github.com/anuraghazra/github-readme-stats/blob/master/docs/readme_kr.md)로 들어가면 알 수 있습니다.

![image](https://user-images.githubusercontent.com/66999675/134794623-a084dcb3-ebd9-431f-8aeb-482f20d7b68c.png)

stats는 자신의 Github에 대한 통계를 알려줍니다. commit, contribution, issues, star, pull request, 팔로워 수, 보유 중인 저장소 등의 항목에 대해서 계산 해줍니다. 또한 자신이 Github에서 상위 몇 프로인지 S++(상위 1%), S(상위 25%), A++(상위 45%), A+(상위 60%), B+(전체)로 알려줍니다.

stats는 아래의 링크를 복사한 다음 username = **tjdfbf1**에서 tjdfbf1 부분을 자신의 github 아이디로 바꾸면 됩니다.

```
[![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=tjdfbf1)](https://github.com/anuraghazra/github-readme-stats)
```

## - Stats theme

stats는 테마를 바꿀 수 있습니다. 위에 있는 링크에서 &theme = 을 추가해주고 마음에 드는 테마 이름을 쓰면 됩니다.  
모든 테마를 보고 싶으면 [링크](https://github.com/anuraghazra/github-readme-stats/blob/master/themes/README.md)를 들어가서 확인하면 됩니다.

- radical

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=tjdfbf1&show_icons=true&theme=radical)

radical의 코드는 아래와 같습니다. 나머지 테마들도 theme 부분만 바꾸면 되기에 radical만 적겠습니다.

```
![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=tjdfbf1&show_icons=true&theme=radical)
```

- dark

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=tjdfbf1&show_icons=true&theme=dark)

- merko

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=tjdfbf1&show_icons=true&theme=merko)

- gruvbox

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=tjdfbf1&show_icons=true&theme=gruvbox)

- tokyonight

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=tjdfbf1&show_icons=true&theme=tokyonight)

- onedark

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=tjdfbf1&show_icons=true&theme=onedark)

- cobalt

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=tjdfbf1&show_icons=true&theme=cobalt)

- synthwave

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=tjdfbf1&show_icons=true&theme=synthwave)

- highcontrast

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=tjdfbf1&show_icons=true&theme=highcontrast)

- dracula

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=tjdfbf1&show_icons=true&theme=dracula)

- solarized-light

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=tjdfbf1&show_icons=true&theme=solarized-light)

- buefy

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=tjdfbf1&show_icons=true&theme=buefy)

- bg-color 이용  
  theme말고 bg-color를 이용해서 자신이 직접 색깔을 지정해줄 수도 있습니다.

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=tjdfbf1&show_icons=true&bg_color=30,e96443,904e95)

# 백준 카드

마지막으로 백준 카드 입니다. 자신의 백준 푼 문제 수, 레이팅 점수, class, 티어를 보여주는 뱃지 입니다.  
백준 카드에 대한 자세한 내용은 [링크](https://github.com/mazassumnida/mazassumnida)에 들어가서 보시면 됩니다.

일단 사용법은 아래의 링크를 복사해서 {fbfbf1} 부분에 자신의 **백준** 아이디를 넣어주시면 됩니다.  
Github 아이디가 아니라 **백준** 아이디입니다!

```
[![Solved.ac
프로필](http://mazassumnida.wtf/api/v2/generate_badge?boj={fbfbf1})](https://solved.ac/{fbfbf1})
```

![image](https://user-images.githubusercontent.com/66999675/134794801-0e36e1db-3d68-4052-9ae9-a8102b80c326.png)

아이디를 입력해주고 Edit File에 붙여넣기 해주면 위와 같이 뜨게 됩니다.

# etc

![image](https://user-images.githubusercontent.com/66999675/135015290-26fab34c-8872-45e3-b314-958f1bdd602f.png)

위에서 설명드린 것 말고도 github를 꾸밀 수 있는 방법은 굉장히 많이 있습니다. 레포지토리 카드도 꾸밀 수 있고 Most Used Languages도 꾸밀 수 있습니다. 자세한 내용은 [링크](https://github.com/anuraghazra/github-readme-stats/blob/master/docs/readme_kr.md#%EC%BB%A4%EC%8A%A4%ED%84%B0%EB%A7%88%EC%9D%B4%EC%A7%95)를 참고하시면 됩니다.

# 마무리

이번 세미나에서는 Github 꾸미기에 대해서 알아보았습니다.  
오늘 배운 걸 이용해서 꼭 자신의 Github를 멋있게 꾸며보시길 바랍니다!
