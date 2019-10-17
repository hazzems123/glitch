var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
            console.log('request ', req.url);
            const {headers, url, method } = req;
  
        
        
  let gethandler = (req,res) => {
  res.writeHead(200);
res.write('GET parameters: ' );
res.end()
};
  
  let router = {
          "GET" : gethandler
  }
        
  let redirectedfunc = router[method]   
  redirectedfunc(req,res)

        

}).listen(8125)