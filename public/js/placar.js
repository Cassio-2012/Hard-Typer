$("#botao-placar").on("click", (mostraPlacar));
$("#botao-sync").click(sincronizaPlacar);

function inserirPlacar() {

  var corpoTabela = $(".placar").find("tbody");
  var usuario = "Cassio";
  var numeroPalavras = $("#contador-palavras").text();

  var linha = novaLinha(usuario, numeroPalavras);
  linha.find(".botao-remover").click(removeLinha);

  corpoTabela.append(linha);

  $(".placar").slideDown(500);
  scrollPlacar();
}

function novaLinha(usuario, numeroPalavras) {

 var linha = $("<tr>");
 var colunaUsuario = $("<td>").text(usuario);
 var colunaPalavras = $("<td>").text(numeroPalavras);
 var colunaRemover = $("<td>");

 var link = $("<a>").attr("href", "#").addClass("botao-remover");
 var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

 link.append(icone);
 colunaRemover.append(link);

 linha.append(colunaUsuario);
 linha.append(colunaPalavras);
 linha.append(colunaRemover);

 return linha;
}

function scrollPlacar(){
var posicaoPlacar = $(".placar").offset().top;

    $("body").animate(
      {
      scrollTop: posicaoPlacar+"px"
    }, 1000);
}

function removeLinha(event){
  event.preventDefault();
  var linha = $(this).parent().parent();

  linha.fadeOut(1000);
    setTimeout(function(){

      linha.remove();

    },1000);

}

function mostraPlacar(){
  $(".placar").stop().slideToggle(600);
}

function sincronizaPlacar() {

  var placar = [];
  var linhas = $("tbody > tr");

  linhas.each(function(){

  var usuario = $(this).find("td:nth-child(1)").text();
  var palavras = $(this).find("td:nth-child(2)").text();

  var score = {
    usuario: usuario,
    pontos: palavras
  }

  placar.push(score);

  var dados = {
    placar: placar
  }

  $.post("http://localhost:3000/placar", dados, function(){
    console.log("Placar sincronizado com sucesso!");
  });
});

}

function atualizaPlacar() {

$.get("http://localhost:3000/placar", function(data){

 $(data).each(function(){
   var linha = novaLinha(this.usuario, this.pontos);

   linha.find(".botao-remover").click(removeLinha);

   $("tbody").append(linha);
 });

});

}
