var express = require('express');
var app = express();
var Caman = require('caman').Caman;

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/none', function async(req, res) {
  Caman('./build/image/cat.png', function () {
    this.render(function () {
      this.save('./src/public/image_caman/cat.png');
      res.send('save true none!');
    });
  });
});

app.get('/chrome', function async(req, res) {

  res.send('save true chrome!');
  return;

  Caman('./build/image/cat.png', function () {
    this.greyscale();
    this.render(function () {
      this.save('./src/public/image_caman/cat.png');
      
    });
  });
});

app.get('/marvin', function async(req, res) {
  Caman('./build/image/cat.png', function () {
    this.invert();
    this.render(function () {
      this.save('./src/public/image_caman/cat.png');
      res.send('save true marvin!');
    });
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
