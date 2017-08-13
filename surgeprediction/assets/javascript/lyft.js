
import lyft from 'node-lyft';
let defaultClient = lyft.ApiClient.instance;

// Configure OAuth2 access token for authorization: Client Authentication
let clientAuth = defaultClient.authentications['Client Authentication'];
clientAuth.accessToken = 'WEblrY4D+rqOY4MEf7EtbhtpjyJ58zvXDDoxHSEaumzGxQvlcU9uwexAueqV2aEtxyIBGri7vmB3po80duaFbuOs8QMLNKB5dBZx991dhh/SmX6nFtozNvg'

let apiInstance = new lyft.PublicApi();

apiInstance.getDrivers(37.7763, -122.3918).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});










/*lyft.js

var primetime rate
var driver availability 
var user location
var weather(rain%)
var weather(alerts)
var events in the area 
var 





function to put map onto a new div and show frequency of ride requests{

	jquery to build the stock div 





}




function to input likelyhood of "primetime" {


data for primetime rate currently to set a floor value 

data from weather API meeting a certain threshhold to be a possible "primetime"

jquery to output that to the div 
 			> this jQuery would also layer it, blue for none. red for both "primetime" and "weather" (events) being  
 			present and pink for just one of these 

 
}

   $.ajax({
    url : "http://api.wunderground.com/api/4d5b63943d49967d/geolookup/q/autoip.json",
    dataType : "json",
    success : function(response) {
        console.log(response);

       var userLocation = response.location.zip;
         //location = url['location'];
         //var alerts = url['current_observation']['alerts'];
        //$("#alerts").html(alerts);
        $("#zip").append(userLocation);
    }
   });

   */

