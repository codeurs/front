(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{265:function(e,t,a){},286:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return o});a(157),a(100),a(93),a(94),a(246),a(265);var n=a(287),r=a(267),i=a(1),s=a(250);function c(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,function(e,t){for(var a=Object.getOwnPropertyNames(t),n=0;n<a.length;n++){var r=a[n],i=Object.getOwnPropertyDescriptor(t,r);i&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}}(e,t)}var o=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).snap="pages",t.width=1,t.slider=new n.a,t.carousel=new r.a,t}return c(t,e),t.prototype.render=function(){var e=this;return Object(i.a)("div",[Object(i.a)("h1","@codeurs/front"),Object(i.a)("input[type=range]",{value:this.width,oninput:function(t){return e.width=parseFloat(t.target.value)},min:0,max:1,step:.01}),Object(i.a)("button",{onclick:function(){return e.snap="pages"==e.snap?"elements":"pages"}},"Snap to "+("pages"==this.snap?"elements":"pages")),Object(i.a)(".sliderpage",Object(i.a)(s.a,Object.assign({},this.carousel,{snapTo:this.snap}),[1,2,3,4,5,6,7].map(function(t,a){return Object(i.a)(".sliderpage-slide",{className:e.carousel.isActive(a)&&"is-active",style:{"min-width":100*e.width+"%"}},[t,Object(i.a)("a.sliderpage-slide-link",{onclick:function(){e.carousel.goNext()}},"next >>"),Object(i.a)("a.sliderpage-slide-link",{href:"https://codeurs.be",target:"_blank"},"external")])})),Object(i.a)(s.a,[1,2,3,4,5,6,7].map(function(t,a){return Object(i.a)(".sliderpage-slide",{className:"is-active",style:{"min-width":"33.33333%"}},[t,Object(i.a)("a.sliderpage-slide-link",{onclick:function(){e.carousel.goNext()}},"next >>"),Object(i.a)("a.sliderpage-slide-link",{href:"https://codeurs.be",target:"_blank"},"external")])})))])},t}(a(2).a)}}]);