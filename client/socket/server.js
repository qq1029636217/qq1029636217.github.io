const net = require('net');
const clientList = [];

const server = net.createServer(function (socket) {
    clientList.push(socket);
    socket.write('connect success!\r\n');
    console.log(clientList.length+'client has connect');
    socket.on('data', function (data) {
        console.log(data.toString());
        broadcast(data);
    });
    socket.on('error',function(){
        for(let i=0; i<clientList.length;i++)
            if(clientList[i]===socket)
                clientList.splice(i,1);
    })
    socket.on('end', function () {
        console.log("1client exit,there are "+clientList.length-1+' clients now');
        socket.write('end');
    });
});

function broadcast(data)
{
    for(let i=0; i<clientList.length; i++)
        clientList[i].write(data);}
server.listen(1300,'127.0.0.1');