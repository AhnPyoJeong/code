$(document).ready(function(){
    let winW = $(window) .width()
    let docW = $(document).width()
    console.log(winW)
    console.log(docW)

    // $('header').addClass('fixed')
    // $('header').removeClass('fixed')

    // TOP 버튼을 클릭했을 때 상단으로 스크롤
    $('aside button').on('click', function(){
        console.log('눌렀어')
        // $(window).scrollTop(0)
        $('html, body').animate({
            scrollTop : 0 
        },500)
    })

    /*
        header에
        조건 1 - 스크롤 값이 0보다 크면 header에 fixed 클래스 추가
        조건 2 - 스크롤 값이 0이면 header에 fixed 클래스 삭제
    */
    // ↓ 로딩했을 때 처음 한번만 실행
    let scrolling
    headerFixed() // 함수의 실행

    /* ↓ 스크롤 할 때마다 실행 (스크롤 안하면 실행 X) */
    $(window).scroll(function(){
        headerFixed() // 함수의 실행
    })

    function headerFixed(){ // 함수의 선언
        scrolling = $(window).scrollTop()
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }

    /*
        header nav에 마우스를 올리면
        header에 open 클래스를 추가함
    */
    $('header nav > ul').on('mouseenter focusin', function(){
        $('header').addClass('open')
    })
    $('header').on('mouseleave focusout', function(){
        $('header').removeClass('open')
    $('header nav > ul > li:last-child > ul > li:last-child').on('focusout')
        $('header').removeClass('open')
    })




    /*
        콘텐츠 고정 jquery
        
        css로 fixed 고정일 때, end - fixed 종료 후 css를 먼저 줘야함
    */

    let fixObj = $('.product h2'); // 고정요소
    let fixArea = $('.product'); // 고정요소를 감싸는 영역
    let fixTop = 144; // css에서 fixed에 준 top 값
    let fixBtm = 142; // css에서 end에 준 bottom 값
    let fixStart; // fixed 시작점
    let fixEnd; // fixed 종료점
    let fixScroll = $(window).scrollTop; // 브라우저 스크롤 값

    objFixed();

    $(window).scroll(function(){
        fixScroll = $(window).scrollTop();
        objFixed();
    })

    $(window).resize(function(){
        objFixed();
    });

    function objFixed(){
        // console.log(fixScroll)
        fixStart = fixArea.offset().top - fixTop;
        fixEnd = fixArea.offset().top + fixArea.height() - fixObj.height() - fixBtm - fixTop;

        if(fixScroll < fixStart){ // 위에서부터 tit이 고정되기 전
            fixObj.removeClass('fixed')
            fixObj.removeClass('end')
        }else if((fixScroll >= fixStart)&&(fixScroll < fixEnd)){ // tit이 고정될 때
            fixObj.addClass('fixed')
            fixObj.removeClass('end')
        }else{ // tit이 고정된 이후
            fixObj.removeClass('fixed')
            fixObj.addClass('end')
        }
    }
})

