var MongoClient = require('mongodb').MongoClient;
let posthandler = (req,res,cb)=>{
if (req.method === 'POST') {
    let body
    req.on('data', async (chunk) => {
      chunk = JSON.parse(chunk)
      console.log ('the received chunk :'+chunk[0].size)
      
      var orderno = Math.floor(100000 + Math.random() * 900000);
      const mongourl = "mongodb+srv://hazzems:iloverony123!@cluster0-atcd6.mongodb.net/test?retryWrites=true&w=majority"
        const db = await MongoClient.connect(mongourl,{ useNewUrlParser: true, useUnifiedTopology: true }, (err,client)=> {
          if (!err){
            const db = client.db('waistnshape')
        //create an order number for the customer 
     for (var i = 0 ; i <= chunk.lenght;i++){
       console.log (chunk[i].name)
        db.collection('orders').insertOne({
        orderno : orderno,
        name : chunk[i].name,
        email : chunk[i].email,
        mobile : chunk[i].mobile,
        address : chunk[i].address,
        size: chunk[i].size,
        qty: chunk[i].qty
    });
        }
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