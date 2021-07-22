$(function() {

	const $body = $('body');
	const $btnHamburger = $('.btn-hamburger');
	const $nav = $('.nav');
	const MODAL_OPENED_CLASS_NAME = 'is-modal-opened';
	const BTN_HAMBURGER_ACTIVE_CLASS_NAME = 'is-opened';
	const NAVIGATION_ACTIVE_CLASS_NAME = 'is-opened';

	$btnHamburger.on('click', () => {
		$body.toggleClass(MODAL_OPENED_CLASS_NAME);
		$btnHamburger.toggleClass(BTN_HAMBURGER_ACTIVE_CLASS_NAME);
		$nav.toggleClass(NAVIGATION_ACTIVE_CLASS_NAME);
	});

});

(function() {
	'use strict';

	const BACK_TO_TOP_ACTIVE_CLASS_NAME = 'btn-back-to-top-show';
	const BACK_TO_TOP_CLASS_NAME = '.btn-back-to-top';
	const SCROLL_TO_TOP_OFFSET = '-80';
	const SCROLL_TO_TOP_ANIMATION_DELAY = '30';
  
	function trackScroll() {
	  var scrolled = window.pageYOffset;
	  var coords = document.documentElement.clientHeight;
  
	  if (scrolled > coords) {
		goTopBtn.classList.add(BACK_TO_TOP_ACTIVE_CLASS_NAME);
	  }
	  if (scrolled < coords) {
		goTopBtn.classList.remove(BACK_TO_TOP_ACTIVE_CLASS_NAME);
	  }
	}
  
	function backToTop() {
	  if (window.pageYOffset > 0) {
		window.scrollBy(0, SCROLL_TO_TOP_OFFSET);
		setTimeout(backToTop, SCROLL_TO_TOP_ANIMATION_DELAY);
	  }
	}
  
	var goTopBtn = document.querySelector(BACK_TO_TOP_CLASS_NAME);
  
	window.addEventListener('scroll', trackScroll);
	goTopBtn.addEventListener('click', backToTop);
  })();