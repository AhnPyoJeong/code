/* header, footer에 포함되는 jquery - 모든 페이지에 공통적으로 적용되는 기능 */

$(document).ready(function(){
    // 로딩됐을 때 단 한번만 실행
    let pcMo; // pc일 때 pc, 모바일일 때 mobile
    let winW
    

    // 브라우저가 리사이즈 될 때마다 실행
    $(window).resize(function(){
        pcChk() // 함수 실행
    }) // window.resize 종료

    function pcChk(){ // 함수 선언
        winW = $(window).width()
        if(winW > 640){
            pcMo = 'pc'
        }else{
            pcMo = 'mobile'
        }
        console.log(pcMo)
    }

    $('.header .gnb > ul > li').on('mouseenter focusin', function(){
        if(pcMo == 'pc'){
            $('.header').addClass('menu_open')
        }
    })
    $('.header').on('mouseleave', function(){
        $('.header').removeClass('menu_open')
    })
    $('.header .gnb > ul > li:last-child > ul > li:last-child > a').on('focusout', function(){
        $('.header').removeClass('menu_open')
    })

    let scrolling
    scrollChk() // 함수 실행

    $(window).scroll(function(){
        scrollChk() // header를 고정하는 함수
        topShow() // top 버튼을 보이게 하는 함수
    })

    function scrollChk(){ // 함수 선언
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 0){
            $('.header').addClass('fixed')
        }else{
            $('.header').removeClass('fixed')
        }
    }

    $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_mobile')
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $('.header').removeClass('menu_mobile')
    })

    $('.header .gnb > ul > li > a').on('click', function(e){
        if(pcMo == 'mobile'){
            e.preventDefault();
            $(this).parents('li').toggleClass('sub_open')
        }
    })


    /* top 버튼을 누르면 상단으로 스크롤 */
    $('aside.top').on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500)
    })

    /* 스크롤을 어느정도 내렸을 때 aside가 나타나고, 스크롤을 다시 올리면 aside가 사라짐 */
    topShow()
    function topShow(){ // 함수 선언
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 400){
            $('aside.top').fadeIn()
        }else{
            $('aside.top').fadeOut()
        }
    }
}) // document.reday 종료