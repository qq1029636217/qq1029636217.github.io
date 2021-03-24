const net = require('net');
const clientList = [];
const server = net.createServer(function (socket) {
    clientList.push(socket);
    socket.write('success!\r\n');
    //socket.pipe(socket);
    socket.on('data', function (data) {
        console.log(data.toString());
        //socket.write(data);
        broadcast(data);
    });
    socket.on('error',function(){
        for(let i=0; i<clientList.length;i++)
            if(clientList[i]===socket)
                clientList.splice(i,1);
    })
    socket.on('end', function () {
        socket.write('end');
    });
});

function broadcast(data)
{
    for(let i=0; i<clientList.length; i++)
        clientList[i].write(data);}
server.listen(1300,'127.0.0.1');
