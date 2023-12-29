function Constellation (canvas) {
    var _this = this,
        context = canvas.getContext('2d'),
        config = {
          star: {
            color: 'rgba(255, 255, 255, .5)',
            width: 3
          },
          line: {
            color: 'rgb(10, 23, 158)',
            width: 0.4
          },
          position: {
            x: 0,
            y: 0
          },
          width: window.innerWidth,
          height: window.innerHeight,
          length: Math.sqrt( Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2) ) / 10,
          distance: 120,
          radius: 150,
          stars: []
        };
  
    function Star () {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * config.star.width;
  
      this.vx = (0.5 - Math.random())/5;
      this.vy = (0.5 - Math.random())/5;
  
      this.create = function() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fill();
      };
    }
  
    this.animate = function() {
      var i;
      for (i = 0; i < config.length; i++) {
  
        var star = config.stars[i];
  
        if (star.y < 0 || star.y > canvas.height) {
          star.vy = - star.vy;
        } else if (star.x < 0 || star.x > canvas.width) {
          star.vx = - star.vx;
        }
  
        star.x += star.vx;
        star.y += star.vy;
      }
    };
  
    this.line = function() {
      var length = config.length,
          iStar,
          jStar,
          i,
          j;
  
      for (i = 0; i < length; i++) {
        for (j = 0; j < length; j++) {
          iStar = config.stars[i];
          jStar = config.stars[j];
  
          if (
            (iStar.x - jStar.x) < config.distance &&
            (iStar.y - jStar.y) < config.distance &&
            (iStar.x - jStar.x) > - config.distance &&
            (iStar.y - jStar.y) > - config.distance
          ) {
            if (
              (iStar.x - config.position.x) < config.radius &&
              (iStar.y - config.position.y) < config.radius &&
              (iStar.x - config.position.x) > - config.radius &&
              (iStar.y - config.position.y) > - config.radius
            ) {
              context.beginPath();
              context.moveTo(iStar.x, iStar.y);
              context.lineTo(jStar.x, jStar.y);
              context.stroke();
              context.closePath();
            }
          }
        }
      }
    };
  
    this.createStars = function () {
      context.clearRect(0, 0, canvas.width, canvas.height);
  
      for (var i = 0; i < config.length; i++) {
        config.stars.push(new Star());
        config.stars[i].create();
      }
  
      _this.animate();
      _this.line();
    };
  
    this.setCanvas = function () {
      canvas.width = config.width;
      canvas.height = config.height;
    };
  
    this.setContext = function () {
      context.fillStyle = config.star.color;
      context.strokeStyle = config.line.color;
      context.lineWidth = config.line.width;
    };
  
    this.loop = function (callback) {
      callback();
  
      window.requestAnimationFrame(function () {
        _this.loop(callback);
      });
    };
  
    this.bind = function () {
      canvas.addEventListener("mousemove", function(e){
        config.position.x = e.pageX - canvas.offsetLeft;
        config.position.y = e.pageY - canvas.offsetTop;
      });
    };
  
    this.init = function () {
      this.setCanvas();
      this.setContext();
      this.loop(this.createStars);
      this.bind();
    };
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var c = new Constellation(document.getElementById('canvas'));
    c.init();
  });


// Табла

  function readMore(){
      let dots = document.getElementById("dots")
      let more = document.getElementById("more")

      if(dots.style.display === "none"){
        dots.style.display="inline"
        more.style.display="none"
      } else{
          dots.style.display="none"
          more.style.display="inline"
      }
  }
  function readMore1(){
    let dots1 = document.getElementById("dots1")
    let more1 = document.getElementById("more1")

    if(dots1.style.display === "none"){
      dots1.style.display="inline"
      more1.style.display="none"
    } else{
        dots1.style.display="none"
        more1.style.display="inline"
    }
}

function readMore2(){
  let dots2 = document.getElementById("dots2")
  let more2 = document.getElementById("more2")

  if(dots2.style.display === "none"){
    dots2.style.display="inline"
    more2.style.display="none"
  } else{
      dots2.style.display="none"
      more2.style.display="inline"
  }
}
function readMore3(){
  let dots3 = document.getElementById("dots3")
  let more3 = document.getElementById("more3")

  if(dots3.style.display === "none"){
    dots3.style.display="inline"
    more3.style.display="none"
  } else{
      dots3.style.display="none"
      more3.style.display="inline"
  }
}
function readMore4(){
  let dots4 = document.getElementById("dots4")
  let more4 = document.getElementById("more4")

  if(dots4.style.display === "none"){
    dots4.style.display="inline"
    more4.style.display="none"
  } else{
      dots4.style.display="none"
      more4.style.display="inline"
  }
}
function readMore5(){
  let dots5 = document.getElementById("dots5")
  let more5 = document.getElementById("more5")

  if(dots5.style.display === "none"){
    dots5.style.display="inline"
    more5.style.display="none"
  } else{
      dots5.style.display="none"
      more5.style.display="inline"
  }
}
function readMore6(){
  let dots6 = document.getElementById("dots6")
  let more6 = document.getElementById("more6")

  if(dots6.style.display === "none"){
    dots6.style.display="inline"
    more6.style.display="none"
  } else{
      dots6.style.display="none"
      more6.style.display="inline"
  }
}
function readMore7(){
  let dots7 = document.getElementById("dots7")
  let more7 = document.getElementById("more7")

  if(dots7.style.display === "none"){
    dots7.style.display="inline"
    more7.style.display="none"
  } else{
      dots7.style.display="none"
      more7.style.display="inline"
  }
}
function readMore8(){
  let dots8 = document.getElementById("dots8")
  let more8 = document.getElementById("more8")

  if(dots8.style.display === "none"){
    dots8.style.display="inline"
    more8.style.display="none"
  } else{
      dots8.style.display="none"
      more8.style.display="inline"
  }
}


//Слайдер:

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
});

const slide = () => {
  const imageWidth = slider.clientWidth;
  const slideOffset = -slideIndex * imageWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;
}

window.addEventListener('load', () => {
  slide();
});