---
layout: post
title: 4주차 ML 지도학습 WIL
date: 2021-10-03
author: drizzle0171
categories: ["ml"]
---

# 1. 결정트리(2.3.5)
: 결정에 다다르기 위해 예/아니오 질문을 이어 나가면서 학습 (스무고개)
-> 계층적으로 영역을 분할해가는 알고리즘

- 노드: 질문이나 정답을 담은 네모 상자
    - 리프: 마지막 노드
    - 루트 노드: 맨 위의 노드 (전체 데이터 포함)
    - 순수 노드: 타깃 하나로만 이루어진 리프 노드
 
```python
from sklearn.tree import DecisionTreeClassifier
```
<br>
<br>


## 특징

  1. 결정 트리 학습 = 정답에 가장 빨리 도달하는 예/아니오 질문 목록(테스트)을 학습   
  2. X[1] 행 방향 X[0] 열 방향
  3. 결정 트리의 리프가 한 개의 타깃 값을 가질 때까지 반복됨
  4. 새 데이터 포인트에 대한 예측: 주어진 데이터 포인트가 특성을 분할한 영역들 중 어디에 놓이는가? (루트 노드에서 시작)
  5. 회귀 문제에도 사용 가능(찾은 리프 노드의 훈련 데이터의 평균값이 출력값)
  6. 복잡도 제어: 트리 만들기를 모든 리프 노드가 순수 노드가 될 때까지 진행하면 모델이 매우 복잡 + overfitting
	- 트리 생성을 일찍 중단하는 전략 (사전 가지치기) -> 트리의 최대 깊이나 리프의 최대 개수를 제한, 노드가 분할하기 위한 포인트의 최소 개수를 지정 (scikit-learn은 사전 가지치기만 지원)
    - 트리를 만든 후 데이터 포인트가 적은 노드 삭제 or 병합 (사후 가지치기  = 가지치기)
     
  <br>
  
## 분석
1. 트리 모듈의 export_graphviz 함수를 이용해 시각화 가능 (.dot - 그래프 저장용 텍스트 파일 포맷)
```python
from sklearn.tree import export_graphviz
exprot_graphviz(tree, out_file = "tree.dot", class_names=["악성", "양성"],
feature_names = cancer.feature_names, impurity = False, filled = True)
```
- .dot 파일 읽을 때

```python
import graphviz

with open ("tree.dot") as f:
	dot_graph = f.read()
display(graphviz.Source(dot_graph))
```

<br>

## 특성 중요도
: 트리를 만드는 결정에 각 특성이 얼마나 중요한지를 평가하하는 것

- 0과 1 사이의 숫자 (1은 완벽하게 타깃 클래스를 예측했다는 뜻) 
- 전체 중요도의 합은 1
- 항상 양수
- 어떤 클래스를 지지하는지 모름

★ DecisionTreeRegressor로 구현된 회귀 결정 트리에서도 비슷하게 적용
	-> 훈련 데이터의 범위 밖의 포인트에 대해 예측 불가 = 외삽 X
    
  ![](https://images.velog.io/images/drizzle0171/post/05e8923d-7ccb-4024-802c-dc255651e7e0/image.png)
  	- 트리 모델은 훈련 데이터를 완벽하게 근사 (복잡도에 제한 X)
    - 훈련 데이터 밖의 새로운 데이터를 예측할 능력 X
    
<br>

## 장단점
1. 장점
	- 만들어진 모델을 쉽게 시각화 할 수 있어 비전문가도 이해하기 쉬움
    - 데이터의 스케일에 구애받지 않음
2. 단점
	- 사전 가지치기를 사용함에도 불구하고 과대적합
    
<br>
<br>

# 2. 결정트리의 앙상블 (2.3.6)
: 머신러닝 모델을 연결하며 더 강력한 모델을 만드는 기법

- 랜덤 포레스트
- 그레이디언트 부스팅

## 1. 랜덤 포레스트
: 조금씩 다른 여러 결정 트리의 묶음
-> 서로 다른 방향으로 과대적합된 트리를 많이 만들어 그 결과를 평균냄 **무작위성**
```python
from sklearn.ensemble import RandomForestClassfier
```


## 구축
1. **데이터셋**
트리를 만들기 위해 먼저 데이터의 부트스트랩 샘플 생성 (n_samples개의 데이터 포인트 중 무작위로 데이터를 n_sammples 획수만큼 반복 추출 - 한 샘플이 여러 번 추출될 수 있음)
2. **특성**
각 노드에서 후보 특성을 무작위로 선택한 후 이들 중 최선의 테스트를 찾음 (전체 특성 고려 X)
3. 매개변수: max_feature
	- max_features를 n_features로 설정하면 트리의 각 분기에서 모든 특성을 고려 (특성 선택에 무작위성 X)
    - max_features의 값을 크게 하면 랜덤 포레스트의 트리들은 매우 비슷
    - max_features의 값을 작게 하면 랜덤 포레스트의 깊이가 매우 깊어짐

<br>

## 장단점
1. 장점
	- 현재 가장 널리 사용되는 머신러닝 알고리즘
    - 랜덤 포레스트의 트리가 많을수록 random_state 값의 변화에 따른 변동이 적음
    - 같은 결과를 만들어야 한다면 random_state 값 고정
2. 단점
	- 텍스트 데이터 같은 차원이 높고 희소한 데이터에는 잘 작동하지 않음
    - 선형 모델보다 많은 메모리 사용
    - 훈련과 예측이 느림
3. 매개변수
	- n_estimators, max_features, max_depth(사전 가지치기)
    - n_estimators: 클수록 좋음 -> 더 많은 트리를 평균하여 과대적합을 줄임
    - max_features: 기본값을 쓰자!

<br>
<br>

## 2. 그레이디언트 부스팅 회귀
: 머신러닝 모델을 연결하며 더 강력한 모델을 만드는 기법 -> 분류와 회귀 모두에 사용 가능
**★ 이전 트리의 오차를 보완하는 방식으로 순차적으로 트리를 만듦 ★**
```python
from sklearn.ensemble import GradientBoostingClassifier
```

## 특징
1. 무작위성이 없음 (오차를 보완하는 방식이니까 ~~)
2. 강력한 사전 가지치기
3. 하나에서 다섯 정도의 깊지 않은 트리를 사용 = 메모리 사용이 적고 예측도 빠름
4. 근본 아이디어: 얕은 트리 같은 간단한 모델을 많이 연결
5. 매개변수: learning_rate
	- 학습률이 크면 트리는 보정을 강하게 함
    - n_estimators 값을 키우면 앙상블에 트리가 더 많이 추가되어 모델의 복잡도가 크짐
    - 훈련 세트에서의 실수를 바로잡을 기회가 더 많아짐
6. 비슷한 종류의 데이터에서 그레이디언트 부스팅과 랜덤 포레스트 둘 다 잘 작동하지만 **랜덤포레스트**를 먼저 적용
	(마지막 성능까지 쥐어짜야할 때 그레이디언트 부스팅 ^^...)

<br>

## 장단점
1. 장점
	- 지도 학습에서 가장 강력하고 널리 사용하는 모델 중 하나
    - 특성의 스케일을 조정하지 않아도 됨
    - 이진 특성이나 연속적인 특성에서도 잘 작동 O
2. 단점
	- 매개변수를 잘 조정해야 함
    - 훈련 시간이 김
    - 트리 기반 모델의 특성상, 희소한 고차원 데이터에서는 잘 작동 X
3. 매개변수
	- n_estimators: 트리의 개수를 정함 -> 클수록 모델 복잡 + overfitting
    - learning_rate: 이전 트리의 오차를 보정하는 정도
    -> learning_rate를 낮추면 비슷한 복잡도의 모델을 만들기 위해 더 많은 트리를 추가해야함
    - max_depth(or max_leaf_nodes): 매우 작게 설정 (5보다 깊어지지 않게 설정)
    
(+추가)
- scikit_learn 0.20 버전에서는 GredientBoostingClassifier와 GredientBoostingRegressor에 조기 종료를 위한 매개변수 n_iter_no_change와 validation_ftaction이 추가

<br>

# 끝
분명 개념은 쉬운데 뭔가 너무 어렵다... ~~... ~~... ~~..... 역시 공부는 끝이 없는 것인가



# 1. 배깅, 엑스트라 트리, 에이다부스트 (2.3.7)
: scikit-learn이 제공하는 다른 앙상블 알고리즘

## 1. 배깅 Bagging
: 중복을 허용한 랜덤 샘플링으로 만든 훈련 세트(부트스트랩 샘플)를 사용하여 분류기를 각기 다르게 학습시킴
- 분류기가 predic_proba() 메서드를 지원 o: 확률값을 평균하여 예측 수행
- 지원 X: 가장 빈도가 높은 클래스 레이블이 예측 결과가 됨
```python
from sklearn.ensemble import BaggingClassifier
```
### 특징
```python
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import BaggingClassifier
bagging = BaggingClassifier(LogisticRegression(), n_estimators=100,
			oob_score=True, n_jobs = -1, random_state =42)
bagging.fit(Xc_train, yc_train)
```
- oob_score = true: 부트스트래핑에 포함되지 않은 샘플을 기반으로 훈련된 모델을 평가 (테스트 세트? 같은 거 -> 사실 테스트 세트는 load_breast_cancer datasets에 따로 있음)
-> oob_score를 통해 테스트 세트의 성능 짐작 가능
- RandomForestClassifier도 oob_score 지원 (두 모델 모두 기본값 = False)


<br>

#### 잠깐 !!!!!!!!

1. 배깅: 부트스트랩을 여러번 하여, 여러 훈련 세트를 만들고 각각의 훈련 세트에 모델을 적용하여 그 결과의 값을 평균을 냄 -> 분산을 줄이는 기법
	- max_samples 매개변수로 부트스트랩 샘플의 크기 지정 가능
2. 랜덤포레스트: **배깅의 일종**, 배깅과의 차이는 설명변수(특성)도 무작위로 선택
3. 랜덤포레스트는 DecisionTreeClassifier(splitter='best')를 사용하도록 고정 -> splitter='random'으로 설정하면 무작위로 분할한 후보 노트 중에서 최선의 분할을 찾음
	- Using best, the model if taking the feature with the _highest importance_
	- Using random, the model if taking the feature _randomly_ but with the same distribution.
    
<br>
<br>

## 2. 엑스트라 트리 Extra-tree
: 랜덤 포레스트와 비슷하지만 후보 특성을 무작위로 분할한 다음 최적의 분할을 찾음

```python
from sklearn.ensemble import ExtraTreesClassifier
```
 
 ### 특징
 - DecisionTreeClassifier(splitter='random')
 - 부트스트랩 샘플링 X
 - 랜덤 포레스트보다 계산 비용이 적지만 무작위 분할로 일반화 성능을 높이기 위해서는 많은 트리를 만들어야 함 = 랜덤 포레스트를 더 선호하는 이유
 - 특성 중요도는 랜덤 포레스트와 비슷


<br>
<br>

## 3. 에이다 부스트 AdaBoost
: 그레이디언트 부스팅처럼 약한 학습기 사용

```python
from sklearn.ensemble import AdaBoostClassifier
```

### 특징
- 그레이디언트 부스팅과의 차이점: 이전의 모델이 잘못 분류한 샘플에 가중치를 높여서 다음 모델을 훈련 시킴
- 각 모델은 성능에 따라 가중치 부여
- 예측: 예측한 레이블을 기준으로 모델의 가중치를 합산하여 가장 높은 값을 가진 레이블을 선택
- 기본값 = DecisionTreeClassifier(max_depth=1) -> depth = 1이기 때문에 각 트리의 결정 경계가 직선 1개

<br>
<br>
<br>

# 2. 커널 서포트 벡터 머신 (2.3.8)

## 1. 커널 서포트 벡터 머신 SVM
: 입력 데이터에서 단순한 초평명으로 정의되지 않는 더 복잡한 모델을 만들 수 있도록 확장한 것

### 선형 모델과 비선형 특성
1. 선형 모델을 유연하게 만드는 방법: 특성끼리 곱하거나 특성을 거듭제곱함 -> **비선형 특성 추가**
```python
X_new = np.hstack([X,X[:, 1:] ** 2)
# **2 를 통해 z차원의 특성을 만듦
```
![](https://images.velog.io/images/drizzle0171/post/98032052-d42e-4240-9f9a-241937271ee9/image.png)

이거를 원래 두 개의 특성으로 투영해보면

![](https://images.velog.io/images/drizzle0171/post/c34ba96e-86d3-4ec3-9843-e8cdb8bd814c/image.png)

-> 더 이상 선형이 아님!

### 커널 기법
: 수학적 기교를 사용해서 새로운 특성을 많이 만들지 않고서도 고차원 분류기를 학습시킬 수 있음
 -> 실제로 데이터를 확장하지 않고 확장된 특성에 대한 데이터 포인트들의 거리를 계산함
 
 <서포트 벡터 머신에서 데이터를 고차원 공간에 매핑하는 데 사용하는 방법>
 1. 다항식 커널: 원래의 특성을 가능한 조합을 지정된 차수까지 모두 계산
 2. RBF 커널 (가우시안 커널): 차원이 무한한 특성 공간에 매핑 (모든 차수의 모든 다항식 고려)
 
### SVM

1. 학습이 진행되는 동안 SVM은 각 훈련 데이터 포인트가 두 클래스 사이의 결정 경계를 구분하는 데 얼마나 중요한지를 배움
2. **일반적으로 훈련 데이터의 일부만 결졍 경계를 만드는 데 영향**
	-> 서포트 벡터: 두 클래스 사이의 경계에 위한 데이터 포인트
3. 새로운 데이터 포인트 예측 = 각 서포트 벡터와의 거리를 측정 -> 분류 결정: 서포트 벡터까지의 거리에 기반
4. 데이터 포인트 사이의 거리: 가우시안 커널에 의해 계산

```python
from sklearn.svm import SVC
X, y = mglearn.tools.make_handcrafted_dataset()
svm = SVC(kernel = 'rbf', C=10, gamma=0.1).fit(X, y)
```

- gamma 매개변수: 가우시안 커널 폭의 역수 -> 하나의 훈련 샘플이 미치는 영향의 범위 (작은 값은 넓은 영역)
	**가우시안 커널의 반경이 클수록 훈련 샘플의 영향 범위도 커짐**
- C 매개변수: 규제 매개변수 like 선형 모델 -> 각 포인트의 중요도를 제한

### 장단점
1. 장점
	- 다양한 데이터셋에서 잘 작동
    - 데이터의 특성이 몇 개 안되더라도 복잡한 결정 경계를 만들 수 있음
2. 단점
	- 데이터 전처리와 매개변수 설정에 신경을 많이 써야함
    	-> 그래서 요즘엔 사람들이 대부분 랜덤 포레스트나 그레이디언트 부스팅 같은 (전처리가 거의 또는 전혀 필요가 없는) 트리 기반 모델을 애플리케이션에 많이 사용
        
<br>
<br>
<br>

# 끝
오 이제 뭔가 이해되기 시작하는듯 !! 하다가 SVM 하면서 의욕을 잃었다 ㅎ... 배깅이랑 에이다 부스트, 엑스트라 트리가 랜덤 포레스트, 그레이디언트 부스트랑 꽤나 큰 연관이 있는 것 같으니까 지도학습 끝나면 한 번 싹 정리해야겠다 ~~.. 오늘의 TIL도 ... 무사히... 끝...

<br>
<br>
<br>

# 1. 신경망 Deep Learning (2.3.9)
: 알고리즘 中 하나 -> 딥러닝
- 다층 퍼셉트론 Multilayer perceptrons, **MLP**: 딥러닝 알고리즘의 출발점

## 1. 신경망 모델
:여러 단계를 거쳐 결정을 만들어냄
![](https://images.velog.io/images/drizzle0171/post/cd02e92f-38d7-4ff7-96bb-01b4e6e3f049/image.png)

- 왼쪽 노드: 입력 특성을 나타내며 연결선은 학습된 계수를 표현
- 오른쪽 노드: 입력의 가중치 합 = 출력

![](https://images.velog.io/images/drizzle0171/post/51d10119-61bd-476e-91b7-02fe3188a4da/image.png)
-> MLP에서는 가중치 합을 만드는 과정(y hat)이 여러번 반복
- 은닉 유닛: 중간 단계 -> 다시 가중치의 합을 계산

이것만 보면 선형 모델이랑 비슷하기 때문에, 더 강력하게 만들기 위해서
_렐루_ or _하이퍼볼릭 탄젠트_ (비선형 함수)를 적용

★ 우리가 정해야할 중요 매개변수: 은닉층의 유닛 개수
-> 많은 은닉층으로 구성된 대규모의 신경망 = 딥러닝!

## 2. 신경망 튜닝
```python
from sklearn.neural_network import MLPClassifier
```

### 특징
1. MLP 기본값 = 은닉 유닛 100개 -> 작은 데이터셋에는 과분한 크기
2. 기본 비선형 함수 = 렐루
	- 은닉층이 하나이므로 결정 결계를 만드는 함수는 직선 10개가 합쳐져서 구성 ~~(?? REAL 모르겠다...)~~
    -> hidden_layer_sizes = [,] 괄호 안의 콤마로 은닉층 구분(??)
	- 매끄러운 결정경계를 원한다면?
        - 은닉 유닛 추가
        - 은닉층 추가
        - tanh 함수 사용
3. L2 패널티를 사용해서 가중치를 0에 가깝게 감소시킴 like 선형 분류기, 리지 회귀 -> **alpha 매개변수**
	- 기본값이 매우 낮게 되어 있음 (거의 규제 X)
4. 학습 시작 전, 가중치를 무작위로 설정 -> 같은 매개변수를 사용하더라도 초깃값이 다르면 모델이 많이 달라짐!
5. MLP 정확도를 높이기 위해 모든 입력의 특성을 평균 0, 분산 1이 되도록 변형
```python
#훈련 세트 평균 계산
mean_on_train =  X_train.mean(axis=0)
#훈련 세트 표준 편차 계산
std_on_train = X_train.std(axis=0)

#표준정규분포로 만들기
X_train_scaled = (X_train - mean_on_train) / std_on_train
#테스트 세트도 표준정규분포로 만들기
X_test_scaled = (X_test - mean_on_train) / std_on_train

mlp = MLPClassifier(random = 0)
# 반복횟수가 100이 기본값이기 때문에 max_iter 매개변수를 이용해 늘려줘야 함
# 안 그럼 오류!
mlp.fit(X_train_scaled, y_train)

print("훈련 세트 정확도: {:.3f}".format(mlp.score(X_train_scaled, y_train)))
print("테스트 세트 정확도: {:.3f}".format(mlp.score(X_test_scaled, y_test)))
```
- 일반화 성능을 더 올리기 위해 모델의 복잡도 by alpha
6. **분류 MLPClassifier 회귀 MLPRegressor**
7. 딥러닝을 위한 라이브러리 多.......

### 장단점
1. 장점
	- 머신러닝 분야의 많은 애플리케이션에서 최고의 모델로 다시 떠오르고 있음
    - 대량의 데이터에 내재된 정보를 잡아냄
    - 매우 복잡한 모델을 만들 수 있음
 2. 단점
 	- 종종 학습이 오래 걸림
    - 데이터의 전처리에 주의 -> 다른 종류의 특성을 가진 데이터라면 결정 트리
    
### 복잡도 추정
1. 매개변수: ★ 은닉층의 개수 + 은닉층의 유닛 수 ★ + alpha

<br>
<br>

아래는 2.4절의 분류 예측의 불확실성 추정!
- scikit-learn에서 많이 사용하는 인터페이스: 분류기에 예측의 불확실성을 추정할 수 있는 기능
	- decision_function
    - predict_proba
    (대부분의 분류 클래스는 이 중 하나 or 두 함수 모두 제공)

<br>
<br>

# 2. 결정 함수 (2.4.1)
: 이진 분류에서 decision_function 반환값의 크기는 (n_samples,)
-> 각 샘플이 하나의 실수 값을 반환

~~정말 역대급으로 이해 못하겠음 ^^... 이 값이 의미하는 바가 무엇인가?
결정 함수만 따로 공부해야겠다~~

<br>
<br>

# 3. 예측 확률 (2.4.2)

: predict_proba의 출력은 각 클래스에 대한 확률 -> decision_function의 출력보다 이해하기 쉬움 ~~(오예!)~~

- 반환값 = (n_samples, 2)
    - 첫 번째 원소: 첫 번째 클래스의 예측 확률
    - 두 번째 원소: 두 번째 클래스의 예측 확률
    -> 확률이기 때문에 predic_proba의 출력은 항상 0과 1 사이의 값 (확률의 합 = 1)
    
 <br>
 <br>
 <br>
 
 # 끝
 지도 학습이 끝났다 ~!~!~!~! 신경망에서는 들어본 단어 (다중 퍼셉트론 등등...)이 많아서 공부하는데 재미있었는데, 그 뒤에 새로운 관문이 기다리고 있었다 ^^... 분류 예측의 불확실성 추정...... 멀지 않은 미래에 정복하러 오겠다 !!!
