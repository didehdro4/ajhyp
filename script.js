

$('.lazy').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 5,
  slidesToScroll: 1
});
				
$('.preview').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  appendArrows: false
});

$('#categories').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: true,
  appendArrows: false
});

