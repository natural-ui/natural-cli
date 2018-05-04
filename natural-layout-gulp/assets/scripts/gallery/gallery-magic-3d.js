"use strict";!function(){var i={};(function(){this.elem=document.getElementById("screen"),this.width=0,this.height=0,this.resize=function(){this.width=+this.elem.offsetWidth,this.height=+this.elem.offsetHeight},this.elem.onselectstart=function(){return!1},this.elem.ondragstart=function(){return!1},window.addEventListener("resize",this.resize.bind(this),!1),this.resize();var i=!(this.pointer={x:0,y:0,dx:0,dy:0,touchMode:!1,center:function(t){this.dx*=t,this.dy*=t,h=n=0}}),s=0,a=0,h=0,n=0;this.addEvent=function(t,e){for(var i=0,s=t.split(",");i<s.length;i++)this.elem.addEventListener(s[i],e.bind(this.pointer),!1)},this.addEvent("mousemove,touchmove",function(t){t.preventDefault(),this.touchMode=t.targetTouches;var e=this.touchMode?this.touchMode[0]:t;this.x=e.clientX,this.y=e.clientY,i&&(this.dx=h-(this.x-s),this.dy=n-(this.y-a))}),this.addEvent("mousedown,touchstart",function(t){t.preventDefault(),this.touchMode=t.targetTouches;var e=this.touchMode?this.touchMode[0]:t;s=this.x=e.clientX,a=this.y=e.clientY,i=!0,setTimeout(function(){!i&&Math.abs(s-this.x)<11&&Math.abs(a-this.y)<11&&this.tap&&this.tap(t)}.bind(this),200)}),this.addEvent("mouseup,touchend,touchcancel",function(t){t.preventDefault(),h=this.dx,n=this.dy,i=!1})}).apply(i);var s=i.pointer,a=void 0!==document.body.style.webkitTransform?"-webkit-transform":"transform",h={};(function(){var h=[],n={normalPI:function(){Math.abs(this.target-this.value)>Math.PI&&(this.target<this.value?this.value-=2*Math.PI:this.value+=2*Math.PI)},setTarget:function(t,e){this.speedMod=e||1,this.target=t,this.isAngle&&(this.target=this.target%(2*Math.PI),this.normalPI()),this.running&&this.oldTarget===t||(this.oldTarget=t,this.running=!0,this.prog=0,this.from=this.value,this.dist=.5*-(this.target-this.from))},ease:function(){if(this.running){var t=this.speedMod*this.steps;this.prog++<t?(this.value=this.dist*(Math.cos(Math.PI*(this.prog/t))-1)+this.from,this.isAngle&&this.normalPI()):(this.running=!1,this.value=this.target)}}};this.add=function(t,e,i,s){var a=Object.create(n);return a.target=i||0,a.value=e||0,a.steps=t,a.isAngle=s||!1,a.speedMod=1,a.setTarget(a.target),h.push(a),a},this.iterate=function(){for(var t=0,e=h.length;t<e;t++)h[t].ease()}}).apply(h);for(var n=document.getElementById("cube"),t=document.querySelectorAll(".face"),e=0,r=t.length;e<r;e++){var o=t[e];o.style[a]=o.getAttribute("data-transform")}s.tap=function(t){if(0<=t.target.className.indexOf("face")){var e=""==t.target.alt?t.target:document.getElementById(t.target.alt);d.setTarget(e)}};var d={globalRX:0,globalRY:0,z:h.add(100,0,0),rx:h.add(100,0,0,!0),ry:h.add(100,0,0,!0),targeted:null,setTarget:function(t){var e,i=((e=getComputedStyle(t,null)).transform||e.webkitTransform).split(/\s*[(),]\s*/).slice(1,-1),s=Math.asin(-i[2]),a=Math.atan2(+i[6],+i[10]);if(s&&(s-=Math.PI),a&&(a-=Math.PI),this.targeted&&(this.targeted.style.outline="rgba(0,0,0,1) solid 10px"),this.targeted!=t)this.z.setTarget(600),"4"==t.id&&(document.getElementById("7").style.visibility="hidden"),"7"==t.id&&(this.z.setTarget(-200),document.getElementById("7").style.visibility="visible"),t.style.outline="rgba(255,255,255,1) solid 10px",this.targeted=t;else{if(this.z.setTarget(0),"7"==t.id)return void d.setTarget(document.getElementById("1"));this.targeted=null}this.rx.setTarget(a),this.ry.setTarget(s)},move:function(){if(h.iterate(),s.touchMode){var t=.001*-s.dy,e=.001*s.dx;s.center(.98)}else t=.001*-(s.y-.5*i.height),e=.001*+(s.x-.5*i.width);this.globalRX+=.1*(t-this.globalRX),this.globalRY+=.1*(e-this.globalRY),n.style[a]="translateZ("+this.z.value+"px) rotateX("+(this.rx.value+this.globalRX)+"rad) rotateY("+(this.ry.value+this.globalRY)+"rad)"}};!function t(){requestAnimationFrame(t),d.move()}()}();