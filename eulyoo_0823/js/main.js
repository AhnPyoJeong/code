/*
    언제 : 스크롤을 내렸을 때
    누구를 : "header" 를    //  $('header')
    어떻게 : "fixed" 클래스를 추가해서   // addClass() <- 클래스를 추가하는 명령어

    다시 스크롤을 위로 올렸을 때 "fixed" 클래스를 삭제해야함

    $(window).scrollTop();  <- 얼마나 스크롤되었는지 계산해주는 명령어

    스크롤을 200보다 많이 하면 "fixed" 를 추가하고
    200보다 적게 하면 "fixed" 삭제
*/

let scrolling = $(window).scrollTop()

$(window).scroll(function(){
    scrolling = $(window).scrollTop()
    // console.log(scrolling)

    if(scrolling > 0){
        $('header').addClass('fixed')
    }else{
        $('header').removeClass('fixed')
    }
});