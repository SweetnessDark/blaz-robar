$(function() {

	//header menu
	$('header .menu').triggerHandler(function(){
	    $('nav ul').addClass('active');
	    $(this).addClass('active');
	    $('header .menu-close').addClass('active');
	    });
	//header menu-close
	$('header .menu-close').triggerHandler(function(){
	    $('nav ul').removeClass('active');
	    $(this).removeClass('active');
	    $('header .menu').removeClass('active');
	    });
});