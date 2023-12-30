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
      /*_this.line();*/
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
      let btn = document.getElementById("btn")

      if(dots.style.display === "none"){
        dots.style.display="inline"
        more.style.display="none"
        btn.innerHTML="►  Всегда соблюдаю сроки"
      } else{
          dots.style.display="none"
          more.style.display="inline"
          btn.innerHTML="▼  Всегда соблюдаю сроки"
      }
  }
  function readMore1(){
    let dots1 = document.getElementById("dots1")
    let more1 = document.getElementById("more1")
    let btn1 = document.getElementById("btn1")

    if(dots1.style.display === "none"){
      dots1.style.display="inline"
      more1.style.display="none"
      btn1.innerHTML="►  Всегда на связи"
    } else{
        dots1.style.display="none"
        more1.style.display="inline"
        btn1.innerHTML="▼  Всегда на связи"
    }
}
function readMore2(){
  let dots2 = document.getElementById("dots2")
  let more2 = document.getElementById("more2")
  let btn2 = document.getElementById("btn2")

  if(dots2.style.display === "none"){
    dots2.style.display="inline"
    more2.style.display="none"
    btn2.innerHTML="►  Всегда выбираю наиболее актуальный способ верстки"
  } else{
      dots2.style.display="none"
      more2.style.display="inline"
      btn2.innerHTML="▼  Всегда выбираю наиболее актуальный способ верстки"
  }
}
function readMore3(){
  let dots3 = document.getElementById("dots3")
  let more3 = document.getElementById("more3")
  let btn3 = document.getElementById("btn3")

  if(dots3.style.display === "none"){
    dots3.style.display="inline"
    more3.style.display="none"
    btn3.innerHTML="►  Всегда проверяю валидность кода"
  } else{
      dots3.style.display="none"
      more3.style.display="inline"
      btn3.innerHTML="▼  Всегда проверяю валидность кода"
  }
}
function readMore4(){
  let dots4 = document.getElementById("dots4")
  let more4 = document.getElementById("more4")
  let btn4 = document.getElementById("btn4")

  if(dots4.style.display === "none"){
    dots4.style.display="inline"
    more4.style.display="none"
    btn4.innerHTML="►  Активно применяю возможности CSS"
  } else{
      dots4.style.display="none"
      more4.style.display="inline"
      btn4.innerHTML="▼  Активно применяю возможности CSS"
  }
}
function readMore5(){
  let dots5 = document.getElementById("dots5")
  let more5 = document.getElementById("more5")
  let btn5 = document.getElementById("btn5")

  if(dots5.style.display === "none"){
    dots5.style.display="inline"
    more5.style.display="none"
    btn5.innerHTML="►  Использую блочную верстку"
  } else{
      dots5.style.display="none"
      more5.style.display="inline"
      btn5.innerHTML="▼  Использую блочную верстку"
  }
}
function readMore6(){
  let dots6 = document.getElementById("dots6")
  let more6 = document.getElementById("more6")
  let btn6 = document.getElementById("btn6")

  if(dots6.style.display === "none"){
    dots6.style.display="inline"
    more6.style.display="none"
    btn6.innerHTML="►  Оптимизирую графику"
  } else{
      dots6.style.display="none"
      more6.style.display="inline"
      btn6.innerHTML="►  Оптимизирую графику"
  }
}
function readMore7(){
  let dots7 = document.getElementById("dots7")
  let more7 = document.getElementById("more7")
  let btn7 = document.getElementById("btn7")

  if(dots7.style.display === "none"){
    dots7.style.display="inline"
    more7.style.display="none"
    btn7.innerHTML="►  Активно применяю JavaScript и jQuery"
  } else{
      dots7.style.display="none"
      more7.style.display="inline"
      btn7.innerHTML="►  Активно применяю JavaScript и jQuery"
  }
}
function readMore8(){
  let dots8 = document.getElementById("dots8")
  let more8 = document.getElementById("more8")
  let btn8 = document.getElementById("btn8")

  if(dots8.style.display === "none"){
    dots8.style.display="inline"
    more8.style.display="none"
    btn8.innerHTML="►  Если в макете присутствуют нестандартные шрифты ..."
  } else{
      dots8.style.display="none"
      more8.style.display="inline"
      btn8.innerHTML="►  Если в макете присутствуют нестандартные шрифты ..."
  }
}


function logotip(){
  let demo = document.getElementById("demo")
  let full = document.getElementById("full")

  if(demo.style.display === "none"){
    demo.style.display="inline"
    full.style.display="none"
  } else{
      demo.style.display="none"
      full.style.display="inline"
  }
}
