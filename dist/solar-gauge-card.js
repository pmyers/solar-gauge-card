function t(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}function e(t,e,i,s){if("a"===i&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?s:"a"===i?s.call(t):s?s.value:e.get(t)}function i(t,e,i,s,r){if("m"===s)throw new TypeError("Private method is not writable");if("a"===s&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===s?r.call(t,i):r?r.value=i:e.set(t,i),i}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s=globalThis,r=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;class a{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}}const h=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:u,getOwnPropertySymbols:y,getPrototypeOf:p}=Object,g=globalThis,$=g.trustedTypes,f=$?$.emptyScript:"",v=g.reactiveElementPolyfillSupport,m=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},x=(t,e)=>!l(t,e),b={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class E extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const o=s?.call(this);r.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...u(t),...y(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(r)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),r=s.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=s,this[s]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??x)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[m("elementProperties")]=new Map,E[m("finalized")]=new Map,v?.({ReactiveElement:E}),(g.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,w=A.trustedTypes,S=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,P="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+C,U=`<${O}>`,k=document,M=()=>k.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,H="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,W=/>/g,I=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,B=/"/g,D=/^(?:script|style|textarea|title)$/i,L=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),Y=L(1),X=L(2),V=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),Z=new WeakMap,G=k.createTreeWalker(k,129);function F(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=R;for(let e=0;e<i;e++){const i=t[e];let a,h,l=-1,c=0;for(;c<i.length&&(n.lastIndex=c,h=n.exec(i),null!==h);)c=n.lastIndex,n===R?"!--"===h[1]?n=z:void 0!==h[1]?n=W:void 0!==h[2]?(D.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=I):void 0!==h[3]&&(n=I):n===I?">"===h[0]?(n=r??R,l=-1):void 0===h[1]?l=-2:(l=n.lastIndex-h[2].length,a=h[1],n=void 0===h[3]?I:'"'===h[3]?B:j):n===B||n===j?n=I:n===z||n===W?n=R:(n=I,r=void 0);const d=n===I&&t[e+1].startsWith("/>")?" ":"";o+=n===R?i+U:l>=0?(s.push(a),i.slice(0,l)+P+i.slice(l)+C+d):i+C+(-2===l?e:d)}return[F(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[h,l]=J(t,e);if(this.el=K.createElement(h,i),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=G.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(P)){const e=l[o++],i=s.getAttribute(t).split(C),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?st:"?"===n[1]?rt:"@"===n[1]?ot:it}),s.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(D.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],M()),G.nextNode(),a.push({type:2,index:++r});s.append(t[e],M())}}}else if(8===s.nodeType)if(s.data===O)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)a.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,s){if(e===V)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const o=T(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Q(t,r._$AS(t,e.values),r,s)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??k).importNode(e,!0);G.currentNode=s;let r=G.nextNode(),o=0,n=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new et(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new nt(r,this,t)),this._$AV.push(e),a=i[++n]}o!==a?.index&&(r=G.nextNode(),o++)}return G.currentNode=k,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),T(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(F(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new tt(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Z.get(t.strings);return void 0===e&&Z.set(t.strings,e=new K(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new et(this.O(M()),this.O(M()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=Q(this,t,e,0),o=!T(t)||t!==this._$AH&&t!==V,o&&(this._$AH=t);else{const s=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=Q(this,s[i+n],e,n),a===V&&(a=this._$AH[n]),o||=!T(a)||a!==this._$AH[n],a===q?t=q:t!==q&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class rt extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class ot extends it{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??q)===V)return;const i=this._$AH,s=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==q&&(i===q||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const at=A.litHtmlPolyfillSupport;at?.(K,et),(A.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ht extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new et(e.insertBefore(M(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}ht._$litElement$=!0,ht.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ht});const lt=globalThis.litElementPolyfillSupport;lt?.({LitElement:ht}),(globalThis.litElementVersions??=[]).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:x},dt=(t=ct,e,i)=>{const{kind:s,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}class yt{constructor(t,e){this.solarColor="#ffee3A",this.gridOutColor="#488fc2",this.gridInColor="#8353d1",this.homeColor="#ffa500",this.batteryPowerOutColor="#0bac3b",this.batteryPowerInColor="#83d3d1",this.batteryColor="green",this.gridUpdateMap=new Map([[yt.IN,{valueColor:"green",text:"Grid In",active:!0}],[yt.ZERO,{valueColor:"",text:"Grid",active:!1}],[yt.OUT,{valueColor:"red",text:"Grid Out",active:!0}]]),this.batteryUpdateMap=new Map([[yt.IN,{valueColor:"green",text:"Battery In",active:!0}],[yt.ZERO,{valueColor:"",text:"Battery",active:!1}],[yt.OUT,{valueColor:"red",text:"Battery Out",active:!0}]]),this.hass=t,this.config=e}initializeEntity(t){let e=0,i=!0;if(t.entity)e=Number(t.entity.state),t.invert&&(e=-e),t.color=e>0?t.out.color:t.in.color,i=!0;else if(t.out.entity&&t.in.entity){const i=Number(t.out.entity.state),s=Number(t.in.entity.state);if(i>0)t.entity=t.out.entity,t.color=t.out.color,e=i;else{if(!(s>0))throw new Error("At least one of the 'out' or 'in' entities must be positive.");t.entity=t.in.entity,t.color=t.in.color,e=-1*s}t.invert&&(e=-e)}else{if(t.out.entity&&!t.in.entity||!t.out.entity&&t.in.entity)throw new Error("Invalid configuration.");i=!1}return{entity:t.entity,value:e,textColor:t.color,active:i}}customizeInOutEntity(t,e){let i=this.initializeEntity(t);return i=i.value<0?{...i,...e.get(yt.IN)}:0==i.value?{...i,...e.get(yt.ZERO)}:{...i,...e.get(yt.OUT)},i}customizeSimpleEntity(t){return{entity:t.entity,value:Number(t.entity.state),textColor:t.color,text:t.text}}buildGridPowerEntity(t,e){return{entity:t.states[e.gridPower.entity],color:"",out:{entity:t.states[e.gridPower?.out?.entity],color:this.gridOutColor},in:{entity:t.states[e.gridPower?.in?.entity],color:this.gridInColor},invert:!!e.gridPower?.invert}}buildBatteryPowerEntity(t,e){return{entity:t.states[e.batteryPower?.entity],color:"",out:{entity:t.states[e.batteryPower?.out?.entity],color:this.batteryPowerOutColor},in:{entity:t.states[e.batteryPower?.in?.entity],color:this.batteryPowerInColor},invert:!!e.batteryPower?.invert}}buildSolarPowerEntity(t,e){return{entity:t.states[e.solarPower.entity],color:this.solarColor,text:"Solar"}}buildHomeConsumptionEntity(t,e){return{entity:t.states[e.homeConsumption.entity],color:this.homeColor,text:"Home"}}buildBatteryEntity(t,e){return{capacity:{entity:t.states[e.battery?.capacity?.entity],color:this.batteryColor},temperature:{entity:t.states[e.battery?.temperature?.entity]}}}}var pt,gt;yt.IN="in",yt.ZERO="zero",yt.OUT="out";let $t=class extends ht{constructor(){super(...arguments),pt.set(this,void 0),gt.set(this,void 0),this.svgWidth="300px",this.svgHeight="200px",this.svgX=150,this.svgY=60,this.minStrokeWidth=5,this.maxStrokeWidth=20,this.calculatedStrokeWidth=20}get _hass(){return e(this,pt,"f")}set _hass(t){i(this,pt,t,"f")}get _config(){return e(this,gt,"f")}set _config(t){i(this,gt,t,"f")}_gauge(t,e,i,s){const r=2*Math.PI*t,o=Math.min(Math.max(e/i*r/2,0),r/2),n=Math.max(r-o,0);return X`
          <circle id="gauge-${s}"
            cx="${this.svgX}"
            cy="${this.svgY}"
            r="${t}"
            stroke-dasharray="${o} ${n}"
            stroke-dashoffset="0"
            class="circle ${s}" style="stroke-width: ${this.calculatedStrokeWidth};
            transition: stroke-dasharray 1s ease;">
          </circle>`}getFinalStrokeWidth(t,e){const i=e||Math.trunc(t/200);return Math.max(Math.min(i,this.maxStrokeWidth),this.minStrokeWidth)}drawBattery(t){if(t.capacity.entity){const e=Number(t.capacity.entity.state),i=130,s=6,r=2,o=5*s+4*r,n=12,a=i+o,h=160,l=0,c=i+(e-l)*(a-i)/(100-l),d=t.capacity.color;return X`
          <text id="battery-capacity-value" x="${i+40}" y="${h-16}" class="svg-text svg-text-middle" style="font-size: 10px;">${e}${t.capacity.entity.attributes.unit_of_measurement}</text>
         ${t.temperature.entity?X`
          <text id="battery-temperature-value" x="${i}" y="${h-16}" class="svg-text svg-text-middle" style="font-size: 10px;">${Number(t.temperature.entity.state)}${t.temperature.entity.attributes.unit_of_measurement}</text>
             `:""}
           <line id="battery-cell-full" x1="${i}" y1="${h}" x2="${a}" y2="${h}" stroke="${d}" stroke-width="${n}"
                     stroke-dasharray="${s} ${r}">
           </line>
           <line id="battery-cell-empty" x1="${a}" y1="${h}" x2="${c}" y2="${h}" stroke="lightgray" stroke-width="${n}"
                     stroke-dasharray="${s} ${r}">
           </line>
           <rect id="battery-box" x="${i-3}" y="${h-9}" rx="3" ry="3" width="${o+6}" height="${n+6}" 
                     style="fill:none;stroke-width:2;stroke:${d}"></rect>
           <rect x="${i+o+2}" y="${h-5}" rx="3" ry="3" width="5" height="10" style="fill:${d}"></rect>
        `}}setConfig(t){if(!(t.solarPower.entity&&t.homeConsumption.entity&&(t.gridPower.entity||t.gridPower.out?.entity&&t.gridPower.in?.entity)))throw new Error("You need to define mandatory entities: 'solarPower', 'homeConsumption' and 'gridPower' in the card configuration.");console.log("All set. Enjoy!!!"),this._config=t}set hass(t){this._hass=t,this.requestUpdate()}render(){if(this._hass){const t=new yt(this._hass,this._config),e=t.buildGridPowerEntity(this._hass,this._config);this.gridEntity=t.customizeInOutEntity(e,t.gridUpdateMap);const i=t.buildBatteryPowerEntity(this._hass,this._config);this.batteryPowerEntity=t.customizeInOutEntity(i,t.batteryUpdateMap);const s=t.buildSolarPowerEntity(this._hass,this._config);this.solarEntity=t.customizeSimpleEntity(s);const r=t.buildHomeConsumptionEntity(this._hass,this._config);this.homeConsumptionEntity=t.customizeSimpleEntity(r);const o=t.buildBatteryEntity(this._hass,this._config),n=this.drawBattery(o),a=this._config.gaugeWidth;this.style.setProperty("--solar-color",s.color),this.style.setProperty("--grid-out-color",e.out.color),this.style.setProperty("--grid-in-color",e.in.color),this.style.setProperty("--battery-out-color",i.out.color),this.style.setProperty("--battery-in-color",i.in.color),this.style.setProperty("--home-color",r.color);const h=Math.max(0,this.gridEntity.value),l=Math.abs(Math.min(0,this.gridEntity.value)),c=Math.max(0,this.batteryPowerEntity.value),d=Math.abs(Math.min(0,this.batteryPowerEntity.value)),u=this.solarEntity.value+c+h,y=this.homeConsumptionEntity.value+d+l,p=100;this.calculatedStrokeWidth=this.getFinalStrokeWidth(u,a);const g=p-this.calculatedStrokeWidth;return Y` <ha-card>
      <svg width="${this.svgWidth}" height="${this.svgHeight}">
       ${this._gauge(p,u,u,"circle-grid-out")}
       ${this._gauge(p,this.solarEntity.value+c,u,"circle-battery-out")}
       ${this._gauge(p,this.solarEntity.value,u,"circle-solar")}
       ${this._gauge(g,y,y,"circle-grid-in")}
       ${this._gauge(g,this.homeConsumptionEntity.value+d,y,"circle-battery-in")}
       ${this._gauge(g,this.homeConsumptionEntity.value,y,"circle-home")}

    <text id="gauge-home-text" x="${this.svgX-p-this.calculatedStrokeWidth/2}" y="${2.5*this.svgY}" class="svg-text svg-text-description svg-text-left" style="fill:${this.homeConsumptionEntity.textColor}">
        ${this.homeConsumptionEntity.text}
    </text>
    <text id="gauge-home-value" x="${this.svgX-p-this.calculatedStrokeWidth/2}" y="${2.7*this.svgY}" class="svg-text svg-text-value svg-text-left">
        ${this.homeConsumptionEntity.value} ${this.homeConsumptionEntity.entity.attributes.unit_of_measurement}
    </text>
    <text id="gauge-grid-text" x="${this.svgX}" y="${1.6*this.svgY}" class="svg-text svg-bigtext-description svg-text-middle" style="fill:${this.gridEntity.textColor};">
        ${this.gridEntity.text}
    </text>
    <text id="gauge-grid-value" x="${this.svgX}" y="${2*this.svgY}" class="svg-text svg-bigtext-value svg-text-middle" style="fill:${this.gridEntity.valueColor};">
        ${this.gridEntity.value} ${this.gridEntity.entity.attributes.unit_of_measurement}
    </text>
    <text id="gauge-solar-text" x="${this.svgX+p+this.calculatedStrokeWidth/2}" y="${2.5*this.svgY}" class="svg-text svg-text-description svg-text-right" style="fill: ${this.solarEntity.textColor}">
        ${this.solarEntity.text}
    </text>
    <text id="gauge-solar-value" x="${this.svgX+p+this.calculatedStrokeWidth/2}" y="${2.7*this.svgY}" class="svg-text svg-text-value svg-text-right" style="fill: ${this.solarEntity.valueColor}">
        ${this.solarEntity.value} ${this.solarEntity.entity.attributes.unit_of_measurement}
    </text>
    <text id="gauge-battery-text" x="${this.svgX+p+this.calculatedStrokeWidth/2}" y="${2.9*this.svgY}" class="svg-text svg-text-description svg-text-right" style="fill: ${this.batteryPowerEntity.textColor||"none"}">
        ${this.batteryPowerEntity.text||""}
    </text>
    <text id="gauge-battery-value" x="${this.svgX+p+this.calculatedStrokeWidth/2}" y="${3.1*this.svgY}" class="svg-text svg-text-value svg-text-right" style="fill: ${this.batteryPowerEntity.valueColor||"none"}">
        ${this.batteryPowerEntity.value} ${this.batteryPowerEntity.entity?.attributes.unit_of_measurement}
    </text>

        ${n}
      </svg>
      </ha-card>
      `}return Y``}};pt=new WeakMap,gt=new WeakMap,$t.styles=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new a(i,t,o)})`
  
          ha-card {
              display: flex;
              justify-content: center;
              align-items: center;
          }
          .circle {
            fill: none;
            transform: rotate(-180deg);
            transform-origin: 50% 50%;
          }
          .circle-solar {
            stroke: var(--solar-color);
          }        
          .circle-grid-out {
            stroke: var(--grid-out-color);
          }
          .circle-grid-in {
            stroke: var(--grid-in-color);
          }
          .circle-battery-out {
            stroke: var(--battery-out-color);
          }
          .circle-battery-in {
            stroke: var(--battery-in-color);
          }
          .circle-home {
            stroke: var(--home-color);
          }
          .svg-text {
            font-weight: bold;
            alignment-baseline: middle;
            fill: var(--primary-text-color)
          }
          .svg-text-value {     
            font-size: 13px;
            fill: var(--primary-text-color)
          }
          .svg-text-description {
            font-size: 12px;
          }
          .svg-bigtext-value {     
            font-size: 26px;
            fill: var(--primary-text-color)
          }
          .svg-bigtext-description {
            font-size: 24px;
          }
          .svg-text-right{
            text-anchor: end;
          }
          .svg-text-middle{
            text-anchor: middle;
          }
          .svg-text-left{
            text-anchor: start;
          }
  `,t([ut()],$t.prototype,"_hass",null),t([function(t){return ut({...t,state:!0,attribute:!1})}()],$t.prototype,"_config",null),$t=t([(t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)})("solar-gauge-card")],$t);export{$t as SolarGaugeCard};
