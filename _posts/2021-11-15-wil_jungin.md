---
layout: post
title: WIL express
date: 2021-11-15 09:00:00
author: JunginO
description:
categories: ["web"]
---

# GDSC 웹 express

Express를 이용해 에브리타임 Backend를 구현하는 중입니다... <br>

### 응답

응답 오브젝트에 대한 메소드(res)는 응답을 클라이언트로 전송하고 요청-응답 주기를 종료한다.

- res.send(): 문자열로 응답한다.
- res.json(): Json 객체로 응답한다.
- res.render(): 보기 템플리트를 렌더링합니다.

### HTTP Request Method

- GET : 특정 리소스의 표시를 요청한다.오직 데이터를 받기만 한다.
- POST : 특정 리소스에 엔티티를 제출할 때 사용한다.
- PUT : 목적 리소스 모든 현재 표시를 요청 payload로 바꾼다.
- DELETE : 특정 리소스를 삭제한다.
- PATCH : 리소스의 부분 수정시 사용한다.

이러한 HTTP메소드를 이용하여 서버와 통신하는것을 RESTful이라고 하며,

> Create-POST <br>
> Retrieve-GET<br>
> Update-PUT<br>
> Delete-DELETE<br>

를 사용한다.

request객체는 api컨트롤 위한 메소드 세개를 담고있다.

1. req.body<br>
   XML,JSON,MultiForm등의 데이터를 담는다.
2. req.param<br>
   주소에 포함된 변수를 담는다 (ex:https://gdsc.com/api/post/2)
3. req.query<br>
   주소 이후에 포함된 변수를 담는다(ex:https://gdsc.com/api/post?id=1&key=web)

### Querying

Attributes<br>
일부 특성만을 select하려면 attributes 옵션을 사용한다. 중첩배열도 가능하다.

```javascript
Model.findAll({
  attributes: ["foo", ["bar", "baz"], "qux"],
});
```

```sql
SELECT foo, bar AS baz, qux FROM ...
```

집계(aggregations)는 sequelize.fn()함수를 이용한다.

```javascript
attributes: [[sequelize.fn("COUNT", sequelize.col("hats")), "no_hats"]];
// SELECT COUNT(hats) AS no_hats
```

Operator<br>

```javascript
const Op = Sequelize.Op

[Op.and]: [{a: 5}, {b: 6}] // (a = 5) AND (b = 6)
[Op.or]: [{a: 5}, {a: 6}]  // (a = 5 OR a = 6)
[Op.gt]: 6,                // > 6
[Op.gte]: 6,               // >= 6
[Op.lt]: 10,               // < 10
[Op.lte]: 10,              // <= 10
[Op.ne]: 20,               // != 20
[Op.eq]: 3,                // = 3
[Op.is]: null              // IS NULL
[Op.not]: true,            // IS NOT TRUE
[Op.between]: [6, 10],     // BETWEEN 6 AND 10
[Op.notBetween]: [11, 15], // NOT BETWEEN 11 AND 15
[Op.in]: [1, 2],           // IN [1, 2]
[Op.notIn]: [1, 2],        // NOT IN [1, 2]
[Op.like]: '%hat',         // LIKE '%hat'
```

### sequelize 메소드

몰랐는데 다 정해져 있다는 것을 알게되었다...문서를 제대로 읽자...<br>
https://sequelize.org/master/manual/model-querying-finders.html <br>
어쩔 때 사용하는지 예시가 있다.

- create a new Tutorial: create(object)<br>
- find a Tutorial by id: findByPk(id)<br>
- get all Tutorials: findAll()<br>
- update a Tutorial by id: update(data, where: { id: id })<br>
- remove a Tutorial: destroy(where: { id: id })<br>
- remove all Tutorials: destroy(where: {})<br>
- find all Tutorials by title: findAll({ where: { title: ... } })<br>
