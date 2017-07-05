const http = require('http')

http.createServer(handleRequest).listen(3000)

function handleRequest (request, response) {
  
  // read out the request body if present
  let payload = ''
  if (request.method == 'POST') request.on('data', (data) => payload += data );
  
  // log request method & URL as well as the body if present
  console.log(`${request.method} ${request.url}`)
  request.on('end', function () {
    if (payload) console.log(payload)
    
    // return a response
    response.end('ok')
  })
}