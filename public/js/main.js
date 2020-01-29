var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(document).ready(function(){
  tamanhoFrase();
  inicializaContadores();
  inicializaCronometro();
  inicializaMarcadores();
  atualizaPlacar();
  $("#botao-reiniciar").click(reiniciaJogo);
  $(".tooltip").tooltipster({
        trigger: "custom"
  });
  $("#usuarios").selectize({
    create: true,
    sortField: 'text'
  });
});


function inicializaContadores() {

  campo.on("input",function(){

    var conteudo = campo.val();
    var qtdPalavras = conteudo.split(/\S+/).length -1;
    var qtdCaracteres = conteudo.length;
    $("#contador-palavras").text(qtdPalavras);
    $("#contador-caracteres").text(qtdCaracteres);

  });
}


function inicializaMarcadores() {


campo.on("input", function(){

var frase = $(".frase").text();
var digitado = campo.val();
var comparavel = frase.substr(0, digitado.length);

if (digitado == comparavel) {
  campo.addClass("campo-verde");
  campo.removeClass("campo-vermelho");
}
else {
  campo.addClass("campo-vermelho");
  campo.removeClass("campo-verde");
}

});
}
