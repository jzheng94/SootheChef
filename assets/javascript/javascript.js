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


   //Recipe calls 
$("#select-food").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the artist name
    var inputFood = $("#inputfood").val().trim();
  
    // Running the searchBandsInTown function(passing in the artist as an argument)
    getRecipeIDJson(inputFood);
      
    
  });


   function getRecipeIDJson(foodSearch) {

    

    var apiKey = "rxQ11293h59oU9Z853fw48CmI1H1Js";
    
    var url = "http://api2.bigoven.com/recipes?pg=1&rpp=5&title_kw="
              + foodSearch
              + "&api_key=" + apiKey;
    $.ajax({
        type: "GET",
        url: url,
      }).then(function(response) { 
        //   console.log(response)
        var idList= response.Results;
        
        for(var i=0; i<idList.length; i++){
        // console.log(idList[i].PhotoUrl)
        console.log(idList[i].Title)
        console.log(idList[i].RecipeID);
        $("#slide1").text(idList[0].Title)
        $("#slide2").text(idList[1].Title)
        $("#slide3").text(idList[2].Title)
        $("#slide4").text(idList[3].Title)
        $("#slide5").text(idList[4].Title)



        var imgSource = idList[i].PhotoUrl;

        $("#slide1").css("background-image","url("+ idList[0].PhotoUrl +")");
        $("#slide2").css("background-image","url("+ idList[1].PhotoUrl +")");
        $("#slide3").css("background-image","url("+ idList[2].PhotoUrl +")");
        $("#slide4").css("background-image","url("+ idList[3].PhotoUrl +")");
        $("#slide5").css("background-image","url("+ idList[4].PhotoUrl +")");
    
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
          
        // console.log(response.Instructions);
         
          var ingList= response.Ingredients;
        
          for(var i=0; i<ingList.length; i++){
            // console.log(ingList[i].Name)
            $(".ingredients").append(ingList[i].Name + "</br>")  
            $(".instructions").text(response.Instructions)
        //     $("#slide1").text(response.Instructions)
        //     $("#slide2").text(response.Instructions)
        //     $("#slide3").text(response.Instructions)
        //     $("#slide4").text(response.Instructions)
        //     $("#slide5").text(response.Instructions)
        // }
   
  
          
          
        }
    });
}

getRecipeJson();

//http://api2.bigoven.com/recipes?pg=1&rpp=25&title_kw=chicken&api_key=rxQ11293h59oU9Z853fw48CmI1H1Js


