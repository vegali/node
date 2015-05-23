/**
 * Created by Administrator on 2015/5/23.
 */


var http = require('http');
var waiter = function(req,res){
    res.end('ok');
}
var server = http.createServer(waiter);
server.listen(8080);