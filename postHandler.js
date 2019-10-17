
let posthandler = (req,res,cb)=>{
if (req.method === 'POST') {
    let body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      res.end(body);
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
  
}
module.exports = posthandler