$(window).scroll(function() {
  var scrollCheck = $(this).scrollTop();

  $('.header-title h1, .header-title p').css({
    'transform' : 'translateY('+ scrollCheck * 0.8 + '%)'
  });
})
