(function($){

	var socket = io.connect('http://localhost:3000');

	//On form submit
	$('#form').submit( function(event){
		event.preventDefault();
		socket.emit('login', {
			pseudo : $('#pseudo').val(),
			realm : $('#newrealm').val()
		});
	})

})(jQuery);
