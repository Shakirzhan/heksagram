$ = require('jquery');
require('jquery-ui/ui/widgets/slider');
require('cropper/dist/cropper.common.js');
require('./konva');

console.log("Запускать через cmd потому что лагает диск 100%");

$(function () {
  function getImage() {
    $('#image_canvas').attr('src', '/image_caman/cat.png?timestamp=' + new Date().getMilliseconds());
  }

  var DOMAIN = 'http://localhost:3000';
});
