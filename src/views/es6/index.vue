<template>
  <div class="globalBox" id="pageContent">
    <div class="item">
      <div class="title">变量的结构赋值</div>
      <ul>
        <li>
          <p class="fw600">基本用法:</p>
          <pre class="codeBox">
            <code>
   let a = 1;
   let [a,b,c]=[1,2,3];
   let [,,a]=[1,2,3];
   let [a,...arr]=[1,2,3];
   a <span class="c666">//1</span>
   arr <span class="c666">//[2,3]</span>
   let [a,[b],c] = [1,[2,3],4];
   a <span class="c999">//1</span>
   b <span class="c999">//2</span>
   c <span class="c999">//4</span>
            </code>
        </pre>
        </li>
        <li>
          <p class="fw600">对象的解构赋值</p>
          <pre class="codeBox">
            <code>
    let {a,b} = {a:'one',b:'two'};
    let {b} = {a:'one',b:'two'};
    b <span class="c999">//underfined</span>
    let obj = {a:'one',b:'two'};
    let {a:c,b:d} = obj;
    a <span class="c999">// underfined</span>
    c <span class="c999">//'one'</span>
    d <span class="c999">//'two'</span>
    <span class="orange">对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。</span>
    let arr = [1,2,3];
    let{0:a,[arr.length-1]:b}=arr;
    a <span class="c999">// 1</span>
    b <span class="c999">// 3</span>
            </code>
          </pre>
        </li>
        <li>
          <p class="fw600">字符串的解构</p>
          <pre>
            <code>

            </code>
          </pre>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
export default {
  setup() {
    const { ctx } = getCurrentInstance();
    const star = () => {
      //  实现星星背景
      debugger;
      const _element = document.getElementById("pageContent");
      const _canvas_old = _element.getElementsByTagName("canvas");
      if (_canvas_old.lenght) {
        _element.removeChild(_canvas_old[0]);
      }

      const _canvas = document.createElement("canvas");
      _canvas.setAttribute("id", "canvas");
      _element.appendChild(_canvas);
      setTimeout(() => {
        var canvas = document.getElementById("canvas"),
          ctx = canvas.getContext("2d"),
          w = (canvas.width = window.innerWidth),
          h = (canvas.height = window.innerHeight),
          hue = 217,
          stars = [],
          count = 0,
          maxStars = 1200;

        var canvas2 = document.createElement("canvas"),
          ctx2 = canvas2.getContext("2d");
        canvas2.width = 100;
        canvas2.height = 100;
        var half = canvas2.width / 2,
          gradient2 = ctx2.createRadialGradient(
            half,
            half,
            0,
            half,
            half,
            half
          );
        gradient2.addColorStop(0.025, "#fff");
        gradient2.addColorStop(0.1, "hsl(" + hue + ", 61%, 33%)");
        gradient2.addColorStop(0.25, "hsl(" + hue + ", 64%, 6%)");
        gradient2.addColorStop(1, "transparent");

        ctx2.fillStyle = gradient2;
        ctx2.beginPath();
        ctx2.arc(half, half, half, 0, Math.PI * 2);
        ctx2.fill();

        // End cache

        function random(min, max) {
          if (arguments.length < 2) {
            max = min;
            min = 0;
          }

          if (min > max) {
            var hold = max;
            max = min;
            min = hold;
          }

          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function maxOrbit(x, y) {
          var max = Math.max(x, y),
            diameter = Math.round(Math.sqrt(max * max + max * max));
          return diameter / 2;
        }

        var Star = function() {
          this.orbitRadius = random(maxOrbit(w, h));
          this.radius = random(60, this.orbitRadius) / 12;
          this.orbitX = w / 2;
          this.orbitY = h / 2;
          this.timePassed = random(0, maxStars);
          this.speed = random(this.orbitRadius) / 900000;
          this.alpha = random(2, 10) / 10;

          count++;
          stars[count] = this;
        };
        // 星星背景
        Star.prototype.draw = function() {
          var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
            y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
            twinkle = random(10);

          if (twinkle === 1 && this.alpha > 0) {
            this.alpha -= 0.05;
          } else if (twinkle === 2 && this.alpha < 1) {
            this.alpha += 0.05;
          }

          ctx.globalAlpha = this.alpha;
          ctx.drawImage(
            canvas2,
            x - this.radius / 2,
            y - this.radius / 2,
            this.radius,
            this.radius
          );
          this.timePassed += this.speed;
        };

        for (var i = 0; i < maxStars; i++) {
          new Star();
        }

        function animation() {
          ctx.globalCompositeOperation = "source-over";
          ctx.globalAlpha = 0.8;
          ctx.fillStyle = "hsla(" + hue + ", 64%, 6%, 1)";
          ctx.fillRect(0, 0, w, h);

          ctx.globalCompositeOperation = "lighter";
          for (var i = 1, l = stars.length; i < l; i++) {
            stars[i].draw();
          }

          window.requestAnimationFrame(animation);
        }

        animation();
      }, 1000);
    };
    ctx.$nextTick(() => {
      // star();
    });

    return {};
  }
};
</script>

<style lang="less" scoped>
.globalBox {
  width: 800px;
  margin: 0 auto;
  .item {
    line-height: 40px;
    .title {
      font-size: 18px;
      font-weight: 600;
      text-indent: -1em;
    }
    ul {
      font-size: 16px;
      padding-left: 1.25em;
      line-height: 1.4em;
      margin: 1.2em 0 -1.2em;
      padding-bottom: 1.2em;
      li {
        list-style-type: disc;
        ul {
          li {
            list-style-type: circle;
          }
        }
      }
      code,
      pre {
        font-family: "Roboto Mono", Monaco, courier, monospace;
        font-size: 0.85em;
        background-color: #f8f8f8;
        -webkit-font-smoothing: initial;
        -moz-font-smoothing: initial;
        font-family: monospace;
      }
      p {
        line-height: 1.6em;
        word-spacing: 0.05em;
        margin: 1.2em 0;
      }
      code {
        color: #d63200;
        padding: 3px 5px;
        margin: 0 2px;
        border-radius: 2px;
        white-space: nowrap;
      }
      pre {
        overflow: auto;
        word-wrap: normal;
        margin: 0;
        padding: 0.85em 1em;
        margin-bottom: 1.275em;
        border-radius: 2px;
        position: relative;
        &.codeBox {
          padding: 0;
          > code {
            display: inline;
            max-width: initial;
            padding: 0;
            margin: 0;
            overflow: initial;
            line-height: inherit;
            font-size: 0.85em;
            white-space: pre;
          }
        }
      }
    }
  }
}
</style>
