
$(document).ready(function(){

  LoadPlayer();

});

    function LoadPlayer() {
      //$('.player').children().remove();
      $('.player').append('<p><iframe id="ytplayer" type="text/html" width="640" height="390" ' +
      ' src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com" frameborder="0"/></p>');
    }; 

    function search() {
        var q = $('#query').val();
        var request = gapi.client.youtube.search.list({
          q: q,
          part: 'snippet',
          maxResults: 10
        });


      request.execute(function(response) {
        var data = JSON.stringify(response.result);
        $('#search-container').html('<pre>' + data + '</pre>');
          var playlist = [];
          var i = 0;
        for (var item in data) {
          playlist[i] = item.id.videoId;
          $('.VideoId').append('<p>'+playlist[i]+'</p>');
          i++;
        }
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