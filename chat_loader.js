var url = window.location.href;
console.log(url);
if (url.match('.html') && !url.match('player') || url.match('https://www.twitch.tv/')) {
  console.log(window.location.hostname);
   if(window.location.hostname === 'www.twitch.tv'){
    var script = document.createElement('script');
    script.onload = function() {
    };
    var number = Math.floor((Math.random() * 100000) + 1);
    script.src = "https://live.sk-knower.com/lib/beta_chat_loader.js?"+number;
    document.getElementsByTagName('head')[0].appendChild(script);
   }
}
if(typeof Ember!= "undefined"){
/* perfect-scrollbar v0.6.12 */
!function t(e,n,r){function o(l,a){if(!n[l]){if(!e[l]){var s="function"==typeof require&&require;if(!a&&s)return s(l,!0);if(i)return i(l,!0);var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[l]={exports:{}};e[l][0].call(u.exports,function(t){var n=e[l][1][t];return o(n?n:t)},u,u.exports,t,e,n,r)}return n[l].exports}for(var i="function"==typeof require&&require,l=0;l<r.length;l++)o(r[l]);return o}({1:[function(t,e,n){"use strict";function r(t){t.fn.perfectScrollbar=function(t){return this.each(function(){if("object"==typeof t||"undefined"==typeof t){var e=t;i.get(this)||o.initialize(this,e)}else{var n=t;"update"===n?o.update(this):"destroy"===n&&o.destroy(this)}})}}var o=t("../main"),i=t("../plugin/instances");if("function"==typeof define&&define.amd)define(["jquery"],r);else{var l=window.jQuery?window.jQuery:window.$;"undefined"!=typeof l&&r(l)}e.exports=r},{"../main":7,"../plugin/instances":18}],2:[function(t,e,n){"use strict";function r(t,e){var n=t.className.split(" ");n.indexOf(e)<0&&n.push(e),t.className=n.join(" ")}function o(t,e){var n=t.className.split(" "),r=n.indexOf(e);r>=0&&n.splice(r,1),t.className=n.join(" ")}n.add=function(t,e){t.classList?t.classList.add(e):r(t,e)},n.remove=function(t,e){t.classList?t.classList.remove(e):o(t,e)},n.list=function(t){return t.classList?Array.prototype.slice.apply(t.classList):t.className.split(" ")}},{}],3:[function(t,e,n){"use strict";function r(t,e){return window.getComputedStyle(t)[e]}function o(t,e,n){return"number"==typeof n&&(n=n.toString()+"px"),t.style[e]=n,t}function i(t,e){for(var n in e){var r=e[n];"number"==typeof r&&(r=r.toString()+"px"),t.style[n]=r}return t}var l={};l.e=function(t,e){var n=document.createElement(t);return n.className=e,n},l.appendTo=function(t,e){return e.appendChild(t),t},l.css=function(t,e,n){return"object"==typeof e?i(t,e):"undefined"==typeof n?r(t,e):o(t,e,n)},l.matches=function(t,e){return"undefined"!=typeof t.matches?t.matches(e):"undefined"!=typeof t.matchesSelector?t.matchesSelector(e):"undefined"!=typeof t.webkitMatchesSelector?t.webkitMatchesSelector(e):"undefined"!=typeof t.mozMatchesSelector?t.mozMatchesSelector(e):"undefined"!=typeof t.msMatchesSelector?t.msMatchesSelector(e):void 0},l.remove=function(t){"undefined"!=typeof t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)},l.queryChildren=function(t,e){return Array.prototype.filter.call(t.childNodes,function(t){return l.matches(t,e)})},e.exports=l},{}],4:[function(t,e,n){"use strict";var r=function(t){this.element=t,this.events={}};r.prototype.bind=function(t,e){"undefined"==typeof this.events[t]&&(this.events[t]=[]),this.events[t].push(e),this.element.addEventListener(t,e,!1)},r.prototype.unbind=function(t,e){var n="undefined"!=typeof e;this.events[t]=this.events[t].filter(function(r){return!(!n||r===e)||(this.element.removeEventListener(t,r,!1),!1)},this)},r.prototype.unbindAll=function(){for(var t in this.events)this.unbind(t)};var o=function(){this.eventElements=[]};o.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return"undefined"==typeof e&&(e=new r(t),this.eventElements.push(e)),e},o.prototype.bind=function(t,e,n){this.eventElement(t).bind(e,n)},o.prototype.unbind=function(t,e,n){this.eventElement(t).unbind(e,n)},o.prototype.unbindAll=function(){for(var t=0;t<this.eventElements.length;t++)this.eventElements[t].unbindAll()},o.prototype.once=function(t,e,n){var r=this.eventElement(t),o=function(t){r.unbind(e,o),n(t)};r.bind(e,o)},e.exports=o},{}],5:[function(t,e,n){"use strict";e.exports=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}()},{}],6:[function(t,e,n){"use strict";var r=t("./class"),o=t("./dom"),i=n.toInt=function(t){return parseInt(t,10)||0},l=n.clone=function(t){if(null===t)return null;if(t.constructor===Array)return t.map(l);if("object"==typeof t){var e={};for(var n in t)e[n]=l(t[n]);return e}return t};n.extend=function(t,e){var n=l(t);for(var r in e)n[r]=l(e[r]);return n},n.isEditable=function(t){return o.matches(t,"input,[contenteditable]")||o.matches(t,"select,[contenteditable]")||o.matches(t,"textarea,[contenteditable]")||o.matches(t,"button,[contenteditable]")},n.removePsClasses=function(t){for(var e=r.list(t),n=0;n<e.length;n++){var o=e[n];0===o.indexOf("ps-")&&r.remove(t,o)}},n.outerWidth=function(t){return i(o.css(t,"width"))+i(o.css(t,"paddingLeft"))+i(o.css(t,"paddingRight"))+i(o.css(t,"borderLeftWidth"))+i(o.css(t,"borderRightWidth"))},n.startScrolling=function(t,e){r.add(t,"ps-in-scrolling"),"undefined"!=typeof e?r.add(t,"ps-"+e):(r.add(t,"ps-x"),r.add(t,"ps-y"))},n.stopScrolling=function(t,e){r.remove(t,"ps-in-scrolling"),"undefined"!=typeof e?r.remove(t,"ps-"+e):(r.remove(t,"ps-x"),r.remove(t,"ps-y"))},n.env={isWebKit:"WebkitAppearance"in document.documentElement.style,supportsTouch:"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,supportsIePointer:null!==window.navigator.msMaxTouchPoints}},{"./class":2,"./dom":3}],7:[function(t,e,n){"use strict";var r=t("./plugin/destroy"),o=t("./plugin/initialize"),i=t("./plugin/update");e.exports={initialize:o,update:i,destroy:r}},{"./plugin/destroy":9,"./plugin/initialize":17,"./plugin/update":21}],8:[function(t,e,n){"use strict";e.exports={handlers:["click-rail","drag-scrollbar","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollXMarginOffset:0,scrollYMarginOffset:0,stopPropagationOnClick:!0,suppressScrollX:!1,suppressScrollY:!1,swipePropagation:!0,useBothWheelAxes:!1,wheelPropagation:!1,wheelSpeed:1,theme:"default"}},{}],9:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/dom"),i=t("./instances");e.exports=function(t){var e=i.get(t);e&&(e.event.unbindAll(),o.remove(e.scrollbarX),o.remove(e.scrollbarY),o.remove(e.scrollbarXRail),o.remove(e.scrollbarYRail),r.removePsClasses(t),i.remove(t))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18}],10:[function(t,e,n){"use strict";function r(t,e){function n(t){return t.getBoundingClientRect()}var r=function(t){t.stopPropagation()};e.settings.stopPropagationOnClick&&e.event.bind(e.scrollbarY,"click",r),e.event.bind(e.scrollbarYRail,"click",function(r){var i=o.toInt(e.scrollbarYHeight/2),s=e.railYRatio*(r.pageY-window.pageYOffset-n(e.scrollbarYRail).top-i),c=e.railYRatio*(e.railYHeight-e.scrollbarYHeight),u=s/c;u<0?u=0:u>1&&(u=1),a(t,"top",(e.contentHeight-e.containerHeight)*u),l(t),r.stopPropagation()}),e.settings.stopPropagationOnClick&&e.event.bind(e.scrollbarX,"click",r),e.event.bind(e.scrollbarXRail,"click",function(r){var i=o.toInt(e.scrollbarXWidth/2),s=e.railXRatio*(r.pageX-window.pageXOffset-n(e.scrollbarXRail).left-i),c=e.railXRatio*(e.railXWidth-e.scrollbarXWidth),u=s/c;u<0?u=0:u>1&&(u=1),a(t,"left",(e.contentWidth-e.containerWidth)*u-e.negativeScrollAdjustment),l(t),r.stopPropagation()})}var o=t("../../lib/helper"),i=t("../instances"),l=t("../update-geometry"),a=t("../update-scroll");e.exports=function(t){var e=i.get(t);r(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],11:[function(t,e,n){"use strict";function r(t,e){function n(n){var o=r+n*e.railXRatio,l=Math.max(0,e.scrollbarXRail.getBoundingClientRect().left)+e.railXRatio*(e.railXWidth-e.scrollbarXWidth);o<0?e.scrollbarXLeft=0:o>l?e.scrollbarXLeft=l:e.scrollbarXLeft=o;var a=i.toInt(e.scrollbarXLeft*(e.contentWidth-e.containerWidth)/(e.containerWidth-e.railXRatio*e.scrollbarXWidth))-e.negativeScrollAdjustment;c(t,"left",a)}var r=null,o=null,a=function(e){n(e.pageX-o),s(t),e.stopPropagation(),e.preventDefault()},u=function(){i.stopScrolling(t,"x"),e.event.unbind(e.ownerDocument,"mousemove",a)};e.event.bind(e.scrollbarX,"mousedown",function(n){o=n.pageX,r=i.toInt(l.css(e.scrollbarX,"left"))*e.railXRatio,i.startScrolling(t,"x"),e.event.bind(e.ownerDocument,"mousemove",a),e.event.once(e.ownerDocument,"mouseup",u),n.stopPropagation(),n.preventDefault()})}function o(t,e){function n(n){var o=r+n*e.railYRatio,l=Math.max(0,e.scrollbarYRail.getBoundingClientRect().top)+e.railYRatio*(e.railYHeight-e.scrollbarYHeight);o<0?e.scrollbarYTop=0:o>l?e.scrollbarYTop=l:e.scrollbarYTop=o;var a=i.toInt(e.scrollbarYTop*(e.contentHeight-e.containerHeight)/(e.containerHeight-e.railYRatio*e.scrollbarYHeight));c(t,"top",a)}var r=null,o=null,a=function(e){n(e.pageY-o),s(t),e.stopPropagation(),e.preventDefault()},u=function(){i.stopScrolling(t,"y"),e.event.unbind(e.ownerDocument,"mousemove",a)};e.event.bind(e.scrollbarY,"mousedown",function(n){o=n.pageY,r=i.toInt(l.css(e.scrollbarY,"top"))*e.railYRatio,i.startScrolling(t,"y"),e.event.bind(e.ownerDocument,"mousemove",a),e.event.once(e.ownerDocument,"mouseup",u),n.stopPropagation(),n.preventDefault()})}var i=t("../../lib/helper"),l=t("../../lib/dom"),a=t("../instances"),s=t("../update-geometry"),c=t("../update-scroll");e.exports=function(t){var e=a.get(t);r(t,e),o(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],12:[function(t,e,n){"use strict";function r(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&r<0)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===i&&n<0||i>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}var r=!1;e.event.bind(t,"mouseenter",function(){r=!0}),e.event.bind(t,"mouseleave",function(){r=!1});var l=!1;e.event.bind(e.ownerDocument,"keydown",function(c){if(!(c.isDefaultPrevented&&c.isDefaultPrevented()||c.defaultPrevented)){var u=i.matches(e.scrollbarX,":focus")||i.matches(e.scrollbarY,":focus");if(r||u){var d=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(d){if("IFRAME"===d.tagName)d=d.contentDocument.activeElement;else for(;d.shadowRoot;)d=d.shadowRoot.activeElement;if(o.isEditable(d))return}var p=0,f=0;switch(c.which){case 37:p=-30;break;case 38:f=30;break;case 39:p=30;break;case 40:f=-30;break;case 33:f=90;break;case 32:f=c.shiftKey?90:-90;break;case 34:f=-90;break;case 35:f=c.ctrlKey?-e.contentHeight:-e.containerHeight;break;case 36:f=c.ctrlKey?t.scrollTop:e.containerHeight;break;default:return}s(t,"top",t.scrollTop-f),s(t,"left",t.scrollLeft+p),a(t),l=n(p,f),l&&c.preventDefault()}}})}var o=t("../../lib/helper"),i=t("../../lib/dom"),l=t("../instances"),a=t("../update-geometry"),s=t("../update-scroll");e.exports=function(t){var e=l.get(t);r(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],13:[function(t,e,n){"use strict";function r(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&r<0)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===i&&n<0||i>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}function r(t){var e=t.deltaX,n=-1*t.deltaY;return"undefined"!=typeof e&&"undefined"!=typeof n||(e=-1*t.wheelDeltaX/6,n=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,n*=10),e!==e&&n!==n&&(e=0,n=t.wheelDelta),[e,n]}function o(e,n){var r=t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");if(r){if("TEXTAREA"!==r.tagName&&!window.getComputedStyle(r).overflow.match(/(scroll|auto)/))return!1;var o=r.scrollHeight-r.clientHeight;if(o>0&&!(0===r.scrollTop&&n>0||r.scrollTop===o&&n<0))return!0;var i=r.scrollLeft-r.clientWidth;if(i>0&&!(0===r.scrollLeft&&e<0||r.scrollLeft===i&&e>0))return!0}return!1}function a(a){var c=r(a),u=c[0],d=c[1];o(u,d)||(s=!1,e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(d?l(t,"top",t.scrollTop-d*e.settings.wheelSpeed):l(t,"top",t.scrollTop+u*e.settings.wheelSpeed),s=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(u?l(t,"left",t.scrollLeft+u*e.settings.wheelSpeed):l(t,"left",t.scrollLeft-d*e.settings.wheelSpeed),s=!0):(l(t,"top",t.scrollTop-d*e.settings.wheelSpeed),l(t,"left",t.scrollLeft+u*e.settings.wheelSpeed)),i(t),s=s||n(u,d),s&&(a.stopPropagation(),a.preventDefault()))}var s=!1;"undefined"!=typeof window.onwheel?e.event.bind(t,"wheel",a):"undefined"!=typeof window.onmousewheel&&e.event.bind(t,"mousewheel",a)}var o=t("../instances"),i=t("../update-geometry"),l=t("../update-scroll");e.exports=function(t){var e=o.get(t);r(t,e)}},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],14:[function(t,e,n){"use strict";function r(t,e){e.event.bind(t,"scroll",function(){i(t)})}var o=t("../instances"),i=t("../update-geometry");e.exports=function(t){var e=o.get(t);r(t,e)}},{"../instances":18,"../update-geometry":19}],15:[function(t,e,n){"use strict";function r(t,e){function n(){var t=window.getSelection?window.getSelection():document.getSelection?document.getSelection():"";return 0===t.toString().length?null:t.getRangeAt(0).commonAncestorContainer}function r(){c||(c=setInterval(function(){return i.get(t)?(a(t,"top",t.scrollTop+u.top),a(t,"left",t.scrollLeft+u.left),void l(t)):void clearInterval(c)},50))}function s(){c&&(clearInterval(c),c=null),o.stopScrolling(t)}var c=null,u={top:0,left:0},d=!1;e.event.bind(e.ownerDocument,"selectionchange",function(){t.contains(n())?d=!0:(d=!1,s())}),e.event.bind(window,"mouseup",function(){d&&(d=!1,s())}),e.event.bind(window,"mousemove",function(e){if(d){var n={x:e.pageX,y:e.pageY},i={left:t.offsetLeft,right:t.offsetLeft+t.offsetWidth,top:t.offsetTop,bottom:t.offsetTop+t.offsetHeight};n.x<i.left+3?(u.left=-5,o.startScrolling(t,"x")):n.x>i.right-3?(u.left=5,o.startScrolling(t,"x")):u.left=0,n.y<i.top+3?(i.top+3-n.y<5?u.top=-5:u.top=-20,o.startScrolling(t,"y")):n.y>i.bottom-3?(n.y-i.bottom+3<5?u.top=5:u.top=20,o.startScrolling(t,"y")):u.top=0,0===u.top&&0===u.left?s():r()}})}var o=t("../../lib/helper"),i=t("../instances"),l=t("../update-geometry"),a=t("../update-scroll");e.exports=function(t){var e=i.get(t);r(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],16:[function(t,e,n){"use strict";function r(t,e,n,r){function o(n,r){var o=t.scrollTop,i=t.scrollLeft,l=Math.abs(n),a=Math.abs(r);if(a>l){if(r<0&&o===e.contentHeight-e.containerHeight||r>0&&0===o)return!e.settings.swipePropagation}else if(l>a&&(n<0&&i===e.contentWidth-e.containerWidth||n>0&&0===i))return!e.settings.swipePropagation;return!0}function s(e,n){a(t,"top",t.scrollTop-n),a(t,"left",t.scrollLeft-e),l(t)}function c(){Y=!0}function u(){Y=!1}function d(t){return t.targetTouches?t.targetTouches[0]:t}function p(t){return!(!t.targetTouches||1!==t.targetTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE)}function f(t){if(p(t)){w=!0;var e=d(t);v.pageX=e.pageX,v.pageY=e.pageY,g=(new Date).getTime(),null!==y&&clearInterval(y),t.stopPropagation()}}function h(t){if(!w&&e.settings.swipePropagation&&f(t),!Y&&w&&p(t)){var n=d(t),r={pageX:n.pageX,pageY:n.pageY},i=r.pageX-v.pageX,l=r.pageY-v.pageY;s(i,l),v=r;var a=(new Date).getTime(),c=a-g;c>0&&(m.x=i/c,m.y=l/c,g=a),o(i,l)&&(t.stopPropagation(),t.preventDefault())}}function b(){!Y&&w&&(w=!1,clearInterval(y),y=setInterval(function(){return i.get(t)?Math.abs(m.x)<.01&&Math.abs(m.y)<.01?void clearInterval(y):(s(30*m.x,30*m.y),m.x*=.8,void(m.y*=.8)):void clearInterval(y)},10))}var v={},g=0,m={},y=null,Y=!1,w=!1;n&&(e.event.bind(window,"touchstart",c),e.event.bind(window,"touchend",u),e.event.bind(t,"touchstart",f),e.event.bind(t,"touchmove",h),e.event.bind(t,"touchend",b)),r&&(window.PointerEvent?(e.event.bind(window,"pointerdown",c),e.event.bind(window,"pointerup",u),e.event.bind(t,"pointerdown",f),e.event.bind(t,"pointermove",h),e.event.bind(t,"pointerup",b)):window.MSPointerEvent&&(e.event.bind(window,"MSPointerDown",c),e.event.bind(window,"MSPointerUp",u),e.event.bind(t,"MSPointerDown",f),e.event.bind(t,"MSPointerMove",h),e.event.bind(t,"MSPointerUp",b)))}var o=t("../../lib/helper"),i=t("../instances"),l=t("../update-geometry"),a=t("../update-scroll");e.exports=function(t){if(o.env.supportsTouch||o.env.supportsIePointer){var e=i.get(t);r(t,e,o.env.supportsTouch,o.env.supportsIePointer)}}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],17:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/class"),i=t("./instances"),l=t("./update-geometry"),a={"click-rail":t("./handler/click-rail"),"drag-scrollbar":t("./handler/drag-scrollbar"),keyboard:t("./handler/keyboard"),wheel:t("./handler/mouse-wheel"),touch:t("./handler/touch"),selection:t("./handler/selection")},s=t("./handler/native-scroll");e.exports=function(t,e){e="object"==typeof e?e:{},o.add(t,"ps-container");var n=i.add(t);n.settings=r.extend(n.settings,e),o.add(t,"ps-theme-"+n.settings.theme),n.settings.handlers.forEach(function(e){a[e](t)}),s(t),l(t)}},{"../lib/class":2,"../lib/helper":6,"./handler/click-rail":10,"./handler/drag-scrollbar":11,"./handler/keyboard":12,"./handler/mouse-wheel":13,"./handler/native-scroll":14,"./handler/selection":15,"./handler/touch":16,"./instances":18,"./update-geometry":19}],18:[function(t,e,n){"use strict";function r(t){function e(){s.add(t,"ps-focus")}function n(){s.remove(t,"ps-focus")}var r=this;r.settings=a.clone(c),r.containerWidth=null,r.containerHeight=null,r.contentWidth=null,r.contentHeight=null,r.isRtl="rtl"===u.css(t,"direction"),r.isNegativeScroll=function(){var e=t.scrollLeft,n=null;return t.scrollLeft=-1,n=t.scrollLeft<0,t.scrollLeft=e,n}(),r.negativeScrollAdjustment=r.isNegativeScroll?t.scrollWidth-t.clientWidth:0,r.event=new d,r.ownerDocument=t.ownerDocument||document,r.scrollbarXRail=u.appendTo(u.e("div","ps-scrollbar-x-rail"),t),r.scrollbarX=u.appendTo(u.e("div","ps-scrollbar-x"),r.scrollbarXRail),r.scrollbarX.setAttribute("tabindex",0),r.event.bind(r.scrollbarX,"focus",e),r.event.bind(r.scrollbarX,"blur",n),r.scrollbarXActive=null,r.scrollbarXWidth=null,r.scrollbarXLeft=null,r.scrollbarXBottom=a.toInt(u.css(r.scrollbarXRail,"bottom")),r.isScrollbarXUsingBottom=r.scrollbarXBottom===r.scrollbarXBottom,r.scrollbarXTop=r.isScrollbarXUsingBottom?null:a.toInt(u.css(r.scrollbarXRail,"top")),r.railBorderXWidth=a.toInt(u.css(r.scrollbarXRail,"borderLeftWidth"))+a.toInt(u.css(r.scrollbarXRail,"borderRightWidth")),u.css(r.scrollbarXRail,"display","block"),r.railXMarginWidth=a.toInt(u.css(r.scrollbarXRail,"marginLeft"))+a.toInt(u.css(r.scrollbarXRail,"marginRight")),u.css(r.scrollbarXRail,"display",""),r.railXWidth=null,r.railXRatio=null,r.scrollbarYRail=u.appendTo(u.e("div","ps-scrollbar-y-rail"),t),r.scrollbarY=u.appendTo(u.e("div","ps-scrollbar-y"),r.scrollbarYRail),r.scrollbarY.setAttribute("tabindex",0),r.event.bind(r.scrollbarY,"focus",e),r.event.bind(r.scrollbarY,"blur",n),r.scrollbarYActive=null,r.scrollbarYHeight=null,r.scrollbarYTop=null,r.scrollbarYRight=a.toInt(u.css(r.scrollbarYRail,"right")),r.isScrollbarYUsingRight=r.scrollbarYRight===r.scrollbarYRight,r.scrollbarYLeft=r.isScrollbarYUsingRight?null:a.toInt(u.css(r.scrollbarYRail,"left")),r.scrollbarYOuterWidth=r.isRtl?a.outerWidth(r.scrollbarY):null,r.railBorderYWidth=a.toInt(u.css(r.scrollbarYRail,"borderTopWidth"))+a.toInt(u.css(r.scrollbarYRail,"borderBottomWidth")),u.css(r.scrollbarYRail,"display","block"),r.railYMarginHeight=a.toInt(u.css(r.scrollbarYRail,"marginTop"))+a.toInt(u.css(r.scrollbarYRail,"marginBottom")),u.css(r.scrollbarYRail,"display",""),r.railYHeight=null,r.railYRatio=null}function o(t){return t.getAttribute("data-ps-id")}function i(t,e){t.setAttribute("data-ps-id",e)}function l(t){t.removeAttribute("data-ps-id")}var a=t("../lib/helper"),s=t("../lib/class"),c=t("./default-setting"),u=t("../lib/dom"),d=t("../lib/event-manager"),p=t("../lib/guid"),f={};n.add=function(t){var e=p();return i(t,e),f[e]=new r(t),f[e]},n.remove=function(t){delete f[o(t)],l(t)},n.get=function(t){return f[o(t)]}},{"../lib/class":2,"../lib/dom":3,"../lib/event-manager":4,"../lib/guid":5,"../lib/helper":6,"./default-setting":8}],19:[function(t,e,n){"use strict";function r(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function o(t,e){var n={width:e.railXWidth};e.isRtl?n.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:n.left=t.scrollLeft,e.isScrollbarXUsingBottom?n.bottom=e.scrollbarXBottom-t.scrollTop:n.top=e.scrollbarXTop+t.scrollTop,a.css(e.scrollbarXRail,n);var r={top:t.scrollTop,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?r.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth:r.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:r.left=e.scrollbarYLeft+t.scrollLeft,a.css(e.scrollbarYRail,r),a.css(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),a.css(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}var i=t("../lib/helper"),l=t("../lib/class"),a=t("../lib/dom"),s=t("./instances"),c=t("./update-scroll");e.exports=function(t){var e=s.get(t);e.containerWidth=t.clientWidth,e.containerHeight=t.clientHeight,e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight;var n;t.contains(e.scrollbarXRail)||(n=a.queryChildren(t,".ps-scrollbar-x-rail"),n.length>0&&n.forEach(function(t){a.remove(t)}),a.appendTo(e.scrollbarXRail,t)),t.contains(e.scrollbarYRail)||(n=a.queryChildren(t,".ps-scrollbar-y-rail"),n.length>0&&n.forEach(function(t){a.remove(t)}),a.appendTo(e.scrollbarYRail,t)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=r(e,i.toInt(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=i.toInt((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=r(e,i.toInt(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=i.toInt(t.scrollTop*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),o(t,e),e.scrollbarXActive?l.add(t,"ps-active-x"):(l.remove(t,"ps-active-x"),e.scrollbarXWidth=0,e.scrollbarXLeft=0,c(t,"left",0)),e.scrollbarYActive?l.add(t,"ps-active-y"):(l.remove(t,"ps-active-y"),e.scrollbarYHeight=0,e.scrollbarYTop=0,c(t,"top",0))}},{"../lib/class":2,"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-scroll":20}],20:[function(t,e,n){"use strict";var r,o,i=t("./instances"),l=document.createEvent("Event"),a=document.createEvent("Event"),s=document.createEvent("Event"),c=document.createEvent("Event"),u=document.createEvent("Event"),d=document.createEvent("Event"),p=document.createEvent("Event"),f=document.createEvent("Event"),h=document.createEvent("Event"),b=document.createEvent("Event");l.initEvent("ps-scroll-up",!0,!0),a.initEvent("ps-scroll-down",!0,!0),s.initEvent("ps-scroll-left",!0,!0),c.initEvent("ps-scroll-right",!0,!0),u.initEvent("ps-scroll-y",!0,!0),d.initEvent("ps-scroll-x",!0,!0),p.initEvent("ps-x-reach-start",!0,!0),f.initEvent("ps-x-reach-end",!0,!0),h.initEvent("ps-y-reach-start",!0,!0),b.initEvent("ps-y-reach-end",!0,!0),e.exports=function(t,e,n){if("undefined"==typeof t)throw"You must provide an element to the update-scroll function";if("undefined"==typeof e)throw"You must provide an axis to the update-scroll function";if("undefined"==typeof n)throw"You must provide a value to the update-scroll function";"top"===e&&n<=0&&(t.scrollTop=n=0,t.dispatchEvent(h)),"left"===e&&n<=0&&(t.scrollLeft=n=0,t.dispatchEvent(p));var v=i.get(t);"top"===e&&n>=v.contentHeight-v.containerHeight&&(n=v.contentHeight-v.containerHeight,n-t.scrollTop<=1?n=t.scrollTop:t.scrollTop=n,t.dispatchEvent(b)),"left"===e&&n>=v.contentWidth-v.containerWidth&&(n=v.contentWidth-v.containerWidth,n-t.scrollLeft<=1?n=t.scrollLeft:t.scrollLeft=n,t.dispatchEvent(f)),r||(r=t.scrollTop),o||(o=t.scrollLeft),"top"===e&&n<r&&t.dispatchEvent(l),"top"===e&&n>r&&t.dispatchEvent(a),"left"===e&&n<o&&t.dispatchEvent(s),"left"===e&&n>o&&t.dispatchEvent(c),"top"===e&&(t.scrollTop=r=n,t.dispatchEvent(u)),"left"===e&&(t.scrollLeft=o=n,t.dispatchEvent(d))}},{"./instances":18}],21:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/dom"),i=t("./instances"),l=t("./update-geometry"),a=t("./update-scroll");e.exports=function(t){var e=i.get(t);e&&(e.negativeScrollAdjustment=e.isNegativeScroll?t.scrollWidth-t.clientWidth:0,o.css(e.scrollbarXRail,"display","block"),o.css(e.scrollbarYRail,"display","block"),e.railXMarginWidth=r.toInt(o.css(e.scrollbarXRail,"marginLeft"))+r.toInt(o.css(e.scrollbarXRail,"marginRight")),e.railYMarginHeight=r.toInt(o.css(e.scrollbarYRail,"marginTop"))+r.toInt(o.css(e.scrollbarYRail,"marginBottom")),o.css(e.scrollbarXRail,"display","none"),o.css(e.scrollbarYRail,"display","none"),l(t),a(t,"top",t.scrollTop),a(t,"left",t.scrollLeft),o.css(e.scrollbarXRail,"display",""),o.css(e.scrollbarYRail,"display",""))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-geometry":19,"./update-scroll":20}]},{},[1]);

function vodgif(id){document.getElementById(id).paused?document.getElementById(id).play():document.getElementById(id).pause();}
  function pastephoto() {
    var textareaid = $('textarea.chat_text_input').attr('id');
    var input = document.getElementById(textareaid);
    var mousea = input.selectionStart + 3;
    var mouseb = input.selectionStart + 7;
    if (input.value == '[s]圖片網址[e]' || input.value == '[y]影片連結[t]' || input.value == '[p]P網id[i]') {
      input.value = '';
      $(".textarea-contain").find("textarea").insertAtCaret('[s]圖片網址[e]');
      var startPos = this.selectionEnd;
      input.setSelectionRange(3, 7);
      $(".textarea-contain").find("textarea").focus();
    } else {
      $(".textarea-contain").find("textarea").insertAtCaret('[s]圖片網址[e]');
      input.setSelectionRange(mousea, mouseb);
      $(".textarea-contain").find("textarea").focus();
    }
  }

  function bannervote() {
    var skset = document.getElementById("sk_icon_set");
    skset.className = "skicon_on";
    skset.style.top = "45px";
    skset.style.right = "13px";
    skset.style.left = "inherit";
    set10();
  }

  String.prototype.cleanup = function () {
    return this.toLowerCase().replace(/[^a-zA-Z0-9_]+/g, "");
  }
  function pasteyt() {
    var textareaid = $('textarea.chat_text_input').attr('id');
    var input = document.getElementById(textareaid);
    var mousea = input.selectionStart + 3;
    var mouseb = input.selectionStart + 7;
    if (input.value == '[s]圖片網址[e]' || input.value == '[y]影片連結[t]' || input.value == '[p]P網id[i]') {
      input.value = '';
      $(".textarea-contain").find("textarea").insertAtCaret('[y]影片連結[t]');
      input.setSelectionRange(3, 7);
      $(".textarea-contain").find("textarea").focus();
    } else {
      $(".textarea-contain").find("textarea").insertAtCaret('[y]影片連結[t]');
      input.setSelectionRange(mousea, mouseb);
      $(".textarea-contain").find("textarea").focus();
    }
  }

  function pastepid() {
    var textareaid = $('textarea.chat_text_input').attr('id');
    var input = document.getElementById(textareaid);
    var mousea = input.selectionStart + 3;
    var mouseb = input.selectionStart + 7;
    if (input.value == '[s]圖片網址[e]' || input.value == '[y]影片連結[t]' || input.value == '[p]P網id[i]') {
      input.value = '';
      $(".textarea-contain").find("textarea").insertAtCaret('[p]P網id[i]');
      input.setSelectionRange(3, 7);
      $(".textarea-contain").find("textarea").focus();
    } else {
      $(".textarea-contain").find("textarea").insertAtCaret('[p]P網id[i]');
      input.setSelectionRange(mousea, mouseb);
      $(".textarea-contain").find("textarea").focus();
    }
  }

  function pasteemoicon(axx) {
    if ($(".textarea-contain").find("textarea").val() == '') {
      $(".textarea-contain").find("textarea").insertAtCaret(' ' + axx + '');
      $(".textarea-contain").find("textarea").focus();

    } else {
      $(".textarea-contain").find("textarea").insertAtCaret(' ' + axx + '');
      $(".textarea-contain").find("textarea").focus();
      window.App.__container__.lookup("controller:chat").get("currentRoom").set("messageToSend", $(".textarea-contain").find("textarea").val());
    }
  }

  function setsendvote() {
    var textareaid = $('textarea.chat_text_input').attr('id');
    var input = document.getElementById(textareaid);
    var votitle = document.getElementById("voteui_title").value;
    var votime = document.getElementById("voteui_time").value;
    var voa = 'a=' + document.getElementById("voteui_a").value;
    var vob = 'b=' + document.getElementById("voteui_b").value;
    var voc = 'c=' + document.getElementById("voteui_c").value;
    var vod = 'd=' + document.getElementById("voteui_d").value;
    $(".textarea-contain").find("textarea").insertAtCaret('[v]t=' + votime + 'n=' + votitle + '' + voa + '' + vob + '' + voc + '' + vod + '[e]');
    $(".textarea-contain").find("textarea").focus();
  }

  function closevote() {
    $(".textarea-contain").find("textarea").insertAtCaret('[v]stop');
    $(".textarea-contain").find("textarea").focus();
  }

  function clickvote(el) {
    var itema = $(el).attr("data-id");
    var textareaid = $('textarea.chat_text_input').attr('id');
    var input = document.getElementById(textareaid);
    $(".textarea-contain").find("textarea").insertAtCaret('sk_vote_' + itema + ' ');
    $(".textarea-contain").find("textarea").focus();
  }

  function clickacggame(el) {
    var itema = $(el).attr("data-id");
    var textareaid = $('textarea.chat_text_input').attr('id');
    var input = document.getElementById(textareaid);
    $(".textarea-contain").find("textarea").insertAtCaret('skgame_' + itema + 'mark');
    $(".textarea-contain").find("textarea").focus();
    $("#acgskgame").css("display", "none");
  }

  function closees() {
    document.getElementById("sk_icon_set").className = "skicon_off";
  }

  function voteclosees() {
    $("#sk_skill").css("display", "none");
  }

  function newsclosees() {
    $("#sk_news").css("display", "none");
	setnewsread();
  }
  function setnewsread(){
    setCookie("skupdate9", "get", 6);
    $('#sk_set11').html("<iframe src='https://live.sk-knower.com/installplugin.html' scrolling='no' frameborder='0' style='width: 0%; height: 0%;' allowtransparency='true' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true'></iframe>");
	}
  function acgskgameclosees() {
    $("#acgskgame").css("display", "none");
  }

  function eng() {
    $("#lan_word").text("Set font-size(px)");
    $("#lan_bgc").html("Dark mode　　　　　　　　<button type='button' onclick='setdark()' class='sk_icon_bottom on' id='cdarkon'>ON</button><button type='button' onclick='setnodark()' class='sk_icon_bottom off' id='cdarkoff'>OFF</button></div>");
    $("#lan_name").html("Border on user name <button type='button' onclick='dark2words()' class='sk_icon_bottom on' id='darkwordson'>ON</button><button type='button' onclick='setnodark2words()' class='sk_icon_bottom off' id='darkwordsoff'>OFF</button></div>");
    $("#lan_sklive").text("Watch on SK-Live!");
    $("#lan_ctrl").html("[ALT+Click]Get@User<button type='button' onclick='cctrlon()' class='sk_icon_bottom on' id='cctrlon'>ON</button><button type='button' onclick='cctrloff()' class='sk_icon_bottom off' id='cctrloff'>OFF</button></div>");
    $("#lan_bgcolor").html("Set background color<input id='favcolor' type='color' name='favcolor' value='#f2f2f2'><button type='button' onclick='setbgc()' class='sk_icon_bottom' style='margin-top: 0px;margin-left: 36PX;background: #34AE0A;'>SAVE</button>");
    $("#lan_wdcolor").html("Set word color　　　<input id='favwordcolor' type='color' name='favwordcolor' value='#ffffff'><button type='button' onclick='setwordcolor()' class='sk_icon_bottom' style='margin-top: 0px;margin-left: 36PX;background: #34AE0A;'>SAVE</button>");
    setCookie("sklan", "eng", 365);
  }

  function zh() {
    $("#lan_word").text("字體大小(px)");
    $("#lan_bgc").html("聊天室 純黑背景/白字粗體 <button type='button' onclick='setdark()' class='sk_icon_bottom on' id='cdarkon'>開啟</button><button type='button' onclick='setnodark()' class='sk_icon_bottom off' id='cdarkoff'>關閉</button></div>");
    $("#lan_name").html("聊天室名字白邊框　　　　 <button type='button' onclick='dark2words()' class='sk_icon_bottom on' id='darkwordson'>開啟</button><button type='button' onclick='setnodark2words()' class='sk_icon_bottom off' id='darkwordsoff'>關閉</button></div>");
    $("#lan_ctrl").html("[ALT+Click]複製@id　　　<button type='button' onclick='cctrlon()' class='sk_icon_bottom on' id='cctrlon'>開啟</button><button type='button' onclick='cctrloff()' class='sk_icon_bottom off' id='cctrloff'>關閉</button></div>");
    $("#lan_bgcolor").html("自設背景顏色<input id='favcolor' type='color' name='favcolor' value='#f2f2f2'><button type='button' onclick='setbgc()' class='sk_icon_bottom' style='margin-top: 0px;margin-left: 36PX;background: #34AE0A;'>SAVE</button>");
    $("#lan_wdcolor").html("自設文字顏色<input id='favwordcolor' type='color' name='favwordcolor' value='#ffffff'><button type='button' onclick='setwordcolor()' class='sk_icon_bottom' style='margin-top: 0px;margin-left: 36PX;background: #34AE0A;'>SAVE</button>");
    $("#lan_sklive").text("來SK-Live看直播吧!");
    setCookie("sklan", "", 365);
  }

  function set1() {
    $('div[id^="sk_set"]').css("display", "none");
    $('button[id^="s"]').css("background", "#6441a5");
    $("#sk_set1").css("display", "block");
    $("#s1").css("background", "#008ce3");
    $('div[id^="sk_set"]').perfectScrollbar('update');
  }

  function set2() {
    $('div[id^="sk_set"]').css("display", "none");
    $('button[id^="s"]').css("background", "#6441a5");
    $("#sk_set2").css("display", "block");
    $("#s5").css("background", "#008ce3");
    $('div[id^="sk_set"]').perfectScrollbar('update');
  }

  function set3() {
    $('div[id^="sk_set"]').css("display", "none");
    $('button[id^="s"]').css("background", "#6441a5");
    $("#sk_set3").css("display", "block");
    $("#s2").css("background", "#008ce3");
    $('div[id^="sk_set"]').perfectScrollbar('update');
  }

  function set4() {
    $('div[id^="sk_set"]').css("display", "none");
    $('button[id^="s"]').css("background", "#6441a5");
    $("#sk_set4").css("display", "block");
    $("#s7").css("background", "#008ce3");
    $('div[id^="sk_set"]').perfectScrollbar('update');
  }

  function set5() {
    $('div[id^="sk_set"]').css("display", "none");
    $('button[id^="s"]').css("background", "#6441a5");
    $("#sk_set5").css("display", "block");
    $("#s6").css("background", "#008ce3");
    $('div[id^="sk_set"]').perfectScrollbar('update');
  }

  function set6() {
    $('div[id^="sk_set"]').css("display", "none");
    $('button[id^="s"]').css("background", "#6441a5");
    $("#sk_set6").css("display", "block");
    $("#s3").css("background", "#008ce3");
    $('div[id^="sk_set"]').perfectScrollbar('update');
  }

  function set7() {
    $('div[id^="sk_set"]').css("display", "none");
    $('button[id^="s"]').css("background", "#6441a5");
    $("#sk_set7").css("display", "block");
    $('div[id^="sk_set"]').perfectScrollbar('update');
  }

  function set8() {
    $('div[id^="sk_set"]').css("display", "none");
    $('button[id^="s"]').css("background", "#6441a5");
    $("#sk_set8").css("display", "block");
    $("#s4").css("background", "#008ce3");
    $('div[id^="sk_set"]').perfectScrollbar('update');
  }

  function set9() {
    $('div[id^="sk_set"]').css("display", "none");
    $('button[id^="s"]').css("background", "#6441a5");
    $("#sk_set9").css("display", "block");
    $("#s9").css("background", "#008ce3");
    $('div[id^="sk_set"]').perfectScrollbar('update');
  }

  function set10() {
    $('div[id^="sk_set"]').css("display", "none");
    $('button[id^="s"]').css("background", "#6441a5");
    $("#sk_set10").css("display", "block");
    $("#s10").css("background", "#008ce3");
    $('div[id^="sk_set"]').perfectScrollbar('update');
  }

  function set11() {
    $('div[id^="sk_set"]').css("display", "none");
    $('button[id^="s"]').css("background", "#6441a5");
    $("#sk_set11").css("display", "block");
    $('div[id^="sk_set"]').perfectScrollbar('update');
  }

  function set12() {
    $('div[id^="sk_set"]').css("display", "none");
    $('button[id^="s"]').css("background", "#6441a5");
    $("#sk_set12").css("display", "block");
    $("#s12").css("background", "#008ce3");
    $('div[id^="sk_set"]').perfectScrollbar('update');
  }

  function set13() {
    $('div[id^="sk_set"]').css("display", "none");
    $('button[id^="s"]').css("background", "#6441a5");
    $("#sk_set13").css("display", "block");
    $("#s13").css("background", "#008ce3");
    $('div[id^="sk_set"]').perfectScrollbar('update');
  }

  function set14() {
    $('div[id^="sk_set"]').css("display", "none");
    $('button[id^="s"]').css("background", "#6441a5");
    $("#sk_set14").css("display", "block");
    $("#s14").css("background", "#008ce3");
    $('div[id^="sk_set"]').perfectScrollbar('update');
  }

  function set15() {
    $('div[id^="sk_set"]').css("display", "none");
    $('button[id^="s"]').css("background", "#6441a5");
    $("#sk_set15").css("display", "block");
    $("#s15").css("background", "#008ce3");
    $('div[id^="sk_set"]').perfectScrollbar('update');
  }

  function set16() {
    $('div[id^="sk_set"]').css("display", "none");
    $('button[id^="s"]').css("background", "#6441a5");
    $("#sk_set16").css("display", "block");
    $("#s16").css("background", "#008ce3");
    $('div[id^="sk_set"]').perfectScrollbar('update');
  }

  function set17() {
    $('div[id^="sk_set"]').css("display", "none");
    $('button[id^="s"]').css("background", "#6441a5");
    $("#sk_set17").css("display", "block");
    $("#s17").css("background", "#008ce3");
    $('div[id^="sk_set"]').perfectScrollbar('update');
  }

  function set18() {
    $('div[id^="sk_set"]').css("display", "none");
    $('button[id^="s"]').css("background", "#6441a5");
    $("#sk_set18").css("display", "block");
    $("#s18").css("background", "#008ce3");
    $('div[id^="sk_set"]').perfectScrollbar('update');
  }

  function setting() {
    $('div[id^="sk_set"]').css("display", "none");
    $('button[id^="s"]').css("background", "#6441a5");
    $("#sk_setting").css("display", "block");
    $("#s8").css("background", "#008ce3");
    $('div[id^="sk_set"]').perfectScrollbar('update');
  }

  function openvote() {
    $("#sk_skill").show();
  }

  function opennews() {
    $("#sk_news").show();
  }

  function setword() {
    var first = document.getElementById("textbox1").value;
    setCookie("sktext", first, 365);
    $("<style>.chat-line{ font-size: " + first + "px !important; }</style>").appendTo("head");
  }

  function setbgc() {
    var firsta = document.getElementById("favcolor").value;
    setCookie("skbcg", firsta, 365);
    $("<style>.chat-interface,.chat-container,.chatters-view,.ember-chat-container{background-color: " + firsta + " !important;}.chat-room{background: " + firsta + " !important;}.chat-header{background-color: " + firsta + "!important;}</style>").appendTo("head")
  }

  function setwordcolor() {
    var firstwc = document.getElementById("favwordcolor").value;
    setCookie("skwc", firstwc, 365);
    $("<style>.skClass,.message,.colon { color: " + firstwc + ";}.room-title{color: " + firstwc + ";}</style>").appendTo("head")
  }

  function setdark() {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.chat-interface,.chat-container,.chatters-view,.ember-chat-container{background-color: #111111 !important;}.skClass,.colon { color: white;font-weight: bold; }.chat-room{background: #111111 !important;}.ember-text-area{color: white;background: rgb(42, 42, 42);}.chat-header{background-color: #111111!important;}.chat-room-list{background: #3C3C3C !important}.room-title{color: white;}a{color: #9872E0;}.whisper-incoming{background-color:#4E4C4C !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    setCookie("sk2dark", "darked", 365);
    $("#cdarkon").css("border-bottom", "4px solid #FFFFFF");
    $("#cdarkoff").css("border-bottom", "");
  }

  function setnodark() {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.chat-interface,.chat-container,.chatters-view, .ember-chat-container{background-color: #f2f2f2!important;}.skClass,.colon { color: #323232;font-weight: normal; }.chat-room{background: #f2f2f2 !important;}.ember-text-area{color: #666;background: #FFFFFF;}.chat-header{background-color: #f2f2f2!important;}.chat-room-list{background-color:hsla(0, 100%, 50%, 0.0) !important}.room-title{color: #323232;}a{color: #6441a5;}.whisper-incoming{background-color:#e8e8e8 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    setCookie("sk2dark", "", 365);
    $("#cdarkoff").css("border-bottom", "4px solid #FFFFFF");
    $("#cdarkon").css("border-bottom", "");
  }

  function setonlyeng() {
    var styles = document.getElementById('onlyengid');
    styles.setAttribute('href', 'https://live.sk-knower.com/lib/onlyengid.css?1');
    setCookie("skengid", "eng", 365);
  }

  function setonlyengoff() {
    var styles = document.getElementById('onlyengid');
    styles.setAttribute('href', '');
    setCookie("skengid", "", 365);
  }

  function cleanmychat() {
    $('.ember-view.message-line.chat-line').remove();
    var someNumbers = [1, 2];
    var adminMessage = {
      "message": "[SKLive]已清除我的聊天室內容",
      "from": "", "style": "admin"

    };
    window.App.__container__.lookup("controller:chat").get("currentRoom").addMessage(adminMessage);
  }

  function dark2words() {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.from{text-shadow: -1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF, 1px 1px 0 #FFFFFF;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    setCookie("dark2words", "dark2words", 365);
    $("#darkwordson").css("border-bottom", "4px solid #FFFFFF");
    $("#darkwordsoff").css("border-bottom", "");
  }

  function setnodark2words() {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.from{text-shadow: none;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    setCookie("dark2words", "", 365);
    $("#darkwordsoff").css("border-bottom", "4px solid #FFFFFF");
    $("#darkwordson").css("border-bottom", "");
  }

  function setwordjump() {
    var jump = getCookie("jump");
    if (jump == '') {
      setCookie("jump", "jump", 365);
      document.getElementById("jumpbuttom").innerHTML = "<div style='background-color: green;'>ON</div>解決表情文字跳行問題";
      $(".message").attr('class', 'skClass');
      $("#sk_ttv li[id^='ember']").attr('id', 'gg');
    } else {
      setCookie("jump", "", 365);
      document.getElementById("jumpbuttom").innerHTML = "<div style='background-color: red;'>OFF</div>解決表情文字跳行問題";
    }
  }

  function updateTextInput(val) {
    document.getElementById('textbox1').value = val;
  }

  function updateskiconTextInput(val) {
    document.getElementById('textbox1skicon').value = val;
  }

  function cctrlon() {
    setCookie("setctrl", "", 365);
    $("#cctrlon").css("border-bottom", "4px solid #FFFFFF");
    $("#cctrloff").css("border-bottom", "");
  }

  function cctrloff() {
    setCookie("setctrl", "off", 365);
    $("#cctrloff").css("border-bottom", "4px solid #FFFFFF");
    $("#cctrlon").css("border-bottom", "");
  }

  function imgtag() {
    setCookie("setimg", "", 365);
    $("#imgtag").css("border-bottom", "4px solid #FFFFFF");
    $("#imgtagoff").css("border-bottom", "");
  }

  function imgtagoff() {
    setCookie("setimg", "off", 365);
    $("#imgtagoff").css("border-bottom", "4px solid #FFFFFF");
    $("#imgtag").css("border-bottom", "");
  }

  function plinkon() {
    setCookie("plink", "on", 365);
    $("#plinkon").css("border-bottom", "4px solid #FFFFFF");
    $("#plinkoff").css("border-bottom", "");
  }

  function plinkoff() {
    setCookie("plink", "off", 365);
    $("#plinkoff").css("border-bottom", "4px solid #FFFFFF");
    $("#plinkon").css("border-bottom", "");
  }

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
  }

  function checkContainer() {
    if ($('.player-fullscreen-overlay').is(':visible')) {
      $(".player-fullscreen-overlay").removeClass("player-overlay");
    } else {
      setTimeout(checkContainer, 50);
    }
  }

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  var url = window.location.href;
//console.log(url);

  if (url.match('www.twitch.tv/message/')) {
  } else {
    if (url.match('dashboard')) {
      $("#dash_main").append('<div style="padding: 10px 20px;margin: 0 auto;width: 940px;background: #0276b9;color: white;"><img src="//live.sk-knower.com/sklive_logo2.png" style="height: 36px;"><span style="line-height: 36px;font-size: 15px;">現在SKLive上也有強化"儀表板"的直播控制中心功能,你也可以來試用!</span><a href="http://live.sk-knower.com/dashboard" target="_blank"><span style="float: right;line-height: 36px;font-size: 15px;background: #23b312;color: #ffffff;padding: 0px 8px;">登入SKLive控制中心</span></a></div>')
    }
    if (url.match('sked&channel')) {
      $(document).ready(function () {
        console.log("ready!");
        checkContainer();
      });
//spurl=url.split("/");
//console.log(spurl[3]);
//$('body').html('');
//$('body').html('<iframe src="//player.twitch.tv/?channel='+spurl[3]+'&player=frontpage&!channelInfo&!branding" width="100%" height="100%" frameborder="0" allowfullscreen="" scrolling="no"></iframe>');
    } else {
      if (url.match('player.twitch.tv')) {
        if (url.match('&sklive&!branding') || url.match('&sklive=true')) {
          spurl = url.match("channel=(.*)&sklive");
          console.log(spurl);
          //window.location.href = '//player.twitch.tv/?sked&channel=' + spurl[1] + '&player=&!channelInfo&muted=false&!branding';
          console.log('active');
        }
      } else {
        console.log('[Sklive]Start');
        var counterror = '0';
        $('<link rel="stylesheet" href="https://live.sk-knower.com/lib/scroll/css/perfect-scrollbar.min.css">').appendTo("head");
        function waitForElement() {
          thistitle = window.location.pathname;
          console.log($('.chat-header').length + thistitle);
          if ($('#sk_icon_set').length == "1") {
            $("#sk_icon_set").remove();
            $("#acgranking").remove();
            $("#sk_click_icon").remove();
            $("#sk_skill").remove();
            $("#sk_caht_bg").remove();
            $("#sk_news").remove();
            $("#acgskgame").remove();
          }
          if ($('#sk_click_icon').length == "3") {
            foreverloop();
          } else {
            if ($('.chat-header').length == "1") {
              //variable exists, do what you want
              var metaTags = document.getElementsByTagName("meta");
              var IdContent = $(".room-title").html();
              if (IdContent == '<!---->') {
                var IdContent = document.querySelector("link[rel=alternate]").getAttribute("href").replace('android-app://tv.twitch.android.app/twitch/open?channel=', '');
              }
              console.log('sk:' + IdContent);
              var bcontent = document.createElement("div");
              bcontent.id = "sk_caht_bg";
              bcontent.className = "id_" + IdContent + "_bg";
              var popout = document.createElement("div");
              popout.style.cssText = 'display:none;';
              popout.id = "sk_skill";
              popout.innerHTML = "<div class='skchat_emotes_header' id='b'><div style='position: absolute;top: 3px;left: 0px;'><img src='https://live.sk-knower.com/flag/sklive.png' height='20' style='left: 2px;'> SKLive直播列表</div><div onclick='voteclosees();' class='close'><div style='margin-top: 2px;'>╳</div></div></div><div id='vote_title'></div><div id='sk_timmer'>投票結束</div><ul class='no-bullets'><li id='skli'><div id='skitem1' class='sklistitem'></div><div id='count1' class='skcount'></div></li><li id='skli'><div id='skitem2' class='sklistitem'></div><div id='count2' class='skcount'></div></li><li id='skli'><div id='skitem3' class='sklistitem'></div><div id='count3' class='skcount'></div></li><li id='skli'><div id='skitem4' class='sklistitem'></div><div id='count4' class='skcount'></div></li></ul><ul class='no-bullets2'><li id='skli'><div class='skvote' onclick='clickvote(this);' data-id='a' id='voteabox'>投票</div></li><li id='skli'><div class='skvote' data-id='b' onclick='clickvote(this);' id='votebbox'>投票</div></li><li id='skli'><div class='skvote' onclick='clickvote(this);' data-id='c' id='votecbox'>投票</div></li><li id='skli'><div class='skvote' onclick='clickvote(this);' data-id='d' id='votedbox'>投票</div></li></ul><div style='text-align: right;font-size: 12px;'>總投票人數 <small id='totalvote'>0</small></div><div style='font-size: 12px;;'>＊＊一人只有一票，不可多選<div style='float: right;' id='vote_userid'></div></div>";
              var paopout = document.createElement("div");
              paopout.style.cssText = 'display:none;';
              paopout.id = "acgskgame";
              paopout.innerHTML = "<div class='skchat_acg_header' id='dc'><div style='position: absolute;top: 3px;left: 0px;'></div><div onclick='acgskgameclosees();' class='close' style='background-color: initial;'><div style='margin-top: 2px;'></div></div></div><div style='padding: 0px 5px;background: #2583C7;color: white;'>遊戲:<div id='skgame_title' style='text-align: center;'></div><div style='font-size: 12px;'>你認為這隻遊戲值多少分呢? 10分為滿分</div><div id='totalm' style='font-size: 15px;'><label class='acgskch' for='total1' onclick='clickacggame(this);' data-id='1'>1分</label><label class='acgskch' for='total2' onclick='clickacggame(this);' data-id='2'>2分</label><label class='acgskch' for='total3' onclick='clickacggame(this);' data-id='3'>3分</label><label class='acgskch' for='total4' onclick='clickacggame(this);' data-id='4'>4分</label><label class='acgskch' for='total5' onclick='clickacggame(this);' data-id='5'>5分</label><label class='acgskch' for='total6' onclick='clickacggame(this);' data-id='6'>6分</label><label class='acgskch' for='total7' onclick='clickacggame(this);' data-id='7'>7分</label><label class='acgskch' for='total8' onclick='clickacggame(this);' data-id='8'>8分</label><label class='acgskch' for='total9' onclick='clickacggame(this);' data-id='9'>9分</label><label class='acgskch' for='total10' onclick='clickacggame(this);' data-id='10'>10分</label></div><div style='font-size: 12px;;'>＊＊一人只有一票<br>更多電玩評論: <a href='http://acg.sk-knower.com/' target='_blank' style='color: white;'>http://acg.sk-knower.com/</a></div></div>";
              var news = document.createElement("div");
              news.style.cssText = 'display:none;';
              news.id = "sk_news";
			news.innerHTML = '<div class="skchat_emotes_header" id="c"><div style="position: absolute;top: 3px;left: 3px;"><img src="https://live.sk-knower.com/flag/sklive.png" height="20" style="left: 0px;"> SKLive插件 更新資訊</div><div onclick="newsclosees();" class="close"><div style="margin-top: 2px;">╳</div></div></div><div style="font-weight: bold;">其實插件[s][e]的功能比你想像中多</div><div style="text-align: center;"><a href="https://i.imgur.com/qNpHYbN.png" target="_blank"><img src="https://i.imgur.com/qNpHYbN.png" height="200" style="left: 0px;"></a></div><div style="margin-left:13px;font-size: 13px;margin: 15px 5px;line-height: 20px;">- [s][e]指令支援steam商店遊戲網址<br>- [s][e]指令已經支援 .mp4 .webm 貼圖功能 [最新更新!]<br></div><div style="text-align: center;"><a href="https://www.twitch.tv/products/sundayla123/ticket" target="_blank"><img src="https://i.imgur.com/C9HfByw.png" height="100" style="left: 0px;"></a></div><div style="font-size: 12px;margin: 15px 5px;">- 對了, SKLive logo也在我Twitch訂閱上了<br>(真的很想要這個貼圖才去訂閱吧,你在使用插件/SKLive已經是對我的支持了)</div><div style="font-weight: bold;"></div><div style="font-size: 12px;;">＊更多資訊 可到本網<a href="https://www.facebook.com/SkKnower" target="_blank" style="color: #2B60E6;text-shadow: -1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF, 1px 1px 0 #FFFFFF;"> Facebook</a><div style="float: right;" id="vote_userid">@Sundayla123</div></div>';


              var message = document.getElementsByClassName('tse-content');
              [].slice.call(message).forEach(function (skttv) {
                if (skttv.id == 'settings') {
                } else {
                  skttv.id = 'sk_ttv';
                }
              });
              var meas = document.getElementsByClassName('chat-buttons-container clearfix');
              [].slice.call(meas).forEach(function (skttv_set) {
                skttv_set.id = 'sk_ttv_set';
              });
              var skicon = document.getElementsByTagName("body");
              var content2 = document.createElement("div");
              content2.id = "sk_icon_set";
              content2.className = "skicon_off";
              content2.innerHTML = '<div class="skchat_emotes_header" id="a"><div onclick="closees();" class="close"><div style="margin-top: 2px;">╳</div></div><div class="skchat_emotes_header" id="a"><div style="position: absolute;top: 3px;left: 3px;"><img src="https://live.sk-knower.com/flag/sklive.png" height="20" style="left: 0px;"> SKLive直播列表<button id="s8" type="button" class="sk_icon_bottom sktoptag" onclick="setting()" style="position: relative; height: 18px; padding: 0px 2px 0px 2px; background: rgb(100, 65, 165);">設定</button></div></div></div><div><button id="s12" type="button" class="sk_icon_bottom sktoptag" onclick="set12()">本台</button><button id="s1" type="button" class="sk_icon_bottom sktoptag" onclick="set1()" style="background: rgb(0, 140, 227);">-01-</button><button id="s2" type="button" class="sk_icon_bottom sktoptag" onclick="set3()" style="background: rgb(100, 65, 165);">-02-</button><button id="s3" type="button" class="sk_icon_bottom sktoptag" onclick="set6()" style="background: rgb(100, 65, 165);">-03-</button><button id="s4" type="button" class="sk_icon_bottom sktoptag" onclick="set8()" style="background: rgb(100, 65, 165);">-04-</button><button id="s17" type="button" class="sk_icon_bottom sktoptag" onclick="set17()" style="background: rgb(100, 65, 165);">-05-</button><button id="s5" type="button" class="sk_icon_bottom sktoptag" onclick="set2()" style="background: rgb(100, 65, 165);">-06-</button><button id="s6" type="button" class="sk_icon_bottom sktoptag" onclick="set5()" style="background: rgb(100, 65, 165);"><img class="sk_icon_show" height="15px" src="https://live.sk-knower.com/icon/HKG2/Small.gif"></button><button id="s9" type="button" class="sk_icon_bottom sktoptag" onclick="set9()" style="background: rgb(100, 65, 165);"><img class="sk_icon_show" height="15px" src="https://live.sk-knower.com/icon/HKG/Smile.gif"></button><button id="s16" type="button" class="sk_icon_bottom sktoptag" onclick="set16()" style="background: rgb(100, 65, 165);"><img class="sk_icon_show" src="https://live.sk-knower.com/icon/Lomore/biggrin.gif" height="15px"></button><button id="s7" type="button" class="sk_icon_bottom sktoptag" onclick="set4()" style="background: rgb(100, 65, 165);">^д^</button><button id="s14" type="button" class="sk_icon_bottom sktoptag" onclick="set14()">常用</button></div><div id="sk_set1" class="tags_select" style="display: block;"></div><div id="sk_set2" class="tags_select" style="display: none;"></div><div id="sk_set3" class="tags_select" style="display: none;"></div><div id="sk_set6" class="tags_select" style="overflow: auto; height: 297px; display: none;"></div><div id="sk_set5" class="tags_select" style="height: 297px; overflow: auto; display: none;"></div><div id="sk_set4" class="tags_select" style="display: none;"></div><div id="sk_set9" class="tags_select" style="height: 297px; overflow: auto; display: none;"></div><div id="sk_set7" class="tags_select" style="font-size:10px;color: black; display: none;">你發現了彩蛋XD,請確定使用以下表情時不會洗版~<hr><button id="s18" type="button" class="sk_icon_bottom sktoptag" onclick="set18()">直播活動 RC2016</button><button id="s15" type="button" class="sk_icon_bottom sktoptag" onclick="set15()" style="">直播活動 RND2016</button></div><div id="sk_set8" class="tags_select" style="color: black; overflow: auto; height: 297px; display: none;"></div><div id="sk_setting" class="tags_select" style="color: black; display: none;" ><div type="button" style="width: 260px;" class="sk_icon_bottom" id="lan_bgc">Clean MY Chat<button type="button" onclick="cleanmychat()" class="sk_icon_bottom on" id="">清空自己聊天室</button></div><div type="button" class="sk_icon_bottom" style="width: 260px;" id="lan_ctrl">顯示P網圖片(18+ 自動除外)　<button type="button" onclick="plinkon()" class="sk_icon_bottom on" id="plinkon" style="border-bottom-width: 4px; border-bottom-style: solid; border-bottom-color: rgb(255, 255, 255);">開啟</button><button type="button" onclick="plinkoff()" class="sk_icon_bottom off" id="plinkoff">關閉</button></div><div type="button" style="width: 260px;" class="sk_icon_bottom" id="lan_bgc">聊天室 只顯示中文id<button type="button" onclick="setonlyeng()" class="sk_icon_bottom on" id="">開啟</button><button type="button" onclick="setonlyengoff()" class="sk_icon_bottom off" id="">關閉</button></div><button type="button" class="sk_icon_bottom" id="lan_word">字體大小(px)</button><input type="range" min="5" max="30" oninput="updateTextInput(this.value);setword();" style="width: 120px;" id="fontrange"><input type="text" id="textbox1" style="width: 21px;"><button type="submit" class="sk_icon_bottom" id="button1" onclick="setword()">SAVE</button><div type="button" style="width: 260px;" class="sk_icon_bottom" id="lan_bgc">聊天室 純黑背景/白字粗體<button type="button" onclick="setdark()" class="sk_icon_bottom on" id="cdarkon">開啟</button><button type="button" onclick="setnodark()" class="sk_icon_bottom off" id="cdarkoff">關閉</button></div><div type="button" class="sk_icon_bottom" style="width: 260px;" id="lan_name">聊天室名字白邊框　　　　<button type="button" onclick="dark2words()" class="sk_icon_bottom on" id="darkwordson">開啟</button><button type="button" onclick="setnodark2words()" class="sk_icon_bottom off" id="darkwordsoff">關閉</button></div><div type="button" class="sk_icon_bottom" style="width: 260px;" id="lan_ctrl">[ALT+Click]複製@id　　　<button type="button" onclick="cctrlon()" class="sk_icon_bottom on" id="cctrlon">開啟</button><button type="button" onclick="cctrloff()" class="sk_icon_bottom off" id="cctrloff">關閉</button></div><div type="button" class="sk_icon_bottom" style="width: 260px;" id="lan_img">圖片[s][e]自動顯示　　　<button type="button" onclick="imgtag()" class="sk_icon_bottom on" id="imgtag">開啟</button><button type="button" onclick="imgtagoff()" class="sk_icon_bottom off" id="imgtagoff">關閉</button></div><div type="button" class="sk_icon_bottom" style="width: 260px;" id="lan_name">Language<button type="button" onclick="zh()" class="sk_icon_bottom" style="margin-top: 0px;margin-left: 77PX;background: #34AE0A;">中文</button><button type="button" onclick="eng()" class="sk_icon_bottom" style="margin-top: 0px;background: #34AE0A;">English</button></div><button type="button" class="sk_icon_bottom" onclick="set11();">[P]Link記錄</button><a href="https://live.sk-knower.com" target="_blank"><img src="https://live.sk-knower.com/icon/sklivelogo1.png" style="vertical-align: middle;height: 40px;" alt="SKLive中文直播列表"><button type="button" class="sk_icon_bottom" id="lan_sklive">來SK-Live看直播吧!</button><button type="button" class="sk_icon_bottom" style="margin-top: 0px;" id="lan_content">連絡作者:Sundayla123</button></a><a href="https://www.facebook.com/SkKnower" target="_blank"><button type="button" class="sk_icon_bottom" style="margin-top: 0px;" id="lan_content">Facebook</button></a><button id="s10" type="button" class="sk_icon_bottom sktoptag" onclick="set10()" style="background: rgb(100, 65, 165);">投票</button><button id="button1" onclick="opennews()" style="" class="sk_icon_bottom">更新資訊</button><div type="button" style="width: 260px;" class="sk_icon_bottom" id="lan_bgcolor">自設背景顏色<input id="favcolor" type="color" name="favcolor" value="#FFFFFF"><button type="button" onclick="setbgc()" class="sk_icon_bottom" style="margin-top: 0px;margin-left: 36PX;background: #34AE0A;">SAVE</button></div><div type="button" style="width: 260px;" class="sk_icon_bottom" id="lan_wdcolor">自設文字顏色<input id="favwordcolor" type="color" name="favwordcolor" value="#111111"><button type="button" onclick="setwordcolor()" class="sk_icon_bottom" style="margin-top: 0px;margin-left: 36PX;background: #34AE0A;">SAVE</button></div></div><div id="sk_set10" class="tags_select" style="height: 297px; overflow: auto; display: none;">*只有台主才可以發動投票<button id="button1" onclick="openvote()" style="" class="sk_icon_bottom">打開投票頁面</button><div class="sk_icon_bottom">標題 <input type="text" class="vote_ui" id="voteui_title"></div><div class="sk_icon_bottom">限時(s) <input type="text" class="vote_ui" id="voteui_time"></div><div class="sk_icon_bottom">選項A<input type="text" class="vote_ui" id="voteui_a"></div><div class="sk_icon_bottom">選項B<input type="text" class="vote_ui" id="voteui_b"></div><div class="sk_icon_bottom">選項C<input type="text" class="vote_ui" id="voteui_c"></div><div class="sk_icon_bottom">選項D<input type="text" class="vote_ui" id="voteui_d"></div><div style="text-align:right;"><button type="button" class="sk_icon_bottom sktoptag" onclick="closevote()" style="background: rgb(100, 65, 165);">取消投票</button><button type="button" class="sk_icon_bottom sktoptag" onclick="setsendvote()" style="background: rgb(100, 65, 165);">[生產投票Code]</button></div><div id="votename"></div></div><div id="sk_set11" style=" display: none;color: black;height: 305px;overflow: auto;"></div><div id="sk_set12" class="tags_select" style="display: none;color: black;height: 305px;overflow: auto;"><div id="ischannelboss"></div><div id="channeldata" style="font-size:10px;background:#6441A5;color:white;padding:4px;line-height: 15px;"></div><div id="usericonset" style="font-size:10px;"><hr></div><div id="f5usericonset" style="font-size: 10px;"></div></div><div id="sk_set13" class="tags_select" style="display: none;color: black;height: 305px;overflow: auto;"><div class="sk_icon_bottom">設定指引<br>1.圖片過大會影響載入速度,考慮電腦較差的觀眾<br>2.表情代碼只限中英文數字<br>2.代碼不要重複,應獨立分配<br>4.台主設定後用戶同樣需要f5更新表情<br>5.限制外連的圖床不可使用(例:巴哈/百度)<br>6.本台等級用作增加表情上限(基本25個/1等級加1個)<br>7.如有任何BUG/建議/問題也可以FB私信我</div><div class="sk_icon_bottom">圖片網址:<input type="text" class="vote_ui" id="sk_icon_url"></div><div class="sk_icon_bottom">表情代碼:<input type="text" class="vote_ui" id="sk_icon_code"></div><div style="" class="sk_icon_bottom">表情高度(表情會根據高度縮放圖片大小):<input type="range" min="10" max="100" step="10" value ="50" oninput="updateskiconTextInput(this.value);" style="width: 120px;" id="sk_icon_height"><input type="text" id="textbox1skicon" value="50" style="width: 21px;">px</div><button class="sk_icon_bottom" onclick="addicon();">＞確認新增SKLive表情</button><div id="editicon"></div></div><div id="arraysave" style="display: none;"></div><div id="sk_set14" class="tags_select" style="display: none;color: black;height: 305px;overflow: auto;"><hr><div id="usericonset" style="font-size:10px;">你最近使用的表情</div></div><div id="sk_set15" class="tags_select" style="display: none;color: black;height: 305px;overflow: auto;font-size:10px;">ROCKMAN NEVER DIES! 2016 12月1日至30日</br><a href="https://live.sk-knower.com/RND2016" target="_blank">https://live.sk-knower.com/rnd2016</a><hr><div id="eventiconset"></div></div><div id="sk_set16" class="tags_select" style="display: none;color: black;height: 305px;overflow: auto;font-size:10px;"></div><div id="sk_set17" class="tags_select" style="display: none;color: black;height: 305px;overflow: auto;font-size:10px;"></div><div id="sk_set18" class="tags_select" style="display: none;color: black;height: 305px;overflow: auto;font-size:10px;">Rockman Chronicles 2016 7月1日至31日</br><a href="https://live.sk-knower.com/RockmanChronicles" target="_blank">https://live.sk-knower.com/RockmanChronicles</a><hr><div id="event2iconset"></div></div>';
              function function2() {
                var IdContent = $(".room-title").html();
                if (IdContent == '<!---->') {
                  var IdContent = document.querySelector("link[rel=alternate]").getAttribute("href").replace('android-app://tv.twitch.android.app/twitch/open?channel=', '');
                }
                console.log('載入bg' + IdContent);
                $(".chat-room").append(popout);
                $(".chat-room").append(news);
                $(".chat-room").append(paopout);
                var myList = document.getElementsByTagName("textarea");
                var skset = document.getElementById("sk_icon_set");
                var skdiv = document.getElementById("sk_ttv_set");
                var content = document.createElement("a");
                content.id = "sk_click_icon";
                content.onclick = function () {
                  if (skset.className == "skicon_off") {
                    skset.className = "skicon_on";
                    skset.style.top = "45px";
                    skset.style.right = "13px";
                    skset.style.left = "inherit";
                    document.getElementById("sk_click_icon").style.backgroundImage = "url(https://live.sk-knower.com/icon/22_on.png)";
                  } else {
                    skset.className = "skicon_off";
                    document.getElementById("sk_click_icon").style.backgroundImage = "url(https://live.sk-knower.com/icon/22_off.png)";
                  }
                };
                if (skdiv == null) {
                  setTimeout(function () {
                    var meas = document.getElementsByClassName('chat-buttons-container clearfix');
                    [].slice.call(meas).forEach(function (skttv_set) {
                      skttv_set.id = 'sk_ttv_set';
                    });
                    var skdiv = document.getElementById("sk_ttv_set");
                    skdiv.appendChild(content);
                  }, 8000);
                } else {
                  skdiv.appendChild(content);
                }
                $(".textarea-contain").prepend('<button type="button" class="sk_icon_bottom sktoptag quikelink" onclick="pastephoto();" style="height: 17px;position: absolute; top: -17px; background: rgba(0,0,0,0.1);left: 0px;">圖片</button><button type="button" class="sk_icon_bottom sktoptag quikelink" onclick="pasteyt()" style="height: 17px;display: initial; position: absolute; top: -17px; background: rgba(0,0,0,0.1);left: 32px;">影片</button><button type="button" class="sk_icon_bottom sktoptag quikelink" onclick="pastepid()" style="height: 17px;display: initial; position: absolute; top: -17px; background: rgba(0,0,0,0.1);left: 64px;">Pixiv</button>');
                $(".quikelink").on("mouseenter", function () {
                  $(this).css({"top": "-23px", "height": "23px"});
                });
                $(".quikelink").on("mouseleave", function () {
                  $(this).css({"top": "-17px", "height": "17px"});
                });


/////////////////////////////////////////////////
                var channelid = window.App.__container__.lookup("controller:chat").currentRoom.id;
                console.log('本台id' + channelid);
                var bcontent = document.createElement("div");
                bcontent.id = "sk_caht_bg";
                bcontent.className = "id_" + channelid + "_bg";
                $(".chat-room").append(bcontent);
                var subiconList = [
                  {
                    "code": /sk_sklogo/gi,
                    "src": "https://live.sk-knower.com/flag/sklive.png",
                    "width": 50,
                    "height": 50,
                    "alt": "sk_sklogo",
                    "isRegex": true
                  }
                ];
                if (channelid == "mrrockrock11") {
                  var style = document.createElement('style');
                  style.type = 'text/css';
                  style.innerHTML = '.moderator{background:#34ae0a url(https://live.sk-knower.com/icon/badge_mod2.svg)!important;background-size:100%!important;}';
                  document.getElementsByTagName('head')[0].appendChild(style);
                }
                if (channelid == "dolaemongoxz1") {
                  var style = document.createElement('style');
                  style.type = 'text/css';
                  style.innerHTML = '.broadcaster{background:#e71818 url("https://live.sk-knower.com/icon/badge_mod3.svg")!important;background-size:100%!important;}';
                  document.getElementsByTagName('head')[0].appendChild(style);
                }
                if (channelid == "skbear2725") {
                  var style = document.createElement('style');
                  style.type = 'text/css';
                  style.innerHTML = '.moderator{background:#090 url(https://live.sk-knower.com/icon/broadcaster.png)!important;}';
                  document.getElementsByTagName('head')[0].appendChild(style);
                }
                if (channelid == "skbear2725") {
                  var style = document.createElement('style');
                  style.type = 'text/css';
                  style.innerHTML = '.moderator{background:#090 url(https://live.sk-knower.com/icon/broadcaster.png)!important;}';
                  document.getElementsByTagName('head')[0].appendChild(style);
                }
                if (channelid == "fayoujo1007") {
                  var style = document.createElement('style');
                  style.type = 'text/css';
                  style.innerHTML = '.broadcaster{background-color:black !important;}';
                  document.getElementsByTagName('head')[0].appendChild(style);

                }
                if (channelid == "sundayla123") {
                  var style = document.createElement('style');
                  style.type = 'text/css';
                  style.innerHTML = '.broadcaster{background:url(https://live.sk-knower.com/icon/MOD.png)!important;}';
                  document.getElementsByTagName('head')[0].appendChild(style);
                }
                $('<div id="acgranking" style="position: absolute;right: 0px;z-index: 1;display:none;">遊戲評分進行中...</div>').insertAfter(".chat-header");
/////////////////////////////////////////
                $('div[id^="sk_set"]').perfectScrollbar();
                $.getJSON("https://live.sk-knower.com/lib/acg/plugincomment.php?gid=" + channelid + "&callback=?", function (comment) {
                  if (comment.comment != "") {
                    var someNumbers = [1, 2];
                    var adminMessage = {
                      "message": "SKRecent" + channelid,
                      "from": "", "style": "admin"

                    };
                    window.App.__container__.lookup("controller:chat").get("currentRoom").addMessage(adminMessage);
                  }
                });

                $.getJSON("https://live.sk-knower.com/lib/iconjsonp.php?channel=" + channelid + "&callback=?", function (icon) {
                  if (typeof icon === "undefined") {
                    $("#channeldata").append("<a href='http://live.sk-knower.com/" + channelid + "' target='_blank' style='color: #ffffff;'>http://live.sk-knower.com/" + channelid + "</a></br>使用SKLive網頁觀看直播,可為本台增加EXP及等級</br>本台等級:未開始統計<span class='tooltip' style='background: #322153;color: #BAAED2;font-size: 10px;float: right;cursor: pointer;' original-title='使用SKLive網頁觀看直播,可為本台增加EXP及等級'>　[?]　</span><div style=''><div style='float: left;'>Exp:</div><div style='width: 240px;background: rgba(0, 0, 0, 0.5);height: 14px;float: left;position: relative;'><div style='width: 0px;height: 5px;border-bottom: 14px solid #9E9A09;color: #ECE6E6;'></div><div style='position: absolute;top: 0px;width: 100%;text-align: center;'>0/0 (0%)</div></div></div></br>如你是本台台主,可立即設定SK自訂表情,推薦觀眾使用SKLive界面看直播得到本台EXP<div style='text-align: center;'><img src='https://live.sk-knower.com/newskicon.png' height='110' style='left: 0px;'></div><div style='margin-left:13px;    font-size: 12px;line-height: 15px;'>只要打開你的聊天室,新增本台表情符號<br>你就可以製作本台專用的表情給觀眾使用!</div><div style='font-size: 12px;;'>＊＊更多更新資訊 可到本網<a href='https://www.facebook.com/SkKnower' target='_blank' style='color: #2B60E6;text-shadow: -1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF, 1px 1px 0 #FFFFFF;'> Facebook</a><div style='float: right;' id='vote_userid'></div></div>");
                  } else {
                    allusericon = icon.length;
                    $.each(icon, function (i, item) {
                      var nopx = icon[i].height.replace('px', '');
                      $("#usericonset").append("<img id='b" + icon[i].alt + "' class='sk_icon_show tooltip' src='" + icon[i].src + "' style='max-height:40px;' alt='" + icon[i].alt + "' original-title='" + icon[i].alt + "'>");

                      $("#editicon").append("<div id='" + icon[i].alt + "' class='sk_icon_bottom usersk" + i + "' style='margin: 1px;'><button onclick='follow00system(\"" + icon[i].src + "\",\"" + icon[i].alt + "\");'  style='font-size: 13px;float: right;line-height: 32px;background-color: rgb(213, 3, 3);color: rgb(223, 223, 223);border: 0px;cursor: pointer;'>刪除</button><img alt='" + icon[i].alt + "' class='sk_icon_show tooltip' src='" + icon[i].src + "' style='max-width: 237px;' height='40' original-title='" + icon[i].alt + " (" + icon[i].height + ")'>" + icon[i].alt + " (" + icon[i].height + ")<button onclick='opendeiticon(\"skliveedit_" + icon[i].alt + "\");' style='font-size: 13px;line-height: 20px;background-color: #3B1384;color: rgb(223, 223, 223);border: 0px;cursor: pointer;'>編輯</button> <button onclick='icongoup(\"" + i + "\",\"" + icon[i].alt + "\");' style='font-size: 13px;line-height: 20px;background-color: #3B1384;color: rgb(223, 223, 223);border: 0px;cursor: pointer;'>上移</button> <button onclick='icongodown(\"" + i + "\",\"" + icon[i].alt + "\");' style='font-size: 13px;line-height: 20px;background-color: #3B1384;color: rgb(223, 223, 223);border: 0px;cursor: pointer;'>下移</button><div id='skliveedit_" + icon[i].alt + "' style='display: none;'><input type='text' value='" + icon[i].src + "' class='vote_ui' id='editurl_" + icon[i].alt + "'><input type='text' id='editpx_" + icon[i].alt + "' value='" + nopx + "' style='width: 35px;'><button onclick='edit_the_icon(\"" + icon[i].alt + "\",\"editurl_" + icon[i].alt + "\",\"editpx_" + icon[i].alt + "\");' style='font-size: 13px;line-height: 20px;background-color: #3B1384;color: rgb(223, 223, 223);border: 0px;cursor: pointer;'>save</button></div></div>");
                    });
                    $("#s12").css("display", "initial");

                    $.getJSON("https://live.sk-knower.com/lib/chat_level.php?channel=" + channelid + "&callback=?", function (expbar) {
                      if (expbar) {
                        var level = Math.sqrt(expbar / 10);
                        yourlevel = Math.floor(level);
                        if (level < 0) {
                          yourlevel = 0;
                        }
                        if (yourlevel < 25) {
                          var nowlevelexp = (yourlevel) * (yourlevel) * 10;
                          var nextlevelexp = (yourlevel + 1) * (yourlevel + 1) * 10;
                          var thislevelneed = nextlevelexp - nowlevelexp;
                          var thislevelhave = expbar - nowlevelexp;
                          var yourexp = thislevelhave / thislevelneed * 100;
                        } else {
                          var level = Math.sqrt(expbar / 20);
                          yourlevel = Math.floor(level);
                          if (expbar < 13520) {
                            yourlevel = 25;
                            var thislevelneed = 7270;
                            var thislevelhave = expbar - 6250;
                            var yourexp = thislevelhave / thislevelneed * 100;
                          } else {
                            var nextlevelexp = (yourlevel + 1) * (yourlevel + 1) * 20;
                            var nowlevelexp = (yourlevel) * (yourlevel) * 20;
                            var thislevelneed = nextlevelexp - nowlevelexp;
                            var thislevelhave = expbar - nowlevelexp;
                            var yourexp = thislevelhave / thislevelneed * 100;
                          }
                        }
                        $("#channeldata").append("<a href='http://live.sk-knower.com/" + channelid + "' target='_blank' style='color: #ffffff;'>http://live.sk-knower.com/" + channelid + "</a></br>使用SKLive網頁觀看直播,可為本台增加EXP及等級</br>本台等級:" + yourlevel + "<span class='tooltip' style='background: #322153;color: #BAAED2;font-size: 10px;float: right;cursor: pointer;' original-title='使用SKLive網頁觀看直播,可為本台增加EXP及等級'>　[?]　</span><div style=''><div style='float: left;'>Exp:</div><div style='width: 240px;background: rgba(0, 0, 0, 0.5);height: 14px;float: left;position: relative;'><div style='width: " + yourexp * 2.4 + "px;height: 5px;border-bottom: 14px solid #9E9A09;color: #ECE6E6;'></div><div style='position: absolute;top: 0px;width: 100%;text-align: center;'>" + thislevelhave + "/" + thislevelneed + " (" + Math.floor(yourexp) + "%)</div></div></div><br>以下SKLive表情由本台台主上載,只限本聊天室使用");
                        $('.tooltip').tipsy();
                      } else {
                        $("#channeldata").append("<a href='http://live.sk-knower.com/" + channelid + "' target='_blank' style='color: #ffffff;'>http://live.sk-knower.com/" + channelid + "</a></br>使用SKLive網頁觀看直播,可為本台增加EXP及等級</br>本台等級:0<span class='tooltip' style='background: #322153;color: #BAAED2;font-size: 10px;float: right;cursor: pointer;' original-title='使用SKLive網頁觀看直播,可為本台增加EXP及等級'>　[?]　</span><div style=''><div style='float: left;'>Exp:</div><div style='width: 240px;background: rgba(0, 0, 0, 0.5);height: 14px;float: left;position: relative;'><div style='width: 0px;height: 5px;border-bottom: 14px solid #9E9A09;color: #ECE6E6;'></div><div style='position: absolute;top: 0px;width: 100%;text-align: center;'>0/10 (0%)</div></div></div></br>以下SKLive表情由本台台主上載,只限本聊天室使用");
                      }
                    });
                  }
                  $('.tooltip').tipsy();
                });


                var foreverloop = function () {
                  $.getScript("https://live.sk-knower.com/lib/chat_icon.js", function () {
                    $.getJSON("https://live.sk-knower.com/lib/iconjsonp.php?channel=" + channelid + "&callback=?", function (uicon) {
                      var someNumbers = [1, 2];
                      var adminMessage = {
                        "message": "!sklive_adlist",
                        "from": "", "style": "admin"

                      };
                      window.App.__container__.lookup("controller:chat").get("currentRoom").addMessage(adminMessage);
                      if (typeof uicon === "undefined") {
                        var uicon = [
                          {
                            "code": /sk_sklogo/gi,
                            "src": "https://live.sk-knower.com/flag/sklive.png",
                            "width": 50,
                            "height": 50,
                            "alt": "sk_sklogo",
                            "isRegex": true
                          }
                        ];
                      } else {
                        $("<style>#s12{ background: #01AB00 !important; }</style>").appendTo("head");
                      }
                      (function updateCounter() {
                        if ($(".moderation-card")[0]) {
                          if ($(".addedsklink")[0]) {
                          } else {
                            $(".moderation-card").append('<div class="addedsklink" style="position: absolute;right: 0px;bottom: 0px;z-index:999;"><button onclick="gousersk();" type="button" class="sk_icon_bottom sktoptag tooltip" style="position: relative; height: 18px; padding: 0px 2px; background: rgb(100, 65, 165);margin: 0px;" original-title="在SKLive大屏幕觀看">在SKLive上觀看</button></div>');
                          }
                        }
                        var deleted = document.getElementsByClassName('deleted');
                        [].slice.call(deleted).forEach(function (skdeleted) {
                          if (skdeleted.className == 'deleted') {
                            var kids = $(skdeleted).parent("div").children(".from");
                            var usernamedata = kids.text();
                            var usernamedd = usernamedata.cleanup();
                            var someNumbers = [1, 2];
                            var adminMessage = {
                              "message": "[SK-Live] " + usernamedata + " 已被ban",
                              "from": "", "style": "admin"

                            };
                            if ($(".skdeleted" + usernamedd + "")[0]) {
                            } else {
                              window.App.__container__.lookup("controller:chat").get("currentRoom").addMessage(adminMessage);
                              $('span[class="deleted"]').attr('class', "skdeleted" + usernamedd + " deleted");
                            }
                          }
                        })
                        var message = document.getElementsByClassName('message');
                        [].slice.call(message).forEach(function (skmessage) {
                          var pclass = $(skmessage).parent("li").attr('class');
                          var pcclass = $(skmessage).parent("div").attr('class');
                          if (pcclass) {
                            if ($(skmessage).parent("div").data("sender")) {
                              var pccclass = '-1';
                            } else {
                              var pccclass = pcclass.match("conversation-chat-line");
                            }
                          } else {
                            var pccclass = '-1';
                          }
                          var changed = skmessage.className.indexOf("skClass");
                          if (pccclass != '-1' || changed >= 0) {
                          } else {
                            var a = skmessage.textContent;
                            var aa = skmessage.innerHTML;
                            if (a.match(/\[s\]/g)) {
                              var setimg = getCookie("setimg");
                              if (setimg != 'off') {
                                var start = a.indexOf('[s]');
                                var end = a.indexOf('e]');
                                var eend = aa.indexOf('/a>');
                                if (end > start && end >= 0 && start >= 0) {
                                  var b = a.substring(start, end); // contents between #start# and #end#
                                  var c = a.substring(0, start); // w/e before #start#
                                  var d = aa.substring(eend + 3).replace('[e]', '').replace('[s]', '');  // w/e after #end#
                                  b = b.replace('[s]', '').replace('[', '').replace(/ /g, '').replace(/[\r\n]/g, "");
                                  if (b.match(/youtu/g)&&!b.match(/img/g)&&!b.match(/jpg/g)) {
                                    if (b.match(/watch?/g)) {
                                      v = b.replace('https://www.youtube.com/watch?v=', '').replace('https://youtu.be/', '').replace('https://www.youtube.com/embed/', '').replace('&feature=youtu.be', '');
                                    } else {
                                      v = b.replace('https://www.youtube.com/watch?v=', '').replace('https://youtu.be/', '').replace('https://www.youtube.com/embed/', '').replace('&feature=youtu.be', '');
                                      var t = getParameterByName('t', url);
                                    }
                                    var e = '<iframe width="300" height="150" src="https://www.youtube.com/embed/' + v + '" frameborder="0" allowfullscreen></iframe>';
                                  } else if (b.match(/steampowered/g) || b.match(/steamcommunity/g)) {
                                      var number = Math.floor((Math.random() * 100000) + 1);
                                      burl = b.match("app/([0-9]+)");
                                      if (burl) {
                                        var e = '<iframe id="' + number + '" width="100%" height="190px" src="https://store.steampowered.com/widget/' + burl[1] + '" frameborder="0" allowfullscreen></iframe>';
                                      } else {
                                        var e = '<a href="' + b + '" target="_blank">[SK-Live]錯誤steam網址</a>';
                                      }
                                    } else if (b.match(/static-cdn.jtvnw.net/g)) {
                                        var e = '<a href="' + b + '" target="_blank">[SK-Live]此域名限制圖片外連</a>';
									} else if (b.match(/.webm/g) || b.match(/.mp4/g)) {
										var number = Math.floor((Math.random() * 100000) + 1);
                                        var e = '<video id="' + number + '" onclick="vodgif('+number+');" controls="" loop="" muted="" style="max-height: 200px;  max-width: 250px;" src="' + b + '"></video>';
                                    } else {
                                        var number = Math.floor((Math.random() * 100000) + 1);
                                        var e = '<a href="' + b + '" target="_blank"><img id="' + number + '" alt="[s]' + b + '[e]" src="' + b.replace('gifv', 'gif') + '" style="max-height: 200px;  max-width: 250px;  vertical-align: text-bottom;"/></a>';
                                      }
								  a = c + e + d; // result
                                  skmessage.innerHTML = a;
                                  $('#' + number).load(function () {
                                    scroller();
                                  });
                                  scroller();
                                  console.log(e);  
                                  }
                                }
                              }
                            if (a.match("www.twitch.tv/(.*)")) {
                              var userid = a.match("www.twitch.tv/(.*)");
                              var theslash = userid[1].split("/").length - 1;
                              console.log(userid);
                              if (theslash == 0 && userid != 'settings') {
                                var userid = userid[1].split(" ");
                                var someNumbers = [1, 2];
                                if (userid[0] != 'settings') {
									var b = "<a href='http://live.sk-knower.com/" + userid[0] + "' target='_blank'><button type='button' original-title='在SKLive上觀看" + userid[0] + "' class='sk_icon_bottom tooltip' style='position: inherit !important;display: inline !important;opacity: inherit !important;margin: 0PX;line-height: 20px;padding: 5px 0px 5px 5px;background: #0089ff;'><img src='https://acg.sk-knower.com/acgsk.png' height='20' width='20' style='left: 0px;'><span style='background-color: rgb(42, 96, 230);padding: 8px 5px 8px 5px;margin-left: 5px;'>在SKLive上觀看" + userid[0] + "</span></button></a>";
                                  a = skmessage.innerHTML+"<br>"+b;
								  skmessage.innerHTML = a;
                                }								
                              }
                            }
                            if (a.match("!skwatch_(.*)")) {
                              var userid = a.match("!skwatch_(.*)");
                              var userid = userid[1].split(" ");
                              var a = "<a href='http://live.sk-knower.com/" + userid[0] + "' target='_blank'><button type='button' original-title='在SKLive上觀看" + userid[0] + "' class='sk_icon_bottom tooltip' style='position: inherit !important;display: inline !important;opacity: inherit !important;margin: 0PX;line-height: 20px;padding: 5px 0px 5px 5px;background: #0089ff;'><img src='https://acg.sk-knower.com/acgsk.png' height='20' width='20' style='left: 0px;'><span style='background-color: rgb(42, 96, 230);padding: 8px 5px 8px 5px;margin-left: 5px;'>在SKLive上觀看" + userid[0] + "</span></button></a>";
                              var repthis = "!skwatch_" + userid[0];
                              var afterrepthis = skmessage.innerHTML.replace(repthis, '');
                              skmessage.innerHTML = a + afterrepthis;
                              scroller();
                            }

                            if (a.match("!sklive_sundayla123") && commandcd >= 1) {
                              var someNumbers = [1, 2];
                              var adminMessage = {
                                "message": "SKLive作者sundayla123",
                                "from": "", "style": "admin"

                              };
                              window.App.__container__.lookup("controller:chat").get("currentRoom").addMessage(adminMessage);
                            }
                            if (a.match("!sklive_list") && commandcd >= 1) {
                              var someNumbers = [1, 2];
                              var adminMessage = {
                                "message": "中文直播就在SKLive http://live.sk-knower.com/",
                                "from": "", "style": "admin"

                              };
                              window.App.__container__.lookup("controller:chat").get("currentRoom").addMessage(adminMessage);
                            }

                            if (a.match("!sklive_adlist")) {
                              var a = "<a href='http://live.sk-knower.com/' target='_blank'><button type='button' original-title='立即瀏覽SKLive' class='sk_icon_bottom tooltip' style='position: inherit !important;display: inline !important;opacity: inherit !important;margin: 0PX;line-height: 20px;padding: 5px 0px 5px 5px;background: #0089ff;'><img src='https://acg.sk-knower.com/acgsk.png' height='20' width='20' style='left: 0px;'><span style='background-color: rgb(42, 96, 230);padding: 8px 5px 8px 5px;margin-left: 5px;'>立即瀏覽SKLive搜尋更多中文直播!</span></button></a>";
                              skmessage.innerHTML = a;
                              scroller();
                            }

                            if (a.match("!sklive_skchat") && commandcd >= 1) {
                              var someNumbers = [1, 2];
                              var adminMessage = {
                                "message": "直播畫面聊天室 http://live.sk-knower.com/skchat",
                                "from": "", "style": "admin"

                              };
                              window.App.__container__.lookup("controller:chat").get("currentRoom").addMessage(adminMessage);
                            }
                            if (a.match("!sklive_dashboard") && commandcd >= 1) {
                              var someNumbers = [1, 2];
                              var adminMessage = {
                                "message": "實況主控制中心 http://live.sk-knower.com/dashboard",
                                "from": "", "style": "admin"

                              };
                              window.App.__container__.lookup("controller:chat").get("currentRoom").addMessage(adminMessage);
                            }

                            if (a.match("!acgsk")) {
                              var userid = a.match("!acgsk(.*)");
                              var userid = userid[1].replace(/ /g, '');
                              console.log(userid);
                              if (userid == '') {
                                var userid = channelid;
                              }
                              var someNumbers = [1, 2];
                              var adminMessage = {
                                "message": "SKRecent" + userid,
                                "from": "", "style": "admin"

                              };
                              window.App.__container__.lookup("controller:chat").get("currentRoom").addMessage(adminMessage);
                            }
                            if (a.match("SKRecent(.*)")) {
                              var userid = a.match("SKRecent(.*)");
                              console.log(userid);
                              var userid = userid[1].replace(/ /g, '');
                              console.log(userid);
                              if (userid == '') {
                                var userid = channelid;
                              }
                              $.getJSON("https://live.sk-knower.com/lib/acg/plugincomment.php?gid=" + userid + "&search=yes&callback=?", function (comment) {
                                if (comment.comment != "") {
                                  var a = userid + "最近的遊戲評論:<a href='http://acg.sk-knower.com/game/" + comment.comment[0].gameid + "' target='_blank' style='text-decoration: none;'><div style='width: 320px;background: #00c2ff;position: relative;display: flex;display: -webkit-flex;flex-wrap: wrap;-webkit-flex-wrap: wrap;justify-content: space-between;-webkit-justify-content: space-between;overflow: hidden;'><div style='width: 60px;position: relative;height: 89px;background-position: center;background-size: cover;background-repeat: no-repeat;background-image: url(" + comment.comment[0].cover + ");'></div><div style='width: 260px;'><div class='cmtitle' style='margin: 0px;height: 29px;line-height: 29px;padding-left: 5px;font-weight: 800;color: white;overflow: auto;'>" + comment.comment[0].title + "</div><span style='position: absolute;top: 0px;right: 0px;background: #009eda;color: white;padding: 5px;'>" + comment.comment[0].totalmark + "分</span><div style='background: rgba(0, 0, 0, 0.64) !important;color: white;padding: 0px 2px;max-height: 60px;height: 100%;overflow: hidden;'><div>" + comment.comment[0].gamename + "</div><div style='font-size: 12px;'>" + comment.comment[0].content + "</div></div></div></div></a>";
                                }
                                skmessage.innerHTML = a;
                                scroller();
                              });
                            }

                            if (a.match(/\[S\]/g)) {
                              if (setimg != 'off') {
                                var start = a.indexOf('[S]');
                                var end = a.indexOf('E]');
                                var eend = aa.indexOf('/a>');
                                if (end > start && end >= 0 && start >= 0) {
                                  var b = a.substring(start, end); // contents between #start# and #end#
                                  var c = a.substring(0, start); // w/e before #start#
                                  var d = aa.substring(eend + 3).replace('[E]', '').replace('[S]', '');  // w/e after #end#
                                  b = b.replace('[S]', '').replace('[', '').replace(/ /g, '').replace(/[\r\n]/g, "");
                                  var number = Math.floor((Math.random() * 1000) + 1);
                                  var e = '<a href="' + b + '" target="_blank"><img id="' + number + '" alt="[S]' + b + '[E]" src="' + b + '" style="max-height: 200px;  max-width: 250px;  vertical-align: text-bottom;"/></a>';
                                  a = c + e + d; // result
                                  skmessage.innerHTML = a;
                                  $('#' + number).load(function () {
                                    scroller();
                                  });
                                  console.log(e);
                                }
                              }
                            }
                            if (a.match(/\[start\]/g)) {
                              var start = a.indexOf('[start]');
                              var end = a.indexOf('end]');
                              if (end > start && end >= 0 && start >= 0) {
                                var b = a.substring(start, end); // contents between #start# and #end#
                                var c = a.substring(0, start); // w/e before #start#
                                var d = a.substring(end + 4);  // w/e after #end#
                                b = b.replace('[start]', '').replace('[', '').replace(/ /g, '').replace(/[\r\n]/g, "");
                                var number = Math.floor((Math.random() * 1000) + 1);
                                var e = '<a href="' + b + '" target="_blank"><img id="' + number + '" alt="[start]' + b + '[end]" src="' + b + '" style="max-height: 200px;  max-width: 250px;  vertical-align: text-bottom;"/></a>';
                                a = c + e + d; // result
                                skmessage.innerHTML = a;
                                $('#' + number).load(function () {
                                  scroller();
                                });
                                console.log(e);
                              }
                            }
                            if (a.match(/\[img\]/g)) {
                              if (setimg != 'off') {
                                var start = a.indexOf('[img]');
                                var end = a.indexOf('/img]');
                                if (end > start && end >= 0 && start >= 0) {
                                  var b = a.substring(start, end); // contents between #start# and #end#
                                  var c = a.substring(0, start); // w/e before #start#
                                  var d = a.substring(end + 5);  // w/e after #end#
                                  b = b.replace('[img]', '').replace('[', '').replace(/ /g, '').replace(/[\r\n]/g, "");
                                  if (b.match(/(static-cdn.jtvnw.net)/g)) {
                                    var e = '<a href="' + b + '" target="_blank">[SK-Live]此域名限制圖片外連</a>';
                                  } else {
                                    var number = Math.floor((Math.random() * 1000) + 1);
                                    var e = '<a href="' + b + '" target="_blank"><img id="' + number + '" alt="[img]' + b + '[/img]" src="' + b + '" style="max-height: 200px;  max-width: 250px;  vertical-align: text-bottom;"/></a>';
                                  }
                                  a = c + e + d; // result
                                  skmessage.innerHTML = a;
                                  $('#' + number).load(function () {
                                    scroller();
                                  });
                                  console.log(e);
                                }
                              }
                            }
                            if (a.match(/\[IMG\]/g)) {
                              if (setimg != 'off') {
                                var start = a.indexOf('[IMG]');
                                var end = a.indexOf('/IMG]');
                                if (end > start && end >= 0 && start >= 0) {
                                  var b = a.substring(start, end); // contents between #start# and #end#
                                  var c = a.substring(0, start); // w/e before #start#
                                  var d = a.substring(end + 5); // w/e after #end#
                                  b = b.replace('[IMG]', '').replace('[', '').replace(/ /g, '').replace(/[\r\n]/g, "");
                                  if (b.match(/(static-cdn.jtvnw.net)/g)) {
                                    var e = '<a href="' + b + '" target="_blank">[SK-Live]此域名限制圖片外連</a>';
                                  } else {
                                    var number = Math.floor((Math.random() * 1000) + 1);
                                    var e = '<a href="' + b + '" target="_blank"><img id="' + number + '" alt="[IMG]' + b + '[/IMG]" src="' + b + '" style="max-height: 200px;  max-width: 250px;  vertical-align: text-bottom;"/></a>';
                                  }
                                  a = c + e + d; // result
                                  skmessage.innerHTML = a;
                                  console.log(e);
                                  $('#' + number).load(function () {
                                    scroller();
                                  });
                                }
                              }
                            }
                            if (a.match(/sk_vote_a/i)) {
                              if ($("#sk_timmer").text() != '投票結束') {
                                var str = $("#skitem1").text();
                                skmessage.innerHTML = a + ' <span class="mentioning">Vote A:' + str + '</span>';
                              }
                            }
                            if (a.match(/sk_vote_b/i)) {
                              if ($("#sk_timmer").text() != '投票結束') {
                                var str = $("#skitem2").text();
                                skmessage.innerHTML = a + ' <span class="mentioning">Vote B:' + str + '</span>';
                              }
                            }
                            if (a.match(/sk_vote_c/i)) {
                              if ($("#sk_timmer").text() != '投票結束') {
                                var str = $("#skitem3").text();
                                skmessage.innerHTML = a + ' <span class="mentioning">Vote C:' + str + '</span>';
                              }
                            }
                            if (a.match(/sk_vote_d/i)) {
                              if ($("#sk_timmer").text() != '投票結束') {
                                var str = $("#skitem4").text();
                                skmessage.innerHTML = a + ' <span class="mentioning">Vote D:' + str + '</span>';
                              }
                            }
                            if (a.match(/\[p\]/g)) {
                              var start = a.indexOf('[p]');
                              var end = a.indexOf('i]');
                              var eend = aa.indexOf('[i]');
                              if (end > start && end >= 0 && start >= 0) {
                                var b = a.substring(start, end); // contents between #start# and #end#
                                var c = a.substring(0, start); // w/e before #start#
                                var d = aa.substring(eend + 3).replace('[i]', '');  // w/e after #end#
                                b = b.replace('[p]', '').replace('[', '').replace(/ /g, '').replace(/[\r\n]/g, "").replace('http://www.pixiv.net/member_illust.php?mode=medium&illust_id=', '');
                                if (b == '' || b == 'P網id') {
                                  b = '52402701';
                                }
                                if (d.match(/18+/g)) {
                                  var e = '<span class="mentioned"><a href="https://www.pixiv.net/member_illust.php?mode=medium&illust_id=' + b + '" target="_blank" style="color: #FFFFFF;background-color: #000;">18+ pixiv id=' + b + '</a></span>';
                                } else {
                                  var plink = getCookie("plink");
                                  if (d.match(/show/g) || plink != 'off') {
                                    var number = Math.floor((Math.random() * 1000) + 1);
                                    e = '<a href="https://www.pixiv.net/member_illust.php?mode=medium&illust_id=' + b + '" target="_blank"><img id="' + number + '" alt="[p]' + b + '[i]" src="http://embed.pixiv.net/decorate.php?illust_id=' + b + '" style="max-height: 200px;  max-width: 250px;vertical-align: text-bottom;"/></a>';
                                  } else {
                                    var e = '<span class="mentioning"><a href="https://www.pixiv.net/member_illust.php?mode=medium&illust_id=' + b + '" target="_blank">pixiv id=' + b + '</a></span>';
                                  }
                                }
                                a = c + e + d; // result
                                var kids = $(skmessage).parent().children(".from");
                                var usernamedata = kids.text();
                                $('#sk_set11').html($('#sk_set11').html() + usernamedata + ' : ' + e + '<br>');
                                skmessage.innerHTML = a;
                                $('#' + number).load(function () {
                                  scroller();
                                });
                                console.log(e);
                              }
                            }
                            if (a.match(/\[y\]/g)) {
                              var twitter='';
                              var start = a.indexOf('[y]');
                              var end = a.indexOf('t]');
                              var eend = aa.indexOf('[t]');
                              if (end > start && end >= 0 && start >= 0) {
                                var b = a.substring(start, end); // contents between #start# and #end#
                                var c = a.substring(0, start); // w/e before #start#
                                var d = aa.substring(eend + 3).replace('[t]', '');  // w/e after #end#  https://www.youtube.com/embed/https://www.youtube.com/watch?time_continue=6&v=xxx?fs=0
                                b = b.replace(/[\r\n]/g, "").replace(/ /g, '').replace('[y]', '').replace('[', '');
								if (b.match(/影片連結/g)){}else{
                                if (b.match(/facebook/g)) {
                                  var e = '<iframe width="300" height="200" src="https://www.facebook.com/plugins/video.php?href=' + b + '&amp;show_text=0&amp;width=300&height=200" frameborder="0" allowfullscreen=""></iframe>';
                                } else if (b.match(/twitter/g)) {
                                  var e = '<blockquote class="twitter-video" data-lang="zh-tw"><a href="'+ b+'"></a></blockquote>';
                                  var twitter='true';
                                } else {
                                  if (b.match(/watch?/g)) {
                                    b = b.replace('https://www.youtube.com/watch?', '');
                                    var query = b;
                                    var vars = query.split("&");
                                    for (var i = 0; i < vars.length; i++) {
                                      var pair = vars[i].split("=");
                                      if (pair[0] == 'v') {
                                        b = pair[1];
                                      }
                                    }
                                  } else {
                                    b = b.replace('https://www.youtube.com/watch?v=', '').replace('https://youtu.be/', '').replace('https://www.youtube.com/embed/', '').replace('&feature=youtu.be', '');
                                  }
                                  var e = '<iframe width="300" height="150" src="https://www.youtube.com/embed/' + b + '" frameborder="0" allowfullscreen></iframe>';
                                }
                                a = c + e + d; // result
                                skmessage.innerHTML = a;
                                scroller();
                                if(twitter=='true'){
                                  $('body').append('<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>');
                                  setTimeout("scroller()", 1000);
                                }
                                console.log(e);
								}
                              }
                            }
                            if (a.match(/開始觀眾遊戲評分/g)) {
                              var kids = $(skmessage).parent().children(".from");
                              var usernamedata = kids.text().toLowerCase();
                              if (usernamedata == '') {
                                var usernamedata = $(skmessage).parent("div").children(".from").text().toLowerCase();
                              }
                              if (usernamedata == "sklivebot" || usernamedata == "sundayla123") {
                                var start = a.indexOf('開始觀眾遊戲評分:');
                                var end = a.indexOf(' 更多遊戲評');
                                if (end > start && end >= 0 && start >= 0) {
                                  var b = a.substring(start, end); // contents between #start# and #end#
                                  b = b.replace('開始觀眾遊戲評分:', '');
                                  $.getJSON("https://live.sk-knower.com/lib/acg/plugingame.php?gid=" + b + "&callback=?", function (comment) {
                                    $('#skgame_title').html("<a href='http://acg.sk-knower.com/game/" + comment.game[0].id + "' target='_blank' style='color: white;'><div style='background-image: url(" + comment.game[0].icon + ");height: 100px;width: 100%;background-position: center;background-size: contain;background-repeat: no-repeat;'></div><div id='acgn'>" + b + "</div></a>");
                                  });
                                  $("#acgskgame").show();
                                  $("#acgranking").show();
                                }
                              }
                            }
                            if (a.match(/遊戲評分進行中/g)) {
                              var kids = $(skmessage).parent().children(".from");
                              var usernamedata = kids.text().toLowerCase();
                              if (usernamedata == '') {
                                var usernamedata = $(skmessage).parent("div").children(".from").text().toLowerCase();
                              }
                              if (usernamedata == "sklivebot" || usernamedata == "sundayla123") {
                                var start = a.indexOf('[電玩SK]');
                                var end = a.indexOf(' 遊戲評分進');
                                if (end > start && end >= 0 && start >= 0) {
                                  var b = a.substring(start, end); // contents between #start# and #end#
                                  b = b.replace('[電玩SK] ', '');
                                  console.log(b);
                                  var name = $('#acgn').html();
                                  if (name != b) {
                                    $.getJSON("https://live.sk-knower.com/lib/acg/plugingame.php?gid=" + b + "&callback=?", function (comment) {
                                      $('#skgame_title').html("<a href='http://acg.sk-knower.com/game/" + comment.game[0].id + "' target='_blank' style='color: white;'><div style='background-image: url(" + comment.game[0].icon + ");height: 100px;width: 100%;background-position: center;background-size: contain;background-repeat: no-repeat;'></div><div id='acgn'>" + b + "</div></a>");
                                      $("#acgskgame").show();
                                      $("#acgranking").show();
                                    });
                                  }
                                }
                              }
                            }
                            if (a.match(/查看評論內容/g)) {
                              var kids = $(skmessage).parent().children(".from");
                              var usernamedata = kids.text().toLowerCase();
                              if (usernamedata == '') {
                                var usernamedata = $(skmessage).parent("div").children(".from").text().toLowerCase();
                              }
                              if (usernamedata == "sklivebot" || usernamedata == "sundayla123") {
                                $("#acgskgame").css("display", "none");
                                $("#acgranking").css("display", "none");
                              }
                            }
                            if (a.match(/\[v\]stop/g)) {
                              var kids = $(skmessage).parent().children(".from");
                              var usernamedata = kids.text().toLowerCase();
                              var badge = $(skmessage).parent("li").children(".badges");
                              var zbadge = badge.html();
                              var thechannel = $(".room-title").html();
                              if (usernamedata == '') {
                                var usernamedata = $(skmessage).parent("div").children(".from").text().toLowerCase();
                              }
                              console.log('台主' + thechannel);
                              console.log('發出' + usernamedata);
                              if (thechannel == 'ankgaminghk' && usernamedata == "gun0301") {
                                var usernamedata = 'ankgaminghk';
                              }
                              if (usernamedata == thechannel || usernamedata == "sundayla123" || usernamedata == "sklivebot") {
                                stopper = 'stop';
                              }
                            }

                            if (a.match(/\[v\]/g)) {
                              var kids = $(skmessage).parent().children(".from");
                              var usernamedata = kids.text().toLowerCase().replace(/[^a-zA-Z0-9_]/g, '');
                              ;
                              var badge = $(skmessage).parent("li").children(".badges");
                              var zbadge = badge.html();
                              var thechannel = $(".room-title").html();
                              if (usernamedata == '') {
                                var usernamedata = $(skmessage).parent("div").children(".from").text().toLowerCase();
                              }
                              console.log('台主' + thechannel);
                              console.log('發出' + usernamedata);
                              if (thechannel == 'ankgaminghk' && usernamedata == "gun0301") {
                                var usernamedata = 'ankgaminghk';
                              }
                              if (usernamedata == thechannel || usernamedata == "sundayla123" || usernamedata == "sklivebot") {
                                var start = a.indexOf('[v]');
                                var end = a.indexOf('e]');
                                if (end > start && end >= 0 && start >= 0) {
                                  var b = a.substring(start, end); // contents between #start# and #end#
                                  var c = a.substring(0, start); // w/e before #start#
                                  var d = a.substring(end + 2)  // w/e after #end#
                                  b = b.replace('[v]', '');
                                  var e = b;
                                  a = c + e + d; // result
                                  console.log(e);
                                  var intRegex = /[0-9 -()+]+$/;
                                  if (a.match(/t=/g)) {
                                    var t = b.split('t=')[1].split('n=')[0];
                                  }
                                  if (intRegex.test(t)) {
                                    if (t > '1') {
                                      timmer(t);
                                      $('#votename').text("");
                                      $('#totalvote').text("0");
                                      $('#vote_userid').text(kids.text() + '發動投票');
                                      count = 0;
                                      c2ount = 0;
                                      c3ount = 0;
                                      c4ount = 0;
                                      totalcount = 0;
                                      if (a.match(/n=/g)) {
                                        var ta = b.split('n=')[1].split('a=')[0];
                                        $('#vote_title').text(ta);
                                      }
                                      if (a.match(/a=/g)) {
                                        var ia = b.split('a=')[1].split('b=')[0];
                                        ia = ia.replace('[', '');
                                        if (ia == '') {
                                          $("#voteabox").css("display", "none");
                                          $('#count1').text('');
                                        } else {
                                          $("#voteabox").css("display", "block");
                                          va = 'open';
                                          $('#count1').text("" + count);
                                        }
                                      }
                                      if (a.match(/b=/g)) {
                                        var ib = b.split('b=')[1].split('c=')[0];
                                        ib = ib.replace('[', '');
                                        if (ib == '') {
                                          $("#votebbox").css("display", "none");
                                          $('#count2').text('');
                                        } else {
                                          $("#votebbox").css("display", "block");
                                          vb = 'open'
                                          $('#count2').text("" + count);
                                        }
                                      }
                                      if (a.match(/c=/g)) {
                                        var ic = b.split('c=')[1].split('d=')[0];
                                        ic = ic.replace('[', '');
                                        if (ic == '') {
                                          $("#votecbox").css("display", "none");
                                          $('#count3').text('');
                                        } else {
                                          $("#votecbox").css("display", "block");
                                          vc = 'open'
                                          $('#count3').text("" + count);
                                        }
                                      }
                                      if (a.match(/d=/g)) {
                                        var idz = b.split('d=')[1].split('[')[0];
                                        idz = idz.replace('[', '');
                                        if (idz == '') {
                                          $("#votedbox").css("display", "none");
                                          $('#count4').text('');
                                        } else {
                                          $("#votedbox").css("display", "block");
                                          vd = 'open'
                                          $('#count4').text("" + count);
                                        }
                                      }
                                      $('#skitem1').text(ia);
                                      $('#skitem2').text(ib);
                                      $('#skitem3').text(ic);
                                      $('#skitem4').text(idz);

                                      $("#sk_skill").show();

                                      console.log(usernamedata + "發動倒數");
                                      skmessage.innerHTML = "<span class='mentioning'>[SKLive投票開始]" + ta + "</span>選項:A:" + ia + ",B:" + ib + ",C:" + ic + ",D:" + idz + "";
                                    } else {
                                    }
                                  }
                                  scroller();
                                }
                              }
                            }

                            if (typeof va === 'undefined') {
                            } else {
                              if (va == 'open') {
                                if (a.match(/sk_vote_a/i)) {
                                  var kids = $(skmessage).parent().children(".from");
                                  var usernamedata = kids.text().replace('(', '').replace(')', '');
                                  var namestore = $('#votename').text();
                                  var re = new RegExp(usernamedata, 'gi');
                                  if (namestore.match(re)) {
                                  } else {
                                    var adda = $('#count1').text();
                                    count++;
                                    $('#count1').text(count);
                                    $('#votename').html($('#votename').html() + usernamedata + ' : A<br>');
                                    totalcount++;
                                    $('#totalvote').text(totalcount);
                                  }
                                }
                              }
                            }
                            if (typeof vb === 'undefined') {
                            } else {
                              if (vb == 'open') {
                                if (a.match(/sk_vote_b/i)) {
                                  var kids = $(skmessage).parent().children(".from");
                                  var usernamedata = kids.text().replace('(', '').replace(')', '');
                                  var namestore = $('#votename').text();
                                  var re = new RegExp(usernamedata, 'gi');
                                  if (namestore.match(re)) {
                                  } else {
                                    var adda = $('#count2').text();
                                    c2ount++;
                                    $('#count2').text(c2ount);
                                    $('#votename').html($('#votename').html() + usernamedata + ' : B<br>');
                                    totalcount++;
                                    $('#totalvote').text(totalcount);
                                  }
                                }
                              }
                            }
                            if (typeof vc === 'undefined') {
                            } else {
                              if (vc == 'open') {
                                if (a.match(/sk_vote_c/i)) {
                                  var kids = $(skmessage).parent().children(".from");
                                  var usernamedata = kids.text().replace('(', '').replace(')', '');
                                  var namestore = $('#votename').text();
                                  var re = new RegExp(usernamedata, 'gi');
                                  if (namestore.match(re)) {
                                  } else {
                                    var adda = $('#count3').text();
                                    c3ount++;
                                    $('#count3').text(c3ount);
                                    $('#votename').html($('#votename').html() + usernamedata + ' : C<br>');
                                    totalcount++;
                                    $('#totalvote').text(totalcount);
                                  }
                                }
                              }
                            }
                            if (typeof vd === 'undefined') {
                            } else {
                              if (vd == 'open') {
                                if (a.match(/sk_vote_d/i)) {
                                  var kids = $(skmessage).parent().children(".from");
                                  var usernamedata = kids.text().replace('(', '').replace(')', '');
                                  var namestore = $('#votename').text();
                                  var re = new RegExp(usernamedata, 'gi');
                                  if (namestore.match(re)) {
                                  } else {
                                    var adda = $('#count4').text();
                                    c4ount++;
                                    $('#count4').text(c4ount);
                                    $('#votename').html($('#votename').html() + usernamedata + ' : D<br>');
                                    totalcount++;
                                    $('#totalvote').text(totalcount);
                                  }
                                }
                              }
                            }
                            for (var i = 0; i < halloweenlomore.length; i++) {
                              var iconvar = halloweenlomore[i];
                              var regex = iconvar.code;
                              if (a.match(regex)) {
                                var width = iconvar["width"];
                                var height = iconvar["height"];
                                var fwidth = width * (1 / height);
                                skmessage.innerHTML = skmessage.innerHTML.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                                scroller();
                              }
                            }
                            for (var i = 0; i < hkg2.length; i++) {
                              var iconvar = hkg2[i];
                              var regex = iconvar.code;
                              if (a.match(regex)) {
                                var width = iconvar["width"];
                                var height = iconvar["height"];
                                var fwidth = width * (1 / height);
                                skmessage.innerHTML = skmessage.innerHTML.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                                scroller();
                              }
                            }
                            for (var i = 0; i < lomoreList.length; i++) {
                              var regex = lomoreList[i].code;
                              bbbq = skmessage.innerHTML;
                              if (a.match(regex)) {
                                var width = lomoreList[i]["width"];
                                var height = lomoreList[i]["height"];
                                var fwidth = width * (1 / height);
                                bbbq = bbbq.replace(regex, "<img class='skicon' src='" + lomoreList[i].src + "' height='" + height + "' width='" + width + "' alt='" + lomoreList[i].alt + "' data-lm='lm'></img>");
                              }
                              var alllomore = lomoreList.length - 1;
                              if (i == alllomore) {
                                for (var i = 0; i < hkg1.length; i++) {
                                  var iconvar = hkg1[i];
                                  var regex = iconvar.code;
                                  if (bbbq.match(regex)) {
                                    var width = iconvar["width"];
                                    var height = iconvar["height"];
                                    var fwidth = width * (1 / height);
                                    bbbq = bbbq.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                                    scroller();
                                  }
                                }
                                if (bbbq.match(/data-lm/g)) {
                                  scroller();
                                }
                              }
                              skmessage.innerHTML = bbbq;
                            }

                            for (var i = 0; i < Set1List.length; i++) {
                              var iconvar = Set1List[i];
                              var regex = iconvar.code;
                              if (a.match(regex)) {
                                var width = iconvar["width"];
                                var height = iconvar["height"];
                                var fwidth = width * (1 / height);
                                skmessage.innerHTML = skmessage.innerHTML.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                                scroller();
                              }
                            }
                            for (var i = 0; i < Set2List.length; i++) {
                              var iconvar = Set2List[i];
                              var regex = iconvar.code;
                              if (a.match(regex)) {
                                var width = iconvar["width"];
                                var height = iconvar["height"];
                                var fwidth = width * (1 / height);
                                skmessage.innerHTML = skmessage.innerHTML.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                                scroller();
                              }
                            }
                            for (var i = 0; i < Set3List.length; i++) {
                              var iconvar = Set3List[i];
                              var regex = iconvar.code;
                              if (a.match(regex)) {
                                var width = iconvar["width"];
                                var height = iconvar["height"];
                                var fwidth = width * (1 / height);
                                skmessage.innerHTML = skmessage.innerHTML.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                                scroller();
                              }
                            }
                            for (var i = 0; i < Set4List.length; i++) {
                              var iconvar = Set4List[i];
                              var regex = iconvar.code;
                              if (a.match(regex)) {
                                var width = iconvar["width"];
                                var height = iconvar["height"];
                                var fwidth = width * (1 / height);
                                skmessage.innerHTML = skmessage.innerHTML.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                                scroller();
                              }
                            }
                            for (var i = 0; i < Set5List.length; i++) {
                              var iconvar = Set5List[i];
                              var regex = iconvar.code;
                              if (a.match(regex)) {
                                var width = iconvar["width"];
                                var height = iconvar["height"];
                                var fwidth = width * (1 / height);
                                skmessage.innerHTML = skmessage.innerHTML.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                                scroller();
                              }
                            }
                            for (var i = 0; i < Set6List.length; i++) {
                              var iconvar = Set6List[i];
                              var regex = iconvar.code;
                              if (a.match(regex)) {
                                var width = iconvar["width"];
                                var height = iconvar["height"];
                                var fwidth = width * (1 / height);
                                skmessage.innerHTML = skmessage.innerHTML.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                                scroller();
                              }
                            }
                            for (var i = 0; i < Set7List.length; i++) {
                              var iconvar = Set7List[i];
                              var regex = iconvar.code;
                              if (a.match(regex)) {
                                var width = iconvar["width"];
                                var height = iconvar["height"];
                                var fwidth = width * (1 / height);
                                skmessage.innerHTML = skmessage.innerHTML.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                                scroller();
                              }
                            }
                            for (var i = 0; i < eventlist.length; i++) {
                              var iconvar = eventlist[i];
                              var regex = iconvar.code;
                              if (a.match(regex)) {
                                var width = iconvar["width"];
                                var height = iconvar["height"];
                                var fwidth = width * (1 / height);
                                skmessage.innerHTML = skmessage.innerHTML.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                                scroller();
                              }
                            }
                            for (var i = 0; i < event2list.length; i++) {
                              var iconvar = event2list[i];
                              var regex = iconvar.code;
                              if (a.match(regex)) {
                                var width = iconvar["width"];
                                var height = iconvar["height"];
                                var fwidth = width * (1 / height);
                                skmessage.innerHTML = skmessage.innerHTML.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                                scroller();
                              }
                            }
                            for (var i = 0; i < hiddenlist.length; i++) {
                              var iconvar = hiddenlist[i];
                              var regex = iconvar.code;
                              if (a.match(regex)) {
                                var width = iconvar["width"];
                                var height = iconvar["height"];
                                var fwidth = width * (1 / height);
                                skmessage.innerHTML = skmessage.innerHTML.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                                scroller();
                              }
                            }

                            $.each(uicon, function (i, item) {
                              var aregex = new RegExp(uicon[i].alt, "gi");
                              if (a.match(aregex)) {
                                skmessage.innerHTML = skmessage.innerHTML.replace(aregex, "<img class='skicon' src='" + uicon[i].src + "' height='" + uicon[i].height + "' width='" + uicon[i].width + "' alt='" + uicon[i].alt + "'></img>");
                                scroller();
                              }
                              ;
                            });

                            skmessage.className += " skClass";
                          }
                        });
                        var nowtitle = window.location.pathname;
                        if (thistitle == nowtitle) {
                          setTimeout(updateCounter, 0);
                        } else {
                          console.log('(`・ω・´)Change');
                          if (document.getElementById('sk_caht_bg') == null) {
                            waitForElement();
                          } else {


                            function showpanel() {
                              if (document.getElementById('sk_caht_bg') == null) {
                                waitForElement();
                              } else {
                                thistitle = window.location.pathname;
                                setTimeout(updateCounter, 0);
                              }
                            }

                            setTimeout(showpanel, 1000)
                          }
                        }

                      })();
                    });
                  }, true);
                }
                foreverloop();

                if (foreverloop == false) {
                  foreverloop();
                }
////
                $.getScript("https://live.sk-knower.com/lib/chat_icon.js", function () {
                  for (var i = 0; i < Set1List.length; i++) {
                    var icon = Set1List[i];
                    $("#sk_set1").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' height='40' alt='" + icon.alt + "' title='" + icon.dis + "' original-title='" + icon.dis + "'>");
                  }
                  for (var i = 0; i < Set2List.length; i++) {
                    var icon = Set2List[i];
                    var title = icon.alt.replace('sk_', '');
                    $("#sk_set3").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' height='40' alt='" + icon.alt + "' title='" + title + "' original-title='" + title + "'>");
                  }
                  $("#sk_set3").append('<div onclick="set7();" style="background: url(https://live.sk-knower.com/icon/img/hidden_door.png);width: 30px;height: 30px;display: inline-block;"></div>');
                  for (var i = 0; i < Set3List.length; i++) {
                    var icon = Set3List[i];
                    var title = icon.alt.replace('sk_', '');
                    $("#sk_set6").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' height='40' alt='" + icon.alt + "' title='" + title + "'  original-title='" + title + "'>");
                  }
                  for (var i = 0; i < Set4List.length; i++) {
                    var icon = Set4List[i];
                    var title = icon.alt.replace('sk_', '');
                    $("#sk_set8").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' height='40' alt='" + icon.alt + "' title='" + title + "'  original-title='" + title + "'>");
                  }
                  for (var i = 0; i < Set5List.length; i++) {
                    var icon = Set5List[i];
                    var title = icon.alt.replace('sk_', '');
                    $("#sk_set2").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' height='40' alt='" + icon.alt + "' title='" + title + "'  original-title='" + title + "'>");
                  }
                  for (var i = 0; i < Set6List.length; i++) {
                    var icon = Set6List[i];
                    var title = icon.alt.replace('sk_', '');
                    if (icon.dis != null) {
                      title = icon.dis;
                    }
                    $("#sk_set5").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' height='40' alt='" + icon.alt + "' title='" + title + "'  original-title='" + title + "'>");
                  }
                  for (var i = 0; i < Set7List.length; i++) {
                    var icon = Set7List[i];
                    var title = icon.alt.replace('sk_', '');
                    $("#sk_set17").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' height='40' alt='" + icon.alt + "' title='" + icon.dis + "'  original-title='" + icon.dis + "'>");
                  }
                  for (var i = 0; i < hkg1.length; i++) {
                    var icon = hkg1[i];
                    var alt = icon.alt;
                    if (alt == '') {
                      var alt = icon.cl;
                      var title = icon.cl;
                    } else {
                      var title = icon.alt;
                    }
                    $("#sk_set9").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' alt='" + alt + "' title='" + title + "'  original-title='" + title + "'>");
                  }
                  for (var i = 0; i < lomoreList.length; i++) {
                    var icon = lomoreList[i];
                    var alt = icon.alt;
                    if (alt == '') {
                      var alt = icon.cl;
                      var title = icon.cl;
                    } else {
                      var title = icon.alt;
                    }
                    $("#sk_set16").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' alt='" + alt + "' title='" + title + "' original-title='" + title + "'>");
                  }
                  for (var i = 0; i < hkg2.length; i++) {
                    var icon = hkg2[i];
                    var title = icon.alt.replace('sk_', '');
                    $("#sk_set5").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' height='32' alt='" + icon.alt + "' title='" + title + "' original-title='" + title + "'>");
                  }
                  for (var i = 0; i < eventlist.length; i++) {
                    var icon = eventlist[i];
                    var title = icon.alt.replace('skevent_', '');
                    $("#eventiconset").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' height='32' alt='" + icon.alt + "' title='" + title + "' original-title='" + title + "'>");
                  }
                  for (var i = 0; i < event2list.length; i++) {
                    var icon = event2list[i];
                    var title = icon.alt.replace('skevent_', '');
                    $("#event2iconset").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' height='32' alt='" + icon.alt + "' title='" + title + "' original-title='" + title + "'>");
                  }
                  for (var i = 0; i < emoicon.length; i++) {
                    var icon = emoicon[i].code;
                    $("#sk_set4").append("<div type='iconbotton' class='sk_icon_bottom tooltip' style='width: 90.7px;text-align: center;float: left;white-space: nowrap;overflow: hidden;' title='" + icon + "' original-title='" + icon + "' onclick='pasteemoicon(this.innerHTML);'>" + icon + "</div>");
                  }
                  for (var i = 0; i < hiddenlist.length; i++) {
                    var icon = hiddenlist[i];
                    var title = icon.alt.replace('sk_', '');
                    $("#sk_set7").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' height='40' alt='" + icon.alt + "' title='" + title + "' original-title='" + title + "'>");
                  }
                  $('.tooltip').tipsy();
                });

////
                function getId(id) {
                  return document.getElementById(id)
                };

                function dragPrototype(dragControl, dragContent) {
                  var _x = 0, _y = 0, _drag = false, cw, ch, sw, sh;
                  var dragContent = typeof dragContent == "undefined" ? dragControl : dragContent;

                  getId(dragControl).onmousedown = function (e) {
                    _drag = true;

                    e = window.event ? window.event : e;
                    cw = document.documentElement.clientWidth;
                    ch = document.documentElement.clientHeight;
                    sw = parseInt(getId(dragContent).offsetWidth);
                    sh = parseInt(getId(dragContent).offsetHeight);

                    _x = e.clientX - getId(dragContent).offsetLeft;
                    _y = e.clientY - getId(dragContent).offsetTop;

                    document.onmousemove = function (e) {
                      if (_drag) {
                        e = window.event ? window.event : e;
                        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
                        document.body.setCapture && getId(dragContent).setCapture();

                        var x = e.clientX - _x;
                        var y = e.clientY - _y;

                        var myElem = document.getElementById('ember1131');
                        if (myElem == null) {
                          x = x < -250 ? x = -250 : x < (cw - sw + 250) ? x : (cw - sw + 250);
                          y = y < 0 ? y = 0 : y < (ch - sh + 100) ? y : (ch - sh + 100);
                        } else {
                          x = x < -99999 ? x = -99999 : x < (cw - sw + 250) ? x : (cw - sw + 250);
                          y = y < -99999 ? y = -99999 : y < (ch - sh + 100) ? y : (ch - sh + 100);
                        }
                        getId(dragContent).style.left = x + "px";
                        getId(dragContent).style.top = y + "px";
                      }
                      ;
                    };

                    document.onmouseup = function () {
                      _drag = false;
                      document.body.releaseCapture && getId(dragContent).releaseCapture();
                    };
                  };
                }

                dragPrototype("a", "sk_icon_set");
                dragPrototype("b", "sk_skill");
                dragPrototype("c", "sk_news");
                dragPrototype("dc", "acgskgame");

                var sktext = getCookie("sktext");
                if (sktext == '') {
                  setCookie("sktext", "12", 365);
                }
                var sktext = getCookie("sktext");
                var first = document.getElementById("textbox1");
                first.value = sktext;
                var skupdate = getCookie("skupdate9");
                $.getJSON("https://live.sk-knower.com/setcookies.php", function () {
                });
                if (skupdate == '') {
                  $("#sk_news").show();
                  setCookie("experiment_overrides", "{%228ace0f50-8afd-424a-a086-3e61b3e66da0%22:%22on%22}", 6);
                }
                jQuery.fn.extend({
                  insertAtCaret: function (myValue) {
                    return this.each(function (i) {
                      if (document.selection) {
                        //For browsers like Internet Explorer
                        this.focus();
                        var sel = document.selection.createRange();
                        sel.text = myValue;
                        this.focus();
                      }
                      else if (this.selectionStart || this.selectionStart == '0') {
                        //For browsers like Firefox and Webkit based
                        var startPos = this.selectionStart;
                        var endPos = this.selectionEnd;
                        var scrollTop = this.scrollTop;
                        this.value = this.value.substring(0, startPos) + myValue + this.value.substring(endPos, this.value.length);
                        this.focus();
                        this.selectionStart = startPos + myValue.length;
                        this.selectionEnd = startPos + myValue.length;
                        this.scrollTop = scrollTop;
                      } else {
                        this.value += myValue;
                        this.focus();
                      }
                    });
                  }
                });
                console.log(window.App.__container__.lookup("controller:chat").get("currentRoom"));
                var adminMessage = {
                  "message": "SK-Live",
                  "from": "", "style": "admin"
                };
//window.App.__container__.lookup("controller:chat").get("currentRoom").addMessage(adminMessage);

              }

              var mybody = document.getElementsByTagName("body");
              if (document.getElementById('channel') == null) {
                $.when(document.body.appendChild(content2)).then(function2());
              } else {
                setTimeout(function () {
                  var mes = document.getElementsByClassName('chat-container js-chat-container');
                  [].slice.call(mes).forEach(function (skttv_emo) {
                    skttv_emo.id = 'sk_ttv_emo';
                  });
                  var skemo = document.getElementById("sk_ttv_emo");
                  skemo.appendChild(content2);
                  var finalid = IdContent.replace(" - Twitch", "")
                  $(".js-cn-tabs--2").append('<dd class="cn-tabs__button"><button type="button" onclick="gousersk(channel);" original-title="在SKLive大屏幕觀看!" class="sk_icon_bottom tooltip" style="position: inherit !important;display: inline !important;opacity: inherit !important;margin: 0PX;line-height: 20px;padding: 5px 0px 5px 5px;margin-right: 15px;background: #0089ff;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;"><ccc style="margin-right: 5px;"><img src="http://acg.sk-knower.com/acgsk.png" height="20" width="20" style="left: 0px;"></ccc><span class="wosl" style="background-color: rgb(42, 96, 230);padding: 8px 5px 8px 5px;">在SKLive觀看直播</span></button></dd>');
                  function2();
                }, 2000);
              }


              $(document).keydown(function (event) {
                if (event.which == "18")
                  altlIsPressed = true;
              });

              $(document).keyup(function () {
                altlIsPressed = false;
              });

              var altlIsPressed = false;

              $('.ember-view.message-line.chat-line').live('click', function () {
                var ctrlclick = getCookie("setctrl");
                if (ctrlclick == '') {
                  if (altlIsPressed) {
                    var kids = $(this).children("div").children(".from");
                    var usernamedata = kids.text();
                    $(".textarea-contain").find("textarea").insertAtCaret('@' + usernamedata + ' ');
                    $(".textarea-contain").find("textarea").focus();
                    altlIsPressed = false;
                  }
                }
              });
//first load

              var sktext = getCookie("sktext");
              $("<style>.chat-line{ font-size: " + sktext + "px !important; }</style>").appendTo("head");
              $("#fontrange").val(sktext);
              var sklan = getCookie("sklan");
              if (sklan == 'eng') {
                eng();
              }
              var sk2dark = getCookie("sk2dark");
              if (sk2dark == '') {
                $("#cdarkoff").css("border-bottom", "4px solid #FFFFFF");
              } else {
                setdark();
              }
              var whiteborder = getCookie("dark2words");
              if (whiteborder == '') {
                $("#darkwordsoff").css("border-bottom", "4px solid #FFFFFF");
              } else {
                dark2words();
              }
              var setengid = getCookie("skengid");
              $('head').append('<link rel="stylesheet" id="onlyengid" type="text/css" href="">');
              if (setengid == '') {
              } else {
                setonlyeng();
              }
              var setctrl = getCookie("setctrl");
              if (setctrl == '') {
                $("#cctrlon").css("border-bottom", "4px solid #FFFFFF");
                $("#cctrloff").css("border-bottom", "");
              } else {
                $("#cctrloff").css("border-bottom", "4px solid #FFFFFF");
                $("#cctrlon").css("border-bottom", "");
              }
              var setimg = getCookie("setimg");
              if (setimg == '') {
                $("#imgtag").css("border-bottom", "4px solid #FFFFFF");
                $("#imgtagoff").css("border-bottom", "");
              } else {
                $("#imgtagoff").css("border-bottom", "4px solid #FFFFFF");
                $("#imgtag").css("border-bottom", "");
              }
              var plink = getCookie("plink");
              if (plink == 'on') {
                $("#plinkon").css("border-bottom", "4px solid #FFFFFF");
                $("#plinkoff").css("border-bottom", "");
              } else {
                $("#plinkoff").css("border-bottom", "4px solid #FFFFFF");
                $("#plinkon").css("border-bottom", "");
              }

//            var style = "";
//for (var i = 0; i < SKLiveiconList.length; i++) {
//                var width = SKLiveiconList[i]["width"]/2 + "px";
//                var height = SKLiveiconList[i]["height"]/2 + "px";
//				var src = SKLiveiconList[i]["src"];
//                var classname = "emo-sk-" + i;
//                style += "." + classname + "{background-image:url(" + src + ");background-size:contain;height:20px;width:" + width + ";}";
//}
//$('<style type="text/css">').text(style).appendTo("head"); var $chatScrollContent = $(".chat-messages .tse-scroll-content");

              function scroller() {
                var $chatScrollContent = $(".chat-messages").children('.tse-scroll-content');
                var $chatContent = $(".chat-lines");
                var scrollBottom = $chatContent.height() - $chatScrollContent.scrollTop() - $chatScrollContent.height();
                if (scrollBottom < '210') {
                  $chatScrollContent.scrollTop(999999);
                  $(".more-messages-indicator").click();
                  console.log('啟動( ´-ω ･)▄︻┻┳══━');
                }
              }


              $(function () {
                if ('415' > $(this).height()) {
                  $("#sk_icon_set").css({
                    "height": '220',
                  });
                  $(".tags_select").css({
                    "height": '142',
                  });
                } else {
                  $("#sk_icon_set").css({
                    "height": '380',
                  });
                  $(".tags_select").css({
                    "height": '300',
                  });
                }
                $(window).resize(function () {
                  if ('415' > $(this).height()) {
                    $("#sk_icon_set").css({
                      "height": '225',
                    });
                    $(".tags_select").css({
                      "height": '142',
                    });
                  } else {
                    $("#sk_icon_set").css({
                      "height": '380',
                    });
                    $(".tags_select").css({
                      "height": '300',
                    });
                  }

                });
              });
              setTimeout(function () {
                var logid = window.App.__container__.lookup("controller:chat").currentRoom.tmiRoom.session.nickname;
                var channelid = window.App.__container__.lookup("controller:chat").currentRoom.id;
                if (channelid == 'ankgaminghk' && logid == 'gun0301') {
                  logid = 'ankgaminghk';
                }
                if (channelid == 'ankgaminghk' && logid == 'avilun') {
                  logid = 'ankgaminghk';
                }
                if (channelid == 'skbear2725' && logid == 'sundayla123') {
                  logid = 'skbear2725';
                }
                if (channelid == logid) {
                  var noskicon = $("#ischannelboss").html();
                  if (noskicon == '') {
                    $("#ischannelboss").html('<button id="s13" type="button" class="sk_icon_bottom sktoptag" onclick="set13()">台主自訂SKLive表情設定</button>');
                    $(".textarea-contain").prepend('<a href="http://live.sk-knower.com/dashboard" target="_blank"><button id="controlbut" title="新直播控制中心已包括音樂點播/SKChat設定等功能!" type="button" class="sk_icon_bottom sktoptag quikelink" style="height: 17px;position: absolute; top: -17px; background: rgba(255, 0, 0, 0.1);right: 0px;">把你的OBS SKChat換到新版!</button></a>');
                    $('#controlbut').tipsy({gravity: 'se'});
                  }
                }
              }, 3000);
            } else {
              setTimeout(function () {
                //console.log('404 chatroom not found:'+counterror);
                counterror++;
                waitForElement();
              }, 3000);
            }
          }
        }

        waitForElement();
      }
    }
  }
  function addicon() {
    if (typeof yourlevel === 'undefined') {
      var totalyourlevel = 25;
    } else {
      var totalyourlevel = yourlevel + 25;
    }
    var logid = window.App.__container__.lookup("controller:chat").currentRoom.tmiRoom.session.nickname.replace(/[^a-zA-Z0-9_]/g, '');
    var channelid = window.App.__container__.lookup("controller:chat").currentRoom.id;
    if (channelid == 'ankgaminghk' && logid == 'gun0301') {
      logid = 'ankgaminghk';
    }
    if (channelid == 'ankgaminghk' && logid == 'avilun') {
      logid = 'ankgaminghk';
    }
    if (channelid == 'skbear2725' && logid == 'sundayla123') {
      logid = 'skbear2725';
    }
    if (channelid != logid) {
      alert('[SK-Live]只有台主可以增加表情');
    } else {
      var regu = "^[a-zA-Z\u4e00-\u9fa5]+$";
      var re = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】『；：」「'。，、？ 　]");
      var urlre = new RegExp("[<>() 　]");
      var cs = $("#sk_icon_code").val();
      var skiconurl = $("#sk_icon_url").val();
      if (skiconurl.match(/^(^https:|^http:)/)) {
        if (skiconurl.match(/(static-cdn.jtvnw.net)/g) || skiconurl.search(urlre) != -1) {
          alert('[SKLive]你設定出錯了:\n不可以使用限制外連的圖床例如巴哈/百度');
        } else {
          if (cs == '') {
            alert('[SKLive]你設定出錯了:表情代碼不可以留白');
          } else {
            if (cs.search(re) != -1) {
              alert('[SKLive]你設定出錯了:表情只限文字');
            } else {
              $.getJSON("https://live.sk-knower.com/lib/iconjsonp.php?channel=" + channelid + "&callback=?", function (uicon) {
                if (typeof uicon === "undefined") {
                  $.post("https://live.sk-knower.com/updateicon.php", {
                    channelid: channelid,
                    url: skiconurl,
                    code: "sklive_" + $("#sk_icon_code").val(),
                    height: $("#sk_icon_height").val() + "px",
                  });
                  if ($("#f5usericonset").html() == '') {
                    $("#f5usericonset").append('以下表情需要重新整理聊天室套用<hr>');
                  }
                  $("#f5usericonset").append("<img id='bsklive_" + $("#sk_icon_code").val() + "' class='sk_icon_show tooltip' src='" + skiconurl + "' height='40' alt='sklive_" + $("#sk_icon_code").val() + "'>");
                  $("#editicon").append("<div id='sklive_" + $("#sk_icon_code").val() + "' class='sk_icon_bottom' style='margin: 1px;background: #9074C3;'><button onclick='follow00system(\"" + skiconurl + "\",\"sklive_" + $("#sk_icon_code").val() + "\");' style='font-size: 13px;float: right;line-height: 32px;background-color: rgb(213, 3, 3);color: rgb(223, 223, 223);border: 0px;cursor: pointer;'>刪除</button><img class='sk_icon_show tooltip' src='" + skiconurl + "' height='40' style='max-width: 237px;' original-title='sklive_" + $("#sk_icon_code").val() + " (" + $("#sk_icon_height").val() + "px)'>sklive_" + $("#sk_icon_code").val() + " (" + $("#sk_icon_height").val() + "px)</div>");
                  $("#sk_icon_url").val('');
                  $("#sk_icon_code").val('');

                } else {
                  if (uicon.length == totalyourlevel) {
                    alert('現時設定上限為' + totalyourlevel + '個表情(25+' + yourlevel + ')');
                  } else {
                    var myiconcode = "sklive_" + $("#sk_icon_code").val();
                    var re = new RegExp(myiconcode, 'gi');
                    var uticon = $("#editicon").text();
                    if (uticon.match(re)) {
                      alert('表情代碼設定錯誤:表情代碼文字前半部份不可以和現有代碼重複');
                    } else {
                      var sameerror = 'no';
                      $.each(uicon, function (i, item) {
                        var loopalt = uicon[i].alt;
                        var re = new RegExp(loopalt, 'gi');
                        if (myiconcode.match(re)) {
                          sameerror = 'error';
                          console.log('有ERROR');
                        }
                      });
                      if (sameerror != 'error') {
                        $.post("https://live.sk-knower.com/updateicon.php", {
                          channelid: channelid,
                          url: skiconurl,
                          code: "sklive_" + $("#sk_icon_code").val(),
                          height: $("#sk_icon_height").val() + "px",
                        });
                        if ($("#f5usericonset").html() == '') {
                          $("#f5usericonset").append('以下表情需要重新整理聊天室套用<hr>');
                        }
                        $("#f5usericonset").append("<img id='bsklive_" + $("#sk_icon_code").val() + "' class='sk_icon_show tooltip' src='" + skiconurl + "' height='40' alt='sklive_" + $("#sk_icon_code").val() + "'>");
                        $("#editicon").append("<div id='sklive_" + $("#sk_icon_code").val() + "' class='sk_icon_bottom' style='margin: 1px;background: #9074C3;'><button onclick='follow00system(\"" + skiconurl + "\",\"sklive_" + $("#sk_icon_code").val() + "\");' style='font-size: 13px;float: right;line-height: 32px;background-color: rgb(213, 3, 3);color: rgb(223, 223, 223);border: 0px;cursor: pointer;'>刪除</button><img class='sk_icon_show tooltip' src='" + skiconurl + "' height='40' style='max-width: 237px;' original-title='sklive_" + $("#sk_icon_code").val() + " (" + $("#sk_icon_height").val() + "px)'>sklive_" + $("#sk_icon_code").val() + " (" + $("#sk_icon_height").val() + "px)</div>");
                        $("#sk_icon_url").val('');
                        $("#sk_icon_code").val('');
                      } else {
                        alert('表情代碼設定錯誤:表情代碼文字前半部份不可以和現有代碼重複');
                      }
                    }
                  }
                }
              });
            }
          }
        }
      } else {
        alert('[SKLive]你設定出錯了:\n圖片網址是http://或https://開始的');
      }
    }
  };
  function follow00system(url, code) {
    var logid = window.App.__container__.lookup("controller:chat").currentRoom.tmiRoom.session.nickname;
    var channelid = window.App.__container__.lookup("controller:chat").currentRoom.id;
    if (channelid == 'ankgaminghk' && logid == 'gun0301') {
      logid = 'ankgaminghk';
    }
    if (channelid == 'ankgaminghk' && logid == 'avilun') {
      logid = 'ankgaminghk';
    }
    if (channelid == 'skbear2725' && logid == 'sundayla123') {
      logid = 'skbear2725';
    }
    if (channelid != logid) {
      alert('[SK-Live]只有台主可以刪除表情');
    } else {
      console.log(url);
      console.log(code);
      $.post("https://live.sk-knower.com/delicon.php", {
        channelid: channelid,
        url: url,
        code: code,
      });
      $("#" + code).remove();
      $("#b" + code).remove();
    }
  };
  function edit_the_icon(code, newurl, newpx) {
    var newurl = $("#" + newurl).val();
    var newpx = $("#" + newpx).val();
    if (newpx > 9 && newpx < 151) {
      var logid = window.App.__container__.lookup("controller:chat").currentRoom.tmiRoom.session.nickname;
      var channelid = window.App.__container__.lookup("controller:chat").currentRoom.id;
      if (channelid == 'ankgaminghk' && logid == 'gun0301') {
        logid = 'ankgaminghk';
      }
      if (channelid == 'ankgaminghk' && logid == 'avilun') {
        logid = 'ankgaminghk';
      }
      if (channelid == 'skbear2725' && logid == 'sundayla123') {
        logid = 'skbear2725';
      }
      if (channelid != logid) {
        alert('[SK-Live]只有台主可以修改表情設定');
      } else {
        $.post("https://live.sk-knower.com/delicon.php", {
          channelid: channelid,
          url: newurl,
          code: code,
          newpx: newpx + "px",
          edit: 'yes',
        });
        alert('成功更改,F5後套用設定\n代碼: ' + code + '\n網址: ' + newurl + '\n高度: ' + newpx + 'px');
      }
    } else {
      alert('更改後的高度需要在10至150之間');
    }
  };
  function opendeiticon(id) {
    $("#" + id).css("display", "block");
  }

  function icongoup(i, myid) {
    var logid = window.App.__container__.lookup("controller:chat").currentRoom.tmiRoom.session.nickname;
    var channelid = window.App.__container__.lookup("controller:chat").currentRoom.id;
    if (channelid == 'ankgaminghk' && logid == 'gun0301') {
      logid = 'ankgaminghk';
    }
    if (channelid == 'ankgaminghk' && logid == 'avilun') {
      logid = 'ankgaminghk';
    }
    if (channelid == 'skbear2725' && logid == 'sundayla123') {
      logid = 'skbear2725';
    }
    if (channelid != logid) {
      alert('[SK-Live]只有台主可以修改表情設定');
    } else {
      var myClass = $("#" + myid).attr("class").replace('sk_icon_bottom ', '');
      var i = myClass.replace('usersk', '');
      if (i == '0') {
        var beforenumber = '0';
      } else {
        var beforenumber = i - 1;
      }
      $("#" + myid).insertBefore(".usersk" + beforenumber);
      $(".usersk" + beforenumber).addClass("usersk" + i).removeClass("usersk" + beforenumber);
      $("#" + myid).removeClass("usersk" + i).addClass("usersk" + beforenumber);
      $.post("https://live.sk-knower.com/moveupicon.php", {
        channelid: channelid,
        code: myid,
      });
    }
  }

  function icongodown(i, myid) {
    console.log(allusericon);
    var logid = window.App.__container__.lookup("controller:chat").currentRoom.tmiRoom.session.nickname;
    var channelid = window.App.__container__.lookup("controller:chat").currentRoom.id;
    if (channelid == 'ankgaminghk' && logid == 'gun0301') {
      logid = 'ankgaminghk';
    }
    if (channelid == 'ankgaminghk' && logid == 'avilun') {
      logid = 'ankgaminghk';
    }
    if (channelid == 'skbear2725' && logid == 'sundayla123') {
      logid = 'skbear2725';
    }
    if (channelid != logid) {
      alert('[SK-Live]只有台主可以修改表情設定');
    } else {
      var myClass = $("#" + myid).attr("class").replace('sk_icon_bottom ', '');
      var i = myClass.replace('usersk', '');
      var mynumber = parseInt(i);
      var my1number = mynumber + 1;
      var my2number = mynumber + 2;
      if (allusericon == mynumber) {
      } else {
        $("#" + myid).insertAfter(".usersk" + my1number);
        $(".usersk" + my1number).addClass("usersk" + i).removeClass("usersk" + my1number);
        $("#" + myid).removeClass("usersk" + i).addClass("usersk" + my1number);
        $.post("https://live.sk-knower.com/movedownicon.php", {
          channelid: channelid,
          code: myid,
        });
      }
    }
  }

  function timmer(b) {
    var sec = '0';
    if (typeof stopper === 'undefined') {
      stopper = 'off';
      $('#sk_timmer').text(b);
      var sec = $('#sk_timmer').text()
      var timer = setInterval(function () {
        $('#sk_timmer').text(--sec);
        console.log(stopper);
        if (sec == 0) {
          clearInterval(timer);
          console.log("end");
          va = 'close';
          vb = 'close';
          vc = 'close';
          vd = 'close';
          stopper = 'stop';
          $("#voteabox").css("display", "none");
          $("#votebbox").css("display", "none");
          $("#votecbox").css("display", "none");
          $("#votedbox").css("display", "none");
          $('#sk_timmer').text('投票結束');
          $("#sk_skill").show();
        }
        if (stopper == 'stop') {
          clearInterval(timer);
          console.log(stopper);
          va = 'close';
          vb = 'close';
          vc = 'close';
          vd = 'close';
          $("#voteabox").css("display", "none");
          $("#votebbox").css("display", "none");
          $("#votecbox").css("display", "none");
          $("#votedbox").css("display", "none");
          $('#sk_timmer').text('投票結束');
          $("#sk_skill").show();
        }
      }, 1000);
    } else {
      if (stopper == 'off') {
        stopper = 'stop';
      } else {
        stopper = 'off';
        $('#sk_timmer').text(b);
        var sec = $('#sk_timmer').text()
        var timer = setInterval(function () {
          $('#sk_timmer').text(--sec);
          console.log(stopper);
          if (sec == 0) {
            clearInterval(timer);
            console.log("end");
            va = 'close';
            vb = 'close';
            vc = 'close';
            vd = 'close';
            stopper = 'stop';
            $("#voteabox").css("display", "none");
            $("#votebbox").css("display", "none");
            $("#votecbox").css("display", "none");
            $("#votedbox").css("display", "none");
            $('#sk_timmer').text('投票結束');
            $("#sk_skill").show();
          }
          if (stopper == 'stop') {
            clearInterval(timer);
            console.log(stopper);
            va = 'close';
            vb = 'close';
            vc = 'close';
            vd = 'close';
            $("#voteabox").css("display", "none");
            $("#votebbox").css("display", "none");
            $("#votecbox").css("display", "none");
            $("#votedbox").css("display", "none");
            $('#sk_timmer').text('投票結束');
            $("#sk_skill").show();
          }
        }, 1000);
      }
    }
  }

  $(document).on('click', "#sk_icon_set img", function () {
    var axxa = this.alt;
    var axxasrc = this.src;
    var axxaid = this.id;
    if (axxa != '') {
      if ($(".textarea-contain").find("textarea").val() == '') {
        $(".textarea-contain").find("textarea").insertAtCaret(' ' + axxa + '');
        $(".textarea-contain").find("textarea").focus();

      } else {
        $(".textarea-contain").find("textarea").insertAtCaret(' ' + axxa + '');
        $(".textarea-contain").find("textarea").focus();
        window.App.__container__.lookup("controller:chat").get("currentRoom").set("messageToSend", $(".textarea-contain").find("textarea").val());
      }
      if ($(this).is('[id^="bsk_"]')) {
      } else {
        $(document.getElementById('bsk_' + axxa)).remove();
        $("#sk_set14").prepend("<img id='bsk_" + axxa + "' class='sk_icon_show tooltip' src='" + axxasrc + "' style='max-height:40px;' alt='" + axxa + "'>");
      }
    }
  })
  function gousersk(channel) {
    if (channel) {
      var url = window.location.href.replace('/videos/highlights', '').replace('/videos/past-broadcasts', '').replace('/videos/all', '').replace('http://www.twitch.tv/', '').replace('https://www.twitch.tv/', '').replace('/following', '').replace('/followers', '');
      window.location.href = "http://live.sk-knower.com/" + url;
    } else {
      if ($(".cl-white > .intl-login")[0]) {
        var cardid = $(".cl-white > .intl-login").first().text().replace("[\\(\\)]", '').replace(/ /g, '').replace(/\n/g, "").replace(/[^a-zA-Z0-9_]/g, '');
      } else {
        var cardid = $(".cl-white").first().text().replace("[\\(\\)]", '').replace(/ /g, '').replace(/\n/g, "").replace(/[^a-zA-Z0-9_]/g, '');
      }
      window.open('http://live.sk-knower.com/' + cardid.toLowerCase(), '_blank');
    }
  }

  function closeacgsk() {
    $("#skacg").css("display", "none");
    return false;
  }

commandcd = '';
setInterval(function () {
  commandcd++;
}, 1000);


function scroller() {
  var $chatScrollContent = $(".chat-messages").children('.tse-scroll-content');
  var $chatContent = $(".chat-lines");
  var scrollBottom = $chatContent.height() - $chatScrollContent.scrollTop() - $chatScrollContent.height();
  if (scrollBottom < '210') {
    $chatScrollContent.scrollTop(999999);
    $(".more-messages-indicator").click();
    console.log('啟動( ´-ω ･)▄︻┻┳══━');
  }

}
}