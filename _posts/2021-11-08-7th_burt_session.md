---
layout: post
title:   일곱번째 세션 - 나의 말을 들어BERT
date:   2021-11-08 17:36:17
author: juijeong8324
categories: ["seminar"]
---

# Preview
<img width="300"  src="https://user-images.githubusercontent.com/63052097/140879992-9191ecdc-ea52-4b19-bf76-c94080aa20e2.png" style="margin-top: 10px;">      

안녕하세요! GDSC-seoultech ML CORE 전의정입니다!       
11월 9일! 일곱번째 세미나 **나의 말을 들어BERT**가 진행되었습니다!!      
NLP 분야의 대표, 인기 알고리즘(혹은 모델) BERT에 대해서 알아보는 시간을 가졌는데요,
BERT가 무엇이며, 어디에 활용되고, 어떤 원리를 가지고 있는지 간단하게 알아보았습니다!      
BERT에 대해서 더 자세하게 알고 싶으신 분들은 참고링크를 참고해주세요!



# Agenda

0. BERT가 무엇이냐면 
1. BERT가 해결할 수 있는 문제와 활용사례
2. BERT의 원리 
3. BERT를 직접 사용해보도록 하자^^ 
4. 참고링크


<br>

## 0️⃣ BERT가 무엇이냐면...
> BERT에 대해서 간단하게 알아볼까요?

<img width="700"  src="https://user-images.githubusercontent.com/63052097/141141895-ef7c17ed-f9ec-4fc1-996a-f164dac20f0c.png" style="margin-top: 10px;">    
BERT는 구글이 2018년도 말에 공개한 **인공지능(AI) 언어모델(혹은 알고리즘)**입니다!           

<img width="400"  src="https://user-images.githubusercontent.com/63052097/141142314-80134417-d1fd-41f7-bea5-dbf66e914bb1.png" style="margin-top: 10px;">    

NLP(Natural Language Processing) 즉 **자연어 처리 분야**에서 많이 쓰이는 대표, 인기 TOP 언어 모델(알고리즘) 입니다.         

<br>

<img width="500"  src="https://user-images.githubusercontent.com/63052097/141144042-00980e33-cbd6-442f-9cf5-b2f660775f9c.png" style="margin-top: 10px;">        

참고로 BERT라는 이름은 *"세서미 스트리트"*라는 미국 인형극의 캐릭터 이름을 따온겁니다. 저 <span style="color:red">빨간색 원</span>이 가리키는 캐릭터가 BERT랍니다!          

<br>
<br>

## 1️⃣ BERT가 해결할 수 있는 문제와 활용사례
> 귀여운 이름과 외모와 달리 내용은 귀엽지 않은 BERT.. BERT가 해결할 수 있는 문제들, 활용 사례들을 알아가면서 친해져봐요~                

<img width="600"  src="https://user-images.githubusercontent.com/63052097/141144259-02225b75-5fbd-4dc6-a831-1d7532e4db15.png" style="margin-top: 10px;">                

BERT는 **NLP의 대표적인 11개 문제**에 모두 뛰어난 성능을 가지고 있다! 라고 논문에 쓰여져 있는데요! 우리는 이 모델이 쓰일 수 있는 11가지의 문제의 유형을 대표적으로 4가지로 딱 정리해서 알아보았습니다!       


<br>

### 해결할 수 있는 문제 4가지
**1) 문장 한 개 분류** 
<img width="600"  src="https://user-images.githubusercontent.com/63052097/141144726-324ce831-2356-4a89-b4f2-eda62e928f40.png" style="margin-top: 10px;">    

- **문장이 주어졌을 때 어떠한 라벨인지 예측**하는 문제입니다.       
- 예시를 보면 한 문장이 긍정을 띠는지 부정을 띠는지 라벨을 통해 예측을 하고 있습니다       
- 스팸 메일 찾기, 문서 카테고리 분류, 감성 분류 등이 이 부류의 문제에 속합니다.         
           
<br>

**2) 문장 두 개의 관계 분류(Sentence Pair Classification)**
<img width="500"  src="https://user-images.githubusercontent.com/63052097/141145079-45ce4a28-d1e5-4558-b1bc-299c6d453f91.png" style="margin-top: 10px;">        

- **문장 두 개가 주어졌을 때, 라벨을 예측하는 문제**입니다.     
-  대표적인 문제는 **의역 예측(paraphrase detection)**입니다. 예시에 나온 두 문장처럼 다른 단어가 쓰였지만 같은 뜻을 가지고 있는지 아닌지 예측할 수 있습니다.  
-  혹은 두 문장이 주어졌을 때 서로의 주장을 보완하는지(entailment), 상충하는지(contradiction), 중립(neutral)인지 예측할 수도 있습니다.          

<br>

**3) 문장 내 단어 라벨링(Single Sentence Tagging Task)**
<img width="600"  src="https://user-images.githubusercontent.com/63052097/141145161-290fba71-1be8-40d0-b003-68066e732ed6.png" style="margin-top: 10px;">        

- **한 문장 내 들어있는 단어에 대한 레이블을 예측**하는 문제입니다.     
- 대표적인 문제로 **개체명 인식(named entity recognition)**입니다. 아래 예시와 같이 문장이 주어졌을 때, 도널드 - 이름 시작 / 트럼프 - 이름 중간 / 주니어 - 이름 끝이라고 예측을 하게 됩니다.
- 또다른 대표적인 문제는 **품사 태깅(Part-of-Speech Tagging)**이라고 해서 문장의 문법품사를 예측하는 문제입니다.            

<br>

**4) 묻고 답하기(Quesiton & Answering)**
<img width="500"  src="https://user-images.githubusercontent.com/63052097/141145276-e27e60f6-1a2b-45b3-8c41-427eb5dd0f3e.png" style="margin-top: 10px;">

- BERT에게 **질문과 본문이 주어졌을 때, 본문 속에 답이 있는 부분을 예측**합니다. 
- 예를 들어, "박지성이 뛴 EPL 클럽은?"이 주어졌을 때, 본문 중에 맨체스터 유나이티드, 퀸스 파크 레인저스에서 활동하였다...."에서 멘체스터 유나이티드를 예측하는 문제입니다.          

<br>
<br>

> 구글 BERT가 사용된 실제 사례중 가장 유명한 예시를 가져왔습니다.. 함께 알아보죠!

### <span style="color:#FF8C00"> 활용예시 1 - 구글 검색엔진 </span>  

<img width="600"  src="https://user-images.githubusercontent.com/63052097/141147368-ec8ba617-7d84-4a0e-b5b1-1d02eec9555d.png" style="margin-top: 10px;">    

구글은 2019년 11월 자사 검색 서비스에 BERT 기술을 적용했습니다!  
- 예를 들어 **"2019 brazil traveler to usa need a visa"**이라고 하면...          
  **BEFORE** : 전치사 to가 문맥을 통해서 해석을 하는데 매우 중요하다는 것을 이해하지 못하고 **'브라질로 여행하는 미국인'**이라는 엉뚱한 검색결과를 내놓습니다.          
  **AFTER(BERT 적용 후)** : 전치사 to를 이용해서 문맥을 파악하기 때문에 **'미국을 여행하는 여행자'**와 같이 사용자에게 정확한 검색결과를 제공합니다             

<br>

### <span style="color:#FF8C00"> 활용예시 2 - 구글 어시스턴트 or 챗봇 </span>  
구글 어시스턴트와 같은 음성비서 혹은 챗봇에 버트를 활용해 명확한 질문의도를 파악할 수 있다고 합니다.            

**BEFORE**      
 <img width="700"  src="https://user-images.githubusercontent.com/63052097/141149043-351f5c5c-dcd1-4c33-8dfc-6c757605321e.png" style="margin-top: 10px;">        
**👨‍🦲 사용자** : 예술의 전당까지 가는 택시 좀 불러줘              
**🤖 챗봇** : 문장의 의도는 **“택시호출”**이라는 것과 **“목적지(slot)=예술의 전당(value)”**인건 내가 저번에 학습했지!! 오케이~ 택시 호출 업무를 수행할 수 있어!           
**👨‍🦲 사용자** : 아니다 서울역까지 가는 택시 좀 불러줘~          
**🤖 챗봇** : ????????????????              

 - 목적지가 서울역이면 **<택시호출, 목적지, 서울역>**에 해당하는 문장을 다시 준비를 해서 학습을 해야하기 때문에 업데이트를 해야 하는데 시간이 오래 걸립니다.       

 - 또 전국에 있는 모든 목적지를 모두 학습시키기에는 양이 너무 많습니다.

 - **❗❗확장성이 떨어집니다❗❗**    

<br>
<br>

**AFTER(BERT 적용)**
<img width="700"  src="https://user-images.githubusercontent.com/63052097/141149154-97e48808-fbd8-4427-91fe-f6908ac32797.png" style="margin-top: 10px;">        
**👨‍🦲 사용자** : 아니다 서울역까지 가는 택시 좀 불러줘~          
**🤖 챗봇** : 의도는 택시호출인데.. 목적지가.. 아하 서울역? 알았옹~        

-  BERT를 사용하면 목적지를 미리 학습시키지 않아도 됩니다.   
     
-  BERT는 <택시호출, 목적지, 예술의 전당>에서 “예술의전당”이라는 목적지는 미리 알지 못해도 사용자의 이야기에서 추출할 수가 있으므로, **<택시호출, 목적지>**에 해당하는 모듈만 따로 학습해놓으면 됩니다.         

<br>
<br>

## 2️⃣ BERT의 원리        

### BERT 이름을 살펴보자        
<img width="600"  src="https://user-images.githubusercontent.com/63052097/141153221-7e799813-b1ae-476f-bc1f-6d25d46eebe0.png" style="margin-top: 10px;">        

BERT의 이름의 의미를 하나씩 살펴보면서 BERT에 대해서 그리고 BERT의 원리에 대해서 간단히 알아보겠습니다!         

<br>

**1) Bidirectional(양방향의)** 
<img width="600"  src="https://user-images.githubusercontent.com/63052097/141154061-1f966eaf-1c65-4ac8-9bd3-a711bac3ccbf.png" style="margin-top: 10px;">        

- **양방향의 의미** : 텍스트 입력을 순차적으로 (왼쪽에서 오른쪽 또는 오른쪽에서 왼쪽으로) 읽는 것이 아닌 전체 단어 시퀀스를 한 번에 읽는 것을 말합니다.     
- **왜 중요할까?** : 단어는 여러가지 의미가 담겨있기 때문에 **문맥을 알아보고 단어를 해석해야 합니다.** 만약 bank라는 단어를 해석할 때 단방향이라면 I made a에 의해서만 bank를 해석하게 됩니다. 그러나 양방향이라면 I made a와 deposit 양쪽 모두 문맥을 살펴봐서 bank를 해석하게 됩니다.        

<br>

**2) Encoder**       
<img width="600"  src="https://user-images.githubusercontent.com/63052097/141155210-18f31c2c-1ac8-4db7-b2b3-d94bd580570f.png" style="margin-top: 10px;">        
-  인코더는 입력값을 숫자값으로 바꾸는 모듈입니다. 
-  예를 들어 문자 hi가 입력되었을 때 ASCII CODE로 바꾸고 최종적으로 컴퓨터가 이해할 수 있는 Binary로 바꾸는게 Encoder입니다!            

<br>

**3) Transformers**
> Transformers는 BERT가 나온 이유이자 기반이 되는 것입니다!
  
<img width="700"  src="https://user-images.githubusercontent.com/63052097/141156025-640e509c-8d03-4e34-9d85-2252e13f1830.png" style="margin-top: 10px;">
transformer는 2017년 구글에서 공개한 인코더, 디코더 구조를 지닌 기계번역에 우수한 딥러닝 모델입니다! 예를 들어서 이 모델에서 우리가 영어를 프랑스어로 번역하도록 훈련한다고 생각해봅시다!       

<br>
          

<br>
<img width="600"  src="https://user-images.githubusercontent.com/63052097/141156579-f0587b66-86f4-41a9-bed3-d73d1ab4f1ec.png" style="margin-top: 10px;">        

1. 먼저 인코더는 영어 단어들을 동시에 입력 받습니다.<br>
2. 모든 단어들을 동시에 **임베딩(embedding)**을 합니다!<br>             
3. 디코더가 인코더로부터 임베딩 된 것과 이전에 만든 번역된 프랑스어 단어들을 입력으로 받고 다음 프랑스어를 생성하게 됩니다.<br>             
4. 새로운 단어가 한번에 한 단어씩 문장이 끝날 때까지 프랑스어로 번역됩니다.<br>     

<br>            

**cf) 임베딩이란??**    
 자연어 처리에서 단어들을 기계가 이해할 수 있는 숫자형태인 vector로 바꾸는 과정을 말합니다. vector에는 단어의 의미 혹은 위치와 같이 단어를 잘 알 수 있는 데이터로 압축해놓습니다!]**  

 <br>

**4) Transformers로 부터 나온 BERT**
<img width="600"  src="https://user-images.githubusercontent.com/63052097/141157794-d970c16a-bdf9-44b8-8efa-d8cef741a846.png" style="margin-top: 10px;">        
- transformer는 **업무를 각각 분리해서 처리한다**라고 볼 수 있습니다. 
- 인코더 : 무엇이 영어이고, 무엇이 문법이고, 그리고 더 중요한 부분인 무엇이 문맥인지를 배웁니다. 또한 인코더는 입력값을 양방향을 처리합니다! 
- 디코더 : 영어단어와 프랑스어 단어가 어떻게 관련이 있는지를 배웁니다! 또한 디코더는 왼쪽에서 오른쪽으로 입력을 단방향으로 처리합니다!  
- 인코더와 디코더는 **별도로 언어에 대한 약간의 기초적인 이해**를 가지고 있습니다. 이는 우리가 인코터와 디코더를 **분리**해서 언어를 이해하는 시스템을 구축할 수 있게 됩니다.           

<br>

<img width="600"  src="https://user-images.githubusercontent.com/63052097/141158954-a3ab3117-ca19-473b-91d7-97f707cfb634.png" style="margin-top: 10px;">        

이때 이 Encoder들만 따로 쌓는다면 우리는 BERT를 얻게 됩니다!! 즉 Transformers의 Encoder들을 활용한 모델이 BERT인 셈이죠! 

<br>

### <span style="color:red">BERT의 원리 </span>  
<img width="600"  src="https://user-images.githubusercontent.com/63052097/141162424-daad89ba-8d00-4bc8-b498-eb51e9702717.png" style="margin-top: 10px;">   
<img width="600"  src="https://user-images.githubusercontent.com/63052097/141159919-09b6e3e4-2e61-46ae-b7ab-d13bed363c6b.png" style="margin-top: 10px;">        

- Bert를 학습시키는 단계는 두 단계로 볼 수 있습니다.        
- **첫째, Pre-training** : 언어를 이해할 수 있도록 선행학습 즉, pre-training을 해줘야 합니다! 이 과정에서 문법이 뭔지 문맥이 뭔지 **언어에 대해 이해**를 시켜줘야 합니다.
- **둘째, Fine tuning** : 특정 task를 학습할 수 있도록 파인 튜닝이라는 과정을 해줘야 합니다! 이미 언어에 대해서는 뭔지 알지만 **구체적으로 어떤 문제를 풀도록 해야하는지** 학습시켜줘야 합니다.     


<br>

**❗❗잠깐❗❗**        

<img width="600"  src="https://user-images.githubusercontent.com/63052097/141160509-16e5fd4b-e5f7-421d-9e6f-4a3f7106fd6f.png" style="margin-top: 10px;">        

- BERT는 이미 위키피디아와 BooksCorpus와 같은 **레이블이 없는 텍스트 데이터**로 사전 훈련된 언어 모델입니다. 그래서 사실 상 첫 단계를 넘어가고 두번째 단계인 파인 튜닝만 해주면 됩니다! 

- 예를 들어 우리가 하고 싶은 태스크가 스팸 메일 분류라고 하였을 때, 이미 위키피디아 등으로 사전 학습된 BERT 위에 스팸인지 스팸이 아닌지를 분류해주는 신경망을 한 층 추가를 해줘서 추가 학습을 시켜주면 됩니다. 

<br>

<span style="background:#FFEBCD;font-weight:bold"> 1) Pre-training </span>      
사전 훈련 과정에는 두 가지의 unsupervised task를 동시에 수행합니다! 첫 번째는 마스크드 언어 모델 두 번째는 다음 문장 예측이라는 훈련인데요! 
<img width="600"  src="https://user-images.githubusercontent.com/63052097/141161328-2cc415f6-5ba4-4b31-8668-2d830819f739.png" style="margin-top: 10px;">            

- BERT의 입력 텍스트의 15%의 단어를 **랜덤으로 마스킹(Masking)**합니다. 그리고 BERT에게 이 **가려진 단어들을(Masked words) 예측**하도록 합니다. 
 
- 예를 들어 '나는 [MASK]에 가서 그곳에서 빵과 [MASK]를 샀다'를 주고 '슈퍼'와 '우유'를 맞추게 합니다. 이는 **BERT가 문장의 문맥을 양방향으로 이해할 수 있도록 도와줍니다!** 

<img width="600"  src="https://user-images.githubusercontent.com/63052097/141161584-f9bbbe6e-0c89-4552-a825-60d6820d6ef1.png" style="margin-top: 10px;">    

- BERT에게 두 개의 문장을 준 후에 **이 문장이 이어지는 문장인지 아닌지를 맞추는 방식**으로 훈련시킵니다. 이를 위해서 50:50 비율로 실제 이어지는 두 개의 문장과 랜덤으로 이어붙인 두 개의 문장을 주고 훈련시킵니다. 
- 이는 **다른 문장들 간의 맥락을 이해**할 수 있게 도와줍니다! 

<br>

<span style="background:#FFEBCD;font-weight:bold"> 2) Fine Tuning </span>       
우리가 파인 튜닝은 매우 특별한 NLP업무를 처리하기 위해 추가 훈련시키는 것입니다. 이때 예를 들어서 질문하고 답하는 task를 처리하도록 만들어봅시다!! 
<img width="600"  src="https://user-images.githubusercontent.com/63052097/141162743-8e597069-6201-4b65-98a6-46b9d20b008e.png" style="margin-top: 10px;">        

- 우리가 해야할 일은 네트워크처럼 완전히 연결된 출력 레이어가 있는데 우리가 원하는 답을 기본적으로 출력할 수 있도록 **새로운 출력 레이어의 집합으로 교체**합니다. 
- 예를 들어 task에 따라서 긍정이냐 부정이냐를 출력할 수도 있고 어떤 단어를 출력할 수도 있습니다. **즉 우리가 원하는 답으로 출력되게 끔 출력 레이어를 수정하라는 겁니다!**       
     
- 모델의 출력 파라미터 이외의 **나머지 파라미터는 미세하게 파인 튜닝**이 되어 있어야 합니다.
- 그 후에 QA task이니까 질문과 답변 데이터 세트를 이용하여 지도 학습을 수행합니다. 이때 맨 아래 층 즉, **밑바닥부터 출력 파라미터만 학습시킵니다.** (시간이 매우 빠르겠지요?!)  
- 참고로 BERT의 파라미터 개수는 Large 기준 345 million개 입니다.        

<br>            


<img width="600"  src="https://user-images.githubusercontent.com/63052097/141164524-70422832-8252-4e8a-8ede-f25c2acf29f4.png" style="margin-top: 10px;">        

예를 들어 설명드리겠습니다! 지금 우리는 *질문하고 응답하는 task*를 처리하고 있습니다.  
- 먼저 Bert의 인풋레이어에 **질문과 본문**이라는 두 개의 텍스트의 쌍을 입력합니다. 
- 이때 본문에는 질문에 대한 답이 있는 내용이 담겨져 있어야 합니다. 질문에 대한 답은 본문의 일부분을 추출해서 질문에 답변하는 것이기 때문입니다. 
-  출력 레이어에서 우리는 답이 본문의 동일한 범위 안에 있다고 가정하고 이때 **답의 시작과 끝의 위치만 출력**되도록 수정합니다!   

<br>

## 3️⃣ BERT를 직접 사용해보도록 하자^^        
1. 다양한 언어로 사전 학습된 BERT
> BERT는 오픈 소스에요 그래서 아래 링크로 들어가시면 다양한 언어도 사전 학습된 BERT를 만날 수 있는데요! 마크다운 문서를 보면 한국어로 사전학습된 BERT가 있다는 것을 알 수 있습니다.
            
[링크](https://github.com/google-research/bert/blob/master/multilingual.md)

2. 파인튜닝 하는 방법
> bERT를 만드신 분들이 파인 튜닝 하는 방법을 알려주신 링크입니다.   
        
[링크](https://github.com/google-research/bert)     

<br>

## 4️⃣ 참고링크
1. 점프 투 파이썬  
[링크](https://wikidocs.net/115055)       
2. BERT의 개념 이해하기(추천)     
[링크](https://www.learnfit.ai/courses/bert%ec%9d%98-%ea%b0%9c%eb%85%90-%ec%9d%b4%ed%95%b4%ed%95%98%ea%b8%b0/lessons/bert-neural-network-explained/)  
3. BERT관련 논문 정리     
[링크](https://brunch.co.kr/@yj5wqu/23)         
[링크2](https://mino-park7.github.io/nlp/2018/12/12/bert-%EB%85%BC%EB%AC%B8%EC%A0%95%EB%A6%AC/?fbclid=IwAR3S-8iLWEVG6FGUVxoYdwQyA-zG0GpOUzVEsFBd0ARFg4eFXqCyGLznu7w)    
[링크3](https://lsjsj92.tistory.com/618)

4. 활용 사례들      
[검색 엔진](http://www.aitimes.kr/news/articleView.html?idxno=13117)                   
[챗봇](https://blog.est.ai/2019/11/task-oriented-dialog-systems-meet-bert/)     


## 마무리
GDSC-seoultech의 21명의 모든 동아리원이 다 모인 장소에서 세미나를 진행했는데요! 첫 대면이라서 아주 뜻 깊은 시간이었습니다!! BERT에 대해서 전반적인 흐름을 이야기하는 것을 목표로 했기 때문에 **아 BERT는 Transformers로 부터 만들어졌어! BERT는 사전훈련과 파인튜닝 과정을 거쳐!** 라는 것만 이해하셔도 저는 굉장히 만족스러울 것 같습니다! 더 자세한 내용을 알고 싶은 분들은 위의 참고링크를 확인해주시길 바랍니다~ 모두들 수고하셨습니다!! 
