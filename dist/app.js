"use strict";require("core-js/modules/es6.promise"),require("core-js/modules/es6.array.iterator"),require("swiped-events");var Nav=require("./components/nav"),Press=require("./modules/press"),Spotlight=require("./modules/spotlight"),TeamList=require("./modules/team-list"),modules=[Nav,Press,Spotlight,TeamList];modules.forEach(function(e){e.init()});
"use strict";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";var selector=".modal";function getFocusableChildren(e){return e.querySelectorAll("a:not([disabled]), button:not([disabled]), input:not([disabled]), select")}var Modal=function(){function e(t){var s=this;_classCallCheck(this,e),this.el=t,this.inner=t.querySelector(".modal__inner"),this.openTrigger=t.querySelector(".modal__open"),this.closeTrigger=t.querySelector(".modal__close"),this.focusStart=t.querySelector(".modal__focus-start"),this.focusEnd=t.querySelector(".modal__focus-end"),this.open=!1,this.closeModal=this.closeModal.bind(this),this.handleReverseFocus=this.handleReverseFocus.bind(this),this.toggleModal=this.toggleModal.bind(this),this.restartFocus=this.restartFocus.bind(this),window.addEventListener("keyup",function(e){27===e.keyCode&&s.closeModal()}),this.openTrigger.addEventListener("click",this.toggleModal),this.closeTrigger.addEventListener("click",this.toggleModal),this.focusStart.addEventListener("focus",this.handleReverseFocus),this.focusEnd.addEventListener("focus",this.restartFocus)}return _createClass(e,[{key:"closeModal",value:function(){open&&(this.open=!1,this.inner.classList.remove("modal__inner--open"),document.body.classList.remove("modal--open"),this.openTrigger.focus())}},{key:"handleReverseFocus",value:function(e){var t=getFocusableChildren(this.inner);e.relatedTarget===t[0]&&t[t.length-1].focus()}},{key:"toggleModal",value:function(){this.open=!this.open,this.inner.classList.toggle("modal__inner--open"),document.body.classList.toggle("modal--open"),this.open?this.closeTrigger.focus():this.openTrigger.focus()}},{key:"restartFocus",value:function(){var e=getFocusableChildren(this.inner)[0];e&&e.focus()}}],[{key:"init",value:function(){document.querySelectorAll(selector).forEach(function(t){new e(t)})}}]),e}();module.exports=Modal;
"use strict";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/getPrototypeOf";import _assertThisInitialized from"@babel/runtime/helpers/assertThisInitialized";import _inherits from"@babel/runtime/helpers/inherits";var Modal=require("./modal"),_require=require("../util/constants"),MAX_WIDTH_MD=_require.MAX_WIDTH_MD,selector=".global-nav",Nav=function(e){function r(e){var t;return _classCallCheck(this,r),(t=_possibleConstructorReturn(this,_getPrototypeOf(r).call(this,e))).el=e,t.triggers=e.querySelectorAll(".menu__trigger"),t.panels=e.querySelectorAll(".sub-menu"),t.renderWidth=window.innerWidth,t.closePanel=t.closePanel.bind(_assertThisInitialized(t)),t.getPanelFromTrigger=t.getPanelFromTrigger.bind(_assertThisInitialized(t)),t.getTriggerFromPanel=t.getTriggerFromPanel.bind(_assertThisInitialized(t)),t.resize=t.resize.bind(_assertThisInitialized(t)),t.togglePanel=t.togglePanel.bind(_assertThisInitialized(t)),window.addEventListener("resize",t.resize,!1),t.triggers.forEach(function(e){e.addEventListener("click",function(){return t.togglePanel(e)})}),t}return _inherits(r,Modal),_createClass(r,[{key:"closePanel",value:function(e){var r=this.getPanelFromTrigger(e);e.setAttribute("aria-expanded","false"),e.classList.remove("menu__trigger--expanded"),r.classList.remove("sub-menu--expanded")}},{key:"getPanelFromTrigger",value:function(e){var r=e.getAttribute("aria-controls");return this.el.querySelector("#".concat(r))}},{key:"getTriggerFromPanel",value:function(e){var r=e.getAttribute("aria-labelledby");return this.el.querySelector("#".concat(r))}},{key:"resize",value:function(){var e=this;(this.renderWidth<=MAX_WIDTH_MD&&window.innerWidth>MAX_WIDTH_MD||this.renderWidth>MAX_WIDTH_MD&&window.innerWidth<=MAX_WIDTH_MD)&&(console.log(window.innerWidth),this.renderWidth=window.innerWidth,this.triggers.forEach(function(r){e.closePanel(r)}),this.closeModal())}},{key:"togglePanel",value:function(e){var r=this,t=this.getPanelFromTrigger(e),i=e.getAttribute("aria-expanded");e.setAttribute("aria-expanded","false"===i?"true":"false"),e.classList.toggle(".menu__trigger--expanded"),t.classList.toggle("sub-menu--expanded"),this.triggers.forEach(function(t){t!==e&&r.closePanel(t)})}}],[{key:"init",value:function(){document.querySelectorAll(selector).forEach(function(e){new r(e)})}}]),r}();module.exports=Nav;
"use strict";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";var selector=".press",Press=function(){function e(t){var i=this;_classCallCheck(this,e),this.el=t,this.items=t.querySelectorAll(".press__slide"),this.wrapper=t.querySelector(".press__slides"),this.navItems=t.querySelectorAll(".press__nav-item"),this.slideCount=this.items.length,this.activeSlide=0,this.prevSlide=this.prevSlide.bind(this),this.nextSlide=this.nextSlide.bind(this),this.setActiveSlide=this.setActiveSlide.bind(this),this.wrapper.addEventListener("swiped-right",this.prevSlide),this.wrapper.addEventListener("swiped-left",this.nextSlide),this.navItems.forEach(function(e,t){e.querySelector(".press__nav-btn").addEventListener("click",function(){i.activeSlide=t,i.setActiveSlide()})}),this.setActiveSlide()}return _createClass(e,[{key:"nextSlide",value:function(){var e=this.activeSlide+1;this.activeSlide=e<this.slideCount?e:0,this.setActiveSlide()}},{key:"prevSlide",value:function(){var e=this.activeSlide-1;this.activeSlide=e>=0?e:this.slideCount-1,this.setActiveSlide()}},{key:"setActiveSlide",value:function(){this.items.forEach(function(e){var t=e.querySelector(".press__link");t&&(t.tabIndex=-1),e.classList.remove("press__slide--active")}),this.navItems.forEach(function(e){e.classList.remove("press__nav-item--active")}),this.items[this.activeSlide].querySelector(".press__link").tabIndex=0,this.items[this.activeSlide].classList.add("press__slide--active"),this.navItems[this.activeSlide].classList.add("press__nav-item--active")}}],[{key:"init",value:function(){document.querySelectorAll(selector).forEach(function(t){new e(t)})}}]),e}();module.exports=Press;
"use strict";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";var _require=require("../util/constants"),MAX_WIDTH_MD=_require.MAX_WIDTH_MD,selector=".spotlight",Spotlight=function(){function e(t){_classCallCheck(this,e),this.el=t,this.items=t.querySelectorAll(".spotlight__slide"),this.wrapper=t.querySelector(".spotlight__slides-wrapper"),this.prev=t.querySelector(".spotlight__prev"),this.next=t.querySelector(".spotlight__next"),this.slideCount=this.items.length,this.activeSlide=0,this.renderWidth=window.innerWidth,this.getWrapperWidth=this.getWrapperWidth.bind(this),this.prevSlide=this.prevSlide.bind(this),this.nextSlide=this.nextSlide.bind(this),this.resize=this.resize.bind(this),this.setActiveSlide=this.setActiveSlide.bind(this),this.setWrapperWidth=this.setWrapperWidth.bind(this),window.addEventListener("resize",this.resize,!1),this.prev.addEventListener("click",this.prevSlide),this.next.addEventListener("click",this.nextSlide),this.wrapper.addEventListener("swiped-right",this.prevSlide),this.wrapper.addEventListener("swiped-left",this.nextSlide),this.setWrapperWidth(),this.setActiveSlide()}return _createClass(e,[{key:"getWrapperWidth",value:function(){return this.renderWidth<=MAX_WIDTH_MD?"calc(".concat(this.slideCount," * (100% + 16px))"):"calc(".concat(this.slideCount," * 62%")}},{key:"nextSlide",value:function(){var e=this.activeSlide+1;this.activeSlide=e<this.slideCount?e:0,this.setActiveSlide()}},{key:"prevSlide",value:function(){var e=this.activeSlide-1;this.activeSlide=e>=0?e:this.slideCount-1,this.setActiveSlide()}},{key:"resize",value:function(){(this.renderWidth<=MAX_WIDTH_MD&&window.innerWidth>MAX_WIDTH_MD||this.renderWidth>MAX_WIDTH_MD&&window.innerWidth<=MAX_WIDTH_MD)&&(this.renderWidth=window.innerWidth,this.setWrapperWidth(),this.setActiveSlide())}},{key:"setActiveSlide",value:function(){this.wrapper.style.transform="translateX(calc(-".concat(this.activeSlide," * (100% / ").concat(this.slideCount,")))"),this.items.forEach(function(e){var t=e.querySelector(".spotlight__slide-link");t&&(t.tabIndex=-1),e.classList.remove("spotlight__slide--active")});var e=this.items[this.activeSlide].querySelector(".spotlight__slide-link");e&&(e.tabIndex=0),this.items[this.activeSlide].classList.add("spotlight__slide--active")}},{key:"setWrapperWidth",value:function(){this.wrapper.style.width=this.getWrapperWidth()}}],[{key:"init",value:function(){document.querySelectorAll(selector).forEach(function(t){new e(t)})}}]),e}();module.exports=Spotlight;
"use strict";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";var selector=".team-list",TeamList=function(){function e(t){var r=this;_classCallCheck(this,e),this.el=t,this.triggers=t.querySelectorAll(".team-list__learn-more"),this.toggleRegion=this.toggleRegion.bind(this),this.triggers.forEach(function(e){e.addEventListener("click",function(){return r.toggleRegion(e)})})}return _createClass(e,[{key:"toggleRegion",value:function(e){var t=e.getAttribute("aria-controls"),r=this.el.querySelector("#".concat(t)),l=e.getAttribute("aria-expanded");e.setAttribute("aria-expanded","false"===l?"true":"false"),r.classList.toggle("team-list__body--expanded"),e.textContent="false"===l?"Show less":"Learn more"}}],[{key:"init",value:function(){document.querySelectorAll(selector).forEach(function(t){new e(t)})}}]),e}();module.exports=TeamList;
"use strict";var MAX_WIDTH_LG=1440,MAX_WIDTH_MD=1024,MAX_WIDTH_SM=767;module.exports={MAX_WIDTH_LG:MAX_WIDTH_LG,MAX_WIDTH_MD:MAX_WIDTH_MD,MAX_WIDTH_SM:MAX_WIDTH_SM};
//# sourceMappingURL=app.js.map
