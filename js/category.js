---
---

const url = window.location.href;
url.indexOf()
let term = url.split("/");
const termName = term[4];
term = Number(term[4].replace(/[^0-9]/g, ""))

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
    if (tagName === "solution_challenge") {
        $('.post-list').addClass('hidden');
        $('.solution_challenge-list').removeClass('hidden');

        if (term === 1) {
            var solution_challenge_list = {{ site.data.solution_challenge_1 | jsonify }};
        } else {
            var solution_challenge_list = {{ site.data.solution_challenge_2 | jsonify }};
        }


        if (solution_challenge_list) {
            solution_challenge_list.forEach(
                sc => {

                    const a = document.createElement('a');
                    a.className = "solution_challenge-team";
                    a.href = "/category/" + termName + "?tag=solution_challenge&tag=" + sc;
                    a.innerText = sc;

                    const h3 = document.createElement('h3');
                    h3.appendChild(a);

                    const li = document.createElement('li');
                    li.className = "solution_challenge-wrapper";
                    li.appendChild(h3);

                    document.getElementsByClassName('solution_challenge-list').item(0).appendChild(li);
                }
            );
        }

    } else {
        $('.hidden').removeClass('hidden');
        $('.post-wrapper').each((index, elem) => {
            if (!elem.hasAttribute(`data-${tagName}`)) {
                $(elem).addClass('hidden');
            }
        });

        $('.post-list').removeClass('hidden');
        $('.solution_challenge-list').addClass('hidden');
    }
    $(`.tag`).removeClass('selected');
    $(`.tag[data-tag=${tagName}]`).addClass('selected');
}