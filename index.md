---
layout: default
---

<div class="header-bar" align="center">
  <img src="/img/main_logo.png" width="800px">
  <br/>
  <hr>
</div>

<span class="contacticon center">
	<a href="mailto:twinklesu914@gmail.com"><i class="fa fa-envelope-square" style="color: #4285f4"></i></a>
	<a href="https://github.com/gdsc-seoultech" target="_blank"><i class="fa fa-github-square" style="color: #EA4335"></i></a>
	<a href="http://facebook.com/gdsc.seoultech" target="_blank"><i class="fa fa-facebook-square" style="color:#FBBC04;"></i></a>
	<a href="https://instagram.com/gdsc_seoultech" target="_blank"><i class="fa fa-instagram" style="color: #34A853"></i></a>
</span>
<br><br>

<div align="center">
    <h2>GDSC Seoultech 세미나&이벤트</h2>
    <ul class="post-list">
    {% for seminar in site.seminars %}
        <li>
            <h3>{{ seminar.title }}</h3>
        </li>
<!--        <li>-->
<!--            <h3><a class="post-title" href="{{ seminar.url | prepend: site.baseurl }}">{{ seminar.title }}</a></h3>-->
<!--            <p class="post-meta">{{ seminar.date | date: '%B %-d, %Y — %H:%M' }}</p>-->
<!--        </li>-->
    {% endfor %}
    </ul>
</div>

