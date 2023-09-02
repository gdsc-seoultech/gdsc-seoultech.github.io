window.onload = function () {

  function closeAll() {
    document.querySelectorAll(".modal_bg, .modal_wrap, .black_bg").forEach((element) => {
      element.style.display = "none";
    })
  }

  document.querySelectorAll(".member-card-container").forEach( (part) => {

    part.querySelectorAll(".member-card > .folder").forEach( (member, idx) => {
      member.addEventListener("click", () => {
        closeAll()
        part.querySelectorAll(".modal_bg")[idx].style.display = "block";
        part.querySelectorAll(".modal_wrap")[idx].style.display = "flex";
        part.querySelectorAll(".black_bg")[idx].style.display = "block";
      });
    });

    part.querySelectorAll(".modal_close").forEach( (member, idx) => {
      member.addEventListener("click", () => {
        closeAll();
      });
    });
    
    part.querySelectorAll(".modal_bg").forEach( (member, idx) => {
      member.addEventListener("click", () => {
        closeAll();
      });
    });
  });

  window.onkeydown = function (event) {
    if (event.keyCode === 27) {
      closeAll()
    }
  };
};
