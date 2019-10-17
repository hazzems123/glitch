var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
            console.log('request ', request.url);
            const {headers, url, method } = request;
         //reading the body request from the server
        let body = [];
          request.on('error', (err) => {
                      console.error(err);
                    }).on('data', (chunk) => {
                                body.push(chunk);
                              }).on('end', () => {
                                          body = Buffer.concat(body).toString();
          // BEGINNING OF NEW STUFF
          })
            response.on('error', (err) => {
                  console.error(err)
               response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    // Note: the 2 lines above could be replaced with this next one:
    // response.writeHead(200, {'Content-Type': 'application/json'})

    const responseBody = { headers, method, url, body };

    response.write('hello world');
    response.end();

              
                                      })

        

}).listen(8125)