---
layout: post
title: WIL 3주차
date: 2021-10-15 18:00:00
author: JunginO
description:
categories: ["1st_term"]
tags: ["web"]
---

# GDSC Web 3주차

React를 이용한 에브리타임 3주차!<br>

## Local Storage 활용

데이터를 추가/수정한 후에 페이지 새로고침 하거나 새로운 페이지를 열었을 때 기존의 데이터를 불러올 때에도 사용할 때에도 유용하게 사용할 수 있는 방법이다.<br>
storage에 저장된 데이터는 모두 문자열만 사용 가능하기 때문에 다른 타입의 데이터를 사용할 때에는 JSON.stringify(),JSON.parse() 형태로 읽고 써야 한다고 한다.<br>

```javascript
  const onChangeCheck = (e) => {
    if (e.target.checked) {
      const newObj = { ...setting, [e.target.name]: true };
      window.localStorage.setItem("setting", JSON.stringify(newObj));
      setSetting(newObj);
    } else {
      const newObj = { ...setting, [e.target.name]: false };
      window.localStorage.setItem("setting", JSON.stringify(newObj));
      setSetting(newObj);
    }
  };

})
```

## ...(Three dots)

- array 또는 object 의 전개연산자(spread operator)
- rest 연산자(rest operator)<br>
  rest는 객체, 배열, 그리고 함수의 파라미터에서 사용이 가능<br>
  Rest문법은 Spread와 비슷하지만 여러 인자들을 하나의 배열로 반환<br>
  rest 파라미터는 항상 마지막에 사용해야 하지만 spread operator 연산자는 중간중간 사용해도 문제가 없다는 차이점이 있다.

## useEffect

useEffect 함수는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할수 있도록 하는 Hook이다.

```javascript
useEffect(() => {});
//useEffect의 기본 형태

useEffect(() => {}, []);
//useEffect를 렌더링 후 단 한번만 실행하고 싶을때.

const [name, setName] = useState();
useEffect(() => {}, [name]);
//useEffect을 렌더링 후 한번, 그리고 배열 안 변수의 값이 바뀔때마다 실행
```

## React Slick

React Slick라는 라이브러리를 이용하여 Carousel을 만드는 법을 알게 되었다<br>
설치후 css파일을 import

```javascript
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
```

setting 을 이용해 커스터마이징 한다

```javascript
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};
```

## CSS

- 오른쪽에 X 아이콘을 고정해 두고 싶어서 float:right 를 사용했더니 div 끼리 겹쳐서 보이는 문제가 있었다. margin-left: auto;를 써서 오른쪽으로 붙일수 있었다.<br>
- text-aline:center를 쓰면 박스에는 영향이 없고 박스 내부 인라인 요소가 정렬 된다. 가로 사이즈가 지정되어있고, block요소라면 margin:auto도 많이 사용한다고 한다.이러한 상황들이 적응되지 않으면 position:absolute를 주고 left:50%로 가운데로 밀어내는 방법도 있다고 한다...
