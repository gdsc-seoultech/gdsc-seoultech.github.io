/* 1. 상수 선언 */

// querySelecotr = css 선택자를 사용하여 요소를 찾는 함수
// document = document 객체는 웹 페이지 그 자체를 의미, 웹 페이지에 존재하는 HTML 요소에 접근하고자 할 때 사용
const typedTextSpan = document.querySelector(".typed-text"); // class 값이 typed-text인 요소를 찾는다
const cursorSpan = document.querySelector(".cursor"); // class값이 cursor인 요소를 찾는다

const textArray = ["GDSC-SEOULTECH"]; // 그냥 넣을 문자열 값, 기존에 ["A", "B", "C"..] 이런식으로 여러개 있었음! 
const typingDelay = 200; // 타이핑 속도 
const erasingDelay = 100; // 지우는 속도 
const newTextDelay = 2000; // Delay between current and next text

const colorArray = ["#db3236", "#f4c20d", "#3cba54", "#4885ed"]; //text color 바꾸기 

/* 2. 변수 선언 */
let textArrayIndex = 0; // textArray의 한 인덱스 == 한 단어를 의미 
let charIndex = 0; // 한 단어의 한 char에 접근 
let colorArrayIndex = 0; // color 변화 


/* 3. 함수 type 선언 */
function type() { 
  if (charIndex < textArray[textArrayIndex].length) { // charIndex가 한 단어의 길이보다 작으면 
    // clssList = 클래스를 조작하는 다양한 메서드를 사용할 수 있다. 
    // classList.contains = 값이 존재하는지 체크 
    /* 만약 cusorSPan의 클래스에 typing이라는 클래스가 존재하지 않으면 추가해라*/
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
     
    if(colorArrayIndex == 4) colorArrayIndex = 0; // colorArray 초기화   

    /* typing이라는 클래스가 존재하는 경우 */
    // textContent = 주어진 엘리먼트에 텍스트 추가 즉, typed-text 부분에 text를 추가 
    typedTextSpan.style.color = colorArray[colorArrayIndex]; //추가하려는 text 색상을 변화
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex); //어떻게? 주어진 한 단어의 한 char를 추가
    charIndex++; // charInedx 증가 
    colorArrayIndex++; //색깔 변화 
    setTimeout(type, typingDelay); // 시간 지연 함수, setTimeout(호출될 콜백함수, 지연 시간)

  } 
  else { // charIndex가 한 단어의 길이보다 커진 경우
    cursorSpan.classList.remove("typing");  //typing 클래스 지우고
  	setTimeout(erase, newTextDelay); // erase 함수를 2초 뒤에 호출
  }
}

/* 4. 함수 erase 선언 */
function erase() { 
	if (charIndex > 0) { // charIndex가 존재하는 경우
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing"); //typing 클래스 추가하고 
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1); //substring 부분만 떼서 textContent에 추가
    charIndex--; 
    setTimeout(erase, erasingDelay);
  } 
  else { //charIndex를 다 지운 경우 
    cursorSpan.classList.remove("typing");
    textArrayIndex++; // 다음 단어로 ㄱㄱ 
    if(textArrayIndex>=textArray.length) textArrayIndex=0; // 배열에 있는 애들 다 했으면 초기화 
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // DOM 로드시(html 문서에 접근하기 위한 일종의 인터페이스) 효과 시작
  if(textArray.length) setTimeout(type, newTextDelay + 250); // 아 그래서 type 함수부터 시작하는 구나 
});