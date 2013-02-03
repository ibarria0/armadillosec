$('a.smooth').on('click', function(e) {
	var $link = $(this);
	var anchor  = $link.attr('href');
	$('li').removeClass("active");
	$link.parent().addClass("active");
	$('html, body').stop().animate({
		scrollTop: $(anchor).offset().top
	}, 1000);
});
