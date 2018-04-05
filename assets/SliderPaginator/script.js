$('.carousel').each(function () {
	var block = $(this),
		length = block.find('.carousel-item').length,
		left = block.find('.mbr-slider-slide').eq(0),
		right = block.find('.mbr-slider-slide').eq(1);
	left.text(length);
	right.text(2);

	block.on('slid.bs.carousel', function () {
		var block = $(this),
			length = $(this).find('.carousel-item').length,
			left = block.find('.mbr-slider-slide').eq(0),
			right = block.find('.mbr-slider-slide').eq(1);
			i = block.find('.carousel-item.active').index();
//		console.log(i +' - '+ length)
		left.text(i);
		right.text(i+2);
		if (i == 0)
			left.text(length);
		else if (i == length-1)
			right.text(1);
	})
});

