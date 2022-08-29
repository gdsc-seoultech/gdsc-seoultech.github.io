---
layout: post
title: 7주차 ML 데이터 표현과 특성 공학(1)
data: 2021-11-09 00:00:00 +0900
author: goldtan
categories: ["1st_term"]
tags: ["ml"]
---

# 4 데이터 표현과 특성 공학
## 4.1 범주형 변수
<br>
책에서는 특성을 크게 연속형과 이산형으로 나누고, 이산형을 범주형 특성과 동일한 표현으로 사용하지만, 조금 더 자세히 표현한다면 다음과 같이 나눌 수 있을 것 같습니다.<br>
<br>

```
범주형(Categorical)
    ㄴ순서형(Ordinal) : 범주에 순서가 있는 데이터 (Ex. 만족도, 등급)
    ㄴ명목형(Nominal) : 단순히 분류가 목적인 데이터 (Ex. 성별)

수치형(Numercial)
    ㄴ이산형(Discrete) : 이산적인 값을 갖는 데이터 (Ex. 횟수)
    ㄴ연속형(Continuous) : 연속적인 값을 갖는 데이터 (Ex. 신장, 체중)
```


<br>
예제에 사용할 데이터셋은 adult 데이터셋이고, 로지스틱 회귀 기법을 사용할 예정입니다.<br>
여기에 문제점이 하나 있는데, 범주형 변수의 경우 문자열 등으로 되어 있기 때문에 이것을 바로 모델에 적용시킬 수 없다는 것입니다.<br>
따라서 우리는 이를 모델에 적용시키기 위해 형태를 변환시키는 과정을 거쳐야 합니다.<br>
<br>

![image](https://user-images.githubusercontent.com/83542989/141668924-38b73e11-0f13-4708-ac23-00a2a743cb81.png)

<br>

---
<br>

### 4.1.1 원-핫-인코딩 (가변수)

<br>
<p>
이럴 때, 사용되는 대표적인 방법이 원-핫-인코딩입니다.<br>
원-핫-인코딩은 범주 집합의 크기가 차원인 벡터를 만들고, 해당하는 범주의 인덱스에는 1을 부여하고 나머지는 0을 부여하는 표현 방식입니다.<br>
<br>
</p>

![one_hot](https://user-images.githubusercontent.com/83542989/141668865-b9d6825c-4fb8-4fd2-8d4c-a485177720f3.png)

<br>
<p>
원-핫-인코딩을 할 때 주의할 점이 있는데, 범주형 특성에 해당하는 열에 어떤 값이 있는지 모르기 때문에 value_counts 함수를 통해 어떤 고유한 값들이 포함되어 있는지 확인해야만 합니다.<br>
<br>

<img width="1439" alt="value_counts" src="https://user-images.githubusercontent.com/83542989/141668867-4514afe6-ca67-4fc1-818b-e63cc0f70166.png">

<br>
이런 과정을 거치게 되면 같은 범주지만 이름이 다르게 분류되어 있거나 범주에 해당하지 않는 값이 들어가는 상황을 방지할 수 있습니다.<br>
범주형 특성에 해당하는 열들의 고유한 값들을 확인한 후, get_dummies 함수를 사용하게 되면 숫자형 특성을 제외하고는 모두 새로운 특성으로 확장되는 것을 확인할 수 있습니다.<br>
</p>
<br>

![get_dummies](https://user-images.githubusercontent.com/83542989/141668864-c56f23b2-0769-489e-a115-2696319f1337.png)


<br>

---

<br>

### 4.1.2 숫자로 표현된 범주형 특성 

<br>
<p>
방금 사용한 adult 데이터셋에서는 범주형 특성들이 모두 문자열로 되어 있었지만, 범주형 특성이 숫자로 표현되어 있을 수도 있습니다.<br>
하지만 get_dummies 함수는 위에 설명한 것과 같이 문자열 특성만 인코딩이 되기 때문에, 숫자 특성을 가변수로 만들고 싶다면 인코딩하고 싶은 열을 직접 명시적으로 입력해야 합니다.
</p>
<br>

![image](https://user-images.githubusercontent.com/83542989/141668976-afd25312-0d9e-43c3-8416-be4efbbfbddd.png)


<br>

---

<br>

## 4.2 OneHotEncoder와 ColumnTransformer

<br>
<p>
이전까지는 Pandas에서 제공하는 get_dummies 함수를 사용하여, 원-핫-인코딩을 수행하였지만, scikit-learn에서도 원-핫-인코딩을 수행할 수 있습니다.<br>
바로 OneHotEncoder를 사용하면 되는데, OneHotEncoder는 해당하는 데이터셋에 있는 모든 열을 다 범주형 특성이라고 가정하기 때문에 이를 바로 데이터셋에 적용할 수는 없습니다.<br>
이 문제를 해결하기 위해 우리는 ColumTransformer를 사용합니다.<br>
ColumnTransformer의 Input은 "각 변환의 이름", "어떤 변환을 적용시키는지", "변환을 적용시킬 열"입니다.<br>
이렇게 ColumnTransformer를 사용하게 되면 아래와 같이 숫자형 특성에는 Scaling을, 범주형 특성에는 원-핫-인코딩을 한 번에 수행할 수 있습니다.
</p>
<br>

![image](https://user-images.githubusercontent.com/83542989/141668987-217e0cd1-a5b2-473d-a615-624525846032.png)


<br>

---

<br>

## 4.3 make_column_transformer
<br>
<p>
ColumnTransformer에서는 이후에 ColumnTransformer 안의 단계까 어떻게 구성되어 있는지 접근하기 위해, 변환의 이름이 필요했었습니다.<br>
하지만 make_column_transformer를 사용하게 되면 변환을 시킬 때 사용하는 Class에 따라 이름을 자동으로 설정하게 되기 때문에 이름도 지정하지 않아도 됩니다.
</p>
<br>

![image](https://user-images.githubusercontent.com/83542989/141668994-7b453c9a-f56d-4d5d-92a9-f661c53dbf81.png)


<br>

---
---
<br>

## 4.4 구간 분할, 이산화 그리고 선형 모델, 트리 모델
<br>
<p>
이전까지는 범주형 특성들을 모델에 적용시키기 위한 방법에 대하여 살펴보았습니다.<br>
특성의 표현 방식에 따라서 성능 또한 크게 변하는데, 이는 모델에 따라 다릅니다.<br>
연속형 특성의 성능을 높이는 방법 중 하나는 구간을 나눠 여러 특성으로 나누는 것입니다.<br>

</p>
<br>

![image](https://user-images.githubusercontent.com/83542989/141669004-0879e13c-7370-48bb-81b9-78b546febd28.png)

<br>
<p>
왼쪽 그림과 오른쪽 그림을 비교하여 보았을 때, 오른쪽 그림은 input feature를 10개의 구간으로 분할한 것입니다.<br>
구간 분할을 하였을 때, Linear Regression은 훨씬 유연해졌지만 Decision Tree는 오히려 덜 유연해진 것을 확인할 수 있습니다.<br>
Decision Tree의 경우에는 기존의 왼쪽 그림에서도 계단과 같은 형태로 예측을 하게 되는데, 이는 DecisionTreeRegressor에서 결과는 특정 범위 안에서 특정 값으로 지정되기 때문이며 이미 가장 좋은 예측을 하기 위해 구간 분할을 하고 있었다고도 볼 수 있습니다.
</p>
<br>

---
<br>

## 4.5 상호작용과 다항식
<br>
<p>
특성을 풍부하게 나타내는 또 하나의 방법은 바로 상호작용 항과 다항식 항을 추가하는 것입니다.<br>
상호작용 항은 각각의 독립변수를 곱한 형태의 항을 의미합니다<br>
</p>
<br>

![image](https://user-images.githubusercontent.com/83542989/141669007-bfde3c81-1b28-4ec0-a76e-9f81aabf82af.png)

<br>
<p>
왼쪽 그림은 구간으로 분할된 데이터에 원래 특성을 "더한" 것인데, 기울기가 반영이 되어 있지만 모두 동일한 기울기의 형태로 나타나기 때문에 특성을 풍부하게 나타내기에 적합하지 않습니다.<br>
반면, 오른쪽 그림은 구간으로 분할된 데이터에 원래 특성을 '곱한' 것으로
각각의 구간마다 기울기가 다른 것을 확인할 수 있고 훨씬 특정 구간을 잘 표현하고 있다고 할 수 있습니다.
</p>
<br>

![image](https://user-images.githubusercontent.com/83542989/141669018-68a727fd-51b7-4140-a767-e922c944112b.png)

<br>
<p>
왼쪽 그림과 같이 다항식 항을 추가하여도 모델을 훨씬 잘 표현할 수 있게 됩니다.<br>
주의해야 하는 부분은 곡선 자체는 매우 부드럽지만, 데이터가 부족한 양 극단에서 매우 크게 움직이는 것을 확인할 수 있습니다.<br>
그리고 이러한 다항식을 추가하는 방식은 SVM에서와 같이 실제로 추가하기에는 어려움이 있을 수 있기 때문에, 오른쪽과 같이 kernel trick을 이용하여도 비슷한 효과를 얻을 수 있습니다.<br>

</p>
<br>
<p>
하지만 위에서 이야기한 것과 같이 모델마다 표현 방식으로 인해 성능이 변하는 정도와 방향이 다르기 때문에 무조건적으로 좋다고는 할 수 없습니다.
아래의 그림과 같이 RidgeRegression에서는 상호작용 특성 추가하기 전 모델이 단순하여 상호작용 특성을 추가하는 것이 성능 향상으로 이어졌지만, 이미 충분히 복잡도가 높았던 RandomForesstRegressor에서는 오히려 성능이 감소하는 것을 볼 수 있습니다.
</p>
<br>

![image](https://user-images.githubusercontent.com/83542989/141669027-a3b950b4-5489-4345-a009-4c8c68500ff0.png)

<br>

---
---
---
<br>

# 마무리

다같이 만나서 진행한 발표라 훨씬 재밌었던 것 같습니다  <br>
앞으로도 자주 볼 수 있었으면 좋겠습니다 !!  <br>
### GDSC 화이팅 ! ML 화이팅 !