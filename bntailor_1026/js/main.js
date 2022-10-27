$(document).ready(function(){
    const swiper = new Swiper('.visual .popup', { /* 팝업을 감싸는 요소의 class명 */

    effect: "fade", /* fade 효과 */

    autoplay: {  /* 팝업 자동 실행 */
        delay: 3000,
        disableOnInteraction: true,
    },

    loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

    pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
        el: '.btn_paging', /* 해당 요소의 class명 */
        clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
    },

    }); // visual swiper

    /* visual popup의 정지/재생버튼 */
    $('.visual .popup .btn_stop').on('click', function(){
        let popStatus = $(this).hasClass('play')
        if(popStatus == true){ /* 버튼의 상태가 play 모양 - 현재 정지상태 - 재생기능을 실행 */
            swiper.autoplay.start()
            $(this).removeClass('play')
            $(this).text('일시정지')
        }else{ /* 버튼의 상태가 일시정지 모양 - 현재 재생상태 - 일시정지 기능을 실행 */
            swiper.autoplay.stop()
            $(this).addClass('play')
            $(this).text('재생')
        }
    })

    /* fabric 이미지 스크롤 효과 */
    let scrolling
    let moveTop
    let objName = $('.fabric .inner')
    fabScroll() // 로딩됐을 때 한번
    $(window).scroll(function(){ // 스크롤할 때마다 실행
        fabScroll()
    })

    function fabScroll(){ // 스크롤 값을 계산해서 fabric의 이미지를 움직일 함수
        /*
            스크롤값을 요소의 위치값으로 변경해서 스타일을 적용
            효과를 줄 요소가 화면의 하단에 등장하기 시작했을 때부터
            스크롤한 값을 새로 계산해서 해당 요소에 주어야
            해당 요소가 화면에 자연스럽게 나타남
        */
        scrolling = $(window).scrollTop()
        console.log(scrolling, 'scroll')
        console.log(objName.offset().top, 'top')
        moveTop = scrolling * 0.2
        // objName.css('transform', 'translate(0, -'+moveTop+'px)')
    }

}) // document.ready 종료