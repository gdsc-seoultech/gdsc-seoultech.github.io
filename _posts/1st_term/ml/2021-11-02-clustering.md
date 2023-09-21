---
layout: post
title: 6주차 ML 군집 알고리즘
date: 2021-11-02
author: seongryool
categories: ["1st_term"]
tags: ["ml"]
---

### 🤔 지난주 과제 
* 중간고사 잘보기^^
<br>
<br>
<br>
<br>

# 6주차 우리가 한 것은.. 
11월 02일 ML은 6주차로 "군집"에 대해 알아보는 시간을 가졌습니다!   
3.5.1장부터 3.5.3장은 **ML CORE 의정**님이 3.5.4장과 3.5.5장은 **ML CORE 성률**님이 맡아서 발표를 하셨고 마지막에 복습 겸 퀴즈를 풀며 스터디를 마무리했습니다! 
<br>
<br>

## <span style="color:red"> What is 군집? </span>  
<img width="500"  src="https://user-images.githubusercontent.com/63052097/140080314-84005f01-ad9f-4eba-b374-48020f12686e.png" style="margin-top: 10px;">    
<br>    

- 데이터 셋을 ‘클러스터(cluster)’ 라는 그룹으로 나누는 작업
- **Q. 클러스터란?**    
:  비슷한 특성을 가진 데이터끼리의 묶음입니다. (여기서 말하는 비슷한 특성이란 가까운 위치를 의미) 
- **Q. 최종목표?**   
: 클러스터 안의 데이터 포인트끼리는 매우 비슷하게! 다른 클러스터의 데이터 포인트와는 구분되도록! 데이터를 나누는 것     

- **군집과 분류의 차이**  [(출처)](https://leedakyeong.tistory.com/entry/%EA%B5%B0%EC%A7%91%EA%B3%BC-%EB%B6%84%EB%A5%98%EC%9D%98-%EC%B0%A8%EC%9D%B4-difference-of-clustering-and-classification)    

     <span style="background:#FFEBCD;font-weight:bold"> 1) 군집 </span>    
    ▫ unsupervised learning(비지도 학습) 방법   
    ▫ 군집의 수와 속성 즉, label(category)이 사전에 알려져 있지 않을 때 사용하는 분석법         
    ▫ 각 개체가 어떤 군집에 들어갈까를 예측하기 보다 데이터 자체의 특성에 대해 알고자 할 때 적절한 분석기법         
    ▫ 즉, 레이블 자체에 어떤 의미가 없다.    

    <br>       

    <span style="background:#FFEBCD;font-weight:bold"> 2) 분류 </span>    
    ▫ supervised learning(지도 학습) 방법   
    ▫ label(category)이 사전에 알려져 있을 때 사용하는 분석법         
    ▫ 각 개체가 어떤 그룹에 들어갈까를 예측하는 기법        
    ▫ 즉, 새로운 데이터의 그룹을 예측하기 위한 목적으로 하는 분석기법     

    <br>

    <span style="background:#FFEBCD;font-weight:bold"> 3) 예시 </span>    
    <img width="500"  src="https://user-images.githubusercontent.com/63052097/140084238-54bd9ab8-0dae-47f9-a8bc-bc8dde8fd705.png" style="margin-top: 10px;">      
    **군집의 경우**, 예를 들어 이런 raw 데이터들을 모았다고 가정해봅시다!    

    <br>  

    <img width="500"  src="https://user-images.githubusercontent.com/63052097/140084663-5db7061c-ab51-4a57-9c82-bb7f5dedcbfd.png" style="margin-top: 10px;">    

    - 위의 군집은 *모양 특성*을 이용하여 비슷한 모양끼리 군집화한 겁니다. 근데 어떤 모양인지는 직접 뜯어봐야 아는 것이죠. 그냥 군집1, 군집2라는 이름에서 알 수 있듯이 레이블된 애들이 서로 비슷하겠거니와 같은 정보밖에 모릅니다.
    - 아래의 군집은 *과일이 갖고 있는 특성*을 이용해 비슷한 품종끼리 군집화를 했는데 뜯어보니 군집1이 과일인거고 군집 2가 채소인겁니다.     
     <br>
                
    <img width="500"  src="https://user-images.githubusercontent.com/63052097/140086155-639adaea-d03e-4fd1-963e-b73899326339.png" style="margin-top: 10px;">        

    **분류의 경우** 아까 raw 데이터를 과일과 채소라고 미리 레이블링 한 데이터가 있다고 해봅시다!        
         
    <img width="500"  src="https://user-images.githubusercontent.com/63052097/140086331-d362f130-3dfe-4153-b590-af08d71c9418.png" style="margin-top: 10px;">        

    - 레이블링한 것을 토대도 레이블대로 분류를 하고 각 레이블 마다의 특성을 파악합니다. 그 후 새로운 데이터가 들어왔을 때 각 그룹의 특징과 새 객체의 특징을 비교해서 분류를 하게됩니다!     

<br>

## 3.5.1 k-평균 군집       
<span style="background:#FFEBCD;font-weight:bold"> 1) k- 평균 군집 알고리즘의 과정 </span>     
  <img width="500"  src="https://user-images.githubusercontent.com/63052097/140092531-7923e3a3-d46a-4abd-96e7-93afb438f51e.png" style="margin-top: 10px;">      
**STEP 1**  얼마나 많은 클러스터가 필요한지 결정 (K 결정)   
**STEP 2**  초기 클러스터 중심(Centroid) 선택       

  - 랜덤하게 설정 : 무작위로 초기 클러스터의 중심을 정하는 방법     
<img width="600"  src="https://user-images.githubusercontent.com/63052097/140093695-8e8514f0-4693-472e-a3ab-53a32677a633.png" style="margin-top: 10px;">        

  - 수동으로 설정 : 데이터 포인트에서 클러스터 중심을 지정해주는 방법, 이때 데이터에서 무작위로 포인트를 선택하여 클러스터 중심을 지정      
<img width="600"  src="https://user-images.githubusercontent.com/63052097/140094087-e5565c68-ad99-4e99-800d-9c40b1d057a9.png" style="margin-top: 10px;">        

  - Kmean++ 방법 : 첫 번째 초기 클러스터 중심을 정하고 그 다음 클러스터 중심은 이전의 클러스터 중심으로부터 가장 먼 데이터 포인트로 지정           
<img width="600"  src="https://user-images.githubusercontent.com/63052097/140094708-466b9b40-102d-45fd-bcb8-f1e9bba8a499.png" style="margin-top: 10px;">        


**STEP 3**  모든 데이터를 순회하며 각 데이터마다 가장 가까운 Centroid가 속해있는 클러스터로 assign
**STEP 4**  새로운 클러스터의 중심으로 갱신     
**STEP 5**  클러스터에 assign 되는 데이터가 없을 때(or 클러스터 중심에 할당되는 )까지 스텝 3, 4를 반복     
      
<br>
<span style="background:#FFEBCD;font-weight:bold"> 2) k- 평균 군집 핵심 코드들 </span>      

```python
from sklearn.datasets import make_blobs
from sklearn.cluster import KMeans

# 인위적으로 2차원 데이터를 생성합니다
X, y = make_blobs(random_state=1)

# 군집 모델을 만듭니다
kmeans = KMeans(n_clusters=3)
kmeans.fit(X)
```

- X에 할당된 훈련 데이터 포인트의 클래스 레이블 확인        
```python
print(kmeans.labels_)
```    
```
[0 2 2 2 1 1 1 2 0 0 2 2 1 0 1 1 1 0 2 2 1 2 1 0 2 1 1 0 0 1 0 0 1 0 2 1 2
 2 2 1 1 2 0 2 2 1 0 0 0 0 2 1 1 1 0 1 2 2 0 0 2 1 1 2 2 1 0 1 0 2 2 2 1 0
 0 2 1 1 0 2 0 2 2 1 0 0 0 0 2 0 1 0 0 2 2 1 1 0 1 0]
```     

- 새로운 데이터의 클러스터 레이블을 예측        
```python
print(kmeans.predict(X))
```
```
[0 2 2 2 1 1 1 2 0 0 2 2 1 0 1 1 1 0 2 2 1 2 1 0 2 1 1 0 0 1 0 0 1 0 2 1 2
 2 2 1 1 2 0 2 2 1 0 0 0 0 2 1 1 1 0 1 2 2 0 0 2 1 1 2 2 1 0 1 0 2 2 2 1 0
 0 2 1 1 0 2 0 2 2 1 0 0 0 0 2 0 1 0 0 2 2 1 1 0 1 0]
```         

- 클러스터 중심의 위치 (cluster_center_)     
```python
mglearn.discrete_scatter(X[:, 0], X[:, 1], kmeans.labels_, markers='o')
mglearn.discrete_scatter(
    kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], [0, 1, 2],
    markers='^', markeredgewidth=2)
```
<img width="500"  src="https://user-images.githubusercontent.com/63052097/140095899-6f410286-8e2f-4cc3-bc21-074519cdf00e.png" style="margin-top: 10px;">        
                 
<br> 
<br>       
<span style="background:#FFEBCD;font-weight:bold"> 3) k- 평균 알고리즘이 실패하는 경우  </span>     

1. 비교적 간단한 형태를 구분 가능, 복잡하면 구분 못함           
->  각 클러스터를 정의하는 것이 중심 하나 뿐이라 클러스터는 둥근 형태로 나타난다.       
<img width="400"  src="https://user-images.githubusercontent.com/63052097/140099306-b5bd1e31-40ba-4ce5-a19d-006cc6d20b1f.png" style="margin-top: 10px;">               
<br>

2. 클러스터의 밀도가 다르면 정확하게 구분하기 어렵          
->  k-평균은 모든 클러스터의 반경(반지름)이 똑같다고 가정한다.      
<img width="400"  src="https://user-images.githubusercontent.com/63052097/140099435-8ba2bb42-b5dc-4ea5-8e03-1f75ebb97af9.png" style="margin-top: 10px;">    
<br>

3. 원형이 아닌 클러스터는 구분하지 못함     
-> k-평균은 또 클러스터에 모든 방향이 똑같이 중요하다고 가정한다..      
<img width="400"  src="https://user-images.githubusercontent.com/63052097/140099630-8f9c5a82-1edf-4b83-87db-9180a2f81a3c.png" style="margin-top: 10px;">            

<br>
<span style="background:#FFEBCD;font-weight:bold"> 4) 벡터 양자화 또는 분해 메서드로서의 k-평균  </span>      
 
-  k-평균에서 하나의 클러스터 중심을 하나의 성분으로서 분해되는 관점을 *벡터 양자화*라고 합니다          
- 개념적으로 보면 어떤 데이터들을 그룹핑하여 이 그룹단위를 몇 개의 대표값으로 양자화한다라고 되어 있는데 즉 클러스터링을 하고 **각 그룹의 무수히 많은 데이터들의 대표 역할을 하는 클러스터 중심 자체가 벡터 양자화**다! 
      
- 장점 :             
<img width="700"  src="https://user-images.githubusercontent.com/63052097/140102180-e4e79fca-4531-449b-8b10-ad53fec1963b.png" style="margin-top: 10px;">         
  k-평균을 활용한 벡터 양자화의 장점이 입력 데이터의 차원 즉 특성의 수 보다 더 많은 클러스터를 사용해서 인코딩할 수 있습니다.         
  위의 사진에서 볼 수 있듯이 two_moons 데이터가 2차원이라서 클러스터 수를 2개 사용했을 때 이상하게 군집이 형성되었습니다. 이때 특성의 수가 2개보다 더 많은 10개의 특성(성분)으로 분해해서 표현해줄 수 있습니다!   

<br>

## 3.5.2 병합 군집      
<span style="background:#FFEBCD;font-weight:bold"> 1) 병합 군집의 과정 </span>     
  <img width="700"  src="https://user-images.githubusercontent.com/63052097/140103576-b6a89392-84c0-46f8-84d3-fdd07330c0b3.png" style="margin-top: 10px;">      
**STEP 1**  각 포인트를 하나의 클러스터로 지정         
**STEP 2**  어떤 종료 조건을 만족할 때까지 가장 비슷한 두 클러스터를 합쳐나감        
-> 가장 비슷한 클러스터를 측정(linkage 옵션) , 종료 조건 == 클러스터 개수   

**추가) linkage 옵션**  
 - ward : 기본값으로 모든 클러스터 내의 분산을 가장 작게 증가시키는 두 클러스터를 합칩니다. 그래서 크기가 비교적 비슷한 클러스터가 만들어집니다!        
  <img width="200"  src="https://user-images.githubusercontent.com/63052097/140127576-665baa96-a3ad-4189-a8d1-b4e08e25cb92.png" style="margin-top: 10px;">  

 - average : 클러스터 포인트 사이의 평!균! 거리가 가장 짧은 두 클러스터를 합칩니다! 
  <img width="200"  src="https://user-images.githubusercontent.com/63052097/140124310-f277c8cf-0fd0-4fc0-a178-9099f102d703.png" style="margin-top: 10px;">
 - complete : 클러스터 포인트 사이의 최대 거리가 가장 짧은 두 클러스터를 합칩니다. 
  <img width="200"  src="https://user-images.githubusercontent.com/63052097/140126708-15314f06-17ba-4dfa-8caf-3d9a8eea9264.png" style="margin-top: 10px;">    
  
<br>

<span style="background:#FFEBCD;font-weight:bold"> 2) 실제 코드 </span> 
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

병합 군집 차제가 데이터 자체를 클러스터화 하고 합치기 때문에 새로운 데이터 포인트에 대해 예측할 수 없습니다! 그래서 predict 대신에 훈련 세트로 모델을 만들고 클러스터 소속 정보만 얻으려고 fit_predict 메서드를 사용한다는 거 기억해두는게 좋습니다.    

<br>

<span style="background:#FFEBCD;font-weight:bold"> 3) 계층적 군집 & 덴드로그램 </span>      
- 계층적 군집       
  <img width="400"  src="https://user-images.githubusercontent.com/63052097/140105510-6c7a54b7-5966-4d77-bfbe-1d7668276dc4.png" style="margin-top: 10px;">         
  ▫ 계층적 군집은 병합 군집에서 클러스터링이 진행될 때 모든 포인트들이 자기 자신의 클러스터에서 마지막 클러스터까지 이동하게 되는데 각 중간 단계의 모든 클러스터를 모두 표시한게 계층적 군집입니다.      
  ▫ 특성이 3개일 때는 표현을 못 합니다. 따라서 덴드로그램이라는 계층 군집을 시각화하는 도구를 사용합니다.     
<br> 

- 덴드로그램     
  [(덴드로그램이 움직이는 것을 보고 싶다면?!)](https://t1.daumcdn.net/cfile/tistory/997EB7425BD1A95117)     
  <img width="700"  src="https://user-images.githubusercontent.com/63052097/140107681-cd6c4338-3749-4561-9e0b-7edacbe998e4.png" style="margin-top: 10px;">       
 ▫  덴드로그램은 사이킷 런에는 덴드로그램을 그리는 기능이 없습니다. 하지만 싸이파이 라이브러리를 이용해서 만들 수 있습니다.          
 ▫ 그래프의 맨 아래에는 데이터 포인드들이 있습니다. 이 포인트들을 리프 노드로 하여 트리를 생성합니다.               
 ▫  새로운 부모 노드는 두 클러스터를 합칠 때 추가 됩니다.            
 ▫  y축인 가지의 길이는 합쳐진 클러스터가 얼마나 멀리 떨어져 있는지를 보여줍니다. 따라서 마지막 두 클러스터를 하나로 합칠 때의 거리가 멀다 라는 것을 알 수 있습니다!        

 <br>
 <br>             
          
## 3.5.3 DBSCAN(밀도 기반 클러스터링)           
[(DBSCAN이 움직이는 것을 보고 싶다면?!)](https://deep-eye.tistory.com/36)      

<span style="background:#FFEBCD;font-weight:bold"> 1) DBSCAN의 과정 </span>     
  <img width="400"  src="https://user-images.githubusercontent.com/63052097/140135179-2b2fd226-ad17-4a47-ba87-9249218ef26c.png" style="margin-top: 10px;">      
**STEP 1**  각 포인트를 하나의 클러스터로 지정합니다    

  <img width="400"  src="https://user-images.githubusercontent.com/63052097/140136935-a2c8c886-3d0a-403b-b9ff-0bccea66d3ae.png" style="margin-top: 10px;">      

**STEP 2**  그 포인트에서 eps 거리안의 모든 포인트를 찾습니다         
-> 만약 eps 거리 안에 있는 포인트 수 < min_samples 이라면 잡음으로 레이블합니다                  
-> 아니라면 핵심 샘플로 레이블 하고 새로운 클러스터 레이블을 할당합니다              
  
  <img width="400"  src="https://user-images.githubusercontent.com/63052097/140146034-28f0d613-97e9-4654-8a86-888d37a00645.png" style="margin-top: 10px;">      

**STEP 3**  그 핵심 샘플 포인트의 모든 이웃(eps 안에 있는 포인트)을 살핍니다         
-> 만약 어떤 클러스터에도 아직 할당 안된 포인트이면 바로 전에 만든 클러스터 레이블을 할당합니다         
-> 혹은 핵심 샘플인 포인트면 그 포인트의 이웃을 방문합니다      

  <img width="400"  src="https://user-images.githubusercontent.com/63052097/140150787-88ab5a0c-2d10-4ea2-a62f-5031fa7440be.png" style="margin-top: 10px;">      

**STEP 4**  한 클러스터는 eps 거리 안에 더 이상 핵심 샘플이 없을 때까지 자랍니다           

**STEP 5**  방문하지 못한 포인트를 선택해서 같은 과정을 반복합니다   

<br>

<span style="background:#FFEBCD;font-weight:bold"> 2) DBSCAN 핵심 매개변수 </span>  
<img width="500"  src="https://user-images.githubusercontent.com/63052097/140153477-ea7dc4a3-24d4-4d2d-b5ef-7fab4871390d.png" style="margin-top: 10px;">   
- min_samples 
: 감소시키면 핵심 포인트 수가 줄어들어 잡음 포인트가 늘어납니다          
: 즉 클러스터의 최소 크기를 결정해줍니다           
: 덜 조밀한 지역의 포인트들이 잡음이 될 것인지 하나의 클러스터가 될 것인지를 결정한다고 볼 수 있습니다.           

- eps
 : 증가시키면 하나의 클러스터에 더 많은 포인트가 포함합니다.
 : 가까운 포인트의 범위를 정한다. 
 
<img width="500"  src="https://user-images.githubusercontent.com/63052097/140163061-3e710861-40b9-447c-bcbe-8ca281c33610.png" style="margin-top: 10px;">  
     드디어 two_moons_ 데이터를 구분해냈습니다아아악!!!!!!       
     
     
<br>
<br>


## 3.5.4 군집 알고리즘의 비교와 평가
# 타깃 값으로 군집 평가하기

- 군집 알고리즘은 비지도학습이기에 알고리즘이 잘 작동하는지 평가하거나 알고리즘의 출력이 제대로 되었는지 확인하기가 매우 어렵습니다.

- 이러한 군집 알고리즘에서도 평가하는 방법이 있습니다. 먼저 타깃 값으로 군집을 평가하는 방법입니다. 군집 알고리즘의 결과를 실제 정답 클러스터와 비교하여 평가할 수 있는 지표를 사용합니다. 이때 ARI와 NMI를 사용합니다. 둘다 1일 때가 최적의 값이고 0일 때가 무작위로 분류될 때를 의미합니다. ARI는 음수도 가능합니다.

![image](https://user-images.githubusercontent.com/66999675/140068127-9f293cc0-26ac-4733-9865-22240e361fc2.png)

- 책에 나와있는 그림입니다. ARI를 이용해서 군집 알고리즘을 평가한 사진입니다.
- 무작위로 클러스터에 포인트를 할당한 경우는 맨 왼쪽의 사진처럼 ARI의 값이 0에 가까워지고 완벽하게 군집을 만들어 낼 때는 맨 오른쪽 사진과 같이 1의 값을 가집니다.
- scikit-learn에서는 adjusted_rand_score()를 이용해서 ARI를 계산합니다.

### rand index 란?

![image](https://user-images.githubusercontent.com/66999675/140068350-4bad06fd-3963-43a9-86d6-8a0fcc23804e.png)

- ARI가 어떤 식으로 계산을 하는 지에 대해서 알아보도록 하겠습니다.
- ARI는 adjusted rand index입니다. 즉 rand index가 있고 이걸 보완하게 ARI입니다.
- rand 인덱스의 수식은 다음과 같습니다. R = (a+b) / (n / 2)입니다.
- 여기서 분모는 순서가 정해져있지 않은 두 개의 쌍의 수를 의미합니다. 조합입니다.
- a는 두 개의 클러스터가 있을 때 두 클러스터 내에서 동일하게 짝지어진 쌍을 의미합니다.
- b는 두 개의 클러스터가 있을 때 두 클러스터 내에서 동일하게 짝지어지 않은 쌍을 의미 합니다.
- 분모는 nC2 이기에 n \* (n-1)/2로 계산합니다.

### rand index 예시

- 예시를 들어서 설명하겠습니다.
- 다섯 명의 사람이 있다고 하겠습니다. (의정,민찬, 슬기, 슬비, 건주)
- 먼저 이 다섯 사람의 반 배정결과가 의정은 1반 민찬 슬기는 2반 슬비 건주는 3반이라고 합니다. x = [1,2,2,3,3]
- 배정 되기전에 이 다섯 사람의 반 배정을 예측을 해봅니다. 의정 민찬은 1반 슬기 슬비 건주는 2반으로 예측을 합니다. y = [1,1,2,2,2]
- 그 다음 분모 값은 총 5명이기에 5C2로 10이 나옵니다.
- a : 두 클러스터 내에서 동일하게 같은 반인 사람은 슬비와 건주 한 쌍으로 1입니다.
- 이 둘은 x에서는 3반으로 같고 y에서는 2반으로 같았기에 a에 속합니다.
- b : 두 클러스터 내에서 동일하게 같은 반인 아닌 사람은 (의정, 슬기) == (1,2) (1,2)
- (의정, 슬비) = x (1,3) y (1,2) (의정, 건주) x = (1,3) , (1,2) ,(민찬, 슬비) x =(2,3) y = (1,2) (민찬, 건주) x = (2,3) y = (1,2)로 총 다섯 가지가 나옵니다.
- 위의 값들을 이용해서 rand index를 계산해보면 (1+5) / 10 = 0.6의 값이 나옵니다.

### rand index의 한계

- rand index는 클러스터링 평가 방법에서는 잘 사용되지 않습니다.
- 일단 rand index는 0부터 1까지의 값을 가지고 1이 가장 좋은 성능을 뜻합니다.
- rand index의 문제점은 무작위로 클러스터링을 한 경우에도 어느 정도 좋은 값이 나올 가능성이 높다는 점입니다. 즉 무작위 클러스터링에서 생기는 rand index의 기댓값이 너무 크다는 것입니다.
- 이를 해결하기 위해서 무작위 클러스터링에서 생기는 rand index의 기댓값을 원래의 값에서 빼서 기댓값과 분산을 재조정한 것이 adjusted rand index입니다.

### ARI

![image](https://user-images.githubusercontent.com/66999675/140068981-2e900273-4979-4fc8-b36e-3de816c87ec1.png)

이번엔 ARI입니다. 다시 한 번 ARI는 타깃 값을 아는 경우에 사용합니다.  
ARI 식은 다음과 같습니다. 크게 4부분으로 나눠집니다.

![image](https://user-images.githubusercontent.com/66999675/140069112-b3e11c67-c4d8-46c9-a05a-f08cab4f07dc.png)

먼저 ARI를 하기 위해서는 분할표가 필요합니다.  
먼저 분할표는 여러 개의 범주형 변수를 기준으로 관측치를 기록하는 표입니다.  
여기서는 n개의 원소를 가지는 집합 S를 2개의 부분 X와 Y로 나눕니다.  
그럼 왼쪽의 표처럼 X와 Y로 나눠지게 됩니다. 둘다 클러스터입니다.

여기서 nij는 X와 Y의 교집합 원소의 수를 의미합니다.
즉 예측에서는 Xi에 속하고 클러스터링 결과에서는 클러스터 Yj 속하는 데이터 수를 의미합니다.

![image](https://user-images.githubusercontent.com/66999675/140069269-99d7f0cb-a5cc-4409-bbc9-4b567f3eb920.png)

ARI를 이용해서 분할표를 그려봅니다.  
X, Y는 앞에서 rand index에서 사용한 값과 동일한 값입니다.

X는 두 개의 군집 값만 있기에 X1, X2만 있고 Y는 3개의 값이 있기에 Y1 ,Y2, Y3가 있습니다.  
먼저 X1과 Y1을 봅니다. 이뜻은 X에서는 1에서 속하고 Y에서도 1에서 속한 것의 개수입니다. X1에서 (1,1)이고 Y에서는 (1,2) 이므로 1의 값이 나옵니다.  
X1과 Y2도 마찬가지입니다. (1,1)과 (1,2) 이므로 1의 값이 나옵니다. X1 Y3는 (1,1)과 (1,2)이기에 3 값이 없기에 0이 나옵니다.
X2 Y1은 (2,2,2) (2,3,3) 이므로 1 X2 Y2는 (2,2,2) (2,3,3)이므로 1의 값이 나오고 X2 Y3는 2의 값이 나옵니다.

이제 앞에서 봤던 식을 이용해서 ARI를 계산하면 됩니다.

![image](https://user-images.githubusercontent.com/66999675/140069511-5c14fbc2-e76a-47c6-9940-5b5caf4ed586.png)

필요한 식들을 계산합니다. 이때 위의 사진에서 분수 형식으로 나와있는데 분수가 아니라 조합 구하는 공식입니다.

첫 번째만 보면 1C2 이기에 0 0C2이기에 0 2C2 이기에 1이 나옵니다.  
이제 계산을 하면 ARI이 0.09의 값이 나옵니다.

### NMI

![image](https://user-images.githubusercontent.com/66999675/140069651-db35b7b3-f628-4428-b727-0b5dbb90d571.png)

위쪽 식은 mutual information입니다. 이건 두 확률 변수간의 상호 의존성을 측정한 값입니다. 클러스터링 결과를 이산확률 변수로 가정을 합니다.

mutual information도 한계를 가집니다.  
일단 두 상호 의존성을 측정한 값이기에 확률변수가 서로 독립이면 mutual information의 값이 0이고 0이 최솟값입니다. 두 확률변수가 의존성이 강할수록 mutual information 증가합니다. 또한 클러스터 개수가 많아질수록 mutual information이 증가하므로 올바른 비교가 어렵습니다.  
따라서 ARI와 마찬가지로 경우에 따른 mutual information의 기댓값을 빼서 재조정한 것이 NMI입니다.

# 군집 평가 실수

![image](https://user-images.githubusercontent.com/66999675/140069960-ed8f4c00-5573-4716-82cb-fec6120bc90f.png)

- 군집을 평가할 때 ARI와 NMI와 같은 측정 도구를 사용하지 않고 accuracy_score를 사용하는 것입니다. 군집에서 중요한게 클러스터 레이블 그 자체로 의미가 있는 게 아니라 포인트들이 같은 클러스터에 속해 있는가가 중요합니다.
- 위의 코드를 보면 accuracy_score를 이용하면 cluster1,2의 값이 다다르기에 정확도가 0이 나옵니다. 하지만 이 클러스터는 2개로 완벽히 나눠져 있기에 ARI를 하면 1이 나오게 됩니다.

# 타깃 값 없이 군집 평가하기

군집 알고리즘을 적용할 때 비지도 학습이기에 결과와 비교할 타깃 값이 없습니다.  
타깃 값이 필요없는 군집용 지표로는 실루엣 계수가 있습니다.

### 실루엣 계수

- 실루엣 점수는 클러스터의 밀집 정도를 계산하고 높을수록 좋고 최댓값은 1이고 ?1일 때는 잘못도니 군집임을 나타내고 0은 중첩된 클러스터를 의미합니다.
- 하지만 계산을 할 때 밀집된 클러스터가 좋긴하지만 모양이 복잡할 때는 밀집도를 활용한 평가가 잘 맞지 않기에 실제로는 잘 작동하지 않습니다.
- 실루엣 계수를 이용하는 분석 방법이 실루엣 분석입니다. 실루엣 분석은 군집 간의 거리가 얼마나 효율적으로 분리 되어있는지를 나타냅니다. 여기서 효율적이란 의미는 다른 군집과의 거리는 떨어져 있고 동일 군집끼리의 데이터는 서로 가깝게 잘 뭉쳐 있다는 의미입니다.
- 군집화가 잘 되어 있을수록 개별 군집은 비슷한 정도의 여유 공간을 가지고 떨어져 있습니다.
- 실루엣 분석은 실루엣 계수를 기반으로 하고 실루엣 계수는 개별 데이터가 가지는 군집화 지표입니다. 즉 실루엣 계수는 해당 데이터가 같은 군집 내의 데이터와 얼마나 가깝게 군집화 되어있고 다른 군집에 있는 데이터와 얼마나 멀리 분리 되어 있는지를 나타냄니다.

![image](https://user-images.githubusercontent.com/66999675/140070387-d28d06f9-6df6-4f77-87e8-4c8b4c6c3ac3.png)

실루엣 계수를 구하는 방법에 대한 사진입니다. 먼저 특정 데이터 포인트를 하나 잡습니다. 그림에서는 네모 친 데이터 포인트입니다. 이 데이터 포인트의 실루엣 계수 값은 해당 데이터 포인트와 같은 군집 내에 있는 다른 데이터 포인트와의 거리를 평균한 값이 a(i)와 해당 데이터 포인트가 속하지 않은 군집 중 가장 가까운 군집과의 평균 거리 b(i)를 기반으로 계산합니다.

![image](https://user-images.githubusercontent.com/66999675/140070641-91e4f850-ccbc-4bdf-ad70-07976cb528de.png)

두 군집 간의 거리는 b(i) - a(i)이고 이 값을 정규화 하기 위해서 max(a,b) 값으로 나눕니다. 앞에서 얻은 값을 이용해서 계산하면 0.75가 나옵니다.

이때 이 실루엣 계수 값은 한 데이터 포인트에 대한 값입니다. 즉 I번째 데이터 포인트의 실루엣 계수 값을 위쪽 사진과 같이 정의합니다.

### 실루엣 계수 의미

실루엣 계수는 ?1 ~ 1 사이의 값을 가지고 1로 가까워 질수로 근처의 군집과 더 멀리 떨어져있다는 의미이고 0에 가까울수록 근처의 군집과 가까워진다는 의미입니다.

음수 값은 아예 다른 군집에 데이터 포인트가 할당된 것을 의미합니다.

scikit-learn의 silhouette_socre()는 전체 실루엣 계수의 평균값으로 0 ~ 1 사이의 값이고 1에 가까울수록 좋습니다.

### 실루엣 계수 이용 군집 평가

![image](https://user-images.githubusercontent.com/66999675/140070926-08561a67-f836-4d61-bd0f-23b7fbf24ab4.png)

다시 돌아와서 실루엣 계수를 이용해서 군집을 평가합니다.  
여기서 보면 DBSCAN의 군집이 KMeans 보다 더 잘 나눠져있는데 값은 더 작습니다. 이건 앞에서 봤듯이 실루엣 계수는 모양이 복잡할 때는 밀집도를 활용한 평가가 잘 들어맞지 않기 때문입니다. 즉 원형 클러스터에서 값이 더 높게 나옵니다. Kmeans가 더 원형에 가깝기 때문에 DBSCAN 보다 나온 것입니다.

마지막으로 군집 모델이 안정적이거나 실루엣 점수가 높더라고 군집에 어떤 유의미한 것이 있는지 또는 군집이 데이터의 흥미로운 면을 반영하고 있는지는 알 수 없습니다.
군집 알고리즘이 나누는 방식이 여러 개이기에 원하는 건지 확인하는 방법은 클러스터를 직접 확인하는 수 밖에 없습니다.

### 군집 알고리즘 요약

- K 평균, 병합 군집은 원하는 클러스터 개수 지정 가능 DBSCAN은 eps 매개변수를 사용해서 클러스터 크기를 간접적으로 조절할 수 있다.
- K 평균은 클러스터 중심을 사용해서 클러스터를 구분 DBSCAN은 클러스터에 할당되지 않은 잡음 포인트를 인식할 수 있고 클러스터의 개수를 자동으로 결정
- 병합 군집은 전체 데이터의 분할 계층도를 만들어주고 덴드로그램을 사용해서 손쉽게 확인할 수 있다.

# 마무리

모두 중간고사 끝나고 커리큘럼 하느라 고생하셨습니다. 열심히 놀고 다시 GDSC 활동에 집중 하도록 합시다!!!!                 


<br>
<br>
아닛 author에 저(=의정)가 추가가 안 되더라구요?!?! 그래서 여기에다 붙였어요ㅋㅋㅋㅋㅋㅋ                
![image](https://user-images.githubusercontent.com/63052097/140164751-56afb93f-28c7-49d3-a0c9-d745f9724e70.png)
