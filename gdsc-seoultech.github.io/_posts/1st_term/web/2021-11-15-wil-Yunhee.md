---
layout: post
title: WIL 6주차 - express
date: 2021-11-15 01:00:00
author: ehrwk
description:
categories: ["1st_term"]
tags: ["web"]
---
201116 backend 과제를 진행하면서 배운것 정리

관심사 분리 원칙을 적용하기 위해 비지니스 로직을 node.js의 API Routes와 분리합니다.

service로직에 쿼리문을 작성하고, route에 서버상태와 동작을 지정하면서 코드의 생산성을 높입니다.

데이터베이스는 ORM을 이용했습니다. orm은 객체로 연결을 해준다라는 의미로서 어플리케이션과 데이터베이스 연결시 SQL 연어가 아닌 어플리케이션 개발언어로 데이터베이스에 접근할 수 있는 툴이라고 합니다.  // 저는 아직 이해를 잘 못했습니다.

어플리케이션에 접근하는 방법은 Sequlize를 이용했습니다.

1. sequlize 문법 사용

앞에서 언급했다싶이 ORM은 sql언어가 아니라 개발 언어로 접근해야 하기 때문에 데이터 베이스스 동작시
> SELECT * FROM boards WHERE board_category_id <= 6 

방법이 아니라
>return await User.update({
        "nickname" : nickName,
        where: {
            id: userId,
        },
    });

sequlize의 문법에 맞게 작성을 해주어야 합니다.

* SELECT
> findOne: 하나만 조회하는 함수  
findAll: 여러개를 조회하는 함수

* UPDATE
> update: 값을 update해주는 함수  
upsert: : 한 레코드만 insert하거나 업데이트 해주는 함수

* DELETE
> destory: 한개나 여러 레코드를 삭제하는 함수  
