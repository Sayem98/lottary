import{i as pe,as as Bn,at as Wn,au as Fn,av as Hn,aw as zn,ax as Qn,ay as Jn,az as Vn,aA as Gn,aB as Yn,aC as Kn,aD as Zn,aE as Xn,aF as er,aG as tr,aH as nr,aI as rr,aJ as or,g as Xe,aK as ir,aL as sr,E as et}from"./index-cc35c0f4.js";import{b as ar,s as cr,m as lr,c as Q,I as ur,f as $e,J as De,H as dr}from"./http-f3dbd2ed.js";import{b as A,l as S,y as x,k as $,C as O,D as K,E as hr,F as fr,a as ee,h as ge,p as me,V as tt,s as nt,_ as rt,A as ot,c as it,T as st,q as at,x as ct,G as lt,d as ut,P as _r}from"./hooks.module-15a36251.js";const ae="Session currently connected",q="Session currently disconnected",pr="Session Rejected",gr="Missing JSON RPC response",mr='JSON-RPC success response must include "result" field',wr='JSON-RPC error response must include "error" field',yr='JSON RPC request must have valid "method" value',br='JSON RPC request must have valid "id" value',vr="Missing one of the required parameters: bridge / uri / session",Be="JSON RPC response format is invalid",Er="URI format is invalid",Sr="QRCode Modal not provided",We="User close QRCode Modal",Cr=["session_request","session_update","exchange_key","connect","disconnect","display_uri","modal_closed","transport_open","transport_close","transport_error"],kr=["wallet_addEthereumChain","wallet_switchEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode"],we=["eth_sendTransaction","eth_signTransaction","eth_sign","eth_signTypedData","eth_signTypedData_v1","eth_signTypedData_v2","eth_signTypedData_v3","eth_signTypedData_v4","personal_sign",...kr],ue="WALLETCONNECT_DEEPLINK_CHOICE",xr={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan"};var dt=ye;ye.strict=ht;ye.loose=ft;var Ir=Object.prototype.toString,Rr={"[object Int8Array]":!0,"[object Int16Array]":!0,"[object Int32Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Uint16Array]":!0,"[object Uint32Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0};function ye(t){return ht(t)||ft(t)}function ht(t){return t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Uint16Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array}function ft(t){return Rr[Ir.call(t)]}const Tr=pe(dt);var Or=dt.strict,Nr=function(e){if(Or(e)){var n=Buffer.from(e.buffer);return e.byteLength!==e.buffer.byteLength&&(n=n.slice(e.byteOffset,e.byteOffset+e.byteLength)),n}else return Buffer.from(e)};const Mr=pe(Nr),be="hex",ve="utf8",Lr="binary",qr="buffer",Ar="array",Ur="typed-array",Pr="array-buffer",te="0";function D(t){return new Uint8Array(t)}function Ee(t,e=!1){const n=t.toString(be);return e?J(n):n}function Se(t){return t.toString(ve)}function _t(t){return t.readUIntBE(0,t.length)}function W(t){return Mr(t)}function N(t,e=!1){return Ee(W(t),e)}function pt(t){return Se(W(t))}function gt(t){return _t(W(t))}function Ce(t){return Buffer.from(B(t),be)}function M(t){return D(Ce(t))}function jr(t){return Se(Ce(t))}function $r(t){return gt(M(t))}function ke(t){return Buffer.from(t,ve)}function mt(t){return D(ke(t))}function Dr(t,e=!1){return Ee(ke(t),e)}function Br(t){const e=parseInt(t,10);return io(oo(e),"Number can only safely store up to 53 bits"),e}function Wr(t){return Qr(xe(t))}function Fr(t){return Ie(xe(t))}function Hr(t,e){return Jr(xe(t),e)}function zr(t){return`${t}`}function xe(t){const e=(t>>>0).toString(2);return Te(e)}function Qr(t){return W(Ie(t))}function Ie(t){return new Uint8Array(Xr(t).map(e=>parseInt(e,2)))}function Jr(t,e){return N(Ie(t),e)}function Vr(t){return!(typeof t!="string"||!new RegExp(/^[01]+$/).test(t)||t.length%8!==0)}function wt(t,e){return!(typeof t!="string"||!t.match(/^0x[0-9A-Fa-f]*$/)||e&&t.length!==2+2*e)}function ne(t){return Buffer.isBuffer(t)}function Re(t){return Tr.strict(t)&&!ne(t)}function yt(t){return!Re(t)&&!ne(t)&&typeof t.byteLength<"u"}function Gr(t){return ne(t)?qr:Re(t)?Ur:yt(t)?Pr:Array.isArray(t)?Ar:typeof t}function Yr(t){return Vr(t)?Lr:wt(t)?be:ve}function Kr(...t){return Buffer.concat(t)}function bt(...t){let e=[];return t.forEach(n=>e=e.concat(Array.from(n))),new Uint8Array([...e])}function Zr(t,e=8){const n=t%e;return n?(t-n)/e*e+e:t}function Xr(t,e=8){const n=Te(t).match(new RegExp(`.{${e}}`,"gi"));return Array.from(n||[])}function Te(t,e=8,n=te){return eo(t,Zr(t.length,e),n)}function eo(t,e,n=te){return so(t,e,!0,n)}function B(t){return t.replace(/^0x/,"")}function J(t){return t.startsWith("0x")?t:`0x${t}`}function to(t){return t=B(t),t=Te(t,2),t&&(t=J(t)),t}function no(t){const e=t.startsWith("0x");return t=B(t),t=t.startsWith(te)?t.substring(1):t,e?J(t):t}function ro(t){return typeof t>"u"}function oo(t){return!ro(t)}function io(t,e){if(!t)throw new Error(e)}function so(t,e,n,r=te){const o=e-t.length;let s=t;if(o>0){const h=r.repeat(o);s=n?h+t:t+h}return s}function Z(t){return W(new Uint8Array(t))}function ao(t){return pt(new Uint8Array(t))}function vt(t,e){return N(new Uint8Array(t),!e)}function co(t){return gt(new Uint8Array(t))}function lo(...t){return M(t.map(e=>N(new Uint8Array(e))).join("")).buffer}function Et(t){return D(t).buffer}function uo(t){return Se(t)}function ho(t,e){return Ee(t,!e)}function fo(t){return _t(t)}function _o(...t){return Kr(...t)}function po(t){return mt(t).buffer}function go(t){return ke(t)}function mo(t,e){return Dr(t,!e)}function wo(t){return Br(t)}function yo(t){return Ce(t)}function St(t){return M(t).buffer}function bo(t){return jr(t)}function vo(t){return $r(t)}function Eo(t){return Wr(t)}function So(t){return Fr(t).buffer}function Co(t){return zr(t)}function Ct(t,e){return Hr(Number(t),!e)}const ko=Hn,xo=zn,Io=Qn,Ro=Jn,To=Vn,kt=Fn,Oo=Gn,xt=Bn,No=Yn,Mo=Kn,Lo=Zn,re=Wn;function oe(t){return Xn(t)}function ie(){const t=oe();return t&&t.os?t.os:void 0}function It(){const t=ie();return t?t.toLowerCase().includes("android"):!1}function Rt(){const t=ie();return t?t.toLowerCase().includes("ios")||t.toLowerCase().includes("mac")&&navigator.maxTouchPoints>1:!1}function Tt(){return ie()?It()||Rt():!1}function Ot(){const t=oe();return t&&t.name?t.name.toLowerCase()==="node":!1}function Nt(){return!Ot()&&!!kt()}const Mt=ar,Lt=cr;function Oe(t,e){const n=Lt(e),r=re();r&&r.setItem(t,n)}function Ne(t){let e=null,n=null;const r=re();return r&&(n=r.getItem(t)),e=n&&Mt(n),e}function Me(t){const e=re();e&&e.removeItem(t)}function de(){return er()}function qo(t){return to(t)}function Ao(t){return J(t)}function Uo(t){return B(t)}function Po(t){return no(J(t))}const qt=lr;function Y(){return((e,n)=>{for(n=e="";e++<36;n+=e*51&52?(e^15?8^Math.random()*(e^20?16:4):4).toString(16):"-");return n})()}function jo(){console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!")}function At(t,e){let n;const r=xr[t];return r&&(n=`https://${r}.infura.io/v3/${e}`),n}function Ut(t,e){let n;const r=At(t,e.infuraId);return e.custom&&e.custom[t]?n=e.custom[t]:r&&(n=r),n}function $o(t,e){const n=encodeURIComponent(t);return e.universalLink?`${e.universalLink}/wc?uri=${n}`:e.deepLink?`${e.deepLink}${e.deepLink.endsWith(":")?"//":"/"}wc?uri=${n}`:""}function Do(t){const e=t.href.split("?")[0];Oe(ue,Object.assign(Object.assign({},t),{href:e}))}function Pt(t,e){return t.filter(n=>n.name.toLowerCase().includes(e.toLowerCase()))[0]}function Bo(t,e){let n=t;return e&&(n=e.map(r=>Pt(t,r)).filter(Boolean)),n}function Wo(t,e){return async(...r)=>new Promise((o,s)=>{const h=(_,p)=>{(_===null||typeof _>"u")&&s(_),o(p)};t.apply(e,[...r,h])})}function jt(t){const e=t.message||"Failed or Rejected Request";let n=-32e3;if(t&&!t.code)switch(e){case"Parse error":n=-32700;break;case"Invalid request":n=-32600;break;case"Method not found":n=-32601;break;case"Invalid params":n=-32602;break;case"Internal error":n=-32603;break;default:n=-32e3;break}const r={code:n,message:e};return t.data&&(r.data=t.data),r}const $t="https://registry.walletconnect.com";function Fo(){return $t+"/api/v2/wallets"}function Ho(){return $t+"/api/v2/dapps"}function Dt(t,e="mobile"){var n;return{name:t.name||"",shortName:t.metadata.shortName||"",color:t.metadata.colors.primary||"",logo:(n=t.image_url.sm)!==null&&n!==void 0?n:"",universalLink:t[e].universal||"",deepLink:t[e].native||""}}function zo(t,e="mobile"){return Object.values(t).filter(n=>!!n[e].universal||!!n[e].native).map(n=>Dt(n,e))}var Le={};(function(t){const e=rr,n=or,r=tr,o=nr,s=i=>i==null;function h(i){switch(i.arrayFormat){case"index":return a=>(u,c)=>{const d=u.length;return c===void 0||i.skipNull&&c===null||i.skipEmptyString&&c===""?u:c===null?[...u,[g(a,i),"[",d,"]"].join("")]:[...u,[g(a,i),"[",g(d,i),"]=",g(c,i)].join("")]};case"bracket":return a=>(u,c)=>c===void 0||i.skipNull&&c===null||i.skipEmptyString&&c===""?u:c===null?[...u,[g(a,i),"[]"].join("")]:[...u,[g(a,i),"[]=",g(c,i)].join("")];case"comma":case"separator":return a=>(u,c)=>c==null||c.length===0?u:u.length===0?[[g(a,i),"=",g(c,i)].join("")]:[[u,g(c,i)].join(i.arrayFormatSeparator)];default:return a=>(u,c)=>c===void 0||i.skipNull&&c===null||i.skipEmptyString&&c===""?u:c===null?[...u,g(a,i)]:[...u,[g(a,i),"=",g(c,i)].join("")]}}function _(i){let a;switch(i.arrayFormat){case"index":return(u,c,d)=>{if(a=/\[(\d*)\]$/.exec(u),u=u.replace(/\[\d*\]$/,""),!a){d[u]=c;return}d[u]===void 0&&(d[u]={}),d[u][a[1]]=c};case"bracket":return(u,c,d)=>{if(a=/(\[\])$/.exec(u),u=u.replace(/\[\]$/,""),!a){d[u]=c;return}if(d[u]===void 0){d[u]=[c];return}d[u]=[].concat(d[u],c)};case"comma":case"separator":return(u,c,d)=>{const m=typeof c=="string"&&c.includes(i.arrayFormatSeparator),f=typeof c=="string"&&!m&&w(c,i).includes(i.arrayFormatSeparator);c=f?w(c,i):c;const v=m||f?c.split(i.arrayFormatSeparator).map(T=>w(T,i)):c===null?c:w(c,i);d[u]=v};default:return(u,c,d)=>{if(d[u]===void 0){d[u]=c;return}d[u]=[].concat(d[u],c)}}}function p(i){if(typeof i!="string"||i.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function g(i,a){return a.encode?a.strict?e(i):encodeURIComponent(i):i}function w(i,a){return a.decode?n(i):i}function y(i){return Array.isArray(i)?i.sort():typeof i=="object"?y(Object.keys(i)).sort((a,u)=>Number(a)-Number(u)).map(a=>i[a]):i}function b(i){const a=i.indexOf("#");return a!==-1&&(i=i.slice(0,a)),i}function C(i){let a="";const u=i.indexOf("#");return u!==-1&&(a=i.slice(u)),a}function k(i){i=b(i);const a=i.indexOf("?");return a===-1?"":i.slice(a+1)}function I(i,a){return a.parseNumbers&&!Number.isNaN(Number(i))&&typeof i=="string"&&i.trim()!==""?i=Number(i):a.parseBooleans&&i!==null&&(i.toLowerCase()==="true"||i.toLowerCase()==="false")&&(i=i.toLowerCase()==="true"),i}function R(i,a){a=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},a),p(a.arrayFormatSeparator);const u=_(a),c=Object.create(null);if(typeof i!="string"||(i=i.trim().replace(/^[?#&]/,""),!i))return c;for(const d of i.split("&")){if(d==="")continue;let[m,f]=r(a.decode?d.replace(/\+/g," "):d,"=");f=f===void 0?null:["comma","separator"].includes(a.arrayFormat)?f:w(f,a),u(w(m,a),f,c)}for(const d of Object.keys(c)){const m=c[d];if(typeof m=="object"&&m!==null)for(const f of Object.keys(m))m[f]=I(m[f],a);else c[d]=I(m,a)}return a.sort===!1?c:(a.sort===!0?Object.keys(c).sort():Object.keys(c).sort(a.sort)).reduce((d,m)=>{const f=c[m];return f&&typeof f=="object"&&!Array.isArray(f)?d[m]=y(f):d[m]=f,d},Object.create(null))}t.extract=k,t.parse=R,t.stringify=(i,a)=>{if(!i)return"";a=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},a),p(a.arrayFormatSeparator);const u=f=>a.skipNull&&s(i[f])||a.skipEmptyString&&i[f]==="",c=h(a),d={};for(const f of Object.keys(i))u(f)||(d[f]=i[f]);const m=Object.keys(d);return a.sort!==!1&&m.sort(a.sort),m.map(f=>{const v=i[f];return v===void 0?"":v===null?g(f,a):Array.isArray(v)?v.reduce(c(f),[]).join("&"):g(f,a)+"="+g(v,a)}).filter(f=>f.length>0).join("&")},t.parseUrl=(i,a)=>{a=Object.assign({decode:!0},a);const[u,c]=r(i,"#");return Object.assign({url:u.split("?")[0]||"",query:R(k(i),a)},a&&a.parseFragmentIdentifier&&c?{fragmentIdentifier:w(c,a)}:{})},t.stringifyUrl=(i,a)=>{a=Object.assign({encode:!0,strict:!0},a);const u=b(i.url).split("?")[0]||"",c=t.extract(i.url),d=t.parse(c,{sort:!1}),m=Object.assign(d,i.query);let f=t.stringify(m,a);f&&(f=`?${f}`);let v=C(i.url);return i.fragmentIdentifier&&(v=`#${g(i.fragmentIdentifier,a)}`),`${u}${f}${v}`},t.pick=(i,a,u)=>{u=Object.assign({parseFragmentIdentifier:!0},u);const{url:c,query:d,fragmentIdentifier:m}=t.parseUrl(i,u);return t.stringifyUrl({url:c,query:o(d,a),fragmentIdentifier:m},u)},t.exclude=(i,a,u)=>{const c=Array.isArray(a)?d=>!a.includes(d):(d,m)=>!a(d,m);return t.pick(i,c,u)}})(Le);function Bt(t){const e=t.indexOf("?")!==-1?t.indexOf("?"):void 0;return typeof e<"u"?t.substr(e):""}function Wt(t,e){let n=qe(t);return n=Object.assign(Object.assign({},n),e),t=Ft(n),t}function qe(t){return Le.parse(t)}function Ft(t){return Le.stringify(t)}function Ht(t){return typeof t.bridge<"u"}function zt(t){const e=t.indexOf(":"),n=t.indexOf("?")!==-1?t.indexOf("?"):void 0,r=t.substring(0,e),o=t.substring(e+1,n);function s(y){const b="@",C=y.split(b);return{handshakeTopic:C[0],version:parseInt(C[1],10)}}const h=s(o),_=typeof n<"u"?t.substr(n):"";function p(y){const b=qe(y);return{key:b.key||"",bridge:b.bridge||""}}const g=p(_);return Object.assign(Object.assign({protocol:r},h),g)}function Qo(t){return t===""||typeof t=="string"&&t.trim()===""}function Jo(t){return!(t&&t.length)}function Vo(t){return ne(t)}function Go(t){return Re(t)}function Yo(t){return yt(t)}function Ko(t){return Gr(t)}function Zo(t){return Yr(t)}function Xo(t,e){return wt(t,e)}function ei(t){return typeof t.params=="object"}function Qt(t){return typeof t.method<"u"}function P(t){return typeof t.result<"u"}function z(t){return typeof t.error<"u"}function he(t){return typeof t.event<"u"}function Jt(t){return Cr.includes(t)||t.startsWith("wc_")}function Vt(t){return t.method.startsWith("wc_")?!0:!we.includes(t.method)}const ti=Object.freeze(Object.defineProperty({__proto__:null,addHexPrefix:Ao,appendToQueryString:Wt,concatArrayBuffers:lo,concatBuffers:_o,convertArrayBufferToBuffer:Z,convertArrayBufferToHex:vt,convertArrayBufferToNumber:co,convertArrayBufferToUtf8:ao,convertBufferToArrayBuffer:Et,convertBufferToHex:ho,convertBufferToNumber:fo,convertBufferToUtf8:uo,convertHexToArrayBuffer:St,convertHexToBuffer:yo,convertHexToNumber:vo,convertHexToUtf8:bo,convertNumberToArrayBuffer:So,convertNumberToBuffer:Eo,convertNumberToHex:Ct,convertNumberToUtf8:Co,convertUtf8ToArrayBuffer:po,convertUtf8ToBuffer:go,convertUtf8ToHex:mo,convertUtf8ToNumber:wo,detectEnv:oe,detectOS:ie,formatIOSMobile:$o,formatMobileRegistry:zo,formatMobileRegistryEntry:Dt,formatQueryString:Ft,formatRpcError:jt,getClientMeta:de,getCrypto:Mo,getCryptoOrThrow:No,getDappRegistryUrl:Ho,getDocument:Ro,getDocumentOrThrow:Io,getEncoding:Zo,getFromWindow:ko,getFromWindowOrThrow:xo,getInfuraRpcUrl:At,getLocal:Ne,getLocalStorage:re,getLocalStorageOrThrow:Lo,getLocation:xt,getLocationOrThrow:Oo,getMobileLinkRegistry:Bo,getMobileRegistryEntry:Pt,getNavigator:kt,getNavigatorOrThrow:To,getQueryString:Bt,getRpcUrl:Ut,getType:Ko,getWalletRegistryUrl:Fo,isAndroid:It,isArrayBuffer:Yo,isBrowser:Nt,isBuffer:Vo,isEmptyArray:Jo,isEmptyString:Qo,isHexString:Xo,isIOS:Rt,isInternalEvent:he,isJsonRpcRequest:Qt,isJsonRpcResponseError:z,isJsonRpcResponseSuccess:P,isJsonRpcSubscription:ei,isMobile:Tt,isNode:Ot,isReservedEvent:Jt,isSilentPayload:Vt,isTypedArray:Go,isWalletConnectSession:Ht,logDeprecationWarning:jo,parseQueryString:qe,parseWalletConnectUri:zt,payloadId:qt,promisify:Wo,removeHexLeadingZeros:Po,removeHexPrefix:Uo,removeLocal:Me,safeJsonParse:Mt,safeJsonStringify:Lt,sanitizeHex:qo,saveMobileLinkInfo:Do,setLocal:Oe,uuid:Y},Symbol.toStringTag,{value:"Module"}));class ni{constructor(){this._eventEmitters=[],typeof window<"u"&&typeof window.addEventListener<"u"&&(window.addEventListener("online",()=>this.trigger("online")),window.addEventListener("offline",()=>this.trigger("offline")))}on(e,n){this._eventEmitters.push({event:e,callback:n})}trigger(e){let n=[];e&&(n=this._eventEmitters.filter(r=>r.event===e)),n.forEach(r=>{r.callback()})}}const ri=typeof global.WebSocket<"u"?global.WebSocket:require("ws");class oi{constructor(e){if(this.opts=e,this._queue=[],this._events=[],this._subscriptions=[],this._protocol=e.protocol,this._version=e.version,this._url="",this._netMonitor=null,this._socket=null,this._nextSocket=null,this._subscriptions=e.subscriptions||[],this._netMonitor=e.netMonitor||new ni,!e.url||typeof e.url!="string")throw new Error("Missing or invalid WebSocket url");this._url=e.url,this._netMonitor.on("online",()=>this._socketCreate())}set readyState(e){}get readyState(){return this._socket?this._socket.readyState:-1}set connecting(e){}get connecting(){return this.readyState===0}set connected(e){}get connected(){return this.readyState===1}set closing(e){}get closing(){return this.readyState===2}set closed(e){}get closed(){return this.readyState===3}open(){this._socketCreate()}close(){this._socketClose()}send(e,n,r){if(!n||typeof n!="string")throw new Error("Missing or invalid topic field");this._socketSend({topic:n,type:"pub",payload:e,silent:!!r})}subscribe(e){this._socketSend({topic:e,type:"sub",payload:"",silent:!0})}on(e,n){this._events.push({event:e,callback:n})}_socketCreate(){if(this._nextSocket)return;const e=ii(this._url,this._protocol,this._version);if(this._nextSocket=new ri(e),!this._nextSocket)throw new Error("Failed to create socket");this._nextSocket.onmessage=n=>this._socketReceive(n),this._nextSocket.onopen=()=>this._socketOpen(),this._nextSocket.onerror=n=>this._socketError(n),this._nextSocket.onclose=()=>{setTimeout(()=>{this._nextSocket=null,this._socketCreate()},1e3)}}_socketOpen(){this._socketClose(),this._socket=this._nextSocket,this._nextSocket=null,this._queueSubscriptions(),this._pushQueue()}_socketClose(){this._socket&&(this._socket.onclose=()=>{},this._socket.close())}_socketSend(e){const n=JSON.stringify(e);this._socket&&this._socket.readyState===1?this._socket.send(n):(this._setToQueue(e),this._socketCreate())}async _socketReceive(e){let n;try{n=JSON.parse(e.data)}catch{return}if(this._socketSend({topic:n.topic,type:"ack",payload:"",silent:!0}),this._socket&&this._socket.readyState===1){const r=this._events.filter(o=>o.event==="message");r&&r.length&&r.forEach(o=>o.callback(n))}}_socketError(e){const n=this._events.filter(r=>r.event==="error");n&&n.length&&n.forEach(r=>r.callback(e))}_queueSubscriptions(){this._subscriptions.forEach(n=>this._queue.push({topic:n,type:"sub",payload:"",silent:!0})),this._subscriptions=this.opts.subscriptions||[]}_setToQueue(e){this._queue.push(e)}_pushQueue(){this._queue.forEach(n=>this._socketSend(n)),this._queue=[]}}function ii(t,e,n){var r,o;const h=(t.startsWith("https")?t.replace("https","wss"):t.startsWith("http")?t.replace("http","ws"):t).split("?"),_=Nt()?{protocol:e,version:n,env:"browser",host:((r=xt())===null||r===void 0?void 0:r.host)||""}:{protocol:e,version:n,env:((o=oe())===null||o===void 0?void 0:o.name)||""},p=Wt(Bt(h[1]||""),_);return h[0]+"?"+p}class si{constructor(){this._eventEmitters=[]}subscribe(e){this._eventEmitters.push(e)}unsubscribe(e){this._eventEmitters=this._eventEmitters.filter(n=>n.event!==e)}trigger(e){let n=[],r;Qt(e)?r=e.method:P(e)||z(e)?r=`response:${e.id}`:he(e)?r=e.event:r="",r&&(n=this._eventEmitters.filter(o=>o.event===r)),(!n||!n.length)&&!Jt(r)&&!he(r)&&(n=this._eventEmitters.filter(o=>o.event==="call_request")),n.forEach(o=>{if(z(e)){const s=new Error(e.error.message);o.callback(s,null)}else o.callback(null,e)})}}class ai{constructor(e="walletconnect"){this.storageId=e}getSession(){let e=null;const n=Ne(this.storageId);return n&&Ht(n)&&(e=n),e}setSession(e){return Oe(this.storageId,e),e}removeSession(){Me(this.storageId)}}const ci="walletconnect.org",li="abcdefghijklmnopqrstuvwxyz0123456789",Gt=li.split("").map(t=>`https://${t}.bridge.walletconnect.org`);function ui(t){let e=t.indexOf("//")>-1?t.split("/")[2]:t.split("/")[0];return e=e.split(":")[0],e=e.split("?")[0],e}function di(t){return ui(t).split(".").slice(-2).join(".")}function hi(){return Math.floor(Math.random()*Gt.length)}function fi(){return Gt[hi()]}function _i(t){return di(t)===ci}function pi(t){return _i(t)?fi():t}class gi{constructor(e){if(this.protocol="wc",this.version=1,this._bridge="",this._key=null,this._clientId="",this._clientMeta=null,this._peerId="",this._peerMeta=null,this._handshakeId=0,this._handshakeTopic="",this._connected=!1,this._accounts=[],this._chainId=0,this._networkId=0,this._rpcUrl="",this._eventManager=new si,this._clientMeta=de()||e.connectorOpts.clientMeta||null,this._cryptoLib=e.cryptoLib,this._sessionStorage=e.sessionStorage||new ai(e.connectorOpts.storageId),this._qrcodeModal=e.connectorOpts.qrcodeModal,this._qrcodeModalOptions=e.connectorOpts.qrcodeModalOptions,this._signingMethods=[...we,...e.connectorOpts.signingMethods||[]],!e.connectorOpts.bridge&&!e.connectorOpts.uri&&!e.connectorOpts.session)throw new Error(vr);e.connectorOpts.bridge&&(this.bridge=pi(e.connectorOpts.bridge)),e.connectorOpts.uri&&(this.uri=e.connectorOpts.uri);const n=e.connectorOpts.session||this._getStorageSession();n&&(this.session=n),this.handshakeId&&this._subscribeToSessionResponse(this.handshakeId,"Session request rejected"),this._transport=e.transport||new oi({protocol:this.protocol,version:this.version,url:this.bridge,subscriptions:[this.clientId]}),this._subscribeToInternalEvents(),this._initTransport(),e.connectorOpts.uri&&this._subscribeToSessionRequest(),e.pushServerOpts&&this._registerPushServer(e.pushServerOpts)}set bridge(e){e&&(this._bridge=e)}get bridge(){return this._bridge}set key(e){if(!e)return;const n=St(e);this._key=n}get key(){return this._key?vt(this._key,!0):""}set clientId(e){e&&(this._clientId=e)}get clientId(){let e=this._clientId;return e||(e=this._clientId=Y()),this._clientId}set peerId(e){e&&(this._peerId=e)}get peerId(){return this._peerId}set clientMeta(e){}get clientMeta(){let e=this._clientMeta;return e||(e=this._clientMeta=de()),e}set peerMeta(e){this._peerMeta=e}get peerMeta(){return this._peerMeta}set handshakeTopic(e){e&&(this._handshakeTopic=e)}get handshakeTopic(){return this._handshakeTopic}set handshakeId(e){e&&(this._handshakeId=e)}get handshakeId(){return this._handshakeId}get uri(){return this._formatUri()}set uri(e){if(!e)return;const{handshakeTopic:n,bridge:r,key:o}=this._parseUri(e);this.handshakeTopic=n,this.bridge=r,this.key=o}set chainId(e){this._chainId=e}get chainId(){return this._chainId}set networkId(e){this._networkId=e}get networkId(){return this._networkId}set accounts(e){this._accounts=e}get accounts(){return this._accounts}set rpcUrl(e){this._rpcUrl=e}get rpcUrl(){return this._rpcUrl}set connected(e){}get connected(){return this._connected}set pending(e){}get pending(){return!!this._handshakeTopic}get session(){return{connected:this.connected,accounts:this.accounts,chainId:this.chainId,bridge:this.bridge,key:this.key,clientId:this.clientId,clientMeta:this.clientMeta,peerId:this.peerId,peerMeta:this.peerMeta,handshakeId:this.handshakeId,handshakeTopic:this.handshakeTopic}}set session(e){e&&(this._connected=e.connected,this.accounts=e.accounts,this.chainId=e.chainId,this.bridge=e.bridge,this.key=e.key,this.clientId=e.clientId,this.clientMeta=e.clientMeta,this.peerId=e.peerId,this.peerMeta=e.peerMeta,this.handshakeId=e.handshakeId,this.handshakeTopic=e.handshakeTopic)}on(e,n){const r={event:e,callback:n};this._eventManager.subscribe(r)}off(e){this._eventManager.unsubscribe(e)}async createInstantRequest(e){this._key=await this._generateKey();const n=this._formatRequest({method:"wc_instantRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,request:this._formatRequest(e)}]});this.handshakeId=n.id,this.handshakeTopic=Y(),this._eventManager.trigger({event:"display_uri",params:[this.uri]}),this.on("modal_closed",()=>{throw new Error(We)});const r=()=>{this.killSession()};try{const o=await this._sendCallRequest(n);return o&&r(),o}catch(o){throw r(),o}}async connect(e){if(!this._qrcodeModal)throw new Error(Sr);return this.connected?{chainId:this.chainId,accounts:this.accounts}:(await this.createSession(e),new Promise(async(n,r)=>{this.on("modal_closed",()=>r(new Error(We))),this.on("connect",(o,s)=>{if(o)return r(o);n(s.params[0])})}))}async createSession(e){if(this._connected)throw new Error(ae);if(this.pending)return;this._key=await this._generateKey();const n=this._formatRequest({method:"wc_sessionRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,chainId:e&&e.chainId?e.chainId:null}]});this.handshakeId=n.id,this.handshakeTopic=Y(),this._sendSessionRequest(n,"Session update rejected",{topic:this.handshakeTopic}),this._eventManager.trigger({event:"display_uri",params:[this.uri]})}approveSession(e){if(this._connected)throw new Error(ae);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl,peerId:this.clientId,peerMeta:this.clientMeta},r={id:this.handshakeId,jsonrpc:"2.0",result:n};this._sendResponse(r),this._connected=!0,this._setStorageSession(),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})}rejectSession(e){if(this._connected)throw new Error(ae);const n=e&&e.message?e.message:pr,r=this._formatResponse({id:this.handshakeId,error:{message:n}});this._sendResponse(r),this._connected=!1,this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession()}updateSession(e){if(!this._connected)throw new Error(q);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl},r=this._formatRequest({method:"wc_sessionUpdate",params:[n]});this._sendSessionRequest(r,"Session update rejected"),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]}),this._manageStorageSession()}async killSession(e){const n=e?e.message:"Session Disconnected",r={approved:!1,chainId:null,networkId:null,accounts:null},o=this._formatRequest({method:"wc_sessionUpdate",params:[r]});await this._sendRequest(o),this._handleSessionDisconnect(n)}async sendTransaction(e){if(!this._connected)throw new Error(q);const n=e,r=this._formatRequest({method:"eth_sendTransaction",params:[n]});return await this._sendCallRequest(r)}async signTransaction(e){if(!this._connected)throw new Error(q);const n=e,r=this._formatRequest({method:"eth_signTransaction",params:[n]});return await this._sendCallRequest(r)}async signMessage(e){if(!this._connected)throw new Error(q);const n=this._formatRequest({method:"eth_sign",params:e});return await this._sendCallRequest(n)}async signPersonalMessage(e){if(!this._connected)throw new Error(q);const n=this._formatRequest({method:"personal_sign",params:e});return await this._sendCallRequest(n)}async signTypedData(e){if(!this._connected)throw new Error(q);const n=this._formatRequest({method:"eth_signTypedData",params:e});return await this._sendCallRequest(n)}async updateChain(e){if(!this._connected)throw new Error("Session currently disconnected");const n=this._formatRequest({method:"wallet_updateChain",params:[e]});return await this._sendCallRequest(n)}unsafeSend(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),new Promise((r,o)=>{this._subscribeToResponse(e.id,(s,h)=>{if(s){o(s);return}if(!h)throw new Error(gr);r(h)})})}async sendCustomRequest(e,n){if(!this._connected)throw new Error(q);switch(e.method){case"eth_accounts":return this.accounts;case"eth_chainId":return Ct(this.chainId);case"eth_sendTransaction":case"eth_signTransaction":e.params;break;case"personal_sign":e.params;break}const r=this._formatRequest(e);return await this._sendCallRequest(r,n)}approveRequest(e){if(P(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(mr)}rejectRequest(e){if(z(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(wr)}transportClose(){this._transport.close()}async _sendRequest(e,n){const r=this._formatRequest(e),o=await this._encrypt(r),s=typeof(n==null?void 0:n.topic)<"u"?n.topic:this.peerId,h=JSON.stringify(o),_=typeof(n==null?void 0:n.forcePushNotification)<"u"?!n.forcePushNotification:Vt(r);this._transport.send(h,s,_)}async _sendResponse(e){const n=await this._encrypt(e),r=this.peerId,o=JSON.stringify(n),s=!0;this._transport.send(o,r,s)}async _sendSessionRequest(e,n,r){this._sendRequest(e,r),this._subscribeToSessionResponse(e.id,n)}_sendCallRequest(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),this._subscribeToCallResponse(e.id)}_formatRequest(e){if(typeof e.method>"u")throw new Error(yr);return{id:typeof e.id>"u"?qt():e.id,jsonrpc:"2.0",method:e.method,params:typeof e.params>"u"?[]:e.params}}_formatResponse(e){if(typeof e.id>"u")throw new Error(br);const n={id:e.id,jsonrpc:"2.0"};if(z(e)){const r=jt(e.error);return Object.assign(Object.assign(Object.assign({},n),e),{error:r})}else if(P(e))return Object.assign(Object.assign({},n),e);throw new Error(Be)}_handleSessionDisconnect(e){const n=e||"Session Disconnected";this._connected||(this._qrcodeModal&&this._qrcodeModal.close(),Me(ue)),this._connected&&(this._connected=!1),this._handshakeId&&(this._handshakeId=0),this._handshakeTopic&&(this._handshakeTopic=""),this._peerId&&(this._peerId=""),this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession(),this.transportClose()}_handleSessionResponse(e,n){n?n.approved?(this._connected?(n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]})):(this._connected=!0,n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),n.peerId&&!this.peerId&&(this.peerId=n.peerId),n.peerMeta&&!this.peerMeta&&(this.peerMeta=n.peerMeta),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})),this._manageStorageSession()):this._handleSessionDisconnect(e):this._handleSessionDisconnect(e)}async _handleIncomingMessages(e){if(![this.clientId,this.handshakeTopic].includes(e.topic))return;let r;try{r=JSON.parse(e.payload)}catch{return}const o=await this._decrypt(r);o&&this._eventManager.trigger(o)}_subscribeToSessionRequest(){this._transport.subscribe(this.handshakeTopic)}_subscribeToResponse(e,n){this.on(`response:${e}`,n)}_subscribeToSessionResponse(e,n){this._subscribeToResponse(e,(r,o)=>{if(r){this._handleSessionResponse(r.message);return}P(o)?this._handleSessionResponse(n,o.result):o.error&&o.error.message?this._handleSessionResponse(o.error.message):this._handleSessionResponse(n)})}_subscribeToCallResponse(e){return new Promise((n,r)=>{this._subscribeToResponse(e,(o,s)=>{if(o){r(o);return}P(s)?n(s.result):s.error&&s.error.message?r(s.error):r(new Error(Be))})})}_subscribeToInternalEvents(){this.on("display_uri",()=>{this._qrcodeModal&&this._qrcodeModal.open(this.uri,()=>{this._eventManager.trigger({event:"modal_closed",params:[]})},this._qrcodeModalOptions)}),this.on("connect",()=>{this._qrcodeModal&&this._qrcodeModal.close()}),this.on("call_request_sent",(e,n)=>{const{request:r}=n.params[0];if(Tt()&&this._signingMethods.includes(r.method)){const o=Ne(ue);o&&(window.location.href=o.href)}}),this.on("wc_sessionRequest",(e,n)=>{e&&this._eventManager.trigger({event:"error",params:[{code:"SESSION_REQUEST_ERROR",message:e.toString()}]}),this.handshakeId=n.id,this.peerId=n.params[0].peerId,this.peerMeta=n.params[0].peerMeta;const r=Object.assign(Object.assign({},n),{method:"session_request"});this._eventManager.trigger(r)}),this.on("wc_sessionUpdate",(e,n)=>{e&&this._handleSessionResponse(e.message),this._handleSessionResponse("Session disconnected",n.params[0])})}_initTransport(){this._transport.on("message",e=>this._handleIncomingMessages(e)),this._transport.on("open",()=>this._eventManager.trigger({event:"transport_open",params:[]})),this._transport.on("close",()=>this._eventManager.trigger({event:"transport_close",params:[]})),this._transport.on("error",()=>this._eventManager.trigger({event:"transport_error",params:["Websocket connection failed"]})),this._transport.open()}_formatUri(){const e=this.protocol,n=this.handshakeTopic,r=this.version,o=encodeURIComponent(this.bridge),s=this.key;return`${e}:${n}@${r}?bridge=${o}&key=${s}`}_parseUri(e){const n=zt(e);if(n.protocol===this.protocol){if(!n.handshakeTopic)throw Error("Invalid or missing handshakeTopic parameter value");const r=n.handshakeTopic;if(!n.bridge)throw Error("Invalid or missing bridge url parameter value");const o=decodeURIComponent(n.bridge);if(!n.key)throw Error("Invalid or missing key parameter value");const s=n.key;return{handshakeTopic:r,bridge:o,key:s}}else throw new Error(Er)}async _generateKey(){return this._cryptoLib?await this._cryptoLib.generateKey():null}async _encrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.encrypt(e,n):null}async _decrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.decrypt(e,n):null}_getStorageSession(){let e=null;return this._sessionStorage&&(e=this._sessionStorage.getSession()),e}_setStorageSession(){this._sessionStorage&&this._sessionStorage.setSession(this.session)}_removeStorageSession(){this._sessionStorage&&this._sessionStorage.removeSession()}_manageStorageSession(){this._connected?this._setStorageSession():this._removeStorageSession()}_registerPushServer(e){if(!e.url||typeof e.url!="string")throw Error("Invalid or missing pushServerOpts.url parameter value");if(!e.type||typeof e.type!="string")throw Error("Invalid or missing pushServerOpts.type parameter value");if(!e.token||typeof e.token!="string")throw Error("Invalid or missing pushServerOpts.token parameter value");const n={bridge:this.bridge,topic:this.clientId,type:e.type,token:e.token,peerName:"",language:e.language||""};this.on("connect",async(r,o)=>{if(r)throw r;if(e.peerMeta){const s=o.params[0].peerMeta.name;n.peerName=s}try{if(!(await(await fetch(`${e.url}/new`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).json()).success)throw Error("Failed to register in Push Server")}catch{throw Error("Failed to register in Push Server")}})}}function mi(t){return Q.getBrowerCrypto().getRandomValues(new Uint8Array(t))}const Yt=256,Kt=Yt,wi=Yt,L="AES-CBC",yi=`SHA-${Kt}`,fe="HMAC",bi="encrypt",vi="decrypt",Ei="sign",Si="verify";function Ci(t){return t===L?{length:Kt,name:L}:{hash:{name:yi},name:fe}}function ki(t){return t===L?[bi,vi]:[Ei,Si]}async function Ae(t,e=L){return Q.getSubtleCrypto().importKey("raw",t,Ci(e),!0,ki(e))}async function xi(t,e,n){const r=Q.getSubtleCrypto(),o=await Ae(e,L),s=await r.encrypt({iv:t,name:L},o,n);return new Uint8Array(s)}async function Ii(t,e,n){const r=Q.getSubtleCrypto(),o=await Ae(e,L),s=await r.decrypt({iv:t,name:L},o,n);return new Uint8Array(s)}async function Ri(t,e){const n=Q.getSubtleCrypto(),r=await Ae(t,fe),o=await n.sign({length:wi,name:fe},r,e);return new Uint8Array(o)}function Ti(t,e,n){return xi(t,e,n)}function Oi(t,e,n){return Ii(t,e,n)}async function Zt(t,e){return await Ri(t,e)}async function Xt(t){const e=(t||256)/8,n=mi(e);return Et(W(n))}async function en(t,e){const n=M(t.data),r=M(t.iv),o=M(t.hmac),s=N(o,!1),h=bt(n,r),_=await Zt(e,h),p=N(_,!1);return B(s)===B(p)}async function Ni(t,e,n){const r=D(Z(e)),o=n||await Xt(128),s=D(Z(o)),h=N(s,!1),_=JSON.stringify(t),p=mt(_),g=await Ti(s,r,p),w=N(g,!1),y=bt(g,s),b=await Zt(r,y),C=N(b,!1);return{data:w,hmac:C,iv:h}}async function Mi(t,e){const n=D(Z(e));if(!n)throw new Error("Missing key: required for decryption");if(!await en(t,n))return null;const o=M(t.data),s=M(t.iv),h=await Oi(s,n,o),_=pt(h);let p;try{p=JSON.parse(_)}catch{return null}return p}const Li=Object.freeze(Object.defineProperty({__proto__:null,decrypt:Mi,encrypt:Ni,generateKey:Xt,verifyHmac:en},Symbol.toStringTag,{value:"Module"}));class qi extends gi{constructor(e,n){super({cryptoLib:Li,connectorOpts:e,pushServerOpts:n})}}const Ai=Xe(ti);function tn(t,e){for(var n in e)t[n]=e[n];return t}function _e(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function ce(t,e){return t===e&&(t!==0||1/t==1/e)||t!=t&&e!=e}function X(t){this.props=t}function nn(t,e){function n(o){var s=this.props.ref,h=s==o.ref;return!h&&s&&(s.call?s(null):s.current=null),e?!e(this.props,o)||!h:_e(this.props,o)}function r(o){return this.shouldComponentUpdate=n,x(t,o)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(X.prototype=new A).isPureReactComponent=!0,X.prototype.shouldComponentUpdate=function(t,e){return _e(this.props,t)||_e(this.state,e)};var Fe=S.__b;S.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),Fe&&Fe(t)};var Ui=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function rn(t){function e(n){var r=tn({},n);return delete r.ref,t(r,n.ref||null)}return e.$$typeof=Ui,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var He=function(t,e){return t==null?null:O(O(t).map(e))},on={map:He,forEach:He,count:function(t){return t?O(t).length:0},only:function(t){var e=O(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:O},Pi=S.__e;S.__e=function(t,e,n,r){if(t.then){for(var o,s=e;s=s.__;)if((o=s.__c)&&o.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),o.__c(t,e)}Pi(t,e,n,r)};var ze=S.unmount;function sn(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),t.__c.__H=null),(t=tn({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(r){return sn(r,e,n)})),t}function an(t,e,n){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(r){return an(r,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=n)),t}function H(){this.__u=0,this.t=null,this.__b=null}function cn(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function ln(t){var e,n,r;function o(s){if(e||(e=t()).then(function(h){n=h.default||h},function(h){r=h}),r)throw r;if(!n)throw e;return x(n,s)}return o.displayName="Lazy",o.__f=!0,o}function j(){this.u=null,this.o=null}S.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),ze&&ze(t)},(H.prototype=new A).__c=function(t,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var o=cn(r.__v),s=!1,h=function(){s||(s=!0,n.__R=null,o?o(_):_())};n.__R=h;var _=function(){if(!--r.__u){if(r.state.__a){var g=r.state.__a;r.__v.__k[0]=an(g,g.__c.__P,g.__c.__O)}var w;for(r.setState({__a:r.__b=null});w=r.t.pop();)w.forceUpdate()}},p=e.__h===!0;r.__u++||p||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(h,h)},H.prototype.componentWillUnmount=function(){this.t=[]},H.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=sn(this.__b,n,r.__O=r.__P)}this.__b=null}var o=e.__a&&x($,null,t.fallback);return o&&(o.__h=null),[x($,null,e.__a?null:t.children),o]};var Qe=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};function ji(t){return this.getChildContext=function(){return t.context},t.children}function $i(t){var e=this,n=t.i;e.componentWillUnmount=function(){K(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),e.i.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),e.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.i.removeChild(r)}}),K(x(ji,{context:e.context},t.__v),e.l)}function un(t,e){var n=x($i,{__v:t,i:e});return n.containerInfo=e,n}(j.prototype=new A).__a=function(t){var e=this,n=cn(e.__v),r=e.o.get(t);return r[0]++,function(o){var s=function(){e.props.revealOrder?(r.push(o),Qe(e,t,r)):o()};n?n(s):s()}},j.prototype.render=function(t){this.u=null,this.o=new Map;var e=O(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},j.prototype.componentDidUpdate=j.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){Qe(t,n,e)})};var dn=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Di=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Bi=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Wi=/[A-Z0-9]/g,Fi=typeof document<"u",Hi=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};function hn(t,e,n){return e.__k==null&&(e.textContent=""),K(t,e),typeof n=="function"&&n(),t?t.__c:null}function fn(t,e,n){return hr(t,e),typeof n=="function"&&n(),t?t.__c:null}A.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(A.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var Je=S.event;function zi(){}function Qi(){return this.cancelBubble}function Ji(){return this.defaultPrevented}S.event=function(t){return Je&&(t=Je(t)),t.persist=zi,t.isPropagationStopped=Qi,t.isDefaultPrevented=Ji,t.nativeEvent=t};var Ue,Vi={enumerable:!1,configurable:!0,get:function(){return this.class}},Ve=S.vnode;S.vnode=function(t){typeof t.type=="string"&&function(e){var n=e.props,r=e.type,o={};for(var s in n){var h=n[s];if(!(s==="value"&&"defaultValue"in n&&h==null||Fi&&s==="children"&&r==="noscript"||s==="class"||s==="className")){var _=s.toLowerCase();s==="defaultValue"&&"value"in n&&n.value==null?s="value":s==="download"&&h===!0?h="":_==="ondoubleclick"?s="ondblclick":_!=="onchange"||r!=="input"&&r!=="textarea"||Hi(n.type)?_==="onfocus"?s="onfocusin":_==="onblur"?s="onfocusout":Bi.test(s)?s=_:r.indexOf("-")===-1&&Di.test(s)?s=s.replace(Wi,"-$&").toLowerCase():h===null&&(h=void 0):_=s="oninput",_==="oninput"&&o[s=_]&&(s="oninputCapture"),o[s]=h}}r=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=O(n.children).forEach(function(p){p.props.selected=o.value.indexOf(p.props.value)!=-1})),r=="select"&&o.defaultValue!=null&&(o.value=O(n.children).forEach(function(p){p.props.selected=o.multiple?o.defaultValue.indexOf(p.props.value)!=-1:o.defaultValue==p.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",Vi)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),e.props=o}(t),t.$$typeof=dn,Ve&&Ve(t)};var Ge=S.__r;S.__r=function(t){Ge&&Ge(t),Ue=t.__c};var Ye=S.diffed;S.diffed=function(t){Ye&&Ye(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value),Ue=null};var _n={ReactCurrentDispatcher:{current:{readContext:function(t){return Ue.__n[t.__c].props.value}}}},Gi="17.0.2";function pn(t){return x.bind(null,t)}function V(t){return!!t&&t.$$typeof===dn}function gn(t){return V(t)&&t.type===$}function mn(t){return V(t)?fr.apply(null,arguments):t}function wn(t){return!!t.__k&&(K(null,t),!0)}function yn(t){return t&&(t.base||t.nodeType===1&&t)||null}var bn=function(t,e){return t(e)},vn=function(t,e){return t(e)},En=$;function Pe(t){t()}function Sn(t){return t}function Cn(){return[!1,Pe]}var kn=ee,xn=V;function In(t,e){var n=e(),r=ge({h:{__:n,v:e}}),o=r[0].h,s=r[1];return ee(function(){o.__=n,o.v=e,ce(o.__,e())||s({h:o})},[t,n,e]),me(function(){return ce(o.__,o.v())||s({h:o}),t(function(){ce(o.__,o.v())||s({h:o})})},[t]),n}var Yi={useState:ge,useId:tt,useReducer:nt,useEffect:me,useLayoutEffect:ee,useInsertionEffect:kn,useTransition:Cn,useDeferredValue:Sn,useSyncExternalStore:In,startTransition:Pe,useRef:rt,useImperativeHandle:ot,useMemo:it,useCallback:st,useContext:at,useDebugValue:ct,version:"17.0.2",Children:on,render:hn,hydrate:fn,unmountComponentAtNode:wn,createPortal:un,createElement:x,createContext:lt,createFactory:pn,cloneElement:mn,createRef:ut,Fragment:$,isValidElement:V,isElement:xn,isFragment:gn,findDOMNode:yn,Component:A,PureComponent:X,memo:nn,forwardRef:rn,flushSync:vn,unstable_batchedUpdates:bn,StrictMode:En,Suspense:H,SuspenseList:j,lazy:ln,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:_n};const Ki=Object.freeze(Object.defineProperty({__proto__:null,Children:on,Component:A,Fragment:$,PureComponent:X,StrictMode:En,Suspense:H,SuspenseList:j,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:_n,cloneElement:mn,createContext:lt,createElement:x,createFactory:pn,createPortal:un,createRef:ut,default:Yi,findDOMNode:yn,flushSync:vn,forwardRef:rn,hydrate:fn,isElement:xn,isFragment:gn,isValidElement:V,lazy:ln,memo:nn,render:hn,startTransition:Pe,unmountComponentAtNode:wn,unstable_batchedUpdates:bn,useCallback:st,useContext:at,useDebugValue:ct,useDeferredValue:Sn,useEffect:me,useErrorBoundary:_r,useId:tt,useImperativeHandle:ot,useInsertionEffect:kn,useLayoutEffect:ee,useMemo:it,useReducer:nt,useRef:rt,useState:ge,useSyncExternalStore:In,useTransition:Cn,version:Gi},Symbol.toStringTag,{value:"Module"})),Zi=Xe(Ki);function Rn(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var E=Ai,Tn=Rn(ir),Xi=Rn(sr),l=Zi;function es(t){Tn.toString(t,{type:"terminal"}).then(console.log)}var ts=`:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper {
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99999999999999;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}

.walletconnect-modal__header p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 26px;
  padding: 6px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 7px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .walletconnect-qrcode__text {
    font-size: 4vw;
  }
}

@media only screen and (max-width: 320px) {
  .walletconnect-qrcode__text {
    font-size: 14px;
  }
}

.walletconnect-qrcode__image {
  width: calc(100% - 30px);
  box-sizing: border-box;
  cursor: none;
  margin: 0 auto;
}

.walletconnect-qrcode__notification {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  background: white;
  color: black;
  margin-bottom: -60px;
  opacity: 0;
}

.walletconnect-qrcode__notification.notification__show {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}

.walletconnect-modal__base {
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);
  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,
    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__base {
    padding: 24px 12px;
  }
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);
}

.walletconnect-modal__header {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -42px;
  width: 100%;
}

.walletconnect-modal__base .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base .wc-logo div {
  background-color: #3399ff;
  height: 21px;
  margin-right: 5px;
  mask-image: url("images/wc-logo.svg") center no-repeat;
  width: 32px;
}

.walletconnect-modal__base .wc-logo p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base__row {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base__row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base__row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base__row__h3 {
  color: #25292e;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 3px;
}

.walletconnect-modal__base__row__right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base__row__right__app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base__row__right__caret {
  height: 18px;
  opacity: 0.3;
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
  will-change: opacity;
}

.walletconnect-modal__base__row:hover .caret,
.walletconnect-modal__base__row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__mobile__toggle {
  width: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 18px;
  background: #d4d5d9;
}

.walletconnect-modal__single_wallet {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 18px;
}

.walletconnect-modal__single_wallet a {
  cursor: pointer;
  color: rgb(64, 153, 255);
  font-size: 21px;
  font-weight: 800;
  text-decoration: none !important;
  margin: 0 auto;
}

.walletconnect-modal__mobile__toggle_selector {
  width: calc(50% - 8px);
  background: white;
  position: absolute;
  border-radius: 5px;
  height: calc(100% - 8px);
  top: 4px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(4px, 0, 0);
}

.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {
  transform: translate3d(calc(100% + 12px), 0, 0);
}

.walletconnect-modal__mobile__toggle a {
  font-size: 12px;
  width: 50%;
  text-align: center;
  padding: 8px;
  margin: 0;
  font-weight: 600;
  z-index: 1;
}

.walletconnect-modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__footer {
    margin-top: 5vw;
  }
}

.walletconnect-modal__footer a {
  cursor: pointer;
  color: #898d97;
  font-size: 15px;
  margin: 0 auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__footer a {
    font-size: 14px;
  }
}

.walletconnect-connect__buttons__wrapper {
  max-height: 44vh;
}

.walletconnect-connect__buttons__wrapper__android {
  margin: 50% 0;
}

.walletconnect-connect__buttons__wrapper__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__buttons__wrapper__wrap {
    margin-top: 40px;
  }
}

.walletconnect-connect__button {
  background-color: rgb(64, 153, 255);
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.walletconnect-connect__button__icon_anchor {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 42px;
  justify-self: center;
  flex-direction: column;
  text-decoration: none !important;
}

@media only screen and (max-width: 320px) {
  .walletconnect-connect__button__icon_anchor {
    margin: 4px;
  }
}

.walletconnect-connect__button__icon {
  border-radius: 10px;
  height: 42px;
  margin: 0;
  width: 42px;
  background-size: cover !important;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-connect__button__text {
  color: #424952;
  font-size: 2.7vw;
  text-decoration: none !important;
  padding: 0;
  margin-top: 1.8vw;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__button__text {
    font-size: 16px;
    margin-top: 12px;
  }
}

.walletconnect-search__input {
  border: none;
  background: #d4d5d9;
  border-style: none;
  padding: 8px 16px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  width: calc(100% - 16px);
  margin: 0;
  margin-bottom: 8px;
}
`;typeof Symbol<"u"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")));typeof Symbol<"u"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function ns(t,e){try{var n=t()}catch(r){return e(r)}return n&&n.then?n.then(void 0,e):n}var rs="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E",os="WalletConnect",is=300,ss="rgb(64, 153, 255)",On="walletconnect-wrapper",Ke="walletconnect-style-sheet",Nn="walletconnect-qrcode-modal",as="walletconnect-qrcode-close",Mn="walletconnect-qrcode-text",cs="walletconnect-connect-button";function ls(t){return l.createElement("div",{className:"walletconnect-modal__header"},l.createElement("img",{src:rs,className:"walletconnect-modal__headerLogo"}),l.createElement("p",null,os),l.createElement("div",{className:"walletconnect-modal__close__wrapper",onClick:t.onClose},l.createElement("div",{id:as,className:"walletconnect-modal__close__icon"},l.createElement("div",{className:"walletconnect-modal__close__line1"}),l.createElement("div",{className:"walletconnect-modal__close__line2"}))))}function us(t){return l.createElement("a",{className:"walletconnect-connect__button",href:t.href,id:cs+"-"+t.name,onClick:t.onClick,rel:"noopener noreferrer",style:{backgroundColor:t.color},target:"_blank"},t.name)}var ds="data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E";function hs(t){var e=t.color,n=t.href,r=t.name,o=t.logo,s=t.onClick;return l.createElement("a",{className:"walletconnect-modal__base__row",href:n,onClick:s,rel:"noopener noreferrer",target:"_blank"},l.createElement("h3",{className:"walletconnect-modal__base__row__h3"},r),l.createElement("div",{className:"walletconnect-modal__base__row__right"},l.createElement("div",{className:"walletconnect-modal__base__row__right__app-icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),l.createElement("img",{src:ds,className:"walletconnect-modal__base__row__right__caret"})))}function fs(t){var e=t.color,n=t.href,r=t.name,o=t.logo,s=t.onClick,h=window.innerWidth<768?(r.length>8?2.5:2.7)+"vw":"inherit";return l.createElement("a",{className:"walletconnect-connect__button__icon_anchor",href:n,onClick:s,rel:"noopener noreferrer",target:"_blank"},l.createElement("div",{className:"walletconnect-connect__button__icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),l.createElement("div",{style:{fontSize:h},className:"walletconnect-connect__button__text"},r))}var _s=5,le=12;function ps(t){var e=E.isAndroid(),n=l.useState(""),r=n[0],o=n[1],s=l.useState(""),h=s[0],_=s[1],p=l.useState(1),g=p[0],w=p[1],y=h?t.links.filter(function(c){return c.name.toLowerCase().includes(h.toLowerCase())}):t.links,b=t.errorMessage,C=h||y.length>_s,k=Math.ceil(y.length/le),I=[(g-1)*le+1,g*le],R=y.length?y.filter(function(c,d){return d+1>=I[0]&&d+1<=I[1]}):[],i=!e&&k>1,a=void 0;function u(c){o(c.target.value),clearTimeout(a),c.target.value?a=setTimeout(function(){_(c.target.value),w(1)},1e3):(o(""),_(""),w(1))}return l.createElement("div",null,l.createElement("p",{id:Mn,className:"walletconnect-qrcode__text"},e?t.text.connect_mobile_wallet:t.text.choose_preferred_wallet),!e&&l.createElement("input",{className:"walletconnect-search__input",placeholder:"Search",value:r,onChange:u}),l.createElement("div",{className:"walletconnect-connect__buttons__wrapper"+(e?"__android":C&&y.length?"__wrap":"")},e?l.createElement(us,{name:t.text.connect,color:ss,href:t.uri,onClick:l.useCallback(function(){E.saveMobileLinkInfo({name:"Unknown",href:t.uri})},[])}):R.length?R.map(function(c){var d=c.color,m=c.name,f=c.shortName,v=c.logo,T=E.formatIOSMobile(t.uri,c),U=l.useCallback(function(){E.saveMobileLinkInfo({name:m,href:T})},[R]);return C?l.createElement(fs,{color:d,href:T,name:f||m,logo:v,onClick:U}):l.createElement(hs,{color:d,href:T,name:m,logo:v,onClick:U})}):l.createElement(l.Fragment,null,l.createElement("p",null,b.length?t.errorMessage:t.links.length&&!y.length?t.text.no_wallets_found:t.text.loading))),i&&l.createElement("div",{className:"walletconnect-modal__footer"},Array(k).fill(0).map(function(c,d){var m=d+1,f=g===m;return l.createElement("a",{style:{margin:"auto 10px",fontWeight:f?"bold":"normal"},onClick:function(){return w(m)}},m)})))}function gs(t){var e=!!t.message.trim();return l.createElement("div",{className:"walletconnect-qrcode__notification"+(e?" notification__show":"")},t.message)}var ms=function(t){try{var e="";return Promise.resolve(Tn.toString(t,{margin:0,type:"svg"})).then(function(n){return typeof n=="string"&&(e=n.replace("<svg",'<svg class="walletconnect-qrcode__image"')),e})}catch(n){return Promise.reject(n)}};function ws(t){var e=l.useState(""),n=e[0],r=e[1],o=l.useState(""),s=o[0],h=o[1];l.useEffect(function(){try{return Promise.resolve(ms(t.uri)).then(function(p){h(p)})}catch(p){Promise.reject(p)}},[]);var _=function(){var p=Xi(t.uri);p?(r(t.text.copied_to_clipboard),setInterval(function(){return r("")},1200)):(r("Error"),setInterval(function(){return r("")},1200))};return l.createElement("div",null,l.createElement("p",{id:Mn,className:"walletconnect-qrcode__text"},t.text.scan_qrcode_with_wallet),l.createElement("div",{dangerouslySetInnerHTML:{__html:s}}),l.createElement("div",{className:"walletconnect-modal__footer"},l.createElement("a",{onClick:_},t.text.copy_to_clipboard)),l.createElement(gs,{message:n}))}function ys(t){var e=E.isAndroid(),n=E.isMobile(),r=n?t.qrcodeModalOptions&&t.qrcodeModalOptions.mobileLinks?t.qrcodeModalOptions.mobileLinks:void 0:t.qrcodeModalOptions&&t.qrcodeModalOptions.desktopLinks?t.qrcodeModalOptions.desktopLinks:void 0,o=l.useState(!1),s=o[0],h=o[1],_=l.useState(!1),p=_[0],g=_[1],w=l.useState(!n),y=w[0],b=w[1],C={mobile:n,text:t.text,uri:t.uri,qrcodeModalOptions:t.qrcodeModalOptions},k=l.useState(""),I=k[0],R=k[1],i=l.useState(!1),a=i[0],u=i[1],c=l.useState([]),d=c[0],m=c[1],f=l.useState(""),v=f[0],T=f[1],U=function(){p||s||r&&!r.length||d.length>0||l.useEffect(function(){var Un=function(){try{if(e)return Promise.resolve();h(!0);var se=ns(function(){var F=t.qrcodeModalOptions&&t.qrcodeModalOptions.registryUrl?t.qrcodeModalOptions.registryUrl:E.getWalletRegistryUrl();return Promise.resolve(fetch(F)).then(function(Pn){return Promise.resolve(Pn.json()).then(function(jn){var $n=jn.listings,Dn=n?"mobile":"desktop",G=E.getMobileLinkRegistry(E.formatMobileRegistry($n,Dn),r);h(!1),g(!0),T(G.length?"":t.text.no_supported_wallets),m(G);var je=G.length===1;je&&(R(E.formatIOSMobile(t.uri,G[0])),b(!0)),u(je)})})},function(F){h(!1),g(!0),T(t.text.something_went_wrong),console.error(F)});return Promise.resolve(se&&se.then?se.then(function(){}):void 0)}catch(F){return Promise.reject(F)}};Un()})};U();var An=n?y:!y;return l.createElement("div",{id:Nn,className:"walletconnect-qrcode__base animated fadeIn"},l.createElement("div",{className:"walletconnect-modal__base"},l.createElement(ls,{onClose:t.onClose}),a&&y?l.createElement("div",{className:"walletconnect-modal__single_wallet"},l.createElement("a",{onClick:function(){return E.saveMobileLinkInfo({name:d[0].name,href:I})},href:I,rel:"noopener noreferrer",target:"_blank"},t.text.connect_with+" "+(a?d[0].name:"")+" ›")):e||s||!s&&d.length?l.createElement("div",{className:"walletconnect-modal__mobile__toggle"+(An?" right__selected":"")},l.createElement("div",{className:"walletconnect-modal__mobile__toggle_selector"}),n?l.createElement(l.Fragment,null,l.createElement("a",{onClick:function(){return b(!1),U()}},t.text.mobile),l.createElement("a",{onClick:function(){return b(!0)}},t.text.qrcode)):l.createElement(l.Fragment,null,l.createElement("a",{onClick:function(){return b(!0)}},t.text.qrcode),l.createElement("a",{onClick:function(){return b(!1),U()}},t.text.desktop))):null,l.createElement("div",null,y||!e&&!s&&!d.length?l.createElement(ws,Object.assign({},C)):l.createElement(ps,Object.assign({},C,{links:d,errorMessage:v})))))}var bs={choose_preferred_wallet:"Wähle bevorzugte Wallet",connect_mobile_wallet:"Verbinde mit Mobile Wallet",scan_qrcode_with_wallet:"Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",connect:"Verbinden",qrcode:"QR-Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"In die Zwischenablage kopieren",copied_to_clipboard:"In die Zwischenablage kopiert!",connect_with:"Verbinden mit Hilfe von",loading:"Laden...",something_went_wrong:"Etwas ist schief gelaufen",no_supported_wallets:"Es gibt noch keine unterstützten Wallet",no_wallets_found:"keine Wallet gefunden"},vs={choose_preferred_wallet:"Choose your preferred wallet",connect_mobile_wallet:"Connect to Mobile Wallet",scan_qrcode_with_wallet:"Scan QR code with a WalletConnect-compatible wallet",connect:"Connect",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copy to clipboard",copied_to_clipboard:"Copied to clipboard!",connect_with:"Connect with",loading:"Loading...",something_went_wrong:"Something went wrong",no_supported_wallets:"There are no supported wallets yet",no_wallets_found:"No wallets found"},Es={choose_preferred_wallet:"Elige tu billetera preferida",connect_mobile_wallet:"Conectar a billetera móvil",scan_qrcode_with_wallet:"Escanea el código QR con una billetera compatible con WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvil",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Conectar mediante",loading:"Cargando...",something_went_wrong:"Algo salió mal",no_supported_wallets:"Todavía no hay billeteras compatibles",no_wallets_found:"No se encontraron billeteras"},Ss={choose_preferred_wallet:"Choisissez votre portefeuille préféré",connect_mobile_wallet:"Se connecter au portefeuille mobile",scan_qrcode_with_wallet:"Scannez le QR code avec un portefeuille compatible WalletConnect",connect:"Se connecter",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copier",copied_to_clipboard:"Copié!",connect_with:"Connectez-vous à l'aide de",loading:"Chargement...",something_went_wrong:"Quelque chose a mal tourné",no_supported_wallets:"Il n'y a pas encore de portefeuilles pris en charge",no_wallets_found:"Aucun portefeuille trouvé"},Cs={choose_preferred_wallet:"원하는 지갑을 선택하세요",connect_mobile_wallet:"모바일 지갑과 연결",scan_qrcode_with_wallet:"WalletConnect 지원 지갑에서 QR코드를 스캔하세요",connect:"연결",qrcode:"QR 코드",mobile:"모바일",desktop:"데스크탑",copy_to_clipboard:"클립보드에 복사",copied_to_clipboard:"클립보드에 복사되었습니다!",connect_with:"와 연결하다",loading:"로드 중...",something_went_wrong:"문제가 발생했습니다.",no_supported_wallets:"아직 지원되는 지갑이 없습니다",no_wallets_found:"지갑을 찾을 수 없습니다"},ks={choose_preferred_wallet:"Escolha sua carteira preferida",connect_mobile_wallet:"Conectar-se à carteira móvel",scan_qrcode_with_wallet:"Ler o código QR com uma carteira compatível com WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvel",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Ligar por meio de",loading:"Carregamento...",something_went_wrong:"Algo correu mal",no_supported_wallets:"Ainda não há carteiras suportadas",no_wallets_found:"Nenhuma carteira encontrada"},xs={choose_preferred_wallet:"选择你的钱包",connect_mobile_wallet:"连接至移动端钱包",scan_qrcode_with_wallet:"使用兼容 WalletConnect 的钱包扫描二维码",connect:"连接",qrcode:"二维码",mobile:"移动",desktop:"桌面",copy_to_clipboard:"复制到剪贴板",copied_to_clipboard:"复制到剪贴板成功！",connect_with:"通过以下方式连接",loading:"正在加载...",something_went_wrong:"出了问题",no_supported_wallets:"目前还没有支持的钱包",no_wallets_found:"没有找到钱包"},Is={choose_preferred_wallet:"کیف پول مورد نظر خود را انتخاب کنید",connect_mobile_wallet:"به کیف پول موبایل وصل شوید",scan_qrcode_with_wallet:"کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",connect:"اتصال",qrcode:"کد QR",mobile:"سیار",desktop:"دسکتاپ",copy_to_clipboard:"کپی به کلیپ بورد",copied_to_clipboard:"در کلیپ بورد کپی شد!",connect_with:"ارتباط با",loading:"...بارگذاری",something_went_wrong:"مشکلی پیش آمد",no_supported_wallets:"هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",no_wallets_found:"هیچ کیف پولی پیدا نشد"},Ze={de:bs,en:vs,es:Es,fr:Ss,ko:Cs,pt:ks,zh:xs,fa:Is};function Rs(){var t=E.getDocumentOrThrow(),e=t.getElementById(Ke);e&&t.head.removeChild(e);var n=t.createElement("style");n.setAttribute("id",Ke),n.innerText=ts,t.head.appendChild(n)}function Ts(){var t=E.getDocumentOrThrow(),e=t.createElement("div");return e.setAttribute("id",On),t.body.appendChild(e),e}function Ln(){var t=E.getDocumentOrThrow(),e=t.getElementById(Nn);e&&(e.className=e.className.replace("fadeIn","fadeOut"),setTimeout(function(){var n=t.getElementById(On);n&&t.body.removeChild(n)},is))}function Os(t){return function(){Ln(),t&&t()}}function Ns(){var t=E.getNavigatorOrThrow().language.split("-")[0]||"en";return Ze[t]||Ze.en}function Ms(t,e,n){Rs();var r=Ts();l.render(l.createElement(ys,{text:Ns(),uri:t,onClose:Os(e),qrcodeModalOptions:n}),r)}function Ls(){Ln()}var qn=function(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"};function qs(t,e,n){console.log(t),qn()?es(t):Ms(t,e,n)}function As(){qn()||Ls()}var Us={open:qs,close:As},Ps=Us;const js=pe(Ps);class $s extends ur{constructor(e){super(),this.events=new et,this.accounts=[],this.chainId=1,this.pending=!1,this.bridge="https://bridge.walletconnect.org",this.qrcode=!0,this.qrcodeModalOptions=void 0,this.opts=e,this.chainId=(e==null?void 0:e.chainId)||this.chainId,this.wc=this.register(e)}get connected(){return typeof this.wc<"u"&&this.wc.connected}get connecting(){return this.pending}get connector(){return this.wc=this.register(this.opts),this.wc}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async open(e){if(this.connected){this.onOpen();return}return new Promise((n,r)=>{this.on("error",o=>{r(o)}),this.on("open",()=>{n()}),this.create(e)})}async close(){typeof this.wc>"u"||(this.wc.connected&&this.wc.killSession(),this.onClose())}async send(e){this.wc=this.register(this.opts),this.connected||await this.open(),this.sendPayload(e).then(n=>this.events.emit("payload",n)).catch(n=>this.events.emit("payload",$e(e.id,n.message)))}register(e){if(this.wc)return this.wc;this.opts=e||this.opts,this.bridge=e!=null&&e.connector?e.connector.bridge:(e==null?void 0:e.bridge)||"https://bridge.walletconnect.org",this.qrcode=typeof(e==null?void 0:e.qrcode)>"u"||e.qrcode!==!1,this.chainId=typeof(e==null?void 0:e.chainId)<"u"?e.chainId:this.chainId,this.qrcodeModalOptions=e==null?void 0:e.qrcodeModalOptions;const n={bridge:this.bridge,qrcodeModal:this.qrcode?js:void 0,qrcodeModalOptions:this.qrcodeModalOptions,storageId:e==null?void 0:e.storageId,signingMethods:e==null?void 0:e.signingMethods,clientMeta:e==null?void 0:e.clientMeta};if(this.wc=typeof(e==null?void 0:e.connector)<"u"?e.connector:new qi(n),typeof this.wc>"u")throw new Error("Failed to register WalletConnect connector");return this.wc.accounts.length&&(this.accounts=this.wc.accounts),this.wc.chainId&&(this.chainId=this.wc.chainId),this.registerConnectorEvents(),this.wc}onOpen(e){this.pending=!1,e&&(this.wc=e),this.events.emit("open")}onClose(){this.pending=!1,this.wc&&(this.wc=void 0),this.events.emit("close")}onError(e,n="Failed or Rejected Request",r=-32e3){const o={id:e.id,jsonrpc:e.jsonrpc,error:{code:r,message:n}};return this.events.emit("payload",o),o}create(e){this.wc=this.register(this.opts),this.chainId=e||this.chainId,!(this.connected||this.pending)&&(this.pending=!0,this.registerConnectorEvents(),this.wc.createSession({chainId:this.chainId}).then(()=>this.events.emit("created")).catch(n=>this.events.emit("error",n)))}registerConnectorEvents(){this.wc=this.register(this.opts),this.wc.on("connect",e=>{var n,r;if(e){this.events.emit("error",e);return}this.accounts=((n=this.wc)===null||n===void 0?void 0:n.accounts)||[],this.chainId=((r=this.wc)===null||r===void 0?void 0:r.chainId)||this.chainId,this.onOpen()}),this.wc.on("disconnect",e=>{if(e){this.events.emit("error",e);return}this.onClose()}),this.wc.on("modal_closed",()=>{this.events.emit("error",new Error("User closed modal"))}),this.wc.on("session_update",(e,n)=>{const{accounts:r,chainId:o}=n.params[0];(!this.accounts||r&&this.accounts!==r)&&(this.accounts=r,this.events.emit("accountsChanged",r)),(!this.chainId||o&&this.chainId!==o)&&(this.chainId=o,this.events.emit("chainChanged",o))})}async sendPayload(e){this.wc=this.register(this.opts);try{const n=await this.wc.unsafeSend(e);return this.sanitizeResponse(n)}catch(n){return this.onError(e,n.message)}}sanitizeResponse(e){return typeof e.error<"u"&&typeof e.error.code>"u"?$e(e.id,e.error.message,e.error.data):e}}class Fs{constructor(e){this.events=new et,this.rpc={infuraId:e==null?void 0:e.infuraId,custom:e==null?void 0:e.rpc},this.signer=new De(new $s(e));const n=this.signer.connection.chainId||(e==null?void 0:e.chainId)||1;this.http=this.setHttpProvider(n),this.registerEventListeners()}get connected(){return this.signer.connection.connected}get connector(){return this.signer.connection.connector}get accounts(){return this.signer.connection.accounts}get chainId(){return this.signer.connection.chainId}get rpcUrl(){var e;return((e=this.http)===null||e===void 0?void 0:e.connection).url||""}async request(e){switch(e.method){case"eth_requestAccounts":return await this.connect(),this.signer.connection.accounts;case"eth_accounts":return this.signer.connection.accounts;case"eth_chainId":return this.signer.connection.chainId}if(we.includes(e.method))return this.signer.request(e);if(typeof this.http>"u")throw new Error(`Cannot request JSON-RPC method (${e.method}) without provided rpc url`);return this.http.request(e)}sendAsync(e,n){this.request(e).then(r=>n(null,r)).catch(r=>n(r,void 0))}async enable(){return await this.request({method:"eth_requestAccounts"})}async connect(){this.signer.connection.connected||await this.signer.connect()}async disconnect(){this.signer.connection.connected&&await this.signer.disconnect()}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}removeListener(e,n){this.events.removeListener(e,n)}off(e,n){this.events.off(e,n)}get isWalletConnect(){return!0}registerEventListeners(){this.signer.connection.on("accountsChanged",e=>{this.events.emit("accountsChanged",e)}),this.signer.connection.on("chainChanged",e=>{this.http=this.setHttpProvider(e),this.events.emit("chainChanged",e)}),this.signer.on("disconnect",()=>{this.events.emit("disconnect")})}setHttpProvider(e){const n=Ut(e,this.rpc);return typeof n>"u"?void 0:new De(new dr(n))}}export{Fs as default};
