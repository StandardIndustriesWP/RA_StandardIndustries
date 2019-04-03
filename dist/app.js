"use strict";require("core-js/modules/es6.promise"),require("core-js/modules/es6.array.iterator"),require("swiped-events");var Spotlight=require("./modules/spotlight"),modules=[Spotlight];modules.forEach(function(e){e.init()});
"use strict";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";var _require=require("../util/constants"),MAX_WIDTH_MD=_require.MAX_WIDTH_MD,selector=".spotlight",Spotlight=function(){function e(t){_classCallCheck(this,e),this.el=t,this.items=t.querySelectorAll(".spotlight__slide"),this.wrapper=t.querySelector(".spotlight__slides-wrapper"),this.prev=t.querySelector(".spotlight__prev"),this.next=t.querySelector(".spotlight__next"),this.slideCount=this.items.length,this.activeSlide=0,this.renderWidth=window.innerWidth,this.getWrapperWidth=this.getWrapperWidth.bind(this),this.prevSlide=this.prevSlide.bind(this),this.nextSlide=this.nextSlide.bind(this),this.resize=this.resize.bind(this),this.setActiveSlide=this.setActiveSlide.bind(this),this.setWrapperWidth=this.setWrapperWidth.bind(this),window.addEventListener("resize",this.resize,!1),this.prev.addEventListener("click",this.prevSlide),this.next.addEventListener("click",this.nextSlide),this.wrapper.addEventListener("swiped-right",this.prevSlide),this.wrapper.addEventListener("swiped-left",this.nextSlide),this.setWrapperWidth(),this.setActiveSlide()}return _createClass(e,[{key:"getWrapperWidth",value:function(){return this.renderWidth<=MAX_WIDTH_MD?"calc(".concat(this.slideCount," * (100% + 16px))"):"calc(".concat(this.slideCount," * 62%")}},{key:"nextSlide",value:function(){var e=this.activeSlide+1;this.activeSlide=e<this.slideCount?e:0,this.setActiveSlide()}},{key:"prevSlide",value:function(){var e=this.activeSlide-1;this.activeSlide=e>=0?e:this.slideCount-1,this.setActiveSlide()}},{key:"resize",value:function(){(this.renderWidth<=MAX_WIDTH_MD&&window.innerWidth>MAX_WIDTH_MD||this.renderWidth>MAX_WIDTH_MD&&window.innerWidth<=MAX_WIDTH_MD)&&(this.renderWidth=window.innerWidth,this.setWrapperWidth(),this.setActiveSlide())}},{key:"setActiveSlide",value:function(){this.wrapper.style.transform="translateX(calc(-".concat(this.activeSlide," * (100% / ").concat(this.slideCount,")))"),this.items.forEach(function(e){e.classList.remove("spotlight__slide--active")}),this.items[this.activeSlide].classList.add("spotlight__slide--active")}},{key:"setWrapperWidth",value:function(){this.wrapper.style.width=this.getWrapperWidth()}}],[{key:"init",value:function(){document.querySelectorAll(selector).forEach(function(t){new e(t)})}}]),e}();module.exports=Spotlight;
"use strict";var MAX_WIDTH_LG=1440,MAX_WIDTH_MD=1024,MAX_WIDTH_SM=767;module.exports={MAX_WIDTH_LG:MAX_WIDTH_LG,MAX_WIDTH_MD:MAX_WIDTH_MD,MAX_WIDTH_SM:MAX_WIDTH_SM};
//# sourceMappingURL=app.js.map
