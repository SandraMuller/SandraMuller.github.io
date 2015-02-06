$(function() {

  $('#success').html('<p id="success"></p>');
  $('#startover').addClass('hoverOut');
  var score = 0;

  $('#sandrahead').click(function() {

    score = score + 1;
    $('#score').text(score); 
    if (score < 5) { $('#success').html('<p id="success">You are just starting</p>'); }    
    else if (score >= 5 && score < 10) { $('#success').html('<p id="success">Come on, click some more</p>'); }
    else if (score >= 10 && score < 20) { $('#success').html('<p id="success">Hit that button!</p>'); }
    else if (score >= 20 && score < 30) { $('#success').html('<p id="success">Wow this could get explosive!</p>'); }
    else if (score >= 30) { $('#success').html('<p id="success">BOOOOOM, you made my face explode!</p>');
            $("#sandrahead").hide( "explode", {pieces: 30}, 1000 ); 
            $("#sandrahead").show( "explode", {pieces: 30}, 1000 );}
});

  $("#sandrahead").mousedown(function(){
    $("#sandrahead").css({"background-image":"url()","background-color":"grey"});
  });
  $("#sandrahead").mouseup(function(){
    $("#sandrahead").css("background-image", "url(../../Photos/SMThumb.jpg)");
  });

  $('#startover').hover(function() {
    score = 0;
    $('#score').text(score); 
    $('#success').html('<p id="success"></p>');
    $('#startover').addClass('hoverIn').removeClass('hoverOut');
  }, function() {
    $('#startover').removeClass('hoverIn').addClass('hoverOut');

  });
  
  $( "#tabs" ).tabs();
 

  $(function() {
      $('.draggable').draggable();
  });

});

