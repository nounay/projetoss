var contador=0;
function buscar(){

var entrada = document.getElementById("entrada").value.toLowerCase();


//alert(entrada);

    
    if(entrada.length < 1){
    entrada = contador;
}
var url = "https://pokeapi.co/api/v2/pokemon/"+entrada;
fetch(url)
.then(response => response.json())
.then(data => {

    var tela = document.getElementById("tela");
    tela.innerHTML = '<h2>'+ data.name +'</h2>'
    +' <b> Id: '+ data.id +'</b> '
    +' <b> Tipo: ' + data.types.map(type => type.type.name) +'</b>'
    +' <b> Habilidades: ' + data.abilities.map(ability => ability.ability.name)
    +' <img class="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/'+data.id+'.gif" > '
    +' <img class="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/'+data.id+'.gif" > '
   
  
    contador = data.id;
    document.getElementById("entrada").value="";

}).catch(error => { 
    var tela = document.getElementById("tela");
    tela.innerHTML = "<p> Pokemon não encontrado! </p>";
})




}

function proximo(){
    contador = contador + 1;
    entrada = contador
    buscar();

    
}

contador = 0;

function anterior(){
    contador = contador - 1;
    entrada = contador 
    buscar();

    
}


    
