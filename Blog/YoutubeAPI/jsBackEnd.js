
$(document).ready(function(){

  LoadPlayer();

  function LoadPlayer(){
    //$('.player').children().remove();
    $('.player').append('<p><iframe id="ytplayer" type="text/html" width="640" height="390" ' +
     ' src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com" frameborder="0"/></p>');
  }; 

});