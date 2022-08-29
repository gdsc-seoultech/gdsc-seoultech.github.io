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
                <div class="folder" id="min">
                    {% assign member = site.data.members_2 | map: "Songminseon" %}
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="min">
                <div class="modal_close" id="min"><a href="#;">close</a></div>
            </div>
            <div class="modal_wrap" id="min">
                <div class="the_member">
                    <img class="member_image" src="https://github.com/{{ member | map: 'github' }}.png">
                    <div class="member_description">
                        <p class="text" id="title"> {{ member | map: "description" }} </p>
                        <p class="text" id="name"> {{ member | map: "name" }} </p>
                        <P class="text" id="d"> {{ member | map: "introduce" }}</p>
                        <span class="member-icon"><a class="link-dark"
                                href="https://github.com/{{ member | map: 'github' }}" target="_blank"><i
                                    class="fa fa-github fa-2x"></i></a></span>
                    </div>
                </div>
            </div>
            <div class="member-card">
                {% assign member = site.data.members_2 | map: "seongryool" %}
                <div class="folder" id="seong">
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="seong">
                <div class="modal_close" id="seong"><a href="#;">close</a></div>
            </div>
            <div class="modal_wrap" id="seong">
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
                {% assign member = site.data.members_2 | map: "comye1" %}
                <div class="folder" id="ye">
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="ye">
                <div class="modal_close" id="ye"><a href="#;">close</a></div>
            </div>
            <div class="modal_wrap" id="ye">
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
                {% assign member = site.data.members_2 | map: "KangInyeong" %}
                <div class="folder" id="in">
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="in">
                <div class="modal_close" id="in"><a href="#;">close</a></div>
            </div>
            <div class="modal_wrap" id="in">
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
                {% assign member = site.data.members_2 | map: "juijeong8324" %}
                <div class="folder" id="ui">
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="ui">
                <div class="modal_close" id="ui"><a href="#;">close</a></div>
            </div>
            <div class="modal_wrap" id="ui">
                <div class="the_member">
                    <img class="member_image" src="https://github.com/{{ member | map: 'github' }}.png">
                    <div class="member_description">
                        <p class="text" id="title"> {{ member | map: "description" }} </p>
                        <p class="text" id="name"> {{ member | map: "name" }} </p>
                        <P class="text" id="d"> {{ member | map: "introduce" }}</p>
                        <span class="member-icon"><a class="link-dark"
                                href="https://github.com/{{ member | map: 'github' }}" target="_blank"><i
                                    class="fa fa-github fa-2x"></i></a></span>
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
                {% assign member = site.data.members_2 | map: "goldtan" %}
                <div class="folder" id="goldtan">
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="goldtan">
                <div class="modal_close" id="goldtan"><a href="#;">close</a></div>
            </div>
            <div class="modal_wrap" id="goldtan">
                <div class="the_member">
                    <img class="member_image" src="https://github.com/{{ member | map: 'github' }}.png">
                    <div class="member_description">
                        <p class="text" id="title"> {{ member | map: "description" }} </p>
                        <p class="text" id="name"> {{ member | map: "name" }} </p>
                        <P class="text" id="d"> {{ member | map: "introduce" }}</p>
                        <span class="member-icon"><a class="link-dark"
                                href="https://github.com/{{ member | map: 'github' }}" target="_blank"><i
                                    class="fa fa-github fa-2x"></i></a></span>
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
