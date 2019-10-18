var MongoClient = require('mongodb').MongoClient;

let posthandler = (req,res,cb)=>{
if (req.method === 'POST') {
    let body
    req.on('data', async (chunk) => {
      chunk = JSON.parse(chunk)
      console.log ('the received chunk :'+chunk)
      const mongourl = "mongodb+srv://hazzems:iloverony123!@cluster0-atcd6.mongodb.net/test?retryWrites=true&w=majority"
        const db = await MongoClient.connect(mongourl,{ useNewUrlParser: true, useUnifiedTopology: true }, (err,client,chunk)=> {
         client.collection('Customers').insertOne({
         size: chunk.size,
        qty: chunk.qty
    });
 })
      body = JSON.stringify(chunk)
    }).on('end', () => {
      cb(body)
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
  
}
module.exports = posthandler