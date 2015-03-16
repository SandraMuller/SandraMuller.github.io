
$(document).ready(function(){

  
});

var playlist = [];
var n = 0;

    function LoadPlayer() {
      $('.player').children().remove();
      $('.player').append(' <p><iframe id="ytplayer" type="text/html" width="640" height="390" ' +
        ' src="http://www.youtube.com/embed/'+playlist[n]+'" frameborder="0"/></p> ' +
        ' <input type="button" value="Next Video" onclick="LoadPlayer()" /><br> ');
      n++;
    }; 

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
            console.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
            playlist[i] = item.id.videoId;
            $('.VideoId').append('<p>'+playlist[i]+'</p>');
          }

            LoadPlayer();

        });
  }

//   function PlayList(jsonString) {
//       var playlist = [];
//       var i = 0;
// for (var item in PlayList) {
//       playlist[i] = item.id.videoId;
//       console.log(playlist[i]);
//       i++;
//     }
//   }