window.onload = function () {
  //toc layout넣기
  const newDiv = document.createElement("div");
  newDiv.classList.add("toc-area");
  const compareDiv = document.getElementById("page-content");
  document.body.insertBefore(newDiv, compareDiv);

  const tocNum = document.getElementsByTagName("h3").length;
  const paddingValue = 55;
  const tocPointList = [];

  for (let i = 0; i < tocNum; i++) {
    const tocList = document.getElementsByTagName("h3");

    let newButtonTag = document.createElement("button");
    newButtonTag.innerHTML = tocList[i].innerHTML;

    document.getElementsByClassName("toc-area")[0].appendChild(newButtonTag);

    const postContainer = document.getElementsByClassName("post-content")[0];
    const tagList = postContainer.getElementsByTagName("h3");

    const tocPoint = tagList[i].offsetTop - paddingValue;
    tocPointList.push(tocPoint);
  }

  const tocTable = document
    .getElementsByClassName("toc-area")[0]
    .getElementsByTagName("button");

  for (let i = 0; i < tocNum; i++) {
    function scrollPoint() {
      window.scrollTo(0, tocPointList[i]);
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
