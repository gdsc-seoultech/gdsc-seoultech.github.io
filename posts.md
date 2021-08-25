---
layout: page
permalink: /posts/
title: POST
description: 인영이가 만드는 post 페이지.. 이거 상단은 page.html
---

<p>카테고리 누르면 카테고리 페이지로 이동, 글 누르면 각 글로 이동..! 
생긴건 약간 velog처럼 썸네일, 제목, 미리보기, 작성자? 면 좋겠다</p>

<br>


<ul class="post-list">
{% for post in site.posts %}
    <li>
        <h3><a class="post-title" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
        <p class="post-meta">{{ post.date | date: '%B %-d, %Y — %H:%M' }}</p>
      </li>
{% endfor %}
</ul>

