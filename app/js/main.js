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
