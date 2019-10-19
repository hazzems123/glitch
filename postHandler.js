var MongoClient = require('mongodb').MongoClient;
let posthandler = (req,res,err,client,cb)=>{
if (req.method === 'POST') {
    let body
    req.on('data', async (chunk) => {
      chunk = JSON.parse(chunk)
      console.log ('the received chunk :'+chunk[0].size)
      
      var orderno = Math.floor(100000 + Math.random() * 900000);
    
          if (!err){
            const db = client.db('waistnshape')
        //create an order number for the customer 
        chunk.forEach (z=>{
           db.collection('orders').insertOne({
        orderno : orderno,
        name : z.name,
        email : z.email,
        mobile : z.mobile,
        address : z.address,
        size: z.size,
        qty: z.qty
    });
        
        })
       
        
          }
          else {
            console.log ('error connecting to the db')
          }
       
 
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