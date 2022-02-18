/*!
 * WeChat.js v 1.0.1
 * (c) 2020-2022 xiawang1024
 */
var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e,t){return e(t={exports:{}},t.exports),t.exports}var r,o,i=t(n((function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports}))),a=t(n((function(e){function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports}))),c=function(e){return e&&e.Math==Math&&e},u=c("object"==typeof globalThis&&globalThis)||c("object"==typeof window&&window)||c("object"==typeof self&&self)||c("object"==typeof e&&e)||function(){return this}()||Function("return this")(),s=function(e){try{return!!e()}catch(e){return!0}},f=!s((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),l=!s((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")})),d=Function.prototype.call,p=l?d.bind(d):function(){return d.apply(d,arguments)},h={}.propertyIsEnumerable,g=Object.getOwnPropertyDescriptor,m={f:g&&!h.call({1:2},1)?function(e){var t=g(this,e);return!!t&&t.enumerable}:h},v=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},y=Function.prototype,w=y.bind,S=y.call,b=l&&w.bind(S,S),T=l?function(e){return e&&b(e)}:function(e){return e&&function(){return S.apply(e,arguments)}},I=T({}.toString),_=T("".slice),k=function(e){return _(I(e),8,-1)},O=u.Object,x=T("".split),j=s((function(){return!O("z").propertyIsEnumerable(0)}))?function(e){return"String"==k(e)?x(e,""):O(e)}:O,P=u.TypeError,M=function(e){if(null==e)throw P("Can't call method on "+e);return e},E=function(e){return j(M(e))},A=function(e){return"function"==typeof e},C=function(e){return"object"==typeof e?null!==e:A(e)},L=function(e){return A(e)?e:void 0},V=function(e,t){return arguments.length<2?L(u[e]):u[e]&&u[e][t]},N=T({}.isPrototypeOf),R=V("navigator","userAgent")||"",B=u.process,D=u.Deno,U=B&&B.versions||D&&D.version,W=U&&U.v8;W&&(o=(r=W.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&R&&(!(r=R.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=R.match(/Chrome\/(\d+)/))&&(o=+r[1]);var Q=o,F=!!Object.getOwnPropertySymbols&&!s((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Q&&Q<41})),J=F&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,z=u.Object,q=J?function(e){return"symbol"==typeof e}:function(e){var t=V("Symbol");return A(t)&&N(t.prototype,z(e))},G=u.String,Z=function(e){try{return G(e)}catch(e){return"Object"}},X=u.TypeError,H=function(e){if(A(e))return e;throw X(Z(e)+" is not a function")},K=function(e,t){var n=e[t];return null==n?void 0:H(n)},Y=u.TypeError,$=Object.defineProperty,ee=function(e,t){try{$(u,e,{value:t,configurable:!0,writable:!0})}catch(n){u[e]=t}return t},te=u["__core-js_shared__"]||ee("__core-js_shared__",{}),ne=n((function(e){(e.exports=function(e,t){return te[e]||(te[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.21.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})})),re=u.Object,oe=function(e){return re(M(e))},ie=T({}.hasOwnProperty),ae=Object.hasOwn||function(e,t){return ie(oe(e),t)},ce=0,ue=Math.random(),se=T(1..toString),fe=function(e){return"Symbol("+(void 0===e?"":e)+")_"+se(++ce+ue,36)},le=ne("wks"),de=u.Symbol,pe=de&&de.for,he=J?de:de&&de.withoutSetter||fe,ge=function(e){if(!ae(le,e)||!F&&"string"!=typeof le[e]){var t="Symbol."+e;F&&ae(de,e)?le[e]=de[e]:le[e]=J&&pe?pe(t):he(t)}return le[e]},me=u.TypeError,ve=ge("toPrimitive"),ye=function(e,t){if(!C(e)||q(e))return e;var n,r=K(e,ve);if(r){if(void 0===t&&(t="default"),n=p(r,e,t),!C(n)||q(n))return n;throw me("Can't convert object to primitive value")}return void 0===t&&(t="number"),function(e,t){var n,r;if("string"===t&&A(n=e.toString)&&!C(r=p(n,e)))return r;if(A(n=e.valueOf)&&!C(r=p(n,e)))return r;if("string"!==t&&A(n=e.toString)&&!C(r=p(n,e)))return r;throw Y("Can't convert object to primitive value")}(e,t)},we=function(e){var t=ye(e,"string");return q(t)?t:t+""},Se=u.document,be=C(Se)&&C(Se.createElement),Te=function(e){return be?Se.createElement(e):{}},Ie=!f&&!s((function(){return 7!=Object.defineProperty(Te("div"),"a",{get:function(){return 7}}).a})),_e=Object.getOwnPropertyDescriptor,ke={f:f?_e:function(e,t){if(e=E(e),t=we(t),Ie)try{return _e(e,t)}catch(e){}if(ae(e,t))return v(!p(m.f,e,t),e[t])}},Oe=f&&s((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),xe=u.String,je=u.TypeError,Pe=function(e){if(C(e))return e;throw je(xe(e)+" is not an object")},Me=u.TypeError,Ee=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,Ce={f:f?Oe?function(e,t,n){if(Pe(e),t=we(t),Pe(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=Ae(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Ee(e,t,n)}:Ee:function(e,t,n){if(Pe(e),t=we(t),Pe(n),Ie)try{return Ee(e,t,n)}catch(e){}if("get"in n||"set"in n)throw Me("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},Le=f?function(e,t,n){return Ce.f(e,t,v(1,n))}:function(e,t,n){return e[t]=n,e},Ve=T(Function.toString);A(te.inspectSource)||(te.inspectSource=function(e){return Ve(e)});var Ne,Re,Be,De,Ue=te.inspectSource,We=u.WeakMap,Qe=A(We)&&/native code/.test(Ue(We)),Fe=ne("keys"),Je={},ze=u.TypeError,qe=u.WeakMap;if(Qe||te.state){var Ge=te.state||(te.state=new qe),Ze=T(Ge.get),Xe=T(Ge.has),He=T(Ge.set);Ne=function(e,t){if(Xe(Ge,e))throw new ze("Object already initialized");return t.facade=e,He(Ge,e,t),t},Re=function(e){return Ze(Ge,e)||{}},Be=function(e){return Xe(Ge,e)}}else{var Ke=Fe[De="state"]||(Fe[De]=fe(De));Je[Ke]=!0,Ne=function(e,t){if(ae(e,Ke))throw new ze("Object already initialized");return t.facade=e,Le(e,Ke,t),t},Re=function(e){return ae(e,Ke)?e[Ke]:{}},Be=function(e){return ae(e,Ke)}}var Ye={set:Ne,get:Re,has:Be,enforce:function(e){return Be(e)?Re(e):Ne(e,{})},getterFor:function(e){return function(t){var n;if(!C(t)||(n=Re(t)).type!==e)throw ze("Incompatible receiver, "+e+" required");return n}}},$e=Function.prototype,et=f&&Object.getOwnPropertyDescriptor,tt=ae($e,"name"),nt={EXISTS:tt,PROPER:tt&&"something"===function(){}.name,CONFIGURABLE:tt&&(!f||f&&et($e,"name").configurable)},rt=n((function(e){var t=nt.CONFIGURABLE,n=Ye.get,r=Ye.enforce,o=String(String).split("String");(e.exports=function(e,n,i,a){var c,s=!!a&&!!a.unsafe,f=!!a&&!!a.enumerable,l=!!a&&!!a.noTargetGet,d=a&&void 0!==a.name?a.name:n;A(i)&&("Symbol("===String(d).slice(0,7)&&(d="["+String(d).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!ae(i,"name")||t&&i.name!==d)&&Le(i,"name",d),(c=r(i)).source||(c.source=o.join("string"==typeof d?d:""))),e!==u?(s?!l&&e[n]&&(f=!0):delete e[n],f?e[n]=i:Le(e,n,i)):f?e[n]=i:ee(n,i)})(Function.prototype,"toString",(function(){return A(this)&&n(this).source||Ue(this)}))})),ot=Math.ceil,it=Math.floor,at=function(e){var t=+e;return t!=t||0===t?0:(t>0?it:ot)(t)},ct=Math.max,ut=Math.min,st=Math.min,ft=function(e){return(t=e.length)>0?st(at(t),9007199254740991):0;var t},lt=function(e){return function(t,n,r){var o,i=E(t),a=ft(i),c=function(e,t){var n=at(e);return n<0?ct(n+t,0):ut(n,t)}(r,a);if(e&&n!=n){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((e||c in i)&&i[c]===n)return e||c||0;return!e&&-1}},dt={includes:lt(!0),indexOf:lt(!1)}.indexOf,pt=T([].push),ht=function(e,t){var n,r=E(e),o=0,i=[];for(n in r)!ae(Je,n)&&ae(r,n)&&pt(i,n);for(;t.length>o;)ae(r,n=t[o++])&&(~dt(i,n)||pt(i,n));return i},gt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],mt=gt.concat("length","prototype"),vt={f:Object.getOwnPropertyNames||function(e){return ht(e,mt)}},yt={f:Object.getOwnPropertySymbols},wt=T([].concat),St=V("Reflect","ownKeys")||function(e){var t=vt.f(Pe(e)),n=yt.f;return n?wt(t,n(e)):t},bt=function(e,t,n){for(var r=St(t),o=Ce.f,i=ke.f,a=0;a<r.length;a++){var c=r[a];ae(e,c)||n&&ae(n,c)||o(e,c,i(t,c))}},Tt=/#|\.prototype\./,It=function(e,t){var n=kt[_t(e)];return n==xt||n!=Ot&&(A(t)?s(t):!!t)},_t=It.normalize=function(e){return String(e).replace(Tt,".").toLowerCase()},kt=It.data={},Ot=It.NATIVE="N",xt=It.POLYFILL="P",jt=It,Pt=ke.f,Mt=function(e,t){var n,r,o,i,a,c=e.target,s=e.global,f=e.stat;if(n=s?u:f?u[c]||ee(c,{}):(u[c]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(a=Pt(n,r))&&a.value:n[r],!jt(s?r:c+(f?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;bt(i,o)}(e.sham||o&&o.sham)&&Le(i,"sham",!0),rt(n,r,i,e)}},Et={};Et[ge("toStringTag")]="z";var At,Ct="[object z]"===String(Et),Lt=ge("toStringTag"),Vt=u.Object,Nt="Arguments"==k(function(){return arguments}()),Rt=Ct?k:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Vt(e),Lt))?n:Nt?k(t):"Object"==(r=k(t))&&A(t.callee)?"Arguments":r},Bt=u.String,Dt=function(e){if("Symbol"===Rt(e))throw TypeError("Cannot convert a Symbol value to a string");return Bt(e)},Ut=/"/g,Wt=T("".replace);Mt({target:"String",proto:!0,forced:(At="link",s((function(){var e=""[At]('"');return e!==e.toLowerCase()||e.split('"').length>3})))},{link:function(e){return t="a",n="href",r=e,o=Dt(M(this)),i="<"+t,""!==n&&(i+=" "+n+'="'+Wt(Dt(r),Ut,"&quot;")+'"'),i+">"+o+"</"+t+">";var t,n,r,o,i}});var Qt=Array.isArray||function(e){return"Array"==k(e)},Ft=function(e,t,n){var r=we(t);r in e?Ce.f(e,r,v(0,n)):e[r]=n},Jt=function(){},zt=[],qt=V("Reflect","construct"),Gt=/^\s*(?:class|function)\b/,Zt=T(Gt.exec),Xt=!Gt.exec(Jt),Ht=function(e){if(!A(e))return!1;try{return qt(Jt,zt,e),!0}catch(e){return!1}},Kt=function(e){if(!A(e))return!1;switch(Rt(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Xt||!!Zt(Gt,Ue(e))}catch(e){return!0}};Kt.sham=!0;var Yt=!qt||s((function(){var e;return Ht(Ht.call)||!Ht(Object)||!Ht((function(){e=!0}))||e}))?Kt:Ht,$t=ge("species"),en=u.Array,tn=function(e,t){return new(function(e){var t;return Qt(e)&&(t=e.constructor,(Yt(t)&&(t===en||Qt(t.prototype))||C(t)&&null===(t=t[$t]))&&(t=void 0)),void 0===t?en:t}(e))(0===t?0:t)},nn=ge("species"),rn=function(e){return Q>=51||!s((function(){var t=[];return(t.constructor={})[nn]=function(){return{foo:1}},1!==t[e](Boolean).foo}))},on=ge("isConcatSpreadable"),an=u.TypeError,cn=Q>=51||!s((function(){var e=[];return e[on]=!1,e.concat()[0]!==e})),un=rn("concat"),sn=function(e){if(!C(e))return!1;var t=e[on];return void 0!==t?!!t:Qt(e)};Mt({target:"Array",proto:!0,forced:!cn||!un},{concat:function(e){var t,n,r,o,i,a=oe(this),c=tn(a,0),u=0;for(t=-1,r=arguments.length;t<r;t++)if(sn(i=-1===t?a:arguments[t])){if(u+(o=ft(i))>9007199254740991)throw an("Maximum allowed index exceeded");for(n=0;n<o;n++,u++)n in i&&Ft(c,u,i[n])}else{if(u>=9007199254740991)throw an("Maximum allowed index exceeded");Ft(c,u++,i)}return c.length=u,c}});var fn=n((function(e){var t;t=window,e.exports=function(e,t){if(!e.jWeixin){var n,r={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},o=function(){var e={};for(var t in r)e[r[t]]=t;return e}(),i=e.document,a=i.title,c=navigator.userAgent.toLowerCase(),u=navigator.platform.toLowerCase(),s=!(!u.match("mac")&&!u.match("win")),f=-1!=c.indexOf("wxdebugger"),l=-1!=c.indexOf("micromessenger"),d=-1!=c.indexOf("android"),p=-1!=c.indexOf("iphone")||-1!=c.indexOf("ipad"),h=(n=c.match(/micromessenger\/(\d+\.\d+\.\d+)/)||c.match(/micromessenger\/(\d+\.\d+)/))?n[1]:"",g={initStartTime:A(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},m={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:p?1:d?2:-1,clientVersion:h,url:encodeURIComponent(location.href)},v={},y={_completes:[]},w={state:0,data:{}};C((function(){g.initEndTime=A()}));var S=!1,b=[],T={config:function(t){E("config",v=t);var n=!1!==v.check;C((function(){if(n)k(r.config,{verifyJsApiList:M(v.jsApiList),verifyOpenTagList:M(v.openTagList)},function(){y._complete=function(e){g.preVerifyEndTime=A(),w.state=1,w.data=e},y.success=function(e){m.isPreVerifyOk=0},y.fail=function(e){y._fail?y._fail(e):w.state=-1};var e=y._completes;return e.push((function(){!function(){if(!(s||f||v.debug||h<"6.0.2"||m.systemType<0)){var e=new Image;m.appId=v.appId,m.initTime=g.initEndTime-g.initStartTime,m.preVerifyTime=g.preVerifyEndTime-g.preVerifyStartTime,T.getNetworkType({isInnerInvoke:!0,success:function(t){m.networkType=t.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+m.version+"&o="+m.isPreVerifyOk+"&s="+m.systemType+"&c="+m.clientVersion+"&a="+m.appId+"&n="+m.networkType+"&i="+m.initTime+"&p="+m.preVerifyTime+"&u="+m.url;e.src=n}})}}()})),y.complete=function(t){for(var n=0,r=e.length;n<r;++n)e[n]();y._completes=[]},y}()),g.preVerifyStartTime=A();else{w.state=1;for(var e=y._completes,t=0,o=e.length;t<o;++t)e[t]();y._completes=[]}})),T.invoke||(T.invoke=function(t,n,r){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,x(n),r)},T.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})},ready:function(e){0!=w.state?e():(y._completes.push(e),!l&&v.debug&&e())},error:function(e){h<"6.0.2"||(-1==w.state?e(w.data):y._fail=e)},checkJsApi:function(e){k("checkJsApi",{jsApiList:M(e.jsApiList)},(e._complete=function(e){if(d){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var n in t){var r=o[n];r&&(t[r]=t[n],delete t[n])}return e}(e)},e))},onMenuShareTimeline:function(e){O(r.onMenuShareTimeline,{complete:function(){k("shareTimeline",{title:e.title||a,desc:e.title||a,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){O(r.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?k("sendAppMessage",{title:e.title||a,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):k("sendAppMessage",{title:e.title||a,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){O(r.onMenuShareQQ,{complete:function(){k("shareQQ",{title:e.title||a,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){O(r.onMenuShareWeibo,{complete:function(){k("shareWeiboApp",{title:e.title||a,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){O(r.onMenuShareQZone,{complete:function(){k("shareQZone",{title:e.title||a,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){k("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){k("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){k("startRecord",{},e)},stopRecord:function(e){k("stopRecord",{},e)},onVoiceRecordEnd:function(e){O("onVoiceRecordEnd",e)},playVoice:function(e){k("playVoice",{localId:e.localId},e)},pauseVoice:function(e){k("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){k("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){O("onVoicePlayEnd",e)},uploadVoice:function(e){k("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){k("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){k("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){k("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(d){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){k(r.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){k("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){k("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===S?(S=!0,k("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(S=!1,0<b.length){var t=b.shift();wx.getLocalImgData(t)}},e))):b.push(e)},getNetworkType:function(e){k("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var n=e.subtype;if(delete e.subtype,n)e.networkType=n;else{var r=t.indexOf(":"),o=t.substring(r+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){k("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){k(r.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){k("hideOptionMenu",{},e)},showOptionMenu:function(e){k("showOptionMenu",{},e)},closeWindow:function(e){k("closeWindow",{},e=e||{})},hideMenuItems:function(e){k("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){k("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){k("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){k("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){k("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(p){var t=e.resultStr;if(t){var n=JSON.parse(t);e.resultStr=n&&n.scan_code&&n.scan_code.scan_result}}},e))},openAddress:function(e){k(r.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))},openProductSpecificView:function(e){k(r.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,n=[],o=0,i=t.length;o<i;++o){var a=t[o],c={card_id:a.cardId,card_ext:a.cardExt};n.push(c)}k(r.addCard,{card_list:n},(e._complete=function(e){var t=e.card_list;if(t){for(var n=0,r=(t=JSON.parse(t)).length;n<r;++n){var o=t[n];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){k("chooseCard",{app_id:v.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,n=[],o=0,i=t.length;o<i;++o){var a=t[o],c={card_id:a.cardId,code:a.code};n.push(c)}k(r.openCard,{card_list:n},e)},consumeAndShareCard:function(e){k(r.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){k(r.chooseWXPay,j(e),e)},openEnterpriseRedPacket:function(e){k(r.openEnterpriseRedPacket,j(e),e)},startSearchBeacons:function(e){k(r.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){k(r.stopSearchBeacons,{},e)},onSearchBeacons:function(e){O(r.onSearchBeacons,e)},openEnterpriseChat:function(e){k("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){k("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var t=e.split("?")[0],n=e.split("?")[1];return t+=".html",void 0!==n?t+"?"+n:t}}(e.path),envVersion:e.envVersion},e)},openBusinessView:function(e){k("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(d){var t=e.extraData;if(t)try{e.extraData=JSON.parse(t)}catch(t){e.extraData={}}}},e))},miniProgram:{navigateBack:function(e){e=e||{},C((function(){k("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){C((function(){k("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){C((function(){k("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){C((function(){k("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){C((function(){k("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){C((function(){k("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(t){C((function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}},I=1,_={};return i.addEventListener("error",(function(e){if(!d){var t=e.target,n=t.tagName,r=t.src;if(("IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n)&&-1!=r.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=t["wx-id"];if(o||(o=I++,t["wx-id"]=o),_[o])return;_[o]=!0,wx.ready((function(){wx.getLocalImgData({localId:r,success:function(e){t.src=e.localData}})}))}}}),!0),i.addEventListener("load",(function(e){if(!d){var t=e.target,n=t.tagName;if(t.src,"IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){var r=t["wx-id"];r&&(_[r]=!1)}}}),!0),t&&(e.wx=e.jWeixin=T),T}function k(t,n,r){e.WeixinJSBridge?WeixinJSBridge.invoke(t,x(n),(function(e){P(t,e,r)})):E(t,r)}function O(t,n,r){e.WeixinJSBridge?WeixinJSBridge.on(t,(function(e){r&&r.trigger&&r.trigger(e),P(t,e,n)})):E(t,r||n)}function x(e){return(e=e||{}).appId=v.appId,e.verifyAppId=v.appId,e.verifySignType="sha1",e.verifyTimestamp=v.timestamp+"",e.verifyNonceStr=v.nonceStr,e.verifySignature=v.signature,e}function j(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function P(e,t,n){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var r=t.errMsg;r||(r=t.err_msg,delete t.err_msg,r=function(e,t){var n=e,r=o[n];r&&(n=r);var i="ok";if(t){var a=t.indexOf(":");"confirm"==(i=t.substring(a+1))&&(i="ok"),"failed"==i&&(i="fail"),-1!=i.indexOf("failed_")&&(i=i.substring(7)),-1!=i.indexOf("fail_")&&(i=i.substring(5)),"access denied"!=(i=(i=i.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=i||(i="permission denied"),"config"==n&&"function not exist"==i&&(i="ok"),""==i&&(i="fail")}return n+":"+i}(e,r),t.errMsg=r),(n=n||{})._complete&&(n._complete(t),delete n._complete),r=t.errMsg||"",v.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t));var i=r.indexOf(":");switch(r.substring(i+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function M(e){if(e){for(var t=0,n=e.length;t<n;++t){var o=e[t],i=r[o];i&&(e[t]=i)}return e}}function E(e,t){if(!(!v.debug||t&&t.isInnerInvoke)){var n=o[e];n&&(e=n),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function A(){return(new Date).getTime()}function C(t){l&&(e.WeixinJSBridge?t():i.addEventListener&&i.addEventListener("WeixinJSBridgeReady",t,!1))}}(t)})),ln=Ct?{}.toString:function(){return"[object "+Rt(this)+"]"};Ct||rt(Object.prototype,"toString",ln,{unsafe:!0});var dn=u.Promise,pn=u.String,hn=u.TypeError,gn=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=T(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(n,[]),t=n instanceof Array}catch(e){}return function(n,r){return Pe(n),function(e){if("object"==typeof e||A(e))return e;throw hn("Can't set "+pn(e)+" as a prototype")}(r),t?e(n,r):n.__proto__=r,n}}():void 0),mn=Ce.f,vn=ge("toStringTag"),yn=ge("species"),wn=u.TypeError,Sn=T(T.bind),bn=function(e,t){return H(e),void 0===t?e:l?Sn(e,t):function(){return e.apply(t,arguments)}},Tn={},In=ge("iterator"),_n=Array.prototype,kn=ge("iterator"),On=function(e){if(null!=e)return K(e,kn)||K(e,"@@iterator")||Tn[Rt(e)]},xn=u.TypeError,jn=function(e,t,n){var r,o;Pe(e);try{if(!(r=K(e,"return"))){if("throw"===t)throw n;return n}r=p(r,e)}catch(e){o=!0,r=e}if("throw"===t)throw n;if(o)throw r;return Pe(r),n},Pn=u.TypeError,Mn=function(e,t){this.stopped=e,this.result=t},En=Mn.prototype,An=function(e,t,n){var r,o,i,a,c,u,s,f,l=n&&n.that,d=!(!n||!n.AS_ENTRIES),h=!(!n||!n.IS_ITERATOR),g=!(!n||!n.INTERRUPTED),m=bn(t,l),v=function(e){return r&&jn(r,"normal",e),new Mn(!0,e)},y=function(e){return d?(Pe(e),g?m(e[0],e[1],v):m(e[0],e[1])):g?m(e,v):m(e)};if(h)r=e;else{if(!(o=On(e)))throw Pn(Z(e)+" is not iterable");if(void 0!==(f=o)&&(Tn.Array===f||_n[In]===f)){for(i=0,a=ft(e);a>i;i++)if((c=y(e[i]))&&N(En,c))return c;return new Mn(!1)}r=function(e,t){var n=arguments.length<2?On(e):t;if(H(n))return Pe(p(n,e));throw xn(Z(e)+" is not iterable")}(e,o)}for(u=r.next;!(s=p(u,r)).done;){try{c=y(s.value)}catch(e){jn(r,"throw",e)}if("object"==typeof c&&c&&N(En,c))return c}return new Mn(!1)},Cn=ge("iterator"),Ln=!1;try{var Vn=0,Nn={next:function(){return{done:!!Vn++}},return:function(){Ln=!0}};Nn[Cn]=function(){return this},Array.from(Nn,(function(){throw 2}))}catch(e){}var Rn,Bn,Dn,Un,Wn=u.TypeError,Qn=ge("species"),Fn=function(e,t){var n,r=Pe(e).constructor;return void 0===r||null==(n=Pe(r)[Qn])?t:function(e){if(Yt(e))return e;throw Wn(Z(e)+" is not a constructor")}(n)},Jn=Function.prototype,zn=Jn.apply,qn=Jn.call,Gn="object"==typeof Reflect&&Reflect.apply||(l?qn.bind(zn):function(){return qn.apply(zn,arguments)}),Zn=V("document","documentElement"),Xn=T([].slice),Hn=u.TypeError,Kn=function(e,t){if(e<t)throw Hn("Not enough arguments");return e},Yn=/(?:ipad|iphone|ipod).*applewebkit/i.test(R),$n="process"==k(u.process),er=u.setImmediate,tr=u.clearImmediate,nr=u.process,rr=u.Dispatch,or=u.Function,ir=u.MessageChannel,ar=u.String,cr=0,ur={};try{Rn=u.location}catch(e){}var sr=function(e){if(ae(ur,e)){var t=ur[e];delete ur[e],t()}},fr=function(e){return function(){sr(e)}},lr=function(e){sr(e.data)},dr=function(e){u.postMessage(ar(e),Rn.protocol+"//"+Rn.host)};er&&tr||(er=function(e){Kn(arguments.length,1);var t=A(e)?e:or(e),n=Xn(arguments,1);return ur[++cr]=function(){Gn(t,void 0,n)},Bn(cr),cr},tr=function(e){delete ur[e]},$n?Bn=function(e){nr.nextTick(fr(e))}:rr&&rr.now?Bn=function(e){rr.now(fr(e))}:ir&&!Yn?(Un=(Dn=new ir).port2,Dn.port1.onmessage=lr,Bn=bn(Un.postMessage,Un)):u.addEventListener&&A(u.postMessage)&&!u.importScripts&&Rn&&"file:"!==Rn.protocol&&!s(dr)?(Bn=dr,u.addEventListener("message",lr,!1)):Bn="onreadystatechange"in Te("script")?function(e){Zn.appendChild(Te("script")).onreadystatechange=function(){Zn.removeChild(this),sr(e)}}:function(e){setTimeout(fr(e),0)});var pr,hr,gr,mr,vr,yr,wr,Sr,br={set:er,clear:tr},Tr=/ipad|iphone|ipod/i.test(R)&&void 0!==u.Pebble,Ir=/web0s(?!.*chrome)/i.test(R),_r=ke.f,kr=br.set,Or=u.MutationObserver||u.WebKitMutationObserver,xr=u.document,jr=u.process,Pr=u.Promise,Mr=_r(u,"queueMicrotask"),Er=Mr&&Mr.value;Er||(pr=function(){var e,t;for($n&&(e=jr.domain)&&e.exit();hr;){t=hr.fn,hr=hr.next;try{t()}catch(e){throw hr?mr():gr=void 0,e}}gr=void 0,e&&e.enter()},Yn||$n||Ir||!Or||!xr?!Tr&&Pr&&Pr.resolve?((wr=Pr.resolve(void 0)).constructor=Pr,Sr=bn(wr.then,wr),mr=function(){Sr(pr)}):$n?mr=function(){jr.nextTick(pr)}:(kr=bn(kr,u),mr=function(){kr(pr)}):(vr=!0,yr=xr.createTextNode(""),new Or(pr).observe(yr,{characterData:!0}),mr=function(){yr.data=vr=!vr}));var Ar=Er||function(e){var t={fn:e,next:void 0};gr&&(gr.next=t),hr||(hr=t,mr()),gr=t},Cr=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=H(t),this.reject=H(n)},Lr={f:function(e){return new Cr(e)}},Vr=function(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}},Nr=function(){this.head=null,this.tail=null};Nr.prototype={add:function(e){var t={item:e,next:null};this.head?this.tail.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}};var Rr,Br,Dr,Ur,Wr,Qr,Fr,Jr=Nr,zr="object"==typeof window,qr=br.set,Gr=ge("species"),Zr="Promise",Xr=Ye.getterFor(Zr),Hr=Ye.set,Kr=Ye.getterFor(Zr),Yr=dn&&dn.prototype,$r=dn,eo=Yr,to=u.TypeError,no=u.document,ro=u.process,oo=Lr.f,io=oo,ao=!!(no&&no.createEvent&&u.dispatchEvent),co=A(u.PromiseRejectionEvent),uo=!1,so=jt(Zr,(function(){var e=Ue($r),t=e!==String($r);if(!t&&66===Q)return!0;if(Q>=51&&/native code/.test(e))return!1;var n=new $r((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))};return(n.constructor={})[Gr]=r,!(uo=n.then((function(){}))instanceof r)||!t&&zr&&!co})),fo=so||!function(e,t){if(!t&&!Ln)return!1;var n=!1;try{var r={};r[Cn]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(e){}return n}((function(e){$r.all(e).catch((function(){}))})),lo=function(e){var t;return!(!C(e)||!A(t=e.then))&&t},po=function(e,t){var n,r,o,i=t.value,a=1==t.state,c=a?e.ok:e.fail,u=e.resolve,s=e.reject,f=e.domain;try{c?(a||(2===t.rejection&&yo(t),t.rejection=1),!0===c?n=i:(f&&f.enter(),n=c(i),f&&(f.exit(),o=!0)),n===e.promise?s(to("Promise-chain cycle")):(r=lo(n))?p(r,n,u,s):u(n)):s(i)}catch(e){f&&!o&&f.exit(),s(e)}},ho=function(e,t){e.notified||(e.notified=!0,Ar((function(){for(var n,r=e.reactions;n=r.get();)po(n,e);e.notified=!1,t&&!e.rejection&&mo(e)})))},go=function(e,t,n){var r,o;ao?((r=no.createEvent("Event")).promise=t,r.reason=n,r.initEvent(e,!1,!0),u.dispatchEvent(r)):r={promise:t,reason:n},!co&&(o=u["on"+e])?o(r):"unhandledrejection"===e&&function(e,t){var n=u.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}("Unhandled promise rejection",n)},mo=function(e){p(qr,u,(function(){var t,n=e.facade,r=e.value;if(vo(e)&&(t=Vr((function(){$n?ro.emit("unhandledRejection",r,n):go("unhandledrejection",n,r)})),e.rejection=$n||vo(e)?2:1,t.error))throw t.value}))},vo=function(e){return 1!==e.rejection&&!e.parent},yo=function(e){p(qr,u,(function(){var t=e.facade;$n?ro.emit("rejectionHandled",t):go("rejectionhandled",t,e.value)}))},wo=function(e,t,n){return function(r){e(t,r,n)}},So=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=2,ho(e,!0))},bo=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw to("Promise can't be resolved itself");var r=lo(t);r?Ar((function(){var n={done:!1};try{p(r,t,wo(bo,n,e),wo(So,n,e))}catch(t){So(n,t,e)}})):(e.value=t,e.state=1,ho(e,!1))}catch(t){So({done:!1},t,e)}}};if(so&&(eo=($r=function(e){!function(e,t){if(N(t,e))return e;throw wn("Incorrect invocation")}(this,eo),H(e),p(Rr,this);var t=Xr(this);try{e(wo(bo,t),wo(So,t))}catch(e){So(t,e)}}).prototype,(Rr=function(e){Hr(this,{type:Zr,done:!1,notified:!1,parent:!1,reactions:new Jr,rejection:!1,state:0,value:void 0})}).prototype=function(e,t,n){for(var r in t)rt(e,r,t[r],n);return e}(eo,{then:function(e,t){var n=Kr(this),r=oo(Fn(this,$r));return n.parent=!0,r.ok=!A(e)||e,r.fail=A(t)&&t,r.domain=$n?ro.domain:void 0,0==n.state?n.reactions.add(r):Ar((function(){po(r,n)})),r.promise},catch:function(e){return this.then(void 0,e)}}),Br=function(){var e=new Rr,t=Xr(e);this.promise=e,this.resolve=wo(bo,t),this.reject=wo(So,t)},Lr.f=oo=function(e){return e===$r||e===Dr?new Br(e):io(e)},A(dn)&&Yr!==Object.prototype)){Ur=Yr.then,uo||(rt(Yr,"then",(function(e,t){var n=this;return new $r((function(e,t){p(Ur,n,e,t)})).then(e,t)}),{unsafe:!0}),rt(Yr,"catch",eo.catch,{unsafe:!0}));try{delete Yr.constructor}catch(e){}gn&&gn(Yr,eo)}Mt({global:!0,wrap:!0,forced:so},{Promise:$r}),Qr=Zr,Fr=!1,(Wr=$r)&&!Fr&&(Wr=Wr.prototype),Wr&&!ae(Wr,vn)&&mn(Wr,vn,{configurable:!0,value:Qr}),function(e){var t=V(e),n=Ce.f;f&&t&&!t[yn]&&n(t,yn,{configurable:!0,get:function(){return this}})}(Zr),Dr=V(Zr),Mt({target:Zr,stat:!0,forced:so},{reject:function(e){var t=oo(this);return p(t.reject,void 0,e),t.promise}}),Mt({target:Zr,stat:!0,forced:so},{resolve:function(e){return function(e,t){if(Pe(e),C(t)&&t.constructor===e)return t;var n=Lr.f(e);return(0,n.resolve)(t),n.promise}(this,e)}}),Mt({target:Zr,stat:!0,forced:fo},{all:function(e){var t=this,n=oo(t),r=n.resolve,o=n.reject,i=Vr((function(){var n=H(t.resolve),i=[],a=0,c=1;An(e,(function(e){var u=a++,s=!1;c++,p(n,t,e).then((function(e){s||(s=!0,i[u]=e,--c||r(i))}),o)})),--c||r(i)}));return i.error&&o(i.value),n.promise},race:function(e){var t=this,n=oo(t),r=n.reject,o=Vr((function(){var o=H(t.resolve);An(e,(function(e){p(o,t,e).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}});var To=T([].join),Io=j!=Object,_o=function(e,t){var n=[][e];return!!n&&s((function(){n.call(null,t||function(){return 1},1)}))}("join",",");Mt({target:"Array",proto:!0,forced:Io||!_o},{join:function(e){return To(E(this),void 0===e?",":e)}});var ko=T([].push),Oo=function(e){var t=1==e,n=2==e,r=3==e,o=4==e,i=6==e,a=7==e,c=5==e||i;return function(u,s,f,l){for(var d,p,h=oe(u),g=j(h),m=bn(s,f),v=ft(g),y=0,w=l||tn,S=t?w(u,v):n||a?w(u,0):void 0;v>y;y++)if((c||y in g)&&(p=m(d=g[y],y,h),e))if(t)S[y]=p;else if(p)switch(e){case 3:return!0;case 5:return d;case 6:return y;case 2:ko(S,d)}else switch(e){case 4:return!1;case 7:ko(S,d)}return i?-1:r||o?o:S}},xo={forEach:Oo(0),map:Oo(1),filter:Oo(2),some:Oo(3),every:Oo(4),find:Oo(5),findIndex:Oo(6),filterReject:Oo(7)}.map;Mt({target:"Array",proto:!0,forced:!rn("map")},{map:function(e){return xo(this,e,arguments.length>1?arguments[1]:void 0)}});var jo=Object.keys||function(e){return ht(e,gt)};Mt({target:"Object",stat:!0,forced:s((function(){jo(1)}))},{keys:function(e){return jo(oe(e))}});var Po=function(e){var t=encodeURIComponent(window.location.href);(function(e){return fetch("https://hudong.dianzhenkeji.com/api/jssdk.php",{body:(t=e,Object.keys(t).map((function(e){return"".concat(e,"=").concat(t[e])})).join("&")),method:"POST",headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then((function(e){return e.json()}));var t})(e?{url:t,appid:e}:{url:t}).then((function(e){var t=e.code,n=e.data;0===t?(console.log("获取api配置信息成功！"),fn.config({debug:!1,appId:n.appId,timestamp:n.timestamp,nonceStr:n.nonceStr,signature:n.signature,jsApiList:["updateAppMessageShareData","updateTimelineShareData","onMenuShareWeibo","onMenuShareQZone","chooseImage","previewImage","getNetworkType","openLocation","getLocation","hideOptionMenu","showOptionMenu","hideMenuItems","showMenuItems","hideAllNonBaseMenuItem","showAllNonBaseMenuItem","scanQRCode","chooseWXPay","openProductSpecificView"],openTagList:["wx-open-launch-app","wx-open-launch-weapp"]}),fn.error((function(){console.log("SDK config信息验证失败！")}))):console.log("获取api配置信息失败！")}))};function Mo(e,t,n){return function(e,t){if(e!==t)throw new TypeError("Private static access of wrong provenance")}(e,t),n}var Eo=function(){function e(t,n){i(this,e),Mo(e,e,Ao).call(e,t),n&&this.share(n)}return a(e,[{key:"share",value:function(e){!function(e){var t=e.title,n=e.desc,r=e.imgUrl,o=e.link,i=window.location,a=i.origin,c=i.pathname,u="".concat(a).concat(c);o||(o=u),fn.ready((function(){console.log("SDK config信息验证成功！"),fn.updateAppMessageShareData({title:t,desc:n,link:o,imgUrl:r,success:function(){console.log("“分享给朋友”及“分享到QQ”设置成功！")}}),fn.updateTimelineShareData({title:t,link:o,imgUrl:r,success:function(){console.log("“分享到朋友圈”及“分享到QQ空间”设置成功！")}})}))}({title:e.title,desc:e.desc,imgUrl:e.imgUrl,link:e.link})}}],[{key:"getWx",value:function(){return fn}}]),e}();function Ao(e){Po(e)}export{Eo as default};
