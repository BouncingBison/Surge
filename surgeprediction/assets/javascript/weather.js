// function to pull in wunderground data 

// 

// if function that appends weather alerts IF a certain condition threshhold is met 
//  use multiple vars for storms 



// configure everything to include let and const to streamline and future proof the app 


//  thatll be wayyyyyy better 

// also target client requests as an access point for info in the uber app 



$.ajax({
    url: "http://api.wunderground.com/api/4d5b63943d49967d/conditions/q/autoip.json",
    url: "http://api.wunderground.com/api/4d5b63943d49967d/geolookup/q/autoip.json",
    dataType: "json",
    success: function(response) {
        console.log(response);

        var userLocation = response.location.city;
        var userLat = response.location.lat;
        var userLog = response.location.log;
        console.log(response.location.log);

        $("#latLong").append("<div> You are logged in from " + userLocation + "<br> and the current conditions are </div");
       
    }
});



/* $.ajax({
    url : "http://api.wunderground.com/api/4d5b63943d49967d/conditions/q/autoip.json",
    dataType : "json",
    success : function(response) {
        console.log(response);

       var localPrecipitation = response.current_observation.icon;
        $("#precipitation").append(localPrecipitation);

        if ( localPrecipitation === "clear") {

            $("#precipitation").append( " is the current weather so there is a low chance of this affecting fare prices");


        }else{

            $("#precipitation").append( "Conditions currenty are"+ localPrecipitation+ " so weather may affect fare prices. Check radar.");

        }
    }
   });


// http://api.wunderground.com/api/4d5b63943d49967d/alerts/q/autoip.json

*/