
$(document).ready(function(){

  
});

var playlist = [];
var n = 0;

    function LoadPlayer() {
      if (n === 10){ n = 0;}
      $('.player').children().remove();
       $('.player').append(' <p><input type="button" value=". Next  ." onclick="LoadPlayer()" /></p>');
      $('.player').append(' <p><iframe id="ytplayer" type="text/html" width="640" height="390" ' +
        ' src="http://www.youtube.com/embed/'+playlist[n]+'?autoplay=1" frameborder="0"/></p> ');
      $('.player').append('<p><input type="button" value="Previous" onclick="Previous()" /></p>');
      n++;
    }; 

    function Previous(){
      if (n!==0){ n = n - 2; }

      LoadPlayer();
    }

    function search() {
        var q = $('#query').val();
        var request = gapi.client.youtube.search.list({
          q: q,
          part: 'snippet',
          maxResults: 10
        });
      request.execute(function(response) {
        var results = JSON.stringify(response.result);
        $('#search-container').html('<pre>' + results + '</pre>');

        $('.VideoId').children().remove();
          for(var i in response.items) {
            var item = response.items[i];
            playlist[i] = item.id.videoId;
            $('.VideoId').append('<pre>'+playlist[i]+'</pre>');
          }

            LoadPlayer();

        });
  }