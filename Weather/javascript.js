$(document).ready(function() {

    var apiKey = '9303e73d39213b05d3e0057c4cdfb68d';

    $("#box_datos").hide();

    $('form').submit(function() {

        var ciudad = $("#ciudad").val();
        url = 'http://api.openweathermap.org/data/2.5/weather?q='+ciudad+'&appid='+apiKey;


        $.get(url, function(res) {

            var tempActual = res.main.temp;
            
            var humidity = res.main.humidity;

            var clouds = res.clouds.all;

            var wind = res.wind.speed;

            $("#actual").text(Math.trunc(fahrenheitToCelcius(tempActual))); 

            $("#clouds").text("Nubes: "+clouds+ "%"); 

            $("#humidity").text("Humedad: "+humidity+ "%"); 

            $("#wind").text("Viento: "+wind
            + "km/h"); 

            //var tempMin = res.main.temp_min;

            //$("#min").text(Math.trunc(fahrenheitToCelcius(tempMin)));

            //var tempMax = res.main.temp_max;

            //$("#max").text(Math.trunc(fahrenheitToCelcius(tempMax)));

            $("#box_datos").show();

        }, 'json');
        
        return false;
        
    });

    function fahrenheitToCelcius(temperatura){
        var temp = ((temperatura-273.15));
        return temp;
    }

});

