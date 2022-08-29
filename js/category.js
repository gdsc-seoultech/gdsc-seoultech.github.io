
$(document).ready(function() {
    let currentTag = "";
    const queryTag = getQuery().tag;
    if (queryTag) {
        currentTag = queryTag;
        filterByTagName(currentTag);
    } else {
        $('.tag-all').addClass('hidden');
    }
})

function getQuery() {
    var params = {};

    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function(str, key, value) {
            params[key] = value;
        }
    );

    return params;
}

function filterByTagName(tagName) {
    $('.hidden').removeClass('hidden');
    $('.post-wrapper').each((index, elem) => {
        if (!elem.hasAttribute(`data-${tagName}`)) {
            $(elem).addClass('hidden');
        }
    });
    $(`.tag`).removeClass('selected');
    $(`.tag[data-tag=${tagName}]`).addClass('selected');
}