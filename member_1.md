---
layout: mem_page
permalink: /members/1
title: MEMBER - 1st_term
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
                <div class="folder" id="su">
                    {% assign member = site.data.members_1 | map: "twinklesu" %}
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="su">
                <div class="modal_close" id="su"><a href="#;">close</a></div>
            </div>
            <!-- modal start -->
            <div class="modal_wrap" id="su">
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
                    {% assign member = site.data.members_1 | map: "Songminseon" %}
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
                {% assign member = site.data.members_1 | map: "seongryool" %}
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
                {% assign member = site.data.members_1 | map: "comye1" %}
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
                {% assign member = site.data.members_1 | map: "KangInyeong" %}
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
                {% assign member = site.data.members_1 | map: "juijeong8324" %}
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
                {% assign member = site.data.members_1 | map: "goldtan" %}
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
            <div class="member-card">
                {% assign member = site.data.members_1 | map: "YeongHyeon-Kim" %}
                <div class="folder" id="yh">
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="yh">
                <div class="modal_close" id="yh"><a href="#;">close</a></div>
            </div>
            <div class="modal_wrap" id="yh">
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
                {% assign member = site.data.members_1 | map: "keonju2" %}
                <div class="folder" id="keonju2">
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="keonju2">
                <div class="modal_close" id="keonju2"><a href="#;">close</a></div>
            </div>
            <div class="modal_wrap" id="keonju2">
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
                {% assign member = site.data.members_1 | map: "ritty27" %}
                <div class="folder" id="jisoo">
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="jisoo">
                <div class="modal_close" id="jisoo"><a href="#;">close</a></div>
            </div>
            <div class="modal_wrap" id="jisoo">
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
                {% assign member = site.data.members_1 | map: "shinyubin989" %}
                <div class="folder" id="shinyubin989">
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="shinyubin989">
                <div class="modal_close" id="shinyubin989"><a href="#;">close</a></div>
            </div>
            <div class="modal_wrap" id="shinyubin989">
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
                {% assign member = site.data.members_1 | map: "Yangyongsu" %}
                <div class="folder" id="yongsu">
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="yongsu">
                <div class="modal_close" id="yongsu"><a href="#;">close</a></div>
            </div>
            <div class="modal_wrap" id="yongsu">
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
                {% assign member = site.data.members_1 | map: "Seung Un Oh" %}
                <div class="folder" id="pathpioneer">
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="pathpioneer">
                <div class="modal_close" id="pathpioneer"><a href="#;">close</a></div>
            </div>
            <div class="modal_wrap" id="pathpioneer">
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
                {% assign member = site.data.members_1 | map: "JunginO" %}
                <div class="folder" id="jungin">
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="jungin">
                <div class="modal_close" id="jungin"><a href="#;">close</a></div>
            </div>
            <div class="modal_wrap" id="jungin">
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
                {% assign member = site.data.members_1 | map: "ehrwk" %}
                <div class="folder" id="ehrwk">
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="ehrwk">
                <div class="modal_close" id="ehrwk"><a href="#;">close</a></div>
            </div>
            <div class="modal_wrap" id="ehrwk">
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
                {% assign member = site.data.members_1 | map: "drizzle0171" %}
                <div class="folder" id="drizzle">
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="drizzle">
                <div class="modal_close" id="drizzle"><a href="#;">close</a></div>
            </div>
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
            <div class="member-card">
                {% assign member = site.data.members_1 | map: "leeeha" %}
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
                    </div>
                </div>
            </div>
            <div class="member-card">
                {% assign member = site.data.members_1 | map: "InHyeok-J" %}
                <div class="folder" id="jih">
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="jih">
                <div class="modal_close" id="jih"><a href="#;">close</a></div>
            </div>
            <div class="modal_wrap" id="jih">
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
                {% assign member = site.data.members_1 | map: "yoon-H" %}
                <div class="folder" id="yoonjae">
                </div>
                <span class="member-name">{{ member | map: "name" }}</span>
            </div>
            <div class="black_bg" id="yoonjae">
                <div class="modal_close" id="yoonjae"><a href="#;">close</a></div>
            </div>
            <div class="modal_wrap" id="yoonjae">
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
