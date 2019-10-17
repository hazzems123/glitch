var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
            console.log('request ', req.url);
            const {headers, url, method } = req;
  
        
        
  let gethandler = (req,res) => {
  req ('error', ()=>{
    res.end('their is an error processing the request ')
  })
  res.writeHead(200);
res.end('ok')
};
  
  let router = {
          "GET" : gethandler
  }
        
  let redirectedfunc = router[method]   
  redirectedfunc(req,res)


}).listen(3000)