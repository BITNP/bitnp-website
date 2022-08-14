<script setup >
import {reactive,onMounted} from "vue";

let e=reactive({es:{}});

onMounted(()=>{
  setTimeout(()=>{e.es={
    left:[
      {
        title:'LOREM',
        time:'2011 - NOW',
        context:'ero in nibh convallis sollicitudin. Maecenas ante erat, lacinia commodo pretium vel, ultricies eget nibh. Duis et felis lectus. Donec orci libero, auctor eget sodales at, euismod venenatis nibh.'
      },{
        title: 'IPSUM',
        time:'2013',
        context: 'ero in nibh convallis sollici blandit neque in, ornare libero.'
      },{
        title: 'CONSECTETUR',
        time: '2007 - 2010',
        context: 'ero in nibh convallis sollici blandit neque in, ornare libero.'
      }
    ],
    right:[
      {
        title:'ORNARE',
        time:'2012 - 06.2013',
        context:'ipsum pulvinar, blandit neque in, ornare libero.'
      },{
        title: 'LIBERO',
        time:'2010 - 2011',
        context: 'elit. Nam et ipsum pulvinar, blandit neque in, ornare libero. Nam et ipsum pulvinar, blandit neque in, ornare libero.'
      },{
        title: 'ADIPISCING',
        time: '2010',
        context: 'Nam et ipsum pulvinar, blandit neque in, ornare libero.'
      }
    ]
  };},500);
});

</script>

<template>
  <section id="timeline">
<!--    <span style="float: contour;font-size: 2rem;  font-family:'Raleway';padding-left: 15px;padding-bottom: 3rem;color: #e9ceb2;">近期活动</span>-->
    <div class="timeline">
      <canvas id="cvs3" width="1691" height="765"></canvas>
      <article>
        <h2></h2>
        <figure v-for="items in e.es.left">
          <figcaption>{{items.title}}</figcaption>
          <h6>{{items.time}}</h6>
          <p>{{items.context}}</p>
        </figure>
      </article>

      <article>
        <h2></h2>
        <figure v-for="items in e.es.right">
          <figcaption>{{items.title}}</figcaption>
          <h6>{{items.time}}</h6>
          <p>{{items.context}}</p>
        </figure>
      </article>
      <br style="clear:both">
    </div>

  </section>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "timeLine",
  data(){
    return{

    }
  },
  updated() {
    new Timeline(document.querySelector('#cvs3')).toggle(true);
  }
});

// timeline drawing handler
function Timeline(cvs) {
  // console.log('begin');
  let self = this,
      paused = true,
      rafid = 0,
      mouse = {x: 0, y: 0},
      canvas = cvs,
      ctx = null;
  // console.log(canvas);
  self.lines = [];

  self.isOK = false;
  self.options = {
    speed: 0.1,
    density: 8,
    radius: 600 };

  self.targets = [
    [29, 32, 48, 68],
    [29, 33, 38]];

  self.dotColors = [
    ['#fb8c00', 'rgba(255,148,14,0.35)', 'rgba(232,138,17,0.11)'],
    ['#c0d317', 'rgba(208,222,15,0.3)', 'rgba(159,164,22,0.12)']];


  self.isPaused = function () {
    return paused;
  };

  function InitDots() {
    const tl = document.getElementsByClassName('timeline');
    const top =document.getElementById('timeline').querySelector('h2').offsetHeight;
    // const top = document.getElementById('timeline').
    // querySelector('article').querySelector('figure').
    // querySelector('figcaption').offsetHeight;
    self.lines[0].dots = [];
    let y = top;

    document.getElementById('timeline').
    querySelector('article').
    querySelectorAll('figure').
    forEach(function (e) {

      self.lines[0].dots.push([e.offsetWidth + 20, y + 20]);
      // console.log(e);
      y += e.offsetHeight;
    });

    self.lines[1].dots = [];
    y = top;
    document.getElementById('timeline').
    querySelector('article').
    querySelectorAll('figure').
    forEach(function (e) {

      self.lines[1].dots.push([canvas.width - e.offsetWidth - 20, y + 20]);

      y += e.offsetHeight;
    });
  }

  function OnResize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    var wasPaused = paused;
    self.toggle(false);
    // Init lines
    self.lines[0].reset(canvas.offsetWidth / 2 - 15);
    self.lines[1].reset(canvas.offsetWidth / 2 + 15);

    InitDots();

    self.toggle(!wasPaused);
  }

  function init() {
    // console.log('init');
    let result = false;
    try {
      // console.log(document.querySelector('canvas'));
      result = !!(canvas.getContext && (ctx = canvas.getContext('2d')));

      self.lines[0] = new Line(-90, canvas.offsetHeight - 65, '#ffc70f', self.options, mouse);
      self.lines[1] = new Line(-90, canvas.offsetHeight - 65, '#e0e543', self.options, mouse);

    } catch (e) {
      console.log(e);
      return false;
    }

    document.querySelector('canvas').addEventListener('mousemove',function (e) {

      if (e.offsetX) {
        mouse.x = e.offsetX;
        mouse.y = e.offsetY;
        // console.log(e);
      } else
      if (e.layerX) {
        mouse.x = e.layerX;
        mouse.y = e.layerY;
      } else
      {
        mouse.x = e.pageX - canvas.offsetLeft;
        mouse.y = e.pageY - canvas.offsetTop;
      }
    });

    window.addEventListener('resize',OnResize);

    OnResize();

    return result;
  }

  function Line(y, height, color, options, mouse) {
    var self = this;

    self.color = color;
    self.options = options;
    self.mouse = mouse;
    self.height = height;
    self.dots = [];
    self.y = y;

    self.points = [];

    self.reset = function (x, f) {
      self.points = [];
      for (let y = self.y; y < self.height; y += self.options.density)
          // console.log(`push x[${y-self.y}]:${x}`);
        self.points.push(new Point(x, y, self.color));
    };

    self.update = function () {
      for (let i = 0; i < self.points.length; i++)
        self.points[i].update(self.mouse, self.options);
    };

    function Point(x, y) {
      this.y = y;
      this.x = x;
      this.base = { x: x, y: y };

      this.update = function (mouse, options) {
        var dx = this.x - mouse.x / 1.4,
            dy = this.y - mouse.y / 1.4,
            alpha = Math.atan2(dx, dy),
            alpha = alpha > 0 ? alpha : 2 * Math.PI + alpha,
            d = options.radius / Math.sqrt(dx * dx + dy * dy);

        this.y += Math.cos(alpha) * d + (this.base.y - this.y) * options.speed;
        this.x += Math.sin(alpha) * d + (this.base.x - this.x) * options.speed;
      };
    }
  }

  function drawCircle(p, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, r, 0, 2 * Math.PI, true);
    ctx.closePath();
    ctx.fill();
  }

  function drawLine(p1, p2) {
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
    ctx.closePath();
  }

  function redraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < 2; i++) {
      var points = self.lines[i].points;
      // console.log(self);
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = self.lines[i].color;
      ctx.moveTo(points[15].x, points[15].y);

      for (var j = 15; j < points.length - 2; j++) {
        var point = points[j];

        var xc = (points[j + 1].x + point.x) / 2;
        var yc = (points[j + 1].y + point.y) / 2;


        ctx.quadraticCurveTo(point.x, point.y, xc, yc);
      }
      ctx.stroke();
      ctx.closePath();


      // Dots
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = self.dotColors[i][2];
      for (var j = 0; j < self.lines[i].dots.length; j++) {
        var dot = self.lines[i].dots[j],
            id = self.targets[i][j];
        if(id==undefined){
          // console.log(self.targets,`i:${i},j:${j}`,`dotslength:${self.lines[i].dots.length}`);
          return;
        }
        var dot2 = [
          (self.lines[i].points[id].x + self.lines[i].points[id + 1].x) / 2,
          (self.lines[i].points[id].y + self.lines[i].points[id + 1].y) / 2];

        var p1 = { x: dot[0], y: dot[1] };
        var p2 = { x: dot2[0], y: dot2[1] };


        drawLine(p1, p2);
        drawCircle(p1, 3, self.dotColors[i][0]);

        drawCircle(p2, 11, self.dotColors[i][1]);
        drawCircle(p2, 5.5, self.dotColors[i][0]);
      }
    }
  }

  function animate() {
    rafid = requestAnimationFrame(animate);

    self.lines[0].update();
    self.lines[1].update();

    redraw();
  }

  self.toggle = function (run) {
    if (!self.isOK) return false;

    if (run === undefined)
      self.toggle(!paused);else

    if (!!run && paused) {
      paused = false;
      animate();
    } else
    if (!!!run) {
      paused = true;
      cancelAnimationFrame(rafid);
    }
    return true;
  };


  self.isOK = init();
}

</script>

<style scoped>
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/lato/v23/S6uyw4BMUTPHjx4wWw.ttf) format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/raleway/v28/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrQ.ttf) format('truetype');
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#timeline {
  padding-top: 15%;
}
.timeline {
  height: 100%;
  position: relative;
}
.timeline canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.timeline figcaption {
  font: 900 190% 'Lato';
  text-transform: uppercase;
  -webkit-text-stroke: 0.25px;
}
.timeline h2,h3 {
  font: 400 400% 'Raleway';
  padding-bottom: 3rem;
  color: #e9cbb2;
}
.timeline h6 {
  color: #f58300;
  font: 400 80% Tahoma;
}
.timeline p,
.timeline ol {
  font: 400 95% 'Raleway';
  padding: 3px 0 20px 0;
  color: #575757;
  text-align: justify;
  width: 70%;
}
.timeline ol {
  list-style: disc;
  margin-top: -20px;
  padding-left: 40px;
}
.timeline figure {
  float: right;
  width: 100%;
}
.timeline article {
  position: relative;
  width: 38%;
  overflow: hidden;
  margin-bottom: 100px;
}
.timeline article:first-of-type {
  float: left;
  text-align: right;
}
.timeline article:first-of-type p,
.timeline article:first-of-type figure {
  float: right;
}
.timeline article:last-of-type {
  text-align:left;
  float: right;
}
.timeline article:last-of-type h2 {
  color: #e0ddaa;
}
.timeline article:last-of-type h6,
.timeline article:last-of-type a {
  color: #B3D600;
}
.timeline article:last-of-type a:hover {
  color: #cdd40d;
}
</style>