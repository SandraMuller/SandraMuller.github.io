
// function onYouTubeApiLoad() {
  
//     gapi.client.setApiKey('AIzaSyBuvL_ewyuhL0t4WThs1tts9iKUlD119iE');
    

// //Helper function to display JavaScript value on HTML page.
// function showResponse(response) {
//     var responseString = JSON.stringify(response, '', 2);
//     $('.response').append('<p>'+responseString+'</p>');
//     //document.getElementById('#response').text += responseString;
// }

// // Called automatically when JavaScript client library is loaded.
// function onClientLoad() {
//     gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
// }

// // Called automatically when YouTube API interface is loaded (see line 9).
// function onYouTubeApiLoad() {
 
//     gapi.client.setApiKey('AIzaSyBuvL_ewyuhL0t4WThs1tts9iKUlD119iE');
    
//     Add code here to test out showResponse():
//     showResponse("Hooray");
//     //search();
// }

// function search() {
//     // Use the JavaScript client library to create a search.list() API call.
//     var request = gapi.client.youtube.search.list({
//         part: 'id'
//     });
    
//     // Send the request to the API server,
//     // and invoke onSearchRepsonse() with the response.
//     request.execute(onSearchResponse);
// }
// // function searchByKeyword() {
// //   var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});
// //   for(var i in results.items) {
// //     var item = results.items[i];
// //     Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
// //   }
// // }

// // Called automatically with the response of the YouTube API request.
// function onSearchResponse(response) {
//     showResponse();
// }

// }