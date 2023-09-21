---
layout: post
title: 4주차 ML 지도학습 두번째 시간
data: 2021-10-05 20:00:00 +0900
author: keonju2
categories: ["1st_term"]
tags: ["ml"]
---

# 지난주 과제와 이번주 내용
<br>
- TIL 작성과 백준 10문제 풀기

<br>
<br>
이번주는 지도학습 2주차로 지도학습에서 남은 부분과 분류 예측의 불확실성 추정을 주제로 학습하였습니다.  
제가 담당한 부분은 지도부분 남은 부분 중에서 결정 트리, 앙상블 크게 두 부분으로 볼 수 있습니다.  
<br>
<br>

# 결정 트리
<span style="color:orange">Decision Tree </span>

결정 트리는 분류와 회귀 문제에서 사용되는 모델입니다.  
스무고개처럼 예/아니오로 나눌 수 있는 조건을 통해서 결정에 다다르게 됩니다.  
질문과 정답은 노드가 되고 특히 마지막 노드는 리프라고 합니다. 
<br>  
![tree1](https://user-images.githubusercontent.com/54880474/136059620-b1adf458-14a4-474b-ae07-1fb89a48f29e.png)

결정트리의 구조는 왼쪽 하단에 사진처럼 가장 위에는 Root node, 질문과 답을 연결하는 Edge, 내부의 Internal node, 마지막 노드는 Leaf node, 그리고 Depth로 구성됩니다.  

<br>

---

<br>

#### <span style="color:green">결정 트리 만들기 </span>
<br>
결정 트리를 학습한다는 것은 정답에 가장 빨리 도달하는 예/아니오 질문 (TEST) 목록을 학습한다는 뜻입니다.  
보통 데이터들은 예/아니오 특성으로 구분되지 않고  연속적인 특성을 가진 2차원 데이터 셋에서 보통 ‘특성 i는 값 a보다 큰가?’의 형태와 같은 테스트를 가집니다.  
<br>


![tree2](https://user-images.githubusercontent.com/54880474/136060832-f157681f-43fa-4b0d-a159-b7554269124b.png )  


이 데이터들을 X[1]<=0.6인 테스트로 나누어 봅니다.

![tree3](https://user-images.githubusercontent.com/54880474/136061884-6c694665-0037-4ba9-9e82-25dd6d9d5c6a.png)

알고리즘은 가능한 모든 테스트에서 타깃 값에 대해 가장 많은 정보를 가진 것을 고르게 됩니다.  

따라서 X[1]<=0.6인 테스트를 선택하게 됩니다.  
<br>

![tree5](https://user-images.githubusercontent.com/54880474/136062820-b9733fdf-be5b-4aaf-a6c4-02114c7cb748.png)


결정 트리에서 각 테스트는 하나의 축을 따라 데이터를 나눕니다.  
하나의 질문당 하나의 축을 만들어서 영역이 한 개의 타깃값을 가질 때까지 반복됩니다.   
<br>

![tree4](https://user-images.githubusercontent.com/54880474/136062365-e168f4b1-9828-487a-bcd1-de32998eafb2.png)


결정 트리의 멈춤 조건입니다.  
즉, 미리 정의한 조건들이 없다면 가지를 만들 수 있을 때까지 만드는 것을 알 수 있습니다.  
결정트리의 예측은 그 포인트가 어느 리프에 들어갈지 확인하는 것인데 분류는 타깃 값 중 다수인 것이 예측 결과가 되고 회귀의 경우 리프 노드의 훈련 데이터 평균값이 결과로 출력됩니다.

<br>

---

<br>

#### <span style="color:skyblue">결정 트리 복잡도 제어하기 </span>
<br>
결정 경계가 클래스 포인트에 멀리 떨어진 이상치에 민감하게 되어 모든 리프 노드가 순수 노드가 될 때까지 진행하면 모델이 복잡해지고 과대적합이 발생합니다.  
과대적합을 막기 위한 방법은 크게 사전가지치기, 사후 가지치기 두 가지입니다.  
사전 가지치기는 이름에서 알 수 있듯이 모델을 만들 때 깊이나 리프의 개수 또는 테스트의 최소 개수를 미리 제한하는 것입니다.  
미리 제한하기 때문에 정말로 중요한 포인트를 분류하지않을 수 있습니다.  
사후 가지치기 역시 이름에서 알 수 있듯이 트리가 만들어진 뒤 포인트가 적은 노드를 삭제 혹은 병합하게 되는데 에러감소 프루닝, 룰 포스트 프루닝 같은 방법들이 있습니다.  
<br>
<br>

<span class="evidence">참고</span>  
에러감소 프루닝
> 모든 노드를 프루닝 대상으로 고려  
> 노드 제거 후 검증을 통해 제거 전, 후 정확도 비교  
> 제거 전보다 정확도가 낮아지기 전까지 반복  

룰 포스트 프루닝
> 의사결정 트리를 룰셋으로 변환 (룰은 루트부터 리프까지의 경로)  
> 이 룰셋 속성들에 정확도를 떨어뜨리는 속성을 제거  
> 프루닝 완료 후 정확도 순으로 정렬해 이 순서대로 적용

<br>
<br>

결정 트리는 다음과 같이 만들 수 있고 정확도를 확인할 수 있습니다.  
Default값은 모든 리프가 순수 노드가 되는 모델을 만들기 때문에 훈련 세트의 정확도가 100%가 됩니다.  
하지만 트리가 무한정 깊어지고 복잡해지고 일반화가 잘 되지 않습니다.
<br>

~~~python
from sklearn.tree import DecisionTreeClassifier

cancer = load_breast_cancer()
X_train, X_test, y_train, y_test = train_test_split(
    cancer.data, cancer.target, stratify=cancer.target, random_state=42)
tree = DecisionTreeClassifier(random_state=0)
tree.fit(X_train, y_train)
print("훈련 세트 정확도: {:.3f}".format(tree.score(X_train, y_train)))
print("테스트 세트 정확도: {:.3f}".format(tree.score(X_test, y_test)))

훈련 세트 정확도: 1.000
테스트 세트 정확도: 0.937
~~~
<br>
과대적합 때문에 반드시 훈련 세트의 정확도가 테스트 정확도와 비례하지 않아서 max_depth와 같은 파라미터를 통해 과대적합을 줄이고 테스트 세트 정확도를 높일 수 있습니다.

<br>
<br>


~~~python
tree = DecisionTreeClassifier(max_depth=4, random_state=0)
tree.fit(X_train, y_train)

print("훈련 세트 정확도: {:.3f}".format(tree.score(X_train, y_train)))
print("테스트 세트 정확도: {:.3f}".format(tree.score(X_test, y_test)))

훈련 세트 정확도: 0.988
테스트 세트 정확도: 0.951
~~~

<br>

---
<br>

#### <span style="color:purple">결정 트리 분석 </span>
<br>

결정 트리를 생성하고 시각화하기 위해서는 다음과 같은 모듈이 필요합니다.
~~~python
# 트리 모델 생성
from sklearn.tree import DecisionTreeClassifier 

# 트리의 시각화_1
from sklearn.tree import export graphviz 

# 트리의 시각화_2 (.dot 파일을 만들지 않아도 가능)
from sklearn.tree import plot_tree 
~~~

<br>
그래프를 시각화하는 코드는 다음과 같이 쓸 수 있습니다.

~~~python
# graphviz 이용
from sklearn.tree import export_graphviz

export_graphviz(tree, out_file="tree.dot", class_names=["악성", "양성"],
                feature_names=cancer.feature_names, impurity=False, filled=True)

#plot_tree
from sklearn.tree import plot_tree

plot_tree(tree, class_names=["악성", "양성"], feature_names=cancer.feature_names,
         impurity=False, filled=True, rounded=True, fontsize=4)
~~~

filled=True를 넣어주면 다음과 같이 색상이 들어가는 트리 모델을 얻을 수 있습니다.  

![tree8](https://user-images.githubusercontent.com/54880474/136067667-33e3ca00-4752-4125-9d5e-ff12703b4d94.png)

<br>

---

<br>

#### <span style="color:yellow">트리의 특성 중요도</span>
<br>

tree.feature_importane를 통해 특성 중요도를 알 수 있습니다.  
특성 중요도는 0부터 1 사이에 존재하는데 0은 전혀 사용되지 않은 특성, 1은 완벽하게 타깃 클래스를 예측한 특성을 의미합니다.   
특성 중요도가 낮다는 유용하지 않다가 아닌 모델이 만들어질 때 특성을 선택하지 않았거나 특성과 중복되는 정보가 있다는 것을 의미합니다.  
전체 합은 1이 되고 따라서 특성중요도는 '이 모델이 만들어지는데 어떤 특성의 비율이 높은가?' 정도의 해석이라고 생각하면 될 것 같습니다.  
Worst_radius만 보고 '반지름이 크면 양성이다?' 를 알 수 없는 것처럼 특성 중요도는 어떤 클래스를 지지하는지 알려주지 않습니다.  
<br>
결정 트리의 회귀도 분류와 비슷하게 적용됩니다.
단, 결정 트리를 회귀 모델로 사용하게 되면 훈련 데이터 범위 밖의 정보가 없어서 그 부분에 대한 예측이 불가능하게 됩니다.


![tree9](https://user-images.githubusercontent.com/54880474/136069236-7fb89212-fcc1-4919-b9ae-430f2a18c359.png)

다음 모델은 트리 복잡도에 제한을 두지않아서 훈련 데이터는 완벽하게 예측하지만 데이터 범위 밖으로 나가면 마지막 포인트로 예측값을 출력합니다.
따라서 트리 모델은 가격의 등락과 같은 예측을 할 때는 좋은 예측 모델을 만들 수 있지만 시계열 데이터에서는 데이터가 가진 시간 범위 밖의 예측은 안되기 때문에 잘 맞지 않습니다.  
<br>

---
<br>

#### <span style="color:pink">장단점과 매개변수</span>
<br>


장점
> 해석력이 높습니다.  
> 데이터의 스케일에 구애받지 않습니다.   
> 정규화나 표준화 같은 전처리 불필요합니다.
> 특성의 스케일이 다르거나 이진특성, 연속적인 특성이 혼합되어도 잘 작동합니다.

단점
> 과대적합되는 경향이 있어 일반화 성능이 좋지 않습니다.    
> 축 평행을 구분하여 일부 관계에서 모델링이 어려움이 있습니다.   
> 훈련 데이터에 대한 약간의 변경은 전체 결정논리에 큰 변화를 야기하여 샘플에 민감합니다.  

<br>

|매개변수|설명|  
|:---:|---|
|**min_samples_split**|- 노드를 분할하기 위한 최소한의 샘플 데이터수 → 과적합을 제어하는데 사용 <br> - Default = 2 → 작게 설정할 수록 분할 노드가 많아져 과적합 가능성 증가|
|**min_samples_leaf**|- 리프노드가 되기 위해 필요한 최소한의 샘플 데이터수<br>- min_samples_split과 함께 과적합 제어 용도<br>- 불균형 데이터의 경우 특정 클래스의 데이터가 극도로 작을 수 있으므로 작게 설정 필요
|**max_features**|- 최적의 분할을 위해 고려할 최대 feature 개수<br>- Default = None → 데이터 세트의 모든 피처를 사용<br>- int형으로 지정 →피처 갯수 / float형으로 지정 →비중<br>- sqrt 또는 auto : 전체 피처 중 √(피처개수) 만큼 선정<br>- log : 전체 피처 중 log2(전체 피처 개수) 만큼 선정|
|**max_depth**|- 트리의 최대 깊이<br>- default = None<br>→ 완벽하게 클래스 값이 결정될 때 까지 분할 또는 데이터 개수가 min_samples_split보다 작아질 때까지 분할<br>- 깊이가 깊어지면 과적합될 수 있으므로 적절히 제어 필요
|**max_leaf_nodes**|리프노드의 최대 개수|

여기서 max_depth, max_leaf_nodes,min_samples_leaf 중 하나만 지정해도 과대적합을 막는데 충분한 역할을 합니다.  


<br>
<br>
<br>

# 결정 트리의 앙상블
<span style="color:orange">Ensemble</span>

앙상블은 여러 머신러닝 모델을 연결하여 더 강력한 모델을 만드는 기법입니다.  
책에서는 결정 트리의 앙상블로 한정하고 가장 많이 쓰이는 랜덤포레스트나 부스팅 모델은 트리 기반 모델이지만 앙상블은 다른 분류 모델을 결합하여 사용할 수도 있습니다.  

* Voting – 서로 다른 알고리즘을 가진 분류기를 결합  
* Bagging – 각각의 분류기는 모두 같은 유형의 알고리즘 기반, 모델을 다양하게 만들기 위해 데이터를 재구성 (랜덤포레스트)  
* Boosting – 맞추기 어려운 데이터에 대해 좀 더 가중치를 두어 학습 (Adaboost, Gradient Boosting)  
* Stacking – 모델의 output 값을 새로운 독립변수로 사용  
<br>


![ensemble1](https://user-images.githubusercontent.com/54880474/136071927-2b58ace4-f191-497f-b214-4077ff7aad64.png)

앙상블의 조건입니다.  
<br>

---

<br>

#### <span style="color:lightgreen">랜덤 포레스트</span>

<br>

랜덤 포레스트는 조금씩 다른 결정 트리의 묶음입니다.        
데이터의 일부에 과대적합되는 경향을 이용하여 서로 다른 방향으로 과대적합된 트리를 많이 만들어 그 결과를 평균냄으로써 예측 성능은 유지되면서 결과적으론 과대적합이 줄어드는 아이디어에 기초합니다.  
결정 트리를 많이 만들면서 각 트리는 타깃 예측을 잘 해야 하고 다른 트리와 구별되어야 합니다.  
따라서 무작위성을 주입하는데 트리를 만들 때 사용하는 데이터 포인트를 무작위로 선택하거나 분할 테스트에서 특성을 무작위로 선택하는 방법을 이용합니다.  
<br>

---

<br>

#### <span style="color:olive">랜덤 포레스트 구축</span>

<br>

from sklearn.ensemble import RandomForestClassifier (or RandomForestRegressor)  
n_estimators로 생성할 트리의 개수를 정합니다.  
부트스트랩 샘플은 n_samples개의 데이터 포인트 중에서 n_samples 횟수만큼 무작위로 중복 가능하게 반복 추출하는 것을 의미합니다.  
따라서 데이터 셋이 원래 크기와 같지만 누락되거나 중복되는 데이터가 만들어집니다.  
<br>

![ensemble2](https://user-images.githubusercontent.com/54880474/136072938-20fe1a7b-c4e1-4a72-b7ac-08c4dbc16744.png)


<br>

각 노드에서 전체 특성을 대상으로 최선의 테스트를 찾는 것이 아닌 알고리즘이 각 노드에서 후보 특성을 무작위로 선택한 후 이 후보들 중에서 최선의 테스트를 찾습니다. (max_features)   
부트스트랩 샘플링을 통해 트리가 조금씩 다른 데이터셋을 이용해 만들어지도록 합니다.  
각 노드에서 특성의 일부만 사용하기 때문에 트리의 각 분기는 각기 다른 특성 부분 집합을 사용됩니다.  


max_features=n_features는 특성 선택에 무작위성이 들어가지 않습니다. (부트스트랩 샘플링에는 무작위성 그대로 입니다.)  
max_feature=1 트리의 분기는 테스트할 특성을 고를 필요가 없게 되고 무작위로 선택한 특성의 임계값 찾기만 하면 됩니다.  
max_feature이 커지면 랜덤 포레스트 트리들은 매우 비슷하고 가장 두드러진 특성으로 데이터에 잘 맞춰질 것이고 작으면 트리들은 서로 많이 달라지고 각 트리는 데이터에 맞추기 위해 깊이가 깊어지게 됩니다.  


랜덤 포레스트 예측의 경우 알고리즘이 모델에 있는 모든 트리의 예측을 만듭니다.  
회귀의 경우 이 예측들을 평균하여 최종 예측을 만듭니다.  
분류의 경우 약한 투표 전략을 사용합니다.  
약한 투표 전략은 각 알고리즘이 가능성 있는 출력 레이블의 확률을 제공하고 예측한 확률을 평균으로 가장 높은 확률을 가진 클래스가 예측값이 됩니다.  
참고로 강한 투표 전략은 다수의 분류기가 결정한 예측값을 최대로 하는 것을 말합니다.

<br>

![ensemble3](https://user-images.githubusercontent.com/54880474/136073413-36133d42-fdab-4036-a310-3ed03cac37be.png)


<br>

---


<br>


#### <span style="color:darkblue">랜덤 포레스트 분석</span>

<br>

랜덤 포레스트 훈련 모델
~~~python
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_moons

X, y = make_moons(n_samples=100, noise=0.25, random_state=3)
X_train, X_test, y_train, y_test = train_test_split(X, y, stratify=y, random_state=42)

forest = RandomForestClassifier(n_estimators=5, random_state=2)
forest.fit(X_train, y_train)
~~~


![ensemble4](https://user-images.githubusercontent.com/54880474/136073874-0e16312c-47e8-4567-b4a4-545001f1d605.png)


부트스트랩 샘플링 때문에 한쪽 트리에 나타나는 훈련 포인트가 다른 트리에는 포함되지 않을 수 있어 각 트리는 불완전하지만 랜덤포레스트의 결과는 좋은 결정경계를 보여줍니다.

<br>

![ensemble5](https://user-images.githubusercontent.com/54880474/136074021-efc81063-ca11-437d-83f1-0c8b171a01e6.png)


단일 트리와 다르게 랜덤 포레스트에서 가장 특성 중요도가 높은 특성은 worst perimeter입니다.  
랜덤 포레스트에서 더 많은 특성이 0 이상의 중요도를 갖고 따라서 더 넓은 시각으로 데이터를 바라볼 수 있습니다.

<br>

~~~python
X_train, X_test, y_train, y_test = train_test_split(
    cancer.data, cancer.target, random_state=0)
forest = RandomForestClassifier(n_estimators=100, random_state=0)
forest.fit(X_train, y_train)

print("훈련 세트 정확도: {:.3f}".format(forest.score(X_train, y_train)))
print("테스트 세트 정확도: {:.3f}".format(forest.score(X_test, y_test)))

훈련 세트 정확도: 1.000
테스트 세트 정확도: 0.972
~~~

<br>

랜덤 포레스트에선 훈련 데이터 정확도가 100% 이지만 단일 트리에 비해서 테스트 정확도가 상승한 것을 확인 할 수 있습니다.


<br>

---


<br>


#### <span style="color:chocolate">장단점과 매개변수</span>

<br>

장점
> 매개변수 튜닝을 많이 하지 않습니다.   
> 데이터의 스케일에 구애받지 않습니다.   
> 단일 트리의 단점을 보완하고 장점을 그대로 가지고 있습니다.  

단점
> 랜덤 포레스트의 트리는 특성의 일부만 사용하므로 결정 트리보다 더 깊어지는 경향이 있습니다.  
> 다른 random_state를 지정하면 전혀 다른 모델이 만들어집니다.  
> 텍스트 데이터와 같은 차원이 높고 희소한 데이터에 잘 작동하지 않습니다.  
> 선형 모델에 비해 많은 메모리를 사용하며 훈련과 예측이 느림 

<br>

|매개변수|설명|  
|:---:|---|
|**n_estimators**|- 결정트리의 갯수를 지정<br>- Default = 10 (0.22버전부터 100)<br>- 무작정 트리 갯수를 늘리면 성능 좋아지는 것 대비 시간이 걸릴 수 있음|
|**min_samples_split**|- 노드를 분할하기 위한 최소한의 샘플 데이터수 → 과적합을 제어하는데 사용<br>- Default = 2 → 작게 설정할 수록 분할 노드가 많아져 과적합 가능성 증가|
|**min_samples_leaf**|- 리프노드가 되기 위해 필요한 최소한의 샘플 데이터수<br>- min_samples_split과 함께 과적합 제어 용도<br>- 불균형 데이터의 경우 특정 클래스의 데이터가 극도로 작을 수 있으므로 작게 설정 필요|
|**max_features**|- 최적의 분할을 위해 고려할 최대 feature 개수<br>- Default = 'auto' (결정트리에서는 default가 none이었음)<br>- int형으로 지정 →피처 갯수 / float형으로 지정 →비중<br>- sqrt 또는 auto : 전체 피처 중 √(피처개수) 만큼 선정 (RandomForestClassifier-sqrt(n_feature), RandomForestRegressor-n_feature)<br>- log : 전체 피처 중 log2(전체 피처 개수) 만큼 선정|
|**max_depth**|- 트리의 최대 깊이<br>- default = None<br>→ 완벽하게 클래스 값이 결정될 때 까지 분할 또는 데이터 개수가 min_samples_split보다 작아질 때까지 분할<br>- 깊이가 깊어지면 과적합될 수 있으므로 적절히 제어 필요|
|**max_leaf_nodes**|리프노드의 최대 개수|


N_estimatiors는 클수록 좋고 max_features와 max_depth와 같은 사전 가지치기 옵션은 단일 트리와 같이 주어집니다.


<br>

---


<br>


#### <span style="color:fuchsia">그레이디언트 부스팅 회귀 트리</span>

<br>

![gradient](https://user-images.githubusercontent.com/54880474/136076700-214be147-9549-47c5-9681-f20564458f85.png)

<br>


이름은 회귀이지만 회귀와 분류 모두 사용됩니다. (GradientBoostingClassifier, GradientBoostingRegressor)  
그레이디언트 부스팅은 이전 트리의 오차를 보완하는 방식으로 순차적으로 트리를 만듭니다.  
따라서 기본적으로 무작위성이 없습니다.  
대신 강력한 사전 가지치기가 사용되고 깊지 않은 트리를 사용합니다.  
각 트리는 데이터의 일부에 대해서만 예측을 잘 수행하여 트리가 많이 추가될수록 성능이 향상됩니다.  
이때 손실 함수를 정의하고 경사 하강법을 사용해서 다음 값을 보정합니다.  
<br>

![gradient1](https://user-images.githubusercontent.com/54880474/136076846-03cd6618-ee17-4afd-869f-09ed4543156f.png)

<br>
<br>

random_state=0 만 입력했을 때
~~~python
from sklearn.ensemble import GradientBoostingClassifier
​
X_train, X_test, y_train, y_test = train_test_split(
    cancer.data, cancer.target, random_state=0)
​
gbrt = GradientBoostingClassifier(random_state=0)
gbrt.fit(X_train, y_train)
​
print("훈련 세트 정확도: {:.3f}".format(gbrt.score(X_train, y_train)))
print("테스트 세트 정확도: {:.3f}".format(gbrt.score(X_test, y_test)))

훈련 세트 정확도: 1.000
테스트 세트 정확도: 0.965
~~~
<br>

random_state=0, max_depth=1 을 입력했을 때
~~~python
gbrt = GradientBoostingClassifier(random_state=0, max_depth=1)
gbrt.fit(X_train, y_train)
​
print("훈련 세트 정확도: {:.3f}".format(gbrt.score(X_train, y_train)))
print("테스트 세트 정확도: {:.3f}".format(gbrt.score(X_test, y_test)))

훈련 세트 정확도: 0.991
테스트 세트 정확도: 0.972
~~~
<br>

random_state=0, learning_rate=0.01을 입력했을 때
~~~python
gbrt = GradientBoostingClassifier(random_state=0, learning_rate=0.01)
gbrt.fit(X_train, y_train)

print("훈련 세트 정확도: {:.3f}".format(gbrt.score(X_train, y_train)))
print("테스트 세트 정확도: {:.3f}".format(gbrt.score(X_test, y_test)))

훈련 세트 정확도: 0.988
테스트 세트 정확도: 0.965
~~~
<br>

훈련 세트의 정확도가 100%로 과대적합이 된 모델은 max_depth나 learning_rate로 보완할 수 있습니다.  
Random_state는 고정시켜야 같은 모델이 나오는 것을 볼 수 있습니다.  
Learning_rate는 오차에 곱을 해서 예측값을 업데이트 해주는 값입니다.  
<br>

![gradient2](https://user-images.githubusercontent.com/54880474/136077751-6aba3074-c68d-4789-a9af-3d657f671ab2.png)

![gradient3](https://user-images.githubusercontent.com/54880474/136077761-e5e43c6c-e62a-4c10-a7e6-96e584cec03e.png)

랜덤 포레스트에 비해 그레이디언트 부스팅은 특성들이 더 적습니다.  
안정성에서는 랜덤 포레스트가 더 좋지만 그레이디언트가 성능적으로 더 좋은 모습을 보여줄수 있습니다.  
<br>
<br>

<span class="evidence">참고</span>  
XGBoost
> XGBoost는 데이터 별 오류를 다음 round 학습에 반영 시킨다는 측면에서 기존 Gradient Boosting과 큰 차이는 없음  
> Gradient Boosting과 달리 학습을 위한 목적식(loss function)에 Regularization term이 축가되어 모델이 과적합 되는 것을 방지해줌  
> Regularization term을 통해 XGBoost는 복잡한 모델에 패널티를 부여함

<br>

![gradient4](https://user-images.githubusercontent.com/54880474/136078326-964b2d5e-2e10-47a7-9300-e2cd383c810c.png)

<br>

LighGBM
> XGBoost와 다르게 lear-wise loss 사용 (loss를 더 줄일 수 있음)  
> XGBoost 대비 2배 이상 빠른 속도 (동일 파라미터 기준)  
> 과대적합에 민감하여, 대량의 학습데이터를 필요로 함  

<br>

![gradient5](https://user-images.githubusercontent.com/54880474/136078359-4d3bf782-bcbe-4e5d-b101-b5ccae3808f4.png)




<br>

---


<br>


#### <span style="color:teal">장단점과 매개변수</span>

<br>

장점
> 이진 특성이나 연속적인 특성에도 잘 작동합니다.   
> 데이터의 스케일에 구애받지 않습니다.   
  
단점
> 매개변수의 조정이 필수입니다.  
> 휸련시간이 깁니다.    
> 차원이 높고 희소한 데이터에 잘 작동하지 않습니다.  

N_estimators가 클수록 랜덤 포레스트는 좋았지만 그래이디언트 부스팅에서는 과대적합될 가능성이 높아집니다.  
N_estimator을 정하고 난 뒤에 learning_rate를 정하게 되는데 learning_rate를 낮추면 비슷한 복잡도의 모델을 만들기 위해 더 많은 트리를 추가해야합니다.



<br>

|매개변수|설명|  
|:---:|---|
|**n_estimators**|- 트리의 개수를 지정<br>- 커지면 모델이 복잡해지고 과대적합 가능성 높아짐|
|**learning_rate**|- 관례상 n_estimators를 맞추고 learning_rate를 찾음<br> - 이전 트리의 오차를 보정하는 정도|
|**n_iter_no_change / validation_fraction**| -조기 종료를 위한 매개변수 (default값: n_iter_no_change =None (조기 종료 x), validation_fraction=0.1) <br>- validation_fraction 비율만큼 검증 데이터로 사용하여 n_iter_no_change 만큼 반복하여 향상되지 않으면 훈련 종료|
|**max_depth / max_leaf_nodes**|-각 트리의 복잡도를 낮춤 <br>- max_depth는 보통 매우 작게 설정하며 트리의 깊이가 5보다 깊어지지 않게 함|



<br>
<br>
<br>

# 배깅, 엑스트라 트리, 에이다부스트
<span style="color:maroon">Bagging</span>

from sklearn.ensemble import BaggingClassifier  
배깅은 중복을 허용한 랜덤샘플링으로 만든 훈련 세트를 사용해 분류기를 각기 다르게 학습합니다.  
랜덤포레스트는 배깅의 일종이지만 설명변수도 무작위로 선택하는 것이 차이가 있습니다.  
predict_proba() 지원하면 메서드를 통해 확률값을 평균하여 예측을 수행합니다. (지원하지 않는다면 가장 빈도가 높은 클래스 레이블)  
oob_score=True로 지정하면 매개변수는 부트스트래핑에 포함되지 않은 샘플로 훈련된 모델을 평가할 수 있습니다. (OOB 오차, default=False)  
<br>


~~~python
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import BaggingClassifier
bagging = BaggingClassifier(LogisticRegression(), n_estimators=100, oob_score=True, n_jobs=-1, random_state=42)
bagging.fit(Xc_train, yc_train)

print("훈련 세트 정확도: {:.3f}".format(bagging.score(Xc_train, yc_train)))
print("테스트 세트 정확도: {:.3f}".format(bagging.score(Xc_test, yc_test)))
print("OOB 샘플의 정확도: {:.3f}".format(bagging.oob_score_))

훈련 세트 정확도: 0.953
테스트 세트 정확도: 0.951
OOB 샘플의 정확도: 0.946
~~~
<br>

배깅은 랜덤포레스트와 달리 max_samples에 부트스트랩 샘플의 크기를 정할 수 있습니다.   
또한 로지스틱 회귀가 들어갈 수도 있고 결정 트리가 들어갈 수도 있습니다. 

<br>


---
<br>

<span style="color:lime">Extra Tree</span>



후보 특성을 무작위로 분할한 다음 최적의 분할을 찾습니다.  
엑스트라 트리도 랜덤 포레스트와 비슷하지만 splitter=‘random’을 사용합니다. 랜덤 포레스트는 splitter=‘best’가 고정입니다.  
Splitter=‘best’의 의미는 모든 변수의 정보 이득을 계산하고 그중 가장 설명력이 높은 변수를 선택하는 것입니다.  
또한 부트스트랩 샘플링을 적용하지 않습니다.   
무작위성을 증가시키면 모델 편향은 늘어나지만 분산이 감소하는 모습을 보입니다.  
개별 트리는 매우 복잡하지만 결정 경계는 안정적입니다.  
계산 비용은 위 splitter에서의 feature의 차이 때문에 랜덤 포레스트보다 적지만  일반화 성능을 높이려면 많은 트리를 만들어야합니다.  
<br>

~~~python
from sklearn.ensemble import ExtraTreesClassifier
xtree = ExtraTreesClassifier(n_estimators=100, n_jobs=-1, random_state=0)
xtree.fit(Xc_train, yc_train)

print("훈련 세트 정확도: {:.3f}".format(xtree.score(Xc_train, yc_train)))
print("테스트 세트 정확도: {:.3f}".format(xtree.score(Xc_test, yc_test))

훈련 세트 정확도: 1.000
테스트 세트 정확도: 0.972
~~~

<br>


---
<br>

<span style="color:gray">Adaptive Boosting</span>

이전의 모델이 잘못 분류한 샘플에 가중치를 높여서 다음 모델을 훈련합니다.  
훈련된 각 모델은 성능에 따라 가중치 부여합니다.  
예측을 만들 때는 모델이 예측한 레이블을 기준으로 모델의 가중치를 합산하여 가장 높은 값을 가진 레이블을 선택합니다.  
AdaBoostClassifier은 기본값으로 DecisionTreeClassifier(max_depth=1)를 갖습니다.  
AdaBoostRegressor은 기본값으로 DecisionTreeRegressor(max_depth=3)을 갖습니다. (base_estimator을 이용하여 다른 모델 지정 가능)  

<br>

![ada1](https://user-images.githubusercontent.com/54880474/136081550-a82cd75f-c6fd-49d2-83e9-8fedd01c4d5e.png)

에이다 부스팅의 원리와 수식
<br>

![ada2](https://user-images.githubusercontent.com/54880474/136081678-0d0819ea-b048-43f2-a786-c470918bd8d1.png)

<br>


예측정확도와 가중치의 곱의 합이 되어 높은 정확도를 만들게 됩니다.  
<br>


~~~python
from sklearn.ensemble import AdaBoostClassifier
ada = AdaBoostClassifier(n_estimators=100, random_state=42)
ada.fit(Xc_train, yc_train)

print("훈련 세트 정확도: {:.3f}".format(ada.score(Xc_train, yc_train)))
print("테스트 세트 정확도: {:.3f}".format(ada.score(Xc_test, yc_test)))

훈련 세트 정확도: 1.000
테스트 세트 정확도: 0.986
~~~
<br>
<br>

# 마무리

사실 결정 트리를 배우기 위해서 엔트로피, 정보 이득, 지니 계수와 같은 개념들도 알아두는 것이 좋습니다.  

앙상블 단계에서도 보팅, 배깅, 부스팅, 스택킹에 대한 개념과 실제 사용되는 모습에 대해 공부하였으면 좋았을 것 같습니다.  
각 모델마다 어떤 아이디어에서 발생했는지 알게 된다면 좀 더 이해가 쉬웠을 것 같습니다.  

하드 보팅과 소프트 보팅의 개념과 원리에 대해서도 공부가 필요했습니다.  

책에서는 수학적 개념이나 머신러닝 이론이 자세하게 설명되어 있지는 않았습니다.  
하지만 이론적인 부분을 다룬 내용들은 구글에 검색하면 쉽게 찾을 수 있으니까 따로 공부하면 좋을 것 같습니다.  

정리만 하는 건데 이렇게 길어질 줄은 몰랐습니다...ㅠ  
이게 4주차 절반 분량이었는데 분량 조절 실패해서 죄송합니다. ㅠㅠ