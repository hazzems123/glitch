var MongoClient = require('mongodb').MongoClient;
let posthandler = (req,res,cb)=>{
if (req.method === 'POST') {
    let body
    req.on('data', async (chunk) => {
      chunk = JSON.parse(chunk);
      console.log ('the received chunk :'+chunk.size)
      

      const mongourl = "mongodb+srv://hazzems:iloverony123!@cluster0-atcd6.mongodb.net/test?retryWrites=true&w=majority"
        const db = await MongoClient.connect(mongourl,{ useNewUrlParser: true, useUnifiedTopology: true }, (err,client)=> {
          if (!err){
           var orderno = Math.floor(100000 + Math.random() * 900000);
            const db = client.db('waistnshape')
        //create an order number for the customer 
        db.collection('orders').insertOne({
        orderno : orderno,
        name : chunk.name,
        email : chunk.email,
        mobile : chunk.mobile,
        address : chunk.address,
        size: chunk.size,
        qty: chunk.qty
    });
          }
          else {
            console.log ('error connecting to the db')
          }
       
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