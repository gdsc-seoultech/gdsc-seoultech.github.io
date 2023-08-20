---
layout: post
title: WIL 3주차
date: 2021-10-14 23:00:00
author: shinyubin989
description: 3주차 web WIL입니다.
categories: ["1st_term"]
tags: ["web"]
---

3주차 클론코딩을 하면서 애먹었던 부분을 위주로 작성해보겠습니다!

# TypeError

### TypeError: Cannot read property 'map' of undefined

```jsx
{
  dummyComments.map((item) => (
    <CommentItem
      key={item.id}
      nickname={item.nickname}
      comment={item.comment}
      date={item.date}
      like={item.like}
    />
  ));
}
```

이 부분은 2주차 과제를 하면서도 막혔던 부분인데, 오류 해결만 하고 바로 넘어갔더니 3주차 과제를 하면서 또 같은 오류를 만나게 됐습니다.

처음엔 코드를 위와같이 작성하였는데, React는 return에서 XXX.map(...)을 반복실행할 때, 첫 턴에 데이터가 아직 안들어와도 렌더링이 실행되며 그 데이터는 undefined로 정의되어 오류가 나게 되었습니다.

따라서 조건이 참이면 실행되게끔, 다음과 같이 &&를 사용하여 에러를 해결해주었습니다.

```jsx
{
  dummyComments &&
    dummyComments.map((item) => (
      <CommentItem
        key={item.id}
        nickname={item.nickname}
        comment={item.comment}
        date={item.date}
        like={item.like}
      />
    ));
}
```

# SyntaxError

### SyntaxError: Identifier 'dummyPost' has already been declared. (10:8)

```jsx
// let
let a = "gdsc";
let a = "gdsc1"; // -> SyntaxError: Identifier 'a' has already been declared
a = "gdsc2"; // -> 가능

// const
const b = "gdsc";
const b = "gdsc1"; // SyntaxError: Identifier 'a' has already been declared
b = "gdsc2"; // -> 불가능 (TypeError:Assignment to constant variable)
```

변수의 immutable여부에 의해 typeError의 여부가 결정됩니다.

let은 변수에 재할당이 가능하지만, const는 변수 재선언, 재할당 모두 불가능해서 위와같은 syntax에러가 발생했습니다.

# Tag Error

### 3. Error: img is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.

```jsx
<div className="like-img">
  <img src={likeImg} alt="like image">{like}</img>
</div>
<div className="comment-img">
  <img src={commentImg} alt="comment image">{comment}</img>
</div>
```

좋아요 수를 like라는 인자로 받아와 likeImg옆에 {like}와 같이 넣어주려는 계획이었는데, img태그는 children을 가질 수 없었습니다.

다음과 같이 수정해주니 정상적으로 작동하는 모습을 볼 수 있었습니다.

```jsx
<div className="like-wrapper">
  <img className="like-img" src={likeImg} alt="like image"></img>
  <span className="like-text">{like}</span>
</div>
<div className="comment-wrapper">
  <img className="comment-img" src={commentImg} alt="comment image"></img>
  <span className="comment-text">{comment}</span>
</div>
```
