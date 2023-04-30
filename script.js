/*! For license information please see script.js.LICENSE.txt */
(()=>{"use strict";let e;async function t(){return void 0===e&&(e=async function(){return function(e){const t=new Map;return n(e.layers,"",t),t}(await WA.room.getTiledMap())}()),e}function n(e,t,r){for(const o of e)"group"===o.type?n(o.layers,t+o.name+"/",r):(o.name=t+o.name,r.set(o.name,o))}var r=Object.prototype.toString,o=Array.isArray||function(e){return"[object Array]"===r.call(e)};function s(e){return"function"==typeof e}function i(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function a(e,t){return null!=e&&"object"==typeof e&&t in e}var c=RegExp.prototype.test,l=/\S/;var u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},p=/\s*/,g=/\s+/,f=/\s*=/,h=/\s*\}/,y=/#|\^|\/|>|\{|&|=|!/;function d(e){this.string=e,this.tail=e,this.pos=0}function m(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function v(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}d.prototype.eos=function(){return""===this.tail},d.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},d.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},m.prototype.push=function(e){return new m(e,this)},m.prototype.lookup=function(e){var t,n,r,o=this.cache;if(o.hasOwnProperty(e))t=o[e];else{for(var i,c,l,u=this,p=!1;u;){if(e.indexOf(".")>0)for(i=u.view,c=e.split("."),l=0;null!=i&&l<c.length;)l===c.length-1&&(p=a(i,c[l])||(n=i,r=c[l],null!=n&&"object"!=typeof n&&n.hasOwnProperty&&n.hasOwnProperty(r))),i=i[c[l++]];else i=u.view[e],p=a(u.view,e);if(p){t=i;break}u=u.parent}o[e]=t}return s(t)&&(t=t.call(this.view)),t},v.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},v.prototype.parse=function(e,t){var n=this.templateCache,r=e+":"+(t||b.tags).join(":"),s=void 0!==n,a=s?n.get(r):void 0;return null==a&&(a=function(e,t){if(!e)return[];var n,r,s,a,u=!1,m=[],v=[],w=[],A=!1,W=!1,S="",C=0;function E(){if(A&&!W)for(;w.length;)delete v[w.pop()];else w=[];A=!1,W=!1}function k(e){if("string"==typeof e&&(e=e.split(g,2)),!o(e)||2!==e.length)throw new Error("Invalid tags: "+e);n=new RegExp(i(e[0])+"\\s*"),r=new RegExp("\\s*"+i(e[1])),s=new RegExp("\\s*"+i("}"+e[1]))}k(t||b.tags);for(var x,T,V,P,L,M,G=new d(e);!G.eos();){if(x=G.pos,V=G.scanUntil(n))for(var j=0,U=V.length;j<U;++j)a=P=V.charAt(j),function(e,t){return c.call(e,t)}(l,a)?(W=!0,u=!0,S+=" "):(w.push(v.length),S+=P),v.push(["text",P,x,x+1]),x+=1,"\n"===P&&(E(),S="",C=0,u=!1);if(!G.scan(n))break;if(A=!0,T=G.scan(y)||"name",G.scan(p),"="===T?(V=G.scanUntil(f),G.scan(f),G.scanUntil(r)):"{"===T?(V=G.scanUntil(s),G.scan(h),G.scanUntil(r),T="&"):V=G.scanUntil(r),!G.scan(r))throw new Error("Unclosed tag at "+G.pos);if(L=">"==T?[T,V,x,G.pos,S,C,u]:[T,V,x,G.pos],C++,v.push(L),"#"===T||"^"===T)m.push(L);else if("/"===T){if(!(M=m.pop()))throw new Error('Unopened section "'+V+'" at '+x);if(M[1]!==V)throw new Error('Unclosed section "'+M[1]+'" at '+x)}else"name"===T||"{"===T||"&"===T?W=!0:"="===T&&k(V)}if(E(),M=m.pop())throw new Error('Unclosed section "'+M[1]+'" at '+G.pos);return function(e){for(var t,n=[],r=n,o=[],s=0,i=e.length;s<i;++s)switch((t=e[s])[0]){case"#":case"^":r.push(t),o.push(t),r=t[4]=[];break;case"/":o.pop()[5]=t[2],r=o.length>0?o[o.length-1][4]:n;break;default:r.push(t)}return n}(function(e){for(var t,n,r=[],o=0,s=e.length;o<s;++o)(t=e[o])&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(r.push(t),n=t));return r}(v))}(e,t),s&&n.set(r,a)),a},v.prototype.render=function(e,t,n,r){var o=this.getConfigTags(r),s=this.parse(e,o),i=t instanceof m?t:new m(t,void 0);return this.renderTokens(s,i,n,e,r)},v.prototype.renderTokens=function(e,t,n,r,o){for(var s,i,a,c="",l=0,u=e.length;l<u;++l)a=void 0,"#"===(i=(s=e[l])[0])?a=this.renderSection(s,t,n,r,o):"^"===i?a=this.renderInverted(s,t,n,r,o):">"===i?a=this.renderPartial(s,t,n,o):"&"===i?a=this.unescapedValue(s,t):"name"===i?a=this.escapedValue(s,t,o):"text"===i&&(a=this.rawValue(s)),void 0!==a&&(c+=a);return c},v.prototype.renderSection=function(e,t,n,r,i){var a=this,c="",l=t.lookup(e[1]);if(l){if(o(l))for(var u=0,p=l.length;u<p;++u)c+=this.renderTokens(e[4],t.push(l[u]),n,r,i);else if("object"==typeof l||"string"==typeof l||"number"==typeof l)c+=this.renderTokens(e[4],t.push(l),n,r,i);else if(s(l)){if("string"!=typeof r)throw new Error("Cannot use higher-order sections without the original template");null!=(l=l.call(t.view,r.slice(e[3],e[5]),(function(e){return a.render(e,t,n,i)})))&&(c+=l)}else c+=this.renderTokens(e[4],t,n,r,i);return c}},v.prototype.renderInverted=function(e,t,n,r,s){var i=t.lookup(e[1]);if(!i||o(i)&&0===i.length)return this.renderTokens(e[4],t,n,r,s)},v.prototype.indentPartial=function(e,t,n){for(var r=t.replace(/[^ \t]/g,""),o=e.split("\n"),s=0;s<o.length;s++)o[s].length&&(s>0||!n)&&(o[s]=r+o[s]);return o.join("\n")},v.prototype.renderPartial=function(e,t,n,r){if(n){var o=this.getConfigTags(r),i=s(n)?n(e[1]):n[e[1]];if(null!=i){var a=e[6],c=e[5],l=e[4],u=i;0==c&&l&&(u=this.indentPartial(i,l,a));var p=this.parse(u,o);return this.renderTokens(p,t,n,u,r)}}},v.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return n},v.prototype.escapedValue=function(e,t,n){var r=this.getConfigEscape(n)||b.escape,o=t.lookup(e[1]);if(null!=o)return"number"==typeof o&&r===b.escape?String(o):r(o)},v.prototype.rawValue=function(e){return e[1]},v.prototype.getConfigTags=function(e){return o(e)?e:e&&"object"==typeof e?e.tags:void 0},v.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!o(e)?e.escape:void 0};var b={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){w.templateCache=e},get templateCache(){return w.templateCache}},w=new v;b.clearCache=function(){return w.clearCache()},b.parse=function(e,t){return w.parse(e,t)},b.render=function(e,t,n,r){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(o(s=e)?"array":typeof s)+'" was given as the first argument for mustache#render(template, view, partials)');var s;return w.render(e,t,n,r)},b.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return u[e]}))},b.Scanner=d,b.Context=m,b.Writer=v;const A=b;class W{constructor(e,t){this.template=e,this.state=t,this.ast=A.parse(e)}getValue(){return void 0===this.value&&(this.value=A.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const n of this.getUsedVariables().values())t.push(this.state.onVariableChange(n).subscribe((()=>{const t=A.render(this.template,this.state);t!==this.value&&(this.value=t,e(this.value))})));return{unsubscribe:()=>{for(const e of t)e.unsubscribe()}}}isPureString(){return 0===this.ast.length||1===this.ast.length&&"text"===this.ast[0][0]}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const n of e){const e=n[0],r=n[1],o=n[4];["name","&","#","^"].includes(e)&&t.add(r),void 0!==o&&"string"!=typeof o&&this.recursiveGetUsedVariables(o,t)}}}async function S(e,t,n){console.log(e),(await WA.room.area.get(e)).setProperty(t,n)}function C(e,t,n){WA.room.setProperty(e,t,n),"visible"===t&&(n?WA.room.showLayer(e):WA.room.hideLayer(e))}class E{constructor(e){this.properties=null!=e?e:[]}get(e){const t=this.properties.filter((t=>t.name===e)).map((e=>e.value));if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==t.length)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const n=this.get(e);if(void 0!==n){if("json"!==t&&typeof n!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return n}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const n=this.get(e);if(void 0===n)throw new Error('Property "'+e+'" is missing');if("json"!==t&&typeof n!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return n}getType(e){const t=this.properties.filter((t=>t.name===e)).map((e=>e.type));if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==t.length)return t[0]}}const k="https://unpkg.com/@workadventure/scripting-api-extra@1.4.6/dist";class x{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new E(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return!e||WA.player.tags.includes(e)}get isWritable(){const e=this.properties.getString("writableBy");return!e||WA.player.tags.includes(e)}}function T(e){const t=e?"#"+e.join():"";WA.nav.openCoWebSite(k+"/configuration.html"+t)}async function V(e,t){const n=await WA.room.getTiledMap(),r=new Map;return P(n.layers,r,e,t),r}function P(e,t,n,r){for(const o of e)if("objectgroup"===o.type){for(const e of o.objects)if("variable"===e.type||"variable"===e.class){if(n&&o.name!==n)continue;if(r&&!r.includes(e.name))continue;t.set(e.name,new x(e))}}else"group"===o.type&&P(o.layers,t,n,r)}function L(e){let t=1/0,n=1/0,r=0,o=0;const s=e.data;if("string"==typeof s)throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let i=0;i<e.height;i++)for(let a=0;a<e.width;a++)0!==s[a+i*e.width]&&(t=Math.min(t,a),o=Math.max(o,a),n=Math.min(n,i),r=Math.max(r,i));return{top:n,left:t,right:o+1,bottom:r+1}}function M(e){let t=1/0,n=1/0,r=0,o=0;for(const s of e){const e=L(s);e.left<t&&(t=e.left),e.top<n&&(n=e.top),e.right>o&&(o=e.right),e.bottom>r&&(r=e.bottom)}return{top:n,left:t,right:o,bottom:r}}let G,j,U,B=0,O=0;function R(e){if(WA.state[e.name]){let t=e.properties.mustGetString("openLayer");for(const e of t.split("\n"))WA.room.showLayer(e);t=e.properties.mustGetString("closeLayer");for(const e of t.split("\n"))WA.room.hideLayer(e)}else{let t=e.properties.mustGetString("openLayer");for(const e of t.split("\n"))WA.room.hideLayer(e);t=e.properties.mustGetString("closeLayer");for(const e of t.split("\n"))WA.room.showLayer(e)}}function I(e){return e.map((e=>G.get(e))).filter((e=>"tilelayer"===(null==e?void 0:e.type)))}function H(e){const t=M(I(e)),n=32*((t.right-t.left)/2+t.left),r=32*((t.bottom-t.top)/2+t.top);return Math.sqrt(Math.pow(B-n,2)+Math.pow(O-r,2))}function F(e){WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]?function(e){const t=e.properties.getString("openSound"),n=e.properties.getNumber("soundRadius");let r=1;if(n){const t=H(e.properties.mustGetString("openLayer").split("\n"));if(t>n)return;r=1-t/n}t&&WA.sound.loadSound(t).play({volume:r})}(e):function(e){const t=e.properties.getString("closeSound"),n=e.properties.getNumber("soundRadius");let r=1;if(n){const t=H(e.properties.mustGetString("closeLayer").split("\n"));if(t>n)return;r=1-t/n}t&&WA.sound.loadSound(t).play({volume:r})}(e),R(e)})),R(e)}function N(e,t,n,r){const o=e.name;let s,i,a=!1;const c=n.getString("tag");let l=!0;c&&!WA.player.tags.includes(c)&&(l=!1);const u=!!c;function p(){var e;s&&s.remove(),s=WA.ui.displayActionMessage({message:null!==(e=n.getString("closeTriggerMessage"))&&void 0!==e?e:"Press SPACE to close the door",callback:()=>{WA.state[t.name]=!1,g()}})}function g(){var e;s&&s.remove(),s=WA.ui.displayActionMessage({message:null!==(e=n.getString("openTriggerMessage"))&&void 0!==e?e:"Press SPACE to open the door",callback:()=>{WA.state[t.name]=!0,p()}})}function f(){i&&(WA.room.website.delete(i.name),i=void 0)}WA.room.onEnterLayer(o).subscribe((()=>{a=!0,n.getBoolean("autoOpen")&&l?WA.state[t.name]=!0:WA.state[t.name]||(!u||l)&&u||!n.getString("code")&&!n.getString("codeVariable")?l&&(WA.state[t.name]?p():g()):function(e){const n=M(I(t.properties.mustGetString("closeLayer").split("\n")));i=WA.room.website.create({name:"doorKeypad"+e,url:r+"/keypad.html#"+encodeURIComponent(e),position:{x:32*n.right,y:32*n.top,width:96,height:128},allowApi:!0})}(o)})),WA.room.onLeaveLayer(o).subscribe((()=>{a=!1,n.getBoolean("autoClose")&&(WA.state[t.name]=!1),s&&s.remove(),f()})),WA.state.onVariableChange(t.name).subscribe((()=>{a&&(n.getBoolean("autoClose")||!0!==WA.state[t.name]||p(),i&&!0===WA.state[t.name]&&f(),n.getBoolean("autoOpen")||!1!==WA.state[t.name]||g())}))}function D(e){void 0===WA.state[e.name]&&(WA.state[e.name]=0),WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]&&function(e){const t=e.properties.mustGetString("bellSound"),n=e.properties.getNumber("soundRadius");let r=1;if(n){const t=Math.sqrt(Math.pow(e.x-B,2)+Math.pow(e.y-O,2));if(t>n)return;r=1-t/n}WA.sound.loadSound(t).play({volume:r})}(e)}))}function _(e,t,n){let r;const o=t.getString("bellPopup");WA.room.onEnterLayer(n).subscribe((()=>{var n;o?r=WA.ui.openPopup(o,"",[{label:null!==(n=t.getString("bellButtonText"))&&void 0!==n?n:"Ring",callback:()=>{WA.state[e]=WA.state[e]+1}}]):WA.state[e]=WA.state[e]+1})),WA.room.onLeaveLayer(n).subscribe((()=>{r&&(r.close(),r=void 0)}))}function q(e,t){const n=e.getString("bindVariable");n&&function(e,t,n,r,o,s){s&&!WA.player.tags.includes(s)||(void 0!==n&&WA.room.onEnterLayer(t).subscribe((()=>{o||(WA.state[e]=n)})),void 0!==r&&WA.room.onLeaveLayer(t).subscribe((()=>{WA.state[e]=r})))}(n,t,e.get("enterValue"),e.get("leaveValue"),e.getString("triggerMessage"),e.getString("tag"))}function $(e,t,n){let r;const o=n.getString("openConfigAdminTag");let s=!0;function i(){WA.nav.closeCoWebSite()}o&&!WA.player.tags.includes(o)&&(s=!1),WA.room.onEnterLayer(t).subscribe((()=>{const t=n.getString("openConfigTrigger");var o;s&&(t&&"onaction"===t?(r&&r.remove(),r=WA.ui.displayActionMessage({message:null!==(o=n.getString("openConfigTriggerMessage"))&&void 0!==o?o:"Press SPACE or touch here to configure",callback:()=>T(e)})):T(e))})),WA.room.onLeaveLayer(t).subscribe((()=>{r?(r.remove(),i()):i()}))}function J(){return WA.onInit().then((()=>{(async function(e){e=null!=e?e:k;const n=await V();G=await t();for(const e of n.values())e.properties.get("door")&&F(e),e.properties.get("bell")&&D(e);for(const t of G.values()){const r=new E(t.properties),o=r.getString("doorVariable");if(o&&"tilelayer"===t.type){const s=n.get(o);if(void 0===s)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+t.name+'"');N(t,s,r,e)}const s=r.getString("bellVariable");s&&_(s,r,t.name)}WA.player.onPlayerMove((e=>{B=e.x,O=e.y}))})().catch((e=>console.error(e))),async function(){const e=await t();for(const t of e.values())q(new E(t.properties),t.name)}().catch((e=>console.error(e))),async function(e){const n=await WA.room.getTiledMap();e=null!=e?e:k,j=await t();const r=n.layers.find((e=>"configuration"===e.name));if(r){const t=new E(r.properties).getString("tag");t&&!WA.player.tags.includes(t)||WA.ui.registerMenuCommand("Configure the room",(()=>{WA.nav.openCoWebSite(e+"/configuration.html",!0)}));for(const e of j.values()){const t=new E(e.properties),n=t.getString("openConfig");n&&"tilelayer"===e.type&&$(n.split(","),e.name,t)}}}().catch((e=>console.error(e))),async function(){var e;const n=await t();for(const[t,r]of n.entries())if("objectgroup"!==r.type){const n=null!==(e=r.properties)&&void 0!==e?e:[];for(const e of n){if("int"===e.type||"bool"===e.type||"object"===e.type||"string"!=typeof e.value)continue;const n=new W(e.value,WA.state);if(n.isPureString())continue;const r=n.getValue();C(t,e.name,r),n.onChange((n=>{C(t,e.name,n)}))}}}().catch((e=>console.error(e))),async function(){var e;const n=await async function(){const e=await t(),n=[];for(const t of e.values())if("objectgroup"===t.type)for(const e of t.objects)"area"!==e.type&&"area"!==e.class||n.push(e);return n}();for(const t of n){const n=null!==(e=t.properties)&&void 0!==e?e:[];for(const e of n){if("int"===e.type||"bool"===e.type||"object"===e.type||"string"!=typeof e.value)continue;const n=new W(e.value,WA.state);if(n.isPureString())continue;const r=n.getValue();await S(t.name,e.name,r),n.onChange((async n=>{await S(t.name,e.name,n)}))}}}().catch((e=>console.error(e)))})).catch((e=>console.error(e)))}function K(){void 0!==U&&(U.close(),U=void 0)}console.log("Script started successfully"),WA.onInit().then((()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.area.onEnter("clock").subscribe((()=>{console.log("JGREGFORSVOHFEHOVHOFDEGHFHEODHFHG"),console.error("file:///home/runner/work/workadventure-map-starter-kit/workadventure-map-starter-kit/src/main.ts");const e=new Date,t=e.getHours()+":"+e.getMinutes();U=WA.ui.openPopup("clockPopup","It's "+t,[])})),WA.room.area.onLeave("clock").subscribe(K),J().then((()=>{console.log("Scripting API Extra ready")})).catch((e=>console.error(e)))})).catch((e=>console.error(e)))})();
//# sourceMappingURL=script.js.map