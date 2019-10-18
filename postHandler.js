var MongoClient = require('mongodb').MongoClient;
let posthandler = (req,res,cb)=>{
if (req.method === 'POST') {
    let body
    req.on('data', async (chunk) => {
      chunk = await JSON.parse(chunk);
      console.log ('the received chunk :'+chunk.size)
      const mongourl = "mongodb+srv://hazzems:iloverony123!@cluster0-atcd6.mongodb.net/test?retryWrites=true&w=majority"
        const db = await MongoClient.connect(mongourl,{ useNewUrlParser: true, useUnifiedTopology: true }, (err,client)=> {
          if (!err){
            const db = client.db('waistnshape')
                                
            db.collection('orders').insertOne({{order:chunk.orderno}:{
        name : chunk.name,
        email : chunk.email,
        mobile : chunk.mobile,
        address : chunk.address,
      
        size: chunk.size,
        qty: chunk.qty
    }});
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