var hx=Object.defineProperty;var fx=(s,e,t)=>e in s?hx(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Xe=(s,e,t)=>fx(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=t(o);fetch(o.href,c)}})();function qm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var gu={exports:{}},ba={},vu={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function px(){if(Rp)return gt;Rp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function S(O,re,Le){this.props=O,this.context=re,this.refs=T,this.updater=Le||M}S.prototype.isReactComponent={},S.prototype.setState=function(O,re){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,re,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function y(){}y.prototype=S.prototype;function R(O,re,Le){this.props=O,this.context=re,this.refs=T,this.updater=Le||M}var P=R.prototype=new y;P.constructor=R,E(P,S.prototype),P.isPureReactComponent=!0;var A=Array.isArray,G=Object.prototype.hasOwnProperty,k={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function F(O,re,Le){var Z,oe={},Se=null,ve=null;if(re!=null)for(Z in re.ref!==void 0&&(ve=re.ref),re.key!==void 0&&(Se=""+re.key),re)G.call(re,Z)&&!D.hasOwnProperty(Z)&&(oe[Z]=re[Z]);var Ae=arguments.length-2;if(Ae===1)oe.children=Le;else if(1<Ae){for(var Ie=Array(Ae),Ke=0;Ke<Ae;Ke++)Ie[Ke]=arguments[Ke+2];oe.children=Ie}if(O&&O.defaultProps)for(Z in Ae=O.defaultProps,Ae)oe[Z]===void 0&&(oe[Z]=Ae[Z]);return{$$typeof:s,type:O,key:Se,ref:ve,props:oe,_owner:k.current}}function L(O,re){return{$$typeof:s,type:O.type,key:re,ref:O.ref,props:O.props,_owner:O._owner}}function b(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function z(O){var re={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Le){return re[Le]})}var ie=/\/+/g;function Q(O,re){return typeof O=="object"&&O!==null&&O.key!=null?z(""+O.key):re.toString(36)}function de(O,re,Le,Z,oe){var Se=typeof O;(Se==="undefined"||Se==="boolean")&&(O=null);var ve=!1;if(O===null)ve=!0;else switch(Se){case"string":case"number":ve=!0;break;case"object":switch(O.$$typeof){case s:case e:ve=!0}}if(ve)return ve=O,oe=oe(ve),O=Z===""?"."+Q(ve,0):Z,A(oe)?(Le="",O!=null&&(Le=O.replace(ie,"$&/")+"/"),de(oe,re,Le,"",function(Ke){return Ke})):oe!=null&&(b(oe)&&(oe=L(oe,Le+(!oe.key||ve&&ve.key===oe.key?"":(""+oe.key).replace(ie,"$&/")+"/")+O)),re.push(oe)),1;if(ve=0,Z=Z===""?".":Z+":",A(O))for(var Ae=0;Ae<O.length;Ae++){Se=O[Ae];var Ie=Z+Q(Se,Ae);ve+=de(Se,re,Le,Ie,oe)}else if(Ie=x(O),typeof Ie=="function")for(O=Ie.call(O),Ae=0;!(Se=O.next()).done;)Se=Se.value,Ie=Z+Q(Se,Ae++),ve+=de(Se,re,Le,Ie,oe);else if(Se==="object")throw re=String(O),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ve}function he(O,re,Le){if(O==null)return O;var Z=[],oe=0;return de(O,Z,"","",function(Se){return re.call(Le,Se,oe++)}),Z}function ce(O){if(O._status===-1){var re=O._result;re=re(),re.then(function(Le){(O._status===0||O._status===-1)&&(O._status=1,O._result=Le)},function(Le){(O._status===0||O._status===-1)&&(O._status=2,O._result=Le)}),O._status===-1&&(O._status=0,O._result=re)}if(O._status===1)return O._result.default;throw O._result}var ue={current:null},j={transition:null},le={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:j,ReactCurrentOwner:k};function se(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:he,forEach:function(O,re,Le){he(O,function(){re.apply(this,arguments)},Le)},count:function(O){var re=0;return he(O,function(){re++}),re},toArray:function(O){return he(O,function(re){return re})||[]},only:function(O){if(!b(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},gt.Component=S,gt.Fragment=t,gt.Profiler=o,gt.PureComponent=R,gt.StrictMode=r,gt.Suspense=p,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,gt.act=se,gt.cloneElement=function(O,re,Le){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Z=E({},O.props),oe=O.key,Se=O.ref,ve=O._owner;if(re!=null){if(re.ref!==void 0&&(Se=re.ref,ve=k.current),re.key!==void 0&&(oe=""+re.key),O.type&&O.type.defaultProps)var Ae=O.type.defaultProps;for(Ie in re)G.call(re,Ie)&&!D.hasOwnProperty(Ie)&&(Z[Ie]=re[Ie]===void 0&&Ae!==void 0?Ae[Ie]:re[Ie])}var Ie=arguments.length-2;if(Ie===1)Z.children=Le;else if(1<Ie){Ae=Array(Ie);for(var Ke=0;Ke<Ie;Ke++)Ae[Ke]=arguments[Ke+2];Z.children=Ae}return{$$typeof:s,type:O.type,key:oe,ref:Se,props:Z,_owner:ve}},gt.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:c,_context:O},O.Consumer=O},gt.createElement=F,gt.createFactory=function(O){var re=F.bind(null,O);return re.type=O,re},gt.createRef=function(){return{current:null}},gt.forwardRef=function(O){return{$$typeof:h,render:O}},gt.isValidElement=b,gt.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:ce}},gt.memo=function(O,re){return{$$typeof:m,type:O,compare:re===void 0?null:re}},gt.startTransition=function(O){var re=j.transition;j.transition={};try{O()}finally{j.transition=re}},gt.unstable_act=se,gt.useCallback=function(O,re){return ue.current.useCallback(O,re)},gt.useContext=function(O){return ue.current.useContext(O)},gt.useDebugValue=function(){},gt.useDeferredValue=function(O){return ue.current.useDeferredValue(O)},gt.useEffect=function(O,re){return ue.current.useEffect(O,re)},gt.useId=function(){return ue.current.useId()},gt.useImperativeHandle=function(O,re,Le){return ue.current.useImperativeHandle(O,re,Le)},gt.useInsertionEffect=function(O,re){return ue.current.useInsertionEffect(O,re)},gt.useLayoutEffect=function(O,re){return ue.current.useLayoutEffect(O,re)},gt.useMemo=function(O,re){return ue.current.useMemo(O,re)},gt.useReducer=function(O,re,Le){return ue.current.useReducer(O,re,Le)},gt.useRef=function(O){return ue.current.useRef(O)},gt.useState=function(O){return ue.current.useState(O)},gt.useSyncExternalStore=function(O,re,Le){return ue.current.useSyncExternalStore(O,re,Le)},gt.useTransition=function(){return ue.current.useTransition()},gt.version="18.3.1",gt}var Pp;function qd(){return Pp||(Pp=1,vu.exports=px()),vu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function mx(){if(Lp)return ba;Lp=1;var s=qd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(h,p,m){var v,_={},x=null,M=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(M=p.ref);for(v in p)r.call(p,v)&&!c.hasOwnProperty(v)&&(_[v]=p[v]);if(h&&h.defaultProps)for(v in p=h.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:h,key:x,ref:M,props:_,_owner:o.current}}return ba.Fragment=t,ba.jsx=d,ba.jsxs=d,ba}var Dp;function gx(){return Dp||(Dp=1,gu.exports=mx()),gu.exports}var l=gx(),st=qd();const vx=qm(st);var el={},xu={exports:{}},Nn={},_u={exports:{}},yu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function xx(){return Ip||(Ip=1,(function(s){function e(j,le){var se=j.length;j.push(le);e:for(;0<se;){var O=se-1>>>1,re=j[O];if(0<o(re,le))j[O]=le,j[se]=re,se=O;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var le=j[0],se=j.pop();if(se!==le){j[0]=se;e:for(var O=0,re=j.length,Le=re>>>1;O<Le;){var Z=2*(O+1)-1,oe=j[Z],Se=Z+1,ve=j[Se];if(0>o(oe,se))Se<re&&0>o(ve,oe)?(j[O]=ve,j[Se]=se,O=Se):(j[O]=oe,j[Z]=se,O=Z);else if(Se<re&&0>o(ve,se))j[O]=ve,j[Se]=se,O=Se;else break e}}return le}function o(j,le){var se=j.sortIndex-le.sortIndex;return se!==0?se:j.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var p=[],m=[],v=1,_=null,x=3,M=!1,E=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(j){for(var le=t(m);le!==null;){if(le.callback===null)r(m);else if(le.startTime<=j)r(m),le.sortIndex=le.expirationTime,e(p,le);else break;le=t(m)}}function A(j){if(T=!1,P(j),!E)if(t(p)!==null)E=!0,ce(G);else{var le=t(m);le!==null&&ue(A,le.startTime-j)}}function G(j,le){E=!1,T&&(T=!1,y(F),F=-1),M=!0;var se=x;try{for(P(le),_=t(p);_!==null&&(!(_.expirationTime>le)||j&&!z());){var O=_.callback;if(typeof O=="function"){_.callback=null,x=_.priorityLevel;var re=O(_.expirationTime<=le);le=s.unstable_now(),typeof re=="function"?_.callback=re:_===t(p)&&r(p),P(le)}else r(p);_=t(p)}if(_!==null)var Le=!0;else{var Z=t(m);Z!==null&&ue(A,Z.startTime-le),Le=!1}return Le}finally{_=null,x=se,M=!1}}var k=!1,D=null,F=-1,L=5,b=-1;function z(){return!(s.unstable_now()-b<L)}function ie(){if(D!==null){var j=s.unstable_now();b=j;var le=!0;try{le=D(!0,j)}finally{le?Q():(k=!1,D=null)}}else k=!1}var Q;if(typeof R=="function")Q=function(){R(ie)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,he=de.port2;de.port1.onmessage=ie,Q=function(){he.postMessage(null)}}else Q=function(){S(ie,0)};function ce(j){D=j,k||(k=!0,Q())}function ue(j,le){F=S(function(){j(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_continueExecution=function(){E||M||(E=!0,ce(G))},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(j){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var se=x;x=le;try{return j()}finally{x=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(j,le){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var se=x;x=j;try{return le()}finally{x=se}},s.unstable_scheduleCallback=function(j,le,se){var O=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?O+se:O):se=O,j){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=se+re,j={id:v++,callback:le,priorityLevel:j,startTime:se,expirationTime:re,sortIndex:-1},se>O?(j.sortIndex=se,e(m,j),t(p)===null&&j===t(m)&&(T?(y(F),F=-1):T=!0,ue(A,se-O))):(j.sortIndex=re,e(p,j),E||M||(E=!0,ce(G))),j},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(j){var le=x;return function(){var se=x;x=le;try{return j.apply(this,arguments)}finally{x=se}}}})(yu)),yu}var Up;function _x(){return Up||(Up=1,_u.exports=xx()),_u.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function yx(){if(kp)return Nn;kp=1;var s=qd(),e=_x();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function x(n){return p.call(_,n)?!0:p.call(v,n)?!1:m.test(n)?_[n]=!0:(v[n]=!0,!1)}function M(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,u){if(i===null||typeof i>"u"||M(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,a,u,f,g,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=w}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,R);S[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,R);S[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,R);S[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,u){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,f,u)&&(a=null),u||f===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,u=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),k=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),z=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),j=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=j&&n[j]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,O;function re(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Le=!1;function Z(n,i){if(!n||Le)return"";Le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var u=ee}Reflect.construct(n,[],i)}else{try{i.call()}catch(ee){u=ee}n.call(i.prototype)}else{try{throw Error()}catch(ee){u=ee}n()}}catch(ee){if(ee&&u&&typeof ee.stack=="string"){for(var f=ee.stack.split(`
`),g=u.stack.split(`
`),w=f.length-1,U=g.length-1;1<=w&&0<=U&&f[w]!==g[U];)U--;for(;1<=w&&0<=U;w--,U--)if(f[w]!==g[U]){if(w!==1||U!==1)do if(w--,U--,0>U||f[w]!==g[U]){var B=`
`+f[w].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=w&&0<=U);break}}}finally{Le=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?re(n):""}function oe(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case k:return"Portal";case L:return"Profiler";case F:return"StrictMode";case Q:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case b:return(n._context.displayName||"Context")+".Provider";case ie:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return i=n.displayName||null,i!==null?i:Se(n.type)||"Memo";case ce:i=n._payload,n=n._init;try{return Se(n(i))}catch{}}return null}function ve(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(n){var i=Ie(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(w){u=""+w,g.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function qe(n){n._valueTracker||(n._valueTracker=Ke(n))}function at(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Ie(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function _t(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Y(n,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function mn(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=Ae(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function vt(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function pt(n,i){vt(n,i);var a=Ae(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Nt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Nt(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ze(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Nt(n,i,a){(i!=="number"||_t(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var $e=Array.isArray;function I(n,i,a,u){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&u&&(n[a].defaultSelected=!0)}else{for(a=""+Ae(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function C(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function J(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if($e(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ae(a)}}function me(n,i){var a=Ae(i.value),u=Ae(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function xe(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function fe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?fe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ce,Ue=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ft(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Fe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function tt(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function nt(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,f=tt(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,f):n[a]=f}}var Oe=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mt(n,i){if(i){if(Oe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function lt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function W(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var be=null,ae=null,pe=null;function Pe(n){if(n=fa(n)){if(typeof be!="function")throw Error(t(280));var i=n.stateNode;i&&(i=mo(i),be(n.stateNode,n.type,i))}}function Re(n){ae?pe?pe.push(n):pe=[n]:ae=n}function ct(){if(ae){var n=ae,i=pe;if(pe=ae=null,Pe(n),i)for(n=0;n<i.length;n++)Pe(i[n])}}function Ut(n,i){return n(i)}function Xt(){}var Mt=!1;function Mn(n,i,a){if(Mt)return n(i,a);Mt=!0;try{return Ut(n,i,a)}finally{Mt=!1,(ae!==null||pe!==null)&&(Xt(),ct())}}function gn(n,i){var a=n.stateNode;if(a===null)return null;var u=mo(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Jr=!1;if(h)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){Jr=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{Jr=!1}function Mi(n,i,a,u,f,g,w,U,B){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(a,ee)}catch(_e){this.onError(_e)}}var Ei=!1,wr=null,Tr=!1,Xi=null,Ya={onError:function(n){Ei=!0,wr=n}};function Qr(n,i,a,u,f,g,w,U,B){Ei=!1,wr=null,Mi.apply(Ya,arguments)}function $a(n,i,a,u,f,g,w,U,B){if(Qr.apply(this,arguments),Ei){if(Ei){var ee=wr;Ei=!1,wr=null}else throw Error(t(198));Tr||(Tr=!0,Xi=ee)}}function fi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Ka(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Za(n){if(fi(n)!==n)throw Error(t(188))}function Ol(n){var i=n.alternate;if(!i){if(i=fi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(u=f.return,u!==null){a=u;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return Za(f),n;if(g===u)return Za(f),i;g=g.sibling}throw Error(t(188))}if(a.return!==u.return)a=f,u=g;else{for(var w=!1,U=f.child;U;){if(U===a){w=!0,a=f,u=g;break}if(U===u){w=!0,u=f,a=g;break}U=U.sibling}if(!w){for(U=g.child;U;){if(U===a){w=!0,a=g,u=f;break}if(U===u){w=!0,u=g,a=f;break}U=U.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function N(n){return n=Ol(n),n!==null?X(n):null}function X(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=X(n);if(i!==null)return i;n=n.sibling}return null}var te=e.unstable_scheduleCallback,ne=e.unstable_cancelCallback,q=e.unstable_shouldYield,Te=e.unstable_requestPaint,Ee=e.unstable_now,Ve=e.unstable_getCurrentPriorityLevel,ze=e.unstable_ImmediatePriority,it=e.unstable_UserBlockingPriority,ot=e.unstable_NormalPriority,Ge=e.unstable_LowPriority,yt=e.unstable_IdlePriority,Ct=null,xt=null;function sn(n){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Ct,n,void 0,(n.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:Tt,Ye=Math.log,Qn=Math.LN2;function Tt(n){return n>>>=0,n===0?32:31-(Ye(n)/Qn|0)|0}var an=64,ei=4194304;function qt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function pi(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,f=n.suspendedLanes,g=n.pingedLanes,w=a&268435455;if(w!==0){var U=w&~f;U!==0?u=qt(U):(g&=w,g!==0&&(u=qt(g)))}else w=a&~f,w!==0?u=qt(w):g!==0&&(u=qt(g));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,g=i&-i,f>=g||f===16&&(g&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-ut(i),f=1<<a,u|=n[a],i&=~f;return u}function Dt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jn(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,g=n.pendingLanes;0<g;){var w=31-ut(g),U=1<<w,B=f[w];B===-1?((U&a)===0||(U&u)!==0)&&(f[w]=Dt(U,i)):B<=i&&(n.expiredLanes|=U),g&=~U}}function wi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function vn(){var n=an;return an<<=1,(an&4194240)===0&&(an=64),n}function Hn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function En(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ut(i),n[i]=a}function Ja(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-ut(a),g=1<<f;i[f]=0,u[f]=-1,n[f]=-1,a&=~g}}function Bl(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-ut(a),f=1<<u;f&i|n[u]&i&&(n[u]|=i),a&=~f}}var Rt=0;function oh(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var lh,zl,ch,uh,dh,jl=!1,Qa=[],qi=null,Yi=null,$i=null,Zs=new Map,Js=new Map,Ki=[],Ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hh(n,i){switch(n){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":Zs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Js.delete(i.pointerId)}}function Qs(n,i,a,u,f,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:g,targetContainers:[f]},i!==null&&(i=fa(i),i!==null&&zl(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Ug(n,i,a,u,f){switch(i){case"focusin":return qi=Qs(qi,n,i,a,u,f),!0;case"dragenter":return Yi=Qs(Yi,n,i,a,u,f),!0;case"mouseover":return $i=Qs($i,n,i,a,u,f),!0;case"pointerover":var g=f.pointerId;return Zs.set(g,Qs(Zs.get(g)||null,n,i,a,u,f)),!0;case"gotpointercapture":return g=f.pointerId,Js.set(g,Qs(Js.get(g)||null,n,i,a,u,f)),!0}return!1}function fh(n){var i=Ar(n.target);if(i!==null){var a=fi(i);if(a!==null){if(i=a.tag,i===13){if(i=Ka(a),i!==null){n.blockedOn=i,dh(n.priority,function(){ch(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function eo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Vl(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);bt=u,a.target.dispatchEvent(u),bt=null}else return i=fa(a),i!==null&&zl(i),n.blockedOn=a,!1;i.shift()}return!0}function ph(n,i,a){eo(n)&&a.delete(i)}function kg(){jl=!1,qi!==null&&eo(qi)&&(qi=null),Yi!==null&&eo(Yi)&&(Yi=null),$i!==null&&eo($i)&&($i=null),Zs.forEach(ph),Js.forEach(ph)}function ea(n,i){n.blockedOn===i&&(n.blockedOn=null,jl||(jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,kg)))}function ta(n){function i(f){return ea(f,n)}if(0<Qa.length){ea(Qa[0],n);for(var a=1;a<Qa.length;a++){var u=Qa[a];u.blockedOn===n&&(u.blockedOn=null)}}for(qi!==null&&ea(qi,n),Yi!==null&&ea(Yi,n),$i!==null&&ea($i,n),Zs.forEach(i),Js.forEach(i),a=0;a<Ki.length;a++)u=Ki[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Ki.length&&(a=Ki[0],a.blockedOn===null);)fh(a),a.blockedOn===null&&Ki.shift()}var es=A.ReactCurrentBatchConfig,to=!0;function Fg(n,i,a,u){var f=Rt,g=es.transition;es.transition=null;try{Rt=1,Hl(n,i,a,u)}finally{Rt=f,es.transition=g}}function Og(n,i,a,u){var f=Rt,g=es.transition;es.transition=null;try{Rt=4,Hl(n,i,a,u)}finally{Rt=f,es.transition=g}}function Hl(n,i,a,u){if(to){var f=Vl(n,i,a,u);if(f===null)ac(n,i,u,no,a),hh(n,u);else if(Ug(f,n,i,a,u))u.stopPropagation();else if(hh(n,u),i&4&&-1<Ig.indexOf(n)){for(;f!==null;){var g=fa(f);if(g!==null&&lh(g),g=Vl(n,i,a,u),g===null&&ac(n,i,u,no,a),g===f)break;f=g}f!==null&&u.stopPropagation()}else ac(n,i,u,null,a)}}var no=null;function Vl(n,i,a,u){if(no=null,n=W(u),n=Ar(n),n!==null)if(i=fi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Ka(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return no=n,null}function mh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ve()){case ze:return 1;case it:return 4;case ot:case Ge:return 16;case yt:return 536870912;default:return 16}default:return 16}}var Zi=null,Gl=null,io=null;function gh(){if(io)return io;var n,i=Gl,a=i.length,u,f="value"in Zi?Zi.value:Zi.textContent,g=f.length;for(n=0;n<a&&i[n]===f[n];n++);var w=a-n;for(u=1;u<=w&&i[a-u]===f[g-u];u++);return io=f.slice(n,1<u?1-u:void 0)}function ro(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function so(){return!0}function vh(){return!1}function In(n){function i(a,u,f,g,w){this._reactName=a,this._targetInst=f,this.type=u,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(g):g[U]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?so:vh,this.isPropagationStopped=vh,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),i}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wl=In(ts),na=se({},ts,{view:0,detail:0}),Bg=In(na),Xl,ql,ia,ao=se({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$l,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ia&&(ia&&n.type==="mousemove"?(Xl=n.screenX-ia.screenX,ql=n.screenY-ia.screenY):ql=Xl=0,ia=n),Xl)},movementY:function(n){return"movementY"in n?n.movementY:ql}}),xh=In(ao),zg=se({},ao,{dataTransfer:0}),jg=In(zg),Hg=se({},na,{relatedTarget:0}),Yl=In(Hg),Vg=se({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),Gg=In(Vg),Wg=se({},ts,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Xg=In(Wg),qg=se({},ts,{data:0}),_h=In(qg),Yg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$g={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Kg[n])?!!i[n]:!1}function $l(){return Zg}var Jg=se({},na,{key:function(n){if(n.key){var i=Yg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ro(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$g[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$l,charCode:function(n){return n.type==="keypress"?ro(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ro(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Qg=In(Jg),ev=se({},ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yh=In(ev),tv=se({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$l}),nv=In(tv),iv=se({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),rv=In(iv),sv=se({},ao,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),av=In(sv),ov=[9,13,27,32],Kl=h&&"CompositionEvent"in window,ra=null;h&&"documentMode"in document&&(ra=document.documentMode);var lv=h&&"TextEvent"in window&&!ra,Sh=h&&(!Kl||ra&&8<ra&&11>=ra),Mh=" ",Eh=!1;function wh(n,i){switch(n){case"keyup":return ov.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Th(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ns=!1;function cv(n,i){switch(n){case"compositionend":return Th(i);case"keypress":return i.which!==32?null:(Eh=!0,Mh);case"textInput":return n=i.data,n===Mh&&Eh?null:n;default:return null}}function uv(n,i){if(ns)return n==="compositionend"||!Kl&&wh(n,i)?(n=gh(),io=Gl=Zi=null,ns=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Sh&&i.locale!=="ko"?null:i.data;default:return null}}var dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ah(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!dv[n.type]:i==="textarea"}function Ch(n,i,a,u){Re(u),i=ho(i,"onChange"),0<i.length&&(a=new Wl("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var sa=null,aa=null;function hv(n){Wh(n,0)}function oo(n){var i=os(n);if(at(i))return n}function fv(n,i){if(n==="change")return i}var bh=!1;if(h){var Zl;if(h){var Jl="oninput"in document;if(!Jl){var Nh=document.createElement("div");Nh.setAttribute("oninput","return;"),Jl=typeof Nh.oninput=="function"}Zl=Jl}else Zl=!1;bh=Zl&&(!document.documentMode||9<document.documentMode)}function Rh(){sa&&(sa.detachEvent("onpropertychange",Ph),aa=sa=null)}function Ph(n){if(n.propertyName==="value"&&oo(aa)){var i=[];Ch(i,aa,n,W(n)),Mn(hv,i)}}function pv(n,i,a){n==="focusin"?(Rh(),sa=i,aa=a,sa.attachEvent("onpropertychange",Ph)):n==="focusout"&&Rh()}function mv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return oo(aa)}function gv(n,i){if(n==="click")return oo(i)}function vv(n,i){if(n==="input"||n==="change")return oo(i)}function xv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ti=typeof Object.is=="function"?Object.is:xv;function oa(n,i){if(ti(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var f=a[u];if(!p.call(i,f)||!ti(n[f],i[f]))return!1}return!0}function Lh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Dh(n,i){var a=Lh(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Lh(a)}}function Ih(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Ih(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Uh(){for(var n=window,i=_t();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=_t(n.document)}return i}function Ql(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function _v(n){var i=Uh(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Ih(a.ownerDocument.documentElement,a)){if(u!==null&&Ql(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,g=Math.min(u.start,f);u=u.end===void 0?g:Math.min(u.end,f),!n.extend&&g>u&&(f=u,u=g,g=f),f=Dh(a,g);var w=Dh(a,u);f&&w&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),g>u?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var yv=h&&"documentMode"in document&&11>=document.documentMode,is=null,ec=null,la=null,tc=!1;function kh(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;tc||is==null||is!==_t(u)||(u=is,"selectionStart"in u&&Ql(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),la&&oa(la,u)||(la=u,u=ho(ec,"onSelect"),0<u.length&&(i=new Wl("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=is)))}function lo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var rs={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},nc={},Fh={};h&&(Fh=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function co(n){if(nc[n])return nc[n];if(!rs[n])return n;var i=rs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Fh)return nc[n]=i[a];return n}var Oh=co("animationend"),Bh=co("animationiteration"),zh=co("animationstart"),jh=co("transitionend"),Hh=new Map,Vh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(n,i){Hh.set(n,i),c(i,[n])}for(var ic=0;ic<Vh.length;ic++){var rc=Vh[ic],Sv=rc.toLowerCase(),Mv=rc[0].toUpperCase()+rc.slice(1);Ji(Sv,"on"+Mv)}Ji(Oh,"onAnimationEnd"),Ji(Bh,"onAnimationIteration"),Ji(zh,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(jh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ev=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function Gh(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,$a(u,i,void 0,n),n.currentTarget=null}function Wh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],f=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var w=u.length-1;0<=w;w--){var U=u[w],B=U.instance,ee=U.currentTarget;if(U=U.listener,B!==g&&f.isPropagationStopped())break e;Gh(f,U,ee),g=B}else for(w=0;w<u.length;w++){if(U=u[w],B=U.instance,ee=U.currentTarget,U=U.listener,B!==g&&f.isPropagationStopped())break e;Gh(f,U,ee),g=B}}}if(Tr)throw n=Xi,Tr=!1,Xi=null,n}function kt(n,i){var a=i[hc];a===void 0&&(a=i[hc]=new Set);var u=n+"__bubble";a.has(u)||(Xh(i,n,2,!1),a.add(u))}function sc(n,i,a){var u=0;i&&(u|=4),Xh(a,n,u,i)}var uo="_reactListening"+Math.random().toString(36).slice(2);function ua(n){if(!n[uo]){n[uo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Ev.has(a)||sc(a,!1,n),sc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[uo]||(i[uo]=!0,sc("selectionchange",!1,i))}}function Xh(n,i,a,u){switch(mh(i)){case 1:var f=Fg;break;case 4:f=Og;break;default:f=Hl}a=f.bind(null,i,a,n),f=void 0,!Jr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function ac(n,i,a,u,f){var g=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var U=u.stateNode.containerInfo;if(U===f||U.nodeType===8&&U.parentNode===f)break;if(w===4)for(w=u.return;w!==null;){var B=w.tag;if((B===3||B===4)&&(B=w.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;w=w.return}for(;U!==null;){if(w=Ar(U),w===null)return;if(B=w.tag,B===5||B===6){u=g=w;continue e}U=U.parentNode}}u=u.return}Mn(function(){var ee=g,_e=W(a),ye=[];e:{var ge=Hh.get(n);if(ge!==void 0){var De=Wl,Be=n;switch(n){case"keypress":if(ro(a)===0)break e;case"keydown":case"keyup":De=Qg;break;case"focusin":Be="focus",De=Yl;break;case"focusout":Be="blur",De=Yl;break;case"beforeblur":case"afterblur":De=Yl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=jg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=nv;break;case Oh:case Bh:case zh:De=Gg;break;case jh:De=rv;break;case"scroll":De=Bg;break;case"wheel":De=av;break;case"copy":case"cut":case"paste":De=Xg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=yh}var je=(i&4)!==0,Vt=!je&&n==="scroll",$=je?ge!==null?ge+"Capture":null:ge;je=[];for(var V=ee,K;V!==null;){K=V;var we=K.stateNode;if(K.tag===5&&we!==null&&(K=we,$!==null&&(we=gn(V,$),we!=null&&je.push(da(V,we,K)))),Vt)break;V=V.return}0<je.length&&(ge=new De(ge,Be,null,a,_e),ye.push({event:ge,listeners:je}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",De=n==="mouseout"||n==="pointerout",ge&&a!==bt&&(Be=a.relatedTarget||a.fromElement)&&(Ar(Be)||Be[Ti]))break e;if((De||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,De?(Be=a.relatedTarget||a.toElement,De=ee,Be=Be?Ar(Be):null,Be!==null&&(Vt=fi(Be),Be!==Vt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(De=null,Be=ee),De!==Be)){if(je=xh,we="onMouseLeave",$="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(je=yh,we="onPointerLeave",$="onPointerEnter",V="pointer"),Vt=De==null?ge:os(De),K=Be==null?ge:os(Be),ge=new je(we,V+"leave",De,a,_e),ge.target=Vt,ge.relatedTarget=K,we=null,Ar(_e)===ee&&(je=new je($,V+"enter",Be,a,_e),je.target=K,je.relatedTarget=Vt,we=je),Vt=we,De&&Be)t:{for(je=De,$=Be,V=0,K=je;K;K=ss(K))V++;for(K=0,we=$;we;we=ss(we))K++;for(;0<V-K;)je=ss(je),V--;for(;0<K-V;)$=ss($),K--;for(;V--;){if(je===$||$!==null&&je===$.alternate)break t;je=ss(je),$=ss($)}je=null}else je=null;De!==null&&qh(ye,ge,De,je,!1),Be!==null&&Vt!==null&&qh(ye,Vt,Be,je,!0)}}e:{if(ge=ee?os(ee):window,De=ge.nodeName&&ge.nodeName.toLowerCase(),De==="select"||De==="input"&&ge.type==="file")var We=fv;else if(Ah(ge))if(bh)We=vv;else{We=mv;var Je=pv}else(De=ge.nodeName)&&De.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(We=gv);if(We&&(We=We(n,ee))){Ch(ye,We,a,_e);break e}Je&&Je(n,ge,ee),n==="focusout"&&(Je=ge._wrapperState)&&Je.controlled&&ge.type==="number"&&Nt(ge,"number",ge.value)}switch(Je=ee?os(ee):window,n){case"focusin":(Ah(Je)||Je.contentEditable==="true")&&(is=Je,ec=ee,la=null);break;case"focusout":la=ec=is=null;break;case"mousedown":tc=!0;break;case"contextmenu":case"mouseup":case"dragend":tc=!1,kh(ye,a,_e);break;case"selectionchange":if(yv)break;case"keydown":case"keyup":kh(ye,a,_e)}var Qe;if(Kl)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else ns?wh(n,a)&&(rt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(Sh&&a.locale!=="ko"&&(ns||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&ns&&(Qe=gh()):(Zi=_e,Gl="value"in Zi?Zi.value:Zi.textContent,ns=!0)),Je=ho(ee,rt),0<Je.length&&(rt=new _h(rt,n,null,a,_e),ye.push({event:rt,listeners:Je}),Qe?rt.data=Qe:(Qe=Th(a),Qe!==null&&(rt.data=Qe)))),(Qe=lv?cv(n,a):uv(n,a))&&(ee=ho(ee,"onBeforeInput"),0<ee.length&&(_e=new _h("onBeforeInput","beforeinput",null,a,_e),ye.push({event:_e,listeners:ee}),_e.data=Qe))}Wh(ye,i)})}function da(n,i,a){return{instance:n,listener:i,currentTarget:a}}function ho(n,i){for(var a=i+"Capture",u=[];n!==null;){var f=n,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=gn(n,a),g!=null&&u.unshift(da(n,g,f)),g=gn(n,i),g!=null&&u.push(da(n,g,f))),n=n.return}return u}function ss(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function qh(n,i,a,u,f){for(var g=i._reactName,w=[];a!==null&&a!==u;){var U=a,B=U.alternate,ee=U.stateNode;if(B!==null&&B===u)break;U.tag===5&&ee!==null&&(U=ee,f?(B=gn(a,g),B!=null&&w.unshift(da(a,B,U))):f||(B=gn(a,g),B!=null&&w.push(da(a,B,U)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var wv=/\r\n?/g,Tv=/\u0000|\uFFFD/g;function Yh(n){return(typeof n=="string"?n:""+n).replace(wv,`
`).replace(Tv,"")}function fo(n,i,a){if(i=Yh(i),Yh(n)!==i&&a)throw Error(t(425))}function po(){}var oc=null,lc=null;function cc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var uc=typeof setTimeout=="function"?setTimeout:void 0,Av=typeof clearTimeout=="function"?clearTimeout:void 0,$h=typeof Promise=="function"?Promise:void 0,Cv=typeof queueMicrotask=="function"?queueMicrotask:typeof $h<"u"?function(n){return $h.resolve(null).then(n).catch(bv)}:uc;function bv(n){setTimeout(function(){throw n})}function dc(n,i){var a=i,u=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(u===0){n.removeChild(f),ta(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=f}while(a);ta(i)}function Qi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Kh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var as=Math.random().toString(36).slice(2),mi="__reactFiber$"+as,ha="__reactProps$"+as,Ti="__reactContainer$"+as,hc="__reactEvents$"+as,Nv="__reactListeners$"+as,Rv="__reactHandles$"+as;function Ar(n){var i=n[mi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ti]||a[mi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Kh(n);n!==null;){if(a=n[mi])return a;n=Kh(n)}return i}n=a,a=n.parentNode}return null}function fa(n){return n=n[mi]||n[Ti],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function os(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function mo(n){return n[ha]||null}var fc=[],ls=-1;function er(n){return{current:n}}function Ft(n){0>ls||(n.current=fc[ls],fc[ls]=null,ls--)}function It(n,i){ls++,fc[ls]=n.current,n.current=i}var tr={},on=er(tr),wn=er(!1),Cr=tr;function cs(n,i){var a=n.type.contextTypes;if(!a)return tr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=i[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Tn(n){return n=n.childContextTypes,n!=null}function go(){Ft(wn),Ft(on)}function Zh(n,i,a){if(on.current!==tr)throw Error(t(168));It(on,i),It(wn,a)}function Jh(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(t(108,ve(n)||"Unknown",f));return se({},a,u)}function vo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||tr,Cr=on.current,It(on,n),It(wn,wn.current),!0}function Qh(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Jh(n,i,Cr),u.__reactInternalMemoizedMergedChildContext=n,Ft(wn),Ft(on),It(on,n)):Ft(wn),It(wn,a)}var Ai=null,xo=!1,pc=!1;function ef(n){Ai===null?Ai=[n]:Ai.push(n)}function Pv(n){xo=!0,ef(n)}function nr(){if(!pc&&Ai!==null){pc=!0;var n=0,i=Rt;try{var a=Ai;for(Rt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Ai=null,xo=!1}catch(f){throw Ai!==null&&(Ai=Ai.slice(n+1)),te(ze,nr),f}finally{Rt=i,pc=!1}}return null}var us=[],ds=0,_o=null,yo=0,Vn=[],Gn=0,br=null,Ci=1,bi="";function Nr(n,i){us[ds++]=yo,us[ds++]=_o,_o=n,yo=i}function tf(n,i,a){Vn[Gn++]=Ci,Vn[Gn++]=bi,Vn[Gn++]=br,br=n;var u=Ci;n=bi;var f=32-ut(u)-1;u&=~(1<<f),a+=1;var g=32-ut(i)+f;if(30<g){var w=f-f%5;g=(u&(1<<w)-1).toString(32),u>>=w,f-=w,Ci=1<<32-ut(i)+f|a<<f|u,bi=g+n}else Ci=1<<g|a<<f|u,bi=n}function mc(n){n.return!==null&&(Nr(n,1),tf(n,1,0))}function gc(n){for(;n===_o;)_o=us[--ds],us[ds]=null,yo=us[--ds],us[ds]=null;for(;n===br;)br=Vn[--Gn],Vn[Gn]=null,bi=Vn[--Gn],Vn[Gn]=null,Ci=Vn[--Gn],Vn[Gn]=null}var Un=null,kn=null,Bt=!1,ni=null;function nf(n,i){var a=Yn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function rf(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Un=n,kn=Qi(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Un=n,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=br!==null?{id:Ci,overflow:bi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Yn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Un=n,kn=null,!0):!1;default:return!1}}function vc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function xc(n){if(Bt){var i=kn;if(i){var a=i;if(!rf(n,i)){if(vc(n))throw Error(t(418));i=Qi(a.nextSibling);var u=Un;i&&rf(n,i)?nf(u,a):(n.flags=n.flags&-4097|2,Bt=!1,Un=n)}}else{if(vc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Bt=!1,Un=n}}}function sf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Un=n}function So(n){if(n!==Un)return!1;if(!Bt)return sf(n),Bt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!cc(n.type,n.memoizedProps)),i&&(i=kn)){if(vc(n))throw af(),Error(t(418));for(;i;)nf(n,i),i=Qi(i.nextSibling)}if(sf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){kn=Qi(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}kn=null}}else kn=Un?Qi(n.stateNode.nextSibling):null;return!0}function af(){for(var n=kn;n;)n=Qi(n.nextSibling)}function hs(){kn=Un=null,Bt=!1}function _c(n){ni===null?ni=[n]:ni.push(n)}var Lv=A.ReactCurrentBatchConfig;function pa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var f=u,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(w){var U=f.refs;w===null?delete U[g]:U[g]=w},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Mo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function of(n){var i=n._init;return i(n._payload)}function lf(n){function i($,V){if(n){var K=$.deletions;K===null?($.deletions=[V],$.flags|=16):K.push(V)}}function a($,V){if(!n)return null;for(;V!==null;)i($,V),V=V.sibling;return null}function u($,V){for($=new Map;V!==null;)V.key!==null?$.set(V.key,V):$.set(V.index,V),V=V.sibling;return $}function f($,V){return $=ur($,V),$.index=0,$.sibling=null,$}function g($,V,K){return $.index=K,n?(K=$.alternate,K!==null?(K=K.index,K<V?($.flags|=2,V):K):($.flags|=2,V)):($.flags|=1048576,V)}function w($){return n&&$.alternate===null&&($.flags|=2),$}function U($,V,K,we){return V===null||V.tag!==6?(V=uu(K,$.mode,we),V.return=$,V):(V=f(V,K),V.return=$,V)}function B($,V,K,we){var We=K.type;return We===D?_e($,V,K.props.children,we,K.key):V!==null&&(V.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ce&&of(We)===V.type)?(we=f(V,K.props),we.ref=pa($,V,K),we.return=$,we):(we=Xo(K.type,K.key,K.props,null,$.mode,we),we.ref=pa($,V,K),we.return=$,we)}function ee($,V,K,we){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=du(K,$.mode,we),V.return=$,V):(V=f(V,K.children||[]),V.return=$,V)}function _e($,V,K,we,We){return V===null||V.tag!==7?(V=Fr(K,$.mode,we,We),V.return=$,V):(V=f(V,K),V.return=$,V)}function ye($,V,K){if(typeof V=="string"&&V!==""||typeof V=="number")return V=uu(""+V,$.mode,K),V.return=$,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case G:return K=Xo(V.type,V.key,V.props,null,$.mode,K),K.ref=pa($,null,V),K.return=$,K;case k:return V=du(V,$.mode,K),V.return=$,V;case ce:var we=V._init;return ye($,we(V._payload),K)}if($e(V)||le(V))return V=Fr(V,$.mode,K,null),V.return=$,V;Mo($,V)}return null}function ge($,V,K,we){var We=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return We!==null?null:U($,V,""+K,we);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case G:return K.key===We?B($,V,K,we):null;case k:return K.key===We?ee($,V,K,we):null;case ce:return We=K._init,ge($,V,We(K._payload),we)}if($e(K)||le(K))return We!==null?null:_e($,V,K,we,null);Mo($,K)}return null}function De($,V,K,we,We){if(typeof we=="string"&&we!==""||typeof we=="number")return $=$.get(K)||null,U(V,$,""+we,We);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case G:return $=$.get(we.key===null?K:we.key)||null,B(V,$,we,We);case k:return $=$.get(we.key===null?K:we.key)||null,ee(V,$,we,We);case ce:var Je=we._init;return De($,V,K,Je(we._payload),We)}if($e(we)||le(we))return $=$.get(K)||null,_e(V,$,we,We,null);Mo(V,we)}return null}function Be($,V,K,we){for(var We=null,Je=null,Qe=V,rt=V=0,en=null;Qe!==null&&rt<K.length;rt++){Qe.index>rt?(en=Qe,Qe=null):en=Qe.sibling;var At=ge($,Qe,K[rt],we);if(At===null){Qe===null&&(Qe=en);break}n&&Qe&&At.alternate===null&&i($,Qe),V=g(At,V,rt),Je===null?We=At:Je.sibling=At,Je=At,Qe=en}if(rt===K.length)return a($,Qe),Bt&&Nr($,rt),We;if(Qe===null){for(;rt<K.length;rt++)Qe=ye($,K[rt],we),Qe!==null&&(V=g(Qe,V,rt),Je===null?We=Qe:Je.sibling=Qe,Je=Qe);return Bt&&Nr($,rt),We}for(Qe=u($,Qe);rt<K.length;rt++)en=De(Qe,$,rt,K[rt],we),en!==null&&(n&&en.alternate!==null&&Qe.delete(en.key===null?rt:en.key),V=g(en,V,rt),Je===null?We=en:Je.sibling=en,Je=en);return n&&Qe.forEach(function(dr){return i($,dr)}),Bt&&Nr($,rt),We}function je($,V,K,we){var We=le(K);if(typeof We!="function")throw Error(t(150));if(K=We.call(K),K==null)throw Error(t(151));for(var Je=We=null,Qe=V,rt=V=0,en=null,At=K.next();Qe!==null&&!At.done;rt++,At=K.next()){Qe.index>rt?(en=Qe,Qe=null):en=Qe.sibling;var dr=ge($,Qe,At.value,we);if(dr===null){Qe===null&&(Qe=en);break}n&&Qe&&dr.alternate===null&&i($,Qe),V=g(dr,V,rt),Je===null?We=dr:Je.sibling=dr,Je=dr,Qe=en}if(At.done)return a($,Qe),Bt&&Nr($,rt),We;if(Qe===null){for(;!At.done;rt++,At=K.next())At=ye($,At.value,we),At!==null&&(V=g(At,V,rt),Je===null?We=At:Je.sibling=At,Je=At);return Bt&&Nr($,rt),We}for(Qe=u($,Qe);!At.done;rt++,At=K.next())At=De(Qe,$,rt,At.value,we),At!==null&&(n&&At.alternate!==null&&Qe.delete(At.key===null?rt:At.key),V=g(At,V,rt),Je===null?We=At:Je.sibling=At,Je=At);return n&&Qe.forEach(function(dx){return i($,dx)}),Bt&&Nr($,rt),We}function Vt($,V,K,we){if(typeof K=="object"&&K!==null&&K.type===D&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case G:e:{for(var We=K.key,Je=V;Je!==null;){if(Je.key===We){if(We=K.type,We===D){if(Je.tag===7){a($,Je.sibling),V=f(Je,K.props.children),V.return=$,$=V;break e}}else if(Je.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ce&&of(We)===Je.type){a($,Je.sibling),V=f(Je,K.props),V.ref=pa($,Je,K),V.return=$,$=V;break e}a($,Je);break}else i($,Je);Je=Je.sibling}K.type===D?(V=Fr(K.props.children,$.mode,we,K.key),V.return=$,$=V):(we=Xo(K.type,K.key,K.props,null,$.mode,we),we.ref=pa($,V,K),we.return=$,$=we)}return w($);case k:e:{for(Je=K.key;V!==null;){if(V.key===Je)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a($,V.sibling),V=f(V,K.children||[]),V.return=$,$=V;break e}else{a($,V);break}else i($,V);V=V.sibling}V=du(K,$.mode,we),V.return=$,$=V}return w($);case ce:return Je=K._init,Vt($,V,Je(K._payload),we)}if($e(K))return Be($,V,K,we);if(le(K))return je($,V,K,we);Mo($,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,V!==null&&V.tag===6?(a($,V.sibling),V=f(V,K),V.return=$,$=V):(a($,V),V=uu(K,$.mode,we),V.return=$,$=V),w($)):a($,V)}return Vt}var fs=lf(!0),cf=lf(!1),Eo=er(null),wo=null,ps=null,yc=null;function Sc(){yc=ps=wo=null}function Mc(n){var i=Eo.current;Ft(Eo),n._currentValue=i}function Ec(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function ms(n,i){wo=n,yc=ps=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(An=!0),n.firstContext=null)}function Wn(n){var i=n._currentValue;if(yc!==n)if(n={context:n,memoizedValue:i,next:null},ps===null){if(wo===null)throw Error(t(308));ps=n,wo.dependencies={lanes:0,firstContext:n}}else ps=ps.next=n;return i}var Rr=null;function wc(n){Rr===null?Rr=[n]:Rr.push(n)}function uf(n,i,a,u){var f=i.interleaved;return f===null?(a.next=a,wc(i)):(a.next=f.next,f.next=a),i.interleaved=a,Ni(n,u)}function Ni(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ir=!1;function Tc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function df(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ri(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Et&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,Ni(n,a)}return f=u.interleaved,f===null?(i.next=i,wc(u)):(i.next=f.next,f.next=i),u.interleaved=i,Ni(n,a)}function To(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Bl(n,a)}}function hf(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?f=g=i:g=g.next=i}else f=g=i;a={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Ao(n,i,a,u){var f=n.updateQueue;ir=!1;var g=f.firstBaseUpdate,w=f.lastBaseUpdate,U=f.shared.pending;if(U!==null){f.shared.pending=null;var B=U,ee=B.next;B.next=null,w===null?g=ee:w.next=ee,w=B;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,U=_e.lastBaseUpdate,U!==w&&(U===null?_e.firstBaseUpdate=ee:U.next=ee,_e.lastBaseUpdate=B))}if(g!==null){var ye=f.baseState;w=0,_e=ee=B=null,U=g;do{var ge=U.lane,De=U.eventTime;if((u&ge)===ge){_e!==null&&(_e=_e.next={eventTime:De,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Be=n,je=U;switch(ge=i,De=a,je.tag){case 1:if(Be=je.payload,typeof Be=="function"){ye=Be.call(De,ye,ge);break e}ye=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=je.payload,ge=typeof Be=="function"?Be.call(De,ye,ge):Be,ge==null)break e;ye=se({},ye,ge);break e;case 2:ir=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,ge=f.effects,ge===null?f.effects=[U]:ge.push(U))}else De={eventTime:De,lane:ge,tag:U.tag,payload:U.payload,callback:U.callback,next:null},_e===null?(ee=_e=De,B=ye):_e=_e.next=De,w|=ge;if(U=U.next,U===null){if(U=f.shared.pending,U===null)break;ge=U,U=ge.next,ge.next=null,f.lastBaseUpdate=ge,f.shared.pending=null}}while(!0);if(_e===null&&(B=ye),f.baseState=B,f.firstBaseUpdate=ee,f.lastBaseUpdate=_e,i=f.shared.interleaved,i!==null){f=i;do w|=f.lane,f=f.next;while(f!==i)}else g===null&&(f.shared.lanes=0);Dr|=w,n.lanes=w,n.memoizedState=ye}}function ff(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],f=u.callback;if(f!==null){if(u.callback=null,u=a,typeof f!="function")throw Error(t(191,f));f.call(u)}}}var ma={},gi=er(ma),ga=er(ma),va=er(ma);function Pr(n){if(n===ma)throw Error(t(174));return n}function Ac(n,i){switch(It(va,i),It(ga,n),It(gi,ma),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:He(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=He(i,n)}Ft(gi),It(gi,i)}function gs(){Ft(gi),Ft(ga),Ft(va)}function pf(n){Pr(va.current);var i=Pr(gi.current),a=He(i,n.type);i!==a&&(It(ga,n),It(gi,a))}function Cc(n){ga.current===n&&(Ft(gi),Ft(ga))}var zt=er(0);function Co(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var bc=[];function Nc(){for(var n=0;n<bc.length;n++)bc[n]._workInProgressVersionPrimary=null;bc.length=0}var bo=A.ReactCurrentDispatcher,Rc=A.ReactCurrentBatchConfig,Lr=0,jt=null,Yt=null,Jt=null,No=!1,xa=!1,_a=0,Dv=0;function ln(){throw Error(t(321))}function Pc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ti(n[a],i[a]))return!1;return!0}function Lc(n,i,a,u,f,g){if(Lr=g,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,bo.current=n===null||n.memoizedState===null?Fv:Ov,n=a(u,f),xa){g=0;do{if(xa=!1,_a=0,25<=g)throw Error(t(301));g+=1,Jt=Yt=null,i.updateQueue=null,bo.current=Bv,n=a(u,f)}while(xa)}if(bo.current=Lo,i=Yt!==null&&Yt.next!==null,Lr=0,Jt=Yt=jt=null,No=!1,i)throw Error(t(300));return n}function Dc(){var n=_a!==0;return _a=0,n}function vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?jt.memoizedState=Jt=n:Jt=Jt.next=n,Jt}function Xn(){if(Yt===null){var n=jt.alternate;n=n!==null?n.memoizedState:null}else n=Yt.next;var i=Jt===null?jt.memoizedState:Jt.next;if(i!==null)Jt=i,Yt=n;else{if(n===null)throw Error(t(310));Yt=n,n={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Jt===null?jt.memoizedState=Jt=n:Jt=Jt.next=n}return Jt}function ya(n,i){return typeof i=="function"?i(n):i}function Ic(n){var i=Xn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=Yt,f=u.baseQueue,g=a.pending;if(g!==null){if(f!==null){var w=f.next;f.next=g.next,g.next=w}u.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,u=u.baseState;var U=w=null,B=null,ee=g;do{var _e=ee.lane;if((Lr&_e)===_e)B!==null&&(B=B.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),u=ee.hasEagerState?ee.eagerState:n(u,ee.action);else{var ye={lane:_e,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};B===null?(U=B=ye,w=u):B=B.next=ye,jt.lanes|=_e,Dr|=_e}ee=ee.next}while(ee!==null&&ee!==g);B===null?w=u:B.next=U,ti(u,i.memoizedState)||(An=!0),i.memoizedState=u,i.baseState=w,i.baseQueue=B,a.lastRenderedState=u}if(n=a.interleaved,n!==null){f=n;do g=f.lane,jt.lanes|=g,Dr|=g,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Uc(n){var i=Xn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,f=a.pending,g=i.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do g=n(g,w.action),w=w.next;while(w!==f);ti(g,i.memoizedState)||(An=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,u]}function mf(){}function gf(n,i){var a=jt,u=Xn(),f=i(),g=!ti(u.memoizedState,f);if(g&&(u.memoizedState=f,An=!0),u=u.queue,kc(_f.bind(null,a,u,n),[n]),u.getSnapshot!==i||g||Jt!==null&&Jt.memoizedState.tag&1){if(a.flags|=2048,Sa(9,xf.bind(null,a,u,f,i),void 0,null),Qt===null)throw Error(t(349));(Lr&30)!==0||vf(a,i,f)}return f}function vf(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function xf(n,i,a,u){i.value=a,i.getSnapshot=u,yf(i)&&Sf(n)}function _f(n,i,a){return a(function(){yf(i)&&Sf(n)})}function yf(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ti(n,a)}catch{return!0}}function Sf(n){var i=Ni(n,1);i!==null&&ai(i,n,1,-1)}function Mf(n){var i=vi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:n},i.queue=n,n=n.dispatch=kv.bind(null,jt,n),[i.memoizedState,n]}function Sa(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Ef(){return Xn().memoizedState}function Ro(n,i,a,u){var f=vi();jt.flags|=n,f.memoizedState=Sa(1|i,a,void 0,u===void 0?null:u)}function Po(n,i,a,u){var f=Xn();u=u===void 0?null:u;var g=void 0;if(Yt!==null){var w=Yt.memoizedState;if(g=w.destroy,u!==null&&Pc(u,w.deps)){f.memoizedState=Sa(i,a,g,u);return}}jt.flags|=n,f.memoizedState=Sa(1|i,a,g,u)}function wf(n,i){return Ro(8390656,8,n,i)}function kc(n,i){return Po(2048,8,n,i)}function Tf(n,i){return Po(4,2,n,i)}function Af(n,i){return Po(4,4,n,i)}function Cf(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function bf(n,i,a){return a=a!=null?a.concat([n]):null,Po(4,4,Cf.bind(null,i,n),a)}function Fc(){}function Nf(n,i){var a=Xn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Pc(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Rf(n,i){var a=Xn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Pc(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function Pf(n,i,a){return(Lr&21)===0?(n.baseState&&(n.baseState=!1,An=!0),n.memoizedState=a):(ti(a,i)||(a=vn(),jt.lanes|=a,Dr|=a,n.baseState=!0),i)}function Iv(n,i){var a=Rt;Rt=a!==0&&4>a?a:4,n(!0);var u=Rc.transition;Rc.transition={};try{n(!1),i()}finally{Rt=a,Rc.transition=u}}function Lf(){return Xn().memoizedState}function Uv(n,i,a){var u=lr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Df(n))If(i,a);else if(a=uf(n,i,a,u),a!==null){var f=_n();ai(a,n,u,f),Uf(a,i,u)}}function kv(n,i,a){var u=lr(n),f={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Df(n))If(i,f);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var w=i.lastRenderedState,U=g(w,a);if(f.hasEagerState=!0,f.eagerState=U,ti(U,w)){var B=i.interleaved;B===null?(f.next=f,wc(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}a=uf(n,i,f,u),a!==null&&(f=_n(),ai(a,n,u,f),Uf(a,i,u))}}function Df(n){var i=n.alternate;return n===jt||i!==null&&i===jt}function If(n,i){xa=No=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Uf(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Bl(n,a)}}var Lo={readContext:Wn,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},Fv={readContext:Wn,useCallback:function(n,i){return vi().memoizedState=[n,i===void 0?null:i],n},useContext:Wn,useEffect:wf,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Ro(4194308,4,Cf.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Ro(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ro(4,2,n,i)},useMemo:function(n,i){var a=vi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=vi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Uv.bind(null,jt,n),[u.memoizedState,n]},useRef:function(n){var i=vi();return n={current:n},i.memoizedState=n},useState:Mf,useDebugValue:Fc,useDeferredValue:function(n){return vi().memoizedState=n},useTransition:function(){var n=Mf(!1),i=n[0];return n=Iv.bind(null,n[1]),vi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=jt,f=vi();if(Bt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Qt===null)throw Error(t(349));(Lr&30)!==0||vf(u,i,a)}f.memoizedState=a;var g={value:a,getSnapshot:i};return f.queue=g,wf(_f.bind(null,u,g,n),[n]),u.flags|=2048,Sa(9,xf.bind(null,u,g,a,i),void 0,null),a},useId:function(){var n=vi(),i=Qt.identifierPrefix;if(Bt){var a=bi,u=Ci;a=(u&~(1<<32-ut(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=_a++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Dv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Ov={readContext:Wn,useCallback:Nf,useContext:Wn,useEffect:kc,useImperativeHandle:bf,useInsertionEffect:Tf,useLayoutEffect:Af,useMemo:Rf,useReducer:Ic,useRef:Ef,useState:function(){return Ic(ya)},useDebugValue:Fc,useDeferredValue:function(n){var i=Xn();return Pf(i,Yt.memoizedState,n)},useTransition:function(){var n=Ic(ya)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:mf,useSyncExternalStore:gf,useId:Lf,unstable_isNewReconciler:!1},Bv={readContext:Wn,useCallback:Nf,useContext:Wn,useEffect:kc,useImperativeHandle:bf,useInsertionEffect:Tf,useLayoutEffect:Af,useMemo:Rf,useReducer:Uc,useRef:Ef,useState:function(){return Uc(ya)},useDebugValue:Fc,useDeferredValue:function(n){var i=Xn();return Yt===null?i.memoizedState=n:Pf(i,Yt.memoizedState,n)},useTransition:function(){var n=Uc(ya)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:mf,useSyncExternalStore:gf,useId:Lf,unstable_isNewReconciler:!1};function ii(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Oc(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:se({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Do={isMounted:function(n){return(n=n._reactInternals)?fi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=_n(),f=lr(n),g=Ri(u,f);g.payload=i,a!=null&&(g.callback=a),i=rr(n,g,f),i!==null&&(ai(i,n,f,u),To(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=_n(),f=lr(n),g=Ri(u,f);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=rr(n,g,f),i!==null&&(ai(i,n,f,u),To(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=_n(),u=lr(n),f=Ri(a,u);f.tag=2,i!=null&&(f.callback=i),i=rr(n,f,u),i!==null&&(ai(i,n,u,a),To(i,n,u))}};function kf(n,i,a,u,f,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,w):i.prototype&&i.prototype.isPureReactComponent?!oa(a,u)||!oa(f,g):!0}function Ff(n,i,a){var u=!1,f=tr,g=i.contextType;return typeof g=="object"&&g!==null?g=Wn(g):(f=Tn(i)?Cr:on.current,u=i.contextTypes,g=(u=u!=null)?cs(n,f):tr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Do,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=g),i}function Of(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&Do.enqueueReplaceState(i,i.state,null)}function Bc(n,i,a,u){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},Tc(n);var g=i.contextType;typeof g=="object"&&g!==null?f.context=Wn(g):(g=Tn(i)?Cr:on.current,f.context=cs(n,g)),f.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Oc(n,i,g,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Do.enqueueReplaceState(f,f.state,null),Ao(n,a,f,u),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function vs(n,i){try{var a="",u=i;do a+=oe(u),u=u.return;while(u);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:f,digest:null}}function zc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function jc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var zv=typeof WeakMap=="function"?WeakMap:Map;function Bf(n,i,a){a=Ri(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){zo||(zo=!0,nu=u),jc(n,i)},a}function zf(n,i,a){a=Ri(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;a.payload=function(){return u(f)},a.callback=function(){jc(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){jc(n,i),typeof u!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function jf(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new zv;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(a)||(f.add(a),n=ex.bind(null,n,i,a),i.then(n,n))}function Hf(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Vf(n,i,a,u,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ri(-1,1),i.tag=2,rr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var jv=A.ReactCurrentOwner,An=!1;function xn(n,i,a,u){i.child=n===null?cf(i,null,a,u):fs(i,n.child,a,u)}function Gf(n,i,a,u,f){a=a.render;var g=i.ref;return ms(i,f),u=Lc(n,i,a,u,g,f),a=Dc(),n!==null&&!An?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Pi(n,i,f)):(Bt&&a&&mc(i),i.flags|=1,xn(n,i,u,f),i.child)}function Wf(n,i,a,u,f){if(n===null){var g=a.type;return typeof g=="function"&&!cu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Xf(n,i,g,u,f)):(n=Xo(a.type,null,u,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&f)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:oa,a(w,u)&&n.ref===i.ref)return Pi(n,i,f)}return i.flags|=1,n=ur(g,u),n.ref=i.ref,n.return=i,i.child=n}function Xf(n,i,a,u,f){if(n!==null){var g=n.memoizedProps;if(oa(g,u)&&n.ref===i.ref)if(An=!1,i.pendingProps=u=g,(n.lanes&f)!==0)(n.flags&131072)!==0&&(An=!0);else return i.lanes=n.lanes,Pi(n,i,f)}return Hc(n,i,a,u,f)}function qf(n,i,a){var u=i.pendingProps,f=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(_s,Fn),Fn|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,It(_s,Fn),Fn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:a,It(_s,Fn),Fn|=u}else g!==null?(u=g.baseLanes|a,i.memoizedState=null):u=a,It(_s,Fn),Fn|=u;return xn(n,i,f,a),i.child}function Yf(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Hc(n,i,a,u,f){var g=Tn(a)?Cr:on.current;return g=cs(i,g),ms(i,f),a=Lc(n,i,a,u,g,f),u=Dc(),n!==null&&!An?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Pi(n,i,f)):(Bt&&u&&mc(i),i.flags|=1,xn(n,i,a,f),i.child)}function $f(n,i,a,u,f){if(Tn(a)){var g=!0;vo(i)}else g=!1;if(ms(i,f),i.stateNode===null)Uo(n,i),Ff(i,a,u),Bc(i,a,u,f),u=!0;else if(n===null){var w=i.stateNode,U=i.memoizedProps;w.props=U;var B=w.context,ee=a.contextType;typeof ee=="object"&&ee!==null?ee=Wn(ee):(ee=Tn(a)?Cr:on.current,ee=cs(i,ee));var _e=a.getDerivedStateFromProps,ye=typeof _e=="function"||typeof w.getSnapshotBeforeUpdate=="function";ye||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==u||B!==ee)&&Of(i,w,u,ee),ir=!1;var ge=i.memoizedState;w.state=ge,Ao(i,u,w,f),B=i.memoizedState,U!==u||ge!==B||wn.current||ir?(typeof _e=="function"&&(Oc(i,a,_e,u),B=i.memoizedState),(U=ir||kf(i,a,U,u,ge,B,ee))?(ye||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=B),w.props=u,w.state=B,w.context=ee,u=U):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{w=i.stateNode,df(n,i),U=i.memoizedProps,ee=i.type===i.elementType?U:ii(i.type,U),w.props=ee,ye=i.pendingProps,ge=w.context,B=a.contextType,typeof B=="object"&&B!==null?B=Wn(B):(B=Tn(a)?Cr:on.current,B=cs(i,B));var De=a.getDerivedStateFromProps;(_e=typeof De=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==ye||ge!==B)&&Of(i,w,u,B),ir=!1,ge=i.memoizedState,w.state=ge,Ao(i,u,w,f);var Be=i.memoizedState;U!==ye||ge!==Be||wn.current||ir?(typeof De=="function"&&(Oc(i,a,De,u),Be=i.memoizedState),(ee=ir||kf(i,a,ee,u,ge,Be,B)||!1)?(_e||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(u,Be,B),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(u,Be,B)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Be),w.props=u,w.state=Be,w.context=B,u=ee):(typeof w.componentDidUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),u=!1)}return Vc(n,i,a,u,g,f)}function Vc(n,i,a,u,f,g){Yf(n,i);var w=(i.flags&128)!==0;if(!u&&!w)return f&&Qh(i,a,!1),Pi(n,i,g);u=i.stateNode,jv.current=i;var U=w&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&w?(i.child=fs(i,n.child,null,g),i.child=fs(i,null,U,g)):xn(n,i,U,g),i.memoizedState=u.state,f&&Qh(i,a,!0),i.child}function Kf(n){var i=n.stateNode;i.pendingContext?Zh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Zh(n,i.context,!1),Ac(n,i.containerInfo)}function Zf(n,i,a,u,f){return hs(),_c(f),i.flags|=256,xn(n,i,a,u),i.child}var Gc={dehydrated:null,treeContext:null,retryLane:0};function Wc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Jf(n,i,a){var u=i.pendingProps,f=zt.current,g=!1,w=(i.flags&128)!==0,U;if((U=w)||(U=n!==null&&n.memoizedState===null?!1:(f&2)!==0),U?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),It(zt,f&1),n===null)return xc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=u.children,n=u.fallback,g?(u=i.mode,g=i.child,w={mode:"hidden",children:w},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=qo(w,u,0,null),n=Fr(n,u,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Wc(a),i.memoizedState=Gc,n):Xc(i,w));if(f=n.memoizedState,f!==null&&(U=f.dehydrated,U!==null))return Hv(n,i,w,u,U,f,a);if(g){g=u.fallback,w=i.mode,f=n.child,U=f.sibling;var B={mode:"hidden",children:u.children};return(w&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=B,i.deletions=null):(u=ur(f,B),u.subtreeFlags=f.subtreeFlags&14680064),U!==null?g=ur(U,g):(g=Fr(g,w,a,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,w=n.child.memoizedState,w=w===null?Wc(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=n.childLanes&~a,i.memoizedState=Gc,u}return g=n.child,n=g.sibling,u=ur(g,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function Xc(n,i){return i=qo({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Io(n,i,a,u){return u!==null&&_c(u),fs(i,n.child,null,a),n=Xc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Hv(n,i,a,u,f,g,w){if(a)return i.flags&256?(i.flags&=-257,u=zc(Error(t(422))),Io(n,i,w,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=u.fallback,f=i.mode,u=qo({mode:"visible",children:u.children},f,0,null),g=Fr(g,f,w,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,(i.mode&1)!==0&&fs(i,n.child,null,w),i.child.memoizedState=Wc(w),i.memoizedState=Gc,g);if((i.mode&1)===0)return Io(n,i,w,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var U=u.dgst;return u=U,g=Error(t(419)),u=zc(g,u,void 0),Io(n,i,w,u)}if(U=(w&n.childLanes)!==0,An||U){if(u=Qt,u!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|w))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Ni(n,f),ai(u,n,f,-1))}return lu(),u=zc(Error(t(421))),Io(n,i,w,u)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=tx.bind(null,n),f._reactRetry=i,null):(n=g.treeContext,kn=Qi(f.nextSibling),Un=i,Bt=!0,ni=null,n!==null&&(Vn[Gn++]=Ci,Vn[Gn++]=bi,Vn[Gn++]=br,Ci=n.id,bi=n.overflow,br=i),i=Xc(i,u.children),i.flags|=4096,i)}function Qf(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Ec(n.return,i,a)}function qc(n,i,a,u,f){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:f}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=a,g.tailMode=f)}function ep(n,i,a){var u=i.pendingProps,f=u.revealOrder,g=u.tail;if(xn(n,i,u.children,a),u=zt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Qf(n,a,i);else if(n.tag===19)Qf(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(It(zt,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Co(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),qc(i,!1,f,a,g);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Co(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}qc(i,!0,a,null,g);break;case"together":qc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Uo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Pi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Dr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ur(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ur(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Vv(n,i,a){switch(i.tag){case 3:Kf(i),hs();break;case 5:pf(i);break;case 1:Tn(i.type)&&vo(i);break;case 4:Ac(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;It(Eo,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(It(zt,zt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Jf(n,i,a):(It(zt,zt.current&1),n=Pi(n,i,a),n!==null?n.sibling:null);It(zt,zt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return ep(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),It(zt,zt.current),u)break;return null;case 22:case 23:return i.lanes=0,qf(n,i,a)}return Pi(n,i,a)}var tp,Yc,np,ip;tp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Yc=function(){},np=function(n,i,a,u){var f=n.memoizedProps;if(f!==u){n=i.stateNode,Pr(gi.current);var g=null;switch(a){case"input":f=Y(n,f),u=Y(n,u),g=[];break;case"select":f=se({},f,{value:void 0}),u=se({},u,{value:void 0}),g=[];break;case"textarea":f=C(n,f),u=C(n,u),g=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=po)}mt(a,u);var w;a=null;for(ee in f)if(!u.hasOwnProperty(ee)&&f.hasOwnProperty(ee)&&f[ee]!=null)if(ee==="style"){var U=f[ee];for(w in U)U.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(o.hasOwnProperty(ee)?g||(g=[]):(g=g||[]).push(ee,null));for(ee in u){var B=u[ee];if(U=f!=null?f[ee]:void 0,u.hasOwnProperty(ee)&&B!==U&&(B!=null||U!=null))if(ee==="style")if(U){for(w in U)!U.hasOwnProperty(w)||B&&B.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in B)B.hasOwnProperty(w)&&U[w]!==B[w]&&(a||(a={}),a[w]=B[w])}else a||(g||(g=[]),g.push(ee,a)),a=B;else ee==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,U=U?U.__html:void 0,B!=null&&U!==B&&(g=g||[]).push(ee,B)):ee==="children"?typeof B!="string"&&typeof B!="number"||(g=g||[]).push(ee,""+B):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(ee)?(B!=null&&ee==="onScroll"&&kt("scroll",n),g||U===B||(g=[])):(g=g||[]).push(ee,B))}a&&(g=g||[]).push("style",a);var ee=g;(i.updateQueue=ee)&&(i.flags|=4)}},ip=function(n,i,a,u){a!==u&&(i.flags|=4)};function Ma(n,i){if(!Bt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function cn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function Gv(n,i,a){var u=i.pendingProps;switch(gc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(i),null;case 1:return Tn(i.type)&&go(),cn(i),null;case 3:return u=i.stateNode,gs(),Ft(wn),Ft(on),Nc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(So(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ni!==null&&(su(ni),ni=null))),Yc(n,i),cn(i),null;case 5:Cc(i);var f=Pr(va.current);if(a=i.type,n!==null&&i.stateNode!=null)np(n,i,a,u,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return cn(i),null}if(n=Pr(gi.current),So(i)){u=i.stateNode,a=i.type;var g=i.memoizedProps;switch(u[mi]=i,u[ha]=g,n=(i.mode&1)!==0,a){case"dialog":kt("cancel",u),kt("close",u);break;case"iframe":case"object":case"embed":kt("load",u);break;case"video":case"audio":for(f=0;f<ca.length;f++)kt(ca[f],u);break;case"source":kt("error",u);break;case"img":case"image":case"link":kt("error",u),kt("load",u);break;case"details":kt("toggle",u);break;case"input":mn(u,g),kt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},kt("invalid",u);break;case"textarea":J(u,g),kt("invalid",u)}mt(a,g),f=null;for(var w in g)if(g.hasOwnProperty(w)){var U=g[w];w==="children"?typeof U=="string"?u.textContent!==U&&(g.suppressHydrationWarning!==!0&&fo(u.textContent,U,n),f=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(g.suppressHydrationWarning!==!0&&fo(u.textContent,U,n),f=["children",""+U]):o.hasOwnProperty(w)&&U!=null&&w==="onScroll"&&kt("scroll",u)}switch(a){case"input":qe(u),Ze(u,g,!0);break;case"textarea":qe(u),xe(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=po)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fe(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=w.createElement(a,{is:u.is}):(n=w.createElement(a),a==="select"&&(w=n,u.multiple?w.multiple=!0:u.size&&(w.size=u.size))):n=w.createElementNS(n,a),n[mi]=i,n[ha]=u,tp(n,i,!1,!1),i.stateNode=n;e:{switch(w=lt(a,u),a){case"dialog":kt("cancel",n),kt("close",n),f=u;break;case"iframe":case"object":case"embed":kt("load",n),f=u;break;case"video":case"audio":for(f=0;f<ca.length;f++)kt(ca[f],n);f=u;break;case"source":kt("error",n),f=u;break;case"img":case"image":case"link":kt("error",n),kt("load",n),f=u;break;case"details":kt("toggle",n),f=u;break;case"input":mn(n,u),f=Y(n,u),kt("invalid",n);break;case"option":f=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},f=se({},u,{value:void 0}),kt("invalid",n);break;case"textarea":J(n,u),f=C(n,u),kt("invalid",n);break;default:f=u}mt(a,f),U=f;for(g in U)if(U.hasOwnProperty(g)){var B=U[g];g==="style"?nt(n,B):g==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Ue(n,B)):g==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&ft(n,B):typeof B=="number"&&ft(n,""+B):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?B!=null&&g==="onScroll"&&kt("scroll",n):B!=null&&P(n,g,B,w))}switch(a){case"input":qe(n),Ze(n,u,!1);break;case"textarea":qe(n),xe(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Ae(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?I(n,!!u.multiple,g,!1):u.defaultValue!=null&&I(n,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=po)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return cn(i),null;case 6:if(n&&i.stateNode!=null)ip(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Pr(va.current),Pr(gi.current),So(i)){if(u=i.stateNode,a=i.memoizedProps,u[mi]=i,(g=u.nodeValue!==a)&&(n=Un,n!==null))switch(n.tag){case 3:fo(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&fo(u.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[mi]=i,i.stateNode=u}return cn(i),null;case 13:if(Ft(zt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Bt&&kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)af(),hs(),i.flags|=98560,g=!1;else if(g=So(i),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[mi]=i}else hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;cn(i),g=!1}else ni!==null&&(su(ni),ni=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(zt.current&1)!==0?$t===0&&($t=3):lu())),i.updateQueue!==null&&(i.flags|=4),cn(i),null);case 4:return gs(),Yc(n,i),n===null&&ua(i.stateNode.containerInfo),cn(i),null;case 10:return Mc(i.type._context),cn(i),null;case 17:return Tn(i.type)&&go(),cn(i),null;case 19:if(Ft(zt),g=i.memoizedState,g===null)return cn(i),null;if(u=(i.flags&128)!==0,w=g.rendering,w===null)if(u)Ma(g,!1);else{if($t!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=Co(n),w!==null){for(i.flags|=128,Ma(g,!1),u=w.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)g=a,n=u,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,n=w.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return It(zt,zt.current&1|2),i.child}n=n.sibling}g.tail!==null&&Ee()>ys&&(i.flags|=128,u=!0,Ma(g,!1),i.lanes=4194304)}else{if(!u)if(n=Co(w),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ma(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Bt)return cn(i),null}else 2*Ee()-g.renderingStartTime>ys&&a!==1073741824&&(i.flags|=128,u=!0,Ma(g,!1),i.lanes=4194304);g.isBackwards?(w.sibling=i.child,i.child=w):(a=g.last,a!==null?a.sibling=w:i.child=w,g.last=w)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Ee(),i.sibling=null,a=zt.current,It(zt,u?a&1|2:a&1),i):(cn(i),null);case 22:case 23:return ou(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Fn&1073741824)!==0&&(cn(i),i.subtreeFlags&6&&(i.flags|=8192)):cn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Wv(n,i){switch(gc(i),i.tag){case 1:return Tn(i.type)&&go(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return gs(),Ft(wn),Ft(on),Nc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Cc(i),null;case 13:if(Ft(zt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));hs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ft(zt),null;case 4:return gs(),null;case 10:return Mc(i.type._context),null;case 22:case 23:return ou(),null;case 24:return null;default:return null}}var ko=!1,un=!1,Xv=typeof WeakSet=="function"?WeakSet:Set,ke=null;function xs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Ht(n,i,u)}else a.current=null}function $c(n,i,a){try{a()}catch(u){Ht(n,i,u)}}var rp=!1;function qv(n,i){if(oc=to,n=Uh(),Ql(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var f=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,U=-1,B=-1,ee=0,_e=0,ye=n,ge=null;t:for(;;){for(var De;ye!==a||f!==0&&ye.nodeType!==3||(U=w+f),ye!==g||u!==0&&ye.nodeType!==3||(B=w+u),ye.nodeType===3&&(w+=ye.nodeValue.length),(De=ye.firstChild)!==null;)ge=ye,ye=De;for(;;){if(ye===n)break t;if(ge===a&&++ee===f&&(U=w),ge===g&&++_e===u&&(B=w),(De=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=De}a=U===-1||B===-1?null:{start:U,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(lc={focusedElem:n,selectionRange:a},to=!1,ke=i;ke!==null;)if(i=ke,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ke=n;else for(;ke!==null;){i=ke;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var je=Be.memoizedProps,Vt=Be.memoizedState,$=i.stateNode,V=$.getSnapshotBeforeUpdate(i.elementType===i.type?je:ii(i.type,je),Vt);$.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Ht(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,ke=n;break}ke=i.return}return Be=rp,rp=!1,Be}function Ea(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&n)===n){var g=f.destroy;f.destroy=void 0,g!==void 0&&$c(i,a,g)}f=f.next}while(f!==u)}}function Fo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Kc(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function sp(n){var i=n.alternate;i!==null&&(n.alternate=null,sp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[mi],delete i[ha],delete i[hc],delete i[Nv],delete i[Rv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ap(n){return n.tag===5||n.tag===3||n.tag===4}function op(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ap(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Zc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=po));else if(u!==4&&(n=n.child,n!==null))for(Zc(n,i,a),n=n.sibling;n!==null;)Zc(n,i,a),n=n.sibling}function Jc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Jc(n,i,a),n=n.sibling;n!==null;)Jc(n,i,a),n=n.sibling}var nn=null,ri=!1;function sr(n,i,a){for(a=a.child;a!==null;)lp(n,i,a),a=a.sibling}function lp(n,i,a){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Ct,a)}catch{}switch(a.tag){case 5:un||xs(a,i);case 6:var u=nn,f=ri;nn=null,sr(n,i,a),nn=u,ri=f,nn!==null&&(ri?(n=nn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):nn.removeChild(a.stateNode));break;case 18:nn!==null&&(ri?(n=nn,a=a.stateNode,n.nodeType===8?dc(n.parentNode,a):n.nodeType===1&&dc(n,a),ta(n)):dc(nn,a.stateNode));break;case 4:u=nn,f=ri,nn=a.stateNode.containerInfo,ri=!0,sr(n,i,a),nn=u,ri=f;break;case 0:case 11:case 14:case 15:if(!un&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var g=f,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&$c(a,i,w),f=f.next}while(f!==u)}sr(n,i,a);break;case 1:if(!un&&(xs(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(U){Ht(a,i,U)}sr(n,i,a);break;case 21:sr(n,i,a);break;case 22:a.mode&1?(un=(u=un)||a.memoizedState!==null,sr(n,i,a),un=u):sr(n,i,a);break;default:sr(n,i,a)}}function cp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Xv),i.forEach(function(u){var f=nx.bind(null,n,u);a.has(u)||(a.add(u),u.then(f,f))})}}function si(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var f=a[u];try{var g=n,w=i,U=w;e:for(;U!==null;){switch(U.tag){case 5:nn=U.stateNode,ri=!1;break e;case 3:nn=U.stateNode.containerInfo,ri=!0;break e;case 4:nn=U.stateNode.containerInfo,ri=!0;break e}U=U.return}if(nn===null)throw Error(t(160));lp(g,w,f),nn=null,ri=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(ee){Ht(f,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)up(i,n),i=i.sibling}function up(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(si(i,n),xi(n),u&4){try{Ea(3,n,n.return),Fo(3,n)}catch(je){Ht(n,n.return,je)}try{Ea(5,n,n.return)}catch(je){Ht(n,n.return,je)}}break;case 1:si(i,n),xi(n),u&512&&a!==null&&xs(a,a.return);break;case 5:if(si(i,n),xi(n),u&512&&a!==null&&xs(a,a.return),n.flags&32){var f=n.stateNode;try{ft(f,"")}catch(je){Ht(n,n.return,je)}}if(u&4&&(f=n.stateNode,f!=null)){var g=n.memoizedProps,w=a!==null?a.memoizedProps:g,U=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{U==="input"&&g.type==="radio"&&g.name!=null&&vt(f,g),lt(U,w);var ee=lt(U,g);for(w=0;w<B.length;w+=2){var _e=B[w],ye=B[w+1];_e==="style"?nt(f,ye):_e==="dangerouslySetInnerHTML"?Ue(f,ye):_e==="children"?ft(f,ye):P(f,_e,ye,ee)}switch(U){case"input":pt(f,g);break;case"textarea":me(f,g);break;case"select":var ge=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var De=g.value;De!=null?I(f,!!g.multiple,De,!1):ge!==!!g.multiple&&(g.defaultValue!=null?I(f,!!g.multiple,g.defaultValue,!0):I(f,!!g.multiple,g.multiple?[]:"",!1))}f[ha]=g}catch(je){Ht(n,n.return,je)}}break;case 6:if(si(i,n),xi(n),u&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,g=n.memoizedProps;try{f.nodeValue=g}catch(je){Ht(n,n.return,je)}}break;case 3:if(si(i,n),xi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{ta(i.containerInfo)}catch(je){Ht(n,n.return,je)}break;case 4:si(i,n),xi(n);break;case 13:si(i,n),xi(n),f=n.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(tu=Ee())),u&4&&cp(n);break;case 22:if(_e=a!==null&&a.memoizedState!==null,n.mode&1?(un=(ee=un)||_e,si(i,n),un=ee):si(i,n),xi(n),u&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!_e&&(n.mode&1)!==0)for(ke=n,_e=n.child;_e!==null;){for(ye=ke=_e;ke!==null;){switch(ge=ke,De=ge.child,ge.tag){case 0:case 11:case 14:case 15:Ea(4,ge,ge.return);break;case 1:xs(ge,ge.return);var Be=ge.stateNode;if(typeof Be.componentWillUnmount=="function"){u=ge,a=ge.return;try{i=u,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(je){Ht(u,a,je)}}break;case 5:xs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){fp(ye);continue}}De!==null?(De.return=ge,ke=De):fp(ye)}_e=_e.sibling}e:for(_e=null,ye=n;;){if(ye.tag===5){if(_e===null){_e=ye;try{f=ye.stateNode,ee?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(U=ye.stateNode,B=ye.memoizedProps.style,w=B!=null&&B.hasOwnProperty("display")?B.display:null,U.style.display=tt("display",w))}catch(je){Ht(n,n.return,je)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=ee?"":ye.memoizedProps}catch(je){Ht(n,n.return,je)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:si(i,n),xi(n),u&4&&cp(n);break;case 21:break;default:si(i,n),xi(n)}}function xi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(ap(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(ft(f,""),u.flags&=-33);var g=op(n);Jc(n,g,f);break;case 3:case 4:var w=u.stateNode.containerInfo,U=op(n);Zc(n,U,w);break;default:throw Error(t(161))}}catch(B){Ht(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Yv(n,i,a){ke=n,dp(n)}function dp(n,i,a){for(var u=(n.mode&1)!==0;ke!==null;){var f=ke,g=f.child;if(f.tag===22&&u){var w=f.memoizedState!==null||ko;if(!w){var U=f.alternate,B=U!==null&&U.memoizedState!==null||un;U=ko;var ee=un;if(ko=w,(un=B)&&!ee)for(ke=f;ke!==null;)w=ke,B=w.child,w.tag===22&&w.memoizedState!==null?pp(f):B!==null?(B.return=w,ke=B):pp(f);for(;g!==null;)ke=g,dp(g),g=g.sibling;ke=f,ko=U,un=ee}hp(n)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,ke=g):hp(n)}}function hp(n){for(;ke!==null;){var i=ke;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:un||Fo(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!un)if(a===null)u.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:ii(i.type,a.memoizedProps);u.componentDidUpdate(f,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&ff(i,g,u);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}ff(i,w,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var _e=ee.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&ta(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}un||i.flags&512&&Kc(i)}catch(ge){Ht(i,i.return,ge)}}if(i===n){ke=null;break}if(a=i.sibling,a!==null){a.return=i.return,ke=a;break}ke=i.return}}function fp(n){for(;ke!==null;){var i=ke;if(i===n){ke=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ke=a;break}ke=i.return}}function pp(n){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Fo(4,i)}catch(B){Ht(i,a,B)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(B){Ht(i,f,B)}}var g=i.return;try{Kc(i)}catch(B){Ht(i,g,B)}break;case 5:var w=i.return;try{Kc(i)}catch(B){Ht(i,w,B)}}}catch(B){Ht(i,i.return,B)}if(i===n){ke=null;break}var U=i.sibling;if(U!==null){U.return=i.return,ke=U;break}ke=i.return}}var $v=Math.ceil,Oo=A.ReactCurrentDispatcher,Qc=A.ReactCurrentOwner,qn=A.ReactCurrentBatchConfig,Et=0,Qt=null,Gt=null,rn=0,Fn=0,_s=er(0),$t=0,wa=null,Dr=0,Bo=0,eu=0,Ta=null,Cn=null,tu=0,ys=1/0,Li=null,zo=!1,nu=null,ar=null,jo=!1,or=null,Ho=0,Aa=0,iu=null,Vo=-1,Go=0;function _n(){return(Et&6)!==0?Ee():Vo!==-1?Vo:Vo=Ee()}function lr(n){return(n.mode&1)===0?1:(Et&2)!==0&&rn!==0?rn&-rn:Lv.transition!==null?(Go===0&&(Go=vn()),Go):(n=Rt,n!==0||(n=window.event,n=n===void 0?16:mh(n.type)),n)}function ai(n,i,a,u){if(50<Aa)throw Aa=0,iu=null,Error(t(185));En(n,a,u),((Et&2)===0||n!==Qt)&&(n===Qt&&((Et&2)===0&&(Bo|=a),$t===4&&cr(n,rn)),bn(n,u),a===1&&Et===0&&(i.mode&1)===0&&(ys=Ee()+500,xo&&nr()))}function bn(n,i){var a=n.callbackNode;jn(n,i);var u=pi(n,n===Qt?rn:0);if(u===0)a!==null&&ne(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&ne(a),i===1)n.tag===0?Pv(gp.bind(null,n)):ef(gp.bind(null,n)),Cv(function(){(Et&6)===0&&nr()}),a=null;else{switch(oh(u)){case 1:a=ze;break;case 4:a=it;break;case 16:a=ot;break;case 536870912:a=yt;break;default:a=ot}a=wp(a,mp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function mp(n,i){if(Vo=-1,Go=0,(Et&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ss()&&n.callbackNode!==a)return null;var u=pi(n,n===Qt?rn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=Wo(n,u);else{i=u;var f=Et;Et|=2;var g=xp();(Qt!==n||rn!==i)&&(Li=null,ys=Ee()+500,Ur(n,i));do try{Jv();break}catch(U){vp(n,U)}while(!0);Sc(),Oo.current=g,Et=f,Gt!==null?i=0:(Qt=null,rn=0,i=$t)}if(i!==0){if(i===2&&(f=wi(n),f!==0&&(u=f,i=ru(n,f))),i===1)throw a=wa,Ur(n,0),cr(n,u),bn(n,Ee()),a;if(i===6)cr(n,u);else{if(f=n.current.alternate,(u&30)===0&&!Kv(f)&&(i=Wo(n,u),i===2&&(g=wi(n),g!==0&&(u=g,i=ru(n,g))),i===1))throw a=wa,Ur(n,0),cr(n,u),bn(n,Ee()),a;switch(n.finishedWork=f,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:kr(n,Cn,Li);break;case 3:if(cr(n,u),(u&130023424)===u&&(i=tu+500-Ee(),10<i)){if(pi(n,0)!==0)break;if(f=n.suspendedLanes,(f&u)!==u){_n(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=uc(kr.bind(null,n,Cn,Li),i);break}kr(n,Cn,Li);break;case 4:if(cr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,f=-1;0<u;){var w=31-ut(u);g=1<<w,w=i[w],w>f&&(f=w),u&=~g}if(u=f,u=Ee()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*$v(u/1960))-u,10<u){n.timeoutHandle=uc(kr.bind(null,n,Cn,Li),u);break}kr(n,Cn,Li);break;case 5:kr(n,Cn,Li);break;default:throw Error(t(329))}}}return bn(n,Ee()),n.callbackNode===a?mp.bind(null,n):null}function ru(n,i){var a=Ta;return n.current.memoizedState.isDehydrated&&(Ur(n,i).flags|=256),n=Wo(n,i),n!==2&&(i=Cn,Cn=a,i!==null&&su(i)),n}function su(n){Cn===null?Cn=n:Cn.push.apply(Cn,n)}function Kv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var f=a[u],g=f.getSnapshot;f=f.value;try{if(!ti(g(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(n,i){for(i&=~eu,i&=~Bo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-ut(i),u=1<<a;n[a]=-1,i&=~u}}function gp(n){if((Et&6)!==0)throw Error(t(327));Ss();var i=pi(n,0);if((i&1)===0)return bn(n,Ee()),null;var a=Wo(n,i);if(n.tag!==0&&a===2){var u=wi(n);u!==0&&(i=u,a=ru(n,u))}if(a===1)throw a=wa,Ur(n,0),cr(n,i),bn(n,Ee()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,kr(n,Cn,Li),bn(n,Ee()),null}function au(n,i){var a=Et;Et|=1;try{return n(i)}finally{Et=a,Et===0&&(ys=Ee()+500,xo&&nr())}}function Ir(n){or!==null&&or.tag===0&&(Et&6)===0&&Ss();var i=Et;Et|=1;var a=qn.transition,u=Rt;try{if(qn.transition=null,Rt=1,n)return n()}finally{Rt=u,qn.transition=a,Et=i,(Et&6)===0&&nr()}}function ou(){Fn=_s.current,Ft(_s)}function Ur(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Av(a)),Gt!==null)for(a=Gt.return;a!==null;){var u=a;switch(gc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&go();break;case 3:gs(),Ft(wn),Ft(on),Nc();break;case 5:Cc(u);break;case 4:gs();break;case 13:Ft(zt);break;case 19:Ft(zt);break;case 10:Mc(u.type._context);break;case 22:case 23:ou()}a=a.return}if(Qt=n,Gt=n=ur(n.current,null),rn=Fn=i,$t=0,wa=null,eu=Bo=Dr=0,Cn=Ta=null,Rr!==null){for(i=0;i<Rr.length;i++)if(a=Rr[i],u=a.interleaved,u!==null){a.interleaved=null;var f=u.next,g=a.pending;if(g!==null){var w=g.next;g.next=f,u.next=w}a.pending=u}Rr=null}return n}function vp(n,i){do{var a=Gt;try{if(Sc(),bo.current=Lo,No){for(var u=jt.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}No=!1}if(Lr=0,Jt=Yt=jt=null,xa=!1,_a=0,Qc.current=null,a===null||a.return===null){$t=1,wa=i,Gt=null;break}e:{var g=n,w=a.return,U=a,B=i;if(i=rn,U.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ee=B,_e=U,ye=_e.tag;if((_e.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var De=Hf(w);if(De!==null){De.flags&=-257,Vf(De,w,U,g,i),De.mode&1&&jf(g,ee,i),i=De,B=ee;var Be=i.updateQueue;if(Be===null){var je=new Set;je.add(B),i.updateQueue=je}else Be.add(B);break e}else{if((i&1)===0){jf(g,ee,i),lu();break e}B=Error(t(426))}}else if(Bt&&U.mode&1){var Vt=Hf(w);if(Vt!==null){(Vt.flags&65536)===0&&(Vt.flags|=256),Vf(Vt,w,U,g,i),_c(vs(B,U));break e}}g=B=vs(B,U),$t!==4&&($t=2),Ta===null?Ta=[g]:Ta.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var $=Bf(g,B,i);hf(g,$);break e;case 1:U=B;var V=g.type,K=g.stateNode;if((g.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(ar===null||!ar.has(K)))){g.flags|=65536,i&=-i,g.lanes|=i;var we=zf(g,U,i);hf(g,we);break e}}g=g.return}while(g!==null)}yp(a)}catch(We){i=We,Gt===a&&a!==null&&(Gt=a=a.return);continue}break}while(!0)}function xp(){var n=Oo.current;return Oo.current=Lo,n===null?Lo:n}function lu(){($t===0||$t===3||$t===2)&&($t=4),Qt===null||(Dr&268435455)===0&&(Bo&268435455)===0||cr(Qt,rn)}function Wo(n,i){var a=Et;Et|=2;var u=xp();(Qt!==n||rn!==i)&&(Li=null,Ur(n,i));do try{Zv();break}catch(f){vp(n,f)}while(!0);if(Sc(),Et=a,Oo.current=u,Gt!==null)throw Error(t(261));return Qt=null,rn=0,$t}function Zv(){for(;Gt!==null;)_p(Gt)}function Jv(){for(;Gt!==null&&!q();)_p(Gt)}function _p(n){var i=Ep(n.alternate,n,Fn);n.memoizedProps=n.pendingProps,i===null?yp(n):Gt=i,Qc.current=null}function yp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Gv(a,i,Fn),a!==null){Gt=a;return}}else{if(a=Wv(a,i),a!==null){a.flags&=32767,Gt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{$t=6,Gt=null;return}}if(i=i.sibling,i!==null){Gt=i;return}Gt=i=n}while(i!==null);$t===0&&($t=5)}function kr(n,i,a){var u=Rt,f=qn.transition;try{qn.transition=null,Rt=1,Qv(n,i,a,u)}finally{qn.transition=f,Rt=u}return null}function Qv(n,i,a,u){do Ss();while(or!==null);if((Et&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(Ja(n,g),n===Qt&&(Gt=Qt=null,rn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||jo||(jo=!0,wp(ot,function(){return Ss(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=qn.transition,qn.transition=null;var w=Rt;Rt=1;var U=Et;Et|=4,Qc.current=null,qv(n,a),up(a,n),_v(lc),to=!!oc,lc=oc=null,n.current=a,Yv(a),Te(),Et=U,Rt=w,qn.transition=g}else n.current=a;if(jo&&(jo=!1,or=n,Ho=f),g=n.pendingLanes,g===0&&(ar=null),sn(a.stateNode),bn(n,Ee()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],u(f.value,{componentStack:f.stack,digest:f.digest});if(zo)throw zo=!1,n=nu,nu=null,n;return(Ho&1)!==0&&n.tag!==0&&Ss(),g=n.pendingLanes,(g&1)!==0?n===iu?Aa++:(Aa=0,iu=n):Aa=0,nr(),null}function Ss(){if(or!==null){var n=oh(Ho),i=qn.transition,a=Rt;try{if(qn.transition=null,Rt=16>n?16:n,or===null)var u=!1;else{if(n=or,or=null,Ho=0,(Et&6)!==0)throw Error(t(331));var f=Et;for(Et|=4,ke=n.current;ke!==null;){var g=ke,w=g.child;if((ke.flags&16)!==0){var U=g.deletions;if(U!==null){for(var B=0;B<U.length;B++){var ee=U[B];for(ke=ee;ke!==null;){var _e=ke;switch(_e.tag){case 0:case 11:case 15:Ea(8,_e,g)}var ye=_e.child;if(ye!==null)ye.return=_e,ke=ye;else for(;ke!==null;){_e=ke;var ge=_e.sibling,De=_e.return;if(sp(_e),_e===ee){ke=null;break}if(ge!==null){ge.return=De,ke=ge;break}ke=De}}}var Be=g.alternate;if(Be!==null){var je=Be.child;if(je!==null){Be.child=null;do{var Vt=je.sibling;je.sibling=null,je=Vt}while(je!==null)}}ke=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,ke=w;else e:for(;ke!==null;){if(g=ke,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ea(9,g,g.return)}var $=g.sibling;if($!==null){$.return=g.return,ke=$;break e}ke=g.return}}var V=n.current;for(ke=V;ke!==null;){w=ke;var K=w.child;if((w.subtreeFlags&2064)!==0&&K!==null)K.return=w,ke=K;else e:for(w=V;ke!==null;){if(U=ke,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Fo(9,U)}}catch(We){Ht(U,U.return,We)}if(U===w){ke=null;break e}var we=U.sibling;if(we!==null){we.return=U.return,ke=we;break e}ke=U.return}}if(Et=f,nr(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Ct,n)}catch{}u=!0}return u}finally{Rt=a,qn.transition=i}}return!1}function Sp(n,i,a){i=vs(a,i),i=Bf(n,i,1),n=rr(n,i,1),i=_n(),n!==null&&(En(n,1,i),bn(n,i))}function Ht(n,i,a){if(n.tag===3)Sp(n,n,a);else for(;i!==null;){if(i.tag===3){Sp(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ar===null||!ar.has(u))){n=vs(a,n),n=zf(i,n,1),i=rr(i,n,1),n=_n(),i!==null&&(En(i,1,n),bn(i,n));break}}i=i.return}}function ex(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=_n(),n.pingedLanes|=n.suspendedLanes&a,Qt===n&&(rn&a)===a&&($t===4||$t===3&&(rn&130023424)===rn&&500>Ee()-tu?Ur(n,0):eu|=a),bn(n,i)}function Mp(n,i){i===0&&((n.mode&1)===0?i=1:(i=ei,ei<<=1,(ei&130023424)===0&&(ei=4194304)));var a=_n();n=Ni(n,i),n!==null&&(En(n,i,a),bn(n,a))}function tx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Mp(n,a)}function nx(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Mp(n,a)}var Ep;Ep=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||wn.current)An=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return An=!1,Vv(n,i,a);An=(n.flags&131072)!==0}else An=!1,Bt&&(i.flags&1048576)!==0&&tf(i,yo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Uo(n,i),n=i.pendingProps;var f=cs(i,on.current);ms(i,a),f=Lc(null,i,u,n,f,a);var g=Dc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Tn(u)?(g=!0,vo(i)):g=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Tc(i),f.updater=Do,i.stateNode=f,f._reactInternals=i,Bc(i,u,n,a),i=Vc(null,i,u,!0,g,a)):(i.tag=0,Bt&&g&&mc(i),xn(null,i,f,a),i=i.child),i;case 16:u=i.elementType;e:{switch(Uo(n,i),n=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=rx(u),n=ii(u,n),f){case 0:i=Hc(null,i,u,n,a);break e;case 1:i=$f(null,i,u,n,a);break e;case 11:i=Gf(null,i,u,n,a);break e;case 14:i=Wf(null,i,u,ii(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ii(u,f),Hc(n,i,u,f,a);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ii(u,f),$f(n,i,u,f,a);case 3:e:{if(Kf(i),n===null)throw Error(t(387));u=i.pendingProps,g=i.memoizedState,f=g.element,df(n,i),Ao(i,u,null,a);var w=i.memoizedState;if(u=w.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){f=vs(Error(t(423)),i),i=Zf(n,i,u,a,f);break e}else if(u!==f){f=vs(Error(t(424)),i),i=Zf(n,i,u,a,f);break e}else for(kn=Qi(i.stateNode.containerInfo.firstChild),Un=i,Bt=!0,ni=null,a=cf(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(hs(),u===f){i=Pi(n,i,a);break e}xn(n,i,u,a)}i=i.child}return i;case 5:return pf(i),n===null&&xc(i),u=i.type,f=i.pendingProps,g=n!==null?n.memoizedProps:null,w=f.children,cc(u,f)?w=null:g!==null&&cc(u,g)&&(i.flags|=32),Yf(n,i),xn(n,i,w,a),i.child;case 6:return n===null&&xc(i),null;case 13:return Jf(n,i,a);case 4:return Ac(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=fs(i,null,u,a):xn(n,i,u,a),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ii(u,f),Gf(n,i,u,f,a);case 7:return xn(n,i,i.pendingProps,a),i.child;case 8:return xn(n,i,i.pendingProps.children,a),i.child;case 12:return xn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,g=i.memoizedProps,w=f.value,It(Eo,u._currentValue),u._currentValue=w,g!==null)if(ti(g.value,w)){if(g.children===f.children&&!wn.current){i=Pi(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var U=g.dependencies;if(U!==null){w=g.child;for(var B=U.firstContext;B!==null;){if(B.context===u){if(g.tag===1){B=Ri(-1,a&-a),B.tag=2;var ee=g.updateQueue;if(ee!==null){ee=ee.shared;var _e=ee.pending;_e===null?B.next=B:(B.next=_e.next,_e.next=B),ee.pending=B}}g.lanes|=a,B=g.alternate,B!==null&&(B.lanes|=a),Ec(g.return,a,i),U.lanes|=a;break}B=B.next}}else if(g.tag===10)w=g.type===i.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,U=w.alternate,U!==null&&(U.lanes|=a),Ec(w,a,i),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===i){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}xn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,ms(i,a),f=Wn(f),u=u(f),i.flags|=1,xn(n,i,u,a),i.child;case 14:return u=i.type,f=ii(u,i.pendingProps),f=ii(u.type,f),Wf(n,i,u,f,a);case 15:return Xf(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ii(u,f),Uo(n,i),i.tag=1,Tn(u)?(n=!0,vo(i)):n=!1,ms(i,a),Ff(i,u,f),Bc(i,u,f,a),Vc(null,i,u,!0,n,a);case 19:return ep(n,i,a);case 22:return qf(n,i,a)}throw Error(t(156,i.tag))};function wp(n,i){return te(n,i)}function ix(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(n,i,a,u){return new ix(n,i,a,u)}function cu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function rx(n){if(typeof n=="function")return cu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ie)return 11;if(n===he)return 14}return 2}function ur(n,i){var a=n.alternate;return a===null?(a=Yn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Xo(n,i,a,u,f,g){var w=2;if(u=n,typeof n=="function")cu(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case D:return Fr(a.children,f,g,i);case F:w=8,f|=8;break;case L:return n=Yn(12,a,i,f|2),n.elementType=L,n.lanes=g,n;case Q:return n=Yn(13,a,i,f),n.elementType=Q,n.lanes=g,n;case de:return n=Yn(19,a,i,f),n.elementType=de,n.lanes=g,n;case ue:return qo(a,f,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:w=10;break e;case z:w=9;break e;case ie:w=11;break e;case he:w=14;break e;case ce:w=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Yn(w,a,i,f),i.elementType=n,i.type=u,i.lanes=g,i}function Fr(n,i,a,u){return n=Yn(7,n,u,i),n.lanes=a,n}function qo(n,i,a,u){return n=Yn(22,n,u,i),n.elementType=ue,n.lanes=a,n.stateNode={isHidden:!1},n}function uu(n,i,a){return n=Yn(6,n,null,i),n.lanes=a,n}function du(n,i,a){return i=Yn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function sx(n,i,a,u,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hn(0),this.expirationTimes=Hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hn(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function hu(n,i,a,u,f,g,w,U,B){return n=new sx(n,i,a,U,B),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Yn(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tc(g),n}function ax(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Tp(n){if(!n)return tr;n=n._reactInternals;e:{if(fi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Tn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Tn(a))return Jh(n,a,i)}return i}function Ap(n,i,a,u,f,g,w,U,B){return n=hu(a,u,!0,n,f,g,w,U,B),n.context=Tp(null),a=n.current,u=_n(),f=lr(a),g=Ri(u,f),g.callback=i??null,rr(a,g,f),n.current.lanes=f,En(n,f,u),bn(n,u),n}function Yo(n,i,a,u){var f=i.current,g=_n(),w=lr(f);return a=Tp(a),i.context===null?i.context=a:i.pendingContext=a,i=Ri(g,w),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=rr(f,i,w),n!==null&&(ai(n,f,w,g),To(n,f,w)),w}function $o(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Cp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function fu(n,i){Cp(n,i),(n=n.alternate)&&Cp(n,i)}function ox(){return null}var bp=typeof reportError=="function"?reportError:function(n){console.error(n)};function pu(n){this._internalRoot=n}Ko.prototype.render=pu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Yo(n,i,null,null)},Ko.prototype.unmount=pu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Ir(function(){Yo(null,n,null,null)}),i[Ti]=null}};function Ko(n){this._internalRoot=n}Ko.prototype.unstable_scheduleHydration=function(n){if(n){var i=uh();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Ki.length&&i!==0&&i<Ki[a].priority;a++);Ki.splice(a,0,n),a===0&&fh(n)}};function mu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Zo(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Np(){}function lx(n,i,a,u,f){if(f){if(typeof u=="function"){var g=u;u=function(){var ee=$o(w);g.call(ee)}}var w=Ap(i,u,n,0,null,!1,!1,"",Np);return n._reactRootContainer=w,n[Ti]=w.current,ua(n.nodeType===8?n.parentNode:n),Ir(),w}for(;f=n.lastChild;)n.removeChild(f);if(typeof u=="function"){var U=u;u=function(){var ee=$o(B);U.call(ee)}}var B=hu(n,0,!1,null,null,!1,!1,"",Np);return n._reactRootContainer=B,n[Ti]=B.current,ua(n.nodeType===8?n.parentNode:n),Ir(function(){Yo(i,B,a,u)}),B}function Jo(n,i,a,u,f){var g=a._reactRootContainer;if(g){var w=g;if(typeof f=="function"){var U=f;f=function(){var B=$o(w);U.call(B)}}Yo(i,w,n,f)}else w=lx(a,i,n,f,u);return $o(w)}lh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=qt(i.pendingLanes);a!==0&&(Bl(i,a|1),bn(i,Ee()),(Et&6)===0&&(ys=Ee()+500,nr()))}break;case 13:Ir(function(){var u=Ni(n,1);if(u!==null){var f=_n();ai(u,n,1,f)}}),fu(n,1)}},zl=function(n){if(n.tag===13){var i=Ni(n,134217728);if(i!==null){var a=_n();ai(i,n,134217728,a)}fu(n,134217728)}},ch=function(n){if(n.tag===13){var i=lr(n),a=Ni(n,i);if(a!==null){var u=_n();ai(a,n,i,u)}fu(n,i)}},uh=function(){return Rt},dh=function(n,i){var a=Rt;try{return Rt=n,i()}finally{Rt=a}},be=function(n,i,a){switch(i){case"input":if(pt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var f=mo(u);if(!f)throw Error(t(90));at(u),pt(u,f)}}}break;case"textarea":me(n,a);break;case"select":i=a.value,i!=null&&I(n,!!a.multiple,i,!1)}},Ut=au,Xt=Ir;var cx={usingClientEntryPoint:!1,Events:[fa,os,mo,Re,ct,au]},Ca={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ux={bundleType:Ca.bundleType,version:Ca.version,rendererPackageName:Ca.rendererPackageName,rendererConfig:Ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=N(n),n===null?null:n.stateNode},findFiberByHostInstance:Ca.findFiberByHostInstance||ox,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{Ct=Qo.inject(ux),xt=Qo}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cx,Nn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(i))throw Error(t(200));return ax(n,i,null,a)},Nn.createRoot=function(n,i){if(!mu(n))throw Error(t(299));var a=!1,u="",f=bp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=hu(n,1,!1,null,null,a,!1,u,f),n[Ti]=i.current,ua(n.nodeType===8?n.parentNode:n),new pu(i)},Nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=N(i),n=n===null?null:n.stateNode,n},Nn.flushSync=function(n){return Ir(n)},Nn.hydrate=function(n,i,a){if(!Zo(i))throw Error(t(200));return Jo(null,n,i,!0,a)},Nn.hydrateRoot=function(n,i,a){if(!mu(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,f=!1,g="",w=bp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Ap(i,null,n,1,a??null,f,!1,g,w),n[Ti]=i.current,ua(n),u)for(n=0;n<u.length;n++)a=u[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new Ko(i)},Nn.render=function(n,i,a){if(!Zo(i))throw Error(t(200));return Jo(null,n,i,!1,a)},Nn.unmountComponentAtNode=function(n){if(!Zo(n))throw Error(t(40));return n._reactRootContainer?(Ir(function(){Jo(null,null,n,!1,function(){n._reactRootContainer=null,n[Ti]=null})}),!0):!1},Nn.unstable_batchedUpdates=au,Nn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!Zo(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Jo(n,i,a,!1,u)},Nn.version="18.3.1-next-f1338f8080-20240426",Nn}var Fp;function Sx(){if(Fp)return xu.exports;Fp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),xu.exports=yx(),xu.exports}var Op;function Mx(){if(Op)return el;Op=1;var s=Sx();return el.createRoot=s.createRoot,el.hydrateRoot=s.hydrateRoot,el}var Ex=Mx();const wx=qm(Ex);var Bp="1.3.26";function Ym(s,e,t){return Math.max(s,Math.min(e,t))}function Tx(s,e,t){return(1-t)*s+t*e}function Ax(s,e,t,r){return Tx(s,e,1-Math.exp(-t*r))}function Cx(s,e){return(s%e+e)%e}var bx=class{constructor(){Xe(this,"isRunning",!1);Xe(this,"value",0);Xe(this,"from",0);Xe(this,"to",0);Xe(this,"currentTime",0);Xe(this,"lerp");Xe(this,"duration");Xe(this,"easing");Xe(this,"onUpdate")}advance(s){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=s;const r=Ym(0,this.currentTime/this.duration,1);e=r>=1;const o=e?1:this.easing(r);this.value=this.from+(this.to-this.from)*o}else this.lerp?(this.value=Ax(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(s,e,{lerp:t,duration:r,easing:o,onStart:c,onUpdate:d}){this.from=this.value=s,this.to=e,this.lerp=t,this.duration=r,this.easing=o,this.currentTime=0,this.isRunning=!0,c==null||c(),this.onUpdate=d}};function Nx(s,e){let t;return function(...r){clearTimeout(t),t=setTimeout(()=>{t=void 0,s.apply(this,r)},e)}}var Rx=class{constructor(s,e,{autoResize:t=!0,debounce:r=250}={}){Xe(this,"width",0);Xe(this,"height",0);Xe(this,"scrollHeight",0);Xe(this,"scrollWidth",0);Xe(this,"debouncedResize");Xe(this,"wrapperResizeObserver");Xe(this,"contentResizeObserver");Xe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Xe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Xe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=e,t&&(this.debouncedResize=Nx(this.resize,r),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var s,e;(s=this.wrapperResizeObserver)==null||s.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},$m=class{constructor(){Xe(this,"events",{})}emit(s,...e){var r;const t=this.events[s]||[];for(let o=0,c=t.length;o<c;o++)(r=t[o])==null||r.call(t,...e)}on(s,e){return this.events[s]?this.events[s].push(e):this.events[s]=[e],()=>{var t;this.events[s]=(t=this.events[s])==null?void 0:t.filter(r=>e!==r)}}off(s,e){var t;this.events[s]=(t=this.events[s])==null?void 0:t.filter(r=>e!==r)}destroy(){this.events={}}};const Px=100/6,hr={passive:!1};function zp(s,e){return s===1?Px:s===2?e:1}var Lx=class{constructor(s,e={wheelMultiplier:1,touchMultiplier:1}){Xe(this,"touchStart",{x:0,y:0});Xe(this,"lastDelta",{x:0,y:0});Xe(this,"window",{width:0,height:0});Xe(this,"emitter",new $m);Xe(this,"onTouchStart",s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Xe(this,"onTouchMove",s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s,r=-(e-this.touchStart.x)*this.options.touchMultiplier,o=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:r,y:o},this.emitter.emit("scroll",{deltaX:r,deltaY:o,event:s})});Xe(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Xe(this,"onWheel",s=>{let{deltaX:e,deltaY:t,deltaMode:r}=s;const o=zp(r,this.window.width),c=zp(r,this.window.height);e*=o,t*=c,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:s})});Xe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,hr),this.element.addEventListener("touchstart",this.onTouchStart,hr),this.element.addEventListener("touchmove",this.onTouchMove,hr),this.element.addEventListener("touchend",this.onTouchEnd,hr)}on(s,e){return this.emitter.on(s,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,hr),this.element.removeEventListener("touchstart",this.onTouchStart,hr),this.element.removeEventListener("touchmove",this.onTouchMove,hr),this.element.removeEventListener("touchend",this.onTouchEnd,hr)}};const jp=s=>Math.min(1,1.001-2**(-10*s));var Dx=class{constructor({wrapper:s=window,content:e=document.documentElement,eventsTarget:t=s,smoothWheel:r=!0,syncTouch:o=!1,syncTouchLerp:c=.075,touchInertiaExponent:d=1.7,duration:h,easing:p,lerp:m=.1,infinite:v=!1,orientation:_="vertical",gestureOrientation:x=_==="horizontal"?"both":"vertical",touchMultiplier:M=1,wheelMultiplier:E=1,autoResize:T=!0,prevent:S,virtualScroll:y,overscroll:R=!0,autoRaf:P=!1,anchors:A=!1,autoToggle:G=!1,allowNestedScroll:k=!1,__experimental__naiveDimensions:D=!1,naiveDimensions:F=D,stopInertiaOnNavigate:L=!1,respectReducedMotion:b=!0}={}){Xe(this,"_isScrolling",!1);Xe(this,"_isStopped",!1);Xe(this,"_isLocked",!1);Xe(this,"_preventNextNativeScrollEvent",!1);Xe(this,"_resetVelocityTimeout",null);Xe(this,"_rafId",null);Xe(this,"_isDraggingSelection",!1);Xe(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Xe(this,"isTouching");Xe(this,"isIos");Xe(this,"time",0);Xe(this,"userData",{});Xe(this,"lastVelocity",0);Xe(this,"velocity",0);Xe(this,"direction",0);Xe(this,"options");Xe(this,"targetScroll");Xe(this,"animatedScroll");Xe(this,"animate",new bx);Xe(this,"emitter",new $m);Xe(this,"dimensions");Xe(this,"virtualScroll");Xe(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});Xe(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Xe(this,"onTransitionEnd",s=>{var e;(e=s.propertyName)!=null&&e.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});Xe(this,"onClick",s=>{const e=s.composedPath().filter(r=>r instanceof HTMLAnchorElement&&r.href).map(r=>new URL(r.href)),t=new URL(window.location.href);if(this.options.anchors){const r=e.find(o=>t.host===o.host&&t.pathname===o.pathname&&o.hash);if(r){const o=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,c=decodeURIComponent(r.hash);this.scrollTo(c,o);return}}if(this.options.stopInertiaOnNavigate&&e.some(r=>t.host===r.host&&t.pathname!==r.pathname)){this.reset();return}});Xe(this,"onPointerDown",s=>{s.button===1&&this.reset()});Xe(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;const{deltaX:e,deltaY:t,event:r}=s;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:r}),r.ctrlKey||r.lenisStopPropagation)return;const o=r.type.includes("touch"),c=r.type.includes("wheel");if(o&&this.isIos&&(r.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(r)),this._isDraggingSelection)){r.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=r.type==="touchstart"||r.type==="touchmove";const d=e===0&&t===0;if(this.options.syncTouch&&o&&r.type==="touchstart"&&d&&!this.isStopped&&!this.isLocked){this.reset();return}const h=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(d||h)return;let p=r.composedPath();p=p.slice(0,p.indexOf(this.rootElement));const m=this.options.prevent,v=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(p.find(E=>{var T,S,y,R,P;return E instanceof HTMLElement&&(typeof m=="function"&&(m==null?void 0:m(E))||((T=E.hasAttribute)==null?void 0:T.call(E,"data-lenis-prevent"))||v==="vertical"&&((S=E.hasAttribute)==null?void 0:S.call(E,"data-lenis-prevent-vertical"))||v==="horizontal"&&((y=E.hasAttribute)==null?void 0:y.call(E,"data-lenis-prevent-horizontal"))||o&&((R=E.hasAttribute)==null?void 0:R.call(E,"data-lenis-prevent-touch"))||c&&((P=E.hasAttribute)==null?void 0:P.call(E,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(E,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&o||this.options.smoothWheel&&c)){this.isScrolling="native",this.animate.stop(),r.lenisStopPropagation=!0;return}let _=t;this.options.gestureOrientation==="both"?_=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(_=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();const x=o&&this.options.syncTouch,M=o&&r.type==="touchend";M&&(_=Math.sign(_)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+_,{programmatic:!1,...x?{lerp:M?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Xe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Xe(this,"raf",s=>{const e=s-(this.time||s);this.time=s,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Bp,window.lenis||(window.lenis={}),window.lenis.version=Bp,_==="horizontal"&&(window.lenis.horizontal=!0),o===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof h=="number"&&typeof p!="function"?p=jp:typeof p=="function"&&typeof h!="number"&&(h=1),this.options={wrapper:s,content:e,eventsTarget:t,smoothWheel:r,syncTouch:o,syncTouchLerp:c,touchInertiaExponent:d,duration:h,easing:p,lerp:m,infinite:v,gestureOrientation:x,orientation:_,touchMultiplier:M,wheelMultiplier:E,autoResize:T,prevent:S,virtualScroll:y,overscroll:R,autoRaf:P,anchors:A,autoToggle:G,allowNestedScroll:k,naiveDimensions:F,stopInertiaOnNavigate:L,respectReducedMotion:b},this.dimensions=new Rx(s,e,{autoResize:T}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Lx(t,{touchMultiplier:M,wheelMultiplier:E}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,e){return this.emitter.on(s,e)}off(s,e){return this.emitter.off(s,e)}get overflow(){const s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=s.targetTouches[0]??s.changedTouches[0];if(!t)return!1;const r=e.getRangeAt(0).getClientRects();if(r.length===0)return!1;const o=r[0],c=r[r.length-1],d=40,h=Math.hypot(t.clientX-o.left,t.clientY-o.top)<=d,p=Math.hypot(t.clientX-c.right,t.clientY-c.bottom)<=d;return h||p}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:e=0,immediate:t=!1,lock:r=!1,programmatic:o=!0,lerp:c=o?this.options.lerp:void 0,duration:d=o?this.options.duration:void 0,easing:h=o?this.options.easing:void 0,onStart:p,onComplete:m,force:v=!1,userData:_}={}){if(this.prefersReducedMotion&&(o?t=!0:(c=1,d=void 0,h=void 0)),(this.isStopped||this.isLocked)&&!v)return;let x=s,M=e;if(typeof x=="string"&&["top","left","start","#"].includes(x))x=0;else if(typeof x=="string"&&["bottom","right","end"].includes(x))x=this.limit;else{let E=null;if(typeof x=="string"?(E=x.startsWith("#")?document.getElementById(x.slice(1)):document.querySelector(x),E||(x==="#top"?x=0:console.warn("Lenis: Target not found",x))):x instanceof HTMLElement&&(x!=null&&x.nodeType)&&(E=x),E){if(this.options.wrapper!==window){const A=this.rootElement.getBoundingClientRect();M-=this.isHorizontal?A.left:A.top}const T=E.getBoundingClientRect(),S=getComputedStyle(E),y=this.isHorizontal?Number.parseFloat(S.scrollMarginLeft):Number.parseFloat(S.scrollMarginTop),R=getComputedStyle(this.rootElement),P=this.isHorizontal?Number.parseFloat(R.scrollPaddingLeft):Number.parseFloat(R.scrollPaddingTop);x=(this.isHorizontal?T.left:T.top)+this.animatedScroll-(Number.isNaN(y)?0:y)-(Number.isNaN(P)?0:P)}}if(typeof x=="number"){if(x+=M,this.options.infinite){if(o){this.targetScroll=this.animatedScroll=this.scroll;const E=x-this.animatedScroll;E>this.limit/2?x-=this.limit:E<-this.limit/2&&(x+=this.limit)}}else x=Ym(0,x,this.limit);if(x===this.targetScroll){p==null||p(this),m==null||m(this);return}if(this.userData=_??{},t){this.animatedScroll=this.targetScroll=x,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),m==null||m(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}o||(this.targetScroll=x),typeof d=="number"&&typeof h!="function"?h=jp:typeof h=="function"&&typeof d!="number"&&(d=1),this.animate.fromTo(this.animatedScroll,x,{duration:d,easing:h,lerp:c,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling="smooth",p==null||p(this)},onUpdate:(E,T)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=E-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=E,this.setScroll(this.scroll),o&&(this.targetScroll=E),T||this.emit(),T&&(this.reset(),this.emit(),m==null||m(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:e,deltaY:t}){const r=Date.now();s._lenis||(s._lenis={});const o=s._lenis;let c,d,h,p,m,v,_,x,M,E;if(r-(o.time??0)>2e3){o.time=Date.now();const k=window.getComputedStyle(s);if(o.computedStyle=k,c=["auto","overlay","scroll"].includes(k.overflowX),d=["auto","overlay","scroll"].includes(k.overflowY),m=["auto"].includes(k.overscrollBehaviorX),v=["auto"].includes(k.overscrollBehaviorY),o.hasOverflowX=c,o.hasOverflowY=d,!(c||d))return!1;_=s.scrollWidth,x=s.scrollHeight,M=s.clientWidth,E=s.clientHeight,h=_>M,p=x>E,o.isScrollableX=h,o.isScrollableY=p,o.scrollWidth=_,o.scrollHeight=x,o.clientWidth=M,o.clientHeight=E,o.hasOverscrollBehaviorX=m,o.hasOverscrollBehaviorY=v}else h=o.isScrollableX,p=o.isScrollableY,c=o.hasOverflowX,d=o.hasOverflowY,_=o.scrollWidth,x=o.scrollHeight,M=o.clientWidth,E=o.clientHeight,m=o.hasOverscrollBehaviorX,v=o.hasOverscrollBehaviorY;if(!(c&&h||d&&p))return!1;const T=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let S,y,R,P,A,G;if(T==="horizontal")S=Math.round(s.scrollLeft),y=_-M,R=e,P=c,A=h,G=m;else if(T==="vertical")S=Math.round(s.scrollTop),y=x-E,R=t,P=d,A=p,G=v;else return!1;return!G&&(S>=y||S<=0)?!0:(R>0?S<y:S>0)&&P&&A}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?Cx(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(const s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};function Ix({activeSection:s,onNavigate:e}){const[t,r]=st.useState(!1),[o,c]=st.useState(!1),[d,h]=st.useState("hero"),p=s||d;st.useEffect(()=>{const v=()=>{if(r(window.scrollY>50),!s){const _=["hero","what-i-do","about","media-kit","portfolio","services","contact"];for(const x of _){const M=document.getElementById(x);if(M){const E=M.getBoundingClientRect();if(E.top<=200&&E.bottom>=200){h(x);break}}}}};return window.addEventListener("scroll",v,{passive:!0}),()=>window.removeEventListener("scroll",v)},[s]),st.useEffect(()=>{const v=_=>{_.key==="Escape"&&o&&c(!1)};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[o]);const m=(v,_)=>{c(!1),e&&(v.preventDefault(),e(_))};return l.jsx("header",{className:`navbar ${t?"scrolled":""}`,id:"main-header",children:l.jsxs("div",{className:"nav-container",children:[l.jsxs("a",{href:"#hero",className:"logo",onClick:v=>m(v,"hero"),children:[l.jsx("span",{className:"logo-accent",children:"BIKASH"}),"SUNA"]}),o&&l.jsx("div",{className:"nav-drawer-backdrop",onClick:()=>c(!1),"aria-hidden":"true"}),l.jsx("nav",{className:`nav-menu ${o?"active":""}`,id:"nav-menu",children:l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx("a",{href:"#hero",className:`nav-link ${p==="hero"?"active":""}`,onClick:v=>m(v,"hero"),children:"Home"})}),l.jsx("li",{children:l.jsx("a",{href:"#what-i-do",className:`nav-link ${p==="what-i-do"?"active":""}`,onClick:v=>m(v,"what-i-do"),children:"What I Do"})}),l.jsx("li",{children:l.jsx("a",{href:"#about",className:`nav-link ${p==="about"?"active":""}`,onClick:v=>m(v,"about"),children:"About"})}),l.jsx("li",{children:l.jsx("a",{href:"#media-kit",className:`nav-link ${p==="media-kit"?"active":""}`,onClick:v=>m(v,"media-kit"),children:"Media Kit"})}),l.jsx("li",{children:l.jsx("a",{href:"#portfolio",className:`nav-link ${p==="portfolio"?"active":""}`,onClick:v=>m(v,"portfolio"),children:"Showreels"})}),l.jsx("li",{children:l.jsx("a",{href:"#services",className:`nav-link ${p==="services"?"active":""}`,onClick:v=>m(v,"services"),children:"Packages"})}),l.jsx("li",{children:l.jsx("a",{href:"#contact",className:`nav-link ${p==="contact"?"active":""}`,onClick:v=>m(v,"contact"),children:"Contact"})}),l.jsx("li",{className:"mobile-menu-cta-item",children:l.jsxs("a",{href:"#contact",className:"btn btn-primary btn-block mobile-menu-cta-btn",onClick:v=>m(v,"contact"),children:[l.jsx("i",{className:"fa-solid fa-handshake"})," Collab / Hire"]})})]})}),l.jsxs("div",{className:"nav-actions",children:[l.jsxs("a",{href:"#contact",className:"btn btn-nav-cta",onClick:v=>m(v,"contact"),children:[l.jsx("i",{className:"fa-solid fa-handshake"})," Collab / Hire"]}),l.jsx("button",{className:"mobile-toggle",id:"mobile-toggle","aria-label":"Toggle menu",onClick:()=>c(!o),children:l.jsx("i",{className:`fa-solid ${o?"fa-xmark":"fa-bars-staggered"}`})})]})]})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yd="170",Ux=0,Hp=1,kx=2,Km=1,Fx=2,Oi=3,Mr=0,Ln=1,Bi=2,yr=0,Os=1,rd=2,Vp=3,Gp=4,Ox=5,Xr=100,Bx=101,zx=102,jx=103,Hx=104,Vx=200,Gx=201,Wx=202,Xx=203,sd=204,ad=205,qx=206,Yx=207,$x=208,Kx=209,Zx=210,Jx=211,Qx=212,e0=213,t0=214,od=0,ld=1,cd=2,js=3,ud=4,dd=5,hd=6,fd=7,Zm=0,n0=1,i0=2,Sr=0,r0=1,s0=2,a0=3,o0=4,l0=5,c0=6,u0=7,Jm=300,Hs=301,Vs=302,pd=303,md=304,Dl=306,gd=1e3,Yr=1001,vd=1002,hi=1003,d0=1004,tl=1005,yi=1006,Su=1007,$r=1008,Vi=1009,Qm=1010,eg=1011,Ha=1012,$d=1013,Kr=1014,zi=1015,Va=1016,Kd=1017,Zd=1018,Gs=1020,tg=35902,ng=1021,ig=1022,di=1023,rg=1024,sg=1025,Bs=1026,Ws=1027,ag=1028,Jd=1029,og=1030,Qd=1031,eh=1033,Tl=33776,Al=33777,Cl=33778,bl=33779,xd=35840,_d=35841,yd=35842,Sd=35843,Md=36196,Ed=37492,wd=37496,Td=37808,Ad=37809,Cd=37810,bd=37811,Nd=37812,Rd=37813,Pd=37814,Ld=37815,Dd=37816,Id=37817,Ud=37818,kd=37819,Fd=37820,Od=37821,Nl=36492,Bd=36494,zd=36495,lg=36283,jd=36284,Hd=36285,Vd=36286,h0=3200,f0=3201,cg=0,p0=1,_r="",Kn="srgb",qs="srgb-linear",Il="linear",Pt="srgb",Ms=7680,Wp=519,m0=512,g0=513,v0=514,ug=515,x0=516,_0=517,y0=518,S0=519,Xp=35044,qp="300 es",ji=2e3,Pl=2001;class Ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const c=o.indexOf(t);c!==-1&&o.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,d=o.length;c<d;c++)o[c].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mu=Math.PI/180,Gd=180/Math.PI;function Ga(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]).toLowerCase()}function fn(s,e,t){return Math.max(e,Math.min(t,s))}function M0(s,e){return(s%e+e)%e}function Eu(s,e,t){return(1-t)*s+t*e}function Na(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(fn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*o+e.x,this.y=c*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,r,o,c,d,h,p,m){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,c,d,h,p,m)}set(e,t,r,o,c,d,h,p,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=h,v[3]=t,v[4]=c,v[5]=p,v[6]=r,v[7]=d,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,c=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],v=r[4],_=r[7],x=r[2],M=r[5],E=r[8],T=o[0],S=o[3],y=o[6],R=o[1],P=o[4],A=o[7],G=o[2],k=o[5],D=o[8];return c[0]=d*T+h*R+p*G,c[3]=d*S+h*P+p*k,c[6]=d*y+h*A+p*D,c[1]=m*T+v*R+_*G,c[4]=m*S+v*P+_*k,c[7]=m*y+v*A+_*D,c[2]=x*T+M*R+E*G,c[5]=x*S+M*P+E*k,c[8]=x*y+M*A+E*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],v=e[8];return t*d*v-t*h*m-r*c*v+r*h*p+o*c*m-o*d*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],v=e[8],_=v*d-h*m,x=h*p-v*c,M=m*c-d*p,E=t*_+r*x+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=_*T,e[1]=(o*m-v*r)*T,e[2]=(h*r-o*d)*T,e[3]=x*T,e[4]=(v*t-o*p)*T,e[5]=(o*c-h*t)*T,e[6]=M*T,e[7]=(r*p-m*t)*T,e[8]=(d*t-r*c)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,c,d,h){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*d+m*h)+d+e,-o*m,o*p,-o*(-m*d+p*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(wu.makeScale(e,t)),this}rotate(e){return this.premultiply(wu.makeRotation(-e)),this}translate(e,t){return this.premultiply(wu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wu=new dt;function dg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ll(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function E0(){const s=Ll("canvas");return s.style.display="block",s}const Yp={};function ka(s){s in Yp||(Yp[s]=!0,console.warn(s))}function w0(s,e,t){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,t);break;default:r()}}setTimeout(c,t)})}function T0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function A0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const wt={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Pt&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Pt&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_r?Il:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const $p=[.64,.33,.3,.6,.15,.06],Kp=[.2126,.7152,.0722],Zp=[.3127,.329],Jp=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qp=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);wt.define({[qs]:{primaries:$p,whitePoint:Zp,transfer:Il,toXYZ:Jp,fromXYZ:Qp,luminanceCoefficients:Kp,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:$p,whitePoint:Zp,transfer:Pt,toXYZ:Jp,fromXYZ:Qp,luminanceCoefficients:Kp,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}});let Es;class C0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Es===void 0&&(Es=Ll("canvas")),Es.width=e.width,Es.height=e.height;const r=Es.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ll("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let d=0;d<c.length;d++)c[d]=Hi(c[d]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Hi(t[r]/255)*255):t[r]=Hi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let b0=0;class hg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Ga(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let d=0,h=o.length;d<h;d++)o[d].isDataTexture?c.push(Tu(o[d].image)):c.push(Tu(o[d]))}else c=Tu(o);r.url=c}return t||(e.images[this.uuid]=r),r}}function Tu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?C0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let N0=0;class Dn extends Ys{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,r=Yr,o=Yr,c=yi,d=$r,h=di,p=Vi,m=Dn.DEFAULT_ANISOTROPY,v=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Ga(),this.name="",this.source=new hg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gd:e.x=e.x-Math.floor(e.x);break;case Yr:e.x=e.x<0?0:1;break;case vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gd:e.y=e.y-Math.floor(e.y);break;case Yr:e.y=e.y<0?0:1;break;case vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Jm;Dn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,r=0,o=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,c=this.w,d=e.elements;return this.x=d[0]*t+d[4]*r+d[8]*o+d[12]*c,this.y=d[1]*t+d[5]*r+d[9]*o+d[13]*c,this.z=d[2]*t+d[6]*r+d[10]*o+d[14]*c,this.w=d[3]*t+d[7]*r+d[11]*o+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,c;const p=e.elements,m=p[0],v=p[4],_=p[8],x=p[1],M=p[5],E=p[9],T=p[2],S=p[6],y=p[10];if(Math.abs(v-x)<.01&&Math.abs(_-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(_+T)<.1&&Math.abs(E+S)<.1&&Math.abs(m+M+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(m+1)/2,A=(M+1)/2,G=(y+1)/2,k=(v+x)/4,D=(_+T)/4,F=(E+S)/4;return P>A&&P>G?P<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(P),o=k/r,c=D/r):A>G?A<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(A),r=k/o,c=F/o):G<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(G),r=D/c,o=F/c),this.set(r,o,c,t),this}let R=Math.sqrt((S-E)*(S-E)+(_-T)*(_-T)+(x-v)*(x-v));return Math.abs(R)<.001&&(R=1),this.x=(S-E)/R,this.y=(_-T)/R,this.z=(x-v)/R,this.w=Math.acos((m+M+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R0 extends Ys{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Dn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends R0{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class fg extends Dn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class P0 extends Dn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wa{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,c,d,h){let p=r[o+0],m=r[o+1],v=r[o+2],_=r[o+3];const x=c[d+0],M=c[d+1],E=c[d+2],T=c[d+3];if(h===0){e[t+0]=p,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(h===1){e[t+0]=x,e[t+1]=M,e[t+2]=E,e[t+3]=T;return}if(_!==T||p!==x||m!==M||v!==E){let S=1-h;const y=p*x+m*M+v*E+_*T,R=y>=0?1:-1,P=1-y*y;if(P>Number.EPSILON){const G=Math.sqrt(P),k=Math.atan2(G,y*R);S=Math.sin(S*k)/G,h=Math.sin(h*k)/G}const A=h*R;if(p=p*S+x*A,m=m*S+M*A,v=v*S+E*A,_=_*S+T*A,S===1-h){const G=1/Math.sqrt(p*p+m*m+v*v+_*_);p*=G,m*=G,v*=G,_*=G}}e[t]=p,e[t+1]=m,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,c,d){const h=r[o],p=r[o+1],m=r[o+2],v=r[o+3],_=c[d],x=c[d+1],M=c[d+2],E=c[d+3];return e[t]=h*E+v*_+p*M-m*x,e[t+1]=p*E+v*x+m*_-h*M,e[t+2]=m*E+v*M+h*x-p*_,e[t+3]=v*E-h*_-p*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,c=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(r/2),v=h(o/2),_=h(c/2),x=p(r/2),M=p(o/2),E=p(c/2);switch(d){case"XYZ":this._x=x*v*_+m*M*E,this._y=m*M*_-x*v*E,this._z=m*v*E+x*M*_,this._w=m*v*_-x*M*E;break;case"YXZ":this._x=x*v*_+m*M*E,this._y=m*M*_-x*v*E,this._z=m*v*E-x*M*_,this._w=m*v*_+x*M*E;break;case"ZXY":this._x=x*v*_-m*M*E,this._y=m*M*_+x*v*E,this._z=m*v*E+x*M*_,this._w=m*v*_-x*M*E;break;case"ZYX":this._x=x*v*_-m*M*E,this._y=m*M*_+x*v*E,this._z=m*v*E-x*M*_,this._w=m*v*_+x*M*E;break;case"YZX":this._x=x*v*_+m*M*E,this._y=m*M*_+x*v*E,this._z=m*v*E-x*M*_,this._w=m*v*_-x*M*E;break;case"XZY":this._x=x*v*_-m*M*E,this._y=m*M*_-x*v*E,this._z=m*v*E+x*M*_,this._w=m*v*_+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],c=t[8],d=t[1],h=t[5],p=t[9],m=t[2],v=t[6],_=t[10],x=r+h+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-p)*M,this._y=(c-m)*M,this._z=(d-o)*M}else if(r>h&&r>_){const M=2*Math.sqrt(1+r-h-_);this._w=(v-p)/M,this._x=.25*M,this._y=(o+d)/M,this._z=(c+m)/M}else if(h>_){const M=2*Math.sqrt(1+h-r-_);this._w=(c-m)/M,this._x=(o+d)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+_-r-h);this._w=(d-o)/M,this._x=(c+m)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,c=e._z,d=e._w,h=t._x,p=t._y,m=t._z,v=t._w;return this._x=r*v+d*h+o*m-c*p,this._y=o*v+d*p+c*h-r*m,this._z=c*v+d*m+r*p-o*h,this._w=d*v-r*h-o*p-c*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,c=this._z,d=this._w;let h=d*e._w+r*e._x+o*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=o,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-t;return this._w=M*d+t*this._w,this._x=M*r+t*this._x,this._y=M*o+t*this._y,this._z=M*c+t*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,h),_=Math.sin((1-t)*v)/m,x=Math.sin(t*v)/m;return this._w=d*_+this._w*x,this._x=r*_+this._x*x,this._y=o*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(t),c*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,r=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(em.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(em.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*t+c[3]*r+c[6]*o,this.y=c[1]*t+c[4]*r+c[7]*o,this.z=c[2]*t+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,c=e.elements,d=1/(c[3]*t+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*t+c[4]*r+c[8]*o+c[12])*d,this.y=(c[1]*t+c[5]*r+c[9]*o+c[13])*d,this.z=(c[2]*t+c[6]*r+c[10]*o+c[14])*d,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,c=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*o-h*r),v=2*(h*t-c*o),_=2*(c*r-d*t);return this.x=t+p*m+d*_-h*v,this.y=r+p*v+h*m-c*_,this.z=o+p*_+c*v-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o,this.y=c[1]*t+c[5]*r+c[9]*o,this.z=c[2]*t+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,c=e.z,d=t.x,h=t.y,p=t.z;return this.x=o*p-c*h,this.y=c*d-r*p,this.z=r*h-o*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Au.copy(this).projectOnVector(e),this.sub(Au)}reflect(e){return this.sub(Au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(fn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Au=new H,em=new Wa;class Xa{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(t===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,oi):oi.fromBufferAttribute(c,d),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),nl.copy(r.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}const o=e.children;for(let c=0,d=o.length;c<d;c++)this.expandByObject(o[c],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ra),il.subVectors(this.max,Ra),ws.subVectors(e.a,Ra),Ts.subVectors(e.b,Ra),As.subVectors(e.c,Ra),fr.subVectors(Ts,ws),pr.subVectors(As,Ts),Or.subVectors(ws,As);let t=[0,-fr.z,fr.y,0,-pr.z,pr.y,0,-Or.z,Or.y,fr.z,0,-fr.x,pr.z,0,-pr.x,Or.z,0,-Or.x,-fr.y,fr.x,0,-pr.y,pr.x,0,-Or.y,Or.x,0];return!Cu(t,ws,Ts,As,il)||(t=[1,0,0,0,1,0,0,0,1],!Cu(t,ws,Ts,As,il))?!1:(rl.crossVectors(fr,pr),t=[rl.x,rl.y,rl.z],Cu(t,ws,Ts,As,il))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new H,new H,new H,new H,new H,new H,new H,new H],oi=new H,nl=new Xa,ws=new H,Ts=new H,As=new H,fr=new H,pr=new H,Or=new H,Ra=new H,il=new H,rl=new H,Br=new H;function Cu(s,e,t,r,o){for(let c=0,d=s.length-3;c<=d;c+=3){Br.fromArray(s,c);const h=o.x*Math.abs(Br.x)+o.y*Math.abs(Br.y)+o.z*Math.abs(Br.z),p=e.dot(Br),m=t.dot(Br),v=r.dot(Br);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>h)return!1}return!0}const L0=new Xa,Pa=new H,bu=new H;class Ul{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):L0.setFromPoints(e).getCenter(r);let o=0;for(let c=0,d=e.length;c<d;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);const t=Pa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Pa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(bu)),this.expandByPoint(Pa.copy(e.center).sub(bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new H,Nu=new H,sl=new H,mr=new H,Ru=new H,al=new H,Pu=new H;class pg{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Nu.copy(e).add(t).multiplyScalar(.5),sl.copy(t).sub(e).normalize(),mr.copy(this.origin).sub(Nu);const c=e.distanceTo(t)*.5,d=-this.direction.dot(sl),h=mr.dot(this.direction),p=-mr.dot(sl),m=mr.lengthSq(),v=Math.abs(1-d*d);let _,x,M,E;if(v>0)if(_=d*p-h,x=d*h-p,E=c*v,_>=0)if(x>=-E)if(x<=E){const T=1/v;_*=T,x*=T,M=_*(_+d*x+2*h)+x*(d*_+x+2*p)+m}else x=c,_=Math.max(0,-(d*x+h)),M=-_*_+x*(x+2*p)+m;else x=-c,_=Math.max(0,-(d*x+h)),M=-_*_+x*(x+2*p)+m;else x<=-E?(_=Math.max(0,-(-d*c+h)),x=_>0?-c:Math.min(Math.max(-c,-p),c),M=-_*_+x*(x+2*p)+m):x<=E?(_=0,x=Math.min(Math.max(-c,-p),c),M=x*(x+2*p)+m):(_=Math.max(0,-(d*c+h)),x=_>0?c:Math.min(Math.max(-c,-p),c),M=-_*_+x*(x+2*p)+m);else x=d>0?-c:c,_=Math.max(0,-(d*x+h)),M=-_*_+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Nu).addScaledVector(sl,x),M}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);const r=Ii.dot(this.direction),o=Ii.dot(Ii)-r*r,c=e.radius*e.radius;if(o>c)return null;const d=Math.sqrt(c-o),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,t):this.at(h,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,c,d,h,p;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,o=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,o=(e.min.x-x.x)*m),v>=0?(c=(e.min.y-x.y)*v,d=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,d=(e.min.y-x.y)*v),r>d||c>o||((c>r||isNaN(r))&&(r=c),(d<o||isNaN(o))&&(o=d),_>=0?(h=(e.min.z-x.z)*_,p=(e.max.z-x.z)*_):(h=(e.max.z-x.z)*_,p=(e.min.z-x.z)*_),r>p||h>o)||((h>r||r!==r)&&(r=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,r,o,c){Ru.subVectors(t,e),al.subVectors(r,e),Pu.crossVectors(Ru,al);let d=this.direction.dot(Pu),h;if(d>0){if(o)return null;h=1}else if(d<0)h=-1,d=-d;else return null;mr.subVectors(this.origin,e);const p=h*this.direction.dot(al.crossVectors(mr,al));if(p<0)return null;const m=h*this.direction.dot(Ru.cross(mr));if(m<0||p+m>d)return null;const v=-h*mr.dot(Pu);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,t,r,o,c,d,h,p,m,v,_,x,M,E,T,S){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,c,d,h,p,m,v,_,x,M,E,T,S)}set(e,t,r,o,c,d,h,p,m,v,_,x,M,E,T,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=c,y[5]=d,y[9]=h,y[13]=p,y[2]=m,y[6]=v,y[10]=_,y[14]=x,y[3]=M,y[7]=E,y[11]=T,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Cs.setFromMatrixColumn(e,0).length(),c=1/Cs.setFromMatrixColumn(e,1).length(),d=1/Cs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*c,t[5]=r[5]*c,t[6]=r[6]*c,t[7]=0,t[8]=r[8]*d,t[9]=r[9]*d,t[10]=r[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,c=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(o),m=Math.sin(o),v=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=d*v,M=d*_,E=h*v,T=h*_;t[0]=p*v,t[4]=-p*_,t[8]=m,t[1]=M+E*m,t[5]=x-T*m,t[9]=-h*p,t[2]=T-x*m,t[6]=E+M*m,t[10]=d*p}else if(e.order==="YXZ"){const x=p*v,M=p*_,E=m*v,T=m*_;t[0]=x+T*h,t[4]=E*h-M,t[8]=d*m,t[1]=d*_,t[5]=d*v,t[9]=-h,t[2]=M*h-E,t[6]=T+x*h,t[10]=d*p}else if(e.order==="ZXY"){const x=p*v,M=p*_,E=m*v,T=m*_;t[0]=x-T*h,t[4]=-d*_,t[8]=E+M*h,t[1]=M+E*h,t[5]=d*v,t[9]=T-x*h,t[2]=-d*m,t[6]=h,t[10]=d*p}else if(e.order==="ZYX"){const x=d*v,M=d*_,E=h*v,T=h*_;t[0]=p*v,t[4]=E*m-M,t[8]=x*m+T,t[1]=p*_,t[5]=T*m+x,t[9]=M*m-E,t[2]=-m,t[6]=h*p,t[10]=d*p}else if(e.order==="YZX"){const x=d*p,M=d*m,E=h*p,T=h*m;t[0]=p*v,t[4]=T-x*_,t[8]=E*_+M,t[1]=_,t[5]=d*v,t[9]=-h*v,t[2]=-m*v,t[6]=M*_+E,t[10]=x-T*_}else if(e.order==="XZY"){const x=d*p,M=d*m,E=h*p,T=h*m;t[0]=p*v,t[4]=-_,t[8]=m*v,t[1]=x*_+T,t[5]=d*v,t[9]=M*_-E,t[2]=E*_-M,t[6]=h*v,t[10]=T*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(D0,e,I0)}lookAt(e,t,r){const o=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),gr.crossVectors(r,On),gr.lengthSq()===0&&(Math.abs(r.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),gr.crossVectors(r,On)),gr.normalize(),ol.crossVectors(On,gr),o[0]=gr.x,o[4]=ol.x,o[8]=On.x,o[1]=gr.y,o[5]=ol.y,o[9]=On.y,o[2]=gr.z,o[6]=ol.z,o[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,c=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],v=r[1],_=r[5],x=r[9],M=r[13],E=r[2],T=r[6],S=r[10],y=r[14],R=r[3],P=r[7],A=r[11],G=r[15],k=o[0],D=o[4],F=o[8],L=o[12],b=o[1],z=o[5],ie=o[9],Q=o[13],de=o[2],he=o[6],ce=o[10],ue=o[14],j=o[3],le=o[7],se=o[11],O=o[15];return c[0]=d*k+h*b+p*de+m*j,c[4]=d*D+h*z+p*he+m*le,c[8]=d*F+h*ie+p*ce+m*se,c[12]=d*L+h*Q+p*ue+m*O,c[1]=v*k+_*b+x*de+M*j,c[5]=v*D+_*z+x*he+M*le,c[9]=v*F+_*ie+x*ce+M*se,c[13]=v*L+_*Q+x*ue+M*O,c[2]=E*k+T*b+S*de+y*j,c[6]=E*D+T*z+S*he+y*le,c[10]=E*F+T*ie+S*ce+y*se,c[14]=E*L+T*Q+S*ue+y*O,c[3]=R*k+P*b+A*de+G*j,c[7]=R*D+P*z+A*he+G*le,c[11]=R*F+P*ie+A*ce+G*se,c[15]=R*L+P*Q+A*ue+G*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],c=e[12],d=e[1],h=e[5],p=e[9],m=e[13],v=e[2],_=e[6],x=e[10],M=e[14],E=e[3],T=e[7],S=e[11],y=e[15];return E*(+c*p*_-o*m*_-c*h*x+r*m*x+o*h*M-r*p*M)+T*(+t*p*M-t*m*x+c*d*x-o*d*M+o*m*v-c*p*v)+S*(+t*m*_-t*h*M-c*d*_+r*d*M+c*h*v-r*m*v)+y*(-o*h*v-t*p*_+t*h*x+o*d*_-r*d*x+r*p*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],v=e[8],_=e[9],x=e[10],M=e[11],E=e[12],T=e[13],S=e[14],y=e[15],R=_*S*m-T*x*m+T*p*M-h*S*M-_*p*y+h*x*y,P=E*x*m-v*S*m-E*p*M+d*S*M+v*p*y-d*x*y,A=v*T*m-E*_*m+E*h*M-d*T*M-v*h*y+d*_*y,G=E*_*p-v*T*p-E*h*x+d*T*x+v*h*S-d*_*S,k=t*R+r*P+o*A+c*G;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/k;return e[0]=R*D,e[1]=(T*x*c-_*S*c-T*o*M+r*S*M+_*o*y-r*x*y)*D,e[2]=(h*S*c-T*p*c+T*o*m-r*S*m-h*o*y+r*p*y)*D,e[3]=(_*p*c-h*x*c-_*o*m+r*x*m+h*o*M-r*p*M)*D,e[4]=P*D,e[5]=(v*S*c-E*x*c+E*o*M-t*S*M-v*o*y+t*x*y)*D,e[6]=(E*p*c-d*S*c-E*o*m+t*S*m+d*o*y-t*p*y)*D,e[7]=(d*x*c-v*p*c+v*o*m-t*x*m-d*o*M+t*p*M)*D,e[8]=A*D,e[9]=(E*_*c-v*T*c-E*r*M+t*T*M+v*r*y-t*_*y)*D,e[10]=(d*T*c-E*h*c+E*r*m-t*T*m-d*r*y+t*h*y)*D,e[11]=(v*h*c-d*_*c-v*r*m+t*_*m+d*r*M-t*h*M)*D,e[12]=G*D,e[13]=(v*T*o-E*_*o+E*r*x-t*T*x-v*r*S+t*_*S)*D,e[14]=(E*h*o-d*T*o-E*r*p+t*T*p+d*r*S-t*h*S)*D,e[15]=(d*_*o-v*h*o+v*r*p-t*_*p-d*r*x+t*h*x)*D,this}scale(e){const t=this.elements,r=e.x,o=e.y,c=e.z;return t[0]*=r,t[4]*=o,t[8]*=c,t[1]*=r,t[5]*=o,t[9]*=c,t[2]*=r,t[6]*=o,t[10]*=c,t[3]*=r,t[7]*=o,t[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),c=1-r,d=e.x,h=e.y,p=e.z,m=c*d,v=c*h;return this.set(m*d+r,m*h-o*p,m*p+o*h,0,m*h+o*p,v*h+r,v*p-o*d,0,m*p-o*h,v*p+o*d,c*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,c,d){return this.set(1,r,c,0,e,1,d,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,c=t._x,d=t._y,h=t._z,p=t._w,m=c+c,v=d+d,_=h+h,x=c*m,M=c*v,E=c*_,T=d*v,S=d*_,y=h*_,R=p*m,P=p*v,A=p*_,G=r.x,k=r.y,D=r.z;return o[0]=(1-(T+y))*G,o[1]=(M+A)*G,o[2]=(E-P)*G,o[3]=0,o[4]=(M-A)*k,o[5]=(1-(x+y))*k,o[6]=(S+R)*k,o[7]=0,o[8]=(E+P)*D,o[9]=(S-R)*D,o[10]=(1-(x+T))*D,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let c=Cs.set(o[0],o[1],o[2]).length();const d=Cs.set(o[4],o[5],o[6]).length(),h=Cs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],li.copy(this);const m=1/c,v=1/d,_=1/h;return li.elements[0]*=m,li.elements[1]*=m,li.elements[2]*=m,li.elements[4]*=v,li.elements[5]*=v,li.elements[6]*=v,li.elements[8]*=_,li.elements[9]*=_,li.elements[10]*=_,t.setFromRotationMatrix(li),r.x=c,r.y=d,r.z=h,this}makePerspective(e,t,r,o,c,d,h=ji){const p=this.elements,m=2*c/(t-e),v=2*c/(r-o),_=(t+e)/(t-e),x=(r+o)/(r-o);let M,E;if(h===ji)M=-(d+c)/(d-c),E=-2*d*c/(d-c);else if(h===Pl)M=-d/(d-c),E=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,c,d,h=ji){const p=this.elements,m=1/(t-e),v=1/(r-o),_=1/(d-c),x=(t+e)*m,M=(r+o)*v;let E,T;if(h===ji)E=(d+c)*_,T=-2*_;else if(h===Pl)E=c*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Cs=new H,li=new Ot,D0=new H(0,0,0),I0=new H(1,1,1),gr=new H,ol=new H,On=new H,tm=new Ot,nm=new Wa;class Si{constructor(e=0,t=0,r=0,o=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,c=o[0],d=o[4],h=o[8],p=o[1],m=o[5],v=o[9],_=o[2],x=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(fn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(fn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-fn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(fn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-fn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nm.setFromEuler(this),this.setFromQuaternion(nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class mg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let U0=0;const im=new H,bs=new Wa,Ui=new Ot,ll=new H,La=new H,k0=new H,F0=new Wa,rm=new H(1,0,0),sm=new H(0,1,0),am=new H(0,0,1),om={type:"added"},O0={type:"removed"},Ns={type:"childadded",child:null},Lu={type:"childremoved",child:null};class Sn extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new H,t=new Si,r=new Wa,o=new H(1,1,1);function c(){r.setFromEuler(t,!1)}function d(){t.setFromQuaternion(r,void 0,!1)}t._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ot},normalMatrix:{value:new dt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(rm,e)}rotateY(e){return this.rotateOnAxis(sm,e)}rotateZ(e){return this.rotateOnAxis(am,e)}translateOnAxis(e,t){return im.copy(e).applyQuaternion(this.quaternion),this.position.add(im.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rm,e)}translateY(e){return this.translateOnAxis(sm,e)}translateZ(e){return this.translateOnAxis(am,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ll.copy(e):ll.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(La,ll,this.up):Ui.lookAt(ll,La,this.up),this.quaternion.setFromRotationMatrix(Ui),o&&(Ui.extractRotation(o.matrixWorld),bs.setFromRotationMatrix(Ui),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(om),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(O0),Lu.child=e,this.dispatchEvent(Lu),Lu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(om),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,k0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,F0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const _=p[m];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(e.materials,this.material[p]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(c(e.animations,p))}}if(t){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),v=d(e.images),_=d(e.shapes),x=d(e.skeletons),M=d(e.animations),E=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=o,r;function d(h){const p=[];for(const m in h){const v=h[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Sn.DEFAULT_UP=new H(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new H,ki=new H,Du=new H,Fi=new H,Rs=new H,Ps=new H,lm=new H,Iu=new H,Uu=new H,ku=new H,Fu=new Lt,Ou=new Lt,Bu=new Lt;class ui{constructor(e=new H,t=new H,r=new H){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),ci.subVectors(e,t),o.cross(ci);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,t,r,o,c){ci.subVectors(o,t),ki.subVectors(r,t),Du.subVectors(e,t);const d=ci.dot(ci),h=ci.dot(ki),p=ci.dot(Du),m=ki.dot(ki),v=ki.dot(Du),_=d*m-h*h;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(m*p-h*v)*x,E=(d*v-h*p)*x;return c.set(1-M-E,E,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,r,o,c,d,h,p){return this.getBarycoord(e,t,r,o,Fi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Fi.x),p.addScaledVector(d,Fi.y),p.addScaledVector(h,Fi.z),p)}static getInterpolatedAttribute(e,t,r,o,c,d){return Fu.setScalar(0),Ou.setScalar(0),Bu.setScalar(0),Fu.fromBufferAttribute(e,t),Ou.fromBufferAttribute(e,r),Bu.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(Fu,c.x),d.addScaledVector(Ou,c.y),d.addScaledVector(Bu,c.z),d}static isFrontFacing(e,t,r,o){return ci.subVectors(r,t),ki.subVectors(e,t),ci.cross(ki).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ci.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,c){return ui.getInterpolation(e,this.a,this.b,this.c,t,r,o,c)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,c=this.c;let d,h;Rs.subVectors(o,r),Ps.subVectors(c,r),Iu.subVectors(e,r);const p=Rs.dot(Iu),m=Ps.dot(Iu);if(p<=0&&m<=0)return t.copy(r);Uu.subVectors(e,o);const v=Rs.dot(Uu),_=Ps.dot(Uu);if(v>=0&&_<=v)return t.copy(o);const x=p*_-v*m;if(x<=0&&p>=0&&v<=0)return d=p/(p-v),t.copy(r).addScaledVector(Rs,d);ku.subVectors(e,c);const M=Rs.dot(ku),E=Ps.dot(ku);if(E>=0&&M<=E)return t.copy(c);const T=M*m-p*E;if(T<=0&&m>=0&&E<=0)return h=m/(m-E),t.copy(r).addScaledVector(Ps,h);const S=v*E-M*_;if(S<=0&&_-v>=0&&M-E>=0)return lm.subVectors(c,o),h=(_-v)/(_-v+(M-E)),t.copy(o).addScaledVector(lm,h);const y=1/(S+T+x);return d=T*y,h=x*y,t.copy(r).addScaledVector(Rs,d).addScaledVector(Ps,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},cl={h:0,s:0,l:0};function zu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class St{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=wt.workingColorSpace){return this.r=e,this.g=t,this.b=r,wt.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=wt.workingColorSpace){if(e=M0(e,1),t=fn(t,0,1),r=fn(r,0,1),t===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+t):r+t-r*t,d=2*r-c;this.r=zu(d,c,e+1/3),this.g=zu(d,c,e),this.b=zu(d,c,e-1/3)}return wt.toWorkingColorSpace(this,o),this}setStyle(e,t=Kn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=o[1],h=o[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,t);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,t);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(c,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kn){const r=gg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return wt.fromWorkingColorSpace(hn.copy(this),e),Math.round(fn(hn.r*255,0,255))*65536+Math.round(fn(hn.g*255,0,255))*256+Math.round(fn(hn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(hn.copy(this),t);const r=hn.r,o=hn.g,c=hn.b,d=Math.max(r,o,c),h=Math.min(r,o,c);let p,m;const v=(h+d)/2;if(h===d)p=0,m=0;else{const _=d-h;switch(m=v<=.5?_/(d+h):_/(2-d-h),d){case r:p=(o-c)/_+(o<c?6:0);break;case o:p=(c-r)/_+2;break;case c:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Kn){wt.fromWorkingColorSpace(hn.copy(this),e);const t=hn.r,r=hn.g,o=hn.b;return e!==Kn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+t,vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(vr),e.getHSL(cl);const r=Eu(vr.h,cl.h,t),o=Eu(vr.s,cl.s,t),c=Eu(vr.l,cl.l,t);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*t+c[3]*r+c[6]*o,this.g=c[1]*t+c[4]*r+c[7]*o,this.b=c[2]*t+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new St;St.NAMES=gg;let B0=0;class $s extends Ys{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Ga(),this.name="",this.blending=Os,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=ad,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(r.blending=this.blending),this.side!==Mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==sd&&(r.blendSrc=this.blendSrc),this.blendDst!==ad&&(r.blendDst=this.blendDst),this.blendEquation!==Xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}if(t){const c=o(e.textures),d=o(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=t[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vg extends $s{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Zm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new H,ul=new et;class Zn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Xp,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ul.fromBufferAttribute(this,t),ul.applyMatrix3(e),this.setXY(t,ul.x,ul.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Na(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Rn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Na(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Na(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Na(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Na(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),r=Rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),r=Rn(r,this.array),o=Rn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,c){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),r=Rn(r,this.array),o=Rn(o,this.array),c=Rn(c,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xp&&(e.usage=this.usage),e}}class xg extends Zn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class _g extends Zn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class pn extends Zn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let z0=0;const $n=new Ot,ju=new Sn,Ls=new H,Bn=new Xa,Da=new Xa,tn=new H;class Jn extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Ga(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dg(e)?_g:xg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new dt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,r){return $n.makeTranslation(e,t,r),this.applyMatrix4($n),this}scale(e,t,r){return $n.makeScale(e,t,r),this.applyMatrix4($n),this}lookAt(e){return ju.lookAt(e),ju.updateMatrix(),this.applyMatrix4(ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new pn(r,3))}else{for(let r=0,o=t.count;r<o;r++){const c=e[r];t.setXYZ(r,c.x,c.y,c.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const c=t[r];Bn.setFromBufferAttribute(c),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ul);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const r=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let c=0,d=t.length;c<d;c++){const h=t[c];Da.setFromBufferAttribute(h),this.morphTargetsRelative?(tn.addVectors(Bn.min,Da.min),Bn.expandByPoint(tn),tn.addVectors(Bn.max,Da.max),Bn.expandByPoint(tn)):(Bn.expandByPoint(Da.min),Bn.expandByPoint(Da.max))}Bn.getCenter(r);let o=0;for(let c=0,d=e.count;c<d;c++)tn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(tn));if(t)for(let c=0,d=t.length;c<d;c++){const h=t[c],p=this.morphTargetsRelative;for(let m=0,v=h.count;m<v;m++)tn.fromBufferAttribute(h,m),p&&(Ls.fromBufferAttribute(e,m),tn.add(Ls)),o=Math.max(o,r.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,c=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let F=0;F<r.count;F++)h[F]=new H,p[F]=new H;const m=new H,v=new H,_=new H,x=new et,M=new et,E=new et,T=new H,S=new H;function y(F,L,b){m.fromBufferAttribute(r,F),v.fromBufferAttribute(r,L),_.fromBufferAttribute(r,b),x.fromBufferAttribute(c,F),M.fromBufferAttribute(c,L),E.fromBufferAttribute(c,b),v.sub(m),_.sub(m),M.sub(x),E.sub(x);const z=1/(M.x*E.y-E.x*M.y);isFinite(z)&&(T.copy(v).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(z),S.copy(_).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(z),h[F].add(T),h[L].add(T),h[b].add(T),p[F].add(S),p[L].add(S),p[b].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let F=0,L=R.length;F<L;++F){const b=R[F],z=b.start,ie=b.count;for(let Q=z,de=z+ie;Q<de;Q+=3)y(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const P=new H,A=new H,G=new H,k=new H;function D(F){G.fromBufferAttribute(o,F),k.copy(G);const L=h[F];P.copy(L),P.sub(G.multiplyScalar(G.dot(L))).normalize(),A.crossVectors(k,L);const z=A.dot(p[F])<0?-1:1;d.setXYZW(F,P.x,P.y,P.z,z)}for(let F=0,L=R.length;F<L;++F){const b=R[F],z=b.start,ie=b.count;for(let Q=z,de=z+ie;Q<de;Q+=3)D(e.getX(Q+0)),D(e.getX(Q+1)),D(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Zn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const o=new H,c=new H,d=new H,h=new H,p=new H,m=new H,v=new H,_=new H;if(e)for(let x=0,M=e.count;x<M;x+=3){const E=e.getX(x+0),T=e.getX(x+1),S=e.getX(x+2);o.fromBufferAttribute(t,E),c.fromBufferAttribute(t,T),d.fromBufferAttribute(t,S),v.subVectors(d,c),_.subVectors(o,c),v.cross(_),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,S),h.add(v),p.add(v),m.add(v),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,M=t.count;x<M;x+=3)o.fromBufferAttribute(t,x+0),c.fromBufferAttribute(t,x+1),d.fromBufferAttribute(t,x+2),v.subVectors(d,c),_.subVectors(o,c),v.cross(_),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(h,p){const m=h.array,v=h.itemSize,_=h.normalized,x=new m.constructor(p.length*v);let M=0,E=0;for(let T=0,S=p.length;T<S;T++){h.isInterleavedBufferAttribute?M=p[T]*h.data.stride+h.offset:M=p[T]*v;for(let y=0;y<v;y++)x[E++]=m[M++]}return new Zn(x,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jn,r=this.index.array,o=this.attributes;for(const h in o){const p=o[h],m=e(p,r);t.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let v=0,_=m.length;v<_;v++){const x=m[v],M=e(x,r);p.push(M)}t.morphAttributes[h]=p}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let _=0,x=m.length;_<x;_++){const M=m[_];v.push(M.toJSON(e.data))}v.length>0&&(o[p]=v,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(t))}const c=e.morphAttributes;for(const m in c){const v=[],_=c[m];for(let x=0,M=_.length;x<M;x++)v.push(_[x].clone(t));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,v=d.length;m<v;m++){const _=d[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cm=new Ot,zr=new pg,dl=new Ul,um=new H,hl=new H,fl=new H,pl=new H,Hu=new H,ml=new H,dm=new H,gl=new H;class Pn extends Sn{constructor(e=new Jn,t=new vg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){ml.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=h[p],_=c[p];v!==0&&(Hu.fromBufferAttribute(_,e),d?ml.addScaledVector(Hu,v):ml.addScaledVector(Hu.sub(t),v))}t.add(ml)}return t}raycast(e,t){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),dl.copy(r.boundingSphere),dl.applyMatrix4(c),zr.copy(e.ray).recast(e.near),!(dl.containsPoint(zr.origin)===!1&&(zr.intersectSphere(dl,um)===null||zr.origin.distanceToSquared(um)>(e.far-e.near)**2))&&(cm.copy(c).invert(),zr.copy(e.ray).applyMatrix4(cm),!(r.boundingBox!==null&&zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,zr)))}_computeIntersections(e,t,r){let o;const c=this.geometry,d=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,T=x.length;E<T;E++){const S=x[E],y=d[S.materialIndex],R=Math.max(S.start,M.start),P=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let A=R,G=P;A<G;A+=3){const k=h.getX(A),D=h.getX(A+1),F=h.getX(A+2);o=vl(this,y,e,r,m,v,_,k,D,F),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let S=E,y=T;S<y;S+=3){const R=h.getX(S),P=h.getX(S+1),A=h.getX(S+2);o=vl(this,d,e,r,m,v,_,R,P,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(d))for(let E=0,T=x.length;E<T;E++){const S=x[E],y=d[S.materialIndex],R=Math.max(S.start,M.start),P=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let A=R,G=P;A<G;A+=3){const k=A,D=A+1,F=A+2;o=vl(this,y,e,r,m,v,_,k,D,F),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),T=Math.min(p.count,M.start+M.count);for(let S=E,y=T;S<y;S+=3){const R=S,P=S+1,A=S+2;o=vl(this,d,e,r,m,v,_,R,P,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function j0(s,e,t,r,o,c,d,h){let p;if(e.side===Ln?p=r.intersectTriangle(d,c,o,!0,h):p=r.intersectTriangle(o,c,d,e.side===Mr,h),p===null)return null;gl.copy(h),gl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(gl);return m<t.near||m>t.far?null:{distance:m,point:gl.clone(),object:s}}function vl(s,e,t,r,o,c,d,h,p,m){s.getVertexPosition(h,hl),s.getVertexPosition(p,fl),s.getVertexPosition(m,pl);const v=j0(s,e,t,r,hl,fl,pl,dm);if(v){const _=new H;ui.getBarycoord(dm,hl,fl,pl,_),o&&(v.uv=ui.getInterpolatedAttribute(o,h,p,m,_,new et)),c&&(v.uv1=ui.getInterpolatedAttribute(c,h,p,m,_,new et)),d&&(v.normal=ui.getInterpolatedAttribute(d,h,p,m,_,new H),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:h,b:p,c:m,normal:new H,materialIndex:0};ui.getNormal(hl,fl,pl,x.normal),v.face=x,v.barycoord=_}return v}class qa extends Jn{constructor(e=1,t=1,r=1,o=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:c,depthSegments:d};const h=this;o=Math.floor(o),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],v=[],_=[];let x=0,M=0;E("z","y","x",-1,-1,r,t,e,d,c,0),E("z","y","x",1,-1,r,t,-e,d,c,1),E("x","z","y",1,1,e,r,t,o,d,2),E("x","z","y",1,-1,e,r,-t,o,d,3),E("x","y","z",1,-1,e,t,r,o,c,4),E("x","y","z",-1,-1,e,t,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new pn(m,3)),this.setAttribute("normal",new pn(v,3)),this.setAttribute("uv",new pn(_,2));function E(T,S,y,R,P,A,G,k,D,F,L){const b=A/D,z=G/F,ie=A/2,Q=G/2,de=k/2,he=D+1,ce=F+1;let ue=0,j=0;const le=new H;for(let se=0;se<ce;se++){const O=se*z-Q;for(let re=0;re<he;re++){const Le=re*b-ie;le[T]=Le*R,le[S]=O*P,le[y]=de,m.push(le.x,le.y,le.z),le[T]=0,le[S]=0,le[y]=k>0?1:-1,v.push(le.x,le.y,le.z),_.push(re/D),_.push(1-se/F),ue+=1}}for(let se=0;se<F;se++)for(let O=0;O<D;O++){const re=x+O+he*se,Le=x+O+he*(se+1),Z=x+(O+1)+he*(se+1),oe=x+(O+1)+he*se;p.push(re,Le,oe),p.push(Le,Z,oe),j+=6}h.addGroup(M,j,L),M+=j,x+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function yn(s){const e={};for(let t=0;t<s.length;t++){const r=Xs(s[t]);for(const o in r)e[o]=r[o]}return e}function H0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function yg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const V0={clone:Xs,merge:yn};var G0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends $s{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G0,this.fragmentShader=W0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=H0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?t.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[o]={type:"m4",value:d.toArray()}:t.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Sg extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new H,hm=new et,fm=new et;class zn extends Sg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gd*2*Math.atan(Math.tan(Mu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,t){return this.getViewBounds(e,hm,fm),t.subVectors(fm,hm)}setViewOffset(e,t,r,o,c,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mu*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,c=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*o/p,t-=d.offsetY*r/m,o*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ds=-90,Is=1;class X0 extends Sn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new zn(Ds,Is,e,t);o.layers=this.layers,this.add(o);const c=new zn(Ds,Is,e,t);c.layers=this.layers,this.add(c);const d=new zn(Ds,Is,e,t);d.layers=this.layers,this.add(d);const h=new zn(Ds,Is,e,t);h.layers=this.layers,this.add(h);const p=new zn(Ds,Is,e,t);p.layers=this.layers,this.add(p);const m=new zn(Ds,Is,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,c,d,h,p]=t;for(const m of t)this.remove(m);if(e===ji)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Pl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,p,m,v]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,c),e.setRenderTarget(r,1,o),e.render(t,d),e.setRenderTarget(r,2,o),e.render(t,h),e.setRenderTarget(r,3,o),e.render(t,p),e.setRenderTarget(r,4,o),e.render(t,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),e.render(t,v),e.setRenderTarget(_,x,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Mg extends Dn{constructor(e,t,r,o,c,d,h,p,m,v){e=e!==void 0?e:[],t=t!==void 0?t:Hs,super(e,t,r,o,c,d,h,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class q0 extends Zr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Mg(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new qa(5,5,5),c=new Er({name:"CubemapFromEquirect",uniforms:Xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ln,blending:yr});c.uniforms.tEquirect.value=t;const d=new Pn(o,c),h=t.minFilter;return t.minFilter===$r&&(t.minFilter=yi),new X0(1,10,this).update(e,d),t.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,t,r,o){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,r,o);e.setRenderTarget(c)}}const Vu=new H,Y0=new H,$0=new dt;class Gr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Vu.subVectors(r,t).cross(Y0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Vu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:t.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||$0.getNormalMatrix(e),o=this.coplanarPoint(Vu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new Ul,xl=new H;class th{constructor(e=new Gr,t=new Gr,r=new Gr,o=new Gr,c=new Gr,d=new Gr){this.planes=[e,t,r,o,c,d]}set(e,t,r,o,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(d),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ji){const r=this.planes,o=e.elements,c=o[0],d=o[1],h=o[2],p=o[3],m=o[4],v=o[5],_=o[6],x=o[7],M=o[8],E=o[9],T=o[10],S=o[11],y=o[12],R=o[13],P=o[14],A=o[15];if(r[0].setComponents(p-c,x-m,S-M,A-y).normalize(),r[1].setComponents(p+c,x+m,S+M,A+y).normalize(),r[2].setComponents(p+d,x+v,S+E,A+R).normalize(),r[3].setComponents(p-d,x-v,S-E,A-R).normalize(),r[4].setComponents(p-h,x-_,S-T,A-P).normalize(),t===ji)r[5].setComponents(p+h,x+_,S+T,A+P).normalize();else if(t===Pl)r[5].setComponents(h,_,T,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(t[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(xl.x=o.normal.x>0?e.max.x:e.min.x,xl.y=o.normal.y>0?e.max.y:e.min.y,xl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Eg(){let s=null,e=!1,t=null,r=null;function o(c,d){t(c,d),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){t=c},setContext:function(c){s=c}}}function K0(s){const e=new WeakMap;function t(h,p){const m=h.array,v=h.usage,_=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,v),h.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,p,m){const v=p.array,_=p.updateRanges;if(s.bindBuffer(m,h),_.length===0)s.bufferSubData(m,0,v);else{_.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<_.length;M++){const E=_[x],T=_[M];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,_[x]=T)}_.length=x+1;for(let M=0,E=_.length;M<E;M++){const T=_[M];s.bufferSubData(m,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(s.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,t(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:o,remove:c,update:d}}class kl extends Jn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const c=e/2,d=t/2,h=Math.floor(r),p=Math.floor(o),m=h+1,v=p+1,_=e/h,x=t/p,M=[],E=[],T=[],S=[];for(let y=0;y<v;y++){const R=y*x-d;for(let P=0;P<m;P++){const A=P*_-c;E.push(A,-R,0),T.push(0,0,1),S.push(P/h),S.push(1-y/p)}}for(let y=0;y<p;y++)for(let R=0;R<h;R++){const P=R+m*y,A=R+m*(y+1),G=R+1+m*(y+1),k=R+1+m*y;M.push(P,A,k),M.push(A,G,k)}this.setIndex(M),this.setAttribute("position",new pn(E,3)),this.setAttribute("normal",new pn(T,3)),this.setAttribute("uv",new pn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,r_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,a_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,u_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,d_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,v_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,x_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,y_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,S_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,M_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,E_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C_="gl_FragColor = linearToOutputTexel( gl_FragColor );",b_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,R_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,P_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,L_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,I_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,F_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,B_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,V_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,G_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,K_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Z_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,J_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ey=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ty=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ny=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ry=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ay=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ly=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,my=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_y=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,My=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ey=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ty=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ay=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,by=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ny=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ry=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Py=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ly=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Dy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Iy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Uy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ky=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Oy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,By=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ky=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_S=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,SS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ES=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,TS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:Z0,alphahash_pars_fragment:J0,alphamap_fragment:Q0,alphamap_pars_fragment:e_,alphatest_fragment:t_,alphatest_pars_fragment:n_,aomap_fragment:i_,aomap_pars_fragment:r_,batching_pars_vertex:s_,batching_vertex:a_,begin_vertex:o_,beginnormal_vertex:l_,bsdfs:c_,iridescence_fragment:u_,bumpmap_pars_fragment:d_,clipping_planes_fragment:h_,clipping_planes_pars_fragment:f_,clipping_planes_pars_vertex:p_,clipping_planes_vertex:m_,color_fragment:g_,color_pars_fragment:v_,color_pars_vertex:x_,color_vertex:__,common:y_,cube_uv_reflection_fragment:S_,defaultnormal_vertex:M_,displacementmap_pars_vertex:E_,displacementmap_vertex:w_,emissivemap_fragment:T_,emissivemap_pars_fragment:A_,colorspace_fragment:C_,colorspace_pars_fragment:b_,envmap_fragment:N_,envmap_common_pars_fragment:R_,envmap_pars_fragment:P_,envmap_pars_vertex:L_,envmap_physical_pars_fragment:V_,envmap_vertex:D_,fog_vertex:I_,fog_pars_vertex:U_,fog_fragment:k_,fog_pars_fragment:F_,gradientmap_pars_fragment:O_,lightmap_pars_fragment:B_,lights_lambert_fragment:z_,lights_lambert_pars_fragment:j_,lights_pars_begin:H_,lights_toon_fragment:G_,lights_toon_pars_fragment:W_,lights_phong_fragment:X_,lights_phong_pars_fragment:q_,lights_physical_fragment:Y_,lights_physical_pars_fragment:$_,lights_fragment_begin:K_,lights_fragment_maps:Z_,lights_fragment_end:J_,logdepthbuf_fragment:Q_,logdepthbuf_pars_fragment:ey,logdepthbuf_pars_vertex:ty,logdepthbuf_vertex:ny,map_fragment:iy,map_pars_fragment:ry,map_particle_fragment:sy,map_particle_pars_fragment:ay,metalnessmap_fragment:oy,metalnessmap_pars_fragment:ly,morphinstance_vertex:cy,morphcolor_vertex:uy,morphnormal_vertex:dy,morphtarget_pars_vertex:hy,morphtarget_vertex:fy,normal_fragment_begin:py,normal_fragment_maps:my,normal_pars_fragment:gy,normal_pars_vertex:vy,normal_vertex:xy,normalmap_pars_fragment:_y,clearcoat_normal_fragment_begin:yy,clearcoat_normal_fragment_maps:Sy,clearcoat_pars_fragment:My,iridescence_pars_fragment:Ey,opaque_fragment:wy,packing:Ty,premultiplied_alpha_fragment:Ay,project_vertex:Cy,dithering_fragment:by,dithering_pars_fragment:Ny,roughnessmap_fragment:Ry,roughnessmap_pars_fragment:Py,shadowmap_pars_fragment:Ly,shadowmap_pars_vertex:Dy,shadowmap_vertex:Iy,shadowmask_pars_fragment:Uy,skinbase_vertex:ky,skinning_pars_vertex:Fy,skinning_vertex:Oy,skinnormal_vertex:By,specularmap_fragment:zy,specularmap_pars_fragment:jy,tonemapping_fragment:Hy,tonemapping_pars_fragment:Vy,transmission_fragment:Gy,transmission_pars_fragment:Wy,uv_pars_fragment:Xy,uv_pars_vertex:qy,uv_vertex:Yy,worldpos_vertex:$y,background_vert:Ky,background_frag:Zy,backgroundCube_vert:Jy,backgroundCube_frag:Qy,cube_vert:eS,cube_frag:tS,depth_vert:nS,depth_frag:iS,distanceRGBA_vert:rS,distanceRGBA_frag:sS,equirect_vert:aS,equirect_frag:oS,linedashed_vert:lS,linedashed_frag:cS,meshbasic_vert:uS,meshbasic_frag:dS,meshlambert_vert:hS,meshlambert_frag:fS,meshmatcap_vert:pS,meshmatcap_frag:mS,meshnormal_vert:gS,meshnormal_frag:vS,meshphong_vert:xS,meshphong_frag:_S,meshphysical_vert:yS,meshphysical_frag:SS,meshtoon_vert:MS,meshtoon_frag:ES,points_vert:wS,points_frag:TS,shadow_vert:AS,shadow_frag:CS,sprite_vert:bS,sprite_frag:NS},Ne={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},_i={basic:{uniforms:yn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:yn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new St(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:yn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:yn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:yn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new St(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:yn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:yn([Ne.points,Ne.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:yn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:yn([Ne.common,Ne.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:yn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:yn([Ne.sprite,Ne.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:yn([Ne.common,Ne.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:yn([Ne.lights,Ne.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};_i.physical={uniforms:yn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const _l={r:0,b:0,g:0},Hr=new Si,RS=new Ot;function PS(s,e,t,r,o,c,d){const h=new St(0);let p=c===!0?0:1,m,v,_=null,x=0,M=null;function E(R){let P=R.isScene===!0?R.background:null;return P&&P.isTexture&&(P=(R.backgroundBlurriness>0?t:e).get(P)),P}function T(R){let P=!1;const A=E(R);A===null?y(h,p):A&&A.isColor&&(y(A,1),P=!0);const G=s.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,d):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(R,P){const A=E(P);A&&(A.isCubeTexture||A.mapping===Dl)?(v===void 0&&(v=new Pn(new qa(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:Xs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(G,k,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),Hr.copy(P.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),v.material.uniforms.envMap.value=A,v.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(RS.makeRotationFromEuler(Hr)),v.material.toneMapped=wt.getTransfer(A.colorSpace)!==Pt,(_!==A||x!==A.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,_=A,x=A.version,M=s.toneMapping),v.layers.enableAll(),R.unshift(v,v.geometry,v.material,0,0,null)):A&&A.isTexture&&(m===void 0&&(m=new Pn(new kl(2,2),new Er({name:"BackgroundMaterial",uniforms:Xs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=A,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=wt.getTransfer(A.colorSpace)!==Pt,A.matrixAutoUpdate===!0&&A.updateMatrix(),m.material.uniforms.uvTransform.value.copy(A.matrix),(_!==A||x!==A.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,_=A,x=A.version,M=s.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function y(R,P){R.getRGB(_l,yg(s)),r.buffers.color.setClear(_l.r,_l.g,_l.b,P,d)}return{getClearColor:function(){return h},setClearColor:function(R,P=1){h.set(R),p=P,y(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,y(h,p)},render:T,addToRenderList:S}}function LS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let c=o,d=!1;function h(b,z,ie,Q,de){let he=!1;const ce=_(Q,ie,z);c!==ce&&(c=ce,m(c.object)),he=M(b,Q,ie,de),he&&E(b,Q,ie,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(he||d)&&(d=!1,A(b,z,ie,Q),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function p(){return s.createVertexArray()}function m(b){return s.bindVertexArray(b)}function v(b){return s.deleteVertexArray(b)}function _(b,z,ie){const Q=ie.wireframe===!0;let de=r[b.id];de===void 0&&(de={},r[b.id]=de);let he=de[z.id];he===void 0&&(he={},de[z.id]=he);let ce=he[Q];return ce===void 0&&(ce=x(p()),he[Q]=ce),ce}function x(b){const z=[],ie=[],Q=[];for(let de=0;de<t;de++)z[de]=0,ie[de]=0,Q[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ie,attributeDivisors:Q,object:b,attributes:{},index:null}}function M(b,z,ie,Q){const de=c.attributes,he=z.attributes;let ce=0;const ue=ie.getAttributes();for(const j in ue)if(ue[j].location>=0){const se=de[j];let O=he[j];if(O===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(O=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(O=b.instanceColor)),se===void 0||se.attribute!==O||O&&se.data!==O.data)return!0;ce++}return c.attributesNum!==ce||c.index!==Q}function E(b,z,ie,Q){const de={},he=z.attributes;let ce=0;const ue=ie.getAttributes();for(const j in ue)if(ue[j].location>=0){let se=he[j];se===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(se=b.instanceColor));const O={};O.attribute=se,se&&se.data&&(O.data=se.data),de[j]=O,ce++}c.attributes=de,c.attributesNum=ce,c.index=Q}function T(){const b=c.newAttributes;for(let z=0,ie=b.length;z<ie;z++)b[z]=0}function S(b){y(b,0)}function y(b,z){const ie=c.newAttributes,Q=c.enabledAttributes,de=c.attributeDivisors;ie[b]=1,Q[b]===0&&(s.enableVertexAttribArray(b),Q[b]=1),de[b]!==z&&(s.vertexAttribDivisor(b,z),de[b]=z)}function R(){const b=c.newAttributes,z=c.enabledAttributes;for(let ie=0,Q=z.length;ie<Q;ie++)z[ie]!==b[ie]&&(s.disableVertexAttribArray(ie),z[ie]=0)}function P(b,z,ie,Q,de,he,ce){ce===!0?s.vertexAttribIPointer(b,z,ie,de,he):s.vertexAttribPointer(b,z,ie,Q,de,he)}function A(b,z,ie,Q){T();const de=Q.attributes,he=ie.getAttributes(),ce=z.defaultAttributeValues;for(const ue in he){const j=he[ue];if(j.location>=0){let le=de[ue];if(le===void 0&&(ue==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),ue==="instanceColor"&&b.instanceColor&&(le=b.instanceColor)),le!==void 0){const se=le.normalized,O=le.itemSize,re=e.get(le);if(re===void 0)continue;const Le=re.buffer,Z=re.type,oe=re.bytesPerElement,Se=Z===s.INT||Z===s.UNSIGNED_INT||le.gpuType===$d;if(le.isInterleavedBufferAttribute){const ve=le.data,Ae=ve.stride,Ie=le.offset;if(ve.isInstancedInterleavedBuffer){for(let Ke=0;Ke<j.locationSize;Ke++)y(j.location+Ke,ve.meshPerAttribute);b.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ke=0;Ke<j.locationSize;Ke++)S(j.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let Ke=0;Ke<j.locationSize;Ke++)P(j.location+Ke,O/j.locationSize,Z,se,Ae*oe,(Ie+O/j.locationSize*Ke)*oe,Se)}else{if(le.isInstancedBufferAttribute){for(let ve=0;ve<j.locationSize;ve++)y(j.location+ve,le.meshPerAttribute);b.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ve=0;ve<j.locationSize;ve++)S(j.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let ve=0;ve<j.locationSize;ve++)P(j.location+ve,O/j.locationSize,Z,se,O*oe,O/j.locationSize*ve*oe,Se)}}else if(ce!==void 0){const se=ce[ue];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(j.location,se);break;case 3:s.vertexAttrib3fv(j.location,se);break;case 4:s.vertexAttrib4fv(j.location,se);break;default:s.vertexAttrib1fv(j.location,se)}}}}R()}function G(){F();for(const b in r){const z=r[b];for(const ie in z){const Q=z[ie];for(const de in Q)v(Q[de].object),delete Q[de];delete z[ie]}delete r[b]}}function k(b){if(r[b.id]===void 0)return;const z=r[b.id];for(const ie in z){const Q=z[ie];for(const de in Q)v(Q[de].object),delete Q[de];delete z[ie]}delete r[b.id]}function D(b){for(const z in r){const ie=r[z];if(ie[b.id]===void 0)continue;const Q=ie[b.id];for(const de in Q)v(Q[de].object),delete Q[de];delete ie[b.id]}}function F(){L(),d=!0,c!==o&&(c=o,m(c.object))}function L(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:F,resetDefaultState:L,dispose:G,releaseStatesOfGeometry:k,releaseStatesOfProgram:D,initAttributes:T,enableAttribute:S,disableUnusedAttributes:R}}function DS(s,e,t){let r;function o(m){r=m}function c(m,v){s.drawArrays(r,m,v),t.update(v,r,1)}function d(m,v,_){_!==0&&(s.drawArraysInstanced(r,m,v,_),t.update(v,r,_))}function h(m,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,_);let M=0;for(let E=0;E<_;E++)M+=v[E];t.update(M,r,1)}function p(m,v,_,x){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<m.length;E++)d(m[E],v[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,_);let E=0;for(let T=0;T<_;T++)E+=v[T]*x[T];t.update(E,r,1)}}this.setMode=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function IS(s,e,t,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(D){return!(D!==di&&r.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(D){const F=D===Va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Vi&&r.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==zi&&!F)}function p(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const _=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=E>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:R,maxVaryings:P,maxFragmentUniforms:A,vertexTextures:G,maxSamples:k}}function US(s){const e=this;let t=null,r=0,o=!1,c=!1;const d=new Gr,h=new dt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||r!==0||o;return o=x,r=_.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){t=v(_,x,0)},this.setState=function(_,x,M){const E=_.clippingPlanes,T=_.clipIntersection,S=_.clipShadows,y=s.get(_);if(!o||E===null||E.length===0||c&&!S)c?v(null):m();else{const R=c?0:r,P=R*4;let A=y.clippingState||null;p.value=A,A=v(E,x,P,M);for(let G=0;G!==P;++G)A[G]=t[G];y.clippingState=A,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=R}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,x,M,E){const T=_!==null?_.length:0;let S=null;if(T!==0){if(S=p.value,E!==!0||S===null){const y=M+T*4,R=x.matrixWorldInverse;h.getNormalMatrix(R),(S===null||S.length<y)&&(S=new Float32Array(y));for(let P=0,A=M;P!==T;++P,A+=4)d.copy(_[P]).applyMatrix4(R,h),d.normal.toArray(S,A),S[A+3]=d.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function kS(s){let e=new WeakMap;function t(d,h){return h===pd?d.mapping=Hs:h===md&&(d.mapping=Vs),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===pd||h===md)if(e.has(d)){const p=e.get(d).texture;return t(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new q0(p.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",o),t(m.texture,d.mapping)}else return null}}return d}function o(d){const h=d.target;h.removeEventListener("dispose",o);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class FS extends Sg{constructor(e=-1,t=1,r=1,o=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,d=r+e,h=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fs=4,pm=[.125,.215,.35,.446,.526,.582],qr=20,Gu=new FS,mm=new St;let Wu=null,Xu=0,qu=0,Yu=!1;const Wr=(1+Math.sqrt(5))/2,Us=1/Wr,gm=[new H(-Wr,Us,0),new H(Wr,Us,0),new H(-Us,0,Wr),new H(Us,0,Wr),new H(0,Wr,-Us),new H(0,Wr,Us),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class vm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){Wu=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,o,c),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wu,Xu,qu),this._renderer.xr.enabled=Yu,e.scissorTest=!1,yl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wu=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Va,format:di,colorSpace:qs,depthBuffer:!1},o=xm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xm(e,t,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OS(c)),this._blurMaterial=BS(c,e,t)}return o}_compileMaterial(e){const t=new Pn(this._lodPlanes[0],e);this._renderer.compile(t,Gu)}_sceneToCubeUV(e,t,r,o){const h=new zn(90,1,t,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(mm),v.toneMapping=Sr,v.autoClear=!1;const M=new vg({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),E=new Pn(new qa,M);let T=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,T=!0):(M.color.copy(mm),T=!0);for(let y=0;y<6;y++){const R=y%3;R===0?(h.up.set(0,p[y],0),h.lookAt(m[y],0,0)):R===1?(h.up.set(0,0,p[y]),h.lookAt(0,m[y],0)):(h.up.set(0,p[y],0),h.lookAt(0,0,m[y]));const P=this._cubeSize;yl(o,R*P,y>2?P:0,P,P),v.setRenderTarget(o),T&&v.render(E,h),v.render(e,h)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=x,v.autoClear=_,e.background=S}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Hs||e.mapping===Vs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_m());const c=o?this._cubemapMaterial:this._equirectMaterial,d=new Pn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;yl(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(d,Gu)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=gm[(o-c-1)%gm.length];this._blur(e,c-1,c,d,h)}t.autoClear=r}_blur(e,t,r,o,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,t,r,o,"latitudinal",c),this._halfBlur(d,e,r,r,o,"longitudinal",c)}_halfBlur(e,t,r,o,c,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new Pn(this._lodPlanes[o],m),x=m.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*qr-1),T=c/E,S=isFinite(c)?1+Math.floor(v*T):qr;S>qr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${qr}`);const y=[];let R=0;for(let D=0;D<qr;++D){const F=D/T,L=Math.exp(-F*F/2);y.push(L),D===0?R+=L:D<S&&(R+=2*L)}for(let D=0;D<y.length;D++)y[D]=y[D]/R;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=y,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:P}=this;x.dTheta.value=E,x.mipInt.value=P-r;const A=this._sizeLods[o],G=3*A*(o>P-Fs?o-P+Fs:0),k=4*(this._cubeSize-A);yl(t,G,k,3*A,2*A),p.setRenderTarget(t),p.render(_,Gu)}}function OS(s){const e=[],t=[],r=[];let o=s;const c=s-Fs+1+pm.length;for(let d=0;d<c;d++){const h=Math.pow(2,o);t.push(h);let p=1/h;d>s-Fs?p=pm[d-s+Fs-1]:d===0&&(p=0),r.push(p);const m=1/(h-2),v=-m,_=1+m,x=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,E=6,T=3,S=2,y=1,R=new Float32Array(T*E*M),P=new Float32Array(S*E*M),A=new Float32Array(y*E*M);for(let k=0;k<M;k++){const D=k%3*2/3-1,F=k>2?0:-1,L=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];R.set(L,T*E*k),P.set(x,S*E*k);const b=[k,k,k,k,k,k];A.set(b,y*E*k)}const G=new Jn;G.setAttribute("position",new Zn(R,T)),G.setAttribute("uv",new Zn(P,S)),G.setAttribute("faceIndex",new Zn(A,y)),e.push(G),o>Fs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function xm(s,e,t){const r=new Zr(s,e,t);return r.texture.mapping=Dl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function yl(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function BS(s,e,t){const r=new Float32Array(qr),o=new H(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function _m(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function ym(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function nh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zS(s){let e=new WeakMap,t=null;function r(h){if(h&&h.isTexture){const p=h.mapping,m=p===pd||p===md,v=p===Hs||p===Vs;if(m||v){let _=e.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return t===null&&(t=new vm(s)),_=m?t.fromEquirectangular(h,_):t.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const M=h.image;return m&&M&&M.height>0||v&&M&&o(M)?(t===null&&(t=new vm(s)),_=m?t.fromEquirectangular(h):t.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function o(h){let p=0;const m=6;for(let v=0;v<m;v++)h[v]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:d}}function jS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&ka("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function HS(s,e,t,r){const o={},c=new WeakMap;function d(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);for(const E in x.morphAttributes){const T=x.morphAttributes[E];for(let S=0,y=T.length;S<y;S++)e.remove(T[S])}x.removeEventListener("dispose",d),delete o[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function h(_,x){return o[x.id]===!0||(x.addEventListener("dispose",d),o[x.id]=!0,t.memory.geometries++),x}function p(_){const x=_.attributes;for(const E in x)e.update(x[E],s.ARRAY_BUFFER);const M=_.morphAttributes;for(const E in M){const T=M[E];for(let S=0,y=T.length;S<y;S++)e.update(T[S],s.ARRAY_BUFFER)}}function m(_){const x=[],M=_.index,E=_.attributes.position;let T=0;if(M!==null){const R=M.array;T=M.version;for(let P=0,A=R.length;P<A;P+=3){const G=R[P+0],k=R[P+1],D=R[P+2];x.push(G,k,k,D,D,G)}}else if(E!==void 0){const R=E.array;T=E.version;for(let P=0,A=R.length/3-1;P<A;P+=3){const G=P+0,k=P+1,D=P+2;x.push(G,k,k,D,D,G)}}else return;const S=new(dg(x)?_g:xg)(x,1);S.version=T;const y=c.get(_);y&&e.remove(y),c.set(_,S)}function v(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&m(_)}else m(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:v}}function VS(s,e,t){let r;function o(x){r=x}let c,d;function h(x){c=x.type,d=x.bytesPerElement}function p(x,M){s.drawElements(r,M,c,x*d),t.update(M,r,1)}function m(x,M,E){E!==0&&(s.drawElementsInstanced(r,M,c,x*d,E),t.update(M,r,E))}function v(x,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,E);let S=0;for(let y=0;y<E;y++)S+=M[y];t.update(S,r,1)}function _(x,M,E,T){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<x.length;y++)m(x[y]/d,M[y],T[y]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,T,0,E);let y=0;for(let R=0;R<E;R++)y+=M[R]*T[R];t.update(y,r,1)}}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function GS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(t.calls++,d){case s.TRIANGLES:t.triangles+=h*(c/3);break;case s.LINES:t.lines+=h*(c/2);break;case s.LINE_STRIP:t.lines+=h*(c-1);break;case s.LINE_LOOP:t.lines+=h*c;break;case s.POINTS:t.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function WS(s,e,t){const r=new WeakMap,o=new Lt;function c(d,h,p){const m=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let x=r.get(h);if(x===void 0||x.count!==_){let b=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",b)};var M=b;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let A=0;E===!0&&(A=1),T===!0&&(A=2),S===!0&&(A=3);let G=h.attributes.position.count*A,k=1;G>e.maxTextureSize&&(k=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const D=new Float32Array(G*k*4*_),F=new fg(D,G,k,_);F.type=zi,F.needsUpdate=!0;const L=A*4;for(let z=0;z<_;z++){const ie=y[z],Q=R[z],de=P[z],he=G*k*4*z;for(let ce=0;ce<ie.count;ce++){const ue=ce*L;E===!0&&(o.fromBufferAttribute(ie,ce),D[he+ue+0]=o.x,D[he+ue+1]=o.y,D[he+ue+2]=o.z,D[he+ue+3]=0),T===!0&&(o.fromBufferAttribute(Q,ce),D[he+ue+4]=o.x,D[he+ue+5]=o.y,D[he+ue+6]=o.z,D[he+ue+7]=0),S===!0&&(o.fromBufferAttribute(de,ce),D[he+ue+8]=o.x,D[he+ue+9]=o.y,D[he+ue+10]=o.z,D[he+ue+11]=de.itemSize===4?o.w:1)}}x={count:_,texture:F,size:new et(G,k)},r.set(h,x),h.addEventListener("dispose",b)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,t);else{let E=0;for(let S=0;S<m.length;S++)E+=m[S];const T=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function XS(s,e,t,r){let o=new WeakMap;function c(p){const m=r.render.frame,v=p.geometry,_=e.get(p,v);if(o.get(_)!==m&&(e.update(_),o.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),o.get(p)!==m&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;o.get(x)!==m&&(x.update(),o.set(x,m))}return _}function d(){o=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:c,dispose:d}}class wg extends Dn{constructor(e,t,r,o,c,d,h,p,m,v=Bs){if(v!==Bs&&v!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Bs&&(r=Kr),r===void 0&&v===Ws&&(r=Gs),super(null,o,c,d,h,p,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=h!==void 0?h:hi,this.minFilter=p!==void 0?p:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Tg=new Dn,Sm=new wg(1,1),Ag=new fg,Cg=new P0,bg=new Mg,Mm=[],Em=[],wm=new Float32Array(16),Tm=new Float32Array(9),Am=new Float32Array(4);function Ks(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let c=Mm[o];if(c===void 0&&(c=new Float32Array(o),Mm[o]=c),e!==0){r.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=t,s[d].toArray(c,h)}return c}function Kt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Zt(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Fl(s,e){let t=Em[e];t===void 0&&(t=new Int32Array(e),Em[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function qS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function YS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2fv(this.addr,e),Zt(t,e)}}function $S(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;s.uniform3fv(this.addr,e),Zt(t,e)}}function KS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4fv(this.addr,e),Zt(t,e)}}function ZS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Kt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,r))return;Am.set(r),s.uniformMatrix2fv(this.addr,!1,Am),Zt(t,r)}}function JS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Kt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,r))return;Tm.set(r),s.uniformMatrix3fv(this.addr,!1,Tm),Zt(t,r)}}function QS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Kt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,r))return;wm.set(r),s.uniformMatrix4fv(this.addr,!1,wm),Zt(t,r)}}function eM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function tM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2iv(this.addr,e),Zt(t,e)}}function nM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;s.uniform3iv(this.addr,e),Zt(t,e)}}function iM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4iv(this.addr,e),Zt(t,e)}}function rM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function sM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2uiv(this.addr,e),Zt(t,e)}}function aM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;s.uniform3uiv(this.addr,e),Zt(t,e)}}function oM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4uiv(this.addr,e),Zt(t,e)}}function lM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Sm.compareFunction=ug,c=Sm):c=Tg,t.setTexture2D(e||c,o)}function cM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Cg,o)}function uM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||bg,o)}function dM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Ag,o)}function hM(s){switch(s){case 5126:return qS;case 35664:return YS;case 35665:return $S;case 35666:return KS;case 35674:return ZS;case 35675:return JS;case 35676:return QS;case 5124:case 35670:return eM;case 35667:case 35671:return tM;case 35668:case 35672:return nM;case 35669:case 35673:return iM;case 5125:return rM;case 36294:return sM;case 36295:return aM;case 36296:return oM;case 35678:case 36198:case 36298:case 36306:case 35682:return lM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return uM;case 36289:case 36303:case 36311:case 36292:return dM}}function fM(s,e){s.uniform1fv(this.addr,e)}function pM(s,e){const t=Ks(e,this.size,2);s.uniform2fv(this.addr,t)}function mM(s,e){const t=Ks(e,this.size,3);s.uniform3fv(this.addr,t)}function gM(s,e){const t=Ks(e,this.size,4);s.uniform4fv(this.addr,t)}function vM(s,e){const t=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function xM(s,e){const t=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function _M(s,e){const t=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function yM(s,e){s.uniform1iv(this.addr,e)}function SM(s,e){s.uniform2iv(this.addr,e)}function MM(s,e){s.uniform3iv(this.addr,e)}function EM(s,e){s.uniform4iv(this.addr,e)}function wM(s,e){s.uniform1uiv(this.addr,e)}function TM(s,e){s.uniform2uiv(this.addr,e)}function AM(s,e){s.uniform3uiv(this.addr,e)}function CM(s,e){s.uniform4uiv(this.addr,e)}function bM(s,e,t){const r=this.cache,o=e.length,c=Fl(t,o);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let d=0;d!==o;++d)t.setTexture2D(e[d]||Tg,c[d])}function NM(s,e,t){const r=this.cache,o=e.length,c=Fl(t,o);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let d=0;d!==o;++d)t.setTexture3D(e[d]||Cg,c[d])}function RM(s,e,t){const r=this.cache,o=e.length,c=Fl(t,o);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let d=0;d!==o;++d)t.setTextureCube(e[d]||bg,c[d])}function PM(s,e,t){const r=this.cache,o=e.length,c=Fl(t,o);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let d=0;d!==o;++d)t.setTexture2DArray(e[d]||Ag,c[d])}function LM(s){switch(s){case 5126:return fM;case 35664:return pM;case 35665:return mM;case 35666:return gM;case 35674:return vM;case 35675:return xM;case 35676:return _M;case 5124:case 35670:return yM;case 35667:case 35671:return SM;case 35668:case 35672:return MM;case 35669:case 35673:return EM;case 5125:return wM;case 36294:return TM;case 36295:return AM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return bM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return RM;case 36289:case 36303:case 36311:case 36292:return PM}}class DM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=hM(t.type)}}class IM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LM(t.type)}}class UM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let c=0,d=o.length;c!==d;++c){const h=o[c];h.setValue(e,t[h.id],r)}}}const $u=/(\w+)(\])?(\[|\.)?/g;function Cm(s,e){s.seq.push(e),s.map[e.id]=e}function kM(s,e,t){const r=s.name,o=r.length;for($u.lastIndex=0;;){const c=$u.exec(r),d=$u.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===o){Cm(t,m===void 0?new DM(h,s,e):new IM(h,s,e));break}else{let _=t.map[h];_===void 0&&(_=new UM(h),Cm(t,_)),t=_}}}class Rl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(t,o),d=e.getUniformLocation(t,c.name);kM(c,d,this)}}setValue(e,t,r,o){const c=this.map[t];c!==void 0&&c.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let c=0,d=t.length;c!==d;++c){const h=t[c],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,c=e.length;o!==c;++o){const d=e[o];d.id in t&&r.push(d)}return r}}function bm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const FM=37297;let OM=0;function BM(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,t.length);for(let d=o;d<c;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${t[d]}`)}return r.join(`
`)}const Nm=new dt;function zM(s){wt._getMatrix(Nm,wt.workingColorSpace,s);const e=`mat3( ${Nm.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(s)){case Il:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Rm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+BM(s.getShaderSource(e),d)}else return o}function jM(s,e){const t=zM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function HM(s,e){let t;switch(e){case r0:t="Linear";break;case s0:t="Reinhard";break;case a0:t="Cineon";break;case o0:t="ACESFilmic";break;case c0:t="AgX";break;case u0:t="Neutral";break;case l0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sl=new H;function VM(){wt.getLuminanceCoefficients(Sl);const s=Sl.x.toFixed(4),e=Sl.y.toFixed(4),t=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function WM(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function XM(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),d=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),t[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:h}}return t}function Fa(s){return s!==""}function Pm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wd(s){return s.replace(qM,$M)}const YM=new Map;function $M(s,e){let t=ht[e];if(t===void 0){const r=YM.get(e);if(r!==void 0)t=ht[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Wd(t)}const KM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dm(s){return s.replace(KM,ZM)}function ZM(s,e,t,r){let o="";for(let c=parseInt(e);c<parseInt(t);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Im(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function JM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Km?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Fx?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function QM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hs:case Vs:e="ENVMAP_TYPE_CUBE";break;case Dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function tE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Zm:e="ENVMAP_BLENDING_MULTIPLY";break;case n0:e="ENVMAP_BLENDING_MIX";break;case i0:e="ENVMAP_BLENDING_ADD";break}return e}function nE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function iE(s,e,t,r){const o=s.getContext(),c=t.defines;let d=t.vertexShader,h=t.fragmentShader;const p=JM(t),m=QM(t),v=eE(t),_=tE(t),x=nE(t),M=GM(t),E=WM(c),T=o.createProgram();let S,y,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Fa).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Fa).join(`
`),y.length>0&&(y+=`
`)):(S=[Im(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),y=[Im(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sr?"#define TONE_MAPPING":"",t.toneMapping!==Sr?ht.tonemapping_pars_fragment:"",t.toneMapping!==Sr?HM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,jM("linearToOutputTexel",t.outputColorSpace),VM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fa).join(`
`)),d=Wd(d),d=Pm(d,t),d=Lm(d,t),h=Wd(h),h=Pm(h,t),h=Lm(h,t),d=Dm(d),h=Dm(h),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=R+S+d,A=R+y+h,G=bm(o,o.VERTEX_SHADER,P),k=bm(o,o.FRAGMENT_SHADER,A);o.attachShader(T,G),o.attachShader(T,k),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function D(z){if(s.debug.checkShaderErrors){const ie=o.getProgramInfoLog(T).trim(),Q=o.getShaderInfoLog(G).trim(),de=o.getShaderInfoLog(k).trim();let he=!0,ce=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,G,k);else{const ue=Rm(o,G,"vertex"),j=Rm(o,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ie+`
`+ue+`
`+j)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(Q===""||de==="")&&(ce=!1);ce&&(z.diagnostics={runnable:he,programLog:ie,vertexShader:{log:Q,prefix:S},fragmentShader:{log:de,prefix:y}})}o.deleteShader(G),o.deleteShader(k),F=new Rl(o,T),L=XM(o,T)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let L;this.getAttributes=function(){return L===void 0&&D(this),L};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=o.getProgramParameter(T,FM)),b},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=OM++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=G,this.fragmentShader=k,this}let rE=0;class sE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new aE(e),t.set(e,r)),r}}class aE{constructor(e){this.id=rE++,this.code=e,this.usedTimes=0}}function oE(s,e,t,r,o,c,d){const h=new mg,p=new sE,m=new Set,v=[],_=o.logarithmicDepthBuffer,x=o.vertexTextures;let M=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(L){return m.add(L),L===0?"uv":`uv${L}`}function S(L,b,z,ie,Q){const de=ie.fog,he=Q.geometry,ce=L.isMeshStandardMaterial?ie.environment:null,ue=(L.isMeshStandardMaterial?t:e).get(L.envMap||ce),j=ue&&ue.mapping===Dl?ue.image.height:null,le=E[L.type];L.precision!==null&&(M=o.getMaxPrecision(L.precision),M!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",M,"instead."));const se=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,O=se!==void 0?se.length:0;let re=0;he.morphAttributes.position!==void 0&&(re=1),he.morphAttributes.normal!==void 0&&(re=2),he.morphAttributes.color!==void 0&&(re=3);let Le,Z,oe,Se;if(le){const Mt=_i[le];Le=Mt.vertexShader,Z=Mt.fragmentShader}else Le=L.vertexShader,Z=L.fragmentShader,p.update(L),oe=p.getVertexShaderID(L),Se=p.getFragmentShaderID(L);const ve=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Ie=Q.isInstancedMesh===!0,Ke=Q.isBatchedMesh===!0,qe=!!L.map,at=!!L.matcap,_t=!!ue,Y=!!L.aoMap,mn=!!L.lightMap,vt=!!L.bumpMap,pt=!!L.normalMap,Ze=!!L.displacementMap,Nt=!!L.emissiveMap,$e=!!L.metalnessMap,I=!!L.roughnessMap,C=L.anisotropy>0,J=L.clearcoat>0,me=L.dispersion>0,xe=L.iridescence>0,fe=L.sheen>0,He=L.transmission>0,Ce=C&&!!L.anisotropyMap,Ue=J&&!!L.clearcoatMap,ft=J&&!!L.clearcoatNormalMap,Me=J&&!!L.clearcoatRoughnessMap,Fe=xe&&!!L.iridescenceMap,tt=xe&&!!L.iridescenceThicknessMap,nt=fe&&!!L.sheenColorMap,Oe=fe&&!!L.sheenRoughnessMap,mt=!!L.specularMap,lt=!!L.specularColorMap,bt=!!L.specularIntensityMap,W=He&&!!L.transmissionMap,be=He&&!!L.thicknessMap,ae=!!L.gradientMap,pe=!!L.alphaMap,Pe=L.alphaTest>0,Re=!!L.alphaHash,ct=!!L.extensions;let Ut=Sr;L.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const Xt={shaderID:le,shaderType:L.type,shaderName:L.name,vertexShader:Le,fragmentShader:Z,defines:L.defines,customVertexShaderID:oe,customFragmentShaderID:Se,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:M,batching:Ke,batchingColor:Ke&&Q._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&Q.instanceColor!==null,instancingMorph:Ie&&Q.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:qs,alphaToCoverage:!!L.alphaToCoverage,map:qe,matcap:at,envMap:_t,envMapMode:_t&&ue.mapping,envMapCubeUVHeight:j,aoMap:Y,lightMap:mn,bumpMap:vt,normalMap:pt,displacementMap:x&&Ze,emissiveMap:Nt,normalMapObjectSpace:pt&&L.normalMapType===p0,normalMapTangentSpace:pt&&L.normalMapType===cg,metalnessMap:$e,roughnessMap:I,anisotropy:C,anisotropyMap:Ce,clearcoat:J,clearcoatMap:Ue,clearcoatNormalMap:ft,clearcoatRoughnessMap:Me,dispersion:me,iridescence:xe,iridescenceMap:Fe,iridescenceThicknessMap:tt,sheen:fe,sheenColorMap:nt,sheenRoughnessMap:Oe,specularMap:mt,specularColorMap:lt,specularIntensityMap:bt,transmission:He,transmissionMap:W,thicknessMap:be,gradientMap:ae,opaque:L.transparent===!1&&L.blending===Os&&L.alphaToCoverage===!1,alphaMap:pe,alphaTest:Pe,alphaHash:Re,combine:L.combine,mapUv:qe&&T(L.map.channel),aoMapUv:Y&&T(L.aoMap.channel),lightMapUv:mn&&T(L.lightMap.channel),bumpMapUv:vt&&T(L.bumpMap.channel),normalMapUv:pt&&T(L.normalMap.channel),displacementMapUv:Ze&&T(L.displacementMap.channel),emissiveMapUv:Nt&&T(L.emissiveMap.channel),metalnessMapUv:$e&&T(L.metalnessMap.channel),roughnessMapUv:I&&T(L.roughnessMap.channel),anisotropyMapUv:Ce&&T(L.anisotropyMap.channel),clearcoatMapUv:Ue&&T(L.clearcoatMap.channel),clearcoatNormalMapUv:ft&&T(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&T(L.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&T(L.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&T(L.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&T(L.sheenRoughnessMap.channel),specularMapUv:mt&&T(L.specularMap.channel),specularColorMapUv:lt&&T(L.specularColorMap.channel),specularIntensityMapUv:bt&&T(L.specularIntensityMap.channel),transmissionMapUv:W&&T(L.transmissionMap.channel),thicknessMapUv:be&&T(L.thicknessMap.channel),alphaMapUv:pe&&T(L.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(pt||C),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!he.attributes.uv&&(qe||pe),fog:!!de,useFog:L.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ae,skinning:Q.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:re,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:L.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:qe&&L.map.isVideoTexture===!0&&wt.getTransfer(L.map.colorSpace)===Pt,decodeVideoTextureEmissive:Nt&&L.emissiveMap.isVideoTexture===!0&&wt.getTransfer(L.emissiveMap.colorSpace)===Pt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Bi,flipSided:L.side===Ln,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:ct&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&L.extensions.multiDraw===!0||Ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Xt.vertexUv1s=m.has(1),Xt.vertexUv2s=m.has(2),Xt.vertexUv3s=m.has(3),m.clear(),Xt}function y(L){const b=[];if(L.shaderID?b.push(L.shaderID):(b.push(L.customVertexShaderID),b.push(L.customFragmentShaderID)),L.defines!==void 0)for(const z in L.defines)b.push(z),b.push(L.defines[z]);return L.isRawShaderMaterial===!1&&(R(b,L),P(b,L),b.push(s.outputColorSpace)),b.push(L.customProgramCacheKey),b.join()}function R(L,b){L.push(b.precision),L.push(b.outputColorSpace),L.push(b.envMapMode),L.push(b.envMapCubeUVHeight),L.push(b.mapUv),L.push(b.alphaMapUv),L.push(b.lightMapUv),L.push(b.aoMapUv),L.push(b.bumpMapUv),L.push(b.normalMapUv),L.push(b.displacementMapUv),L.push(b.emissiveMapUv),L.push(b.metalnessMapUv),L.push(b.roughnessMapUv),L.push(b.anisotropyMapUv),L.push(b.clearcoatMapUv),L.push(b.clearcoatNormalMapUv),L.push(b.clearcoatRoughnessMapUv),L.push(b.iridescenceMapUv),L.push(b.iridescenceThicknessMapUv),L.push(b.sheenColorMapUv),L.push(b.sheenRoughnessMapUv),L.push(b.specularMapUv),L.push(b.specularColorMapUv),L.push(b.specularIntensityMapUv),L.push(b.transmissionMapUv),L.push(b.thicknessMapUv),L.push(b.combine),L.push(b.fogExp2),L.push(b.sizeAttenuation),L.push(b.morphTargetsCount),L.push(b.morphAttributeCount),L.push(b.numDirLights),L.push(b.numPointLights),L.push(b.numSpotLights),L.push(b.numSpotLightMaps),L.push(b.numHemiLights),L.push(b.numRectAreaLights),L.push(b.numDirLightShadows),L.push(b.numPointLightShadows),L.push(b.numSpotLightShadows),L.push(b.numSpotLightShadowsWithMaps),L.push(b.numLightProbes),L.push(b.shadowMapType),L.push(b.toneMapping),L.push(b.numClippingPlanes),L.push(b.numClipIntersection),L.push(b.depthPacking)}function P(L,b){h.disableAll(),b.supportsVertexTextures&&h.enable(0),b.instancing&&h.enable(1),b.instancingColor&&h.enable(2),b.instancingMorph&&h.enable(3),b.matcap&&h.enable(4),b.envMap&&h.enable(5),b.normalMapObjectSpace&&h.enable(6),b.normalMapTangentSpace&&h.enable(7),b.clearcoat&&h.enable(8),b.iridescence&&h.enable(9),b.alphaTest&&h.enable(10),b.vertexColors&&h.enable(11),b.vertexAlphas&&h.enable(12),b.vertexUv1s&&h.enable(13),b.vertexUv2s&&h.enable(14),b.vertexUv3s&&h.enable(15),b.vertexTangents&&h.enable(16),b.anisotropy&&h.enable(17),b.alphaHash&&h.enable(18),b.batching&&h.enable(19),b.dispersion&&h.enable(20),b.batchingColor&&h.enable(21),L.push(h.mask),h.disableAll(),b.fog&&h.enable(0),b.useFog&&h.enable(1),b.flatShading&&h.enable(2),b.logarithmicDepthBuffer&&h.enable(3),b.reverseDepthBuffer&&h.enable(4),b.skinning&&h.enable(5),b.morphTargets&&h.enable(6),b.morphNormals&&h.enable(7),b.morphColors&&h.enable(8),b.premultipliedAlpha&&h.enable(9),b.shadowMapEnabled&&h.enable(10),b.doubleSided&&h.enable(11),b.flipSided&&h.enable(12),b.useDepthPacking&&h.enable(13),b.dithering&&h.enable(14),b.transmission&&h.enable(15),b.sheen&&h.enable(16),b.opaque&&h.enable(17),b.pointsUvs&&h.enable(18),b.decodeVideoTexture&&h.enable(19),b.decodeVideoTextureEmissive&&h.enable(20),b.alphaToCoverage&&h.enable(21),L.push(h.mask)}function A(L){const b=E[L.type];let z;if(b){const ie=_i[b];z=V0.clone(ie.uniforms)}else z=L.uniforms;return z}function G(L,b){let z;for(let ie=0,Q=v.length;ie<Q;ie++){const de=v[ie];if(de.cacheKey===b){z=de,++z.usedTimes;break}}return z===void 0&&(z=new iE(s,b,L,c),v.push(z)),z}function k(L){if(--L.usedTimes===0){const b=v.indexOf(L);v[b]=v[v.length-1],v.pop(),L.destroy()}}function D(L){p.remove(L)}function F(){p.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:A,acquireProgram:G,releaseProgram:k,releaseShaderCache:D,programs:v,dispose:F}}function lE(){let s=new WeakMap;function e(d){return s.has(d)}function t(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function o(d,h,p){s.get(d)[h]=p}function c(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:c}}function cE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Um(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function km(){const s=[];let e=0;const t=[],r=[],o=[];function c(){e=0,t.length=0,r.length=0,o.length=0}function d(_,x,M,E,T,S){let y=s[e];return y===void 0?(y={id:_.id,object:_,geometry:x,material:M,groupOrder:E,renderOrder:_.renderOrder,z:T,group:S},s[e]=y):(y.id=_.id,y.object=_,y.geometry=x,y.material=M,y.groupOrder=E,y.renderOrder=_.renderOrder,y.z=T,y.group=S),e++,y}function h(_,x,M,E,T,S){const y=d(_,x,M,E,T,S);M.transmission>0?r.push(y):M.transparent===!0?o.push(y):t.push(y)}function p(_,x,M,E,T,S){const y=d(_,x,M,E,T,S);M.transmission>0?r.unshift(y):M.transparent===!0?o.unshift(y):t.unshift(y)}function m(_,x){t.length>1&&t.sort(_||cE),r.length>1&&r.sort(x||Um),o.length>1&&o.sort(x||Um)}function v(){for(let _=e,x=s.length;_<x;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:c,push:h,unshift:p,finish:v,sort:m}}function uE(){let s=new WeakMap;function e(r,o){const c=s.get(r);let d;return c===void 0?(d=new km,s.set(r,[d])):o>=c.length?(d=new km,c.push(d)):d=c[o],d}function t(){s=new WeakMap}return{get:e,dispose:t}}function dE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new St};break;case"SpotLight":t={position:new H,direction:new H,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new H,halfWidth:new H,halfHeight:new H};break}return s[e.id]=t,t}}}function hE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let fE=0;function pE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function mE(s){const e=new dE,t=hE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new H);const o=new H,c=new Ot,d=new Ot;function h(m){let v=0,_=0,x=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let M=0,E=0,T=0,S=0,y=0,R=0,P=0,A=0,G=0,k=0,D=0;m.sort(pE);for(let L=0,b=m.length;L<b;L++){const z=m[L],ie=z.color,Q=z.intensity,de=z.distance,he=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)v+=ie.r*Q,_+=ie.g*Q,x+=ie.b*Q;else if(z.isLightProbe){for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(z.sh.coefficients[ce],Q);D++}else if(z.isDirectionalLight){const ce=e.get(z);if(ce.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ue=z.shadow,j=t.get(z);j.shadowIntensity=ue.intensity,j.shadowBias=ue.bias,j.shadowNormalBias=ue.normalBias,j.shadowRadius=ue.radius,j.shadowMapSize=ue.mapSize,r.directionalShadow[M]=j,r.directionalShadowMap[M]=he,r.directionalShadowMatrix[M]=z.shadow.matrix,R++}r.directional[M]=ce,M++}else if(z.isSpotLight){const ce=e.get(z);ce.position.setFromMatrixPosition(z.matrixWorld),ce.color.copy(ie).multiplyScalar(Q),ce.distance=de,ce.coneCos=Math.cos(z.angle),ce.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ce.decay=z.decay,r.spot[T]=ce;const ue=z.shadow;if(z.map&&(r.spotLightMap[G]=z.map,G++,ue.updateMatrices(z),z.castShadow&&k++),r.spotLightMatrix[T]=ue.matrix,z.castShadow){const j=t.get(z);j.shadowIntensity=ue.intensity,j.shadowBias=ue.bias,j.shadowNormalBias=ue.normalBias,j.shadowRadius=ue.radius,j.shadowMapSize=ue.mapSize,r.spotShadow[T]=j,r.spotShadowMap[T]=he,A++}T++}else if(z.isRectAreaLight){const ce=e.get(z);ce.color.copy(ie).multiplyScalar(Q),ce.halfWidth.set(z.width*.5,0,0),ce.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=ce,S++}else if(z.isPointLight){const ce=e.get(z);if(ce.color.copy(z.color).multiplyScalar(z.intensity),ce.distance=z.distance,ce.decay=z.decay,z.castShadow){const ue=z.shadow,j=t.get(z);j.shadowIntensity=ue.intensity,j.shadowBias=ue.bias,j.shadowNormalBias=ue.normalBias,j.shadowRadius=ue.radius,j.shadowMapSize=ue.mapSize,j.shadowCameraNear=ue.camera.near,j.shadowCameraFar=ue.camera.far,r.pointShadow[E]=j,r.pointShadowMap[E]=he,r.pointShadowMatrix[E]=z.shadow.matrix,P++}r.point[E]=ce,E++}else if(z.isHemisphereLight){const ce=e.get(z);ce.skyColor.copy(z.color).multiplyScalar(Q),ce.groundColor.copy(z.groundColor).multiplyScalar(Q),r.hemi[y]=ce,y++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=x;const F=r.hash;(F.directionalLength!==M||F.pointLength!==E||F.spotLength!==T||F.rectAreaLength!==S||F.hemiLength!==y||F.numDirectionalShadows!==R||F.numPointShadows!==P||F.numSpotShadows!==A||F.numSpotMaps!==G||F.numLightProbes!==D)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=S,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=A+G-k,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=D,F.directionalLength=M,F.pointLength=E,F.spotLength=T,F.rectAreaLength=S,F.hemiLength=y,F.numDirectionalShadows=R,F.numPointShadows=P,F.numSpotShadows=A,F.numSpotMaps=G,F.numLightProbes=D,r.version=fE++)}function p(m,v){let _=0,x=0,M=0,E=0,T=0;const S=v.matrixWorldInverse;for(let y=0,R=m.length;y<R;y++){const P=m[y];if(P.isDirectionalLight){const A=r.directional[_];A.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),_++}else if(P.isSpotLight){const A=r.spot[M];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),M++}else if(P.isRectAreaLight){const A=r.rectArea[E];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(S),d.identity(),c.copy(P.matrixWorld),c.premultiply(S),d.extractRotation(c),A.halfWidth.set(P.width*.5,0,0),A.halfHeight.set(0,P.height*.5,0),A.halfWidth.applyMatrix4(d),A.halfHeight.applyMatrix4(d),E++}else if(P.isPointLight){const A=r.point[x];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(S),x++}else if(P.isHemisphereLight){const A=r.hemi[T];A.direction.setFromMatrixPosition(P.matrixWorld),A.direction.transformDirection(S),T++}}}return{setup:h,setupView:p,state:r}}function Fm(s){const e=new mE(s),t=[],r=[];function o(v){m.camera=v,t.length=0,r.length=0}function c(v){t.push(v)}function d(v){r.push(v)}function h(){e.setup(t)}function p(v){e.setupView(t,v)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:d}}function gE(s){let e=new WeakMap;function t(o,c=0){const d=e.get(o);let h;return d===void 0?(h=new Fm(s),e.set(o,[h])):c>=d.length?(h=new Fm(s),d.push(h)):h=d[c],h}function r(){e=new WeakMap}return{get:t,dispose:r}}class vE extends $s{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=h0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xE extends $s{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _E=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function SE(s,e,t){let r=new th;const o=new et,c=new et,d=new Lt,h=new vE({depthPacking:f0}),p=new xE,m={},v=t.maxTextureSize,_={[Mr]:Ln,[Ln]:Mr,[Bi]:Bi},x=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:_E,fragmentShader:yE}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new Jn;E.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Pn(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Km;let y=this.type;this.render=function(k,D,F){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||k.length===0)return;const L=s.getRenderTarget(),b=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),ie=s.state;ie.setBlending(yr),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const Q=y!==Oi&&this.type===Oi,de=y===Oi&&this.type!==Oi;for(let he=0,ce=k.length;he<ce;he++){const ue=k[he],j=ue.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const le=j.getFrameExtents();if(o.multiply(le),c.copy(j.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/le.x),o.x=c.x*le.x,j.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/le.y),o.y=c.y*le.y,j.mapSize.y=c.y)),j.map===null||Q===!0||de===!0){const O=this.type!==Oi?{minFilter:hi,magFilter:hi}:{};j.map!==null&&j.map.dispose(),j.map=new Zr(o.x,o.y,O),j.map.texture.name=ue.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const se=j.getViewportCount();for(let O=0;O<se;O++){const re=j.getViewport(O);d.set(c.x*re.x,c.y*re.y,c.x*re.z,c.y*re.w),ie.viewport(d),j.updateMatrices(ue,O),r=j.getFrustum(),A(D,F,j.camera,ue,this.type)}j.isPointLightShadow!==!0&&this.type===Oi&&R(j,F),j.needsUpdate=!1}y=this.type,S.needsUpdate=!1,s.setRenderTarget(L,b,z)};function R(k,D){const F=e.update(T);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Zr(o.x,o.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(D,null,F,x,T,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(D,null,F,M,T,null)}function P(k,D,F,L){let b=null;const z=F.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(z!==void 0)b=z;else if(b=F.isPointLight===!0?p:h,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const ie=b.uuid,Q=D.uuid;let de=m[ie];de===void 0&&(de={},m[ie]=de);let he=de[Q];he===void 0&&(he=b.clone(),de[Q]=he,D.addEventListener("dispose",G)),b=he}if(b.visible=D.visible,b.wireframe=D.wireframe,L===Oi?b.side=D.shadowSide!==null?D.shadowSide:D.side:b.side=D.shadowSide!==null?D.shadowSide:_[D.side],b.alphaMap=D.alphaMap,b.alphaTest=D.alphaTest,b.map=D.map,b.clipShadows=D.clipShadows,b.clippingPlanes=D.clippingPlanes,b.clipIntersection=D.clipIntersection,b.displacementMap=D.displacementMap,b.displacementScale=D.displacementScale,b.displacementBias=D.displacementBias,b.wireframeLinewidth=D.wireframeLinewidth,b.linewidth=D.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const ie=s.properties.get(b);ie.light=F}return b}function A(k,D,F,L,b){if(k.visible===!1)return;if(k.layers.test(D.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&b===Oi)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,k.matrixWorld);const Q=e.update(k),de=k.material;if(Array.isArray(de)){const he=Q.groups;for(let ce=0,ue=he.length;ce<ue;ce++){const j=he[ce],le=de[j.materialIndex];if(le&&le.visible){const se=P(k,le,L,b);k.onBeforeShadow(s,k,D,F,Q,se,j),s.renderBufferDirect(F,null,Q,se,k,j),k.onAfterShadow(s,k,D,F,Q,se,j)}}}else if(de.visible){const he=P(k,de,L,b);k.onBeforeShadow(s,k,D,F,Q,he,null),s.renderBufferDirect(F,null,Q,he,k,null),k.onAfterShadow(s,k,D,F,Q,he,null)}}const ie=k.children;for(let Q=0,de=ie.length;Q<de;Q++)A(ie[Q],D,F,L,b)}function G(k){k.target.removeEventListener("dispose",G);for(const F in m){const L=m[F],b=k.target.uuid;b in L&&(L[b].dispose(),delete L[b])}}}const ME={[od]:ld,[cd]:hd,[ud]:fd,[js]:dd,[ld]:od,[hd]:cd,[fd]:ud,[dd]:js};function EE(s,e){function t(){let W=!1;const be=new Lt;let ae=null;const pe=new Lt(0,0,0,0);return{setMask:function(Pe){ae!==Pe&&!W&&(s.colorMask(Pe,Pe,Pe,Pe),ae=Pe)},setLocked:function(Pe){W=Pe},setClear:function(Pe,Re,ct,Ut,Xt){Xt===!0&&(Pe*=Ut,Re*=Ut,ct*=Ut),be.set(Pe,Re,ct,Ut),pe.equals(be)===!1&&(s.clearColor(Pe,Re,ct,Ut),pe.copy(be))},reset:function(){W=!1,ae=null,pe.set(-1,0,0,0)}}}function r(){let W=!1,be=!1,ae=null,pe=null,Pe=null;return{setReversed:function(Re){if(be!==Re){const ct=e.get("EXT_clip_control");be?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Pe;Pe=null,this.setClear(Ut)}be=Re},getReversed:function(){return be},setTest:function(Re){Re?ve(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Re){ae!==Re&&!W&&(s.depthMask(Re),ae=Re)},setFunc:function(Re){if(be&&(Re=ME[Re]),pe!==Re){switch(Re){case od:s.depthFunc(s.NEVER);break;case ld:s.depthFunc(s.ALWAYS);break;case cd:s.depthFunc(s.LESS);break;case js:s.depthFunc(s.LEQUAL);break;case ud:s.depthFunc(s.EQUAL);break;case dd:s.depthFunc(s.GEQUAL);break;case hd:s.depthFunc(s.GREATER);break;case fd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Re}},setLocked:function(Re){W=Re},setClear:function(Re){Pe!==Re&&(be&&(Re=1-Re),s.clearDepth(Re),Pe=Re)},reset:function(){W=!1,ae=null,pe=null,Pe=null,be=!1}}}function o(){let W=!1,be=null,ae=null,pe=null,Pe=null,Re=null,ct=null,Ut=null,Xt=null;return{setTest:function(Mt){W||(Mt?ve(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(Mt){be!==Mt&&!W&&(s.stencilMask(Mt),be=Mt)},setFunc:function(Mt,Mn,gn){(ae!==Mt||pe!==Mn||Pe!==gn)&&(s.stencilFunc(Mt,Mn,gn),ae=Mt,pe=Mn,Pe=gn)},setOp:function(Mt,Mn,gn){(Re!==Mt||ct!==Mn||Ut!==gn)&&(s.stencilOp(Mt,Mn,gn),Re=Mt,ct=Mn,Ut=gn)},setLocked:function(Mt){W=Mt},setClear:function(Mt){Xt!==Mt&&(s.clearStencil(Mt),Xt=Mt)},reset:function(){W=!1,be=null,ae=null,pe=null,Pe=null,Re=null,ct=null,Ut=null,Xt=null}}}const c=new t,d=new r,h=new o,p=new WeakMap,m=new WeakMap;let v={},_={},x=new WeakMap,M=[],E=null,T=!1,S=null,y=null,R=null,P=null,A=null,G=null,k=null,D=new St(0,0,0),F=0,L=!1,b=null,z=null,ie=null,Q=null,de=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,ue=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(j)[1]),ce=ue>=1):j.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ce=ue>=2);let le=null,se={};const O=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Le=new Lt().fromArray(O),Z=new Lt().fromArray(re);function oe(W,be,ae,pe){const Pe=new Uint8Array(4),Re=s.createTexture();s.bindTexture(W,Re),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ct=0;ct<ae;ct++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(be,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,Pe):s.texImage2D(be+ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pe);return Re}const Se={};Se[s.TEXTURE_2D]=oe(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ve(s.DEPTH_TEST),d.setFunc(js),vt(!1),pt(Hp),ve(s.CULL_FACE),Y(yr);function ve(W){v[W]!==!0&&(s.enable(W),v[W]=!0)}function Ae(W){v[W]!==!1&&(s.disable(W),v[W]=!1)}function Ie(W,be){return _[W]!==be?(s.bindFramebuffer(W,be),_[W]=be,W===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=be),W===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=be),!0):!1}function Ke(W,be){let ae=M,pe=!1;if(W){ae=x.get(be),ae===void 0&&(ae=[],x.set(be,ae));const Pe=W.textures;if(ae.length!==Pe.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let Re=0,ct=Pe.length;Re<ct;Re++)ae[Re]=s.COLOR_ATTACHMENT0+Re;ae.length=Pe.length,pe=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,pe=!0);pe&&s.drawBuffers(ae)}function qe(W){return E!==W?(s.useProgram(W),E=W,!0):!1}const at={[Xr]:s.FUNC_ADD,[Bx]:s.FUNC_SUBTRACT,[zx]:s.FUNC_REVERSE_SUBTRACT};at[jx]=s.MIN,at[Hx]=s.MAX;const _t={[Vx]:s.ZERO,[Gx]:s.ONE,[Wx]:s.SRC_COLOR,[sd]:s.SRC_ALPHA,[Zx]:s.SRC_ALPHA_SATURATE,[$x]:s.DST_COLOR,[qx]:s.DST_ALPHA,[Xx]:s.ONE_MINUS_SRC_COLOR,[ad]:s.ONE_MINUS_SRC_ALPHA,[Kx]:s.ONE_MINUS_DST_COLOR,[Yx]:s.ONE_MINUS_DST_ALPHA,[Jx]:s.CONSTANT_COLOR,[Qx]:s.ONE_MINUS_CONSTANT_COLOR,[e0]:s.CONSTANT_ALPHA,[t0]:s.ONE_MINUS_CONSTANT_ALPHA};function Y(W,be,ae,pe,Pe,Re,ct,Ut,Xt,Mt){if(W===yr){T===!0&&(Ae(s.BLEND),T=!1);return}if(T===!1&&(ve(s.BLEND),T=!0),W!==Ox){if(W!==S||Mt!==L){if((y!==Xr||A!==Xr)&&(s.blendEquation(s.FUNC_ADD),y=Xr,A=Xr),Mt)switch(W){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rd:s.blendFunc(s.ONE,s.ONE);break;case Vp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rd:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Vp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}R=null,P=null,G=null,k=null,D.set(0,0,0),F=0,S=W,L=Mt}return}Pe=Pe||be,Re=Re||ae,ct=ct||pe,(be!==y||Pe!==A)&&(s.blendEquationSeparate(at[be],at[Pe]),y=be,A=Pe),(ae!==R||pe!==P||Re!==G||ct!==k)&&(s.blendFuncSeparate(_t[ae],_t[pe],_t[Re],_t[ct]),R=ae,P=pe,G=Re,k=ct),(Ut.equals(D)===!1||Xt!==F)&&(s.blendColor(Ut.r,Ut.g,Ut.b,Xt),D.copy(Ut),F=Xt),S=W,L=!1}function mn(W,be){W.side===Bi?Ae(s.CULL_FACE):ve(s.CULL_FACE);let ae=W.side===Ln;be&&(ae=!ae),vt(ae),W.blending===Os&&W.transparent===!1?Y(yr):Y(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),c.setMask(W.colorWrite);const pe=W.stencilWrite;h.setTest(pe),pe&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Nt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function vt(W){b!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),b=W)}function pt(W){W!==Ux?(ve(s.CULL_FACE),W!==z&&(W===Hp?s.cullFace(s.BACK):W===kx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),z=W}function Ze(W){W!==ie&&(ce&&s.lineWidth(W),ie=W)}function Nt(W,be,ae){W?(ve(s.POLYGON_OFFSET_FILL),(Q!==be||de!==ae)&&(s.polygonOffset(be,ae),Q=be,de=ae)):Ae(s.POLYGON_OFFSET_FILL)}function $e(W){W?ve(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function I(W){W===void 0&&(W=s.TEXTURE0+he-1),le!==W&&(s.activeTexture(W),le=W)}function C(W,be,ae){ae===void 0&&(le===null?ae=s.TEXTURE0+he-1:ae=le);let pe=se[ae];pe===void 0&&(pe={type:void 0,texture:void 0},se[ae]=pe),(pe.type!==W||pe.texture!==be)&&(le!==ae&&(s.activeTexture(ae),le=ae),s.bindTexture(W,be||Se[W]),pe.type=W,pe.texture=be)}function J(){const W=se[le];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function He(){try{s.texSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(){try{s.texImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function tt(){try{s.texImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function nt(W){Le.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),Le.copy(W))}function Oe(W){Z.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Z.copy(W))}function mt(W,be){let ae=m.get(be);ae===void 0&&(ae=new WeakMap,m.set(be,ae));let pe=ae.get(W);pe===void 0&&(pe=s.getUniformBlockIndex(be,W.name),ae.set(W,pe))}function lt(W,be){const pe=m.get(be).get(W);p.get(be)!==pe&&(s.uniformBlockBinding(be,pe,W.__bindingPointIndex),p.set(be,pe))}function bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},le=null,se={},_={},x=new WeakMap,M=[],E=null,T=!1,S=null,y=null,R=null,P=null,A=null,G=null,k=null,D=new St(0,0,0),F=0,L=!1,b=null,z=null,ie=null,Q=null,de=null,Le.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ve,disable:Ae,bindFramebuffer:Ie,drawBuffers:Ke,useProgram:qe,setBlending:Y,setMaterial:mn,setFlipSided:vt,setCullFace:pt,setLineWidth:Ze,setPolygonOffset:Nt,setScissorTest:$e,activeTexture:I,bindTexture:C,unbindTexture:J,compressedTexImage2D:me,compressedTexImage3D:xe,texImage2D:Fe,texImage3D:tt,updateUBOMapping:mt,uniformBlockBinding:lt,texStorage2D:ft,texStorage3D:Me,texSubImage2D:fe,texSubImage3D:He,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ue,scissor:nt,viewport:Oe,reset:bt}}function Om(s,e,t,r){const o=wE(r);switch(t){case ng:return s*e;case rg:return s*e;case sg:return s*e*2;case ag:return s*e/o.components*o.byteLength;case Jd:return s*e/o.components*o.byteLength;case og:return s*e*2/o.components*o.byteLength;case Qd:return s*e*2/o.components*o.byteLength;case ig:return s*e*3/o.components*o.byteLength;case di:return s*e*4/o.components*o.byteLength;case eh:return s*e*4/o.components*o.byteLength;case Tl:case Al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cl:case bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _d:case Sd:return Math.max(s,16)*Math.max(e,8)/4;case xd:case yd:return Math.max(s,8)*Math.max(e,8)/2;case Md:case Ed:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Td:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case bd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Id:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Od:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Nl:case Bd:case zd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case lg:case jd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Hd:case Vd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wE(s){switch(s){case Vi:case Qm:return{byteLength:1,components:1};case Ha:case eg:case Va:return{byteLength:2,components:1};case Kd:case Zd:return{byteLength:2,components:4};case Kr:case $d:case zi:return{byteLength:4,components:1};case tg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function TE(s,e,t,r,o,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new et,v=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,C){return M?new OffscreenCanvas(I,C):Ll("canvas")}function T(I,C,J){let me=1;const xe=$e(I);if((xe.width>J||xe.height>J)&&(me=J/Math.max(xe.width,xe.height)),me<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const fe=Math.floor(me*xe.width),He=Math.floor(me*xe.height);_===void 0&&(_=E(fe,He));const Ce=C?E(fe,He):_;return Ce.width=fe,Ce.height=He,Ce.getContext("2d").drawImage(I,0,0,fe,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+fe+"x"+He+")."),Ce}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),I;return I}function S(I){return I.generateMipmaps}function y(I){s.generateMipmap(I)}function R(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(I,C,J,me,xe=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let fe=C;if(C===s.RED&&(J===s.FLOAT&&(fe=s.R32F),J===s.HALF_FLOAT&&(fe=s.R16F),J===s.UNSIGNED_BYTE&&(fe=s.R8)),C===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.R8UI),J===s.UNSIGNED_SHORT&&(fe=s.R16UI),J===s.UNSIGNED_INT&&(fe=s.R32UI),J===s.BYTE&&(fe=s.R8I),J===s.SHORT&&(fe=s.R16I),J===s.INT&&(fe=s.R32I)),C===s.RG&&(J===s.FLOAT&&(fe=s.RG32F),J===s.HALF_FLOAT&&(fe=s.RG16F),J===s.UNSIGNED_BYTE&&(fe=s.RG8)),C===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.RG8UI),J===s.UNSIGNED_SHORT&&(fe=s.RG16UI),J===s.UNSIGNED_INT&&(fe=s.RG32UI),J===s.BYTE&&(fe=s.RG8I),J===s.SHORT&&(fe=s.RG16I),J===s.INT&&(fe=s.RG32I)),C===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),J===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),J===s.UNSIGNED_INT&&(fe=s.RGB32UI),J===s.BYTE&&(fe=s.RGB8I),J===s.SHORT&&(fe=s.RGB16I),J===s.INT&&(fe=s.RGB32I)),C===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),J===s.UNSIGNED_INT&&(fe=s.RGBA32UI),J===s.BYTE&&(fe=s.RGBA8I),J===s.SHORT&&(fe=s.RGBA16I),J===s.INT&&(fe=s.RGBA32I)),C===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),C===s.RGBA){const He=xe?Il:wt.getTransfer(me);J===s.FLOAT&&(fe=s.RGBA32F),J===s.HALF_FLOAT&&(fe=s.RGBA16F),J===s.UNSIGNED_BYTE&&(fe=He===Pt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function A(I,C){let J;return I?C===null||C===Kr||C===Gs?J=s.DEPTH24_STENCIL8:C===zi?J=s.DEPTH32F_STENCIL8:C===Ha&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Kr||C===Gs?J=s.DEPTH_COMPONENT24:C===zi?J=s.DEPTH_COMPONENT32F:C===Ha&&(J=s.DEPTH_COMPONENT16),J}function G(I,C){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==hi&&I.minFilter!==yi?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function k(I){const C=I.target;C.removeEventListener("dispose",k),F(C),C.isVideoTexture&&v.delete(C)}function D(I){const C=I.target;C.removeEventListener("dispose",D),b(C)}function F(I){const C=r.get(I);if(C.__webglInit===void 0)return;const J=I.source,me=x.get(J);if(me){const xe=me[C.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&L(I),Object.keys(me).length===0&&x.delete(J)}r.remove(I)}function L(I){const C=r.get(I);s.deleteTexture(C.__webglTexture);const J=I.source,me=x.get(J);delete me[C.__cacheKey],d.memory.textures--}function b(I){const C=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(C.__webglFramebuffer[me]))for(let xe=0;xe<C.__webglFramebuffer[me].length;xe++)s.deleteFramebuffer(C.__webglFramebuffer[me][xe]);else s.deleteFramebuffer(C.__webglFramebuffer[me]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[me])}else{if(Array.isArray(C.__webglFramebuffer))for(let me=0;me<C.__webglFramebuffer.length;me++)s.deleteFramebuffer(C.__webglFramebuffer[me]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let me=0;me<C.__webglColorRenderbuffer.length;me++)C.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[me]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const J=I.textures;for(let me=0,xe=J.length;me<xe;me++){const fe=r.get(J[me]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),d.memory.textures--),r.remove(J[me])}r.remove(I)}let z=0;function ie(){z=0}function Q(){const I=z;return I>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),z+=1,I}function de(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function he(I,C){const J=r.get(I);if(I.isVideoTexture&&Ze(I),I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){const me=I.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(J,I,C);return}}t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+C)}function ce(I,C){const J=r.get(I);if(I.version>0&&J.__version!==I.version){Z(J,I,C);return}t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+C)}function ue(I,C){const J=r.get(I);if(I.version>0&&J.__version!==I.version){Z(J,I,C);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+C)}function j(I,C){const J=r.get(I);if(I.version>0&&J.__version!==I.version){oe(J,I,C);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+C)}const le={[gd]:s.REPEAT,[Yr]:s.CLAMP_TO_EDGE,[vd]:s.MIRRORED_REPEAT},se={[hi]:s.NEAREST,[d0]:s.NEAREST_MIPMAP_NEAREST,[tl]:s.NEAREST_MIPMAP_LINEAR,[yi]:s.LINEAR,[Su]:s.LINEAR_MIPMAP_NEAREST,[$r]:s.LINEAR_MIPMAP_LINEAR},O={[m0]:s.NEVER,[S0]:s.ALWAYS,[g0]:s.LESS,[ug]:s.LEQUAL,[v0]:s.EQUAL,[y0]:s.GEQUAL,[x0]:s.GREATER,[_0]:s.NOTEQUAL};function re(I,C){if(C.type===zi&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===yi||C.magFilter===Su||C.magFilter===tl||C.magFilter===$r||C.minFilter===yi||C.minFilter===Su||C.minFilter===tl||C.minFilter===$r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,le[C.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,le[C.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,le[C.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,se[C.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,se[C.minFilter]),C.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,O[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===hi||C.minFilter!==tl&&C.minFilter!==$r||C.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||r.get(C).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),r.get(C).__currentAnisotropy=C.anisotropy}}}function Le(I,C){let J=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",k));const me=C.source;let xe=x.get(me);xe===void 0&&(xe={},x.set(me,xe));const fe=de(C);if(fe!==I.__cacheKey){xe[fe]===void 0&&(xe[fe]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,J=!0),xe[fe].usedTimes++;const He=xe[I.__cacheKey];He!==void 0&&(xe[I.__cacheKey].usedTimes--,He.usedTimes===0&&L(C)),I.__cacheKey=fe,I.__webglTexture=xe[fe].texture}return J}function Z(I,C,J){let me=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(me=s.TEXTURE_3D);const xe=Le(I,C),fe=C.source;t.bindTexture(me,I.__webglTexture,s.TEXTURE0+J);const He=r.get(fe);if(fe.version!==He.__version||xe===!0){t.activeTexture(s.TEXTURE0+J);const Ce=wt.getPrimaries(wt.workingColorSpace),Ue=C.colorSpace===_r?null:wt.getPrimaries(C.colorSpace),ft=C.colorSpace===_r||Ce===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Me=T(C.image,!1,o.maxTextureSize);Me=Nt(C,Me);const Fe=c.convert(C.format,C.colorSpace),tt=c.convert(C.type);let nt=P(C.internalFormat,Fe,tt,C.colorSpace,C.isVideoTexture);re(me,C);let Oe;const mt=C.mipmaps,lt=C.isVideoTexture!==!0,bt=He.__version===void 0||xe===!0,W=fe.dataReady,be=G(C,Me);if(C.isDepthTexture)nt=A(C.format===Ws,C.type),bt&&(lt?t.texStorage2D(s.TEXTURE_2D,1,nt,Me.width,Me.height):t.texImage2D(s.TEXTURE_2D,0,nt,Me.width,Me.height,0,Fe,tt,null));else if(C.isDataTexture)if(mt.length>0){lt&&bt&&t.texStorage2D(s.TEXTURE_2D,be,nt,mt[0].width,mt[0].height);for(let ae=0,pe=mt.length;ae<pe;ae++)Oe=mt[ae],lt?W&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,Oe.width,Oe.height,Fe,tt,Oe.data):t.texImage2D(s.TEXTURE_2D,ae,nt,Oe.width,Oe.height,0,Fe,tt,Oe.data);C.generateMipmaps=!1}else lt?(bt&&t.texStorage2D(s.TEXTURE_2D,be,nt,Me.width,Me.height),W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,Fe,tt,Me.data)):t.texImage2D(s.TEXTURE_2D,0,nt,Me.width,Me.height,0,Fe,tt,Me.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){lt&&bt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,nt,mt[0].width,mt[0].height,Me.depth);for(let ae=0,pe=mt.length;ae<pe;ae++)if(Oe=mt[ae],C.format!==di)if(Fe!==null)if(lt){if(W)if(C.layerUpdates.size>0){const Pe=Om(Oe.width,Oe.height,C.format,C.type);for(const Re of C.layerUpdates){const ct=Oe.data.subarray(Re*Pe/Oe.data.BYTES_PER_ELEMENT,(Re+1)*Pe/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,Re,Oe.width,Oe.height,1,Fe,ct)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Oe.width,Oe.height,Me.depth,Fe,Oe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,nt,Oe.width,Oe.height,Me.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?W&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Oe.width,Oe.height,Me.depth,Fe,tt,Oe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ae,nt,Oe.width,Oe.height,Me.depth,0,Fe,tt,Oe.data)}else{lt&&bt&&t.texStorage2D(s.TEXTURE_2D,be,nt,mt[0].width,mt[0].height);for(let ae=0,pe=mt.length;ae<pe;ae++)Oe=mt[ae],C.format!==di?Fe!==null?lt?W&&t.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,Oe.width,Oe.height,Fe,Oe.data):t.compressedTexImage2D(s.TEXTURE_2D,ae,nt,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?W&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,Oe.width,Oe.height,Fe,tt,Oe.data):t.texImage2D(s.TEXTURE_2D,ae,nt,Oe.width,Oe.height,0,Fe,tt,Oe.data)}else if(C.isDataArrayTexture)if(lt){if(bt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,nt,Me.width,Me.height,Me.depth),W)if(C.layerUpdates.size>0){const ae=Om(Me.width,Me.height,C.format,C.type);for(const pe of C.layerUpdates){const Pe=Me.data.subarray(pe*ae/Me.data.BYTES_PER_ELEMENT,(pe+1)*ae/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,Fe,tt,Pe)}C.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Fe,tt,Me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,nt,Me.width,Me.height,Me.depth,0,Fe,tt,Me.data);else if(C.isData3DTexture)lt?(bt&&t.texStorage3D(s.TEXTURE_3D,be,nt,Me.width,Me.height,Me.depth),W&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Fe,tt,Me.data)):t.texImage3D(s.TEXTURE_3D,0,nt,Me.width,Me.height,Me.depth,0,Fe,tt,Me.data);else if(C.isFramebufferTexture){if(bt)if(lt)t.texStorage2D(s.TEXTURE_2D,be,nt,Me.width,Me.height);else{let ae=Me.width,pe=Me.height;for(let Pe=0;Pe<be;Pe++)t.texImage2D(s.TEXTURE_2D,Pe,nt,ae,pe,0,Fe,tt,null),ae>>=1,pe>>=1}}else if(mt.length>0){if(lt&&bt){const ae=$e(mt[0]);t.texStorage2D(s.TEXTURE_2D,be,nt,ae.width,ae.height)}for(let ae=0,pe=mt.length;ae<pe;ae++)Oe=mt[ae],lt?W&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,Fe,tt,Oe):t.texImage2D(s.TEXTURE_2D,ae,nt,Fe,tt,Oe);C.generateMipmaps=!1}else if(lt){if(bt){const ae=$e(Me);t.texStorage2D(s.TEXTURE_2D,be,nt,ae.width,ae.height)}W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,tt,Me)}else t.texImage2D(s.TEXTURE_2D,0,nt,Fe,tt,Me);S(C)&&y(me),He.__version=fe.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function oe(I,C,J){if(C.image.length!==6)return;const me=Le(I,C),xe=C.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+J);const fe=r.get(xe);if(xe.version!==fe.__version||me===!0){t.activeTexture(s.TEXTURE0+J);const He=wt.getPrimaries(wt.workingColorSpace),Ce=C.colorSpace===_r?null:wt.getPrimaries(C.colorSpace),Ue=C.colorSpace===_r||He===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ft=C.isCompressedTexture||C.image[0].isCompressedTexture,Me=C.image[0]&&C.image[0].isDataTexture,Fe=[];for(let pe=0;pe<6;pe++)!ft&&!Me?Fe[pe]=T(C.image[pe],!0,o.maxCubemapSize):Fe[pe]=Me?C.image[pe].image:C.image[pe],Fe[pe]=Nt(C,Fe[pe]);const tt=Fe[0],nt=c.convert(C.format,C.colorSpace),Oe=c.convert(C.type),mt=P(C.internalFormat,nt,Oe,C.colorSpace),lt=C.isVideoTexture!==!0,bt=fe.__version===void 0||me===!0,W=xe.dataReady;let be=G(C,tt);re(s.TEXTURE_CUBE_MAP,C);let ae;if(ft){lt&&bt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,be,mt,tt.width,tt.height);for(let pe=0;pe<6;pe++){ae=Fe[pe].mipmaps;for(let Pe=0;Pe<ae.length;Pe++){const Re=ae[Pe];C.format!==di?nt!==null?lt?W&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,0,0,Re.width,Re.height,nt,Re.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,mt,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,0,0,Re.width,Re.height,nt,Oe,Re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,mt,Re.width,Re.height,0,nt,Oe,Re.data)}}}else{if(ae=C.mipmaps,lt&&bt){ae.length>0&&be++;const pe=$e(Fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,be,mt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){lt?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Fe[pe].width,Fe[pe].height,nt,Oe,Fe[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,mt,Fe[pe].width,Fe[pe].height,0,nt,Oe,Fe[pe].data);for(let Pe=0;Pe<ae.length;Pe++){const ct=ae[Pe].image[pe].image;lt?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,0,0,ct.width,ct.height,nt,Oe,ct.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,mt,ct.width,ct.height,0,nt,Oe,ct.data)}}else{lt?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,nt,Oe,Fe[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,mt,nt,Oe,Fe[pe]);for(let Pe=0;Pe<ae.length;Pe++){const Re=ae[Pe];lt?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,0,0,nt,Oe,Re.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,mt,nt,Oe,Re.image[pe])}}}S(C)&&y(s.TEXTURE_CUBE_MAP),fe.__version=xe.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function Se(I,C,J,me,xe,fe){const He=c.convert(J.format,J.colorSpace),Ce=c.convert(J.type),Ue=P(J.internalFormat,He,Ce,J.colorSpace),ft=r.get(C),Me=r.get(J);if(Me.__renderTarget=C,!ft.__hasExternalTextures){const Fe=Math.max(1,C.width>>fe),tt=Math.max(1,C.height>>fe);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?t.texImage3D(xe,fe,Ue,Fe,tt,C.depth,0,He,Ce,null):t.texImage2D(xe,fe,Ue,Fe,tt,0,He,Ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),pt(C)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,xe,Me.__webglTexture,0,vt(C)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,xe,Me.__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(I,C,J){if(s.bindRenderbuffer(s.RENDERBUFFER,I),C.depthBuffer){const me=C.depthTexture,xe=me&&me.isDepthTexture?me.type:null,fe=A(C.stencilBuffer,xe),He=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=vt(C);pt(C)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,fe,C.width,C.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,fe,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,fe,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,He,s.RENDERBUFFER,I)}else{const me=C.textures;for(let xe=0;xe<me.length;xe++){const fe=me[xe],He=c.convert(fe.format,fe.colorSpace),Ce=c.convert(fe.type),Ue=P(fe.internalFormat,He,Ce,fe.colorSpace),ft=vt(C);J&&pt(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Ue,C.width,C.height):pt(C)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,Ue,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(C.depthTexture);me.__renderTarget=C,(!me.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),he(C.depthTexture,0);const xe=me.__webglTexture,fe=vt(C);if(C.depthTexture.format===Bs)pt(C)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0);else if(C.depthTexture.format===Ws)pt(C)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Ie(I){const C=r.get(I),J=I.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==I.depthTexture){const me=I.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),me){const xe=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,me.removeEventListener("dispose",xe)};me.addEventListener("dispose",xe),C.__depthDisposeCallback=xe}C.__boundDepthTexture=me}if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Ae(C.__webglFramebuffer,I)}else if(J){C.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[me]),C.__webglDepthbuffer[me]===void 0)C.__webglDepthbuffer[me]=s.createRenderbuffer(),ve(C.__webglDepthbuffer[me],I,!1);else{const xe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=C.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),ve(C.__webglDepthbuffer,I,!1);else{const me=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,xe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(I,C,J){const me=r.get(I);C!==void 0&&Se(me.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Ie(I)}function qe(I){const C=I.texture,J=r.get(I),me=r.get(C);I.addEventListener("dispose",D);const xe=I.textures,fe=I.isWebGLCubeRenderTarget===!0,He=xe.length>1;if(He||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=C.version,d.memory.textures++),fe){J.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(C.mipmaps&&C.mipmaps.length>0){J.__webglFramebuffer[Ce]=[];for(let Ue=0;Ue<C.mipmaps.length;Ue++)J.__webglFramebuffer[Ce][Ue]=s.createFramebuffer()}else J.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ce=0;Ce<C.mipmaps.length;Ce++)J.__webglFramebuffer[Ce]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(He)for(let Ce=0,Ue=xe.length;Ce<Ue;Ce++){const ft=r.get(xe[Ce]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),d.memory.textures++)}if(I.samples>0&&pt(I)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ce=0;Ce<xe.length;Ce++){const Ue=xe[Ce];J.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Ce]);const ft=c.convert(Ue.format,Ue.colorSpace),Me=c.convert(Ue.type),Fe=P(Ue.internalFormat,ft,Me,Ue.colorSpace,I.isXRRenderTarget===!0),tt=vt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,Fe,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,J.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),ve(J.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),re(s.TEXTURE_CUBE_MAP,C);for(let Ce=0;Ce<6;Ce++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ue=0;Ue<C.mipmaps.length;Ue++)Se(J.__webglFramebuffer[Ce][Ue],I,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ue);else Se(J.__webglFramebuffer[Ce],I,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);S(C)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let Ce=0,Ue=xe.length;Ce<Ue;Ce++){const ft=xe[Ce],Me=r.get(ft);t.bindTexture(s.TEXTURE_2D,Me.__webglTexture),re(s.TEXTURE_2D,ft),Se(J.__webglFramebuffer,I,ft,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),S(ft)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ce=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,me.__webglTexture),re(Ce,C),C.mipmaps&&C.mipmaps.length>0)for(let Ue=0;Ue<C.mipmaps.length;Ue++)Se(J.__webglFramebuffer[Ue],I,C,s.COLOR_ATTACHMENT0,Ce,Ue);else Se(J.__webglFramebuffer,I,C,s.COLOR_ATTACHMENT0,Ce,0);S(C)&&y(Ce),t.unbindTexture()}I.depthBuffer&&Ie(I)}function at(I){const C=I.textures;for(let J=0,me=C.length;J<me;J++){const xe=C[J];if(S(xe)){const fe=R(I),He=r.get(xe).__webglTexture;t.bindTexture(fe,He),y(fe),t.unbindTexture()}}}const _t=[],Y=[];function mn(I){if(I.samples>0){if(pt(I)===!1){const C=I.textures,J=I.width,me=I.height;let xe=s.COLOR_BUFFER_BIT;const fe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=r.get(I),Ce=C.length>1;if(Ce)for(let Ue=0;Ue<C.length;Ue++)t.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ue=0;Ue<C.length;Ue++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,He.__webglColorRenderbuffer[Ue]);const ft=r.get(C[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,J,me,0,0,J,me,xe,s.NEAREST),p===!0&&(_t.length=0,Y.length=0,_t.push(s.COLOR_ATTACHMENT0+Ue),I.depthBuffer&&I.resolveDepthBuffer===!1&&(_t.push(fe),Y.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Y)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Ue=0;Ue<C.length;Ue++){t.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,He.__webglColorRenderbuffer[Ue]);const ft=r.get(C[Ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,ft,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const C=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function vt(I){return Math.min(o.maxSamples,I.samples)}function pt(I){const C=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ze(I){const C=d.render.frame;v.get(I)!==C&&(v.set(I,C),I.update())}function Nt(I,C){const J=I.colorSpace,me=I.format,xe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||J!==qs&&J!==_r&&(wt.getTransfer(J)===Pt?(me!==di||xe!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),C}function $e(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=Q,this.resetTextureUnits=ie,this.setTexture2D=he,this.setTexture2DArray=ce,this.setTexture3D=ue,this.setTextureCube=j,this.rebindTextures=Ke,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=pt}function AE(s,e){function t(r,o=_r){let c;const d=wt.getTransfer(o);if(r===Vi)return s.UNSIGNED_BYTE;if(r===Kd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Zd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===tg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Qm)return s.BYTE;if(r===eg)return s.SHORT;if(r===Ha)return s.UNSIGNED_SHORT;if(r===$d)return s.INT;if(r===Kr)return s.UNSIGNED_INT;if(r===zi)return s.FLOAT;if(r===Va)return s.HALF_FLOAT;if(r===ng)return s.ALPHA;if(r===ig)return s.RGB;if(r===di)return s.RGBA;if(r===rg)return s.LUMINANCE;if(r===sg)return s.LUMINANCE_ALPHA;if(r===Bs)return s.DEPTH_COMPONENT;if(r===Ws)return s.DEPTH_STENCIL;if(r===ag)return s.RED;if(r===Jd)return s.RED_INTEGER;if(r===og)return s.RG;if(r===Qd)return s.RG_INTEGER;if(r===eh)return s.RGBA_INTEGER;if(r===Tl||r===Al||r===Cl||r===bl)if(d===Pt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Tl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Al)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Tl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Al)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xd||r===_d||r===yd||r===Sd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===xd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_d)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Md||r===Ed||r===wd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Md||r===Ed)return d===Pt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===wd)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Td||r===Ad||r===Cd||r===bd||r===Nd||r===Rd||r===Pd||r===Ld||r===Dd||r===Id||r===Ud||r===kd||r===Fd||r===Od)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Td)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ad)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Cd)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bd)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nd)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Rd)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Pd)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ld)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Dd)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Id)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ud)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kd)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fd)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Od)return d===Pt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nl||r===Bd||r===zd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Nl)return d===Pt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Bd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===zd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lg||r===jd||r===Hd||r===Vd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Nl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===jd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Hd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Gs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class CE extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Oa extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bE={type:"move"};class Ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,c=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,r),y=this._getHandJoint(m,T);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=v.position.distanceTo(_.position),M=.02,E=.005;m.inputState.pinching&&x>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=t.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(bE)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Oa;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const NE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Dn,c=e.properties.get(o);c.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Er({vertexShader:NE,fragmentShader:RE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pn(new kl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LE extends Ys{constructor(e,t){super();const r=this;let o=null,c=1,d=null,h="local-floor",p=1,m=null,v=null,_=null,x=null,M=null,E=null;const T=new PE,S=t.getContextAttributes();let y=null,R=null;const P=[],A=[],G=new et;let k=null;const D=new zn;D.viewport=new Lt;const F=new zn;F.viewport=new Lt;const L=[D,F],b=new CE;let z=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=P[Z];return oe===void 0&&(oe=new Ku,P[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=P[Z];return oe===void 0&&(oe=new Ku,P[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=P[Z];return oe===void 0&&(oe=new Ku,P[Z]=oe),oe.getHandSpace()};function Q(Z){const oe=A.indexOf(Z.inputSource);if(oe===-1)return;const Se=P[oe];Se!==void 0&&(Se.update(Z.inputSource,Z.frame,m||d),Se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function de(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",de),o.removeEventListener("inputsourceschange",he);for(let Z=0;Z<P.length;Z++){const oe=A[Z];oe!==null&&(A[Z]=null,P[Z].disconnect(oe))}z=null,ie=null,T.reset(),e.setRenderTarget(y),M=null,x=null,_=null,o=null,R=null,Le.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){h=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",de),o.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(G),o.renderState.layers===void 0){const oe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,t,oe),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),R=new Zr(M.framebufferWidth,M.framebufferHeight,{format:di,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let oe=null,Se=null,ve=null;S.depth&&(ve=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=S.stencil?Ws:Bs,Se=S.stencil?Gs:Kr);const Ae={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:c};_=new XRWebGLBinding(o,t),x=_.createProjectionLayer(Ae),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),R=new Zr(x.textureWidth,x.textureHeight,{format:di,type:Vi,depthTexture:new wg(x.textureWidth,x.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await o.requestReferenceSpace(h),Le.setContext(o),Le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function he(Z){for(let oe=0;oe<Z.removed.length;oe++){const Se=Z.removed[oe],ve=A.indexOf(Se);ve>=0&&(A[ve]=null,P[ve].disconnect(Se))}for(let oe=0;oe<Z.added.length;oe++){const Se=Z.added[oe];let ve=A.indexOf(Se);if(ve===-1){for(let Ie=0;Ie<P.length;Ie++)if(Ie>=A.length){A.push(Se),ve=Ie;break}else if(A[Ie]===null){A[Ie]=Se,ve=Ie;break}if(ve===-1)break}const Ae=P[ve];Ae&&Ae.connect(Se)}}const ce=new H,ue=new H;function j(Z,oe,Se){ce.setFromMatrixPosition(oe.matrixWorld),ue.setFromMatrixPosition(Se.matrixWorld);const ve=ce.distanceTo(ue),Ae=oe.projectionMatrix.elements,Ie=Se.projectionMatrix.elements,Ke=Ae[14]/(Ae[10]-1),qe=Ae[14]/(Ae[10]+1),at=(Ae[9]+1)/Ae[5],_t=(Ae[9]-1)/Ae[5],Y=(Ae[8]-1)/Ae[0],mn=(Ie[8]+1)/Ie[0],vt=Ke*Y,pt=Ke*mn,Ze=ve/(-Y+mn),Nt=Ze*-Y;if(oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Nt),Z.translateZ(Ze),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ae[10]===-1)Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const $e=Ke+Ze,I=qe+Ze,C=vt-Nt,J=pt+(ve-Nt),me=at*qe/I*$e,xe=_t*qe/I*$e;Z.projectionMatrix.makePerspective(C,J,me,xe,$e,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function le(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let oe=Z.near,Se=Z.far;T.texture!==null&&(T.depthNear>0&&(oe=T.depthNear),T.depthFar>0&&(Se=T.depthFar)),b.near=F.near=D.near=oe,b.far=F.far=D.far=Se,(z!==b.near||ie!==b.far)&&(o.updateRenderState({depthNear:b.near,depthFar:b.far}),z=b.near,ie=b.far),D.layers.mask=Z.layers.mask|2,F.layers.mask=Z.layers.mask|4,b.layers.mask=D.layers.mask|F.layers.mask;const ve=Z.parent,Ae=b.cameras;le(b,ve);for(let Ie=0;Ie<Ae.length;Ie++)le(Ae[Ie],ve);Ae.length===2?j(b,D,F):b.projectionMatrix.copy(D.projectionMatrix),se(Z,b,ve)};function se(Z,oe,Se){Se===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(Se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Gd*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(Z){p=Z,x!==null&&(x.fixedFoveation=Z),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Z)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(b)};let O=null;function re(Z,oe){if(v=oe.getViewerPose(m||d),E=oe,v!==null){const Se=v.views;M!==null&&(e.setRenderTargetFramebuffer(R,M.framebuffer),e.setRenderTarget(R));let ve=!1;Se.length!==b.cameras.length&&(b.cameras.length=0,ve=!0);for(let Ie=0;Ie<Se.length;Ie++){const Ke=Se[Ie];let qe=null;if(M!==null)qe=M.getViewport(Ke);else{const _t=_.getViewSubImage(x,Ke);qe=_t.viewport,Ie===0&&(e.setRenderTargetTextures(R,_t.colorTexture,x.ignoreDepthValues?void 0:_t.depthStencilTexture),e.setRenderTarget(R))}let at=L[Ie];at===void 0&&(at=new zn,at.layers.enable(Ie),at.viewport=new Lt,L[Ie]=at),at.matrix.fromArray(Ke.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Ke.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(qe.x,qe.y,qe.width,qe.height),Ie===0&&(b.matrix.copy(at.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ve===!0&&b.cameras.push(at)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ie=_.getDepthInformation(Se[0]);Ie&&Ie.isValid&&Ie.texture&&T.init(e,Ie,o.renderState)}}for(let Se=0;Se<P.length;Se++){const ve=A[Se],Ae=P[Se];ve!==null&&Ae!==void 0&&Ae.update(ve,oe,m||d)}O&&O(Z,oe),oe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:oe}),E=null}const Le=new Eg;Le.setAnimationLoop(re),this.setAnimationLoop=function(Z){O=Z},this.dispose=function(){}}}const Vr=new Si,DE=new Ot;function IE(s,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,yg(s)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,R,P,A){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(S,y):y.isMeshToonMaterial?(c(S,y),_(S,y)):y.isMeshPhongMaterial?(c(S,y),v(S,y)):y.isMeshStandardMaterial?(c(S,y),x(S,y),y.isMeshPhysicalMaterial&&M(S,y,A)):y.isMeshMatcapMaterial?(c(S,y),E(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),T(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(d(S,y),y.isLineDashedMaterial&&h(S,y)):y.isPointsMaterial?p(S,y,R,P):y.isSpriteMaterial?m(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Ln&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Ln&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const R=e.get(y),P=R.envMap,A=R.envMapRotation;P&&(S.envMap.value=P,Vr.copy(A),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),S.envMapRotation.value.setFromMatrix4(DE.makeRotationFromEuler(Vr)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function h(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function p(S,y,R,P){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*R,S.scale.value=P*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function v(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function _(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function x(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function M(S,y,R){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Ln&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function T(S,y){const R=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function UE(s,e,t,r){let o={},c={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,P){const A=P.program;r.uniformBlockBinding(R,A)}function m(R,P){let A=o[R.id];A===void 0&&(E(R),A=v(R),o[R.id]=A,R.addEventListener("dispose",S));const G=P.program;r.updateUBOMapping(R,G);const k=e.render.frame;c[R.id]!==k&&(x(R),c[R.id]=k)}function v(R){const P=_();R.__bindingPointIndex=P;const A=s.createBuffer(),G=R.__size,k=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,G,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,A),A}function _(){for(let R=0;R<h;R++)if(d.indexOf(R)===-1)return d.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(R){const P=o[R.id],A=R.uniforms,G=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let k=0,D=A.length;k<D;k++){const F=Array.isArray(A[k])?A[k]:[A[k]];for(let L=0,b=F.length;L<b;L++){const z=F[L];if(M(z,k,L,G)===!0){const ie=z.__offset,Q=Array.isArray(z.value)?z.value:[z.value];let de=0;for(let he=0;he<Q.length;he++){const ce=Q[he],ue=T(ce);typeof ce=="number"||typeof ce=="boolean"?(z.__data[0]=ce,s.bufferSubData(s.UNIFORM_BUFFER,ie+de,z.__data)):ce.isMatrix3?(z.__data[0]=ce.elements[0],z.__data[1]=ce.elements[1],z.__data[2]=ce.elements[2],z.__data[3]=0,z.__data[4]=ce.elements[3],z.__data[5]=ce.elements[4],z.__data[6]=ce.elements[5],z.__data[7]=0,z.__data[8]=ce.elements[6],z.__data[9]=ce.elements[7],z.__data[10]=ce.elements[8],z.__data[11]=0):(ce.toArray(z.__data,de),de+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ie,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(R,P,A,G){const k=R.value,D=P+"_"+A;if(G[D]===void 0)return typeof k=="number"||typeof k=="boolean"?G[D]=k:G[D]=k.clone(),!0;{const F=G[D];if(typeof k=="number"||typeof k=="boolean"){if(F!==k)return G[D]=k,!0}else if(F.equals(k)===!1)return F.copy(k),!0}return!1}function E(R){const P=R.uniforms;let A=0;const G=16;for(let D=0,F=P.length;D<F;D++){const L=Array.isArray(P[D])?P[D]:[P[D]];for(let b=0,z=L.length;b<z;b++){const ie=L[b],Q=Array.isArray(ie.value)?ie.value:[ie.value];for(let de=0,he=Q.length;de<he;de++){const ce=Q[de],ue=T(ce),j=A%G,le=j%ue.boundary,se=j+le;A+=le,se!==0&&G-se<ue.storage&&(A+=G-se),ie.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=A,A+=ue.storage}}}const k=A%G;return k>0&&(A+=G-k),R.__size=A,R.__cache={},this}function T(R){const P={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(P.boundary=4,P.storage=4):R.isVector2?(P.boundary=8,P.storage=8):R.isVector3||R.isColor?(P.boundary=16,P.storage=12):R.isVector4?(P.boundary=16,P.storage=16):R.isMatrix3?(P.boundary=48,P.storage=48):R.isMatrix4?(P.boundary=64,P.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),P}function S(R){const P=R.target;P.removeEventListener("dispose",S);const A=d.indexOf(P.__bindingPointIndex);d.splice(A,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete c[P.id]}function y(){for(const R in o)s.deleteBuffer(o[R]);d=[],o={},c={}}return{bind:p,update:m,dispose:y}}class kE{constructor(e={}){const{canvas:t=E0(),context:r=null,depth:o=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const E=new Uint32Array(4),T=new Int32Array(4);let S=null,y=null;const R=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Sr,this.toneMappingExposure=1;const A=this;let G=!1,k=0,D=0,F=null,L=-1,b=null;const z=new Lt,ie=new Lt;let Q=null;const de=new St(0);let he=0,ce=t.width,ue=t.height,j=1,le=null,se=null;const O=new Lt(0,0,ce,ue),re=new Lt(0,0,ce,ue);let Le=!1;const Z=new th;let oe=!1,Se=!1;const ve=new Ot,Ae=new Ot,Ie=new H,Ke=new Lt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function _t(){return F===null?j:1}let Y=r;function mn(N,X){return t.getContext(N,X)}try{const N={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yd}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",Re,!1),Y===null){const X="webgl2";if(Y=mn(X,N),Y===null)throw mn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let vt,pt,Ze,Nt,$e,I,C,J,me,xe,fe,He,Ce,Ue,ft,Me,Fe,tt,nt,Oe,mt,lt,bt,W;function be(){vt=new jS(Y),vt.init(),lt=new AE(Y,vt),pt=new IS(Y,vt,e,lt),Ze=new EE(Y,vt),pt.reverseDepthBuffer&&x&&Ze.buffers.depth.setReversed(!0),Nt=new GS(Y),$e=new lE,I=new TE(Y,vt,Ze,$e,pt,lt,Nt),C=new kS(A),J=new zS(A),me=new K0(Y),bt=new LS(Y,me),xe=new HS(Y,me,Nt,bt),fe=new XS(Y,xe,me,Nt),nt=new WS(Y,pt,I),Me=new US($e),He=new oE(A,C,J,vt,pt,bt,Me),Ce=new IE(A,$e),Ue=new uE,ft=new gE(vt),tt=new PS(A,C,J,Ze,fe,M,p),Fe=new SE(A,fe,pt),W=new UE(Y,Nt,pt,Ze),Oe=new DS(Y,vt,Nt),mt=new VS(Y,vt,Nt),Nt.programs=He.programs,A.capabilities=pt,A.extensions=vt,A.properties=$e,A.renderLists=Ue,A.shadowMap=Fe,A.state=Ze,A.info=Nt}be();const ae=new LE(A,Y);this.xr=ae,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const N=vt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=vt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(N){N!==void 0&&(j=N,this.setSize(ce,ue,!1))},this.getSize=function(N){return N.set(ce,ue)},this.setSize=function(N,X,te=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=N,ue=X,t.width=Math.floor(N*j),t.height=Math.floor(X*j),te===!0&&(t.style.width=N+"px",t.style.height=X+"px"),this.setViewport(0,0,N,X)},this.getDrawingBufferSize=function(N){return N.set(ce*j,ue*j).floor()},this.setDrawingBufferSize=function(N,X,te){ce=N,ue=X,j=te,t.width=Math.floor(N*te),t.height=Math.floor(X*te),this.setViewport(0,0,N,X)},this.getCurrentViewport=function(N){return N.copy(z)},this.getViewport=function(N){return N.copy(O)},this.setViewport=function(N,X,te,ne){N.isVector4?O.set(N.x,N.y,N.z,N.w):O.set(N,X,te,ne),Ze.viewport(z.copy(O).multiplyScalar(j).round())},this.getScissor=function(N){return N.copy(re)},this.setScissor=function(N,X,te,ne){N.isVector4?re.set(N.x,N.y,N.z,N.w):re.set(N,X,te,ne),Ze.scissor(ie.copy(re).multiplyScalar(j).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(N){Ze.setScissorTest(Le=N)},this.setOpaqueSort=function(N){le=N},this.setTransparentSort=function(N){se=N},this.getClearColor=function(N){return N.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(N=!0,X=!0,te=!0){let ne=0;if(N){let q=!1;if(F!==null){const Te=F.texture.format;q=Te===eh||Te===Qd||Te===Jd}if(q){const Te=F.texture.type,Ee=Te===Vi||Te===Kr||Te===Ha||Te===Gs||Te===Kd||Te===Zd,Ve=tt.getClearColor(),ze=tt.getClearAlpha(),it=Ve.r,ot=Ve.g,Ge=Ve.b;Ee?(E[0]=it,E[1]=ot,E[2]=Ge,E[3]=ze,Y.clearBufferuiv(Y.COLOR,0,E)):(T[0]=it,T[1]=ot,T[2]=Ge,T[3]=ze,Y.clearBufferiv(Y.COLOR,0,T))}else ne|=Y.COLOR_BUFFER_BIT}X&&(ne|=Y.DEPTH_BUFFER_BIT),te&&(ne|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Ue.dispose(),ft.dispose(),$e.dispose(),C.dispose(),J.dispose(),fe.dispose(),bt.dispose(),W.dispose(),He.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Jr),ae.removeEventListener("sessionend",Wi),Mi.stop()};function pe(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const N=Nt.autoReset,X=Fe.enabled,te=Fe.autoUpdate,ne=Fe.needsUpdate,q=Fe.type;be(),Nt.autoReset=N,Fe.enabled=X,Fe.autoUpdate=te,Fe.needsUpdate=ne,Fe.type=q}function Re(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ct(N){const X=N.target;X.removeEventListener("dispose",ct),Ut(X)}function Ut(N){Xt(N),$e.remove(N)}function Xt(N){const X=$e.get(N).programs;X!==void 0&&(X.forEach(function(te){He.releaseProgram(te)}),N.isShaderMaterial&&He.releaseShaderCache(N))}this.renderBufferDirect=function(N,X,te,ne,q,Te){X===null&&(X=qe);const Ee=q.isMesh&&q.matrixWorld.determinant()<0,Ve=Ka(N,X,te,ne,q);Ze.setMaterial(ne,Ee);let ze=te.index,it=1;if(ne.wireframe===!0){if(ze=xe.getWireframeAttribute(te),ze===void 0)return;it=2}const ot=te.drawRange,Ge=te.attributes.position;let yt=ot.start*it,Ct=(ot.start+ot.count)*it;Te!==null&&(yt=Math.max(yt,Te.start*it),Ct=Math.min(Ct,(Te.start+Te.count)*it)),ze!==null?(yt=Math.max(yt,0),Ct=Math.min(Ct,ze.count)):Ge!=null&&(yt=Math.max(yt,0),Ct=Math.min(Ct,Ge.count));const xt=Ct-yt;if(xt<0||xt===1/0)return;bt.setup(q,ne,Ve,te,ze);let sn,ut=Oe;if(ze!==null&&(sn=me.get(ze),ut=mt,ut.setIndex(sn)),q.isMesh)ne.wireframe===!0?(Ze.setLineWidth(ne.wireframeLinewidth*_t()),ut.setMode(Y.LINES)):ut.setMode(Y.TRIANGLES);else if(q.isLine){let Ye=ne.linewidth;Ye===void 0&&(Ye=1),Ze.setLineWidth(Ye*_t()),q.isLineSegments?ut.setMode(Y.LINES):q.isLineLoop?ut.setMode(Y.LINE_LOOP):ut.setMode(Y.LINE_STRIP)}else q.isPoints?ut.setMode(Y.POINTS):q.isSprite&&ut.setMode(Y.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ut.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))ut.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ye=q._multiDrawStarts,Qn=q._multiDrawCounts,Tt=q._multiDrawCount,an=ze?me.get(ze).bytesPerElement:1,ei=$e.get(ne).currentProgram.getUniforms();for(let qt=0;qt<Tt;qt++)ei.setValue(Y,"_gl_DrawID",qt),ut.render(Ye[qt]/an,Qn[qt])}else if(q.isInstancedMesh)ut.renderInstances(yt,xt,q.count);else if(te.isInstancedBufferGeometry){const Ye=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Qn=Math.min(te.instanceCount,Ye);ut.renderInstances(yt,xt,Qn)}else ut.render(yt,xt)};function Mt(N,X,te){N.transparent===!0&&N.side===Bi&&N.forceSinglePass===!1?(N.side=Ln,N.needsUpdate=!0,Qr(N,X,te),N.side=Mr,N.needsUpdate=!0,Qr(N,X,te),N.side=Bi):Qr(N,X,te)}this.compile=function(N,X,te=null){te===null&&(te=N),y=ft.get(te),y.init(X),P.push(y),te.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(y.pushLight(q),q.castShadow&&y.pushShadow(q))}),N!==te&&N.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(y.pushLight(q),q.castShadow&&y.pushShadow(q))}),y.setupLights();const ne=new Set;return N.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Te=q.material;if(Te)if(Array.isArray(Te))for(let Ee=0;Ee<Te.length;Ee++){const Ve=Te[Ee];Mt(Ve,te,q),ne.add(Ve)}else Mt(Te,te,q),ne.add(Te)}),P.pop(),y=null,ne},this.compileAsync=function(N,X,te=null){const ne=this.compile(N,X,te);return new Promise(q=>{function Te(){if(ne.forEach(function(Ee){$e.get(Ee).currentProgram.isReady()&&ne.delete(Ee)}),ne.size===0){q(N);return}setTimeout(Te,10)}vt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Mn=null;function gn(N){Mn&&Mn(N)}function Jr(){Mi.stop()}function Wi(){Mi.start()}const Mi=new Eg;Mi.setAnimationLoop(gn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(N){Mn=N,ae.setAnimationLoop(N),N===null?Mi.stop():Mi.start()},ae.addEventListener("sessionstart",Jr),ae.addEventListener("sessionend",Wi),this.render=function(N,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(X),X=ae.getCamera()),N.isScene===!0&&N.onBeforeRender(A,N,X,F),y=ft.get(N,P.length),y.init(X),P.push(y),Ae.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Z.setFromProjectionMatrix(Ae),Se=this.localClippingEnabled,oe=Me.init(this.clippingPlanes,Se),S=Ue.get(N,R.length),S.init(),R.push(S),ae.enabled===!0&&ae.isPresenting===!0){const Te=A.xr.getDepthSensingMesh();Te!==null&&Ei(Te,X,-1/0,A.sortObjects)}Ei(N,X,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(le,se),at=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,at&&tt.addToRenderList(S,N),this.info.render.frame++,oe===!0&&Me.beginShadows();const te=y.state.shadowsArray;Fe.render(te,N,X),oe===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=S.opaque,q=S.transmissive;if(y.setupLights(),X.isArrayCamera){const Te=X.cameras;if(q.length>0)for(let Ee=0,Ve=Te.length;Ee<Ve;Ee++){const ze=Te[Ee];Tr(ne,q,N,ze)}at&&tt.render(N);for(let Ee=0,Ve=Te.length;Ee<Ve;Ee++){const ze=Te[Ee];wr(S,N,ze,ze.viewport)}}else q.length>0&&Tr(ne,q,N,X),at&&tt.render(N),wr(S,N,X);F!==null&&(I.updateMultisampleRenderTarget(F),I.updateRenderTargetMipmap(F)),N.isScene===!0&&N.onAfterRender(A,N,X),bt.resetDefaultState(),L=-1,b=null,P.pop(),P.length>0?(y=P[P.length-1],oe===!0&&Me.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,R.pop(),R.length>0?S=R[R.length-1]:S=null};function Ei(N,X,te,ne){if(N.visible===!1)return;if(N.layers.test(X.layers)){if(N.isGroup)te=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(X);else if(N.isLight)y.pushLight(N),N.castShadow&&y.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Z.intersectsSprite(N)){ne&&Ke.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Ae);const Ee=fe.update(N),Ve=N.material;Ve.visible&&S.push(N,Ee,Ve,te,Ke.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Z.intersectsObject(N))){const Ee=fe.update(N),Ve=N.material;if(ne&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ke.copy(N.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ke.copy(Ee.boundingSphere.center)),Ke.applyMatrix4(N.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ve)){const ze=Ee.groups;for(let it=0,ot=ze.length;it<ot;it++){const Ge=ze[it],yt=Ve[Ge.materialIndex];yt&&yt.visible&&S.push(N,Ee,yt,te,Ke.z,Ge)}}else Ve.visible&&S.push(N,Ee,Ve,te,Ke.z,null)}}const Te=N.children;for(let Ee=0,Ve=Te.length;Ee<Ve;Ee++)Ei(Te[Ee],X,te,ne)}function wr(N,X,te,ne){const q=N.opaque,Te=N.transmissive,Ee=N.transparent;y.setupLightsView(te),oe===!0&&Me.setGlobalState(A.clippingPlanes,te),ne&&Ze.viewport(z.copy(ne)),q.length>0&&Xi(q,X,te),Te.length>0&&Xi(Te,X,te),Ee.length>0&&Xi(Ee,X,te),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function Tr(N,X,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ne.id]===void 0&&(y.state.transmissionRenderTarget[ne.id]=new Zr(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?Va:Vi,minFilter:$r,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Te=y.state.transmissionRenderTarget[ne.id],Ee=ne.viewport||z;Te.setSize(Ee.z,Ee.w);const Ve=A.getRenderTarget();A.setRenderTarget(Te),A.getClearColor(de),he=A.getClearAlpha(),he<1&&A.setClearColor(16777215,.5),A.clear(),at&&tt.render(te);const ze=A.toneMapping;A.toneMapping=Sr;const it=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),y.setupLightsView(ne),oe===!0&&Me.setGlobalState(A.clippingPlanes,ne),Xi(N,te,ne),I.updateMultisampleRenderTarget(Te),I.updateRenderTargetMipmap(Te),vt.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Ge=0,yt=X.length;Ge<yt;Ge++){const Ct=X[Ge],xt=Ct.object,sn=Ct.geometry,ut=Ct.material,Ye=Ct.group;if(ut.side===Bi&&xt.layers.test(ne.layers)){const Qn=ut.side;ut.side=Ln,ut.needsUpdate=!0,Ya(xt,te,ne,sn,ut,Ye),ut.side=Qn,ut.needsUpdate=!0,ot=!0}}ot===!0&&(I.updateMultisampleRenderTarget(Te),I.updateRenderTargetMipmap(Te))}A.setRenderTarget(Ve),A.setClearColor(de,he),it!==void 0&&(ne.viewport=it),A.toneMapping=ze}function Xi(N,X,te){const ne=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Te=N.length;q<Te;q++){const Ee=N[q],Ve=Ee.object,ze=Ee.geometry,it=ne===null?Ee.material:ne,ot=Ee.group;Ve.layers.test(te.layers)&&Ya(Ve,X,te,ze,it,ot)}}function Ya(N,X,te,ne,q,Te){N.onBeforeRender(A,X,te,ne,q,Te),N.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),q.onBeforeRender(A,X,te,ne,N,Te),q.transparent===!0&&q.side===Bi&&q.forceSinglePass===!1?(q.side=Ln,q.needsUpdate=!0,A.renderBufferDirect(te,X,ne,q,N,Te),q.side=Mr,q.needsUpdate=!0,A.renderBufferDirect(te,X,ne,q,N,Te),q.side=Bi):A.renderBufferDirect(te,X,ne,q,N,Te),N.onAfterRender(A,X,te,ne,q,Te)}function Qr(N,X,te){X.isScene!==!0&&(X=qe);const ne=$e.get(N),q=y.state.lights,Te=y.state.shadowsArray,Ee=q.state.version,Ve=He.getParameters(N,q.state,Te,X,te),ze=He.getProgramCacheKey(Ve);let it=ne.programs;ne.environment=N.isMeshStandardMaterial?X.environment:null,ne.fog=X.fog,ne.envMap=(N.isMeshStandardMaterial?J:C).get(N.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&N.envMap===null?X.environmentRotation:N.envMapRotation,it===void 0&&(N.addEventListener("dispose",ct),it=new Map,ne.programs=it);let ot=it.get(ze);if(ot!==void 0){if(ne.currentProgram===ot&&ne.lightsStateVersion===Ee)return fi(N,Ve),ot}else Ve.uniforms=He.getUniforms(N),N.onBeforeCompile(Ve,A),ot=He.acquireProgram(Ve,ze),it.set(ze,ot),ne.uniforms=Ve.uniforms;const Ge=ne.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ge.clippingPlanes=Me.uniform),fi(N,Ve),ne.needsLights=Ol(N),ne.lightsStateVersion=Ee,ne.needsLights&&(Ge.ambientLightColor.value=q.state.ambient,Ge.lightProbe.value=q.state.probe,Ge.directionalLights.value=q.state.directional,Ge.directionalLightShadows.value=q.state.directionalShadow,Ge.spotLights.value=q.state.spot,Ge.spotLightShadows.value=q.state.spotShadow,Ge.rectAreaLights.value=q.state.rectArea,Ge.ltc_1.value=q.state.rectAreaLTC1,Ge.ltc_2.value=q.state.rectAreaLTC2,Ge.pointLights.value=q.state.point,Ge.pointLightShadows.value=q.state.pointShadow,Ge.hemisphereLights.value=q.state.hemi,Ge.directionalShadowMap.value=q.state.directionalShadowMap,Ge.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ge.spotShadowMap.value=q.state.spotShadowMap,Ge.spotLightMatrix.value=q.state.spotLightMatrix,Ge.spotLightMap.value=q.state.spotLightMap,Ge.pointShadowMap.value=q.state.pointShadowMap,Ge.pointShadowMatrix.value=q.state.pointShadowMatrix),ne.currentProgram=ot,ne.uniformsList=null,ot}function $a(N){if(N.uniformsList===null){const X=N.currentProgram.getUniforms();N.uniformsList=Rl.seqWithValue(X.seq,N.uniforms)}return N.uniformsList}function fi(N,X){const te=$e.get(N);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function Ka(N,X,te,ne,q){X.isScene!==!0&&(X=qe),I.resetTextureUnits();const Te=X.fog,Ee=ne.isMeshStandardMaterial?X.environment:null,Ve=F===null?A.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:qs,ze=(ne.isMeshStandardMaterial?J:C).get(ne.envMap||Ee),it=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ot=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ge=!!te.morphAttributes.position,yt=!!te.morphAttributes.normal,Ct=!!te.morphAttributes.color;let xt=Sr;ne.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(xt=A.toneMapping);const sn=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ut=sn!==void 0?sn.length:0,Ye=$e.get(ne),Qn=y.state.lights;if(oe===!0&&(Se===!0||N!==b)){const vn=N===b&&ne.id===L;Me.setState(ne,N,vn)}let Tt=!1;ne.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Qn.state.version||Ye.outputColorSpace!==Ve||q.isBatchedMesh&&Ye.batching===!1||!q.isBatchedMesh&&Ye.batching===!0||q.isBatchedMesh&&Ye.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ye.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ye.instancing===!1||!q.isInstancedMesh&&Ye.instancing===!0||q.isSkinnedMesh&&Ye.skinning===!1||!q.isSkinnedMesh&&Ye.skinning===!0||q.isInstancedMesh&&Ye.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ye.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ye.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ye.instancingMorph===!1&&q.morphTexture!==null||Ye.envMap!==ze||ne.fog===!0&&Ye.fog!==Te||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==it||Ye.vertexTangents!==ot||Ye.morphTargets!==Ge||Ye.morphNormals!==yt||Ye.morphColors!==Ct||Ye.toneMapping!==xt||Ye.morphTargetsCount!==ut)&&(Tt=!0):(Tt=!0,Ye.__version=ne.version);let an=Ye.currentProgram;Tt===!0&&(an=Qr(ne,X,q));let ei=!1,qt=!1,pi=!1;const Dt=an.getUniforms(),jn=Ye.uniforms;if(Ze.useProgram(an.program)&&(ei=!0,qt=!0,pi=!0),ne.id!==L&&(L=ne.id,qt=!0),ei||b!==N){Ze.buffers.depth.getReversed()?(ve.copy(N.projectionMatrix),T0(ve),A0(ve),Dt.setValue(Y,"projectionMatrix",ve)):Dt.setValue(Y,"projectionMatrix",N.projectionMatrix),Dt.setValue(Y,"viewMatrix",N.matrixWorldInverse);const Hn=Dt.map.cameraPosition;Hn!==void 0&&Hn.setValue(Y,Ie.setFromMatrixPosition(N.matrixWorld)),pt.logarithmicDepthBuffer&&Dt.setValue(Y,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Dt.setValue(Y,"isOrthographic",N.isOrthographicCamera===!0),b!==N&&(b=N,qt=!0,pi=!0)}if(q.isSkinnedMesh){Dt.setOptional(Y,q,"bindMatrix"),Dt.setOptional(Y,q,"bindMatrixInverse");const vn=q.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Dt.setValue(Y,"boneTexture",vn.boneTexture,I))}q.isBatchedMesh&&(Dt.setOptional(Y,q,"batchingTexture"),Dt.setValue(Y,"batchingTexture",q._matricesTexture,I),Dt.setOptional(Y,q,"batchingIdTexture"),Dt.setValue(Y,"batchingIdTexture",q._indirectTexture,I),Dt.setOptional(Y,q,"batchingColorTexture"),q._colorsTexture!==null&&Dt.setValue(Y,"batchingColorTexture",q._colorsTexture,I));const wi=te.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&nt.update(q,te,an),(qt||Ye.receiveShadow!==q.receiveShadow)&&(Ye.receiveShadow=q.receiveShadow,Dt.setValue(Y,"receiveShadow",q.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(jn.envMap.value=ze,jn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&X.environment!==null&&(jn.envMapIntensity.value=X.environmentIntensity),qt&&(Dt.setValue(Y,"toneMappingExposure",A.toneMappingExposure),Ye.needsLights&&Za(jn,pi),Te&&ne.fog===!0&&Ce.refreshFogUniforms(jn,Te),Ce.refreshMaterialUniforms(jn,ne,j,ue,y.state.transmissionRenderTarget[N.id]),Rl.upload(Y,$a(Ye),jn,I)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Rl.upload(Y,$a(Ye),jn,I),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Dt.setValue(Y,"center",q.center),Dt.setValue(Y,"modelViewMatrix",q.modelViewMatrix),Dt.setValue(Y,"normalMatrix",q.normalMatrix),Dt.setValue(Y,"modelMatrix",q.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const vn=ne.uniformsGroups;for(let Hn=0,En=vn.length;Hn<En;Hn++){const Ja=vn[Hn];W.update(Ja,an),W.bind(Ja,an)}}return an}function Za(N,X){N.ambientLightColor.needsUpdate=X,N.lightProbe.needsUpdate=X,N.directionalLights.needsUpdate=X,N.directionalLightShadows.needsUpdate=X,N.pointLights.needsUpdate=X,N.pointLightShadows.needsUpdate=X,N.spotLights.needsUpdate=X,N.spotLightShadows.needsUpdate=X,N.rectAreaLights.needsUpdate=X,N.hemisphereLights.needsUpdate=X}function Ol(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(N,X,te){$e.get(N.texture).__webglTexture=X,$e.get(N.depthTexture).__webglTexture=te;const ne=$e.get(N);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,X){const te=$e.get(N);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(N,X=0,te=0){F=N,k=X,D=te;let ne=!0,q=null,Te=!1,Ee=!1;if(N){const ze=$e.get(N);if(ze.__useDefaultFramebuffer!==void 0)Ze.bindFramebuffer(Y.FRAMEBUFFER,null),ne=!1;else if(ze.__webglFramebuffer===void 0)I.setupRenderTarget(N);else if(ze.__hasExternalTextures)I.rebindTextures(N,$e.get(N.texture).__webglTexture,$e.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const Ge=N.depthTexture;if(ze.__boundDepthTexture!==Ge){if(Ge!==null&&$e.has(Ge)&&(N.width!==Ge.image.width||N.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(N)}}const it=N.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ee=!0);const ot=$e.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(ot[X])?q=ot[X][te]:q=ot[X],Te=!0):N.samples>0&&I.useMultisampledRTT(N)===!1?q=$e.get(N).__webglMultisampledFramebuffer:Array.isArray(ot)?q=ot[te]:q=ot,z.copy(N.viewport),ie.copy(N.scissor),Q=N.scissorTest}else z.copy(O).multiplyScalar(j).floor(),ie.copy(re).multiplyScalar(j).floor(),Q=Le;if(Ze.bindFramebuffer(Y.FRAMEBUFFER,q)&&ne&&Ze.drawBuffers(N,q),Ze.viewport(z),Ze.scissor(ie),Ze.setScissorTest(Q),Te){const ze=$e.get(N.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+X,ze.__webglTexture,te)}else if(Ee){const ze=$e.get(N.texture),it=X||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ze.__webglTexture,te||0,it)}L=-1},this.readRenderTargetPixels=function(N,X,te,ne,q,Te,Ee){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=$e.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ve=Ve[Ee]),Ve){Ze.bindFramebuffer(Y.FRAMEBUFFER,Ve);try{const ze=N.texture,it=ze.format,ot=ze.type;if(!pt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=N.width-ne&&te>=0&&te<=N.height-q&&Y.readPixels(X,te,ne,q,lt.convert(it),lt.convert(ot),Te)}finally{const ze=F!==null?$e.get(F).__webglFramebuffer:null;Ze.bindFramebuffer(Y.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(N,X,te,ne,q,Te,Ee){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=$e.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ve=Ve[Ee]),Ve){const ze=N.texture,it=ze.format,ot=ze.type;if(!pt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=N.width-ne&&te>=0&&te<=N.height-q){Ze.bindFramebuffer(Y.FRAMEBUFFER,Ve);const Ge=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ge),Y.bufferData(Y.PIXEL_PACK_BUFFER,Te.byteLength,Y.STREAM_READ),Y.readPixels(X,te,ne,q,lt.convert(it),lt.convert(ot),0);const yt=F!==null?$e.get(F).__webglFramebuffer:null;Ze.bindFramebuffer(Y.FRAMEBUFFER,yt);const Ct=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await w0(Y,Ct,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ge),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Te),Y.deleteBuffer(Ge),Y.deleteSync(Ct),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,X=null,te=0){N.isTexture!==!0&&(ka("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,N=arguments[1]);const ne=Math.pow(2,-te),q=Math.floor(N.image.width*ne),Te=Math.floor(N.image.height*ne),Ee=X!==null?X.x:0,Ve=X!==null?X.y:0;I.setTexture2D(N,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,te,0,0,Ee,Ve,q,Te),Ze.unbindTexture()},this.copyTextureToTexture=function(N,X,te=null,ne=null,q=0){N.isTexture!==!0&&(ka("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,N=arguments[1],X=arguments[2],q=arguments[3]||0,te=null);let Te,Ee,Ve,ze,it,ot,Ge,yt,Ct;const xt=N.isCompressedTexture?N.mipmaps[q]:N.image;te!==null?(Te=te.max.x-te.min.x,Ee=te.max.y-te.min.y,Ve=te.isBox3?te.max.z-te.min.z:1,ze=te.min.x,it=te.min.y,ot=te.isBox3?te.min.z:0):(Te=xt.width,Ee=xt.height,Ve=xt.depth||1,ze=0,it=0,ot=0),ne!==null?(Ge=ne.x,yt=ne.y,Ct=ne.z):(Ge=0,yt=0,Ct=0);const sn=lt.convert(X.format),ut=lt.convert(X.type);let Ye;X.isData3DTexture?(I.setTexture3D(X,0),Ye=Y.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(I.setTexture2DArray(X,0),Ye=Y.TEXTURE_2D_ARRAY):(I.setTexture2D(X,0),Ye=Y.TEXTURE_2D),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,X.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,X.unpackAlignment);const Qn=Y.getParameter(Y.UNPACK_ROW_LENGTH),Tt=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),an=Y.getParameter(Y.UNPACK_SKIP_PIXELS),ei=Y.getParameter(Y.UNPACK_SKIP_ROWS),qt=Y.getParameter(Y.UNPACK_SKIP_IMAGES);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,xt.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,xt.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,ze),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,it),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,ot);const pi=N.isDataArrayTexture||N.isData3DTexture,Dt=X.isDataArrayTexture||X.isData3DTexture;if(N.isRenderTargetTexture||N.isDepthTexture){const jn=$e.get(N),wi=$e.get(X),vn=$e.get(jn.__renderTarget),Hn=$e.get(wi.__renderTarget);Ze.bindFramebuffer(Y.READ_FRAMEBUFFER,vn.__webglFramebuffer),Ze.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let En=0;En<Ve;En++)pi&&Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,$e.get(N).__webglTexture,q,ot+En),N.isDepthTexture?(Dt&&Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,$e.get(X).__webglTexture,q,Ct+En),Y.blitFramebuffer(ze,it,Te,Ee,Ge,yt,Te,Ee,Y.DEPTH_BUFFER_BIT,Y.NEAREST)):Dt?Y.copyTexSubImage3D(Ye,q,Ge,yt,Ct+En,ze,it,Te,Ee):Y.copyTexSubImage2D(Ye,q,Ge,yt,Ct+En,ze,it,Te,Ee);Ze.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Dt?N.isDataTexture||N.isData3DTexture?Y.texSubImage3D(Ye,q,Ge,yt,Ct,Te,Ee,Ve,sn,ut,xt.data):X.isCompressedArrayTexture?Y.compressedTexSubImage3D(Ye,q,Ge,yt,Ct,Te,Ee,Ve,sn,xt.data):Y.texSubImage3D(Ye,q,Ge,yt,Ct,Te,Ee,Ve,sn,ut,xt):N.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,q,Ge,yt,Te,Ee,sn,ut,xt.data):N.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,q,Ge,yt,xt.width,xt.height,sn,xt.data):Y.texSubImage2D(Y.TEXTURE_2D,q,Ge,yt,Te,Ee,sn,ut,xt);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Qn),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Tt),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,an),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,ei),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,qt),q===0&&X.generateMipmaps&&Y.generateMipmap(Ye),Ze.unbindTexture()},this.copyTextureToTexture3D=function(N,X,te=null,ne=null,q=0){return N.isTexture!==!0&&(ka("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ne=arguments[1]||null,N=arguments[2],X=arguments[3],q=arguments[4]||0),ka('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,X,te,ne,q)},this.initRenderTarget=function(N){$e.get(N).__webglFramebuffer===void 0&&I.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?I.setTextureCube(N,0):N.isData3DTexture?I.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?I.setTexture2DArray(N,0):I.setTexture2D(N,0),Ze.unbindTexture()},this.resetState=function(){k=0,D=0,F=null,Ze.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}class FE extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ng extends $s{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bm=new Ot,Xd=new pg,Ml=new Ul,El=new H;class OE extends Sn{constructor(e=new Jn,t=new Ng){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ml.copy(r.boundingSphere),Ml.applyMatrix4(o),Ml.radius+=c,e.ray.intersectsSphere(Ml)===!1)return;Bm.copy(o).invert(),Xd.copy(e.ray).applyMatrix4(Bm);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=r.index,_=r.attributes.position;if(m!==null){const x=Math.max(0,d.start),M=Math.min(m.count,d.start+d.count);for(let E=x,T=M;E<T;E++){const S=m.getX(E);El.fromBufferAttribute(_,S),zm(El,S,p,o,e,t,this)}}else{const x=Math.max(0,d.start),M=Math.min(_.count,d.start+d.count);for(let E=x,T=M;E<T;E++)El.fromBufferAttribute(_,E),zm(El,E,p,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function zm(s,e,t,r,o,c,d){const h=Xd.distanceSqToPoint(s);if(h<t){const p=new H;Xd.closestPointToPoint(s,p),p.applyMatrix4(r);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;c.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Gi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),c=0;t.push(0);for(let d=1;d<=e;d++)r=this.getPoint(d/e),c+=r.distanceTo(o),t.push(c),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let o=0;const c=r.length;let d;t?d=t:d=e*r[c-1];let h=0,p=c-1,m;for(;h<=p;)if(o=Math.floor(h+(p-h)/2),m=r[o]-d,m<0)h=o+1;else if(m>0)p=o-1;else{p=o;break}if(o=p,r[o]===d)return o/(c-1);const v=r[o],x=r[o+1]-v,M=(d-v)/x;return(o+M)/(c-1)}getTangent(e,t){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const d=this.getPoint(o),h=this.getPoint(c),p=t||(d.isVector2?new et:new H);return p.copy(h).sub(d).normalize(),p}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new H,o=[],c=[],d=[],h=new H,p=new Ot;for(let M=0;M<=e;M++){const E=M/e;o[M]=this.getTangentAt(E,new H)}c[0]=new H,d[0]=new H;let m=Number.MAX_VALUE;const v=Math.abs(o[0].x),_=Math.abs(o[0].y),x=Math.abs(o[0].z);v<=m&&(m=v,r.set(1,0,0)),_<=m&&(m=_,r.set(0,1,0)),x<=m&&r.set(0,0,1),h.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],h),d[0].crossVectors(o[0],c[0]);for(let M=1;M<=e;M++){if(c[M]=c[M-1].clone(),d[M]=d[M-1].clone(),h.crossVectors(o[M-1],o[M]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(fn(o[M-1].dot(o[M]),-1,1));c[M].applyMatrix4(p.makeRotationAxis(h,E))}d[M].crossVectors(o[M],c[M])}if(t===!0){let M=Math.acos(fn(c[0].dot(c[e]),-1,1));M/=e,o[0].dot(h.crossVectors(c[0],c[e]))>0&&(M=-M);for(let E=1;E<=e;E++)c[E].applyMatrix4(p.makeRotationAxis(o[E],M*E)),d[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:d}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Rg extends Gi{constructor(e=0,t=0,r=1,o=1,c=0,d=Math.PI*2,h=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=d,this.aClockwise=h,this.aRotation=p}getPoint(e,t=new et){const r=t,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const d=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(d?c=0:c=o),this.aClockwise===!0&&!d&&(c===o?c=-o:c=c-o);const h=this.aStartAngle+e*c;let p=this.aX+this.xRadius*Math.cos(h),m=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const v=Math.cos(this.aRotation),_=Math.sin(this.aRotation),x=p-this.aX,M=m-this.aY;p=x*v-M*_+this.aX,m=x*_+M*v+this.aY}return r.set(p,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class BE extends Rg{constructor(e,t,r,o,c,d){super(e,t,r,r,o,c,d),this.isArcCurve=!0,this.type="ArcCurve"}}function ih(){let s=0,e=0,t=0,r=0;function o(c,d,h,p){s=c,e=h,t=-3*c+3*d-2*h-p,r=2*c-2*d+h+p}return{initCatmullRom:function(c,d,h,p,m){o(d,h,m*(h-c),m*(p-d))},initNonuniformCatmullRom:function(c,d,h,p,m,v,_){let x=(d-c)/m-(h-c)/(m+v)+(h-d)/v,M=(h-d)/v-(p-d)/(v+_)+(p-h)/_;x*=v,M*=v,o(d,h,x,M)},calc:function(c){const d=c*c,h=d*c;return s+e*c+t*d+r*h}}}const wl=new H,Zu=new ih,Ju=new ih,Qu=new ih;class Pg extends Gi{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new H){const r=t,o=this.points,c=o.length,d=(c-(this.closed?0:1))*e;let h=Math.floor(d),p=d-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:p===0&&h===c-1&&(h=c-2,p=1);let m,v;this.closed||h>0?m=o[(h-1)%c]:(wl.subVectors(o[0],o[1]).add(o[0]),m=wl);const _=o[h%c],x=o[(h+1)%c];if(this.closed||h+2<c?v=o[(h+2)%c]:(wl.subVectors(o[c-1],o[c-2]).add(o[c-1]),v=wl),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(_),M),T=Math.pow(_.distanceToSquared(x),M),S=Math.pow(x.distanceToSquared(v),M);T<1e-4&&(T=1),E<1e-4&&(E=T),S<1e-4&&(S=T),Zu.initNonuniformCatmullRom(m.x,_.x,x.x,v.x,E,T,S),Ju.initNonuniformCatmullRom(m.y,_.y,x.y,v.y,E,T,S),Qu.initNonuniformCatmullRom(m.z,_.z,x.z,v.z,E,T,S)}else this.curveType==="catmullrom"&&(Zu.initCatmullRom(m.x,_.x,x.x,v.x,this.tension),Ju.initCatmullRom(m.y,_.y,x.y,v.y,this.tension),Qu.initCatmullRom(m.z,_.z,x.z,v.z,this.tension));return r.set(Zu.calc(p),Ju.calc(p),Qu.calc(p)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new H().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function jm(s,e,t,r,o){const c=(r-e)*.5,d=(o-t)*.5,h=s*s,p=s*h;return(2*t-2*r+c+d)*p+(-3*t+3*r-2*c-d)*h+c*s+t}function zE(s,e){const t=1-s;return t*t*e}function jE(s,e){return 2*(1-s)*s*e}function HE(s,e){return s*s*e}function Ba(s,e,t,r){return zE(s,e)+jE(s,t)+HE(s,r)}function VE(s,e){const t=1-s;return t*t*t*e}function GE(s,e){const t=1-s;return 3*t*t*s*e}function WE(s,e){return 3*(1-s)*s*s*e}function XE(s,e){return s*s*s*e}function za(s,e,t,r,o){return VE(s,e)+GE(s,t)+WE(s,r)+XE(s,o)}class qE extends Gi{constructor(e=new et,t=new et,r=new et,o=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new et){const r=t,o=this.v0,c=this.v1,d=this.v2,h=this.v3;return r.set(za(e,o.x,c.x,d.x,h.x),za(e,o.y,c.y,d.y,h.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class YE extends Gi{constructor(e=new H,t=new H,r=new H,o=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new H){const r=t,o=this.v0,c=this.v1,d=this.v2,h=this.v3;return r.set(za(e,o.x,c.x,d.x,h.x),za(e,o.y,c.y,d.y,h.y),za(e,o.z,c.z,d.z,h.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $E extends Gi{constructor(e=new et,t=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new et){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new et){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class KE extends Gi{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ZE extends Gi{constructor(e=new et,t=new et,r=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new et){const r=t,o=this.v0,c=this.v1,d=this.v2;return r.set(Ba(e,o.x,c.x,d.x),Ba(e,o.y,c.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lg extends Gi{constructor(e=new H,t=new H,r=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new H){const r=t,o=this.v0,c=this.v1,d=this.v2;return r.set(Ba(e,o.x,c.x,d.x),Ba(e,o.y,c.y,d.y),Ba(e,o.z,c.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class JE extends Gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new et){const r=t,o=this.points,c=(o.length-1)*e,d=Math.floor(c),h=c-d,p=o[d===0?d:d-1],m=o[d],v=o[d>o.length-2?o.length-1:d+1],_=o[d>o.length-3?o.length-1:d+2];return r.set(jm(h,p.x,m.x,v.x,_.x),jm(h,p.y,m.y,v.y,_.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new et().fromArray(o))}return this}}var QE=Object.freeze({__proto__:null,ArcCurve:BE,CatmullRomCurve3:Pg,CubicBezierCurve:qE,CubicBezierCurve3:YE,EllipseCurve:Rg,LineCurve:$E,LineCurve3:KE,QuadraticBezierCurve:ZE,QuadraticBezierCurve3:Lg,SplineCurve:JE});class rh extends Jn{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const c=[],d=[];h(o),m(r),v(),this.setAttribute("position",new pn(c,3)),this.setAttribute("normal",new pn(c.slice(),3)),this.setAttribute("uv",new pn(d,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function h(R){const P=new H,A=new H,G=new H;for(let k=0;k<t.length;k+=3)M(t[k+0],P),M(t[k+1],A),M(t[k+2],G),p(P,A,G,R)}function p(R,P,A,G){const k=G+1,D=[];for(let F=0;F<=k;F++){D[F]=[];const L=R.clone().lerp(A,F/k),b=P.clone().lerp(A,F/k),z=k-F;for(let ie=0;ie<=z;ie++)ie===0&&F===k?D[F][ie]=L:D[F][ie]=L.clone().lerp(b,ie/z)}for(let F=0;F<k;F++)for(let L=0;L<2*(k-F)-1;L++){const b=Math.floor(L/2);L%2===0?(x(D[F][b+1]),x(D[F+1][b]),x(D[F][b])):(x(D[F][b+1]),x(D[F+1][b+1]),x(D[F+1][b]))}}function m(R){const P=new H;for(let A=0;A<c.length;A+=3)P.x=c[A+0],P.y=c[A+1],P.z=c[A+2],P.normalize().multiplyScalar(R),c[A+0]=P.x,c[A+1]=P.y,c[A+2]=P.z}function v(){const R=new H;for(let P=0;P<c.length;P+=3){R.x=c[P+0],R.y=c[P+1],R.z=c[P+2];const A=S(R)/2/Math.PI+.5,G=y(R)/Math.PI+.5;d.push(A,1-G)}E(),_()}function _(){for(let R=0;R<d.length;R+=6){const P=d[R+0],A=d[R+2],G=d[R+4],k=Math.max(P,A,G),D=Math.min(P,A,G);k>.9&&D<.1&&(P<.2&&(d[R+0]+=1),A<.2&&(d[R+2]+=1),G<.2&&(d[R+4]+=1))}}function x(R){c.push(R.x,R.y,R.z)}function M(R,P){const A=R*3;P.x=e[A+0],P.y=e[A+1],P.z=e[A+2]}function E(){const R=new H,P=new H,A=new H,G=new H,k=new et,D=new et,F=new et;for(let L=0,b=0;L<c.length;L+=9,b+=6){R.set(c[L+0],c[L+1],c[L+2]),P.set(c[L+3],c[L+4],c[L+5]),A.set(c[L+6],c[L+7],c[L+8]),k.set(d[b+0],d[b+1]),D.set(d[b+2],d[b+3]),F.set(d[b+4],d[b+5]),G.copy(R).add(P).add(A).divideScalar(3);const z=S(G);T(k,b+0,R,z),T(D,b+2,P,z),T(F,b+4,A,z)}}function T(R,P,A,G){G<0&&R.x===1&&(d[P]=R.x-1),A.x===0&&A.z===0&&(d[P]=G/2/Math.PI+.5)}function S(R){return Math.atan2(R.z,-R.x)}function y(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rh(e.vertices,e.indices,e.radius,e.details)}}class sh extends rh{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,c,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new sh(e.radius,e.detail)}}class ja extends Jn{constructor(e=1,t=.4,r=12,o=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:c},r=Math.floor(r),o=Math.floor(o);const d=[],h=[],p=[],m=[],v=new H,_=new H,x=new H;for(let M=0;M<=r;M++)for(let E=0;E<=o;E++){const T=E/o*c,S=M/r*Math.PI*2;_.x=(e+t*Math.cos(S))*Math.cos(T),_.y=(e+t*Math.cos(S))*Math.sin(T),_.z=t*Math.sin(S),h.push(_.x,_.y,_.z),v.x=e*Math.cos(T),v.y=e*Math.sin(T),x.subVectors(_,v).normalize(),p.push(x.x,x.y,x.z),m.push(E/o),m.push(M/r)}for(let M=1;M<=r;M++)for(let E=1;E<=o;E++){const T=(o+1)*M+E-1,S=(o+1)*(M-1)+E-1,y=(o+1)*(M-1)+E,R=(o+1)*M+E;d.push(T,S,R),d.push(S,y,R)}this.setIndex(d),this.setAttribute("position",new pn(h,3)),this.setAttribute("normal",new pn(p,3)),this.setAttribute("uv",new pn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ah extends Jn{constructor(e=new Lg(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,r=1,o=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:c};const d=e.computeFrenetFrames(t,c);this.tangents=d.tangents,this.normals=d.normals,this.binormals=d.binormals;const h=new H,p=new H,m=new et;let v=new H;const _=[],x=[],M=[],E=[];T(),this.setIndex(E),this.setAttribute("position",new pn(_,3)),this.setAttribute("normal",new pn(x,3)),this.setAttribute("uv",new pn(M,2));function T(){for(let P=0;P<t;P++)S(P);S(c===!1?t:0),R(),y()}function S(P){v=e.getPointAt(P/t,v);const A=d.normals[P],G=d.binormals[P];for(let k=0;k<=o;k++){const D=k/o*Math.PI*2,F=Math.sin(D),L=-Math.cos(D);p.x=L*A.x+F*G.x,p.y=L*A.y+F*G.y,p.z=L*A.z+F*G.z,p.normalize(),x.push(p.x,p.y,p.z),h.x=v.x+r*p.x,h.y=v.y+r*p.y,h.z=v.z+r*p.z,_.push(h.x,h.y,h.z)}}function y(){for(let P=1;P<=t;P++)for(let A=1;A<=o;A++){const G=(o+1)*(P-1)+(A-1),k=(o+1)*P+(A-1),D=(o+1)*P+A,F=(o+1)*(P-1)+A;E.push(G,k,F),E.push(k,D,F)}}function R(){for(let P=0;P<=t;P++)for(let A=0;A<=o;A++)m.x=P/t,m.y=A/o,M.push(m.x,m.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ah(new QE[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ia extends $s{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cg,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dg extends Sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ed=new Ot,Hm=new H,Vm=new H;class ew{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new th,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Hm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hm),Vm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vm),t.updateMatrixWorld(),ed.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ed),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ed)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Gm=new Ot,Ua=new H,td=new H;class tw extends ew{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Ua.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ua),td.copy(r.position),td.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(td),r.updateMatrixWorld(),o.makeTranslation(-Ua.x,-Ua.y,-Ua.z),Gm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gm)}}class nd extends Dg{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new tw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class nw extends Dg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class iw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wm(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yd);function rw(){const s=st.useRef(null);return st.useEffect(()=>{const e=s.current;if(!e)return;const t=new FE,r=new zn(60,e.clientWidth/e.clientHeight,.1,1e3);r.position.z=7.5;const o=new kE({alpha:!0,antialias:!0,powerPreference:"high-performance"});o.setSize(e.clientWidth,e.clientHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(o.domElement);const c=new nw(16777215,.9);t.add(c);const d=new nd(8141549,10,40);d.position.set(6,5,7),t.add(d);const h=new nd(440020,9,40);h.position.set(-6,-5,7),t.add(h);const p=new nd(1096065,4,30);p.position.set(0,4,5),t.add(p);const m=new Oa;t.add(m);const v=new ja(3.3,.09,16,100),_=new Ia({color:8141549,emissive:4988309,emissiveIntensity:.6,metalness:.9,roughness:.15}),x=new Pn(v,_);m.add(x);const M=new ja(2.6,.07,16,80),E=new Ia({color:440020,emissive:561586,emissiveIntensity:.7,metalness:.95,roughness:.1}),T=new Pn(M,E);T.rotation.x=Math.PI/4,m.add(T);const S=new ja(1.9,.05,16,60),y=new Ia({color:2450411,emissive:1982639,emissiveIntensity:.5,metalness:.85,roughness:.2}),R=new Pn(S,y);R.rotation.y=Math.PI/3,m.add(R);const P=new sh(.85,1),A=new Ia({color:16317180,emissive:8141549,emissiveIntensity:.6,roughness:.05,metalness:.95,wireframe:!0}),G=new Pn(P,A);m.add(G);const k=new Pg([new H(-4,-2.5,-2),new H(-2,-.5,1),new H(0,1.5,-1),new H(2,0,2),new H(4,-1.8,-1)]),D=new ah(k,70,.04,8,!1),F=new Ia({color:440020,emissive:440020,emissiveIntensity:.8,transparent:!0,opacity:.65}),L=new Pn(D,F);t.add(L);const b=1200,z=new Jn,ie=new Float32Array(b*3),Q=new Float32Array(b*3),de=new St(8141549),he=new St(440020),ce=new St(16777215);for(let qe=0;qe<b*3;qe+=3){ie[qe]=(Math.random()-.5)*32,ie[qe+1]=(Math.random()-.5)*24,ie[qe+2]=(Math.random()-.5)*24;const at=Math.random(),_t=at>.6?he:at>.25?de:ce;Q[qe]=_t.r,Q[qe+1]=_t.g,Q[qe+2]=_t.b}z.setAttribute("position",new Zn(ie,3)),z.setAttribute("color",new Zn(Q,3));const ue=new Ng({size:.055,vertexColors:!0,transparent:!0,opacity:.75,blending:rd}),j=new OE(z,ue);t.add(j);let le=0,se=0,O=0,re=0;const Le=qe=>{const{innerWidth:at,innerHeight:_t}=window;O=(qe.clientX/at-.5)*2,re=-(qe.clientY/_t-.5)*2};window.addEventListener("mousemove",Le);let Z=0,oe=0;const Se=()=>{Z=window.scrollY};window.addEventListener("scroll",Se,{passive:!0});const ve=()=>{if(!e)return;const qe=e.clientWidth,at=e.clientHeight;r.aspect=qe/at,r.updateProjectionMatrix(),o.setSize(qe,at),o.setPixelRatio(Math.min(window.devicePixelRatio,2))};window.addEventListener("resize",ve);let Ae;const Ie=new iw,Ke=()=>{Ae=requestAnimationFrame(Ke);const qe=Ie.getElapsedTime();le+=(O-le)*.045,se+=(re-se)*.045;const at=oe;oe+=(Z-oe)*.06;const _t=oe-at;x.rotation.x=qe*.35+oe*.001,x.rotation.y=qe*.25,T.rotation.y=qe*.45+oe*.0015,T.rotation.z=qe*.35,R.rotation.x=-qe*.4,R.rotation.z=-qe*.3+oe*.001,G.rotation.x=qe*.6,G.rotation.y=qe*.7,m.rotation.y=le*.85,m.rotation.x=-se*.65-_t*.02,m.rotation.z=oe*8e-4,m.position.x=le*.6,m.position.y=se*.45-oe*.002,r.position.y=-oe*.0015,r.rotation.x=-_t*.004,L.rotation.z=Math.sin(qe*.5)*.15+oe*.001,L.position.y=Math.cos(qe*.7)*.2-oe*.002,j.rotation.y=qe*.035+oe*5e-4,j.rotation.x=qe*.025,d.intensity=8+Math.sin(qe*2)*3,h.intensity=7+Math.cos(qe*2)*3,o.render(t,r)};return Ke(),()=>{window.removeEventListener("mousemove",Le),window.removeEventListener("scroll",Se),window.removeEventListener("resize",ve),cancelAnimationFrame(Ae),v.dispose(),_.dispose(),M.dispose(),E.dispose(),S.dispose(),y.dispose(),P.dispose(),A.dispose(),D.dispose(),F.dispose(),z.dispose(),ue.dispose(),o.dispose(),e&&o.domElement&&e.removeChild(o.domElement)}},[]),l.jsx("div",{ref:s,className:"three-canvas-container","aria-hidden":"true"})}const Xm=["Cinematic Video Editor","Influential Content Creator","Viral Reel Specialist","Brand Collab Partner"];function sw(){const[s,e]=st.useState(""),[t,r]=st.useState(0),[o,c]=st.useState(!1),[d,h]=st.useState(100),[p,m]=st.useState(0),[v,_]=st.useState(0),[x,M]=st.useState(0),[E,T]=st.useState(0);return st.useEffect(()=>{const S=Xm[t],y=setTimeout(()=>{o?(e(S.substring(0,s.length-1)),h(45),s===""&&(c(!1),r(R=>(R+1)%Xm.length))):(e(S.substring(0,s.length+1)),h(80),s===S&&setTimeout(()=>c(!0),1800))},d);return()=>clearTimeout(y)},[s,o,t,d]),st.useEffect(()=>{let S=0;const y=40,R=setInterval(()=>{S++;const P=S/y;m(Math.round(600*P)),_(Math.round(1500*P)),M(Math.round(48*P)),T(Math.round(50*P)),S>=y&&clearInterval(R)},30);return()=>clearInterval(R)},[]),l.jsxs("section",{className:"hero-section",id:"hero",children:[l.jsx(rw,{}),l.jsx("div",{className:"hero-bg","aria-hidden":"true"}),l.jsx("div",{className:"hero-radial-glow"}),l.jsx("div",{className:"hero-container",children:l.jsxs("div",{className:"hero-layout-grid",children:[l.jsxs("div",{className:"hero-left-column",children:[l.jsxs("div",{className:"hero-badge-pill",children:[l.jsxs("div",{className:"soundwave-equalizer","aria-hidden":"true",children:[l.jsx("span",{}),l.jsx("span",{}),l.jsx("span",{}),l.jsx("span",{})]}),l.jsx("span",{className:"badge-category-text",children:"VIDEO EDITOR • CONTENT CREATOR"}),l.jsxs("span",{className:"hero-pulse-status",children:[l.jsx("span",{className:"pulse-dot"})," Available"]})]}),l.jsxs("h1",{className:"hero-editorial-title",children:["I am a ",l.jsx("br",{}),l.jsxs("span",{className:"gradient-text typewriter-text",children:[s,l.jsx("span",{className:"typewriter-cursor",children:"|"})]})]}),l.jsx("p",{className:"hero-editorial-subtitle",children:"Transforming raw footage into scroll-stopping stories for creators and clients, while delivering high-converting paid promotions and sponsored collaborations for brands."}),l.jsxs("div",{className:"hero-ctas-editorial",children:[l.jsxs("a",{href:"#portfolio",className:"btn btn-primary pulse-on-hover btn-hero-primary",children:[l.jsx("span",{className:"btn-icon-wrapper",children:l.jsx("i",{className:"fa-solid fa-play"})}),l.jsx("span",{children:"View Showreels"})]}),l.jsxs("a",{href:"https://wa.me/919360870164?text=Hi%20Bikash!%20I%20want%20to%20collaborate%20for%20a%20Paid%20Promotion%20/%20Brand%20Sponsorship.",target:"_blank",rel:"noopener noreferrer",className:"btn btn-accent pulse-on-hover btn-hero-glass",children:[l.jsx("i",{className:"fa-solid fa-handshake"}),l.jsx("span",{children:"Brand Collabs & Promo"})]}),l.jsxs("a",{href:"#contact",className:"btn btn-secondary btn-hero-subtle",children:[l.jsx("i",{className:"fa-solid fa-envelope"}),l.jsx("span",{children:"Contact Me"})]})]}),l.jsxs("div",{className:"hero-editorial-stats",children:[l.jsxs("div",{className:"stat-editorial-item",children:[l.jsxs("span",{className:"stat-val",children:["₹",p]}),l.jsx("span",{className:"stat-desc",children:"Reel Edit Rate"})]}),l.jsxs("div",{className:"stat-editorial-item",children:[l.jsx("span",{className:"stat-val",children:v>=1e3?"₹1.5k":`₹${v}`}),l.jsx("span",{className:"stat-desc",children:"Brand Collab Post"})]}),l.jsxs("div",{className:"stat-editorial-item",children:[l.jsxs("span",{className:"stat-val",children:[x,"h"]}),l.jsx("span",{className:"stat-desc",children:"Delivery Turnaround"})]}),l.jsxs("div",{className:"stat-editorial-item",children:[l.jsxs("span",{className:"stat-val",children:[E,"K+"]}),l.jsx("span",{className:"stat-desc",children:"Monthly Impressions"})]})]}),l.jsx("div",{className:"hero-scroll-explore",children:l.jsxs("a",{href:"#what-i-do",className:"scroll-explore-link","aria-label":"Scroll to explore",children:[l.jsx("div",{className:"mouse-icon-editorial",children:l.jsx("div",{className:"wheel-editorial"})}),l.jsx("span",{className:"scroll-explore-label",children:"SCROLL TO EXPLORE"})]})})]}),l.jsx("div",{className:"hero-right-visual",children:l.jsxs("div",{className:"hero-visual-composition",children:[l.jsx("div",{className:"hero-media-frame",children:l.jsxs("div",{className:"hero-media-inner",children:[l.jsx("img",{src:"assets/hero.jpg",alt:"Bikash Suna - Professional Video Editor Studio",className:"hero-media-img"}),l.jsx("div",{className:"hero-media-vignette"}),l.jsxs("div",{className:"camera-frame-corners","aria-hidden":"true",children:[l.jsx("span",{className:"corner top-left"}),l.jsx("span",{className:"corner top-right"}),l.jsx("span",{className:"corner bottom-left"}),l.jsx("span",{className:"corner bottom-right"})]})]})}),l.jsxs("div",{className:"hero-timeline-deck","aria-label":"Video Editor Master Timeline",children:[l.jsxs("div",{className:"timeline-deck-header",children:[l.jsxs("div",{className:"timeline-deck-left",children:[l.jsxs("span",{className:"rec-indicator",children:[l.jsx("span",{className:"rec-dot"})," LIVE TIMELINE"]}),l.jsx("span",{className:"sequence-name",children:"BIKASH_MASTER_CUT_4K.prproj"})]}),l.jsxs("div",{className:"timeline-deck-right",children:[l.jsx("span",{className:"timecode-badge",children:"00:04:18:24"}),l.jsx("span",{className:"codec-chip",children:"PRORES 422 HQ"}),l.jsx("span",{className:"fps-chip",children:"4K • 60FPS"})]})]}),l.jsxs("div",{className:"timeline-tracks-area",children:[l.jsxs("div",{className:"timeline-playhead","aria-hidden":"true",children:[l.jsx("div",{className:"playhead-cap"}),l.jsx("div",{className:"playhead-line"})]}),l.jsxs("div",{className:"timeline-track-row",children:[l.jsx("div",{className:"track-label",children:"V2"}),l.jsxs("div",{className:"track-lane",children:[l.jsxs("div",{className:"clip-block clip-speedramp",style:{width:"44%",marginLeft:"10%"},children:[l.jsx("i",{className:"fa-solid fa-bolt"}),l.jsx("span",{children:"Speed Ramp (400% → 40%)"}),l.jsx("div",{className:"keyframe-diamond"})]}),l.jsxs("div",{className:"clip-block clip-lut",style:{width:"40%",marginLeft:"4%"},children:[l.jsx("i",{className:"fa-solid fa-wand-magic-sparkles"}),l.jsx("span",{children:"Teal & Orange 3D LUT"})]})]})]}),l.jsxs("div",{className:"timeline-track-row",children:[l.jsx("div",{className:"track-label",children:"V1"}),l.jsxs("div",{className:"track-lane",children:[l.jsxs("div",{className:"clip-block clip-main clip-1",style:{width:"23%"},children:[l.jsx("img",{src:"assets/reel.jpg",alt:"",className:"clip-thumb-mini"}),l.jsx("span",{children:"01_Hook_Cut"})]}),l.jsxs("div",{className:"clip-block clip-main clip-2",style:{width:"31%",marginLeft:"3px"},children:[l.jsx("img",{src:"assets/hero.jpg",alt:"",className:"clip-thumb-mini"}),l.jsx("span",{children:"02_Hero_Cinematic"})]}),l.jsxs("div",{className:"clip-block clip-main clip-3",style:{width:"26%",marginLeft:"3px"},children:[l.jsx("img",{src:"assets/album.jpg",alt:"",className:"clip-thumb-mini"}),l.jsx("span",{children:"03_B-Roll_Rhythm"})]}),l.jsxs("div",{className:"clip-block clip-main clip-4",style:{width:"18%",marginLeft:"3px"},children:[l.jsx("img",{src:"assets/profile.jpg",alt:"",className:"clip-thumb-mini"}),l.jsx("span",{children:"04_Outro"})]})]})]}),l.jsxs("div",{className:"timeline-track-row audio-row",children:[l.jsx("div",{className:"track-label",children:"A1"}),l.jsxs("div",{className:"track-lane audio-lane",children:[l.jsxs("div",{className:"audio-waveform-block",style:{width:"56%"},children:[l.jsx("svg",{className:"waveform-svg",viewBox:"0 0 200 24",preserveAspectRatio:"none",children:l.jsx("path",{d:"M0,12 L5,8 L10,16 L15,4 L20,20 L25,7 L30,17 L35,3 L40,21 L45,6 L50,18 L55,5 L60,19 L65,8 L70,16 L75,4 L80,20 L85,7 L90,17 L95,5 L100,19 L105,8 L110,16 L115,2 L120,22 L125,6 L130,18 L135,5 L140,19 L145,8 L150,16 L155,4 L160,20 L165,7 L170,17 L175,5 L180,19 L185,8 L190,16 L195,10 L200,12",fill:"none",stroke:"#06b6d4",strokeWidth:"1.8"})}),l.jsx("span",{className:"audio-title",children:"Dialogue_Master.wav"})]}),l.jsxs("div",{className:"audio-waveform-block sfx-block",style:{width:"41%",marginLeft:"2%"},children:[l.jsx("svg",{className:"waveform-svg sfx-wave",viewBox:"0 0 150 24",preserveAspectRatio:"none",children:l.jsx("path",{d:"M0,12 L10,12 L20,6 L30,18 L40,4 L50,20 L60,8 L70,16 L80,12 L100,12 L110,5 L120,19 L130,12 L150,12",fill:"none",stroke:"#c084fc",strokeWidth:"1.8"})}),l.jsx("span",{className:"audio-title",children:"SFX_Impact_Riser"})]})]})]})]}),l.jsxs("div",{className:"timeline-deck-footer",children:[l.jsxs("div",{className:"timeline-tools-dock",children:[l.jsx("span",{className:"tool-btn active",title:"Selection Tool (V)",children:l.jsx("i",{className:"fa-solid fa-arrow-pointer"})}),l.jsx("span",{className:"tool-btn",title:"Razor Cut Tool (C)",children:l.jsx("i",{className:"fa-solid fa-scissors"})}),l.jsx("span",{className:"tool-btn",title:"Ripple Edit (B)",children:l.jsx("i",{className:"fa-solid fa-arrows-left-right"})}),l.jsx("span",{className:"tool-btn",title:"Keyframe Curve (P)",children:l.jsx("i",{className:"fa-solid fa-bezier-curve"})})]}),l.jsxs("div",{className:"timeline-pipeline-badges",children:[l.jsxs("span",{className:"pipeline-step",children:[l.jsx("i",{className:"fa-solid fa-check"})," INGEST"]}),l.jsx("span",{className:"pipeline-arrow",children:"→"}),l.jsxs("span",{className:"pipeline-step active",children:[l.jsx("i",{className:"fa-solid fa-wand-magic-sparkles"})," COLOR GRADE"]}),l.jsx("span",{className:"pipeline-arrow",children:"→"}),l.jsxs("span",{className:"pipeline-step",children:[l.jsx("i",{className:"fa-solid fa-volume-high"})," SFX"]}),l.jsx("span",{className:"pipeline-arrow",children:"→"}),l.jsxs("span",{className:"pipeline-step",children:[l.jsx("i",{className:"fa-solid fa-film"})," 4K EXPORT"]})]})]})]})]})})]})})]})}const id=[{icon:"fa-clapperboard",text:"Cinematic 4K Editing"},{icon:"fa-bolt",text:"Velocity Curves & Speed Ramps"},{icon:"fa-closed-captioning",text:"Kinetic Typography & Captions"},{icon:"fa-wand-magic-sparkles",text:"Color Grading & LUTs"},{icon:"fa-volume-high",text:"Sound Design & SFX Mastering"},{icon:"fa-handshake",text:"Brand Collabs & Sponsored Reels"},{icon:"fa-fire",text:"Viral Reels & Shorts"},{icon:"fa-layer-group",text:"CapCut & Premiere Pro Specialist"}];function aw(){return l.jsx("div",{className:"scrolling-ticker-wrapper","aria-hidden":"true",children:l.jsx("div",{className:"scrolling-ticker-track",children:[...id,...id,...id].map((s,e)=>l.jsxs("div",{className:"ticker-item",children:[l.jsx("i",{className:`fa-solid ${s.icon} ticker-icon`}),l.jsx("span",{className:"ticker-text",children:s.text}),l.jsx("span",{className:"ticker-dot",children:"✦"})]},e))})})}function ow(){return l.jsxs("section",{className:"pillars-section section-padding",id:"what-i-do",children:[l.jsx("div",{className:"pillars-ambient-glow glow-purple-left"}),l.jsx("div",{className:"pillars-ambient-glow glow-cyan-right"}),l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-header scroll-reveal",children:[l.jsxs("div",{className:"section-subtitle-pill pill-purple-gradient",children:[l.jsx("i",{className:"fa-solid fa-layer-group text-purple"}),l.jsx("span",{children:"DUAL SUPERPOWERS"})]}),l.jsx("h2",{className:"section-title",children:"Two Passions. One Powerful Creator."}),l.jsx("div",{className:"title-underline-laser"}),l.jsx("p",{className:"section-description-centered",children:"Whether you need a high-end cinematic video editor to transform your raw footage or an authentic content creator to promote your brand to an engaged audience — I bring both worlds together."}),l.jsxs("div",{className:"synergy-advantage-pill",children:[l.jsx("span",{className:"synergy-pulse-dot"}),l.jsxs("span",{className:"synergy-text",children:[l.jsx("strong",{children:"The 2-in-1 Advantage:"})," Scripted, 4K Mastered & Published by the Same Creator"]})]})]}),l.jsxs("div",{className:"pillars-grid",children:[l.jsxs("div",{className:"pillar-card-premium editor-pillar-premium stagger-1 scroll-reveal",children:[l.jsx("div",{className:"card-top-laser-bar laser-purple"}),l.jsxs("div",{className:"pillar-card-header",children:[l.jsxs("div",{className:"pillar-header-top",children:[l.jsxs("span",{className:"pillar-badge-luxury badge-purple",children:[l.jsx("i",{className:"fa-solid fa-film"})," POST-PRODUCTION"]}),l.jsxs("span",{className:"pillar-metric-chip chip-purple",children:[l.jsx("i",{className:"fa-solid fa-scissors"})," 120+ Edits Delivered"]})]}),l.jsxs("div",{className:"pillar-title-row",children:[l.jsxs("div",{className:"pillar-icon-orb orb-purple",children:[l.jsx("i",{className:"fa-solid fa-clapperboard"}),l.jsx("span",{className:"orb-ambient-halo"})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"pillar-title",children:"The Video Editor"}),l.jsx("span",{className:"pillar-role-subtitle",children:"Retention-Obsessed Storytelling"})]})]})]}),l.jsx("p",{className:"pillar-desc",children:"Transforming raw, unpolished clips into scroll-stopping visual narratives that grip viewer attention from the first second and keep watch times high."}),l.jsx("div",{className:"pillar-divider"}),l.jsxs("div",{className:"pillar-features-suite",children:[l.jsxs("div",{className:"feature-card-item",children:[l.jsx("div",{className:"feature-icon-badge badge-purple-glow",children:l.jsx("i",{className:"fa-solid fa-bolt text-purple"})}),l.jsxs("div",{className:"feature-info",children:[l.jsx("h4",{className:"feature-heading",children:"Velocity Curves & Speed Ramping"}),l.jsx("p",{className:"feature-detail",children:"Perfectly timed cut transitions matching rhythmic musical beats and motion cadence."})]})]}),l.jsxs("div",{className:"feature-card-item",children:[l.jsx("div",{className:"feature-icon-badge badge-cyan-glow",children:l.jsx("i",{className:"fa-solid fa-closed-captioning text-cyan"})}),l.jsxs("div",{className:"feature-info",children:[l.jsx("h4",{className:"feature-heading",children:"Kinetic Typography & Captions"}),l.jsx("p",{className:"feature-detail",children:"Dynamic word-by-word animations in high-converting modern creator styles."})]})]}),l.jsxs("div",{className:"feature-card-item",children:[l.jsx("div",{className:"feature-icon-badge badge-purple-glow",children:l.jsx("i",{className:"fa-solid fa-wand-magic-sparkles text-purple"})}),l.jsxs("div",{className:"feature-info",children:[l.jsx("h4",{className:"feature-heading",children:"Cinematic LUT Color Grading"}),l.jsx("p",{className:"feature-detail",children:"Rich filmic contrast, balanced skin tones, and professional Hollywood palettes."})]})]}),l.jsxs("div",{className:"feature-card-item",children:[l.jsx("div",{className:"feature-icon-badge badge-cyan-glow",children:l.jsx("i",{className:"fa-solid fa-volume-high text-cyan"})}),l.jsxs("div",{className:"feature-info",children:[l.jsx("h4",{className:"feature-heading",children:"Multi-Track Sound Design"}),l.jsx("p",{className:"feature-detail",children:"Immersive acoustic whooshes, risers, bass impacts, and clean vocal mastering."})]})]})]}),l.jsxs("div",{className:"pillar-footer-suite",children:[l.jsxs("div",{className:"tools-badges-dock",children:[l.jsxs("span",{className:"tool-chip",children:[l.jsx("i",{className:"fa-solid fa-scissors text-purple"})," CapCut Pro"]}),l.jsxs("span",{className:"tool-chip",children:[l.jsx("i",{className:"fa-solid fa-sliders text-cyan"})," Premiere Pro"]}),l.jsxs("span",{className:"tool-chip",children:[l.jsx("i",{className:"fa-solid fa-wand-sparkles text-purple"})," After Effects"]})]}),l.jsxs("a",{href:"#services",className:"pillar-cta-link link-purple",children:[l.jsx("span",{children:"View Editing Rates"}),l.jsx("i",{className:"fa-solid fa-arrow-right"})]})]}),l.jsx("div",{className:"pillar-bottom-glow-bar glow-purple"})]}),l.jsxs("div",{className:"pillar-card-premium creator-pillar-premium stagger-2 scroll-reveal",children:[l.jsx("div",{className:"card-top-laser-bar laser-cyan"}),l.jsxs("div",{className:"pillar-card-header",children:[l.jsxs("div",{className:"pillar-header-top",children:[l.jsxs("span",{className:"pillar-badge-luxury badge-cyan",children:[l.jsx("i",{className:"fa-solid fa-bullhorn"})," INFLUENCE & REACH"]}),l.jsxs("span",{className:"pillar-metric-chip chip-cyan",children:[l.jsx("i",{className:"fa-brands fa-instagram"})," 50K+ Reach"]})]}),l.jsxs("div",{className:"pillar-title-row",children:[l.jsxs("div",{className:"pillar-icon-orb orb-cyan",children:[l.jsx("i",{className:"fa-solid fa-bullhorn"}),l.jsx("span",{className:"orb-ambient-halo"})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"pillar-title",children:"The Content Creator"}),l.jsx("span",{className:"pillar-role-subtitle",children:"Authentic Audience Advocacy"})]})]})]}),l.jsx("p",{className:"pillar-desc",children:"Building authentic trust with a passionate digital audience. Helping brands, apps, and startups reach targeted viewers through seamless sponsored integrations."}),l.jsx("div",{className:"pillar-divider"}),l.jsxs("div",{className:"pillar-features-suite",children:[l.jsxs("div",{className:"feature-card-item",children:[l.jsx("div",{className:"feature-icon-badge badge-cyan-glow",children:l.jsx("i",{className:"fa-solid fa-handshake text-cyan"})}),l.jsxs("div",{className:"feature-info",children:[l.jsx("h4",{className:"feature-heading",children:"Dedicated Sponsored Reels"}),l.jsx("p",{className:"feature-detail",children:"Custom high-energy hook scripting, full 4K video edit, and official co-author tag."})]})]}),l.jsxs("div",{className:"feature-card-item",children:[l.jsx("div",{className:"feature-icon-badge badge-blue-glow",children:l.jsx("i",{className:"fa-solid fa-box-open text-blue"})}),l.jsxs("div",{className:"feature-info",children:[l.jsx("h4",{className:"feature-heading",children:"Product Showcases & Unboxings"}),l.jsx("p",{className:"feature-detail",children:"Authentic reviews, real-world testing, and high-impact feature highlights."})]})]}),l.jsxs("div",{className:"feature-card-item",children:[l.jsx("div",{className:"feature-icon-badge badge-cyan-glow",children:l.jsx("i",{className:"fa-solid fa-share-nodes text-cyan"})}),l.jsxs("div",{className:"feature-info",children:[l.jsx("h4",{className:"feature-heading",children:"Story Promotions & Link Stickers"}),l.jsx("p",{className:"feature-detail",children:"24h active engagement directly driving conversion traffic to your product bio-link."})]})]}),l.jsxs("div",{className:"feature-card-item",children:[l.jsx("div",{className:"feature-icon-badge badge-blue-glow",children:l.jsx("i",{className:"fa-solid fa-chart-line text-blue"})}),l.jsxs("div",{className:"feature-info",children:[l.jsx("h4",{className:"feature-heading",children:"Organic Viral Potential"}),l.jsx("p",{className:"feature-detail",children:"Algorithm-optimized formats engineered for maximum audience shares and saves."})]})]})]}),l.jsxs("div",{className:"pillar-footer-suite",children:[l.jsxs("div",{className:"tools-badges-dock creator-badges-dock",children:[l.jsxs("span",{className:"tool-chip",children:[l.jsx("i",{className:"fa-solid fa-laptop-code text-cyan"})," Tech Gear"]}),l.jsxs("span",{className:"tool-chip",children:[l.jsx("i",{className:"fa-solid fa-mobile-screen text-blue"})," Creative Apps"]}),l.jsxs("span",{className:"tool-chip",children:[l.jsx("i",{className:"fa-solid fa-camera-retro text-cyan"})," Lifestyle"]}),l.jsxs("span",{className:"tool-chip",children:[l.jsx("i",{className:"fa-solid fa-headphones text-blue"})," Audio"]})]}),l.jsxs("a",{href:"https://wa.me/919360870164?text=Hi%20Bikash!%20I%20want%20to%20discuss%20a%20Brand%20Sponsorship%20/%20Paid%20Promotion%20collab.",target:"_blank",rel:"noopener noreferrer",className:"pillar-cta-link link-cyan",children:[l.jsx("span",{children:"Discuss Brand Collab"}),l.jsx("i",{className:"fa-solid fa-arrow-right"})]})]}),l.jsx("div",{className:"pillar-bottom-glow-bar glow-cyan"})]})]})]})]})}function lw(){return l.jsx("section",{className:"about-section section-padding",id:"about",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-header scroll-reveal",children:[l.jsx("div",{className:"badge-wrapper-pill",children:l.jsxs("span",{className:"section-subtitle-pill",children:[l.jsx("i",{className:"fa-solid fa-user-astronaut"})," WHO I AM"]})}),l.jsx("h2",{className:"section-title",children:"The Creative Mind Behind Every Cut"}),l.jsx("div",{className:"title-underline"}),l.jsx("p",{className:"section-intro-text",children:"Fusing rhythmic editorial precision with high-impact influencer strategy to turn raw clips into viral retention assets."})]}),l.jsxs("div",{className:"about-grid",children:[l.jsxs("div",{className:"about-portrait-wrapper stagger-1 scroll-reveal",children:[l.jsx("div",{className:"portrait-ambient-glow","aria-hidden":"true"}),l.jsxs("div",{className:"profile-cinematic-card",children:[l.jsx("div",{className:"hud-corner hud-top-left","aria-hidden":"true"}),l.jsx("div",{className:"hud-corner hud-top-right","aria-hidden":"true"}),l.jsx("div",{className:"hud-corner hud-bottom-left","aria-hidden":"true"}),l.jsx("div",{className:"hud-corner hud-bottom-right","aria-hidden":"true"}),l.jsxs("div",{className:"viewfinder-top-bar",children:[l.jsxs("div",{className:"viewfinder-rec",children:[l.jsx("span",{className:"rec-dot-pulse"}),l.jsx("span",{className:"rec-text",children:"REC"}),l.jsx("span",{className:"timecode-text",children:"00:24:18:05"})]}),l.jsxs("div",{className:"viewfinder-res",children:[l.jsx("span",{className:"res-badge",children:"4K UHD"}),l.jsx("span",{className:"fps-badge",children:"60 FPS"})]})]}),l.jsx("img",{src:"assets/profile.jpg",alt:"Bikash Suna Profile",className:"profile-cinematic-img"}),l.jsx("div",{className:"portrait-shimmer-sweep","aria-hidden":"true"}),l.jsxs("div",{className:"profile-cinematic-overlay",children:[l.jsx("div",{className:"profile-tag-row",children:l.jsxs("span",{className:"profile-cinematic-tag",children:[l.jsx("i",{className:"fa-solid fa-clapperboard"})," VIDEO EDITOR • CONTENT CREATOR"]})}),l.jsxs("div",{className:"profile-name-row",children:[l.jsx("h3",{className:"profile-cinematic-name",children:"Bikash Suna"}),l.jsx("i",{className:"fa-solid fa-circle-check verified-badge",title:"Verified Professional Creator"})]})]})]})]}),l.jsxs("div",{className:"about-card intro-card-premium stagger-2 scroll-reveal",children:[l.jsx("div",{className:"card-ambient-corner","aria-hidden":"true"}),l.jsxs("div",{className:"about-card-header",children:[l.jsxs("div",{className:"slate-badge-premium",children:[l.jsx("i",{className:"fa-solid fa-location-dot"})," JHARSUGUDA, ODISHA, IN"]}),l.jsxs("div",{className:"status-badge-premium",children:[l.jsx("span",{className:"pulse-dot"})," Available for Collabs"]})]}),l.jsxs("div",{className:"about-title-group",children:[l.jsxs("h3",{className:"about-name-premium",children:["Bikash Suna",l.jsx("i",{className:"fa-solid fa-circle-check verified-badge-inline",title:"Verified Creator & Editor"})]}),l.jsx("span",{className:"about-role-subheading",children:"Digital Storyteller • Video Post-Production • Brand Partner"})]}),l.jsx("p",{className:"about-description",children:"Operating out of Jharsuguda, Odisha. I translate raw footage into high-impact, scroll-stopping narratives while partnering with brands and digital creators for high-engagement paid promotions, sponsored reels, and authentic product showcases."}),l.jsxs("div",{className:"video-spec-sheet-premium",children:[l.jsxs("div",{className:"spec-header",children:[l.jsxs("div",{className:"spec-title-left",children:[l.jsx("i",{className:"fa-solid fa-sliders"}),l.jsx("span",{children:"CREATOR & EDITOR SPECIFICATION"})]}),l.jsx("span",{className:"spec-live-pill",children:"LIVE BENCHMARKS"})]}),l.jsxs("div",{className:"spec-grid",children:[l.jsxs("div",{className:"spec-grid-item",children:[l.jsxs("span",{className:"spec-label",children:[l.jsx("i",{className:"fa-solid fa-briefcase"})," Primary Role"]}),l.jsx("span",{className:"spec-value",children:"Editor & Content Creator"})]}),l.jsxs("div",{className:"spec-grid-item",children:[l.jsxs("span",{className:"spec-label",children:[l.jsx("i",{className:"fa-solid fa-wand-magic-sparkles"})," Primary Tools"]}),l.jsx("span",{className:"spec-value highlight-cyan",children:"CapCut Pro • Premiere Pro"})]}),l.jsxs("div",{className:"spec-grid-item",children:[l.jsxs("span",{className:"spec-label",children:[l.jsx("i",{className:"fa-solid fa-bullhorn"})," Promo Formats"]}),l.jsx("span",{className:"spec-value",children:"Reels, Stories, Co-Author Tag"})]}),l.jsxs("div",{className:"spec-grid-item",children:[l.jsxs("span",{className:"spec-label",children:[l.jsx("i",{className:"fa-solid fa-cubes"})," Core Niches"]}),l.jsx("span",{className:"spec-value",children:"Tech, Lifestyle, Gear & Apps"})]}),l.jsxs("div",{className:"spec-grid-item",children:[l.jsxs("span",{className:"spec-label",children:[l.jsx("i",{className:"fa-solid fa-stopwatch"})," Express Turnaround"]}),l.jsx("span",{className:"spec-value highlight-emerald",children:"24h Priority • 48h Standard"})]}),l.jsxs("div",{className:"spec-grid-item",children:[l.jsxs("span",{className:"spec-label",children:[l.jsx("i",{className:"fa-solid fa-chart-line"})," Retention Target"]}),l.jsx("span",{className:"spec-value highlight-gold",children:"Top 15% Viral Benchmarks"})]})]})]}),l.jsxs("div",{className:"about-action-bar",children:[l.jsxs("a",{href:"https://wa.me/919360870164?text=Hi%20Bikash,%20I'd%20love%20to%20collaborate%20with%20you!",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary btn-sm pulse-on-hover",children:[l.jsx("i",{className:"fa-brands fa-whatsapp"})," Chat on WhatsApp"]}),l.jsxs("a",{href:"#portfolio",className:"btn btn-secondary btn-sm",children:[l.jsx("i",{className:"fa-solid fa-play"})," Watch Showreels"]})]})]})]}),l.jsxs("div",{className:"about-skills-stack",children:[l.jsxs("div",{className:"skill-item-premium stagger-1 scroll-reveal",children:[l.jsxs("div",{className:"skill-top-bar",children:[l.jsx("span",{className:"skill-badge-tag tag-cyan",children:"PACING ARCHITECTURE"}),l.jsx("span",{className:"skill-metric",children:"99% SYNC"})]}),l.jsxs("div",{className:"skill-body",children:[l.jsx("div",{className:"skill-icon-wrapper skill-cyan",children:l.jsx("i",{className:"fa-solid fa-gauge-high"})}),l.jsxs("div",{className:"skill-text-box",children:[l.jsx("h4",{children:"Velocity & Speed Ramps"}),l.jsx("p",{children:"Applying smooth custom speed curves, velocity ramps, and optical flow slow-motion to sync cuts with visual transitions."})]})]}),l.jsx("div",{className:"skill-card-glow-bar glow-cyan"})]}),l.jsxs("div",{className:"skill-item-premium stagger-2 scroll-reveal",children:[l.jsxs("div",{className:"skill-top-bar",children:[l.jsx("span",{className:"skill-badge-tag tag-purple",children:"ENGAGEMENT HOOKS"}),l.jsx("span",{className:"skill-metric",children:"VIRAL RETENTION"})]}),l.jsxs("div",{className:"skill-body",children:[l.jsx("div",{className:"skill-icon-wrapper skill-purple",children:l.jsx("i",{className:"fa-solid fa-comment-dots"})}),l.jsxs("div",{className:"skill-text-box",children:[l.jsx("h4",{children:"Trending Auto-Captions"}),l.jsx("p",{children:"Generating auto-sync'd dynamic text overlays with CapCut's trending typography styles and slide-in motion presets."})]})]}),l.jsx("div",{className:"skill-card-glow-bar glow-purple"})]}),l.jsxs("div",{className:"skill-item-premium stagger-3 scroll-reveal",children:[l.jsxs("div",{className:"skill-top-bar",children:[l.jsx("span",{className:"skill-badge-tag tag-blue",children:"CINEMATIC DYNAMICS"}),l.jsx("span",{className:"skill-metric",children:"60 FPS SMOOTH"})]}),l.jsxs("div",{className:"skill-body",children:[l.jsx("div",{className:"skill-icon-wrapper skill-blue",children:l.jsx("i",{className:"fa-solid fa-key"})}),l.jsxs("div",{className:"skill-text-box",children:[l.jsx("h4",{children:"Keyframe Animations"}),l.jsx("p",{children:"Adding custom keyframe trajectories for smooth camera zooms, overlay panning, and picture-in-picture (PIP) layouts."})]})]}),l.jsx("div",{className:"skill-card-glow-bar glow-blue"})]}),l.jsxs("div",{className:"skill-item-premium stagger-4 scroll-reveal",children:[l.jsxs("div",{className:"skill-top-bar",children:[l.jsx("span",{className:"skill-badge-tag tag-teal",children:"SPONSOR STRATEGY"}),l.jsx("span",{className:"skill-metric",children:"HIGH CONVERTING"})]}),l.jsxs("div",{className:"skill-body",children:[l.jsx("div",{className:"skill-icon-wrapper skill-teal",children:l.jsx("i",{className:"fa-solid fa-bullhorn"})}),l.jsxs("div",{className:"skill-text-box",children:[l.jsx("h4",{children:"Brand Collabs & Paid Promo"}),l.jsx("p",{children:"Tailored brand integrations, high-converting sponsor hooks, co-authored Instagram reels, and authentic product showcases."})]})]}),l.jsx("div",{className:"skill-card-glow-bar glow-teal"})]})]})]})})}function cw(){const s=[{num:"01",title:"Briefing & Goal Alignment",subtitle:"Target Audience & Hook Setup",desc:"We discuss your product, target demographic, unique selling propositions (USPs), and campaign call-to-action.",icon:"fa-clipboard-list",tag:"Day 1 • Blueprint",color:"cyan"},{num:"02",title:"Scripting & Hook Engineering",subtitle:"First 3-Second Retention Lock",desc:"Drafting high-retention viral hooks and narrative structure tailored to stop scrolling and maximize watch-time.",icon:"fa-pen-ruler",tag:"Day 1–2 • Script Draft",color:"purple"},{num:"03",title:"Cinematic Shooting & Editing",subtitle:"4K Capture & Dynamic Rhythm",desc:"High-definition production with seamless speed ramping, beat syncing, vocal leveling, and custom LUT color grading.",icon:"fa-video",tag:"Day 2 • 4K Production",color:"blue"},{num:"04",title:"Review & Collaborative Launch",subtitle:"Co-Author Post & Story Blast",desc:"You review and approve the final cut, followed by a published Instagram Co-Author Reel with targeted story link stickers.",icon:"fa-rocket",tag:"Day 3 • Live Campaign",color:"emerald"}];return l.jsx("section",{className:"mediakit-section section-padding",id:"media-kit",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-header scroll-reveal",children:[l.jsx("div",{className:"badge-wrapper-pill",children:l.jsxs("span",{className:"section-subtitle-pill",children:[l.jsx("i",{className:"fa-solid fa-chart-pie"})," CREATOR MEDIA KIT & SPONSOR DESK"]})}),l.jsx("h2",{className:"section-title",children:"Brand Partnerships & Audience Metrics"}),l.jsx("div",{className:"title-underline"}),l.jsx("p",{className:"section-intro",children:"Connect with a highly engaged demographic of creators, tech enthusiasts, and digital trendsetters. Transparent, verified metrics built for measurable sponsor ROI."}),l.jsxs("div",{className:"platform-snapshot-bar",children:[l.jsxs("span",{className:"platform-chip",children:[l.jsx("i",{className:"fa-brands fa-instagram text-pink"})," Instagram Reels"]}),l.jsxs("span",{className:"platform-chip",children:[l.jsx("i",{className:"fa-brands fa-youtube text-red"})," YouTube Shorts"]}),l.jsxs("span",{className:"platform-chip",children:[l.jsx("i",{className:"fa-solid fa-circle-check text-cyan"})," Verified Creator"]})]})]}),l.jsxs("div",{className:"mediakit-stats-grid",children:[l.jsxs("div",{className:"mediakit-stat-card-premium card-glow-cyan stagger-1 scroll-reveal",children:[l.jsxs("div",{className:"stat-card-top",children:[l.jsx("span",{className:"stat-category-pill",children:"REACH METRIC"}),l.jsxs("span",{className:"stat-growth-pill text-emerald",children:[l.jsx("i",{className:"fa-solid fa-arrow-trend-up"})," +32% MoM"]})]}),l.jsx("div",{className:"stat-number-wrapper",children:l.jsx("span",{className:"mediakit-stat-number stat-cyan",children:"50K+"})}),l.jsx("span",{className:"mediakit-stat-label",children:"Monthly Impressions"}),l.jsx("span",{className:"mediakit-stat-sub",children:"Across viral Reels, Shorts & videos"}),l.jsx("div",{className:"stat-sparkline-wrapper",children:l.jsxs("svg",{className:"sparkline-svg",viewBox:"0 0 120 28",fill:"none",children:[l.jsx("path",{d:"M0 22 Q 25 18, 45 12 T 80 14 T 120 4",stroke:"#38bdf8",strokeWidth:"2.5",strokeLinecap:"round"}),l.jsx("path",{d:"M0 22 Q 25 18, 45 12 T 80 14 T 120 4 L 120 28 L 0 28 Z",fill:"url(#cyanGlowGrad)",opacity:"0.3"}),l.jsx("defs",{children:l.jsxs("linearGradient",{id:"cyanGlowGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:"#38bdf8",stopOpacity:"0.8"}),l.jsx("stop",{offset:"100%",stopColor:"#38bdf8",stopOpacity:"0"})]})})]})})]}),l.jsxs("div",{className:"mediakit-stat-card-premium card-glow-purple stagger-2 scroll-reveal",children:[l.jsxs("div",{className:"stat-card-top",children:[l.jsx("span",{className:"stat-category-pill",children:"VIRALITY"}),l.jsxs("span",{className:"stat-growth-pill text-purple",children:[l.jsx("i",{className:"fa-solid fa-fire"})," 85%+ Watch"]})]}),l.jsx("div",{className:"stat-number-wrapper",children:l.jsx("span",{className:"mediakit-stat-number stat-purple",children:"15K – 45K"})}),l.jsx("span",{className:"mediakit-stat-label",children:"Avg Reel Views"}),l.jsx("span",{className:"mediakit-stat-sub",children:"High watch-time & viewer retention"}),l.jsx("div",{className:"stat-sparkline-wrapper",children:l.jsxs("svg",{className:"sparkline-svg",viewBox:"0 0 120 28",fill:"none",children:[l.jsx("path",{d:"M0 24 Q 20 20, 50 8 T 85 10 T 120 2",stroke:"#c084fc",strokeWidth:"2.5",strokeLinecap:"round"}),l.jsx("path",{d:"M0 24 Q 20 20, 50 8 T 85 10 T 120 2 L 120 28 L 0 28 Z",fill:"url(#purpleGlowGrad)",opacity:"0.3"}),l.jsx("defs",{children:l.jsxs("linearGradient",{id:"purpleGlowGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:"#c084fc",stopOpacity:"0.8"}),l.jsx("stop",{offset:"100%",stopColor:"#c084fc",stopOpacity:"0"})]})})]})})]}),l.jsxs("div",{className:"mediakit-stat-card-premium card-glow-emerald stagger-3 scroll-reveal",children:[l.jsxs("div",{className:"stat-card-top",children:[l.jsx("span",{className:"stat-category-pill",children:"BENCHMARK"}),l.jsxs("span",{className:"stat-growth-pill text-emerald",children:[l.jsx("i",{className:"fa-solid fa-star"})," 3.2x Average"]})]}),l.jsx("div",{className:"stat-number-wrapper",children:l.jsx("span",{className:"mediakit-stat-number stat-emerald",children:"8.4%"})}),l.jsx("span",{className:"mediakit-stat-label",children:"Engagement Rate"}),l.jsx("span",{className:"mediakit-stat-sub",children:"High comment, share & save ratio"}),l.jsx("div",{className:"stat-sparkline-wrapper",children:l.jsxs("svg",{className:"sparkline-svg",viewBox:"0 0 120 28",fill:"none",children:[l.jsx("path",{d:"M0 20 Q 30 16, 60 14 T 90 6 T 120 2",stroke:"#34d399",strokeWidth:"2.5",strokeLinecap:"round"}),l.jsx("path",{d:"M0 20 Q 30 16, 60 14 T 90 6 T 120 2 L 120 28 L 0 28 Z",fill:"url(#emeraldGlowGrad)",opacity:"0.3"}),l.jsx("defs",{children:l.jsxs("linearGradient",{id:"emeraldGlowGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:"#34d399",stopOpacity:"0.8"}),l.jsx("stop",{offset:"100%",stopColor:"#34d399",stopOpacity:"0"})]})})]})})]}),l.jsxs("div",{className:"mediakit-stat-card-premium card-glow-gold stagger-4 scroll-reveal",children:[l.jsxs("div",{className:"stat-card-top",children:[l.jsx("span",{className:"stat-category-pill",children:"AUDIENCE"}),l.jsxs("span",{className:"stat-growth-pill text-gold",children:[l.jsx("i",{className:"fa-solid fa-users"})," Gen-Z & Millennial"]})]}),l.jsx("div",{className:"stat-number-wrapper",children:l.jsx("span",{className:"mediakit-stat-number stat-gold",children:"18 – 34"})}),l.jsx("span",{className:"mediakit-stat-label",children:"Core Demographic"}),l.jsx("span",{className:"mediakit-stat-sub",children:"Tech, Creators, Lifestyle & Gear"}),l.jsxs("div",{className:"demo-bar-wrapper",children:[l.jsx("div",{className:"demo-bar-track",children:l.jsx("div",{className:"demo-bar-fill",style:{width:"72%"},title:"72% Active Age 18-28"})}),l.jsxs("div",{className:"demo-bar-labels",children:[l.jsx("span",{children:"72% Age 18–28"}),l.jsx("span",{children:"High Buying Power"})]})]})]})]}),l.jsxs("div",{className:"workflow-container-premium scroll-reveal",children:[l.jsxs("div",{className:"workflow-header-premium",children:[l.jsxs("span",{className:"workflow-badge",children:[l.jsx("i",{className:"fa-solid fa-diagram-project"})," 4-STEP CAMPAIGN LIFECYCLE"]}),l.jsx("h3",{children:"How Brand Collaborations Work"}),l.jsx("p",{children:"From initial briefing to a published, co-authored viral campaign."})]}),l.jsx("div",{className:"workflow-steps-grid-premium",children:s.map((e,t)=>l.jsxs("div",{className:`workflow-card-premium card-${e.color} stagger-${t%4+1} scroll-reveal`,children:[l.jsxs("div",{className:"step-card-header",children:[l.jsx("div",{className:`step-icon-premium icon-${e.color}`,children:l.jsx("i",{className:`fa-solid ${e.icon}`})}),l.jsx("span",{className:"step-number-pill",children:e.num})]}),l.jsxs("div",{className:"step-content",children:[l.jsx("span",{className:`step-phase-tag tag-${e.color}`,children:e.tag}),l.jsx("h4",{children:e.title}),l.jsx("span",{className:"step-subtitle",children:e.subtitle}),l.jsx("p",{children:e.desc})]}),l.jsx("div",{className:`step-bottom-glow-bar glow-${e.color}`})]},t))}),l.jsxs("div",{className:"workflow-cta-banner-premium scroll-reveal",children:[l.jsxs("div",{className:"cta-left-content",children:[l.jsxs("div",{className:"cta-status-pill",children:[l.jsx("span",{className:"pulse-dot"}),l.jsx("span",{children:"SPONSOR SLOTS OPEN FOR THIS MONTH"})]}),l.jsx("h4",{children:"Ready to promote your product, app, or brand?"}),l.jsxs("p",{children:["Starter sponsorship packages begin at ",l.jsx("strong",{children:"₹1,500"})," with complete video editing, scripting, and tagged co-authorship included."]})]}),l.jsx("div",{className:"cta-actions",children:l.jsxs("a",{href:"https://wa.me/919360870164?text=Hi%20Bikash!%20I%20want%20to%20collaborate%20for%20a%20Paid%20Promotion%20/%20Brand%20Sponsorship.",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary pulse-on-hover btn-cta-luxury",children:[l.jsx("i",{className:"fa-solid fa-handshake"})," Book Brand Sponsorship"]})})]})]})]})})}function uw({isOpen:s,project:e,onClose:t}){const[r,o]=st.useState(!1),[c,d]=st.useState(0),[h,p]=st.useState(!1),[m,v]=st.useState(1),[_,x]=st.useState(!1),M=st.useRef(null),E=st.useRef(null),T=(e==null?void 0:e.category)==="album"?75:32;if(st.useEffect(()=>{s?(o(!0),d(0),p(!1),v(1),x(!1)):o(!1)},[s,e]),st.useEffect(()=>{const D=()=>{const F=!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement);x(F)};return document.addEventListener("fullscreenchange",D),document.addEventListener("webkitfullscreenchange",D),document.addEventListener("mozfullscreenchange",D),document.addEventListener("MSFullscreenChange",D),()=>{document.removeEventListener("fullscreenchange",D),document.removeEventListener("webkitfullscreenchange",D),document.removeEventListener("mozfullscreenchange",D),document.removeEventListener("MSFullscreenChange",D)}},[]),st.useEffect(()=>{const D=F=>{s&&(F.key==="Escape"?_?y():t():F.code==="Space"?(F.preventDefault(),o(L=>!L)):F.key==="f"||F.key==="F"?(F.preventDefault(),S()):(F.key==="m"||F.key==="M")&&(F.preventDefault(),p(L=>!L)))};return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[s,_,t]),st.useEffect(()=>{let D;if(r){const F=100/m;D=setInterval(()=>{d(L=>L>=T?0:Math.min(T,+(L+.1).toFixed(1)))},F)}return()=>clearInterval(D)},[r,T,m]),!s||!e)return null;const S=()=>{const D=M.current;if(!D)return;!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)?y():D.requestFullscreen?D.requestFullscreen().catch(()=>x(!0)):D.webkitRequestFullscreen?D.webkitRequestFullscreen():D.mozRequestFullScreen?D.mozRequestFullScreen():D.msRequestFullscreen?D.msRequestFullscreen():x(!0)},y=()=>{document.exitFullscreen?document.exitFullscreen().catch(()=>{}):document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen(),x(!1)},R=D=>{if(!E.current)return;const F=E.current.getBoundingClientRect(),L=D.clientX-F.left,b=Math.max(0,Math.min(1,L/F.width));d(+(b*T).toFixed(1))},P=()=>{const D=[1,1.25,1.5,2],F=(D.indexOf(m)+1)%D.length;v(D[F])},A=D=>{const F=Math.floor(D/60),L=Math.floor(D%60).toString().padStart(2,"0");return`${F}:${L}`},G=c/T*100,k=e.category==="reel"?"Short Reel":e.category==="album"?"Video Album":"Brand Collab";return l.jsxs("div",{className:`modal ${s?"active":""}`,id:"video-modal",children:[l.jsx("div",{className:"modal-backdrop",onClick:t}),l.jsx("div",{className:`modal-ambient-glow glow-${e.color||"cyan"}`}),l.jsxs("div",{ref:M,className:`modal-content modal-content-cinema ${_?"is-fullscreen":""}`,children:[l.jsx("button",{className:"modal-close-luxury",onClick:_?y:t,"aria-label":"Close modal",title:"Close (ESC)",children:l.jsx("i",{className:"fa-solid fa-xmark"})}),l.jsx("div",{className:"video-container-cinema",children:l.jsxs("div",{className:"simulated-player-cinema",children:[l.jsxs("div",{className:"cinema-canvas",children:[l.jsx("img",{src:e.img,alt:e.title,className:`cinema-source-image ${r?"is-playing":""}`,style:e.style||{}}),l.jsx("div",{className:"cinema-grain-overlay"}),l.jsx("div",{className:"cinema-lens-flare"}),l.jsx("div",{className:"cinema-vignette"}),l.jsx("div",{className:"cinema-waveform-glow",style:{animationPlayState:r?"running":"paused"}})]}),l.jsxs("div",{className:"cinema-hud-overlay",children:[l.jsx("span",{className:"hud-corner top-left",children:"⌜"}),l.jsx("span",{className:"hud-corner top-right",children:"⌝"}),l.jsx("span",{className:"hud-corner bottom-left",children:"⌞"}),l.jsx("span",{className:"hud-corner bottom-right",children:"⌟"}),l.jsxs("div",{className:"hud-rec-indicator",children:[l.jsx("span",{className:`hud-rec-dot ${r?"blinking":""}`}),l.jsx("span",{className:"hud-rec-text",children:"REC"}),l.jsxs("span",{className:"hud-timecode",children:["00:",A(c),":24"]})]})]}),l.jsxs("div",{className:`player-overlay-ui-cinema ${r?"":"is-paused-overlay"}`,children:[l.jsxs("div",{className:"player-header-cinema",children:[l.jsxs("div",{className:"header-left-meta",children:[l.jsxs("span",{className:`player-badge-cinema badge-${e.color||"cyan"}`,children:[l.jsx("i",{className:`fa-solid ${e.icon||"fa-film"}`})," ",k]}),l.jsx("h3",{className:"player-title-cinema",children:e.title}),l.jsx("span",{className:"player-res-tag",children:e.quality||"4K UHD • 60 FPS"})]}),l.jsx("div",{className:"header-right-meta",children:l.jsxs("a",{href:`https://wa.me/919360870164?text=Hi%20Bikash!%20I%20love%20the%20"${encodeURIComponent(e.title)}"%20showreel.%20I%20want%20to%20hire%20you%20for%20a%20similar%20project.`,target:"_blank",rel:"noopener noreferrer",className:"player-inquire-btn",children:[l.jsx("i",{className:"fa-brands fa-whatsapp"})," Inquire This Edit"]})})]}),l.jsx("div",{className:"player-center-cinema",onClick:()=>o(!r),children:!r&&l.jsxs("div",{className:"center-play-button-luxury",children:[l.jsx("div",{className:"pulse-outer-ring"}),l.jsx("div",{className:"center-play-icon",children:l.jsx("i",{className:"fa-solid fa-play"})}),l.jsx("span",{className:"center-play-label",children:"PRESS SPACE TO PLAY"})]})}),l.jsxs("div",{className:"player-footer-cinema",children:[l.jsx("div",{ref:E,className:"progress-scrubber-track",onClick:R,title:"Click to seek",children:l.jsx("div",{className:"progress-scrubber-fill",style:{width:`${G}%`},children:l.jsx("span",{className:"scrubber-head-thumb"})})}),l.jsxs("div",{className:"player-controls-row",children:[l.jsxs("div",{className:"controls-left-group",children:[l.jsx("button",{className:"cinema-control-btn play-pause-btn",onClick:()=>o(!r),"aria-label":r?"Pause video":"Play video",title:r?"Pause (Space)":"Play (Space)",children:l.jsx("i",{className:`fa-solid ${r?"fa-pause":"fa-play"}`})}),l.jsx("button",{className:"cinema-control-btn volume-btn",onClick:()=>p(!h),"aria-label":h?"Unmute":"Mute",title:h?"Unmute (M)":"Mute (M)",children:l.jsx("i",{className:`fa-solid ${h?"fa-volume-xmark text-red":"fa-volume-high"}`})}),l.jsxs("div",{className:"player-audio-bars",title:h?"Muted":"Audio Active",children:[l.jsx("span",{className:`audio-bar bar-1 ${r&&!h?"active":""}`}),l.jsx("span",{className:`audio-bar bar-2 ${r&&!h?"active":""}`}),l.jsx("span",{className:`audio-bar bar-3 ${r&&!h?"active":""}`})]}),l.jsxs("span",{className:"player-time-display",children:[l.jsx("span",{className:"current-time",children:A(c)}),l.jsx("span",{className:"time-separator",children:"/"}),l.jsx("span",{className:"total-time",children:A(T)})]})]}),l.jsxs("div",{className:"controls-right-group",children:[l.jsxs("button",{className:"cinema-control-pill speed-pill",onClick:P,title:"Cycle playback speed",children:[m,"x"]}),l.jsxs("span",{className:"cinema-watermark",children:[l.jsx("i",{className:"fa-solid fa-scissors"})," BIKASH SUNA PRO"]}),l.jsx("button",{className:"cinema-control-btn fullscreen-btn",onClick:S,"aria-label":_?"Exit Fullscreen":"Enter Fullscreen",title:_?"Exit Fullscreen (F)":"Fullscreen (F)",children:l.jsx("i",{className:`fa-solid ${_?"fa-compress text-cyan":"fa-expand"}`})})]})]})]})]})]})})]})]})}const ks=[{id:"reel-1",category:"reel",title:"Dynamic Motion & Beat-Sync Reel",desc:"High-energy visual cuts sync'd with electronic soundbeats, speed ramping, and stylized kinetic typography overlays.",img:"assets/reel.jpg",tags:["Beat Sync","Speed Ramping","Kinetic SFX"],badge:"Short Reel",color:"cyan",icon:"fa-bolt",duration:"0:32",quality:"4K • 60 FPS",metric:"🔥 68K+ Views"},{id:"album-1",category:"album",title:"The Golden Union Wedding Cinema",desc:"Emotionally charged, slow-paced wedding narrative showcasing warm grading, soft focus edits, and immersive ambient audio.",img:"assets/album.jpg",tags:["Storytelling","Color Grading","Sound Mix"],badge:"Video Album",color:"purple",icon:"fa-film",duration:"3:45",quality:"4K Cinema • 24 FPS",metric:"💍 Cinematic Love"},{id:"reel-2",category:"reel",title:"Neon Cyberpunk Gaming Highlights",desc:"Intense high-FPS montage featuring rhythmic speed ramps, chromatic glitch transitions, and punchy visual impacts.",img:"assets/hero.jpg",style:{objectPosition:"center bottom"},tags:["Speed Ramps","VFX","Glitch FX"],badge:"Short Reel",color:"blue",icon:"fa-gamepad",duration:"0:45",quality:"4K • 60 FPS",metric:"⚡ 42K+ Views"},{id:"collab-1",category:"collab",title:"Creator Tech Unbox & Sponsored Reel",desc:"High-converting sponsored showcase with retention-engineered hook, macro product b-roll, and story link stickers.",img:"assets/reel.jpg",style:{filter:"hue-rotate(50deg) saturate(1.2)"},tags:["Paid Promotion","Brand Collab","Hook Retention"],badge:"Brand Collab",color:"emerald",icon:"fa-handshake",duration:"0:28",quality:"4K UHD",metric:"🚀 50K+ Reach",isCollab:!0},{id:"reel-3",category:"reel",title:"Urban Streetwear & Fast-Cut Reel",desc:"Whip-pan camera wipes, dynamic frame matching, dynamic typography tracking, and bass-drop rhythmic synchronization.",img:"assets/reel.jpg",style:{filter:"contrast(1.15) brightness(1.05)"},tags:["Whip Transitions","Typography","Bass Drops"],badge:"Short Reel",color:"gold",icon:"fa-fire",duration:"0:38",quality:"4K • 60 FPS",metric:"🔥 35K+ Views"},{id:"collab-2",category:"collab",title:"SaaS App Teaser & Feature Walkthrough",desc:"High-energy screencast animation, punchy UI callouts, and kinetic sound design engineered for sponsor app conversions.",img:"assets/hero.jpg",style:{objectPosition:"center top"},tags:["Sponsor Promo","UI Motion","Call to Action"],badge:"Brand Collab",color:"cyan",icon:"fa-laptop-code",duration:"0:34",quality:"4K UHD",metric:"💼 4.8x ROI",isCollab:!0}];function dw(){const[s,e]=st.useState("all"),[t,r]=st.useState(null),o=s==="all"?ks:ks.filter(d=>d.category===s),c={all:ks.length,reel:ks.filter(d=>d.category==="reel").length,album:ks.filter(d=>d.category==="album").length,collab:ks.filter(d=>d.category==="collab").length};return l.jsxs("section",{className:"portfolio-section section-padding",id:"portfolio",children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-header scroll-reveal",children:[l.jsx("div",{className:"badge-wrapper-pill",children:l.jsxs("span",{className:"section-subtitle-pill",children:[l.jsx("i",{className:"fa-solid fa-film"})," CURATED EDITING SHOWCASE"]})}),l.jsx("h2",{className:"section-title",children:"Featured Editing Showreel"}),l.jsx("div",{className:"title-underline"}),l.jsx("p",{className:"section-intro",children:"Cinematic storytelling, viral hook architecture, dynamic beat synchronizations, and brand-sponsored deliverables designed to captivate audiences."})]}),l.jsx("div",{className:"portfolio-dock-wrapper scroll-reveal",children:l.jsxs("div",{className:"portfolio-tabs-dock",children:[l.jsxs("button",{className:`portfolio-tab-btn ${s==="all"?"active":""}`,onClick:()=>e("all"),children:[l.jsx("i",{className:"fa-solid fa-layer-group"}),l.jsx("span",{children:"All Projects"}),l.jsx("span",{className:"tab-count-pill",children:c.all})]}),l.jsxs("button",{className:`portfolio-tab-btn ${s==="reel"?"active":""}`,onClick:()=>e("reel"),children:[l.jsx("i",{className:"fa-solid fa-bolt"}),l.jsx("span",{children:"Short Reels"}),l.jsx("span",{className:"tab-count-pill",children:c.reel})]}),l.jsxs("button",{className:`portfolio-tab-btn ${s==="album"?"active":""}`,onClick:()=>e("album"),children:[l.jsx("i",{className:"fa-solid fa-film"}),l.jsx("span",{children:"Long Albums"}),l.jsx("span",{className:"tab-count-pill",children:c.album})]}),l.jsxs("button",{className:`portfolio-tab-btn ${s==="collab"?"active":""}`,onClick:()=>e("collab"),children:[l.jsx("i",{className:"fa-solid fa-handshake"}),l.jsx("span",{children:"Brand Collabs"}),l.jsx("span",{className:"tab-count-pill",children:c.collab})]})]})}),l.jsx("div",{className:"portfolio-grid",id:"portfolio-grid",children:o.map((d,h)=>l.jsxs("div",{className:`portfolio-card-premium card-glow-${d.color} stagger-${h%4+1}`,onClick:()=>r(d),role:"button",tabIndex:0,onKeyDown:p=>{p.key==="Enter"&&r(d)},children:[l.jsxs("div",{className:"portfolio-img-wrapper",children:[l.jsx("img",{src:d.img,alt:d.title,className:"portfolio-img",style:d.style||{},loading:"lazy"}),l.jsx("span",{className:"cinema-hud-bracket top-left",children:"⌜"}),l.jsx("span",{className:"cinema-hud-bracket top-right",children:"⌝"}),l.jsx("span",{className:"cinema-hud-bracket bottom-left",children:"⌞"}),l.jsx("span",{className:"cinema-hud-bracket bottom-right",children:"⌟"}),l.jsxs("div",{className:"thumb-top-bar",children:[l.jsxs("span",{className:`item-tag-badge tag-${d.color}`,children:[l.jsx("i",{className:`fa-solid ${d.icon}`})," ",d.badge]}),l.jsx("span",{className:"thumb-quality-badge",children:d.quality})]}),l.jsxs("div",{className:"portfolio-overlay",children:[l.jsxs("div",{className:"play-btn-pulse-wrapper",children:[l.jsx("div",{className:"play-btn-ripple"}),l.jsx("div",{className:"play-btn",children:l.jsx("i",{className:"fa-solid fa-play"})})]}),l.jsxs("div",{className:"thumb-equalizer",title:"Beat Synced",children:[l.jsx("span",{className:"eq-bar bar-1"}),l.jsx("span",{className:"eq-bar bar-2"}),l.jsx("span",{className:"eq-bar bar-3"}),l.jsx("span",{className:"eq-bar bar-4"})]})]}),l.jsxs("div",{className:"thumb-bottom-bar",children:[l.jsx("span",{className:"thumb-metric-pill",children:d.metric}),l.jsxs("span",{className:"thumb-duration-pill",children:[l.jsx("i",{className:"fa-regular fa-clock"})," ",d.duration]})]})]}),l.jsxs("div",{className:"portfolio-info",children:[l.jsxs("div",{className:"card-title-row",children:[l.jsx("h3",{children:d.title}),l.jsx("span",{className:"card-open-arrow",children:l.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})})]}),l.jsx("p",{children:d.desc}),l.jsx("div",{className:"tag-row",children:d.tags.map((p,m)=>l.jsx("span",{className:"project-tag-pill",children:p},m))}),l.jsxs("div",{className:"card-action-footer",children:[l.jsxs("span",{className:"action-link-text",children:[l.jsx("i",{className:"fa-solid fa-circle-play"})," Watch Project Preview"]}),l.jsx("span",{className:"action-hover-hint",children:"Tap to play"})]})]}),l.jsx("div",{className:`card-bottom-accent-line line-${d.color}`})]},d.id))}),l.jsxs("div",{className:"portfolio-trust-strip scroll-reveal",children:[l.jsxs("div",{className:"trust-item",children:[l.jsx("i",{className:"fa-solid fa-wand-magic-sparkles text-cyan"}),l.jsx("span",{children:"4K Ultra-HD Mastered"})]}),l.jsxs("div",{className:"trust-item",children:[l.jsx("i",{className:"fa-solid fa-bolt text-purple"}),l.jsx("span",{children:"24–48h Rapid Delivery"})]}),l.jsxs("div",{className:"trust-item",children:[l.jsx("i",{className:"fa-solid fa-music text-emerald"}),l.jsx("span",{children:"100% Commercial Audio"})]}),l.jsxs("div",{className:"trust-item",children:[l.jsx("i",{className:"fa-solid fa-mobile-screen text-gold"}),l.jsx("span",{children:"9:16 & 16:9 Multi-Format"})]})]})]}),l.jsx(uw,{isOpen:!!t,project:t,onClose:()=>r(null)})]})}function hw(){return l.jsx("section",{className:"services-section section-padding",id:"services",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-header scroll-reveal",children:[l.jsx("div",{className:"badge-wrapper-pill",children:l.jsxs("span",{className:"section-subtitle-pill",children:[l.jsx("i",{className:"fa-solid fa-tag"})," TRANSPARENT RATES & PACKAGES"]})}),l.jsx("h2",{className:"section-title",children:"Transparent & Affordable Packages"}),l.jsx("div",{className:"title-underline"}),l.jsx("p",{className:"section-intro",children:"No hidden costs, no complicated contracts. High-retention video editing and creator sponsorship packages built for rapid delivery and measurable ROI."})]}),l.jsxs("div",{className:"services-grid",children:[l.jsxs("div",{className:"pricing-card-premium card-glow-cyan stagger-1 scroll-reveal",children:[l.jsxs("div",{className:"pricing-card-top",children:[l.jsxs("span",{className:"pricing-badge-luxury badge-cyan",children:[l.jsx("i",{className:"fa-solid fa-bolt"})," SHORT FORMAT"]}),l.jsxs("span",{className:"delivery-time-pill",children:[l.jsx("i",{className:"fa-regular fa-clock"})," 24h Express"]})]}),l.jsx("h3",{className:"package-name",children:"Short Reel Edit"}),l.jsx("p",{className:"package-target",children:"Instagram Reels, YouTube Shorts, TikToks"}),l.jsxs("div",{className:"price-box",children:[l.jsx("span",{className:"currency",children:"₹"}),l.jsx("span",{className:"price price-cyan",children:"600"}),l.jsx("span",{className:"duration",children:"/ video"})]}),l.jsx("p",{className:"package-desc",children:"Engineered to stop scrolling and hold retention through high-velocity beat syncs, kinetic captions, and punchy visual hooks."}),l.jsx("div",{className:"feature-divider"}),l.jsxs("ul",{className:"package-features-premium",children:[l.jsxs("li",{children:[l.jsx("span",{className:"check-icon-circle check-cyan",children:l.jsx("i",{className:"fa-solid fa-check"})}),l.jsxs("span",{children:[l.jsx("strong",{children:"Up to 90 seconds"})," finished cut"]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"check-icon-circle check-cyan",children:l.jsx("i",{className:"fa-solid fa-check"})}),l.jsx("span",{children:"Dynamic word-by-word animated captions"})]}),l.jsxs("li",{children:[l.jsx("span",{className:"check-icon-circle check-cyan",children:l.jsx("i",{className:"fa-solid fa-check"})}),l.jsx("span",{children:"Sound effects (whooshes, risers & beat drops)"})]}),l.jsxs("li",{children:[l.jsx("span",{className:"check-icon-circle check-cyan",children:l.jsx("i",{className:"fa-solid fa-check"})}),l.jsx("span",{children:"Vibrant color grading & skin tone balancing"})]}),l.jsxs("li",{children:[l.jsx("span",{className:"check-icon-circle check-cyan",children:l.jsx("i",{className:"fa-solid fa-check"})}),l.jsx("span",{children:"4K 60FPS crisp vertical export"})]}),l.jsxs("li",{children:[l.jsx("span",{className:"check-icon-circle check-cyan",children:l.jsx("i",{className:"fa-solid fa-check"})}),l.jsxs("span",{children:[l.jsx("strong",{children:"2 Revision Cycles"})," included free"]})]})]}),l.jsx("div",{className:"pricing-cta-premium",children:l.jsxs("a",{href:"https://wa.me/919360870164?text=Hi%20Bikash!%20I%20want%20to%20order%20the%20Short%20Reel%20Editing%20package%20(₹600).",target:"_blank",rel:"noopener noreferrer",className:"btn btn-pricing btn-cyan btn-block pulse-on-hover",children:[l.jsx("i",{className:"fa-brands fa-whatsapp"})," Order Short Reel"]})}),l.jsx("div",{className:"card-bottom-glow-bar glow-cyan"})]}),l.jsxs("div",{className:"pricing-card-premium card-glow-purple stagger-2 scroll-reveal",children:[l.jsxs("div",{className:"pricing-card-top",children:[l.jsxs("span",{className:"pricing-badge-luxury badge-purple",children:[l.jsx("i",{className:"fa-solid fa-film"})," LONG FORMAT"]}),l.jsxs("span",{className:"delivery-time-pill pill-purple",children:[l.jsx("i",{className:"fa-regular fa-clock"})," 48h Delivery"]})]}),l.jsx("h3",{className:"package-name",children:"Long Video Album"}),l.jsx("p",{className:"package-target",children:"Weddings, Music Videos, Vlogs & Documentaries"}),l.jsxs("div",{className:"price-box",children:[l.jsx("span",{className:"currency",children:"₹"}),l.jsx("span",{className:"price price-purple",children:"3000"}),l.jsx("span",{className:"duration",children:"/ video"})]}),l.jsx("p",{className:"package-desc",children:"Comprehensive story-driven cinematic production featuring multi-track acoustic audio design, cinematic speed ramps, and Hollywood-grade color palettes."}),l.jsx("div",{className:"feature-divider"}),l.jsxs("ul",{className:"package-features-premium",children:[l.jsxs("li",{children:[l.jsx("span",{className:"check-icon-circle check-purple",children:l.jsx("i",{className:"fa-solid fa-check"})}),l.jsxs("span",{children:[l.jsx("strong",{children:"Full length narrative"})," (up to 15 mins)"]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"check-icon-circle check-purple",children:l.jsx("i",{className:"fa-solid fa-check"})}),l.jsx("span",{children:"Emotional storytelling & pacing curve"})]}),l.jsxs("li",{children:[l.jsx("span",{className:"check-icon-circle check-purple",children:l.jsx("i",{className:"fa-solid fa-check"})}),l.jsx("span",{children:"Advanced cinematic LUT grading & correction"})]}),l.jsxs("li",{children:[l.jsx("span",{className:"check-icon-circle check-purple",children:l.jsx("i",{className:"fa-solid fa-check"})}),l.jsx("span",{children:"Full multi-track vocal leveling & sound mixing"})]}),l.jsxs("li",{children:[l.jsx("span",{className:"check-icon-circle check-purple",children:l.jsx("i",{className:"fa-solid fa-check"})}),l.jsx("span",{children:"Smooth speed ramping & whip transitions"})]}),l.jsxs("li",{children:[l.jsx("span",{className:"check-icon-circle check-purple",children:l.jsx("i",{className:"fa-solid fa-check"})}),l.jsxs("span",{children:[l.jsx("strong",{children:"3 Revision Cycles"})," + raw project files"]})]})]}),l.jsx("div",{className:"pricing-cta-premium",children:l.jsxs("a",{href:"https://wa.me/919360870164?text=Hi%20Bikash!%20I%20want%20to%20order%20the%20Long%20Video%20Album%20package%20(₹3000).",target:"_blank",rel:"noopener noreferrer",className:"btn btn-pricing btn-purple btn-block pulse-on-hover",children:[l.jsx("i",{className:"fa-brands fa-whatsapp"})," Order Long Album"]})}),l.jsx("div",{className:"card-bottom-glow-bar glow-purple"})]}),l.jsxs("div",{className:"pricing-card-premium card-glow-emerald stagger-3 scroll-reveal",children:[l.jsxs("div",{className:"pricing-card-top",children:[l.jsxs("span",{className:"pricing-badge-luxury badge-emerald",children:[l.jsx("i",{className:"fa-solid fa-handshake"})," SPONSOR COLLAB"]}),l.jsxs("span",{className:"delivery-time-pill pill-emerald",children:[l.jsx("i",{className:"fa-solid fa-chart-line"})," 50K+ Reach"]})]}),l.jsx("h3",{className:"package-name",children:"Paid Promotion & Collab"}),l.jsx("p",{className:"package-target",children:"Brands, Startups, SaaS Apps & Creators"}),l.jsxs("div",{className:"price-box",children:[l.jsx("span",{className:"currency",children:"₹"}),l.jsx("span",{className:"price price-emerald",children:"1500"}),l.jsx("span",{className:"duration",children:"/ campaign"})]}),l.jsx("p",{className:"package-desc",children:"Designed for products looking for organic reach, authentic creator advocacy, and published co-author posts with tracked conversion bio-links."}),l.jsx("div",{className:"feature-divider"}),l.jsxs("ul",{className:"package-features-premium",children:[l.jsxs("li",{children:[l.jsx("span",{className:"check-icon-circle check-emerald",children:l.jsx("i",{className:"fa-solid fa-check"})}),l.jsxs("span",{children:[l.jsx("strong",{children:"1 Dedicated Sponsored Reel"})," authored by Bikash"]})]}),l.jsxs("li",{children:[l.jsx("span",{className:"check-icon-circle check-emerald",children:l.jsx("i",{className:"fa-solid fa-check"})}),l.jsx("span",{children:"Instagram Co-Author & Tagged Collab Post"})]}),l.jsxs("li",{children:[l.jsx("span",{className:"check-icon-circle check-emerald",children:l.jsx("i",{className:"fa-solid fa-check"})}),l.jsx("span",{children:"24h Active Story blast with Link Sticker"})]}),l.jsxs("li",{children:[l.jsx("span",{className:"check-icon-circle check-emerald",children:l.jsx("i",{className:"fa-solid fa-check"})}),l.jsx("span",{children:"Scripting, hook architecture & product b-roll"})]}),l.jsxs("li",{children:[l.jsx("span",{className:"check-icon-circle check-emerald",children:l.jsx("i",{className:"fa-solid fa-check"})}),l.jsx("span",{children:"Complete 4K editing & sound design included"})]}),l.jsxs("li",{children:[l.jsx("span",{className:"check-icon-circle check-emerald",children:l.jsx("i",{className:"fa-solid fa-check"})}),l.jsx("span",{children:"Targeted creator & tech demographic delivery"})]})]}),l.jsx("div",{className:"pricing-cta-premium",children:l.jsxs("a",{href:"https://wa.me/919360870164?text=Hi%20Bikash!%20I%20want%20to%20book%20a%20Paid%20Promotion%20/%20Brand%20Sponsorship%20campaign%20(₹1500).",target:"_blank",rel:"noopener noreferrer",className:"btn btn-pricing btn-emerald btn-block pulse-on-hover",children:[l.jsx("i",{className:"fa-solid fa-bullhorn"})," Book Brand Collab"]})}),l.jsx("div",{className:"card-bottom-glow-bar glow-emerald"})]})]}),l.jsxs("div",{className:"pricing-guarantee-ribbon scroll-reveal",children:[l.jsxs("div",{className:"guarantee-box",children:[l.jsx("div",{className:"guarantee-icon-wrap icon-cyan",children:l.jsx("i",{className:"fa-solid fa-shield-heart"})}),l.jsxs("div",{className:"guarantee-text",children:[l.jsx("h4",{children:"100% Satisfaction"}),l.jsx("p",{children:"Free revisions until your vision is perfectly delivered."})]})]}),l.jsxs("div",{className:"guarantee-box",children:[l.jsx("div",{className:"guarantee-icon-wrap icon-purple",children:l.jsx("i",{className:"fa-solid fa-bolt-lightning"})}),l.jsxs("div",{className:"guarantee-text",children:[l.jsx("h4",{children:"24–48h Rapid Delivery"}),l.jsx("p",{children:"Direct Google Drive & WhatsApp private download links."})]})]}),l.jsxs("div",{className:"guarantee-box",children:[l.jsx("div",{className:"guarantee-icon-wrap icon-emerald",children:l.jsx("i",{className:"fa-solid fa-lock"})}),l.jsxs("div",{className:"guarantee-text",children:[l.jsx("h4",{children:"Transparent Milestones"}),l.jsx("p",{children:"50% advance to start, 50% post final review approval."})]})]})]})]})})}function fw(){const[s,e]=st.useState(!1),t="9360870164",r=()=>{navigator.clipboard.writeText(t).then(()=>{e(!0),setTimeout(()=>e(!1),2e3)})};return l.jsxs("section",{className:"contact-section section-padding",id:"contact",children:[l.jsx("div",{className:"contact-ambient-glow glow-left"}),l.jsx("div",{className:"contact-ambient-glow glow-right"}),l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-header scroll-reveal",children:[l.jsx("span",{className:"section-subtitle",children:"GET IN TOUCH & PAY"}),l.jsx("h2",{className:"section-title",children:"Start Your Project Today"}),l.jsx("div",{className:"title-underline"})]}),l.jsxs("div",{className:"contact-grid",children:[l.jsxs("div",{className:"contact-info-card scroll-reveal",children:[l.jsx("h3",{className:"contact-heading",children:"Contact Information"}),l.jsx("p",{className:"contact-intro",children:"Have an idea or raw footage that needs visual magic? Reach out on phone or social media to discuss rates, storyboards, or brand sponsorships."}),l.jsxs("div",{className:"contact-details-list",children:[l.jsxs("a",{href:"https://wa.me/919360870164?text=Hi%20Bikash!%20I%20represent%20a%20brand%20and%20want%20to%20collaborate%20for%20a%20paid%20promotion.",target:"_blank",rel:"noopener noreferrer",className:"contact-row-item collab-highlight-row",children:[l.jsx("div",{className:"contact-icon-box icon-cyan",children:l.jsx("i",{className:"fa-solid fa-bullhorn"})}),l.jsxs("div",{className:"contact-row-text",children:[l.jsx("span",{className:"contact-label label-cyan",children:"BRAND INQUIRIES & COLLABS"}),l.jsxs("span",{className:"contact-value",children:["WhatsApp Sponsor Desk"," ",l.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square row-arrow"})]})]})]}),l.jsxs("a",{href:"tel:9360870164",className:"contact-row-item",children:[l.jsx("div",{className:"contact-icon-box icon-blue",children:l.jsx("i",{className:"fa-solid fa-phone"})}),l.jsxs("div",{className:"contact-row-text",children:[l.jsx("span",{className:"contact-label",children:"MOBILE CALL"}),l.jsx("span",{className:"contact-value",children:"+919360870164"})]})]}),l.jsxs("a",{href:"https://instagram.com/bikash_suna_07",target:"_blank",rel:"noopener noreferrer",className:"contact-row-item",children:[l.jsx("div",{className:"contact-icon-box icon-instagram",children:l.jsx("i",{className:"fa-brands fa-instagram"})}),l.jsxs("div",{className:"contact-row-text",children:[l.jsx("span",{className:"contact-label",children:"INSTAGRAM PROFILE"}),l.jsxs("span",{className:"contact-value",children:["@bikash_suna_07"," ",l.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square row-arrow"})]})]})]}),l.jsxs("div",{className:"contact-row-item contact-row-static",children:[l.jsx("div",{className:"contact-icon-box icon-purple",children:l.jsx("i",{className:"fa-solid fa-location-dot"})}),l.jsxs("div",{className:"contact-row-text",children:[l.jsx("span",{className:"contact-label",children:"LOCATION"}),l.jsx("span",{className:"contact-value",children:"Odisha, Jharsuguda"})]})]})]}),l.jsxs("div",{className:"contact-social-row",children:[l.jsx("a",{href:"https://instagram.com/bikash_suna_07",target:"_blank",rel:"noopener noreferrer",className:"social-circle-link ig-circle","aria-label":"Instagram Profile",title:"Instagram Profile",children:l.jsx("i",{className:"fa-brands fa-instagram"})}),l.jsx("a",{href:"https://wa.me/919360870164",target:"_blank",rel:"noopener noreferrer",className:"social-circle-link wa-circle","aria-label":"WhatsApp Chat",title:"WhatsApp Chat",children:l.jsx("i",{className:"fa-brands fa-whatsapp"})}),l.jsx("a",{href:"tel:9360870164",className:"social-circle-link phone-circle","aria-label":"Call Mobile",title:"Call Mobile",children:l.jsx("i",{className:"fa-solid fa-phone"})})]})]}),l.jsxs("div",{className:"payment-card scroll-reveal",children:[l.jsxs("div",{className:"payment-header-block",children:[l.jsx("h3",{className:"payment-heading",children:"Quick & Easy Payments"}),l.jsx("p",{className:"payment-intro",children:"Direct payments accepted via GPay, PhonePe, or Paytm UPI."})]}),l.jsxs("div",{className:"payment-body-block",children:[l.jsxs("div",{className:"upi-payment-box",children:[l.jsx("span",{className:"upi-field-label",children:"UPI PHONE / PAYMENT NUMBER"}),l.jsxs("div",{className:"upi-input-wrapper",children:[l.jsx("input",{type:"text",value:t,readOnly:!0,className:"upi-number-field","aria-label":"UPI Payment Number"}),l.jsx("button",{type:"button",className:"btn-copy-upi",onClick:r,"aria-label":"Copy UPI number",title:"Copy to clipboard",children:l.jsx("i",{className:s?"fa-solid fa-check text-emerald":"fa-regular fa-copy",style:{color:s?"#10b981":""}})}),l.jsx("span",{className:`copy-toast-tooltip ${s?"show":""}`,children:"Copied!"})]})]}),l.jsxs("div",{className:"qr-scanner-box",children:[l.jsxs("div",{className:"qr-viewport",children:[l.jsx("span",{className:"qr-corner qr-tl"}),l.jsx("span",{className:"qr-corner qr-tr"}),l.jsx("span",{className:"qr-corner qr-bl"}),l.jsx("span",{className:"qr-corner qr-br"}),l.jsx("div",{className:"qr-laser-line"}),l.jsxs("svg",{className:"qr-matrix-svg",viewBox:"0 0 160 160",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("rect",{width:"160",height:"160",rx:"10",fill:"#0b0e17"}),l.jsx("rect",{x:"14",y:"14",width:"38",height:"38",rx:"5",fill:"#18152e",stroke:"#c084fc",strokeWidth:"3"}),l.jsx("rect",{x:"22",y:"22",width:"22",height:"22",rx:"3",fill:"#0b0e17"}),l.jsx("rect",{x:"27",y:"27",width:"12",height:"12",rx:"2",fill:"#c084fc"}),l.jsx("rect",{x:"108",y:"14",width:"38",height:"38",rx:"5",fill:"#18152e",stroke:"#c084fc",strokeWidth:"3"}),l.jsx("rect",{x:"116",y:"22",width:"22",height:"22",rx:"3",fill:"#0b0e17"}),l.jsx("rect",{x:"121",y:"27",width:"12",height:"12",rx:"2",fill:"#c084fc"}),l.jsx("rect",{x:"14",y:"108",width:"38",height:"38",rx:"5",fill:"#18152e",stroke:"#c084fc",strokeWidth:"3"}),l.jsx("rect",{x:"22",y:"116",width:"22",height:"22",rx:"3",fill:"#0b0e17"}),l.jsx("rect",{x:"27",y:"121",width:"12",height:"12",rx:"2",fill:"#c084fc"}),l.jsx("rect",{x:"112",y:"112",width:"24",height:"24",rx:"3",fill:"#18152e",stroke:"#38bdf8",strokeWidth:"2.5"}),l.jsx("rect",{x:"119",y:"119",width:"10",height:"10",rx:"2",fill:"#0b0e17"}),l.jsx("rect",{x:"122",y:"122",width:"4",height:"4",rx:"1",fill:"#38bdf8"}),l.jsxs("g",{fill:"#f8fafc",opacity:"0.9",children:[l.jsx("rect",{x:"58",y:"18",width:"5",height:"5",rx:"1"}),l.jsx("rect",{x:"68",y:"18",width:"5",height:"5",rx:"1",fill:"#c084fc"}),l.jsx("rect",{x:"78",y:"18",width:"5",height:"5",rx:"1"}),l.jsx("rect",{x:"88",y:"18",width:"5",height:"5",rx:"1",fill:"#38bdf8"}),l.jsx("rect",{x:"98",y:"18",width:"5",height:"5",rx:"1"}),l.jsx("rect",{x:"18",y:"58",width:"5",height:"5",rx:"1"}),l.jsx("rect",{x:"18",y:"68",width:"5",height:"5",rx:"1",fill:"#c084fc"}),l.jsx("rect",{x:"18",y:"78",width:"5",height:"5",rx:"1"}),l.jsx("rect",{x:"18",y:"88",width:"5",height:"5",rx:"1",fill:"#38bdf8"}),l.jsx("rect",{x:"18",y:"98",width:"5",height:"5",rx:"1"}),l.jsx("rect",{x:"28",y:"58",width:"6",height:"6",rx:"1",fill:"#38bdf8"}),l.jsx("rect",{x:"38",y:"58",width:"6",height:"6",rx:"1"}),l.jsx("rect",{x:"48",y:"58",width:"6",height:"6",rx:"1",fill:"#c084fc"}),l.jsx("rect",{x:"28",y:"70",width:"6",height:"6",rx:"1"}),l.jsx("rect",{x:"38",y:"70",width:"6",height:"6",rx:"1",fill:"#38bdf8"}),l.jsx("rect",{x:"48",y:"70",width:"6",height:"6",rx:"1"}),l.jsx("rect",{x:"28",y:"82",width:"6",height:"6",rx:"1",fill:"#c084fc"}),l.jsx("rect",{x:"38",y:"82",width:"6",height:"6",rx:"1"}),l.jsx("rect",{x:"48",y:"82",width:"6",height:"6",rx:"1",fill:"#38bdf8"}),l.jsx("rect",{x:"58",y:"28",width:"6",height:"6",rx:"1",fill:"#c084fc"}),l.jsx("rect",{x:"70",y:"28",width:"6",height:"6",rx:"1"}),l.jsx("rect",{x:"82",y:"28",width:"6",height:"6",rx:"1",fill:"#38bdf8"}),l.jsx("rect",{x:"94",y:"28",width:"6",height:"6",rx:"1"}),l.jsx("rect",{x:"58",y:"40",width:"6",height:"6",rx:"1"}),l.jsx("rect",{x:"70",y:"40",width:"6",height:"6",rx:"1",fill:"#c084fc"}),l.jsx("rect",{x:"82",y:"40",width:"6",height:"6",rx:"1"}),l.jsx("rect",{x:"94",y:"40",width:"6",height:"6",rx:"1",fill:"#38bdf8"}),l.jsx("rect",{x:"58",y:"112",width:"6",height:"6",rx:"1",fill:"#38bdf8"}),l.jsx("rect",{x:"70",y:"112",width:"6",height:"6",rx:"1"}),l.jsx("rect",{x:"82",y:"112",width:"6",height:"6",rx:"1",fill:"#c084fc"}),l.jsx("rect",{x:"94",y:"112",width:"6",height:"6",rx:"1"}),l.jsx("rect",{x:"58",y:"124",width:"6",height:"6",rx:"1"}),l.jsx("rect",{x:"70",y:"124",width:"6",height:"6",rx:"1",fill:"#38bdf8"}),l.jsx("rect",{x:"82",y:"124",width:"6",height:"6",rx:"1"}),l.jsx("rect",{x:"94",y:"124",width:"6",height:"6",rx:"1",fill:"#c084fc"}),l.jsx("rect",{x:"58",y:"136",width:"6",height:"6",rx:"1",fill:"#c084fc"}),l.jsx("rect",{x:"70",y:"136",width:"6",height:"6",rx:"1"}),l.jsx("rect",{x:"82",y:"136",width:"6",height:"6",rx:"1",fill:"#38bdf8"}),l.jsx("rect",{x:"94",y:"136",width:"6",height:"6",rx:"1"}),l.jsx("rect",{x:"108",y:"58",width:"6",height:"6",rx:"1",fill:"#38bdf8"}),l.jsx("rect",{x:"120",y:"58",width:"6",height:"6",rx:"1"}),l.jsx("rect",{x:"132",y:"58",width:"6",height:"6",rx:"1",fill:"#c084fc"}),l.jsx("rect",{x:"108",y:"70",width:"6",height:"6",rx:"1"}),l.jsx("rect",{x:"120",y:"70",width:"6",height:"6",rx:"1",fill:"#38bdf8"}),l.jsx("rect",{x:"132",y:"70",width:"6",height:"6",rx:"1"}),l.jsx("rect",{x:"108",y:"82",width:"6",height:"6",rx:"1",fill:"#c084fc"}),l.jsx("rect",{x:"120",y:"82",width:"6",height:"6",rx:"1"}),l.jsx("rect",{x:"132",y:"82",width:"6",height:"6",rx:"1",fill:"#38bdf8"}),l.jsx("rect",{x:"108",y:"94",width:"6",height:"6",rx:"1"}),l.jsx("rect",{x:"120",y:"94",width:"6",height:"6",rx:"1",fill:"#c084fc"}),l.jsx("rect",{x:"132",y:"94",width:"6",height:"6",rx:"1"})]})]}),l.jsx("div",{className:"qr-center-emblem",children:l.jsx("i",{className:"fa-solid fa-indian-rupee-sign"})})]}),l.jsx("span",{className:"qr-instruction-text",children:"Scan with GPay / PhonePe / Paytm"})]}),l.jsxs("div",{className:"upi-apps-dock",children:[l.jsxs("span",{className:"upi-app-pill gpay-pill",children:[l.jsx("i",{className:"fa-brands fa-google-pay"})," GPay"]}),l.jsxs("span",{className:"upi-app-pill phonepe-pill",children:[l.jsx("i",{className:"fa-solid fa-wallet"})," PhonePe"]}),l.jsxs("span",{className:"upi-app-pill paytm-pill",children:[l.jsx("i",{className:"fa-solid fa-receipt"})," Paytm"]}),l.jsxs("span",{className:"upi-app-pill bhim-pill",children:[l.jsx("i",{className:"fa-solid fa-building-columns"})," BHIM UPI"]})]})]})]})]})]})]})}function pw(){return l.jsx("footer",{className:"main-footer",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"footer-grid",children:[l.jsxs("div",{className:"footer-brand",children:[l.jsxs("a",{href:"#hero",className:"logo",children:[l.jsx("span",{className:"logo-accent",children:"BIKASH"}),"SUNA"]}),l.jsx("p",{children:"Professional video editing and content creator services helping brands and digital creators tell visual stories that convert and engage."})]}),l.jsxs("div",{className:"footer-links",children:[l.jsx("h4",{children:"Navigation"}),l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx("a",{href:"#hero",children:"Home"})}),l.jsx("li",{children:l.jsx("a",{href:"#about",children:"About"})}),l.jsx("li",{children:l.jsx("a",{href:"#portfolio",children:"Portfolio"})}),l.jsx("li",{children:l.jsx("a",{href:"#services",children:"Services & Collabs"})}),l.jsx("li",{children:l.jsx("a",{href:"#contact",children:"Contact & WhatsApp"})})]})]}),l.jsxs("div",{className:"footer-contact-info",children:[l.jsx("h4",{children:"Get in Touch"}),l.jsxs("p",{children:[l.jsx("i",{className:"fa-solid fa-phone"})," +91 9360870164"]}),l.jsxs("p",{children:[l.jsx("i",{className:"fa-brands fa-instagram"})," @bikash_suna_07"]}),l.jsxs("p",{children:[l.jsx("i",{className:"fa-solid fa-location-dot"})," Jharsuguda, Odisha"]})]})]}),l.jsx("div",{className:"footer-bottom",children:l.jsxs("p",{children:["© ",new Date().getFullYear()," Bikash Suna. All Rights Reserved. Powered by React & Three.js."]})})]})})}function mw(){const[s,e]=st.useState(!1),[t,r]=st.useState([{id:1,sender:"bot",text:"Hi there! 👋 Welcome to my studio portfolio. What kind of project or collaboration are you looking for?",time:"Just now"}]),[o,c]=st.useState(!1),[d,h]=st.useState(""),[p,m]=st.useState(!0),[v,_]=st.useState(null),x=st.useRef(null),M="919360870164",E=[{id:"reel",icon:"fa-bolt",label:"Short Reel Edit (₹600)",msg:"Hi Bikash! I need a high-energy Short Reel editing service for Instagram/YouTube. Let us discuss the project details!"},{id:"album",icon:"fa-film",label:"Long Video Album (₹3000)",msg:"Hi Bikash! I am looking for a full story-driven Video Album / Wedding editing service. Let us connect!"},{id:"collab",icon:"fa-handshake",label:"Brand Collab / Paid Promo (₹1500)",msg:"Hi Bikash! I represent a brand and would like to collaborate with you for a Paid Promotion / Sponsored Reel campaign."},{id:"rush",icon:"fa-gauge-high",label:"Rush 24h Express Delivery",msg:"Hi Bikash! I have an urgent editing project that needs fast 24-48h turnaround. Are you available?"}];st.useEffect(()=>{var R;s&&((R=x.current)==null||R.scrollIntoView({behavior:"smooth"}))},[t,o,s]);const T=R=>{_(R.id);const P={id:Date.now(),sender:"user",text:R.label,time:"Just now"};r(A=>[...A,P]),c(!0),setTimeout(()=>{c(!1);const A={id:Date.now()+1,sender:"bot",text:`Awesome choice! 🚀 Opening WhatsApp now with your "${R.label}" details ready...`,time:"Just now",actionUrl:`https://wa.me/${M}?text=${encodeURIComponent(R.msg)}`,actionLabel:"Click to Open WhatsApp"};r(G=>[...G,A]),setTimeout(()=>{window.open(`https://wa.me/${M}?text=${encodeURIComponent(R.msg)}`,"_blank")},700)},600)},S=R=>{if(R.preventDefault(),!d.trim())return;const P=d.trim();h("");const A={id:Date.now(),sender:"user",text:P,time:"Just now"};r(k=>[...k,A]),c(!0);const G=`https://wa.me/${M}?text=${encodeURIComponent(`Hi Bikash! Message from your portfolio: "${P}"`)}`;setTimeout(()=>{c(!1);const k={id:Date.now()+1,sender:"bot",text:"Connecting you straight to Bikash on WhatsApp right now! 💬",time:"Just now",actionUrl:G,actionLabel:"Open in WhatsApp"};r(D=>[...D,k]),setTimeout(()=>{window.open(G,"_blank")},600)},600)},y=()=>{e(!s),s||m(!1)};return l.jsxs("aside",{className:"floating-wa-container","aria-label":"WhatsApp automated chat assistant",children:[s&&l.jsxs("div",{className:"wa-chat-window animate-slide-up",role:"dialog","aria-modal":"true",children:[l.jsxs("div",{className:"wa-chat-header",children:[l.jsxs("div",{className:"wa-header-avatar-box",children:[l.jsx("img",{src:"assets/profile.jpg",alt:"Bikash Suna",className:"wa-header-avatar"}),l.jsx("span",{className:"wa-online-indicator"})]}),l.jsxs("div",{className:"wa-header-info",children:[l.jsxs("div",{className:"wa-header-name",children:[l.jsx("span",{children:"Bikash Suna"}),l.jsx("i",{className:"fa-solid fa-circle-check verified-badge",title:"Verified Creator"})]}),l.jsxs("div",{className:"wa-header-status",children:[l.jsx("span",{className:"pulse-dot-mini"}),l.jsx("span",{children:"Online • Instant WhatsApp Replies"})]})]}),l.jsx("button",{className:"wa-close-btn",onClick:()=>e(!1),"aria-label":"Close chat",children:l.jsx("i",{className:"fa-solid fa-xmark"})})]}),l.jsxs("div",{className:"wa-chat-body",children:[l.jsx("div",{className:"wa-chat-timestamp",children:l.jsx("span",{children:"Today • Direct Studio Hotline"})}),t.map(R=>l.jsx("div",{className:`wa-msg-bubble ${R.sender==="user"?"user-msg":"bot-msg"}`,children:l.jsxs("div",{className:"wa-bubble-content",children:[l.jsx("p",{children:R.text}),R.actionUrl&&l.jsxs("a",{href:R.actionUrl,target:"_blank",rel:"noopener noreferrer",className:"wa-direct-action-btn",children:[l.jsx("i",{className:"fa-brands fa-whatsapp"})," ",R.actionLabel]}),l.jsx("span",{className:"wa-msg-time",children:R.time})]})},R.id)),o&&l.jsx("div",{className:"wa-msg-bubble bot-msg typing-bubble",children:l.jsxs("div",{className:"typing-dots",children:[l.jsx("span",{}),l.jsx("span",{}),l.jsx("span",{})]})}),!v&&l.jsxs("div",{className:"wa-automation-presets",children:[l.jsx("span",{className:"presets-title",children:"Tap a quick option to start:"}),l.jsx("div",{className:"presets-grid",children:E.map(R=>l.jsxs("button",{type:"button",className:"preset-btn",onClick:()=>T(R),children:[l.jsx("i",{className:`fa-solid ${R.icon}`}),l.jsx("span",{children:R.label})]},R.id))})]}),l.jsx("div",{ref:x})]}),l.jsxs("form",{className:"wa-chat-footer",onSubmit:S,children:[l.jsx("input",{type:"text",className:"wa-chat-input",placeholder:"Type custom inquiry or rate...",value:d,onChange:R=>h(R.target.value)}),l.jsx("button",{type:"submit",className:"wa-send-btn",disabled:!d.trim(),"aria-label":"Send to WhatsApp",children:l.jsx("i",{className:"fa-solid fa-paper-plane"})})]})]}),l.jsxs("button",{type:"button",className:"floating-wa-btn",onClick:y,"aria-label":"Open WhatsApp automated chat",children:[l.jsxs("div",{className:"wa-icon-wrapper",children:[l.jsx("i",{className:`fa-brands fa-whatsapp ${s?"rotate-hide":"rotate-show"}`}),l.jsx("i",{className:`fa-solid fa-xmark ${s?"rotate-show":"rotate-hide"}`})]}),p&&!s&&l.jsx("span",{className:"wa-notification-badge","aria-label":"1 new message",children:"1"}),l.jsx("span",{className:"wa-btn-pulse-ring"}),l.jsx("span",{className:"wa-btn-pulse-glow"}),!s&&l.jsxs("div",{className:"wa-floating-tooltip",children:[l.jsx("span",{className:"tooltip-dot"}),l.jsx("span",{children:"Chat on WhatsApp"})]})]})]})}function gw(){const[s,e]=st.useState(!1),[t,r]=st.useState("hero"),o=st.useRef(null),c=st.useRef(null),d=st.useRef(null),h=st.useRef(null);st.useEffect(()=>{const _=new Dx({duration:.85,easing:A=>Math.min(1,1.001-Math.pow(2,-10*A)),direction:"vertical",gestureDirection:"vertical",smooth:!0,smoothTouch:!1,touchMultiplier:1.8});o.current=_,window.lenis=_;let x;function M(A){_.raf(A),x=requestAnimationFrame(M)}x=requestAnimationFrame(M);const E=["hero","what-i-do","about","media-kit","portfolio","services","contact"],T=100.53,S=({scroll:A,limit:G,progress:k})=>{const D=G>0?G:document.documentElement.scrollHeight-window.innerHeight,F=D>0?Math.min(100,Math.max(0,k!==void 0?k*100:A/D*100)):0,L=T-T*F/100;c.current&&(c.current.style.strokeDashoffset=`${L}`),d.current&&(d.current.textContent=`${Math.round(F)}%`),h.current&&(h.current.style.transform=`scaleX(${F/100})`);const b=A>300;e(ie=>ie!==b?b:ie);const z=window.innerHeight*.38;for(let ie=E.length-1;ie>=0;ie--){const Q=document.getElementById(E[ie]);if(Q&&Q.getBoundingClientRect().top<=z){r(he=>he!==E[ie]?E[ie]:he);break}}};_.on("scroll",S),S({scroll:window.scrollY,limit:document.documentElement.scrollHeight-window.innerHeight,progress:0});const y=A=>{const G=A.target.closest('a[href^="#"]');if(!G)return;const k=G.getAttribute("href");if(k&&k.startsWith("#")&&k.length>1){const D=document.querySelector(k);D&&(A.preventDefault(),_.scrollTo(D,{offset:-70,duration:.85}))}};document.addEventListener("click",y);const R=new IntersectionObserver(A=>{A.forEach(G=>{G.isIntersecting&&G.target.classList.add("is-revealed")})},{root:null,rootMargin:"0px 0px -50px 0px",threshold:.08}),P=document.querySelectorAll(".scroll-reveal, .reveal-on-scroll, .section-header, .pillar-card, .profile-simple-card, .about-portrait-wrapper, .intro-card, .intro-card-premium, .skill-item, .skill-item-premium, .mediakit-stat-card, .mediakit-stat-card-premium, .workflow-step-card, .workflow-card-premium, .pricing-card, .pricing-card-premium, .calculator-box, .contact-info-card, .payment-card");return P.forEach(A=>R.observe(A)),()=>{cancelAnimationFrame(x),_.destroy(),document.removeEventListener("click",y),P.forEach(A=>R.unobserve(A))}},[]);const p=()=>{o.current?o.current.scrollTo(0,{duration:.85}):window.scrollTo({top:0,behavior:"smooth"})},m=_=>{const x=document.getElementById(_);x&&(o.current?o.current.scrollTo(x,{offset:-70,duration:.85}):x.scrollIntoView({behavior:"smooth"}))},v=100.53;return l.jsxs("div",{className:"app-root",children:[l.jsx("div",{className:"scroll-progress-container","aria-hidden":"true",children:l.jsx("div",{ref:h,className:"scroll-progress-bar",style:{transform:"scaleX(0)"},children:l.jsx("div",{className:"scroll-progress-glow-head"})})}),l.jsx(Ix,{activeSection:t,onNavigate:m}),l.jsxs("main",{children:[l.jsx(sw,{}),l.jsx(aw,{}),l.jsx(ow,{}),l.jsx(lw,{}),l.jsx(cw,{}),l.jsx(dw,{}),l.jsx(hw,{}),l.jsx(fw,{})]}),l.jsx(pw,{}),l.jsx(mw,{}),l.jsxs("button",{type:"button",className:`scroll-to-top-btn ${s?"visible":""}`,onClick:p,"aria-label":"Scroll back to top",children:[l.jsxs("svg",{className:"scroll-progress-ring",viewBox:"0 0 36 36","aria-hidden":"true",children:[l.jsx("circle",{className:"progress-ring-track",cx:"18",cy:"18",r:"16"}),l.jsx("circle",{ref:c,className:"progress-ring-indicator",cx:"18",cy:"18",r:"16",strokeDasharray:v,strokeDashoffset:v})]}),l.jsxs("div",{className:"scroll-btn-inner",children:[l.jsx("i",{className:"fa-solid fa-arrow-up scroll-top-arrow"}),l.jsx("span",{ref:d,className:"scroll-percent-label",children:"0%"})]}),l.jsx("span",{className:"scroll-btn-glow"})]})]})}wx.createRoot(document.getElementById("root")).render(l.jsx(vx.StrictMode,{children:l.jsx(gw,{})}));
