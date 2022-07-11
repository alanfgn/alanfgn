// ready(function () {
//     initializeBackground();
// });

var resizeTimeout;
var resizeCooldown = 500;
var lastResizeTime = Date.now();

function initializeBackground() {
    canvas = document.getElementById("stars");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
        if (Date.now() - lastResizeTime < resizeCooldown && resizeTimeout) {
            clearTimeout(resizeTimeout);
            resizeTimeout = null;
        }

        lastResizeTime = Date.now();
        canvas.style.display = "none";

        resizeTimeout = setTimeout(function () {
            fadeIn(canvas, 500);
            initializeStars();
        },500);

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    initializeStars();

    (window.requestAnimationFrame && requestAnimationFrame(paintLoop)) || setTimeout(paintLoop, ms);
}

var canvas;
var stars = [];

function rand(max) {
    return Math.random() * max;
}

function Star(canvas, size, speed) {
    this.ctx = canvas.getContext("2d");
    this.size = size;
    this.speed = speed;
    this.x = rand(window.innerWidth);

    this.y = rand(window.innerHeight);
}

Star.prototype.animate = function (delta) {
    this.x += this.speed * delta;
    this.y -= this.speed * delta;

    if (this.y < 0) {
        this.y = window.innerHeight;
    }
    if (this.x > window.innerWidth) {
        this.x = 0;
    }

    this.ctx.fillStyle = "#ffffff";


    // this.ctx.fillRect(this.x, this.y, this.size, this.size);
    
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI, false);
    this.ctx.shadowBlur = 15; 
    this.ctx.shadowColor = "white";
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    // this.ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI, false);
    // this.ctx.fill()
};

function initializeStars() {
    var winArea = window.innerWidth * window.innerHeight;
    
    var smallStarsDensity = 0.00001;
    var mediumStarsDensity = 0.00005;
    var largeStarsDensity = 0.000007;

    var smallStarsCount = winArea * smallStarsDensity;
    var mediumStarsCount = winArea * mediumStarsDensity;
    var largeStarsCount = winArea * largeStarsDensity;

    stars = [];
    
    for (var i = 0; i < smallStarsCount; i++) {
        stars.push(new Star(canvas, 0.5, 30));
    }

    for (var i = 0; i < mediumStarsCount; i++) {
        stars.push(new Star(canvas, 1, 10));
    }

    for (var i = 0; i < largeStarsCount; i++) {
        stars.push(new Star(canvas, 1.5, 15));
    }
}

function drawStars(delta) {
    for (var i = 0; i < stars.length; i++) {
        stars[i].animate(delta);
    }
}


var ms = 16;
var lastPaintTime = 0;

function paintLoop(timestamp) {
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    var delta = (window.requestAnimationFrame ? timestamp - lastPaintTime : ms) / 1500;
    
    if (delta > 0.05) {
        delta = 0.05;
    }

    drawStars(delta);
    
    (window.requestAnimationFrame && requestAnimationFrame(paintLoop)) || setTimeout(paintLoop, ms);
    lastPaintTime = timestamp;
}

function fadeIn(element, duration, callback) {
    element.style.opacity = 0;
    element.style.display = "block";

    var startTime = Date.now();
    var tick = function () {
        var newOpacity = (Date.now() - startTime) / duration;
        
        if (newOpacity > 1) {
            newOpacity = 1;
            callback && callback();
        } else {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }

        element.size = newOpacity;

   
    };

    tick();
}

export const ready = function (canvas) {
    if (canvas != null) {
        initializeBackground();
    }
};
