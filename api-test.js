// var bootstrap = require('../bootstrap');
// var assert = require('assert');
// var log = bootstrap.log;
// var TheAPI = bootstrap.request(bootstrap.testURL);
var request= require('superTest');
var mohRequest= require('superTest');
var assert= require('assert');

var apiKey= "AIzaSyB-Y6SEvbidYCLQlHldr1z2cMF9mYvuagI";
var lat;
var lng;
var input;
// listener
var sys = require("sys");
console.log(' Type in your location');
var stdin = process.openStdin();
stdin.addListener("data", function(d) {

//called functions might actually need to be here

input = d.toString().substring(0, d.length-1);
//turns input into http
input = encodeURIComponent(input);

mohProblems(function () {
})
  });










//google nonsense

function mohProblems(){
request = request('https://maps.googleapis.com/maps/api/geocode/json');

request
        .get("?address=" + input + "&key=" + apiKey)
        .expect(200) 
        .end( function(err, res) {
            if(err) {
                console.log("failed");
            }
            else {
                console.log(res.body.results)

                console.log('Latitude '+JSON.stringify(res.body.results[0].geometry.location.lat, null, 4));
                                console.log('Longitude'+JSON.stringify(res.body.results[0].geometry.location.lng, null, 4));
                lat = res.body.results[0].geometry.location.lat;
                lng = res.body.results[0].geometry.location.lng;
                mohWeather(lat , lng);
            }

        }); 
}


 function mohWeather (lat, lng) {
//         cosole.log(lat); 
// }
mohRequest = mohRequest('https://api.forecast.io/forecast/');


mohRequest
            .get('ddcf2e71333240919127a1a7e0c60911/' + lat +','+ lng)
            .expect(200)
            .end( function(err, res) {
                if(err) {
                    console.log(" Weather Failed");
                
                }
                else {
                    console.log(res.body.currently);
                     }


         });




//results[0]+JSON.stringify(res.body.
                        // results[0]
                        // .geometry
                        // .location.lng, null, 4



}      









//   console.log(err);
// });

// request.get('/').expect('heya', function(err){
//   console.log(err);
// });



