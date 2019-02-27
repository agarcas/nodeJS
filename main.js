const net = require ("net");
const port = 3000;
const host = "localhost"; //ip del PLC

let socket = new net.Socket();

socket.on("connect", function(){
    console.log("Servidor conectado en puerto " + port + " de " + host);
    socket.removeAllListeners("error");
    socket.destroy();
});

socket.on("error", function(){
    console.log("SIN servidor conectado en puerto " + port + " de " + host);
});

socket.connect(port, host);