(function($){

	var socket = io.connect('http://localhost:3000');

  /**
  * Message reçu depuis le serveur
  **/
  socket.on('event', function(message){
    console.log("YUUUUUUU");
  });

})(jQuery);
