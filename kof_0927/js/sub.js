$(document).ready(function(){
    /*
        lnb에 메뉴를 클릭하면 하위 메뉴가 나타났다가 사라짐
        .lnb .menu .depth .btn 를 클릭했을때 
        .lnb .menu .depth에 open 클래스가 들어감/뺌
        -- open클래스가 들어가면 열린상태
        -- open클래스가 없으면 닫힘
        --> 하나의 버튼으로 열고/닫고를 동시에 실시
        --> .btn 태그의 title을 메뉴 열기/닫기 라고 문구를 수정
            $('.lnb .menu .depth .btn').attr('title', '메뉴 닫기');

        btn을 클릭했을때 현재 열려있는 상태인지, 닫혀있는 상태인지 파악
        .lnb .menu .depth에 open 클래스가 있으면 열린상태, 없으면 닫힌상태
        $('.lnb .menu .depth').hasClass('open');
    */
    
    let lnbSt;
    $('.lnb .menu .depth .btn').on('click', function(){
        lnbSt = $(this).parents('.depth').hasClass('open');
        if(lnbSt == true){ //열린상태 - 닫는 기능
            $(this).parents('.depth').removeClass('open');
            $(this).attr('title', '메뉴 열기');
            $(this).next().slideUp(200);
        }else{ //닫힌상태 - 여는 기능
            $(this).parents('.depth').addClass('open');
            $(this).attr('title', '메뉴 닫기');
            $(this).next().slideDown(200);
        }
    });//lnb click이벤트 종료

});//document.ready 종료

