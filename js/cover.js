var animateCoverBackground;
var animateCoverBackgroundFunction;
(function() {
    var width, height, coverBackground, canvas, ctx, triangles, target, animateHeader = true;
    var colors = ['72,35,68', '43,81,102', '66,152,103', '250,178,67', '224,33,48'];

    if (window.innerWidth > 1500){
      var triangleSize = 5;
      tweenRadiusFactor = 4
    }
    else if (window.innerWidth <= 1500) {
      var triangleSize = 8
      tweenRadiusFactor = 1
    }

    // Main
    initHeader();
    addListeners();
    initAnimation();

    function initHeader() {
        width = document.getElementById('cover').clientWidth;
        height = document.getElementById('cover').clientHeight;
        console.log(height);
        target = {x: 0, y: height};

        coverBackground = document.getElementById('cover-background');
        coverBackground.style.height = height+'px';

        canvas = document.getElementById('cover-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        triangles = [];
        for(var x = 0; x < 250; x++) {
            addTriangle(x*10);
        }
    }

    function addTriangle(delay) {
        setTimeout(function() {
            var t = new Triangle();
            triangles.push(t);
            tweenTriangle(t);
        }, delay);
    }

    function initAnimation() {
        animate();
    }

    function tweenTriangle(tri) {
        var t = Math.random()*(2*Math.PI);
        var x = (tweenRadiusFactor*50+Math.random()*100)*Math.cos(t) + width*0.45;
        var y = (tweenRadiusFactor*50+Math.random()*100)*Math.sin(t) + height*0.5-20;
        var time = 4+3*Math.random();

        TweenLite.to(tri.pos, time, {x: x,
            y: y, ease:Circ.easeOut,
            onComplete: function() {
                tri.init();
                tweenTriangle(tri);
        }});
    }

    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = document.getElementById('cover').clientWidth;
        height = document.getElementById('cover').clientHeight;
        coverBackground.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in triangles) {
                triangles[i].draw();
            }
        }
        animateCoverBackground = requestAnimationFrame(animate);
    }

    animateCoverBackgroundFunction = animate.bind(null);

    // Canvas manipulation
    function Triangle() {
        var _this = this;

        // constructor
        (function() {
            _this.coords = [{},{},{}];
            _this.pos = {};
            init();
        })();

        function init() {
            _this.pos.x = width*0.45;
            _this.pos.y = height*0.5-20;
            _this.coords[0].x = -10+Math.random()*width/triangleSize;
            _this.coords[0].y = -10+Math.random()*width/triangleSize;
            _this.coords[1].x = -10+Math.random()*width/triangleSize;
            _this.coords[1].y = -3+Math.random()*width/triangleSize;
            _this.coords[2].x = -10+Math.random()*width/triangleSize;
            _this.coords[2].y = -10+Math.random()*width/triangleSize;
            _this.scale = 1.1+Math.random()*0.3;
            _this.color = colors[Math.floor(Math.random()*colors.length)];
            setTimeout(function() { _this.alpha = 0.9; }, 10);
        }

        this.draw = function() {
            if(_this.alpha >= 0.005) _this.alpha -= 0.005;
            else _this.alpha = 0;
            ctx.beginPath();
            ctx.moveTo(_this.coords[0].x+_this.pos.x, _this.coords[0].y+_this.pos.y);
            ctx.lineTo(_this.coords[1].x+_this.pos.x, _this.coords[1].y+_this.pos.y);
            ctx.lineTo(_this.coords[2].x+_this.pos.x, _this.coords[2].y+_this.pos.y);
            ctx.closePath();
            ctx.fillStyle = 'rgba('+_this.color+','+ _this.alpha+')';
            ctx.fill();
        };
        this.init = init;
    }
})();
