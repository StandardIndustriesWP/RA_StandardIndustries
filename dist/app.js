"use strict";require("core-js/modules/es6.promise"),require("core-js/modules/es6.array.iterator");var Spotlight=require("./modules/spotlight"),modules=[Spotlight];modules.forEach(function(e){e.init()});


"use strict";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";var selector=".spotlight",Spotlight=function(){function e(t){_classCallCheck(this,e),this.el=t,this.items=t.querySelectorAll(".spotlight__slide"),this.slideCount=this.items.length,this.activeSlide=0}return _createClass(e,null,[{key:"init",value:function(){document.querySelectorAll(selector).forEach(function(t){new e(t)})}}]),e}();module.exports=Spotlight;


//# sourceMappingURL=app.js.map
