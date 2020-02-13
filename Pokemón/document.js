function displayPokemon(){
    var pokemon = '';
        for (var i = 1; i < 151; i++) {
            pokemon="<div class='pokemon'><img src='http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"+i+".png'></div>";
            $('#box').append(pokemon);
        }  
}
$(document).ready(function(){
    displayPokemon();
})

