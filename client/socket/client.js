const net = require('net');
const readline=require('readline-sync')
const hostname = process.argv[2];

const client = net.connect({host: hostname, port: 1300},
    function () {
        const clientName = readline.question('please enter you name:');
        console.log('%s connected to server',clientName);
        process.stdin.setEncoding('utf8');
        process.stdin.on('readable', function () {
            const chunk = process.stdin.read();
            if (chunk !== null) {
                client.write(clientName+':' + chunk);
            }
        });
    });
client.on('data',function (data){
        console.log(data.toString());
    });
client.on('end', function () {
    console.log('disconnected');
});