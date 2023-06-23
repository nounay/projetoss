var frase = "O tempo passa, a vida passa, somente o amor de mãe persiste aos desafios impostos pelo tempo.!";

function gerarFrase(){
var texto =  document.getElementById("frase");
texto.innerHTML = frase;
}

function lerFrase(){
    var som = window.speechSynthesis;
    var discurso = new SpeechSynthesisUtterance(frase);
    som.speak(discurso);

}