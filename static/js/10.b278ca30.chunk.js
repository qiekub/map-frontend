/*! For license information please see 10.b278ca30.chunk.js.LICENSE.txt */
(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[10],{274:function(e,t,a){"use strict";var r=a(12),n=a(10),o=a(11),s=a(24),i=a(25),c=a(0),l=a.n(c),u=a(22),d=a(48),h=a(252),p=a(387),m=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,{className:"blurredBG",elevation:6,variant:"elevation",style:Object(r.a)({margin:"8px 0 0 0",borderRadius:"24px",overflow:"hidden"},this.props.style)},l.a.createElement("div",{style:{overflow:"auto",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",padding:"8px"}},(this.props.actions||[]).map((function(e){return l.a.createElement(p.a,{key:e.title,icon:e.icon,label:l.a.createElement(u.a,{id:e.title}),onClick:e.onClick,style:{marginRight:"8px"}})}))))}}]),a}(l.a.Component);t.a=Object(d.b)(m)},302:function(e,t,a){},303:function(e,t,a){"use strict";var r=a(0),n=a(78);t.a=Object(n.a)(r.createElement("path",{d:"M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.9959.9959 0 00-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"}),"ArrowBackRounded")},309:function(e,t,a){"use strict";var r=a(5),n=a(2),o=a(0),s=a(13),i=a(17),c=a(92),l=a(150),u=a(47),d=o.forwardRef((function(e,t){var a=e.children,i=e.classes,c=e.className,d=e.color,h=void 0===d?"default":d,p=e.component,m=void 0===p?"button":p,g=e.disabled,f=void 0!==g&&g,b=e.disableElevation,y=void 0!==b&&b,v=e.disableFocusRipple,_=void 0!==v&&v,S=e.endIcon,x=e.focusVisibleClassName,w=e.fullWidth,R=void 0!==w&&w,E=e.size,k=void 0===E?"medium":E,j=e.startIcon,O=e.type,C=void 0===O?"button":O,I=e.variant,L=void 0===I?"text":I,N=Object(r.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),z=j&&o.createElement("span",{className:Object(s.a)(i.startIcon,i["iconSize".concat(Object(u.a)(k))])},j),F=S&&o.createElement("span",{className:Object(s.a)(i.endIcon,i["iconSize".concat(Object(u.a)(k))])},S);return o.createElement(l.a,Object(n.a)({className:Object(s.a)(i.root,i[L],c,"inherit"===h?i.colorInherit:"default"!==h&&i["".concat(L).concat(Object(u.a)(h))],"medium"!==k&&[i["".concat(L,"Size").concat(Object(u.a)(k))],i["size".concat(Object(u.a)(k))]],y&&i.disableElevation,f&&i.disabled,R&&i.fullWidth),component:m,disabled:f,focusRipple:!_,focusVisibleClassName:Object(s.a)(i.focusVisible,x),ref:t,type:C},N),o.createElement("span",{className:i.label},z,a,F))}));t.a=Object(i.a)((function(e){return{root:Object(n.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(c.a)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(c.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(c.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(c.a)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(c.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(c.a)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(c.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(d)},380:function(e,t,a){"use strict";a.r(t);var r=a(12),n=a(29),o=a(10),s=a(11),i=a(8),c=a(24),l=a(25),u=a(0),d=a.n(u),h=(a(302),a(22)),p=a(80),m=a(48),g=a(58),f=a(94),b=a(121),y=a(123),v=a(57),_=a(347),S=a(304),x=a(252),w=a(253),R=a(200),E=a(305),k=a(306),j=a(308),O=a(307),C=a(2),I=a(5),L=a(13),N=a(17),z=u.forwardRef((function(e,t){var a=e.disableSpacing,r=void 0!==a&&a,n=e.classes,o=e.className,s=Object(I.a)(e,["disableSpacing","classes","className"]);return u.createElement("div",Object(C.a)({className:Object(L.a)(n.root,o,!r&&n.spacing),ref:t},s))})),F=Object(N.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(z),T=a(309),M=a(310),P=a(388),B=a(256),W=a(78),A=Object(W.a)(u.createElement("path",{d:"M12.72 2.03C6.63 1.6 1.6 6.63 2.03 12.72 2.39 18.01 7.01 22 12.31 22H16c.55 0 1-.45 1-1s-.45-1-1-1h-3.67c-3.73 0-7.15-2.42-8.08-6.03-1.49-5.8 3.91-11.21 9.71-9.71C17.58 5.18 20 8.6 20 12.33v1.1c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.25c0-2.51-1.78-4.77-4.26-5.12-3.4-.49-6.27 2.45-5.66 5.87.34 1.91 1.83 3.49 3.72 3.94 1.84.43 3.59-.16 4.74-1.33.89 1.22 2.67 1.86 4.3 1.21 1.34-.53 2.16-1.9 2.16-3.34v-1.09c0-5.31-3.99-9.93-9.28-10.29zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"}),"AlternateEmailRounded"),G=a(303),V=Object(W.a)(u.createElement("path",{d:"M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"SearchRounded"),$=Object(W.a)(u.createElement("path",{d:"M8 2c-1.1 0-2 .9-2 2v3.17c0 .53.21 1.04.59 1.42L10 12l-3.42 3.42c-.37.38-.58.89-.58 1.42V20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-3.16c0-.53-.21-1.04-.58-1.41L14 12l3.41-3.4c.38-.38.59-.89.59-1.42V4c0-1.1-.9-2-2-2H8zm8 14.5V19c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-2.5l4-4 4 4zm-4-5l-4-4V5c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2.5l-4 4z"}),"HourglassEmptyRounded"),q=a(274);function H(){H=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r=Object.defineProperty||function(e,t,a){e[t]=a.value},n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",s=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(O){c=function(e,t,a){return e[t]=a}}function l(e,t,a,n){var o=t&&t.prototype instanceof h?t:h,s=Object.create(o.prototype),i=new E(n||[]);return r(s,"_invoke",{value:S(e,a,i)}),s}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(O){return{type:"throw",arg:O}}}e.wrap=l;var d={};function h(){}function p(){}function m(){}var g={};c(g,o,(function(){return this}));var f=Object.getPrototypeOf,b=f&&f(f(k([])));b&&b!==t&&a.call(b,o)&&(g=b);var y=m.prototype=h.prototype=Object.create(g);function v(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){var n;r(this,"_invoke",{value:function(r,o){function s(){return new t((function(n,s){!function r(n,o,s,i){var c=u(e[n],e,o);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,s,i)}),(function(e){r("throw",e,s,i)})):t.resolve(d).then((function(e){l.value=e,s(l)}),(function(e){return r("throw",e,s,i)}))}i(c.arg)}(r,o,n,s)}))}return n=n?n.then(s,s):s()}})}function S(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return j()}for(a.method=n,a.arg=o;;){var s=a.delegate;if(s){var i=x(s,a);if(i){if(i===d)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var c=u(e,t,a);if("normal"===c.type){if(r=a.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r="completed",a.method="throw",a.arg=c.arg)}}}function x(e,t){var a=t.method,r=e.iterator[a];if(void 0===r)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),d;var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function R(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function k(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=m,r(y,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:p,configurable:!0}),p.displayName=c(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},v(_.prototype),c(_.prototype,s,(function(){return this})),e.AsyncIterator=_,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var s=new _(l(t,a,r,n),o);return e.isGeneratorFunction(a)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},v(y),c(y,i,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var r in t)a.push(r);return a.reverse(),function e(){for(;a.length;){var r=a.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=k,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(R),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return s.type="throw",s.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),R(a),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;R(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:k(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),d}},e}var D=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).state={value:"",loadingSearchResult:!1,searchResults_poi:[],searchResults_administratives:[],searchResults_address:[],showSearchResults:!1,showWebsiteIntro:!0,searchBarIsFocused:!1},r.actions=[{icon:d.a.createElement(B.a,null),title:"add_place",onClick:function(){Object(p.b)("/add/")}},{icon:d.a.createElement(A,null),title:"give_feedback",onClick:function(){window.open("mailto:thomas.rosen@qiekub.org","_self")}}],r.searchInputRef=d.a.createRef(),r.saveSearchQueryText=r.saveSearchQueryText.bind(Object(i.a)(r)),r.searchKeypressed=r.searchKeypressed.bind(Object(i.a)(r)),r.loadSearchResults=r.loadSearchResults.bind(Object(i.a)(r)),r.openSearchResult=r.openSearchResult.bind(Object(i.a)(r)),r.acceptEssentialPrivacyAndCloseIntro=r.acceptEssentialPrivacyAndCloseIntro.bind(Object(i.a)(r)),r.hideSearchResults=r.hideSearchResults.bind(Object(i.a)(r)),r.startSearchFromIcon=r.startSearchFromIcon.bind(Object(i.a)(r)),r.gainedFocus=r.gainedFocus.bind(Object(i.a)(r)),r.lostFocus=r.lostFocus.bind(Object(i.a)(r)),r.focusSearchField=r.focusSearchField.bind(Object(i.a)(r)),r}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.value!==this.state.value&&this.setState({value:this.props.value});var e=this.props.store.getPrivacy(null),t=this.props.store.get("showWebsiteIntro");e&&!t&&this.setState({showWebsiteIntro:!1})}},{key:"componentDidUpdate",value:function(e,t,a){this.props.value!==e.value&&this.props.value!==this.state.value&&this.setState({value:this.props.value})}},{key:"saveSearchQueryText",value:function(e){var t=this;this.setState({value:e.target.value},(function(){t.loadSearchResults(t.state.value)}))}},{key:"openSearchResult",value:function(e){if(this.setState({showSearchResults:!1}),e.placeID&&Object(p.b)("/view/".concat(e.placeID,"/")),e.geometry.boundingbox)if("mapbox"===this.props.globals.mainMapFunctions.getMapType()){var t=128;this.props.globals.isSmallScreen&&(t=64),this.props.globals.mainMapFunctions.fitBounds([[e.geometry.boundingbox.southwest.lng,e.geometry.boundingbox.southwest.lat],[e.geometry.boundingbox.northeast.lng,e.geometry.boundingbox.northeast.lat]],{padding:{top:t,right:t,bottom:116+t,left:this.props.sidebarIsOpen?400+t:t}})}else this.props.globals.mainMapFunctions.flyToBounds([[e.geometry.boundingbox.southwest.lat,e.geometry.boundingbox.southwest.lng],[e.geometry.boundingbox.northeast.lat,e.geometry.boundingbox.northeast.lng]],{animate:!0,duration:1.5});else if(e.geometry.location){var a=e.geometry.location,r=this.props.globals.mainMapFunctions.getZoom();r<17&&(r=17),"mapbox"===this.props.globals.mainMapFunctions.getMapType()?this.props.globals.mainMapFunctions.flyTo({center:a,zoom:r,padding:{left:this.props.globals.isSmallScreen?0:400}}):this.props.globals.mainMapFunctions.flyTo(this.props.globals.isSmallScreen?a:this.props.globals.mainMapFunctions.unproject(this.props.globals.mainMapFunctions.project(a,r).add([-200,0]),r),r,{animate:!0,duration:1.5})}}},{key:"loadSearchResults",value:function(e){var t=this;return new Promise((function(a,o){e&&""!==e&&e.length>1&&/\S/.test(e)?t.props.globals.graphql.query({query:g.j,variables:{query:e,languages:navigator.languages}}).then(function(){var e=Object(n.a)(H().mark((function e(n){var o,s,i,c;return H().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.data.search.query===t.state.value?(o=JSON.parse(JSON.stringify(n.data.search.results)).map((function(e){var a=e.preset;return Object(r.a)(Object(r.a)({},e),{},{name_translated:Object(v.h)(e.name,t.props.globals.userLocales),___preset:a&&f[a]?Object(r.a)({key:a},f[a]):f.default,___color:a?Object(v.d)(a,y):b.default,key:JSON.stringify(e)})})),s=o.filter((function(e){return"address"!==e.preset&&"boundary/administrative"!==e.preset})),i=o.filter((function(e){return"boundary/administrative"===e.preset})),c=o.filter((function(e){return"address"===e.preset})),t.setState({showSearchResults:!0,loadingSearchResult:!1,searchResults_poi:s,searchResults_administratives:i,searchResults_address:c},(function(){return a()}))):(console.warn("The search - result was received slower than typed!"),a());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.setState({showSearchResults:!1,loadingSearchResult:!1,searchResults_poi:[],searchResults_administratives:[],searchResults_address:[]},(function(){return o(e)}))})):t.setState({showSearchResults:!1,loadingSearchResult:!1,searchResults_poi:[],searchResults_administratives:[],searchResults_address:[]},(function(){return o("Error in loadSearchResults(): The state could not be set.")}))})).catch((function(e){return console.error(e)}))}},{key:"searchKeypressed",value:function(e){var t=this;"Enter"===e.key&&(this.searchInputRef.current.blur(),this.setState({loadingSearchResult:!0},(function(){t.loadSearchResults(t.state.value).finally((function(){t.state.searchResults_address.length>0?t.openSearchResult(t.state.searchResults_address[0]):t.state.searchResults_poi.length>0?t.openSearchResult(t.state.searchResults_poi[0]):t.state.searchResults_administratives.length>0&&t.openSearchResult(t.state.searchResults_administratives[0])}))})))}},{key:"acceptEssentialPrivacyAndCloseIntro",value:function(){var e=this;this.props.store.setPrivacy(null,!0).finally((function(){e.props.store.set("showWebsiteIntro",!1),e.setState({showWebsiteIntro:!1})}))}},{key:"hideSearchResults",value:function(){this.setState({showSearchResults:!1})}},{key:"focusSearchField",value:function(){this.searchInputRef.current.focus()}},{key:"startSearchFromIcon",value:function(){var e=this;this.searchInputRef.current.blur(),this.setState({loadingSearchResult:!0},(function(){e.loadSearchResults(e.state.value).finally((function(){e.state.searchResults_address.length>0?e.openSearchResult(e.state.searchResults_address[0]):e.state.searchResults_poi.length>0?e.openSearchResult(e.state.searchResults_poi[0]):e.state.searchResults_administratives.length>0&&e.openSearchResult(e.state.searchResults_administratives[0])}))}))}},{key:"gainedFocus",value:function(e){this.setState({searchBarIsFocused:!0}),this.saveSearchQueryText(e)}},{key:"lostFocus",value:function(){this.setState({searchBarIsFocused:!1})}},{key:"render",value:function(){var e=this,t=void 0;t=this.state.showSearchResults?d.a.createElement(_.a,{edge:"end",style:{margin:"4px",padding:"10px"},onClick:this.hideSearchResults,"aria-label":this.props.getString("close_search_results_aria_label"),title:this.props.getString("close_search_results_aria_label")},d.a.createElement(G.a,null)):d.a.createElement(_.a,{edge:"end",style:{margin:"4px",padding:"10px"},onClick:this.focusSearchField},d.a.createElement(V,null));var a=d.a.createElement("div",{style:{width:"16px"}});this.state.loadingSearchResult&&(a=d.a.createElement(S.a,{style:{margin:"4px",padding:"10px"}},d.a.createElement($,null)));var r=this.state.showSearchResults&&(this.state.searchResults_poi.length>0||this.state.searchResults_administratives.length>0||this.state.searchResults_address.length>0),n=!this.state.showSearchResults&&this.state.showWebsiteIntro;return d.a.createElement("div",{className:this.props.className},d.a.createElement(x.a,{className:"header blurredBG "+(n?"showingWebsiteIntro":""),elevation:6,variant:"elevation",style:{margin:"8px 0 0 0",display:n?"block":"none"}},d.a.createElement("div",{className:"scrollWrapper websiteIntro"},d.a.createElement(w.a,null,d.a.createElement(R.a,{alignItems:"flex-start"},d.a.createElement(E.a,null,d.a.createElement("div",{className:"emojiIcon"},this.props.getString("welcome_emoji_icon"))),d.a.createElement(k.a,{primary:this.props.getString("welcome_heading"),secondary:this.props.getString("project-summary")})),d.a.createElement(R.a,{alignItems:"flex-start"},d.a.createElement(E.a,null,d.a.createElement("div",{className:"emojiIcon"},this.props.getString("thanks_emoji_icon"))),d.a.createElement(k.a,{primary:this.props.getString("thanks_heading"),secondary:d.a.createElement(h.a,{id:"thanks_text",elems:{mapbox_link:d.a.createElement(j.a,{href:"https://www.mapbox.com/community/",target:"_blank",rel:"noreferrer"})}})})),d.a.createElement(R.a,{alignItems:"flex-start"},d.a.createElement(E.a,null,d.a.createElement("div",{className:"emojiIcon"},this.props.getString("privacy_emoji_icon"))),d.a.createElement(k.a,{primary:this.props.getString("privacy_essential_data_heading"),secondary:d.a.createElement(h.a,{id:"privacy_essential_data_info",elems:{p:d.a.createElement(O.a,{variant:"body2",color:"textSecondary",gutterBottom:!0})}}),secondaryTypographyProps:{component:"div"}}))),d.a.createElement(F,{style:{justifyContent:"flex-end"}},d.a.createElement(T.a,{onClick:this.acceptEssentialPrivacyAndCloseIntro},d.a.createElement(h.a,{id:"okay-button"}))))),d.a.createElement(x.a,{className:"header blurredBG "+(r?"showingSearchResults":""),elevation:6,variant:"elevation",style:{margin:"8px 0 0 0",display:r?"block":"none"}},d.a.createElement("div",{className:"scrollWrapper searchResults"},0===this.state.searchResults_poi.length?null:d.a.createElement(w.a,{subheader:d.a.createElement(M.a,{disableSticky:!0},d.a.createElement(h.a,{id:"places_listheading"}))},this.state.searchResults_poi.map((function(t){return d.a.createElement(R.a,{button:!0,alignItems:""!==t.name_translated&&""!==t.address?"flex-start":"center",key:t.key,onClick:function(){return e.openSearchResult(t)}},d.a.createElement(E.a,null,d.a.createElement("div",{className:"material-icons-round",style:{color:t.___preset.icon&&t.___color?"default"===t.___color.key?t.___color.bg:t.___color.fg:"",backgroundColor:t.___preset.icon&&t.___color?"default"===t.___color.key?"":t.___color.bg:"",borderRadius:"100%",width:"40px",height:"40px",lineHeight:"40px",textAlign:"center"}},t.___preset.icon)),d.a.createElement(k.a,{primary:t.name_translated,secondary:t.address}))}))),0===this.state.searchResults_administratives.length?null:d.a.createElement(w.a,{subheader:d.a.createElement(M.a,{disableSticky:!0},d.a.createElement(h.a,{id:"countries_listheading"}))},this.state.searchResults_administratives.map((function(t){return d.a.createElement(R.a,{button:!0,alignItems:""!==t.name_translated&&""!==t.address?"flex-start":"center",key:t.key,onClick:function(){return e.openSearchResult(t)}},d.a.createElement(E.a,null,d.a.createElement("div",{className:"material-icons-round",style:{color:t.___preset.icon&&t.___color?"default"===t.___color.key?t.___color.bg:t.___color.fg:"",backgroundColor:t.___preset.icon&&t.___color?"default"===t.___color.key?"":t.___color.bg:"",borderRadius:"100%",width:"40px",height:"40px",lineHeight:"40px",textAlign:"center"}},t.___preset.icon)),d.a.createElement(k.a,{primary:t.name_translated,secondary:t.address}))}))),0===this.state.searchResults_address.length?null:d.a.createElement(w.a,{subheader:d.a.createElement(M.a,{disableSticky:!0},d.a.createElement(h.a,{id:"addresses_listheading"}))},this.state.searchResults_address.map((function(t){return d.a.createElement(R.a,{button:!0,alignItems:""!==t.name_translated&&""!==t.address?"flex-start":"center",key:t.key,onClick:function(){return e.openSearchResult(t)}},d.a.createElement(E.a,null,d.a.createElement("div",{className:"material-icons-round",style:{color:t.___preset.icon?"default"===t.___color.key?t.___color.bg:t.___color.fg:"",backgroundColor:t.___preset.icon?"default"===t.___color.key?"":t.___color.bg:"",borderRadius:"100%",width:"40px",height:"40px",lineHeight:"40px",textAlign:"center"}},t.___preset.icon)),d.a.createElement(k.a,{primary:t.name_translated,secondary:t.address}))}))))),d.a.createElement(q.a,{actions:this.actions,style:{display:this.state.showSearchResults||this.state.showWebsiteIntro?"none":"block"}}),d.a.createElement(x.a,{className:"header blurredBG "+(this.state.searchBarIsFocused?"focused ":""),elevation:6,variant:"elevation",style:{margin:"8px 0 0 0",borderRadius:"16px"}},d.a.createElement("div",{className:"searchBar"},t,d.a.createElement(P.a,{className:"searchInput",value:this.state.value,placeholder:this.props.getString("search-for-queerness"),onFocus:this.gainedFocus,onBlur:this.lostFocus,onChange:this.saveSearchQueryText,onKeyPress:this.searchKeypressed,inputRef:this.searchInputRef,inputProps:{title:this.props.getString("search-for-queerness"),"aria-label":this.props.getString("search-for-queerness")}}),a)))}}]),a}(d.a.Component);t.default=Object(m.b)(Object(h.c)(D))}}]);
//# sourceMappingURL=10.b278ca30.chunk.js.map