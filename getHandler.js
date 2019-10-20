 let gethandler = (req,res ,err,client,cb) => {
  let data = ' the call back works'
  const db = client.db('waistnshape')
const collection = db.collection('orders')

collection.find().toArray((err, data) => {
  data = JSON.stringify(data);
  console.log ()
  cb (data)
})
  

};
module.exports = gethandler