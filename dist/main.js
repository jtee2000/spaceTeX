!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=4)}([function(t,e){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){(function(t){var s=void 0!==t&&t||"undefined"!=typeof self&&self||window,n=Function.prototype.apply;function r(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new r(n.call(setTimeout,s,arguments),clearTimeout)},e.setInterval=function(){return new r(n.call(setInterval,s,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(s,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},i(2),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,i(0))},function(t,e,i){(function(t,e){!function(t,i){"use strict";if(!t.setImmediate){var s,n,r,a,o,h=1,l={},d=!1,c=t.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(t);m=m&&m.setTimeout?m:t,"[object process]"==={}.toString.call(t.process)?s=function(t){e.nextTick(function(){p(t)})}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,i=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=i,e}}()?t.MessageChannel?((r=new MessageChannel).port1.onmessage=function(t){p(t.data)},s=function(t){r.port2.postMessage(t)}):c&&"onreadystatechange"in c.createElement("script")?(n=c.documentElement,s=function(t){var e=c.createElement("script");e.onreadystatechange=function(){p(t),e.onreadystatechange=null,n.removeChild(e),e=null},n.appendChild(e)}):s=function(t){setTimeout(p,0,t)}:(a="setImmediate$"+Math.random()+"$",o=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(a)&&p(+e.data.slice(a.length))},t.addEventListener?t.addEventListener("message",o,!1):t.attachEvent("onmessage",o),s=function(e){t.postMessage(a+e,"*")}),m.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),i=0;i<e.length;i++)e[i]=arguments[i+1];var n={callback:t,args:e};return l[h]=n,s(h),h++},m.clearImmediate=u}function u(t){delete l[t]}function p(t){if(d)setTimeout(p,0,t);else{var e=l[t];if(e){d=!0;try{!function(t){var e=t.callback,s=t.args;switch(s.length){case 0:e();break;case 1:e(s[0]);break;case 2:e(s[0],s[1]);break;case 3:e(s[0],s[1],s[2]);break;default:e.apply(i,s)}}(e)}finally{u(t),d=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,i(0),i(3))},function(t,e){var i,s,n=t.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function o(t){if(i===setTimeout)return setTimeout(t,0);if((i===r||!i)&&setTimeout)return i=setTimeout,setTimeout(t,0);try{return i(t,0)}catch(e){try{return i.call(null,t,0)}catch(e){return i.call(this,t,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:r}catch(t){i=r}try{s="function"==typeof clearTimeout?clearTimeout:a}catch(t){s=a}}();var h,l=[],d=!1,c=-1;function m(){d&&h&&(d=!1,h.length?l=h.concat(l):c=-1,l.length&&u())}function u(){if(!d){var t=o(m);d=!0;for(var e=l.length;e;){for(h=l,l=[];++c<e;)h&&h[c].run();c=-1,e=l.length}h=null,d=!1,function(t){if(s===clearTimeout)return clearTimeout(t);if((s===a||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(t);try{s(t)}catch(e){try{return s.call(null,t)}catch(e){return s.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function f(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];l.push(new p(t,e)),1!==l.length||d||o(u)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=f,n.addListener=f,n.once=f,n.off=f,n.removeListener=f,n.removeAllListeners=f,n.emit=f,n.prependListener=f,n.prependOnceListener=f,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},function(t,e,i){"use strict";i.r(e);class s{constructor(){this.makeLayout()}makeLayout(){const t=document.getElementById("splash");t.width=1600,t.height=800;var e=t.getContext("2d");e.beginPath(),e.arc(150,75,2,0,2*Math.PI),e.fillStyle="red",e.closePath(),e.fill()}}const n=["\\arctan","\\angle","\\approx","\\arccos","\\arcsin","\\aleph","\\amalg","\\bicap","\\bigcirc","\\bigcup","\\bigdot","\\bigoplus","\\bigotimes","\\bigtriangledown","\\bigtriangleup","\\bigscup","\\biguplus","\\bigvee","\\bigwedge","\\bot","\\cap","\\chi","\\circ","\\cong","\\clubsuit","\\epsilon","\\equiv","\\eta","\\exists","\\fbox{hello}","\\forall","\\frown","\\gamma","\\ge","\\geq","\\gets","\\gg","\\iff","\\Im","\\imath","\\in","\\i","\\heartsuit","\\iota","\\int","\\leq","\\lfloor","\\lim","\\ll","\\ln","\\lnot","\\log","\\longleftarrow","\\lor","\\lq","\\lbrace \\rbrace","\\kappa","\\ker","\\leftharpoondown","\\leftharpoonup","\\models","\\mid","\\min","\\nearrow","\\neq","\\nabla","\\mp","\\not","\\nu","\\nwarrow","\\o","\\oint","\\oe","\\odot","\\oslash","\\otimes","\\perp","\\phi","\\pi","\\overline{text}","\\P","\\parallel","\\prime","\\Pr","\\propto","\\ps","\\psi","\\Re","\\S","\\searrow","\\sec x","\\rfloor","\\rho","\\rightarrow","\\sf","\\sharp","\\sim","\\simeq","\\sin x","\\sinh","\\smallint","\\smile","\\spadesuit","\\sqcap","\\star","\\surd","\\swarrow","\\tanh","\\tau","\\tan x","\\theta","\\subset","\\subseteq","\\succeq","\\supset","\\sup","\\varphi","\\varrho","\\varsigma","\\vdash","\\vdots","\\vec c","\\wedge","\\wp","\\wr","\\xi","\\triangle","\\triangleleft","\\triangleright","\\v","\\varepsilon","\\bowtie","\\spadesuit","\\Diamond","\\heartsuit"];var r=0;class a{constructor(t){r++,this.drawAsteroid=this.drawAsteroid.bind(this),this.animateEnemies=this.animateEnemies.bind(this),this.canvas=document.getElementById("splash"),this.canvas.width=1600,this.canvas.height=800,this.ctx=this.canvas.getContext("2d");this.random=r%3,[this.x,this.y]=[[0,0],[720,0],[1300,0]][this.random],0===this.random?(this.dx=.5,this.dy=-.417):1===this.random?(this.dx=0,this.dy=.5):(this.dx=-.33,this.dy=-.33),this.asteroid=t,this.latexArr=r<50?n:["\\frac{d}{dx}c^n=nx^{n-1}","\\frac{\\partial y}{\\partial x}","\\frac{d}{dx}c^n=nx^{n-1}","\\frac{d}{dx}e^{ax}=a\\,e^{ax}","\\frac{d}{dx}\\ln(x)=\\frac{1}{x}","\\frac{d}{dx}\\sin x=\\cos x","\\bigcup_{i=1}^{n}{X_i}","\\bigcap_{i=1}^{n}{X_i}","\\int_{0}^{\\pi} \\sin x \\ dx = 2","\\left(x-1\\right)\\left(x+3\\right)","\\lim_{a \\rightarrow b}","\\bigvee_a^b x","\\sum_a^b x"],this.latex=this.latexArr[Math.floor(Math.random()*this.latexArr.length)]}drawAsteroid(){this.ctx.drawImage(this.asteroid,40,50,170,170,this.x,this.y,150,170),this.ctx.font="30px Times New Roman",this.ctx.fillStyle="white",this.ctx.textAlign="center",this.ctx.fillText(this.latex,this.x+75,this.y+85)}animateEnemies(){this.x+=this.dx,this.y+=this.dy,(this.x>this.canvas.width-256||this.x<0)&&(this.dx=-this.dx),(this.y>this.canvas.height-256||this.y<0)&&(this.dy=-this.dy),this.drawAsteroid()}}class o{constructor(){this.input=document.getElementById("typing-input-field"),this.onChange=this.onChange.bind(this),this.enterPressed=this.enterPressed.bind(this),this.index=null,this.verify=!1}enterPressed(t,e){if(this.input.verify=!1,13===t.keyCode){for(let t=0;t<e.length;t++)e[t].latex===this.input.value&&(this.index=t,this.verify=!0);this.input.value=""}}onChange(){console.log("hello"),this.input.addEventListener("input",t=>{"13"===t.keyCode&&console.log("entered!"),console.log("hello")})}}i(1);class h{constructor(){this.canvas=document.getElementById("splash"),this.canvas.width=1600,this.canvas.height=800,this.ctx=this.canvas.getContext("2d"),this.drawSpaceship=this.drawSpaceship.bind(this),this.drawMissle=this.drawMissle.bind(this),this.animateLeft=this.animateLeft.bind(this),this.animateMiddle=this.animateMiddle.bind(this),this.animateRight=this.animateRight.bind(this),this.drawLeft=this.drawLeft.bind(this),this.drawMiddle=this.drawMiddle.bind(this),this.drawRight=this.drawRight.bind(this),this.stopAnimationLeft=this.stopAnimationLeft.bind(this),this.stopAnimationMiddle=this.stopAnimationMiddle.bind(this),this.stopAnimationRight=this.stopAnimationRight.bind(this),this.ship=new Image,this.ship.src="src/assets/blackspaceship.png",this.xl=790,this.yl=500,this.xr=790,this.yr=500,this.xm=790,this.ym=500,this.dxl=-60,this.dyl=-30,this.dxm=0,this.dym=-78,this.dyr=-50,this.dxr=60}drawSpaceship(){this.ctx.drawImage(this.ship,750,550,100,100)}drawMissle(t,e,i,s){this.ctx.beginPath(),this.ctx.moveTo(t,e),this.ctx.lineTo(t+i,e+s),this.ctx.strokeStyle="red",this.ctx.lineWidth=13,this.ctx.shadowBlur=100,this.ctx.stroke()}animateLeft(t,e){this.yl+=this.dyl,this.xl+=this.dxl,this.drawMissle(this.xl,this.yl,20,17),(this.xl<=t+128||this.yl<=e+256)&&this.stopAnimationLeft()}animateMiddle(t,e){this.ym+=this.dym,this.xm+=this.dxm,this.drawMissle(this.xm,this.ym,0,17),this.ym<=e+256&&this.stopAnimationMiddle()}animateRight(t,e){this.yr+=this.dyr,this.xr+=this.dxr,this.drawMissle(this.xr,this.yr,-25,17),(this.yr<=e+256||this.xr>=t+128)&&this.stopAnimationRight()}drawLeft(t,e){this.left=setInterval(()=>{this.animateLeft(t,e)},1e3/60)}drawMiddle(t,e){this.middle=setInterval(()=>{this.animateMiddle(t,e)},1e3/60)}drawRight(t,e){this.right=setInterval(()=>{this.animateRight(t,e)},1e3/60)}stopAnimationLeft(){window.clearInterval(this.left),this.xl=790,this.yl=550}stopAnimationMiddle(){window.clearInterval(this.middle),this.xm=790,this.ym=550}stopAnimationRight(){window.clearInterval(this.right),this.xr=790,this.yr=550}}class l{constructor(t,e){this.animateExplosion=this.animateExplosion.bind(this),this.drawExplosion=this.drawExplosion.bind(this),this.draw=this.draw.bind(this),this.img=new Image,this.img.src="src/assets/explosion.png";const i=document.getElementById("splash");i.width=1600,i.height=800,this.ctx=i.getContext("2d"),this.x=t,this.y=e,this.sx=0,this.sy=0,this.dx=256,this.dy=256,this.animateExplosion()}drawExplosion(){this.explosion=this.ctx.drawImage(this.img,this.sx,this.sy,256,256,this.x-75,this.y,256,256)}draw(){this.sx+=this.dx,2048===this.sx&&(this.sx=0,this.sy+=this.dy),1536===this.sy&&2048===this.sx&&this.stopAnimation(),this.drawExplosion(),this.test=requestAnimationFrame(this.draw)}animateExplosion(){this.draw()}stopAnimation(){this.sx=0,this.sy=0}}class d{constructor(){this.asteroid=new Image,this.asteroid.src="src/assets/asteroid.png",this.renderEnemies=this.renderEnemies.bind(this),this.populateEnemies=this.populateEnemies.bind(this),this.canvas=document.getElementById("splash"),this.canvas.width=1600,this.canvas.height=800,this.ctx=this.canvas.getContext("2d"),this.enemyArr=[new a(this.asteroid)],setInterval(this.populateEnemies,2e3),this.field=new o,this.field.input.addEventListener("keydown",t=>{this.field.enterPressed(t,this.enemyArr)}),this.score=document.getElementById("score"),this.htmlElement=document.getElementById("mathField"),this.mathField=MQ.MathField(this.htmlElement),this.spaceship=new h,document.getElementById("new-game").addEventListener("click",()=>{location.reload()})}renderEnemies(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(let t=0;t<this.enemyArr.length;t++)this.enemyArr[t].animateEnemies(),0===this.enemyArr[t].random&&(this.enemyArr[t].x>=630||this.enemyArr[t].y>=500)?this.lose():1===this.enemyArr[t].random&&this.enemyArr[t].y>=400?this.lose():2===this.enemyArr[t].random&&(this.enemyArr[t].x<=800||this.enemyArr[t].y>=550)&&this.lose();if(this.mathField.latex(this.field.input.value),!0===this.field.verify){const t=this.enemyArr[this.field.index];this.score.value=`${parseInt(this.score.value,10)+1}`,this.field.verify=!1,0===t.random?this.spaceship.drawLeft(t.x,t.y):1===t.random?this.spaceship.drawMiddle(t.x,t.y):this.spaceship.drawRight(t.x,t.y),this.enemyArr.splice(this.field.index,1),new l(t.x,t.y).animateExplosion()}this.spaceship.drawSpaceship()}lose(){new l(730,510),this.end(),document.getElementById("you-lose").style.display="inline",document.getElementById("button").style.display="inline",document.getElementById("typing-input-field").style.display="none",document.getElementById("mathField").style.display="none",document.getElementById("score").style.display="none";const t=document.getElementById("your-score");t.innerHTML=`You scored ${this.score.value}!`,t.style.display="inline",document.getElementById("new-game").style.display="inline"}populateEnemies(){this.enemyArr.push(new a(this.asteroid))}start(){this.timer=setInterval(this.renderEnemies,1e3/60),this.renderEnemies()}end(){window.clearInterval(this.timer)}}document.addEventListener("DOMContentLoaded",()=>{document.getElementById("button").addEventListener("click",()=>{const t=new d,e=(new s,document.getElementById("homescreen"));document.getElementById("canvas-wrapper").style.display="block",e.style.display="none",t.start()})})}]);