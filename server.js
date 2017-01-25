var app = require('express')();
var http = require('http');

realms = [];
function newRealm(name,key){
	var objet ={
		name:name,
		user:[],
		cities:[],
	};
	realms[key]=objet;
}

httpServer = http.createServer(function(req, res){
	console.log('Un utilisateur a affiche la page');
	res.end("Voulez vous télécharger le fichier HappyTROyan.exe?");
});

httpServer.listen(3000);

var io = require('socket.io').listen(httpServer);

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
