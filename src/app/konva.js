var Konva = require('konva');

$(function () {
    var $uploadEffectLevel = $('.upload-effect-level');
    var $phobos = $('#phobos');
    var $heat = $('#heat');
    var $input = $('input[name="effect"]');
    var $state = $('#state');

    function loadImages(sources, callback) {
        var images = {};
        var loadedImages = 0;
        var numImages = 0;
        for (var src in sources) {
            numImages++;
        }
        for (var src in sources) {
            images[src] = new Image();
            images[src].onload = function () {
                if (++loadedImages >= numImages) {
                    callback(images);
                }
            };
            images[src].src = sources[src];
        }
    }

    function Grayscale(images) {
        var stage = new Konva.Stage({
            container: 'container_image',
            width: window.innerWidth,
            height: window.innerHeight
        });

        var layer = new Konva.Layer();

        var mainImage = new Konva.Image({
            image: images.mainImage,
            x: 0,
            y: 0,
            draggable: true
        });

        mainImage.cache();
        mainImage.filters([Konva.Filters.Grayscale]);
        layer.add(mainImage);
        stage.add(layer);
    }

    var sources = {
        mainImage: './img/cat.png'
    };

    function Blur(images) {
        var stage = new Konva.Stage({
            container: 'container_image',
            width: window.innerWidth,
            height: window.innerHeight
        });

        var layer = new Konva.Layer();

        var mainImage = new Konva.Image({
            image: images.mainImage,
            x: 0,
            y: 0,
            blurRadius: 0,
            draggable: true
        });

        mainImage.cache();
        mainImage.filters([Konva.Filters.Blur]);
        layer.add(mainImage);
        stage.add(layer);
        var slider = document.getElementById('slider');
        slider.onchange = function () {
            $phobosValue = Number($phobos.val());
            mainImage.blurRadius($phobosValue);//value
            layer.batchDraw();
        };
    }

    function None(images) {
        var stage = new Konva.Stage({
            container: 'container_image',
            width: window.innerWidth,
            height: window.innerHeight
        });

        var layer = new Konva.Layer();

        var mainImage = new Konva.Image({
            image: images.mainImage,
            x: 0,
            y: 0,
            blurRadius: 0,
            draggable: true
        });

        mainImage.cache();
        mainImage.filters([Konva.Filters.Blur]);
        layer.add(mainImage);
        stage.add(layer);
    }

    function Sepia(images) {
        var stage = new Konva.Stage({
            container: 'container_image',
            width: window.innerWidth,
            height: window.innerHeight
        });

        var layer = new Konva.Layer();

        var mainImage = new Konva.Image({
            image: images.mainImage,
            x: 0,
            y: 0,
            blurRadius: 0,
            draggable: true
        });

        mainImage.cache();
        mainImage.filters([Konva.Filters.Sepia]);
        layer.add(mainImage);
        stage.add(layer);
    }

    function Invert(images) {
        var stage = new Konva.Stage({
            container: 'container_image',
            width: window.innerWidth,
            height: window.innerHeight
        });

        var layer = new Konva.Layer();

        var mainImage = new Konva.Image({
            image: images.mainImage,
            x: 0,
            y: 0,
            draggable: true
        });

        mainImage.cache();
        mainImage.filters([Konva.Filters.Invert]);
        layer.add(mainImage);
        stage.add(layer);
    }

    function Brighten(images) {
        var stage = new Konva.Stage({
            container: 'container_image',
            width: window.innerWidth,
            height: window.innerHeight
        });

        var layer = new Konva.Layer();

        var mainImage = new Konva.Image({
            image: images.mainImage,
            x: 0,
            y: 0,
            draggable: true
        });

        mainImage.cache();
        mainImage.filters([Konva.Filters.Brighten]);
        layer.add(mainImage);
        stage.add(layer);
        var slider = document.getElementById('slider');
        slider.onchange = function () {
            $heatValue = Number($heat.val());
            mainImage.brightness($heatValue);//value
            layer.batchDraw();
        };
    }

    $('#effectLevel').slider({
        animate: 'slow',
        range: 'min',
        value: 0,
        slide: function (event, ui) {
            switch ($state.val()) {
                case 'phobos':
                    $phobos.attr("value", ui.value);
                    break;
                case 'heat':
                    $heat.attr("value", ui.value / 100);
                    break;
            }
            $("#slider").trigger("change");
        }
    });

    loadImages(sources, None);
    $uploadEffectLevel.css("display", "none");

    $input.change(function () {
        switch ($(this).val()) {
            case 'none':
                loadImages(sources, None);
                $uploadEffectLevel.css("display", "none");
                break;
            case 'chrome':
                loadImages(sources, Grayscale);
                $uploadEffectLevel.css("display", "none");
                break;
            case 'sepia':
                loadImages(sources, Sepia);
                $uploadEffectLevel.css("display", "none");
                break;
            case 'marvin':
                loadImages(sources, Invert);
                $uploadEffectLevel.css("display", "none");
                break;
            case 'phobos':
                loadImages(sources, Blur);
                $uploadEffectLevel.css("display", "block");
                $state.attr("value", 'phobos');
                break;
            case 'heat':
                loadImages(sources, Brighten);
                $uploadEffectLevel.css("display", "block");
                $state.attr("value", 'heat');
                break;
        }
    });
});