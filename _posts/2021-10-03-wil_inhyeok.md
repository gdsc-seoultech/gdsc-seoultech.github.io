---
layout: post
title: WIL 2주차
date: 2021-10-03 12:00:00
author: InHyeok-J
description:
categories: ["web"]
---

# GDSC 웹 2주차 기록

> 2주차 스터디와 과제를 진행하고 작성한 글입니다.

> 소스코드는 <a href="https://github.com/InHyeok-J/GDSCTimeFront" target="_blank" rel="noopener">링크</a> 에 가면 자세히 보실 수 있습니다.

> 이번 스터디때는 수업시간에 배운 내용을 발전 및 리팩토링 하는 시간을 많이 가졌습니다.

# 공통 컴포넌트 만들기

## Input, Button 공통 컴포넌트

- 스터디 시간에 공통 컴포넌트 `components/button/MainButton`,`components/input/MainInput` 으로 커스텀 컴포넌트를 만들어 재사용을 했습니다(회원가입 로그인 페이지)

## 추가 사항

- input태그에서 엔터 키를 눌렀을때, 회원가입 및 로그인 버튼이 눌리게 하기 위해서 `MainInput` 컴포넌트 안에 `onKeyPress` 이벤트를 추가 했습니다.
- 사용 방법은 input 태그 안에 `onKeyPress` 함수를 만들어 넘겨줍니다

```javascript
    const onSignUp = () => {
          //회원가입 버튼.
    }
    const onSignUpKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSignUp();
        }
    };
    ...
    return (
        <MainInput
            ...
            onKeyPress={onSignUpKeyPress}
        />
        <MainButton text="회원가입"/>
    )
```

- 이 onKeyPress 함수는 회원가입과 로그인의 마지막 Input 태그에 적용했습니다.

# useState로 상태관리하기

- useState로 상태관리하는 방법을 스터디때 진행했습니다.

```javascript
import { useState } from 'react';
...
const Page = () => {
    const [value, setValue] = useState(초기값);
}
```

- value는 상태 값, setValue는 이 값을 변화시키는 함수입니다.

## 커스텀hook으로 반복되는 값 최소화

- **`useInput`** 이라는 커스텀 hooks을 만들어서 재사용 했습니다. 한번 사용해보세요!
- 기존의 input의 value값을 관리하는 onChange함수는 직접 만들어주어야하며 코드 수를 늘리는 범인입니다.
- `hooks/useInput.js`

```js
import { useState, useCallback } from "react";

export default (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};
```

- 리턴의 첫 번째 인자로 `value` 값을 , 두번째는 `onChange` 함수를, 세번째 인자로 혹시 사용해야 하는 `setState`함수를 리턴해줍니다.
- 사용 방법

```js
import useInput from '../../hooks/useInput';
...
const SingUpPage = () => {
    const [id, onChangeId] = useInput(null);
    const [password, , setPassword] = useInput(null);
    // password의 onChange함수는 커스텀 해주기 위해서 빈 값으로 둡니다.
    ...
    //직접 onChange를 만들어야 할 필요가 있는 password onChange함수는 직접 만들기!
    const onChangePassword = useCallback(
        (e) => {
            setPassword(e.target.value);
            setLastPasswordCheck(false);
            if (!checkPassword(e.target.value)) {
                setErrorPassword(true);
            } else {
                setErrorPassword(false);
            }

            // 이 부분은 패스워드 값을 입력해도 패스워드 확인 값이랑 같은지 검사.
            if (e.target.value === passwordCheck) {
                setErrorPasswordCheck(false);
            } else {
                setErrorPasswordCheck(true);
            }
        },
        [password, passwordCheck],
    );

    return (

        <MainInput
            value={id || ''}
            type="text"
            onChange={onChangeId} // 바로 사용
            placeholder="아이디를 입력해주세요"
        />
        <MainInput
            value={password || ''}
            type="password"
            onChange={onChangePassword} //직접 커스텀 한 onChange 함수를 넘겨줌!
            placeholder="비밀번호를 입력해주세요"
        />

```

# 정규식을 활용한 검사

- <b>패스워드 검사 (정규식 활용)</b>  
  정규식 검사를 위해 `utils` 함수를 만들어서 사용 했습니다.프로젝트 폴더를 보면 hooks랑 utils함수를 분리를 했는데 `hooks폴더`는 기존 `Hooks`를 사용하는 커스텀 파일들을 , 그 외의 유틸 함수들은 `utils폴더`에서 관리할 예정입니다.

- `utils/RegExpCheck.js`

```js
export const checkPassword = function (str) {
  const regExp =
    /^(?=.*[!@#$%^&*()_+|<>?:{}])(?=.*[a-zA-Z])(?=.*[0-9]).{5,15}/i;
  return regExp.test(str);
};
```

- 5~15자의 문자를 3가지 조건에 의해서 검사합니다. / / 리터럴 표현으로 정규식 표현을 묶고, ^ -> 입력 문자의 시작입니다.
- . -> 임의의 문자, \* -> 0번이상 반복`({0,}과 동일한 표현)` () 하나의 하위 패턴으로 묶음, ?= > 전방 탐색 일치하는 패턴을 찾고 그값을 제외하지 않고 리턴
- `[!@#$%^&*()_+|<>?:{}]` -> 특수문자 검사, 특수문자는 영어나 숫자처럼 범위로 묶을 수 없고`(소문자:a-z, 대문자:A-Z, 숫자:0-9, 한글: 가-힣)`, 직접 입력해줘야 합니다.
- `.{5,15}`수량자, 문자가 5~15개 범위로 제한,
- `/i` 플래그,-> 대소문자 구분하지 않고 검색

# Redux를 활용한 전역 상태관리

- 스터디 시간에 redux를 진행하지 않는다고 합니다. 아래 글은 아 그냥 이런 친구가 있구나 하는 심정으로 보세요~

## Redux란?

> `Redux`는 자바스크립트 앱을 위한 예측 가능한 상태 컨테이너입니다.  
> Redux는 여러분이 일관적으로 동작하고, 서로 다른 환경(서버, 클라이언트, 네이티브)에서 작동하고, 테스트하기 쉬운 앱을 작성하도록 도와줍니다. 여기에 더해서 시간여행형 디버거와 결합된 실시간 코드 수정과 같은 훌륭한 개발자 경험을 제공합니다.
> 여러분은 Redux를 React나 다른 뷰 라이브러리와 함께 사용할 수 있습니다. Redux는 매우 작지만(의존 라이브러리 포함 2kB), 사용 가능한 애드온은 매우 많습니다.

네 공식문서 글을 긁어 왔습니다.. 설명이 별로네요.
**핵심은 Redux는 상태를 관리하기 위한 좋은 라이브러리고, React 뿐만 아니라 다른 js기반 라이브러리에서도 사용하실 수 있습니다!**

## Redux를 사용해야 하는 이유

<a href="https://www.youtube.com/watch?v=3MB8DBXzEos" target="_blank" rel="noopener">링크</a>를 가서 한번 보고오세요 ~ Redux를 사용하는 이유를 간단하게 설명하는 동영상입니다.

혹시 영상을 보고 오셨는지 모르겠지만 재밌는 영상인데, 사실 그냥 보면서 웃을수는 없는 영상입니다 ㅠ  
저희는 컴포넌트안에 `useState`로 상태를 관리하고, `props`를 통해 하위 컴포넌트로 값을 전달합니다.  
근데 그 상태를 관리해야 하는 값이 하위 컴포넌트가 아닌 다른곳에 있으면 어떻게하실건가요..?  
전달해야 하는 props가 여러 컴포넌트를 통해서 전달해야 한다면 ..?

### useState를 전달하기

저희가 `useState`를 통해 상태를 만들면 그 컴포넌트는 `localState`를 갖게 됩니다. 그리고 이 상태를 다른 컴포넌트에 넘겨주기 위해서 `props`를 사용하죠. 간단한 예시를 들어 볼게요!

<p align="center">
<img src="https://user-images.githubusercontent.com/28949213/135766568-aa2283e0-b2a2-42f1-bb76-baf0dd728ba8.png" />
</p>

실제 저희가 개발했을때 이렇게 동작한다는 의미는 아닙니다.  
이렇게 `App.js`에서 데이터를 가져와서 실제 보여주는 하위 컴포넌트까지.. props로 여러번 통해서 값을 전달해야 하죠. 이렇게 개발하다 보면 어떤 props로 데이터를 가져오는지 헷갈릴 수 있고, 중간 컴포넌트에서 불필요한 리렌더링이 일어나게 됩니다.

- Redux를 사용한다면 이런 패턴입니다.
<p align="center">
<img src="https://user-images.githubusercontent.com/28949213/135766583-26a46caf-c95c-44e6-aa59-0d874155bf4b.png" />
</p>  
~~너무 극단적인 예시인것 같지만...~~    
위의 방식과 다르게 중간 Reducer이랑 Store를 거쳐서 데이터를 가져오죠? 이게 리덕스의 핵심입니다.

## Redux 기본 개념

리덕스에서 사용되는 몇가지 기본 개념이 있습니다, 한번 간단하게 알아볼게요.

### Action 액션

어떤 상태 변화가 필요할때 저희는 미리 정의되어 있는 action을 발생시킵니다. 이 action에는 액션타입action type, 미리 정의하고, action creators(액션 생성자) 를 통해 사용합니다.

```javascript
const GET_BOARD_DATA = 'GET_BOARD_DATA'
//action type 정의
...
function getBoardData () {
    return {
        type:GET_BOARD_DATA
        payload:{...}
    }
}
```

action Type은 일반적으로 문자열 상수로 정의됩니다, 이 정의된 `GET_BOARD_DATA`라는 액션 타입은
`getBoardData`라는 액션 생성자를 통해 사용됩니다.  
저 payload 부분에는 payload 가 아닌 원하는 데이터를 넣어도 됩니다! 액션 생성자 함수에는 type만 필수입니다.

### Reducer 리듀서

action이 어떤 행동을 정의한다면 리듀서는 그 행동으로 인해 어떻게 상태가 바뀌는지 정의하는 함수입니다.

```javascript
function BoardReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOARD_DATA:
      return { ...state, boarddata: action.payload };
    default:
      return state;
  }
}
```

### Store 스토어

리덕스에서는 한 애플리케이션 당 하나의 스토어를 만들게 됩니다. 스토어 안에는 현재의 앱 상태와 리듀서, 내장 함수들이 들어가 있습니다.

### dispatch 디스패치

스토어의 내장 함수 중 하나입니다. 액션을 발생시키며 `dispatch(action)`으로 구현합니다. `dispatch`를 호출 하면 스토어는 리듀서 함수를 실행시켜 해당 액션을 처리하는 로직이 있다면 액션을 참고하여 새 상태를 만든다.

### subscribe 구독

스토어의 내장 함수 중 하나입니다. `subscribe` 함수는 함수 형태의 값을 파라미터로 받아오는데 이 함수에 특정 함수를 전달해주면 액션이 디스패치 되었을 때 마다 전달해준 함수가 호출됩니다.

→ 보통 리액트에서 리덕스를 사용할때 이 함수를 직접 사용하는 경우는 거의 없고 `react-redux` 라는 라이브러리에서 제공하는 `connect` 함수 또는 `useSelector` Hook을 사용하여 리덕스 스토어의 상태에 구독합니다.

## 언제 리덕스를 쓸까?

언제 `useState`를 쓰고 언제 `redux`를 써야 하나에 대해서도 간단하게 말하자면  
빠르게 변화하는 데이터, 예를 들면 input의 상태 값, UI의 텍스트 같은 문자, 전역적으로 관리할 필요 없는 toggle 값 등 등에서는 `useState`를 사용하고  
앱 실행동안 유지 되는 유저 정보, 전역적으로 상태를 관리해야 하는 데이터 등에서는 `redux` 를 사용하면 됩니다.

## 리덕스 대체

위에서 리덕스에 관한 새로운 개념들이 많이 나왔습니다. 위에서 나온 action, action creator ,reducer, 등 다 직접 코드로 구현해야하는 작업이기에 실제 코드량도 많아지고 배워야하는 러닝커브도 있습니다.

전역적으로 상태를 관리하기 위해서는 굳이 리덕스를 쓰지 않고 react에서 제공하는 `context API` 같은 `Hooks`도 있고, 리덕스 대신 `Mobx`, `SWR` 무조건 리덕스를 써야하는건 아닙니다.  
하지만 프로젝트의 규모가 크고, 비동기 처리를 자주 해야하는 하며, 제일 중요한 리덕스를 사용해봤을때, 사용하는게 편리하다면 리덕스를 한번 해보는 것을 추천드립니다!

감사합니다~ 웹 파트 파이팅
