$(document).ready(function(){
    const swiper = new Swiper('.visual1', {
        // Optional parameters
        loop: true,
        effect: "fade", // fade 효과로 팝업 넘김 (좌우 슬라이드 - slide)

        autoplay: { // 자동 실행
            delay: 500, // 팝업 하나가 머무르는 시간
            disableOnInteraction: false,
        },
        
        // 팝업의 수만큼 하단 동그라미를 그려주거나 1/5 같이 팝업 수를 표시하는 요소
        pagination: {
            el: '.ctrl_paging',
            clickable: true, // 동그라미일 때, 동그라미를 클릭할 수 있게 해주는 요소
            type: "fraction", // 하단에 팝업 수를 숫자로 표시
        },
        
        // 이전, 다음 버튼
        navigation: {
            nextEl: '.ctrl_next',
            prevEl: '.ctrl_prev',
        },
    });

    $('.visual1 .ctrl_stop').on('click', function(){
        swiper.autoplay.stop();  /* 일시정지 기능 */
    })
    $('.visual1 .ctrl_play').on('click', function(){
        swiper.autoplay.start();  /* 재생 기능 */
    })
})