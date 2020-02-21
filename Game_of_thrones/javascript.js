$(document).ready(function(){

    var starkID = 362; var targaryenID = 378; var lannisterID = 229; var baratheonID = 15;

    $('#information').hide();
    $('h1').hide();

    $('#362').click(function(){
        getValues(starkID);
    })
    $('#378').click(function(){
        getValues(targaryenID);
    })
    $('#229').click(function(){
        getValues(lannisterID);
    })
    $('#15').click(function(){
        getValues(baratheonID);
    })

    function getValues(id){

            var url_s = 'https://anapioficeandfire.com/api/houses/'+id;

            $.get(url_s, function(res) {
                var name = res.name; $('.nombre').text(name);
                var frase = res.words; $('.frases').text(frase);
                var title = res.titles; $('.titulos').text(title);
                $('h1').show();$('#information').show();

            }, 'json');

            return false;
    }
    
});
