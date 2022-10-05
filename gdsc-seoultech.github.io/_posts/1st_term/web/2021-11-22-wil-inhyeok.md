---
layout: post
title: WIL 7주차 (인혁)
date: 2021-11-22 00:00:00
author: InHyeok-J
description:
categories: ["1st_term"]
tags: ["web"]
---

# GDSC 웹 7주차 기록

> 7주차 스터디 이후 기록한 내용입니다.

> 소스코드는 <a href="https://github.com/InHyeok-J/GDSCTimeBack" target="_blank" rel="noopener">백엔드링크</a> <a href="https://github.com/InHyeok-J/GDSCTimeFront" target="_blank" rel="noopener">프론트링크</a> 에 가면 자세히 보실 수 있습니다.

---

이번주에는 기존에 백엔드 개발한것을 프론트랑 연동 위주로 개발을 했습니다.  
비교적 간단한 게시글 등록,게시글 리스트, 게시글 1개 조회, 댓글 조회 등등은 생략했습니다

## JPQL활용!

-   메인 페이지에서 모든 카테고리 게시글의 가장 최신글을 가져오는 API를 구현해야 했습니다.
-   Board Entity에서 ManyToOne으로 BoardCategory와 관계맵핑이 돼 있기에 BoardRepository에서 가져옵니다.
-   크게 2가지 방식이 있는 것 같습니다.

1. 전체 게시글을 가져오고 WAS에서 필터링
2. 쿼리를 통해 원하는 데이터만 가져오기.

1번 방식에서는 전체 데이터를 가져오고 스트림을 통해 원하는 데이터만 필터링하는 방식  
2번은 Jpa로는 한계가 있고 JPQL을 통해 원하는 쿼리를 짜서 가져오는 방식

어디 블로그에서 실제 처리 속도는 1번이 더 느리다고 하는데 WAS가 DB 보다는 성능이 좋아서 DB에 좀더 부하를 주는 2번 방식이 맞는지 는 잘 모르겠습니다만.. 리드님이 2번으로 했기에 ㅎㅎ;

### 백엔드

```java
    @Query("select board from Board board " +
            "where board.createdAt In(select max(board.createdAt)" +
            " from Board board group by board.category having board.category.id <= 6)")
    List<Board> findMainBoard();
```

쿼리는 다음과 같습니다. board.category로 group을 맺어주는데, having으로 조건이 카테고리 id가 6보다 작은 친구들만 그룹핑을 해줍니다.  
ORDER BY board.createdAt desc로 순서를 바꿔주려고 했는데 안먹어서.. ㅠㅠ board.createdAt이 제일 큰 친구를 가져와 보여줍니다.

### 프론트

실제 메인 페이지에서는 Board 페이지에서 셋팅 이후 localStorage에 저장시킨 셋팅 형식대로 메인 페이지에 보여줘야 합니다.

<img src="https://user-images.githubusercontent.com/28949213/142986660-004673d7-e89f-4727-89ad-a8b37fd13280.png" width="500px"/>

```javascript
{
    isFree: true;
    isFreshMan: false;
    isGradute: true;
    isInfo: true;
    isNews: false;
    isSecret: true;
}
```

음..변수명은 참 어렵네요.. 암튼 이런 형식으로 로컬 스토리지에 저장을 했습니다 isFree-> 자유게시판....etc  
자유게시판은 categoryId가 1 인데 각 게시판마다 카테고리를 매핑해주는 utils 함수를 만들어줬습니다.

```javascript
// ./src/utils/category.js
export const LocalStorageMapper = {
    isFree: 1,
    isSecret: 2,
    isGradute: 3,
    isFreshMan: 4,
    isNews: 5,
    isInfo: 6,
};
```

```javascript
// Myboard.jsx
const MyBoard = () => {
    const dispatch = useDispatch();
    const [boardSetting, SetBoardSetting] = useState(false);
    const { mainmyboard } = useSelector((state) => state.main);
    let myBoardSetting;
    useEffect(async () => {
        await dispatch(getMainMyBoardAction()); //서버에서 데이터 가져오기
    }, []);

    useEffect(async () => {
        myBoardSetting = window.localStorage.getItem('boardSetting');
        const jsonSetting = JSON.parse(myBoardSetting);
        SetBoardSetting(jsonSetting);
    }, []);
```

어제 새벽에 너무 이상하게 했네요 myBoardSetting 변수는 무시하셔도 됩니다. `useEffect` 로 페이지가 로딩 될때
로컬 스토리지에서 셋팅을 가져와서 useState에 저장시켜줬습니다.

```javascript
{
    mainmyboard.map((v) => {
        for (var key in boardSetting) {
            if (
                boardSetting[key] === true &&
                LocalStorageMapper[key] === v.board_category_id
            ) {
                return (
                    <BoardBody
                        category={v.board_category_id}
                        title={v.title}
                        key={v.id}
                    />
                );
            }
        }
    });
}
```

mainmyboard는 서버에서 가져온 데이터 값입니다.  
for in 으로 boardSetting의 값을 모두 탐색하는데 true인 친구와 아까만든 utils을 활용해서 id가 같은 친구들만 리턴해줬습니다..

<p align="center">
<img src="https://user-images.githubusercontent.com/28949213/142987671-1d183e87-2af2-40ea-a031-cbe93ec14956.png" alt="결과물" width="500px"/>
</p>
- 결과물!

### 다음주에는

-   빠르게 백엔드 만들고 연동하겠습니다..
-   다 만들면 게시글 리스트 페이지에 인피니티 스크롤링 한번 적용시켜봐야 겠네요
-   그럼 숙제 끝!
