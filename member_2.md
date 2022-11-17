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

             <div class="member-card">
                 <div class="folder" id="jwyeeh-dev">

                 </div>
                 <span class="member-name">황재영</span>
             </div>
             <div class="black_bg" id="jwyeeh-dev">
                 <div class="modal_close" id="jwyeeh-dev"><a href="#;">close</a></div>
             </div>
             <div class="modal_wrap" id="jwyeeh-dev">
                 <div class="the_member">
                     <img class="member_image" src="https://github.com/jwyeeh-dev.png" />
                     <div class="member_description">
                         <p class="text" id="title">매번 새롭고, 도전적으로. </p>
                         <p class="text" id="name"> 황재영 </p>
                         <p class="text" id="d"> 안녕하세요! 저는 서울과학기술대학교 전기정보공학과 17학번 황재영입니다! GDSC로써 활동할 수 있다는 것에 벌써부터 많이 설레네요😆 <br> 요즘의 저는 ML, DL, 시각화, 분석 등 하고싶은게 정말 많아요! 그래서 사람들과 다양한 걸 경험해보고, 무언가 의미있는 결과를 만들어내고, 더 나아가서 많은 사람들에게 도움이 되는 데이터 사이언티스트가 되고 싶다는 큰 포부를 가지고 있습니다! <br> 그러니까 여러 프로젝트 같이 하실 분 있으시면 같이 해요!😄 <br> 앞으로 1년간 열심히 공부하고 한층 더 성장했으면 좋겠습니다! 잘 부탁드려요! 👋🏻</p>
                         <span class="member-icon"><a class="link-dark" href="https://github.com/jwyeeh-dev" target="_blank"><i class="fa fa-github fa-2x"></i></a></span>
                         <a rel="author" href="https://jwyeeh.tistory.com/" target="_blank"><img src="/img/blog_icon/tistory.jpg" width="26px" /></a>
                     </div>
                 </div>
             </div>

             <div class="member-card">
                 <div class="folder" id="yoouung">

                 </div>
                 <span class="member-name">박재영</span>
             </div>
             <div class="black_bg" id="yoouung">
                 <div class="modal_close" id="yoouung"><a href="#;">close</a></div>
             </div>
             <div class="modal_wrap" id="yoouung">
                 <div class="the_member">
                     <img class="member_image" src="https://github.com/yoouung.png" />
                     <div class="member_description">
                         <p class="text" id="title">LUCETE, 밝게 빛나라 </p>
                         <p class="text" id="name"> 박재영 </p>
                         <p class="text" id="d"> 안녕하세요! ITM전공 19학번 박재영입니다. 휴학하고 이것저것 해보다보니 웹 개발에 관심이 생겨 GDSC 웹 멤버로 활동하게 됐습니다! 백엔드보다는 결과가 바로 보이는 프론트가 주 관심사입니다👀 <br/> 일 벌리기를 좋아해서 꽤 알찬 휴학생활을 보내고 있어요. 아직은 해보고 싶은 것이 많이 남아있지만 하나씩 이루어가보려고 합니다. 그 중 첫 번째로 GDSC 2기로 활동하면서 많이 성장하고 발전하고 싶어요!  </p>
                         <span class="member-icon"><a class="link-dark" href="https://github.com/yoouung" target="_blank"><i class="fa fa-github fa-2x"></i></a></span>
                         <a rel="author" href="https://velog.io/@yoouung" target="_blank"><img src="/img/blog_icon/velog.jpg" width="26px" /></a>
                     </div>
                 </div>
             </div>

             <div class="member-card">
                 <div class="folder" id="Higeuni">

                 </div>
                 <span class="member-name">김효근</span>
             </div>
             <div class="black_bg" id="Higeuni">
                 <div class="modal_close" id="Higeuni"><a href="#;">close</a></div>
             </div>
             <div class="modal_wrap" id="Higeuni">
                 <div class="the_member">
                     <img class="member_image" src="https://github.com/higeuni.png" />
                     <div class="member_description">
                         <p class="text" id="title">오늘보다 내일 더 나은 사람</p>
                         <p class="text" id="name"> 김효근 </p>
                         <p class="text" id="d">안녕하세요! 저는 컴퓨터공학과 18학번 김효근입니다! 원래 컴퓨터비전을 공부하다가 최근에 백엔드에 관심을 갖게 되어서 한이음이랑 친구들과 프로젝트를 진행하면서 공부하고 있어요! 많이 부족한만큼 더 열심히 배우겠습니다. 다양한 분야에 관심이 많아서 다른 것들도 함께하면 좋을 거 같아요. 1년동안 잘 부탁드립니다!! </p>
                         <span class="member-icon"><a class="link-dark" href="https://github.com/higeuni" target="_blank"><i class="fa fa-github fa-2x"></i></a></span>
                         <a rel="author" href="https://khyogeun.tistory.com/" target="_blank"><img src="/img/blog_icon/tistory.jpg" width="26px" /></a>
                     </div>
                 </div>
             </div>

             <div class="member-card">
                 <div class="folder" id="seunggu">

                 </div>
                 <span class="member-name">강승구</span>
             </div>
             <div class="black_bg" id="seunggu">
                 <div class="modal_close" id="seunggu"><a href="#;">close</a></div>
             </div>
             <div class="modal_wrap" id="seunggu">
                 <div class="the_member">
                     <img class="member_image" src="https://github.com/kang9366.png" />
                     <div class="member_description">
                         <p class="text" id="title">시작이 반이다</p>
                         <p class="text" id="name"> 강승구 </p>
                         <p class="text" id="d">안녕하세요 안드로이드 멤버 컴퓨터공학과 22학번 강승구입니다! 안드로이드 개발에 관심이 많아서 안드로이드 개발자로 진로를 정하였고 일년동안 열심히 공부해보기 위해 GDSC에 들어오게 되었습니다. <br> 안드로이드 개발을 통해 많은 사람들에게 도움을 줄 수 있는 앱을 개발하는 것이 저의 목표입니다. 아직은 많이 부족하지만 GDSC활동을 통해 더욱 성장할 수 있도록 노력하겠습니다!</p>
                         <span class="member-icon"><a class="link-dark" href="https://github.com/kang9366" target="_blank"><i class="fa fa-github fa-2x"></i></a></span>
                     </div>
                 </div>
             </div>

             <div class="member-card">
                 <div class="folder" id="chunngye">

                 </div>
                 <span class="member-name">박민영</span>
             </div>
             <div class="black_bg" id="chunngye">
                 <div class="modal_close" id="chunngye"><a href="#;">close</a></div>
             </div>
             <div class="modal_wrap" id="chunngye">
                 <div class="the_member">
                     <img class="member_image" src="https://github.com/chunngye.png" />
                     <div class="member_description">
                         <p class="text" id="title">기꺼이 도전하자</p>
                         <p class="text" id="name"> 박민영 </p>
                         <p class="text" id="d">저는 서울과기대 컴퓨터공학과 21학번 박민영입니다! 백엔드 공부를 하다가 협업 웹 프로젝트에 참여해보고 싶어서 GDSC에 지원하게 되었습니다. GDSC에서 리액트와 스프링을 충분히 익혀서 멋진 웹 프로젝트를 해보고 싶습니다. 1년 동안 함께 성장해가면 좋을 것 같습니다. 잘 부탁 드립니다!</p>
                         <span class="member-icon"><a class="link-dark" href="https://github.com/chunngye" target="_blank"><i class="fa fa-github fa-2x"></i></a></span>
                         <a rel="author" href="https://1030pmy.devdojo.com/" target="_blank"><img src="/img/blog_icon/devdojo.png" width="26px" /></a>
                     </div>
                 </div>
             </div>

             <div class="member-card">
                 <div class="folder" id="gagyeong">

                 </div>
                 <span class="member-name">김가경</span>
             </div>
             <div class="black_bg" id="gagyeong">
                 <div class="modal_close" id="gagyeong"><a href="#;">close</a></div>
             </div>
             <div class="modal_wrap" id="gagyeong">
                 <div class="the_member">
                     <img class="member_image" src="https://github.com/gaguriee.png" />
                     <div class="member_description">
                         <p class="text" id="title">일단 가보자고</p>
                         <p class="text" id="name"> 김가경 </p>
                         <p class="text" id="d">저는 서울과학기술대학교 itm 전공 20학번 김가경입니다. 현재 안드로이드 앱 개발을 위해 코틀린을 공부하고 있으며, 간간이 웹 개발도 해보고 있습니다.  <br> 저는 GDSC에서 다양한 전공, 분야의 사람들과 개발에 관한 경험을 이야기해 보고 싶어서 들어오게 되었습니다. <br> 뭐든지 주저하지 않고 우선 해보는 자세를 추구합니다. 잘 부탁드려요~!</p>
                         <span class="member-icon"><a class="link-dark" href="https://github.com/gaguriee" target="_blank"><i class="fa fa-github fa-2x"></i></a></span>
                     </div>
                 </div>
             </div>

             <div class="member-card">
                 <div class="folder" id="hyunjun">

                 </div>
                 <span class="member-name">심현준</span>
             </div>
             <div class="black_bg" id="hyunjun">
                 <div class="modal_close" id="hyunjun"><a href="#;">close</a></div>
             </div>
             <div class="modal_wrap" id="hyunjun">
                 <div class="the_member">
                     <img class="member_image" src="https://github.com/jake0319.png" />
                     <div class="member_description">
                         <p class="text" id="title">후회 없이,현명하게 살고자 항상 노력해요</p>
                         <p class="text" id="name"> 심현준 </p>
                         <p class="text" id="d">저는 서울과기대 산업정보시스템공학과 20학번 심현준입니다! 프론트엔드 개발자를 목표로 공부해오던 중 좋은 사람들과 함께 협업하고 싶어서 GDSC에 지원하였습니다. <br> 개발자는 혼자 모든 것을 만들어낼 수는 없죠, 그만큼 소통과 협업 능력이 중요한 직업이라고 생각합니다. <br> GDSC에서 다 같이 함께 소통하고 협업하고 성장하자구요! 잘 부탁드립니다.😆</p>
                         <span class="member-icon"><a class="link-dark" href="https://github.com/jake0319" target="_blank"><i class="fa fa-github fa-2x"></i></a></span>
                         <a rel="author" href="https://velog.io/@jakescake" target="_blank"><img src="/img/blog_icon/velog.jpg" width="26px" /></a>
                     </div>
                 </div>
             </div>

             <div class="member-card">
                 <div class="folder" id="jonghun">

                 </div>
                 <span class="member-name">이종훈</span>
             </div>
             <div class="black_bg" id="jonghun">
                 <div class="modal_close" id="jonghun"><a href="#;">close</a></div>
             </div>
             <div class="modal_wrap" id="jonghun">
                 <div class="the_member">
                     <img class="member_image" src="https://github.com/rivkode.png" />
                     <div class="member_description">
                         <p class="text" id="title">선택보단 노력</p>
                         <p class="text" id="name"> 이종훈 </p>
                         <p class="text" id="d">안녕하세요, 서울과학기술대학교 컴퓨터공학과 이종훈입니다. <br>소프트웨어를 통해 지구(Earth)에 도움을 주는 개발자가 되고 싶습니다. Java, Spring에 관심이 많으며 그 외에도 창업, 경제 등 배우고싶은게 많은 사람 중 한명 입니다 ! 여기 GDSC에 계신분들과 자유롭게 소통하며 함께 성장하는 시간이 되도록 노력하겠습니다 😊</p>
                         <span class="member-icon"><a class="link-dark" href="https://github.com/rivkode" target="_blank"><i class="fa fa-github fa-2x"></i></a></span>
                         <a rel="author" href="https://velog.io/@rivkode" target="_blank"><img src="/img/blog_icon/velog.jpg" width="26px" /></a>
                     </div>
                 </div>
             </div>

             <div class="member-card">
                 <div class="folder" id="hyeok">

                 </div>
                 <span class="member-name">김혁</span>
             </div>
             <div class="black_bg" id="hyeok">
                 <div class="modal_close" id="hyeok"><a href="#;">close</a></div>
             </div>
             <div class="modal_wrap" id="hyeok">
                 <div class="the_member">
                     <img class="member_image" src="https://github.com/hyeok55.png" />
                     <div class="member_description">
                         <p class="text" id="title">노력안할거면 재입대</p>
                         <p class="text" id="name"> 김혁 </p>
                         <p class="text" id="d">안녕하세요, ITM 전공을 재학 중인 19학번 김혁 입니다. 저는 현재 데이터 분야에 관심이 많고 ML,DL에 관심이 많습니다. 저는 저 혼자 공부하는 것이 아닌 동료들과 공부하고 싶어 GDSC에 지원하게 되었습니다 .  GDSC를 통해 함께 성장해 나갔으면 좋겠습니다:)</p>
                         <span class="member-icon"><a class="link-dark" href="https://github.com/hyeok55" target="_blank"><i class="fa fa-github fa-2x"></i></a></span>
                         <a rel="author" href="https://velog.io/@jg31109" target="_blank"><img src="/img/blog_icon/velog.jpg" width="26px" /></a>
                     </div>
                 </div>
             </div>

             <div class="member-card">
                 <div class="folder" id="yeonsu">

                 </div>
                 <span class="member-name">김연수</span>
             </div>
             <div class="black_bg" id="yeonsu">
                 <div class="modal_close" id="yeonsu"><a href="#;">close</a></div>
             </div>
             <div class="modal_wrap" id="yeonsu">
                 <div class="the_member">
                     <img class="member_image" src="https://github.com/dustnehowl.png" />
                     <div class="member_description">
                         <p class="text" id="title">미루지 말자, 어짜피 다 내가 할 일이다.</p>
                         <p class="text" id="name"> 김연수 </p>
                         <p class="text" id="d">안녕하세요 서울과학기술대학교 컴퓨터공학과 재학중인 김연수입니다. 데이터 분석, 딥러닝, 머신러닝 등 데이터를 다루는 일에 흥미가 있어 데이터 엔지니어를 목표로 공부를 하고 있습니다. 공통 관심사를 가진 사람과 함께 성장하고 싶어 gdsc 2기 멤버로 활동하게 되었습니다. 잘 부탁드립니다!</p>
                         <span class="member-icon"><a class="link-dark" href="https://github.com/dustnehowl" target="_blank"><i class="fa fa-github fa-2x"></i></a></span>
                     </div>
                 </div>
             </div>

             <div class="member-card">
                 <div class="folder" id="songhee">

                 </div>
                 <span class="member-name">백송희</span>
             </div>
             <div class="black_bg" id="songhee">
                 <div class="modal_close" id="songhee"><a href="#;">close</a></div>
             </div>
             <div class="modal_wrap" id="songhee">
                 <div class="the_member">
                     <img class="member_image" src="https://github.com/100SongH.png" />
                     <div class="member_description">
                         <p class="text" id="title">하고 싶은 일은 재밌게, 최선을 다해서</p>
                         <p class="text" id="name"> 백송희 </p>
                         <p class="text" id="d">안녕하세요! 전자IT미디어공학과 19학번 백송희입니다. 현재 컴퓨터공학과 복수전공을 하며 안드로이드 개발자를 꿈꾸고 있습니다. <br>학교 다닐 때 많은 일을 해보며 가보지 않은 길에 대한 후회를 남기지 않으려고 노력하고 있습니다. 같이 열심히 노력하며 성장하고 싶습니다. 감사합니다</p>
                         <span class="member-icon"><a class="link-dark" href="https://github.com/100SongH" target="_blank"><i class="fa fa-github fa-2x"></i></a></span>
                     </div>
                 </div>
             </div>

             <div class="member-card">
                 <div class="folder" id="jeongjoon">

                 </div>
                 <span class="member-name">박정준</span>
             </div>
             <div class="black_bg" id="jeongjoon">
                 <div class="modal_close" id="jeongjoon"><a href="#;">close</a></div>
             </div>
             <div class="modal_wrap" id="jeongjoon">
                 <div class="the_member">
                     <img class="member_image" src="https://github.com/prislewarz.png" />
                     <div class="member_description">
                         <p class="text" id="title">GDSC 멤버가 되기 위한 노력과 GDSC에서의 경험은 제 인생의 전환점이 될 것입니다.</p>
                         <p class="text" id="name"> 박정준 </p>
                         <p class="text" id="d">안녕하세요. 서울과학기술대학교 산업정보시스템전공 21학번 박정준입니다. 작년 1기 지원 당시 서류는 합격했지만 면접을 볼 수 없어 탈락했던 아쉬움에 2기에는 기필코 합격하고자 많은 노력이 있었고, 그 과정에서 제게 큰 용기가 필요했습니다. 포기하지 않고 일단 부딪혀보자는 심정으로 지원했고 그 결과 이 자리에 있게 되었습니다. IT 분야 전반적으로 흥미가 있어, DL커리큘럼 이외에도 CS나 웹, 앱 등 다양하게 공부해보고 싶습니다! 동기부여와 함께 실력 향상, 그리고 인적 네트워킹을 통한 낮가림 극복과 사교력(협업능력) 증진을 위해 GDSC 멤버가 되었는데, 제 인생이 GDSC 활동 전과 후로 나뉠 수 있도록, 목표한 바를 모두 이뤄 GDSC 최고 수혜자가 될 수 있도록 최선을 다하겠습니다!</p>
                         <span class="member-icon"><a class="link-dark" href="https://github.com/prislewarz" target="_blank"><i class="fa fa-github fa-2x"></i></a></span>
                     </div>
                 </div>
             </div>

             <div class="member-card">
                 <div class="folder" id="dongyoung">

                 </div>
                 <span class="member-name">조동영</span>
             </div>
             <div class="black_bg" id="dongyoung">
                 <div class="modal_close" id="dongyoung"><a href="#;">close</a></div>
             </div>
             <div class="modal_wrap" id="dongyoung">
                 <div class="the_member">
                     <img class="member_image" src="https://github.com/ezcho.png" />
                     <div class="member_description">
                         <p class="text" id="title">극한의 효율을 추구하는 삶</p>
                         <p class="text" id="name"> 조동영 </p>
                         <p class="text" id="d">안녕하세요! 웹파트 멤버 컴퓨터공학과 19학번 조동영입니다.<br>아직 2학년인 저는 시스템 프로그래밍, 웹페이지 제작, Open stack등 다양한 분야에 발을 담구기 위해 시도 중 입니다!! <br> 성능을 추구하는 우리의 개발처럼 저의 삶도 효율적이고 완벽하게 꾸며나가고 싶습니다!<br> GDSC사람들과 1년동안 열심히하며! 팀 활동을 통해 최고의 성장을 하는 관계로 발전했으면 좋겠습니다!!</p>
                         <span class="member-icon"><a class="link-dark" href="https://github.com/ezcho" target="_blank"><i class="fa fa-github fa-2x"></i></a></span>
                     </div>
                 </div>
             </div>

             <div class="member-card">
                 <div class="folder" id="junseok">

                 </div>
                 <span class="member-name">전준석</span>
             </div>
             <div class="black_bg" id="junseok">
                 <div class="modal_close" id="junseok"><a href="#;">close</a></div>
             </div>
             <div class="modal_wrap" id="junseok">
                 <div class="the_member">
                     <img class="member_image" src="https://github.com/gumchinjun.png" />
                     <div class="member_description">
                         <p class="text" id="title">재밌지만 후회없는 인생을 살자!</p>
                         <p class="text" id="name"> 전준석 </p>
                         <p class="text" id="d">안녕하세요 서울과학기술대학교 ITM전공에 재학중인 19학번 전준석입니다. 아직까지 많은 분야를 접해보지는 않았지만 데이터 공부에 관심을 갖고 공부하고 있습니다 다양하고 열정 많은 GDSC 사람들과 교류하며 배우고 나눌 수 있는 멤버로 성장하고 싶습니다. 1년동안 후회하지 않기 위해 열심히 노력하겠습니다.</p>
                         <span class="member-icon"><a class="link-dark" href="https://github.com/gumchinjun" target="_blank"><i class="fa fa-github fa-2x"></i></a></span>
                     </div>
                 </div>
             </div>

             <div class="member-card">
                 <div class="folder" id="minseob">

                 </div>
                 <span class="member-name">이민섭</span>
             </div>
             <div class="black_bg" id="minseob">
                 <div class="modal_close" id="minseob"><a href="#;">close</a></div>
             </div>
             <div class="modal_wrap" id="minseob">
                 <div class="the_member">
                     <img class="member_image" src="https://github.com/MinCOnMinCon.png" />
                     <div class="member_description">
                         <p class="text" id="title">경험하고 생각하기</p>
                         <p class="text" id="name"> 이민섭 </p>
                         <p class="text" id="d">안녕하세요. 저는 서울과기대 컴퓨터공학과 22학번 이민섭입니다. 아직 1학년 1학기밖에 지내지 못해 모르는 게 많아 GDSC에 신청하게 되었습니다. <br> 목표는 이번 1년의 활동을 통해 앞으로의 개발자 생활의 기반을 쌓는 것 입니다! 성실히 해서 다른 분들께 누가 되지 않도록 노력하겠습니다!</p>
                         <span class="member-icon"><a class="link-dark" href="https://github.com/MinCOnMinCon" target="_blank"><i class="fa fa-github fa-2x"></i></a></span>
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
