/*
Author: Vladimir Kharlampidi, The iDangero.us
*/
document.createElement('header');
document.createElement('footer');

$(function(){
	
	//Main Swiper
	var swiper = new Swiper('.swiper1', {
		pagination : '.pagination1',
		loop:true,
		grabCursor: true
	});
	

	
	/* Free mode: */
	var swiperFree = $('.swiper-free').swiper({
		pagination : '.pagination-free',
		freeMode : true,
		freeModeFluid: true,
		slidesPerSlide : 1
	});
	
	
	
	
	
})

