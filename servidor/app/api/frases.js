var api = {};

var frases = [
	{_id: 0, texto:'Digno de admiração é aquele que tendo tropeçado ao dar o primeiro passo, levanta-se e segue em frente.', tempo: 15 },
	{_id: 1, texto:'Debuggers não consertam erros, apenas os exibem em slow motion.',tempo: 8 },
	{_id: 2, texto:'Se você aceita perder, você não pode ganhar.', tempo: 5 },
	{_id: 3, texto:'Não há beleza perfeita que não contenha algo de estranho nas suas proporções.', tempo: 15 },
	{_id: 4, texto:'Ciência da computação é tão sobre computadores quanto astronomia é sobre telescópios.', tempo: 15 },
	{_id: 5, texto:'Na minha máquina funciona.', tempo: 5 },
	{_id: 6, texto:'Hardware é o que você chuta, software é o que você xinga.', tempo: 12 },
	{_id: 7, texto:'Entender e se encantar pela minha superfície é fácil, difícil é compreender e mergulhar nas minhas profundezas.', tempo: 15 },
	{_id: 8, texto:'Todos nós somos um mistério para os outros e para nós mesmos.', tempo: 7},
	{_id: 9, texto:'Existem três jeitos de desenvolver software. O jeito certo, o jeito errado e o meu jeito, que é igual o jeito errado só que mais rápido.', tempo: 20},

	];

api.lista = function(req, res) {

	setTimeout(function(){
		if(req.query.id) return res.json(frases[req.query.id]);

		res.json(frases);
	},1500);

};

module.exports = api;
