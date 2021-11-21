---
layout: post
title: WIL 3주차 - 파도파도 새로운 웹..
date: 2021-10-11 01:00:00
author: InHyeok-J
description:
categories: ["web"]
---

# GDSC 웹 3주차 기록

> 3주차 스터디와 과제를 진행하고 작성한 글입니다.

> 소스코드는 <a href="https://github.com/InHyeok-J/GDSCTimeFront" target="_blank" rel="noopener">링크</a> 에 가면 자세히 보실 수 있습니다.

## css 미적용 문제

<img width="408" alt="스크린샷 2021-10-09 오후 8 13 13" src="https://user-images.githubusercontent.com/28949213/136655749-2acdedc3-60de-46a2-9617-e29e018218f0.png">

위의 사진 처럼 왼쪽 그림으로 아무리 하고 싶어도, 크롬 개발자 도구에는 내가 설정한 css가 보였지만 적용이 안되는 이슈가 있었다.

```javascript
    input[type='checkbox'] {
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 100%;
        border: 1px solid ${COLORS.grey_400};
        cursor: pointer;
    }

    input[type='checkbox']:checked {
        width: 12px;
        height: 12px;
        background: url(${checkedImg});
        background-size: contain;
        border: none;
    }
```

문제의 코드, input 태그의 type이 `checkbox` 인 친구들을 스타일링 해주는 코드이다. 해결 방식은 아래의 코드를 추가했다.

```
-moz-appearance:none; /* Firefox 만 제거 */
-webkit-appearance:none; /* Safari and Chrome 만 제거 */
appearance:none; // 다죽여
```

appearance란 브라우저에서 기본으로 적용된 스타일 속성을 제어할 수 있습니다.
input 태그에 기본으로 설정된 css 스타일을 none 하니 제가 새로 추가한 속성이 적용됐습니다

## 로컬 스토리지 관련 정리

![스크린샷 2021-10-12 오후 12 55 02](https://user-images.githubusercontent.com/28949213/136888695-1243cbab-0a1b-482a-917a-502f3b407cf3.png)

게시판의 메인 페이지를 보면 이렇게 즐겨찾기 게시판에 대한 정보를 셋팅해야 합니다.  
백엔드에서 셋팅관련한 정보를 저장시킬 수 있지만, 이번 프로젝트에서는 프론트에서 관련 정보를 로컬 스토리지에 저장합니다.

### 로컬 스토리지?

로컬 스토리지는 HTML5에 추가된, 키-벨류 형태의 값을 저장할 수 있는 저장소입니다.  
로컬 스토리지 외에도 세션 스토리지가 있는데 둘의 차이는 데이터의 영구성인데, 로컬 스토리지는 사용자가 지우지 않는 한 브라우저에 남아 있고 세션 스토리지는 탭을 닫을 경우 제거됩니다.  
이 둘은 `window` 객체 안에 들어 있습니다.

### 사용방법

```javascript
const initialState = {
    isFree: false,
    isSecret: false,
    isGradute: false,
    isFreshMan: false,
    isNews: false,
    isInfo: false,
};
const SliderBoard = () => {
    const [boardSetting, setBoadrSetting] = useState(initialState);

    useEffect(() => {
        const storage = window.localStorage.getItem('boardSetting');
        if (storage === null) {
            window.localStorage.setItem(
                'boardSetting',
                JSON.stringify(initialState),
            );
        }
        setBoadrSetting(JSON.parse(storage));
    }, []);

    const onPinToggle = (e) => {
        setBoadrSetting({
            ...boardSetting,
            [e.target.name]: !boardSetting[e.target.name],
        });

        window.localStorage.setItem(
            'boardSetting',
            JSON.stringify({
                ...boardSetting,
                [e.target.name]: !boardSetting[e.target.name],
            }),
        );
    };

    if (!boardSetting) return null;
```

- 사용 방법 은 EASY합니다.
  `window.localStorage.getItem('키 네임')` 으로 가져올 수 있고, `window.localStorage.settItem('키 네임','value')` 로 저장시킬 수 있습니다.

헷갈렸던 부분이 비동기로 동작하는가였는데 동기적으로 동작한다고 합니다.

위의 코드 로직은 `useEffect()` 로 page들어왔을때 `boardSetting` 이라는 key로 저장된 로컬 스토리지의 값을 찾고 없으면 초기 값으로 셋팅, 있으면 상태 관리하는 useState의 값으로 저장합니다.

여기서 우리가 저장하는 상태 값은 객체기 때문에 그냥 저장하면 `toString` 메소드가 호출된 형태로 저장된다고 합니다. 그래서 [obejct Object(생성자)] 형으로 저장되는거죠..  
객체를 저장하는 방식은 키-값 형태로 여러개를 저장하거나 혹은 `JSON.stringify`를 해서 객체 형식 그대로 문자열로 바꿔서 저장하는 방식입니다. (값을 받을 때는 `JSON.parse`)

## position fixed width문제

이번 과제때 유독 fixed를 사용하는 컴포넌트가 많았습니다.
예를들면 이친구
<img src="https://user-images.githubusercontent.com/28949213/136890299-5aa377aa-4ae2-4c6b-9a4f-93dd189ad77b.png" width="500px">

`position:fixed`는 요소를 문서의 순서 및 흐름이 아닌 뷰포트에 설정된 위치에 강제 위치시킵니다.  
처음에는 그냥 `width:100%` 를 두니 페이지의 뷰를 기준으로 하는지 컨테이너를 넘어 엄청 길어졌습니다.
원래 width 100%를 하면 부모 컴포넌트의 가로 넓이를 기준으로 퍼센트를 가져오는데 fixed는 안먹는 현상이 발생해서 구글링을 통해 fixed를 한번 wrap 하는 부모 컨테이너를 두고, fixed의 width랑 max-wdith을 inherit 속성을, 부모 컨테이너는 width를 지정하고 `margin: 0 auto;` 로 가운데 정렬을 통해 해결했습니다.

- 아주 이거때문에 시간많이잡아먹었네요 ..

## 이미지 업로드 잡기술(?)

이미지 업로드를 하는데 input태그를 직접 누르는게 아닌 다른 컴포넌트를 눌러 이미지 업로드를 시켜야 했습니다.
<img src="https://user-images.githubusercontent.com/28949213/136890841-25644b0c-ec54-4deb-8d4c-b9fecf5d256c.png" alt="이미지" width="500px"/>

이미지를 업로드 하는 방법은 `input` 태그의 `type="file"` 을 하면 됩니다.
<img src="https://user-images.githubusercontent.com/28949213/136890969-b35f912e-df24-4770-b786-877a4c0241da.png" alt="업로드">  
그냥 태그를 작성하면 위의 형식처럼 되고 파일 선택을 누르면 파일선택 창이 뜨게 됩니다.

저렇게 다른 컴포넌트(우리 프로젝트에서는 카메라 사진) 을 이미지 업로드 하는 방식은 다른 방법을 써야 합니다.

```javascript
    const imageInput = useRef();

    const onImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    <img src={cameraImg} alt="camera" onClick={onImageUpload} />
        <input
            type="file"
            name="image"
            multiple
            hidden
            ref={imageInput}
        />
```

`useRef` 라는 hook을 사용합니다. 이 hook은 DOM의 특정 컴포넌트를 선택할 수 있습니다.
실제 input태그는 hidden으로 숨기고, 카메라 이미지를 클릭 했을때 useRef로 선택한 컴포넌트를 동작시키면 됩니다.

## 그외..?

과제에서 X버튼이나 <- 뒤로가기 버튼을 누를때 이전에는 `Link` 태그를 사용해 특정 url로 이동시켰는데  
`onClick={() => history.goBack()}` history의 goBack이라는 친구가 이전 페이지로 이동시켜주는 기능이래서 써봤는데 좋은것 같네요 ~
