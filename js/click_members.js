window.onload = function () {
  const idList = [
    "su",
    "min",
    "seong",
    "ye",
    "in",
    "ui",
    "goldtan",
    "yh",
    "hc",
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
    "ssggi",
    "yoonjae"
  ];

  idList.map((item, index) => {
    function onClick() {
      idList.map((item, index) => {
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
    document
      .querySelectorAll(".modal_close")
      [index].addEventListener("click", offClick);
  });

  function offAll() {
    idList.map((item, index) => {
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
