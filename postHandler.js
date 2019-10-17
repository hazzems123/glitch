
let posthandler = (req,res,cb)=>{
if (req.method === 'POST') {
    let body
    req.on('data', (chunk) => {
      chunk = JSON.parse(chunk)
      console.log ('the received chunk :'+chunk)
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