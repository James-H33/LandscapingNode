$(window).scroll(function() {
    var scrollCheck = $(this).scrollTop();

    $('.introDisplay').css({
      'transform' : 'translate(0,'+ scrollCheck / 25 +'%)'
    })

    if(scrollCheck > $('.midContainer').offset().top - ($(window).height() * .8)) {

      $('.midOneDisplay:nth-child(2)').css({
        'opacity' : '1',
        'transform' : 'translateX(0px)'
      });
    }

    if(scrollCheck > $('.midTwoDisplay').offset().top - ($(window).height() * .8)) {
      $('.midTwoDisplay').css({
        'opacity' : '1',
        'transform' : 'translateY(0px)'
      });
    }


  })
