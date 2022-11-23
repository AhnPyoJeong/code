$(document).ready(function(){
    const swiper = new Swiper('.container .first .popup', {

    effect: "slide",

    autoplay: {  /* 팝업 자동 실행 */
        delay: 5000,
        disableOnInteraction: true,
    },

    loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

    pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
        el: '.container .side .first .controlbox .count', /* 해당 요소의 class명 */
        clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        type: 'fraction',
    },

    navigation: {  /* 이전, 다음 버튼 */
		nextEl: '.first .button_next',  /* 다음 버튼의 클래스명 */
		prevEl: '.first .button_prev',  
	},

    });


    const swiper_next = new Swiper('.container .second .popup', {

        effect: "slide",
    
        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },
    
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.container .side .second .controlbox .count', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',
        },
    
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.second .button_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.second .button_prev',  
        },
    
    });


    const swiper_travel = new Swiper('.container .main .travel .group .popup', {

        effect: "slide",
    
        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },
    
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.container .main .travel .group .controlbox .count', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',
        },
    
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.container .main .travel .group .controlbox .click .button_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.container .main .travel .group .controlbox .click .button_prev',  
        },
    
    }); // container swiper 종료
        


    /* visual popup의 정지/재생버튼 */
    $('.container .first .controlbox .button_pause').on('click', function(){
        let popStatus = $(this).hasClass('play')
        if(popStatus == true){ /* 버튼의 상태가 play 모양 - 현재 정지상태 - 재생기능을 실행 */
            swiper.autoplay.start()
            $(this).removeClass('play')
            // $(this).text('일시정지')
        }else{ /* 버튼의 상태가 일시정지 모양 - 현재 재생상태 - 일시정지 기능을 실행 */
            swiper.autoplay.stop()
            $(this).addClass('play')
            // $(this).text('재생')
        }
    })

    $('.container .second .controlbox .button_pause').on('click', function(){
        let popStatus = $(this).hasClass('play')
        if(popStatus == true){ /* 버튼의 상태가 play 모양 - 현재 정지상태 - 재생기능을 실행 */
            swiper_next.autoplay.start()
            $(this).removeClass('play')
            $(this).text('일시정지')
        }else{ /* 버튼의 상태가 일시정지 모양 - 현재 재생상태 - 일시정지 기능을 실행 */
            swiper_next.autoplay.stop()
            $(this).addClass('play')
            $(this).text('재생')
        }
    })

    $('.container .main .travel .group .controlbox .controlbox_wrap .button_pause').on('click', function(){
        let popStatus = $(this).hasClass('play')
        if(popStatus == true){ /* 버튼의 상태가 play 모양 - 현재 정지상태 - 재생기능을 실행 */
            swiper_travel.autoplay.start()
            $(this).removeClass('play')
            $(this).text('일시정지')
        }else{ /* 버튼의 상태가 일시정지 모양 - 현재 재생상태 - 일시정지 기능을 실행 */
            swiper_travel.autoplay.stop()
            $(this).addClass('play')
            $(this).text('재생')
        }
    })


    /*
        product .list .tit 고정
        - 스크롤을 내리다가 화면에 product 콘텐츠가 보이면 .tit에 fixed 클래스를 추가
        product 콘텐츠가 화면에 보이는 구간 2399 ~ 4000
        .product .list가 페이지 상단에 도달했을 때 : 콘텐츠가 보일 시작점
        offset().top == 해당 콘텐츠가 브라우저 상단 위쪽에 닿았을 때의 스크롤값

        처음에 tit이 나타나기 전 영역 (다른 콘텐츠와 같이 스크롤되어 따라올라옴)
        tit이 고정되는 영역 (고정되어 옆에 콘텐츠만 스크롤됨) -> fixed 클래스 추가
        tit이 고정된 이후 영역 (다른 콘텐츠와 같이 스크롤되어 사라짐) -> end 클래스 추가
    */

        let fixObj = $('.container .side .side_wrap'); // 고정요소
        let fixArea = $('.container .side'); // 고정요소를 감싸는 영역
        let scrolling
        let fixTop = 130; // css에서 fixed에 준 top 값
        let fixBtm = 100; // css에서 end에 준 bottom 값
        let fixStart; // fixed 시작점
        let fixEnd; // fixed 종료점
        let fixOffset;
        // console.log(fixStart, 'fixStart');
        // console.log(fixEnd, 'fixEnd')
    
        objFixed();
    
        $(window).scroll(function(){
            objFixed();
        })
    
        $(window).resize(function(){
            objFixed();
        });
    
        function objFixed(){
            // console.log(scrolling)
            scrolling = $(window).scrollTop()
            fixStart = fixArea.offset().top - fixTop;
            fixEnd = fixArea.offset().top + fixArea.height() - fixObj.height() - fixBtm - fixTop;
    
            if(scrolling < fixStart){ // 위에서부터 tit이 고정되기 전
                // fixObj.removeClass('fixed')
                // fixObj.removeClass('end')
            }else if((scrolling >= fixStart)&&(scrolling < fixEnd)){ // tit이 고정될 때
                fixOffset = scrolling - fixStart
                console.log(fixOffset)
                fixObj.css('margin-top', fixOffset + 'px')
                // fixObj.addClass('fixed')
                // fixObj.removeClass('end')
            }else{ // tit이 고정된 이후
                // fixObj.removeClass('fixed')
                // fixObj.addClass('end')
            }
        }




        $('.container .main .news .noticebox .tab ul li').on('click', function(){
            $('.container .main .news .noticebox .tab ul li').removeClass('active')
            $(this).addClass('active')
        })


        $('.container .main .service .bottom .userbox .tab > ul > li').on('click', function(){
            $('.container .main .service .bottom .userbox .tab > ul > li').removeClass('active')
            $(this).addClass('active')
        })




        // $('.container .main .service .noticebox .tab_menu button').on('click', function(){
        //     $('.container .main .service .noticebox .tab_menu').toggleClass('open')
        // })




        $('.container .main .service .top .noticebox .tab_menu ul li').on('click', function(){

            let service_name = $(this).attr('data-name')
            if(service_name != 'none'){
                $('.container .main .service .top .noticebox .tab_menu ul li').removeClass('active')
                $(this).addClass('active')
                $('.container .main .service .noticebox .tab_contents ul li').removeClass('active')
                $('.container .main .service .noticebox .tab_contents ul li[data-name = "'+service_name+'"]').addClass('active')
            }

            console.log(service_name)
        })



        

}) // document.ready 종료