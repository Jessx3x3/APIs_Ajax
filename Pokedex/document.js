function capaCarga(onOff){
    onOff ? $("#capaCarga").show() : $("#capaCarga").hide();
}

function displayPokemon(){
    $('#box').hide();
    var pokemon = '';
    for (var i = 1; i < 151; i++) {
        pokemon += "<div class='pokemon'><img id='" + i + "' src='http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png'></div>";
        /*
        let poke = `<div>
        <img id="${i}" src='http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png'>

        STRING INTERPOLATION -`` BACKTIP
        
                    </div>`*/
    }
    $('#box').append(pokemon);
    setTimeout(function(){
        $('#box').show();
        capaCarga(false);
    }, 3000);
}

$(document).ready( function(){

    capaCarga(true);
    displayPokemon();
    $("img").click(function(){
        //showPokeInfo( $(this).attr('id') );
        console.log($(this).attr('id'));
    })

    
    

    /*
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
    */
})
