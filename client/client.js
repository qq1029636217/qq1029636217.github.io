var net=require('net');
var hostname=process.argv[2];
var port=process.argv[3];

var client=net.connect({host:hostname,port:1200},
            function(){
                console.log('connected to server');
                process.stdin.setEncoding('utf8');
                process.stdin.on('readable',function (){
                    var chunk =process.stdin.read();
                    if(chunk!==null){
                        client.write('data:'+chunk);
                    }
                    });
             });
client.on('data',function (data){
        console.log(data.toString());

    });
client.on('end', function () {
    console.log('disconnected from');
});
