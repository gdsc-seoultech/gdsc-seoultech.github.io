---
layout: post
title: ML 5주차 비지도 학습(Scaler, PCA)
date: 2021-10-11
author: seongryool
description:
categories: ["ml"]
---

안녕하세요. ML 5주차 비지도 학습을 맡아서 발표하게 된 Core Member 위성률입니다.

이번에는 여러 가지 전처리 방법과 비지도 학습 알고리즘인 PCA에 대해서 공부를 했습니다.

# 비지도 학습

- ### 정의

  1. 지도 학습과 다르게 비지도 학습은 label 값이 없기에, 즉 알고 있는 출력값이나 정보 없이 학습 알고리즘을 가르쳐야 하는 모든 종류의 머신러닝
  2. 비지도 학습에서 학습 알고리즘은 입력 데이터만으로 데이터에서 지식을 추출 할 수 있어야한다.
  3. 예를 들어 네이버 블로그에 있는 글을 제목과 내용만 보고 학습을 한 뒤 학습한 내용을 기반으로 글을 분류해주는 알고리즘이 있습니다.

- ### 비지도 변환

  1. 비지도 변환 : 데이터를 새롭게 표현하여 사람이나 다른 머신러닝 알고리즘이 원래 데이터보다 쉽게 해석할 수 있도록 만드는 알고리즘.
  2. 차원 축소 : 특성이 많은 고차원 데이터를 특성의 수를 줄이면서 꼭 필요한 특징을 포함한 데이터로 표현하는 방법

- ### 군집 알고리즘

  1. 군집 알고리즘 : 데이터를 비슷한 것끼리 그룹으로 묶는 것
  2. 군집 알고리즘 예시  
     SNS에 업로드한 사진을 같은 사람이 찍힌 그룹으로 분류

- ### 비지도 학습 과제

1. 레이블이 없기 때문에 알고리즘이 제대로 학습 했는지 평가 하기가 어렵다.
2. 결과를 평가하기 위해서 직접 확인하는 것이 유일한 방법일때가 많음
3. 데이터를 잘 이해하기 위해 EDA 단계에서 많이 사용한다.
4. 지도 학습의 전처리 단계에서도 사용
5. 비지도 학습을 이용해서 데이터를 전처리 하고 지도 학습에서 사용

# 전처리

비지도 학습을 본격적으로 배우기전에 여러가지 전처리 방법에 대해서 알아보도록 하겠습니다.

전처리, 즉 스케일 메서드는 지도 정보를 사용하지 않기에 비지도 학습 입니다.  
![image](https://user-images.githubusercontent.com/66999675/136959992-924ce2d8-5326-4940-b7ee-d041352b139b.png)

총 6가지를 알아보겠습니다. StandardScaler, MinMaxScaler, RobustScaler, Normalizer, QuantileTransformer, PowerTransformer(box-cox, yeo-johnson)

### - StandardScaler

- StandardScaler는 각 특성의 평균을 0, 분산을 1로 변경하여 모든 특성이 같은 크기를 가진다.
- 최솟값과 최댓값 크기를 제한하지 않습니다.
- 이상치(아웃라이어)가 있다면 평균과 표준편차에 영향을 미쳐 변환된 데이터의 확산은 매우 달라지게 된다.  
  ![image](https://user-images.githubusercontent.com/66999675/136960578-e6656c8d-c432-4081-aa24-dd1be0f823ae.png)  
  위의 사진처럼 데이터에 평균을 빼주고 표준편차로 나눠주는 방식입니다. 아무래도 데이터의 평균과 표준편차를 이용하기에 아웃라이어가 있다면 그 값으로 인해 평균과 표준편차가 영향을 많이 받아서 데이터의 확산이 달라지게 됩니다.  
  ![image](https://user-images.githubusercontent.com/66999675/136960769-c1c0987e-f55f-43e1-87c5-43a8ac4cd568.png)  
   StandardScaler를 적용하면 위의 사진처럼 됩니다.

### - RobustScaler

- 특성들이 같은 스케일을 갖게 된다는 점에서는 StandardScaler와 비슷
- 평균과 분산 대신 중간 값과 사분위 값을 사용
- 아웃라이어의 영향을 최소화한 기법이다.  
  ![image](https://user-images.githubusercontent.com/66999675/136960916-683ccf9d-7d9e-476d-9130-143d4fa69ee7.png)  
  데이터에 중간값(q2)를 빼주고 q3(제3 분위수) - q1(제1 사분위) 값으로 나눠줍니다.
  분위를 이용하기에 아웃라이어의 영향을 최소화합니다. 이 방식을 IQR을 이용한 아웃라이어 제거 방식과 비슷합니다.

  ![image](https://user-images.githubusercontent.com/66999675/136961106-8593e50c-638d-4c5e-a624-3ba441fb4158.png)  
  Robust를 적용하면 위의 사진과 같이 분포를 가지게 됩니다.

### - MinMaxScaler

- 최솟값과 최댓값을 이용
- 모든 특성이 0과 1사이에 위치하도록 데이터 변경

![image](https://user-images.githubusercontent.com/66999675/136961299-2771498f-14df-41a8-9515-0d1a9da72622.png)

데이터에 최솟값을 빼고 최댓값 - 최솟값으로 나눠주는 스케일링 방식입니다.

![image](https://user-images.githubusercontent.com/66999675/136961371-1ec421a1-9a1a-45a5-95f3-bf1e4e096ae8.png)  
MinMaxScaler를 적용하면 위의 사진과 같은 분포를 가지게 됩니다.

### - Normalizer

- 위의 세 개와는 다른 스케일 조정 기법
- Standard, Robust, MinMaxScaler는 각 열의 통계치 이용
- Normalizer는 행마다 각기 정규화된다.
- 한 행의 모든 특성들 사이의 거리가 1이 되도록 스케일링
- 특성 벡터의 유클리디안 길이가 1이 되도록 데이터 포인트를 조정
- 지름이 1인 원에 데이터 포인트를 투영한다.
- 각 데이터 포인트가 다른 비율(길이에 반비례)로 스케일이 조정된다는 뜻
- 이러한 정규화는 특성 벡터의 길이는 상관없고 데이터의 방향만이 중요할 때 많이 사용

### Normalization, Standardization, Regularizatoin

Normalization, Standardization, Regularizatoin 공부를 하면서 이런 말들이 참 많이 나옵니다.  
보통은 다 똑같은 단어로 번역을 하는데 엄밀히 따지면 다 다른 의미입니다.

- Standardization
  - 값의 범위를 평균0, 분산 1이 되도록 변환
  - 학습 전에 scaling
  - StandardScaler
- Normalization
  - 값의 범위를 0 ~ 1 사이의 값으로 바꾸는 것
  - 학습 전에 scaling
- MinMaxScaler
  - Regularization
  - weight를 조정하는데 규제를 거는 기법
  - overfitting 막기 위해 사용
  - L1, L2 규제가 대표적인 예시

### Code 사용법

![image](https://user-images.githubusercontent.com/66999675/136961743-47cc55db-9fdb-4fc9-ad28-35cf484be5c6.png)

위에서 배운 Scaler들을 import할 때는 아래의 코드를 사용하면 됩니다.

```python
from sklearn.preprocessing import MinMaxScaler
```

먼저 import하고 Scaler를 만든 뒤에 fit을 한 뒤 transform을 하면 됩니다.

```python
  scaler = MinMaxScaler()
  scaler.fit(x_train)
  x_train_scaler = scaler.transform(x_train)
```

- fit 호출 시 x_train만 넘겨주면 된다.
- fit 훈련 세트에 있는 특성마다 최솟값과 최댓값을 계산
- 실제로 훈련된 데이터의 스케일을 조정하려면 transform 메서드 사용

### QuantileTransformer

- 기본적으로 1000개의 분위를 사용해서 데이터를 균등하게 분포시킨다.
- outlier에 민감하지 않고 전체 데이터를 0과 1사이로 압축
- n_quantiles을 이용해서 분위 수 조절 가능

![image](https://user-images.githubusercontent.com/66999675/136962106-94dfc777-e8e4-4596-bec9-7b28e672d01c.png)  
이러한 원본 데이터가 있다고 했을 때 QuantileTransformer를 적용 시키면  
아래와 같은 분포를 가지게 됩니다.

![image](https://user-images.githubusercontent.com/66999675/136962361-05216dad-8e0f-4955-9822-5d0088dd77c7.png)  
모든 데이터가 0 ~ 1 사이로 압축된 걸 볼 수 있습니다.

```python
from sklearn.preprocessing import QuantileTransformer
scaler = QuantileTransformer()
scaler.fit(x_train)
x_train_scaler = scaler.transform(x_train)
```

위의 코드와 같은 형식으로 사용하면 됩니다.

### PowerTransformer

- 데이터 특성별로 정규분포 형태에 가깝도록 변환해주는 PowerTransformer
- method 매개변수 : ‘yeo-johnson’, ‘box-cox’ 알고리즘 지정 가능

실전에서는 데이터셋마다 어떤 변환이 정규분포에 가깝게 변환할 지 사전에 알기 어렵기에 변환기의 결과를 히스토그램으로 확인해보는 것이 좋습니다.

# 훈련 데이터와 테스트 데이터의 스케일 같은 방법 조정

정말 중요합니다. 지도 학습 모델에서 테스트 세트를 사용하려면 훈련 세트와 테스트 세트에 같은 변환을 적용해야 합니다!!!!!!!!!!!!!!!!!!!!!!!!!!!! 뭐라고? 같은 변환!!!!!!!!!!!!!!!!!!!!!!!!  
또한 모델에 절대로 테스트 데이터를 유출 시키면 안됩니다!!!!!!!!!!!!!!!!!!!!!!!!!

![image](https://user-images.githubusercontent.com/66999675/136962847-9f2de3f1-b8ed-4d8f-8e36-cc3426e4bf41.png)  
먼저 make_blobs을 이용해서 임의 데이터을 만들어줍니다.

scaler를 만들고 train과 test를 train 데이터로 fit 시킨 scaler로 transform 해줍니다.

![image](https://user-images.githubusercontent.com/66999675/136963064-ccb81c48-c5d9-4dff-a600-7d585b3618ac.png)

지금 이건 정상적으로 transform 시킨겁니다.

![image](https://user-images.githubusercontent.com/66999675/136963216-e9698a02-a5a2-45d0-b6e5-51e405aa8579.png)  
이번엔 새로운 scaler를 만들어서 test 데이터만 따로 test 데이터로 fit 시킨 scaler를 이용해서 전처리를 해줍니다. 이건 잘못된 겁니다!!!! 잘못된 거!!!! 즉 test data만 잘못 조정한 것입니다.

![image](https://user-images.githubusercontent.com/66999675/136964384-22f7cd52-42ba-4678-82fd-28ba7de84597.png)  
결과를 보면 알 수 있습니다. 맨 왼쪽이 원본 데이터입니다. 두 번째 데이터가 정상적으로 스케일 조정된 데이터입니다. 원본 데이터와 비교 했을 때 특성 0, 특성 1의 값의 범위만 다를 뿐 똑같은 분포를 가지고 있습니다.

잘못 조정된 데이터를 보면 여기서는 testdata만 잘못 조정했기에 테스트 데이터의 위치를 보면 원본 데이터와 다른 양상을 보이는 걸 알 수 있습니다. 이런 이유로 꼭 원본 데이터의 분포를 유지 해주기 위해서 train과 test는 같은 스케일을 적용해줘야됩니다.

### fit_tranform

```python
  from sklearn.preprocessing import StandardScaler
  scaler = StandardScaler()
  x_scaled = scaler.fit(x_train).transform(x_train)
  x_scaled_d = scaler.fit_transform(x_train)
```

보통 fit을 한 후 transform을 적용합니다. 이러한 번거로움을 위해서 transform 메서드를 가진 모델은 fit_transform 메서드를 제공해서 한 번에 할 수 있게 합니다.  
여기서 중요한건 테스트 세트에서는 fit_transform 메서드를 사용하면 test_data로 다시 fit을 시키기에 훈련 세트로 fit한 내용이 모두 지워지기 때문에 test data에는 fit_transform을 사용하면 안되고 반드시 transform()만 사용해야됩니다.

### 지도 학습에서 데이터 전처리 효과

![image](https://user-images.githubusercontent.com/66999675/136967640-8aa7106e-21bb-4dd8-949c-34dcf7a0269a.png)  
 먼저 데이터 전처리를 하지않고 SVM을 만들어서 정확도를 봅니다. 약 63%가 나옵니다.

![image](https://user-images.githubusercontent.com/66999675/136967743-366e27f6-8785-4a68-b272-1f1d97d78de9.png)  
 하지만 scaler를 적용한 뒤 다시 정확도를 계산하면 95%로 엄청나게 증가합니다!

![image](https://user-images.githubusercontent.com/66999675/136967875-b1c3a177-7ef3-444c-8203-a345024bfe82.png)  
 또한 train과 test로 나눈 뒤 각각 train과 test에게 transform을 적용해도 되지만 처음부터 모든 데이터에 전처리를 진행한 뒤 train과 test로 나눠도 똑같은 효과를 가지게 됩니다. 이렇게 해서 정확도를 구하면 96%의 결과를 가지게 됩니다!

# PCA

대망의 PCA입니다.
PCA : Principal Component Analysis의 줄임말입니다.  
PCA는 특성들이 통계적으로 상관관계가 없도록 데이터셋을 회전시키는 기술입니다.  
또한 회전한 뒤에 데이터를 설명하는 데 얼마나 중요하냐에 따라 종종 새로운 특성 중 일부만 선택한다.  
PCA는 차원 축소를 진행해 많은 feature로 구성된 다차원 데이터 셋의 차원을 축소하여 불필요한 feature를 제거해서 새로운 데이터 셋을 생성하는 방법입니다.

![image](https://user-images.githubusercontent.com/66999675/136968524-d037b98a-25be-4843-a946-c857c11c61fe.png)  
사진 출처 : https://jarikki.tistory.com/23  
PCA에서 2차원 데이터셋을 1차원으로 줄이는 방법은 x,y 좌표로 구성된 2차원 데이터를 1차원 선으로 projection 하는 것입니다. 여기서 중요한 건 어떻게 데이터의 유실 없이 사영할 수 있는가 입니다. 그때 사용되는게 데이터의 분산이 가장 넓은 지역에 직선을 만들어 모든 좌표를 사영 시키는 것입니다.
![image](https://user-images.githubusercontent.com/66999675/136970262-fca349cd-d75b-44aa-989a-e2b65019f5e3.png)  
사진 출처 : https://jarikki.tistory.com/23  
위의 사진에서도 볼 수 있듯이 가장 분산이 넓은 위치의 직선에 좌표를 사영하는 이유는 사영된 좌표값의 중복을 최소화하여 데이터의 유실을 줄이기 위해서입니다. 왼쪽 사진을 보면 단순히 x,y 축에 사영을 하면 각 좌표들이 직선에 중첩되어 표시가 됩니다. 오른쪽 사진을 보면 수 많은 직선 중 데이터 중복이 적은 직선은 데이터 간의 분산이 가장 큰 위치의 직선입니다. 이러한 직선을 주성분이라고 합니다.

PCA에 대해서 좀 더 알아보도록 하겠습니다. 사실 위의 부분만 이해해도 PCA는 많이 이해했다고 볼 수 있습니다.
![image](https://user-images.githubusercontent.com/66999675/136970966-fdb8a40f-b8fe-4daf-8c48-c579ab5eb79f.png)

- 원본 데이터 포인트를 색으로 구분해 표시했습니다.
- 성분 1 : 분산이 가장 큰 방향이 방향입니다.
  - 성분 1 방향이 데이터에서 가장 많은 정보를 담고 있는 방향
  - 특성들의 상관관계가 가장 큰 방향
- 성분 2 : 성분1과 직각인 방향 중 성분1이 설명 하지 못 한 곳 중 가장 많은 정보를 담은 방향
  - 이차원에서는 직각 방향이 하나이지만 삼차원 이상에서부터는 무수히 많은 방향이 나옵니다.
  - 그렇기에 화살표의 방향은 무의미합니다.
- 성분1과 성분2의 방향을 데이터에 있는 주된 분산의 방향이라고 해서 주성분이라고 합니다.
  - 주성분은 원본 특성 개수만큼 있습니다.

![image](https://user-images.githubusercontent.com/66999675/136971605-8538923e-6648-430e-81b0-77f1a08eddb6.png)  
사진 출처 : https://darkpgmr.tistory.com/110  
이렇게 3차원이면 3개의 특성 개수가 있습니다. n차원에 PCA를 적용하면 n차원으로 되기에 단순히 PCA를 적용하는 것만으론 차원 축소가 되지 않습니다.  
여기서 가장 중요한 성분 축만 남기고 아닌 축들을 버리게 되면 차원 축소가 됩니다.

# PCA에서 분산이 가장 큰 방향의 의미

### - 정보

일단 그래프에서 정보는 x, y 축의 좌표 정보를 의미합니다.  
모든 점들에 대한 x, y축의 좌표를 알면 모든 정보를 알 수 있고
축소된 1차원에서의 좌표만으로 2차원의 좌표를 그대로 복원할 수 있다면 100% 정보를 가지고 있는 것이라고 생각할 수 있습니다.

### - 분산

분산은 각 점들이 평균(중심)으로부터 떨어져 있는 정도를 의미합니다, 즉 분산이 클수록 점들이 축상에 넓게 퍼져 있습니다.

### 사용할 데이터

먼저 이 설명을 위해서 사용할 데이터 입니다.  
original 데이터로 가장 분산이 큰 PC1과 PC2를 주성분으로 가지고 있습니다.

![image](https://user-images.githubusercontent.com/66999675/136972630-49f816f8-98a2-4999-8ece-0ee7b55d4cdd.png)

사진 출처 : https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=hancury&logNo=221215245092

### PCA 복원

![image](https://user-images.githubusercontent.com/66999675/136972727-8b77ac71-8da8-4678-aa43-d6377a4ab5df.png)
사진 출처 : https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=hancury&logNo=221215245092

PC1은 original data에서 특정 각도로 회전시켜 본 축입니다. PC2도 마찬가지입니다.  
즉 PC1에 찍힌 점들을 역으로 똑같은 각도만큼 회전시키면 원래 데이터로 복원이 가능합니다.

![image](https://user-images.githubusercontent.com/66999675/136973161-c0928da1-ecda-41e9-90f6-9847faf935c2.png)

똑같은 각도만큼 회전을 시키면 데이터가 복원이 됩니다. 하지만 회전 후의 모습 1차원 정보만 있기에 복원을 한다고 해도 2차원이 100% 복원되지 않습니다. 그래도 원본 데이터와 어느 정도 닮아 있는 걸 볼 수 있습니다.  
![image](https://user-images.githubusercontent.com/66999675/136973295-574de5d4-6b7e-41ea-bf6e-daffdb9b90c3.png)

PC2 또한 마찬가지로 회전을 해서 복원 시킬 수 있습니다. 하지만 사진을 보면 알 수 있듯이 PC1이 더 잘 복원한 걸 볼 수 있습니다.

이제 여기서 분산이 크다는 건

- 원본 데이터의 위치 정보를 더 잘 복원해낸다는 것
- 복원을 잘한다는 건 정보를 더 많이 가지고 있다.
- 분산이 크다는 것은 원본의 정보를 더 많이 가지고 있다고 볼 수 있습니다.

# PCA 이용 시각화

PCA는 고차원 데이터셋의 시각화에 널리 이용됩니다.  
유방암 데이터셋에는 특성 30개와 클래스 양성과 악성 2개가 있습니다.  
시각화를 할 때는 양성과 악성 두 클래스에 대해 각 특성의 히스토그램을 그림을 그리면 됩니다.  
하지만 특성이 30개 이니 2개씩 짝지으면 30C2 = 435개가 나와서 굉장히 비효율적으로 됩니다. 그렇기에 특성 30개에 대해서 양성과 악성으로 그림을 그립니다.

![image](https://user-images.githubusercontent.com/66999675/136973788-0b529fe4-a47e-4f10-96f4-14cb3d667872.png)  
그림을 그리면 이렇게 특성에 대해서 악성과 양성의 분포를 볼 수 있습니다.

![image](https://user-images.githubusercontent.com/66999675/136973985-ebe027b5-7bf8-47f0-865b-980766907880.png)

초록색 양성, 푸른색 악성입니다.  
위의 그림은 특성들이 클래스별로 어떻게 분포되어 있는지를 알려주고 어떤 특성이 양성과 악성 샘플을 구분하는데 더 좋은지 가늠할 수 있습니다.  
여기서 smooth 히스토그램에서는 양성과 악성이 거의 겹쳐져 있기에 양성과 악성을 구별할 수 있는 좋은 특성이라고 얘기할 수 없습니다.

![image](https://user-images.githubusercontent.com/66999675/136974161-ce9ee750-ad01-4063-a6d6-a845075ebd22.png)

mean concave points는 히스토그램에서 양성과 악성 확실히 구분되어 매우 유용한 특성이라고 할 수 있습니다.  
하지만 이런 히스토그램을 이용한 방법은 특성 간의 상호작용(상관관계)이나 이 상호작용이 클래스와 어떤 관련이 있는지는 전혀 알려주지 못 합니다.  
이럴 때는 PCA를 사용하면 주요 상호작용을 찾아낼 수 있어 더 나은 그림을 만들 수 있습니다.

### 코드

![image](https://user-images.githubusercontent.com/66999675/136974337-caf2d783-3696-4119-9598-47a1f47e1270.png)

PCA를 적용하기 전에 스케일러를 이용해 각 특성의 분산이 1이 되도록 조정합니다.  
PCA에서는 특성의 스케일이 서로 다르면 올바른 주성분 방향을 찾을 수 없기에 PCA를 사용할 때는 표준값으로 바꿔야합니다. 즉 꼭 스케일러를 적용해줘야합니다.

![image](https://user-images.githubusercontent.com/66999675/136974602-25e27123-6011-4f4a-a86c-4a7a30295784.png)

```python
  from sklearn.decomposition import PCA
```

PCA는 decomposition에서 import 하면 됩니다.  
fit을 이용해서 주성분을 찾고, transform 메서드를 호출해 데이터를 회전시키고 차원을 축소 시킵니다.  
기본 값일 때 PCA는 데이터를 회전만 시키고 모든 주성분을 유지합니다.  
PCA에서 데이터의 차원을 줄이려면 n_components를 이용해서 조절하면 됩니다.

![image](https://user-images.githubusercontent.com/66999675/136974807-6d070ab8-ee02-4f62-80bb-2ed610b56ad0.png)

- PCA는 비지도 학습 이기에 회전축을 찾을 때 어떤 클래스 정보도 사용하지 않습니다.
  - 데이터에 있는 상관관계만을 고려
- 위의 산점도는 첫 번째, 두 번째 주성분을 사용 클래스 정보(악성, 양성)을 이용해서 모양을 구분합니다.
- PCA 단점은 그래프의 두 축을 해석하기가 쉽지 않다.
  - 주성분은 원본 데이터에 있는 어떤 방향에 대응하는 여러 특성이 조합된 형태이기 때문입니다.

## 마무리

이번에는 비지도 학습인 PCA에 대해서 배워보았습니다. PCA 자체를 이해하기 위해서는 선형대수학이 많이 필요합니다. 이번 시간에는 선형대수학 지식을 사용하지 않고 직관적으로 이해해보려고 노력해봤습니다.  
 또한 저번 주 과제가 좀 많이 있긴 했습니다만 꼭 하면 좋을 것 같아서 과제를 많이 내보았습니다. 앞으로는 이렇게 많이 없을겁니다^^ ㅎㅎ.  
 모두 이번 주 커리큘럼 진행하느라 고생하셨고 시험 잘 보고 2주 쉬고 다다다음주에 보기로 해요!!  
 모두 시험 기간 화이팅!!
