---
layout: post
title: 9주차 ML 알고리즘 체인과 파이프라인 WIL
data: 2021-11-21
author: keonju2
categories: ["1st_term"]
tags: ["ml"]
---


# 알고리즘 체인과 파이프라인

머신러닝은 여러 단계의 처리 과정과 머신러닝 모델을 연결하여 사용합니다.  
따라서 데이터 변환 과정과 머신러닝을 연결해주는 Pipeline을 사용합니다.  
Pipeline과 GridSearchCV를 사용하여 각 처리 단계에서 필요한 매개변수 탐색을 동시에 수행할 수 있습니다.  

훈련 세트에 있는 모든 데이터를 사용하면 교차 검증을 위한 데이터 세트도 훈련 세트에 포함되고 그렇게 되면 새로운 데이터가 나타날 때와 완전히 다른 모습이 됩니다.  
즉, 교차 검증의 분할이 모든 전처리 과정보다 앞서 이뤄져야하기 때문에 데이터셋의 정보를 이용하는 모든 처리 과정은 데이터셋의 훈련 부분에만 적용되야합니다.  

Pipeline은 여러 처리 단계를 하나의 scikit-learn 추정기 형태로 묶어주는 형태로 fit,predict, score 메서드를 제공합니다.  


## 파이프라인 구축하기  

추정기의 객체와 임의의 이름으로 구성된 튜플로 단계를 리스트로 전달하여 파이프라인 객체를 만듭니다.  

```python
from sklearn.pipeline import Pipeline
pipe = Pipeline([("scaler", MinMaxScaler()), ("svm", SVC())])
```

scaler란 이름으로 MinMaxScaler의 객체를 만들었습니다.  
또한 svm이란 이름으로 SVC 객체를 만들었습니다.  

pipe.fit을 통해 훈련 데이터를 변환하고 변환된 모델에 SVM 모델을 훈련시키고  pipe.score을 통해 확인할 수 있습니다.  
이렇게 되면 '전처리+분류' 과정에 작성할 코드가 줄어들고 crross_val_score이나 GridSearchCV에 파이프라인을 하나의 추정기처럼 사용할 수 있습니다.  


## 그리드 서치에 파이프라인 적용하기  

매개변수 그리드를 정의하고 파이프라인으로 GridSearchCV의 객체를 만듭니다.  
이때 매개변수가 파이프라인의 어느 단계에 속한 것인지 알려줘야합니다.  
SVC의 매개변수 그리드 단계 이름과 매개변수 이름을 __로 연결지어 svm__C, svm__gamma와 같은 형태로 만듭니다.  

정보 누설은 모델의 성능 평가에 큰 영향을 미치므로 파이프라인을 통해 특성 선택을 교차 검증 반복 안으로 넣어주는 것이 중요합니다.  

```python
param_grid = {'svm__C': [0.001, 0.01, 0.1, 1, 10, 100],
              'svm__gamma': [0.001, 0.01, 0.1, 1, 10, 100]}
grid = GridSearchCV(pipe, param_grid=param_grid, cv=5)
```


## 파이프라인 인터페이스  

파이프라인은 어떤 추정기와도 연결할 수 있습니다.  
특성 추출, 특성 선택, 스케일 변경, 분류(회귀, 군집)과 같은 파이프라인을 만들 수도 있습니다.  

파이프라인에 들어가는 추정기는 마지막 단계를 제외하고 새로운 데이터 표현을 만들 수 있어야하기 때문에 transform 메서드를 가지고 있어야합니다.  
내부적으로는 fit 메서드가 실행되는 동안 각 단계에서 이전 단계의 transform의 출력을 입력으로 받아 fit과 transform 메서드를 차례로 호출합니다.  
그리고 마지막에는 fit 메서드만 호출합니다.  
하지만 마지막 단계가 반드시 predict 함수를 가질 필요는 없으므로 스케일 변환이나 PCA까지만 포함하는 파이프라인을 만들 수 있습니다.  
이런 파이프라인을 만들 경우 transform을 호출하여 적용한 결과를 반환할 수 있습니다.  
하지만 fit 메서드는 반드시 포함해야합니다.  


#### 파이프라인 생성

```python
from sklearn.pipeline import make_pipeline

pipe_long = Pipeline([("scaler", MinMaxScaler()), ("svm", SVC(C=100))])

pipe_short = make_pipeline(MinMaxScaler(), SVC(C=100))
```

pipe_short과 같은 방법을 사용하면 이름을 자동으로 만들어서 steps를 통해 단계의 이름을 확인할 수 있습니다.  
보통 파이썬 클래스 이름의 소문자 버전이며 여러 단계에서 사용하면 이름 뒤에 숫자가 붙습니다.  


#### 단계 속성 접근하기  

단계 이름을 키로 가진 딕셔너리인 named_steps 속성을 사용하면 접근할 수 있습니다.  

```python
pipe.fit(cancer.data)

components = pipe.named_steps["pca"].components_
print("components.shape:", components.shape)
```


#### 그리드 서치 안의 파이프라인 속성에 접근하기 

매개변수 튜닝은 단계 이름을 소문자로 변경한 후 '단계이름(소문자)__매개변수' (logisticregression__C) 와 같은 형식으로 하면 됩니다.  
named_steps 속성을 사용하여 단계에 접근하고 gird.best_estimator_와 같은 방법으로 최적의 모델을 찾은 매개변수를 확인할 수 있습니다.  

```python
param_grid = {'logisticregression__C': [0.01, 0.1, 1, 10, 100]}

X_train, X_test, y_train, y_test = train_test_split(
    cancer.data, cancer.target, random_state=4)
grid = GridSearchCV(pipe, param_grid, cv=5)
grid.fit(X_train, y_train)

print("최상의 모델:\n", grid.best_estimator_) # 최적 매개변수 찾기

print("로지스틱 회귀 단계:\n",
      grid.best_estimator_.named_steps["logisticregression"])  # LogisticRegression단계에 접근하여 매개변수 찾기

print("로지스틱 회귀 계수:\n",
      grid.best_estimator_.named_steps["logisticregression"].coef_) # LogisticRegression의 가중치 출력하기
```


## 전처리와 모델의 매개변수를 위한 그리드 서치

전처리 매개변수도 조정할 수 있으며 모든 처리 단계를 하나의 추정기로 캡슐화할 수 있습니다.  

```python
from sklearn.preprocessing import PolynomialFeatures
pipe = make_pipeline(
    StandardScaler(), # 스케일 조정
    PolynomialFeatures(), # 다항식 특성 선택
    Ridge()) #리지 회귀
```

각 단계의 매개변수들은 앞서 했던 것 처럼 단계__매개변수 형식으로 지정할 수 있습니다.  

```python
param_grid = {'polynomialfeatures__degree': [1, 2, 3],
              'ridge__alpha': [0.001, 0.01, 0.1, 1, 10, 100]}
```

## 모델 선택을 위한 그리드 서치

파이프라인을 구성하는 단계도 탐색의 대상으로 삼을 수 있습니다.  
반드시 모델을 만들 때 모든 알고리즘을 실행할 필요는 없기 때문에 필요할 때만 사용하면 됩니다.  
단계를 건너 뛸 때는 None을 할당하면 됩니다.  

중복 계산을 피하기 위해서는 memory 매개변수를 통해 계산 결과를 캐싱하여 오랜 시간이 걸리는 변환의 속도를 높일 수 있습니다.  
단순한 변환에서는 필요가 없습니다.  
또한 n_jobs 매개변수가 캐싱을 방해하기 때문에 계산을 중복해서 수행할 수 있습니다.  
dask-ml 라이브러리를 통해 GirdSearchCV를 사용하면 이런 단점을 모두 피할 수 있습니다.  
