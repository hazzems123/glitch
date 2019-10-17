var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
            console.log('request ', req.url);
            const {headers, url, method } = req;
            console.log ('this is the method used:'+ method)
            console.log ('this is the path:'+ Object.keys(path))
        
  
  req.on('error', ()=>{
    res.end('their is an error processing the request ')
  })
  
 
  
  let router = {
          "GET" : gethandler
  }
        
  let redirectedfunc = router[method]   
  redirectedfunc(req,res,(data)=>{
    res.writeHead(200);
     res.end(data)
    
  })


}).listen(8080)