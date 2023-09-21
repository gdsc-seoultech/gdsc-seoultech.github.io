---
layout: page
permalink: /posts/
title: POST
description: 전체 글 목록
---

<ul class="post-list">
  {% for post in site.posts %}
    <li>
        <h3><a class="post-title" href="{{ post.url | prepend: site.baseurl }}" style="font-size: 30px;">{{ post.title }}</a></h3>
        <p style="padding-top: 10px; margin-bottom: 5px;">• {{ post.author }} • {{ post.categories }}</p>
        <p class="post-meta">{{ post.date | date: '%B %-d, %Y — %H:%M' }}</p>
      </li>
  {% endfor %}
</ul>


