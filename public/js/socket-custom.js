let socket = io();

socket.on('connect', function () {

    console.log('Conectado al servidor');

});

//Los on son para escuchar información
socket.on('disconnect', function () {

    console.log('Perdimos conexión con el servidor');

});

// Los emit son para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Alejandro',
    mensaje: 'Hola mundo'
}, function(resp){
    console.log('Respuesta server: ', resp)
});

//Escuchar inforamcion
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor: ', mensaje )
});