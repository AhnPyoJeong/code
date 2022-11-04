$(document).ready(function(){
    /*
        브라우저를 스크롤하면 header에 fixed 클래스 추가
        $(window).scrollTop() - 브라우저 스크롤값 계산
        $(window).scroll() - 브라우저가 스크롤 될 때마다 실행

        1. 브라우저가 스크롤되면 header에 fixed 클래스 추가
        2. 브라우저가 다시 상단에 올라가면 header에 fixed 클래스 삭제
    */

    let scrolling // 로딩됐을 때 단 한번만 실행
    scrollChk()

    $(window).scroll(function(){ // 스크롤 할 때마다 실행
        scrollChk()
    })
    
    function scrollChk(){
        scrolling = $(window).scrollTop()
        // console.log(scrolling, '스크롤 될 때마다')

        if(scrolling > 0){ // 스크롤 중
            $('.header').addClass('fixed')
        }else{ // 맨 위로 이동
            $('.header').removeClass('fixed')
        }
    }

    /*
        >>> 모바일 메뉴 열기 <<<


        .header .gnb .gnb_open 을 클릭했을 때

        1. .header .gnb 에게 mobile_open 클래스를 추가하거나 삭제
            (닫는 버튼과 여는 버튼 두가지 역할을 모두 함)
        2. .header .gnb .gnb_open strong 에 쓰여있는 글자를
            메뉴 열기, 메뉴 닫기로 변경해줘야 합니다.

        메뉴가 열려있는 상태인지, 메뉴가 닫혀있는 상태인지 구분을 해야함
        닫혀있으면 mobile_open 클래스를 추가, "메뉴 닫기" 로 문구를 변경
        열려있으면 mobile_open 클래스를 삭제, "메뉴 열기" 로 문구를 변경

        mobile_open 클래스가 없으면 닫혀있는 상태
        mobile_open 클래스가 있으면 열려있는 상태
    */

    let gnbStu // 메뉴가 열렸는지 여부를 저장 (true: 열린 상태, false: 닫힌 상태)
    $('.header .gnb .gnb_open').on('click', function(){
        gnbStu = $('.header .gnb').hasClass('mobile_open')
        if(gnbStu == true){ // 열린 상태 - 닫는 기능
            // console.log('ture 열린 상태')
            $('.header .gnb').removeClass('mobile_open')
            $('.header .gnb .gnb_open strong').text('메뉴 열기')
        }else{ // 닫힌 상태 - 여는 기능
            // console.log('false 닫힌 상태')
            $('.header .gnb').addClass('mobile_open')
            $('.header .gnb .gnb_open strong').text('메뉴 닫기')
        }
    })


}) // document.ready 종료