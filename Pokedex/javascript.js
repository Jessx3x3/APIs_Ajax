function load(onOff){
    onOff ? $("#load").show() : $("#load").hide();
}

function displayPokemon(){
    $('#content').hide();
    $('#pokemon_info').hide();

    var pokemon = '';

    for (var i = 1; i < 200; i++) {

        pokemon += "<div id='pokemon'><img id='" + i + "' src='http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png'></div>";
       
    }

    $('#content').append(pokemon);

    setTimeout(function(){
        $('#content').show();
        load(false);
    }, 5000);

}

var img_pokemon = [];

function img_data(url, id){
    var img_pokemon = url+id+".png";
    console.log(img_pokemon);
    $(".img_pokemon").attr("src", img_pokemon);
}


$(document).ready( function(){

    var name_pokemon = [];
    var url = "http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/";

    load(true);
    displayPokemon();

    $("img").click(function(){
        var id_pulsado = $(this).attr('id');
        console.log(id_pulsado);
        
        if(id_pulsado){
            var nombre = name_pokemon[id_pulsado];
            console.log(nombre);
            $("#pokemon_info").show();
            $(".name_d").text(nombre);
            img_data(url, id_pulsado);
        }

    })

    $("button").click(function(){
        $("#pokemon_info").hide();
    })

    $.ajax({
        type: "GET",
        url: "https://pokeapi.co/api/v2/pokemon?limit=200",
        success: function(data) {
            for(var i=1; i<200; i++){
                name_pokemon[i] = data.results[i].name;
                console.log(name_pokemon[i]);
            }   
        },
        error: function (xhr, status) {  
            if(xhr.status === 404)
            console.log("Error, pokemon not found");
        }    
    });
});