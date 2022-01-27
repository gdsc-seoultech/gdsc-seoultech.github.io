---
layout: post
title: 열여섯 번째 세션 - Unity로 만든 나의 Universe..★
data: 2022-01-25
author: juijeong8324
categories: ['seminar']
---
# Unity로 만든 나의 Universe..★    
<div style="text-align : center;">
<img src="https://user-images.githubusercontent.com/63052097/151108939-fa8241db-9a76-4acb-8258-fbb642479dea.png" width=600 /> 
</div>              

안녕하세요! 1월 25일 세미나 강연자 CORE 전의정입니다!           
열여섯 번째 세션은 **Unity로 만든 나의 Universe..★** 세미나가 진행되었습니다.           
제가 만든 간단한 유니티 프로젝트를 어떻게 진행하고 만들었는지 공유하고 Unity에 대해서
 친숙해지는 시간을 가져보았습니다!

<br>
<br>

## 1️⃣ 잠깐 Unity에 대해서              
<br>
먼저 Unity로 프로젝트를 만들었다는데 Unity 가 뭐야? 라고 궁금하신 분을 위해 잠깐 Unity에 대해서 설명을 해볼게요!                
<br>                        

<div style="text-align : center;">
<img src="https://user-images.githubusercontent.com/63052097/151109634-6226b7e4-f8c9-4ce9-b88b-cc57edc637e9.png" width=600 /> 
</div>              

Unity는  2D 및 3D  게임을 개발하는 환경을 제공하는 **게임엔진**이에요           

<br>
<br>

<div style="text-align : center;">
<img src="https://user-images.githubusercontent.com/63052097/151109877-b7fd0107-e5b5-4bfd-a3ee-57b0bcfd9323.png" width=600 /> 
</div>         
그렇다면 게임엔진은 무엇일까요? 

- 특정기술을 이용해 2차원 그래픽 혹은  3차원 그래픽을 화면에 보여주는 **렌더링 엔진**           
- 실제 세계의 물리 작용 연산을 위한 **물리 엔진**           
- 캐릭터들의 다양한 동작을 지정해주는 **애니메이션 시스템**         
- 이밖에 UI 시스템, 오디오 엔진 등등            
               
위와 같은 기능처럼 게임 개발에 필요한 여러 도구를 제공하고 통합적으로 관리할 수 있는 소프트웨어를 말합니다. 만약 게임엔진이 없었더라면 작은 박스 하나를 만드는데 상당히 많은 코드를 작성해야 할 겁니다.         

<br>
<br>             

<div style="text-align : center;">
<img src="https://user-images.githubusercontent.com/63052097/151110369-0234cb80-7ffb-4496-a592-dc44763f57cc.png" width=600 />
</div>               
특히 많은 게임 엔진중에서 Unity 엔진은 <span style="background:#FFD700; font-weight:bold">대중들도 게임을 쉽게 개발할 수 있도록 “보편화”하는 것</span>을 목표로 두고 있어요 따라서 여러 공식 문서 혹은 가이드를 친절하게 제공하고 있습니다.         
<br>
그리고 캐릭터, 사운드, 효과등 게임에 등장하는 요소들을 무료 혹은 유료로 사용할 수 있도록  <span style="background:#FFD700; font-weight:bold"> 에셋스토어 </span>가 존재합니다.   무엇보다도 라이센스 비용이 무료입니다 유후~ 소리질뤄~!             

<br>                
<br>                    


<div style="text-align : center;font-weight:bold">
<img src="https://user-images.githubusercontent.com/63052097/151111478-25a56439-24fe-44e2-a05b-751deffc055d.png" width=600 />
</div>           
유니티의 가장 큰 장점은 PC, 콘솔, 모바일, 가상현실 플랫폼 등 <span style="background:#FFD700; font-weight:bold">멀티플랫폼에서 빌드가 가능</span>하다는 겁니다! 그래서 유니티는 모바일 시장 점유율을 압도적으로 1위를 차지하고 있답니다.            

<br>
<br>

## 2️⃣ 저는 이런 프로젝트를 진행했습니다!
제가 진행한 프로젝트에 대해 소개합니다!! (짝짝짝) 

첫 번째 프로젝트, 
<div style="text-align : center;">
<img src="https://user-images.githubusercontent.com/63052097/151113932-a905bd06-676e-4f64-9449-ea722f6d3c43.png" width=500 />
</div>              

거북목 예방을 위한 스트레칭 VR 어플리케이션의 서비스 중 **거북목 스트레칭 동작을 응용한 두 개의 미니게임**을 만들었습니다!          
<div style="text-align : center;"> <img src="https://user-images.githubusercontent.com/63052097/151113822-13644bab-adfd-4471-87b5-4d6ff2b99068.png" width=500 /> </div>
- 난 목으로도 춤을 춰 : 재생되는 음악에 맞춰 방향키를 누르는 리듬게임입니다. 정확도에 따라 점수를 획득하는 것도 구현이 된 상태입니다! 단, 박자에 맞춰서 화살표가 나오는 건 구현을 안 했습니다! 화살표 객체 생성 시간을 화살표 방향마다 각각 다른 시간으로 두었는데 박자가 맞아서 그대로 두었다는 건 안 비밀~            
              
<br>
<br>

<div style="text-align : center;"><img src="https://user-images.githubusercontent.com/63052097/151114073-60f5e844-e8fb-4dfa-ae68-83306fe3da99.png" width=500 /></div>
- 돌려돌려 맷돌 : 주어진 시간 동안 주어진 개수만큼 맷돌을 회전시켜 두부를 만드는 게임입니다. 좌우 방향키를 계속 눌러서 맷돌이 한 바퀴 회전하면 두부가 만들어지도록 구현했습니다. 중요한 건 한 바퀴를 도는데 중간에 끊기면 안 된다는 거~            

<br>
<br>

<div style="text-align : center;"><img src="https://user-images.githubusercontent.com/63052097/151118326-4617c530-25c2-4f7a-9e1b-1d50b1675875.png" width=500 /></div>           
 아직 프로젝트의 모든 서비스를 구현하지 않았고 VR 연동도 안 된 상태에요! 그리고 전문의에게 조언이 필요한 상황이라 이 프로젝트는 앞으로도 계속 진행할 예정입니다! 깃허브나 벨로그 등에 개발 현황을 올리도록 할게요! 많관부! 

<br>
<br>

두 번째 프로젝트,
<div style="text-align : center;">
<img src="https://user-images.githubusercontent.com/63052097/151164591-8e8c07b7-4223-4a98-94c6-6a912f0fb637.png" width=500 />
</div>      

 환경공학과 분들과 함께 진행한 디자인 씽킹 대회에서 메타버스를 활용한 환경 교육이라는 주제로 프로젝트를 진행했습니다! 

<div style="text-align : center;">
<img src="https://user-images.githubusercontent.com/63052097/151164656-1e6a086d-7221-427a-b686-7aa10b9f6d8f.png" width=500 />
</div>      


<div style="text-align : center;">
<img src="https://user-images.githubusercontent.com/63052097/151164690-d7ac93bf-75fe-464d-9dca-b2d66df5e49d.png" width=500 />
</div>      


<div style="text-align : center;">
<img src="https://user-images.githubusercontent.com/63052097/151164913-f2424ec1-5194-4da6-91af-5fb5e9a977f2.png" width=500 />
</div>      
            

<br>
<br>


## 3️⃣ 프로젝트는 이렇게 만들었습니다!
 Unity 프로그램의 구조와 간단한 개념에 대해서 언급하겠습니다!
<div style="text-align : center;">
<img src="https://user-images.githubusercontent.com/63052097/151165362-a4d3e5cc-7730-4b3d-98b7-3be609b28386.png" width=500 />
</div>                 
<br>
<br>        

- A - 툴바 : 씬 뷰와 그 안에 있는 게임 오브젝트를 조작할 수 있는 기본 툴이 있고, 중앙에는 프로젝트를 렌더링 해보는 재생 버튼이 있습니다.            
- B - 계층창 : 씬의 모든 게임 오브젝트의 상호 연결 방식을 구조로 나타낸 것입니다. 쉽게 말하면 실제 해당 씬에 등장하는 게임오브젝트들을 모아놓은 창입니다!       
- C - 게임 뷰 : 씬 카메라를 통해 최종적으로 렌더링된 게임 모습을 시뮬레이션합니다. 
- D - 씬뷰 : 내가 작업하고 있는 공간의 화면입니다.  
- E - 인스펙터 창 : 현재 선택된 게임 오브젝트의 속성을 보고 편집하는 창입니다. 
- F - 프로젝트 창 : 프로젝트에서 사용할 수 있는 에셋 라이브러리 공간입니다. 다시 말해 게임이나 프로젝트에서 사용할 수 있는 모든 게임 오브젝트, 내부 동작을 위한 스크립트, 사운드,배경,씬 등등 에셋들을 모아놓은 창입니다. 

<br>

**잠깐! 씬뷰 VS 게임뷰**    

제 프로젝트로 예시를 보여드리죠!  
<div style="text-align : center;">
<img src="https://user-images.githubusercontent.com/63052097/151166625-97f0ead7-a4a5-4c3a-97c3-624a967a7800.png" width=500 />
</div>     
씬뷰는 제가 작업하는 프로젝트 공간에서 보는 화면입니다! 여기 보이시는 빨간원이 카메라인데 이 카메라로 찍고 있는 영역이 게임뷰가 되는 겁니다! 왼쪽 아래에 작은 창이 게임뷰를 미리 볼 수 있는 창입니다!               

<br>        

<div style="text-align : center;">
<img src="https://user-images.githubusercontent.com/63052097/151167048-cf98bcbc-09c0-4929-964a-2827b8fb683c.png" width=500 />
</div>     

게임뷰는 이렇게 사용자가 보게 되는 화면입니다!

<br>
<br>

자! 이제 난 목으로도 춤을 춰 라는 프로젝트 예시와 함께 유니티로 게임을 만드는 기본 원리를 간략하게 설명 드릴게요! 
<div style="text-align : center;">
<img src="https://user-images.githubusercontent.com/63052097/151167561-07c7f39e-89bb-4870-8385-a29087b21611.png" width=500 />
</div>              

**1. 리듬게임 플레이 화면 구성 및 게임 오브젝트 수집**          
: 에셋 스토어에서 배경에 들어갈 Material을 가져와서 밤하늘을 꾸며주고 바닥 오브젝트, 종착지 오브젝트, 화살표 오브젝트를 계층 창에 가져와서 위치를 잡아주고 Material 속성으로 색깔을 꾸며주었어요!           
: 카메라(Main Camera)의 위치도 잡아줍니다.     

<br>


<div style="text-align : center;">
<img src="https://user-images.githubusercontent.com/63052097/151168038-df87e719-c26e-4cd3-8497-13dba50deeb6.png" width=500 />
</div>          

**2. 게임 오브젝트를 Prefab(게임 오브젝트를 하나의 형틀로 만들어 언제든지 인스턴스화 할 수 있도록 만드는 것)으로 만들고 속성에 컴포넌트 추가**           
: 화살표 객체가 본인의 위치에서 계속 반복해서 생성하도록 계층창에 있는 게임 오브젝트를 프로젝트 창 즉 에셋 라이브러리로 가져와서 프리팹으로 만들어줍니다.               
: 프리팹은 간단히 말해서 내가 정의한 게임 오브젝트를 계속 반복 사용할 수 있도록 만든 것 이라고 이해하시면 됩니다! 객체 지향의 개념에서 보면 클래스의 인스턴스랑 같은 개념이에요         
: c# 언어의 스크립트를 만들어서 화살표가 일정한 시간동안 생성되도록 반복해주는 코드를 작성하고 이 스크립트를 프리팹의 속성에 저장했습니다!         

<br>

<div style="text-align : center;">
<img src="https://user-images.githubusercontent.com/63052097/151169357-112211a3-badf-467b-8d01-dce74165de52.png" width=500 />
</div>         

**3. 충돌 영역 + 충돌처리 스크립트**            
: 종착점과 화살표 객체에 Box Collider라는 충돌영역을 감지하는 컴포넌트을 각각 추가해줍니다.         
: 충돌이 발생했을 때 어떤 이벤트를 발생할지 코드로 작성해서 스크립트로 만들어주고 이를 화살표 객체의 속성에 넣어주었습니다!         
: 충돌 영역 그리고 충돌 처리 함수를 이용해서 화살표 객체가 종착점을 지났을 때 소멸되게 하는 기능을 만들어 줄 수 있습니다! 

<div style="text-align : center;">
<img src="https://user-images.githubusercontent.com/63052097/151169876-61202f48-6422-4c65-b890-ad168be7c2cb.png" width=500 />
</div>         
이 충돌처리는 광장에서 npc를 만났을 때 npc가 말을 거는 기능으로도 활용했습니다!                 

<br>     
<br>   
<br>

<div style="text-align : center;">
<img src="https://user-images.githubusercontent.com/63052097/151170088-13c3e23a-4a68-4afe-834a-df75a2b1e158.png" width=500 />
</div>          

즉 한 문장으로 요약하자면 **게임오브젝트의 속성에 이벤트 처리와 관련된 스크립트, 특정 컴포넌트들을 추가해주면서 만들어갑니다.** 게임 오브젝트의 속성에 들어가는 컴포넌트들이 정말 다양해서 유니티에서는 컴포넌트가 가장 핵심이다 라고 해도 과언이 아닙니다!         

<br>
<br>


<img src="https://user-images.githubusercontent.com/63052097/151170393-42b41046-08e2-48af-87ea-9bf457f145fc.png" width=300 />       

원리는 간단하죠?            

<br>

그래서 준비했습니다. 제가 " 난 목으로도 춤을 춰 " 프로젝트를 만드는 과정을 자세하게 기록해둔 블로그 링크를 가져왔어요! 원래 이웃공개인데 여러분을 위해 특별히 전체 공개를 해뒀습니닷. 후후후 (※블로그 홍보 아님)            
[클릭해서 My_PROJECT 들어가보세요!](https://blog.naver.com/gurum8021)           

<br>
<br>            

## 4️⃣ 후기       

<span style="background:#FFD700; font-weight:bold"> 1. 에셋 디자인의 중요성 </span>               
-> 퀄리티가 달라집니다.            
-> 에셋 스토어를 적극 활용하면 좋습니다.                 
-> 블렌더라는 프로그램을 통해 에셋을 직접 만들기도 힙니다.               

<br>        

<span style="background:#FFD700; font-weight:bold">2. Unity는 프로젝트끼리 호환이 안됩니다. </span>    
-> 버전마다 사용할 수 있는 도구나 기능이 차이가 있습니다.     
-> 하휘호환이 가능해도 데이터가 손실될 우려가 있습니다.              
-> 팀 프로젝트 시 꼭x100 유니티 버전을 맞추기를 권장!!                

<br>

<span style="background:#FFD700; font-weight:bold">3. C# 모르고 유니티 다루는 법 모르고 도전해도 충분히 만들 수 있습니다.</span>                
-> 유니티 공식 문서랑 유튜브나 구글을 검색해보면 프로젝트 예시가 굉장히 많이 나와있습니다!          
-> 저도 했으니까 여러분은 당연히 할 수 있을겁니다. 


<br>            
<br>                

나만의 유니버스.. 당장 만들러 가볼까요?   
