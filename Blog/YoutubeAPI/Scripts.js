
$(document).ready(function(){

  LoadPlayer();

  	function LoadPlayer(){
    	//$('.player').children().remove();
    	$('.player').append('<p><iframe id="ytplayer" type="text/html" width="640" height="390" ' +
     	' src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com" frameborder="0"/></p>');
  	}; 

  	function googleApiClientReady(){
        gapi.client.setApiKey('AIzaSyBuvL_ewyuhL0t4WThs1tts9iKUlD119iE');
        gapi.client.load('youtube', 'v3', function() {
        });
  	}
  	function search() {
        var q = $('#query').val();
        var request = gapi.client.youtube.search.list({
        	q: q,
        	part: 'snippet',
        	maxResults: 10
        });

  		request.execute(function(response) {
    		var str = JSON.stringify(response.result);
    		$('#search-container').html('<pre>' + str + '</pre>');
  		});
	}

});