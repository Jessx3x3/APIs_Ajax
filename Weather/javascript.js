$(document).ready(function() {

    var apiKey = '9303e73d39213b05d3e0057c4cdfb68d';

    $(".label").hide();

    $('form').submit(function() {

        var ciudad = $("#ciudad").val();
        url = 'http://api.openweathermap.org/data/2.5/weather?q='+ciudad+'&appid='+apiKey;

        
        $.get(url, function(res) {

            console.log(res);

            var tempActual = res.main.temp;
            
            $("#actual").text(Math.trunc(fahrenheitToCelcius(tempActual))); 

            var tempMin = res.main.temp_min;

            $("#min").text(Math.trunc(fahrenheitToCelcius(tempMin)));

            var tempMax = res.main.temp_max;

            $("#max").text(Math.trunc(fahrenheitToCelcius(tempMax)));

            $(".label").show();

        }, 'json');
        
        return false;
        
    });

    function fahrenheitToCelcius(temperatura){
        var temp = ((temperatura-273.15));
        return temp;
    }

});

