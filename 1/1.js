var http=require('http');
var url=require('url');
var get=require('./httpget');
var post=require('./httpPost')
http.createServer(function (req,res){
    if(req.method==="GET")
    {
        get.doGet(req,res);
    }else if (req.method==="POST")
    {
        post.doPost(req,res);
    }else
    {
        res.end();
    }
}).listen(1337,'127.0.0.1');


console.log('server running at http://127.0.0.1:1337/');