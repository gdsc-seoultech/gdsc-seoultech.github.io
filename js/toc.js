window.onload = function () {
  //toc layout넣기
  const newDiv = document.createElement("div");
  newDiv.classList.add("toc-area");
  const compareDiv = document.getElementById("page-content");
  document.body.insertBefore(newDiv, compareDiv);
  const postContainer = document.getElementsByClassName("post-content")[0];

  const tocNum = postContainer.querySelectorAll("h1,h2").length;
  const paddingValue = 55;
  const tocPointList = [];

  for (let i = 0; i < tocNum; i++) {
    const tocList = postContainer.querySelectorAll("h1,h2");

    let newButtonTag = document.createElement("button");

    newButtonTag.id = tocList[i].tagName;
    newButtonTag.innerHTML = tocList[i].innerHTML;

    document.getElementsByClassName("toc-area")[0].appendChild(newButtonTag);

    const tagList = postContainer.querySelectorAll("h1,h2");

    const tocPoint = tagList[i].offsetTop - paddingValue;
    tocPointList.push(tocPoint);
  }

  const tocTable = document
    .getElementsByClassName("toc-area")[0]
    .getElementsByTagName("button");

  //tocTable에 패딩 추가
    addPaddingFunc(tocTable);
  for (let i = 0; i < tocNum; i++) {
    function scrollPoint() {
      window.scrollTo({
        top: tocPointList[i],
        behavior: "smooth",
      });
    }
    tocTable[i].addEventListener("click", scrollPoint);
  }

  tocPointList.push(document.body.scrollHeight);
  const scrollFunc = () => {
    const currentPoint = window.scrollY;

    for (let i = 0; i < tocNum; i++) {
      const tocTable = document
        .getElementsByClassName("toc-area")[0]
        .getElementsByTagName("button");
      if (
        currentPoint >= tocPointList[i] &&
        currentPoint < tocPointList[i + 1]
      ) {
        tocTable[i].classList.add("active-toc");
      } else {
        tocTable[i].classList.remove("active-toc");
      }
    }
  };
  window.addEventListener("scroll", scrollFunc);
};

const addPaddingFunc = (HTMLCollection) => {
  const secondLayer = "second-layer";
  for (let i = 0; i < HTMLCollection.length; i++) {
    if (!HTMLCollection[i + 1]) {
      continue;
    }

    if (HTMLCollection[i].id === "H1" && HTMLCollection[i + 1].id === "H2") {
      HTMLCollection[i + 1].classList.add(secondLayer);
    }

    if (
      HTMLCollection[i].id === "H2" &&
      HTMLCollection[i + 1].id === "H2" &&
      HTMLCollection[i].classList.contains(secondLayer)
    ) {
      HTMLCollection[i + 1].classList.add(secondLayer);
    }
  }
};
