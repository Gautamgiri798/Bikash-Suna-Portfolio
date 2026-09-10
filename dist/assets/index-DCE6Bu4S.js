var h_=Object.defineProperty;var f_=(s,e,t)=>e in s?h_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Xe=(s,e,t)=>f_(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Ym(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var mu={exports:{}},Ca={},gu={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function p_(){if(bp)return gt;bp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function _(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function S(O,re,Le){this.props=O,this.context=re,this.refs=A,this.updater=Le||M}S.prototype.isReactComponent={},S.prototype.setState=function(O,re){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,re,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function y(){}y.prototype=S.prototype;function N(O,re,Le){this.props=O,this.context=re,this.refs=A,this.updater=Le||M}var P=N.prototype=new y;P.constructor=N,E(P,S.prototype),P.isPureReactComponent=!0;var T=Array.isArray,j=Object.prototype.hasOwnProperty,F={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function B(O,re,Le){var Z,oe={},Se=null,ve=null;if(re!=null)for(Z in re.ref!==void 0&&(ve=re.ref),re.key!==void 0&&(Se=""+re.key),re)j.call(re,Z)&&!U.hasOwnProperty(Z)&&(oe[Z]=re[Z]);var Ae=arguments.length-2;if(Ae===1)oe.children=Le;else if(1<Ae){for(var Ie=Array(Ae),Ke=0;Ke<Ae;Ke++)Ie[Ke]=arguments[Ke+2];oe.children=Ie}if(O&&O.defaultProps)for(Z in Ae=O.defaultProps,Ae)oe[Z]===void 0&&(oe[Z]=Ae[Z]);return{$$typeof:s,type:O,key:Se,ref:ve,props:oe,_owner:F.current}}function L(O,re){return{$$typeof:s,type:O.type,key:re,ref:O.ref,props:O.props,_owner:O._owner}}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function z(O){var re={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Le){return re[Le]})}var ie=/\/+/g;function Q(O,re){return typeof O=="object"&&O!==null&&O.key!=null?z(""+O.key):re.toString(36)}function de(O,re,Le,Z,oe){var Se=typeof O;(Se==="undefined"||Se==="boolean")&&(O=null);var ve=!1;if(O===null)ve=!0;else switch(Se){case"string":case"number":ve=!0;break;case"object":switch(O.$$typeof){case s:case e:ve=!0}}if(ve)return ve=O,oe=oe(ve),O=Z===""?"."+Q(ve,0):Z,T(oe)?(Le="",O!=null&&(Le=O.replace(ie,"$&/")+"/"),de(oe,re,Le,"",function(Ke){return Ke})):oe!=null&&(R(oe)&&(oe=L(oe,Le+(!oe.key||ve&&ve.key===oe.key?"":(""+oe.key).replace(ie,"$&/")+"/")+O)),re.push(oe)),1;if(ve=0,Z=Z===""?".":Z+":",T(O))for(var Ae=0;Ae<O.length;Ae++){Se=O[Ae];var Ie=Z+Q(Se,Ae);ve+=de(Se,re,Le,Ie,oe)}else if(Ie=_(O),typeof Ie=="function")for(O=Ie.call(O),Ae=0;!(Se=O.next()).done;)Se=Se.value,Ie=Z+Q(Se,Ae++),ve+=de(Se,re,Le,Ie,oe);else if(Se==="object")throw re=String(O),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ve}function he(O,re,Le){if(O==null)return O;var Z=[],oe=0;return de(O,Z,"","",function(Se){return re.call(Le,Se,oe++)}),Z}function ce(O){if(O._status===-1){var re=O._result;re=re(),re.then(function(Le){(O._status===0||O._status===-1)&&(O._status=1,O._result=Le)},function(Le){(O._status===0||O._status===-1)&&(O._status=2,O._result=Le)}),O._status===-1&&(O._status=0,O._result=re)}if(O._status===1)return O._result.default;throw O._result}var ue={current:null},H={transition:null},le={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:H,ReactCurrentOwner:F};function se(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:he,forEach:function(O,re,Le){he(O,function(){re.apply(this,arguments)},Le)},count:function(O){var re=0;return he(O,function(){re++}),re},toArray:function(O){return he(O,function(re){return re})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},gt.Component=S,gt.Fragment=t,gt.Profiler=o,gt.PureComponent=N,gt.StrictMode=r,gt.Suspense=p,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,gt.act=se,gt.cloneElement=function(O,re,Le){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Z=E({},O.props),oe=O.key,Se=O.ref,ve=O._owner;if(re!=null){if(re.ref!==void 0&&(Se=re.ref,ve=F.current),re.key!==void 0&&(oe=""+re.key),O.type&&O.type.defaultProps)var Ae=O.type.defaultProps;for(Ie in re)j.call(re,Ie)&&!U.hasOwnProperty(Ie)&&(Z[Ie]=re[Ie]===void 0&&Ae!==void 0?Ae[Ie]:re[Ie])}var Ie=arguments.length-2;if(Ie===1)Z.children=Le;else if(1<Ie){Ae=Array(Ie);for(var Ke=0;Ke<Ie;Ke++)Ae[Ke]=arguments[Ke+2];Z.children=Ae}return{$$typeof:s,type:O.type,key:oe,ref:Se,props:Z,_owner:ve}},gt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},gt.createElement=B,gt.createFactory=function(O){var re=B.bind(null,O);return re.type=O,re},gt.createRef=function(){return{current:null}},gt.forwardRef=function(O){return{$$typeof:d,render:O}},gt.isValidElement=R,gt.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:ce}},gt.memo=function(O,re){return{$$typeof:m,type:O,compare:re===void 0?null:re}},gt.startTransition=function(O){var re=H.transition;H.transition={};try{O()}finally{H.transition=re}},gt.unstable_act=se,gt.useCallback=function(O,re){return ue.current.useCallback(O,re)},gt.useContext=function(O){return ue.current.useContext(O)},gt.useDebugValue=function(){},gt.useDeferredValue=function(O){return ue.current.useDeferredValue(O)},gt.useEffect=function(O,re){return ue.current.useEffect(O,re)},gt.useId=function(){return ue.current.useId()},gt.useImperativeHandle=function(O,re,Le){return ue.current.useImperativeHandle(O,re,Le)},gt.useInsertionEffect=function(O,re){return ue.current.useInsertionEffect(O,re)},gt.useLayoutEffect=function(O,re){return ue.current.useLayoutEffect(O,re)},gt.useMemo=function(O,re){return ue.current.useMemo(O,re)},gt.useReducer=function(O,re,Le){return ue.current.useReducer(O,re,Le)},gt.useRef=function(O){return ue.current.useRef(O)},gt.useState=function(O){return ue.current.useState(O)},gt.useSyncExternalStore=function(O,re,Le){return ue.current.useSyncExternalStore(O,re,Le)},gt.useTransition=function(){return ue.current.useTransition()},gt.version="18.3.1",gt}var Np;function Xd(){return Np||(Np=1,gu.exports=p_()),gu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function m_(){if(Pp)return Ca;Pp=1;var s=Xd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,m){var v,x={},_=null,M=null;m!==void 0&&(_=""+m),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(M=p.ref);for(v in p)r.call(p,v)&&!l.hasOwnProperty(v)&&(x[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)x[v]===void 0&&(x[v]=p[v]);return{$$typeof:e,type:d,key:_,ref:M,props:x,_owner:o.current}}return Ca.Fragment=t,Ca.jsx=u,Ca.jsxs=u,Ca}var Lp;function g_(){return Lp||(Lp=1,mu.exports=m_()),mu.exports}var f=g_(),dt=Xd();const v_=Ym(dt);var Qo={},vu={exports:{}},bn={},_u={exports:{}},xu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function __(){return Dp||(Dp=1,(function(s){function e(H,le){var se=H.length;H.push(le);e:for(;0<se;){var O=se-1>>>1,re=H[O];if(0<o(re,le))H[O]=le,H[se]=re,se=O;else break e}}function t(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var le=H[0],se=H.pop();if(se!==le){H[0]=se;e:for(var O=0,re=H.length,Le=re>>>1;O<Le;){var Z=2*(O+1)-1,oe=H[Z],Se=Z+1,ve=H[Se];if(0>o(oe,se))Se<re&&0>o(ve,oe)?(H[O]=ve,H[Se]=se,O=Se):(H[O]=oe,H[Z]=se,O=Z);else if(Se<re&&0>o(ve,se))H[O]=ve,H[Se]=se,O=Se;else break e}}return le}function o(H,le){var se=H.sortIndex-le.sortIndex;return se!==0?se:H.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],m=[],v=1,x=null,_=3,M=!1,E=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(H){for(var le=t(m);le!==null;){if(le.callback===null)r(m);else if(le.startTime<=H)r(m),le.sortIndex=le.expirationTime,e(p,le);else break;le=t(m)}}function T(H){if(A=!1,P(H),!E)if(t(p)!==null)E=!0,ce(j);else{var le=t(m);le!==null&&ue(T,le.startTime-H)}}function j(H,le){E=!1,A&&(A=!1,y(B),B=-1),M=!0;var se=_;try{for(P(le),x=t(p);x!==null&&(!(x.expirationTime>le)||H&&!z());){var O=x.callback;if(typeof O=="function"){x.callback=null,_=x.priorityLevel;var re=O(x.expirationTime<=le);le=s.unstable_now(),typeof re=="function"?x.callback=re:x===t(p)&&r(p),P(le)}else r(p);x=t(p)}if(x!==null)var Le=!0;else{var Z=t(m);Z!==null&&ue(T,Z.startTime-le),Le=!1}return Le}finally{x=null,_=se,M=!1}}var F=!1,U=null,B=-1,L=5,R=-1;function z(){return!(s.unstable_now()-R<L)}function ie(){if(U!==null){var H=s.unstable_now();R=H;var le=!0;try{le=U(!0,H)}finally{le?Q():(F=!1,U=null)}}else F=!1}var Q;if(typeof N=="function")Q=function(){N(ie)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,he=de.port2;de.port1.onmessage=ie,Q=function(){he.postMessage(null)}}else Q=function(){S(ie,0)};function ce(H){U=H,F||(F=!0,Q())}function ue(H,le){B=S(function(){H(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){E||M||(E=!0,ce(j))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(H){switch(_){case 1:case 2:case 3:var le=3;break;default:le=_}var se=_;_=le;try{return H()}finally{_=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,le){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var se=_;_=H;try{return le()}finally{_=se}},s.unstable_scheduleCallback=function(H,le,se){var O=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?O+se:O):se=O,H){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=se+re,H={id:v++,callback:le,priorityLevel:H,startTime:se,expirationTime:re,sortIndex:-1},se>O?(H.sortIndex=se,e(m,H),t(p)===null&&H===t(m)&&(A?(y(B),B=-1):A=!0,ue(T,se-O))):(H.sortIndex=re,e(p,H),E||M||(E=!0,ce(j))),H},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(H){var le=_;return function(){var se=_;_=le;try{return H.apply(this,arguments)}finally{_=se}}}})(xu)),xu}var Ip;function x_(){return Ip||(Ip=1,_u.exports=__()),_u.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function y_(){if(Up)return bn;Up=1;var s=Xd(),e=x_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function _(n){return p.call(x,n)?!0:p.call(v,n)?!1:m.test(n)?x[n]=!0:(v[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,c,h,g,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=w}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,N);S[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,N);S[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,N);S[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,c){var h=S.hasOwnProperty(i)?S[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,h,c)&&(a=null),c||h===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var T=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,j=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),H=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,O;function re(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Le=!1;function Z(n,i){if(!n||Le)return"";Le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var c=ee}Reflect.construct(n,[],i)}else{try{i.call()}catch(ee){c=ee}n.call(i.prototype)}else{try{throw Error()}catch(ee){c=ee}n()}}catch(ee){if(ee&&c&&typeof ee.stack=="string"){for(var h=ee.stack.split(`
`),g=c.stack.split(`
`),w=h.length-1,I=g.length-1;1<=w&&0<=I&&h[w]!==g[I];)I--;for(;1<=w&&0<=I;w--,I--)if(h[w]!==g[I]){if(w!==1||I!==1)do if(w--,I--,0>I||h[w]!==g[I]){var k=`
`+h[w].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=w&&0<=I);break}}}finally{Le=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?re(n):""}function oe(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case F:return"Portal";case L:return"Profiler";case B:return"StrictMode";case Q:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case ie:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return i=n.displayName||null,i!==null?i:Se(n.type)||"Memo";case ce:i=n._payload,n=n._init;try{return Se(n(i))}catch{}}return null}function ve(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(n){var i=Ie(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(w){c=""+w,g.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ye(n){n._valueTracker||(n._valueTracker=Ke(n))}function st(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ie(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function xt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function q(n,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function mn(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ae(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function vt(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function pt(n,i){vt(n,i);var a=Ae(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?bt(n,i.type,a):i.hasOwnProperty("defaultValue")&&bt(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ze(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function bt(n,i,a){(i!=="number"||xt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var $e=Array.isArray;function D(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ae(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function C(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function J(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if($e(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ae(a)}}function me(n,i){var a=Ae(i.value),c=Ae(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function _e(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function fe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?fe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ce,Ue=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ft(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Oe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function tt(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function nt(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=tt(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var ke=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mt(n,i){if(i){if(ke[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ot(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rt=null;function W(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,ae=null,pe=null;function Pe(n){if(n=ha(n)){if(typeof Re!="function")throw Error(t(280));var i=n.stateNode;i&&(i=po(i),Re(n.stateNode,n.type,i))}}function Ne(n){ae?pe?pe.push(n):pe=[n]:ae=n}function lt(){if(ae){var n=ae,i=pe;if(pe=ae=null,Pe(n),i)for(n=0;n<i.length;n++)Pe(i[n])}}function Ut(n,i){return n(i)}function Xt(){}var Mt=!1;function Mn(n,i,a){if(Mt)return n(i,a);Mt=!0;try{return Ut(n,i,a)}finally{Mt=!1,(ae!==null||pe!==null)&&(Xt(),lt())}}function gn(n,i){var a=n.stateNode;if(a===null)return null;var c=po(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Jr=!1;if(d)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){Jr=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{Jr=!1}function Mi(n,i,a,c,h,g,w,I,k){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(a,ee)}catch(xe){this.onError(xe)}}var Ei=!1,wr=null,Tr=!1,Xi=null,Ya={onError:function(n){Ei=!0,wr=n}};function Qr(n,i,a,c,h,g,w,I,k){Ei=!1,wr=null,Mi.apply(Ya,arguments)}function qa(n,i,a,c,h,g,w,I,k){if(Qr.apply(this,arguments),Ei){if(Ei){var ee=wr;Ei=!1,wr=null}else throw Error(t(198));Tr||(Tr=!0,Xi=ee)}}function fi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function $a(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ka(n){if(fi(n)!==n)throw Error(t(188))}function Ol(n){var i=n.alternate;if(!i){if(i=fi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return Ka(h),n;if(g===c)return Ka(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=g;else{for(var w=!1,I=h.child;I;){if(I===a){w=!0,a=h,c=g;break}if(I===c){w=!0,c=h,a=g;break}I=I.sibling}if(!w){for(I=g.child;I;){if(I===a){w=!0,a=g,c=h;break}if(I===c){w=!0,c=g,a=h;break}I=I.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function b(n){return n=Ol(n),n!==null?X(n):null}function X(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=X(n);if(i!==null)return i;n=n.sibling}return null}var te=e.unstable_scheduleCallback,ne=e.unstable_cancelCallback,Y=e.unstable_shouldYield,Te=e.unstable_requestPaint,Ee=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,Be=e.unstable_ImmediatePriority,it=e.unstable_UserBlockingPriority,at=e.unstable_NormalPriority,je=e.unstable_LowPriority,yt=e.unstable_IdlePriority,Ct=null,_t=null;function sn(n){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(Ct,n,void 0,(n.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:Tt,qe=Math.log,Qn=Math.LN2;function Tt(n){return n>>>=0,n===0?32:31-(qe(n)/Qn|0)|0}var an=64,ei=4194304;function Yt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function pi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,g=n.pingedLanes,w=a&268435455;if(w!==0){var I=w&~h;I!==0?c=Yt(I):(g&=w,g!==0&&(c=Yt(g)))}else w=a&~h,w!==0?c=Yt(w):g!==0&&(c=Yt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-ct(i),h=1<<a,c|=n[a],i&=~h;return c}function Dt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hn(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var w=31-ct(g),I=1<<w,k=h[w];k===-1?((I&a)===0||(I&c)!==0)&&(h[w]=Dt(I,i)):k<=i&&(n.expiredLanes|=I),g&=~I}}function wi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function vn(){var n=an;return an<<=1,(an&4194240)===0&&(an=64),n}function Vn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function En(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ct(i),n[i]=a}function Za(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-ct(a),g=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~g}}function kl(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-ct(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var Nt=0;function ah(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var oh,zl,lh,ch,uh,Bl=!1,Ja=[],Yi=null,qi=null,$i=null,Ks=new Map,Zs=new Map,Ki=[],Ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dh(n,i){switch(n){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":Ks.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(i.pointerId)}}function Js(n,i,a,c,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},i!==null&&(i=ha(i),i!==null&&zl(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function Ug(n,i,a,c,h){switch(i){case"focusin":return Yi=Js(Yi,n,i,a,c,h),!0;case"dragenter":return qi=Js(qi,n,i,a,c,h),!0;case"mouseover":return $i=Js($i,n,i,a,c,h),!0;case"pointerover":var g=h.pointerId;return Ks.set(g,Js(Ks.get(g)||null,n,i,a,c,h)),!0;case"gotpointercapture":return g=h.pointerId,Zs.set(g,Js(Zs.get(g)||null,n,i,a,c,h)),!0}return!1}function hh(n){var i=Ar(n.target);if(i!==null){var a=fi(i);if(a!==null){if(i=a.tag,i===13){if(i=$a(a),i!==null){n.blockedOn=i,uh(n.priority,function(){lh(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Qa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Vl(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Rt=c,a.target.dispatchEvent(c),Rt=null}else return i=ha(a),i!==null&&zl(i),n.blockedOn=a,!1;i.shift()}return!0}function fh(n,i,a){Qa(n)&&a.delete(i)}function Fg(){Bl=!1,Yi!==null&&Qa(Yi)&&(Yi=null),qi!==null&&Qa(qi)&&(qi=null),$i!==null&&Qa($i)&&($i=null),Ks.forEach(fh),Zs.forEach(fh)}function Qs(n,i){n.blockedOn===i&&(n.blockedOn=null,Bl||(Bl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Fg)))}function ea(n){function i(h){return Qs(h,n)}if(0<Ja.length){Qs(Ja[0],n);for(var a=1;a<Ja.length;a++){var c=Ja[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Yi!==null&&Qs(Yi,n),qi!==null&&Qs(qi,n),$i!==null&&Qs($i,n),Ks.forEach(i),Zs.forEach(i),a=0;a<Ki.length;a++)c=Ki[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Ki.length&&(a=Ki[0],a.blockedOn===null);)hh(a),a.blockedOn===null&&Ki.shift()}var es=T.ReactCurrentBatchConfig,eo=!0;function Og(n,i,a,c){var h=Nt,g=es.transition;es.transition=null;try{Nt=1,Hl(n,i,a,c)}finally{Nt=h,es.transition=g}}function kg(n,i,a,c){var h=Nt,g=es.transition;es.transition=null;try{Nt=4,Hl(n,i,a,c)}finally{Nt=h,es.transition=g}}function Hl(n,i,a,c){if(eo){var h=Vl(n,i,a,c);if(h===null)sc(n,i,c,to,a),dh(n,c);else if(Ug(h,n,i,a,c))c.stopPropagation();else if(dh(n,c),i&4&&-1<Ig.indexOf(n)){for(;h!==null;){var g=ha(h);if(g!==null&&oh(g),g=Vl(n,i,a,c),g===null&&sc(n,i,c,to,a),g===h)break;h=g}h!==null&&c.stopPropagation()}else sc(n,i,c,null,a)}}var to=null;function Vl(n,i,a,c){if(to=null,n=W(c),n=Ar(n),n!==null)if(i=fi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=$a(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return to=n,null}function ph(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case Be:return 1;case it:return 4;case at:case je:return 16;case yt:return 536870912;default:return 16}default:return 16}}var Zi=null,Gl=null,no=null;function mh(){if(no)return no;var n,i=Gl,a=i.length,c,h="value"in Zi?Zi.value:Zi.textContent,g=h.length;for(n=0;n<a&&i[n]===h[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===h[g-c];c++);return no=h.slice(n,1<c?1-c:void 0)}function io(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ro(){return!0}function gh(){return!1}function In(n){function i(a,c,h,g,w){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(g):g[I]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?ro:gh,this.isPropagationStopped=gh,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),i}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=In(ts),ta=se({},ts,{view:0,detail:0}),zg=In(ta),Wl,Xl,na,so=se({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ql,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==na&&(na&&n.type==="mousemove"?(Wl=n.screenX-na.screenX,Xl=n.screenY-na.screenY):Xl=Wl=0,na=n),Wl)},movementY:function(n){return"movementY"in n?n.movementY:Xl}}),vh=In(so),Bg=se({},so,{dataTransfer:0}),Hg=In(Bg),Vg=se({},ta,{relatedTarget:0}),Yl=In(Vg),Gg=se({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),jg=In(Gg),Wg=se({},ts,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Xg=In(Wg),Yg=se({},ts,{data:0}),_h=In(Yg),qg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$g={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Kg[n])?!!i[n]:!1}function ql(){return Zg}var Jg=se({},ta,{key:function(n){if(n.key){var i=qg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=io(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$g[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ql,charCode:function(n){return n.type==="keypress"?io(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?io(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Qg=In(Jg),ev=se({},so,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xh=In(ev),tv=se({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ql}),nv=In(tv),iv=se({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),rv=In(iv),sv=se({},so,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),av=In(sv),ov=[9,13,27,32],$l=d&&"CompositionEvent"in window,ia=null;d&&"documentMode"in document&&(ia=document.documentMode);var lv=d&&"TextEvent"in window&&!ia,yh=d&&(!$l||ia&&8<ia&&11>=ia),Sh=" ",Mh=!1;function Eh(n,i){switch(n){case"keyup":return ov.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ns=!1;function cv(n,i){switch(n){case"compositionend":return wh(i);case"keypress":return i.which!==32?null:(Mh=!0,Sh);case"textInput":return n=i.data,n===Sh&&Mh?null:n;default:return null}}function uv(n,i){if(ns)return n==="compositionend"||!$l&&Eh(n,i)?(n=mh(),no=Gl=Zi=null,ns=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return yh&&i.locale!=="ko"?null:i.data;default:return null}}var dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Th(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!dv[n.type]:i==="textarea"}function Ah(n,i,a,c){Ne(c),i=uo(i,"onChange"),0<i.length&&(a=new jl("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ra=null,sa=null;function hv(n){jh(n,0)}function ao(n){var i=os(n);if(st(i))return n}function fv(n,i){if(n==="change")return i}var Ch=!1;if(d){var Kl;if(d){var Zl="oninput"in document;if(!Zl){var Rh=document.createElement("div");Rh.setAttribute("oninput","return;"),Zl=typeof Rh.oninput=="function"}Kl=Zl}else Kl=!1;Ch=Kl&&(!document.documentMode||9<document.documentMode)}function bh(){ra&&(ra.detachEvent("onpropertychange",Nh),sa=ra=null)}function Nh(n){if(n.propertyName==="value"&&ao(sa)){var i=[];Ah(i,sa,n,W(n)),Mn(hv,i)}}function pv(n,i,a){n==="focusin"?(bh(),ra=i,sa=a,ra.attachEvent("onpropertychange",Nh)):n==="focusout"&&bh()}function mv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ao(sa)}function gv(n,i){if(n==="click")return ao(i)}function vv(n,i){if(n==="input"||n==="change")return ao(i)}function _v(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ti=typeof Object.is=="function"?Object.is:_v;function aa(n,i){if(ti(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!p.call(i,h)||!ti(n[h],i[h]))return!1}return!0}function Ph(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Lh(n,i){var a=Ph(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ph(a)}}function Dh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Dh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Ih(){for(var n=window,i=xt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=xt(n.document)}return i}function Jl(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function xv(n){var i=Ih(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Dh(a.ownerDocument.documentElement,a)){if(c!==null&&Jl(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!n.extend&&g>c&&(h=c,c=g,g=h),h=Lh(a,g);var w=Lh(a,c);h&&w&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var yv=d&&"documentMode"in document&&11>=document.documentMode,is=null,Ql=null,oa=null,ec=!1;function Uh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ec||is==null||is!==xt(c)||(c=is,"selectionStart"in c&&Jl(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),oa&&aa(oa,c)||(oa=c,c=uo(Ql,"onSelect"),0<c.length&&(i=new jl("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=is)))}function oo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var rs={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},tc={},Fh={};d&&(Fh=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function lo(n){if(tc[n])return tc[n];if(!rs[n])return n;var i=rs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Fh)return tc[n]=i[a];return n}var Oh=lo("animationend"),kh=lo("animationiteration"),zh=lo("animationstart"),Bh=lo("transitionend"),Hh=new Map,Vh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(n,i){Hh.set(n,i),l(i,[n])}for(var nc=0;nc<Vh.length;nc++){var ic=Vh[nc],Sv=ic.toLowerCase(),Mv=ic[0].toUpperCase()+ic.slice(1);Ji(Sv,"on"+Mv)}Ji(Oh,"onAnimationEnd"),Ji(kh,"onAnimationIteration"),Ji(zh,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(Bh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ev=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function Gh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,qa(c,i,void 0,n),n.currentTarget=null}function jh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var w=c.length-1;0<=w;w--){var I=c[w],k=I.instance,ee=I.currentTarget;if(I=I.listener,k!==g&&h.isPropagationStopped())break e;Gh(h,I,ee),g=k}else for(w=0;w<c.length;w++){if(I=c[w],k=I.instance,ee=I.currentTarget,I=I.listener,k!==g&&h.isPropagationStopped())break e;Gh(h,I,ee),g=k}}}if(Tr)throw n=Xi,Tr=!1,Xi=null,n}function Ft(n,i){var a=i[dc];a===void 0&&(a=i[dc]=new Set);var c=n+"__bubble";a.has(c)||(Wh(i,n,2,!1),a.add(c))}function rc(n,i,a){var c=0;i&&(c|=4),Wh(a,n,c,i)}var co="_reactListening"+Math.random().toString(36).slice(2);function ca(n){if(!n[co]){n[co]=!0,r.forEach(function(a){a!=="selectionchange"&&(Ev.has(a)||rc(a,!1,n),rc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[co]||(i[co]=!0,rc("selectionchange",!1,i))}}function Wh(n,i,a,c){switch(ph(i)){case 1:var h=Og;break;case 4:h=kg;break;default:h=Hl}a=h.bind(null,i,a,n),h=void 0,!Jr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function sc(n,i,a,c,h){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var I=c.stateNode.containerInfo;if(I===h||I.nodeType===8&&I.parentNode===h)break;if(w===4)for(w=c.return;w!==null;){var k=w.tag;if((k===3||k===4)&&(k=w.stateNode.containerInfo,k===h||k.nodeType===8&&k.parentNode===h))return;w=w.return}for(;I!==null;){if(w=Ar(I),w===null)return;if(k=w.tag,k===5||k===6){c=g=w;continue e}I=I.parentNode}}c=c.return}Mn(function(){var ee=g,xe=W(a),ye=[];e:{var ge=Hh.get(n);if(ge!==void 0){var De=jl,ze=n;switch(n){case"keypress":if(io(a)===0)break e;case"keydown":case"keyup":De=Qg;break;case"focusin":ze="focus",De=Yl;break;case"focusout":ze="blur",De=Yl;break;case"beforeblur":case"afterblur":De=Yl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=Hg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=nv;break;case Oh:case kh:case zh:De=jg;break;case Bh:De=rv;break;case"scroll":De=zg;break;case"wheel":De=av;break;case"copy":case"cut":case"paste":De=Xg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=xh}var He=(i&4)!==0,Gt=!He&&n==="scroll",$=He?ge!==null?ge+"Capture":null:ge;He=[];for(var G=ee,K;G!==null;){K=G;var we=K.stateNode;if(K.tag===5&&we!==null&&(K=we,$!==null&&(we=gn(G,$),we!=null&&He.push(ua(G,we,K)))),Gt)break;G=G.return}0<He.length&&(ge=new De(ge,ze,null,a,xe),ye.push({event:ge,listeners:He}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",De=n==="mouseout"||n==="pointerout",ge&&a!==Rt&&(ze=a.relatedTarget||a.fromElement)&&(Ar(ze)||ze[Ti]))break e;if((De||ge)&&(ge=xe.window===xe?xe:(ge=xe.ownerDocument)?ge.defaultView||ge.parentWindow:window,De?(ze=a.relatedTarget||a.toElement,De=ee,ze=ze?Ar(ze):null,ze!==null&&(Gt=fi(ze),ze!==Gt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(De=null,ze=ee),De!==ze)){if(He=vh,we="onMouseLeave",$="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(He=xh,we="onPointerLeave",$="onPointerEnter",G="pointer"),Gt=De==null?ge:os(De),K=ze==null?ge:os(ze),ge=new He(we,G+"leave",De,a,xe),ge.target=Gt,ge.relatedTarget=K,we=null,Ar(xe)===ee&&(He=new He($,G+"enter",ze,a,xe),He.target=K,He.relatedTarget=Gt,we=He),Gt=we,De&&ze)t:{for(He=De,$=ze,G=0,K=He;K;K=ss(K))G++;for(K=0,we=$;we;we=ss(we))K++;for(;0<G-K;)He=ss(He),G--;for(;0<K-G;)$=ss($),K--;for(;G--;){if(He===$||$!==null&&He===$.alternate)break t;He=ss(He),$=ss($)}He=null}else He=null;De!==null&&Xh(ye,ge,De,He,!1),ze!==null&&Gt!==null&&Xh(ye,Gt,ze,He,!0)}}e:{if(ge=ee?os(ee):window,De=ge.nodeName&&ge.nodeName.toLowerCase(),De==="select"||De==="input"&&ge.type==="file")var We=fv;else if(Th(ge))if(Ch)We=vv;else{We=mv;var Je=pv}else(De=ge.nodeName)&&De.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(We=gv);if(We&&(We=We(n,ee))){Ah(ye,We,a,xe);break e}Je&&Je(n,ge,ee),n==="focusout"&&(Je=ge._wrapperState)&&Je.controlled&&ge.type==="number"&&bt(ge,"number",ge.value)}switch(Je=ee?os(ee):window,n){case"focusin":(Th(Je)||Je.contentEditable==="true")&&(is=Je,Ql=ee,oa=null);break;case"focusout":oa=Ql=is=null;break;case"mousedown":ec=!0;break;case"contextmenu":case"mouseup":case"dragend":ec=!1,Uh(ye,a,xe);break;case"selectionchange":if(yv)break;case"keydown":case"keyup":Uh(ye,a,xe)}var Qe;if($l)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else ns?Eh(n,a)&&(rt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(yh&&a.locale!=="ko"&&(ns||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&ns&&(Qe=mh()):(Zi=xe,Gl="value"in Zi?Zi.value:Zi.textContent,ns=!0)),Je=uo(ee,rt),0<Je.length&&(rt=new _h(rt,n,null,a,xe),ye.push({event:rt,listeners:Je}),Qe?rt.data=Qe:(Qe=wh(a),Qe!==null&&(rt.data=Qe)))),(Qe=lv?cv(n,a):uv(n,a))&&(ee=uo(ee,"onBeforeInput"),0<ee.length&&(xe=new _h("onBeforeInput","beforeinput",null,a,xe),ye.push({event:xe,listeners:ee}),xe.data=Qe))}jh(ye,i)})}function ua(n,i,a){return{instance:n,listener:i,currentTarget:a}}function uo(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=gn(n,a),g!=null&&c.unshift(ua(n,g,h)),g=gn(n,i),g!=null&&c.push(ua(n,g,h))),n=n.return}return c}function ss(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Xh(n,i,a,c,h){for(var g=i._reactName,w=[];a!==null&&a!==c;){var I=a,k=I.alternate,ee=I.stateNode;if(k!==null&&k===c)break;I.tag===5&&ee!==null&&(I=ee,h?(k=gn(a,g),k!=null&&w.unshift(ua(a,k,I))):h||(k=gn(a,g),k!=null&&w.push(ua(a,k,I)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var wv=/\r\n?/g,Tv=/\u0000|\uFFFD/g;function Yh(n){return(typeof n=="string"?n:""+n).replace(wv,`
`).replace(Tv,"")}function ho(n,i,a){if(i=Yh(i),Yh(n)!==i&&a)throw Error(t(425))}function fo(){}var ac=null,oc=null;function lc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var cc=typeof setTimeout=="function"?setTimeout:void 0,Av=typeof clearTimeout=="function"?clearTimeout:void 0,qh=typeof Promise=="function"?Promise:void 0,Cv=typeof queueMicrotask=="function"?queueMicrotask:typeof qh<"u"?function(n){return qh.resolve(null).then(n).catch(Rv)}:cc;function Rv(n){setTimeout(function(){throw n})}function uc(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),ea(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);ea(i)}function Qi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function $h(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var as=Math.random().toString(36).slice(2),mi="__reactFiber$"+as,da="__reactProps$"+as,Ti="__reactContainer$"+as,dc="__reactEvents$"+as,bv="__reactListeners$"+as,Nv="__reactHandles$"+as;function Ar(n){var i=n[mi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ti]||a[mi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=$h(n);n!==null;){if(a=n[mi])return a;n=$h(n)}return i}n=a,a=n.parentNode}return null}function ha(n){return n=n[mi]||n[Ti],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function os(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function po(n){return n[da]||null}var hc=[],ls=-1;function er(n){return{current:n}}function Ot(n){0>ls||(n.current=hc[ls],hc[ls]=null,ls--)}function It(n,i){ls++,hc[ls]=n.current,n.current=i}var tr={},on=er(tr),wn=er(!1),Cr=tr;function cs(n,i){var a=n.type.contextTypes;if(!a)return tr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Tn(n){return n=n.childContextTypes,n!=null}function mo(){Ot(wn),Ot(on)}function Kh(n,i,a){if(on.current!==tr)throw Error(t(168));It(on,i),It(wn,a)}function Zh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,ve(n)||"Unknown",h));return se({},a,c)}function go(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||tr,Cr=on.current,It(on,n),It(wn,wn.current),!0}function Jh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Zh(n,i,Cr),c.__reactInternalMemoizedMergedChildContext=n,Ot(wn),Ot(on),It(on,n)):Ot(wn),It(wn,a)}var Ai=null,vo=!1,fc=!1;function Qh(n){Ai===null?Ai=[n]:Ai.push(n)}function Pv(n){vo=!0,Qh(n)}function nr(){if(!fc&&Ai!==null){fc=!0;var n=0,i=Nt;try{var a=Ai;for(Nt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ai=null,vo=!1}catch(h){throw Ai!==null&&(Ai=Ai.slice(n+1)),te(Be,nr),h}finally{Nt=i,fc=!1}}return null}var us=[],ds=0,_o=null,xo=0,Gn=[],jn=0,Rr=null,Ci=1,Ri="";function br(n,i){us[ds++]=xo,us[ds++]=_o,_o=n,xo=i}function ef(n,i,a){Gn[jn++]=Ci,Gn[jn++]=Ri,Gn[jn++]=Rr,Rr=n;var c=Ci;n=Ri;var h=32-ct(c)-1;c&=~(1<<h),a+=1;var g=32-ct(i)+h;if(30<g){var w=h-h%5;g=(c&(1<<w)-1).toString(32),c>>=w,h-=w,Ci=1<<32-ct(i)+h|a<<h|c,Ri=g+n}else Ci=1<<g|a<<h|c,Ri=n}function pc(n){n.return!==null&&(br(n,1),ef(n,1,0))}function mc(n){for(;n===_o;)_o=us[--ds],us[ds]=null,xo=us[--ds],us[ds]=null;for(;n===Rr;)Rr=Gn[--jn],Gn[jn]=null,Ri=Gn[--jn],Gn[jn]=null,Ci=Gn[--jn],Gn[jn]=null}var Un=null,Fn=null,zt=!1,ni=null;function tf(n,i){var a=qn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function nf(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Un=n,Fn=Qi(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Un=n,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Rr!==null?{id:Ci,overflow:Ri}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=qn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Un=n,Fn=null,!0):!1;default:return!1}}function gc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function vc(n){if(zt){var i=Fn;if(i){var a=i;if(!nf(n,i)){if(gc(n))throw Error(t(418));i=Qi(a.nextSibling);var c=Un;i&&nf(n,i)?tf(c,a):(n.flags=n.flags&-4097|2,zt=!1,Un=n)}}else{if(gc(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,Un=n}}}function rf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Un=n}function yo(n){if(n!==Un)return!1;if(!zt)return rf(n),zt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!lc(n.type,n.memoizedProps)),i&&(i=Fn)){if(gc(n))throw sf(),Error(t(418));for(;i;)tf(n,i),i=Qi(i.nextSibling)}if(rf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Fn=Qi(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Fn=null}}else Fn=Un?Qi(n.stateNode.nextSibling):null;return!0}function sf(){for(var n=Fn;n;)n=Qi(n.nextSibling)}function hs(){Fn=Un=null,zt=!1}function _c(n){ni===null?ni=[n]:ni.push(n)}var Lv=T.ReactCurrentBatchConfig;function fa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(w){var I=h.refs;w===null?delete I[g]:I[g]=w},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function So(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function af(n){var i=n._init;return i(n._payload)}function of(n){function i($,G){if(n){var K=$.deletions;K===null?($.deletions=[G],$.flags|=16):K.push(G)}}function a($,G){if(!n)return null;for(;G!==null;)i($,G),G=G.sibling;return null}function c($,G){for($=new Map;G!==null;)G.key!==null?$.set(G.key,G):$.set(G.index,G),G=G.sibling;return $}function h($,G){return $=ur($,G),$.index=0,$.sibling=null,$}function g($,G,K){return $.index=K,n?(K=$.alternate,K!==null?(K=K.index,K<G?($.flags|=2,G):K):($.flags|=2,G)):($.flags|=1048576,G)}function w($){return n&&$.alternate===null&&($.flags|=2),$}function I($,G,K,we){return G===null||G.tag!==6?(G=cu(K,$.mode,we),G.return=$,G):(G=h(G,K),G.return=$,G)}function k($,G,K,we){var We=K.type;return We===U?xe($,G,K.props.children,we,K.key):G!==null&&(G.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ce&&af(We)===G.type)?(we=h(G,K.props),we.ref=fa($,G,K),we.return=$,we):(we=Wo(K.type,K.key,K.props,null,$.mode,we),we.ref=fa($,G,K),we.return=$,we)}function ee($,G,K,we){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=uu(K,$.mode,we),G.return=$,G):(G=h(G,K.children||[]),G.return=$,G)}function xe($,G,K,we,We){return G===null||G.tag!==7?(G=Or(K,$.mode,we,We),G.return=$,G):(G=h(G,K),G.return=$,G)}function ye($,G,K){if(typeof G=="string"&&G!==""||typeof G=="number")return G=cu(""+G,$.mode,K),G.return=$,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case j:return K=Wo(G.type,G.key,G.props,null,$.mode,K),K.ref=fa($,null,G),K.return=$,K;case F:return G=uu(G,$.mode,K),G.return=$,G;case ce:var we=G._init;return ye($,we(G._payload),K)}if($e(G)||le(G))return G=Or(G,$.mode,K,null),G.return=$,G;So($,G)}return null}function ge($,G,K,we){var We=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return We!==null?null:I($,G,""+K,we);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case j:return K.key===We?k($,G,K,we):null;case F:return K.key===We?ee($,G,K,we):null;case ce:return We=K._init,ge($,G,We(K._payload),we)}if($e(K)||le(K))return We!==null?null:xe($,G,K,we,null);So($,K)}return null}function De($,G,K,we,We){if(typeof we=="string"&&we!==""||typeof we=="number")return $=$.get(K)||null,I(G,$,""+we,We);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case j:return $=$.get(we.key===null?K:we.key)||null,k(G,$,we,We);case F:return $=$.get(we.key===null?K:we.key)||null,ee(G,$,we,We);case ce:var Je=we._init;return De($,G,K,Je(we._payload),We)}if($e(we)||le(we))return $=$.get(K)||null,xe(G,$,we,We,null);So(G,we)}return null}function ze($,G,K,we){for(var We=null,Je=null,Qe=G,rt=G=0,en=null;Qe!==null&&rt<K.length;rt++){Qe.index>rt?(en=Qe,Qe=null):en=Qe.sibling;var At=ge($,Qe,K[rt],we);if(At===null){Qe===null&&(Qe=en);break}n&&Qe&&At.alternate===null&&i($,Qe),G=g(At,G,rt),Je===null?We=At:Je.sibling=At,Je=At,Qe=en}if(rt===K.length)return a($,Qe),zt&&br($,rt),We;if(Qe===null){for(;rt<K.length;rt++)Qe=ye($,K[rt],we),Qe!==null&&(G=g(Qe,G,rt),Je===null?We=Qe:Je.sibling=Qe,Je=Qe);return zt&&br($,rt),We}for(Qe=c($,Qe);rt<K.length;rt++)en=De(Qe,$,rt,K[rt],we),en!==null&&(n&&en.alternate!==null&&Qe.delete(en.key===null?rt:en.key),G=g(en,G,rt),Je===null?We=en:Je.sibling=en,Je=en);return n&&Qe.forEach(function(dr){return i($,dr)}),zt&&br($,rt),We}function He($,G,K,we){var We=le(K);if(typeof We!="function")throw Error(t(150));if(K=We.call(K),K==null)throw Error(t(151));for(var Je=We=null,Qe=G,rt=G=0,en=null,At=K.next();Qe!==null&&!At.done;rt++,At=K.next()){Qe.index>rt?(en=Qe,Qe=null):en=Qe.sibling;var dr=ge($,Qe,At.value,we);if(dr===null){Qe===null&&(Qe=en);break}n&&Qe&&dr.alternate===null&&i($,Qe),G=g(dr,G,rt),Je===null?We=dr:Je.sibling=dr,Je=dr,Qe=en}if(At.done)return a($,Qe),zt&&br($,rt),We;if(Qe===null){for(;!At.done;rt++,At=K.next())At=ye($,At.value,we),At!==null&&(G=g(At,G,rt),Je===null?We=At:Je.sibling=At,Je=At);return zt&&br($,rt),We}for(Qe=c($,Qe);!At.done;rt++,At=K.next())At=De(Qe,$,rt,At.value,we),At!==null&&(n&&At.alternate!==null&&Qe.delete(At.key===null?rt:At.key),G=g(At,G,rt),Je===null?We=At:Je.sibling=At,Je=At);return n&&Qe.forEach(function(d_){return i($,d_)}),zt&&br($,rt),We}function Gt($,G,K,we){if(typeof K=="object"&&K!==null&&K.type===U&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case j:e:{for(var We=K.key,Je=G;Je!==null;){if(Je.key===We){if(We=K.type,We===U){if(Je.tag===7){a($,Je.sibling),G=h(Je,K.props.children),G.return=$,$=G;break e}}else if(Je.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ce&&af(We)===Je.type){a($,Je.sibling),G=h(Je,K.props),G.ref=fa($,Je,K),G.return=$,$=G;break e}a($,Je);break}else i($,Je);Je=Je.sibling}K.type===U?(G=Or(K.props.children,$.mode,we,K.key),G.return=$,$=G):(we=Wo(K.type,K.key,K.props,null,$.mode,we),we.ref=fa($,G,K),we.return=$,$=we)}return w($);case F:e:{for(Je=K.key;G!==null;){if(G.key===Je)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){a($,G.sibling),G=h(G,K.children||[]),G.return=$,$=G;break e}else{a($,G);break}else i($,G);G=G.sibling}G=uu(K,$.mode,we),G.return=$,$=G}return w($);case ce:return Je=K._init,Gt($,G,Je(K._payload),we)}if($e(K))return ze($,G,K,we);if(le(K))return He($,G,K,we);So($,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,G!==null&&G.tag===6?(a($,G.sibling),G=h(G,K),G.return=$,$=G):(a($,G),G=cu(K,$.mode,we),G.return=$,$=G),w($)):a($,G)}return Gt}var fs=of(!0),lf=of(!1),Mo=er(null),Eo=null,ps=null,xc=null;function yc(){xc=ps=Eo=null}function Sc(n){var i=Mo.current;Ot(Mo),n._currentValue=i}function Mc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function ms(n,i){Eo=n,xc=ps=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(An=!0),n.firstContext=null)}function Wn(n){var i=n._currentValue;if(xc!==n)if(n={context:n,memoizedValue:i,next:null},ps===null){if(Eo===null)throw Error(t(308));ps=n,Eo.dependencies={lanes:0,firstContext:n}}else ps=ps.next=n;return i}var Nr=null;function Ec(n){Nr===null?Nr=[n]:Nr.push(n)}function cf(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,Ec(i)):(a.next=h.next,h.next=a),i.interleaved=a,bi(n,c)}function bi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ir=!1;function wc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uf(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ni(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Et&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,bi(n,a)}return h=c.interleaved,h===null?(i.next=i,Ec(c)):(i.next=h.next,h.next=i),c.interleaved=i,bi(n,a)}function wo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,kl(n,a)}}function df(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function To(n,i,a,c){var h=n.updateQueue;ir=!1;var g=h.firstBaseUpdate,w=h.lastBaseUpdate,I=h.shared.pending;if(I!==null){h.shared.pending=null;var k=I,ee=k.next;k.next=null,w===null?g=ee:w.next=ee,w=k;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,I=xe.lastBaseUpdate,I!==w&&(I===null?xe.firstBaseUpdate=ee:I.next=ee,xe.lastBaseUpdate=k))}if(g!==null){var ye=h.baseState;w=0,xe=ee=k=null,I=g;do{var ge=I.lane,De=I.eventTime;if((c&ge)===ge){xe!==null&&(xe=xe.next={eventTime:De,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ze=n,He=I;switch(ge=i,De=a,He.tag){case 1:if(ze=He.payload,typeof ze=="function"){ye=ze.call(De,ye,ge);break e}ye=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=He.payload,ge=typeof ze=="function"?ze.call(De,ye,ge):ze,ge==null)break e;ye=se({},ye,ge);break e;case 2:ir=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ge=h.effects,ge===null?h.effects=[I]:ge.push(I))}else De={eventTime:De,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},xe===null?(ee=xe=De,k=ye):xe=xe.next=De,w|=ge;if(I=I.next,I===null){if(I=h.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,h.lastBaseUpdate=ge,h.shared.pending=null}}while(!0);if(xe===null&&(k=ye),h.baseState=k,h.firstBaseUpdate=ee,h.lastBaseUpdate=xe,i=h.shared.interleaved,i!==null){h=i;do w|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);Dr|=w,n.lanes=w,n.memoizedState=ye}}function hf(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var pa={},gi=er(pa),ma=er(pa),ga=er(pa);function Pr(n){if(n===pa)throw Error(t(174));return n}function Tc(n,i){switch(It(ga,i),It(ma,n),It(gi,pa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ve(i,n)}Ot(gi),It(gi,i)}function gs(){Ot(gi),Ot(ma),Ot(ga)}function ff(n){Pr(ga.current);var i=Pr(gi.current),a=Ve(i,n.type);i!==a&&(It(ma,n),It(gi,a))}function Ac(n){ma.current===n&&(Ot(gi),Ot(ma))}var Bt=er(0);function Ao(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Cc=[];function Rc(){for(var n=0;n<Cc.length;n++)Cc[n]._workInProgressVersionPrimary=null;Cc.length=0}var Co=T.ReactCurrentDispatcher,bc=T.ReactCurrentBatchConfig,Lr=0,Ht=null,qt=null,Jt=null,Ro=!1,va=!1,_a=0,Dv=0;function ln(){throw Error(t(321))}function Nc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ti(n[a],i[a]))return!1;return!0}function Pc(n,i,a,c,h,g){if(Lr=g,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Co.current=n===null||n.memoizedState===null?Ov:kv,n=a(c,h),va){g=0;do{if(va=!1,_a=0,25<=g)throw Error(t(301));g+=1,Jt=qt=null,i.updateQueue=null,Co.current=zv,n=a(c,h)}while(va)}if(Co.current=Po,i=qt!==null&&qt.next!==null,Lr=0,Jt=qt=Ht=null,Ro=!1,i)throw Error(t(300));return n}function Lc(){var n=_a!==0;return _a=0,n}function vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?Ht.memoizedState=Jt=n:Jt=Jt.next=n,Jt}function Xn(){if(qt===null){var n=Ht.alternate;n=n!==null?n.memoizedState:null}else n=qt.next;var i=Jt===null?Ht.memoizedState:Jt.next;if(i!==null)Jt=i,qt=n;else{if(n===null)throw Error(t(310));qt=n,n={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},Jt===null?Ht.memoizedState=Jt=n:Jt=Jt.next=n}return Jt}function xa(n,i){return typeof i=="function"?i(n):i}function Dc(n){var i=Xn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=qt,h=c.baseQueue,g=a.pending;if(g!==null){if(h!==null){var w=h.next;h.next=g.next,g.next=w}c.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,c=c.baseState;var I=w=null,k=null,ee=g;do{var xe=ee.lane;if((Lr&xe)===xe)k!==null&&(k=k.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),c=ee.hasEagerState?ee.eagerState:n(c,ee.action);else{var ye={lane:xe,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};k===null?(I=k=ye,w=c):k=k.next=ye,Ht.lanes|=xe,Dr|=xe}ee=ee.next}while(ee!==null&&ee!==g);k===null?w=c:k.next=I,ti(c,i.memoizedState)||(An=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do g=h.lane,Ht.lanes|=g,Dr|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Ic(n){var i=Xn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var w=h=h.next;do g=n(g,w.action),w=w.next;while(w!==h);ti(g,i.memoizedState)||(An=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function pf(){}function mf(n,i){var a=Ht,c=Xn(),h=i(),g=!ti(c.memoizedState,h);if(g&&(c.memoizedState=h,An=!0),c=c.queue,Uc(_f.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||Jt!==null&&Jt.memoizedState.tag&1){if(a.flags|=2048,ya(9,vf.bind(null,a,c,h,i),void 0,null),Qt===null)throw Error(t(349));(Lr&30)!==0||gf(a,i,h)}return h}function gf(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function vf(n,i,a,c){i.value=a,i.getSnapshot=c,xf(i)&&yf(n)}function _f(n,i,a){return a(function(){xf(i)&&yf(n)})}function xf(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ti(n,a)}catch{return!0}}function yf(n){var i=bi(n,1);i!==null&&ai(i,n,1,-1)}function Sf(n){var i=vi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:n},i.queue=n,n=n.dispatch=Fv.bind(null,Ht,n),[i.memoizedState,n]}function ya(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Mf(){return Xn().memoizedState}function bo(n,i,a,c){var h=vi();Ht.flags|=n,h.memoizedState=ya(1|i,a,void 0,c===void 0?null:c)}function No(n,i,a,c){var h=Xn();c=c===void 0?null:c;var g=void 0;if(qt!==null){var w=qt.memoizedState;if(g=w.destroy,c!==null&&Nc(c,w.deps)){h.memoizedState=ya(i,a,g,c);return}}Ht.flags|=n,h.memoizedState=ya(1|i,a,g,c)}function Ef(n,i){return bo(8390656,8,n,i)}function Uc(n,i){return No(2048,8,n,i)}function wf(n,i){return No(4,2,n,i)}function Tf(n,i){return No(4,4,n,i)}function Af(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Cf(n,i,a){return a=a!=null?a.concat([n]):null,No(4,4,Af.bind(null,i,n),a)}function Fc(){}function Rf(n,i){var a=Xn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Nc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function bf(n,i){var a=Xn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Nc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Nf(n,i,a){return(Lr&21)===0?(n.baseState&&(n.baseState=!1,An=!0),n.memoizedState=a):(ti(a,i)||(a=vn(),Ht.lanes|=a,Dr|=a,n.baseState=!0),i)}function Iv(n,i){var a=Nt;Nt=a!==0&&4>a?a:4,n(!0);var c=bc.transition;bc.transition={};try{n(!1),i()}finally{Nt=a,bc.transition=c}}function Pf(){return Xn().memoizedState}function Uv(n,i,a){var c=lr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Lf(n))Df(i,a);else if(a=cf(n,i,a,c),a!==null){var h=xn();ai(a,n,c,h),If(a,i,c)}}function Fv(n,i,a){var c=lr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Lf(n))Df(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var w=i.lastRenderedState,I=g(w,a);if(h.hasEagerState=!0,h.eagerState=I,ti(I,w)){var k=i.interleaved;k===null?(h.next=h,Ec(i)):(h.next=k.next,k.next=h),i.interleaved=h;return}}catch{}finally{}a=cf(n,i,h,c),a!==null&&(h=xn(),ai(a,n,c,h),If(a,i,c))}}function Lf(n){var i=n.alternate;return n===Ht||i!==null&&i===Ht}function Df(n,i){va=Ro=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function If(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,kl(n,a)}}var Po={readContext:Wn,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},Ov={readContext:Wn,useCallback:function(n,i){return vi().memoizedState=[n,i===void 0?null:i],n},useContext:Wn,useEffect:Ef,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,bo(4194308,4,Af.bind(null,i,n),a)},useLayoutEffect:function(n,i){return bo(4194308,4,n,i)},useInsertionEffect:function(n,i){return bo(4,2,n,i)},useMemo:function(n,i){var a=vi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=vi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Uv.bind(null,Ht,n),[c.memoizedState,n]},useRef:function(n){var i=vi();return n={current:n},i.memoizedState=n},useState:Sf,useDebugValue:Fc,useDeferredValue:function(n){return vi().memoizedState=n},useTransition:function(){var n=Sf(!1),i=n[0];return n=Iv.bind(null,n[1]),vi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Ht,h=vi();if(zt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Qt===null)throw Error(t(349));(Lr&30)!==0||gf(c,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,Ef(_f.bind(null,c,g,n),[n]),c.flags|=2048,ya(9,vf.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=vi(),i=Qt.identifierPrefix;if(zt){var a=Ri,c=Ci;a=(c&~(1<<32-ct(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=_a++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Dv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},kv={readContext:Wn,useCallback:Rf,useContext:Wn,useEffect:Uc,useImperativeHandle:Cf,useInsertionEffect:wf,useLayoutEffect:Tf,useMemo:bf,useReducer:Dc,useRef:Mf,useState:function(){return Dc(xa)},useDebugValue:Fc,useDeferredValue:function(n){var i=Xn();return Nf(i,qt.memoizedState,n)},useTransition:function(){var n=Dc(xa)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:pf,useSyncExternalStore:mf,useId:Pf,unstable_isNewReconciler:!1},zv={readContext:Wn,useCallback:Rf,useContext:Wn,useEffect:Uc,useImperativeHandle:Cf,useInsertionEffect:wf,useLayoutEffect:Tf,useMemo:bf,useReducer:Ic,useRef:Mf,useState:function(){return Ic(xa)},useDebugValue:Fc,useDeferredValue:function(n){var i=Xn();return qt===null?i.memoizedState=n:Nf(i,qt.memoizedState,n)},useTransition:function(){var n=Ic(xa)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:pf,useSyncExternalStore:mf,useId:Pf,unstable_isNewReconciler:!1};function ii(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Oc(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:se({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Lo={isMounted:function(n){return(n=n._reactInternals)?fi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=xn(),h=lr(n),g=Ni(c,h);g.payload=i,a!=null&&(g.callback=a),i=rr(n,g,h),i!==null&&(ai(i,n,h,c),wo(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=xn(),h=lr(n),g=Ni(c,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=rr(n,g,h),i!==null&&(ai(i,n,h,c),wo(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=xn(),c=lr(n),h=Ni(a,c);h.tag=2,i!=null&&(h.callback=i),i=rr(n,h,c),i!==null&&(ai(i,n,c,a),wo(i,n,c))}};function Uf(n,i,a,c,h,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,w):i.prototype&&i.prototype.isPureReactComponent?!aa(a,c)||!aa(h,g):!0}function Ff(n,i,a){var c=!1,h=tr,g=i.contextType;return typeof g=="object"&&g!==null?g=Wn(g):(h=Tn(i)?Cr:on.current,c=i.contextTypes,g=(c=c!=null)?cs(n,h):tr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Lo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function Of(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Lo.enqueueReplaceState(i,i.state,null)}function kc(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},wc(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=Wn(g):(g=Tn(i)?Cr:on.current,h.context=cs(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Oc(n,i,g,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Lo.enqueueReplaceState(h,h.state,null),To(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function vs(n,i){try{var a="",c=i;do a+=oe(c),c=c.return;while(c);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function zc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Bc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Bv=typeof WeakMap=="function"?WeakMap:Map;function kf(n,i,a){a=Ni(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){zo||(zo=!0,tu=c),Bc(n,i)},a}function zf(n,i,a){a=Ni(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){Bc(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Bc(n,i),typeof c!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Bf(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Bv;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=e_.bind(null,n,i,a),i.then(n,n))}function Hf(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Vf(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ni(-1,1),i.tag=2,rr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var Hv=T.ReactCurrentOwner,An=!1;function _n(n,i,a,c){i.child=n===null?lf(i,null,a,c):fs(i,n.child,a,c)}function Gf(n,i,a,c,h){a=a.render;var g=i.ref;return ms(i,h),c=Pc(n,i,a,c,g,h),a=Lc(),n!==null&&!An?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Pi(n,i,h)):(zt&&a&&pc(i),i.flags|=1,_n(n,i,c,h),i.child)}function jf(n,i,a,c,h){if(n===null){var g=a.type;return typeof g=="function"&&!lu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Wf(n,i,g,c,h)):(n=Wo(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:aa,a(w,c)&&n.ref===i.ref)return Pi(n,i,h)}return i.flags|=1,n=ur(g,c),n.ref=i.ref,n.return=i,i.child=n}function Wf(n,i,a,c,h){if(n!==null){var g=n.memoizedProps;if(aa(g,c)&&n.ref===i.ref)if(An=!1,i.pendingProps=c=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(An=!0);else return i.lanes=n.lanes,Pi(n,i,h)}return Hc(n,i,a,c,h)}function Xf(n,i,a){var c=i.pendingProps,h=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(xs,On),On|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,It(xs,On),On|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,It(xs,On),On|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,It(xs,On),On|=c;return _n(n,i,h,a),i.child}function Yf(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Hc(n,i,a,c,h){var g=Tn(a)?Cr:on.current;return g=cs(i,g),ms(i,h),a=Pc(n,i,a,c,g,h),c=Lc(),n!==null&&!An?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Pi(n,i,h)):(zt&&c&&pc(i),i.flags|=1,_n(n,i,a,h),i.child)}function qf(n,i,a,c,h){if(Tn(a)){var g=!0;go(i)}else g=!1;if(ms(i,h),i.stateNode===null)Io(n,i),Ff(i,a,c),kc(i,a,c,h),c=!0;else if(n===null){var w=i.stateNode,I=i.memoizedProps;w.props=I;var k=w.context,ee=a.contextType;typeof ee=="object"&&ee!==null?ee=Wn(ee):(ee=Tn(a)?Cr:on.current,ee=cs(i,ee));var xe=a.getDerivedStateFromProps,ye=typeof xe=="function"||typeof w.getSnapshotBeforeUpdate=="function";ye||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==c||k!==ee)&&Of(i,w,c,ee),ir=!1;var ge=i.memoizedState;w.state=ge,To(i,c,w,h),k=i.memoizedState,I!==c||ge!==k||wn.current||ir?(typeof xe=="function"&&(Oc(i,a,xe,c),k=i.memoizedState),(I=ir||Uf(i,a,I,c,ge,k,ee))?(ye||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=k),w.props=c,w.state=k,w.context=ee,c=I):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,uf(n,i),I=i.memoizedProps,ee=i.type===i.elementType?I:ii(i.type,I),w.props=ee,ye=i.pendingProps,ge=w.context,k=a.contextType,typeof k=="object"&&k!==null?k=Wn(k):(k=Tn(a)?Cr:on.current,k=cs(i,k));var De=a.getDerivedStateFromProps;(xe=typeof De=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==ye||ge!==k)&&Of(i,w,c,k),ir=!1,ge=i.memoizedState,w.state=ge,To(i,c,w,h);var ze=i.memoizedState;I!==ye||ge!==ze||wn.current||ir?(typeof De=="function"&&(Oc(i,a,De,c),ze=i.memoizedState),(ee=ir||Uf(i,a,ee,c,ge,ze,k)||!1)?(xe||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,ze,k),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,ze,k)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ze),w.props=c,w.state=ze,w.context=k,c=ee):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),c=!1)}return Vc(n,i,a,c,g,h)}function Vc(n,i,a,c,h,g){Yf(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return h&&Jh(i,a,!1),Pi(n,i,g);c=i.stateNode,Hv.current=i;var I=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=fs(i,n.child,null,g),i.child=fs(i,null,I,g)):_n(n,i,I,g),i.memoizedState=c.state,h&&Jh(i,a,!0),i.child}function $f(n){var i=n.stateNode;i.pendingContext?Kh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Kh(n,i.context,!1),Tc(n,i.containerInfo)}function Kf(n,i,a,c,h){return hs(),_c(h),i.flags|=256,_n(n,i,a,c),i.child}var Gc={dehydrated:null,treeContext:null,retryLane:0};function jc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Zf(n,i,a){var c=i.pendingProps,h=Bt.current,g=!1,w=(i.flags&128)!==0,I;if((I=w)||(I=n!==null&&n.memoizedState===null?!1:(h&2)!==0),I?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),It(Bt,h&1),n===null)return vc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,g?(c=i.mode,g=i.child,w={mode:"hidden",children:w},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=Xo(w,c,0,null),n=Or(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=jc(a),i.memoizedState=Gc,n):Wc(i,w));if(h=n.memoizedState,h!==null&&(I=h.dehydrated,I!==null))return Vv(n,i,w,c,I,h,a);if(g){g=c.fallback,w=i.mode,h=n.child,I=h.sibling;var k={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=k,i.deletions=null):(c=ur(h,k),c.subtreeFlags=h.subtreeFlags&14680064),I!==null?g=ur(I,g):(g=Or(g,w,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,w=n.child.memoizedState,w=w===null?jc(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=n.childLanes&~a,i.memoizedState=Gc,c}return g=n.child,n=g.sibling,c=ur(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Wc(n,i){return i=Xo({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Do(n,i,a,c){return c!==null&&_c(c),fs(i,n.child,null,a),n=Wc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Vv(n,i,a,c,h,g,w){if(a)return i.flags&256?(i.flags&=-257,c=zc(Error(t(422))),Do(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,h=i.mode,c=Xo({mode:"visible",children:c.children},h,0,null),g=Or(g,h,w,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&fs(i,n.child,null,w),i.child.memoizedState=jc(w),i.memoizedState=Gc,g);if((i.mode&1)===0)return Do(n,i,w,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var I=c.dgst;return c=I,g=Error(t(419)),c=zc(g,c,void 0),Do(n,i,w,c)}if(I=(w&n.childLanes)!==0,An||I){if(c=Qt,c!==null){switch(w&-w){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|w))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,bi(n,h),ai(c,n,h,-1))}return ou(),c=zc(Error(t(421))),Do(n,i,w,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=t_.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,Fn=Qi(h.nextSibling),Un=i,zt=!0,ni=null,n!==null&&(Gn[jn++]=Ci,Gn[jn++]=Ri,Gn[jn++]=Rr,Ci=n.id,Ri=n.overflow,Rr=i),i=Wc(i,c.children),i.flags|=4096,i)}function Jf(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Mc(n.return,i,a)}function Xc(n,i,a,c,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=h)}function Qf(n,i,a){var c=i.pendingProps,h=c.revealOrder,g=c.tail;if(_n(n,i,c.children,a),c=Bt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Jf(n,a,i);else if(n.tag===19)Jf(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(It(Bt,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&Ao(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Xc(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Ao(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Xc(i,!0,a,null,g);break;case"together":Xc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Io(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Pi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Dr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ur(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ur(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Gv(n,i,a){switch(i.tag){case 3:$f(i),hs();break;case 5:ff(i);break;case 1:Tn(i.type)&&go(i);break;case 4:Tc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;It(Mo,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(It(Bt,Bt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Zf(n,i,a):(It(Bt,Bt.current&1),n=Pi(n,i,a),n!==null?n.sibling:null);It(Bt,Bt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Qf(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),It(Bt,Bt.current),c)break;return null;case 22:case 23:return i.lanes=0,Xf(n,i,a)}return Pi(n,i,a)}var ep,Yc,tp,np;ep=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Yc=function(){},tp=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,Pr(gi.current);var g=null;switch(a){case"input":h=q(n,h),c=q(n,c),g=[];break;case"select":h=se({},h,{value:void 0}),c=se({},c,{value:void 0}),g=[];break;case"textarea":h=C(n,h),c=C(n,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=fo)}mt(a,c);var w;a=null;for(ee in h)if(!c.hasOwnProperty(ee)&&h.hasOwnProperty(ee)&&h[ee]!=null)if(ee==="style"){var I=h[ee];for(w in I)I.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(o.hasOwnProperty(ee)?g||(g=[]):(g=g||[]).push(ee,null));for(ee in c){var k=c[ee];if(I=h!=null?h[ee]:void 0,c.hasOwnProperty(ee)&&k!==I&&(k!=null||I!=null))if(ee==="style")if(I){for(w in I)!I.hasOwnProperty(w)||k&&k.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in k)k.hasOwnProperty(w)&&I[w]!==k[w]&&(a||(a={}),a[w]=k[w])}else a||(g||(g=[]),g.push(ee,a)),a=k;else ee==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,I=I?I.__html:void 0,k!=null&&I!==k&&(g=g||[]).push(ee,k)):ee==="children"?typeof k!="string"&&typeof k!="number"||(g=g||[]).push(ee,""+k):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(ee)?(k!=null&&ee==="onScroll"&&Ft("scroll",n),g||I===k||(g=[])):(g=g||[]).push(ee,k))}a&&(g=g||[]).push("style",a);var ee=g;(i.updateQueue=ee)&&(i.flags|=4)}},np=function(n,i,a,c){a!==c&&(i.flags|=4)};function Sa(n,i){if(!zt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function cn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function jv(n,i,a){var c=i.pendingProps;switch(mc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(i),null;case 1:return Tn(i.type)&&mo(),cn(i),null;case 3:return c=i.stateNode,gs(),Ot(wn),Ot(on),Rc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(yo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ni!==null&&(ru(ni),ni=null))),Yc(n,i),cn(i),null;case 5:Ac(i);var h=Pr(ga.current);if(a=i.type,n!==null&&i.stateNode!=null)tp(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return cn(i),null}if(n=Pr(gi.current),yo(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[mi]=i,c[da]=g,n=(i.mode&1)!==0,a){case"dialog":Ft("cancel",c),Ft("close",c);break;case"iframe":case"object":case"embed":Ft("load",c);break;case"video":case"audio":for(h=0;h<la.length;h++)Ft(la[h],c);break;case"source":Ft("error",c);break;case"img":case"image":case"link":Ft("error",c),Ft("load",c);break;case"details":Ft("toggle",c);break;case"input":mn(c,g),Ft("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Ft("invalid",c);break;case"textarea":J(c,g),Ft("invalid",c)}mt(a,g),h=null;for(var w in g)if(g.hasOwnProperty(w)){var I=g[w];w==="children"?typeof I=="string"?c.textContent!==I&&(g.suppressHydrationWarning!==!0&&ho(c.textContent,I,n),h=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(g.suppressHydrationWarning!==!0&&ho(c.textContent,I,n),h=["children",""+I]):o.hasOwnProperty(w)&&I!=null&&w==="onScroll"&&Ft("scroll",c)}switch(a){case"input":Ye(c),Ze(c,g,!0);break;case"textarea":Ye(c),_e(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=fo)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fe(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[mi]=i,n[da]=c,ep(n,i,!1,!1),i.stateNode=n;e:{switch(w=ot(a,c),a){case"dialog":Ft("cancel",n),Ft("close",n),h=c;break;case"iframe":case"object":case"embed":Ft("load",n),h=c;break;case"video":case"audio":for(h=0;h<la.length;h++)Ft(la[h],n);h=c;break;case"source":Ft("error",n),h=c;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),h=c;break;case"details":Ft("toggle",n),h=c;break;case"input":mn(n,c),h=q(n,c),Ft("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=se({},c,{value:void 0}),Ft("invalid",n);break;case"textarea":J(n,c),h=C(n,c),Ft("invalid",n);break;default:h=c}mt(a,h),I=h;for(g in I)if(I.hasOwnProperty(g)){var k=I[g];g==="style"?nt(n,k):g==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Ue(n,k)):g==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&ft(n,k):typeof k=="number"&&ft(n,""+k):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?k!=null&&g==="onScroll"&&Ft("scroll",n):k!=null&&P(n,g,k,w))}switch(a){case"input":Ye(n),Ze(n,c,!1);break;case"textarea":Ye(n),_e(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ae(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?D(n,!!c.multiple,g,!1):c.defaultValue!=null&&D(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=fo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return cn(i),null;case 6:if(n&&i.stateNode!=null)np(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Pr(ga.current),Pr(gi.current),yo(i)){if(c=i.stateNode,a=i.memoizedProps,c[mi]=i,(g=c.nodeValue!==a)&&(n=Un,n!==null))switch(n.tag){case 3:ho(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ho(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[mi]=i,i.stateNode=c}return cn(i),null;case 13:if(Ot(Bt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&Fn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)sf(),hs(),i.flags|=98560,g=!1;else if(g=yo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[mi]=i}else hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;cn(i),g=!1}else ni!==null&&(ru(ni),ni=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Bt.current&1)!==0?$t===0&&($t=3):ou())),i.updateQueue!==null&&(i.flags|=4),cn(i),null);case 4:return gs(),Yc(n,i),n===null&&ca(i.stateNode.containerInfo),cn(i),null;case 10:return Sc(i.type._context),cn(i),null;case 17:return Tn(i.type)&&mo(),cn(i),null;case 19:if(Ot(Bt),g=i.memoizedState,g===null)return cn(i),null;if(c=(i.flags&128)!==0,w=g.rendering,w===null)if(c)Sa(g,!1);else{if($t!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=Ao(n),w!==null){for(i.flags|=128,Sa(g,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,n=w.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return It(Bt,Bt.current&1|2),i.child}n=n.sibling}g.tail!==null&&Ee()>ys&&(i.flags|=128,c=!0,Sa(g,!1),i.lanes=4194304)}else{if(!c)if(n=Ao(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Sa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!zt)return cn(i),null}else 2*Ee()-g.renderingStartTime>ys&&a!==1073741824&&(i.flags|=128,c=!0,Sa(g,!1),i.lanes=4194304);g.isBackwards?(w.sibling=i.child,i.child=w):(a=g.last,a!==null?a.sibling=w:i.child=w,g.last=w)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Ee(),i.sibling=null,a=Bt.current,It(Bt,c?a&1|2:a&1),i):(cn(i),null);case 22:case 23:return au(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(On&1073741824)!==0&&(cn(i),i.subtreeFlags&6&&(i.flags|=8192)):cn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Wv(n,i){switch(mc(i),i.tag){case 1:return Tn(i.type)&&mo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return gs(),Ot(wn),Ot(on),Rc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Ac(i),null;case 13:if(Ot(Bt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));hs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ot(Bt),null;case 4:return gs(),null;case 10:return Sc(i.type._context),null;case 22:case 23:return au(),null;case 24:return null;default:return null}}var Uo=!1,un=!1,Xv=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function _s(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Vt(n,i,c)}else a.current=null}function qc(n,i,a){try{a()}catch(c){Vt(n,i,c)}}var ip=!1;function Yv(n,i){if(ac=eo,n=Ih(),Jl(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,I=-1,k=-1,ee=0,xe=0,ye=n,ge=null;t:for(;;){for(var De;ye!==a||h!==0&&ye.nodeType!==3||(I=w+h),ye!==g||c!==0&&ye.nodeType!==3||(k=w+c),ye.nodeType===3&&(w+=ye.nodeValue.length),(De=ye.firstChild)!==null;)ge=ye,ye=De;for(;;){if(ye===n)break t;if(ge===a&&++ee===h&&(I=w),ge===g&&++xe===c&&(k=w),(De=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=De}a=I===-1||k===-1?null:{start:I,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(oc={focusedElem:n,selectionRange:a},eo=!1,Fe=i;Fe!==null;)if(i=Fe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Fe=n;else for(;Fe!==null;){i=Fe;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var He=ze.memoizedProps,Gt=ze.memoizedState,$=i.stateNode,G=$.getSnapshotBeforeUpdate(i.elementType===i.type?He:ii(i.type,He),Gt);$.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Vt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,Fe=n;break}Fe=i.return}return ze=ip,ip=!1,ze}function Ma(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&qc(i,a,g)}h=h.next}while(h!==c)}}function Fo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function $c(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function rp(n){var i=n.alternate;i!==null&&(n.alternate=null,rp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[mi],delete i[da],delete i[dc],delete i[bv],delete i[Nv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function sp(n){return n.tag===5||n.tag===3||n.tag===4}function ap(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||sp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Kc(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=fo));else if(c!==4&&(n=n.child,n!==null))for(Kc(n,i,a),n=n.sibling;n!==null;)Kc(n,i,a),n=n.sibling}function Zc(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Zc(n,i,a),n=n.sibling;n!==null;)Zc(n,i,a),n=n.sibling}var nn=null,ri=!1;function sr(n,i,a){for(a=a.child;a!==null;)op(n,i,a),a=a.sibling}function op(n,i,a){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(Ct,a)}catch{}switch(a.tag){case 5:un||_s(a,i);case 6:var c=nn,h=ri;nn=null,sr(n,i,a),nn=c,ri=h,nn!==null&&(ri?(n=nn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):nn.removeChild(a.stateNode));break;case 18:nn!==null&&(ri?(n=nn,a=a.stateNode,n.nodeType===8?uc(n.parentNode,a):n.nodeType===1&&uc(n,a),ea(n)):uc(nn,a.stateNode));break;case 4:c=nn,h=ri,nn=a.stateNode.containerInfo,ri=!0,sr(n,i,a),nn=c,ri=h;break;case 0:case 11:case 14:case 15:if(!un&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&qc(a,i,w),h=h.next}while(h!==c)}sr(n,i,a);break;case 1:if(!un&&(_s(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){Vt(a,i,I)}sr(n,i,a);break;case 21:sr(n,i,a);break;case 22:a.mode&1?(un=(c=un)||a.memoizedState!==null,sr(n,i,a),un=c):sr(n,i,a);break;default:sr(n,i,a)}}function lp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Xv),i.forEach(function(c){var h=n_.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function si(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var g=n,w=i,I=w;e:for(;I!==null;){switch(I.tag){case 5:nn=I.stateNode,ri=!1;break e;case 3:nn=I.stateNode.containerInfo,ri=!0;break e;case 4:nn=I.stateNode.containerInfo,ri=!0;break e}I=I.return}if(nn===null)throw Error(t(160));op(g,w,h),nn=null,ri=!1;var k=h.alternate;k!==null&&(k.return=null),h.return=null}catch(ee){Vt(h,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)cp(i,n),i=i.sibling}function cp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(si(i,n),_i(n),c&4){try{Ma(3,n,n.return),Fo(3,n)}catch(He){Vt(n,n.return,He)}try{Ma(5,n,n.return)}catch(He){Vt(n,n.return,He)}}break;case 1:si(i,n),_i(n),c&512&&a!==null&&_s(a,a.return);break;case 5:if(si(i,n),_i(n),c&512&&a!==null&&_s(a,a.return),n.flags&32){var h=n.stateNode;try{ft(h,"")}catch(He){Vt(n,n.return,He)}}if(c&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,w=a!==null?a.memoizedProps:g,I=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{I==="input"&&g.type==="radio"&&g.name!=null&&vt(h,g),ot(I,w);var ee=ot(I,g);for(w=0;w<k.length;w+=2){var xe=k[w],ye=k[w+1];xe==="style"?nt(h,ye):xe==="dangerouslySetInnerHTML"?Ue(h,ye):xe==="children"?ft(h,ye):P(h,xe,ye,ee)}switch(I){case"input":pt(h,g);break;case"textarea":me(h,g);break;case"select":var ge=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var De=g.value;De!=null?D(h,!!g.multiple,De,!1):ge!==!!g.multiple&&(g.defaultValue!=null?D(h,!!g.multiple,g.defaultValue,!0):D(h,!!g.multiple,g.multiple?[]:"",!1))}h[da]=g}catch(He){Vt(n,n.return,He)}}break;case 6:if(si(i,n),_i(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(He){Vt(n,n.return,He)}}break;case 3:if(si(i,n),_i(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ea(i.containerInfo)}catch(He){Vt(n,n.return,He)}break;case 4:si(i,n),_i(n);break;case 13:si(i,n),_i(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(eu=Ee())),c&4&&lp(n);break;case 22:if(xe=a!==null&&a.memoizedState!==null,n.mode&1?(un=(ee=un)||xe,si(i,n),un=ee):si(i,n),_i(n),c&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!xe&&(n.mode&1)!==0)for(Fe=n,xe=n.child;xe!==null;){for(ye=Fe=xe;Fe!==null;){switch(ge=Fe,De=ge.child,ge.tag){case 0:case 11:case 14:case 15:Ma(4,ge,ge.return);break;case 1:_s(ge,ge.return);var ze=ge.stateNode;if(typeof ze.componentWillUnmount=="function"){c=ge,a=ge.return;try{i=c,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(He){Vt(c,a,He)}}break;case 5:_s(ge,ge.return);break;case 22:if(ge.memoizedState!==null){hp(ye);continue}}De!==null?(De.return=ge,Fe=De):hp(ye)}xe=xe.sibling}e:for(xe=null,ye=n;;){if(ye.tag===5){if(xe===null){xe=ye;try{h=ye.stateNode,ee?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(I=ye.stateNode,k=ye.memoizedProps.style,w=k!=null&&k.hasOwnProperty("display")?k.display:null,I.style.display=tt("display",w))}catch(He){Vt(n,n.return,He)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=ee?"":ye.memoizedProps}catch(He){Vt(n,n.return,He)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:si(i,n),_i(n),c&4&&lp(n);break;case 21:break;default:si(i,n),_i(n)}}function _i(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(sp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(ft(h,""),c.flags&=-33);var g=ap(n);Zc(n,g,h);break;case 3:case 4:var w=c.stateNode.containerInfo,I=ap(n);Kc(n,I,w);break;default:throw Error(t(161))}}catch(k){Vt(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function qv(n,i,a){Fe=n,up(n)}function up(n,i,a){for(var c=(n.mode&1)!==0;Fe!==null;){var h=Fe,g=h.child;if(h.tag===22&&c){var w=h.memoizedState!==null||Uo;if(!w){var I=h.alternate,k=I!==null&&I.memoizedState!==null||un;I=Uo;var ee=un;if(Uo=w,(un=k)&&!ee)for(Fe=h;Fe!==null;)w=Fe,k=w.child,w.tag===22&&w.memoizedState!==null?fp(h):k!==null?(k.return=w,Fe=k):fp(h);for(;g!==null;)Fe=g,up(g),g=g.sibling;Fe=h,Uo=I,un=ee}dp(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Fe=g):dp(n)}}function dp(n){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:un||Fo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!un)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:ii(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&hf(i,g,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}hf(i,w,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var xe=ee.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&ea(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}un||i.flags&512&&$c(i)}catch(ge){Vt(i,i.return,ge)}}if(i===n){Fe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Fe=a;break}Fe=i.return}}function hp(n){for(;Fe!==null;){var i=Fe;if(i===n){Fe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Fe=a;break}Fe=i.return}}function fp(n){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Fo(4,i)}catch(k){Vt(i,a,k)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(k){Vt(i,h,k)}}var g=i.return;try{$c(i)}catch(k){Vt(i,g,k)}break;case 5:var w=i.return;try{$c(i)}catch(k){Vt(i,w,k)}}}catch(k){Vt(i,i.return,k)}if(i===n){Fe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Fe=I;break}Fe=i.return}}var $v=Math.ceil,Oo=T.ReactCurrentDispatcher,Jc=T.ReactCurrentOwner,Yn=T.ReactCurrentBatchConfig,Et=0,Qt=null,jt=null,rn=0,On=0,xs=er(0),$t=0,Ea=null,Dr=0,ko=0,Qc=0,wa=null,Cn=null,eu=0,ys=1/0,Li=null,zo=!1,tu=null,ar=null,Bo=!1,or=null,Ho=0,Ta=0,nu=null,Vo=-1,Go=0;function xn(){return(Et&6)!==0?Ee():Vo!==-1?Vo:Vo=Ee()}function lr(n){return(n.mode&1)===0?1:(Et&2)!==0&&rn!==0?rn&-rn:Lv.transition!==null?(Go===0&&(Go=vn()),Go):(n=Nt,n!==0||(n=window.event,n=n===void 0?16:ph(n.type)),n)}function ai(n,i,a,c){if(50<Ta)throw Ta=0,nu=null,Error(t(185));En(n,a,c),((Et&2)===0||n!==Qt)&&(n===Qt&&((Et&2)===0&&(ko|=a),$t===4&&cr(n,rn)),Rn(n,c),a===1&&Et===0&&(i.mode&1)===0&&(ys=Ee()+500,vo&&nr()))}function Rn(n,i){var a=n.callbackNode;Hn(n,i);var c=pi(n,n===Qt?rn:0);if(c===0)a!==null&&ne(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ne(a),i===1)n.tag===0?Pv(mp.bind(null,n)):Qh(mp.bind(null,n)),Cv(function(){(Et&6)===0&&nr()}),a=null;else{switch(ah(c)){case 1:a=Be;break;case 4:a=it;break;case 16:a=at;break;case 536870912:a=yt;break;default:a=at}a=Ep(a,pp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function pp(n,i){if(Vo=-1,Go=0,(Et&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ss()&&n.callbackNode!==a)return null;var c=pi(n,n===Qt?rn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=jo(n,c);else{i=c;var h=Et;Et|=2;var g=vp();(Qt!==n||rn!==i)&&(Li=null,ys=Ee()+500,Ur(n,i));do try{Jv();break}catch(I){gp(n,I)}while(!0);yc(),Oo.current=g,Et=h,jt!==null?i=0:(Qt=null,rn=0,i=$t)}if(i!==0){if(i===2&&(h=wi(n),h!==0&&(c=h,i=iu(n,h))),i===1)throw a=Ea,Ur(n,0),cr(n,c),Rn(n,Ee()),a;if(i===6)cr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!Kv(h)&&(i=jo(n,c),i===2&&(g=wi(n),g!==0&&(c=g,i=iu(n,g))),i===1))throw a=Ea,Ur(n,0),cr(n,c),Rn(n,Ee()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Fr(n,Cn,Li);break;case 3:if(cr(n,c),(c&130023424)===c&&(i=eu+500-Ee(),10<i)){if(pi(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){xn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=cc(Fr.bind(null,n,Cn,Li),i);break}Fr(n,Cn,Li);break;case 4:if(cr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var w=31-ct(c);g=1<<w,w=i[w],w>h&&(h=w),c&=~g}if(c=h,c=Ee()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*$v(c/1960))-c,10<c){n.timeoutHandle=cc(Fr.bind(null,n,Cn,Li),c);break}Fr(n,Cn,Li);break;case 5:Fr(n,Cn,Li);break;default:throw Error(t(329))}}}return Rn(n,Ee()),n.callbackNode===a?pp.bind(null,n):null}function iu(n,i){var a=wa;return n.current.memoizedState.isDehydrated&&(Ur(n,i).flags|=256),n=jo(n,i),n!==2&&(i=Cn,Cn=a,i!==null&&ru(i)),n}function ru(n){Cn===null?Cn=n:Cn.push.apply(Cn,n)}function Kv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],g=h.getSnapshot;h=h.value;try{if(!ti(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(n,i){for(i&=~Qc,i&=~ko,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-ct(i),c=1<<a;n[a]=-1,i&=~c}}function mp(n){if((Et&6)!==0)throw Error(t(327));Ss();var i=pi(n,0);if((i&1)===0)return Rn(n,Ee()),null;var a=jo(n,i);if(n.tag!==0&&a===2){var c=wi(n);c!==0&&(i=c,a=iu(n,c))}if(a===1)throw a=Ea,Ur(n,0),cr(n,i),Rn(n,Ee()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Fr(n,Cn,Li),Rn(n,Ee()),null}function su(n,i){var a=Et;Et|=1;try{return n(i)}finally{Et=a,Et===0&&(ys=Ee()+500,vo&&nr())}}function Ir(n){or!==null&&or.tag===0&&(Et&6)===0&&Ss();var i=Et;Et|=1;var a=Yn.transition,c=Nt;try{if(Yn.transition=null,Nt=1,n)return n()}finally{Nt=c,Yn.transition=a,Et=i,(Et&6)===0&&nr()}}function au(){On=xs.current,Ot(xs)}function Ur(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Av(a)),jt!==null)for(a=jt.return;a!==null;){var c=a;switch(mc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&mo();break;case 3:gs(),Ot(wn),Ot(on),Rc();break;case 5:Ac(c);break;case 4:gs();break;case 13:Ot(Bt);break;case 19:Ot(Bt);break;case 10:Sc(c.type._context);break;case 22:case 23:au()}a=a.return}if(Qt=n,jt=n=ur(n.current,null),rn=On=i,$t=0,Ea=null,Qc=ko=Dr=0,Cn=wa=null,Nr!==null){for(i=0;i<Nr.length;i++)if(a=Nr[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,g=a.pending;if(g!==null){var w=g.next;g.next=h,c.next=w}a.pending=c}Nr=null}return n}function gp(n,i){do{var a=jt;try{if(yc(),Co.current=Po,Ro){for(var c=Ht.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}Ro=!1}if(Lr=0,Jt=qt=Ht=null,va=!1,_a=0,Jc.current=null,a===null||a.return===null){$t=1,Ea=i,jt=null;break}e:{var g=n,w=a.return,I=a,k=i;if(i=rn,I.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var ee=k,xe=I,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=xe.alternate;ge?(xe.updateQueue=ge.updateQueue,xe.memoizedState=ge.memoizedState,xe.lanes=ge.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var De=Hf(w);if(De!==null){De.flags&=-257,Vf(De,w,I,g,i),De.mode&1&&Bf(g,ee,i),i=De,k=ee;var ze=i.updateQueue;if(ze===null){var He=new Set;He.add(k),i.updateQueue=He}else ze.add(k);break e}else{if((i&1)===0){Bf(g,ee,i),ou();break e}k=Error(t(426))}}else if(zt&&I.mode&1){var Gt=Hf(w);if(Gt!==null){(Gt.flags&65536)===0&&(Gt.flags|=256),Vf(Gt,w,I,g,i),_c(vs(k,I));break e}}g=k=vs(k,I),$t!==4&&($t=2),wa===null?wa=[g]:wa.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var $=kf(g,k,i);df(g,$);break e;case 1:I=k;var G=g.type,K=g.stateNode;if((g.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(ar===null||!ar.has(K)))){g.flags|=65536,i&=-i,g.lanes|=i;var we=zf(g,I,i);df(g,we);break e}}g=g.return}while(g!==null)}xp(a)}catch(We){i=We,jt===a&&a!==null&&(jt=a=a.return);continue}break}while(!0)}function vp(){var n=Oo.current;return Oo.current=Po,n===null?Po:n}function ou(){($t===0||$t===3||$t===2)&&($t=4),Qt===null||(Dr&268435455)===0&&(ko&268435455)===0||cr(Qt,rn)}function jo(n,i){var a=Et;Et|=2;var c=vp();(Qt!==n||rn!==i)&&(Li=null,Ur(n,i));do try{Zv();break}catch(h){gp(n,h)}while(!0);if(yc(),Et=a,Oo.current=c,jt!==null)throw Error(t(261));return Qt=null,rn=0,$t}function Zv(){for(;jt!==null;)_p(jt)}function Jv(){for(;jt!==null&&!Y();)_p(jt)}function _p(n){var i=Mp(n.alternate,n,On);n.memoizedProps=n.pendingProps,i===null?xp(n):jt=i,Jc.current=null}function xp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=jv(a,i,On),a!==null){jt=a;return}}else{if(a=Wv(a,i),a!==null){a.flags&=32767,jt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{$t=6,jt=null;return}}if(i=i.sibling,i!==null){jt=i;return}jt=i=n}while(i!==null);$t===0&&($t=5)}function Fr(n,i,a){var c=Nt,h=Yn.transition;try{Yn.transition=null,Nt=1,Qv(n,i,a,c)}finally{Yn.transition=h,Nt=c}return null}function Qv(n,i,a,c){do Ss();while(or!==null);if((Et&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(Za(n,g),n===Qt&&(jt=Qt=null,rn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Bo||(Bo=!0,Ep(at,function(){return Ss(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Yn.transition,Yn.transition=null;var w=Nt;Nt=1;var I=Et;Et|=4,Jc.current=null,Yv(n,a),cp(a,n),xv(oc),eo=!!ac,oc=ac=null,n.current=a,qv(a),Te(),Et=I,Nt=w,Yn.transition=g}else n.current=a;if(Bo&&(Bo=!1,or=n,Ho=h),g=n.pendingLanes,g===0&&(ar=null),sn(a.stateNode),Rn(n,Ee()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(zo)throw zo=!1,n=tu,tu=null,n;return(Ho&1)!==0&&n.tag!==0&&Ss(),g=n.pendingLanes,(g&1)!==0?n===nu?Ta++:(Ta=0,nu=n):Ta=0,nr(),null}function Ss(){if(or!==null){var n=ah(Ho),i=Yn.transition,a=Nt;try{if(Yn.transition=null,Nt=16>n?16:n,or===null)var c=!1;else{if(n=or,or=null,Ho=0,(Et&6)!==0)throw Error(t(331));var h=Et;for(Et|=4,Fe=n.current;Fe!==null;){var g=Fe,w=g.child;if((Fe.flags&16)!==0){var I=g.deletions;if(I!==null){for(var k=0;k<I.length;k++){var ee=I[k];for(Fe=ee;Fe!==null;){var xe=Fe;switch(xe.tag){case 0:case 11:case 15:Ma(8,xe,g)}var ye=xe.child;if(ye!==null)ye.return=xe,Fe=ye;else for(;Fe!==null;){xe=Fe;var ge=xe.sibling,De=xe.return;if(rp(xe),xe===ee){Fe=null;break}if(ge!==null){ge.return=De,Fe=ge;break}Fe=De}}}var ze=g.alternate;if(ze!==null){var He=ze.child;if(He!==null){ze.child=null;do{var Gt=He.sibling;He.sibling=null,He=Gt}while(He!==null)}}Fe=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,Fe=w;else e:for(;Fe!==null;){if(g=Fe,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ma(9,g,g.return)}var $=g.sibling;if($!==null){$.return=g.return,Fe=$;break e}Fe=g.return}}var G=n.current;for(Fe=G;Fe!==null;){w=Fe;var K=w.child;if((w.subtreeFlags&2064)!==0&&K!==null)K.return=w,Fe=K;else e:for(w=G;Fe!==null;){if(I=Fe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Fo(9,I)}}catch(We){Vt(I,I.return,We)}if(I===w){Fe=null;break e}var we=I.sibling;if(we!==null){we.return=I.return,Fe=we;break e}Fe=I.return}}if(Et=h,nr(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(Ct,n)}catch{}c=!0}return c}finally{Nt=a,Yn.transition=i}}return!1}function yp(n,i,a){i=vs(a,i),i=kf(n,i,1),n=rr(n,i,1),i=xn(),n!==null&&(En(n,1,i),Rn(n,i))}function Vt(n,i,a){if(n.tag===3)yp(n,n,a);else for(;i!==null;){if(i.tag===3){yp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ar===null||!ar.has(c))){n=vs(a,n),n=zf(i,n,1),i=rr(i,n,1),n=xn(),i!==null&&(En(i,1,n),Rn(i,n));break}}i=i.return}}function e_(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=xn(),n.pingedLanes|=n.suspendedLanes&a,Qt===n&&(rn&a)===a&&($t===4||$t===3&&(rn&130023424)===rn&&500>Ee()-eu?Ur(n,0):Qc|=a),Rn(n,i)}function Sp(n,i){i===0&&((n.mode&1)===0?i=1:(i=ei,ei<<=1,(ei&130023424)===0&&(ei=4194304)));var a=xn();n=bi(n,i),n!==null&&(En(n,i,a),Rn(n,a))}function t_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Sp(n,a)}function n_(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Sp(n,a)}var Mp;Mp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||wn.current)An=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return An=!1,Gv(n,i,a);An=(n.flags&131072)!==0}else An=!1,zt&&(i.flags&1048576)!==0&&ef(i,xo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Io(n,i),n=i.pendingProps;var h=cs(i,on.current);ms(i,a),h=Pc(null,i,c,n,h,a);var g=Lc();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Tn(c)?(g=!0,go(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,wc(i),h.updater=Lo,i.stateNode=h,h._reactInternals=i,kc(i,c,n,a),i=Vc(null,i,c,!0,g,a)):(i.tag=0,zt&&g&&pc(i),_n(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Io(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=r_(c),n=ii(c,n),h){case 0:i=Hc(null,i,c,n,a);break e;case 1:i=qf(null,i,c,n,a);break e;case 11:i=Gf(null,i,c,n,a);break e;case 14:i=jf(null,i,c,ii(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ii(c,h),Hc(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ii(c,h),qf(n,i,c,h,a);case 3:e:{if($f(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,h=g.element,uf(n,i),To(i,c,null,a);var w=i.memoizedState;if(c=w.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=vs(Error(t(423)),i),i=Kf(n,i,c,a,h);break e}else if(c!==h){h=vs(Error(t(424)),i),i=Kf(n,i,c,a,h);break e}else for(Fn=Qi(i.stateNode.containerInfo.firstChild),Un=i,zt=!0,ni=null,a=lf(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(hs(),c===h){i=Pi(n,i,a);break e}_n(n,i,c,a)}i=i.child}return i;case 5:return ff(i),n===null&&vc(i),c=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,w=h.children,lc(c,h)?w=null:g!==null&&lc(c,g)&&(i.flags|=32),Yf(n,i),_n(n,i,w,a),i.child;case 6:return n===null&&vc(i),null;case 13:return Zf(n,i,a);case 4:return Tc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=fs(i,null,c,a):_n(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ii(c,h),Gf(n,i,c,h,a);case 7:return _n(n,i,i.pendingProps,a),i.child;case 8:return _n(n,i,i.pendingProps.children,a),i.child;case 12:return _n(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,g=i.memoizedProps,w=h.value,It(Mo,c._currentValue),c._currentValue=w,g!==null)if(ti(g.value,w)){if(g.children===h.children&&!wn.current){i=Pi(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var I=g.dependencies;if(I!==null){w=g.child;for(var k=I.firstContext;k!==null;){if(k.context===c){if(g.tag===1){k=Ni(-1,a&-a),k.tag=2;var ee=g.updateQueue;if(ee!==null){ee=ee.shared;var xe=ee.pending;xe===null?k.next=k:(k.next=xe.next,xe.next=k),ee.pending=k}}g.lanes|=a,k=g.alternate,k!==null&&(k.lanes|=a),Mc(g.return,a,i),I.lanes|=a;break}k=k.next}}else if(g.tag===10)w=g.type===i.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,I=w.alternate,I!==null&&(I.lanes|=a),Mc(w,a,i),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===i){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}_n(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,ms(i,a),h=Wn(h),c=c(h),i.flags|=1,_n(n,i,c,a),i.child;case 14:return c=i.type,h=ii(c,i.pendingProps),h=ii(c.type,h),jf(n,i,c,h,a);case 15:return Wf(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ii(c,h),Io(n,i),i.tag=1,Tn(c)?(n=!0,go(i)):n=!1,ms(i,a),Ff(i,c,h),kc(i,c,h,a),Vc(null,i,c,!0,n,a);case 19:return Qf(n,i,a);case 22:return Xf(n,i,a)}throw Error(t(156,i.tag))};function Ep(n,i){return te(n,i)}function i_(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(n,i,a,c){return new i_(n,i,a,c)}function lu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function r_(n){if(typeof n=="function")return lu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ie)return 11;if(n===he)return 14}return 2}function ur(n,i){var a=n.alternate;return a===null?(a=qn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Wo(n,i,a,c,h,g){var w=2;if(c=n,typeof n=="function")lu(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case U:return Or(a.children,h,g,i);case B:w=8,h|=8;break;case L:return n=qn(12,a,i,h|2),n.elementType=L,n.lanes=g,n;case Q:return n=qn(13,a,i,h),n.elementType=Q,n.lanes=g,n;case de:return n=qn(19,a,i,h),n.elementType=de,n.lanes=g,n;case ue:return Xo(a,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:w=10;break e;case z:w=9;break e;case ie:w=11;break e;case he:w=14;break e;case ce:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=qn(w,a,i,h),i.elementType=n,i.type=c,i.lanes=g,i}function Or(n,i,a,c){return n=qn(7,n,c,i),n.lanes=a,n}function Xo(n,i,a,c){return n=qn(22,n,c,i),n.elementType=ue,n.lanes=a,n.stateNode={isHidden:!1},n}function cu(n,i,a){return n=qn(6,n,null,i),n.lanes=a,n}function uu(n,i,a){return i=qn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function s_(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vn(0),this.expirationTimes=Vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vn(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function du(n,i,a,c,h,g,w,I,k){return n=new s_(n,i,a,I,k),i===1?(i=1,g===!0&&(i|=8)):i=0,g=qn(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},wc(g),n}function a_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function wp(n){if(!n)return tr;n=n._reactInternals;e:{if(fi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Tn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Tn(a))return Zh(n,a,i)}return i}function Tp(n,i,a,c,h,g,w,I,k){return n=du(a,c,!0,n,h,g,w,I,k),n.context=wp(null),a=n.current,c=xn(),h=lr(a),g=Ni(c,h),g.callback=i??null,rr(a,g,h),n.current.lanes=h,En(n,h,c),Rn(n,c),n}function Yo(n,i,a,c){var h=i.current,g=xn(),w=lr(h);return a=wp(a),i.context===null?i.context=a:i.pendingContext=a,i=Ni(g,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=rr(h,i,w),n!==null&&(ai(n,h,w,g),wo(n,h,w)),w}function qo(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Ap(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function hu(n,i){Ap(n,i),(n=n.alternate)&&Ap(n,i)}function o_(){return null}var Cp=typeof reportError=="function"?reportError:function(n){console.error(n)};function fu(n){this._internalRoot=n}$o.prototype.render=fu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Yo(n,i,null,null)},$o.prototype.unmount=fu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Ir(function(){Yo(null,n,null,null)}),i[Ti]=null}};function $o(n){this._internalRoot=n}$o.prototype.unstable_scheduleHydration=function(n){if(n){var i=ch();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Ki.length&&i!==0&&i<Ki[a].priority;a++);Ki.splice(a,0,n),a===0&&hh(n)}};function pu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ko(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Rp(){}function l_(n,i,a,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var ee=qo(w);g.call(ee)}}var w=Tp(i,c,n,0,null,!1,!1,"",Rp);return n._reactRootContainer=w,n[Ti]=w.current,ca(n.nodeType===8?n.parentNode:n),Ir(),w}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var I=c;c=function(){var ee=qo(k);I.call(ee)}}var k=du(n,0,!1,null,null,!1,!1,"",Rp);return n._reactRootContainer=k,n[Ti]=k.current,ca(n.nodeType===8?n.parentNode:n),Ir(function(){Yo(i,k,a,c)}),k}function Zo(n,i,a,c,h){var g=a._reactRootContainer;if(g){var w=g;if(typeof h=="function"){var I=h;h=function(){var k=qo(w);I.call(k)}}Yo(i,w,n,h)}else w=l_(a,i,n,h,c);return qo(w)}oh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Yt(i.pendingLanes);a!==0&&(kl(i,a|1),Rn(i,Ee()),(Et&6)===0&&(ys=Ee()+500,nr()))}break;case 13:Ir(function(){var c=bi(n,1);if(c!==null){var h=xn();ai(c,n,1,h)}}),hu(n,1)}},zl=function(n){if(n.tag===13){var i=bi(n,134217728);if(i!==null){var a=xn();ai(i,n,134217728,a)}hu(n,134217728)}},lh=function(n){if(n.tag===13){var i=lr(n),a=bi(n,i);if(a!==null){var c=xn();ai(a,n,i,c)}hu(n,i)}},ch=function(){return Nt},uh=function(n,i){var a=Nt;try{return Nt=n,i()}finally{Nt=a}},Re=function(n,i,a){switch(i){case"input":if(pt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=po(c);if(!h)throw Error(t(90));st(c),pt(c,h)}}}break;case"textarea":me(n,a);break;case"select":i=a.value,i!=null&&D(n,!!a.multiple,i,!1)}},Ut=su,Xt=Ir;var c_={usingClientEntryPoint:!1,Events:[ha,os,po,Ne,lt,su]},Aa={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},u_={bundleType:Aa.bundleType,version:Aa.version,rendererPackageName:Aa.rendererPackageName,rendererConfig:Aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=b(n),n===null?null:n.stateNode},findFiberByHostInstance:Aa.findFiberByHostInstance||o_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jo.isDisabled&&Jo.supportsFiber)try{Ct=Jo.inject(u_),_t=Jo}catch{}}return bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c_,bn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pu(i))throw Error(t(200));return a_(n,i,null,a)},bn.createRoot=function(n,i){if(!pu(n))throw Error(t(299));var a=!1,c="",h=Cp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=du(n,1,!1,null,null,a,!1,c,h),n[Ti]=i.current,ca(n.nodeType===8?n.parentNode:n),new fu(i)},bn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=b(i),n=n===null?null:n.stateNode,n},bn.flushSync=function(n){return Ir(n)},bn.hydrate=function(n,i,a){if(!Ko(i))throw Error(t(200));return Zo(null,n,i,!0,a)},bn.hydrateRoot=function(n,i,a){if(!pu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,g="",w=Cp;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Tp(i,null,n,1,a??null,h,!1,g,w),n[Ti]=i.current,ca(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new $o(i)},bn.render=function(n,i,a){if(!Ko(i))throw Error(t(200));return Zo(null,n,i,!1,a)},bn.unmountComponentAtNode=function(n){if(!Ko(n))throw Error(t(40));return n._reactRootContainer?(Ir(function(){Zo(null,null,n,!1,function(){n._reactRootContainer=null,n[Ti]=null})}),!0):!1},bn.unstable_batchedUpdates=su,bn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Ko(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Zo(n,i,a,!1,c)},bn.version="18.3.1-next-f1338f8080-20240426",bn}var Fp;function S_(){if(Fp)return vu.exports;Fp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),vu.exports=y_(),vu.exports}var Op;function M_(){if(Op)return Qo;Op=1;var s=S_();return Qo.createRoot=s.createRoot,Qo.hydrateRoot=s.hydrateRoot,Qo}var E_=M_();const w_=Ym(E_);var kp="1.3.26";function qm(s,e,t){return Math.max(s,Math.min(e,t))}function T_(s,e,t){return(1-t)*s+t*e}function A_(s,e,t,r){return T_(s,e,1-Math.exp(-t*r))}function C_(s,e){return(s%e+e)%e}var R_=class{constructor(){Xe(this,"isRunning",!1);Xe(this,"value",0);Xe(this,"from",0);Xe(this,"to",0);Xe(this,"currentTime",0);Xe(this,"lerp");Xe(this,"duration");Xe(this,"easing");Xe(this,"onUpdate")}advance(s){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=s;const r=qm(0,this.currentTime/this.duration,1);e=r>=1;const o=e?1:this.easing(r);this.value=this.from+(this.to-this.from)*o}else this.lerp?(this.value=A_(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(s,e,{lerp:t,duration:r,easing:o,onStart:l,onUpdate:u}){this.from=this.value=s,this.to=e,this.lerp=t,this.duration=r,this.easing=o,this.currentTime=0,this.isRunning=!0,l==null||l(),this.onUpdate=u}};function b_(s,e){let t;return function(...r){clearTimeout(t),t=setTimeout(()=>{t=void 0,s.apply(this,r)},e)}}var N_=class{constructor(s,e,{autoResize:t=!0,debounce:r=250}={}){Xe(this,"width",0);Xe(this,"height",0);Xe(this,"scrollHeight",0);Xe(this,"scrollWidth",0);Xe(this,"debouncedResize");Xe(this,"wrapperResizeObserver");Xe(this,"contentResizeObserver");Xe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Xe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Xe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=e,t&&(this.debouncedResize=b_(this.resize,r),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var s,e;(s=this.wrapperResizeObserver)==null||s.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},$m=class{constructor(){Xe(this,"events",{})}emit(s,...e){var r;const t=this.events[s]||[];for(let o=0,l=t.length;o<l;o++)(r=t[o])==null||r.call(t,...e)}on(s,e){return this.events[s]?this.events[s].push(e):this.events[s]=[e],()=>{var t;this.events[s]=(t=this.events[s])==null?void 0:t.filter(r=>e!==r)}}off(s,e){var t;this.events[s]=(t=this.events[s])==null?void 0:t.filter(r=>e!==r)}destroy(){this.events={}}};const P_=100/6,hr={passive:!1};function zp(s,e){return s===1?P_:s===2?e:1}var L_=class{constructor(s,e={wheelMultiplier:1,touchMultiplier:1}){Xe(this,"touchStart",{x:0,y:0});Xe(this,"lastDelta",{x:0,y:0});Xe(this,"window",{width:0,height:0});Xe(this,"emitter",new $m);Xe(this,"onTouchStart",s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Xe(this,"onTouchMove",s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s,r=-(e-this.touchStart.x)*this.options.touchMultiplier,o=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:r,y:o},this.emitter.emit("scroll",{deltaX:r,deltaY:o,event:s})});Xe(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Xe(this,"onWheel",s=>{let{deltaX:e,deltaY:t,deltaMode:r}=s;const o=zp(r,this.window.width),l=zp(r,this.window.height);e*=o,t*=l,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:s})});Xe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,hr),this.element.addEventListener("touchstart",this.onTouchStart,hr),this.element.addEventListener("touchmove",this.onTouchMove,hr),this.element.addEventListener("touchend",this.onTouchEnd,hr)}on(s,e){return this.emitter.on(s,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,hr),this.element.removeEventListener("touchstart",this.onTouchStart,hr),this.element.removeEventListener("touchmove",this.onTouchMove,hr),this.element.removeEventListener("touchend",this.onTouchEnd,hr)}};const Bp=s=>Math.min(1,1.001-2**(-10*s));var D_=class{constructor({wrapper:s=window,content:e=document.documentElement,eventsTarget:t=s,smoothWheel:r=!0,syncTouch:o=!1,syncTouchLerp:l=.075,touchInertiaExponent:u=1.7,duration:d,easing:p,lerp:m=.1,infinite:v=!1,orientation:x="vertical",gestureOrientation:_=x==="horizontal"?"both":"vertical",touchMultiplier:M=1,wheelMultiplier:E=1,autoResize:A=!0,prevent:S,virtualScroll:y,overscroll:N=!0,autoRaf:P=!1,anchors:T=!1,autoToggle:j=!1,allowNestedScroll:F=!1,__experimental__naiveDimensions:U=!1,naiveDimensions:B=U,stopInertiaOnNavigate:L=!1,respectReducedMotion:R=!0}={}){Xe(this,"_isScrolling",!1);Xe(this,"_isStopped",!1);Xe(this,"_isLocked",!1);Xe(this,"_preventNextNativeScrollEvent",!1);Xe(this,"_resetVelocityTimeout",null);Xe(this,"_rafId",null);Xe(this,"_isDraggingSelection",!1);Xe(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Xe(this,"isTouching");Xe(this,"isIos");Xe(this,"time",0);Xe(this,"userData",{});Xe(this,"lastVelocity",0);Xe(this,"velocity",0);Xe(this,"direction",0);Xe(this,"options");Xe(this,"targetScroll");Xe(this,"animatedScroll");Xe(this,"animate",new R_);Xe(this,"emitter",new $m);Xe(this,"dimensions");Xe(this,"virtualScroll");Xe(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});Xe(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Xe(this,"onTransitionEnd",s=>{var e;(e=s.propertyName)!=null&&e.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});Xe(this,"onClick",s=>{const e=s.composedPath().filter(r=>r instanceof HTMLAnchorElement&&r.href).map(r=>new URL(r.href)),t=new URL(window.location.href);if(this.options.anchors){const r=e.find(o=>t.host===o.host&&t.pathname===o.pathname&&o.hash);if(r){const o=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,l=decodeURIComponent(r.hash);this.scrollTo(l,o);return}}if(this.options.stopInertiaOnNavigate&&e.some(r=>t.host===r.host&&t.pathname!==r.pathname)){this.reset();return}});Xe(this,"onPointerDown",s=>{s.button===1&&this.reset()});Xe(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;const{deltaX:e,deltaY:t,event:r}=s;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:r}),r.ctrlKey||r.lenisStopPropagation)return;const o=r.type.includes("touch"),l=r.type.includes("wheel");if(o&&this.isIos&&(r.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(r)),this._isDraggingSelection)){r.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=r.type==="touchstart"||r.type==="touchmove";const u=e===0&&t===0;if(this.options.syncTouch&&o&&r.type==="touchstart"&&u&&!this.isStopped&&!this.isLocked){this.reset();return}const d=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(u||d)return;let p=r.composedPath();p=p.slice(0,p.indexOf(this.rootElement));const m=this.options.prevent,v=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(p.find(E=>{var A,S,y,N,P;return E instanceof HTMLElement&&(typeof m=="function"&&(m==null?void 0:m(E))||((A=E.hasAttribute)==null?void 0:A.call(E,"data-lenis-prevent"))||v==="vertical"&&((S=E.hasAttribute)==null?void 0:S.call(E,"data-lenis-prevent-vertical"))||v==="horizontal"&&((y=E.hasAttribute)==null?void 0:y.call(E,"data-lenis-prevent-horizontal"))||o&&((N=E.hasAttribute)==null?void 0:N.call(E,"data-lenis-prevent-touch"))||l&&((P=E.hasAttribute)==null?void 0:P.call(E,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(E,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&o||this.options.smoothWheel&&l)){this.isScrolling="native",this.animate.stop(),r.lenisStopPropagation=!0;return}let x=t;this.options.gestureOrientation==="both"?x=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(x=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();const _=o&&this.options.syncTouch,M=o&&r.type==="touchend";M&&(x=Math.sign(x)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+x,{programmatic:!1,..._?{lerp:M?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Xe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Xe(this,"raf",s=>{const e=s-(this.time||s);this.time=s,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=kp,window.lenis||(window.lenis={}),window.lenis.version=kp,x==="horizontal"&&(window.lenis.horizontal=!0),o===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof d=="number"&&typeof p!="function"?p=Bp:typeof p=="function"&&typeof d!="number"&&(d=1),this.options={wrapper:s,content:e,eventsTarget:t,smoothWheel:r,syncTouch:o,syncTouchLerp:l,touchInertiaExponent:u,duration:d,easing:p,lerp:m,infinite:v,gestureOrientation:_,orientation:x,touchMultiplier:M,wheelMultiplier:E,autoResize:A,prevent:S,virtualScroll:y,overscroll:N,autoRaf:P,anchors:T,autoToggle:j,allowNestedScroll:F,naiveDimensions:B,stopInertiaOnNavigate:L,respectReducedMotion:R},this.dimensions=new N_(s,e,{autoResize:A}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new L_(t,{touchMultiplier:M,wheelMultiplier:E}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,e){return this.emitter.on(s,e)}off(s,e){return this.emitter.off(s,e)}get overflow(){const s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=s.targetTouches[0]??s.changedTouches[0];if(!t)return!1;const r=e.getRangeAt(0).getClientRects();if(r.length===0)return!1;const o=r[0],l=r[r.length-1],u=40,d=Math.hypot(t.clientX-o.left,t.clientY-o.top)<=u,p=Math.hypot(t.clientX-l.right,t.clientY-l.bottom)<=u;return d||p}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:e=0,immediate:t=!1,lock:r=!1,programmatic:o=!0,lerp:l=o?this.options.lerp:void 0,duration:u=o?this.options.duration:void 0,easing:d=o?this.options.easing:void 0,onStart:p,onComplete:m,force:v=!1,userData:x}={}){if(this.prefersReducedMotion&&(o?t=!0:(l=1,u=void 0,d=void 0)),(this.isStopped||this.isLocked)&&!v)return;let _=s,M=e;if(typeof _=="string"&&["top","left","start","#"].includes(_))_=0;else if(typeof _=="string"&&["bottom","right","end"].includes(_))_=this.limit;else{let E=null;if(typeof _=="string"?(E=_.startsWith("#")?document.getElementById(_.slice(1)):document.querySelector(_),E||(_==="#top"?_=0:console.warn("Lenis: Target not found",_))):_ instanceof HTMLElement&&(_!=null&&_.nodeType)&&(E=_),E){if(this.options.wrapper!==window){const T=this.rootElement.getBoundingClientRect();M-=this.isHorizontal?T.left:T.top}const A=E.getBoundingClientRect(),S=getComputedStyle(E),y=this.isHorizontal?Number.parseFloat(S.scrollMarginLeft):Number.parseFloat(S.scrollMarginTop),N=getComputedStyle(this.rootElement),P=this.isHorizontal?Number.parseFloat(N.scrollPaddingLeft):Number.parseFloat(N.scrollPaddingTop);_=(this.isHorizontal?A.left:A.top)+this.animatedScroll-(Number.isNaN(y)?0:y)-(Number.isNaN(P)?0:P)}}if(typeof _=="number"){if(_+=M,this.options.infinite){if(o){this.targetScroll=this.animatedScroll=this.scroll;const E=_-this.animatedScroll;E>this.limit/2?_-=this.limit:E<-this.limit/2&&(_+=this.limit)}}else _=qm(0,_,this.limit);if(_===this.targetScroll){p==null||p(this),m==null||m(this);return}if(this.userData=x??{},t){this.animatedScroll=this.targetScroll=_,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),m==null||m(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}o||(this.targetScroll=_),typeof u=="number"&&typeof d!="function"?d=Bp:typeof d=="function"&&typeof u!="number"&&(u=1),this.animate.fromTo(this.animatedScroll,_,{duration:u,easing:d,lerp:l,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling="smooth",p==null||p(this)},onUpdate:(E,A)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=E-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=E,this.setScroll(this.scroll),o&&(this.targetScroll=E),A||this.emit(),A&&(this.reset(),this.emit(),m==null||m(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:e,deltaY:t}){const r=Date.now();s._lenis||(s._lenis={});const o=s._lenis;let l,u,d,p,m,v,x,_,M,E;if(r-(o.time??0)>2e3){o.time=Date.now();const F=window.getComputedStyle(s);if(o.computedStyle=F,l=["auto","overlay","scroll"].includes(F.overflowX),u=["auto","overlay","scroll"].includes(F.overflowY),m=["auto"].includes(F.overscrollBehaviorX),v=["auto"].includes(F.overscrollBehaviorY),o.hasOverflowX=l,o.hasOverflowY=u,!(l||u))return!1;x=s.scrollWidth,_=s.scrollHeight,M=s.clientWidth,E=s.clientHeight,d=x>M,p=_>E,o.isScrollableX=d,o.isScrollableY=p,o.scrollWidth=x,o.scrollHeight=_,o.clientWidth=M,o.clientHeight=E,o.hasOverscrollBehaviorX=m,o.hasOverscrollBehaviorY=v}else d=o.isScrollableX,p=o.isScrollableY,l=o.hasOverflowX,u=o.hasOverflowY,x=o.scrollWidth,_=o.scrollHeight,M=o.clientWidth,E=o.clientHeight,m=o.hasOverscrollBehaviorX,v=o.hasOverscrollBehaviorY;if(!(l&&d||u&&p))return!1;const A=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let S,y,N,P,T,j;if(A==="horizontal")S=Math.round(s.scrollLeft),y=x-M,N=e,P=l,T=d,j=m;else if(A==="vertical")S=Math.round(s.scrollTop),y=_-E,N=t,P=u,T=p,j=v;else return!1;return!j&&(S>=y||S<=0)?!0:(N>0?S<y:S>0)&&P&&T}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?C_(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(const s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};function I_({activeSection:s,onNavigate:e}){const[t,r]=dt.useState(!1),[o,l]=dt.useState(!1),[u,d]=dt.useState("hero"),p=s||u;dt.useEffect(()=>{const v=()=>{if(r(window.scrollY>50),!s){const x=["hero","what-i-do","about","media-kit","portfolio","services","contact"];for(const _ of x){const M=document.getElementById(_);if(M){const E=M.getBoundingClientRect();if(E.top<=200&&E.bottom>=200){d(_);break}}}}};return window.addEventListener("scroll",v,{passive:!0}),()=>window.removeEventListener("scroll",v)},[s]),dt.useEffect(()=>{const v=x=>{x.key==="Escape"&&o&&l(!1)};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[o]);const m=(v,x)=>{l(!1),e&&(v.preventDefault(),e(x))};return f.jsx("header",{className:`navbar ${t?"scrolled":""}`,id:"main-header",children:f.jsxs("div",{className:"nav-container",children:[f.jsxs("a",{href:"#hero",className:"logo",onClick:v=>m(v,"hero"),children:[f.jsx("span",{className:"logo-accent",children:"BIKASH"}),"SUNA"]}),o&&f.jsx("div",{className:"nav-drawer-backdrop",onClick:()=>l(!1),"aria-hidden":"true"}),f.jsx("nav",{className:`nav-menu ${o?"active":""}`,id:"nav-menu",children:f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"#hero",className:`nav-link ${p==="hero"?"active":""}`,onClick:v=>m(v,"hero"),children:"Home"})}),f.jsx("li",{children:f.jsx("a",{href:"#what-i-do",className:`nav-link ${p==="what-i-do"?"active":""}`,onClick:v=>m(v,"what-i-do"),children:"What I Do"})}),f.jsx("li",{children:f.jsx("a",{href:"#about",className:`nav-link ${p==="about"?"active":""}`,onClick:v=>m(v,"about"),children:"About"})}),f.jsx("li",{children:f.jsx("a",{href:"#media-kit",className:`nav-link ${p==="media-kit"?"active":""}`,onClick:v=>m(v,"media-kit"),children:"Media Kit"})}),f.jsx("li",{children:f.jsx("a",{href:"#portfolio",className:`nav-link ${p==="portfolio"?"active":""}`,onClick:v=>m(v,"portfolio"),children:"Showreels"})}),f.jsx("li",{children:f.jsx("a",{href:"#services",className:`nav-link ${p==="services"?"active":""}`,onClick:v=>m(v,"services"),children:"Packages"})}),f.jsx("li",{children:f.jsx("a",{href:"#contact",className:`nav-link ${p==="contact"?"active":""}`,onClick:v=>m(v,"contact"),children:"Contact"})}),f.jsx("li",{className:"mobile-menu-cta-item",children:f.jsxs("a",{href:"#contact",className:"btn btn-primary btn-block mobile-menu-cta-btn",onClick:v=>m(v,"contact"),children:[f.jsx("i",{className:"fa-solid fa-handshake"})," Collab / Hire"]})})]})}),f.jsxs("div",{className:"nav-actions",children:[f.jsxs("a",{href:"#contact",className:"btn btn-nav-cta",onClick:v=>m(v,"contact"),children:[f.jsx("i",{className:"fa-solid fa-handshake"})," Collab / Hire"]}),f.jsx("button",{className:"mobile-toggle",id:"mobile-toggle","aria-label":"Toggle menu",onClick:()=>l(!o),children:f.jsx("i",{className:`fa-solid ${o?"fa-xmark":"fa-bars-staggered"}`})})]})]})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yd="170",U_=0,Hp=1,F_=2,Km=1,O_=2,ki=3,Mr=0,Ln=1,zi=2,yr=0,Os=1,id=2,Vp=3,Gp=4,k_=5,Xr=100,z_=101,B_=102,H_=103,V_=104,G_=200,j_=201,W_=202,X_=203,rd=204,sd=205,Y_=206,q_=207,$_=208,K_=209,Z_=210,J_=211,Q_=212,e0=213,t0=214,ad=0,od=1,ld=2,Bs=3,cd=4,ud=5,dd=6,hd=7,Zm=0,n0=1,i0=2,Sr=0,r0=1,s0=2,a0=3,o0=4,l0=5,c0=6,u0=7,Jm=300,Hs=301,Vs=302,fd=303,pd=304,Ll=306,md=1e3,qr=1001,gd=1002,hi=1003,d0=1004,el=1005,yi=1006,yu=1007,$r=1008,Gi=1009,Qm=1010,eg=1011,Ha=1012,qd=1013,Kr=1014,Bi=1015,Va=1016,$d=1017,Kd=1018,Gs=1020,tg=35902,ng=1021,ig=1022,di=1023,rg=1024,sg=1025,ks=1026,js=1027,ag=1028,Zd=1029,og=1030,Jd=1031,Qd=1033,wl=33776,Tl=33777,Al=33778,Cl=33779,vd=35840,_d=35841,xd=35842,yd=35843,Sd=36196,Md=37492,Ed=37496,wd=37808,Td=37809,Ad=37810,Cd=37811,Rd=37812,bd=37813,Nd=37814,Pd=37815,Ld=37816,Dd=37817,Id=37818,Ud=37819,Fd=37820,Od=37821,Rl=36492,kd=36494,zd=36495,lg=36283,Bd=36284,Hd=36285,Vd=36286,h0=3200,f0=3201,cg=0,p0=1,xr="",Kn="srgb",Xs="srgb-linear",Dl="linear",Pt="srgb",Ms=7680,jp=519,m0=512,g0=513,v0=514,ug=515,_0=516,x0=517,y0=518,S0=519,Wp=35044,Xp="300 es",Hi=2e3,Nl=2001;class Ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Su=Math.PI/180,Gd=180/Math.PI;function Ga(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]).toLowerCase()}function fn(s,e,t){return Math.max(e,Math.min(t,s))}function M0(s,e){return(s%e+e)%e}function Mu(s,e,t){return(1-t)*s+t*e}function Ra(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(fn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,r,o,l,u,d,p,m){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,m)}set(e,t,r,o,l,u,d,p,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=t,v[4]=l,v[5]=p,v[6]=r,v[7]=u,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],p=r[6],m=r[1],v=r[4],x=r[7],_=r[2],M=r[5],E=r[8],A=o[0],S=o[3],y=o[6],N=o[1],P=o[4],T=o[7],j=o[2],F=o[5],U=o[8];return l[0]=u*A+d*N+p*j,l[3]=u*S+d*P+p*F,l[6]=u*y+d*T+p*U,l[1]=m*A+v*N+x*j,l[4]=m*S+v*P+x*F,l[7]=m*y+v*T+x*U,l[2]=_*A+M*N+E*j,l[5]=_*S+M*P+E*F,l[8]=_*y+M*T+E*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return t*u*v-t*d*m-r*l*v+r*d*p+o*l*m-o*u*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],v=e[8],x=v*u-d*m,_=d*p-v*l,M=m*l-u*p,E=t*x+r*_+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=x*A,e[1]=(o*m-v*r)*A,e[2]=(d*r-o*u)*A,e[3]=_*A,e[4]=(v*t-o*p)*A,e[5]=(o*l-d*t)*A,e[6]=M*A,e[7]=(r*p-m*t)*A,e[8]=(u*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*u+m*d)+u+e,-o*m,o*p,-o*(-m*u+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Eu.makeScale(e,t)),this}rotate(e){return this.premultiply(Eu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Eu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Eu=new ut;function dg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Pl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function E0(){const s=Pl("canvas");return s.style.display="block",s}const Yp={};function Ua(s){s in Yp||(Yp[s]=!0,console.warn(s))}function w0(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function T0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function A0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const wt={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Pt&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Pt&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xr?Dl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const qp=[.64,.33,.3,.6,.15,.06],$p=[.2126,.7152,.0722],Kp=[.3127,.329],Zp=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jp=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);wt.define({[Xs]:{primaries:qp,whitePoint:Kp,transfer:Dl,toXYZ:Zp,fromXYZ:Jp,luminanceCoefficients:$p,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:qp,whitePoint:Kp,transfer:Pt,toXYZ:Zp,fromXYZ:Jp,luminanceCoefficients:$p,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}});let Es;class C0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Es===void 0&&(Es=Pl("canvas")),Es.width=e.width,Es.height=e.height;const r=Es.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Vi(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Vi(t[r]/255)*255):t[r]=Vi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let R0=0;class hg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Ga(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(wu(o[u].image)):l.push(wu(o[u]))}else l=wu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function wu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?C0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let b0=0;class Dn extends Ys{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,r=qr,o=qr,l=yi,u=$r,d=di,p=Gi,m=Dn.DEFAULT_ANISOTROPY,v=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Ga(),this.name="",this.source=new hg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case md:e.x=e.x-Math.floor(e.x);break;case qr:e.x=e.x<0?0:1;break;case gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case md:e.y=e.y-Math.floor(e.y);break;case qr:e.y=e.y<0?0:1;break;case gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Jm;Dn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,r=0,o=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,m=p[0],v=p[4],x=p[8],_=p[1],M=p[5],E=p[9],A=p[2],S=p[6],y=p[10];if(Math.abs(v-_)<.01&&Math.abs(x-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(v+_)<.1&&Math.abs(x+A)<.1&&Math.abs(E+S)<.1&&Math.abs(m+M+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(m+1)/2,T=(M+1)/2,j=(y+1)/2,F=(v+_)/4,U=(x+A)/4,B=(E+S)/4;return P>T&&P>j?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=F/r,l=U/r):T>j?T<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(T),r=F/o,l=B/o):j<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(j),r=U/l,o=B/l),this.set(r,o,l,t),this}let N=Math.sqrt((S-E)*(S-E)+(x-A)*(x-A)+(_-v)*(_-v));return Math.abs(N)<.001&&(N=1),this.x=(S-E)/N,this.y=(x-A)/N,this.z=(_-v)/N,this.w=Math.acos((m+M+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class N0 extends Ys{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Dn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends N0{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class fg extends Dn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class P0 extends Dn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ja{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let p=r[o+0],m=r[o+1],v=r[o+2],x=r[o+3];const _=l[u+0],M=l[u+1],E=l[u+2],A=l[u+3];if(d===0){e[t+0]=p,e[t+1]=m,e[t+2]=v,e[t+3]=x;return}if(d===1){e[t+0]=_,e[t+1]=M,e[t+2]=E,e[t+3]=A;return}if(x!==A||p!==_||m!==M||v!==E){let S=1-d;const y=p*_+m*M+v*E+x*A,N=y>=0?1:-1,P=1-y*y;if(P>Number.EPSILON){const j=Math.sqrt(P),F=Math.atan2(j,y*N);S=Math.sin(S*F)/j,d=Math.sin(d*F)/j}const T=d*N;if(p=p*S+_*T,m=m*S+M*T,v=v*S+E*T,x=x*S+A*T,S===1-d){const j=1/Math.sqrt(p*p+m*m+v*v+x*x);p*=j,m*=j,v*=j,x*=j}}e[t]=p,e[t+1]=m,e[t+2]=v,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],p=r[o+1],m=r[o+2],v=r[o+3],x=l[u],_=l[u+1],M=l[u+2],E=l[u+3];return e[t]=d*E+v*x+p*M-m*_,e[t+1]=p*E+v*_+m*x-d*M,e[t+2]=m*E+v*M+d*_-p*x,e[t+3]=v*E-d*x-p*_-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(o/2),x=d(l/2),_=p(r/2),M=p(o/2),E=p(l/2);switch(u){case"XYZ":this._x=_*v*x+m*M*E,this._y=m*M*x-_*v*E,this._z=m*v*E+_*M*x,this._w=m*v*x-_*M*E;break;case"YXZ":this._x=_*v*x+m*M*E,this._y=m*M*x-_*v*E,this._z=m*v*E-_*M*x,this._w=m*v*x+_*M*E;break;case"ZXY":this._x=_*v*x-m*M*E,this._y=m*M*x+_*v*E,this._z=m*v*E+_*M*x,this._w=m*v*x-_*M*E;break;case"ZYX":this._x=_*v*x-m*M*E,this._y=m*M*x+_*v*E,this._z=m*v*E-_*M*x,this._w=m*v*x+_*M*E;break;case"YZX":this._x=_*v*x+m*M*E,this._y=m*M*x+_*v*E,this._z=m*v*E-_*M*x,this._w=m*v*x-_*M*E;break;case"XZY":this._x=_*v*x-m*M*E,this._y=m*M*x-_*v*E,this._z=m*v*E+_*M*x,this._w=m*v*x+_*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],p=t[9],m=t[2],v=t[6],x=t[10],_=r+d+x;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(v-p)*M,this._y=(l-m)*M,this._z=(u-o)*M}else if(r>d&&r>x){const M=2*Math.sqrt(1+r-d-x);this._w=(v-p)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+m)/M}else if(d>x){const M=2*Math.sqrt(1+d-r-x);this._w=(l-m)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+x-r-d);this._w=(u-o)/M,this._x=(l+m)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,p=t._y,m=t._z,v=t._w;return this._x=r*v+u*d+o*m-l*p,this._y=o*v+u*p+l*d-r*m,this._z=l*v+u*m+r*p-o*d,this._w=u*v-r*d-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let d=u*e._w+r*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-t;return this._w=M*u+t*this._w,this._x=M*r+t*this._x,this._y=M*o+t*this._y,this._z=M*l+t*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),x=Math.sin((1-t)*v)/m,_=Math.sin(t*v)/m;return this._w=u*x+this._w*_,this._x=r*x+this._x*_,this._y=o*x+this._y*_,this._z=l*x+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,r=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*o-d*r),v=2*(d*t-l*o),x=2*(l*r-u*t);return this.x=t+p*m+u*x-d*v,this.y=r+p*v+d*m-l*x,this.z=o+p*x+l*v-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,p=t.z;return this.x=o*p-l*d,this.y=l*u-r*p,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Tu.copy(this).projectOnVector(e),this.sub(Tu)}reflect(e){return this.sub(Tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(fn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tu=new V,Qp=new ja;class Wa{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,oi):oi.fromBufferAttribute(l,u),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tl.copy(r.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),nl.subVectors(this.max,ba),ws.subVectors(e.a,ba),Ts.subVectors(e.b,ba),As.subVectors(e.c,ba),fr.subVectors(Ts,ws),pr.subVectors(As,Ts),kr.subVectors(ws,As);let t=[0,-fr.z,fr.y,0,-pr.z,pr.y,0,-kr.z,kr.y,fr.z,0,-fr.x,pr.z,0,-pr.x,kr.z,0,-kr.x,-fr.y,fr.x,0,-pr.y,pr.x,0,-kr.y,kr.x,0];return!Au(t,ws,Ts,As,nl)||(t=[1,0,0,0,1,0,0,0,1],!Au(t,ws,Ts,As,nl))?!1:(il.crossVectors(fr,pr),t=[il.x,il.y,il.z],Au(t,ws,Ts,As,nl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new V,new V,new V,new V,new V,new V,new V,new V],oi=new V,tl=new Wa,ws=new V,Ts=new V,As=new V,fr=new V,pr=new V,kr=new V,ba=new V,nl=new V,il=new V,zr=new V;function Au(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){zr.fromArray(s,l);const d=o.x*Math.abs(zr.x)+o.y*Math.abs(zr.y)+o.z*Math.abs(zr.z),p=e.dot(zr),m=t.dot(zr),v=r.dot(zr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const L0=new Wa,Na=new V,Cu=new V;class Il{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):L0.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);const t=Na.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Na,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add(Cu)),this.expandByPoint(Na.copy(e.center).sub(Cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new V,Ru=new V,rl=new V,mr=new V,bu=new V,sl=new V,Nu=new V;class pg{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Ru.copy(e).add(t).multiplyScalar(.5),rl.copy(t).sub(e).normalize(),mr.copy(this.origin).sub(Ru);const l=e.distanceTo(t)*.5,u=-this.direction.dot(rl),d=mr.dot(this.direction),p=-mr.dot(rl),m=mr.lengthSq(),v=Math.abs(1-u*u);let x,_,M,E;if(v>0)if(x=u*p-d,_=u*d-p,E=l*v,x>=0)if(_>=-E)if(_<=E){const A=1/v;x*=A,_*=A,M=x*(x+u*_+2*d)+_*(u*x+_+2*p)+m}else _=l,x=Math.max(0,-(u*_+d)),M=-x*x+_*(_+2*p)+m;else _=-l,x=Math.max(0,-(u*_+d)),M=-x*x+_*(_+2*p)+m;else _<=-E?(x=Math.max(0,-(-u*l+d)),_=x>0?-l:Math.min(Math.max(-l,-p),l),M=-x*x+_*(_+2*p)+m):_<=E?(x=0,_=Math.min(Math.max(-l,-p),l),M=_*(_+2*p)+m):(x=Math.max(0,-(u*l+d)),_=x>0?l:Math.min(Math.max(-l,-p),l),M=-x*x+_*(_+2*p)+m);else _=u>0?-l:l,x=Math.max(0,-(u*_+d)),M=-x*x+_*(_+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Ru).addScaledVector(rl,_),M}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);const r=Ii.dot(this.direction),o=Ii.dot(Ii)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,p;const m=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,_=this.origin;return m>=0?(r=(e.min.x-_.x)*m,o=(e.max.x-_.x)*m):(r=(e.max.x-_.x)*m,o=(e.min.x-_.x)*m),v>=0?(l=(e.min.y-_.y)*v,u=(e.max.y-_.y)*v):(l=(e.max.y-_.y)*v,u=(e.min.y-_.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),x>=0?(d=(e.min.z-_.z)*x,p=(e.max.z-_.z)*x):(d=(e.max.z-_.z)*x,p=(e.min.z-_.z)*x),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,r,o,l){bu.subVectors(t,e),sl.subVectors(r,e),Nu.crossVectors(bu,sl);let u=this.direction.dot(Nu),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;mr.subVectors(this.origin,e);const p=d*this.direction.dot(sl.crossVectors(mr,sl));if(p<0)return null;const m=d*this.direction.dot(bu.cross(mr));if(m<0||p+m>u)return null;const v=-d*mr.dot(Nu);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,t,r,o,l,u,d,p,m,v,x,_,M,E,A,S){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,m,v,x,_,M,E,A,S)}set(e,t,r,o,l,u,d,p,m,v,x,_,M,E,A,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=d,y[13]=p,y[2]=m,y[6]=v,y[10]=x,y[14]=_,y[3]=M,y[7]=E,y[11]=A,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Cs.setFromMatrixColumn(e,0).length(),l=1/Cs.setFromMatrixColumn(e,1).length(),u=1/Cs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),v=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const _=u*v,M=u*x,E=d*v,A=d*x;t[0]=p*v,t[4]=-p*x,t[8]=m,t[1]=M+E*m,t[5]=_-A*m,t[9]=-d*p,t[2]=A-_*m,t[6]=E+M*m,t[10]=u*p}else if(e.order==="YXZ"){const _=p*v,M=p*x,E=m*v,A=m*x;t[0]=_+A*d,t[4]=E*d-M,t[8]=u*m,t[1]=u*x,t[5]=u*v,t[9]=-d,t[2]=M*d-E,t[6]=A+_*d,t[10]=u*p}else if(e.order==="ZXY"){const _=p*v,M=p*x,E=m*v,A=m*x;t[0]=_-A*d,t[4]=-u*x,t[8]=E+M*d,t[1]=M+E*d,t[5]=u*v,t[9]=A-_*d,t[2]=-u*m,t[6]=d,t[10]=u*p}else if(e.order==="ZYX"){const _=u*v,M=u*x,E=d*v,A=d*x;t[0]=p*v,t[4]=E*m-M,t[8]=_*m+A,t[1]=p*x,t[5]=A*m+_,t[9]=M*m-E,t[2]=-m,t[6]=d*p,t[10]=u*p}else if(e.order==="YZX"){const _=u*p,M=u*m,E=d*p,A=d*m;t[0]=p*v,t[4]=A-_*x,t[8]=E*x+M,t[1]=x,t[5]=u*v,t[9]=-d*v,t[2]=-m*v,t[6]=M*x+E,t[10]=_-A*x}else if(e.order==="XZY"){const _=u*p,M=u*m,E=d*p,A=d*m;t[0]=p*v,t[4]=-x,t[8]=m*v,t[1]=_*x+A,t[5]=u*v,t[9]=M*x-E,t[2]=E*x-M,t[6]=d*v,t[10]=A*x+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(D0,e,I0)}lookAt(e,t,r){const o=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),gr.crossVectors(r,kn),gr.lengthSq()===0&&(Math.abs(r.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),gr.crossVectors(r,kn)),gr.normalize(),al.crossVectors(kn,gr),o[0]=gr.x,o[4]=al.x,o[8]=kn.x,o[1]=gr.y,o[5]=al.y,o[9]=kn.y,o[2]=gr.z,o[6]=al.z,o[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],p=r[8],m=r[12],v=r[1],x=r[5],_=r[9],M=r[13],E=r[2],A=r[6],S=r[10],y=r[14],N=r[3],P=r[7],T=r[11],j=r[15],F=o[0],U=o[4],B=o[8],L=o[12],R=o[1],z=o[5],ie=o[9],Q=o[13],de=o[2],he=o[6],ce=o[10],ue=o[14],H=o[3],le=o[7],se=o[11],O=o[15];return l[0]=u*F+d*R+p*de+m*H,l[4]=u*U+d*z+p*he+m*le,l[8]=u*B+d*ie+p*ce+m*se,l[12]=u*L+d*Q+p*ue+m*O,l[1]=v*F+x*R+_*de+M*H,l[5]=v*U+x*z+_*he+M*le,l[9]=v*B+x*ie+_*ce+M*se,l[13]=v*L+x*Q+_*ue+M*O,l[2]=E*F+A*R+S*de+y*H,l[6]=E*U+A*z+S*he+y*le,l[10]=E*B+A*ie+S*ce+y*se,l[14]=E*L+A*Q+S*ue+y*O,l[3]=N*F+P*R+T*de+j*H,l[7]=N*U+P*z+T*he+j*le,l[11]=N*B+P*ie+T*ce+j*se,l[15]=N*L+P*Q+T*ue+j*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],p=e[9],m=e[13],v=e[2],x=e[6],_=e[10],M=e[14],E=e[3],A=e[7],S=e[11],y=e[15];return E*(+l*p*x-o*m*x-l*d*_+r*m*_+o*d*M-r*p*M)+A*(+t*p*M-t*m*_+l*u*_-o*u*M+o*m*v-l*p*v)+S*(+t*m*x-t*d*M-l*u*x+r*u*M+l*d*v-r*m*v)+y*(-o*d*v-t*p*x+t*d*_+o*u*x-r*u*_+r*p*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],v=e[8],x=e[9],_=e[10],M=e[11],E=e[12],A=e[13],S=e[14],y=e[15],N=x*S*m-A*_*m+A*p*M-d*S*M-x*p*y+d*_*y,P=E*_*m-v*S*m-E*p*M+u*S*M+v*p*y-u*_*y,T=v*A*m-E*x*m+E*d*M-u*A*M-v*d*y+u*x*y,j=E*x*p-v*A*p-E*d*_+u*A*_+v*d*S-u*x*S,F=t*N+r*P+o*T+l*j;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return e[0]=N*U,e[1]=(A*_*l-x*S*l-A*o*M+r*S*M+x*o*y-r*_*y)*U,e[2]=(d*S*l-A*p*l+A*o*m-r*S*m-d*o*y+r*p*y)*U,e[3]=(x*p*l-d*_*l-x*o*m+r*_*m+d*o*M-r*p*M)*U,e[4]=P*U,e[5]=(v*S*l-E*_*l+E*o*M-t*S*M-v*o*y+t*_*y)*U,e[6]=(E*p*l-u*S*l-E*o*m+t*S*m+u*o*y-t*p*y)*U,e[7]=(u*_*l-v*p*l+v*o*m-t*_*m-u*o*M+t*p*M)*U,e[8]=T*U,e[9]=(E*x*l-v*A*l-E*r*M+t*A*M+v*r*y-t*x*y)*U,e[10]=(u*A*l-E*d*l+E*r*m-t*A*m-u*r*y+t*d*y)*U,e[11]=(v*d*l-u*x*l-v*r*m+t*x*m+u*r*M-t*d*M)*U,e[12]=j*U,e[13]=(v*A*o-E*x*o+E*r*_-t*A*_-v*r*S+t*x*S)*U,e[14]=(E*d*o-u*A*o-E*r*p+t*A*p+u*r*S-t*d*S)*U,e[15]=(u*x*o-v*d*o+v*r*p-t*x*p-u*r*_+t*d*_)*U,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,p=e.z,m=l*u,v=l*d;return this.set(m*u+r,m*d-o*p,m*p+o*d,0,m*d+o*p,v*d+r,v*p-o*u,0,m*p-o*d,v*p+o*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,p=t._w,m=l+l,v=u+u,x=d+d,_=l*m,M=l*v,E=l*x,A=u*v,S=u*x,y=d*x,N=p*m,P=p*v,T=p*x,j=r.x,F=r.y,U=r.z;return o[0]=(1-(A+y))*j,o[1]=(M+T)*j,o[2]=(E-P)*j,o[3]=0,o[4]=(M-T)*F,o[5]=(1-(_+y))*F,o[6]=(S+N)*F,o[7]=0,o[8]=(E+P)*U,o[9]=(S-N)*U,o[10]=(1-(_+A))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=Cs.set(o[0],o[1],o[2]).length();const u=Cs.set(o[4],o[5],o[6]).length(),d=Cs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],li.copy(this);const m=1/l,v=1/u,x=1/d;return li.elements[0]*=m,li.elements[1]*=m,li.elements[2]*=m,li.elements[4]*=v,li.elements[5]*=v,li.elements[6]*=v,li.elements[8]*=x,li.elements[9]*=x,li.elements[10]*=x,t.setFromRotationMatrix(li),r.x=l,r.y=u,r.z=d,this}makePerspective(e,t,r,o,l,u,d=Hi){const p=this.elements,m=2*l/(t-e),v=2*l/(r-o),x=(t+e)/(t-e),_=(r+o)/(r-o);let M,E;if(d===Hi)M=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(d===Nl)M=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=Hi){const p=this.elements,m=1/(t-e),v=1/(r-o),x=1/(u-l),_=(t+e)*m,M=(r+o)*v;let E,A;if(d===Hi)E=(u+l)*x,A=-2*x;else if(d===Nl)E=l*x,A=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=A,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Cs=new V,li=new kt,D0=new V(0,0,0),I0=new V(1,1,1),gr=new V,al=new V,kn=new V,em=new kt,tm=new ja;class Si{constructor(e=0,t=0,r=0,o=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],p=o[1],m=o[5],v=o[9],x=o[2],_=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(fn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(fn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-fn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(fn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-fn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(em,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tm.setFromEuler(this),this.setFromQuaternion(tm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class mg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let U0=0;const nm=new V,Rs=new ja,Ui=new kt,ol=new V,Pa=new V,F0=new V,O0=new ja,im=new V(1,0,0),rm=new V(0,1,0),sm=new V(0,0,1),am={type:"added"},k0={type:"removed"},bs={type:"childadded",child:null},Pu={type:"childremoved",child:null};class Sn extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new V,t=new Si,r=new ja,o=new V(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new kt},normalMatrix:{value:new ut}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(im,e)}rotateY(e){return this.rotateOnAxis(rm,e)}rotateZ(e){return this.rotateOnAxis(sm,e)}translateOnAxis(e,t){return nm.copy(e).applyQuaternion(this.quaternion),this.position.add(nm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(im,e)}translateY(e){return this.translateOnAxis(rm,e)}translateZ(e){return this.translateOnAxis(sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ol.copy(e):ol.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Pa,ol,this.up):Ui.lookAt(ol,Pa,this.up),this.quaternion.setFromRotationMatrix(Ui),o&&(Ui.extractRotation(o.matrixWorld),Rs.setFromRotationMatrix(Ui),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(am),bs.child=e,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(k0),Pu.child=e,this.dispatchEvent(Pu),Pu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(am),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,e,F0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,O0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const x=p[m];l(e.shapes,x)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(l(e.animations,p))}}if(t){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),v=u(e.images),x=u(e.shapes),_=u(e.skeletons),M=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Sn.DEFAULT_UP=new V(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new V,Fi=new V,Lu=new V,Oi=new V,Ns=new V,Ps=new V,om=new V,Du=new V,Iu=new V,Uu=new V,Fu=new Lt,Ou=new Lt,ku=new Lt;class ui{constructor(e=new V,t=new V,r=new V){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),ci.subVectors(e,t),o.cross(ci);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){ci.subVectors(o,t),Fi.subVectors(r,t),Lu.subVectors(e,t);const u=ci.dot(ci),d=ci.dot(Fi),p=ci.dot(Lu),m=Fi.dot(Fi),v=Fi.dot(Lu),x=u*m-d*d;if(x===0)return l.set(0,0,0),null;const _=1/x,M=(m*p-d*v)*_,E=(u*v-d*p)*_;return l.set(1-M-E,E,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,r,o,l,u,d,p){return this.getBarycoord(e,t,r,o,Oi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Oi.x),p.addScaledVector(u,Oi.y),p.addScaledVector(d,Oi.z),p)}static getInterpolatedAttribute(e,t,r,o,l,u){return Fu.setScalar(0),Ou.setScalar(0),ku.setScalar(0),Fu.fromBufferAttribute(e,t),Ou.fromBufferAttribute(e,r),ku.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Fu,l.x),u.addScaledVector(Ou,l.y),u.addScaledVector(ku,l.z),u}static isFrontFacing(e,t,r,o){return ci.subVectors(r,t),Fi.subVectors(e,t),ci.cross(Fi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ci.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return ui.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;Ns.subVectors(o,r),Ps.subVectors(l,r),Du.subVectors(e,r);const p=Ns.dot(Du),m=Ps.dot(Du);if(p<=0&&m<=0)return t.copy(r);Iu.subVectors(e,o);const v=Ns.dot(Iu),x=Ps.dot(Iu);if(v>=0&&x<=v)return t.copy(o);const _=p*x-v*m;if(_<=0&&p>=0&&v<=0)return u=p/(p-v),t.copy(r).addScaledVector(Ns,u);Uu.subVectors(e,l);const M=Ns.dot(Uu),E=Ps.dot(Uu);if(E>=0&&M<=E)return t.copy(l);const A=M*m-p*E;if(A<=0&&m>=0&&E<=0)return d=m/(m-E),t.copy(r).addScaledVector(Ps,d);const S=v*E-M*x;if(S<=0&&x-v>=0&&M-E>=0)return om.subVectors(l,o),d=(x-v)/(x-v+(M-E)),t.copy(o).addScaledVector(om,d);const y=1/(S+A+_);return u=A*y,d=_*y,t.copy(r).addScaledVector(Ns,u).addScaledVector(Ps,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},ll={h:0,s:0,l:0};function zu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class St{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=wt.workingColorSpace){return this.r=e,this.g=t,this.b=r,wt.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=wt.workingColorSpace){if(e=M0(e,1),t=fn(t,0,1),r=fn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=zu(u,l,e+1/3),this.g=zu(u,l,e),this.b=zu(u,l,e-1/3)}return wt.toWorkingColorSpace(this,o),this}setStyle(e,t=Kn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kn){const r=gg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return wt.fromWorkingColorSpace(hn.copy(this),e),Math.round(fn(hn.r*255,0,255))*65536+Math.round(fn(hn.g*255,0,255))*256+Math.round(fn(hn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(hn.copy(this),t);const r=hn.r,o=hn.g,l=hn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let p,m;const v=(d+u)/2;if(d===u)p=0,m=0;else{const x=u-d;switch(m=v<=.5?x/(u+d):x/(2-u-d),u){case r:p=(o-l)/x+(o<l?6:0);break;case o:p=(l-r)/x+2;break;case l:p=(r-o)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Kn){wt.fromWorkingColorSpace(hn.copy(this),e);const t=hn.r,r=hn.g,o=hn.b;return e!==Kn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+t,vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(vr),e.getHSL(ll);const r=Mu(vr.h,ll.h,t),o=Mu(vr.s,ll.s,t),l=Mu(vr.l,ll.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new St;St.NAMES=gg;let z0=0;class qs extends Ys{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Ga(),this.name="",this.blending=Os,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=sd,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(r.blending=this.blending),this.side!==Mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==rd&&(r.blendSrc=this.blendSrc),this.blendDst!==sd&&(r.blendDst=this.blendDst),this.blendEquation!==Xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const p=l[d];delete p.metadata,u.push(p)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vg extends qs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Zm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new V,cl=new et;class Zn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Wp,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)cl.fromBufferAttribute(this,t),cl.applyMatrix3(e),this.setXY(t,cl.x,cl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ra(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Nn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ra(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ra(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ra(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ra(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),r=Nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),r=Nn(r,this.array),o=Nn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),r=Nn(r,this.array),o=Nn(o,this.array),l=Nn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wp&&(e.usage=this.usage),e}}class _g extends Zn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class xg extends Zn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class pn extends Zn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let B0=0;const $n=new kt,Bu=new Sn,Ls=new V,zn=new Wa,La=new Wa,tn=new V;class Jn extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Ga(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dg(e)?xg:_g)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ut().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,r){return $n.makeTranslation(e,t,r),this.applyMatrix4($n),this}scale(e,t,r){return $n.makeScale(e,t,r),this.applyMatrix4($n),this}lookAt(e){return Bu.lookAt(e),Bu.updateMatrix(),this.applyMatrix4(Bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new pn(r,3))}else{for(let r=0,o=t.count;r<o;r++){const l=e[r];t.setXYZ(r,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];zn.setFromBufferAttribute(l),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Il);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];La.setFromBufferAttribute(d),this.morphTargetsRelative?(tn.addVectors(zn.min,La.min),zn.expandByPoint(tn),tn.addVectors(zn.max,La.max),zn.expandByPoint(tn)):(zn.expandByPoint(La.min),zn.expandByPoint(La.max))}zn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)tn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(tn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)tn.fromBufferAttribute(d,m),p&&(Ls.fromBufferAttribute(e,m),tn.add(Ls)),o=Math.max(o,r.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let B=0;B<r.count;B++)d[B]=new V,p[B]=new V;const m=new V,v=new V,x=new V,_=new et,M=new et,E=new et,A=new V,S=new V;function y(B,L,R){m.fromBufferAttribute(r,B),v.fromBufferAttribute(r,L),x.fromBufferAttribute(r,R),_.fromBufferAttribute(l,B),M.fromBufferAttribute(l,L),E.fromBufferAttribute(l,R),v.sub(m),x.sub(m),M.sub(_),E.sub(_);const z=1/(M.x*E.y-E.x*M.y);isFinite(z)&&(A.copy(v).multiplyScalar(E.y).addScaledVector(x,-M.y).multiplyScalar(z),S.copy(x).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(z),d[B].add(A),d[L].add(A),d[R].add(A),p[B].add(S),p[L].add(S),p[R].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let B=0,L=N.length;B<L;++B){const R=N[B],z=R.start,ie=R.count;for(let Q=z,de=z+ie;Q<de;Q+=3)y(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const P=new V,T=new V,j=new V,F=new V;function U(B){j.fromBufferAttribute(o,B),F.copy(j);const L=d[B];P.copy(L),P.sub(j.multiplyScalar(j.dot(L))).normalize(),T.crossVectors(F,L);const z=T.dot(p[B])<0?-1:1;u.setXYZW(B,P.x,P.y,P.z,z)}for(let B=0,L=N.length;B<L;++B){const R=N[B],z=R.start,ie=R.count;for(let Q=z,de=z+ie;Q<de;Q+=3)U(e.getX(Q+0)),U(e.getX(Q+1)),U(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Zn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const o=new V,l=new V,u=new V,d=new V,p=new V,m=new V,v=new V,x=new V;if(e)for(let _=0,M=e.count;_<M;_+=3){const E=e.getX(_+0),A=e.getX(_+1),S=e.getX(_+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,A),u.fromBufferAttribute(t,S),v.subVectors(u,l),x.subVectors(o,l),v.cross(x),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,S),d.add(v),p.add(v),m.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let _=0,M=t.count;_<M;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),v.subVectors(u,l),x.subVectors(o,l),v.cross(x),r.setXYZ(_+0,v.x,v.y,v.z),r.setXYZ(_+1,v.x,v.y,v.z),r.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,x=d.normalized,_=new m.constructor(p.length*v);let M=0,E=0;for(let A=0,S=p.length;A<S;A++){d.isInterleavedBufferAttribute?M=p[A]*d.data.stride+d.offset:M=p[A]*v;for(let y=0;y<v;y++)_[E++]=m[M++]}return new Zn(_,v,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jn,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const p=[],m=l[d];for(let v=0,x=m.length;v<x;v++){const _=m[v],M=e(_,r);p.push(M)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let x=0,_=m.length;x<_;x++){const M=m[x];v.push(M.toJSON(e.data))}v.length>0&&(o[p]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(t))}const l=e.morphAttributes;for(const m in l){const v=[],x=l[m];for(let _=0,M=x.length;_<M;_++)v.push(x[_].clone(t));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,v=u.length;m<v;m++){const x=u[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lm=new kt,Br=new pg,ul=new Il,cm=new V,dl=new V,hl=new V,fl=new V,Hu=new V,pl=new V,um=new V,ml=new V;class Pn extends Sn{constructor(e=new Jn,t=new vg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){pl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const v=d[p],x=l[p];v!==0&&(Hu.fromBufferAttribute(x,e),u?pl.addScaledVector(Hu,v):pl.addScaledVector(Hu.sub(t),v))}t.add(pl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ul.copy(r.boundingSphere),ul.applyMatrix4(l),Br.copy(e.ray).recast(e.near),!(ul.containsPoint(Br.origin)===!1&&(Br.intersectSphere(ul,cm)===null||Br.origin.distanceToSquared(cm)>(e.far-e.near)**2))&&(lm.copy(l).invert(),Br.copy(e.ray).applyMatrix4(lm),!(r.boundingBox!==null&&Br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Br)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,p=l.attributes.position,m=l.attributes.uv,v=l.attributes.uv1,x=l.attributes.normal,_=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,A=_.length;E<A;E++){const S=_[E],y=u[S.materialIndex],N=Math.max(S.start,M.start),P=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let T=N,j=P;T<j;T+=3){const F=d.getX(T),U=d.getX(T+1),B=d.getX(T+2);o=gl(this,y,e,r,m,v,x,F,U,B),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let S=E,y=A;S<y;S+=3){const N=d.getX(S),P=d.getX(S+1),T=d.getX(S+2);o=gl(this,u,e,r,m,v,x,N,P,T),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,A=_.length;E<A;E++){const S=_[E],y=u[S.materialIndex],N=Math.max(S.start,M.start),P=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let T=N,j=P;T<j;T+=3){const F=T,U=T+1,B=T+2;o=gl(this,y,e,r,m,v,x,F,U,B),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),A=Math.min(p.count,M.start+M.count);for(let S=E,y=A;S<y;S+=3){const N=S,P=S+1,T=S+2;o=gl(this,u,e,r,m,v,x,N,P,T),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function H0(s,e,t,r,o,l,u,d){let p;if(e.side===Ln?p=r.intersectTriangle(u,l,o,!0,d):p=r.intersectTriangle(o,l,u,e.side===Mr,d),p===null)return null;ml.copy(d),ml.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(ml);return m<t.near||m>t.far?null:{distance:m,point:ml.clone(),object:s}}function gl(s,e,t,r,o,l,u,d,p,m){s.getVertexPosition(d,dl),s.getVertexPosition(p,hl),s.getVertexPosition(m,fl);const v=H0(s,e,t,r,dl,hl,fl,um);if(v){const x=new V;ui.getBarycoord(um,dl,hl,fl,x),o&&(v.uv=ui.getInterpolatedAttribute(o,d,p,m,x,new et)),l&&(v.uv1=ui.getInterpolatedAttribute(l,d,p,m,x,new et)),u&&(v.normal=ui.getInterpolatedAttribute(u,d,p,m,x,new V),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const _={a:d,b:p,c:m,normal:new V,materialIndex:0};ui.getNormal(dl,hl,fl,_.normal),v.face=_,v.barycoord=x}return v}class Xa extends Jn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],m=[],v=[],x=[];let _=0,M=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,o,u,2),E("x","z","y",1,-1,e,r,-t,o,u,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new pn(m,3)),this.setAttribute("normal",new pn(v,3)),this.setAttribute("uv",new pn(x,2));function E(A,S,y,N,P,T,j,F,U,B,L){const R=T/U,z=j/B,ie=T/2,Q=j/2,de=F/2,he=U+1,ce=B+1;let ue=0,H=0;const le=new V;for(let se=0;se<ce;se++){const O=se*z-Q;for(let re=0;re<he;re++){const Le=re*R-ie;le[A]=Le*N,le[S]=O*P,le[y]=de,m.push(le.x,le.y,le.z),le[A]=0,le[S]=0,le[y]=F>0?1:-1,v.push(le.x,le.y,le.z),x.push(re/U),x.push(1-se/B),ue+=1}}for(let se=0;se<B;se++)for(let O=0;O<U;O++){const re=_+O+he*se,Le=_+O+he*(se+1),Z=_+(O+1)+he*(se+1),oe=_+(O+1)+he*se;p.push(re,Le,oe),p.push(Le,Z,oe),H+=6}d.addGroup(M,H,L),M+=H,_+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function yn(s){const e={};for(let t=0;t<s.length;t++){const r=Ws(s[t]);for(const o in r)e[o]=r[o]}return e}function V0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function yg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const G0={clone:Ws,merge:yn};var j0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends qs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j0,this.fragmentShader=W0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=V0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Sg extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new V,dm=new et,hm=new et;class Bn extends Sg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Su*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gd*2*Math.atan(Math.tan(Su*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,t){return this.getViewBounds(e,dm,hm),t.subVectors(hm,dm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Su*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/p,t-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ds=-90,Is=1;class X0 extends Sn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Bn(Ds,Is,e,t);o.layers=this.layers,this.add(o);const l=new Bn(Ds,Is,e,t);l.layers=this.layers,this.add(l);const u=new Bn(Ds,Is,e,t);u.layers=this.layers,this.add(u);const d=new Bn(Ds,Is,e,t);d.layers=this.layers,this.add(d);const p=new Bn(Ds,Is,e,t);p.layers=this.layers,this.add(p);const m=new Bn(Ds,Is,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,p]=t;for(const m of t)this.remove(m);if(e===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Nl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,p,m,v]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,d),e.setRenderTarget(r,3,o),e.render(t,p),e.setRenderTarget(r,4,o),e.render(t,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),e.render(t,v),e.setRenderTarget(x,_,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Mg extends Dn{constructor(e,t,r,o,l,u,d,p,m,v){e=e!==void 0?e:[],t=t!==void 0?t:Hs,super(e,t,r,o,l,u,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Y0 extends Zr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Mg(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Xa(5,5,5),l=new Er({name:"CubemapFromEquirect",uniforms:Ws(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ln,blending:yr});l.uniforms.tEquirect.value=t;const u=new Pn(o,l),d=t.minFilter;return t.minFilter===$r&&(t.minFilter=yi),new X0(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const Vu=new V,q0=new V,$0=new ut;class jr{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Vu.subVectors(r,t).cross(q0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Vu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||$0.getNormalMatrix(e),o=this.coplanarPoint(Vu).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Il,vl=new V;class eh{constructor(e=new jr,t=new jr,r=new jr,o=new jr,l=new jr,u=new jr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Hi){const r=this.planes,o=e.elements,l=o[0],u=o[1],d=o[2],p=o[3],m=o[4],v=o[5],x=o[6],_=o[7],M=o[8],E=o[9],A=o[10],S=o[11],y=o[12],N=o[13],P=o[14],T=o[15];if(r[0].setComponents(p-l,_-m,S-M,T-y).normalize(),r[1].setComponents(p+l,_+m,S+M,T+y).normalize(),r[2].setComponents(p+u,_+v,S+E,T+N).normalize(),r[3].setComponents(p-u,_-v,S-E,T-N).normalize(),r[4].setComponents(p-d,_-x,S-A,T-P).normalize(),t===Hi)r[5].setComponents(p+d,_+x,S+A,T+P).normalize();else if(t===Nl)r[5].setComponents(d,x,A,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(vl.x=o.normal.x>0?e.max.x:e.min.x,vl.y=o.normal.y>0?e.max.y:e.min.y,vl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Eg(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function K0(s){const e=new WeakMap;function t(d,p){const m=d.array,v=d.usage,x=m.byteLength,_=s.createBuffer();s.bindBuffer(p,_),s.bufferData(p,m,v),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,p,m){const v=p.array,x=p.updateRanges;if(s.bindBuffer(m,d),x.length===0)s.bufferSubData(m,0,v);else{x.sort((M,E)=>M.start-E.start);let _=0;for(let M=1;M<x.length;M++){const E=x[_],A=x[M];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++_,x[_]=A)}x.length=_+1;for(let M=0,E=x.length;M<E;M++){const A=x[M];s.bufferSubData(m,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:l,update:u}}class Ul extends Jn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),p=Math.floor(o),m=d+1,v=p+1,x=e/d,_=t/p,M=[],E=[],A=[],S=[];for(let y=0;y<v;y++){const N=y*_-u;for(let P=0;P<m;P++){const T=P*x-l;E.push(T,-N,0),A.push(0,0,1),S.push(P/d),S.push(1-y/p)}}for(let y=0;y<p;y++)for(let N=0;N<d;N++){const P=N+m*y,T=N+m*(y+1),j=N+1+m*(y+1),F=N+1+m*y;M.push(P,T,F),M.push(T,j,F)}this.setIndex(M),this.setAttribute("position",new pn(E,3)),this.setAttribute("normal",new pn(A,3)),this.setAttribute("uv",new pn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.width,e.height,e.widthSegments,e.heightSegments)}}var Z0=`#ifdef USE_ALPHAHASH
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
#endif`,ex=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ix=`#ifdef USE_AOMAP
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
#endif`,rx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sx=`#ifdef USE_BATCHING
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
#endif`,ax=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ox=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ux=`#ifdef USE_IRIDESCENCE
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
#endif`,dx=`#ifdef USE_BUMPMAP
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
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yx=`#define PI 3.141592653589793
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
} // validated`,Sx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mx=`vec3 transformedNormal = objectNormal;
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
#endif`,Ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bx=`#ifdef USE_ENVMAP
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
#endif`,Nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Px=`#ifdef USE_ENVMAP
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
#endif`,Lx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
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
#endif`,Ix=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ux=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ox=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kx=`#ifdef USE_GRADIENTMAP
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
}`,zx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vx=`uniform bool receiveShadow;
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
#endif`,Gx=`#ifdef USE_ENVMAP
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
#endif`,jx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qx=`PhysicalMaterial material;
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
#endif`,$x=`struct PhysicalMaterial {
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
}`,Kx=`
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
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qx=`#if defined( USE_LOGDEPTHBUF )
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
#endif`,_y=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xy=`#ifdef USE_NORMALMAP
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
gl_Position = projectionMatrix * mvPosition;`,Ry=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,by=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ny=`float roughnessFactor = roughness;
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
}`,Fy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Oy=`#ifdef USE_SKINNING
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
#endif`,ky=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zy=`#ifdef USE_SKINNING
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
#endif`,By=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jy=`#ifdef USE_TRANSMISSION
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
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
}`,_S=`#define PHONG
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
}`,xS=`#define PHONG
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
}`,RS=`uniform float rotation;
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
}`,bS=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Z0,alphahash_pars_fragment:J0,alphamap_fragment:Q0,alphamap_pars_fragment:ex,alphatest_fragment:tx,alphatest_pars_fragment:nx,aomap_fragment:ix,aomap_pars_fragment:rx,batching_pars_vertex:sx,batching_vertex:ax,begin_vertex:ox,beginnormal_vertex:lx,bsdfs:cx,iridescence_fragment:ux,bumpmap_pars_fragment:dx,clipping_planes_fragment:hx,clipping_planes_pars_fragment:fx,clipping_planes_pars_vertex:px,clipping_planes_vertex:mx,color_fragment:gx,color_pars_fragment:vx,color_pars_vertex:_x,color_vertex:xx,common:yx,cube_uv_reflection_fragment:Sx,defaultnormal_vertex:Mx,displacementmap_pars_vertex:Ex,displacementmap_vertex:wx,emissivemap_fragment:Tx,emissivemap_pars_fragment:Ax,colorspace_fragment:Cx,colorspace_pars_fragment:Rx,envmap_fragment:bx,envmap_common_pars_fragment:Nx,envmap_pars_fragment:Px,envmap_pars_vertex:Lx,envmap_physical_pars_fragment:Gx,envmap_vertex:Dx,fog_vertex:Ix,fog_pars_vertex:Ux,fog_fragment:Fx,fog_pars_fragment:Ox,gradientmap_pars_fragment:kx,lightmap_pars_fragment:zx,lights_lambert_fragment:Bx,lights_lambert_pars_fragment:Hx,lights_pars_begin:Vx,lights_toon_fragment:jx,lights_toon_pars_fragment:Wx,lights_phong_fragment:Xx,lights_phong_pars_fragment:Yx,lights_physical_fragment:qx,lights_physical_pars_fragment:$x,lights_fragment_begin:Kx,lights_fragment_maps:Zx,lights_fragment_end:Jx,logdepthbuf_fragment:Qx,logdepthbuf_pars_fragment:ey,logdepthbuf_pars_vertex:ty,logdepthbuf_vertex:ny,map_fragment:iy,map_pars_fragment:ry,map_particle_fragment:sy,map_particle_pars_fragment:ay,metalnessmap_fragment:oy,metalnessmap_pars_fragment:ly,morphinstance_vertex:cy,morphcolor_vertex:uy,morphnormal_vertex:dy,morphtarget_pars_vertex:hy,morphtarget_vertex:fy,normal_fragment_begin:py,normal_fragment_maps:my,normal_pars_fragment:gy,normal_pars_vertex:vy,normal_vertex:_y,normalmap_pars_fragment:xy,clearcoat_normal_fragment_begin:yy,clearcoat_normal_fragment_maps:Sy,clearcoat_pars_fragment:My,iridescence_pars_fragment:Ey,opaque_fragment:wy,packing:Ty,premultiplied_alpha_fragment:Ay,project_vertex:Cy,dithering_fragment:Ry,dithering_pars_fragment:by,roughnessmap_fragment:Ny,roughnessmap_pars_fragment:Py,shadowmap_pars_fragment:Ly,shadowmap_pars_vertex:Dy,shadowmap_vertex:Iy,shadowmask_pars_fragment:Uy,skinbase_vertex:Fy,skinning_pars_vertex:Oy,skinning_vertex:ky,skinnormal_vertex:zy,specularmap_fragment:By,specularmap_pars_fragment:Hy,tonemapping_fragment:Vy,tonemapping_pars_fragment:Gy,transmission_fragment:jy,transmission_pars_fragment:Wy,uv_pars_fragment:Xy,uv_pars_vertex:Yy,uv_vertex:qy,worldpos_vertex:$y,background_vert:Ky,background_frag:Zy,backgroundCube_vert:Jy,backgroundCube_frag:Qy,cube_vert:eS,cube_frag:tS,depth_vert:nS,depth_frag:iS,distanceRGBA_vert:rS,distanceRGBA_frag:sS,equirect_vert:aS,equirect_frag:oS,linedashed_vert:lS,linedashed_frag:cS,meshbasic_vert:uS,meshbasic_frag:dS,meshlambert_vert:hS,meshlambert_frag:fS,meshmatcap_vert:pS,meshmatcap_frag:mS,meshnormal_vert:gS,meshnormal_frag:vS,meshphong_vert:_S,meshphong_frag:xS,meshphysical_vert:yS,meshphysical_frag:SS,meshtoon_vert:MS,meshtoon_frag:ES,points_vert:wS,points_frag:TS,shadow_vert:AS,shadow_frag:CS,sprite_vert:RS,sprite_frag:bS},be={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},xi={basic:{uniforms:yn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:yn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new St(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:yn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:yn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:yn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new St(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:yn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:yn([be.points,be.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:yn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:yn([be.common,be.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:yn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:yn([be.sprite,be.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:yn([be.common,be.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:yn([be.lights,be.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};xi.physical={uniforms:yn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const _l={r:0,b:0,g:0},Vr=new Si,NS=new kt;function PS(s,e,t,r,o,l,u){const d=new St(0);let p=l===!0?0:1,m,v,x=null,_=0,M=null;function E(N){let P=N.isScene===!0?N.background:null;return P&&P.isTexture&&(P=(N.backgroundBlurriness>0?t:e).get(P)),P}function A(N){let P=!1;const T=E(N);T===null?y(d,p):T&&T.isColor&&(y(T,1),P=!0);const j=s.xr.getEnvironmentBlendMode();j==="additive"?r.buffers.color.setClear(0,0,0,1,u):j==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(N,P){const T=E(P);T&&(T.isCubeTexture||T.mapping===Ll)?(v===void 0&&(v=new Pn(new Xa(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:Ws(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(j,F,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),Vr.copy(P.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),v.material.uniforms.envMap.value=T,v.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(NS.makeRotationFromEuler(Vr)),v.material.toneMapped=wt.getTransfer(T.colorSpace)!==Pt,(x!==T||_!==T.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,x=T,_=T.version,M=s.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):T&&T.isTexture&&(m===void 0&&(m=new Pn(new Ul(2,2),new Er({name:"BackgroundMaterial",uniforms:Ws(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=T,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=wt.getTransfer(T.colorSpace)!==Pt,T.matrixAutoUpdate===!0&&T.updateMatrix(),m.material.uniforms.uvTransform.value.copy(T.matrix),(x!==T||_!==T.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,x=T,_=T.version,M=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function y(N,P){N.getRGB(_l,yg(s)),r.buffers.color.setClear(_l.r,_l.g,_l.b,P,u)}return{getClearColor:function(){return d},setClearColor:function(N,P=1){d.set(N),p=P,y(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,y(d,p)},render:A,addToRenderList:S}}function LS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=_(null);let l=o,u=!1;function d(R,z,ie,Q,de){let he=!1;const ce=x(Q,ie,z);l!==ce&&(l=ce,m(l.object)),he=M(R,Q,ie,de),he&&E(R,Q,ie,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,T(R,z,ie,Q),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function p(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function v(R){return s.deleteVertexArray(R)}function x(R,z,ie){const Q=ie.wireframe===!0;let de=r[R.id];de===void 0&&(de={},r[R.id]=de);let he=de[z.id];he===void 0&&(he={},de[z.id]=he);let ce=he[Q];return ce===void 0&&(ce=_(p()),he[Q]=ce),ce}function _(R){const z=[],ie=[],Q=[];for(let de=0;de<t;de++)z[de]=0,ie[de]=0,Q[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ie,attributeDivisors:Q,object:R,attributes:{},index:null}}function M(R,z,ie,Q){const de=l.attributes,he=z.attributes;let ce=0;const ue=ie.getAttributes();for(const H in ue)if(ue[H].location>=0){const se=de[H];let O=he[H];if(O===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(O=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(O=R.instanceColor)),se===void 0||se.attribute!==O||O&&se.data!==O.data)return!0;ce++}return l.attributesNum!==ce||l.index!==Q}function E(R,z,ie,Q){const de={},he=z.attributes;let ce=0;const ue=ie.getAttributes();for(const H in ue)if(ue[H].location>=0){let se=he[H];se===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(se=R.instanceColor));const O={};O.attribute=se,se&&se.data&&(O.data=se.data),de[H]=O,ce++}l.attributes=de,l.attributesNum=ce,l.index=Q}function A(){const R=l.newAttributes;for(let z=0,ie=R.length;z<ie;z++)R[z]=0}function S(R){y(R,0)}function y(R,z){const ie=l.newAttributes,Q=l.enabledAttributes,de=l.attributeDivisors;ie[R]=1,Q[R]===0&&(s.enableVertexAttribArray(R),Q[R]=1),de[R]!==z&&(s.vertexAttribDivisor(R,z),de[R]=z)}function N(){const R=l.newAttributes,z=l.enabledAttributes;for(let ie=0,Q=z.length;ie<Q;ie++)z[ie]!==R[ie]&&(s.disableVertexAttribArray(ie),z[ie]=0)}function P(R,z,ie,Q,de,he,ce){ce===!0?s.vertexAttribIPointer(R,z,ie,de,he):s.vertexAttribPointer(R,z,ie,Q,de,he)}function T(R,z,ie,Q){A();const de=Q.attributes,he=ie.getAttributes(),ce=z.defaultAttributeValues;for(const ue in he){const H=he[ue];if(H.location>=0){let le=de[ue];if(le===void 0&&(ue==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),ue==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),le!==void 0){const se=le.normalized,O=le.itemSize,re=e.get(le);if(re===void 0)continue;const Le=re.buffer,Z=re.type,oe=re.bytesPerElement,Se=Z===s.INT||Z===s.UNSIGNED_INT||le.gpuType===qd;if(le.isInterleavedBufferAttribute){const ve=le.data,Ae=ve.stride,Ie=le.offset;if(ve.isInstancedInterleavedBuffer){for(let Ke=0;Ke<H.locationSize;Ke++)y(H.location+Ke,ve.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ke=0;Ke<H.locationSize;Ke++)S(H.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let Ke=0;Ke<H.locationSize;Ke++)P(H.location+Ke,O/H.locationSize,Z,se,Ae*oe,(Ie+O/H.locationSize*Ke)*oe,Se)}else{if(le.isInstancedBufferAttribute){for(let ve=0;ve<H.locationSize;ve++)y(H.location+ve,le.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ve=0;ve<H.locationSize;ve++)S(H.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let ve=0;ve<H.locationSize;ve++)P(H.location+ve,O/H.locationSize,Z,se,O*oe,O/H.locationSize*ve*oe,Se)}}else if(ce!==void 0){const se=ce[ue];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(H.location,se);break;case 3:s.vertexAttrib3fv(H.location,se);break;case 4:s.vertexAttrib4fv(H.location,se);break;default:s.vertexAttrib1fv(H.location,se)}}}}N()}function j(){B();for(const R in r){const z=r[R];for(const ie in z){const Q=z[ie];for(const de in Q)v(Q[de].object),delete Q[de];delete z[ie]}delete r[R]}}function F(R){if(r[R.id]===void 0)return;const z=r[R.id];for(const ie in z){const Q=z[ie];for(const de in Q)v(Q[de].object),delete Q[de];delete z[ie]}delete r[R.id]}function U(R){for(const z in r){const ie=r[z];if(ie[R.id]===void 0)continue;const Q=ie[R.id];for(const de in Q)v(Q[de].object),delete Q[de];delete ie[R.id]}}function B(){L(),u=!0,l!==o&&(l=o,m(l.object))}function L(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:B,resetDefaultState:L,dispose:j,releaseStatesOfGeometry:F,releaseStatesOfProgram:U,initAttributes:A,enableAttribute:S,disableUnusedAttributes:N}}function DS(s,e,t){let r;function o(m){r=m}function l(m,v){s.drawArrays(r,m,v),t.update(v,r,1)}function u(m,v,x){x!==0&&(s.drawArraysInstanced(r,m,v,x),t.update(v,r,x))}function d(m,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,x);let M=0;for(let E=0;E<x;E++)M+=v[E];t.update(M,r,1)}function p(m,v,x,_){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<m.length;E++)u(m[E],v[E],_[E]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,v,0,_,0,x);let E=0;for(let A=0;A<x;A++)E+=v[A]*_[A];t.update(E,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function IS(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(U){return!(U!==di&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const B=U===Va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Gi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Bi&&!B)}function p(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const x=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),j=E>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:_,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:N,maxVaryings:P,maxFragmentUniforms:T,vertexTextures:j,maxSamples:F}}function US(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new jr,d=new ut,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const M=x.length!==0||_||r!==0||o;return o=_,r=x.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,_){t=v(x,_,0)},this.setState=function(x,_,M){const E=x.clippingPlanes,A=x.clipIntersection,S=x.clipShadows,y=s.get(x);if(!o||E===null||E.length===0||l&&!S)l?v(null):m();else{const N=l?0:r,P=N*4;let T=y.clippingState||null;p.value=T,T=v(E,_,P,M);for(let j=0;j!==P;++j)T[j]=t[j];y.clippingState=T,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,_,M,E){const A=x!==null?x.length:0;let S=null;if(A!==0){if(S=p.value,E!==!0||S===null){const y=M+A*4,N=_.matrixWorldInverse;d.getNormalMatrix(N),(S===null||S.length<y)&&(S=new Float32Array(y));for(let P=0,T=M;P!==A;++P,T+=4)u.copy(x[P]).applyMatrix4(N,d),u.normal.toArray(S,T),S[T+3]=u.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function FS(s){let e=new WeakMap;function t(u,d){return d===fd?u.mapping=Hs:d===pd&&(u.mapping=Vs),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===fd||d===pd)if(e.has(u)){const p=e.get(u).texture;return t(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new Y0(p.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",o),t(m.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class OS extends Sg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fs=4,fm=[.125,.215,.35,.446,.526,.582],Yr=20,Gu=new OS,pm=new St;let ju=null,Wu=0,Xu=0,Yu=!1;const Wr=(1+Math.sqrt(5))/2,Us=1/Wr,mm=[new V(-Wr,Us,0),new V(Wr,Us,0),new V(-Us,0,Wr),new V(Us,0,Wr),new V(0,Wr,-Us),new V(0,Wr,Us),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class gm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){ju=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),Xu=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ju,Wu,Xu),this._renderer.xr.enabled=Yu,e.scissorTest=!1,xl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ju=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),Xu=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Va,format:di,colorSpace:Xs,depthBuffer:!1},o=vm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kS(l)),this._blurMaterial=zS(l,e,t)}return o}_compileMaterial(e){const t=new Pn(this._lodPlanes[0],e);this._renderer.compile(t,Gu)}_sceneToCubeUV(e,t,r,o){const d=new Bn(90,1,t,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,_=v.toneMapping;v.getClearColor(pm),v.toneMapping=Sr,v.autoClear=!1;const M=new vg({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),E=new Pn(new Xa,M);let A=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,A=!0):(M.color.copy(pm),A=!0);for(let y=0;y<6;y++){const N=y%3;N===0?(d.up.set(0,p[y],0),d.lookAt(m[y],0,0)):N===1?(d.up.set(0,0,p[y]),d.lookAt(0,m[y],0)):(d.up.set(0,p[y],0),d.lookAt(0,0,m[y]));const P=this._cubeSize;xl(o,N*P,y>2?P:0,P,P),v.setRenderTarget(o),A&&v.render(E,d),v.render(e,d)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=_,v.autoClear=x,e.background=S}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Hs||e.mapping===Vs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_m());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Pn(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;xl(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(u,Gu)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=mm[(o-l-1)%mm.length];this._blur(e,l-1,l,u,d)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,d){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,x=new Pn(this._lodPlanes[o],m),_=m.uniforms,M=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Yr-1),A=l/E,S=isFinite(l)?1+Math.floor(v*A):Yr;S>Yr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Yr}`);const y=[];let N=0;for(let U=0;U<Yr;++U){const B=U/A,L=Math.exp(-B*B/2);y.push(L),U===0?N+=L:U<S&&(N+=2*L)}for(let U=0;U<y.length;U++)y[U]=y[U]/N;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=u==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:P}=this;_.dTheta.value=E,_.mipInt.value=P-r;const T=this._sizeLods[o],j=3*T*(o>P-Fs?o-P+Fs:0),F=4*(this._cubeSize-T);xl(t,j,F,3*T,2*T),p.setRenderTarget(t),p.render(x,Gu)}}function kS(s){const e=[],t=[],r=[];let o=s;const l=s-Fs+1+fm.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);t.push(d);let p=1/d;u>s-Fs?p=fm[u-s+Fs-1]:u===0&&(p=0),r.push(p);const m=1/(d-2),v=-m,x=1+m,_=[v,v,x,v,x,x,v,v,x,x,v,x],M=6,E=6,A=3,S=2,y=1,N=new Float32Array(A*E*M),P=new Float32Array(S*E*M),T=new Float32Array(y*E*M);for(let F=0;F<M;F++){const U=F%3*2/3-1,B=F>2?0:-1,L=[U,B,0,U+2/3,B,0,U+2/3,B+1,0,U,B,0,U+2/3,B+1,0,U,B+1,0];N.set(L,A*E*F),P.set(_,S*E*F);const R=[F,F,F,F,F,F];T.set(R,y*E*F)}const j=new Jn;j.setAttribute("position",new Zn(N,A)),j.setAttribute("uv",new Zn(P,S)),j.setAttribute("faceIndex",new Zn(T,y)),e.push(j),o>Fs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function vm(s,e,t){const r=new Zr(s,e,t);return r.texture.mapping=Ll,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xl(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function zS(s,e,t){const r=new Float32Array(Yr),o=new V(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:th(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function _m(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:th(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function xm(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function th(){return`

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
	`}function BS(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===fd||p===pd,v=p===Hs||p===Vs;if(m||v){let x=e.get(d);const _=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return t===null&&(t=new gm(s)),x=m?t.fromEquirectangular(d,x):t.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const M=d.image;return m&&M&&M.height>0||v&&M&&o(M)?(t===null&&(t=new gm(s)),x=m?t.fromEquirectangular(d):t.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",l),x.texture):null}}}return d}function o(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function l(d){const p=d.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function HS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Ua("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function VS(s,e,t,r){const o={},l=new WeakMap;function u(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);for(const E in _.morphAttributes){const A=_.morphAttributes[E];for(let S=0,y=A.length;S<y;S++)e.remove(A[S])}_.removeEventListener("dispose",u),delete o[_.id];const M=l.get(_);M&&(e.remove(M),l.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function d(x,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,t.memory.geometries++),_}function p(x){const _=x.attributes;for(const E in _)e.update(_[E],s.ARRAY_BUFFER);const M=x.morphAttributes;for(const E in M){const A=M[E];for(let S=0,y=A.length;S<y;S++)e.update(A[S],s.ARRAY_BUFFER)}}function m(x){const _=[],M=x.index,E=x.attributes.position;let A=0;if(M!==null){const N=M.array;A=M.version;for(let P=0,T=N.length;P<T;P+=3){const j=N[P+0],F=N[P+1],U=N[P+2];_.push(j,F,F,U,U,j)}}else if(E!==void 0){const N=E.array;A=E.version;for(let P=0,T=N.length/3-1;P<T;P+=3){const j=P+0,F=P+1,U=P+2;_.push(j,F,F,U,U,j)}}else return;const S=new(dg(_)?xg:_g)(_,1);S.version=A;const y=l.get(x);y&&e.remove(y),l.set(x,S)}function v(x){const _=l.get(x);if(_){const M=x.index;M!==null&&_.version<M.version&&m(x)}else m(x);return l.get(x)}return{get:d,update:p,getWireframeAttribute:v}}function GS(s,e,t){let r;function o(_){r=_}let l,u;function d(_){l=_.type,u=_.bytesPerElement}function p(_,M){s.drawElements(r,M,l,_*u),t.update(M,r,1)}function m(_,M,E){E!==0&&(s.drawElementsInstanced(r,M,l,_*u,E),t.update(M,r,E))}function v(_,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,_,0,E);let S=0;for(let y=0;y<E;y++)S+=M[y];t.update(S,r,1)}function x(_,M,E,A){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<_.length;y++)m(_[y]/u,M[y],A[y]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,l,_,0,A,0,E);let y=0;for(let N=0;N<E;N++)y+=M[N]*A[N];t.update(y,r,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function jS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function WS(s,e,t){const r=new WeakMap,o=new Lt;function l(u,d,p){const m=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let _=r.get(d);if(_===void 0||_.count!==x){let R=function(){B.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var M=R;_!==void 0&&_.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let T=0;E===!0&&(T=1),A===!0&&(T=2),S===!0&&(T=3);let j=d.attributes.position.count*T,F=1;j>e.maxTextureSize&&(F=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const U=new Float32Array(j*F*4*x),B=new fg(U,j,F,x);B.type=Bi,B.needsUpdate=!0;const L=T*4;for(let z=0;z<x;z++){const ie=y[z],Q=N[z],de=P[z],he=j*F*4*z;for(let ce=0;ce<ie.count;ce++){const ue=ce*L;E===!0&&(o.fromBufferAttribute(ie,ce),U[he+ue+0]=o.x,U[he+ue+1]=o.y,U[he+ue+2]=o.z,U[he+ue+3]=0),A===!0&&(o.fromBufferAttribute(Q,ce),U[he+ue+4]=o.x,U[he+ue+5]=o.y,U[he+ue+6]=o.z,U[he+ue+7]=0),S===!0&&(o.fromBufferAttribute(de,ce),U[he+ue+8]=o.x,U[he+ue+9]=o.y,U[he+ue+10]=o.z,U[he+ue+11]=de.itemSize===4?o.w:1)}}_={count:x,texture:B,size:new et(j,F)},r.set(d,_),d.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let E=0;for(let S=0;S<m.length;S++)E+=m[S];const A=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function XS(s,e,t,r){let o=new WeakMap;function l(p){const m=r.render.frame,v=p.geometry,x=e.get(p,v);if(o.get(x)!==m&&(e.update(x),o.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==m&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==m&&(_.update(),o.set(_,m))}return x}function u(){o=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:u}}class wg extends Dn{constructor(e,t,r,o,l,u,d,p,m,v=ks){if(v!==ks&&v!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===ks&&(r=Kr),r===void 0&&v===js&&(r=Gs),super(null,o,l,u,d,p,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:hi,this.minFilter=p!==void 0?p:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Tg=new Dn,ym=new wg(1,1),Ag=new fg,Cg=new P0,Rg=new Mg,Sm=[],Mm=[],Em=new Float32Array(16),wm=new Float32Array(9),Tm=new Float32Array(4);function $s(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Sm[o];if(l===void 0&&(l=new Float32Array(o),Sm[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function Kt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Zt(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Fl(s,e){let t=Mm[e];t===void 0&&(t=new Int32Array(e),Mm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function YS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function qS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2fv(this.addr,e),Zt(t,e)}}function $S(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;s.uniform3fv(this.addr,e),Zt(t,e)}}function KS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4fv(this.addr,e),Zt(t,e)}}function ZS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Kt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,r))return;Tm.set(r),s.uniformMatrix2fv(this.addr,!1,Tm),Zt(t,r)}}function JS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Kt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,r))return;wm.set(r),s.uniformMatrix3fv(this.addr,!1,wm),Zt(t,r)}}function QS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Kt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,r))return;Em.set(r),s.uniformMatrix4fv(this.addr,!1,Em),Zt(t,r)}}function eM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function tM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2iv(this.addr,e),Zt(t,e)}}function nM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;s.uniform3iv(this.addr,e),Zt(t,e)}}function iM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4iv(this.addr,e),Zt(t,e)}}function rM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function sM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2uiv(this.addr,e),Zt(t,e)}}function aM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;s.uniform3uiv(this.addr,e),Zt(t,e)}}function oM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4uiv(this.addr,e),Zt(t,e)}}function lM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(ym.compareFunction=ug,l=ym):l=Tg,t.setTexture2D(e||l,o)}function cM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Cg,o)}function uM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Rg,o)}function dM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Ag,o)}function hM(s){switch(s){case 5126:return YS;case 35664:return qS;case 35665:return $S;case 35666:return KS;case 35674:return ZS;case 35675:return JS;case 35676:return QS;case 5124:case 35670:return eM;case 35667:case 35671:return tM;case 35668:case 35672:return nM;case 35669:case 35673:return iM;case 5125:return rM;case 36294:return sM;case 36295:return aM;case 36296:return oM;case 35678:case 36198:case 36298:case 36306:case 35682:return lM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return uM;case 36289:case 36303:case 36311:case 36292:return dM}}function fM(s,e){s.uniform1fv(this.addr,e)}function pM(s,e){const t=$s(e,this.size,2);s.uniform2fv(this.addr,t)}function mM(s,e){const t=$s(e,this.size,3);s.uniform3fv(this.addr,t)}function gM(s,e){const t=$s(e,this.size,4);s.uniform4fv(this.addr,t)}function vM(s,e){const t=$s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function _M(s,e){const t=$s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function xM(s,e){const t=$s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function yM(s,e){s.uniform1iv(this.addr,e)}function SM(s,e){s.uniform2iv(this.addr,e)}function MM(s,e){s.uniform3iv(this.addr,e)}function EM(s,e){s.uniform4iv(this.addr,e)}function wM(s,e){s.uniform1uiv(this.addr,e)}function TM(s,e){s.uniform2uiv(this.addr,e)}function AM(s,e){s.uniform3uiv(this.addr,e)}function CM(s,e){s.uniform4uiv(this.addr,e)}function RM(s,e,t){const r=this.cache,o=e.length,l=Fl(t,o);Kt(r,l)||(s.uniform1iv(this.addr,l),Zt(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||Tg,l[u])}function bM(s,e,t){const r=this.cache,o=e.length,l=Fl(t,o);Kt(r,l)||(s.uniform1iv(this.addr,l),Zt(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Cg,l[u])}function NM(s,e,t){const r=this.cache,o=e.length,l=Fl(t,o);Kt(r,l)||(s.uniform1iv(this.addr,l),Zt(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Rg,l[u])}function PM(s,e,t){const r=this.cache,o=e.length,l=Fl(t,o);Kt(r,l)||(s.uniform1iv(this.addr,l),Zt(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Ag,l[u])}function LM(s){switch(s){case 5126:return fM;case 35664:return pM;case 35665:return mM;case 35666:return gM;case 35674:return vM;case 35675:return _M;case 35676:return xM;case 5124:case 35670:return yM;case 35667:case 35671:return SM;case 35668:case 35672:return MM;case 35669:case 35673:return EM;case 5125:return wM;case 36294:return TM;case 36295:return AM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return bM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return PM}}class DM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=hM(t.type)}}class IM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LM(t.type)}}class UM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const qu=/(\w+)(\])?(\[|\.)?/g;function Am(s,e){s.seq.push(e),s.map[e.id]=e}function FM(s,e,t){const r=s.name,o=r.length;for(qu.lastIndex=0;;){const l=qu.exec(r),u=qu.lastIndex;let d=l[1];const p=l[2]==="]",m=l[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===o){Am(t,m===void 0?new DM(d,s,e):new IM(d,s,e));break}else{let x=t.map[d];x===void 0&&(x=new UM(d),Am(t,x)),t=x}}}class bl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);FM(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Cm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const OM=37297;let kM=0;function zM(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const Rm=new ut;function BM(s){wt._getMatrix(Rm,wt.workingColorSpace,s);const e=`mat3( ${Rm.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(s)){case Dl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function bm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+zM(s.getShaderSource(e),u)}else return o}function HM(s,e){const t=BM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function VM(s,e){let t;switch(e){case r0:t="Linear";break;case s0:t="Reinhard";break;case a0:t="Cineon";break;case o0:t="ACESFilmic";break;case c0:t="AgX";break;case u0:t="Neutral";break;case l0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yl=new V;function GM(){wt.getLuminanceCoefficients(yl);const s=yl.x.toFixed(4),e=yl.y.toFixed(4),t=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function WM(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function XM(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function Fa(s){return s!==""}function Nm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YM=/^[ \t]*#include +<([\w\d./]+)>/gm;function jd(s){return s.replace(YM,$M)}const qM=new Map;function $M(s,e){let t=ht[e];if(t===void 0){const r=qM.get(e);if(r!==void 0)t=ht[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return jd(t)}const KM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lm(s){return s.replace(KM,ZM)}function ZM(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Dm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function JM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Km?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===O_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function QM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hs:case Vs:e="ENVMAP_TYPE_CUBE";break;case Ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function tE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Zm:e="ENVMAP_BLENDING_MULTIPLY";break;case n0:e="ENVMAP_BLENDING_MIX";break;case i0:e="ENVMAP_BLENDING_ADD";break}return e}function nE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function iE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const p=JM(t),m=QM(t),v=eE(t),x=tE(t),_=nE(t),M=jM(t),E=WM(l),A=o.createProgram();let S,y,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Fa).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Fa).join(`
`),y.length>0&&(y+=`
`)):(S=[Dm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),y=[Dm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sr?"#define TONE_MAPPING":"",t.toneMapping!==Sr?ht.tonemapping_pars_fragment:"",t.toneMapping!==Sr?VM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,HM("linearToOutputTexel",t.outputColorSpace),GM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fa).join(`
`)),u=jd(u),u=Nm(u,t),u=Pm(u,t),d=jd(d),d=Nm(d,t),d=Pm(d,t),u=Lm(u),d=Lm(d),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===Xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=N+S+u,T=N+y+d,j=Cm(o,o.VERTEX_SHADER,P),F=Cm(o,o.FRAGMENT_SHADER,T);o.attachShader(A,j),o.attachShader(A,F),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function U(z){if(s.debug.checkShaderErrors){const ie=o.getProgramInfoLog(A).trim(),Q=o.getShaderInfoLog(j).trim(),de=o.getShaderInfoLog(F).trim();let he=!0,ce=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,j,F);else{const ue=bm(o,j,"vertex"),H=bm(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ie+`
`+ue+`
`+H)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(Q===""||de==="")&&(ce=!1);ce&&(z.diagnostics={runnable:he,programLog:ie,vertexShader:{log:Q,prefix:S},fragmentShader:{log:de,prefix:y}})}o.deleteShader(j),o.deleteShader(F),B=new bl(o,A),L=XM(o,A)}let B;this.getUniforms=function(){return B===void 0&&U(this),B};let L;this.getAttributes=function(){return L===void 0&&U(this),L};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(A,OM)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kM++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=j,this.fragmentShader=F,this}let rE=0;class sE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new aE(e),t.set(e,r)),r}}class aE{constructor(e){this.id=rE++,this.code=e,this.usedTimes=0}}function oE(s,e,t,r,o,l,u){const d=new mg,p=new sE,m=new Set,v=[],x=o.logarithmicDepthBuffer,_=o.vertexTextures;let M=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(L){return m.add(L),L===0?"uv":`uv${L}`}function S(L,R,z,ie,Q){const de=ie.fog,he=Q.geometry,ce=L.isMeshStandardMaterial?ie.environment:null,ue=(L.isMeshStandardMaterial?t:e).get(L.envMap||ce),H=ue&&ue.mapping===Ll?ue.image.height:null,le=E[L.type];L.precision!==null&&(M=o.getMaxPrecision(L.precision),M!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",M,"instead."));const se=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,O=se!==void 0?se.length:0;let re=0;he.morphAttributes.position!==void 0&&(re=1),he.morphAttributes.normal!==void 0&&(re=2),he.morphAttributes.color!==void 0&&(re=3);let Le,Z,oe,Se;if(le){const Mt=xi[le];Le=Mt.vertexShader,Z=Mt.fragmentShader}else Le=L.vertexShader,Z=L.fragmentShader,p.update(L),oe=p.getVertexShaderID(L),Se=p.getFragmentShaderID(L);const ve=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Ie=Q.isInstancedMesh===!0,Ke=Q.isBatchedMesh===!0,Ye=!!L.map,st=!!L.matcap,xt=!!ue,q=!!L.aoMap,mn=!!L.lightMap,vt=!!L.bumpMap,pt=!!L.normalMap,Ze=!!L.displacementMap,bt=!!L.emissiveMap,$e=!!L.metalnessMap,D=!!L.roughnessMap,C=L.anisotropy>0,J=L.clearcoat>0,me=L.dispersion>0,_e=L.iridescence>0,fe=L.sheen>0,Ve=L.transmission>0,Ce=C&&!!L.anisotropyMap,Ue=J&&!!L.clearcoatMap,ft=J&&!!L.clearcoatNormalMap,Me=J&&!!L.clearcoatRoughnessMap,Oe=_e&&!!L.iridescenceMap,tt=_e&&!!L.iridescenceThicknessMap,nt=fe&&!!L.sheenColorMap,ke=fe&&!!L.sheenRoughnessMap,mt=!!L.specularMap,ot=!!L.specularColorMap,Rt=!!L.specularIntensityMap,W=Ve&&!!L.transmissionMap,Re=Ve&&!!L.thicknessMap,ae=!!L.gradientMap,pe=!!L.alphaMap,Pe=L.alphaTest>0,Ne=!!L.alphaHash,lt=!!L.extensions;let Ut=Sr;L.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const Xt={shaderID:le,shaderType:L.type,shaderName:L.name,vertexShader:Le,fragmentShader:Z,defines:L.defines,customVertexShaderID:oe,customFragmentShaderID:Se,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:M,batching:Ke,batchingColor:Ke&&Q._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&Q.instanceColor!==null,instancingMorph:Ie&&Q.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Xs,alphaToCoverage:!!L.alphaToCoverage,map:Ye,matcap:st,envMap:xt,envMapMode:xt&&ue.mapping,envMapCubeUVHeight:H,aoMap:q,lightMap:mn,bumpMap:vt,normalMap:pt,displacementMap:_&&Ze,emissiveMap:bt,normalMapObjectSpace:pt&&L.normalMapType===p0,normalMapTangentSpace:pt&&L.normalMapType===cg,metalnessMap:$e,roughnessMap:D,anisotropy:C,anisotropyMap:Ce,clearcoat:J,clearcoatMap:Ue,clearcoatNormalMap:ft,clearcoatRoughnessMap:Me,dispersion:me,iridescence:_e,iridescenceMap:Oe,iridescenceThicknessMap:tt,sheen:fe,sheenColorMap:nt,sheenRoughnessMap:ke,specularMap:mt,specularColorMap:ot,specularIntensityMap:Rt,transmission:Ve,transmissionMap:W,thicknessMap:Re,gradientMap:ae,opaque:L.transparent===!1&&L.blending===Os&&L.alphaToCoverage===!1,alphaMap:pe,alphaTest:Pe,alphaHash:Ne,combine:L.combine,mapUv:Ye&&A(L.map.channel),aoMapUv:q&&A(L.aoMap.channel),lightMapUv:mn&&A(L.lightMap.channel),bumpMapUv:vt&&A(L.bumpMap.channel),normalMapUv:pt&&A(L.normalMap.channel),displacementMapUv:Ze&&A(L.displacementMap.channel),emissiveMapUv:bt&&A(L.emissiveMap.channel),metalnessMapUv:$e&&A(L.metalnessMap.channel),roughnessMapUv:D&&A(L.roughnessMap.channel),anisotropyMapUv:Ce&&A(L.anisotropyMap.channel),clearcoatMapUv:Ue&&A(L.clearcoatMap.channel),clearcoatNormalMapUv:ft&&A(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&A(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&A(L.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&A(L.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&A(L.sheenColorMap.channel),sheenRoughnessMapUv:ke&&A(L.sheenRoughnessMap.channel),specularMapUv:mt&&A(L.specularMap.channel),specularColorMapUv:ot&&A(L.specularColorMap.channel),specularIntensityMapUv:Rt&&A(L.specularIntensityMap.channel),transmissionMapUv:W&&A(L.transmissionMap.channel),thicknessMapUv:Re&&A(L.thicknessMap.channel),alphaMapUv:pe&&A(L.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(pt||C),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!he.attributes.uv&&(Ye||pe),fog:!!de,useFog:L.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Ae,skinning:Q.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:re,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:L.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Ye&&L.map.isVideoTexture===!0&&wt.getTransfer(L.map.colorSpace)===Pt,decodeVideoTextureEmissive:bt&&L.emissiveMap.isVideoTexture===!0&&wt.getTransfer(L.emissiveMap.colorSpace)===Pt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===zi,flipSided:L.side===Ln,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:lt&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&L.extensions.multiDraw===!0||Ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Xt.vertexUv1s=m.has(1),Xt.vertexUv2s=m.has(2),Xt.vertexUv3s=m.has(3),m.clear(),Xt}function y(L){const R=[];if(L.shaderID?R.push(L.shaderID):(R.push(L.customVertexShaderID),R.push(L.customFragmentShaderID)),L.defines!==void 0)for(const z in L.defines)R.push(z),R.push(L.defines[z]);return L.isRawShaderMaterial===!1&&(N(R,L),P(R,L),R.push(s.outputColorSpace)),R.push(L.customProgramCacheKey),R.join()}function N(L,R){L.push(R.precision),L.push(R.outputColorSpace),L.push(R.envMapMode),L.push(R.envMapCubeUVHeight),L.push(R.mapUv),L.push(R.alphaMapUv),L.push(R.lightMapUv),L.push(R.aoMapUv),L.push(R.bumpMapUv),L.push(R.normalMapUv),L.push(R.displacementMapUv),L.push(R.emissiveMapUv),L.push(R.metalnessMapUv),L.push(R.roughnessMapUv),L.push(R.anisotropyMapUv),L.push(R.clearcoatMapUv),L.push(R.clearcoatNormalMapUv),L.push(R.clearcoatRoughnessMapUv),L.push(R.iridescenceMapUv),L.push(R.iridescenceThicknessMapUv),L.push(R.sheenColorMapUv),L.push(R.sheenRoughnessMapUv),L.push(R.specularMapUv),L.push(R.specularColorMapUv),L.push(R.specularIntensityMapUv),L.push(R.transmissionMapUv),L.push(R.thicknessMapUv),L.push(R.combine),L.push(R.fogExp2),L.push(R.sizeAttenuation),L.push(R.morphTargetsCount),L.push(R.morphAttributeCount),L.push(R.numDirLights),L.push(R.numPointLights),L.push(R.numSpotLights),L.push(R.numSpotLightMaps),L.push(R.numHemiLights),L.push(R.numRectAreaLights),L.push(R.numDirLightShadows),L.push(R.numPointLightShadows),L.push(R.numSpotLightShadows),L.push(R.numSpotLightShadowsWithMaps),L.push(R.numLightProbes),L.push(R.shadowMapType),L.push(R.toneMapping),L.push(R.numClippingPlanes),L.push(R.numClipIntersection),L.push(R.depthPacking)}function P(L,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),L.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),L.push(d.mask)}function T(L){const R=E[L.type];let z;if(R){const ie=xi[R];z=G0.clone(ie.uniforms)}else z=L.uniforms;return z}function j(L,R){let z;for(let ie=0,Q=v.length;ie<Q;ie++){const de=v[ie];if(de.cacheKey===R){z=de,++z.usedTimes;break}}return z===void 0&&(z=new iE(s,R,L,l),v.push(z)),z}function F(L){if(--L.usedTimes===0){const R=v.indexOf(L);v[R]=v[v.length-1],v.pop(),L.destroy()}}function U(L){p.remove(L)}function B(){p.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:T,acquireProgram:j,releaseProgram:F,releaseShaderCache:U,programs:v,dispose:B}}function lE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,p){s.get(u)[d]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function cE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Im(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Um(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(x,_,M,E,A,S){let y=s[e];return y===void 0?(y={id:x.id,object:x,geometry:_,material:M,groupOrder:E,renderOrder:x.renderOrder,z:A,group:S},s[e]=y):(y.id=x.id,y.object=x,y.geometry=_,y.material=M,y.groupOrder=E,y.renderOrder=x.renderOrder,y.z=A,y.group=S),e++,y}function d(x,_,M,E,A,S){const y=u(x,_,M,E,A,S);M.transmission>0?r.push(y):M.transparent===!0?o.push(y):t.push(y)}function p(x,_,M,E,A,S){const y=u(x,_,M,E,A,S);M.transmission>0?r.unshift(y):M.transparent===!0?o.unshift(y):t.unshift(y)}function m(x,_){t.length>1&&t.sort(x||cE),r.length>1&&r.sort(_||Im),o.length>1&&o.sort(_||Im)}function v(){for(let x=e,_=s.length;x<_;x++){const M=s[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:p,finish:v,sort:m}}function uE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Um,s.set(r,[u])):o>=l.length?(u=new Um,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function dE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new St};break;case"SpotLight":t={position:new V,direction:new V,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new V,halfWidth:new V,halfHeight:new V};break}return s[e.id]=t,t}}}function hE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let fE=0;function pE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function mE(s){const e=new dE,t=hE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new V);const o=new V,l=new kt,u=new kt;function d(m){let v=0,x=0,_=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let M=0,E=0,A=0,S=0,y=0,N=0,P=0,T=0,j=0,F=0,U=0;m.sort(pE);for(let L=0,R=m.length;L<R;L++){const z=m[L],ie=z.color,Q=z.intensity,de=z.distance,he=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)v+=ie.r*Q,x+=ie.g*Q,_+=ie.b*Q;else if(z.isLightProbe){for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(z.sh.coefficients[ce],Q);U++}else if(z.isDirectionalLight){const ce=e.get(z);if(ce.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ue=z.shadow,H=t.get(z);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,r.directionalShadow[M]=H,r.directionalShadowMap[M]=he,r.directionalShadowMatrix[M]=z.shadow.matrix,N++}r.directional[M]=ce,M++}else if(z.isSpotLight){const ce=e.get(z);ce.position.setFromMatrixPosition(z.matrixWorld),ce.color.copy(ie).multiplyScalar(Q),ce.distance=de,ce.coneCos=Math.cos(z.angle),ce.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ce.decay=z.decay,r.spot[A]=ce;const ue=z.shadow;if(z.map&&(r.spotLightMap[j]=z.map,j++,ue.updateMatrices(z),z.castShadow&&F++),r.spotLightMatrix[A]=ue.matrix,z.castShadow){const H=t.get(z);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,r.spotShadow[A]=H,r.spotShadowMap[A]=he,T++}A++}else if(z.isRectAreaLight){const ce=e.get(z);ce.color.copy(ie).multiplyScalar(Q),ce.halfWidth.set(z.width*.5,0,0),ce.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=ce,S++}else if(z.isPointLight){const ce=e.get(z);if(ce.color.copy(z.color).multiplyScalar(z.intensity),ce.distance=z.distance,ce.decay=z.decay,z.castShadow){const ue=z.shadow,H=t.get(z);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,H.shadowCameraNear=ue.camera.near,H.shadowCameraFar=ue.camera.far,r.pointShadow[E]=H,r.pointShadowMap[E]=he,r.pointShadowMatrix[E]=z.shadow.matrix,P++}r.point[E]=ce,E++}else if(z.isHemisphereLight){const ce=e.get(z);ce.skyColor.copy(z.color).multiplyScalar(Q),ce.groundColor.copy(z.groundColor).multiplyScalar(Q),r.hemi[y]=ce,y++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=_;const B=r.hash;(B.directionalLength!==M||B.pointLength!==E||B.spotLength!==A||B.rectAreaLength!==S||B.hemiLength!==y||B.numDirectionalShadows!==N||B.numPointShadows!==P||B.numSpotShadows!==T||B.numSpotMaps!==j||B.numLightProbes!==U)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=S,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=T+j-F,r.spotLightMap.length=j,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=U,B.directionalLength=M,B.pointLength=E,B.spotLength=A,B.rectAreaLength=S,B.hemiLength=y,B.numDirectionalShadows=N,B.numPointShadows=P,B.numSpotShadows=T,B.numSpotMaps=j,B.numLightProbes=U,r.version=fE++)}function p(m,v){let x=0,_=0,M=0,E=0,A=0;const S=v.matrixWorldInverse;for(let y=0,N=m.length;y<N;y++){const P=m[y];if(P.isDirectionalLight){const T=r.directional[x];T.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(S),x++}else if(P.isSpotLight){const T=r.spot[M];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(S),T.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(S),M++}else if(P.isRectAreaLight){const T=r.rectArea[E];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(S),u.identity(),l.copy(P.matrixWorld),l.premultiply(S),u.extractRotation(l),T.halfWidth.set(P.width*.5,0,0),T.halfHeight.set(0,P.height*.5,0),T.halfWidth.applyMatrix4(u),T.halfHeight.applyMatrix4(u),E++}else if(P.isPointLight){const T=r.point[_];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(S),_++}else if(P.isHemisphereLight){const T=r.hemi[A];T.direction.setFromMatrixPosition(P.matrixWorld),T.direction.transformDirection(S),A++}}}return{setup:d,setupView:p,state:r}}function Fm(s){const e=new mE(s),t=[],r=[];function o(v){m.camera=v,t.length=0,r.length=0}function l(v){t.push(v)}function u(v){r.push(v)}function d(){e.setup(t)}function p(v){e.setupView(t,v)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:p,pushLight:l,pushShadow:u}}function gE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new Fm(s),e.set(o,[d])):l>=u.length?(d=new Fm(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}class vE extends qs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=h0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _E extends qs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xE=`void main() {
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
}`;function SE(s,e,t){let r=new eh;const o=new et,l=new et,u=new Lt,d=new vE({depthPacking:f0}),p=new _E,m={},v=t.maxTextureSize,x={[Mr]:Ln,[Ln]:Mr,[zi]:zi},_=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:xE,fragmentShader:yE}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const E=new Jn;E.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Pn(E,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Km;let y=this.type;this.render=function(F,U,B){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const L=s.getRenderTarget(),R=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),ie=s.state;ie.setBlending(yr),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const Q=y!==ki&&this.type===ki,de=y===ki&&this.type!==ki;for(let he=0,ce=F.length;he<ce;he++){const ue=F[he],H=ue.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const le=H.getFrameExtents();if(o.multiply(le),l.copy(H.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/le.x),o.x=l.x*le.x,H.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/le.y),o.y=l.y*le.y,H.mapSize.y=l.y)),H.map===null||Q===!0||de===!0){const O=this.type!==ki?{minFilter:hi,magFilter:hi}:{};H.map!==null&&H.map.dispose(),H.map=new Zr(o.x,o.y,O),H.map.texture.name=ue.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const se=H.getViewportCount();for(let O=0;O<se;O++){const re=H.getViewport(O);u.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),ie.viewport(u),H.updateMatrices(ue,O),r=H.getFrustum(),T(U,B,H.camera,ue,this.type)}H.isPointLightShadow!==!0&&this.type===ki&&N(H,B),H.needsUpdate=!1}y=this.type,S.needsUpdate=!1,s.setRenderTarget(L,R,z)};function N(F,U){const B=e.update(A);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Zr(o.x,o.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(U,null,B,_,A,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(U,null,B,M,A,null)}function P(F,U,B,L){let R=null;const z=B.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(z!==void 0)R=z;else if(R=B.isPointLight===!0?p:d,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ie=R.uuid,Q=U.uuid;let de=m[ie];de===void 0&&(de={},m[ie]=de);let he=de[Q];he===void 0&&(he=R.clone(),de[Q]=he,U.addEventListener("dispose",j)),R=he}if(R.visible=U.visible,R.wireframe=U.wireframe,L===ki?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:x[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ie=s.properties.get(R);ie.light=B}return R}function T(F,U,B,L,R){if(F.visible===!1)return;if(F.layers.test(U.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===ki)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,F.matrixWorld);const Q=e.update(F),de=F.material;if(Array.isArray(de)){const he=Q.groups;for(let ce=0,ue=he.length;ce<ue;ce++){const H=he[ce],le=de[H.materialIndex];if(le&&le.visible){const se=P(F,le,L,R);F.onBeforeShadow(s,F,U,B,Q,se,H),s.renderBufferDirect(B,null,Q,se,F,H),F.onAfterShadow(s,F,U,B,Q,se,H)}}}else if(de.visible){const he=P(F,de,L,R);F.onBeforeShadow(s,F,U,B,Q,he,null),s.renderBufferDirect(B,null,Q,he,F,null),F.onAfterShadow(s,F,U,B,Q,he,null)}}const ie=F.children;for(let Q=0,de=ie.length;Q<de;Q++)T(ie[Q],U,B,L,R)}function j(F){F.target.removeEventListener("dispose",j);for(const B in m){const L=m[B],R=F.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}const ME={[ad]:od,[ld]:dd,[cd]:hd,[Bs]:ud,[od]:ad,[dd]:ld,[hd]:cd,[ud]:Bs};function EE(s,e){function t(){let W=!1;const Re=new Lt;let ae=null;const pe=new Lt(0,0,0,0);return{setMask:function(Pe){ae!==Pe&&!W&&(s.colorMask(Pe,Pe,Pe,Pe),ae=Pe)},setLocked:function(Pe){W=Pe},setClear:function(Pe,Ne,lt,Ut,Xt){Xt===!0&&(Pe*=Ut,Ne*=Ut,lt*=Ut),Re.set(Pe,Ne,lt,Ut),pe.equals(Re)===!1&&(s.clearColor(Pe,Ne,lt,Ut),pe.copy(Re))},reset:function(){W=!1,ae=null,pe.set(-1,0,0,0)}}}function r(){let W=!1,Re=!1,ae=null,pe=null,Pe=null;return{setReversed:function(Ne){if(Re!==Ne){const lt=e.get("EXT_clip_control");Re?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Pe;Pe=null,this.setClear(Ut)}Re=Ne},getReversed:function(){return Re},setTest:function(Ne){Ne?ve(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Ne){ae!==Ne&&!W&&(s.depthMask(Ne),ae=Ne)},setFunc:function(Ne){if(Re&&(Ne=ME[Ne]),pe!==Ne){switch(Ne){case ad:s.depthFunc(s.NEVER);break;case od:s.depthFunc(s.ALWAYS);break;case ld:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case cd:s.depthFunc(s.EQUAL);break;case ud:s.depthFunc(s.GEQUAL);break;case dd:s.depthFunc(s.GREATER);break;case hd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Ne}},setLocked:function(Ne){W=Ne},setClear:function(Ne){Pe!==Ne&&(Re&&(Ne=1-Ne),s.clearDepth(Ne),Pe=Ne)},reset:function(){W=!1,ae=null,pe=null,Pe=null,Re=!1}}}function o(){let W=!1,Re=null,ae=null,pe=null,Pe=null,Ne=null,lt=null,Ut=null,Xt=null;return{setTest:function(Mt){W||(Mt?ve(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(Mt){Re!==Mt&&!W&&(s.stencilMask(Mt),Re=Mt)},setFunc:function(Mt,Mn,gn){(ae!==Mt||pe!==Mn||Pe!==gn)&&(s.stencilFunc(Mt,Mn,gn),ae=Mt,pe=Mn,Pe=gn)},setOp:function(Mt,Mn,gn){(Ne!==Mt||lt!==Mn||Ut!==gn)&&(s.stencilOp(Mt,Mn,gn),Ne=Mt,lt=Mn,Ut=gn)},setLocked:function(Mt){W=Mt},setClear:function(Mt){Xt!==Mt&&(s.clearStencil(Mt),Xt=Mt)},reset:function(){W=!1,Re=null,ae=null,pe=null,Pe=null,Ne=null,lt=null,Ut=null,Xt=null}}}const l=new t,u=new r,d=new o,p=new WeakMap,m=new WeakMap;let v={},x={},_=new WeakMap,M=[],E=null,A=!1,S=null,y=null,N=null,P=null,T=null,j=null,F=null,U=new St(0,0,0),B=0,L=!1,R=null,z=null,ie=null,Q=null,de=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,ue=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(H)[1]),ce=ue>=1):H.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ce=ue>=2);let le=null,se={};const O=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Le=new Lt().fromArray(O),Z=new Lt().fromArray(re);function oe(W,Re,ae,pe){const Pe=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(W,Ne),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let lt=0;lt<ae;lt++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,Pe):s.texImage2D(Re+lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pe);return Ne}const Se={};Se[s.TEXTURE_2D]=oe(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ve(s.DEPTH_TEST),u.setFunc(Bs),vt(!1),pt(Hp),ve(s.CULL_FACE),q(yr);function ve(W){v[W]!==!0&&(s.enable(W),v[W]=!0)}function Ae(W){v[W]!==!1&&(s.disable(W),v[W]=!1)}function Ie(W,Re){return x[W]!==Re?(s.bindFramebuffer(W,Re),x[W]=Re,W===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Re),W===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ke(W,Re){let ae=M,pe=!1;if(W){ae=_.get(Re),ae===void 0&&(ae=[],_.set(Re,ae));const Pe=W.textures;if(ae.length!==Pe.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,lt=Pe.length;Ne<lt;Ne++)ae[Ne]=s.COLOR_ATTACHMENT0+Ne;ae.length=Pe.length,pe=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,pe=!0);pe&&s.drawBuffers(ae)}function Ye(W){return E!==W?(s.useProgram(W),E=W,!0):!1}const st={[Xr]:s.FUNC_ADD,[z_]:s.FUNC_SUBTRACT,[B_]:s.FUNC_REVERSE_SUBTRACT};st[H_]=s.MIN,st[V_]=s.MAX;const xt={[G_]:s.ZERO,[j_]:s.ONE,[W_]:s.SRC_COLOR,[rd]:s.SRC_ALPHA,[Z_]:s.SRC_ALPHA_SATURATE,[$_]:s.DST_COLOR,[Y_]:s.DST_ALPHA,[X_]:s.ONE_MINUS_SRC_COLOR,[sd]:s.ONE_MINUS_SRC_ALPHA,[K_]:s.ONE_MINUS_DST_COLOR,[q_]:s.ONE_MINUS_DST_ALPHA,[J_]:s.CONSTANT_COLOR,[Q_]:s.ONE_MINUS_CONSTANT_COLOR,[e0]:s.CONSTANT_ALPHA,[t0]:s.ONE_MINUS_CONSTANT_ALPHA};function q(W,Re,ae,pe,Pe,Ne,lt,Ut,Xt,Mt){if(W===yr){A===!0&&(Ae(s.BLEND),A=!1);return}if(A===!1&&(ve(s.BLEND),A=!0),W!==k_){if(W!==S||Mt!==L){if((y!==Xr||T!==Xr)&&(s.blendEquation(s.FUNC_ADD),y=Xr,T=Xr),Mt)switch(W){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case id:s.blendFunc(s.ONE,s.ONE);break;case Vp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case id:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Vp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}N=null,P=null,j=null,F=null,U.set(0,0,0),B=0,S=W,L=Mt}return}Pe=Pe||Re,Ne=Ne||ae,lt=lt||pe,(Re!==y||Pe!==T)&&(s.blendEquationSeparate(st[Re],st[Pe]),y=Re,T=Pe),(ae!==N||pe!==P||Ne!==j||lt!==F)&&(s.blendFuncSeparate(xt[ae],xt[pe],xt[Ne],xt[lt]),N=ae,P=pe,j=Ne,F=lt),(Ut.equals(U)===!1||Xt!==B)&&(s.blendColor(Ut.r,Ut.g,Ut.b,Xt),U.copy(Ut),B=Xt),S=W,L=!1}function mn(W,Re){W.side===zi?Ae(s.CULL_FACE):ve(s.CULL_FACE);let ae=W.side===Ln;Re&&(ae=!ae),vt(ae),W.blending===Os&&W.transparent===!1?q(yr):q(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const pe=W.stencilWrite;d.setTest(pe),pe&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),bt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function vt(W){R!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),R=W)}function pt(W){W!==U_?(ve(s.CULL_FACE),W!==z&&(W===Hp?s.cullFace(s.BACK):W===F_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),z=W}function Ze(W){W!==ie&&(ce&&s.lineWidth(W),ie=W)}function bt(W,Re,ae){W?(ve(s.POLYGON_OFFSET_FILL),(Q!==Re||de!==ae)&&(s.polygonOffset(Re,ae),Q=Re,de=ae)):Ae(s.POLYGON_OFFSET_FILL)}function $e(W){W?ve(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function D(W){W===void 0&&(W=s.TEXTURE0+he-1),le!==W&&(s.activeTexture(W),le=W)}function C(W,Re,ae){ae===void 0&&(le===null?ae=s.TEXTURE0+he-1:ae=le);let pe=se[ae];pe===void 0&&(pe={type:void 0,texture:void 0},se[ae]=pe),(pe.type!==W||pe.texture!==Re)&&(le!==ae&&(s.activeTexture(ae),le=ae),s.bindTexture(W,Re||Se[W]),pe.type=W,pe.texture=Re)}function J(){const W=se[le];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ve(){try{s.texSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function tt(){try{s.texImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function nt(W){Le.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),Le.copy(W))}function ke(W){Z.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Z.copy(W))}function mt(W,Re){let ae=m.get(Re);ae===void 0&&(ae=new WeakMap,m.set(Re,ae));let pe=ae.get(W);pe===void 0&&(pe=s.getUniformBlockIndex(Re,W.name),ae.set(W,pe))}function ot(W,Re){const pe=m.get(Re).get(W);p.get(Re)!==pe&&(s.uniformBlockBinding(Re,pe,W.__bindingPointIndex),p.set(Re,pe))}function Rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},le=null,se={},x={},_=new WeakMap,M=[],E=null,A=!1,S=null,y=null,N=null,P=null,T=null,j=null,F=null,U=new St(0,0,0),B=0,L=!1,R=null,z=null,ie=null,Q=null,de=null,Le.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:ve,disable:Ae,bindFramebuffer:Ie,drawBuffers:Ke,useProgram:Ye,setBlending:q,setMaterial:mn,setFlipSided:vt,setCullFace:pt,setLineWidth:Ze,setPolygonOffset:bt,setScissorTest:$e,activeTexture:D,bindTexture:C,unbindTexture:J,compressedTexImage2D:me,compressedTexImage3D:_e,texImage2D:Oe,texImage3D:tt,updateUBOMapping:mt,uniformBlockBinding:ot,texStorage2D:ft,texStorage3D:Me,texSubImage2D:fe,texSubImage3D:Ve,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ue,scissor:nt,viewport:ke,reset:Rt}}function Om(s,e,t,r){const o=wE(r);switch(t){case ng:return s*e;case rg:return s*e;case sg:return s*e*2;case ag:return s*e/o.components*o.byteLength;case Zd:return s*e/o.components*o.byteLength;case og:return s*e*2/o.components*o.byteLength;case Jd:return s*e*2/o.components*o.byteLength;case ig:return s*e*3/o.components*o.byteLength;case di:return s*e*4/o.components*o.byteLength;case Qd:return s*e*4/o.components*o.byteLength;case wl:case Tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Al:case Cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _d:case yd:return Math.max(s,16)*Math.max(e,8)/4;case vd:case xd:return Math.max(s,8)*Math.max(e,8)/2;case Sd:case Md:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ed:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Td:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case bd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ld:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Id:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Od:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Rl:case kd:case zd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case lg:case Bd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Hd:case Vd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wE(s){switch(s){case Gi:case Qm:return{byteLength:1,components:1};case Ha:case eg:case Va:return{byteLength:2,components:1};case $d:case Kd:return{byteLength:2,components:4};case Kr:case qd:case Bi:return{byteLength:4,components:1};case tg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function TE(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new et,v=new WeakMap;let x;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,C){return M?new OffscreenCanvas(D,C):Pl("canvas")}function A(D,C,J){let me=1;const _e=$e(D);if((_e.width>J||_e.height>J)&&(me=J/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const fe=Math.floor(me*_e.width),Ve=Math.floor(me*_e.height);x===void 0&&(x=E(fe,Ve));const Ce=C?E(fe,Ve):x;return Ce.width=fe,Ce.height=Ve,Ce.getContext("2d").drawImage(D,0,0,fe,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+fe+"x"+Ve+")."),Ce}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),D;return D}function S(D){return D.generateMipmaps}function y(D){s.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(D,C,J,me,_e=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let fe=C;if(C===s.RED&&(J===s.FLOAT&&(fe=s.R32F),J===s.HALF_FLOAT&&(fe=s.R16F),J===s.UNSIGNED_BYTE&&(fe=s.R8)),C===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.R8UI),J===s.UNSIGNED_SHORT&&(fe=s.R16UI),J===s.UNSIGNED_INT&&(fe=s.R32UI),J===s.BYTE&&(fe=s.R8I),J===s.SHORT&&(fe=s.R16I),J===s.INT&&(fe=s.R32I)),C===s.RG&&(J===s.FLOAT&&(fe=s.RG32F),J===s.HALF_FLOAT&&(fe=s.RG16F),J===s.UNSIGNED_BYTE&&(fe=s.RG8)),C===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.RG8UI),J===s.UNSIGNED_SHORT&&(fe=s.RG16UI),J===s.UNSIGNED_INT&&(fe=s.RG32UI),J===s.BYTE&&(fe=s.RG8I),J===s.SHORT&&(fe=s.RG16I),J===s.INT&&(fe=s.RG32I)),C===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),J===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),J===s.UNSIGNED_INT&&(fe=s.RGB32UI),J===s.BYTE&&(fe=s.RGB8I),J===s.SHORT&&(fe=s.RGB16I),J===s.INT&&(fe=s.RGB32I)),C===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),J===s.UNSIGNED_INT&&(fe=s.RGBA32UI),J===s.BYTE&&(fe=s.RGBA8I),J===s.SHORT&&(fe=s.RGBA16I),J===s.INT&&(fe=s.RGBA32I)),C===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),C===s.RGBA){const Ve=_e?Dl:wt.getTransfer(me);J===s.FLOAT&&(fe=s.RGBA32F),J===s.HALF_FLOAT&&(fe=s.RGBA16F),J===s.UNSIGNED_BYTE&&(fe=Ve===Pt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function T(D,C){let J;return D?C===null||C===Kr||C===Gs?J=s.DEPTH24_STENCIL8:C===Bi?J=s.DEPTH32F_STENCIL8:C===Ha&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Kr||C===Gs?J=s.DEPTH_COMPONENT24:C===Bi?J=s.DEPTH_COMPONENT32F:C===Ha&&(J=s.DEPTH_COMPONENT16),J}function j(D,C){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==hi&&D.minFilter!==yi?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function F(D){const C=D.target;C.removeEventListener("dispose",F),B(C),C.isVideoTexture&&v.delete(C)}function U(D){const C=D.target;C.removeEventListener("dispose",U),R(C)}function B(D){const C=r.get(D);if(C.__webglInit===void 0)return;const J=D.source,me=_.get(J);if(me){const _e=me[C.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&L(D),Object.keys(me).length===0&&_.delete(J)}r.remove(D)}function L(D){const C=r.get(D);s.deleteTexture(C.__webglTexture);const J=D.source,me=_.get(J);delete me[C.__cacheKey],u.memory.textures--}function R(D){const C=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(C.__webglFramebuffer[me]))for(let _e=0;_e<C.__webglFramebuffer[me].length;_e++)s.deleteFramebuffer(C.__webglFramebuffer[me][_e]);else s.deleteFramebuffer(C.__webglFramebuffer[me]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[me])}else{if(Array.isArray(C.__webglFramebuffer))for(let me=0;me<C.__webglFramebuffer.length;me++)s.deleteFramebuffer(C.__webglFramebuffer[me]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let me=0;me<C.__webglColorRenderbuffer.length;me++)C.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[me]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const J=D.textures;for(let me=0,_e=J.length;me<_e;me++){const fe=r.get(J[me]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),u.memory.textures--),r.remove(J[me])}r.remove(D)}let z=0;function ie(){z=0}function Q(){const D=z;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),z+=1,D}function de(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function he(D,C){const J=r.get(D);if(D.isVideoTexture&&Ze(D),D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){const me=D.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(J,D,C);return}}t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+C)}function ce(D,C){const J=r.get(D);if(D.version>0&&J.__version!==D.version){Z(J,D,C);return}t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+C)}function ue(D,C){const J=r.get(D);if(D.version>0&&J.__version!==D.version){Z(J,D,C);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+C)}function H(D,C){const J=r.get(D);if(D.version>0&&J.__version!==D.version){oe(J,D,C);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+C)}const le={[md]:s.REPEAT,[qr]:s.CLAMP_TO_EDGE,[gd]:s.MIRRORED_REPEAT},se={[hi]:s.NEAREST,[d0]:s.NEAREST_MIPMAP_NEAREST,[el]:s.NEAREST_MIPMAP_LINEAR,[yi]:s.LINEAR,[yu]:s.LINEAR_MIPMAP_NEAREST,[$r]:s.LINEAR_MIPMAP_LINEAR},O={[m0]:s.NEVER,[S0]:s.ALWAYS,[g0]:s.LESS,[ug]:s.LEQUAL,[v0]:s.EQUAL,[y0]:s.GEQUAL,[_0]:s.GREATER,[x0]:s.NOTEQUAL};function re(D,C){if(C.type===Bi&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===yi||C.magFilter===yu||C.magFilter===el||C.magFilter===$r||C.minFilter===yi||C.minFilter===yu||C.minFilter===el||C.minFilter===$r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,le[C.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,le[C.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,le[C.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,se[C.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,se[C.minFilter]),C.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,O[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===hi||C.minFilter!==el&&C.minFilter!==$r||C.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||r.get(C).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),r.get(C).__currentAnisotropy=C.anisotropy}}}function Le(D,C){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",F));const me=C.source;let _e=_.get(me);_e===void 0&&(_e={},_.set(me,_e));const fe=de(C);if(fe!==D.__cacheKey){_e[fe]===void 0&&(_e[fe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,J=!0),_e[fe].usedTimes++;const Ve=_e[D.__cacheKey];Ve!==void 0&&(_e[D.__cacheKey].usedTimes--,Ve.usedTimes===0&&L(C)),D.__cacheKey=fe,D.__webglTexture=_e[fe].texture}return J}function Z(D,C,J){let me=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(me=s.TEXTURE_3D);const _e=Le(D,C),fe=C.source;t.bindTexture(me,D.__webglTexture,s.TEXTURE0+J);const Ve=r.get(fe);if(fe.version!==Ve.__version||_e===!0){t.activeTexture(s.TEXTURE0+J);const Ce=wt.getPrimaries(wt.workingColorSpace),Ue=C.colorSpace===xr?null:wt.getPrimaries(C.colorSpace),ft=C.colorSpace===xr||Ce===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Me=A(C.image,!1,o.maxTextureSize);Me=bt(C,Me);const Oe=l.convert(C.format,C.colorSpace),tt=l.convert(C.type);let nt=P(C.internalFormat,Oe,tt,C.colorSpace,C.isVideoTexture);re(me,C);let ke;const mt=C.mipmaps,ot=C.isVideoTexture!==!0,Rt=Ve.__version===void 0||_e===!0,W=fe.dataReady,Re=j(C,Me);if(C.isDepthTexture)nt=T(C.format===js,C.type),Rt&&(ot?t.texStorage2D(s.TEXTURE_2D,1,nt,Me.width,Me.height):t.texImage2D(s.TEXTURE_2D,0,nt,Me.width,Me.height,0,Oe,tt,null));else if(C.isDataTexture)if(mt.length>0){ot&&Rt&&t.texStorage2D(s.TEXTURE_2D,Re,nt,mt[0].width,mt[0].height);for(let ae=0,pe=mt.length;ae<pe;ae++)ke=mt[ae],ot?W&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,ke.width,ke.height,Oe,tt,ke.data):t.texImage2D(s.TEXTURE_2D,ae,nt,ke.width,ke.height,0,Oe,tt,ke.data);C.generateMipmaps=!1}else ot?(Rt&&t.texStorage2D(s.TEXTURE_2D,Re,nt,Me.width,Me.height),W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,tt,Me.data)):t.texImage2D(s.TEXTURE_2D,0,nt,Me.width,Me.height,0,Oe,tt,Me.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ot&&Rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,nt,mt[0].width,mt[0].height,Me.depth);for(let ae=0,pe=mt.length;ae<pe;ae++)if(ke=mt[ae],C.format!==di)if(Oe!==null)if(ot){if(W)if(C.layerUpdates.size>0){const Pe=Om(ke.width,ke.height,C.format,C.type);for(const Ne of C.layerUpdates){const lt=ke.data.subarray(Ne*Pe/ke.data.BYTES_PER_ELEMENT,(Ne+1)*Pe/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,Ne,ke.width,ke.height,1,Oe,lt)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,ke.width,ke.height,Me.depth,Oe,ke.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,nt,ke.width,ke.height,Me.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?W&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,ke.width,ke.height,Me.depth,Oe,tt,ke.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ae,nt,ke.width,ke.height,Me.depth,0,Oe,tt,ke.data)}else{ot&&Rt&&t.texStorage2D(s.TEXTURE_2D,Re,nt,mt[0].width,mt[0].height);for(let ae=0,pe=mt.length;ae<pe;ae++)ke=mt[ae],C.format!==di?Oe!==null?ot?W&&t.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,ke.width,ke.height,Oe,ke.data):t.compressedTexImage2D(s.TEXTURE_2D,ae,nt,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?W&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,ke.width,ke.height,Oe,tt,ke.data):t.texImage2D(s.TEXTURE_2D,ae,nt,ke.width,ke.height,0,Oe,tt,ke.data)}else if(C.isDataArrayTexture)if(ot){if(Rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,nt,Me.width,Me.height,Me.depth),W)if(C.layerUpdates.size>0){const ae=Om(Me.width,Me.height,C.format,C.type);for(const pe of C.layerUpdates){const Pe=Me.data.subarray(pe*ae/Me.data.BYTES_PER_ELEMENT,(pe+1)*ae/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,Oe,tt,Pe)}C.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,tt,Me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,nt,Me.width,Me.height,Me.depth,0,Oe,tt,Me.data);else if(C.isData3DTexture)ot?(Rt&&t.texStorage3D(s.TEXTURE_3D,Re,nt,Me.width,Me.height,Me.depth),W&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,tt,Me.data)):t.texImage3D(s.TEXTURE_3D,0,nt,Me.width,Me.height,Me.depth,0,Oe,tt,Me.data);else if(C.isFramebufferTexture){if(Rt)if(ot)t.texStorage2D(s.TEXTURE_2D,Re,nt,Me.width,Me.height);else{let ae=Me.width,pe=Me.height;for(let Pe=0;Pe<Re;Pe++)t.texImage2D(s.TEXTURE_2D,Pe,nt,ae,pe,0,Oe,tt,null),ae>>=1,pe>>=1}}else if(mt.length>0){if(ot&&Rt){const ae=$e(mt[0]);t.texStorage2D(s.TEXTURE_2D,Re,nt,ae.width,ae.height)}for(let ae=0,pe=mt.length;ae<pe;ae++)ke=mt[ae],ot?W&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,Oe,tt,ke):t.texImage2D(s.TEXTURE_2D,ae,nt,Oe,tt,ke);C.generateMipmaps=!1}else if(ot){if(Rt){const ae=$e(Me);t.texStorage2D(s.TEXTURE_2D,Re,nt,ae.width,ae.height)}W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,tt,Me)}else t.texImage2D(s.TEXTURE_2D,0,nt,Oe,tt,Me);S(C)&&y(me),Ve.__version=fe.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function oe(D,C,J){if(C.image.length!==6)return;const me=Le(D,C),_e=C.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+J);const fe=r.get(_e);if(_e.version!==fe.__version||me===!0){t.activeTexture(s.TEXTURE0+J);const Ve=wt.getPrimaries(wt.workingColorSpace),Ce=C.colorSpace===xr?null:wt.getPrimaries(C.colorSpace),Ue=C.colorSpace===xr||Ve===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ft=C.isCompressedTexture||C.image[0].isCompressedTexture,Me=C.image[0]&&C.image[0].isDataTexture,Oe=[];for(let pe=0;pe<6;pe++)!ft&&!Me?Oe[pe]=A(C.image[pe],!0,o.maxCubemapSize):Oe[pe]=Me?C.image[pe].image:C.image[pe],Oe[pe]=bt(C,Oe[pe]);const tt=Oe[0],nt=l.convert(C.format,C.colorSpace),ke=l.convert(C.type),mt=P(C.internalFormat,nt,ke,C.colorSpace),ot=C.isVideoTexture!==!0,Rt=fe.__version===void 0||me===!0,W=_e.dataReady;let Re=j(C,tt);re(s.TEXTURE_CUBE_MAP,C);let ae;if(ft){ot&&Rt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,mt,tt.width,tt.height);for(let pe=0;pe<6;pe++){ae=Oe[pe].mipmaps;for(let Pe=0;Pe<ae.length;Pe++){const Ne=ae[Pe];C.format!==di?nt!==null?ot?W&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,0,0,Ne.width,Ne.height,nt,Ne.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,mt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,0,0,Ne.width,Ne.height,nt,ke,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,mt,Ne.width,Ne.height,0,nt,ke,Ne.data)}}}else{if(ae=C.mipmaps,ot&&Rt){ae.length>0&&Re++;const pe=$e(Oe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,mt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){ot?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Oe[pe].width,Oe[pe].height,nt,ke,Oe[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,mt,Oe[pe].width,Oe[pe].height,0,nt,ke,Oe[pe].data);for(let Pe=0;Pe<ae.length;Pe++){const lt=ae[Pe].image[pe].image;ot?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,0,0,lt.width,lt.height,nt,ke,lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,mt,lt.width,lt.height,0,nt,ke,lt.data)}}else{ot?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,nt,ke,Oe[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,mt,nt,ke,Oe[pe]);for(let Pe=0;Pe<ae.length;Pe++){const Ne=ae[Pe];ot?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,0,0,nt,ke,Ne.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,mt,nt,ke,Ne.image[pe])}}}S(C)&&y(s.TEXTURE_CUBE_MAP),fe.__version=_e.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function Se(D,C,J,me,_e,fe){const Ve=l.convert(J.format,J.colorSpace),Ce=l.convert(J.type),Ue=P(J.internalFormat,Ve,Ce,J.colorSpace),ft=r.get(C),Me=r.get(J);if(Me.__renderTarget=C,!ft.__hasExternalTextures){const Oe=Math.max(1,C.width>>fe),tt=Math.max(1,C.height>>fe);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,fe,Ue,Oe,tt,C.depth,0,Ve,Ce,null):t.texImage2D(_e,fe,Ue,Oe,tt,0,Ve,Ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),pt(C)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,_e,Me.__webglTexture,0,vt(C)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,_e,Me.__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(D,C,J){if(s.bindRenderbuffer(s.RENDERBUFFER,D),C.depthBuffer){const me=C.depthTexture,_e=me&&me.isDepthTexture?me.type:null,fe=T(C.stencilBuffer,_e),Ve=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=vt(C);pt(C)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,fe,C.width,C.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,fe,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,fe,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,D)}else{const me=C.textures;for(let _e=0;_e<me.length;_e++){const fe=me[_e],Ve=l.convert(fe.format,fe.colorSpace),Ce=l.convert(fe.type),Ue=P(fe.internalFormat,Ve,Ce,fe.colorSpace),ft=vt(C);J&&pt(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Ue,C.width,C.height):pt(C)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,Ue,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(C.depthTexture);me.__renderTarget=C,(!me.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),he(C.depthTexture,0);const _e=me.__webglTexture,fe=vt(C);if(C.depthTexture.format===ks)pt(C)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(C.depthTexture.format===js)pt(C)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ie(D){const C=r.get(D),J=D.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==D.depthTexture){const me=D.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),me){const _e=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),C.__depthDisposeCallback=_e}C.__boundDepthTexture=me}if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Ae(C.__webglFramebuffer,D)}else if(J){C.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[me]),C.__webglDepthbuffer[me]===void 0)C.__webglDepthbuffer[me]=s.createRenderbuffer(),ve(C.__webglDepthbuffer[me],D,!1);else{const _e=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=C.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),ve(C.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,_e)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(D,C,J){const me=r.get(D);C!==void 0&&Se(me.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Ie(D)}function Ye(D){const C=D.texture,J=r.get(D),me=r.get(C);D.addEventListener("dispose",U);const _e=D.textures,fe=D.isWebGLCubeRenderTarget===!0,Ve=_e.length>1;if(Ve||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=C.version,u.memory.textures++),fe){J.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(C.mipmaps&&C.mipmaps.length>0){J.__webglFramebuffer[Ce]=[];for(let Ue=0;Ue<C.mipmaps.length;Ue++)J.__webglFramebuffer[Ce][Ue]=s.createFramebuffer()}else J.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ce=0;Ce<C.mipmaps.length;Ce++)J.__webglFramebuffer[Ce]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let Ce=0,Ue=_e.length;Ce<Ue;Ce++){const ft=r.get(_e[Ce]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&pt(D)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ce=0;Ce<_e.length;Ce++){const Ue=_e[Ce];J.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Ce]);const ft=l.convert(Ue.format,Ue.colorSpace),Me=l.convert(Ue.type),Oe=P(Ue.internalFormat,ft,Me,Ue.colorSpace,D.isXRRenderTarget===!0),tt=vt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,Oe,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,J.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),ve(J.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),re(s.TEXTURE_CUBE_MAP,C);for(let Ce=0;Ce<6;Ce++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ue=0;Ue<C.mipmaps.length;Ue++)Se(J.__webglFramebuffer[Ce][Ue],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ue);else Se(J.__webglFramebuffer[Ce],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);S(C)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let Ce=0,Ue=_e.length;Ce<Ue;Ce++){const ft=_e[Ce],Me=r.get(ft);t.bindTexture(s.TEXTURE_2D,Me.__webglTexture),re(s.TEXTURE_2D,ft),Se(J.__webglFramebuffer,D,ft,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),S(ft)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ce=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,me.__webglTexture),re(Ce,C),C.mipmaps&&C.mipmaps.length>0)for(let Ue=0;Ue<C.mipmaps.length;Ue++)Se(J.__webglFramebuffer[Ue],D,C,s.COLOR_ATTACHMENT0,Ce,Ue);else Se(J.__webglFramebuffer,D,C,s.COLOR_ATTACHMENT0,Ce,0);S(C)&&y(Ce),t.unbindTexture()}D.depthBuffer&&Ie(D)}function st(D){const C=D.textures;for(let J=0,me=C.length;J<me;J++){const _e=C[J];if(S(_e)){const fe=N(D),Ve=r.get(_e).__webglTexture;t.bindTexture(fe,Ve),y(fe),t.unbindTexture()}}}const xt=[],q=[];function mn(D){if(D.samples>0){if(pt(D)===!1){const C=D.textures,J=D.width,me=D.height;let _e=s.COLOR_BUFFER_BIT;const fe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(D),Ce=C.length>1;if(Ce)for(let Ue=0;Ue<C.length;Ue++)t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ue=0;Ue<C.length;Ue++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const ft=r.get(C[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,J,me,0,0,J,me,_e,s.NEAREST),p===!0&&(xt.length=0,q.length=0,xt.push(s.COLOR_ATTACHMENT0+Ue),D.depthBuffer&&D.resolveDepthBuffer===!1&&(xt.push(fe),q.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,q)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Ue=0;Ue<C.length;Ue++){t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const ft=r.get(C[Ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,ft,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const C=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function vt(D){return Math.min(o.maxSamples,D.samples)}function pt(D){const C=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ze(D){const C=u.render.frame;v.get(D)!==C&&(v.set(D,C),D.update())}function bt(D,C){const J=D.colorSpace,me=D.format,_e=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==Xs&&J!==xr&&(wt.getTransfer(J)===Pt?(me!==di||_e!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),C}function $e(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=Q,this.resetTextureUnits=ie,this.setTexture2D=he,this.setTexture2DArray=ce,this.setTexture3D=ue,this.setTextureCube=H,this.rebindTextures=Ke,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=pt}function AE(s,e){function t(r,o=xr){let l;const u=wt.getTransfer(o);if(r===Gi)return s.UNSIGNED_BYTE;if(r===$d)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Kd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===tg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Qm)return s.BYTE;if(r===eg)return s.SHORT;if(r===Ha)return s.UNSIGNED_SHORT;if(r===qd)return s.INT;if(r===Kr)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===Va)return s.HALF_FLOAT;if(r===ng)return s.ALPHA;if(r===ig)return s.RGB;if(r===di)return s.RGBA;if(r===rg)return s.LUMINANCE;if(r===sg)return s.LUMINANCE_ALPHA;if(r===ks)return s.DEPTH_COMPONENT;if(r===js)return s.DEPTH_STENCIL;if(r===ag)return s.RED;if(r===Zd)return s.RED_INTEGER;if(r===og)return s.RG;if(r===Jd)return s.RG_INTEGER;if(r===Qd)return s.RGBA_INTEGER;if(r===wl||r===Tl||r===Al||r===Cl)if(u===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===wl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Tl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Al)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Cl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===wl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Tl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Al)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Cl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vd||r===_d||r===xd||r===yd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===vd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_d)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===xd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===yd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sd||r===Md||r===Ed)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Sd||r===Md)return u===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Ed)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wd||r===Td||r===Ad||r===Cd||r===Rd||r===bd||r===Nd||r===Pd||r===Ld||r===Dd||r===Id||r===Ud||r===Fd||r===Od)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===wd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Td)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ad)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Cd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Rd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Pd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ld)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Dd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Id)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ud)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Od)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rl||r===kd||r===zd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Rl)return u===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===kd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===zd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lg||r===Bd||r===Hd||r===Vd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Rl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Bd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Hd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Gs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class CE extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Oa extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RE={type:"move"};class $u{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const A of e.hand.values()){const S=t.getJointPose(A,r),y=this._getHandJoint(m,A);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const v=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],_=v.position.distanceTo(x.position),M=.02,E=.005;m.inputState.pinching&&_>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(RE)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Oa;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const bE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NE=`
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

}`;class PE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Dn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Er({vertexShader:bE,fragmentShader:NE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pn(new Ul(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LE extends Ys{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",p=1,m=null,v=null,x=null,_=null,M=null,E=null;const A=new PE,S=t.getContextAttributes();let y=null,N=null;const P=[],T=[],j=new et;let F=null;const U=new Bn;U.viewport=new Lt;const B=new Bn;B.viewport=new Lt;const L=[U,B],R=new CE;let z=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=P[Z];return oe===void 0&&(oe=new $u,P[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=P[Z];return oe===void 0&&(oe=new $u,P[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=P[Z];return oe===void 0&&(oe=new $u,P[Z]=oe),oe.getHandSpace()};function Q(Z){const oe=T.indexOf(Z.inputSource);if(oe===-1)return;const Se=P[oe];Se!==void 0&&(Se.update(Z.inputSource,Z.frame,m||u),Se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function de(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",de),o.removeEventListener("inputsourceschange",he);for(let Z=0;Z<P.length;Z++){const oe=T[Z];oe!==null&&(T[Z]=null,P[Z].disconnect(oe))}z=null,ie=null,A.reset(),e.setRenderTarget(y),M=null,_=null,x=null,o=null,N=null,Le.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(j.width,j.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){l=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",de),o.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(j),o.renderState.layers===void 0){const oe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,oe),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new Zr(M.framebufferWidth,M.framebufferHeight,{format:di,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let oe=null,Se=null,ve=null;S.depth&&(ve=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=S.stencil?js:ks,Se=S.stencil?Gs:Kr);const Ae={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:l};x=new XRWebGLBinding(o,t),_=x.createProjectionLayer(Ae),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),N=new Zr(_.textureWidth,_.textureHeight,{format:di,type:Gi,depthTexture:new wg(_.textureWidth,_.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(d),Le.setContext(o),Le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function he(Z){for(let oe=0;oe<Z.removed.length;oe++){const Se=Z.removed[oe],ve=T.indexOf(Se);ve>=0&&(T[ve]=null,P[ve].disconnect(Se))}for(let oe=0;oe<Z.added.length;oe++){const Se=Z.added[oe];let ve=T.indexOf(Se);if(ve===-1){for(let Ie=0;Ie<P.length;Ie++)if(Ie>=T.length){T.push(Se),ve=Ie;break}else if(T[Ie]===null){T[Ie]=Se,ve=Ie;break}if(ve===-1)break}const Ae=P[ve];Ae&&Ae.connect(Se)}}const ce=new V,ue=new V;function H(Z,oe,Se){ce.setFromMatrixPosition(oe.matrixWorld),ue.setFromMatrixPosition(Se.matrixWorld);const ve=ce.distanceTo(ue),Ae=oe.projectionMatrix.elements,Ie=Se.projectionMatrix.elements,Ke=Ae[14]/(Ae[10]-1),Ye=Ae[14]/(Ae[10]+1),st=(Ae[9]+1)/Ae[5],xt=(Ae[9]-1)/Ae[5],q=(Ae[8]-1)/Ae[0],mn=(Ie[8]+1)/Ie[0],vt=Ke*q,pt=Ke*mn,Ze=ve/(-q+mn),bt=Ze*-q;if(oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(bt),Z.translateZ(Ze),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ae[10]===-1)Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const $e=Ke+Ze,D=Ye+Ze,C=vt-bt,J=pt+(ve-bt),me=st*Ye/D*$e,_e=xt*Ye/D*$e;Z.projectionMatrix.makePerspective(C,J,me,_e,$e,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function le(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let oe=Z.near,Se=Z.far;A.texture!==null&&(A.depthNear>0&&(oe=A.depthNear),A.depthFar>0&&(Se=A.depthFar)),R.near=B.near=U.near=oe,R.far=B.far=U.far=Se,(z!==R.near||ie!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,ie=R.far),U.layers.mask=Z.layers.mask|2,B.layers.mask=Z.layers.mask|4,R.layers.mask=U.layers.mask|B.layers.mask;const ve=Z.parent,Ae=R.cameras;le(R,ve);for(let Ie=0;Ie<Ae.length;Ie++)le(Ae[Ie],ve);Ae.length===2?H(R,U,B):R.projectionMatrix.copy(U.projectionMatrix),se(Z,R,ve)};function se(Z,oe,Se){Se===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(Se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Gd*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&M===null))return p},this.setFoveation=function(Z){p=Z,_!==null&&(_.fixedFoveation=Z),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Z)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(R)};let O=null;function re(Z,oe){if(v=oe.getViewerPose(m||u),E=oe,v!==null){const Se=v.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let ve=!1;Se.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let Ie=0;Ie<Se.length;Ie++){const Ke=Se[Ie];let Ye=null;if(M!==null)Ye=M.getViewport(Ke);else{const xt=x.getViewSubImage(_,Ke);Ye=xt.viewport,Ie===0&&(e.setRenderTargetTextures(N,xt.colorTexture,_.ignoreDepthValues?void 0:xt.depthStencilTexture),e.setRenderTarget(N))}let st=L[Ie];st===void 0&&(st=new Bn,st.layers.enable(Ie),st.viewport=new Lt,L[Ie]=st),st.matrix.fromArray(Ke.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Ke.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ie===0&&(R.matrix.copy(st.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(st)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ie=x.getDepthInformation(Se[0]);Ie&&Ie.isValid&&Ie.texture&&A.init(e,Ie,o.renderState)}}for(let Se=0;Se<P.length;Se++){const ve=T[Se],Ae=P[Se];ve!==null&&Ae!==void 0&&Ae.update(ve,oe,m||u)}O&&O(Z,oe),oe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:oe}),E=null}const Le=new Eg;Le.setAnimationLoop(re),this.setAnimationLoop=function(Z){O=Z},this.dispose=function(){}}}const Gr=new Si,DE=new kt;function IE(s,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,yg(s)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,N,P,T){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),x(S,y)):y.isMeshPhongMaterial?(l(S,y),v(S,y)):y.isMeshStandardMaterial?(l(S,y),_(S,y),y.isMeshPhysicalMaterial&&M(S,y,T)):y.isMeshMatcapMaterial?(l(S,y),E(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),A(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&d(S,y)):y.isPointsMaterial?p(S,y,N,P):y.isSpriteMaterial?m(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Ln&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Ln&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const N=e.get(y),P=N.envMap,T=N.envMapRotation;P&&(S.envMap.value=P,Gr.copy(T),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),S.envMapRotation.value.setFromMatrix4(DE.makeRotationFromEuler(Gr)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function d(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function p(S,y,N,P){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*N,S.scale.value=P*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function v(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function x(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function M(S,y,N){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Ln&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function A(S,y){const N=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function UE(s,e,t,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,P){const T=P.program;r.uniformBlockBinding(N,T)}function m(N,P){let T=o[N.id];T===void 0&&(E(N),T=v(N),o[N.id]=T,N.addEventListener("dispose",S));const j=P.program;r.updateUBOMapping(N,j);const F=e.render.frame;l[N.id]!==F&&(_(N),l[N.id]=F)}function v(N){const P=x();N.__bindingPointIndex=P;const T=s.createBuffer(),j=N.__size,F=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,j,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,T),T}function x(){for(let N=0;N<d;N++)if(u.indexOf(N)===-1)return u.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(N){const P=o[N.id],T=N.uniforms,j=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let F=0,U=T.length;F<U;F++){const B=Array.isArray(T[F])?T[F]:[T[F]];for(let L=0,R=B.length;L<R;L++){const z=B[L];if(M(z,F,L,j)===!0){const ie=z.__offset,Q=Array.isArray(z.value)?z.value:[z.value];let de=0;for(let he=0;he<Q.length;he++){const ce=Q[he],ue=A(ce);typeof ce=="number"||typeof ce=="boolean"?(z.__data[0]=ce,s.bufferSubData(s.UNIFORM_BUFFER,ie+de,z.__data)):ce.isMatrix3?(z.__data[0]=ce.elements[0],z.__data[1]=ce.elements[1],z.__data[2]=ce.elements[2],z.__data[3]=0,z.__data[4]=ce.elements[3],z.__data[5]=ce.elements[4],z.__data[6]=ce.elements[5],z.__data[7]=0,z.__data[8]=ce.elements[6],z.__data[9]=ce.elements[7],z.__data[10]=ce.elements[8],z.__data[11]=0):(ce.toArray(z.__data,de),de+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ie,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(N,P,T,j){const F=N.value,U=P+"_"+T;if(j[U]===void 0)return typeof F=="number"||typeof F=="boolean"?j[U]=F:j[U]=F.clone(),!0;{const B=j[U];if(typeof F=="number"||typeof F=="boolean"){if(B!==F)return j[U]=F,!0}else if(B.equals(F)===!1)return B.copy(F),!0}return!1}function E(N){const P=N.uniforms;let T=0;const j=16;for(let U=0,B=P.length;U<B;U++){const L=Array.isArray(P[U])?P[U]:[P[U]];for(let R=0,z=L.length;R<z;R++){const ie=L[R],Q=Array.isArray(ie.value)?ie.value:[ie.value];for(let de=0,he=Q.length;de<he;de++){const ce=Q[de],ue=A(ce),H=T%j,le=H%ue.boundary,se=H+le;T+=le,se!==0&&j-se<ue.storage&&(T+=j-se),ie.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=T,T+=ue.storage}}}const F=T%j;return F>0&&(T+=j-F),N.__size=T,N.__cache={},this}function A(N){const P={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(P.boundary=4,P.storage=4):N.isVector2?(P.boundary=8,P.storage=8):N.isVector3||N.isColor?(P.boundary=16,P.storage=12):N.isVector4?(P.boundary=16,P.storage=16):N.isMatrix3?(P.boundary=48,P.storage=48):N.isMatrix4?(P.boundary=64,P.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),P}function S(N){const P=N.target;P.removeEventListener("dispose",S);const T=u.indexOf(P.__bindingPointIndex);u.splice(T,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function y(){for(const N in o)s.deleteBuffer(o[N]);u=[],o={},l={}}return{bind:p,update:m,dispose:y}}class FE{constructor(e={}){const{canvas:t=E0(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const E=new Uint32Array(4),A=new Int32Array(4);let S=null,y=null;const N=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Sr,this.toneMappingExposure=1;const T=this;let j=!1,F=0,U=0,B=null,L=-1,R=null;const z=new Lt,ie=new Lt;let Q=null;const de=new St(0);let he=0,ce=t.width,ue=t.height,H=1,le=null,se=null;const O=new Lt(0,0,ce,ue),re=new Lt(0,0,ce,ue);let Le=!1;const Z=new eh;let oe=!1,Se=!1;const ve=new kt,Ae=new kt,Ie=new V,Ke=new Lt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function xt(){return B===null?H:1}let q=r;function mn(b,X){return t.getContext(b,X)}try{const b={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yd}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),q===null){const X="webgl2";if(q=mn(X,b),q===null)throw mn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let vt,pt,Ze,bt,$e,D,C,J,me,_e,fe,Ve,Ce,Ue,ft,Me,Oe,tt,nt,ke,mt,ot,Rt,W;function Re(){vt=new HS(q),vt.init(),ot=new AE(q,vt),pt=new IS(q,vt,e,ot),Ze=new EE(q,vt),pt.reverseDepthBuffer&&_&&Ze.buffers.depth.setReversed(!0),bt=new jS(q),$e=new lE,D=new TE(q,vt,Ze,$e,pt,ot,bt),C=new FS(T),J=new BS(T),me=new K0(q),Rt=new LS(q,me),_e=new VS(q,me,bt,Rt),fe=new XS(q,_e,me,bt),nt=new WS(q,pt,D),Me=new US($e),Ve=new oE(T,C,J,vt,pt,Rt,Me),Ce=new IE(T,$e),Ue=new uE,ft=new gE(vt),tt=new PS(T,C,J,Ze,fe,M,p),Oe=new SE(T,fe,pt),W=new UE(q,bt,pt,Ze),ke=new DS(q,vt,bt),mt=new GS(q,vt,bt),bt.programs=Ve.programs,T.capabilities=pt,T.extensions=vt,T.properties=$e,T.renderLists=Ue,T.shadowMap=Oe,T.state=Ze,T.info=bt}Re();const ae=new LE(T,q);this.xr=ae,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const b=vt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=vt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(ce,ue,!1))},this.getSize=function(b){return b.set(ce,ue)},this.setSize=function(b,X,te=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=b,ue=X,t.width=Math.floor(b*H),t.height=Math.floor(X*H),te===!0&&(t.style.width=b+"px",t.style.height=X+"px"),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(ce*H,ue*H).floor()},this.setDrawingBufferSize=function(b,X,te){ce=b,ue=X,H=te,t.width=Math.floor(b*te),t.height=Math.floor(X*te),this.setViewport(0,0,b,X)},this.getCurrentViewport=function(b){return b.copy(z)},this.getViewport=function(b){return b.copy(O)},this.setViewport=function(b,X,te,ne){b.isVector4?O.set(b.x,b.y,b.z,b.w):O.set(b,X,te,ne),Ze.viewport(z.copy(O).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(re)},this.setScissor=function(b,X,te,ne){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,X,te,ne),Ze.scissor(ie.copy(re).multiplyScalar(H).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(b){Ze.setScissorTest(Le=b)},this.setOpaqueSort=function(b){le=b},this.setTransparentSort=function(b){se=b},this.getClearColor=function(b){return b.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(b=!0,X=!0,te=!0){let ne=0;if(b){let Y=!1;if(B!==null){const Te=B.texture.format;Y=Te===Qd||Te===Jd||Te===Zd}if(Y){const Te=B.texture.type,Ee=Te===Gi||Te===Kr||Te===Ha||Te===Gs||Te===$d||Te===Kd,Ge=tt.getClearColor(),Be=tt.getClearAlpha(),it=Ge.r,at=Ge.g,je=Ge.b;Ee?(E[0]=it,E[1]=at,E[2]=je,E[3]=Be,q.clearBufferuiv(q.COLOR,0,E)):(A[0]=it,A[1]=at,A[2]=je,A[3]=Be,q.clearBufferiv(q.COLOR,0,A))}else ne|=q.COLOR_BUFFER_BIT}X&&(ne|=q.DEPTH_BUFFER_BIT),te&&(ne|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Ue.dispose(),ft.dispose(),$e.dispose(),C.dispose(),J.dispose(),fe.dispose(),Rt.dispose(),W.dispose(),Ve.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Jr),ae.removeEventListener("sessionend",Wi),Mi.stop()};function pe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const b=bt.autoReset,X=Oe.enabled,te=Oe.autoUpdate,ne=Oe.needsUpdate,Y=Oe.type;Re(),bt.autoReset=b,Oe.enabled=X,Oe.autoUpdate=te,Oe.needsUpdate=ne,Oe.type=Y}function Ne(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function lt(b){const X=b.target;X.removeEventListener("dispose",lt),Ut(X)}function Ut(b){Xt(b),$e.remove(b)}function Xt(b){const X=$e.get(b).programs;X!==void 0&&(X.forEach(function(te){Ve.releaseProgram(te)}),b.isShaderMaterial&&Ve.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,te,ne,Y,Te){X===null&&(X=Ye);const Ee=Y.isMesh&&Y.matrixWorld.determinant()<0,Ge=$a(b,X,te,ne,Y);Ze.setMaterial(ne,Ee);let Be=te.index,it=1;if(ne.wireframe===!0){if(Be=_e.getWireframeAttribute(te),Be===void 0)return;it=2}const at=te.drawRange,je=te.attributes.position;let yt=at.start*it,Ct=(at.start+at.count)*it;Te!==null&&(yt=Math.max(yt,Te.start*it),Ct=Math.min(Ct,(Te.start+Te.count)*it)),Be!==null?(yt=Math.max(yt,0),Ct=Math.min(Ct,Be.count)):je!=null&&(yt=Math.max(yt,0),Ct=Math.min(Ct,je.count));const _t=Ct-yt;if(_t<0||_t===1/0)return;Rt.setup(Y,ne,Ge,te,Be);let sn,ct=ke;if(Be!==null&&(sn=me.get(Be),ct=mt,ct.setIndex(sn)),Y.isMesh)ne.wireframe===!0?(Ze.setLineWidth(ne.wireframeLinewidth*xt()),ct.setMode(q.LINES)):ct.setMode(q.TRIANGLES);else if(Y.isLine){let qe=ne.linewidth;qe===void 0&&(qe=1),Ze.setLineWidth(qe*xt()),Y.isLineSegments?ct.setMode(q.LINES):Y.isLineLoop?ct.setMode(q.LINE_LOOP):ct.setMode(q.LINE_STRIP)}else Y.isPoints?ct.setMode(q.POINTS):Y.isSprite&&ct.setMode(q.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ct.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))ct.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const qe=Y._multiDrawStarts,Qn=Y._multiDrawCounts,Tt=Y._multiDrawCount,an=Be?me.get(Be).bytesPerElement:1,ei=$e.get(ne).currentProgram.getUniforms();for(let Yt=0;Yt<Tt;Yt++)ei.setValue(q,"_gl_DrawID",Yt),ct.render(qe[Yt]/an,Qn[Yt])}else if(Y.isInstancedMesh)ct.renderInstances(yt,_t,Y.count);else if(te.isInstancedBufferGeometry){const qe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Qn=Math.min(te.instanceCount,qe);ct.renderInstances(yt,_t,Qn)}else ct.render(yt,_t)};function Mt(b,X,te){b.transparent===!0&&b.side===zi&&b.forceSinglePass===!1?(b.side=Ln,b.needsUpdate=!0,Qr(b,X,te),b.side=Mr,b.needsUpdate=!0,Qr(b,X,te),b.side=zi):Qr(b,X,te)}this.compile=function(b,X,te=null){te===null&&(te=b),y=ft.get(te),y.init(X),P.push(y),te.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),b!==te&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),y.setupLights();const ne=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Te=Y.material;if(Te)if(Array.isArray(Te))for(let Ee=0;Ee<Te.length;Ee++){const Ge=Te[Ee];Mt(Ge,te,Y),ne.add(Ge)}else Mt(Te,te,Y),ne.add(Te)}),P.pop(),y=null,ne},this.compileAsync=function(b,X,te=null){const ne=this.compile(b,X,te);return new Promise(Y=>{function Te(){if(ne.forEach(function(Ee){$e.get(Ee).currentProgram.isReady()&&ne.delete(Ee)}),ne.size===0){Y(b);return}setTimeout(Te,10)}vt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Mn=null;function gn(b){Mn&&Mn(b)}function Jr(){Mi.stop()}function Wi(){Mi.start()}const Mi=new Eg;Mi.setAnimationLoop(gn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(b){Mn=b,ae.setAnimationLoop(b),b===null?Mi.stop():Mi.start()},ae.addEventListener("sessionstart",Jr),ae.addEventListener("sessionend",Wi),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(X),X=ae.getCamera()),b.isScene===!0&&b.onBeforeRender(T,b,X,B),y=ft.get(b,P.length),y.init(X),P.push(y),Ae.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Z.setFromProjectionMatrix(Ae),Se=this.localClippingEnabled,oe=Me.init(this.clippingPlanes,Se),S=Ue.get(b,N.length),S.init(),N.push(S),ae.enabled===!0&&ae.isPresenting===!0){const Te=T.xr.getDepthSensingMesh();Te!==null&&Ei(Te,X,-1/0,T.sortObjects)}Ei(b,X,0,T.sortObjects),S.finish(),T.sortObjects===!0&&S.sort(le,se),st=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,st&&tt.addToRenderList(S,b),this.info.render.frame++,oe===!0&&Me.beginShadows();const te=y.state.shadowsArray;Oe.render(te,b,X),oe===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=S.opaque,Y=S.transmissive;if(y.setupLights(),X.isArrayCamera){const Te=X.cameras;if(Y.length>0)for(let Ee=0,Ge=Te.length;Ee<Ge;Ee++){const Be=Te[Ee];Tr(ne,Y,b,Be)}st&&tt.render(b);for(let Ee=0,Ge=Te.length;Ee<Ge;Ee++){const Be=Te[Ee];wr(S,b,Be,Be.viewport)}}else Y.length>0&&Tr(ne,Y,b,X),st&&tt.render(b),wr(S,b,X);B!==null&&(D.updateMultisampleRenderTarget(B),D.updateRenderTargetMipmap(B)),b.isScene===!0&&b.onAfterRender(T,b,X),Rt.resetDefaultState(),L=-1,R=null,P.pop(),P.length>0?(y=P[P.length-1],oe===!0&&Me.setGlobalState(T.clippingPlanes,y.state.camera)):y=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function Ei(b,X,te,ne){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)te=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){ne&&Ke.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ae);const Ee=fe.update(b),Ge=b.material;Ge.visible&&S.push(b,Ee,Ge,te,Ke.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){const Ee=fe.update(b),Ge=b.material;if(ne&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ke.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ke.copy(Ee.boundingSphere.center)),Ke.applyMatrix4(b.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ge)){const Be=Ee.groups;for(let it=0,at=Be.length;it<at;it++){const je=Be[it],yt=Ge[je.materialIndex];yt&&yt.visible&&S.push(b,Ee,yt,te,Ke.z,je)}}else Ge.visible&&S.push(b,Ee,Ge,te,Ke.z,null)}}const Te=b.children;for(let Ee=0,Ge=Te.length;Ee<Ge;Ee++)Ei(Te[Ee],X,te,ne)}function wr(b,X,te,ne){const Y=b.opaque,Te=b.transmissive,Ee=b.transparent;y.setupLightsView(te),oe===!0&&Me.setGlobalState(T.clippingPlanes,te),ne&&Ze.viewport(z.copy(ne)),Y.length>0&&Xi(Y,X,te),Te.length>0&&Xi(Te,X,te),Ee.length>0&&Xi(Ee,X,te),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function Tr(b,X,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ne.id]===void 0&&(y.state.transmissionRenderTarget[ne.id]=new Zr(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?Va:Gi,minFilter:$r,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Te=y.state.transmissionRenderTarget[ne.id],Ee=ne.viewport||z;Te.setSize(Ee.z,Ee.w);const Ge=T.getRenderTarget();T.setRenderTarget(Te),T.getClearColor(de),he=T.getClearAlpha(),he<1&&T.setClearColor(16777215,.5),T.clear(),st&&tt.render(te);const Be=T.toneMapping;T.toneMapping=Sr;const it=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),y.setupLightsView(ne),oe===!0&&Me.setGlobalState(T.clippingPlanes,ne),Xi(b,te,ne),D.updateMultisampleRenderTarget(Te),D.updateRenderTargetMipmap(Te),vt.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let je=0,yt=X.length;je<yt;je++){const Ct=X[je],_t=Ct.object,sn=Ct.geometry,ct=Ct.material,qe=Ct.group;if(ct.side===zi&&_t.layers.test(ne.layers)){const Qn=ct.side;ct.side=Ln,ct.needsUpdate=!0,Ya(_t,te,ne,sn,ct,qe),ct.side=Qn,ct.needsUpdate=!0,at=!0}}at===!0&&(D.updateMultisampleRenderTarget(Te),D.updateRenderTargetMipmap(Te))}T.setRenderTarget(Ge),T.setClearColor(de,he),it!==void 0&&(ne.viewport=it),T.toneMapping=Be}function Xi(b,X,te){const ne=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Te=b.length;Y<Te;Y++){const Ee=b[Y],Ge=Ee.object,Be=Ee.geometry,it=ne===null?Ee.material:ne,at=Ee.group;Ge.layers.test(te.layers)&&Ya(Ge,X,te,Be,it,at)}}function Ya(b,X,te,ne,Y,Te){b.onBeforeRender(T,X,te,ne,Y,Te),b.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(T,X,te,ne,b,Te),Y.transparent===!0&&Y.side===zi&&Y.forceSinglePass===!1?(Y.side=Ln,Y.needsUpdate=!0,T.renderBufferDirect(te,X,ne,Y,b,Te),Y.side=Mr,Y.needsUpdate=!0,T.renderBufferDirect(te,X,ne,Y,b,Te),Y.side=zi):T.renderBufferDirect(te,X,ne,Y,b,Te),b.onAfterRender(T,X,te,ne,Y,Te)}function Qr(b,X,te){X.isScene!==!0&&(X=Ye);const ne=$e.get(b),Y=y.state.lights,Te=y.state.shadowsArray,Ee=Y.state.version,Ge=Ve.getParameters(b,Y.state,Te,X,te),Be=Ve.getProgramCacheKey(Ge);let it=ne.programs;ne.environment=b.isMeshStandardMaterial?X.environment:null,ne.fog=X.fog,ne.envMap=(b.isMeshStandardMaterial?J:C).get(b.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,it===void 0&&(b.addEventListener("dispose",lt),it=new Map,ne.programs=it);let at=it.get(Be);if(at!==void 0){if(ne.currentProgram===at&&ne.lightsStateVersion===Ee)return fi(b,Ge),at}else Ge.uniforms=Ve.getUniforms(b),b.onBeforeCompile(Ge,T),at=Ve.acquireProgram(Ge,Be),it.set(Be,at),ne.uniforms=Ge.uniforms;const je=ne.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(je.clippingPlanes=Me.uniform),fi(b,Ge),ne.needsLights=Ol(b),ne.lightsStateVersion=Ee,ne.needsLights&&(je.ambientLightColor.value=Y.state.ambient,je.lightProbe.value=Y.state.probe,je.directionalLights.value=Y.state.directional,je.directionalLightShadows.value=Y.state.directionalShadow,je.spotLights.value=Y.state.spot,je.spotLightShadows.value=Y.state.spotShadow,je.rectAreaLights.value=Y.state.rectArea,je.ltc_1.value=Y.state.rectAreaLTC1,je.ltc_2.value=Y.state.rectAreaLTC2,je.pointLights.value=Y.state.point,je.pointLightShadows.value=Y.state.pointShadow,je.hemisphereLights.value=Y.state.hemi,je.directionalShadowMap.value=Y.state.directionalShadowMap,je.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,je.spotShadowMap.value=Y.state.spotShadowMap,je.spotLightMatrix.value=Y.state.spotLightMatrix,je.spotLightMap.value=Y.state.spotLightMap,je.pointShadowMap.value=Y.state.pointShadowMap,je.pointShadowMatrix.value=Y.state.pointShadowMatrix),ne.currentProgram=at,ne.uniformsList=null,at}function qa(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=bl.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function fi(b,X){const te=$e.get(b);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function $a(b,X,te,ne,Y){X.isScene!==!0&&(X=Ye),D.resetTextureUnits();const Te=X.fog,Ee=ne.isMeshStandardMaterial?X.environment:null,Ge=B===null?T.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Xs,Be=(ne.isMeshStandardMaterial?J:C).get(ne.envMap||Ee),it=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,at=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),je=!!te.morphAttributes.position,yt=!!te.morphAttributes.normal,Ct=!!te.morphAttributes.color;let _t=Sr;ne.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(_t=T.toneMapping);const sn=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ct=sn!==void 0?sn.length:0,qe=$e.get(ne),Qn=y.state.lights;if(oe===!0&&(Se===!0||b!==R)){const vn=b===R&&ne.id===L;Me.setState(ne,b,vn)}let Tt=!1;ne.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Qn.state.version||qe.outputColorSpace!==Ge||Y.isBatchedMesh&&qe.batching===!1||!Y.isBatchedMesh&&qe.batching===!0||Y.isBatchedMesh&&qe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&qe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&qe.instancing===!1||!Y.isInstancedMesh&&qe.instancing===!0||Y.isSkinnedMesh&&qe.skinning===!1||!Y.isSkinnedMesh&&qe.skinning===!0||Y.isInstancedMesh&&qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&qe.instancingMorph===!1&&Y.morphTexture!==null||qe.envMap!==Be||ne.fog===!0&&qe.fog!==Te||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Me.numPlanes||qe.numIntersection!==Me.numIntersection)||qe.vertexAlphas!==it||qe.vertexTangents!==at||qe.morphTargets!==je||qe.morphNormals!==yt||qe.morphColors!==Ct||qe.toneMapping!==_t||qe.morphTargetsCount!==ct)&&(Tt=!0):(Tt=!0,qe.__version=ne.version);let an=qe.currentProgram;Tt===!0&&(an=Qr(ne,X,Y));let ei=!1,Yt=!1,pi=!1;const Dt=an.getUniforms(),Hn=qe.uniforms;if(Ze.useProgram(an.program)&&(ei=!0,Yt=!0,pi=!0),ne.id!==L&&(L=ne.id,Yt=!0),ei||R!==b){Ze.buffers.depth.getReversed()?(ve.copy(b.projectionMatrix),T0(ve),A0(ve),Dt.setValue(q,"projectionMatrix",ve)):Dt.setValue(q,"projectionMatrix",b.projectionMatrix),Dt.setValue(q,"viewMatrix",b.matrixWorldInverse);const Vn=Dt.map.cameraPosition;Vn!==void 0&&Vn.setValue(q,Ie.setFromMatrixPosition(b.matrixWorld)),pt.logarithmicDepthBuffer&&Dt.setValue(q,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Dt.setValue(q,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,Yt=!0,pi=!0)}if(Y.isSkinnedMesh){Dt.setOptional(q,Y,"bindMatrix"),Dt.setOptional(q,Y,"bindMatrixInverse");const vn=Y.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Dt.setValue(q,"boneTexture",vn.boneTexture,D))}Y.isBatchedMesh&&(Dt.setOptional(q,Y,"batchingTexture"),Dt.setValue(q,"batchingTexture",Y._matricesTexture,D),Dt.setOptional(q,Y,"batchingIdTexture"),Dt.setValue(q,"batchingIdTexture",Y._indirectTexture,D),Dt.setOptional(q,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Dt.setValue(q,"batchingColorTexture",Y._colorsTexture,D));const wi=te.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&nt.update(Y,te,an),(Yt||qe.receiveShadow!==Y.receiveShadow)&&(qe.receiveShadow=Y.receiveShadow,Dt.setValue(q,"receiveShadow",Y.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Hn.envMap.value=Be,Hn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&X.environment!==null&&(Hn.envMapIntensity.value=X.environmentIntensity),Yt&&(Dt.setValue(q,"toneMappingExposure",T.toneMappingExposure),qe.needsLights&&Ka(Hn,pi),Te&&ne.fog===!0&&Ce.refreshFogUniforms(Hn,Te),Ce.refreshMaterialUniforms(Hn,ne,H,ue,y.state.transmissionRenderTarget[b.id]),bl.upload(q,qa(qe),Hn,D)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(bl.upload(q,qa(qe),Hn,D),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Dt.setValue(q,"center",Y.center),Dt.setValue(q,"modelViewMatrix",Y.modelViewMatrix),Dt.setValue(q,"normalMatrix",Y.normalMatrix),Dt.setValue(q,"modelMatrix",Y.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const vn=ne.uniformsGroups;for(let Vn=0,En=vn.length;Vn<En;Vn++){const Za=vn[Vn];W.update(Za,an),W.bind(Za,an)}}return an}function Ka(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function Ol(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(b,X,te){$e.get(b.texture).__webglTexture=X,$e.get(b.depthTexture).__webglTexture=te;const ne=$e.get(b);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,X){const te=$e.get(b);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(b,X=0,te=0){B=b,F=X,U=te;let ne=!0,Y=null,Te=!1,Ee=!1;if(b){const Be=$e.get(b);if(Be.__useDefaultFramebuffer!==void 0)Ze.bindFramebuffer(q.FRAMEBUFFER,null),ne=!1;else if(Be.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(Be.__hasExternalTextures)D.rebindTextures(b,$e.get(b.texture).__webglTexture,$e.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const je=b.depthTexture;if(Be.__boundDepthTexture!==je){if(je!==null&&$e.has(je)&&(b.width!==je.image.width||b.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}const it=b.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ee=!0);const at=$e.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(at[X])?Y=at[X][te]:Y=at[X],Te=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?Y=$e.get(b).__webglMultisampledFramebuffer:Array.isArray(at)?Y=at[te]:Y=at,z.copy(b.viewport),ie.copy(b.scissor),Q=b.scissorTest}else z.copy(O).multiplyScalar(H).floor(),ie.copy(re).multiplyScalar(H).floor(),Q=Le;if(Ze.bindFramebuffer(q.FRAMEBUFFER,Y)&&ne&&Ze.drawBuffers(b,Y),Ze.viewport(z),Ze.scissor(ie),Ze.setScissorTest(Q),Te){const Be=$e.get(b.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,te)}else if(Ee){const Be=$e.get(b.texture),it=X||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Be.__webglTexture,te||0,it)}L=-1},this.readRenderTargetPixels=function(b,X,te,ne,Y,Te,Ee){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=$e.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ge=Ge[Ee]),Ge){Ze.bindFramebuffer(q.FRAMEBUFFER,Ge);try{const Be=b.texture,it=Be.format,at=Be.type;if(!pt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-ne&&te>=0&&te<=b.height-Y&&q.readPixels(X,te,ne,Y,ot.convert(it),ot.convert(at),Te)}finally{const Be=B!==null?$e.get(B).__webglFramebuffer:null;Ze.bindFramebuffer(q.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(b,X,te,ne,Y,Te,Ee){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=$e.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ge=Ge[Ee]),Ge){const Be=b.texture,it=Be.format,at=Be.type;if(!pt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=b.width-ne&&te>=0&&te<=b.height-Y){Ze.bindFramebuffer(q.FRAMEBUFFER,Ge);const je=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,je),q.bufferData(q.PIXEL_PACK_BUFFER,Te.byteLength,q.STREAM_READ),q.readPixels(X,te,ne,Y,ot.convert(it),ot.convert(at),0);const yt=B!==null?$e.get(B).__webglFramebuffer:null;Ze.bindFramebuffer(q.FRAMEBUFFER,yt);const Ct=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await w0(q,Ct,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,je),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Te),q.deleteBuffer(je),q.deleteSync(Ct),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,X=null,te=0){b.isTexture!==!0&&(Ua("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1]);const ne=Math.pow(2,-te),Y=Math.floor(b.image.width*ne),Te=Math.floor(b.image.height*ne),Ee=X!==null?X.x:0,Ge=X!==null?X.y:0;D.setTexture2D(b,0),q.copyTexSubImage2D(q.TEXTURE_2D,te,0,0,Ee,Ge,Y,Te),Ze.unbindTexture()},this.copyTextureToTexture=function(b,X,te=null,ne=null,Y=0){b.isTexture!==!0&&(Ua("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,b=arguments[1],X=arguments[2],Y=arguments[3]||0,te=null);let Te,Ee,Ge,Be,it,at,je,yt,Ct;const _t=b.isCompressedTexture?b.mipmaps[Y]:b.image;te!==null?(Te=te.max.x-te.min.x,Ee=te.max.y-te.min.y,Ge=te.isBox3?te.max.z-te.min.z:1,Be=te.min.x,it=te.min.y,at=te.isBox3?te.min.z:0):(Te=_t.width,Ee=_t.height,Ge=_t.depth||1,Be=0,it=0,at=0),ne!==null?(je=ne.x,yt=ne.y,Ct=ne.z):(je=0,yt=0,Ct=0);const sn=ot.convert(X.format),ct=ot.convert(X.type);let qe;X.isData3DTexture?(D.setTexture3D(X,0),qe=q.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(D.setTexture2DArray(X,0),qe=q.TEXTURE_2D_ARRAY):(D.setTexture2D(X,0),qe=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,X.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,X.unpackAlignment);const Qn=q.getParameter(q.UNPACK_ROW_LENGTH),Tt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),an=q.getParameter(q.UNPACK_SKIP_PIXELS),ei=q.getParameter(q.UNPACK_SKIP_ROWS),Yt=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,_t.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,_t.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Be),q.pixelStorei(q.UNPACK_SKIP_ROWS,it),q.pixelStorei(q.UNPACK_SKIP_IMAGES,at);const pi=b.isDataArrayTexture||b.isData3DTexture,Dt=X.isDataArrayTexture||X.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Hn=$e.get(b),wi=$e.get(X),vn=$e.get(Hn.__renderTarget),Vn=$e.get(wi.__renderTarget);Ze.bindFramebuffer(q.READ_FRAMEBUFFER,vn.__webglFramebuffer),Ze.bindFramebuffer(q.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let En=0;En<Ge;En++)pi&&q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,$e.get(b).__webglTexture,Y,at+En),b.isDepthTexture?(Dt&&q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,$e.get(X).__webglTexture,Y,Ct+En),q.blitFramebuffer(Be,it,Te,Ee,je,yt,Te,Ee,q.DEPTH_BUFFER_BIT,q.NEAREST)):Dt?q.copyTexSubImage3D(qe,Y,je,yt,Ct+En,Be,it,Te,Ee):q.copyTexSubImage2D(qe,Y,je,yt,Ct+En,Be,it,Te,Ee);Ze.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Dt?b.isDataTexture||b.isData3DTexture?q.texSubImage3D(qe,Y,je,yt,Ct,Te,Ee,Ge,sn,ct,_t.data):X.isCompressedArrayTexture?q.compressedTexSubImage3D(qe,Y,je,yt,Ct,Te,Ee,Ge,sn,_t.data):q.texSubImage3D(qe,Y,je,yt,Ct,Te,Ee,Ge,sn,ct,_t):b.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Y,je,yt,Te,Ee,sn,ct,_t.data):b.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Y,je,yt,_t.width,_t.height,sn,_t.data):q.texSubImage2D(q.TEXTURE_2D,Y,je,yt,Te,Ee,sn,ct,_t);q.pixelStorei(q.UNPACK_ROW_LENGTH,Qn),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Tt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,an),q.pixelStorei(q.UNPACK_SKIP_ROWS,ei),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Yt),Y===0&&X.generateMipmaps&&q.generateMipmap(qe),Ze.unbindTexture()},this.copyTextureToTexture3D=function(b,X,te=null,ne=null,Y=0){return b.isTexture!==!0&&(Ua("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ne=arguments[1]||null,b=arguments[2],X=arguments[3],Y=arguments[4]||0),Ua('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,X,te,ne,Y)},this.initRenderTarget=function(b){$e.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),Ze.unbindTexture()},this.resetState=function(){F=0,U=0,B=null,Ze.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}class OE extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bg extends qs{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const km=new kt,Wd=new pg,Sl=new Il,Ml=new V;class kE extends Sn{constructor(e=new Jn,t=new bg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Sl.copy(r.boundingSphere),Sl.applyMatrix4(o),Sl.radius+=l,e.ray.intersectsSphere(Sl)===!1)return;km.copy(o).invert(),Wd.copy(e.ray).applyMatrix4(km);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,x=r.attributes.position;if(m!==null){const _=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let E=_,A=M;E<A;E++){const S=m.getX(E);Ml.fromBufferAttribute(x,S),zm(Ml,S,p,o,e,t,this)}}else{const _=Math.max(0,u.start),M=Math.min(x.count,u.start+u.count);for(let E=_,A=M;E<A;E++)Ml.fromBufferAttribute(x,E),zm(Ml,E,p,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function zm(s,e,t,r,o,l,u){const d=Wd.distanceSqToPoint(s);if(d<t){const p=new V;Wd.closestPointToPoint(s,p),p.applyMatrix4(r);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;l.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class ji{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let d=0,p=l-1,m;for(;d<=p;)if(o=Math.floor(d+(p-d)/2),m=r[o]-u,m<0)d=o+1;else if(m>0)p=o-1;else{p=o;break}if(o=p,r[o]===u)return o/(l-1);const v=r[o],_=r[o+1]-v,M=(u-v)/_;return(o+M)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),d=this.getPoint(l),p=t||(u.isVector2?new et:new V);return p.copy(d).sub(u).normalize(),p}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new V,o=[],l=[],u=[],d=new V,p=new kt;for(let M=0;M<=e;M++){const E=M/e;o[M]=this.getTangentAt(E,new V)}l[0]=new V,u[0]=new V;let m=Number.MAX_VALUE;const v=Math.abs(o[0].x),x=Math.abs(o[0].y),_=Math.abs(o[0].z);v<=m&&(m=v,r.set(1,0,0)),x<=m&&(m=x,r.set(0,1,0)),_<=m&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],d),u[0].crossVectors(o[0],l[0]);for(let M=1;M<=e;M++){if(l[M]=l[M-1].clone(),u[M]=u[M-1].clone(),d.crossVectors(o[M-1],o[M]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(fn(o[M-1].dot(o[M]),-1,1));l[M].applyMatrix4(p.makeRotationAxis(d,E))}u[M].crossVectors(o[M],l[M])}if(t===!0){let M=Math.acos(fn(l[0].dot(l[e]),-1,1));M/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(M=-M);for(let E=1;E<=e;E++)l[E].applyMatrix4(p.makeRotationAxis(o[E],M*E)),u[E].crossVectors(o[E],l[E])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ng extends ji{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=d,this.aRotation=p}getPoint(e,t=new et){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const d=this.aStartAngle+e*l;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),x=Math.sin(this.aRotation),_=p-this.aX,M=m-this.aY;p=_*v-M*x+this.aX,m=_*x+M*v+this.aY}return r.set(p,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class zE extends Ng{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function nh(){let s=0,e=0,t=0,r=0;function o(l,u,d,p){s=l,e=d,t=-3*l+3*u-2*d-p,r=2*l-2*u+d+p}return{initCatmullRom:function(l,u,d,p,m){o(u,d,m*(d-l),m*(p-u))},initNonuniformCatmullRom:function(l,u,d,p,m,v,x){let _=(u-l)/m-(d-l)/(m+v)+(d-u)/v,M=(d-u)/v-(p-u)/(v+x)+(p-d)/x;_*=v,M*=v,o(u,d,_,M)},calc:function(l){const u=l*l,d=u*l;return s+e*l+t*u+r*d}}}const El=new V,Ku=new nh,Zu=new nh,Ju=new nh;class Pg extends ji{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new V){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let d=Math.floor(u),p=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:p===0&&d===l-1&&(d=l-2,p=1);let m,v;this.closed||d>0?m=o[(d-1)%l]:(El.subVectors(o[0],o[1]).add(o[0]),m=El);const x=o[d%l],_=o[(d+1)%l];if(this.closed||d+2<l?v=o[(d+2)%l]:(El.subVectors(o[l-1],o[l-2]).add(o[l-1]),v=El),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(x),M),A=Math.pow(x.distanceToSquared(_),M),S=Math.pow(_.distanceToSquared(v),M);A<1e-4&&(A=1),E<1e-4&&(E=A),S<1e-4&&(S=A),Ku.initNonuniformCatmullRom(m.x,x.x,_.x,v.x,E,A,S),Zu.initNonuniformCatmullRom(m.y,x.y,_.y,v.y,E,A,S),Ju.initNonuniformCatmullRom(m.z,x.z,_.z,v.z,E,A,S)}else this.curveType==="catmullrom"&&(Ku.initCatmullRom(m.x,x.x,_.x,v.x,this.tension),Zu.initCatmullRom(m.y,x.y,_.y,v.y,this.tension),Ju.initCatmullRom(m.z,x.z,_.z,v.z,this.tension));return r.set(Ku.calc(p),Zu.calc(p),Ju.calc(p)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new V().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bm(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,d=s*s,p=s*d;return(2*t-2*r+l+u)*p+(-3*t+3*r-2*l-u)*d+l*s+t}function BE(s,e){const t=1-s;return t*t*e}function HE(s,e){return 2*(1-s)*s*e}function VE(s,e){return s*s*e}function ka(s,e,t,r){return BE(s,e)+HE(s,t)+VE(s,r)}function GE(s,e){const t=1-s;return t*t*t*e}function jE(s,e){const t=1-s;return 3*t*t*s*e}function WE(s,e){return 3*(1-s)*s*s*e}function XE(s,e){return s*s*s*e}function za(s,e,t,r,o){return GE(s,e)+jE(s,t)+WE(s,r)+XE(s,o)}class YE extends ji{constructor(e=new et,t=new et,r=new et,o=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new et){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(za(e,o.x,l.x,u.x,d.x),za(e,o.y,l.y,u.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qE extends ji{constructor(e=new V,t=new V,r=new V,o=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new V){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(za(e,o.x,l.x,u.x,d.x),za(e,o.y,l.y,u.y,d.y),za(e,o.z,l.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $E extends ji{constructor(e=new et,t=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new et){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new et){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class KE extends ji{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ZE extends ji{constructor(e=new et,t=new et,r=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new et){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(ka(e,o.x,l.x,u.x),ka(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lg extends ji{constructor(e=new V,t=new V,r=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new V){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(ka(e,o.x,l.x,u.x),ka(e,o.y,l.y,u.y),ka(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class JE extends ji{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new et){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),d=l-u,p=o[u===0?u:u-1],m=o[u],v=o[u>o.length-2?o.length-1:u+1],x=o[u>o.length-3?o.length-1:u+2];return r.set(Bm(d,p.x,m.x,v.x,x.x),Bm(d,p.y,m.y,v.y,x.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new et().fromArray(o))}return this}}var QE=Object.freeze({__proto__:null,ArcCurve:zE,CatmullRomCurve3:Pg,CubicBezierCurve:YE,CubicBezierCurve3:qE,EllipseCurve:Ng,LineCurve:$E,LineCurve3:KE,QuadraticBezierCurve:ZE,QuadraticBezierCurve3:Lg,SplineCurve:JE});class ih extends Jn{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],u=[];d(o),m(r),v(),this.setAttribute("position",new pn(l,3)),this.setAttribute("normal",new pn(l.slice(),3)),this.setAttribute("uv",new pn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function d(N){const P=new V,T=new V,j=new V;for(let F=0;F<t.length;F+=3)M(t[F+0],P),M(t[F+1],T),M(t[F+2],j),p(P,T,j,N)}function p(N,P,T,j){const F=j+1,U=[];for(let B=0;B<=F;B++){U[B]=[];const L=N.clone().lerp(T,B/F),R=P.clone().lerp(T,B/F),z=F-B;for(let ie=0;ie<=z;ie++)ie===0&&B===F?U[B][ie]=L:U[B][ie]=L.clone().lerp(R,ie/z)}for(let B=0;B<F;B++)for(let L=0;L<2*(F-B)-1;L++){const R=Math.floor(L/2);L%2===0?(_(U[B][R+1]),_(U[B+1][R]),_(U[B][R])):(_(U[B][R+1]),_(U[B+1][R+1]),_(U[B+1][R]))}}function m(N){const P=new V;for(let T=0;T<l.length;T+=3)P.x=l[T+0],P.y=l[T+1],P.z=l[T+2],P.normalize().multiplyScalar(N),l[T+0]=P.x,l[T+1]=P.y,l[T+2]=P.z}function v(){const N=new V;for(let P=0;P<l.length;P+=3){N.x=l[P+0],N.y=l[P+1],N.z=l[P+2];const T=S(N)/2/Math.PI+.5,j=y(N)/Math.PI+.5;u.push(T,1-j)}E(),x()}function x(){for(let N=0;N<u.length;N+=6){const P=u[N+0],T=u[N+2],j=u[N+4],F=Math.max(P,T,j),U=Math.min(P,T,j);F>.9&&U<.1&&(P<.2&&(u[N+0]+=1),T<.2&&(u[N+2]+=1),j<.2&&(u[N+4]+=1))}}function _(N){l.push(N.x,N.y,N.z)}function M(N,P){const T=N*3;P.x=e[T+0],P.y=e[T+1],P.z=e[T+2]}function E(){const N=new V,P=new V,T=new V,j=new V,F=new et,U=new et,B=new et;for(let L=0,R=0;L<l.length;L+=9,R+=6){N.set(l[L+0],l[L+1],l[L+2]),P.set(l[L+3],l[L+4],l[L+5]),T.set(l[L+6],l[L+7],l[L+8]),F.set(u[R+0],u[R+1]),U.set(u[R+2],u[R+3]),B.set(u[R+4],u[R+5]),j.copy(N).add(P).add(T).divideScalar(3);const z=S(j);A(F,R+0,N,z),A(U,R+2,P,z),A(B,R+4,T,z)}}function A(N,P,T,j){j<0&&N.x===1&&(u[P]=N.x-1),T.x===0&&T.z===0&&(u[P]=j/2/Math.PI+.5)}function S(N){return Math.atan2(N.z,-N.x)}function y(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ih(e.vertices,e.indices,e.radius,e.details)}}class rh extends ih{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rh(e.radius,e.detail)}}class Ba extends Jn{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l},r=Math.floor(r),o=Math.floor(o);const u=[],d=[],p=[],m=[],v=new V,x=new V,_=new V;for(let M=0;M<=r;M++)for(let E=0;E<=o;E++){const A=E/o*l,S=M/r*Math.PI*2;x.x=(e+t*Math.cos(S))*Math.cos(A),x.y=(e+t*Math.cos(S))*Math.sin(A),x.z=t*Math.sin(S),d.push(x.x,x.y,x.z),v.x=e*Math.cos(A),v.y=e*Math.sin(A),_.subVectors(x,v).normalize(),p.push(_.x,_.y,_.z),m.push(E/o),m.push(M/r)}for(let M=1;M<=r;M++)for(let E=1;E<=o;E++){const A=(o+1)*M+E-1,S=(o+1)*(M-1)+E-1,y=(o+1)*(M-1)+E,N=(o+1)*M+E;u.push(A,S,N),u.push(S,y,N)}this.setIndex(u),this.setAttribute("position",new pn(d,3)),this.setAttribute("normal",new pn(p,3)),this.setAttribute("uv",new pn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class sh extends Jn{constructor(e=new Lg(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const d=new V,p=new V,m=new et;let v=new V;const x=[],_=[],M=[],E=[];A(),this.setIndex(E),this.setAttribute("position",new pn(x,3)),this.setAttribute("normal",new pn(_,3)),this.setAttribute("uv",new pn(M,2));function A(){for(let P=0;P<t;P++)S(P);S(l===!1?t:0),N(),y()}function S(P){v=e.getPointAt(P/t,v);const T=u.normals[P],j=u.binormals[P];for(let F=0;F<=o;F++){const U=F/o*Math.PI*2,B=Math.sin(U),L=-Math.cos(U);p.x=L*T.x+B*j.x,p.y=L*T.y+B*j.y,p.z=L*T.z+B*j.z,p.normalize(),_.push(p.x,p.y,p.z),d.x=v.x+r*p.x,d.y=v.y+r*p.y,d.z=v.z+r*p.z,x.push(d.x,d.y,d.z)}}function y(){for(let P=1;P<=t;P++)for(let T=1;T<=o;T++){const j=(o+1)*(P-1)+(T-1),F=(o+1)*P+(T-1),U=(o+1)*P+T,B=(o+1)*(P-1)+T;E.push(j,F,B),E.push(F,U,B)}}function N(){for(let P=0;P<=t;P++)for(let T=0;T<=o;T++)m.x=P/t,m.y=T/o,M.push(m.x,m.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new sh(new QE[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Da extends qs{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cg,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dg extends Sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Qu=new kt,Hm=new V,Vm=new V;class ew{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eh,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Hm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hm),Vm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vm),t.updateMatrixWorld(),Qu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qu),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Gm=new kt,Ia=new V,ed=new V;class tw extends ew{constructor(){super(new Bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Ia.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ia),ed.copy(r.position),ed.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(ed),r.updateMatrixWorld(),o.makeTranslation(-Ia.x,-Ia.y,-Ia.z),Gm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gm)}}class td extends Dg{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new tw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class nw extends Dg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class iw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=jm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function jm(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yd);function rw(){const s=dt.useRef(null);return dt.useEffect(()=>{const e=s.current;if(!e)return;const t=new OE,r=new Bn(60,e.clientWidth/e.clientHeight,.1,1e3);r.position.z=7.5;const o=new FE({alpha:!0,antialias:!0,powerPreference:"high-performance"});o.setSize(e.clientWidth,e.clientHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(o.domElement);const l=new nw(16777215,.9);t.add(l);const u=new td(8141549,10,40);u.position.set(6,5,7),t.add(u);const d=new td(440020,9,40);d.position.set(-6,-5,7),t.add(d);const p=new td(1096065,4,30);p.position.set(0,4,5),t.add(p);const m=new Oa;t.add(m);const v=new Ba(3.3,.09,16,100),x=new Da({color:8141549,emissive:4988309,emissiveIntensity:.6,metalness:.9,roughness:.15}),_=new Pn(v,x);m.add(_);const M=new Ba(2.6,.07,16,80),E=new Da({color:440020,emissive:561586,emissiveIntensity:.7,metalness:.95,roughness:.1}),A=new Pn(M,E);A.rotation.x=Math.PI/4,m.add(A);const S=new Ba(1.9,.05,16,60),y=new Da({color:2450411,emissive:1982639,emissiveIntensity:.5,metalness:.85,roughness:.2}),N=new Pn(S,y);N.rotation.y=Math.PI/3,m.add(N);const P=new rh(.85,1),T=new Da({color:16317180,emissive:8141549,emissiveIntensity:.6,roughness:.05,metalness:.95,wireframe:!0}),j=new Pn(P,T);m.add(j);const F=new Pg([new V(-4,-2.5,-2),new V(-2,-.5,1),new V(0,1.5,-1),new V(2,0,2),new V(4,-1.8,-1)]),U=new sh(F,70,.04,8,!1),B=new Da({color:440020,emissive:440020,emissiveIntensity:.8,transparent:!0,opacity:.65}),L=new Pn(U,B);t.add(L);const R=1200,z=new Jn,ie=new Float32Array(R*3),Q=new Float32Array(R*3),de=new St(8141549),he=new St(440020),ce=new St(16777215);for(let Ye=0;Ye<R*3;Ye+=3){ie[Ye]=(Math.random()-.5)*32,ie[Ye+1]=(Math.random()-.5)*24,ie[Ye+2]=(Math.random()-.5)*24;const st=Math.random(),xt=st>.6?he:st>.25?de:ce;Q[Ye]=xt.r,Q[Ye+1]=xt.g,Q[Ye+2]=xt.b}z.setAttribute("position",new Zn(ie,3)),z.setAttribute("color",new Zn(Q,3));const ue=new bg({size:.055,vertexColors:!0,transparent:!0,opacity:.75,blending:id}),H=new kE(z,ue);t.add(H);let le=0,se=0,O=0,re=0;const Le=Ye=>{const{innerWidth:st,innerHeight:xt}=window;O=(Ye.clientX/st-.5)*2,re=-(Ye.clientY/xt-.5)*2};window.addEventListener("mousemove",Le);let Z=0,oe=0;const Se=()=>{Z=window.scrollY};window.addEventListener("scroll",Se,{passive:!0});const ve=()=>{if(!e)return;const Ye=e.clientWidth,st=e.clientHeight;r.aspect=Ye/st,r.updateProjectionMatrix(),o.setSize(Ye,st),o.setPixelRatio(Math.min(window.devicePixelRatio,2))};window.addEventListener("resize",ve);let Ae;const Ie=new iw,Ke=()=>{Ae=requestAnimationFrame(Ke);const Ye=Ie.getElapsedTime();le+=(O-le)*.045,se+=(re-se)*.045;const st=oe;oe+=(Z-oe)*.06;const xt=oe-st;_.rotation.x=Ye*.35+oe*.001,_.rotation.y=Ye*.25,A.rotation.y=Ye*.45+oe*.0015,A.rotation.z=Ye*.35,N.rotation.x=-Ye*.4,N.rotation.z=-Ye*.3+oe*.001,j.rotation.x=Ye*.6,j.rotation.y=Ye*.7,m.rotation.y=le*.85,m.rotation.x=-se*.65-xt*.02,m.rotation.z=oe*8e-4,m.position.x=le*.6,m.position.y=se*.45-oe*.002,r.position.y=-oe*.0015,r.rotation.x=-xt*.004,L.rotation.z=Math.sin(Ye*.5)*.15+oe*.001,L.position.y=Math.cos(Ye*.7)*.2-oe*.002,H.rotation.y=Ye*.035+oe*5e-4,H.rotation.x=Ye*.025,u.intensity=8+Math.sin(Ye*2)*3,d.intensity=7+Math.cos(Ye*2)*3,o.render(t,r)};return Ke(),()=>{window.removeEventListener("mousemove",Le),window.removeEventListener("scroll",Se),window.removeEventListener("resize",ve),cancelAnimationFrame(Ae),v.dispose(),x.dispose(),M.dispose(),E.dispose(),S.dispose(),y.dispose(),P.dispose(),T.dispose(),U.dispose(),B.dispose(),z.dispose(),ue.dispose(),o.dispose(),e&&o.domElement&&e.removeChild(o.domElement)}},[]),f.jsx("div",{ref:s,className:"three-canvas-container","aria-hidden":"true"})}const Wm=["Cinematic Video Editor","Influential Content Creator","Viral Reel Specialist","Brand Collab Partner"];function sw(){const[s,e]=dt.useState(""),[t,r]=dt.useState(0),[o,l]=dt.useState(!1),[u,d]=dt.useState(100),[p,m]=dt.useState(0),[v,x]=dt.useState(0),[_,M]=dt.useState(0),[E,A]=dt.useState(0);return dt.useEffect(()=>{const S=Wm[t],y=setTimeout(()=>{o?(e(S.substring(0,s.length-1)),d(45),s===""&&(l(!1),r(N=>(N+1)%Wm.length))):(e(S.substring(0,s.length+1)),d(80),s===S&&setTimeout(()=>l(!0),1800))},u);return()=>clearTimeout(y)},[s,o,t,u]),dt.useEffect(()=>{let S=0;const y=40,N=setInterval(()=>{S++;const P=S/y;m(Math.round(600*P)),x(Math.round(1500*P)),M(Math.round(48*P)),A(Math.round(50*P)),S>=y&&clearInterval(N)},30);return()=>clearInterval(N)},[]),f.jsxs("section",{className:"hero-section",id:"hero",children:[f.jsx(rw,{}),f.jsx("div",{className:"hero-bg","aria-hidden":"true"}),f.jsx("div",{className:"hero-radial-glow"}),f.jsx("div",{className:"hero-container",children:f.jsxs("div",{className:"hero-layout-grid",children:[f.jsxs("div",{className:"hero-left-column",children:[f.jsxs("div",{className:"hero-badge-pill",children:[f.jsxs("div",{className:"soundwave-equalizer","aria-hidden":"true",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]}),f.jsx("span",{className:"badge-category-text",children:"VIDEO EDITOR • CONTENT CREATOR"}),f.jsxs("span",{className:"hero-pulse-status",children:[f.jsx("span",{className:"pulse-dot"})," Available"]})]}),f.jsxs("h1",{className:"hero-editorial-title",children:["I am a ",f.jsx("br",{}),f.jsxs("span",{className:"gradient-text typewriter-text",children:[s,f.jsx("span",{className:"typewriter-cursor",children:"|"})]})]}),f.jsx("p",{className:"hero-editorial-subtitle",children:"Transforming raw footage into scroll-stopping stories for creators and clients, while delivering high-converting paid promotions and sponsored collaborations for brands."}),f.jsxs("div",{className:"hero-ctas-editorial",children:[f.jsxs("a",{href:"#portfolio",className:"btn btn-primary pulse-on-hover btn-hero-primary",children:[f.jsx("span",{className:"btn-icon-wrapper",children:f.jsx("i",{className:"fa-solid fa-play"})}),f.jsx("span",{children:"View Showreels"})]}),f.jsxs("a",{href:"https://wa.me/919360870164?text=Hi%20Bikash!%20I%20want%20to%20collaborate%20for%20a%20Paid%20Promotion%20/%20Brand%20Sponsorship.",target:"_blank",rel:"noopener noreferrer",className:"btn btn-accent pulse-on-hover btn-hero-glass",children:[f.jsx("i",{className:"fa-solid fa-handshake"}),f.jsx("span",{children:"Brand Collabs & Promo"})]}),f.jsxs("a",{href:"#contact",className:"btn btn-secondary btn-hero-subtle",children:[f.jsx("i",{className:"fa-solid fa-envelope"}),f.jsx("span",{children:"Contact Me"})]})]}),f.jsxs("div",{className:"hero-editorial-stats",children:[f.jsxs("div",{className:"stat-editorial-item",children:[f.jsxs("span",{className:"stat-val",children:["₹",p]}),f.jsx("span",{className:"stat-desc",children:"Reel Edit Rate"})]}),f.jsxs("div",{className:"stat-editorial-item",children:[f.jsx("span",{className:"stat-val",children:v>=1e3?"₹1.5k":`₹${v}`}),f.jsx("span",{className:"stat-desc",children:"Brand Collab Post"})]}),f.jsxs("div",{className:"stat-editorial-item",children:[f.jsxs("span",{className:"stat-val",children:[_,"h"]}),f.jsx("span",{className:"stat-desc",children:"Delivery Turnaround"})]}),f.jsxs("div",{className:"stat-editorial-item",children:[f.jsxs("span",{className:"stat-val",children:[E,"K+"]}),f.jsx("span",{className:"stat-desc",children:"Monthly Impressions"})]})]}),f.jsx("div",{className:"hero-scroll-explore",children:f.jsxs("a",{href:"#what-i-do",className:"scroll-explore-link","aria-label":"Scroll to explore",children:[f.jsx("div",{className:"mouse-icon-editorial",children:f.jsx("div",{className:"wheel-editorial"})}),f.jsx("span",{className:"scroll-explore-label",children:"SCROLL TO EXPLORE"})]})})]}),f.jsx("div",{className:"hero-right-visual",children:f.jsxs("div",{className:"hero-visual-composition",children:[f.jsx("div",{className:"hero-media-frame",children:f.jsxs("div",{className:"hero-media-inner",children:[f.jsx("img",{src:"assets/hero.jpg",alt:"Bikash Suna - Professional Video Editor Studio",className:"hero-media-img"}),f.jsx("div",{className:"hero-media-vignette"}),f.jsxs("div",{className:"camera-frame-corners","aria-hidden":"true",children:[f.jsx("span",{className:"corner top-left"}),f.jsx("span",{className:"corner top-right"}),f.jsx("span",{className:"corner bottom-left"}),f.jsx("span",{className:"corner bottom-right"})]})]})}),f.jsxs("div",{className:"hero-timeline-deck","aria-label":"Video Editor Master Timeline",children:[f.jsxs("div",{className:"timeline-deck-header",children:[f.jsxs("div",{className:"timeline-deck-left",children:[f.jsxs("span",{className:"rec-indicator",children:[f.jsx("span",{className:"rec-dot"})," LIVE TIMELINE"]}),f.jsx("span",{className:"sequence-name",children:"BIKASH_MASTER_CUT_4K.prproj"})]}),f.jsxs("div",{className:"timeline-deck-right",children:[f.jsx("span",{className:"timecode-badge",children:"00:04:18:24"}),f.jsx("span",{className:"codec-chip",children:"PRORES 422 HQ"}),f.jsx("span",{className:"fps-chip",children:"4K • 60FPS"})]})]}),f.jsxs("div",{className:"timeline-tracks-area",children:[f.jsxs("div",{className:"timeline-playhead","aria-hidden":"true",children:[f.jsx("div",{className:"playhead-cap"}),f.jsx("div",{className:"playhead-line"})]}),f.jsxs("div",{className:"timeline-track-row",children:[f.jsx("div",{className:"track-label",children:"V2"}),f.jsxs("div",{className:"track-lane",children:[f.jsxs("div",{className:"clip-block clip-speedramp",style:{width:"44%",marginLeft:"10%"},children:[f.jsx("i",{className:"fa-solid fa-bolt"}),f.jsx("span",{children:"Speed Ramp (400% → 40%)"}),f.jsx("div",{className:"keyframe-diamond"})]}),f.jsxs("div",{className:"clip-block clip-lut",style:{width:"40%",marginLeft:"4%"},children:[f.jsx("i",{className:"fa-solid fa-wand-magic-sparkles"}),f.jsx("span",{children:"Teal & Orange 3D LUT"})]})]})]}),f.jsxs("div",{className:"timeline-track-row",children:[f.jsx("div",{className:"track-label",children:"V1"}),f.jsxs("div",{className:"track-lane",children:[f.jsxs("div",{className:"clip-block clip-main clip-1",style:{width:"23%"},children:[f.jsx("img",{src:"assets/reel.jpg",alt:"",className:"clip-thumb-mini"}),f.jsx("span",{children:"01_Hook_Cut"})]}),f.jsxs("div",{className:"clip-block clip-main clip-2",style:{width:"31%",marginLeft:"3px"},children:[f.jsx("img",{src:"assets/hero.jpg",alt:"",className:"clip-thumb-mini"}),f.jsx("span",{children:"02_Hero_Cinematic"})]}),f.jsxs("div",{className:"clip-block clip-main clip-3",style:{width:"26%",marginLeft:"3px"},children:[f.jsx("img",{src:"assets/album.jpg",alt:"",className:"clip-thumb-mini"}),f.jsx("span",{children:"03_B-Roll_Rhythm"})]}),f.jsxs("div",{className:"clip-block clip-main clip-4",style:{width:"18%",marginLeft:"3px"},children:[f.jsx("img",{src:"assets/profile.jpg",alt:"",className:"clip-thumb-mini"}),f.jsx("span",{children:"04_Outro"})]})]})]}),f.jsxs("div",{className:"timeline-track-row audio-row",children:[f.jsx("div",{className:"track-label",children:"A1"}),f.jsxs("div",{className:"track-lane audio-lane",children:[f.jsxs("div",{className:"audio-waveform-block",style:{width:"56%"},children:[f.jsx("svg",{className:"waveform-svg",viewBox:"0 0 200 24",preserveAspectRatio:"none",children:f.jsx("path",{d:"M0,12 L5,8 L10,16 L15,4 L20,20 L25,7 L30,17 L35,3 L40,21 L45,6 L50,18 L55,5 L60,19 L65,8 L70,16 L75,4 L80,20 L85,7 L90,17 L95,5 L100,19 L105,8 L110,16 L115,2 L120,22 L125,6 L130,18 L135,5 L140,19 L145,8 L150,16 L155,4 L160,20 L165,7 L170,17 L175,5 L180,19 L185,8 L190,16 L195,10 L200,12",fill:"none",stroke:"#06b6d4",strokeWidth:"1.8"})}),f.jsx("span",{className:"audio-title",children:"Dialogue_Master.wav"})]}),f.jsxs("div",{className:"audio-waveform-block sfx-block",style:{width:"41%",marginLeft:"2%"},children:[f.jsx("svg",{className:"waveform-svg sfx-wave",viewBox:"0 0 150 24",preserveAspectRatio:"none",children:f.jsx("path",{d:"M0,12 L10,12 L20,6 L30,18 L40,4 L50,20 L60,8 L70,16 L80,12 L100,12 L110,5 L120,19 L130,12 L150,12",fill:"none",stroke:"#c084fc",strokeWidth:"1.8"})}),f.jsx("span",{className:"audio-title",children:"SFX_Impact_Riser"})]})]})]})]}),f.jsxs("div",{className:"timeline-deck-footer",children:[f.jsxs("div",{className:"timeline-tools-dock",children:[f.jsx("span",{className:"tool-btn active",title:"Selection Tool (V)",children:f.jsx("i",{className:"fa-solid fa-arrow-pointer"})}),f.jsx("span",{className:"tool-btn",title:"Razor Cut Tool (C)",children:f.jsx("i",{className:"fa-solid fa-scissors"})}),f.jsx("span",{className:"tool-btn",title:"Ripple Edit (B)",children:f.jsx("i",{className:"fa-solid fa-arrows-left-right"})}),f.jsx("span",{className:"tool-btn",title:"Keyframe Curve (P)",children:f.jsx("i",{className:"fa-solid fa-bezier-curve"})})]}),f.jsxs("div",{className:"timeline-pipeline-badges",children:[f.jsxs("span",{className:"pipeline-step",children:[f.jsx("i",{className:"fa-solid fa-check"})," INGEST"]}),f.jsx("span",{className:"pipeline-arrow",children:"→"}),f.jsxs("span",{className:"pipeline-step active",children:[f.jsx("i",{className:"fa-solid fa-wand-magic-sparkles"})," COLOR GRADE"]}),f.jsx("span",{className:"pipeline-arrow",children:"→"}),f.jsxs("span",{className:"pipeline-step",children:[f.jsx("i",{className:"fa-solid fa-volume-high"})," SFX"]}),f.jsx("span",{className:"pipeline-arrow",children:"→"}),f.jsxs("span",{className:"pipeline-step",children:[f.jsx("i",{className:"fa-solid fa-film"})," 4K EXPORT"]})]})]})]})]})})]})})]})}const nd=[{icon:"fa-clapperboard",text:"Cinematic 4K Editing"},{icon:"fa-bolt",text:"Velocity Curves & Speed Ramps"},{icon:"fa-closed-captioning",text:"Kinetic Typography & Captions"},{icon:"fa-wand-magic-sparkles",text:"Color Grading & LUTs"},{icon:"fa-volume-high",text:"Sound Design & SFX Mastering"},{icon:"fa-handshake",text:"Brand Collabs & Sponsored Reels"},{icon:"fa-fire",text:"Viral Reels & Shorts"},{icon:"fa-layer-group",text:"CapCut & Premiere Pro Specialist"}];function aw(){return f.jsx("div",{className:"scrolling-ticker-wrapper","aria-hidden":"true",children:f.jsx("div",{className:"scrolling-ticker-track",children:[...nd,...nd,...nd].map((s,e)=>f.jsxs("div",{className:"ticker-item",children:[f.jsx("i",{className:`fa-solid ${s.icon} ticker-icon`}),f.jsx("span",{className:"ticker-text",children:s.text}),f.jsx("span",{className:"ticker-dot",children:"✦"})]},e))})})}function ow(){return f.jsx("section",{className:"pillars-section section-padding",id:"what-i-do",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-header scroll-reveal",children:[f.jsx("span",{className:"section-subtitle",children:"DUAL SUPERPOWERS"}),f.jsx("h2",{className:"section-title",children:"Two Passions. One Powerful Creator."}),f.jsx("div",{className:"title-underline"}),f.jsx("p",{className:"section-intro",children:"Whether you need a high-end cinematic video editor to transform your raw footage or an authentic content creator to promote your brand to an engaged audience — I bring both worlds together."})]}),f.jsxs("div",{className:"pillars-grid",children:[f.jsxs("div",{className:"pillar-card editor-pillar stagger-1 scroll-reveal",children:[f.jsxs("div",{className:"pillar-header",children:[f.jsx("div",{className:"pillar-icon-box",children:f.jsx("i",{className:"fa-solid fa-clapperboard"})}),f.jsxs("div",{className:"pillar-title-area",children:[f.jsx("span",{className:"pillar-tag",children:"POST-PRODUCTION"}),f.jsx("h3",{children:"The Video Editor"})]})]}),f.jsx("p",{className:"pillar-desc",children:"Transforming raw, unpolished clips into scroll-stopping visual narratives that grip viewer attention from the first second and keep watch times high."}),f.jsxs("div",{className:"pillar-features-list",children:[f.jsxs("div",{className:"feature-row",children:[f.jsx("i",{className:"fa-solid fa-bolt text-purple"}),f.jsxs("div",{children:[f.jsx("strong",{children:"Velocity Curves & Speed Ramping:"})," Perfectly timed cut transitions matching rhythmic beats."]})]}),f.jsxs("div",{className:"feature-row",children:[f.jsx("i",{className:"fa-solid fa-closed-captioning text-cyan"}),f.jsxs("div",{children:[f.jsx("strong",{children:"Kinetic Typography & Captions:"})," Dynamic animations in high-converting creator styles."]})]}),f.jsxs("div",{className:"feature-row",children:[f.jsx("i",{className:"fa-solid fa-wand-magic-sparkles text-purple"}),f.jsxs("div",{children:[f.jsx("strong",{children:"Cinematic LUT Color Grading:"})," Rich contrast and professional cinematic tones."]})]}),f.jsxs("div",{className:"feature-row",children:[f.jsx("i",{className:"fa-solid fa-volume-high text-cyan"}),f.jsxs("div",{children:[f.jsx("strong",{children:"Multi-Track Sound Design:"})," Immersive whooshes, risers, impacts, and audio mastering."]})]})]}),f.jsxs("div",{className:"pillar-footer",children:[f.jsxs("div",{className:"tools-badges",children:[f.jsx("span",{children:"CapCut Pro"}),f.jsx("span",{children:"Premiere Pro"}),f.jsx("span",{children:"After Effects"})]}),f.jsxs("a",{href:"#services",className:"pillar-link",children:["View Editing Rates ",f.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]}),f.jsxs("div",{className:"pillar-card creator-pillar stagger-2 scroll-reveal",children:[f.jsxs("div",{className:"pillar-header",children:[f.jsx("div",{className:"pillar-icon-box creator-icon-box",children:f.jsx("i",{className:"fa-solid fa-bullhorn"})}),f.jsxs("div",{className:"pillar-title-area",children:[f.jsx("span",{className:"pillar-tag creator-tag",children:"INFLUENCE & REACH"}),f.jsx("h3",{children:"The Content Creator"})]})]}),f.jsx("p",{className:"pillar-desc",children:"Building authentic trust with a passionate digital audience. Helping brands, apps, and startups reach targeted viewers through seamless sponsored integrations."}),f.jsxs("div",{className:"pillar-features-list",children:[f.jsxs("div",{className:"feature-row",children:[f.jsx("i",{className:"fa-solid fa-handshake text-teal"}),f.jsxs("div",{children:[f.jsx("strong",{children:"Dedicated Sponsored Reels:"})," Custom high-energy hook scripting, full video edit, and co-author tag."]})]}),f.jsxs("div",{className:"feature-row",children:[f.jsx("i",{className:"fa-solid fa-box-open text-blue"}),f.jsxs("div",{children:[f.jsx("strong",{children:"Product Showcases & Unboxings:"})," Authentic reviews and hands-on feature highlights."]})]}),f.jsxs("div",{className:"feature-row",children:[f.jsx("i",{className:"fa-solid fa-share-nodes text-teal"}),f.jsxs("div",{children:[f.jsx("strong",{children:"Story Promotions & Link Stickers:"})," 24h active engagement directly driving traffic to your brand."]})]}),f.jsxs("div",{className:"feature-row",children:[f.jsx("i",{className:"fa-solid fa-chart-line text-blue"}),f.jsxs("div",{children:[f.jsx("strong",{children:"Organic Viral Potential:"})," Algorithm-optimized formats engineered for maximum shares and saves."]})]})]}),f.jsxs("div",{className:"pillar-footer",children:[f.jsxs("div",{className:"tools-badges creator-badges",children:[f.jsx("span",{children:"Tech Gear"}),f.jsx("span",{children:"Creative Apps"}),f.jsx("span",{children:"Lifestyle"}),f.jsx("span",{children:"Audio"})]}),f.jsxs("a",{href:"https://wa.me/919360870164?text=Hi%20Bikash!%20I%20want%20to%20discuss%20a%20Brand%20Sponsorship%20/%20Paid%20Promotion%20collab.",target:"_blank",rel:"noopener noreferrer",className:"pillar-link creator-link",children:["Discuss Brand Collab ",f.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]})]})]})})}function lw(){return f.jsx("section",{className:"about-section section-padding",id:"about",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-header scroll-reveal",children:[f.jsx("span",{className:"section-subtitle",children:"WHO I AM"}),f.jsx("h2",{className:"section-title",children:"The Mind Behind The Timeline"}),f.jsx("div",{className:"title-underline"})]}),f.jsxs("div",{className:"about-grid",children:[f.jsxs("div",{className:"profile-simple-card about-image-card stagger-1 scroll-reveal",children:[f.jsx("img",{src:"assets/profile.jpg",alt:"Bikash Suna Profile",className:"profile-simple-img"}),f.jsxs("div",{className:"profile-simple-overlay",children:[f.jsx("span",{className:"profile-simple-tag",children:"VIDEO EDITOR & CONTENT CREATOR"}),f.jsx("h3",{className:"profile-simple-name",children:"Bikash Suna"})]})]}),f.jsxs("div",{className:"about-card intro-card stagger-2 scroll-reveal",children:[f.jsxs("div",{className:"about-card-header",children:[f.jsxs("div",{className:"slate-badge",children:[f.jsx("i",{className:"fa-solid fa-location-dot"})," ODISHA, IN"]}),f.jsxs("span",{className:"active-status",children:[f.jsx("span",{className:"pulse-dot"})," Available for Collabs"]})]}),f.jsx("h3",{className:"about-name",children:"Bikash Suna"}),f.jsx("p",{className:"about-description",children:"Operating out of Jharsuguda, Odisha. I translate raw footage into high-impact, scroll-stopping narratives while partnering with brands and digital creators for high-engagement paid promotions, sponsored reels, and authentic product showcases."}),f.jsxs("div",{className:"video-spec-sheet",children:[f.jsxs("div",{className:"spec-header",children:[f.jsx("i",{className:"fa-solid fa-circle-info"})," CREATOR & EDITOR PROFILE METADATA"]}),f.jsxs("div",{className:"spec-row",children:[f.jsx("span",{className:"spec-label",children:"Role"}),f.jsx("span",{className:"spec-value",children:"Editor & Content Creator"})]}),f.jsxs("div",{className:"spec-row",children:[f.jsx("span",{className:"spec-label",children:"Primary Tool"}),f.jsx("span",{className:"spec-value",children:"CapCut Specialist"})]}),f.jsxs("div",{className:"spec-row",children:[f.jsx("span",{className:"spec-label",children:"Paid Promo Modes"}),f.jsx("span",{className:"spec-value",children:"Reels, Stories, Co-Author"})]}),f.jsxs("div",{className:"spec-row",children:[f.jsx("span",{className:"spec-label",children:"Collab Niches"}),f.jsx("span",{className:"spec-value",children:"Tech, Lifestyle, Gear & Apps"})]})]})]})]}),f.jsxs("div",{className:"about-skills-stack",children:[f.jsxs("div",{className:"skill-item stagger-1 scroll-reveal",children:[f.jsx("div",{className:"skill-icon-wrapper skill-cyan",children:f.jsx("i",{className:"fa-solid fa-gauge-high"})}),f.jsxs("div",{className:"skill-text-box",children:[f.jsx("h4",{children:"Velocity & Speed Ramps"}),f.jsx("p",{children:"Applying smooth custom speed curves, velocity ramps, and optical flow slow-motion to sync cuts with visual transitions."})]})]}),f.jsxs("div",{className:"skill-item stagger-2 scroll-reveal",children:[f.jsx("div",{className:"skill-icon-wrapper skill-purple",children:f.jsx("i",{className:"fa-solid fa-comment-dots"})}),f.jsxs("div",{className:"skill-text-box",children:[f.jsx("h4",{children:"Trending Auto-Captions"}),f.jsx("p",{children:"Generating auto-sync'd dynamic text overlays with CapCut's trending typography styles and slide-in motion presets."})]})]}),f.jsxs("div",{className:"skill-item stagger-3 scroll-reveal",children:[f.jsx("div",{className:"skill-icon-wrapper skill-blue",children:f.jsx("i",{className:"fa-solid fa-key"})}),f.jsxs("div",{className:"skill-text-box",children:[f.jsx("h4",{children:"Keyframe Animations"}),f.jsx("p",{children:"Adding custom keyframe trajectories for smooth camera zooms, overlay panning, and picture-in-picture (PIP) layouts."})]})]}),f.jsxs("div",{className:"skill-item stagger-4 scroll-reveal",children:[f.jsx("div",{className:"skill-icon-wrapper skill-teal",children:f.jsx("i",{className:"fa-solid fa-bullhorn"})}),f.jsxs("div",{className:"skill-text-box",children:[f.jsx("h4",{children:"Brand Collabs & Paid Promo"}),f.jsx("p",{children:"Tailored brand integrations, high-converting sponsor hooks, co-authored Instagram reels, and authentic product showcases."})]})]})]})]})})}function cw(){const s=[{num:"01",title:"Briefing & Goal Alignment",desc:"We discuss your product, target audience, key selling points, and the core call-to-action (CTA).",icon:"fa-clipboard-list"},{num:"02",title:"Scripting & Hook Engineering",desc:"I draft a punchy 3-second hook and structured storyline tailored to hook viewers and avoid skip-offs.",icon:"fa-pen-ruler"},{num:"03",title:"Cinematic Shooting & Editing",desc:"High-definition capture with dynamic speed ramping, beat syncing, color grading, and SFX.",icon:"fa-video"},{num:"04",title:"Review & Collaborative Launch",desc:"You review the final edit, then we publish as a tagged Instagram Co-Author Reel with story links.",icon:"fa-rocket"}];return f.jsx("section",{className:"mediakit-section section-padding",id:"media-kit",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-header scroll-reveal",children:[f.jsx("span",{className:"section-subtitle",children:"CREATOR MEDIA KIT"}),f.jsx("h2",{className:"section-title",children:"Brand Partnerships & Audience Metrics"}),f.jsx("div",{className:"title-underline"}),f.jsx("p",{className:"section-intro",children:"Connect with a highly engaged demographic of creators, tech enthusiasts, and digital trendsetters. Transparent metrics built for measurable sponsor ROI."})]}),f.jsxs("div",{className:"mediakit-stats-grid",children:[f.jsxs("div",{className:"mediakit-stat-card stagger-1 scroll-reveal",children:[f.jsx("span",{className:"mediakit-stat-number gradient-text",children:"50K+"}),f.jsx("span",{className:"mediakit-stat-label",children:"Monthly Impressions"}),f.jsx("span",{className:"mediakit-stat-sub",children:"Across Reels & Shorts"})]}),f.jsxs("div",{className:"mediakit-stat-card stagger-2 scroll-reveal",children:[f.jsx("span",{className:"mediakit-stat-number text-cyan",children:"15K - 45K"}),f.jsx("span",{className:"mediakit-stat-label",children:"Avg Reel Views"}),f.jsx("span",{className:"mediakit-stat-sub",children:"High watch-time retention"})]}),f.jsxs("div",{className:"mediakit-stat-card stagger-3 scroll-reveal",children:[f.jsx("span",{className:"mediakit-stat-number text-teal",children:"8.4%"}),f.jsx("span",{className:"mediakit-stat-label",children:"Engagement Rate"}),f.jsx("span",{className:"mediakit-stat-sub",children:"High comment & save ratio"})]}),f.jsxs("div",{className:"mediakit-stat-card stagger-4 scroll-reveal",children:[f.jsx("span",{className:"mediakit-stat-number text-purple",children:"18 - 34"}),f.jsx("span",{className:"mediakit-stat-label",children:"Core Demographic"}),f.jsx("span",{className:"mediakit-stat-sub",children:"Tech, Creator & Lifestyle"})]})]}),f.jsxs("div",{className:"workflow-container scroll-reveal",children:[f.jsxs("div",{className:"workflow-header",children:[f.jsx("h3",{children:"How Brand Collaborations Work"}),f.jsx("p",{children:"From initial contact to live published campaign in 4 structured steps."})]}),f.jsx("div",{className:"workflow-steps-grid",children:s.map((e,t)=>f.jsxs("div",{className:`workflow-step-card stagger-${t%4+1} scroll-reveal`,children:[f.jsx("div",{className:"step-badge",children:e.num}),f.jsx("div",{className:"step-icon",children:f.jsx("i",{className:`fa-solid ${e.icon}`})}),f.jsx("h4",{children:e.title}),f.jsx("p",{children:e.desc})]},t))}),f.jsxs("div",{className:"workflow-cta-banner scroll-reveal",children:[f.jsxs("div",{children:[f.jsx("h4",{children:"Ready to promote your product or campaign?"}),f.jsx("p",{children:"Starter packages begin at ₹1,500 with full video production included."})]}),f.jsxs("a",{href:"https://wa.me/919360870164?text=Hi%20Bikash!%20I%20want%20to%20collaborate%20for%20a%20Paid%20Promotion%20/%20Brand%20Sponsorship.",target:"_blank",rel:"noopener noreferrer",className:"btn btn-accent",children:[f.jsx("i",{className:"fa-solid fa-handshake"})," Book Brand Sponsorship"]})]})]})]})})}function uw({isOpen:s,project:e,onClose:t}){const[r,o]=dt.useState(!1),[l,u]=dt.useState(0),d=(e==null?void 0:e.category)==="album"?90:30;if(dt.useEffect(()=>{s&&(o(!1),u(0))},[s,e]),dt.useEffect(()=>{const x=_=>{_.key==="Escape"&&s&&t()};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[s,t]),dt.useEffect(()=>{let x;return r&&(x=setInterval(()=>{u(_=>_>=d?0:_+.1)},100)),()=>clearInterval(x)},[r,d]),!s||!e)return null;const p=x=>{const _=Math.floor(x/60),M=Math.floor(x%60).toString().padStart(2,"0");return`${_}:${M}`},m=l/d*100,v=e.category==="reel"?"Short Reel":e.category==="album"?"Video Album":"Brand Collab";return f.jsxs("div",{className:`modal ${s?"active":""}`,id:"video-modal",children:[f.jsx("div",{className:"modal-backdrop",onClick:t}),f.jsxs("div",{className:"modal-content",children:[f.jsx("button",{className:"modal-close",onClick:t,"aria-label":"Close modal",children:f.jsx("i",{className:"fa-solid fa-xmark"})}),f.jsx("div",{className:"video-container",children:f.jsxs("div",{className:"simulated-player",children:[f.jsxs("div",{className:"player-overlay-ui",children:[f.jsxs("div",{className:"player-header",children:[f.jsx("span",{className:"player-title",children:e.title}),f.jsx("span",{className:"player-badge",children:v})]}),f.jsx("div",{className:"player-center",children:!r&&f.jsx("button",{className:"player-play-trigger",onClick:()=>o(!0),"aria-label":"Play video",children:f.jsx("i",{className:"fa-solid fa-play"})})}),f.jsxs("div",{className:"player-footer",children:[f.jsx("div",{className:"progress-bar-container",children:f.jsx("div",{className:"progress-bar-bg",children:f.jsx("div",{className:"progress-bar-fill",style:{width:`${m}%`}})})}),f.jsxs("div",{className:"player-controls",children:[f.jsxs("div",{className:"left-controls",children:[f.jsx("button",{className:"control-btn",onClick:()=>o(!r),"aria-label":r?"Pause":"Play",children:f.jsx("i",{className:`fa-solid ${r?"fa-pause":"fa-play"}`})}),f.jsx("button",{className:"control-btn","aria-label":"Volume",children:f.jsx("i",{className:"fa-solid fa-volume-high"})}),f.jsxs("span",{className:"player-time",children:[p(l)," / ",p(d)]})]}),f.jsxs("div",{className:"right-controls",children:[f.jsx("span",{className:"editor-watermark",children:"Edited by Bikash Suna"}),f.jsx("button",{className:"control-btn","aria-label":"Maximize",children:f.jsx("i",{className:"fa-solid fa-maximize"})})]})]})]})]}),f.jsxs("div",{className:"player-video-canvas",children:[f.jsx("div",{className:"glow-wave",style:{animationPlayState:r?"running":"paused"}}),f.jsx("div",{className:"glow-wave-two",style:{animationPlayState:r?"running":"paused"}})]})]})})]})]})}const Xm=[{id:"reel-1",category:"reel",title:"Dynamic Motion Reel",desc:"High-energy visual cuts sync'd with electronic soundbeats and stylized kinetic text overlays.",img:"assets/reel.jpg",tags:["Beat Sync","Color Grade","Kinetic SFX"],badge:"Short Reel"},{id:"album-1",category:"album",title:"The Golden Union Wedding",desc:"Emotionally charged, slow-paced wedding narrative showcasing warm grading and soft focus edits.",img:"assets/album.jpg",tags:["Storytelling","Color Correction","Sound Mix"],badge:"Video Album"},{id:"reel-2",category:"reel",title:"Neon Gaming Highlights",desc:"Intense gaming montage featuring speed ramps, glitch transitions, and punchy visual beats.",img:"assets/hero.jpg",style:{objectPosition:"center bottom"},tags:["Speed Ramps","VFX","Glitch FX"],badge:"Short Reel"},{id:"collab-1",category:"collab",title:"Creator Gear Unbox & Sponsored Reel",desc:"High-converting sponsored reel featuring fast-paced feature highlights, authentic creator unboxing, and bio-link CTA.",img:"assets/reel.jpg",style:{filter:"hue-rotate(50deg) saturate(1.2)"},tags:["Paid Promotion","Brand Collab","Sponsor Hook"],badge:"Brand Collab",isCollab:!0}];function dw(){const[s,e]=dt.useState("all"),[t,r]=dt.useState(null),o=s==="all"?Xm:Xm.filter(l=>l.category===s);return f.jsxs("section",{className:"portfolio-section section-padding",id:"portfolio",children:[f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-header scroll-reveal",children:[f.jsx("span",{className:"section-subtitle",children:"MY WORK"}),f.jsx("h2",{className:"section-title",children:"Featured Editing Showreel"}),f.jsx("div",{className:"title-underline"})]}),f.jsxs("div",{className:"portfolio-tabs scroll-reveal",children:[f.jsx("button",{className:`portfolio-tab ${s==="all"?"active":""}`,onClick:()=>e("all"),children:"All Projects"}),f.jsx("button",{className:`portfolio-tab ${s==="reel"?"active":""}`,onClick:()=>e("reel"),children:"Short Reels"}),f.jsx("button",{className:`portfolio-tab ${s==="album"?"active":""}`,onClick:()=>e("album"),children:"Long Albums"}),f.jsx("button",{className:`portfolio-tab ${s==="collab"?"active":""}`,onClick:()=>e("collab"),children:"Brand Collabs"})]}),f.jsx("div",{className:"portfolio-grid",id:"portfolio-grid",children:o.map((l,u)=>f.jsxs("div",{className:`portfolio-card stagger-${u%4+1}`,onClick:()=>r(l),children:[f.jsxs("div",{className:"portfolio-img-wrapper",children:[f.jsx("img",{src:l.img,alt:l.title,className:"portfolio-img",style:l.style||{}}),f.jsxs("div",{className:"portfolio-overlay",children:[f.jsx("div",{className:"play-btn",children:f.jsx("i",{className:"fa-solid fa-play"})}),f.jsxs("span",{className:`item-tag ${l.isCollab?"collab-tag":""}`,children:[l.isCollab&&f.jsx("i",{className:"fa-solid fa-handshake"})," ",l.badge]})]})]}),f.jsxs("div",{className:"portfolio-info",children:[f.jsx("h3",{children:l.title}),f.jsx("p",{children:l.desc}),f.jsx("div",{className:"tag-row",children:l.tags.map((d,p)=>f.jsx("span",{children:d},p))})]})]},l.id))})]}),f.jsx(uw,{isOpen:!!t,project:t,onClose:()=>r(null)})]})}function hw(){return f.jsx("section",{className:"services-section section-padding",id:"services",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-header scroll-reveal",children:[f.jsx("span",{className:"section-subtitle",children:"SERVICES, COLLABS & PRICING"}),f.jsx("h2",{className:"section-title",children:"Transparent & Affordable Packages"}),f.jsx("div",{className:"title-underline"})]}),f.jsxs("div",{className:"services-grid",children:[f.jsxs("div",{className:"pricing-card stagger-1 scroll-reveal",children:[f.jsx("div",{className:"pricing-badge",children:"Short Format"}),f.jsx("h3",{className:"package-name",children:"Short Reel Edit"}),f.jsxs("div",{className:"price-box",children:[f.jsx("span",{className:"currency",children:"₹"}),f.jsx("span",{className:"price",children:"600"}),f.jsx("span",{className:"duration",children:"/ video"})]}),f.jsx("p",{className:"package-desc",children:"Perfect for Instagram Reels, YouTube Shorts, and TikToks. Engineered to go viral and capture attention instantly."}),f.jsxs("ul",{className:"package-features",children:[f.jsxs("li",{children:[f.jsx("i",{className:"fa-solid fa-check"})," Up to 2 Minutes Length"]}),f.jsxs("li",{children:[f.jsx("i",{className:"fa-solid fa-check"})," Dynamic Caption Styling"]}),f.jsxs("li",{children:[f.jsx("i",{className:"fa-solid fa-check"})," Sound Effects & Beats Sync"]}),f.jsxs("li",{children:[f.jsx("i",{className:"fa-solid fa-check"})," Color Grading & Correction"]}),f.jsxs("li",{children:[f.jsx("i",{className:"fa-solid fa-check"})," High Resolution Export"]}),f.jsxs("li",{children:[f.jsx("i",{className:"fa-solid fa-check"})," 2 Revision Cycles"]})]}),f.jsx("div",{className:"pricing-cta",children:f.jsx("a",{href:"https://wa.me/919360870164?text=Hi%20Bikash!%20I%20want%20to%20order%20a%20Short%20Reel%20editing%20service.",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary btn-block",children:"Order Short Reel"})})]}),f.jsxs("div",{className:"pricing-card highlighted stagger-2 scroll-reveal",children:[f.jsx("div",{className:"pricing-badge recommended",children:"Best Seller"}),f.jsx("h3",{className:"package-name",children:"Long Video Album"}),f.jsxs("div",{className:"price-box",children:[f.jsx("span",{className:"currency",children:"₹"}),f.jsx("span",{className:"price",children:"3000"}),f.jsx("span",{className:"duration",children:"/ video"})]}),f.jsx("p",{className:"package-desc",children:"Ideal for wedding highlight videos, music videos, vlogs, documentaries, and travel albums. Comprehensive story-driven edits."}),f.jsxs("ul",{className:"package-features",children:[f.jsxs("li",{children:[f.jsx("i",{className:"fa-solid fa-check"})," Fully Customized Length"]}),f.jsxs("li",{children:[f.jsx("i",{className:"fa-solid fa-check"})," Narrative & Storytelling Pacing"]}),f.jsxs("li",{children:[f.jsx("i",{className:"fa-solid fa-check"})," Advanced Color Grading (LUTs)"]}),f.jsxs("li",{children:[f.jsx("i",{className:"fa-solid fa-check"})," Full Multi-track Sound Mixing"]}),f.jsxs("li",{children:[f.jsx("i",{className:"fa-solid fa-check"})," Cinematic Motion Transitions"]}),f.jsxs("li",{children:[f.jsx("i",{className:"fa-solid fa-check"})," 3 Revision Cycles"]})]}),f.jsx("div",{className:"pricing-cta",children:f.jsx("a",{href:"https://wa.me/919360870164?text=Hi%20Bikash!%20I%20want%20to%20order%20a%20Long%20Video%20Album%20editing%20service.",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary btn-block",children:"Order Long Album"})})]}),f.jsxs("div",{className:"pricing-card collab-card stagger-3 scroll-reveal",children:[f.jsxs("div",{className:"pricing-badge promo-badge",children:[f.jsx("i",{className:"fa-solid fa-bolt"})," Sponsor Collab"]}),f.jsx("h3",{className:"package-name",children:"Paid Promotion & Collab"}),f.jsxs("div",{className:"price-box",children:[f.jsx("span",{className:"currency",children:"₹"}),f.jsx("span",{className:"price",children:"1500"}),f.jsx("span",{className:"duration",children:"/ campaign"})]}),f.jsx("p",{className:"package-desc",children:"Designed for brands, startups, music creators, and products looking for organic reach, authentic creator advocacy, and sponsored reels."}),f.jsxs("ul",{className:"package-features",children:[f.jsxs("li",{children:[f.jsx("i",{className:"fa-solid fa-check"})," 1 Dedicated Sponsored Reel"]}),f.jsxs("li",{children:[f.jsx("i",{className:"fa-solid fa-check"})," Co-Author / Tagged Collab Post"]}),f.jsxs("li",{children:[f.jsx("i",{className:"fa-solid fa-check"})," 24h Active Story with Swipe-Up / Link"]}),f.jsxs("li",{children:[f.jsx("i",{className:"fa-solid fa-check"})," High-Energy Hook & Scripting"]}),f.jsxs("li",{children:[f.jsx("i",{className:"fa-solid fa-check"})," Pro Video Production Included"]}),f.jsxs("li",{children:[f.jsx("i",{className:"fa-solid fa-check"})," Direct Traffic to Your Brand"]})]}),f.jsx("div",{className:"pricing-cta",children:f.jsxs("a",{href:"https://wa.me/919360870164?text=Hi%20Bikash!%20I%20want%20to%20book%20a%20Paid%20Promotion%20/%20Brand%20Collab%20campaign.",target:"_blank",rel:"noopener noreferrer",className:"btn btn-accent btn-block",children:[f.jsx("i",{className:"fa-solid fa-handshake"})," Book Brand Collab"]})})]})]})]})})}function fw(){const[s,e]=dt.useState(!1),t="9360870164",r=()=>{navigator.clipboard.writeText(t).then(()=>{e(!0),setTimeout(()=>e(!1),2e3)})};return f.jsx("section",{className:"contact-section section-padding",id:"contact",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-header scroll-reveal",children:[f.jsx("span",{className:"section-subtitle",children:"GET IN TOUCH & PAY"}),f.jsx("h2",{className:"section-title",children:"Start Your Project Today"}),f.jsx("div",{className:"title-underline"})]}),f.jsxs("div",{className:"contact-grid",children:[f.jsxs("div",{className:"contact-info-card scroll-reveal",children:[f.jsx("h3",{children:"Contact Information"}),f.jsx("p",{children:"Have an idea or raw footage that needs visual magic? Reach out on phone or social media to discuss rates, storyboards, or brand sponsorships."}),f.jsxs("div",{className:"contact-details",children:[f.jsxs("a",{href:"https://wa.me/919360870164?text=Hi%20Bikash!%20I%20represent%20a%20brand%20and%20want%20to%20collaborate%20for%20a%20paid%20promotion.",target:"_blank",rel:"noopener noreferrer",className:"contact-detail-item collab-highlight-item",children:[f.jsx("div",{className:"icon-box collab-icon",children:f.jsx("i",{className:"fa-solid fa-bullhorn"})}),f.jsxs("div",{children:[f.jsx("span",{className:"contact-label",children:"Brand Inquiries & Collabs"}),f.jsxs("span",{className:"contact-value",children:["WhatsApp Sponsor Desk"," ",f.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square",style:{fontSize:"0.75rem",marginLeft:"0.25rem"}})]})]})]}),f.jsxs("a",{href:"tel:9360870164",className:"contact-detail-item",children:[f.jsx("div",{className:"icon-box",children:f.jsx("i",{className:"fa-solid fa-phone"})}),f.jsxs("div",{children:[f.jsx("span",{className:"contact-label",children:"Mobile Call"}),f.jsx("span",{className:"contact-value",children:"+91 9360870164"})]})]}),f.jsxs("a",{href:"https://instagram.com/bikash_suna_07",target:"_blank",rel:"noopener noreferrer",className:"contact-detail-item",children:[f.jsx("div",{className:"icon-box",children:f.jsx("i",{className:"fa-brands fa-instagram"})}),f.jsxs("div",{children:[f.jsx("span",{className:"contact-label",children:"Instagram Profile"}),f.jsx("span",{className:"contact-value",children:"@bikash_suna_07"})]})]}),f.jsxs("div",{className:"contact-detail-item",children:[f.jsx("div",{className:"icon-box",children:f.jsx("i",{className:"fa-solid fa-location-dot"})}),f.jsxs("div",{children:[f.jsx("span",{className:"contact-label",children:"Location"}),f.jsx("span",{className:"contact-value",children:"Odisha, Jharsuguda"})]})]})]}),f.jsxs("div",{className:"social-links-row",children:[f.jsx("a",{href:"https://instagram.com/bikash_suna_07",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:f.jsx("i",{className:"fa-brands fa-instagram"})}),f.jsx("a",{href:"https://wa.me/919360870164",target:"_blank",rel:"noopener noreferrer","aria-label":"WhatsApp",children:f.jsx("i",{className:"fa-brands fa-whatsapp"})}),f.jsx("a",{href:"tel:9360870164","aria-label":"Phone",children:f.jsx("i",{className:"fa-solid fa-phone"})})]})]}),f.jsxs("div",{className:"payment-card scroll-reveal",children:[f.jsxs("div",{className:"payment-header",children:[f.jsx("h3",{children:"Quick & Easy Payments"}),f.jsx("p",{children:"Direct payments accepted via GPay, PhonePe, or Paytm UPI."})]}),f.jsxs("div",{className:"payment-body",children:[f.jsxs("div",{className:"upi-number-box",children:[f.jsx("span",{className:"upi-label",children:"UPI Phone / Payment Number"}),f.jsxs("div",{className:"copy-input-wrapper",children:[f.jsx("input",{type:"text",value:t,readOnly:!0}),f.jsx("button",{className:"btn-copy",onClick:r,"aria-label":"Copy UPI number",children:f.jsx("i",{className:s?"fa-solid fa-check text-emerald":"fa-regular fa-copy",style:{color:s?"#10b981":""}})}),f.jsx("span",{className:`copy-tooltip ${s?"show":""}`,children:"Copied!"})]})]}),f.jsxs("div",{className:"qr-container",children:[f.jsxs("div",{className:"qr-box",children:[f.jsxs("svg",{className:"qr-svg",viewBox:"0 0 100 100",children:[f.jsx("path",{d:"M 10 10 L 25 10 M 10 10 L 10 25",stroke:"#7c3aed",strokeWidth:"3",fill:"none"}),f.jsx("path",{d:"M 90 10 L 75 10 M 90 10 L 90 25",stroke:"#7c3aed",strokeWidth:"3",fill:"none"}),f.jsx("path",{d:"M 10 90 L 25 90 M 10 90 L 10 75",stroke:"#7c3aed",strokeWidth:"3",fill:"none"}),f.jsx("path",{d:"M 90 90 L 75 90 M 90 90 L 90 75",stroke:"#7c3aed",strokeWidth:"3",fill:"none"}),f.jsx("rect",{x:"20",y:"20",width:"15",height:"15",fill:"#f8fafc",rx:"2"}),f.jsx("rect",{x:"25",y:"25",width:"5",height:"5",fill:"#0d0f12"}),f.jsx("rect",{x:"65",y:"20",width:"15",height:"15",fill:"#f8fafc",rx:"2"}),f.jsx("rect",{x:"70",y:"25",width:"5",height:"5",fill:"#0d0f12"}),f.jsx("rect",{x:"20",y:"65",width:"15",height:"15",fill:"#f8fafc",rx:"2"}),f.jsx("rect",{x:"25",y:"70",width:"5",height:"5",fill:"#0d0f12"}),f.jsx("rect",{x:"45",y:"20",width:"6",height:"6",fill:"#7c3aed",rx:"1"}),f.jsx("rect",{x:"53",y:"28",width:"4",height:"4",fill:"#2563eb",rx:"1"}),f.jsx("rect",{x:"42",y:"38",width:"8",height:"4",fill:"#2563eb",rx:"1"}),f.jsx("rect",{x:"65",y:"45",width:"4",height:"12",fill:"#7c3aed",rx:"1"}),f.jsx("rect",{x:"20",y:"45",width:"10",height:"4",fill:"#7c3aed",rx:"1"}),f.jsx("rect",{x:"35",y:"52",width:"6",height:"6",fill:"#2563eb",rx:"1"}),f.jsx("rect",{x:"48",y:"65",width:"12",height:"4",fill:"#2563eb",rx:"1"}),f.jsx("rect",{x:"75",y:"65",width:"6",height:"6",fill:"#7c3aed",rx:"1"}),f.jsx("rect",{x:"45",y:"77",width:"4",height:"8",fill:"#7c3aed",rx:"1"}),f.jsx("rect",{x:"65",y:"75",width:"6",height:"4",fill:"#2563eb",rx:"1"})]}),f.jsx("div",{className:"qr-icon-center",children:f.jsx("i",{className:"fa-solid fa-indian-rupee-sign"})})]}),f.jsx("span",{className:"qr-text",children:"Scan with GPay / PhonePe / Paytm"})]})]})]})]})]})})}function pw(){return f.jsx("footer",{className:"main-footer",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"footer-grid",children:[f.jsxs("div",{className:"footer-brand",children:[f.jsxs("a",{href:"#hero",className:"logo",children:[f.jsx("span",{className:"logo-accent",children:"BIKASH"}),"SUNA"]}),f.jsx("p",{children:"Professional video editing and content creator services helping brands and digital creators tell visual stories that convert and engage."})]}),f.jsxs("div",{className:"footer-links",children:[f.jsx("h4",{children:"Navigation"}),f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"#hero",children:"Home"})}),f.jsx("li",{children:f.jsx("a",{href:"#about",children:"About"})}),f.jsx("li",{children:f.jsx("a",{href:"#portfolio",children:"Portfolio"})}),f.jsx("li",{children:f.jsx("a",{href:"#services",children:"Services & Collabs"})}),f.jsx("li",{children:f.jsx("a",{href:"#contact",children:"Contact & WhatsApp"})})]})]}),f.jsxs("div",{className:"footer-contact-info",children:[f.jsx("h4",{children:"Get in Touch"}),f.jsxs("p",{children:[f.jsx("i",{className:"fa-solid fa-phone"})," +91 9360870164"]}),f.jsxs("p",{children:[f.jsx("i",{className:"fa-brands fa-instagram"})," @bikash_suna_07"]}),f.jsxs("p",{children:[f.jsx("i",{className:"fa-solid fa-location-dot"})," Jharsuguda, Odisha"]})]})]}),f.jsx("div",{className:"footer-bottom",children:f.jsxs("p",{children:["© ",new Date().getFullYear()," Bikash Suna. All Rights Reserved. Powered by React & Three.js."]})})]})})}function mw(){const[s,e]=dt.useState(!1),[t,r]=dt.useState([{id:1,sender:"bot",text:"Hi there! 👋 Welcome to my studio portfolio. What kind of project or collaboration are you looking for?",time:"Just now"}]),[o,l]=dt.useState(!1),[u,d]=dt.useState(""),[p,m]=dt.useState(!0),[v,x]=dt.useState(null),_=dt.useRef(null),M="919360870164",E=[{id:"reel",icon:"fa-bolt",label:"Short Reel Edit (₹600)",msg:"Hi Bikash! I need a high-energy Short Reel editing service for Instagram/YouTube. Let us discuss the project details!"},{id:"album",icon:"fa-film",label:"Long Video Album (₹3000)",msg:"Hi Bikash! I am looking for a full story-driven Video Album / Wedding editing service. Let us connect!"},{id:"collab",icon:"fa-handshake",label:"Brand Collab / Paid Promo (₹1500)",msg:"Hi Bikash! I represent a brand and would like to collaborate with you for a Paid Promotion / Sponsored Reel campaign."},{id:"rush",icon:"fa-gauge-high",label:"Rush 24h Express Delivery",msg:"Hi Bikash! I have an urgent editing project that needs fast 24-48h turnaround. Are you available?"}];dt.useEffect(()=>{var N;s&&((N=_.current)==null||N.scrollIntoView({behavior:"smooth"}))},[t,o,s]);const A=N=>{x(N.id);const P={id:Date.now(),sender:"user",text:N.label,time:"Just now"};r(T=>[...T,P]),l(!0),setTimeout(()=>{l(!1);const T={id:Date.now()+1,sender:"bot",text:`Awesome choice! 🚀 Opening WhatsApp now with your "${N.label}" details ready...`,time:"Just now",actionUrl:`https://wa.me/${M}?text=${encodeURIComponent(N.msg)}`,actionLabel:"Click to Open WhatsApp"};r(j=>[...j,T]),setTimeout(()=>{window.open(`https://wa.me/${M}?text=${encodeURIComponent(N.msg)}`,"_blank")},700)},600)},S=N=>{if(N.preventDefault(),!u.trim())return;const P=u.trim();d("");const T={id:Date.now(),sender:"user",text:P,time:"Just now"};r(F=>[...F,T]),l(!0);const j=`https://wa.me/${M}?text=${encodeURIComponent(`Hi Bikash! Message from your portfolio: "${P}"`)}`;setTimeout(()=>{l(!1);const F={id:Date.now()+1,sender:"bot",text:"Connecting you straight to Bikash on WhatsApp right now! 💬",time:"Just now",actionUrl:j,actionLabel:"Open in WhatsApp"};r(U=>[...U,F]),setTimeout(()=>{window.open(j,"_blank")},600)},600)},y=()=>{e(!s),s||m(!1)};return f.jsxs("aside",{className:"floating-wa-container","aria-label":"WhatsApp automated chat assistant",children:[s&&f.jsxs("div",{className:"wa-chat-window animate-slide-up",role:"dialog","aria-modal":"true",children:[f.jsxs("div",{className:"wa-chat-header",children:[f.jsxs("div",{className:"wa-header-avatar-box",children:[f.jsx("img",{src:"assets/profile.jpg",alt:"Bikash Suna",className:"wa-header-avatar"}),f.jsx("span",{className:"wa-online-indicator"})]}),f.jsxs("div",{className:"wa-header-info",children:[f.jsxs("div",{className:"wa-header-name",children:[f.jsx("span",{children:"Bikash Suna"}),f.jsx("i",{className:"fa-solid fa-circle-check verified-badge",title:"Verified Creator"})]}),f.jsxs("div",{className:"wa-header-status",children:[f.jsx("span",{className:"pulse-dot-mini"}),f.jsx("span",{children:"Online • Instant WhatsApp Replies"})]})]}),f.jsx("button",{className:"wa-close-btn",onClick:()=>e(!1),"aria-label":"Close chat",children:f.jsx("i",{className:"fa-solid fa-xmark"})})]}),f.jsxs("div",{className:"wa-chat-body",children:[f.jsx("div",{className:"wa-chat-timestamp",children:f.jsx("span",{children:"Today • Direct Studio Hotline"})}),t.map(N=>f.jsx("div",{className:`wa-msg-bubble ${N.sender==="user"?"user-msg":"bot-msg"}`,children:f.jsxs("div",{className:"wa-bubble-content",children:[f.jsx("p",{children:N.text}),N.actionUrl&&f.jsxs("a",{href:N.actionUrl,target:"_blank",rel:"noopener noreferrer",className:"wa-direct-action-btn",children:[f.jsx("i",{className:"fa-brands fa-whatsapp"})," ",N.actionLabel]}),f.jsx("span",{className:"wa-msg-time",children:N.time})]})},N.id)),o&&f.jsx("div",{className:"wa-msg-bubble bot-msg typing-bubble",children:f.jsxs("div",{className:"typing-dots",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]})}),!v&&f.jsxs("div",{className:"wa-automation-presets",children:[f.jsx("span",{className:"presets-title",children:"Tap a quick option to start:"}),f.jsx("div",{className:"presets-grid",children:E.map(N=>f.jsxs("button",{type:"button",className:"preset-btn",onClick:()=>A(N),children:[f.jsx("i",{className:`fa-solid ${N.icon}`}),f.jsx("span",{children:N.label})]},N.id))})]}),f.jsx("div",{ref:_})]}),f.jsxs("form",{className:"wa-chat-footer",onSubmit:S,children:[f.jsx("input",{type:"text",className:"wa-chat-input",placeholder:"Type custom inquiry or rate...",value:u,onChange:N=>d(N.target.value)}),f.jsx("button",{type:"submit",className:"wa-send-btn",disabled:!u.trim(),"aria-label":"Send to WhatsApp",children:f.jsx("i",{className:"fa-solid fa-paper-plane"})})]})]}),f.jsxs("button",{type:"button",className:"floating-wa-btn",onClick:y,"aria-label":"Open WhatsApp automated chat",children:[f.jsxs("div",{className:"wa-icon-wrapper",children:[f.jsx("i",{className:`fa-brands fa-whatsapp ${s?"rotate-hide":"rotate-show"}`}),f.jsx("i",{className:`fa-solid fa-xmark ${s?"rotate-show":"rotate-hide"}`})]}),p&&!s&&f.jsx("span",{className:"wa-notification-badge","aria-label":"1 new message",children:"1"}),f.jsx("span",{className:"wa-btn-pulse-ring"}),f.jsx("span",{className:"wa-btn-pulse-glow"}),!s&&f.jsxs("div",{className:"wa-floating-tooltip",children:[f.jsx("span",{className:"tooltip-dot"}),f.jsx("span",{children:"Chat on WhatsApp"})]})]})]})}function gw(){const[s,e]=dt.useState(!1),[t,r]=dt.useState("hero"),o=dt.useRef(null),l=dt.useRef(null),u=dt.useRef(null),d=dt.useRef(null);dt.useEffect(()=>{const x=new D_({duration:.85,easing:T=>Math.min(1,1.001-Math.pow(2,-10*T)),direction:"vertical",gestureDirection:"vertical",smooth:!0,smoothTouch:!1,touchMultiplier:1.8});o.current=x,window.lenis=x;let _;function M(T){x.raf(T),_=requestAnimationFrame(M)}_=requestAnimationFrame(M);const E=["hero","what-i-do","about","media-kit","portfolio","services","contact"],A=100.53,S=({scroll:T,limit:j,progress:F})=>{const U=j>0?j:document.documentElement.scrollHeight-window.innerHeight,B=U>0?Math.min(100,Math.max(0,F!==void 0?F*100:T/U*100)):0,L=A-A*B/100;l.current&&(l.current.style.strokeDashoffset=`${L}`),u.current&&(u.current.textContent=`${Math.round(B)}%`),d.current&&(d.current.style.transform=`scaleX(${B/100})`);const R=T>300;e(ie=>ie!==R?R:ie);const z=window.innerHeight*.38;for(let ie=E.length-1;ie>=0;ie--){const Q=document.getElementById(E[ie]);if(Q&&Q.getBoundingClientRect().top<=z){r(he=>he!==E[ie]?E[ie]:he);break}}};x.on("scroll",S),S({scroll:window.scrollY,limit:document.documentElement.scrollHeight-window.innerHeight,progress:0});const y=T=>{const j=T.target.closest('a[href^="#"]');if(!j)return;const F=j.getAttribute("href");if(F&&F.startsWith("#")&&F.length>1){const U=document.querySelector(F);U&&(T.preventDefault(),x.scrollTo(U,{offset:-70,duration:.85}))}};document.addEventListener("click",y);const N=new IntersectionObserver(T=>{T.forEach(j=>{j.isIntersecting&&j.target.classList.add("is-revealed")})},{root:null,rootMargin:"0px 0px -50px 0px",threshold:.08}),P=document.querySelectorAll(".scroll-reveal, .reveal-on-scroll, .section-header, .pillar-card, .profile-simple-card, .intro-card, .skill-item, .mediakit-stat-card, .workflow-step-card, .pricing-card, .calculator-box, .contact-info-card, .payment-card");return P.forEach(T=>N.observe(T)),()=>{cancelAnimationFrame(_),x.destroy(),document.removeEventListener("click",y),P.forEach(T=>N.unobserve(T))}},[]);const p=()=>{o.current?o.current.scrollTo(0,{duration:.85}):window.scrollTo({top:0,behavior:"smooth"})},m=x=>{const _=document.getElementById(x);_&&(o.current?o.current.scrollTo(_,{offset:-70,duration:.85}):_.scrollIntoView({behavior:"smooth"}))},v=100.53;return f.jsxs("div",{className:"app-root",children:[f.jsx("div",{className:"scroll-progress-container","aria-hidden":"true",children:f.jsx("div",{ref:d,className:"scroll-progress-bar",style:{transform:"scaleX(0)"},children:f.jsx("div",{className:"scroll-progress-glow-head"})})}),f.jsx(I_,{activeSection:t,onNavigate:m}),f.jsxs("main",{children:[f.jsx(sw,{}),f.jsx(aw,{}),f.jsx(ow,{}),f.jsx(lw,{}),f.jsx(cw,{}),f.jsx(dw,{}),f.jsx(hw,{}),f.jsx(fw,{})]}),f.jsx(pw,{}),f.jsx(mw,{}),f.jsxs("button",{type:"button",className:`scroll-to-top-btn ${s?"visible":""}`,onClick:p,"aria-label":"Scroll back to top",children:[f.jsxs("svg",{className:"scroll-progress-ring",viewBox:"0 0 36 36","aria-hidden":"true",children:[f.jsx("circle",{className:"progress-ring-track",cx:"18",cy:"18",r:"16"}),f.jsx("circle",{ref:l,className:"progress-ring-indicator",cx:"18",cy:"18",r:"16",strokeDasharray:v,strokeDashoffset:v})]}),f.jsxs("div",{className:"scroll-btn-inner",children:[f.jsx("i",{className:"fa-solid fa-arrow-up scroll-top-arrow"}),f.jsx("span",{ref:u,className:"scroll-percent-label",children:"0%"})]}),f.jsx("span",{className:"scroll-btn-glow"})]})]})}w_.createRoot(document.getElementById("root")).render(f.jsx(v_.StrictMode,{children:f.jsx(gw,{})}));
