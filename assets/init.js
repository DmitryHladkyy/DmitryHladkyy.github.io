$(window).load(function() {
  $("#loader").addClass('off');
});

$(document).ready(function() {
    //SVG
    svg4everybody();
    
    // TRIGGERS
    $('.overlay a').after('<span>Take a look</span>');

    $('.layout > section').append('<div class="clearfix"></div>');

    $('.sidenav a, header a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 1000, 'easeOutBounce');
        return false;
    });

    // SIDENAV
    $(window).scroll(function () {
      if( $(window).scrollTop() > 200 ) {
        $('.sidenav').addClass('on');
      }
      else {
        $('.sidenav').removeClass('on');
      }
    })

    //COLLAPSE
    $('.hotspot').click(function(){
      
      $(this).toggleClass('down').next('.collapse').slideToggle('1000', 'easeOutQuint');
    });


    //CONTACT
    $('.contact-wrap').append('<span class="shadow"></span>');

    $(window).resize(function(){
      var bgrW = $('.contact-wrap').width();

      if ($(window).width() < 780) {
        $('.contact-wrap').css('min-height', bgrW*0.625);
      }
    });
  
});