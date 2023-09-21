---
layout: post
title: 열다섯 번째 세션 - 묻고, 정규로 가! 🎴
date: 2022-01-18
author: seongryool
categories: ["1st_term"]
tags: ["seminar"]
---

안녕하세요 15번째 세션 "묻고, 정규로 가!"를 하게 된 코어 위성률입니다!  
이번 세션에서는 정규표현식을 간단하게 알아보려고 합니다.

# 정규표현식 이란?

정규표현식은 문자열에 나타나는 특정 문자 조합과 대응시키기 위해 사용되는 패턴입니다.  
1951년 랜드 연구소에 연구소 내부용 논문 ‘Representation of Events in Nerve Nets and Finite Automata’ 정규 표현식을 제안합니다.

정규표현식은 단순하고 쉽습니다.  
또한 강력합니다. 정규표현식을 사용해서 해결할 수 있는 문제가 많고, 대부분의 프로그래밍 언어가 라이브러리나 내장 기능으로 정규표현식을 지원합니다

그럼 정규표현식을 왜 써야되는 지 간단한 예시를 보여드리겠습니다

![](https://images.velog.io/images/ryool/post/3a59a605-ac3f-4b8e-acdc-87d1f153874a/image.png)  
위의 사진의 텍스트에 포함된 모든 주민등록번호의 뒷자리를 \* 문자로 변경한다고 해봅시다.  
만일 정규표현식을 사용하지 않고 python을 이용해서만 한다면 아래의 사진처럼 코드를 짜야됩니다.
![](https://images.velog.io/images/ryool/post/82d37bd3-4202-4381-af44-1f7517047057/image.png)
문자열이 강한 파이썬으로 구현을 해도 8줄이나 나오게 됩니다. 너무 귀찮죠..?

하지만 정규표현식을 사용하면 import 문을 제외한 단 2줄로 구현을 할 수 있습니다.
![](https://images.velog.io/images/ryool/post/fe4e8891-b711-4006-9323-ed4190986da6/image.png)  
어우, 너무 좋죠?~!

# re 모듈

정규 표현식 메타 문자를 설명하기 전에 re 모듈에 대해서 설명 드리겠습니다.

Python은 정규 표현식 지원을 위해 re(regular expression) 모듈을 제공합니다.
![](https://images.velog.io/images/ryool/post/1cda8ad8-358c-49d9-8c60-43b1f81ba6ec/image.png)  
위의 사진과 같이 re.compile에 정규 표현식을 넣고 컴파일 한 다음에 re.compile의 결과로 돌려주는 객체를 사용해서 작업을 수행합니다.

re 모듈에는 여러 개의 메서드가 있지만 4개만 알아보도록 하겠습니다!

### match

![](https://images.velog.io/images/ryool/post/607b818b-db05-400a-9f04-9d3c31792b2e/image.png)  
먼저 match입니다! match는 문자열의 처음부터 정규식과 매치되는지 조사합니다.
문자열이 정규식과 매치 되면 match 객체를 리턴하고, 되지 않으면 None을 리턴합니다.
먼저 정규 표현식을 위와 같이 작성합니다. 일단 이 의미는 소문자 알파벳 1개 이상이 나와야된다는 의미입니다. 이건 뒤에서 메타문자 설명할 때 다시 설명 드리겠습니다.

compile에 정규식을 넣고 문자열들과 match 해보겠습니다. gdsc는 소문자로만 이뤄져있기에 만족을 해서 gdsc match 객체를 리턴해줍니다. gd2sc는 중간에 2가 있기에 2전까지 만족하는 소문자 알파벳 match 객체를 리턴해줍니다. 21 gdsc는 시작하자마자 숫자가 나오기에 조건을 만족하지 않아서 none 객체를 리턴해줍니다.

### search

![](https://images.velog.io/images/ryool/post/f5b5cc93-87d2-4b83-92da-711f9f3a9e49/image.png)  
search는 문자열 전체를 검색해 정규식과 매치되는지 조사합니다. 문자열이 정규식과 매치 되면 match 객체를 리턴 , 아니면 None을 리턴합니다. 정규표현식은 똑같이 가져 갑니다.
먼저 lead로 match를 해보면 조건을 만족하기에 lead match 객체를 리턴합니다. le2ad는 똑같이 중간에 숫자가 있기에 le match 객체만 리턴해줍니다.
이제 세 번째가 match와 다른 부분인데 19 lead라고 쓰면 전체를 검색하기에 lead가 조건을 만족해서 lead match를 리턴해줍니다. 마지막은 숫자로만 이루어져있기에 none 객체를 리턴해줍니다.

### sub

![](https://images.velog.io/images/ryool/post/f936c688-92b1-477d-8f08-3ac37f933360/image.png)  
sub 메서드를 사용하면 정규식과 매치되는 부분을 다른 문자로 바꿀 수 있습니다.
정규표현식을 cat 또는 dog 또는 rabbit으로 설정해줍니다.
sub 메서드의 첫 번째 매개변수는 바꿀 문자열이고 두 번째 매개변수는 대상 문자열이 됩니다. 위의 예에서 CAT DOG RABBIT이 만족을 하기에 ryool ryool and ryool are cute로 바뀌는걸 볼 수 있습니다. 바꿀 문자열의 개수를 count를 통해서 바꿀 수 있습니다. 위와 같이 count = 1로 하게 되면 앞에서 한 개만 바꿀 수 있습니다. 그래서 ryool dog and rabbit are cute로 바뀌게 됩니다.

### findall

![](https://images.velog.io/images/ryool/post/9e0d943b-3eb4-4897-8ca7-b075e62c058a/image.png)  
findall은 정규식과 매치되는 모든 문자열을 리턴해줍니다.
소문자 한 개 이상으로 정규식을 작성하고 please give me some money를 findall 하게 되면 please give me some money가 나오게 됩니다.

### 축약

![](https://images.velog.io/images/ryool/post/703ace33-e88c-4750-9a39-8449c7329729/image.png)  
지금까지는 compile을 하고 메서드를 작성했는데 한 번에 작성할 수 있습니다.
바로 메서드를 쓰고 첫 번째에 정규표현식을 넣고 두 번째에 문자열을 넣으면 됩니다.
하지만 pattern 객체를 여러 번 사용할 때는 re.compile을 주로 사용합니다.

# 메타 문자

이제 정규표현식의 꽃 메타 문자를 알아보도록 하겠습니다.
먼저 메타 문자란 원래 그 문자가 가진 뜻이 아닌 특별한 용도로 사용되는 문자입니다.
즉, 정규표현식에서 특별한 의미를 지닌 문자입니다.

### 문자 클래스 []

![](https://images.velog.io/images/ryool/post/bbba63c4-7fda-4267-bc5e-67625d88228d/image.png)

먼저 문자 클래스 대괄호입니다. 대괄호로 만들어진 정규식은 대괄호 사이의 문자들과 매치된다는 의미입니다. 대괄호 사이에는 어떤 문자도 들어갈 수 있습니다.
자 [money]라는 정규표현식을 작성하면 m o n e y중 한 개 이상의 문자와 매치 된다는 의미입니다. 예시를 들면 “m”은 정규식과 일치하는 문자열이 ‘m’이 있기에 매치가 되고 mask도 m이 있기에 매치가 됩니다. 하지만 gdsc는 5개의 문자 중 어느 하나도 포함하지 않기에 매치가 되지 않습니다.

### -

![](https://images.velog.io/images/ryool/post/6c00adea-6bda-4f5a-961d-c05b59479dca/image.png)  
하이픈입니다. 대괄호안의 문자 사이에 하이픈을 사용하면 범위를 의미합니다.
[a-c] 로 쓰게 되면 abc이고 [0-4]로 쓰게 되면 01234입니다.
[a-zA-Z] 소문자 a부터 z를 쓰면 모든 소문자를 의미하고 대문자 a부터 z를 쓰게 되면 모든 대문자 알파벳을 의미하기에 결국 모든 알파벳을 의미합니다.
[0-9]로 쓰게 되면 모든 숫자를 의미합니다.

### ^

![](https://images.velog.io/images/ryool/post/4172777d-e320-490e-9259-0740ca3321e1/image.png)  
이걸 캐럿이라고 하는데 대괄호 안에 캐럿을 사용하면 반대의 의미를 가집니다.
앞에서 [0-9]이 숫자를 의미한다고 했는데 이 앞에 캐럿을 붙이면 숫자가 아닌 문자만 매치한다는 의미가 됩니다.

### 자주 사용하는 문법

![](https://images.velog.io/images/ryool/post/15881fc2-1379-4b80-9424-8037cfadfea2/image.png)  
정규표현식에서 자주 사용하는 문법이 있는데 이런 정규식은 별도의 표기법으로 표현할 수 있습니다.  
\d를 통해서 숫자와 매치된다는 걸 표현할 수 있습니다. 메타문자로 나타내면 [0-9]로 쓰는 것과 같습니다.  
이제 소문자 대신 대문자를 쓰게 되면 not의 의미가 되기에 숫자가 아닌 것과 매치한다는 의미입니다.  
\s는 whitespace와 매치가 됩니다. 잘보면 한 칸이 띄어져있는데 공백도 포함합니다. 탭, 줄바꿈, r,f, v는 프린트할 때 사용되는 이스케이프 문자입니다. \S는 아닌 것과 매치가 됩니다.  
\w는 문자 + 숫자와 매치가됩니다.
\W는 반대이기에 문자 + 숫자가 아닌 것과 매치가 됩니다.

### .

![](https://images.velog.io/images/ryool/post/e3a9a603-3c78-436d-9d1b-d3ff55fcb117/image.png)  
dot 메타문자는 줄바꿈 문자를 제외한 모든 문자와 매치가 됩니다. 정규 표현식 a.b로 적게되면 이 의미는 a가 나오고 그 다음에 줄바꿈을 제외한 모든 문자가 나오고 이때 한 글자만 나오고 그다음 b가 나오면 match가 된다는 의미입니다.

### [.]

![](https://images.velog.io/images/ryool/post/2df8f6a8-3c8f-4e93-ac5a-53967955f6b7/image.png)  
근데 이 점은 대괄호 쓰게 되면 문자 '.' 그대로 의미하게 됩니다.
예시를 보겠습니다.
![](https://images.velog.io/images/ryool/post/2b2fa9e0-3f34-4bb6-b3c4-9bd30af4846e/image.png)  
acb와 macth를 해주면 . 대신 c가 있기에 만족하지 않습니다.
그러나 a.b로 적게되면 .이 중간에 있기에 조건을 만족합니다.

### \*

반복을 의미하는 '\*', 스타는 바로 앞에 있는 문자가 0개 이상 반복되면 됩니다. 즉 한 개도 없어도 됩니다.  
![](https://images.velog.io/images/ryool/post/efd0690a-bdae-40a9-a367-0b699336a604/image.png)  
위과 같이 정규표현식을 작성하면 스타 앞에 있는 d가 0번 이상 나오면 됩니다. 그리고 g와 c도 있어야 만족을 해야 매치가 됩니다.  
![](https://images.velog.io/images/ryool/post/f0036ce5-f406-4def-8f76-553ad72c0f1f/image.png)  
이제 gc와 match를 해보면 d가 0번 나왔기에 조건을 만족하고
밑에도 d가 여러번 나왔기에 매치가 됩니다.

### +

+도 반복인데 반드시 + 앞에 있는 문자가 1번 이상 반복되어야합니다.
![](https://images.velog.io/images/ryool/post/cffbe550-631c-46e3-a056-58713c8e4b1f/image.png)  
정규표현식을 위과 같이 bac+k로 작성합니다.  
![](https://images.velog.io/images/ryool/post/e9891134-8140-4772-ae07-a8b870e45f01/image.png)  
![](https://images.velog.io/images/ryool/post/42a38390-f7f4-443b-a466-b8c1e6c104cc/image.png)  
그다음 bak와 매치를 해보면 c가 0번 나왔기에 매치가 되지 않습니다.  
두 번째 back는 c가 1번 나왔기에 매치가 됩니다.

### {m, n}

중괄호를 이용해서 반복 횟수를 고정할 수 있습니다.  
{m, n}을 사용하면 m이상 n이하 반복한다는 의미입니다. 또한 생략도 가능합니다.  
{4, } 4번이상 {, 5}로 쓰게 되면 5번 이하 콤마없이 숫자만 쓰게 되면 그 숫자만큼 반복해야된다는 의미입니다.  
또한 1, 는 1번 이상 반복이기에 +를 의미하고 0는 \* 의미합니다.
![](https://images.velog.io/images/ryool/post/9062fa38-cbd6-45d6-9505-7d63a1788fa9/image.png)  
예시를 보면 정규 표현식을 다음과 같이 작성을 하면 a가 3번이상 5번이하 나와야된다는 의미입니다.  
![](https://images.velog.io/images/ryool/post/e725f09b-aa6b-4a25-ac9d-aed61c2c2fb4/image.png)  
첫 번째는 a가 1번 나왔기에 match가 되지 않고  
![](https://images.velog.io/images/ryool/post/50e5502b-9721-4f37-9457-af81b4f61f9b/image.png)  
두 번째 a가 4번 나왔기에 매치가 되고  
![](https://images.velog.io/images/ryool/post/c94d7d6c-3e84-47e9-9e72-71b3d2931931/image.png)  
세 번째는 5번을 넘었기에 매치가 되지 않습니다.

### ?

![](https://images.velog.io/images/ryool/post/29df6c63-7ca4-4070-a41b-87c72c81d7cf/image.png)

?는 0번 또는 1번을 의미합니다 이건 {0,1}과 똑같은 의미입니다.  
정규표현식을 위와 같이 작성합니다. 그럼 s가 0번 또는 1번 나오면 됩니다.

![](https://images.velog.io/images/ryool/post/2770070e-a746-4d9a-a08b-7352455470aa/image.png)  
첫 번째는 s가 0번 나왔기에 만족을 하고  
![](https://images.velog.io/images/ryool/post/b6d7abf3-31e3-4543-a8c9-98835b02f038/image.png)  
두 번째는 1번이기에 매치가 되고  
![](https://images.velog.io/images/ryool/post/c37609fa-9b82-4afe-bc11-8b28c41071dd/image.png)  
세 번째는 s가 3번 나오기에 매치가 되지 않습니다.

### () 그룹핑

![](https://images.velog.io/images/ryool/post/0acdd432-177a-4211-a059-a817392fa12a/image.png)  
그룹핑입니다. 어떤 문자열이 계속 반복되는지 조사할 때는 소괄호를 이용해서 판단합니다.  
위와 같이 소괄호 안에 gdsc를 쓰고 +를 쓰게 되면 gdsc라는 문자열이 1번 이상 나와야된다는 의미입니다.
![](https://images.velog.io/images/ryool/post/bd146c2f-a832-4d67-a628-6cc3989ce460/image.png)  
이제 gdscgdscgdsc hello~라는 문자열과 매치를 시켜보면 앞에서부터 gdsc 3번이 match가 되기 때문에 match 객체를 리턴해줍니다.

그리고 그룹핑은 그룹핑 매치된 문자열 중 특정 부분의 문자열만 뽑아내기 위해서 사용합니다.

![](https://images.velog.io/images/ryool/post/2a6fb478-0684-41ed-9676-da610d4c98c8/image.png)  
일단 정규표현식을 이렇게 작성합니다. \w를 통해서 이름을 뽑아낼꺼고 \s를 통해서 whitespace를 뽑아내고 \d를 통해서 핸드폰 번호를 뽑아낼겁니다. 그리고 지금보면 빨간색 소괄호가 있고 파란색 소괄호가 있는데 첫 번째 그룹과 두 번째 그룹을 의미합니다.  
![](https://images.velog.io/images/ryool/post/142ff219-4021-4c06-9993-ee5372fd04ed/image.png)  
seongryool 핸드폰 번호를 정규표현식과 매치를 해보면 매치가 되고 이제 match된거에 첫 번째 그룹을 보고 싶다면 group(1)을 쓰고 두 번째 그룹을 보고 싶다면 group(2)를 쓰면 이렇게 위의 결과처럼 볼 수 있습니다.

### |

그 다음이 수직선은 or과 동일한 의미로 사용합니다. A|B A 또는 b입니다.  
![](https://images.velog.io/images/ryool/post/68434e12-4482-43d7-aba9-02d9b231bd02/image.png)  
hello|world로 쓰게 되면 hello 또는 world가 있으면 매치가 된다는 의미입니다.  
![](https://images.velog.io/images/ryool/post/057951dc-733a-494d-bf91-83a82850f25c/image.png)  
hellogdsc를 search를 해보면 hello가 있기에 hello match 객체를 리턴해줍니다.

### ^

다시 캐럿문자가 나옵니다.  
헷갈리시면 안되는게 대괄호안에 캐럿을 쓰면 반대의 의미지만
대괄호 없이 쓰면 문자열의 맨 처음과 일치함을 의미합니다.  
![](https://images.velog.io/images/ryool/post/cb49ca96-0469-4864-9a68-174c2f1b8aea/image.png)  
위와 같이 정규표현식을 작성합니다.  
![](https://images.velog.io/images/ryool/post/f6467700-4f8b-4409-b4a7-4f94e0c9556f/image.png)  
gdsc id wornderful을 search를 해보면 gdsc가 맨 처음에 있기에 gdsc 객체를 리턴해줍니다. 하지만 두 번째는 search이고 gdsc가 있음에도 불구하고 gdsc가 맨 처음에 있지 않기에 none 객체를 리턴합니다.

### $

달러문자는 문자열의 맨 끝과 매치하는 것입니다.  
![](https://images.velog.io/images/ryool/post/bc29d996-e0a4-41b0-a0a8-4fbcfe108276/image.png)  
정규 표현식을 gdsc$로 작성합니다.  
![](https://images.velog.io/images/ryool/post/4e36c00b-a8d0-4afc-b817-126c83bfef3d/image.png)  
그리고 life is gdsc를 search를 해주면 gdsc가 맨 뒤에 있기에 match가 됩니다.  
하지만 gdsc is life를 쓰게 되면 gdsc가 있음에도 불구하고 gdsc가 맨 앞에 있기에 매치가 되지 않아 none 객체를 리턴해줍니다.

### \b

![](https://images.velog.io/images/ryool/post/6b6e0eaf-ecbd-4223-8f2c-d2d45b876518/image.png)  
\b는 단어 구분자입니다. 단어는 whitespace에 의해 구분이됩니다.  
먼저 정규표현식을 \b머니\b로 작성합니다.  
![](https://images.velog.io/images/ryool/post/d78146e0-5dba-4f91-a699-4846cbb1b826/image.png)  
그리고 I have no money oh!를 search를 해줍니다.  
지금은 money과 공백으로 구분이 되기에 매치가 돼서 객체를 리턴해줍니다.

### \B

\b의 반대입니다. whitespace로 구분된 단어가 아닌 경우에 매치가 됩니다.  
![](https://images.velog.io/images/ryool/post/3b873f66-d737-4d86-9189-d73d06ea03d7/image.png)  
위와 같이 같이 정규식을 작성합니다.  
![](https://images.velog.io/images/ryool/post/486c1879-4cf8-4d01-9fd3-4df73763ced1/image.png)  
그리고 yesnomoneynono와 search를 해보면 money과 화이트 스페이스로 구분이 되지 않았기에 매치가 됩니다.

# 이메일

이제 지금까지 배운 걸 이용해서 간단한 이메일 유효성 검사를 해보겠습니다.  
이메일은 아이디 @ 도메인 형식이죠,  
![](https://images.velog.io/images/ryool/post/3bd92282-5a21-4d66-b4fa-1f0131978d70/image.png)  
일단 이메일 유효성 검사는 간단하게 위의 정규식을 사용해서 할 수 있습니다.  
나눠서 하나씩 설명 드리겠습니다.

![](https://images.velog.io/images/ryool/post/61e7609a-5b0b-48bd-9df6-b529ff60fbb9/image.png)
먼저 앞 부분입니다.  
이메일에서 @를 기준으로 앞의 아이드를 나타내는 것을 의미힙니다.  
또한 캐럿문자가 붙었기에 계정이 맨 앞에 오는지를 판단합니다.  
그리고 보면 아이디에 숫자, 영문자, 대쉬, 언더바, . 온다고 하면 다음과 같이 넣어주고 이것들이 한 개 이상 나와야하니 +를 적어줘서 한 번 이상 나오게 합니다.  
그리고 @자체를 넣어줘서 아이디 다음에 @가 나와야된다고 명시를 해줍니다.

![](https://images.velog.io/images/ryool/post/515e4005-b502-4e46-a285-f4308b8cff57/image.png)
그다음 뒷부분입니다. 예를 들면 naver . com 부분입니다.  
먼저 초록색부분은 naver부분입니다. 이메일을 좀 찾아보니 영어로만 있어서 영어만 나오면 되기에 알파벳을 적어주고 한 번 이상 나와야하기에 +를 적어줬습니다

그다음 보라색부분은 .을 의미합니다. 정규표현식에서 사용하는 특수문자이기에 \.를 해줘야 정상적으로 인식이됩니다.

갈색 부분은 com, co.kr 부분입니다. co.kr처럼 여러 단계 일 수도 있기에 .을 넣어줍니다.  
달러마크를 써서 최상위 도메인이 마지막에 오는지를 판단합니다.

![](https://images.velog.io/images/ryool/post/da9b85e3-4542-4fce-a0fa-b0a42901096d/image.png)
![](https://images.velog.io/images/ryool/post/a5330bd5-50ef-4714-bc52-d427a654f7c7/image.png)  
만들걸 가지고 유효성 검사를 해봅니다. 먼저 3개의 이메일은 정상적인 이메일입니다.  
그래서 match를 해보면 정상적으로 match객체가 나오게 됩니다.  
하지만 4번째는 조건을 만족하지 않는 이메일입니다. 이건 match를 하게 되면 none 객체를 리턴합니다.  
또한 이 유효성 검사를 통해서 이메일의 형식을 검사를 하는것입니다.  
이 말의 의미는 com.naver는 없는 이메일 이지만 형식자체는 맞기 때문에 객체를 리턴해줍니다.
![](https://images.velog.io/images/ryool/post/c0eaf20b-3062-487e-b805-5a64acc7f96f/image.png)

![](https://images.velog.io/images/ryool/post/773dbb87-8091-44c0-b513-e438a2a58f2a/image.png)  
실제로 html에 이메일 폼에서는 어떻게 유효성 검사를 하는 지를 가져와봤습니다.  
위과 같이 굉장히 길게 합니다.  
이것도 형식만 보기에 com.naver를 하게 되면 통과는 됩니다.

# 비밀번호

![](https://images.velog.io/images/ryool/post/853471f3-e52d-4d25-8b09-6a3097cfdaf7/image.png)
마지막으로 비밀번호 유효성검사입니다.
비밀번호는 조금 난이도가 있습니다.  
정규표현식에도 전방 탐색, 후방 탐색등등 탐색법이 여러 가지 있는데 여기서는 전방 탐색이 사용이됩니다.  
전방 탐색에서는 간단하게만 설명하겠습니다.  
일단 이 정규식은 영문 숫자 특수문자가 하나 이상 포함되어 있고 10자리 이상, 16자리 이하를 확인하는 정규식입니다.  
여기서 보면 금빛으로 이루어진 (?=.\*)가 전방탐색을 의미합니다.  
전방탐색은 일차하는 값이 아닌 인덱스를 반환합니다.

이제 이 정규 표현식을 하나씩 뜯어서 보겠습니다.

```python
(?=.*[a-zA-Z])
```

먼저 이 부분은 앞에 어떤 문자.가 몇 개 오든 알파벳이 나오면 매치가 된다는 의미입니다.

```python
(?=.*[0-9])
```

이 부분이 의미하는건 앞에랑 똑같이 앞에 어떤 문자가 몇 개 오든 숫자가 나오면 매치가 된다는 의미이다

```python
(?=.*[!@#$%^&*])
```

이것도 똑같이 앞에 뭐가 오든 이 특수기호가 나오면 매치가 된다는 의미입니다.

```python
[a-zA-Z0-9!@#$%^&*]{10,16}$
```

그리고 마지막에 위의 정규식을 써줘야 영문, 숫자, 특수문자가 한 번씩 나오고 10자리 이상 16자리 이하를 의미하는 정규 표현식이 완성이 됩니다.  
만일 이 정규식을 쓰지 않고 앞에 있는 걸로만 쓰게 되면 한글이나 공백도 다 포함을 한 10~16자리도 만족을 하게 되어서 이걸 방지하기 위해서 써주는 겁니다.

# 끝

끝났습니다.!!! 이번 세미나에서는 정규표현식에 대해서 알아보았습니다.  
알려드리고 싶은건 많았는데 시간 관계상 기본기 위주로만 알아보았습니다.  
오늘 배운걸 통해서 한 발자국 더 나아가시길 바랍니다. 감사합니다!
