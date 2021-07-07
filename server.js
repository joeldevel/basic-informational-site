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
  if( q.pathname === '/') {
    q.pathname = '/index.html';
  }
  let filename = "." + q.pathname;
  // console.log(filename);

  fs.readFile(filename, function(err, data) {
    if(err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return fs.createReadStream("./404.html").pipe(res);
    }
    res.writeHead(200, {'Content-Type': 'text/html'});

    // console.log(data);
    res.write(data);
    return res.end();
  });
  // res.end(text);
}).listen(8081);
