---
layout: mem_page
permalink: /members/2
title: MEMBER - 2nd_term
---

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/css/member.css">
    <link rel="stylesheet" href="/css/folder.css">
    <link rel="stylesheet" href="/css/click_members.css">

</head>

<body>
    <div class="container" style="font-family: 'Google Sans'">
        <p>WE ARE <span class="typed-text"></span><span class="cursor">&nbsp;</span></p>
    </div>
    <!-- lead part start -->
    <div class="introduction">
        <p class="who" style="font-family: 'Google Sans';">LEAD</p>
        <div class="member-card-container">
            <div class="member-card">
                <div class="folder" id="drizzle">
                    {% assign member = site.data.members_2 | map: "drizzle0171" %}
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="drizzle">
                <div class="modal_close" id="drizzle"><a href="#;">close</a></div>
            </div>
            <!-- modal start -->
            <div class="modal_wrap" id="drizzle">
                <div class="the_member">
                    <img class="member_image" src="https://github.com/{{ member | map: 'github' }}.png">
                    <div class="member_description">
                        <p class="text" id="title"> {{ member | map: "description" }} </p>
                        <p class="text" id="name"> {{ member | map: "name" }} </p>
                        <P class="text" id="d"> {{ member | map: "introduce" }}</p>
                        <span class="member-icon"><a class="link-dark"
                                href="https://github.com/{{ member | map: 'github' }}" target="_blank"><i
                                    class="fa fa-github fa-2x"></i></a></span>
                        <a rel="author" href="{{ member | map: 'blog' }}" target="_blank"><img
                                src="/img/blog_icon/{{ member | map: 'blog_platform' }}.jpg" width="26px"></a>
                        <a rel="author" href="https://blog.naver.com/yongsan0701" target="_blank"><img
                                src="/img/blog_icon/naver.jpg" width="26px"></a>
                    </div>
                </div>
            </div>
            <!-- modal end -->
        </div>
    </div>
    <!-- lead part end -->
    <!-- core part start -->
    <div class="introduction not-lead-part">
        <p class="who" style="font-family: 'Google Sans';">CORE</p>
        <div class="member-card-container">
            <div class="member-card">
                <div class="folder" id="keonju">
                    {% assign member = site.data.members_2 | map: "keonju" %}
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="keonju">
                <div class="modal_close" id="keonju"><a href="#;">close</a></div>
            </div>
            <div class="modal_wrap" id="keonju">
                <div class="the_member">
                    <img class="member_image" src="https://github.com/{{ member | map: 'github' }}.png">
                    <div class="member_description">
                        <p class="text" id="title"> {{ member | map: "description" }} </p>
                        <p class="text" id="name"> {{ member | map: "name" }} </p>
                        <P class="text" id="d"> {{ member | map: "introduce" }}</p>
                        <span class="member-icon"><a class="link-dark"
                                href="https://github.com/{{ member | map: 'github' }}" target="_blank"><i
                                    class="fa fa-github fa-2x"></i></a></span>
                        <a rel="author" href="{{ member | map: 'blog' }}" target="_blank"><img
                                src="/img/blog_icon/{{ member | map: 'blog_platform' }}.jpg" width="26px"></a>
                    </div>
                </div>
            </div>
            <div class="member-card">
                {% assign member = site.data.members_2 | map: "yejin" %}
                <div class="folder" id="yejin">
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="yejin">
                <div class="modal_close" id="yejin"><a href="#;">close</a></div>
            </div>
            <div class="modal_wrap" id="yejin">
                <div class="the_member">
                    <img class="member_image" src="https://github.com/{{ member | map: 'github' }}.png">
                    <div class="member_description">
                        <p class="text" id="title"> {{ member | map: "description" }} </p>
                        <p class="text" id="name"> {{ member | map: "name" }} </p>
                        <P class="text" id="d"> {{ member | map: "introduce" }}</p>
                        <span class="member-icon"><a class="link-dark"
                                href="https://github.com/{{ member | map: 'github' }}" target="_blank"><i
                                    class="fa fa-github fa-2x"></i></a></span>
                        <a rel="author" href="{{ member | map: 'blog' }}" target="_blank"><img
                                src="/img/blog_icon/{{ member | map: 'blog_platform' }}.jpg" width="26px"></a>
                    </div>
                </div>
            </div>
            <div class="member-card">
                {% assign member = site.data.members_2 | map: "yuseogi" %}
                <div class="folder" id="yuseogi">
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="yuseogi">
                <div class="modal_close" id="yuseogi"><a href="#;">close</a></div>
            </div>
            <div class="modal_wrap" id="yuseogi">
                <div class="the_member">
                    <img class="member_image" src="https://github.com/{{ member | map: 'github' }}.png">
                    <div class="member_description">
                        <p class="text" id="title"> {{ member | map: "description" }} </p>
                        <p class="text" id="name"> {{ member | map: "name" }} </p>
                        <P class="text" id="d"> {{ member | map: "introduce" }}</p>
                        <span class="member-icon"><a class="link-dark"
                                href="https://github.com/{{ member | map: 'github' }}" target="_blank"><i
                                    class="fa fa-github fa-2x"></i></a></span>
                        <a rel="author" href="{{ member | map: 'blog' }}" target="_blank"><img
                                src="/img/blog_icon/{{ member | map: 'blog_platform' }}.jpg" width="26px"></a>
                    </div>
                </div>
            </div>
            <div class="member-card">
                {% assign member = site.data.members_2 | map: "kangmin" %}
                <div class="folder" id="kangmin">
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="kangmin">
                <div class="modal_close" id="kangmin"><a href="#;">close</a></div>
            </div>
            <div class="modal_wrap" id="kangmin">
                <div class="the_member">
                    <img class="member_image" src="https://github.com/{{ member | map: 'github' }}.png">
                    <div class="member_description">
                        <p class="text" id="title"> {{ member | map: "description" }} </p>
                        <p class="text" id="name"> {{ member | map: "name" }} </p>
                        <P class="text" id="d"> {{ member | map: "introduce" }}</p>
                        <span class="member-icon"><a class="link-dark"
                                href="https://github.com/{{ member | map: 'github' }}" target="_blank"><i
                                    class="fa fa-github fa-2x"></i></a></span>
                        <a rel="author" href="{{ member | map: 'blog' }}" target="_blank"><img
                                src="/img/blog_icon/{{ member | map: 'blog_platform' }}.jpg" width="26px"></a>
                    </div>
                </div>
            </div>
            <div class="member-card">
                {% assign member = site.data.members_2 | map: "leeeha" %}
                <div class="folder" id="leeeha">
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="leeeha">
                <div class="modal_close" id="leeeha"><a href="#;">close</a></div>
            </div>
            <div class="modal_wrap" id="leeeha">
                <div class="the_member">
                    <img class="member_image" src="https://github.com/{{ member | map: 'github' }}.png">
                    <div class="member_description">
                        <p class="text" id="title"> {{ member | map: "description" }} </p>
                        <p class="text" id="name"> {{ member | map: "name" }} </p>
                        <P class="text" id="d"> {{ member | map: "introduce" }}</p>
                        <span class="member-icon"><a class="link-dark"
                                href="https://github.com/{{ member | map: 'github' }}" target="_blank"><i
                                    class="fa fa-github fa-2x"></i></a></span>
                        <a rel="author" href="{{ member | map: 'blog' }}" target="_blank"><img
                                src="/img/blog_icon/{{ member | map: 'blog_platform' }}.jpg" width="26px"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Core part end -->
    <!-- member part start -->
    <div class="introduction not-lead-part">
        <p class="who" style="font-family: 'Google Sans';">MEMBER</p>
        <div class="member-card-container">
            <div class="member-card">
                <div class="folder" id="juwhan">
                    {% assign member = site.data.members_2 | map: "juwhan" %}
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="juwhan">
                <div class="modal_close" id="juwhan"><a href="#;">close</a></div>
            </div>
            <div class="modal_wrap" id="juwhan">
                <div class="the_member">
                    <img class="member_image" src="https://github.com/{{ member | map: 'github' }}.png">
                    <div class="member_description">
                        <p class="text" id="title"> {{ member | map: "description" }} </p>
                        <p class="text" id="name"> {{ member | map: "name" }} </p>
                        <P class="text" id="d"> {{ member | map: "introduce" }}</p>
                        <span class="member-icon"><a class="link-dark"
                                href="https://github.com/{{ member | map: 'github' }}" target="_blank"><i
                                    class="fa fa-github fa-2x"></i></a></span>
                        <a rel="author" href="{{ member | map: 'blog' }}" target="_blank"><img
                                src="/img/blog_icon/{{ member | map: 'blog_platform' }}.jpg" width="26px"></a>
                    </div>
                </div>
            </div>
            <div class="member-card">
                <div class="folder" id="dann">
                    {% assign member = site.data.members_2 | map: "dann" %}
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="dann">
                <div class="modal_close" id="dann"><a href="#;">close</a></div>
            </div>
            <div class="modal_wrap" id="dann">
                <div class="the_member">
                    <img class="member_image" src="https://github.com/{{ member | map: 'github' }}.png">
                    <div class="member_description">
                        <p class="text" id="title"> {{ member | map: "description" }} </p>
                        <p class="text" id="name"> {{ member | map: "name" }} </p>
                        <P class="text" id="d"> {{ member | map: "introduce" }}</p>
                        <span class="member-icon"><a class="link-dark"
                                href="https://github.com/{{ member | map: 'github' }}" target="_blank"><i
                                    class="fa fa-github fa-2x"></i></a></span>
                        <a rel="author" href="{{ member | map: 'blog' }}" target="_blank"><img
                                src="/img/blog_icon/{{ member | map: 'blog_platform' }}.jpg" width="26px"></a>
                    </div>
                </div>
            </div>
            <div class="member-card">
                <div class="folder" id="hongmu">
                    {% assign member = site.data.members_2 | map: "hongmu" %}
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="hongmu">
                <div class="modal_close" id="hongmu"><a href="#;">close</a></div>
            </div>
            <div class="modal_wrap" id="hongmu">
                <div class="the_member">
                    <img class="member_image" src="https://github.com/{{ member | map: 'github' }}.png">
                    <div class="member_description">
                        <p class="text" id="title"> {{ member | map: "description" }} </p>
                        <p class="text" id="name"> {{ member | map: "name" }} </p>
                        <P class="text" id="d"> {{ member | map: "introduce" }}</p>
                        <span class="member-icon"><a class="link-dark"
                                href="https://github.com/{{ member | map: 'github' }}" target="_blank"><i
                                    class="fa fa-github fa-2x"></i></a></span>
                        <a rel="author" href="{{ member | map: 'blog' }}" target="_blank"><img
                                src="/img/blog_icon/{{ member | map: 'blog_platform' }}.jpg" width="26px"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- member part end -->
    <div class="introduction not-lead-part">
        <!-- 밑에 공간을 만들어주기 위해서-->
        <div class="member-card-container">
            <div class="member-card"></div>
        </div>
    </div>
    <!-- js는 마지막즈음에 두도록 하자! -->
    <script src="/js/member.js"></script> <!-- 이 js는 꼭 마지막에 두는 것을 추천! html 코드를 보고 움직이기 때문! -->
    <script src="/js/click_members.js"></script>
</body>
