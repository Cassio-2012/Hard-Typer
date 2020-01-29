$("#botao-frase").click(fraseAleatoria);
$("#botao-busca").on('click', (buscaFrase));

function tamanhoFrase () {

  var frase = $(".frase").text();
  var numPalavras = frase.split(" ").length;
  var tamanhoFrase = $("#tamanho-frase");
  tamanhoFrase.text(numPalavras);

}

function fraseAleatoria() {

  $("#spinner").toggle();

  $.get("http://localhost:3001/frases", trocaFrase)
  .fail(function(){

    $('#erro').toggle();
    setTimeout (function(){
      $('#erro').toggle();
    }, 2000);

  })
  .always(function(){

    $("#spinner").toggle();

  });

}

function trocaFrase(data) {

  var frase = $(".frase");
  var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
    tamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}

function buscaFrase() {

  $("#spinner").toggle();

  var fraseID = $("#frase-id").val();
  var dados = {id: fraseID};

  $.get("http://localhost:3001/frases", dados, setaFrase).
  fail(function(){

    $('#erro').toggle();
    setTimeout (function(){
      $('#erro').toggle();
    }, 2000);

  }).
  always(function(){
    $("#spinner").toggle();
  });

}

function setaFrase(dados) {
  $(".frase").text(dados.texto);
  tamanhoFrase();
  atualizaTempoInicial(dados.tempo);
}
