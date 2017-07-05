const http = require('http')

http.createServer(function (req, res) {
  console.log(`received request: ${req.method} ${req.url}`)

  res.write('ok')
}).listen(3000)