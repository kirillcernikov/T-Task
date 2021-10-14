

jQuery(($) => {
  $(window).scroll(function(){
      if ($(this).scrollTop() > 1280) $('.up-to').fadeIn();
      else $('.up-to').fadeOut();
  });
  $('.up-to').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 1500);
      return false;
  });
});


1
$(document).ready(function() {
    $('.email').blur(function() {
        if($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
                $(this).css({'border' : '5px solid #569b44'});
            } else {
                $(this).css({'border' : '5px solid #ff0000'});
            }
        } else {
            $(this).css({'border' : '5px solid #ff0000'});
        }
    });
});
