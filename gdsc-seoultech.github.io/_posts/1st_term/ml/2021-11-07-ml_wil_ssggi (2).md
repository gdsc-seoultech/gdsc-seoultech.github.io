---
layout: post
title: 7주차 ML 데이터 표현과 특성공학 WIL
date: 2021-11-07
author: ssggi
categories: ["1st_term"]
tags: ["ml"]
---


* 연속형 특성 : 데이터가 2차원 실수형 배열로 각 열이 데이터 포인트를 설명 예) 픽셀 밝기, 붓꽃 측정값

* 범주형 특성 또는 이산형 특성 : 특성의 전형적인 형태. 어떤 범위가 아닌 고정된 목록 중 하나를 값으로 가지며, 정량적이 아니고 정성적 속성 예) 제품의 브랜드, 색상

특성 공학 : 특정 어플리케이션에 가장 적합한 데이터 표현을 찾는 것

# 원-핫-인코딩(가변수)
범주형 변수를 0 또는 1 값을 가진 하나 이상의 새로운 특성으로 바꾼 것. 해당하는 특성은 1, 나머지 특성은 0이 된다.

pandas로 범주형 변수를 원-핫 인코딩으로 처리하기
get_dummies : 객체 타입이나 범주형을 가진 열을 자동으로 변환해줌

범주형 변수가 숫자로 인코딩된 경우 -> 연속형 변수로 다루면 안됨
숫자 특성도 가변수로 만들고 싶다면 columns 매개변수에 인코딩하고 싶은 열을 명시해야 함

원-핫 인코딩은 OneHotEncoder 클래스에 구현되어 있다. 모든 특성을 범주형으로 가정.

```python
from sklearn.preprocessing import OneHotEncoder
ohe = OneHotEncoder(sparse=False)
```

<br>
그러나 대부분의 애플리케이션에서 일부는 범주형, 일부는 연속형 특성임

### ColumnTransformer : 입력 데이터에 있는 열마다 다른 변환을 적용할 수 있음.

```python
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler
ct = ColumnTransformer(
[(“scaling”, StandardScaler(), [‘age’, ‘hours-per-week’]),
(“onehot”, OneHotEncoder(sparse=False),
[‘workclass’, ‘education’, ‘gender’, ‘occupation’])])
```

### make_column_transformer로 간편하게 ColumnTransformer 만들기
```python
from sklearn.compose import make_column_transformer
ct = make_column_transformer(
(StandardScaler(), [‘age’, ‘hours-per-weeks’]),
(OneHotEncoder(sparse=False), [‘workclass’, ‘education’, ‘gender’, ‘occupation’]))
```

# 구간 분할, 이산화 그리고 선형 모델, 트리 모델
연속형 데이터에 아주 강력한 선형 모델을 만드는 법
### 구간 분할(이산화) : 한 특성을 여러 특성으로 나눔
구간의 경계를 정의하는 법은 다양하다
균일한 너비나 데이터의 분위로 나눌 수 있음
from sklearn.preprocessing import KbinsDiscretizer

### 구간을 지정하는 방법
1. 선형 모델 : 출력이 사용하기 전보다 더 유연해짐. 구간 분할이 모델 성능을 높이는 데 좋은 방법.
2. 결정 트리 : 사용하기 전보다 덜 유연해짐. 특성의 값을 구간으로 나누는 것이 아무런 득이 되지 않음.

# 상호작용과 다항식
원본 데이터에 상호작용과 다항식을 추가하여 특성을 풍부하게 나타낼 수 있다.
선형 모델은 절편 외에 기울기도 학습할 수 있음

-> 구간으로 분할된 데이터에 원래 특성을 다시 추가하여 모델에 기울기를 추가. 10개의 구간을 지정하여 10차원 + 원래 특성을 추가하여 1차원 = 11차원 데이터셋이 만들어진다.

결과: 기울기가 모든 구간에서 같다.

### 각 구간에서 다른 기울기를 갖도록 하기 위해서는

1. 데이터 포인트가 있는 구간과 x축 사이의 상호작용 특성을 추가할 수 있다.
이 특성이 구간 특성과 원본 특성의 곱(10차원)
hstack : 두 배열을 가로로 이어붙이는 함수

2. 원본 특성에 다항식을 추가하는 방법도 있다.
from sklearn.preprocessing import PolynomialFeatures
다항식 특성을 선형 모델과 함께 사용하면 다항 회귀 모델이 된다.

# 일변량 비선형 변환
log, exp, sin같은 수학 함수를 적용하는 방법도 특성 변환에 유용하다.
log, exp : 데이터의 스케일을 변경해 선형 모델과 신경망의 성능을 올리는 데 도움이 된다.
sin, cos : 주기적인 패턴이 들어있는 데이터를 다룰 때 편리하다.

# 특성 자동 선택
## 일변량 통계
모델 사용 x
개개의 특성과 타깃 사이에 중요한 통계적 관계가 있는지 계산, 깊게 관련되어 있다고 판단되는 특성을 선택(분류에서는 분산분석이라고도 함)
일변량, 즉 각 특성이 독립적으로 평가된다는 점이 핵심 요소.

## 모델 기반 선택
하나의 지도학습 머신러닝 모델을 사용하여 특성의 중요도를 평가, 가장 중요한 특성들만 선택.
특성 선택에 사용하는 지도 학습 모델과 학습 모델이 같을 필요x
결정 트리와 이를 기반으로 한 모델은 각 특성의 중요도가 담겨있는 feature_importances_ 속성을 제공한다.
선형 모델 계수의 절댓값도 특성의 중요도를 재는 데 사용할 수 있다.
한 번에 모든 특성을 고려. 사용된 모델이 상호작용을 잡아낼 수 있다면 상호작용 부분을 반영할 수 있다.
from sklearn.feature_selection import SelectFromModel
중요도가 지정한 임계치보다 큰 모든 특성을 선택한다.

## 반복적 선택
특성의 수가 각기 다른 일련의 모델이 만들어진다.
### 반복적 특성 선택
특성의 수가 각기 다른 일련의 모델이 만들어진다.
첫 번째 방법. 특성을 하나도 선택하지 않은 상태로 시작해서 어떤 종료 조건에 도달할 때까지 하나씩 추가하는 방법
두 번째 방법. 모든 특성을 가지고 시작해서 어떤 종료 조건이 될 때까지 특성을 하나씩 제거해가는 방법
### 재귀적 특성 제거
모든 특성으로 시작해서 모델을 만들고 특성 중요도가 가장 낮은 특성을 제거
제거한 특성을 빼고 나머지 특성으로 새로운 모델을 만듦
미리 정의한 특성 개수가 남을 때까지 반복
