window.onload = function() {
    
    function onClick() { // 클릭했을 때 실행되는 함수 
        document.querySelectorAll('.modal_wrap')[0].style.display ='block'; // 소개 화면 띄움
        document.querySelectorAll('.black_bg')[0].style.display ='block'; // 소개 화면의 배경 띄움
    }   
    function offClick() {
        document.querySelectorAll('.modal_wrap')[0].style.display ='none';
        document.querySelectorAll('.black_bg')[0].style.display ='none';
    }
    function onClick1() { // 클릭했을 때 실행되는 함수 
        document.querySelectorAll('.modal_wrap')[1].style.display ='block'; // 소개 화면 띄움
        document.querySelectorAll('.black_bg')[1].style.display ='block'; // 소개 화면의 배경 띄움
    }   
    function offClick1() {
        document.querySelectorAll('.modal_wrap')[1].style.display ='none';
        document.querySelectorAll('.black_bg')[1].style.display ='none';
    }
    function onClick2() { // 클릭했을 때 실행되는 함수 
        document.querySelectorAll('.modal_wrap')[2].style.display ='block'; // 소개 화면 띄움
        document.querySelectorAll('.black_bg')[2].style.display ='block'; // 소개 화면의 배경 띄움
    }   
    function offClick2() {
        document.querySelectorAll('.modal_wrap')[2].style.display ='none';
        document.querySelectorAll('.black_bg')[2].style.display ='none';
    }
    function onClick3() { // 클릭했을 때 실행되는 함수 
        document.querySelectorAll('.modal_wrap')[3].style.display ='block'; // 소개 화면 띄움
        document.querySelectorAll('.black_bg')[3].style.display ='block'; // 소개 화면의 배경 띄움
    }   
    function offClick3() {
        document.querySelectorAll('.modal_wrap')[3].style.display ='none';
        document.querySelectorAll('.black_bg')[3].style.display ='none';
    }
    function onClick4() { // 클릭했을 때 실행되는 함수 
        document.querySelectorAll('.modal_wrap')[4].style.display ='block'; // 소개 화면 띄움
        document.querySelectorAll('.black_bg')[4].style.display ='block'; // 소개 화면의 배경 띄움
    }   
    function offClick4() {
        document.querySelectorAll('.modal_wrap')[4].style.display ='none';
        document.querySelectorAll('.black_bg')[4].style.display ='none';
    }
    function onClick5() { // 클릭했을 때 실행되는 함수 
        document.querySelectorAll('.modal_wrap')[5].style.display ='block'; // 소개 화면 띄움
        document.querySelectorAll('.black_bg')[5].style.display ='block'; // 소개 화면의 배경 띄움
    }   
    function offClick5() {
        document.querySelectorAll('.modal_wrap')[5].style.display ='none';
        document.querySelectorAll('.black_bg')[5].style.display ='none';
    }
 

    // 폴더 클릭했을 때 
    document.getElementById('su').addEventListener('click', onClick); 
    document.getElementById('min').addEventListener('click', onClick1); 
    document.getElementById('seong').addEventListener('click', onClick2); 
    document.getElementById('ye').addEventListener('click', onClick3); 
    document.getElementById('in').addEventListener('click', onClick4); 
    document.getElementById('ui').addEventListener('click', onClick5); 

    // 엑스 아이콘 클릭했을 때! 
    document.querySelectorAll('.modal_close')[0].addEventListener('click', offClick);
    document.querySelectorAll('.modal_close')[1].addEventListener('click', offClick1);
    document.querySelectorAll('.modal_close')[2].addEventListener('click', offClick2);
    document.querySelectorAll('.modal_close')[3].addEventListener('click', offClick3);
    document.querySelectorAll('.modal_close')[4].addEventListener('click', offClick4);
    document.querySelectorAll('.modal_close')[5].addEventListener('click', offClick5);

 
};
