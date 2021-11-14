---
layout: post
title: 8주차 ML WIL
data: 2021-11-13 23:00:00 +0900
author: keonju2
categories: ["ml"]
---

# 이번주 과제

<https://www.kaggle.com/arthurtok/introduction-to-ensembling-stacking-in-python>

앙상블에 대해서 타이타닉 데이터를 가지고 캐글 필사를 진행하였습니다.  

# 모델 평가와 성능 향상  

분류에서 score 메소드를 통해 얼마나 정확히 분류된 샘플의 비율을 알 수 있습니다.  
이번 단원에서는 일반화 성능 측정 방법인 교차 검증과 score 메소드가 제공하는 정확도와 R^2값 이외에 분류와 회귀 성능을 측정하는 다른 방법 그리고 지도 학습 모델의 매개변수를 조정하는 데 유용한 그리드 서치에 관해서 학습하겠습니다.  

## 교차 검증  

교차 검증은 훈련 세트와 테스트 세트로 나누는 것보다 더 안정적인 평가 방법입니다.  
데이터를 여러번 반복해 나누고 여러 모델을 학습합니다.  
k-fold 교차검증은 k라는 fold를 지정해 거의 비슷한 크기를 가진 부분 집합 k개로 나눕니다.  
첫 번째 폴드를 테스트 세트로 사용하고 나머지 폴드를 훈련 세트로 사용하여 학습합니다.  
이렇게 k 번을 반복하여 분할마다 정확도를 측정하여 k개의 정확도를 알 수 있습니다.  

![5_1](https://user-images.githubusercontent.com/54880474/141672553-37c9e437-d525-48ae-b229-6096d75b27ca.png)


### scikit-learn 교차 검증  

model_selection 모듈의 cross_val_score 함수로 구현됩니다.  
cross_val_score 함수의 매개변수는 평가하려는 모델과 훈련 데이터, 타깃 레이블입니다.  

```python
from sklearn.model_selection import cross_val_score
from sklearn.datasets import load_iris
from sklearn.linear_model import LogisticRegression

scores = cross_val_score(logreg, iris.data, iris.target, cv=10)

```

다음과 같은 방식으로 평가할 수 있습니다.  
cv 매개변수는 fold의 개수를 지정할 수 있습니다.  
정확도를 간단하게 나타내려면 평균을 사용하면 됩니다.  
모델이 폴드에 매우 의존적이거나 데이터셋이 작으면 정확도의 차이가 커집니다.  

cross_validate는 분할마다 훈련과 테스트에 걸린 시간을 담은 딕셔너리를 반환하고 테스트 점수와 훈련 점수도 얻을 수 있습니다.  

### 교차 검증의 장단점

train_test_split은 상황에 따라 테스트 세트는 너무 쉬운 데이터만 들어갈 수 있지만 교차 검증을 사용하면 각 샘플에 정확하게 한 번씩 들어가기 때문에 한 번씩은 테스트 세트가 될 수 있습니다.  
또한 훈련 데이터에 얼마나 민감한지 알 수 있으며 train_data에 더 많은 데이터를 학습할 수 있습니다.  

하지만 모델을 k개 만들어서 학습하므로 연산 비용이 k배 늘어나게 됩니다.  

### 계층별 k-fold 교차 검증과 그 외 전략  

k-fold는 한 분할에 같은 데이터가 몰리게 된다면 분할에 따라 너무 높거나 너무 낮게 나올 수 있습니다.  

따라서 stratified k-fold를 통해 폴드 안의 클래스 비율이 전체 데이터 셋의 클래스 비율과 같도록 데이터를 나눌 수 있습니다.  

![5_2](https://user-images.githubusercontent.com/54880474/141672555-42c070a8-1757-4ed2-8538-d8fb1c536182.png)


#### 교차 검증 상세 옵션   

```python
from sklearn.model_selection import KFold
kfold = KFold(n_splits=5)

cross_val_score(logreg, iris.data, iris.target, cv=kfold)
```

앞서 cv에 fold 개수를 지정하지만 scikit-learn에서는 KFold(n_splits=n)을 통해서 fold의 개수를 지정해줍니다.  
KFold의 shuffle 매개변수를 True로 만들어 데이터를 섞어서 샘플의 순서를 바꿀 수 있습니다.  
random_state를 통해 똑같으 작업을 재현할 수 있으며 사용하지 않는다면 매번 다른 결과가 나옵니다.  


#### LOOCV (Leave-One-Out cross-validation)

폴드 하나에 샘플 하나만 들어 있는 교차 검증으로 생각할 수 있습니다.  
각 반복에서 하나의 데이터 포인트를 선택해 테스트 세트로 사용합니다.  

```python
from sklearn.model_selection import LeaveOneOut
loo = LeaveOneOut()
scores = cross_val_score(logreg, iris.data, iris.target, cv=loo)
```

#### 임의 분할 교차 검증  

train_size만큼의 포인트로 훈련 세트를 만들고 훈련 세트와 중첩되지 않은 test_Size만큼의 포인트로 테스트 세트를 만들도록 분할합니다.  
n_splits 만큼 반복됩니다.  

따라서 훈련 세트나 테스트 세트의 크기와 독립적으로 조절할 때 유용합니다.  
또한 데이터의 일부만 사용하게 되기 때문에 부분 샘플링 하게 됩니다.  
계층별 버전으로 사용한다면 StratifiedShuffleSplit을 사용하면 됩니다.  

![5_3](https://user-images.githubusercontent.com/54880474/141672556-33a24297-d01a-4114-9d87-b6e3107d7cdd.png)


```python
from sklearn.model_selection import ShuffleSplit
shuffle_split = ShuffleSplit(test_size=.5, train_size=.5, n_splits=10)
scores = cross_val_score(logreg, iris.data, iris.target, cv=shuffle_split)
```

#### 그룹별 교차 검증  

Groups를 통해 훈련 세트와 테스트 세트에서 분리되지 않아야할 그룹을 지정할 수 있습니다.  

```python
from sklearn.model_selection import GroupKFold

groups = [0, 0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 3]
scores = cross_val_score(logreg, X, y, groups=groups, cv=GroupKFold(n_splits=3))
```

![5_4](https://user-images.githubusercontent.com/54880474/141672649-7ad30c3f-8f75-431e-83d3-29f3c41e06e7.png)


### 반복 교차 검증  

RepeatedKFold, RepeatedStratifiedKFlold를 통해 반복 교차 검증을 할 수 있습니다.  
회귀에서는 RepeatedKFold, 분류에서는 RepeatedStratifiedKFold를 사용합니다.  
KFold와 StratifiedKFold를 통해 분할합니다.  
n_splits를 통해 분할 폴드 수를, n_repeats를 통해 반복 횟수를 지정합니다.  

```python 
from sklearn.model_selsection import RepeatedStratifiedKFold
rskfold=RepeatedStratifiedKFold(random_state=42)
```

# 그리드 서치  

매개변수를 튜닝하여 일반화 성능을 개선합니다.  
관심있는 매개변수를 대상으로 가능한 모든 조합을 시도해보는 것입니다.  

매개변수를 조정하기 위해 사용한 테스트 세트가 아닌 새로운 테스트 세트를 만들어 모델을 평가해야 합니다.  
따라서 처음에 훈련 세트를 통해 모델 순련, 검증 세트를 통해 매개변수 선택, 테스트 세트를 통해 모델 평가를 하는 방법을 사용합니다.  
매개변수를 선택한 후 훈련 세트와 검증 세트를 합해 모델을 다시 만듭니다.  

그리드 서치에서도 교차 검증을 이용해 각 매개변수 조합의 성능을 평가할 수 있습니다.  

best_params_를 통해 선택한 매개변수를 알 수 있습니다.  
best_score_을 통해 최상의 교차 검증 정확도를 알 수 있습니다.  
best_estimator_을 통해서 속성을 얻을 수 있습니다.  

교차 검증의 결과는 cv_results_ 속성에 담겨 있습니다.  

```python
from sklearn.model_selection import GridSearchCV
from sklearn.svm import SVC
grid_search = GridSearchCV(SVC(), param_grid, cv=5, return_train_score=True)
```

![5_5](https://user-images.githubusercontent.com/54880474/141672557-197775e3-a3ea-499a-b272-637f3a2c94b3.jpg)


중첩 교차 검증  

원본 데이터를 교차 검증 분할 방식을 사용하여 나누는 것을 중첩 교차 검증이라고 합니다.  
바깥쪽 루프에서 데이터를 훈련 세트와 테스트 세트로 나눈 뒤 각 훈련 세트에 대해 그리드 서치를 실행합니다.  
그 다음 분할된 테스트 세트의 점수를 최적 매개변수 설정을 사용해 각각 측정합니다.  
따라서 테스트 점수 목록을 만들어줍니다.  
최적 매개변수가 모델을 얼마나 잘 일반화 시키는지 확인하기 위한 방법입니다.  

그리드 서치는 n_jobs를 통해 병렬화하여 연산을 빠르게 할 수 있습니다.  


# 평가 지표와 측정  

## 이진 분류의 평가 지표  

정확도가 높은 분류가 반드시 좋은 분류라고 할 수 없습니다.  

![5_6](https://user-images.githubusercontent.com/54880474/141672558-9c7a59a1-21d1-4e48-a9a2-933be8ff6a1f.png)


어떤 경우에는 1종오류가 없어야하는 경우도 있습니다. (암 통계에서의 거짓 음성)

불균형 데이터셋  
한 클래스가 다른 것보다 훨씬 많은 데이터셋  

### 오차 행렬  

classfication_report를 통해서 여러가지 오차 행렬 결과 요약을 볼 수 있습니다.  
각 분석에 중요성에 따라 사용하는 성능 지표가 달라집니다.  

![5_7](https://user-images.githubusercontent.com/54880474/141672667-9be2a825-104a-49b8-b314-aa6a938a2aad.png)


![5-8](https://user-images.githubusercontent.com/54880474/141672559-4b99e9b0-4dff-4fe7-abc3-1dd456ab2191.png)


#### 정밀도-재현율 곡선과 ROC 곡선  

문제를 더 잘 이해하기 위해 정밀도-재현율 곡선을 사용합니다.  

```python
from sklearn.metrics import precision_recall_curve
precision, recall, thresholds = precision_recall_curve(
    y_test, svc.decision_function(X_test))
```

![5-9](https://user-images.githubusercontent.com/54880474/141672636-742e13fe-e052-4119-adc8-01fede529789.png)


곡선이 오른쪽 위로 갈수록 좋은 분류기입니다.  
오른 쪽 위 지점은 한 임계값에서 정밀도와 재현율이 모두 높은 곳입니다.  
임계값이 높을수록 정밀도는 높아지는 쪽으로 이동하고 재현율은 낮아집니다.  
f1_score은 정밀도-재현율 곡선의 기본 임계값에 대한 점수입니다.  

###### ROC 곡선

TPR과 FPR을 나타냅니다.  
TPR은 재현율을 나타냅니다.  

![5-10](https://user-images.githubusercontent.com/54880474/141672560-64787bf5-b02f-4602-8bb4-ed91017a0d53.png)


ROC 곡선은 왼쪽 위에 가까울 수록 이상적입니다.  
FPR이 낮게 유지되면서 재현율이 높은 분류기가 좋은 것입니다.  

곡선 아래 면적을 AUC라고 하며 roc_auc_score 함수로 계산합니다.  

### 다중 분류의 평가 지표  

클래스가 불균형할 때는 좋은 평가 방법이 되지 못합니다.  
다중 클래스용 f1-score이 있습니다.  
한 클래스를 양성으로 잡고 나머지 클래스는 음성으로 간주하고 f1-score을 계산합니다.  

'macro' 평균은 클래스별 f1-score에 가중치를 주지않습니다.  
'weighted' 평균은 클래스별 샘플 수로 가중치를 두어 f1-score 점수의 평균을 계싼합니다.  
'micro'평균은 모든 클래스의 FP, FN, TP의 총 수를 파악한 뒤 정밀도, 재현율, f1-score로 이 수치를 계산합니다.  

#### 회귀의 평가 지표  

회귀에서는 R^2로 평가하는 것이 가장 좋습니다.  

