$(document).ready(function(){

    // const myFullpage = new fullpage('#fullpage', {});  이렇게만 써도 fullpage는 기본 동작함

    const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

		navigation: true, /* 오른쪽에 각 페이지의 paging */
		navigationPosition: 'right', /* 위치 */
		
		afterLoad: function(origin, destination, direction, trigger){
			//console.log(destination.index);
			if((destination.index == 2)||(destination.index == 3)||(destination.index == 4)){
				$('.header').addClass('green');
				$('#fp-nav').addClass('green');
			}else{
				$('.header').removeClass('green');
				$('#fp-nav').removeClass('green');
			}
		},
		responsiveWidth: 640 /* fullpage를 적용시키지 않을 모바일 사이즈 */
	});//fullpage


	
	/* 최근소식에 swiper효과 */
	const swiper = new Swiper('.ingredients .list', { /* 팝업을 감싸는 요소의 class명 */
		slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			640: {    /* 640px 이상일때 적용 */
				slidesPerView: 2,
				spaceBetween: 40,
			},
			1200: {    /* 1200px 이상일때 적용 */
				slidesPerView: 3,
				spaceBetween: 40,
			},
		},
		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.btn_paging', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		},
	});

});//document.ready