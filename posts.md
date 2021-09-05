---
layout: page
permalink: /posts/
title: POST
description: GDSC멤버들의 기록이 차곡차곡
---

<ul class="post-list">
  {% for post in site.posts %}
    <li>
        <h3><a class="post-title" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
        <p>{{ post.author }}</p>
        <p class="post-meta">{{ post.date | date: '%B %-d, %Y — %H:%M' }}</p>
      </li>
  {% endfor %}
</ul>


