---
layout: post
title: 8주차 ML 모델 평가와 성능 향상 WIL
date: 2021-11-12
author: seongryool
description:
categories: ["1st_term"]
tags: ["ml"]
---

# 모델 평가와 성능 향상

이번에는 모델 평가와 매개변수 선택에 대해서 배운다.  
비지도 학습 모델을 평가하고 선택하는 건 매우 어렵기에 지도 학습 위주로 배운다.

데이터를 train_test_split으로 나누는 건 지금까지 본 적 없는 새로운 데이터에 모델이 얼마나 잘 일반화되는지 측정하기 위해서이다. 모델이 훈련 세트에 잘 맞는 것보다, 학습 과정에 없던 데이터에 대해 예측을 얼마나 잘 하느냐가 중요하기 때문이다.

# 교차 검증

교차 검증(cross_validation)은 일반화 성능을 재기 위해 훈련 세트와 테스트 세트로 한 번 나누는 것보다 더 안정적이고 뛰어난 통계적 평가방법이다. 교차 검증에서는 데이터를 여러 번 반복해서 나누고 여러 모델을 학습한다. 가장 널리 사용되는 교차 검증 방법은 k-fold-cross-validation으로 데이터를 먼저 k 개의 fold로 나누고 모델을 만드는 방법이다. k 개만큼 모델을 만들고 첫 번째 모델은 첫 번째 fold를 test data로 사용하고 나머지 fold를 train_data로 사용해서 학습을 합니다. 이걸 1~5 fold까지 반복을 하는 방법이다. 이렇게 k개의 분할마다 정확도를 측정하고 이 정확도의 평균을 이용한다.

![image](https://user-images.githubusercontent.com/66999675/141452497-b626ba44-548a-416c-a7e9-297d80a7b050.png)  
그림으로 보면 위와 같다.

### scikit-learn의 교차 검증

scikit-learn에서 교차 검증은 model_selection 모듈의 cross_val_scroe 함수로 구현되어 있다.

```python
    from sklearn.model_selection import cross_val_score
    score = cross_val_socre(model,data,target,cv = 5)
```

cv 매개변수를 이용해서 몇 개의 fold를 사용할 지를 결정할 수 있다. 적어도 5겹 교차 검증 정도를 사용하는 것이 좋고, 교차 검증의 정확도를 간단하게 나타내기 위해서 평균을 사용한다.

```python
    from sklearn.model_selection import cross_validate
```

cross_validate 함수를 사용하면 분할 마다 걸리는 시간을 담은 딕셔너리를 반환한다. 테스트 점수와 훈련 점수도 얻을 수 있다. cross_val_score은 cross_validate에서 반환된 결과인 test_score만 반환하는 함수이다.

### 교차 검증의 장점 및 단점

- train_test_split은 데이터를 무작위로 나눈다. 이때 데이터를 무작위로 나눌 때 운 좋게 훈련 세트에는 분류하기 어려운 샘플만 담기게 되었다고 가정. 이 경우 test 세트에는 분류하기 어려운 샘플만 담기게 되었다고 생각. 이 경우 테스트 세트에는 분류하기 쉬운 샘플만 들어있어서 테스트 세트의 정확도가 비현실적으로 높게 나옴. 하지만 교차 검증을 사용하면 테스트 세트에 각 샘플이 정확하게 한 번씩 들어간다. 각 sample은 fold 중 하나에 속하며 각 폴드는 한 번씩 테스트 세트가 된다. 그렇기에 교차 검증의 점수를 높이기 위해서는 데이터셋에 있는 모든 샘플에 대해 모델이 잘 일반화되어야 한다.

- 데이터를 여러 개로 나누면 모델이 훈련 데이터에 얼마나 민감한지 알 수 있다.
- 교차 검증을 이용하면 한 번 분할 했을 때보다 데이터를 더 효과적으로 사용할 수 있다.
- 교차 검증은 단점은 연산 비용이 늘어난다는 것이다. 모델을 k개 만들어야하기에 대략 k배 더 느리다.

교차 검증은 새로운 데이터에 적용할 모델을 만드는 방법이 아니다!. 교차 함수는 **모델을 반환하지 않는다.** cross_val_score 함수를 호출하면 내부적으로 여러 모델이 만들어지지만, 교차 검증의 목적은 단지 주어진 데이터셋에 학습된 알고리즘이 얼마나 잘 일반화될지 평가하는 것이다.

### 계층별 k-겹 교차 검증과 그외 전략들

하지만 데이셋을 나열 순서대로 k개의 폴드로 나누는 건 항상 좋지 않다. 데이터가 무작위로 되어있지 않고 순서대로 정렬되어 있는 경우 제대로 작동하지 않는다.  
이럴 때는 stratifies k-fold-cross-validation을 사용한다.

![image](https://user-images.githubusercontent.com/66999675/141454304-d2d14993-4a18-4424-9236-d3ad76bd71d1.png)
위의 그림처럼 폴드 안의 클래스 비율이 전체 데이터셋의 클래스 비율과 같도록 데이터를 나눈다.

### LOOCV

또 다른 교차 검증 방법으로 Leave-one-out cross-validation도 자주 사용.
LOOCV 교차 검증은 폴드 하나에 샘플 하나만 들어 있는 k-겹 교차 검증으로 생각할 수 있따. 각 반복에서는 하나의 데이터 포인트를 선택해 테스트 세트로 사용한다. 특히 데이터셋이 클 때는 시간이 매우 오래걸리지만, 작은 데이터셋에서는 더 좋은 결과를 만들어낸다.

```python
    from sklearn.model_selection import LeaveOneOut
    loocv = LeaveOneOut()
    scores = cross_val_score(model,iris.data,iris.target,cv = loocv)
```

### 임의 분할 교차 검증

또 다른 교차 검증 전략은 shuffle-split cross-validation이다. 임의 분할 교차 검증에서는 train_size만큼의 포인트로 훈련 세트를 만들고, test_size만큼의 포인트로 테스트 세트를 만들도록 분할한다. 이 분할은 n_splits 횟수만큼 반복된다.
![image](https://user-images.githubusercontent.com/66999675/141456194-fa9a4eb0-f646-4a3e-ada0-b91b53a5abd1.png)

위의 사진은 샘플이 10개인 데이터셋을 5개 포인트의 훈련 세트, 2개의 포인트의 테스트 세트로 4번 반복해서 나누는 것을 보여준다.

```python
    from sklearn.model_selection import ShuffleSplit
    shuffle_split = ShuffleSplit(test_size = .5,train_size = .5,n_splits = 10)
    scores = cross_val_score(model,data,target,cv = shuffle_split)
```

위의 코드는 데이터셋의 50% 훈련 세트로 50%를 테스트 세트로 10번 분할 반복한다.  
임의 분할 교차 검증은 반복 횟수를 훈련 세트나 테스트 세트의 크기와 독립적으로 조절해야할 때 유용하다. 또한 train_size와 test_size 합을 전체와 다르게 해서 전체 데이터의 **일부**만 사용가능하다. 이렇게 데이터를 subsampling 하는 방식은 대규모 데이터셋으로 작업할 때 도움이 된다.

### 반복 교차 검증

데이터셋의 크기가 크지 않을 경우 안정된 검증 점수를 얻기 위해 교차 검증을 반복하여 여려 번 수행하는 경우가 있다. 이때는 RepeatedKFold와 RepeatedStratifiedKFold 분할기를 사용한다.

```python
    from sklearn.model_selection import cross_val_score,KFold,StratifiedKFold
    from sklearn.model_selection import RepeatedStratifiedKFold

    rskfold = RepeatedStratifiedKFold(random_state = 42)
    scores = cross_val_score(model,data,target,cv = rskfold)
```

반복 교차 검증을 사용하면 n_splits x n_repeats 개수만큼 모델이 만들어진다.

### 그리드 서치

이번에는 매개변수를 튜닝해서 일반화 성능을 개선하는 방법이다. 모델에서 중요한 매개변수를 찾는 것은 어려운 일 이기에 그리드 서치(Grid Search)을 사용한다. 이 방법은 관심 있는 매개변수들을 대상으로 가능한 모든 조합을 시도해보는 것이다.
![image](https://user-images.githubusercontent.com/66999675/141458695-2bb7bafa-d957-4f6f-a596-4aa6d574c084.png)

그리드 서치를 사용할 때는 데이터를 세 개의 세트로 나눈다. 훈련 세트로는 모델을 만들고 검증 세트로는 모델의 매개변수를 선택하고 테스트 세트로는 선택된 매개변수의 성능을 평가한다. 훈련 세트, 검증 세트, 테스트 세트의 구분은 실제 머신러닝 알고리즘을 적용하는 데 아주 중요하다. 테스트 세트 정확도에 기초해 어떤 선택을 했다면 테스트 세트의 정보를 모델에 누설한 것이기에 최종 평가에만 사용하도록 테스트 세트를 분리해 유지하는 것이 중요하다.

### 교차 검증을 위한 그리드 서치

일반화 성능을 더 잘 평가하려면 훈련 세트와 검증 세트를 한 번만 나누지 않고, 교차 검증을 사용해서 각 매개변수의 조합의 성능을 평가할 수 있다.
![image](https://user-images.githubusercontent.com/66999675/141459228-bacacb5a-cca4-4da0-8038-0989617b9620.png)

데이터를 나누고 그리드 서치를 적용해서 최종 매개변수를 평가하는 전체 과정이다.

교차 검증을 사용한 그리드 서치를 매개변수 조정 방법으로 널리 사용하기에 scikit-learn은 추정기 형태로 구현된 GridSearchCV를 제공한다.

GridSearchCV를 사용하려면 먼저 딕셔너리 형태로 검색 대상 매개변수를 지정해야한다. 그후 GridSearchCH는 필요한 모든 모델을 학습시킨다. 딕셔너리의 키는 조정하고자 하는 매개변수의 이름, 값은 탐색할 매개변수의 설정값이다.

```python
from sklearn.model_selection import GridSearchCV

param_grid = {'C': [0.001, 0.01, 0.1, 1, 10, 100],'gamma': [0.001, 0.01, 0.1, 1, 10, 100]}
grid_search = GridSearchCV(model, param_grid,cv = 5,return_train_score = True)
```

```python
    print("최적 매개변수 : ",grid_search.best_params_)
    print("최고 교차 검증 점수 : {:.2f}.".format(grid_search.best_score_))
```

best*params 에서는 최적 매개변수가 best_score*에는 최상의 교차 검증 정확도가 담겨져 있다.

여기서 score메서드는 전체 훈련 세트에서 학습한 모델에 대한 것이다. best*score*속성에는 훈련 세트에서 수행한 교차 검증의 평균 정확도가 지정된다.

### 중첩 교차 검증

원본 데이터를 훈련 세트와 테스트 세트로 한 번만 나누는 방식 대신 더 나아가 교차 검증 분할 방식을 사용할 수 있따. 이를 nested cross-validation이라고 한다. 중첩 교차 검증에서는 바깥쪽 루프에서 데이터를 훈련 세트와 테스트 세트로 나눈다. 그리고 각 훈련 세트에 대해 그리드 서치를 실행한다. 그런 다음 바깥쪽에서 분할된 테스트 세트의 점수를 최적의 매개변수 설정을 사용해 각각 측정한다.

이 방법은 모델이나 매개변수 설정이 아닌 테스트 점수의 목록을 만들어준다. 이 점수들은 그리드 서치를 통해 찾은 최적 매개변수가 모델을 얼마나 잘 일반화 시키는지 알려준다. 새로운 데이터에 적용할 모델을 만드는 것이 아니니, 중첩 교차 검증은 미래의 데이터에 적용하기 위한 예측 모델을 찾는 데는 거의 사용되지 않는다.

# 평가 지표와 측정

### 이진 분류의 평가 지표

- 에러의 종류

  - 거짓 음성과 거짓 양성 중요

- 불균형 데이터 셋
  - 하나의 클래스가 다른 것보다 훨씬 많은 데이터셋을 불균형 데이터 셋

### 오차 행렬

오차 행렬은 이진 분류 평가 결과를 나타낼 때 가장 널리 사용하는 방법 중 하나이다.

```python
    from sklearn.metrics import confusion_matrix
    confusion = confusion_maxtirx(test_data,prediction)
```

![image](https://user-images.githubusercontent.com/66999675/141471133-4016d5e0-0111-4d3e-891b-ddcae52fbbba.png)

### 정확도와의 관계

![image](https://user-images.githubusercontent.com/66999675/141615426-89eebff5-99b5-464b-9229-ac0aabcb7319.png)

정확도는 정확히 예측한 수(TP와 TN)를 전체 샘플 수(오차 행렬의 모든 항)으로 나눈 값이다.

### 정밀도, 재현율, f-점수

오차 행렬의 결과를 요약하는 여러 방법 중 가장 일반적인 것은 정밀도(Precision)와 재현율(recall)입니다. 정밀도는 양성으로 예측된 것(TP + FP)중 얼마나 많은 샘플이 진짜 양성인지를 측정한다.  
![image](https://user-images.githubusercontent.com/66999675/141615466-5a51d207-092a-4b9b-8812-362fe457d156.png)

재현율은 전체 양성 샘플(TP + FN) 중에서 얼마나 많은 샘플이 양성 클래스(TP)로 분류되는지를 측정한다.  
![image](https://user-images.githubusercontent.com/66999675/141615497-2b633871-2dc5-4408-93c1-d53781f0348f.png)  
재현율은 모든 양성 샘플을 식별해야 할 때 성능 지표로 사용한다. 즉 거짓 음성(FN)을 피하는 것이 가장 중요할 때이다.

재현율 최적화와 정밀도 최적화는 trade-off 관계다.

정밀도와 재현율이 매우 중요한 측정 방법이지만, 둘 중 하나만으로는 전체 그림을 볼 수 없다. 정밀도와 재현율의 조화 평균이 f-score 또는 f-측정은 둘을 하나로 요약해준다.

![image](https://user-images.githubusercontent.com/66999675/141615539-c1279a19-4e44-4e61-85d2-33101f0a978c.png)  
이 공식을 f1-점수라고도한다. 정밀도와 재현율을 같이 고려하므로 불균형한 이진 분류 데이터셋에서는 정확도보다 더 나은 지표가 될 수 있다.

classification_report 함수는 정밀도, 재현율, f1-score를 모두 한 번에 계산해서 출력해준다.

```python
    from sklearn.metrics import classification_report
```

classification_report 함수는 클래스마다 한 줄씩 출력을 만들고, 각 클래스가 양성일 때 정밀도, 재현율, f1-점수를 report 한다.

### 정밀도-재현율 곡선과 ROC 곡선

분류기의 필요조건을 지정하는 것을 운영 포인트(Operating porint)를 지정한다고 말한다.  
새로운 모델을 만들 때는 운영 포인트가 명확하지 않은 경우가 많다. 이런 경우 문제를 더 잘 이해하기 위해 모든 임계값을 조사해보거나, 한 번에 정밀도나 재현율의 모든 장단점을 살펴보는 것이 좋다. 이를 위해서 precision-recall curve를 사용한다. sklearn에서는 타깃 레이블과 decision_function이나 predict_proba 메서드로 계산한 예측 불확실성을 이용한다.

```python
    from sklearn.metrics import precision_recall_curve
```

![image](https://user-images.githubusercontent.com/66999675/141642228-c1756f23-fb46-4431-b3ff-01e8167262d8.png)  
곡선이 오른쪽 위로 갈수록 더 좋은 분류기이다. 오른쪽 위 지점은 한 임계값에서 정밀도와 재현율이 모두 높은 곳이다.
곡선은 임계값이 매우 낮아 전부 양성 클래스가 되는 왼쪽 위에서 시작한다. 임계값이 커지면서 곡선은 정밀도가 높아지는 쪽으로 이동하지만 재현율은 낮아진다. 임계값을 높일수록 양성으로 분류된 포인트의 대부분이 TP가 되고 정밀도는 매우 높아지지만 재현율은 낮아진다. 정밀도가 높아져도 재현율이 높게 유지될수록 더 좋은 모델이다.

모델을 자동으로 비교하려면 특정 임계값이나 운영 포인트에 국한하지 않고 전체 곡선에 담긴 정보를 요약해야한다. 이러한 요약 방법의 하나로 정밀도-재현율 곡선의 아랫부분 면적을 계산할 수 있고 이를 average precision 평균 정밀도라고 한다.

ROC 곡선은 여러 임계값에서 분류기의 특성을 분석하는 데 사용하는 도구이다. 정밀도-재현율 곡선과 비슷하게 ROC 곡선은 분류기의 모든 임계값을 고려하지만, 정밀도와 재현율 대신 진짜 양셩 비율(TPR)에 대한 거짓 양성 비율(FPR)을 나타낸다.  
![image](https://user-images.githubusercontent.com/66999675/141642423-da4e6d11-d01d-41b4-b046-2005433f794b.png)  
식은 위와 같다.

```python
    from sklearn.metrics import roc_curve
```

![image](https://user-images.githubusercontent.com/66999675/141642523-1fd33f57-5948-47d6-8c48-e15708837f1d.png)  
ROC 곡선은 왼쪽 위에 가까울수록 이상적이다. 거짓 양성 비율(FPR)이 낮게 유지되면서 재현율이 높은 분류기가 좋다.

정밀도-재현율 곡선에서처럼 곡선 아래의 면적값 하나로 ROC 곡선을 요약하는 것을 AUC(area under the curve)라고 한다.

```python
    from sklearn.metrics import roc_auc_score
```

# 다중 분류의 평가 지표

기본적으로 다중 분류를 위한 지표는 모두 이진 분류 평가 지표에서 유도되었고, 모든 클래스에 대해 평균을 낸 것이다. 다중 분류의 정확도도 정확히 분류된 샘플의 비율로 정의한다. 그래서 클래스가 불균형할 때는 정확도는 좋은 평가 방법이 되지 못한다.

다중 분류에서 불균형 데이터셋을 위해 가장 널리 사용하는 평가 지표는 f1-점수의 다중 분류 버전이다. 다중 클래스용 f1-점수는 한 클래스를 양성 클래스로 두고 나머지 클래스들을 음성 클래스로 간주해서 클래스마다 f1 점수를 계산합니다.  
전략은 총 3가지입니다.

- macro 평균은 class 별 f1 점수에 가중치를 주지 않는다. 클래스 크기에 상관없이 모든 클래스를 같은 비중으로 다룬다.
- weighted 평균은 클래스별 샘플 수로 가중치를 두어 f1 점수의 평균을 계산한ㄷ .
- micro 평균은 모든 클래스의 거짓 양성, 거짓 음성, 진짜 양성의 총 수를 헤아린 다음 정밀도, 재현율, f1 점수를 이 수치로 계산한다.  
  각 샘플을 똑같이 간주하면 micro 평균 f1-점수를 추천한다. 각 클래스를 동일한 비중으로 고려면 macro 평균 f1 점수를 추천한다.
