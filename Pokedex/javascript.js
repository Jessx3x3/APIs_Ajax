function load(onOff){

    onOff ? $("#load").show() : $("#load").hide();

}

        function displayPokemon(){    

            var image = '';

            var url_sprites = '';

                for (let i = 1; i < 200; i++) {
                    url_sprites = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i + '.png'
                image = '<img class="pokemon" id="' + i + '" src="' + url_sprites + '">';

                $('#content').append(image);

                }
                setTimeout(function(){
                    $('#content').show();
                    load(false);
                }, 5000);
        }   

        $(document).ready(function () {

            $("#pokemon_info").hide();

            load(true);

            displayPokemon();
        });

        $(document).on("click", ".pokemon", function () {

            var id = $(this).attr('id');

            $("#pokemon_info").show();

            $(".img_pokemon").attr("src", 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id + '.png');
            
            $("button").click(function(){

                $("#pokemon_info").hide();

            });

            var datos = {};

            var url = "http://pokeapi.co/api/v2/pokemon/";

            $.get(url + id + "/", function (datos) {

                $(".name_d").html(datos.name);

                $(".tipo_1").html(datos.types[0].type.name);

                if (datos.types.length == 2) {

                    $(".tipo_2").html(datos.types[1].type.name);

                    $(".tipo_2").show();

                }else $(".tipo_2").hide();

                $(".weight").html(datos.weight);

                $(".height").html(datos.height);

            }, 'json');

        });