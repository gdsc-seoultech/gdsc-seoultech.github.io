---
layout: post
title: 5주차 ML WIL
data: 2021-10-31 23:00:00 +0900
author: keonju2
categories: ["ml"]
---

# 군집

군집(clusterling)은 데이터셋을 클러스터라는 그룹으로 나누는 작업입니다.  
기본적으로 거리에 관련된 측정 방법을 활용합니다.  
한 클러스터 안의 데이터 포인트끼리는 매우 비슷하고 다른 클러스터의 데이터 포인트와는 구분되도록 데이터를 나누는 것이 목표입니다.  
유사성을 측정하는 것에는 군집 간 분산이 최대화 되거나, 군집 내 분산을 최소화하게 됩니다.  

종류  

계층적 군집분석  
각 요소들로부터 시작한 클러스터들이 계층 구조를 이루도록 군집분석을 수행합니다.  
이 때 만들어진 계층구조를 덴드로그램이라고 합니다.  

비계층적 군집분석  
각 클러스터의 계층을 고려하지 않고 평면적으로 군집분석을 수행합니다.  

<br>

## K-평균 군집

k-평균(k-means) 군집은 데이터의 어떤 영역을 대표하는 클러스터 중심을 찾습니다.  
알고리즘은 먼저 데이터 포인트를 가장 가까운 클러스터 중심에 할당하고 클러스터에 할당된 데이터 포인트의 평균으로 클러스터 중심을 다시 지정합니다.  
클러스터에 할당되는 데이터 포인트에 변화가 없을 때 알고리즘이 종료됩니다.  

![cluster_1](https://user-images.githubusercontent.com/54880474/139634255-013d94d3-9768-40d6-84d1-f78dd5741bb2.png)

1. 데이터 포인트를 무작위로 초기화합니다.  
2. 각 데이터 포인트를 가장 가까운 클러스터 중심에 할당합니다.
3. 할당한 포인트의 평균값으로 클러스터 중심을 갱신합니다.  
4. 더이상 포인트에 변화가 없다면 알고리즘이 멈춥니다.  

K 값을 설정하는 방법으로는 elbow method, silhouette method와 같은 방법이 있습니다.  

![cluster_6](https://user-images.githubusercontent.com/54880474/139647688-6d508782-1c91-4ac0-bf97-7bf91ba0932a.png)

![cluster_7](https://user-images.githubusercontent.com/54880474/139647764-ca64fea2-ffbd-4411-8d6e-8e51114a0865.png)


K-means 사용 방법

```python
from sklearn.datasets import make_blobs
from sklearn.cluster import KMeans

# 인위적으로 2차원 데이터를 생성합니다
X, y = make_blobs(random_state=1)

# 군집 모델을 만듭니다
kmeans = KMeans(n_clusters=3)
kmeans.fit(X)

# 라벨을 확인합니다
print(kmeans.labels_)
```

k-means는 지정해준 cluster 값만큼 데이터를 분류해줍니다.  
또한 cluster 개수만큼 label은 0부터 값을 순서대로 가집니다.  
하지만 cluster 값을 잘 지정해준다고 하더라도 분류가 실패하는 경우가 생깁니다.  
'모든 클러스터의 반경이 똑같다', '클러스터에서 모든 방향이 똑같이 중요하다' 라는 두 가지 가정을 가지고 있기 때문에 중심에서 멀리 떨어진 경우에 데이터를 잘 처리하지 못합니다.  
즉, 서로 원형으로 잘 모여있는 데이터에 대해서는 잘 구분하지만 모양이 복잡할수록 더 성능이 나빠집니다.  

K-means는 클러스터 중심, 하나의 성분으로 표현된다고 볼 수 있습니다.  
하나의 성분으로 분해되는 관점으로 보는 것을 벡터 양자화라고 합니다.  
벡터 양자화는 입력 데이터의 차원보다 더 많은 클러스터를 사용해 데이터를 인코딩할 수 있습니다.  
즉, 2차원 데이터에서도 10개의 클러스터를 사용해 10개의 특성을 가지는 모델을 만들 수 있습니다.  

장점  
>이해하기 쉽다.  
>구현하기 쉽다.  
>비교적 빠르다.  
>유연하고 효율적이다.  


단점  
>난수 초깃값에 따라 달라진다.  
>활용 범위가 제한적이다.  
>클러스터의 개수를 지정해야한다.  
>최적의 군집을 찾기 어렵다.  
>군집 개수 파악에 대한 합리적 추측이 필요하다.  
>이상치나 노이즈에 민감하다.  

<br>

## 병합 군집

병합 군집은 알고리즘은 시작할 때 각 포인트를 하나의 클러스터로 지정하고 어떤 종료 조건을 만족할 때 까지 가장 비슷한 두 클러스터를 합쳐나갑니다.  
종료 조건은 클러스터 개수로 하여 지정된 개수의 클러스터가 남을 때까지 비슷한 클러스터를 합칩니다.  

ward  
ward 연결은 모든 클러스터 내의 분산을 가장 작게 증가시키는 두 클러스터를 합칩니다.  
따라서 크기가 비슷한 클러스터가 만들어집니다.  

average  
average 연결은 클러스터 포인트 사이의 평균 거리가 가장 짧은 두 클러스터를 합칩니다.  

complete
complete 연결은 클러스터 포인트 사이의 최대 거리가 가장 짧은 두 클러스터를 합칩니다.

single
sigle 연결은 클러스터 포인트 사이의 최소 거리가 가장 짧은 두 클러스터를 합칩니다.  

![cluster_2](https://user-images.githubusercontent.com/54880474/139636519-8f972191-3a28-487c-9150-f7ed8d744fd4.png)

클러스터는 다음과 같은 모습으로 합쳐집니다.  
클러스터의 사용 방법은 다음과 같습니다.  


```python
from sklearn.cluster import AgglomerativeClustering
X, y = make_blobs(random_state=1)

agg = AgglomerativeClustering(n_clusters=3)
assignment = agg.fit_predict(X)

mglearn.discrete_scatter(X[:, 0], X[:, 1], assignment)
plt.legend(["클러스터 0", "클러스터 1", "클러스터 2"], loc="best")
plt.xlabel("특성 0")
plt.ylabel("특성 1")
```

병합 군집은 계층적 군집을 만듭니다.  
계층적 군집은 Scipy에서 덴드로그램을 통해 다차원 데이터셋을 처리하여 시각화 할 수 있습니다.  

```python
from scipy.cluster.hierarchy import dendrogram, ward

X, y = make_blobs(random_state=0, n_samples=12)
# 데이터 배열 X 에 ward 함수를 적용합니다
# SciPy의 ward 함수는 병합 군집을 수행할 때 생성된
# 거리 정보가 담긴 배열을 리턴합니다
linkage_array = ward(X)
# 클러스터 간의 거리 정보가 담긴 linkage_array를 사용해 덴드로그램을 그립니다
dendrogram(linkage_array)

# 두 개와 세 개의 클러스터를 구분하는 커트라인을 표시합니다
ax = plt.gca()
bounds = ax.get_xbound()
ax.plot(bounds, [7.25, 7.25], '--', c='k')
ax.plot(bounds, [4, 4], '--', c='k')

ax.text(bounds[1], 7.25, ' 두 개 클러스터', va='center', fontdict={'size': 15})
ax.text(bounds[1], 4, ' 세 개 클러스터', va='center', fontdict={'size': 15})
plt.xlabel("샘플 번호")
plt.ylabel("클러스터 거리")
```

![cluster_3](https://user-images.githubusercontent.com/54880474/139637122-8e9a473d-2146-4008-8665-970c617580e3.png)


<br>

# DBSCAN

DBSCAN은 클러스터의 개수를 미리 지정할 필요가 없습니다.  
복잡한 형상도 찾을 수 있으며 어떤 클래스에 속하지 않는 포인트도 구분할 수 있습니다.  
병합 군집이나 k-means보다 다소 느리지만 큰 데이터 셋에도 적용할 수 있습니다.  

DBSCAN은 특성 공간에서 가까이 있는 데이터가 많아 붐비는 지역을 포인트로 찾습니다.  
밀집 지역이 한 클러스터를 구성하며 비어있는 지역을 경계로 다른 클러스터와 구분된다는 것입니다.  

밀도: 자기를 중심으로 반지름 안에 있는 다른 좌표점의 개수  
최소 거리: 이웃을 정의하기 위한 거리, 밀도 측정 반지름  
최소 데이터 개수: 밀집 지역을 정의하기 위해 필요한 이웃의 개수, 반지름 내에 있는 최소 데이터의 개수  

1. 무작위 포인트를 선택합니다.  
2. 포인트에서 eps 거리 안의 모든 포인트를 찾습니다.  
3. 거리 안의 포인트 수가 min_samples보다 적다면 노이즈로 레이블 합니다.  
4. 거리 안의 min_samples보다 포인트 수가 많다면 그 포인트는 핵심 샘플로 레이블하고 새로운 클러스터 레이블을 할당합니다.  
5. 포인트의 eps 거리 안의 모든 이웃을 확인하여 어떤 클러스터에도 할당되지 않았다면 방금 만든 클러스터 레이블을 할당합니다.  
6. 이 과정을 반복하여 클러스터는 eps 거리 안에 더 이상 핵심 샘플이 없을 때까지 커집니다.  
7. 아직 선택되지 못한 포인트를 기준으로 위 과정을 다시 반복합니다.  

![cluster_8](https://user-images.githubusercontent.com/54880474/139648118-717f872d-bf8a-4f50-ba78-76cabba6e3fc.png)


DBSCAN은 다음과 같이 사용합니다.  
```python
from sklearn.cluster import DBSCAN
X, y = make_blobs(random_state=0, n_samples=12)

dbscan = DBSCAN()
clusters = dbscan.fit_predict(X)
print("클러스터 레이블:\n", clusters)
```

![cluster_4](https://user-images.githubusercontent.com/54880474/139638449-1ff516a1-4640-4178-bb2e-849eee376a2c.png)

다음 그림에서 보는 것과 같이 min_samples와 eps을 통해 모양이 많이 달라집니다.  
eps를 증가시키면 하나의 클러스터에 더 많은 포인트가 포함되고, min_samples를 키우면 노이즈가 증가합니다.  

장점  
> K-means와 다르게 군집의 수를 설정할 필요가 없습니다.  
> 다양한 모양의 군집이 형성될 수 있으며, 군집끼리 겹치는 경우가 없습니다.  
> 노이즈 개념 덕분에 이상치에 대응할 수 있습니다.  
> eps, min_samples를 잘 설정하면 좋은 성능을 낼 수 있습니다.  

단점  
> 한 데이터는 하나의 군집에 속하게 되므로 시작점에 따라 다른 모양의 군집이 형성됩니다.  
> eps 값에 따라 성능이 크게 좌우됩니다.  
> 군집별로 밀도가 다른 경우 군집화가 제대로 이루어지지 않습니다.  

<br>

## 군집 알고리즘의 비교와 평가

#### 타깃 값으로 군집 평가하기  

1(최적일 때)과 0(무작위로 분류) 사이의 값을 제공하는 ARI, NMI가 가장 널리 사용하는 지표입니다.  
adjusted_rand_score과 normalized_mutual_info_score과 같은 군집용 측정 도구가 따로 존재하므로 accuracy_score을 사용하지 않아야 합니다.  
하지만 ARI와 NMI와 같이 정확한 클러스터를 알고 있어야 평가가 가능하다면 지도 학습 모델을 만드는 곳에만 사용되고 실제 애플리케이션 성능 평가는 사용할 수 없습니다.

#### 타깃 값 없이 군집 평가하기

따라서 타깃 값 없이 실루엣 계수라는 것을 이용하여 군집용 지표가 존재합니다.  
실루엣 점수는 클러스터의 밀집 정도를 계산하는 것으로 높을수록 좋으며 최대 점수는 1입니다.  
하지만 K-평균에서 나왔던 문제와 비슷하게 모양이 복잡할 때는 밀집도를 활용한 평가는 좋지 않습니다.  