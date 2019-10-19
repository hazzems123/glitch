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
  const mongourl = "mongodb+srv://hazzems:iloverony123!@cluster0-atcd6.mongodb.net/test?retryWrites=true&w=majority"

  const db = await MongoClient.connect(mongourl,{ useNewUrlParser: true, useUnifiedTopology: true })
  
  console.log (db.db('waistnshape'))
   
  
  
  req.on('error', ()=>{
    res.end('their is an error processing the request ')
  })
 

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