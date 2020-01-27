function inicializaCronometro(){


  campo.one("focus", function(){
  var tempoRestante = $("#tempo-digitacao").text();
  var cronometroID = setInterval(function(){
    tempoRestante --;
    $("#tempo-digitacao").text(tempoRestante);
    if(tempoRestante <1){
      clearInterval(cronometroID);
      finalizaJogo();
    }
  },1000);
});
}

function atualizaTempoInicial(tempo) {

tempoInicial = tempo;
$("#tempo-digitacao").text(tempo);

}

function finalizaJogo() {
  campo.attr("disabled",true);
  campo.toggleClass("campo-desativado");
  inserirPlacar();
}


function reiniciaJogo () {

  campo.attr("disabled",false);
  campo.val("");
  $("#contador-palavras").text(0);
  $("#contador-caracteres").text(0);
  $("#tempo-digitacao").text(tempoInicial);
  inicializaCronometro();
  campo.toggleClass("campo-desativado");
  campo.removeClass("campo-verde");
  campo.removeClass("campo-vermelho");

}
