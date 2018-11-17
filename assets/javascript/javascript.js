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
   



   //=========RECIPE API================


   function getRecipeJson(foodSearch) {
    var apiKey = "rxQ11293h59oU9Z853fw48CmI1H1Js";
    
    var url = "http://api2.bigoven.com/recipes?pg=1&rpp=25&title_kw="
              + foodSearch
              + "&api_key=" + apiKey;
    $.ajax({
        type: "GET",
        url: url,
      }).then(function(response) { {
            console.log(response);
            var foodArray = response.Results['5'].PhotoURL;
            console.log(foodArray);
        }
    });
}
            
            




   function getRecipeJson(food) {
    var apiKey = "rxQ11293h59oU9Z853fw48CmI1H1Js";
    var RecipeID ="220280"
    
    var url = "http://api2.bigoven.com/recipe/" + RecipeID + "?api_key="+apiKey;
            //   + food
            //   + "&api_key=" + apiKey;
    $.ajax({
        type: "GET",
        url: url,
      }).then(function(response) { {
          console.log(response.ImageURL);
          console.log(response.Instructions);
           console.log(response.Ingredients[0].Name);
   
          
          
        }
    });
}

getRecipeJson();

//http://api2.bigoven.com/recipes?pg=1&rpp=25&title_kw=chicken&api_key=rxQ11293h59oU9Z853fw48CmI1H1Js
     