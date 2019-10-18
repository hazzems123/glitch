var http = require('http');
var fs = require('fs');
var path = require('path');
var gethandler = require('./getHandler');
var posthandler = require('./postHandler');
var MongoClient = require('mongodb').MongoClient;



http.createServer( async (req, res) => {
            console.log('request ', req.url);
            const {headers, url, method } = req;
            console.log ('this is the method used:'+ method)
        
  
  req.on('error', ()=>{
    res.end('their is an error processing the request ')
  })
 
          var orderno =  Math.floor(100000 + Math.random() * 900000);
          console.log ('this is order number :'+ orderno)

  // we handle the method we received against that will handle it
  
  let router = {
          "GET" : gethandler,
          "POST": posthandler
  }
// store the function that will handle the received method  
  let redirectedfunc = router[method]   
  // run the function that will handle the received method
  redirectedfunc(req,res,(data)=>{
    if (data!=null || data!= 200){
    res.writeHead(200);
     res.end(data)}
    
  })


}).listen(8080)