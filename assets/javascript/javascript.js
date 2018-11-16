$('.carousel').carousel('pause');

$(document).ready(function(){
    var btnSearch="none";

    $("#happyBtn").click(function(){
        btnSearch = "happy lofi";
        getMusic();
    });
    $("#sadBtn").click(function(){
        btnSearch = "sad lofi";
        getMusic();
    });
    $("#chillBtn").click(function(){
        btnSearch = "chillhop";
        getMusic();
    });
    $("#coolBtn").click(function(){
        btnSearch = "Anderson Paak";
        getMusic();
    });
    $("#classyBtn").click(function(){
        btnSearch = "jazzhop";
        getMusic();
    });
    $("#loveBtn").click(function(){
        btnSearch = "love lofi";
        getMusic();
    });
    $("#hypeBtn").click(function(){
        btnSearch = "edm mix";
        getMusic();
    });
    
    function getMusic() {

        console.log(btnSearch)

        var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=" + btnSearch + "&key=AIzaSyDe6NcEJpqzmQ6xAQQv6BEUocir8j5RmoA";
        
    $.ajax({
        type: "GET",
        url: url,
      }).then(function(response)  {
        
        var results = response.items;
        var playList = results[Math.floor(Math.random() * 15)].id.videoId
        var videoResponse = '<iframe width="200" height="50" src="https://www.youtube.com/embed/' + playList + '" frameborder="0" encrypted-media></iframe>'
           
        $("#musicPlayer").html(videoResponse)
    });
   
    }
   
   })
   