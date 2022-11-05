window.onload = function () {
  const url = window.location.href;
  let term = url.substring(url.lastIndexOf('/') + 1);
  term = Number(term.replace(/[^0-9]/g, "")) - 1; // 숫자가 아닌 문자열을 매칭하는 정규식
  const idList = [
      ["su",
        "min",
        "seong",
        "ye",
        "in",
        "ui",
        "goldtan",
        "yh",
        "keonju2",
        "jisoo",
        "shinyubin989",
        "yongsu",
        "pathpioneer",
        "jungin",
        "ehrwk",
        "drizzle",
        "leeeha",
        "jih",
        "yoonjae"],
      [
        "drizzle",
        "keonju",
        "yejin",
        "yuseogi",
        "kangmin",
        "leeeha",
        "juwhan",
        'dann',
        'hongmu',
        'jwyeeh-dev',
         "yoouung",
         "Higeuni",
         "seunggu",
         "chunngye",
         "gagyeong",
         "hyunjun",
         "jonghun",
         "hyeok",
         "yeonsu",
         "songhee",
         "jeongjoon",
         "dongyoung",
         "junseok",
         "minseob",
      ]

  ];



  idList[term].map((item, index) => {
    function onClick() {
      idList[term].map((item, index) => {
        document.querySelectorAll(".modal_wrap")[index].style.display = "none";
        document.querySelectorAll(".black_bg")[index].style.display = "none";
      });
      document.querySelectorAll(".modal_wrap")[index].style.display = "block";
      document.querySelectorAll(".black_bg")[index].style.display = "block";
    }

    function offClick() {
      document.querySelectorAll(".modal_wrap")[index].style.display = "none";
      document.querySelectorAll(".black_bg")[index].style.display = "none";
    }

    document.getElementById(item).addEventListener("click", onClick);
    document.querySelectorAll(".modal_close")[index].addEventListener("click", offClick);
  });

  function offAll() {
    idList[term].map((item, index) => {
      document.querySelectorAll(".modal_wrap")[index].style.display = "none";
      document.querySelectorAll(".black_bg")[index].style.display = "none";
    });
  }

  window.onkeydown = function (event) {
    if (event.keyCode === 27) {
      offAll();
    }
  };
};
