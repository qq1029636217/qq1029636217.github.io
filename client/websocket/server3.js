const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 1200 });

// noinspection JSUnresolvedFunction
server.on('close', function close() {
    console.log('disconnected');
});

// noinspection JSUnresolvedFunction
server.on('connection', function connection(ws, req) {
    const clientName = req.connection.remotePort;

    console.log('%s is connected', clientName)

    // 发送欢迎信息给客户端
    ws.send("Welcome " + clientName);
    ws.on('message', function incoming(message) {
        console.log('received: %s from %s', message, clientName);
        // 广播消息给所有客户端
        server.clients.forEach(function each(client) {
            if (client.readyState === 1) {
                client.send( clientName + " -> " + message);
            }
        });
    });
});
