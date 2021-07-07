var dt = require('./dateModule');
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res) {
  // res.writeHead(200, {'Content-Type': 'text/html'});
  // res.write("the date and time are currently: " + dt.myDateTime());
  let q = url.parse(req.url, true);
  // let text = q.year + " " + q.month;
  // res.write('<br>');
  let filename = "." + q.pathname;

  fs.readFile(filename, function(err, data) {
    if(err) {
      res.writeHead(404, {'Content-Type': 'text/html'});

      return res.end("page not found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
  // res.end(text);
}).listen(8081);
