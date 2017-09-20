/*var http = require('http');
var fs = require('fs');

const PORT=8080; 

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});*/

var http        = require('http');
var url         = require('url');
var querystring = require('querystring');
var fs          = require('fs');

http.createServer(function(request, response){
pathName =url.parse(request.url).pathname;
fs.readFile(__dirname + pathName, function(err, data){
if(err){
   response.writeHead(404, {'Content-type':'text/plan'});
   response.write('Page Was Not Found');
   response.end();
}else{
   response.writeHead(200);
   response.write(data);
   response.end();
}
})

}).listen(8080);