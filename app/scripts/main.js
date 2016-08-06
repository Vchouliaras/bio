(function($) {
  $(function() {
    $('#typed').typed({
      stringsElement: $('body').find('.strings-to-type'),
      startDelay: 800,
      typeSpeed: 50,
      cursorChar: ' _',
      callback: function(){
        $('body').find('.social').removeClass('hidden')
          .css('opacity', 0).animate({'opacity': '1'}, 400);
      }
    });
  });
}) (jQuery);
