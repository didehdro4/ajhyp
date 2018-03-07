$(".post1").click(function() {
    alert("jQuery works!");
});

$('.lazy').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 5,
  slidesToScroll: 1
});
				
$('.preview').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
});
				