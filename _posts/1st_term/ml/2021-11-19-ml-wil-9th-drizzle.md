---
layout: post
title: 9주차 ML 알고리즘 체인과 파이프라인 WIL
date: 2021-11-20
author: drizzle0171
description: 마지막
categories: ["1st_term"]
tags: ["ml"]
---

팀플 뿌쎠버리고 싶다 ~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!
너무너무 싫다 ~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!
팀플 때문에 할 일도 밀렸다 ~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!

여튼 일단 하자... 일이 안 풀릴 땐 일을 하기...

그와 별개로 이번 주면 머신러닝이 끝난다! 물론 이 책 끝나고도 혼자서 복습하고 다시 공부할 거지만 1회독을 끝낸 게 어디야. 랩실 들어가면 제일 먼저 딥러닝 공부한다는데! 동아리에서도 PyTorch 쓰고 랩실에서도 PyTorch 써서 천-만-다-행.

마지막 Chapter6, 알고리즘 체인과 파이프 라인!
이번 장에서는 데이터 변환 과정과 머신러닝 모델을 쉽게 연결해주는 Pipeline 파이썬 클래스를 설알아보자.

# 1. 데이터 전처리와 매개변수 선택

- GridSearchCV를 사용하여 더 좋은 SVC 매개변수를 찾으려고 할 때, 단순한 방법은 아래와 같음
```python
from sklearn.model_selection import GridSearchCV
param_grid = {'C': [0.001, 0.01, 0.1, 1, 10, 100],
				'gamma': [0.001, 0.01, 0.1, 1, 10, 100]}
grid = GridSearchCV(SVC(), param_grid = param_grid, cv = 5)
grid.fit(X_train_scaled, y_train)
print("최상의 교차 검증 정확도: {:.2f}".format(grid.best_score_))
print("테스트 점수: {:.2f}".format(grid.score(X_test_scaled, y_test))
print("최적의 매개변수: ", grid.best_params_)
```
- 데이터의 최솟값과 최댓값을 계산할 때 학습을 위해 훈련 세트에 있는 모든 데이터를 사용하였음
- 스케일이 조정된 훈련 데이터에서 교차 검증을 위해 그리드 서치를 수행하였음
- 교차 검증의 각 분할에서 원본 훈련 세트 데이터의 어떤 부분은 훈련 폴드, 어떤 부분은 검증 폴드가 됨
- 검증 폴드는 성능 측정 시 사용하지만, 데이터 스케일을 조정할 때 검증 폴드에 들어 있는 정보까지 이미 사용

![](https://images.velog.io/images/drizzle0171/post/1dfa1d5f-1098-4f81-a235-3c44227482bc/image.png)

즉, 새로운 데이터를 만났을 때 올바로 반영하지 못한다는 단점이 있음. 검증 폴드 데이터의 정보가 모델 구축 과정에 이미 누설되었으니 교차 검증에서 최적의 매개변수를 찾지 못하고 낙관적인 결과가 만들어짐
-> **교차 검증의 분할이 모든 전처리 과정보다 앞서 이루어져야 함 **

여기서 사용하는 것이 바로 **Pipeline**

## 1. Pipeline
: 여러 처리 단계를 하나의 scikit-learn 추정기 형태로 묶어주는 파이썬 클래스

- fit, predict, score 메서드를 제공
- scikit-learn의 다른 모델들과 유사하게 작동함
- 사용하는 경우: 분류기 같은 지도 학습 모델과 전처리 단계를 연결할 때


# 2. 파이프라인 구축하기

1. 각 단계를 리스트로 전달하여 파이프라인 객체를 만들기
	- 각 단계는 추정기의 객체와 임의의 이름으로 구성된 튜플
```python
from sklearn.pipeline import Pipeline
pipe = Pipeline([('scaler', MinMaxScaler()), ('svm', SVC())])
```

2. 다른 예측 모델처럼 파이프라인에서 fit 메서드를 호출하기
```python
pipe.fit(X_train, y_train)
```

3. score 메서드로 테스트 세트로 평가하기
	- 파이프라인에서 score 메서드를 호출하면, scaler를 사용하여 테스트 데이터를 변환함
    - 변환된 데이터에 SVM 모델의 score 메서드를 호출함
```python
print("테스트 점수: {:.2f}".format(pipe.score(X_test, y_test)))
```

**파이프 라인을 사용하면 "전처리 + 분류" 과정을 위해 작성해야 할 코드가 줄어듦**

# 3. 그리드 서치에 파이프라인 적용하기

그리드 서치에 파이프라인을 사용하는 방식 역시 다른 추정기를 사용할 때와 같음. 다만, 매개변수 그리드를 만들 때와 조금 달라지는 것이 있음.
-> 각 매개변수가 파이프라인의 어떤 단계에 속한 것인지 알려줘야 함.
```python
param_grid = {'svm__C': [0.001, 0.01, 0.1, 1, 10, 100],
				'svm__gamma': [0.001, 0.01, 0.1, 1, 10, 100]}
grid = GridSearchCV(pipe, param_grid = param_grid, cv=5)
```
- 검증 폴드를 이용해 데이터 스케일을 조정하는 경우에는 심각한 문제 x
- 검증 폴드를 이용해 특성을 추출하거나 선택하는 경우에는 결과가 달라짐

# 4. 파이프라인 인터페이스
- pipeline은 특성 추출, 특성 선택, 스케일 변경, 분류(회귀, 군집도 o)의 네 단계를 포함하는 파이프라인을 만들 수 있음
- 파이프라인에 들어갈 추정기는 마지막 단계를 제외하고는 모두 transform 메서드를 가지고 있어야 함
- 예를 들어, 내부적으로는 Pipeline.fit 메서드가 실행되는 동안, 파이프라인은 각 단계에서 이전 단계의 transform의 출력을 입력으로 받아 fit과 transfrom 메서드를 차례로 호출하고 마지막에는 fit 메서드만 호출함
- 파이프라인 마지막 단계에는 최소한 fit 메서드는 있어야 함!

## 4-1. make_pipeline을 사용한 파이프라인 생성
- 앞서 설명한 방식대로 파이프라인을 만드는 게 번거로움
- 각 단계에 특별히 이름을 부여하지 않아도 될 경우가 많음
- make_pipeline 함수는 각 단계 이름에 해당 파이선 클래스 의 이름을 부여한 파이프라인을 만들어줌
```python
from sklearn.pipeline import make_pipeline
# 표준적인 방법
pipe_lone = Pipeline([('scaler', MinMaxScaler()), ('svm', SVC())])
#간소화된 방법
pipe_short = make_pipeline(MinMaxScaler(), SVC(C=100))
```
- 일반적으로 단계의 이름은 파이썬 클래스 이름의 소문자 버전

## 4-2. 단계 속성에 접근하기
- 단계 이름을 키로 가진 딕셔너리인 named_steps 속성을 사용하면 파이프라인의 각 단계에 쉽게 접근 가능
```python
#cancer 데이터셋에 앞서 만든 파이프라인을 적용함
pipe.fit(cancer.data)
#pca 단계의 두 개 주성분 추출
components = pipe.named_stepsp['pca'].components_
print('components.shape: ', components.shape)
```

## 4-3. 그리드 서치 안의 파이프라인 속성에 접근하기
- 파이프라인을 사용하는 주된 목정은 그리드 서치 때문이기에, 그리드 서치 안에 있는 파이프라인 단계에 접근할 때가 많음.
- GridSearchCV가 찾은 모델(분류, 회귀, 군집)의 최적 매개변수는 grid.best_estimator_에 저장되어 있음

# 5. 전처리 모델의 매개변수를 위한 그리드 서치
- 파이프라인을 사용하면 머신러닝 워크플로에 필요한 모든 처리 단계를 하나의 scikit-learn의 추정기로 캡술화 할 수 있음
- 회귀와 분류 같은 지도 학습의 출력을 이용해서 전처리 매개변수를 조정할 수 있음

# 6. 모델 선택을 위한 그리드 서치
- GridSearchCV와 Pipeline을 연결하는 것에서 더 나아가, 파이프라인을 구성하는 단계도 탐색 대상으로 삼을 수 있음
