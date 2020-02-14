
function capaCarga(onOff){
    onOff ? $("#capaCarga").show() : $("#capaCarga").hide();
}

function displayPokemon(){

    $('#box').hide();

    var pokemon = '';

    for (var i = 1; i < 806; i++) {
        pokemon += "<div class='pokemon'><img id='" + i + "' src='http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png'></div>";
    }

    $('#box').append(pokemon);

    setTimeout(function(){
        $('#box').show();
        capaCarga(false);
    }, 10000);
}

function showPokeInfo(numberId){
    imagen = "http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"+numberId+".png";
}


$(document).ready( function(){
    
    capaCarga(true);

    displayPokemon();

    $("#pokemonInfo").hide();

    $("img").click(function(){
        showPokeInfo($(this).attr('id'));
        $("#pokemonInfo").show();
        console.log("N° ID Pokemon: ["+$(this).attr('id')+"]");
    })
    $(".btn_salir").click(function(){
        $("#pokemonInfo").hide();
    })

    $.ajax({
        type: "GET",
        url: "https://pokeapi.co/api/v2/pokemon?limit=151",
        success: function(response) {
            console.log(response);
        }, 
        error: function (xhr, status) {  
            if(xhr.status === 404)
            console.log("Error, pokemon not found");
        }    
    });


})
