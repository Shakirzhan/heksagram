const http = require('http'),
  Caman = require('caman').Caman;

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  Caman('./build/image/cat.png', function () {
    this.greyscale();
    this.render(function () {
      this.save('./build/caman/cat.png');
    });
  });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
