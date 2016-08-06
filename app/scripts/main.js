(function($) {
  $(function() {
    $('#typed').typed({
      stringsElement: $('body').find('.strings-to-type'),
      startDelay: 500,
      cursorChar: ' _',
      callback: function(){
        $('body').find('.social').removeClass('hidden')
          .css('opacity', 0).animate({'opacity': '1'}, 300);
      }
    });
  });
}) (jQuery);
