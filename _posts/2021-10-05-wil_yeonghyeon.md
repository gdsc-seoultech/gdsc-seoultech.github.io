---
layout: post
title: WIL 2주차(김영현)
date: 2021-10-04 11:43:00
author: YeongHyeon-Kim
description:
categories: ["web"]
---
# WIL 2주차 리액트!

## 진행상황
* React를 이용하여 에브리타임 클론코딩
    *  메인화면 완성
        * map 함수를 이용하여 dummy 데이터 하나씩 가져오기
        * list.map((each_item, index))
        
        ```javascript
        {input_list.map((input, index) => (
            <CssWrapper parameter_name={input} />
        ))}
        ```
        
        * 추가 예정
            *  홈 화면 설정 / 메인 화면에 보여지는 board 선택하기
            *  
    <br/>
    
    * 알람-메세지 구현
        * 더미데이터를 이용하여 쪽지함, 세부 메세지 내용 구현
        * 추가 예정
            * 다양한 더미데이터를 이용하여 각자 다른 세부 메세지 내용 구현
            * /no url 구현?
           
    <br/>
    
    * Input, Button 공통 컴포넌트 구현
        * 자주 사용되는 것이기 때문에 따로 만들어서 자주 사용하기
        * Input
        
            ```javascript
            const MainInput = ({ value, type, onChange, handleFocus, placeholder }) => {
              return (
                <CustomInput
                    value={value} // useState에 사용될 value 지정
                    type={type} //타입 지정 text, password
                    onChange={onChange} //값이 변화 되었을때 useState에 사용될 함수 지정
                    onBlur={handleFocus}
                    onFocus={handleFocus}
                    placeholder={placeholder} // input 칸에 회색글씨로 보여줄 미리보기
                    spellCheck={false}
                    />
                );
            };
            ``` 
            
        * Button
        
            ```javascript
            const MainButton = ({ text, onClick }) => {
                return (
                    <CustomButton onClick={onClick} className="arrange-center-center">
                        {text}
                    </CustomButton>
                );
            };
            ```
            
    * useState
        * 코드
       
        ```javascript
            import React, { useState } from "react";
            const [id, setId] = useState("");
            const onChangeId = (e) => {
                const { value } = e.target;
                if (value.length < 4) {
                    setErrorNum(2);
                } else {
                    setErrorNum(0);
                }
                setId(value);
            };
            //Id 한글자 한글자가 입력되는 동안 입력이 조건에 맞는지 확인
            <MainInput value={id} type="text" onChange={onChangeId}
            placeholder="아이디를 입력해주세요." />
                {errorNum === 2 && (
                    <span style={{ color: "red" }}>&nbsp;&nbsp;&nbsp;&nbsp;Id는 4자 이상,
                    영어 숫자로만 작성되어야 합니다.</span>
                )}
            //만약 조건에 맞지 않다면 errorNum=2가 되고
            //<span> 태그가 보여지게 됨
        ```
    
<hr>

## 헷갈렸던 부분
* 메인 각종 홈페이지 이동 구현
    * React는 atomic design이기 때문에 모두 link로 구성해야된다고만 생각했었음    
    홈페이지 이동은 현재 페이지에서 움직이는게 아니라 **새로운 화면**이
    띄워지게 만들고 싶었기 때문에 **a tag**를 사용했어야 했음.

* 이미지 가운데 정렬
`text-align: center;`
css설정을 img 태그에 직접 넣어주는 것이 아닌 img를 감싸고 있는 div 태그에 넣어주기

* input에 default value 설정
useState("") 대신 useState("GDSC_web")을 넣어줌으로써 default값 변경

* Modal css 설정하기
항상 하던대로 맨 위에 styled.div``에 새로운 계층 추가하여 모달 css 설정을 추가 했더니 적용이 되지 않음. 새로운 css 변수로 지정해서 const ModalWrapper 로 만드니까 해결 됨.

* 한줄 띄어쓰기
꼭 margin bottom 안하고 br 태그로 해도 됨

---

## 다음주까지 목표

1. 인혁님 WIL에서 알려주신 redux 부분 공부해보기
