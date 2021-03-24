const net = require('net');
const hostname = process.argv[2];
const port = process.argv[3];

const client = net.connect({host: hostname, port: 1300},
    function () {
        console.log('connected to server');
        process.stdin.setEncoding('utf8');
        process.stdin.on('readable', function () {
            const chunk = process.stdin.read();
            if (chunk !== null) {
                client.write('data:' + chunk);
            }
        });
    });
client.on('data',function (data){
        console.log(data.toString());
    });
client.on('end', function () {
    console.log('disconnected from');
});
