function getPageList(totalPages, page, maxLength){
    function range(start, end){
      return Array.from(Array(end - start + 1), (_, i) => i + start);
    }
  
    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;
  
    if(totalPages <= maxLength){
      return range(1, totalPages);
    }
  
    if(page <= maxLength - sideWidth - 1 - rightWidth){
      return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }
  
    if(page >= totalPages - sideWidth - 1 - rightWidth){
      return range(1, sideWidth).concat(0, range(totalPages- sideWidth - 1 - rightWidth - leftWidth, totalPages));
    }
  
    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
  }

$(function(){
    var limitPerPage = 5; // 한 페이지에 들어갈 포스팅 개수.
    var numberOfItems = $(".post-list .post-wrapper").length;
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var paginationSize = 8; // 나타낼 페이지 버튼 개수
    var currentPage;

    let currentTag = "";
    const queryTag = getQuery().tag;
    if (queryTag) {
        

    } else {
        function showPage(whichPage){
            if(whichPage < 1 || whichPage > totalPages) return false;
    
            currentPage = whichPage;
    
            $(".post-list .post-wrapper").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
            $(".pagination li").slice(1, -1).remove();
    
            getPageList(totalPages, currentPage, paginationSize).forEach(item => {
                $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
                .toggleClass("active", item === currentPage).append($("<a>").addClass("page-link")
                .attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page");
              });
              
              $(".previous-page").toggleClass("disable", currentPage === 1);
              $(".next-page").toggleClass("disable", currentPage === totalPages);
              return true;
            }
    
            $(".pagination").append(
                $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Prev")),
                $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Next"))
              );
            
              $(".card-content").show();
              showPage(1);
            
              $(document).on("click", ".pagination li.current-page:not(.active)", function(){
                return showPage(+$(this).text());
              });
            
              $(".next-page").on("click", function(){
                return showPage(currentPage + 1);
              });
            
              $(".previous-page").on("click", function(){
                return showPage(currentPage - 1);
              });
    }
})