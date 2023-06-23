


function buscar(){
    var seletor = document.getElementById('moeda').value;
    var resultado = document.getElementById('resultado');

fetch('https://api.coingecko.com/api/v3/simple/price?ids='+seletor+'&vs_currencies=brl')
.then(response => response.json())
.then(data => {

    var preco = data[seletor].brl;
    resultado.textContent = formatar(preco);
    mudarImagem(seletor);

}).catch(error => resultado.textContent = error);


}
function formatar(valor){
    valor = Number(valor).toFixed(2).replace('.',',');
    valor = "R$ "+valor
    return valor;
}
function mudarImagem(seletor){
    var moeda = document.getElementById('imagem');

    if(seletor == "bitcoin"){
    moeda.innerHTML = '<img width="200px" src="https://static.vecteezy.com/system/resources/previews/009/668/476/original/bitcoin-cryptocurrency-3d-render-png.png">'

}else if(seletor == "ethereum"){
    moeda.innerHTML = '<img width="200" src="https://media1.giphy.com/media/oaKW9U0A3yZicWVGrQ/giphy-downsized-large.gif?cid=6c09b95228739046d08e98a77f05d1c55e476de544c8f8cc&ep=v1_internal_gifs_gifId&rid=giphy-downsized-large.gif&ct=s">'
    
}else if(seletor == "litecoin"){
    moeda.innerHTML = '<img width="200" src="https://brisbanebullion.com.au/images/thumbs/0013202_litecoinobverse.png">'

}else if(seletor == "dogecoin"){
    moeda.innerHTML = '<img width="200" src="https://global-uploads.webflow.com/5ef503b9dcd722d7cc5424e7/638110ae72bd57f9de7bf1f1_DC_INT_2.webp">'
}
}