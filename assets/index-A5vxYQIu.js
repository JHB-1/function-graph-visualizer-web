(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function J(n,e,t){function i(o,c){if(o._zod||Object.defineProperty(o,"_zod",{value:{def:c,constr:a,traits:new Set},enumerable:!1}),o._zod.traits.has(n))return;o._zod.traits.add(n),e(o,c);const l=a.prototype,u=Object.keys(l);for(let f=0;f<u.length;f++){const d=u[f];d in o||(o[d]=l[d].bind(o))}}const r=t?.Parent??Object;class s extends r{}Object.defineProperty(s,"name",{value:n});function a(o){var c;const l=t?.Parent?new s:this;i(l,o),(c=l._zod).deferred??(c.deferred=[]);for(const u of l._zod.deferred)u();return l}return Object.defineProperty(a,"init",{value:i}),Object.defineProperty(a,Symbol.hasInstance,{value:o=>t?.Parent&&o instanceof t.Parent?!0:o?._zod?.traits?.has(n)}),Object.defineProperty(a,"name",{value:n}),a}class xr extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class Iu extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}}const Lu={};function yi(n){return Lu}function Du(n){const e=Object.values(n).filter(i=>typeof i=="number");return Object.entries(n).filter(([i,r])=>e.indexOf(+i)===-1).map(([i,r])=>r)}function xo(n,e){return typeof e=="bigint"?e.toString():e}function _c(n){return{get value(){{const e=n();return Object.defineProperty(this,"value",{value:e}),e}}}}function vc(n){return n==null}function xc(n){const e=n.startsWith("^")?1:0,t=n.endsWith("$")?n.length-1:n.length;return n.slice(e,t)}function Rf(n,e){const t=(n.toString().split(".")[1]||"").length,i=e.toString();let r=(i.split(".")[1]||"").length;if(r===0&&/\d?e-\d?/.test(i)){const c=i.match(/\d?e-(\d?)/);c?.[1]&&(r=Number.parseInt(c[1]))}const s=t>r?t:r,a=Number.parseInt(n.toFixed(s).replace(".","")),o=Number.parseInt(e.toFixed(s).replace(".",""));return a%o/10**s}const il=Symbol("evaluating");function rt(n,e,t){let i;Object.defineProperty(n,e,{get(){if(i!==il)return i===void 0&&(i=il,i=t()),i},set(r){Object.defineProperty(n,e,{value:r})},configurable:!0})}function Ji(n,e,t){Object.defineProperty(n,e,{value:t,writable:!0,enumerable:!0,configurable:!0})}function wi(...n){const e={};for(const t of n){const i=Object.getOwnPropertyDescriptors(t);Object.assign(e,i)}return Object.defineProperties({},e)}function rl(n){return JSON.stringify(n)}function Cf(n){return n.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}const Nu="captureStackTrace"in Error?Error.captureStackTrace:(...n)=>{};function ia(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}const Pf=_c(()=>{if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{const n=Function;return new n(""),!0}catch{return!1}});function Ar(n){if(ia(n)===!1)return!1;const e=n.constructor;if(e===void 0||typeof e!="function")return!0;const t=e.prototype;return!(ia(t)===!1||Object.prototype.hasOwnProperty.call(t,"isPrototypeOf")===!1)}function Uu(n){return Ar(n)?{...n}:Array.isArray(n)?[...n]:n}const If=new Set(["string","number","symbol"]);function Rr(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Ti(n,e,t){const i=new n._zod.constr(e??n._zod.def);return(!e||t?.parent)&&(i._zod.parent=n),i}function Te(n){const e=n;if(!e)return{};if(typeof e=="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function Lf(n){return Object.keys(n).filter(e=>n[e]._zod.optin==="optional"&&n[e]._zod.optout==="optional")}const Df={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]};function Nf(n,e){const t=n._zod.def,i=t.checks;if(i&&i.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");const s=wi(n._zod.def,{get shape(){const a={};for(const o in e){if(!(o in t.shape))throw new Error(`Unrecognized key: "${o}"`);e[o]&&(a[o]=t.shape[o])}return Ji(this,"shape",a),a},checks:[]});return Ti(n,s)}function Uf(n,e){const t=n._zod.def,i=t.checks;if(i&&i.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");const s=wi(n._zod.def,{get shape(){const a={...n._zod.def.shape};for(const o in e){if(!(o in t.shape))throw new Error(`Unrecognized key: "${o}"`);e[o]&&delete a[o]}return Ji(this,"shape",a),a},checks:[]});return Ti(n,s)}function Ff(n,e){if(!Ar(e))throw new Error("Invalid input to extend: expected a plain object");const t=n._zod.def.checks;if(t&&t.length>0){const s=n._zod.def.shape;for(const a in e)if(Object.getOwnPropertyDescriptor(s,a)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}const r=wi(n._zod.def,{get shape(){const s={...n._zod.def.shape,...e};return Ji(this,"shape",s),s}});return Ti(n,r)}function Of(n,e){if(!Ar(e))throw new Error("Invalid input to safeExtend: expected a plain object");const t=wi(n._zod.def,{get shape(){const i={...n._zod.def.shape,...e};return Ji(this,"shape",i),i}});return Ti(n,t)}function zf(n,e){const t=wi(n._zod.def,{get shape(){const i={...n._zod.def.shape,...e._zod.def.shape};return Ji(this,"shape",i),i},get catchall(){return e._zod.def.catchall},checks:[]});return Ti(n,t)}function Bf(n,e,t){const r=e._zod.def.checks;if(r&&r.length>0)throw new Error(".partial() cannot be used on object schemas containing refinements");const a=wi(e._zod.def,{get shape(){const o=e._zod.def.shape,c={...o};if(t)for(const l in t){if(!(l in o))throw new Error(`Unrecognized key: "${l}"`);t[l]&&(c[l]=n?new n({type:"optional",innerType:o[l]}):o[l])}else for(const l in o)c[l]=n?new n({type:"optional",innerType:o[l]}):o[l];return Ji(this,"shape",c),c},checks:[]});return Ti(e,a)}function kf(n,e,t){const i=wi(e._zod.def,{get shape(){const r=e._zod.def.shape,s={...r};if(t)for(const a in t){if(!(a in s))throw new Error(`Unrecognized key: "${a}"`);t[a]&&(s[a]=new n({type:"nonoptional",innerType:r[a]}))}else for(const a in r)s[a]=new n({type:"nonoptional",innerType:r[a]});return Ji(this,"shape",s),s}});return Ti(e,i)}function gr(n,e=0){if(n.aborted===!0)return!0;for(let t=e;t<n.issues.length;t++)if(n.issues[t]?.continue!==!0)return!0;return!1}function Oi(n,e){return e.map(t=>{var i;return(i=t).path??(i.path=[]),t.path.unshift(n),t})}function xs(n){return typeof n=="string"?n:n?.message}function bi(n,e,t){const i={...n,path:n.path??[]};if(!n.message){const r=xs(n.inst?._zod.def?.error?.(n))??xs(e?.error?.(n))??xs(t.customError?.(n))??xs(t.localeError?.(n))??"Invalid input";i.message=r}return delete i.inst,delete i.continue,e?.reportInput||delete i.input,i}function Sc(n){return Array.isArray(n)?"array":typeof n=="string"?"string":"unknown"}function rs(...n){const[e,t,i]=n;return typeof e=="string"?{message:e,code:"custom",input:t,inst:i}:{...e}}const Fu=(n,e)=>{n.name="$ZodError",Object.defineProperty(n,"_zod",{value:n._zod,enumerable:!1}),Object.defineProperty(n,"issues",{value:e,enumerable:!1}),n.message=JSON.stringify(e,xo,2),Object.defineProperty(n,"toString",{value:()=>n.message,enumerable:!1})},Ou=J("$ZodError",Fu),zu=J("$ZodError",Fu,{Parent:Error});function Gf(n,e=t=>t.message){const t={},i=[];for(const r of n.issues)r.path.length>0?(t[r.path[0]]=t[r.path[0]]||[],t[r.path[0]].push(e(r))):i.push(e(r));return{formErrors:i,fieldErrors:t}}function Vf(n,e=t=>t.message){const t={_errors:[]},i=r=>{for(const s of r.issues)if(s.code==="invalid_union"&&s.errors.length)s.errors.map(a=>i({issues:a}));else if(s.code==="invalid_key")i({issues:s.issues});else if(s.code==="invalid_element")i({issues:s.issues});else if(s.path.length===0)t._errors.push(e(s));else{let a=t,o=0;for(;o<s.path.length;){const c=s.path[o];o===s.path.length-1?(a[c]=a[c]||{_errors:[]},a[c]._errors.push(e(s))):a[c]=a[c]||{_errors:[]},a=a[c],o++}}};return i(n),t}const Mc=n=>(e,t,i,r)=>{const s=i?Object.assign(i,{async:!1}):{async:!1},a=e._zod.run({value:t,issues:[]},s);if(a instanceof Promise)throw new xr;if(a.issues.length){const o=new(r?.Err??n)(a.issues.map(c=>bi(c,s,yi())));throw Nu(o,r?.callee),o}return a.value},yc=n=>async(e,t,i,r)=>{const s=i?Object.assign(i,{async:!0}):{async:!0};let a=e._zod.run({value:t,issues:[]},s);if(a instanceof Promise&&(a=await a),a.issues.length){const o=new(r?.Err??n)(a.issues.map(c=>bi(c,s,yi())));throw Nu(o,r?.callee),o}return a.value},Ma=n=>(e,t,i)=>{const r=i?{...i,async:!1}:{async:!1},s=e._zod.run({value:t,issues:[]},r);if(s instanceof Promise)throw new xr;return s.issues.length?{success:!1,error:new(n??Ou)(s.issues.map(a=>bi(a,r,yi())))}:{success:!0,data:s.value}},Hf=Ma(zu),ya=n=>async(e,t,i)=>{const r=i?Object.assign(i,{async:!0}):{async:!0};let s=e._zod.run({value:t,issues:[]},r);return s instanceof Promise&&(s=await s),s.issues.length?{success:!1,error:new n(s.issues.map(a=>bi(a,r,yi())))}:{success:!0,data:s.value}},Wf=ya(zu),Xf=n=>(e,t,i)=>{const r=i?Object.assign(i,{direction:"backward"}):{direction:"backward"};return Mc(n)(e,t,r)},$f=n=>(e,t,i)=>Mc(n)(e,t,i),Zf=n=>async(e,t,i)=>{const r=i?Object.assign(i,{direction:"backward"}):{direction:"backward"};return yc(n)(e,t,r)},qf=n=>async(e,t,i)=>yc(n)(e,t,i),Yf=n=>(e,t,i)=>{const r=i?Object.assign(i,{direction:"backward"}):{direction:"backward"};return Ma(n)(e,t,r)},Jf=n=>(e,t,i)=>Ma(n)(e,t,i),Kf=n=>async(e,t,i)=>{const r=i?Object.assign(i,{direction:"backward"}):{direction:"backward"};return ya(n)(e,t,r)},Qf=n=>async(e,t,i)=>ya(n)(e,t,i),jf=/^[cC][^\s-]{8,}$/,eh=/^[0-9a-z]+$/,th=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,nh=/^[0-9a-vA-V]{20}$/,ih=/^[A-Za-z0-9]{27}$/,rh=/^[a-zA-Z0-9_-]{21}$/,sh=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,ah=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,sl=n=>n?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,oh=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,ch="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function lh(){return new RegExp(ch,"u")}const uh=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,dh=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,fh=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,hh=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,ph=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Bu=/^[A-Za-z0-9_-]*$/,mh=/^\+[1-9]\d{6,14}$/,ku="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",gh=new RegExp(`^${ku}$`);function Gu(n){const e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof n.precision=="number"?n.precision===-1?`${e}`:n.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${n.precision}}`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function _h(n){return new RegExp(`^${Gu(n)}$`)}function vh(n){const e=Gu({precision:n.precision}),t=["Z"];n.local&&t.push(""),n.offset&&t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const i=`${e}(?:${t.join("|")})`;return new RegExp(`^${ku}T(?:${i})$`)}const xh=n=>{const e=n?`[\\s\\S]{${n?.minimum??0},${n?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${e}$`)},Sh=/^-?\d+$/,Vu=/^-?\d+(?:\.\d+)?$/,Mh=/^(?:true|false)$/i,yh=/^[^A-Z]*$/,bh=/^[^a-z]*$/,on=J("$ZodCheck",(n,e)=>{var t;n._zod??(n._zod={}),n._zod.def=e,(t=n._zod).onattach??(t.onattach=[])}),Hu={number:"number",bigint:"bigint",object:"date"},Wu=J("$ZodCheckLessThan",(n,e)=>{on.init(n,e);const t=Hu[typeof e.value];n._zod.onattach.push(i=>{const r=i._zod.bag,s=(e.inclusive?r.maximum:r.exclusiveMaximum)??Number.POSITIVE_INFINITY;e.value<s&&(e.inclusive?r.maximum=e.value:r.exclusiveMaximum=e.value)}),n._zod.check=i=>{(e.inclusive?i.value<=e.value:i.value<e.value)||i.issues.push({origin:t,code:"too_big",maximum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:n,continue:!e.abort})}}),Xu=J("$ZodCheckGreaterThan",(n,e)=>{on.init(n,e);const t=Hu[typeof e.value];n._zod.onattach.push(i=>{const r=i._zod.bag,s=(e.inclusive?r.minimum:r.exclusiveMinimum)??Number.NEGATIVE_INFINITY;e.value>s&&(e.inclusive?r.minimum=e.value:r.exclusiveMinimum=e.value)}),n._zod.check=i=>{(e.inclusive?i.value>=e.value:i.value>e.value)||i.issues.push({origin:t,code:"too_small",minimum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:n,continue:!e.abort})}}),Eh=J("$ZodCheckMultipleOf",(n,e)=>{on.init(n,e),n._zod.onattach.push(t=>{var i;(i=t._zod.bag).multipleOf??(i.multipleOf=e.value)}),n._zod.check=t=>{if(typeof t.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof t.value=="bigint"?t.value%e.value===BigInt(0):Rf(t.value,e.value)===0)||t.issues.push({origin:typeof t.value,code:"not_multiple_of",divisor:e.value,input:t.value,inst:n,continue:!e.abort})}}),wh=J("$ZodCheckNumberFormat",(n,e)=>{on.init(n,e),e.format=e.format||"float64";const t=e.format?.includes("int"),i=t?"int":"number",[r,s]=Df[e.format];n._zod.onattach.push(a=>{const o=a._zod.bag;o.format=e.format,o.minimum=r,o.maximum=s,t&&(o.pattern=Sh)}),n._zod.check=a=>{const o=a.value;if(t){if(!Number.isInteger(o)){a.issues.push({expected:i,format:e.format,code:"invalid_type",continue:!1,input:o,inst:n});return}if(!Number.isSafeInteger(o)){o>0?a.issues.push({input:o,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:n,origin:i,inclusive:!0,continue:!e.abort}):a.issues.push({input:o,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:n,origin:i,inclusive:!0,continue:!e.abort});return}}o<r&&a.issues.push({origin:"number",input:o,code:"too_small",minimum:r,inclusive:!0,inst:n,continue:!e.abort}),o>s&&a.issues.push({origin:"number",input:o,code:"too_big",maximum:s,inclusive:!0,inst:n,continue:!e.abort})}}),Th=J("$ZodCheckMaxLength",(n,e)=>{var t;on.init(n,e),(t=n._zod.def).when??(t.when=i=>{const r=i.value;return!vc(r)&&r.length!==void 0}),n._zod.onattach.push(i=>{const r=i._zod.bag.maximum??Number.POSITIVE_INFINITY;e.maximum<r&&(i._zod.bag.maximum=e.maximum)}),n._zod.check=i=>{const r=i.value;if(r.length<=e.maximum)return;const a=Sc(r);i.issues.push({origin:a,code:"too_big",maximum:e.maximum,inclusive:!0,input:r,inst:n,continue:!e.abort})}}),Ah=J("$ZodCheckMinLength",(n,e)=>{var t;on.init(n,e),(t=n._zod.def).when??(t.when=i=>{const r=i.value;return!vc(r)&&r.length!==void 0}),n._zod.onattach.push(i=>{const r=i._zod.bag.minimum??Number.NEGATIVE_INFINITY;e.minimum>r&&(i._zod.bag.minimum=e.minimum)}),n._zod.check=i=>{const r=i.value;if(r.length>=e.minimum)return;const a=Sc(r);i.issues.push({origin:a,code:"too_small",minimum:e.minimum,inclusive:!0,input:r,inst:n,continue:!e.abort})}}),Rh=J("$ZodCheckLengthEquals",(n,e)=>{var t;on.init(n,e),(t=n._zod.def).when??(t.when=i=>{const r=i.value;return!vc(r)&&r.length!==void 0}),n._zod.onattach.push(i=>{const r=i._zod.bag;r.minimum=e.length,r.maximum=e.length,r.length=e.length}),n._zod.check=i=>{const r=i.value,s=r.length;if(s===e.length)return;const a=Sc(r),o=s>e.length;i.issues.push({origin:a,...o?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:i.value,inst:n,continue:!e.abort})}}),ba=J("$ZodCheckStringFormat",(n,e)=>{var t,i;on.init(n,e),n._zod.onattach.push(r=>{const s=r._zod.bag;s.format=e.format,e.pattern&&(s.patterns??(s.patterns=new Set),s.patterns.add(e.pattern))}),e.pattern?(t=n._zod).check??(t.check=r=>{e.pattern.lastIndex=0,!e.pattern.test(r.value)&&r.issues.push({origin:"string",code:"invalid_format",format:e.format,input:r.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:n,continue:!e.abort})}):(i=n._zod).check??(i.check=()=>{})}),Ch=J("$ZodCheckRegex",(n,e)=>{ba.init(n,e),n._zod.check=t=>{e.pattern.lastIndex=0,!e.pattern.test(t.value)&&t.issues.push({origin:"string",code:"invalid_format",format:"regex",input:t.value,pattern:e.pattern.toString(),inst:n,continue:!e.abort})}}),Ph=J("$ZodCheckLowerCase",(n,e)=>{e.pattern??(e.pattern=yh),ba.init(n,e)}),Ih=J("$ZodCheckUpperCase",(n,e)=>{e.pattern??(e.pattern=bh),ba.init(n,e)}),Lh=J("$ZodCheckIncludes",(n,e)=>{on.init(n,e);const t=Rr(e.includes),i=new RegExp(typeof e.position=="number"?`^.{${e.position}}${t}`:t);e.pattern=i,n._zod.onattach.push(r=>{const s=r._zod.bag;s.patterns??(s.patterns=new Set),s.patterns.add(i)}),n._zod.check=r=>{r.value.includes(e.includes,e.position)||r.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:r.value,inst:n,continue:!e.abort})}}),Dh=J("$ZodCheckStartsWith",(n,e)=>{on.init(n,e);const t=new RegExp(`^${Rr(e.prefix)}.*`);e.pattern??(e.pattern=t),n._zod.onattach.push(i=>{const r=i._zod.bag;r.patterns??(r.patterns=new Set),r.patterns.add(t)}),n._zod.check=i=>{i.value.startsWith(e.prefix)||i.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:i.value,inst:n,continue:!e.abort})}}),Nh=J("$ZodCheckEndsWith",(n,e)=>{on.init(n,e);const t=new RegExp(`.*${Rr(e.suffix)}$`);e.pattern??(e.pattern=t),n._zod.onattach.push(i=>{const r=i._zod.bag;r.patterns??(r.patterns=new Set),r.patterns.add(t)}),n._zod.check=i=>{i.value.endsWith(e.suffix)||i.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:i.value,inst:n,continue:!e.abort})}}),Uh=J("$ZodCheckOverwrite",(n,e)=>{on.init(n,e),n._zod.check=t=>{t.value=e.tx(t.value)}});class Fh{constructor(e=[]){this.content=[],this.indent=0,this&&(this.args=e)}indented(e){this.indent+=1,e(this),this.indent-=1}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}const i=e.split(`
`).filter(a=>a),r=Math.min(...i.map(a=>a.length-a.trimStart().length)),s=i.map(a=>a.slice(r)).map(a=>" ".repeat(this.indent*2)+a);for(const a of s)this.content.push(a)}compile(){const e=Function,t=this?.args,r=[...(this?.content??[""]).map(s=>`  ${s}`)];return new e(...t,r.join(`
`))}}const Oh={major:4,minor:3,patch:6},pt=J("$ZodType",(n,e)=>{var t;n??(n={}),n._zod.def=e,n._zod.bag=n._zod.bag||{},n._zod.version=Oh;const i=[...n._zod.def.checks??[]];n._zod.traits.has("$ZodCheck")&&i.unshift(n);for(const r of i)for(const s of r._zod.onattach)s(n);if(i.length===0)(t=n._zod).deferred??(t.deferred=[]),n._zod.deferred?.push(()=>{n._zod.run=n._zod.parse});else{const r=(a,o,c)=>{let l=gr(a),u;for(const f of o){if(f._zod.def.when){if(!f._zod.def.when(a))continue}else if(l)continue;const d=a.issues.length,h=f._zod.check(a);if(h instanceof Promise&&c?.async===!1)throw new xr;if(u||h instanceof Promise)u=(u??Promise.resolve()).then(async()=>{await h,a.issues.length!==d&&(l||(l=gr(a,d)))});else{if(a.issues.length===d)continue;l||(l=gr(a,d))}}return u?u.then(()=>a):a},s=(a,o,c)=>{if(gr(a))return a.aborted=!0,a;const l=r(o,i,c);if(l instanceof Promise){if(c.async===!1)throw new xr;return l.then(u=>n._zod.parse(u,c))}return n._zod.parse(l,c)};n._zod.run=(a,o)=>{if(o.skipChecks)return n._zod.parse(a,o);if(o.direction==="backward"){const l=n._zod.parse({value:a.value,issues:[]},{...o,skipChecks:!0});return l instanceof Promise?l.then(u=>s(u,a,o)):s(l,a,o)}const c=n._zod.parse(a,o);if(c instanceof Promise){if(o.async===!1)throw new xr;return c.then(l=>r(l,i,o))}return r(c,i,o)}}rt(n,"~standard",()=>({validate:r=>{try{const s=Hf(n,r);return s.success?{value:s.data}:{issues:s.error?.issues}}catch{return Wf(n,r).then(a=>a.success?{value:a.data}:{issues:a.error?.issues})}},vendor:"zod",version:1}))}),bc=J("$ZodString",(n,e)=>{pt.init(n,e),n._zod.pattern=[...n?._zod.bag?.patterns??[]].pop()??xh(n._zod.bag),n._zod.parse=(t,i)=>{if(e.coerce)try{t.value=String(t.value)}catch{}return typeof t.value=="string"||t.issues.push({expected:"string",code:"invalid_type",input:t.value,inst:n}),t}}),_t=J("$ZodStringFormat",(n,e)=>{ba.init(n,e),bc.init(n,e)}),zh=J("$ZodGUID",(n,e)=>{e.pattern??(e.pattern=ah),_t.init(n,e)}),Bh=J("$ZodUUID",(n,e)=>{if(e.version){const i={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(i===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=sl(i))}else e.pattern??(e.pattern=sl());_t.init(n,e)}),kh=J("$ZodEmail",(n,e)=>{e.pattern??(e.pattern=oh),_t.init(n,e)}),Gh=J("$ZodURL",(n,e)=>{_t.init(n,e),n._zod.check=t=>{try{const i=t.value.trim(),r=new URL(i);e.hostname&&(e.hostname.lastIndex=0,e.hostname.test(r.hostname)||t.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:e.hostname.source,input:t.value,inst:n,continue:!e.abort})),e.protocol&&(e.protocol.lastIndex=0,e.protocol.test(r.protocol.endsWith(":")?r.protocol.slice(0,-1):r.protocol)||t.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:t.value,inst:n,continue:!e.abort})),e.normalize?t.value=r.href:t.value=i;return}catch{t.issues.push({code:"invalid_format",format:"url",input:t.value,inst:n,continue:!e.abort})}}}),Vh=J("$ZodEmoji",(n,e)=>{e.pattern??(e.pattern=lh()),_t.init(n,e)}),Hh=J("$ZodNanoID",(n,e)=>{e.pattern??(e.pattern=rh),_t.init(n,e)}),Wh=J("$ZodCUID",(n,e)=>{e.pattern??(e.pattern=jf),_t.init(n,e)}),Xh=J("$ZodCUID2",(n,e)=>{e.pattern??(e.pattern=eh),_t.init(n,e)}),$h=J("$ZodULID",(n,e)=>{e.pattern??(e.pattern=th),_t.init(n,e)}),Zh=J("$ZodXID",(n,e)=>{e.pattern??(e.pattern=nh),_t.init(n,e)}),qh=J("$ZodKSUID",(n,e)=>{e.pattern??(e.pattern=ih),_t.init(n,e)}),Yh=J("$ZodISODateTime",(n,e)=>{e.pattern??(e.pattern=vh(e)),_t.init(n,e)}),Jh=J("$ZodISODate",(n,e)=>{e.pattern??(e.pattern=gh),_t.init(n,e)}),Kh=J("$ZodISOTime",(n,e)=>{e.pattern??(e.pattern=_h(e)),_t.init(n,e)}),Qh=J("$ZodISODuration",(n,e)=>{e.pattern??(e.pattern=sh),_t.init(n,e)}),jh=J("$ZodIPv4",(n,e)=>{e.pattern??(e.pattern=uh),_t.init(n,e),n._zod.bag.format="ipv4"}),ep=J("$ZodIPv6",(n,e)=>{e.pattern??(e.pattern=dh),_t.init(n,e),n._zod.bag.format="ipv6",n._zod.check=t=>{try{new URL(`http://[${t.value}]`)}catch{t.issues.push({code:"invalid_format",format:"ipv6",input:t.value,inst:n,continue:!e.abort})}}}),tp=J("$ZodCIDRv4",(n,e)=>{e.pattern??(e.pattern=fh),_t.init(n,e)}),np=J("$ZodCIDRv6",(n,e)=>{e.pattern??(e.pattern=hh),_t.init(n,e),n._zod.check=t=>{const i=t.value.split("/");try{if(i.length!==2)throw new Error;const[r,s]=i;if(!s)throw new Error;const a=Number(s);if(`${a}`!==s)throw new Error;if(a<0||a>128)throw new Error;new URL(`http://[${r}]`)}catch{t.issues.push({code:"invalid_format",format:"cidrv6",input:t.value,inst:n,continue:!e.abort})}}});function $u(n){if(n==="")return!0;if(n.length%4!==0)return!1;try{return atob(n),!0}catch{return!1}}const ip=J("$ZodBase64",(n,e)=>{e.pattern??(e.pattern=ph),_t.init(n,e),n._zod.bag.contentEncoding="base64",n._zod.check=t=>{$u(t.value)||t.issues.push({code:"invalid_format",format:"base64",input:t.value,inst:n,continue:!e.abort})}});function rp(n){if(!Bu.test(n))return!1;const e=n.replace(/[-_]/g,i=>i==="-"?"+":"/"),t=e.padEnd(Math.ceil(e.length/4)*4,"=");return $u(t)}const sp=J("$ZodBase64URL",(n,e)=>{e.pattern??(e.pattern=Bu),_t.init(n,e),n._zod.bag.contentEncoding="base64url",n._zod.check=t=>{rp(t.value)||t.issues.push({code:"invalid_format",format:"base64url",input:t.value,inst:n,continue:!e.abort})}}),ap=J("$ZodE164",(n,e)=>{e.pattern??(e.pattern=mh),_t.init(n,e)});function op(n,e=null){try{const t=n.split(".");if(t.length!==3)return!1;const[i]=t;if(!i)return!1;const r=JSON.parse(atob(i));return!("typ"in r&&r?.typ!=="JWT"||!r.alg||e&&(!("alg"in r)||r.alg!==e))}catch{return!1}}const cp=J("$ZodJWT",(n,e)=>{_t.init(n,e),n._zod.check=t=>{op(t.value,e.alg)||t.issues.push({code:"invalid_format",format:"jwt",input:t.value,inst:n,continue:!e.abort})}}),Zu=J("$ZodNumber",(n,e)=>{pt.init(n,e),n._zod.pattern=n._zod.bag.pattern??Vu,n._zod.parse=(t,i)=>{if(e.coerce)try{t.value=Number(t.value)}catch{}const r=t.value;if(typeof r=="number"&&!Number.isNaN(r)&&Number.isFinite(r))return t;const s=typeof r=="number"?Number.isNaN(r)?"NaN":Number.isFinite(r)?void 0:"Infinity":void 0;return t.issues.push({expected:"number",code:"invalid_type",input:r,inst:n,...s?{received:s}:{}}),t}}),lp=J("$ZodNumberFormat",(n,e)=>{wh.init(n,e),Zu.init(n,e)}),up=J("$ZodBoolean",(n,e)=>{pt.init(n,e),n._zod.pattern=Mh,n._zod.parse=(t,i)=>{if(e.coerce)try{t.value=!!t.value}catch{}const r=t.value;return typeof r=="boolean"||t.issues.push({expected:"boolean",code:"invalid_type",input:r,inst:n}),t}}),dp=J("$ZodUnknown",(n,e)=>{pt.init(n,e),n._zod.parse=t=>t}),fp=J("$ZodNever",(n,e)=>{pt.init(n,e),n._zod.parse=(t,i)=>(t.issues.push({expected:"never",code:"invalid_type",input:t.value,inst:n}),t)});function al(n,e,t){n.issues.length&&e.issues.push(...Oi(t,n.issues)),e.value[t]=n.value}const hp=J("$ZodArray",(n,e)=>{pt.init(n,e),n._zod.parse=(t,i)=>{const r=t.value;if(!Array.isArray(r))return t.issues.push({expected:"array",code:"invalid_type",input:r,inst:n}),t;t.value=Array(r.length);const s=[];for(let a=0;a<r.length;a++){const o=r[a],c=e.element._zod.run({value:o,issues:[]},i);c instanceof Promise?s.push(c.then(l=>al(l,t,a))):al(c,t,a)}return s.length?Promise.all(s).then(()=>t):t}});function ra(n,e,t,i,r){if(n.issues.length){if(r&&!(t in i))return;e.issues.push(...Oi(t,n.issues))}n.value===void 0?t in i&&(e.value[t]=void 0):e.value[t]=n.value}function qu(n){const e=Object.keys(n.shape);for(const i of e)if(!n.shape?.[i]?._zod?.traits?.has("$ZodType"))throw new Error(`Invalid element at key "${i}": expected a Zod schema`);const t=Lf(n.shape);return{...n,keys:e,keySet:new Set(e),numKeys:e.length,optionalKeys:new Set(t)}}function Yu(n,e,t,i,r,s){const a=[],o=r.keySet,c=r.catchall._zod,l=c.def.type,u=c.optout==="optional";for(const f in e){if(o.has(f))continue;if(l==="never"){a.push(f);continue}const d=c.run({value:e[f],issues:[]},i);d instanceof Promise?n.push(d.then(h=>ra(h,t,f,e,u))):ra(d,t,f,e,u)}return a.length&&t.issues.push({code:"unrecognized_keys",keys:a,input:e,inst:s}),n.length?Promise.all(n).then(()=>t):t}const pp=J("$ZodObject",(n,e)=>{if(pt.init(n,e),!Object.getOwnPropertyDescriptor(e,"shape")?.get){const o=e.shape;Object.defineProperty(e,"shape",{get:()=>{const c={...o};return Object.defineProperty(e,"shape",{value:c}),c}})}const i=_c(()=>qu(e));rt(n._zod,"propValues",()=>{const o=e.shape,c={};for(const l in o){const u=o[l]._zod;if(u.values){c[l]??(c[l]=new Set);for(const f of u.values)c[l].add(f)}}return c});const r=ia,s=e.catchall;let a;n._zod.parse=(o,c)=>{a??(a=i.value);const l=o.value;if(!r(l))return o.issues.push({expected:"object",code:"invalid_type",input:l,inst:n}),o;o.value={};const u=[],f=a.shape;for(const d of a.keys){const h=f[d],_=h._zod.optout==="optional",S=h._zod.run({value:l[d],issues:[]},c);S instanceof Promise?u.push(S.then(m=>ra(m,o,d,l,_))):ra(S,o,d,l,_)}return s?Yu(u,l,o,c,i.value,n):u.length?Promise.all(u).then(()=>o):o}}),mp=J("$ZodObjectJIT",(n,e)=>{pp.init(n,e);const t=n._zod.parse,i=_c(()=>qu(e)),r=d=>{const h=new Fh(["shape","payload","ctx"]),_=i.value,S=A=>{const M=rl(A);return`shape[${M}]._zod.run({ value: input[${M}], issues: [] }, ctx)`};h.write("const input = payload.value;");const m=Object.create(null);let p=0;for(const A of _.keys)m[A]=`key_${p++}`;h.write("const newResult = {};");for(const A of _.keys){const M=m[A],y=rl(A),R=d[A]?._zod?.optout==="optional";h.write(`const ${M} = ${S(A)};`),R?h.write(`
        if (${M}.issues.length) {
          if (${y} in input) {
            payload.issues = payload.issues.concat(${M}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${y}, ...iss.path] : [${y}]
            })));
          }
        }
        
        if (${M}.value === undefined) {
          if (${y} in input) {
            newResult[${y}] = undefined;
          }
        } else {
          newResult[${y}] = ${M}.value;
        }
        
      `):h.write(`
        if (${M}.issues.length) {
          payload.issues = payload.issues.concat(${M}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${y}, ...iss.path] : [${y}]
          })));
        }
        
        if (${M}.value === undefined) {
          if (${y} in input) {
            newResult[${y}] = undefined;
          }
        } else {
          newResult[${y}] = ${M}.value;
        }
        
      `)}h.write("payload.value = newResult;"),h.write("return payload;");const w=h.compile();return(A,M)=>w(d,A,M)};let s;const a=ia,o=!Lu.jitless,l=o&&Pf.value,u=e.catchall;let f;n._zod.parse=(d,h)=>{f??(f=i.value);const _=d.value;return a(_)?o&&l&&h?.async===!1&&h.jitless!==!0?(s||(s=r(e.shape)),d=s(d,h),u?Yu([],_,d,h,f,n):d):t(d,h):(d.issues.push({expected:"object",code:"invalid_type",input:_,inst:n}),d)}});function ol(n,e,t,i){for(const s of n)if(s.issues.length===0)return e.value=s.value,e;const r=n.filter(s=>!gr(s));return r.length===1?(e.value=r[0].value,r[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:t,errors:n.map(s=>s.issues.map(a=>bi(a,i,yi())))}),e)}const gp=J("$ZodUnion",(n,e)=>{pt.init(n,e),rt(n._zod,"optin",()=>e.options.some(r=>r._zod.optin==="optional")?"optional":void 0),rt(n._zod,"optout",()=>e.options.some(r=>r._zod.optout==="optional")?"optional":void 0),rt(n._zod,"values",()=>{if(e.options.every(r=>r._zod.values))return new Set(e.options.flatMap(r=>Array.from(r._zod.values)))}),rt(n._zod,"pattern",()=>{if(e.options.every(r=>r._zod.pattern)){const r=e.options.map(s=>s._zod.pattern);return new RegExp(`^(${r.map(s=>xc(s.source)).join("|")})$`)}});const t=e.options.length===1,i=e.options[0]._zod.run;n._zod.parse=(r,s)=>{if(t)return i(r,s);let a=!1;const o=[];for(const c of e.options){const l=c._zod.run({value:r.value,issues:[]},s);if(l instanceof Promise)o.push(l),a=!0;else{if(l.issues.length===0)return l;o.push(l)}}return a?Promise.all(o).then(c=>ol(c,r,n,s)):ol(o,r,n,s)}}),_p=J("$ZodIntersection",(n,e)=>{pt.init(n,e),n._zod.parse=(t,i)=>{const r=t.value,s=e.left._zod.run({value:r,issues:[]},i),a=e.right._zod.run({value:r,issues:[]},i);return s instanceof Promise||a instanceof Promise?Promise.all([s,a]).then(([c,l])=>cl(t,c,l)):cl(t,s,a)}});function So(n,e){if(n===e)return{valid:!0,data:n};if(n instanceof Date&&e instanceof Date&&+n==+e)return{valid:!0,data:n};if(Ar(n)&&Ar(e)){const t=Object.keys(e),i=Object.keys(n).filter(s=>t.indexOf(s)!==-1),r={...n,...e};for(const s of i){const a=So(n[s],e[s]);if(!a.valid)return{valid:!1,mergeErrorPath:[s,...a.mergeErrorPath]};r[s]=a.data}return{valid:!0,data:r}}if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return{valid:!1,mergeErrorPath:[]};const t=[];for(let i=0;i<n.length;i++){const r=n[i],s=e[i],a=So(r,s);if(!a.valid)return{valid:!1,mergeErrorPath:[i,...a.mergeErrorPath]};t.push(a.data)}return{valid:!0,data:t}}return{valid:!1,mergeErrorPath:[]}}function cl(n,e,t){const i=new Map;let r;for(const o of e.issues)if(o.code==="unrecognized_keys"){r??(r=o);for(const c of o.keys)i.has(c)||i.set(c,{}),i.get(c).l=!0}else n.issues.push(o);for(const o of t.issues)if(o.code==="unrecognized_keys")for(const c of o.keys)i.has(c)||i.set(c,{}),i.get(c).r=!0;else n.issues.push(o);const s=[...i].filter(([,o])=>o.l&&o.r).map(([o])=>o);if(s.length&&r&&n.issues.push({...r,keys:s}),gr(n))return n;const a=So(e.value,t.value);if(!a.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);return n.value=a.data,n}const vp=J("$ZodTuple",(n,e)=>{pt.init(n,e);const t=e.items;n._zod.parse=(i,r)=>{const s=i.value;if(!Array.isArray(s))return i.issues.push({input:s,inst:n,expected:"tuple",code:"invalid_type"}),i;i.value=[];const a=[],o=[...t].reverse().findIndex(u=>u._zod.optin!=="optional"),c=o===-1?0:t.length-o;if(!e.rest){const u=s.length>t.length,f=s.length<c-1;if(u||f)return i.issues.push({...u?{code:"too_big",maximum:t.length,inclusive:!0}:{code:"too_small",minimum:t.length},input:s,inst:n,origin:"array"}),i}let l=-1;for(const u of t){if(l++,l>=s.length&&l>=c)continue;const f=u._zod.run({value:s[l],issues:[]},r);f instanceof Promise?a.push(f.then(d=>Ss(d,i,l))):Ss(f,i,l)}if(e.rest){const u=s.slice(t.length);for(const f of u){l++;const d=e.rest._zod.run({value:f,issues:[]},r);d instanceof Promise?a.push(d.then(h=>Ss(h,i,l))):Ss(d,i,l)}}return a.length?Promise.all(a).then(()=>i):i}});function Ss(n,e,t){n.issues.length&&e.issues.push(...Oi(t,n.issues)),e.value[t]=n.value}const xp=J("$ZodRecord",(n,e)=>{pt.init(n,e),n._zod.parse=(t,i)=>{const r=t.value;if(!Ar(r))return t.issues.push({expected:"record",code:"invalid_type",input:r,inst:n}),t;const s=[],a=e.keyType._zod.values;if(a){t.value={};const o=new Set;for(const l of a)if(typeof l=="string"||typeof l=="number"||typeof l=="symbol"){o.add(typeof l=="number"?l.toString():l);const u=e.valueType._zod.run({value:r[l],issues:[]},i);u instanceof Promise?s.push(u.then(f=>{f.issues.length&&t.issues.push(...Oi(l,f.issues)),t.value[l]=f.value})):(u.issues.length&&t.issues.push(...Oi(l,u.issues)),t.value[l]=u.value)}let c;for(const l in r)o.has(l)||(c=c??[],c.push(l));c&&c.length>0&&t.issues.push({code:"unrecognized_keys",input:r,inst:n,keys:c})}else{t.value={};for(const o of Reflect.ownKeys(r)){if(o==="__proto__")continue;let c=e.keyType._zod.run({value:o,issues:[]},i);if(c instanceof Promise)throw new Error("Async schemas not supported in object keys currently");if(typeof o=="string"&&Vu.test(o)&&c.issues.length){const f=e.keyType._zod.run({value:Number(o),issues:[]},i);if(f instanceof Promise)throw new Error("Async schemas not supported in object keys currently");f.issues.length===0&&(c=f)}if(c.issues.length){e.mode==="loose"?t.value[o]=r[o]:t.issues.push({code:"invalid_key",origin:"record",issues:c.issues.map(f=>bi(f,i,yi())),input:o,path:[o],inst:n});continue}const u=e.valueType._zod.run({value:r[o],issues:[]},i);u instanceof Promise?s.push(u.then(f=>{f.issues.length&&t.issues.push(...Oi(o,f.issues)),t.value[c.value]=f.value})):(u.issues.length&&t.issues.push(...Oi(o,u.issues)),t.value[c.value]=u.value)}}return s.length?Promise.all(s).then(()=>t):t}}),Sp=J("$ZodEnum",(n,e)=>{pt.init(n,e);const t=Du(e.entries),i=new Set(t);n._zod.values=i,n._zod.pattern=new RegExp(`^(${t.filter(r=>If.has(typeof r)).map(r=>typeof r=="string"?Rr(r):r.toString()).join("|")})$`),n._zod.parse=(r,s)=>{const a=r.value;return i.has(a)||r.issues.push({code:"invalid_value",values:t,input:a,inst:n}),r}}),Mp=J("$ZodLiteral",(n,e)=>{if(pt.init(n,e),e.values.length===0)throw new Error("Cannot create literal schema with no valid values");const t=new Set(e.values);n._zod.values=t,n._zod.pattern=new RegExp(`^(${e.values.map(i=>typeof i=="string"?Rr(i):i?Rr(i.toString()):String(i)).join("|")})$`),n._zod.parse=(i,r)=>{const s=i.value;return t.has(s)||i.issues.push({code:"invalid_value",values:e.values,input:s,inst:n}),i}}),yp=J("$ZodTransform",(n,e)=>{pt.init(n,e),n._zod.parse=(t,i)=>{if(i.direction==="backward")throw new Iu(n.constructor.name);const r=e.transform(t.value,t);if(i.async)return(r instanceof Promise?r:Promise.resolve(r)).then(a=>(t.value=a,t));if(r instanceof Promise)throw new xr;return t.value=r,t}});function ll(n,e){return n.issues.length&&e===void 0?{issues:[],value:void 0}:n}const Ju=J("$ZodOptional",(n,e)=>{pt.init(n,e),n._zod.optin="optional",n._zod.optout="optional",rt(n._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,void 0]):void 0),rt(n._zod,"pattern",()=>{const t=e.innerType._zod.pattern;return t?new RegExp(`^(${xc(t.source)})?$`):void 0}),n._zod.parse=(t,i)=>{if(e.innerType._zod.optin==="optional"){const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(s=>ll(s,t.value)):ll(r,t.value)}return t.value===void 0?t:e.innerType._zod.run(t,i)}}),bp=J("$ZodExactOptional",(n,e)=>{Ju.init(n,e),rt(n._zod,"values",()=>e.innerType._zod.values),rt(n._zod,"pattern",()=>e.innerType._zod.pattern),n._zod.parse=(t,i)=>e.innerType._zod.run(t,i)}),Ep=J("$ZodNullable",(n,e)=>{pt.init(n,e),rt(n._zod,"optin",()=>e.innerType._zod.optin),rt(n._zod,"optout",()=>e.innerType._zod.optout),rt(n._zod,"pattern",()=>{const t=e.innerType._zod.pattern;return t?new RegExp(`^(${xc(t.source)}|null)$`):void 0}),rt(n._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,null]):void 0),n._zod.parse=(t,i)=>t.value===null?t:e.innerType._zod.run(t,i)}),wp=J("$ZodDefault",(n,e)=>{pt.init(n,e),n._zod.optin="optional",rt(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(t,i)=>{if(i.direction==="backward")return e.innerType._zod.run(t,i);if(t.value===void 0)return t.value=e.defaultValue,t;const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(s=>ul(s,e)):ul(r,e)}});function ul(n,e){return n.value===void 0&&(n.value=e.defaultValue),n}const Tp=J("$ZodPrefault",(n,e)=>{pt.init(n,e),n._zod.optin="optional",rt(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(t,i)=>(i.direction==="backward"||t.value===void 0&&(t.value=e.defaultValue),e.innerType._zod.run(t,i))}),Ap=J("$ZodNonOptional",(n,e)=>{pt.init(n,e),rt(n._zod,"values",()=>{const t=e.innerType._zod.values;return t?new Set([...t].filter(i=>i!==void 0)):void 0}),n._zod.parse=(t,i)=>{const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(s=>dl(s,n)):dl(r,n)}});function dl(n,e){return!n.issues.length&&n.value===void 0&&n.issues.push({code:"invalid_type",expected:"nonoptional",input:n.value,inst:e}),n}const Rp=J("$ZodCatch",(n,e)=>{pt.init(n,e),rt(n._zod,"optin",()=>e.innerType._zod.optin),rt(n._zod,"optout",()=>e.innerType._zod.optout),rt(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(t,i)=>{if(i.direction==="backward")return e.innerType._zod.run(t,i);const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(s=>(t.value=s.value,s.issues.length&&(t.value=e.catchValue({...t,error:{issues:s.issues.map(a=>bi(a,i,yi()))},input:t.value}),t.issues=[]),t)):(t.value=r.value,r.issues.length&&(t.value=e.catchValue({...t,error:{issues:r.issues.map(s=>bi(s,i,yi()))},input:t.value}),t.issues=[]),t)}}),Cp=J("$ZodPipe",(n,e)=>{pt.init(n,e),rt(n._zod,"values",()=>e.in._zod.values),rt(n._zod,"optin",()=>e.in._zod.optin),rt(n._zod,"optout",()=>e.out._zod.optout),rt(n._zod,"propValues",()=>e.in._zod.propValues),n._zod.parse=(t,i)=>{if(i.direction==="backward"){const s=e.out._zod.run(t,i);return s instanceof Promise?s.then(a=>Ms(a,e.in,i)):Ms(s,e.in,i)}const r=e.in._zod.run(t,i);return r instanceof Promise?r.then(s=>Ms(s,e.out,i)):Ms(r,e.out,i)}});function Ms(n,e,t){return n.issues.length?(n.aborted=!0,n):e._zod.run({value:n.value,issues:n.issues},t)}const Pp=J("$ZodReadonly",(n,e)=>{pt.init(n,e),rt(n._zod,"propValues",()=>e.innerType._zod.propValues),rt(n._zod,"values",()=>e.innerType._zod.values),rt(n._zod,"optin",()=>e.innerType?._zod?.optin),rt(n._zod,"optout",()=>e.innerType?._zod?.optout),n._zod.parse=(t,i)=>{if(i.direction==="backward")return e.innerType._zod.run(t,i);const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(fl):fl(r)}});function fl(n){return n.value=Object.freeze(n.value),n}const Ip=J("$ZodCustom",(n,e)=>{on.init(n,e),pt.init(n,e),n._zod.parse=(t,i)=>t,n._zod.check=t=>{const i=t.value,r=e.fn(i);if(r instanceof Promise)return r.then(s=>hl(s,t,i,n));hl(r,t,i,n)}});function hl(n,e,t,i){if(!n){const r={code:"custom",input:t,inst:i,path:[...i._zod.def.path??[]],continue:!i._zod.def.abort};i._zod.def.params&&(r.params=i._zod.def.params),e.issues.push(rs(r))}}var pl;class Lp{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...t){const i=t[0];return this._map.set(e,i),i&&typeof i=="object"&&"id"in i&&this._idmap.set(i.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){const t=this._map.get(e);return t&&typeof t=="object"&&"id"in t&&this._idmap.delete(t.id),this._map.delete(e),this}get(e){const t=e._zod.parent;if(t){const i={...this.get(t)??{}};delete i.id;const r={...i,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function Dp(){return new Lp}(pl=globalThis).__zod_globalRegistry??(pl.__zod_globalRegistry=Dp());const qr=globalThis.__zod_globalRegistry;function Np(n,e){return new n({type:"string",...Te(e)})}function Up(n,e){return new n({type:"string",format:"email",check:"string_format",abort:!1,...Te(e)})}function ml(n,e){return new n({type:"string",format:"guid",check:"string_format",abort:!1,...Te(e)})}function Fp(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,...Te(e)})}function Op(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...Te(e)})}function zp(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...Te(e)})}function Bp(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...Te(e)})}function kp(n,e){return new n({type:"string",format:"url",check:"string_format",abort:!1,...Te(e)})}function Gp(n,e){return new n({type:"string",format:"emoji",check:"string_format",abort:!1,...Te(e)})}function Vp(n,e){return new n({type:"string",format:"nanoid",check:"string_format",abort:!1,...Te(e)})}function Hp(n,e){return new n({type:"string",format:"cuid",check:"string_format",abort:!1,...Te(e)})}function Wp(n,e){return new n({type:"string",format:"cuid2",check:"string_format",abort:!1,...Te(e)})}function Xp(n,e){return new n({type:"string",format:"ulid",check:"string_format",abort:!1,...Te(e)})}function $p(n,e){return new n({type:"string",format:"xid",check:"string_format",abort:!1,...Te(e)})}function Zp(n,e){return new n({type:"string",format:"ksuid",check:"string_format",abort:!1,...Te(e)})}function qp(n,e){return new n({type:"string",format:"ipv4",check:"string_format",abort:!1,...Te(e)})}function Yp(n,e){return new n({type:"string",format:"ipv6",check:"string_format",abort:!1,...Te(e)})}function Jp(n,e){return new n({type:"string",format:"cidrv4",check:"string_format",abort:!1,...Te(e)})}function Kp(n,e){return new n({type:"string",format:"cidrv6",check:"string_format",abort:!1,...Te(e)})}function Qp(n,e){return new n({type:"string",format:"base64",check:"string_format",abort:!1,...Te(e)})}function jp(n,e){return new n({type:"string",format:"base64url",check:"string_format",abort:!1,...Te(e)})}function em(n,e){return new n({type:"string",format:"e164",check:"string_format",abort:!1,...Te(e)})}function tm(n,e){return new n({type:"string",format:"jwt",check:"string_format",abort:!1,...Te(e)})}function nm(n,e){return new n({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...Te(e)})}function im(n,e){return new n({type:"string",format:"date",check:"string_format",...Te(e)})}function rm(n,e){return new n({type:"string",format:"time",check:"string_format",precision:null,...Te(e)})}function sm(n,e){return new n({type:"string",format:"duration",check:"string_format",...Te(e)})}function am(n,e){return new n({type:"number",checks:[],...Te(e)})}function om(n,e){return new n({type:"number",check:"number_format",abort:!1,format:"safeint",...Te(e)})}function cm(n,e){return new n({type:"boolean",...Te(e)})}function lm(n){return new n({type:"unknown"})}function um(n,e){return new n({type:"never",...Te(e)})}function gl(n,e){return new Wu({check:"less_than",...Te(e),value:n,inclusive:!1})}function Fa(n,e){return new Wu({check:"less_than",...Te(e),value:n,inclusive:!0})}function _l(n,e){return new Xu({check:"greater_than",...Te(e),value:n,inclusive:!1})}function Oa(n,e){return new Xu({check:"greater_than",...Te(e),value:n,inclusive:!0})}function vl(n,e){return new Eh({check:"multiple_of",...Te(e),value:n})}function Ku(n,e){return new Th({check:"max_length",...Te(e),maximum:n})}function sa(n,e){return new Ah({check:"min_length",...Te(e),minimum:n})}function Qu(n,e){return new Rh({check:"length_equals",...Te(e),length:n})}function dm(n,e){return new Ch({check:"string_format",format:"regex",...Te(e),pattern:n})}function fm(n){return new Ph({check:"string_format",format:"lowercase",...Te(n)})}function hm(n){return new Ih({check:"string_format",format:"uppercase",...Te(n)})}function pm(n,e){return new Lh({check:"string_format",format:"includes",...Te(e),includes:n})}function mm(n,e){return new Dh({check:"string_format",format:"starts_with",...Te(e),prefix:n})}function gm(n,e){return new Nh({check:"string_format",format:"ends_with",...Te(e),suffix:n})}function Lr(n){return new Uh({check:"overwrite",tx:n})}function _m(n){return Lr(e=>e.normalize(n))}function vm(){return Lr(n=>n.trim())}function xm(){return Lr(n=>n.toLowerCase())}function Sm(){return Lr(n=>n.toUpperCase())}function Mm(){return Lr(n=>Cf(n))}function ym(n,e,t){return new n({type:"array",element:e,...Te(t)})}function bm(n,e,t){return new n({type:"custom",check:"custom",fn:e,...Te(t)})}function Em(n){const e=wm(t=>(t.addIssue=i=>{if(typeof i=="string")t.issues.push(rs(i,t.value,e._zod.def));else{const r=i;r.fatal&&(r.continue=!1),r.code??(r.code="custom"),r.input??(r.input=t.value),r.inst??(r.inst=e),r.continue??(r.continue=!e._zod.def.abort),t.issues.push(rs(r))}},n(t.value,t)));return e}function wm(n,e){const t=new on({check:"custom",...Te(e)});return t._zod.check=n,t}function ju(n){let e=n?.target??"draft-2020-12";return e==="draft-4"&&(e="draft-04"),e==="draft-7"&&(e="draft-07"),{processors:n.processors??{},metadataRegistry:n?.metadata??qr,target:e,unrepresentable:n?.unrepresentable??"throw",override:n?.override??(()=>{}),io:n?.io??"output",counter:0,seen:new Map,cycles:n?.cycles??"ref",reused:n?.reused??"inline",external:n?.external??void 0}}function yt(n,e,t={path:[],schemaPath:[]}){var i;const r=n._zod.def,s=e.seen.get(n);if(s)return s.count++,t.schemaPath.includes(n)&&(s.cycle=t.path),s.schema;const a={schema:{},count:1,cycle:void 0,path:t.path};e.seen.set(n,a);const o=n._zod.toJSONSchema?.();if(o)a.schema=o;else{const u={...t,schemaPath:[...t.schemaPath,n],path:t.path};if(n._zod.processJSONSchema)n._zod.processJSONSchema(e,a.schema,u);else{const d=a.schema,h=e.processors[r.type];if(!h)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);h(n,e,d,u)}const f=n._zod.parent;f&&(a.ref||(a.ref=f),yt(f,e,u),e.seen.get(f).isParent=!0)}const c=e.metadataRegistry.get(n);return c&&Object.assign(a.schema,c),e.io==="input"&&Zt(n)&&(delete a.schema.examples,delete a.schema.default),e.io==="input"&&a.schema._prefault&&((i=a.schema).default??(i.default=a.schema._prefault)),delete a.schema._prefault,e.seen.get(n).schema}function ed(n,e){const t=n.seen.get(e);if(!t)throw new Error("Unprocessed schema. This is a bug in Zod.");const i=new Map;for(const a of n.seen.entries()){const o=n.metadataRegistry.get(a[0])?.id;if(o){const c=i.get(o);if(c&&c!==a[0])throw new Error(`Duplicate schema id "${o}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);i.set(o,a[0])}}const r=a=>{const o=n.target==="draft-2020-12"?"$defs":"definitions";if(n.external){const f=n.external.registry.get(a[0])?.id,d=n.external.uri??(_=>_);if(f)return{ref:d(f)};const h=a[1].defId??a[1].schema.id??`schema${n.counter++}`;return a[1].defId=h,{defId:h,ref:`${d("__shared")}#/${o}/${h}`}}if(a[1]===t)return{ref:"#"};const l=`#/${o}/`,u=a[1].schema.id??`__schema${n.counter++}`;return{defId:u,ref:l+u}},s=a=>{if(a[1].schema.$ref)return;const o=a[1],{ref:c,defId:l}=r(a);o.def={...o.schema},l&&(o.defId=l);const u=o.schema;for(const f in u)delete u[f];u.$ref=c};if(n.cycles==="throw")for(const a of n.seen.entries()){const o=a[1];if(o.cycle)throw new Error(`Cycle detected: #/${o.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const a of n.seen.entries()){const o=a[1];if(e===a[0]){s(a);continue}if(n.external){const l=n.external.registry.get(a[0])?.id;if(e!==a[0]&&l){s(a);continue}}if(n.metadataRegistry.get(a[0])?.id){s(a);continue}if(o.cycle){s(a);continue}if(o.count>1&&n.reused==="ref"){s(a);continue}}}function td(n,e){const t=n.seen.get(e);if(!t)throw new Error("Unprocessed schema. This is a bug in Zod.");const i=a=>{const o=n.seen.get(a);if(o.ref===null)return;const c=o.def??o.schema,l={...c},u=o.ref;if(o.ref=null,u){i(u);const d=n.seen.get(u),h=d.schema;if(h.$ref&&(n.target==="draft-07"||n.target==="draft-04"||n.target==="openapi-3.0")?(c.allOf=c.allOf??[],c.allOf.push(h)):Object.assign(c,h),Object.assign(c,l),a._zod.parent===u)for(const S in c)S==="$ref"||S==="allOf"||S in l||delete c[S];if(h.$ref&&d.def)for(const S in c)S==="$ref"||S==="allOf"||S in d.def&&JSON.stringify(c[S])===JSON.stringify(d.def[S])&&delete c[S]}const f=a._zod.parent;if(f&&f!==u){i(f);const d=n.seen.get(f);if(d?.schema.$ref&&(c.$ref=d.schema.$ref,d.def))for(const h in c)h==="$ref"||h==="allOf"||h in d.def&&JSON.stringify(c[h])===JSON.stringify(d.def[h])&&delete c[h]}n.override({zodSchema:a,jsonSchema:c,path:o.path??[]})};for(const a of[...n.seen.entries()].reverse())i(a[0]);const r={};if(n.target==="draft-2020-12"?r.$schema="https://json-schema.org/draft/2020-12/schema":n.target==="draft-07"?r.$schema="http://json-schema.org/draft-07/schema#":n.target==="draft-04"?r.$schema="http://json-schema.org/draft-04/schema#":n.target,n.external?.uri){const a=n.external.registry.get(e)?.id;if(!a)throw new Error("Schema is missing an `id` property");r.$id=n.external.uri(a)}Object.assign(r,t.def??t.schema);const s=n.external?.defs??{};for(const a of n.seen.entries()){const o=a[1];o.def&&o.defId&&(s[o.defId]=o.def)}n.external||Object.keys(s).length>0&&(n.target==="draft-2020-12"?r.$defs=s:r.definitions=s);try{const a=JSON.parse(JSON.stringify(r));return Object.defineProperty(a,"~standard",{value:{...e["~standard"],jsonSchema:{input:aa(e,"input",n.processors),output:aa(e,"output",n.processors)}},enumerable:!1,writable:!1}),a}catch{throw new Error("Error converting schema to JSON.")}}function Zt(n,e){const t=e??{seen:new Set};if(t.seen.has(n))return!1;t.seen.add(n);const i=n._zod.def;if(i.type==="transform")return!0;if(i.type==="array")return Zt(i.element,t);if(i.type==="set")return Zt(i.valueType,t);if(i.type==="lazy")return Zt(i.getter(),t);if(i.type==="promise"||i.type==="optional"||i.type==="nonoptional"||i.type==="nullable"||i.type==="readonly"||i.type==="default"||i.type==="prefault")return Zt(i.innerType,t);if(i.type==="intersection")return Zt(i.left,t)||Zt(i.right,t);if(i.type==="record"||i.type==="map")return Zt(i.keyType,t)||Zt(i.valueType,t);if(i.type==="pipe")return Zt(i.in,t)||Zt(i.out,t);if(i.type==="object"){for(const r in i.shape)if(Zt(i.shape[r],t))return!0;return!1}if(i.type==="union"){for(const r of i.options)if(Zt(r,t))return!0;return!1}if(i.type==="tuple"){for(const r of i.items)if(Zt(r,t))return!0;return!!(i.rest&&Zt(i.rest,t))}return!1}const Tm=(n,e={})=>t=>{const i=ju({...t,processors:e});return yt(n,i),ed(i,n),td(i,n)},aa=(n,e,t={})=>i=>{const{libraryOptions:r,target:s}=i??{},a=ju({...r??{},target:s,io:e,processors:t});return yt(n,a),ed(a,n),td(a,n)},Am={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},Rm=(n,e,t,i)=>{const r=t;r.type="string";const{minimum:s,maximum:a,format:o,patterns:c,contentEncoding:l}=n._zod.bag;if(typeof s=="number"&&(r.minLength=s),typeof a=="number"&&(r.maxLength=a),o&&(r.format=Am[o]??o,r.format===""&&delete r.format,o==="time"&&delete r.format),l&&(r.contentEncoding=l),c&&c.size>0){const u=[...c];u.length===1?r.pattern=u[0].source:u.length>1&&(r.allOf=[...u.map(f=>({...e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"?{type:"string"}:{},pattern:f.source}))])}},Cm=(n,e,t,i)=>{const r=t,{minimum:s,maximum:a,format:o,multipleOf:c,exclusiveMaximum:l,exclusiveMinimum:u}=n._zod.bag;typeof o=="string"&&o.includes("int")?r.type="integer":r.type="number",typeof u=="number"&&(e.target==="draft-04"||e.target==="openapi-3.0"?(r.minimum=u,r.exclusiveMinimum=!0):r.exclusiveMinimum=u),typeof s=="number"&&(r.minimum=s,typeof u=="number"&&e.target!=="draft-04"&&(u>=s?delete r.minimum:delete r.exclusiveMinimum)),typeof l=="number"&&(e.target==="draft-04"||e.target==="openapi-3.0"?(r.maximum=l,r.exclusiveMaximum=!0):r.exclusiveMaximum=l),typeof a=="number"&&(r.maximum=a,typeof l=="number"&&e.target!=="draft-04"&&(l<=a?delete r.maximum:delete r.exclusiveMaximum)),typeof c=="number"&&(r.multipleOf=c)},Pm=(n,e,t,i)=>{t.type="boolean"},Im=(n,e,t,i)=>{t.not={}},Lm=(n,e,t,i)=>{},Dm=(n,e,t,i)=>{const r=n._zod.def,s=Du(r.entries);s.every(a=>typeof a=="number")&&(t.type="number"),s.every(a=>typeof a=="string")&&(t.type="string"),t.enum=s},Nm=(n,e,t,i)=>{const r=n._zod.def,s=[];for(const a of r.values)if(a===void 0){if(e.unrepresentable==="throw")throw new Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof a=="bigint"){if(e.unrepresentable==="throw")throw new Error("BigInt literals cannot be represented in JSON Schema");s.push(Number(a))}else s.push(a);if(s.length!==0)if(s.length===1){const a=s[0];t.type=a===null?"null":typeof a,e.target==="draft-04"||e.target==="openapi-3.0"?t.enum=[a]:t.const=a}else s.every(a=>typeof a=="number")&&(t.type="number"),s.every(a=>typeof a=="string")&&(t.type="string"),s.every(a=>typeof a=="boolean")&&(t.type="boolean"),s.every(a=>a===null)&&(t.type="null"),t.enum=s},Um=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Custom types cannot be represented in JSON Schema")},Fm=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Transforms cannot be represented in JSON Schema")},Om=(n,e,t,i)=>{const r=t,s=n._zod.def,{minimum:a,maximum:o}=n._zod.bag;typeof a=="number"&&(r.minItems=a),typeof o=="number"&&(r.maxItems=o),r.type="array",r.items=yt(s.element,e,{...i,path:[...i.path,"items"]})},zm=(n,e,t,i)=>{const r=t,s=n._zod.def;r.type="object",r.properties={};const a=s.shape;for(const l in a)r.properties[l]=yt(a[l],e,{...i,path:[...i.path,"properties",l]});const o=new Set(Object.keys(a)),c=new Set([...o].filter(l=>{const u=s.shape[l]._zod;return e.io==="input"?u.optin===void 0:u.optout===void 0}));c.size>0&&(r.required=Array.from(c)),s.catchall?._zod.def.type==="never"?r.additionalProperties=!1:s.catchall?s.catchall&&(r.additionalProperties=yt(s.catchall,e,{...i,path:[...i.path,"additionalProperties"]})):e.io==="output"&&(r.additionalProperties=!1)},Bm=(n,e,t,i)=>{const r=n._zod.def,s=r.inclusive===!1,a=r.options.map((o,c)=>yt(o,e,{...i,path:[...i.path,s?"oneOf":"anyOf",c]}));s?t.oneOf=a:t.anyOf=a},km=(n,e,t,i)=>{const r=n._zod.def,s=yt(r.left,e,{...i,path:[...i.path,"allOf",0]}),a=yt(r.right,e,{...i,path:[...i.path,"allOf",1]}),o=l=>"allOf"in l&&Object.keys(l).length===1,c=[...o(s)?s.allOf:[s],...o(a)?a.allOf:[a]];t.allOf=c},Gm=(n,e,t,i)=>{const r=t,s=n._zod.def;r.type="array";const a=e.target==="draft-2020-12"?"prefixItems":"items",o=e.target==="draft-2020-12"||e.target==="openapi-3.0"?"items":"additionalItems",c=s.items.map((d,h)=>yt(d,e,{...i,path:[...i.path,a,h]})),l=s.rest?yt(s.rest,e,{...i,path:[...i.path,o,...e.target==="openapi-3.0"?[s.items.length]:[]]}):null;e.target==="draft-2020-12"?(r.prefixItems=c,l&&(r.items=l)):e.target==="openapi-3.0"?(r.items={anyOf:c},l&&r.items.anyOf.push(l),r.minItems=c.length,l||(r.maxItems=c.length)):(r.items=c,l&&(r.additionalItems=l));const{minimum:u,maximum:f}=n._zod.bag;typeof u=="number"&&(r.minItems=u),typeof f=="number"&&(r.maxItems=f)},Vm=(n,e,t,i)=>{const r=t,s=n._zod.def;r.type="object";const a=s.keyType,c=a._zod.bag?.patterns;if(s.mode==="loose"&&c&&c.size>0){const u=yt(s.valueType,e,{...i,path:[...i.path,"patternProperties","*"]});r.patternProperties={};for(const f of c)r.patternProperties[f.source]=u}else(e.target==="draft-07"||e.target==="draft-2020-12")&&(r.propertyNames=yt(s.keyType,e,{...i,path:[...i.path,"propertyNames"]})),r.additionalProperties=yt(s.valueType,e,{...i,path:[...i.path,"additionalProperties"]});const l=a._zod.values;if(l){const u=[...l].filter(f=>typeof f=="string"||typeof f=="number");u.length>0&&(r.required=u)}},Hm=(n,e,t,i)=>{const r=n._zod.def,s=yt(r.innerType,e,i),a=e.seen.get(n);e.target==="openapi-3.0"?(a.ref=r.innerType,t.nullable=!0):t.anyOf=[s,{type:"null"}]},Wm=(n,e,t,i)=>{const r=n._zod.def;yt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType},Xm=(n,e,t,i)=>{const r=n._zod.def;yt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType,t.default=JSON.parse(JSON.stringify(r.defaultValue))},$m=(n,e,t,i)=>{const r=n._zod.def;yt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType,e.io==="input"&&(t._prefault=JSON.parse(JSON.stringify(r.defaultValue)))},Zm=(n,e,t,i)=>{const r=n._zod.def;yt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType;let a;try{a=r.catchValue(void 0)}catch{throw new Error("Dynamic catch values are not supported in JSON Schema")}t.default=a},qm=(n,e,t,i)=>{const r=n._zod.def,s=e.io==="input"?r.in._zod.def.type==="transform"?r.out:r.in:r.out;yt(s,e,i);const a=e.seen.get(n);a.ref=s},Ym=(n,e,t,i)=>{const r=n._zod.def;yt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType,t.readOnly=!0},nd=(n,e,t,i)=>{const r=n._zod.def;yt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType},Jm=J("ZodISODateTime",(n,e)=>{Yh.init(n,e),St.init(n,e)});function Km(n){return nm(Jm,n)}const Qm=J("ZodISODate",(n,e)=>{Jh.init(n,e),St.init(n,e)});function jm(n){return im(Qm,n)}const eg=J("ZodISOTime",(n,e)=>{Kh.init(n,e),St.init(n,e)});function tg(n){return rm(eg,n)}const ng=J("ZodISODuration",(n,e)=>{Qh.init(n,e),St.init(n,e)});function ig(n){return sm(ng,n)}const rg=(n,e)=>{Ou.init(n,e),n.name="ZodError",Object.defineProperties(n,{format:{value:t=>Vf(n,t)},flatten:{value:t=>Gf(n,t)},addIssue:{value:t=>{n.issues.push(t),n.message=JSON.stringify(n.issues,xo,2)}},addIssues:{value:t=>{n.issues.push(...t),n.message=JSON.stringify(n.issues,xo,2)}},isEmpty:{get(){return n.issues.length===0}}})},xn=J("ZodError",rg,{Parent:Error}),sg=Mc(xn),ag=yc(xn),og=Ma(xn),cg=ya(xn),lg=Xf(xn),ug=$f(xn),dg=Zf(xn),fg=qf(xn),hg=Yf(xn),pg=Jf(xn),mg=Kf(xn),gg=Qf(xn),vt=J("ZodType",(n,e)=>(pt.init(n,e),Object.assign(n["~standard"],{jsonSchema:{input:aa(n,"input"),output:aa(n,"output")}}),n.toJSONSchema=Tm(n,{}),n.def=e,n.type=e.type,Object.defineProperty(n,"_def",{value:e}),n.check=(...t)=>n.clone(wi(e,{checks:[...e.checks??[],...t.map(i=>typeof i=="function"?{_zod:{check:i,def:{check:"custom"},onattach:[]}}:i)]}),{parent:!0}),n.with=n.check,n.clone=(t,i)=>Ti(n,t,i),n.brand=()=>n,n.register=((t,i)=>(t.add(n,i),n)),n.parse=(t,i)=>sg(n,t,i,{callee:n.parse}),n.safeParse=(t,i)=>og(n,t,i),n.parseAsync=async(t,i)=>ag(n,t,i,{callee:n.parseAsync}),n.safeParseAsync=async(t,i)=>cg(n,t,i),n.spa=n.safeParseAsync,n.encode=(t,i)=>lg(n,t,i),n.decode=(t,i)=>ug(n,t,i),n.encodeAsync=async(t,i)=>dg(n,t,i),n.decodeAsync=async(t,i)=>fg(n,t,i),n.safeEncode=(t,i)=>hg(n,t,i),n.safeDecode=(t,i)=>pg(n,t,i),n.safeEncodeAsync=async(t,i)=>mg(n,t,i),n.safeDecodeAsync=async(t,i)=>gg(n,t,i),n.refine=(t,i)=>n.check(u_(t,i)),n.superRefine=t=>n.check(d_(t)),n.overwrite=t=>n.check(Lr(t)),n.optional=()=>yl(n),n.exactOptional=()=>Kg(n),n.nullable=()=>bl(n),n.nullish=()=>yl(bl(n)),n.nonoptional=t=>i_(n,t),n.array=()=>at(n),n.or=t=>Ec([n,t]),n.and=t=>Wg(n,t),n.transform=t=>El(n,Yg(t)),n.default=t=>e_(n,t),n.prefault=t=>n_(n,t),n.catch=t=>s_(n,t),n.pipe=t=>El(n,t),n.readonly=()=>c_(n),n.describe=t=>{const i=n.clone();return qr.add(i,{description:t}),i},Object.defineProperty(n,"description",{get(){return qr.get(n)?.description},configurable:!0}),n.meta=(...t)=>{if(t.length===0)return qr.get(n);const i=n.clone();return qr.add(i,t[0]),i},n.isOptional=()=>n.safeParse(void 0).success,n.isNullable=()=>n.safeParse(null).success,n.apply=t=>t(n),n)),id=J("_ZodString",(n,e)=>{bc.init(n,e),vt.init(n,e),n._zod.processJSONSchema=(i,r,s)=>Rm(n,i,r);const t=n._zod.bag;n.format=t.format??null,n.minLength=t.minimum??null,n.maxLength=t.maximum??null,n.regex=(...i)=>n.check(dm(...i)),n.includes=(...i)=>n.check(pm(...i)),n.startsWith=(...i)=>n.check(mm(...i)),n.endsWith=(...i)=>n.check(gm(...i)),n.min=(...i)=>n.check(sa(...i)),n.max=(...i)=>n.check(Ku(...i)),n.length=(...i)=>n.check(Qu(...i)),n.nonempty=(...i)=>n.check(sa(1,...i)),n.lowercase=i=>n.check(fm(i)),n.uppercase=i=>n.check(hm(i)),n.trim=()=>n.check(vm()),n.normalize=(...i)=>n.check(_m(...i)),n.toLowerCase=()=>n.check(xm()),n.toUpperCase=()=>n.check(Sm()),n.slugify=()=>n.check(Mm())}),_g=J("ZodString",(n,e)=>{bc.init(n,e),id.init(n,e),n.email=t=>n.check(Up(vg,t)),n.url=t=>n.check(kp(xg,t)),n.jwt=t=>n.check(tm(Ng,t)),n.emoji=t=>n.check(Gp(Sg,t)),n.guid=t=>n.check(ml(xl,t)),n.uuid=t=>n.check(Fp(ys,t)),n.uuidv4=t=>n.check(Op(ys,t)),n.uuidv6=t=>n.check(zp(ys,t)),n.uuidv7=t=>n.check(Bp(ys,t)),n.nanoid=t=>n.check(Vp(Mg,t)),n.guid=t=>n.check(ml(xl,t)),n.cuid=t=>n.check(Hp(yg,t)),n.cuid2=t=>n.check(Wp(bg,t)),n.ulid=t=>n.check(Xp(Eg,t)),n.base64=t=>n.check(Qp(Ig,t)),n.base64url=t=>n.check(jp(Lg,t)),n.xid=t=>n.check($p(wg,t)),n.ksuid=t=>n.check(Zp(Tg,t)),n.ipv4=t=>n.check(qp(Ag,t)),n.ipv6=t=>n.check(Yp(Rg,t)),n.cidrv4=t=>n.check(Jp(Cg,t)),n.cidrv6=t=>n.check(Kp(Pg,t)),n.e164=t=>n.check(em(Dg,t)),n.datetime=t=>n.check(Km(t)),n.date=t=>n.check(jm(t)),n.time=t=>n.check(tg(t)),n.duration=t=>n.check(ig(t))});function vn(n){return Np(_g,n)}const St=J("ZodStringFormat",(n,e)=>{_t.init(n,e),id.init(n,e)}),vg=J("ZodEmail",(n,e)=>{kh.init(n,e),St.init(n,e)}),xl=J("ZodGUID",(n,e)=>{zh.init(n,e),St.init(n,e)}),ys=J("ZodUUID",(n,e)=>{Bh.init(n,e),St.init(n,e)}),xg=J("ZodURL",(n,e)=>{Gh.init(n,e),St.init(n,e)}),Sg=J("ZodEmoji",(n,e)=>{Vh.init(n,e),St.init(n,e)}),Mg=J("ZodNanoID",(n,e)=>{Hh.init(n,e),St.init(n,e)}),yg=J("ZodCUID",(n,e)=>{Wh.init(n,e),St.init(n,e)}),bg=J("ZodCUID2",(n,e)=>{Xh.init(n,e),St.init(n,e)}),Eg=J("ZodULID",(n,e)=>{$h.init(n,e),St.init(n,e)}),wg=J("ZodXID",(n,e)=>{Zh.init(n,e),St.init(n,e)}),Tg=J("ZodKSUID",(n,e)=>{qh.init(n,e),St.init(n,e)}),Ag=J("ZodIPv4",(n,e)=>{jh.init(n,e),St.init(n,e)}),Rg=J("ZodIPv6",(n,e)=>{ep.init(n,e),St.init(n,e)}),Cg=J("ZodCIDRv4",(n,e)=>{tp.init(n,e),St.init(n,e)}),Pg=J("ZodCIDRv6",(n,e)=>{np.init(n,e),St.init(n,e)}),Ig=J("ZodBase64",(n,e)=>{ip.init(n,e),St.init(n,e)}),Lg=J("ZodBase64URL",(n,e)=>{sp.init(n,e),St.init(n,e)}),Dg=J("ZodE164",(n,e)=>{ap.init(n,e),St.init(n,e)}),Ng=J("ZodJWT",(n,e)=>{cp.init(n,e),St.init(n,e)}),rd=J("ZodNumber",(n,e)=>{Zu.init(n,e),vt.init(n,e),n._zod.processJSONSchema=(i,r,s)=>Cm(n,i,r),n.gt=(i,r)=>n.check(_l(i,r)),n.gte=(i,r)=>n.check(Oa(i,r)),n.min=(i,r)=>n.check(Oa(i,r)),n.lt=(i,r)=>n.check(gl(i,r)),n.lte=(i,r)=>n.check(Fa(i,r)),n.max=(i,r)=>n.check(Fa(i,r)),n.int=i=>n.check(Sl(i)),n.safe=i=>n.check(Sl(i)),n.positive=i=>n.check(_l(0,i)),n.nonnegative=i=>n.check(Oa(0,i)),n.negative=i=>n.check(gl(0,i)),n.nonpositive=i=>n.check(Fa(0,i)),n.multipleOf=(i,r)=>n.check(vl(i,r)),n.step=(i,r)=>n.check(vl(i,r)),n.finite=()=>n;const t=n._zod.bag;n.minValue=Math.max(t.minimum??Number.NEGATIVE_INFINITY,t.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,n.maxValue=Math.min(t.maximum??Number.POSITIVE_INFINITY,t.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,n.isInt=(t.format??"").includes("int")||Number.isSafeInteger(t.multipleOf??.5),n.isFinite=!0,n.format=t.format??null});function Ne(n){return am(rd,n)}const Ug=J("ZodNumberFormat",(n,e)=>{lp.init(n,e),rd.init(n,e)});function Sl(n){return om(Ug,n)}const Fg=J("ZodBoolean",(n,e)=>{up.init(n,e),vt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Pm(n,t,i)});function Kn(n){return cm(Fg,n)}const Og=J("ZodUnknown",(n,e)=>{dp.init(n,e),vt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Lm()});function Wi(){return lm(Og)}const zg=J("ZodNever",(n,e)=>{fp.init(n,e),vt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Im(n,t,i)});function Bg(n){return um(zg,n)}const kg=J("ZodArray",(n,e)=>{hp.init(n,e),vt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Om(n,t,i,r),n.element=e.element,n.min=(t,i)=>n.check(sa(t,i)),n.nonempty=t=>n.check(sa(1,t)),n.max=(t,i)=>n.check(Ku(t,i)),n.length=(t,i)=>n.check(Qu(t,i)),n.unwrap=()=>n.element});function at(n,e){return ym(kg,n,e)}const Gg=J("ZodObject",(n,e)=>{mp.init(n,e),vt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>zm(n,t,i,r),rt(n,"shape",()=>e.shape),n.keyof=()=>sd(Object.keys(n._zod.def.shape)),n.catchall=t=>n.clone({...n._zod.def,catchall:t}),n.passthrough=()=>n.clone({...n._zod.def,catchall:Wi()}),n.loose=()=>n.clone({...n._zod.def,catchall:Wi()}),n.strict=()=>n.clone({...n._zod.def,catchall:Bg()}),n.strip=()=>n.clone({...n._zod.def,catchall:void 0}),n.extend=t=>Ff(n,t),n.safeExtend=t=>Of(n,t),n.merge=t=>zf(n,t),n.pick=t=>Nf(n,t),n.omit=t=>Uf(n,t),n.partial=(...t)=>Bf(ad,n,t[0]),n.required=(...t)=>kf(od,n,t[0])});function Rt(n,e){const t={type:"object",shape:n??{},...Te(e)};return new Gg(t)}const Vg=J("ZodUnion",(n,e)=>{gp.init(n,e),vt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Bm(n,t,i,r),n.options=e.options});function Ec(n,e){return new Vg({type:"union",options:n,...Te(e)})}const Hg=J("ZodIntersection",(n,e)=>{_p.init(n,e),vt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>km(n,t,i,r)});function Wg(n,e){return new Hg({type:"intersection",left:n,right:e})}const Xg=J("ZodTuple",(n,e)=>{vp.init(n,e),vt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Gm(n,t,i,r),n.rest=t=>n.clone({...n._zod.def,rest:t})});function jn(n,e,t){const i=e instanceof pt,r=i?t:e,s=i?e:null;return new Xg({type:"tuple",items:n,rest:s,...Te(r)})}const $g=J("ZodRecord",(n,e)=>{xp.init(n,e),vt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Vm(n,t,i,r),n.keyType=e.keyType,n.valueType=e.valueType});function Ml(n,e,t){return new $g({type:"record",keyType:n,valueType:e,...Te(t)})}const Mo=J("ZodEnum",(n,e)=>{Sp.init(n,e),vt.init(n,e),n._zod.processJSONSchema=(i,r,s)=>Dm(n,i,r),n.enum=e.entries,n.options=Object.values(e.entries);const t=new Set(Object.keys(e.entries));n.extract=(i,r)=>{const s={};for(const a of i)if(t.has(a))s[a]=e.entries[a];else throw new Error(`Key ${a} not found in enum`);return new Mo({...e,checks:[],...Te(r),entries:s})},n.exclude=(i,r)=>{const s={...e.entries};for(const a of i)if(t.has(a))delete s[a];else throw new Error(`Key ${a} not found in enum`);return new Mo({...e,checks:[],...Te(r),entries:s})}});function sd(n,e){const t=Array.isArray(n)?Object.fromEntries(n.map(i=>[i,i])):n;return new Mo({type:"enum",entries:t,...Te(e)})}const Zg=J("ZodLiteral",(n,e)=>{Mp.init(n,e),vt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Nm(n,t,i),n.values=new Set(e.values),Object.defineProperty(n,"value",{get(){if(e.values.length>1)throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");return e.values[0]}})});function Vn(n,e){return new Zg({type:"literal",values:Array.isArray(n)?n:[n],...Te(e)})}const qg=J("ZodTransform",(n,e)=>{yp.init(n,e),vt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Fm(n,t),n._zod.parse=(t,i)=>{if(i.direction==="backward")throw new Iu(n.constructor.name);t.addIssue=s=>{if(typeof s=="string")t.issues.push(rs(s,t.value,e));else{const a=s;a.fatal&&(a.continue=!1),a.code??(a.code="custom"),a.input??(a.input=t.value),a.inst??(a.inst=n),t.issues.push(rs(a))}};const r=e.transform(t.value,t);return r instanceof Promise?r.then(s=>(t.value=s,t)):(t.value=r,t)}});function Yg(n){return new qg({type:"transform",transform:n})}const ad=J("ZodOptional",(n,e)=>{Ju.init(n,e),vt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>nd(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function yl(n){return new ad({type:"optional",innerType:n})}const Jg=J("ZodExactOptional",(n,e)=>{bp.init(n,e),vt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>nd(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function Kg(n){return new Jg({type:"optional",innerType:n})}const Qg=J("ZodNullable",(n,e)=>{Ep.init(n,e),vt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Hm(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function bl(n){return new Qg({type:"nullable",innerType:n})}const jg=J("ZodDefault",(n,e)=>{wp.init(n,e),vt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Xm(n,t,i,r),n.unwrap=()=>n._zod.def.innerType,n.removeDefault=n.unwrap});function e_(n,e){return new jg({type:"default",innerType:n,get defaultValue(){return typeof e=="function"?e():Uu(e)}})}const t_=J("ZodPrefault",(n,e)=>{Tp.init(n,e),vt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>$m(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function n_(n,e){return new t_({type:"prefault",innerType:n,get defaultValue(){return typeof e=="function"?e():Uu(e)}})}const od=J("ZodNonOptional",(n,e)=>{Ap.init(n,e),vt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Wm(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function i_(n,e){return new od({type:"nonoptional",innerType:n,...Te(e)})}const r_=J("ZodCatch",(n,e)=>{Rp.init(n,e),vt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Zm(n,t,i,r),n.unwrap=()=>n._zod.def.innerType,n.removeCatch=n.unwrap});function s_(n,e){return new r_({type:"catch",innerType:n,catchValue:typeof e=="function"?e:()=>e})}const a_=J("ZodPipe",(n,e)=>{Cp.init(n,e),vt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>qm(n,t,i,r),n.in=e.in,n.out=e.out});function El(n,e){return new a_({type:"pipe",in:n,out:e})}const o_=J("ZodReadonly",(n,e)=>{Pp.init(n,e),vt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Ym(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function c_(n){return new o_({type:"readonly",innerType:n})}const l_=J("ZodCustom",(n,e)=>{Ip.init(n,e),vt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Um(n,t)});function u_(n,e={}){return bm(l_,n,e)}function d_(n){return Em(n)}const f_=[{name:"fgv-runtime.mjs",url:"https://raw.githubusercontent.com/JHB-1/function-graph-visualizer-web/5bdced5cd3638050f931fa53366887f93cabf103/runtime/core-0f3c8ac/fgv-runtime.mjs",sha256:"def5b81b708a61cca3e3f05b13800cf874e710f03c351453f29b22493b321afe"},{name:"fgv-runtime.wasm",url:"https://raw.githubusercontent.com/JHB-1/function-graph-visualizer-web/5bdced5cd3638050f931fa53366887f93cabf103/runtime/core-0f3c8ac/fgv-runtime.wasm",sha256:"7da4ac058c6ba3776e96669c0fe757ad6075efbea65b5b93eaabcc92b6ec2b1c"}],h_={files:f_};let p_;function Vi(){return p_}function es(n){return`fgv-${n}`}const m_=h_.files.map(n=>n.sha256).join("-");function Ot(n){if(typeof n!="object"||n===null||Array.isArray(n))throw new Error("JSON 객체가 필요합니다.");return n}class g_{worker;sequence=0;pending=new Map;constructor(){Vi()||(this.worker=new Worker(new URL(""+new URL("worker-DNkyt0ou.js",import.meta.url).href,import.meta.url),{type:"module"}),this.worker.onmessage=e=>{const t=Ot(e.data),i=Number(t.id),r=this.pending.get(i);if(r)if(this.pending.delete(i),t.error)r.reject(new Error(String(t.error)));else{const s=Ot(t.output);s.native_error?r.reject(new Error(String(s.native_error))):r.resolve(s)}},this.worker.onerror=e=>{for(const t of this.pending.values())t.reject(new Error(e.message));this.pending.clear()})}request(e,t=!1){const i=Vi();if(i)return i.request(e,t);const r=++this.sequence;return new Promise((s,a)=>{this.pending.set(r,{resolve:s,reject:a});const o=new URL("./runtime/fgv-runtime.mjs",document.baseURI);o.searchParams.set("v",m_),this.worker.postMessage({id:r,input:e,runtime_url:o.href})})}dispose(){this.worker?.terminate(),Vi()?.dispose();for(const e of this.pending.values())e.reject(new Error("Core worker disposed"));this.pending.clear()}}function cd(n,e){if(n.length>4096)throw new Error("수식은 4096자 이내로 입력하세요.");const t=n.match(/(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|[A-Za-z_][A-Za-z_0-9]*|\*\*|[+\-*/^(),]|\S/gi)??[];let i=0,r=0;const s=new Set(["sin","cos","tan","exp","log","sqrt","abs"]),a=new Set(["min","max","pow"]),o={"+":"add","-":"sub","*":"mul","/":"div","^":"pow","**":"pow"};function c(f,...d){if(++r>512)throw new Error("수식 AST 한도는 512개입니다.");return[f,...d]}function l(f,d){if(d>64)throw new Error("수식 중첩은 64단계 이내로 입력하세요.");const h=t[i++];let _;if(h==="+"||h==="-")_=c(h==="+"?"pos":"neg",l(3,d+1));else if(h==="("){if(_=l(0,d+1),t[i++]!==")")throw new Error("닫는 괄호가 필요합니다.")}else if(h!==void 0&&/^(?:\d|\.)/.test(h)&&Number.isFinite(Number(h)))_=c("number",Number(h));else if(h==="pi"||h==="e")_=c("number",h==="pi"?Math.PI:Math.E);else if(h!==void 0&&(s.has(h)||a.has(h))){if(t[i++]!=="(")throw new Error(`${h} 뒤에는 괄호가 필요합니다.`);const S=l(0,d+1);if(a.has(h)){if(t[i++]!==",")throw new Error(`${h}에는 인자 두 개가 필요합니다.`);_=c(h,S,l(0,d+1))}else _=c(h,S);if(t[i++]!==")")throw new Error("닫는 괄호가 필요합니다.")}else{const S=h==="x"?0:h==="y"?1:h==="z"?2:/^x\d+$/.test(h??"")?Number(h.slice(1)):-1;if(S<0||S>=e)throw new Error(`지원하지 않는 변수/토큰: ${h??"입력 끝"}`);_=c("variable",S)}for(;i<t.length;){const S=t[i],m=S==="+"||S==="-"?1:S==="*"||S==="/"?2:S==="^"||S==="**"?4:-1;if(m<f)break;++i;const p=o[S];_=c(p,_,l(m+(m===4?0:1),d+1))}return _}const u=l(0,0);if(i!==t.length)throw new Error(`예상하지 못한 토큰: ${t[i]}`);return u}const wc="186",__=0,wl=1,v_=2,Js=1,x_=2,Yr=3,Xi=0,sn=1,mn=2,ti=0,ts=1,Tl=2,Al=3,Rl=4,S_=5,mr=100,M_=101,y_=102,b_=103,E_=104,w_=200,T_=201,A_=202,R_=203,ld=204,ud=205,C_=206,P_=207,I_=208,L_=209,D_=210,N_=211,U_=212,F_=213,O_=214,yo=0,bo=1,Eo=2,ss=3,wo=4,To=5,Ao=6,Ro=7,dd=0,z_=1,B_=2,Hn=0,fd=1,hd=2,pd=3,md=4,gd=5,_d=6,vd=7,xd=300,$i=301,Cr=302,za=303,Ba=304,Ea=306,Co=1e3,ei=1001,Po=1002,zt=1003,k_=1004,bs=1005,Xt=1006,ka=1007,zi=1008,gn=1009,Sd=1010,Md=1011,as=1012,Tc=1013,Wn=1014,Bn=1015,Xn=1016,Ac=1017,Rc=1018,os=1020,yd=35902,bd=35899,Ed=1021,wd=1022,Cn=1023,si=1026,Bi=1027,Td=1028,Cc=1029,Zi=1030,Pc=1031,Ic=1033,Ks=33776,Qs=33777,js=33778,ea=33779,Io=35840,Lo=35841,Do=35842,No=35843,Uo=36196,Fo=37492,Oo=37496,zo=37488,Bo=37489,oa=37490,ko=37491,Go=37808,Vo=37809,Ho=37810,Wo=37811,Xo=37812,$o=37813,Zo=37814,qo=37815,Yo=37816,Jo=37817,Ko=37818,Qo=37819,jo=37820,ec=37821,tc=36492,nc=36494,ic=36495,rc=36283,sc=36284,ca=36285,ac=36286,G_=3200,Cl=0,V_=1,vi="",pn="srgb",la="srgb-linear",ua="linear",nt="srgb",Ga=7680,H_=519,W_=512,X_=513,$_=514,Lc=515,Z_=516,q_=517,Dc=518,Y_=519,J_=35044,Pl=35048,Il="300 es",kn=2e3,da=2001;function K_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function fa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Q_(){const n=fa("canvas");return n.style.display="block",n}const Ll={};function Dl(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ad(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ie(...n){n=Ad(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ye(...n){n=Ad(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Sr(...n){const e=n.join(" ");e in Ll||(Ll[e]=!0,Ie(...n))}function j_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const ev={[yo]:bo,[Eo]:Ao,[wo]:Ro,[ss]:To,[bo]:yo,[Ao]:Eo,[Ro]:wo,[To]:ss};class Ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Va=Math.PI/180,oc=180/Math.PI;function fs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function tv(n,e){return(n%e+e)%e}function Ha(n,e,t){return(1-t)*n+t*e}function Or(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function tn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class Ke{static{Ke.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3],d=s[a+0],h=s[a+1],_=s[a+2],S=s[a+3];if(f!==S||c!==d||l!==h||u!==_){let m=c*d+l*h+u*_+f*S;m<0&&(d=-d,h=-h,_=-_,S=-S,m=-m);let p=1-o;if(m<.9995){const w=Math.acos(m),A=Math.sin(w);p=Math.sin(p*w)/A,o=Math.sin(o*w)/A,c=c*p+d*o,l=l*p+h*o,u=u*p+_*o,f=f*p+S*o}else{c=c*p+d*o,l=l*p+h*o,u=u*p+_*o,f=f*p+S*o;const w=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=w,l*=w,u*=w,f*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[a],d=s[a+1],h=s[a+2],_=s[a+3];return e[t]=o*_+u*f+c*h-l*d,e[t+1]=c*_+u*d+l*f-o*h,e[t+2]=l*_+u*h+o*d-c*f,e[t+3]=u*_-o*f-c*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),f=o(s/2),d=c(i/2),h=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*h*_,this._y=l*h*f-d*u*_,this._z=l*u*_+d*h*f,this._w=l*u*f-d*h*_;break;case"YXZ":this._x=d*u*f+l*h*_,this._y=l*h*f-d*u*_,this._z=l*u*_-d*h*f,this._w=l*u*f+d*h*_;break;case"ZXY":this._x=d*u*f-l*h*_,this._y=l*h*f+d*u*_,this._z=l*u*_+d*h*f,this._w=l*u*f-d*h*_;break;case"ZYX":this._x=d*u*f-l*h*_,this._y=l*h*f+d*u*_,this._z=l*u*_-d*h*f,this._w=l*u*f+d*h*_;break;case"YZX":this._x=d*u*f+l*h*_,this._y=l*h*f+d*u*_,this._z=l*u*_-d*h*f,this._w=l*u*f-d*h*_;break;case"XZY":this._x=d*u*f-l*h*_,this._y=l*h*f-d*u*_,this._z=l*u*_+d*h*f,this._w=l*u*f+d*h*_;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(a-r)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(u-c)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+l)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(s-l)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{static{F.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+c*l+a*f-o*u,this.y=i+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wa.copy(this).projectOnVector(e),this.sub(Wa)}reflect(e){return this.sub(Wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new F,Nl=new Dr;class De{static{De.prototype.isMatrix3=!0}constructor(e,t,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],h=i[5],_=i[8],S=r[0],m=r[3],p=r[6],w=r[1],A=r[4],M=r[7],y=r[2],b=r[5],R=r[8];return s[0]=a*S+o*w+c*y,s[3]=a*m+o*A+c*b,s[6]=a*p+o*M+c*R,s[1]=l*S+u*w+f*y,s[4]=l*m+u*A+f*b,s[7]=l*p+u*M+f*R,s[2]=d*S+h*w+_*y,s[5]=d*m+h*A+_*b,s[8]=d*p+h*M+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,d=o*c-u*s,h=l*s-a*c,_=t*f+i*d+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=f*S,e[1]=(r*l-u*i)*S,e[2]=(o*i-r*a)*S,e[3]=d*S,e[4]=(u*t-r*c)*S,e[5]=(r*s-o*t)*S,e[6]=h*S,e[7]=(i*c-l*t)*S,e[8]=(a*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Sr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xa.makeScale(e,t)),this}rotate(e){return Sr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xa.makeRotation(-e)),this}translate(e,t){return Sr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new De,Ul=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fl=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nv(){const n={enabled:!0,workingColorSpace:la,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(r.r=ni(r.r),r.g=ni(r.g),r.b=ni(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(r.r=Mr(r.r),r.g=Mr(r.g),r.b=Mr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vi?ua:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[la]:{primaries:e,whitePoint:i,transfer:ua,toXYZ:Ul,fromXYZ:Fl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:Ul,fromXYZ:Fl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),n}const He=nv();function ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let er;class iv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{er===void 0&&(er=fa("canvas")),er.width=e.width,er.height=e.height;const r=er.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=er}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ni(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ni(t[i]/255)*255):t[i]=ni(t[i]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rv=0;class Nc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push($a(r[a].image)):s.push($a(r[a]))}else s=$a(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function $a(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?iv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let sv=0;const Za=new F;class Qt extends Ki{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,i=ei,r=ei,s=Xt,a=zi,o=Cn,c=gn,l=Qt.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=fs(),this.name="",this.source=new Nc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Za).x}get height(){return this.source.getSize(Za).y}get depth(){return this.source.getSize(Za).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Co:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Co:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=xd;Qt.DEFAULT_ANISOTROPY=1;class ct{static{ct.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],h=c[5],_=c[9],S=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+S)<.1&&Math.abs(_+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,M=(h+1)/2,y=(p+1)/2,b=(u+d)/4,R=(f+S)/4,v=(_+m)/4;return A>M&&A>y?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=b/i,s=R/i):M>y?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=v/r):y<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),i=R/s,r=v/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-_)*(m-_)+(f-S)*(f-S)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(f-S)/w,this.z=(d-u)/w,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class av extends Ki{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Qt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Nc(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends av{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Rd extends Qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ov extends Qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class it{static{it.prototype.isMatrix4=!0}constructor(e,t,i,r,s,a,o,c,l,u,f,d,h,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,f,d,h,_,S,m)}set(e,t,i,r,s,a,o,c,l,u,f,d,h,_,S,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=_,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/tr.setFromMatrixColumn(e,0).length(),s=1/tr.setFromMatrixColumn(e,1).length(),a=1/tr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,_=o*u,S=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=h+_*l,t[5]=d-S*l,t[9]=-o*c,t[2]=S-d*l,t[6]=_+h*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,h=c*f,_=l*u,S=l*f;t[0]=d+S*o,t[4]=_*o-h,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-_,t[6]=S+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,h=c*f,_=l*u,S=l*f;t[0]=d-S*o,t[4]=-a*f,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*u,t[9]=S-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,h=a*f,_=o*u,S=o*f;t[0]=c*u,t[4]=_*l-h,t[8]=d*l+S,t[1]=c*f,t[5]=S*l+d,t[9]=h*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,h=a*l,_=o*c,S=o*l;t[0]=c*u,t[4]=S-d*f,t[8]=_*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=h*f+_,t[10]=d-S*f}else if(e.order==="XZY"){const d=a*c,h=a*l,_=o*c,S=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+S,t[5]=a*u,t[9]=h*f-_,t[2]=_*f-h,t[6]=o*u,t[10]=S*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cv,e,lv)}lookAt(e,t,i){const r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),ui.crossVectors(i,cn),ui.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),ui.crossVectors(i,cn)),ui.normalize(),Es.crossVectors(cn,ui),r[0]=ui.x,r[4]=Es.x,r[8]=cn.x,r[1]=ui.y,r[5]=Es.y,r[9]=cn.y,r[2]=ui.z,r[6]=Es.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],h=i[13],_=i[2],S=i[6],m=i[10],p=i[14],w=i[3],A=i[7],M=i[11],y=i[15],b=r[0],R=r[4],v=r[8],T=r[12],I=r[1],N=r[5],B=r[9],H=r[13],D=r[2],k=r[6],Y=r[10],W=r[14],ie=r[3],$=r[7],ee=r[11],ne=r[15];return s[0]=a*b+o*I+c*D+l*ie,s[4]=a*R+o*N+c*k+l*$,s[8]=a*v+o*B+c*Y+l*ee,s[12]=a*T+o*H+c*W+l*ne,s[1]=u*b+f*I+d*D+h*ie,s[5]=u*R+f*N+d*k+h*$,s[9]=u*v+f*B+d*Y+h*ee,s[13]=u*T+f*H+d*W+h*ne,s[2]=_*b+S*I+m*D+p*ie,s[6]=_*R+S*N+m*k+p*$,s[10]=_*v+S*B+m*Y+p*ee,s[14]=_*T+S*H+m*W+p*ne,s[3]=w*b+A*I+M*D+y*ie,s[7]=w*R+A*N+M*k+y*$,s[11]=w*v+A*B+M*Y+y*ee,s[15]=w*T+A*H+M*W+y*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],h=e[14],_=e[3],S=e[7],m=e[11],p=e[15],w=c*h-l*d,A=o*h-l*f,M=o*d-c*f,y=a*h-l*u,b=a*d-c*u,R=a*f-o*u;return t*(S*w-m*A+p*M)-i*(_*w-m*y+p*b)+r*(_*A-S*y+p*R)-s*(_*M-S*b+m*R)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-i*(s*u-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],h=e[11],_=e[12],S=e[13],m=e[14],p=e[15],w=t*o-i*a,A=t*c-r*a,M=t*l-s*a,y=i*c-r*o,b=i*l-s*o,R=r*l-s*c,v=u*S-f*_,T=u*m-d*_,I=u*p-h*_,N=f*m-d*S,B=f*p-h*S,H=d*p-h*m,D=w*H-A*B+M*N+y*I-b*T+R*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/D;return e[0]=(o*H-c*B+l*N)*k,e[1]=(r*B-i*H-s*N)*k,e[2]=(S*R-m*b+p*y)*k,e[3]=(d*b-f*R-h*y)*k,e[4]=(c*I-a*H-l*T)*k,e[5]=(t*H-r*I+s*T)*k,e[6]=(m*M-_*R-p*A)*k,e[7]=(u*R-d*M+h*A)*k,e[8]=(a*B-o*I+l*v)*k,e[9]=(i*I-t*B-s*v)*k,e[10]=(_*b-S*M+p*w)*k,e[11]=(f*M-u*b-h*w)*k,e[12]=(o*T-a*N-c*v)*k,e[13]=(t*N-i*T+r*v)*k,e[14]=(S*A-_*y-m*w)*k,e[15]=(u*y-f*A+d*w)*k,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,d=s*l,h=s*u,_=s*f,S=a*u,m=a*f,p=o*f,w=c*l,A=c*u,M=c*f,y=i.x,b=i.y,R=i.z;return r[0]=(1-(S+p))*y,r[1]=(h+M)*y,r[2]=(_-A)*y,r[3]=0,r[4]=(h-M)*b,r[5]=(1-(d+p))*b,r[6]=(m+w)*b,r[7]=0,r[8]=(_+A)*R,r[9]=(m-w)*R,r[10]=(1-(d+S))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=tr.set(r[0],r[1],r[2]).length();const o=tr.set(r[4],r[5],r[6]).length(),c=tr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Mn.copy(this);const l=1/a,u=1/o,f=1/c;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,t.setFromRotationMatrix(Mn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,r,s,a,o=kn,c=!1){const l=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let _,S;if(c)_=s/(a-s),S=a*s/(a-s);else if(o===kn)_=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===da)_=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=kn,c=!1){const l=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),h=-(i+r)/(i-r);let _,S;if(c)_=1/(a-s),S=a/(a-s);else if(o===kn)_=-2/(a-s),S=-(a+s)/(a-s);else if(o===da)_=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const tr=new F,Mn=new it,cv=new F(0,0,0),lv=new F(1,1,1),ui=new F,Es=new F,cn=new F,Ol=new it,zl=new Dr;class qi{constructor(e=0,t=0,i=0,r=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ol.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ol,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zl.setFromEuler(this),this.setFromQuaternion(zl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class Cd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uv=0;const Bl=new F,nr=new Dr,$n=new it,ws=new F,zr=new F,dv=new F,fv=new Dr,kl=new F(1,0,0),Gl=new F(0,1,0),Vl=new F(0,0,1),Hl={type:"added"},hv={type:"removed"},ir={type:"childadded",child:null},qa={type:"childremoved",child:null};class jt extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new F,t=new qi,i=new Dr,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new De}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(kl,e)}rotateY(e){return this.rotateOnAxis(Gl,e)}rotateZ(e){return this.rotateOnAxis(Vl,e)}translateOnAxis(e,t){return Bl.copy(e).applyQuaternion(this.quaternion),this.position.add(Bl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kl,e)}translateY(e){return this.translateOnAxis(Gl,e)}translateZ(e){return this.translateOnAxis(Vl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ws.copy(e):ws.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(zr,ws,this.up):$n.lookAt(ws,zr,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),nr.setFromRotationMatrix($n),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hl),ir.child=e,this.dispatchEvent(ir),ir.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hv),qa.child=e,this.dispatchEvent(qa),qa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hl),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,dv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,fv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}jt.DEFAULT_UP=new F(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jr extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pv={type:"move"};class Ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,i),p=this._getHandJoint(l,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,_=.005;l.inputState.pinching&&d>h+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=h-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pv)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Jr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function Ja(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=He.workingColorSpace){return this.r=e,this.g=t,this.b=i,He.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=He.workingColorSpace){if(e=tv(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ja(a,s,e+1/3),this.g=Ja(a,s,e),this.b=Ja(a,s,e-1/3)}return He.colorSpaceToWorking(this,r),this}setStyle(e,t=pn){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const i=Pd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return He.workingToColorSpace(Vt.copy(this),e),Math.round(We(Vt.r*255,0,255))*65536+Math.round(We(Vt.g*255,0,255))*256+Math.round(We(Vt.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(Vt.copy(this),t);const i=Vt.r,r=Vt.g,s=Vt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=pn){He.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,i=Vt.g,r=Vt.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(Ts);const i=Ha(di.h,Ts.h,t),r=Ha(di.s,Ts.s,t),s=Ha(di.l,Ts.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Ze;Ze.NAMES=Pd;class mv extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const yn=new F,Zn=new F,Ka=new F,qn=new F,rr=new F,sr=new F,Wl=new F,Qa=new F,ja=new F,eo=new F,to=new ct,no=new ct,io=new ct;class Rn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),yn.subVectors(e,t),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){yn.subVectors(r,t),Zn.subVectors(i,t),Ka.subVectors(e,t);const a=yn.dot(yn),o=yn.dot(Zn),c=yn.dot(Ka),l=Zn.dot(Zn),u=Zn.dot(Ka),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(l*c-o*u)*d,_=(a*u-o*c)*d;return s.set(1-h-_,_,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,qn.x),c.addScaledVector(a,qn.y),c.addScaledVector(o,qn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return to.setScalar(0),no.setScalar(0),io.setScalar(0),to.fromBufferAttribute(e,t),no.fromBufferAttribute(e,i),io.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(to,s.x),a.addScaledVector(no,s.y),a.addScaledVector(io,s.z),a}static isFrontFacing(e,t,i,r){return yn.subVectors(i,t),Zn.subVectors(e,t),yn.cross(Zn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),yn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Rn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;rr.subVectors(r,i),sr.subVectors(s,i),Qa.subVectors(e,i);const c=rr.dot(Qa),l=sr.dot(Qa);if(c<=0&&l<=0)return t.copy(i);ja.subVectors(e,r);const u=rr.dot(ja),f=sr.dot(ja);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(rr,a);eo.subVectors(e,s);const h=rr.dot(eo),_=sr.dot(eo);if(_>=0&&h<=_)return t.copy(s);const S=h*l-c*_;if(S<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(i).addScaledVector(sr,o);const m=u*_-h*f;if(m<=0&&f-u>=0&&h-_>=0)return Wl.subVectors(s,r),o=(f-u)/(f-u+(h-_)),t.copy(r).addScaledVector(Wl,o);const p=1/(m+S+d);return a=S*p,o=d*p,t.copy(i).addScaledVector(rr,a).addScaledVector(sr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Nr{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bn):bn.fromBufferAttribute(s,a),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),As.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),As.copy(i.boundingBox)),As.applyMatrix4(e.matrixWorld),this.union(As)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),Rs.subVectors(this.max,Br),ar.subVectors(e.a,Br),or.subVectors(e.b,Br),cr.subVectors(e.c,Br),fi.subVectors(or,ar),hi.subVectors(cr,or),Ci.subVectors(ar,cr);let t=[0,-fi.z,fi.y,0,-hi.z,hi.y,0,-Ci.z,Ci.y,fi.z,0,-fi.x,hi.z,0,-hi.x,Ci.z,0,-Ci.x,-fi.y,fi.x,0,-hi.y,hi.x,0,-Ci.y,Ci.x,0];return!ro(t,ar,or,cr,Rs)||(t=[1,0,0,0,1,0,0,0,1],!ro(t,ar,or,cr,Rs))?!1:(Cs.crossVectors(fi,hi),t=[Cs.x,Cs.y,Cs.z],ro(t,ar,or,cr,Rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yn=[new F,new F,new F,new F,new F,new F,new F,new F],bn=new F,As=new Nr,ar=new F,or=new F,cr=new F,fi=new F,hi=new F,Ci=new F,Br=new F,Rs=new F,Cs=new F,Pi=new F;function ro(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Pi.fromArray(n,s);const o=r.x*Math.abs(Pi.x)+r.y*Math.abs(Pi.y)+r.z*Math.abs(Pi.z),c=e.dot(Pi),l=t.dot(Pi),u=i.dot(Pi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const At=new F,Ps=new Ke;let gv=0;class In extends Ki{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=J_,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ps.fromBufferAttribute(this,t),Ps.applyMatrix3(e),this.setXY(t,Ps.x,Ps.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Or(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Or(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Or(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Or(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Id extends In{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Uc extends In{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Wt extends In{constructor(e,t,i){super(new Float32Array(e),t,i)}}const _v=new Nr,kr=new F,so=new F;class hs{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_v.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);const t=kr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(kr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(so.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(so)),this.expandByPoint(kr.copy(e.center).sub(so))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let vv=0;const hn=new it,ao=new jt,lr=new F,ln=new Nr,Gr=new Nr,Nt=new F;class Kt extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(K_(e)?Uc:Id)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new De().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,i){return hn.makeTranslation(e,t,i),this.applyMatrix4(hn),this}scale(e,t,i){return hn.makeScale(e,t,i),this.applyMatrix4(hn),this}lookAt(e){return ao.lookAt(e),ao.updateMatrix(),this.applyMatrix4(ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Wt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Gr.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(ln.min,Gr.min),ln.expandByPoint(Nt),Nt.addVectors(ln.max,Gr.max),ln.expandByPoint(Nt)):(ln.expandByPoint(Gr.min),ln.expandByPoint(Gr.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Nt.fromBufferAttribute(o,l),c&&(lr.fromBufferAttribute(e,l),Nt.add(lr)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new In(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let v=0;v<i.count;v++)o[v]=new F,c[v]=new F;const l=new F,u=new F,f=new F,d=new Ke,h=new Ke,_=new Ke,S=new F,m=new F;function p(v,T,I){l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,I),d.fromBufferAttribute(s,v),h.fromBufferAttribute(s,T),_.fromBufferAttribute(s,I),u.sub(l),f.sub(l),h.sub(d),_.sub(d);const N=1/(h.x*_.y-_.x*h.y);isFinite(N)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(f,-h.y).multiplyScalar(N),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(N),o[v].add(S),o[T].add(S),o[I].add(S),c[v].add(m),c[T].add(m),c[I].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let v=0,T=w.length;v<T;++v){const I=w[v],N=I.start,B=I.count;for(let H=N,D=N+B;H<D;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const A=new F,M=new F,y=new F,b=new F;function R(v){y.fromBufferAttribute(r,v),b.copy(y);const T=o[v];A.copy(T),A.sub(y.multiplyScalar(y.dot(T))).normalize(),M.crossVectors(b,T);const N=M.dot(c[v])<0?-1:1;a.setXYZW(v,A.x,A.y,A.z,N)}for(let v=0,T=w.length;v<T;++v){const I=w[v],N=I.start,B=I.count;for(let H=N,D=N+B;H<D;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,a=new F,o=new F,c=new F,l=new F,u=new F,f=new F;if(e)for(let d=0,h=e.count;d<h;d+=3){const _=e.getX(d+0),S=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let h=0,_=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?h=c[S]*o.data.stride+o.offset:h=c[S]*u;for(let p=0;p<u;p++)d[_++]=l[h++]}return new In(d,u,f)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],h=e(d,i);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const h=l[f];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oo=new F,xv=new F,Sv=new De;class gi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=oo.subVectors(i,t).cross(xv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(oo),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Sv.getNormalMatrix(e),r=this.coplanarPoint(oo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Mv=0;class Ur extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=ts,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ld,this.blendDst=ud,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=H_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ga,this.stencilZFail=Ga,this.stencilZPass=Ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new gi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ke().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Jn=new F,co=new F,Is=new F,Ls=new F;class Fc{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){co.copy(e).add(t).multiplyScalar(.5),Is.copy(t).sub(e).normalize(),Ls.copy(this.origin).sub(co);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Is),o=Ls.dot(this.direction),c=-Ls.dot(Is),l=Ls.lengthSq(),u=Math.abs(1-a*a);let f,d,h,_;if(u>0)if(f=a*c-o,d=a*o-c,_=s*u,f>=0)if(d>=-_)if(d<=_){const S=1/u;f*=S,d*=S,h=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l):d<=_?(f=0,d=Math.min(Math.max(-s,-c),s),h=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(co).addScaledVector(Is,d),h}intersectSphere(e,t){if(e.radius<0)return null;Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,f=e.x-a.x,d=e.y-a.y,h=e.z-a.z,_=t.x-a.x,S=t.y-a.y,m=t.z-a.z,p=i.x-a.x,w=i.y-a.y,A=i.z-a.z,M=Math.abs(c),y=Math.abs(l),b=Math.abs(u);let R,v,T,I,N,B,H,D,k,Y,W,ie;if(M>=y&&M>=b?(T=c,B=f,k=_,ie=p,c>=0?(R=l,v=u,I=d,N=h,H=S,D=m,Y=w,W=A):(R=u,v=l,I=h,N=d,H=m,D=S,Y=A,W=w)):y>=b?(T=l,B=d,k=S,ie=w,l>=0?(R=u,v=c,I=h,N=f,H=m,D=_,Y=A,W=p):(R=c,v=u,I=f,N=h,H=_,D=m,Y=p,W=A)):(T=u,B=h,k=m,ie=A,u>=0?(R=c,v=l,I=f,N=d,H=_,D=S,Y=p,W=w):(R=l,v=c,I=d,N=f,H=S,D=_,Y=w,W=p)),T===0)return null;const $=R/T,ee=v/T,ne=1/T,Ce=I-$*B,Ae=N-ee*B,lt=H-$*k,Xe=D-ee*k,Qe=Y-$*ie,Z=W-ee*ie,j=Qe*Xe-Z*lt,ve=Ce*Z-Ae*Qe,Le=lt*Ae-Xe*Ce;if(r){if(j<0||ve<0||Le<0)return null}else if((j<0||ve<0||Le<0)&&(j>0||ve>0||Le>0))return null;const ge=j+ve+Le;if(ge===0)return null;const Be=ne*(j*B+ve*k+Le*ie);return(ge>0?Be<0:Be>0)?null:this.at(Be/ge,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oc extends Ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=dd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xl=new it,Ii=new Fc,Ds=new hs,$l=new F,Ns=new F,Us=new F,Fs=new F,lo=new F,Os=new F,Zl=new F,zs=new F;class nn extends jt{constructor(e=new Kt,t=new Oc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Os.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(lo.fromBufferAttribute(f,e),a?Os.addScaledVector(lo,u):Os.addScaledVector(lo.sub(t),u))}t.add(Os)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere),Ds.applyMatrix4(s),Ii.copy(e.ray).recast(e.near),!(Ds.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Ds,$l)===null||Ii.origin.distanceToSquared($l)>(e.far-e.near)**2))&&(Xl.copy(s).invert(),Ii.copy(e.ray).applyMatrix4(Xl),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const m=d[_],p=a[m.materialIndex],w=Math.max(m.start,h.start),A=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let M=w,y=A;M<y;M+=3){const b=o.getX(M),R=o.getX(M+1),v=o.getX(M+2);r=Bs(this,p,e,i,l,u,f,b,R,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),S=Math.min(o.count,h.start+h.count);for(let m=_,p=S;m<p;m+=3){const w=o.getX(m),A=o.getX(m+1),M=o.getX(m+2);r=Bs(this,a,e,i,l,u,f,w,A,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const m=d[_],p=a[m.materialIndex],w=Math.max(m.start,h.start),A=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let M=w,y=A;M<y;M+=3){const b=M,R=M+1,v=M+2;r=Bs(this,p,e,i,l,u,f,b,R,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),S=Math.min(c.count,h.start+h.count);for(let m=_,p=S;m<p;m+=3){const w=m,A=m+1,M=m+2;r=Bs(this,a,e,i,l,u,f,w,A,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function yv(n,e,t,i,r,s,a,o){let c;if(e.side===sn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Xi,o),c===null)return null;zs.copy(o),zs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(zs);return l<t.near||l>t.far?null:{distance:l,point:zs.clone(),object:n}}function Bs(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Ns),n.getVertexPosition(c,Us),n.getVertexPosition(l,Fs);const u=yv(n,e,t,i,Ns,Us,Fs,Zl);if(u){const f=new F;Rn.getBarycoord(Zl,Ns,Us,Fs,f),r&&(u.uv=Rn.getInterpolatedAttribute(r,o,c,l,f,new Ke)),s&&(u.uv1=Rn.getInterpolatedAttribute(s,o,c,l,f,new Ke)),a&&(u.normal=Rn.getInterpolatedAttribute(a,o,c,l,f,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new F,materialIndex:0};Rn.getNormal(Ns,Us,Fs,d.normal),u.face=d,u.barycoord=f}return u}class bv extends Qt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=zt,u=zt,f,d){super(null,a,o,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Li=new hs,Ev=new Ke(.5,.5),ks=new F;class Ld{constructor(e=new gi,t=new gi,i=new gi,r=new gi,s=new gi,a=new gi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=kn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],d=s[6],h=s[7],_=s[8],S=s[9],m=s[10],p=s[11],w=s[12],A=s[13],M=s[14],y=s[15];if(r[0].setComponents(l-a,h-u,p-_,y-w).normalize(),r[1].setComponents(l+a,h+u,p+_,y+w).normalize(),r[2].setComponents(l+o,h+f,p+S,y+A).normalize(),r[3].setComponents(l-o,h-f,p-S,y-A).normalize(),i)r[4].setComponents(c,d,m,M).normalize(),r[5].setComponents(l-c,h-d,p-m,y-M).normalize();else if(r[4].setComponents(l-c,h-d,p-m,y-M).normalize(),t===kn)r[5].setComponents(l+c,h+d,p+m,y+M).normalize();else if(t===da)r[5].setComponents(c,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){Li.center.set(0,0,0);const t=Ev.distanceTo(e.center);return Li.radius=.7071067811865476+t,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ks.x=r.normal.x>0?e.max.x:e.min.x,ks.y=r.normal.y>0?e.max.y:e.min.y,ks.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wv extends Ur{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ha=new F,pa=new F,ql=new it,Vr=new Fc,Gs=new hs,uo=new F,Yl=new F;class Tv extends jt{constructor(e=new Kt,t=new wv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ha.fromBufferAttribute(t,r-1),pa.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ha.distanceTo(pa);e.setAttribute("lineDistance",new Wt(i,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere),Gs.applyMatrix4(r),Gs.radius+=s,e.ray.intersectsSphere(Gs)===!1)return;ql.copy(r).invert(),Vr.copy(e.ray).applyMatrix4(ql);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let S=h,m=_-1;S<m;S+=l){const p=u.getX(S),w=u.getX(S+1),A=Vs(this,e,Vr,c,p,w,S);A&&t.push(A)}if(this.isLineLoop){const S=u.getX(_-1),m=u.getX(h),p=Vs(this,e,Vr,c,S,m,_-1);p&&t.push(p)}}else{const h=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let S=h,m=_-1;S<m;S+=l){const p=Vs(this,e,Vr,c,S,S+1,S);p&&t.push(p)}if(this.isLineLoop){const S=Vs(this,e,Vr,c,_-1,h,_-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Vs(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(ha.fromBufferAttribute(o,r),pa.fromBufferAttribute(o,s),t.distanceSqToSegment(ha,pa,uo,Yl)>i)return;uo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(uo);if(!(l<e.near||l>e.far))return{distance:l,point:Yl.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class Av extends Ur{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jl=new it,cc=new Fc,Hs=new hs,Ws=new F;class fo extends jt{constructor(e=new Kt,t=new Av){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hs.copy(i.boundingSphere),Hs.applyMatrix4(r),Hs.radius+=s,e.ray.intersectsSphere(Hs)===!1)return;Jl.copy(r).invert(),cc.copy(e.ray).applyMatrix4(Jl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,f=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),h=Math.min(l.count,a.start+a.count);for(let _=d,S=h;_<S;_++){const m=l.getX(_);Ws.fromBufferAttribute(f,m),Kl(Ws,m,c,r,e,t,this)}}else{const d=Math.max(0,a.start),h=Math.min(f.count,a.start+a.count);for(let _=d,S=h;_<S;_++)Ws.fromBufferAttribute(f,_),Kl(Ws,_,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Kl(n,e,t,i,r,s,a){const o=cc.distanceSqToPoint(n);if(o<t){const c=new F;cc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Dd extends Qt{constructor(e=[],t=$i,i,r,s,a,o,c,l,u){super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cs extends Qt{constructor(e,t,i=Wn,r,s,a,o=zt,c=zt,l,u=si,f=1){if(u!==si&&u!==Bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Rv extends cs{constructor(e,t=Wn,i=$i,r,s,a=zt,o=zt,c,l=si){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Nd extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ps extends Kt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,h=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(f,2));function _(S,m,p,w,A,M,y,b,R,v,T){const I=M/R,N=y/v,B=M/2,H=y/2,D=b/2,k=R+1,Y=v+1;let W=0,ie=0;const $=new F;for(let ee=0;ee<Y;ee++){const ne=ee*N-H;for(let Ce=0;Ce<k;Ce++){const Ae=Ce*I-B;$[S]=Ae*w,$[m]=ne*A,$[p]=D,l.push($.x,$.y,$.z),$[S]=0,$[m]=0,$[p]=b>0?1:-1,u.push($.x,$.y,$.z),f.push(Ce/R),f.push(1-ee/v),W+=1}}for(let ee=0;ee<v;ee++)for(let ne=0;ne<R;ne++){const Ce=d+ne+k*ee,Ae=d+ne+k*(ee+1),lt=d+(ne+1)+k*(ee+1),Xe=d+(ne+1)+k*ee;c.push(Ce,Ae,Xe),c.push(Ae,lt,Xe),ie+=6}o.addGroup(h,ie,T),h+=ie,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wa extends Kt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=e/o,d=t/c,h=[],_=[],S=[],m=[];for(let p=0;p<u;p++){const w=p*d-a;for(let A=0;A<l;A++){const M=A*f-s;_.push(M,-w,0),S.push(0,0,1),m.push(A/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<o;w++){const A=w+l*p,M=w+l*(p+1),y=w+1+l*(p+1),b=w+1+l*p;h.push(A,M,b),h.push(M,y,b)}this.setIndex(h),this.setAttribute("position",new Wt(_,3)),this.setAttribute("normal",new Wt(S,3)),this.setAttribute("uv",new Wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.widthSegments,e.heightSegments)}}function Pr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Ql(r))r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Ql(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=Pr(n[t]);for(const r in i)e[r]=i[r]}return e}function Ql(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Cv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ud(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}const Pv={clone:Pr,merge:qt};var Iv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends Ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iv,this.fragmentShader=Lv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=Cv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Ze().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ke().fromArray(r.value);break;case"v3":this.uniforms[i].value=new F().fromArray(r.value);break;case"v4":this.uniforms[i].value=new ct().fromArray(r.value);break;case"m3":this.uniforms[i].value=new De().fromArray(r.value);break;case"m4":this.uniforms[i].value=new it().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Dv extends rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Nv extends Ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=G_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Uv extends Ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xs=new F,$s=new Dr,Fn=new F;class zc extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xs,$s,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xs,$s,Fn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Xs,$s,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xs,$s,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pi=new F,jl=new Ke,eu=new Ke;class An extends zc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oc*2*Math.atan(Math.tan(Va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,jl,eu),t.subVectors(eu,jl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Va*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Fd extends zc{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ur=-90,dr=1;class Fv extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(ur,dr,e,t);r.layers=this.layers,this.add(r);const s=new An(ur,dr,e,t);s.layers=this.layers,this.add(s);const a=new An(ur,dr,e,t);a.layers=this.layers,this.add(a);const o=new An(ur,dr,e,t);o.layers=this.layers,this.add(o);const c=new An(ur,dr,e,t);c.layers=this.layers,this.add(c);const l=new An(ur,dr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===da)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ov extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Od{static{Od.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}}function tu(n,e,t,i){const r=zv(i);switch(t){case Ed:return n*e;case Td:return n*e/r.components*r.byteLength;case Cc:return n*e/r.components*r.byteLength;case Zi:return n*e*2/r.components*r.byteLength;case Pc:return n*e*2/r.components*r.byteLength;case wd:return n*e*3/r.components*r.byteLength;case Cn:return n*e*4/r.components*r.byteLength;case Ic:return n*e*4/r.components*r.byteLength;case Ks:case Qs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case js:case ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lo:case No:return Math.max(n,16)*Math.max(e,8)/4;case Io:case Do:return Math.max(n,8)*Math.max(e,8)/2;case Uo:case Fo:case zo:case Bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oo:case oa:case ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case $o:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case qo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Yo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Qo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case jo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ec:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case tc:case nc:case ic:return Math.ceil(n/4)*Math.ceil(e/4)*16;case rc:case sc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ca:case ac:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zv(n){switch(n){case gn:case Sd:return{byteLength:1,components:1};case as:case Md:case Xn:return{byteLength:2,components:1};case Ac:case Rc:return{byteLength:2,components:4};case Wn:case Tc:case Bn:return{byteLength:4,components:1};case yd:case bd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wc}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wc);function zd(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Bv(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,u);else{f.sort((h,_)=>h.start-_.start);let d=0;for(let h=1;h<f.length;h++){const _=f[d],S=f[h];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++d,f[d]=S)}f.length=d+1;for(let h=0,_=f.length;h<_;h++){const S=f[h];n.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var kv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gv=`#ifdef USE_ALPHAHASH
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
#endif`,Vv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$v=`#ifdef USE_AOMAP
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
#endif`,Zv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qv=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Yv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jv=`#ifdef USE_IRIDESCENCE
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
#endif`,e0=`#ifdef USE_BUMPMAP
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
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,o0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,c0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,l0=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,u0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,d0=`vec3 transformedNormal = objectNormal;
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
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g0="gl_FragColor = linearToOutputTexel( gl_FragColor );",_0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,b0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A0=`#ifdef USE_GRADIENTMAP
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
}`,R0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I0=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,L0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,D0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,z0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,B0=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,k0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,G0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,H0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J0=`#if defined( USE_POINTS_UV )
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
#endif`,K0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nx=`#ifdef USE_MORPHTARGETS
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
#endif`,ix=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,lx=`#ifdef USE_NORMALMAP
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
#endif`,ux=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,px=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,wx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ax=`#ifdef USE_SKINNING
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
#endif`,Rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cx=`#ifdef USE_SKINNING
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
#endif`,Px=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nx=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ux=`#ifdef USE_TRANSMISSION
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
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gx=`uniform sampler2D t2D;
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
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$x=`#include <common>
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
}`,Zx=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qx=`#define DISTANCE
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
}`,Yx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`uniform float scale;
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
}`,jx=`uniform vec3 diffuse;
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
}`,eS=`#include <common>
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
}`,tS=`uniform vec3 diffuse;
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
}`,nS=`#define LAMBERT
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
}`,iS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,rS=`#define MATCAP
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
}`,sS=`#define MATCAP
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
}`,aS=`#define NORMAL
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
}`,oS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cS=`#define PHONG
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
}`,lS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,uS=`#define STANDARD
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
}`,dS=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,fS=`#define TOON
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
}`,hS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,pS=`uniform float size;
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
}`,mS=`uniform vec3 diffuse;
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
}`,gS=`#include <common>
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
}`,_S=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,vS=`uniform float rotation;
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
}`,xS=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:kv,alphahash_pars_fragment:Gv,alphamap_fragment:Vv,alphamap_pars_fragment:Hv,alphatest_fragment:Wv,alphatest_pars_fragment:Xv,aomap_fragment:$v,aomap_pars_fragment:Zv,batching_pars_vertex:qv,batching_vertex:Yv,begin_vertex:Jv,beginnormal_vertex:Kv,bsdfs:Qv,iridescence_fragment:jv,bumpmap_pars_fragment:e0,clipping_planes_fragment:t0,clipping_planes_pars_fragment:n0,clipping_planes_pars_vertex:i0,clipping_planes_vertex:r0,color_fragment:s0,color_pars_fragment:a0,color_pars_vertex:o0,color_vertex:c0,common:l0,cube_uv_reflection_fragment:u0,defaultnormal_vertex:d0,displacementmap_pars_vertex:f0,displacementmap_vertex:h0,emissivemap_fragment:p0,emissivemap_pars_fragment:m0,colorspace_fragment:g0,colorspace_pars_fragment:_0,envmap_fragment:v0,envmap_common_pars_fragment:x0,envmap_pars_fragment:S0,envmap_pars_vertex:M0,envmap_physical_pars_fragment:L0,envmap_vertex:y0,fog_vertex:b0,fog_pars_vertex:E0,fog_fragment:w0,fog_pars_fragment:T0,gradientmap_pars_fragment:A0,lightmap_pars_fragment:R0,lights_lambert_fragment:C0,lights_lambert_pars_fragment:P0,lights_pars_begin:I0,lights_toon_fragment:D0,lights_toon_pars_fragment:N0,lights_phong_fragment:U0,lights_phong_pars_fragment:F0,lights_physical_fragment:O0,lights_physical_pars_fragment:z0,lights_fragment_begin:B0,lights_fragment_maps:k0,lights_fragment_end:G0,lightprobes_pars_fragment:V0,logdepthbuf_fragment:H0,logdepthbuf_pars_fragment:W0,logdepthbuf_pars_vertex:X0,logdepthbuf_vertex:$0,map_fragment:Z0,map_pars_fragment:q0,map_particle_fragment:Y0,map_particle_pars_fragment:J0,metalnessmap_fragment:K0,metalnessmap_pars_fragment:Q0,morphinstance_vertex:j0,morphcolor_vertex:ex,morphnormal_vertex:tx,morphtarget_pars_vertex:nx,morphtarget_vertex:ix,normal_fragment_begin:rx,normal_fragment_maps:sx,normal_pars_fragment:ax,normal_pars_vertex:ox,normal_vertex:cx,normalmap_pars_fragment:lx,clearcoat_normal_fragment_begin:ux,clearcoat_normal_fragment_maps:dx,clearcoat_pars_fragment:fx,iridescence_pars_fragment:hx,opaque_fragment:px,packing:mx,premultiplied_alpha_fragment:gx,project_vertex:_x,dithering_fragment:vx,dithering_pars_fragment:xx,roughnessmap_fragment:Sx,roughnessmap_pars_fragment:Mx,shadowmap_pars_fragment:yx,shadowmap_pars_vertex:bx,shadowmap_vertex:Ex,shadowmask_pars_fragment:wx,skinbase_vertex:Tx,skinning_pars_vertex:Ax,skinning_vertex:Rx,skinnormal_vertex:Cx,specularmap_fragment:Px,specularmap_pars_fragment:Ix,tonemapping_fragment:Lx,tonemapping_pars_fragment:Dx,transmission_fragment:Nx,transmission_pars_fragment:Ux,uv_pars_fragment:Fx,uv_pars_vertex:Ox,uv_vertex:zx,worldpos_vertex:Bx,background_vert:kx,background_frag:Gx,backgroundCube_vert:Vx,backgroundCube_frag:Hx,cube_vert:Wx,cube_frag:Xx,depth_vert:$x,depth_frag:Zx,distance_vert:qx,distance_frag:Yx,equirect_vert:Jx,equirect_frag:Kx,linedashed_vert:Qx,linedashed_frag:jx,meshbasic_vert:eS,meshbasic_frag:tS,meshlambert_vert:nS,meshlambert_frag:iS,meshmatcap_vert:rS,meshmatcap_frag:sS,meshnormal_vert:aS,meshnormal_frag:oS,meshphong_vert:cS,meshphong_frag:lS,meshphysical_vert:uS,meshphysical_frag:dS,meshtoon_vert:fS,meshtoon_frag:hS,points_vert:pS,points_frag:mS,shadow_vert:gS,shadow_frag:_S,sprite_vert:vS,sprite_frag:xS},de={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},zn={basic:{uniforms:qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:qt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:qt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:qt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:qt([de.points,de.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:qt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:qt([de.common,de.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:qt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:qt([de.sprite,de.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:qt([de.common,de.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:qt([de.lights,de.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};zn.physical={uniforms:qt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Zs={r:0,b:0,g:0},SS=new it,Bd=new De;Bd.set(-1,0,0,0,1,0,0,0,1);function MS(n,e,t,i,r,s){const a=new Ze(0);let o=r===!0?0:1,c,l,u=null,f=0,d=null;function h(w){let A=w.isScene===!0?w.background:null;if(A&&A.isTexture){const M=w.backgroundBlurriness>0;A=e.get(A,M)}return A}function _(w){let A=!1;const M=h(w);M===null?m(a,o):M&&M.isColor&&(m(M,1),A=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(w,A){const M=h(A);M&&(M.isCubeTexture||M.mapping===Ea)?(l===void 0&&(l=new nn(new ps(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Pr(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(SS.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Bd),l.material.toneMapped=He.getTransfer(M.colorSpace)!==nt,(u!==M||f!==M.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,d=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new nn(new wa(2,2),new rn({name:"BackgroundMaterial",uniforms:Pr(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=He.getTransfer(M.colorSpace)!==nt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,A){w.getRGB(Zs,Ud(n)),t.buffers.color.setClear(Zs.r,Zs.g,Zs.b,A,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,A=1){a.set(w),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:_,addToRenderList:S,dispose:p}}function yS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(N,B,H,D,k){let Y=!1;const W=f(N,D,H,B);s!==W&&(s=W,l(s.object)),Y=h(N,D,H,k),Y&&_(N,D,H,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(N,B,H,D),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return n.createVertexArray()}function l(N){return n.bindVertexArray(N)}function u(N){return n.deleteVertexArray(N)}function f(N,B,H,D){const k=D.wireframe===!0;let Y=i[B.id];Y===void 0&&(Y={},i[B.id]=Y);const W=N.isInstancedMesh===!0?N.id:0;let ie=Y[W];ie===void 0&&(ie={},Y[W]=ie);let $=ie[H.id];$===void 0&&($={},ie[H.id]=$);let ee=$[k];return ee===void 0&&(ee=d(c()),$[k]=ee),ee}function d(N){const B=[],H=[],D=[];for(let k=0;k<t;k++)B[k]=0,H[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:H,attributeDivisors:D,object:N,attributes:{},index:null}}function h(N,B,H,D){const k=s.attributes,Y=B.attributes;let W=0;const ie=H.getAttributes();for(const $ in ie)if(ie[$].location>=0){const ne=k[$];let Ce=Y[$];if(Ce===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(Ce=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(Ce=N.instanceColor)),ne===void 0||ne.attribute!==Ce||Ce&&ne.data!==Ce.data)return!0;W++}return s.attributesNum!==W||s.index!==D}function _(N,B,H,D){const k={},Y=B.attributes;let W=0;const ie=H.getAttributes();for(const $ in ie)if(ie[$].location>=0){let ne=Y[$];ne===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor));const Ce={};Ce.attribute=ne,ne&&ne.data&&(Ce.data=ne.data),k[$]=Ce,W++}s.attributes=k,s.attributesNum=W,s.index=D}function S(){const N=s.newAttributes;for(let B=0,H=N.length;B<H;B++)N[B]=0}function m(N){p(N,0)}function p(N,B){const H=s.newAttributes,D=s.enabledAttributes,k=s.attributeDivisors;H[N]=1,D[N]===0&&(n.enableVertexAttribArray(N),D[N]=1),k[N]!==B&&(n.vertexAttribDivisor(N,B),k[N]=B)}function w(){const N=s.newAttributes,B=s.enabledAttributes;for(let H=0,D=B.length;H<D;H++)B[H]!==N[H]&&(n.disableVertexAttribArray(H),B[H]=0)}function A(N,B,H,D,k,Y,W){W===!0?n.vertexAttribIPointer(N,B,H,k,Y):n.vertexAttribPointer(N,B,H,D,k,Y)}function M(N,B,H,D){S();const k=D.attributes,Y=H.getAttributes(),W=B.defaultAttributeValues;for(const ie in Y){const $=Y[ie];if($.location>=0){let ee=k[ie];if(ee===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor)),ee!==void 0){const ne=ee.normalized,Ce=ee.itemSize,Ae=e.get(ee);if(Ae===void 0)continue;const lt=Ae.buffer,Xe=Ae.type,Qe=Ae.bytesPerElement,Z=Xe===n.INT||Xe===n.UNSIGNED_INT||ee.gpuType===Tc;if(ee.isInterleavedBufferAttribute){const j=ee.data,ve=j.stride,Le=ee.offset;if(j.isInstancedInterleavedBuffer){for(let ge=0;ge<$.locationSize;ge++)p($.location+ge,j.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ge=0;ge<$.locationSize;ge++)m($.location+ge);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let ge=0;ge<$.locationSize;ge++)A($.location+ge,Ce/$.locationSize,Xe,ne,ve*Qe,(Le+Ce/$.locationSize*ge)*Qe,Z)}else{if(ee.isInstancedBufferAttribute){for(let j=0;j<$.locationSize;j++)p($.location+j,ee.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let j=0;j<$.locationSize;j++)m($.location+j);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let j=0;j<$.locationSize;j++)A($.location+j,Ce/$.locationSize,Xe,ne,Ce*Qe,Ce/$.locationSize*j*Qe,Z)}}else if(W!==void 0){const ne=W[ie];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv($.location,ne);break;case 3:n.vertexAttrib3fv($.location,ne);break;case 4:n.vertexAttrib4fv($.location,ne);break;default:n.vertexAttrib1fv($.location,ne)}}}}w()}function y(){T();for(const N in i){const B=i[N];for(const H in B){const D=B[H];for(const k in D){const Y=D[k];for(const W in Y)u(Y[W].object),delete Y[W];delete D[k]}}delete i[N]}}function b(N){if(i[N.id]===void 0)return;const B=i[N.id];for(const H in B){const D=B[H];for(const k in D){const Y=D[k];for(const W in Y)u(Y[W].object),delete Y[W];delete D[k]}}delete i[N.id]}function R(N){for(const B in i){const H=i[B];for(const D in H){const k=H[D];if(k[N.id]===void 0)continue;const Y=k[N.id];for(const W in Y)u(Y[W].object),delete Y[W];delete k[N.id]}}}function v(N){for(const B in i){const H=i[B],D=N.isInstancedMesh===!0?N.id:0,k=H[D];if(k!==void 0){for(const Y in k){const W=k[Y];for(const ie in W)u(W[ie].object),delete W[ie];delete k[Y]}delete H[D],Object.keys(H).length===0&&delete i[B]}}}function T(){I(),a=!0,s!==r&&(s=r,l(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:I,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:m,disableUnusedAttributes:w}}function bS(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let d=0;for(let h=0;h<u;h++)d+=l[h];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function ES(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Cn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const v=R===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==gn&&R!==Bn&&!v&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ie("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:M,maxSamples:y,samples:b}}function wS(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new gi,o=new De,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const _=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):l();else{const w=s?0:i,A=w*4;let M=p.clippingState||null;c.value=M,M=u(_,d,A,h);for(let y=0;y!==A;++y)M[y]=t[y];p.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,_){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=c.value,_!==!0||m===null){const p=h+S*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,M=h;A!==S;++A,M+=4)a.copy(f[A]).applyMatrix4(w,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const _r=4,TS=6,AS=20,RS=256,Hr=new Fd,nu=new Ze;let ho=null,po=0,mo=0,go=!1;const CS=new F,Di=new F;class iu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=CS}=s;ho=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ho,po,mo),this._renderer.xr.enabled=go,e.scissorTest=!1,fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$i||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ho=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Xn,format:Cn,colorSpace:la,depthBuffer:!1},r=ru(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ru(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=PS(s)),this._blurMaterial=LS(s,e,t),this._ggxMaterial=IS(s,e,t)}return r}_compileMaterial(e){const t=new nn(new Kt,e);this._renderer.compile(t,Hr)}_sceneToCubeUV(e,t,i,r,s){const c=new An(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(nu),f.toneMapping=Hn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nn(new ps,new Oc({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let p=!1;const w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,p=!0):(m.color.copy(nu),p=!0);for(let A=0;A<6;A++){const M=A%3;M===0?(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[A],s.y,s.z)):M===1?(c.up.set(0,0,l[A]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[A],s.z)):(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[A]));const y=this._cubeSize;fr(r,M*y,A>2?y:0,y,y),f.setRenderTarget(r),p&&f.render(S,c),f.render(e,c)}f.toneMapping=h,f.autoClear=d,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===$i||e.mapping===Cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=su());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;fr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Hr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),d=l*1.25,h=f*d,{_lodMax:_}=this,S=this._sizeLods[i],m=3*S*(i>_-_r?i-_+_r:0),p=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=_-t,fr(s,m,p,3*S,2*S),r.setRenderTarget(s),r.render(o,Hr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=_-i,fr(e,m,p,3*S,2*S),r.setRenderTarget(e),r.render(o,Hr)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,t,i,r,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],f=3*u*(r>this._lodMax-_r?r-this._lodMax+_r:0),d=4*(this._cubeSize-u);fr(t,f,d,3*u,2*u),a.setRenderTarget(t),a.render(c,Hr)}}function PS(n){const e=[],t=[];let i=n;const r=n-_r+1+TS;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,d=6,h=3,_=new Float32Array(h*d*f),S=new Float32Array(h*d*f);for(let p=0;p<f;p++){const w=p%3*2/3-1,A=p>2?0:-1,M=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];_.set(M,h*d*p);for(let y=0;y<d;y++){const b=u[y*2]*2-1,R=u[y*2+1]*2-1;p===0?Di.set(1,R,b):p===1?Di.set(-b,1,-R):p===2?Di.set(-b,R,1):p===3?Di.set(-1,R,-b):p===4?Di.set(-b,-1,R):Di.set(b,R,-1),Di.toArray(S,(p*d+y)*h)}}const m=new Kt;m.setAttribute("position",new In(_,h)),m.setAttribute("outputDirection",new In(S,h)),t.push(new nn(m,null)),i>_r&&i--}return{lodMeshes:t,sizeLods:e}}function ru(n,e,t){const i=new Pn(n,e,t);return i.texture.mapping=Ea,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function IS(n,e,t){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:RS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ta(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function LS(n,e,t){return new rn({name:"SphericalGaussianBlur",defines:{SAMPLES:AS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ta(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function su(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function au(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Ta(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class kd extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Dd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ps(5,5,5),s=new rn({name:"CubemapFromEquirect",uniforms:Pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:ti});s.uniforms.tEquirect.value=t;const a=new nn(r,s),o=t.minFilter;return t.minFilter===zi&&(t.minFilter=Xt),new Fv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function DS(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,h=!1){return d==null?null:h?a(d):s(d)}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===za||h===Ba)if(e.has(d)){const _=e.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const S=new kd(_.height);return S.fromEquirectangularTexture(n,d),e.set(d,S),d.addEventListener("dispose",l),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const h=d.mapping,_=h===za||h===Ba,S=h===$i||h===Cr;if(_||S){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new iu(n)),m=_?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const w=d.image;return _&&w&&w.height>0||S&&w&&c(w)?(i===null&&(i=new iu(n)),m=_?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,h){return h===za?d.mapping=$i:h===Ba&&(d.mapping=Cr),d}function c(d){let h=0;const _=6;for(let S=0;S<_;S++)d[S]!==void 0&&h++;return h===_}function l(d){const h=d.target;h.removeEventListener("dispose",l);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function NS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Sr("WebGLRenderer: "+i+" extension not supported."),r}}}function US(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const h in d)e.update(d[h],n.ARRAY_BUFFER)}function l(f){const d=[],h=f.index,_=f.attributes.position;let S=0;if(_===void 0)return;if(h!==null){const w=h.array;S=h.version;for(let A=0,M=w.length;A<M;A+=3){const y=w[A+0],b=w[A+1],R=w[A+2];d.push(y,b,b,R,R,y)}}else{const w=_.array;S=_.version;for(let A=0,M=w.length/3-1;A<M;A+=3){const y=A+0,b=A+1,R=A+2;d.push(y,b,b,R,R,y)}}const m=new(_.count>=65535?Uc:Id)(d,1);m.version=S;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function FS(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,d){n.drawElements(i,d,s,f*a),t.update(d,i,1)}function l(f,d,h){h!==0&&(n.drawElementsInstanced(i,d,s,f*a,h),t.update(d,i,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,h);let S=0;for(let m=0;m<h;m++)S+=d[m];t.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function OS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function zS(n,e,t){const i=new WeakMap,r=new ct;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let T=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();const h=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let A=0;h===!0&&(A=1),_===!0&&(A=2),S===!0&&(A=3);let M=o.attributes.position.count*A,y=1;M>e.maxTextureSize&&(y=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const b=new Float32Array(M*y*4*f),R=new Rd(b,M,y,f);R.type=Bn,R.needsUpdate=!0;const v=A*4;for(let I=0;I<f;I++){const N=m[I],B=p[I],H=w[I],D=M*y*4*I;for(let k=0;k<N.count;k++){const Y=k*v;h===!0&&(r.fromBufferAttribute(N,k),b[D+Y+0]=r.x,b[D+Y+1]=r.y,b[D+Y+2]=r.z,b[D+Y+3]=0),_===!0&&(r.fromBufferAttribute(B,k),b[D+Y+4]=r.x,b[D+Y+5]=r.y,b[D+Y+6]=r.z,b[D+Y+7]=0),S===!0&&(r.fromBufferAttribute(H,k),b[D+Y+8]=r.x,b[D+Y+9]=r.y,b[D+Y+10]=r.z,b[D+Y+11]=H.itemSize===4?r.w:1)}}d={count:f,texture:R,size:new Ke(M,y)},i.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let h=0;for(let S=0;S<l.length;S++)h+=l[S];const _=o.morphTargetsRelative?1:1-h;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function BS(n,e,t,i,r){let s=new WeakMap;function a(l){const u=r.render.frame,f=l.geometry,d=e.get(l,f);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return d}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const kS={[fd]:"LINEAR_TONE_MAPPING",[hd]:"REINHARD_TONE_MAPPING",[pd]:"CINEON_TONE_MAPPING",[md]:"ACES_FILMIC_TONE_MAPPING",[_d]:"AGX_TONE_MAPPING",[vd]:"NEUTRAL_TONE_MAPPING",[gd]:"CUSTOM_TONE_MAPPING"};function GS(n,e,t,i,r,s){const a=new Pn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Kt;l.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Wt([0,2,0,0,2,0],2));const u=new Dv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new nn(l,u),d=new Fd(-1,1,1,-1,0,1);let h=null,_=null,S=!1,m,p=null,w=[],A=!1;this.setSize=function(M,y){a.setSize(M,y),o!==null&&o.setSize(M,y),c!==null&&c.setSize(M,y);for(let b=0;b<w.length;b++){const R=w[b];R.setSize&&R.setSize(M,y)}},this.setEffects=function(M){w=M,A=w.length>0&&w[0].isRenderPass===!0;const y=a.width,b=a.height;w.length>0&&o===null&&(o=new Pn(y,b,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),c=new Pn(y,b,{type:Xn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<w.length;R++){const v=w[R];v.setSize&&v.setSize(y,b)}},this.begin=function(M,y){if(S||M.toneMapping===Hn&&w.length===0)return!1;if(p=y,y!==null){const b=y.width,R=y.height;(a.width!==b||a.height!==R)&&this.setSize(b,R)}return A===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=Hn,!0},this.hasRenderPass=function(){return A},this.end=function(M,y){M.toneMapping=m,S=!0;let b=a,R=o;for(let v=0;v<w.length;v++){const T=w[v];T.enabled!==!1&&(T.render(M,R,b,y),T.needsSwap!==!1&&(b=R,R=R===o?c:o))}if(h!==M.outputColorSpace||_!==M.toneMapping){h=M.outputColorSpace,_=M.toneMapping,u.defines={},He.getTransfer(h)===nt&&(u.defines.SRGB_TRANSFER="");const v=kS[_];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(p),M.render(f,d),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const Gd=new Qt,lc=new cs(1,1),Vd=new Rd,Hd=new ov,Wd=new Dd,ou=[],cu=[],lu=new Float32Array(16),uu=new Float32Array(9),du=new Float32Array(4);function Fr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ou[r];if(s===void 0&&(s=new Float32Array(r),ou[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Aa(n,e){let t=cu[e];t===void 0&&(t=new Int32Array(e),cu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function VS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function HS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function WS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function XS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function $S(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;du.set(i),n.uniformMatrix2fv(this.addr,!1,du),Lt(t,i)}}function ZS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;uu.set(i),n.uniformMatrix3fv(this.addr,!1,uu),Lt(t,i)}}function qS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;lu.set(i),n.uniformMatrix4fv(this.addr,!1,lu),Lt(t,i)}}function YS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function JS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function KS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function QS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function jS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function eM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function tM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function nM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function iM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(lc.compareFunction=t.isReversedDepthBuffer()?Dc:Lc,s=lc):s=Gd,t.setTexture2D(e||s,r)}function rM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Hd,r)}function sM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Wd,r)}function aM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Vd,r)}function oM(n){switch(n){case 5126:return VS;case 35664:return HS;case 35665:return WS;case 35666:return XS;case 35674:return $S;case 35675:return ZS;case 35676:return qS;case 5124:case 35670:return YS;case 35667:case 35671:return JS;case 35668:case 35672:return KS;case 35669:case 35673:return QS;case 5125:return jS;case 36294:return eM;case 36295:return tM;case 36296:return nM;case 35678:case 36198:case 36298:case 36306:case 35682:return iM;case 35679:case 36299:case 36307:return rM;case 35680:case 36300:case 36308:case 36293:return sM;case 36289:case 36303:case 36311:case 36292:return aM}}function cM(n,e){n.uniform1fv(this.addr,e)}function lM(n,e){const t=Fr(e,this.size,2);n.uniform2fv(this.addr,t)}function uM(n,e){const t=Fr(e,this.size,3);n.uniform3fv(this.addr,t)}function dM(n,e){const t=Fr(e,this.size,4);n.uniform4fv(this.addr,t)}function fM(n,e){const t=Fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function hM(n,e){const t=Fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function pM(n,e){const t=Fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mM(n,e){n.uniform1iv(this.addr,e)}function gM(n,e){n.uniform2iv(this.addr,e)}function _M(n,e){n.uniform3iv(this.addr,e)}function vM(n,e){n.uniform4iv(this.addr,e)}function xM(n,e){n.uniform1uiv(this.addr,e)}function SM(n,e){n.uniform2uiv(this.addr,e)}function MM(n,e){n.uniform3uiv(this.addr,e)}function yM(n,e){n.uniform4uiv(this.addr,e)}function bM(n,e,t){const i=this.cache,r=e.length,s=Aa(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=lc:a=Gd;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function EM(n,e,t){const i=this.cache,r=e.length,s=Aa(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Hd,s[a])}function wM(n,e,t){const i=this.cache,r=e.length,s=Aa(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Wd,s[a])}function TM(n,e,t){const i=this.cache,r=e.length,s=Aa(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Vd,s[a])}function AM(n){switch(n){case 5126:return cM;case 35664:return lM;case 35665:return uM;case 35666:return dM;case 35674:return fM;case 35675:return hM;case 35676:return pM;case 5124:case 35670:return mM;case 35667:case 35671:return gM;case 35668:case 35672:return _M;case 35669:case 35673:return vM;case 5125:return xM;case 36294:return SM;case 36295:return MM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return bM;case 35679:case 36299:case 36307:return EM;case 35680:case 36300:case 36308:case 36293:return wM;case 36289:case 36303:case 36311:case 36292:return TM}}class RM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=oM(t.type)}}class CM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=AM(t.type)}}class PM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const _o=/(\w+)(\])?(\[|\.)?/g;function fu(n,e){n.seq.push(e),n.map[e.id]=e}function IM(n,e,t){const i=n.name,r=i.length;for(_o.lastIndex=0;;){const s=_o.exec(i),a=_o.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){fu(t,l===void 0?new RM(o,n,e):new CM(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new PM(o),fu(t,f)),t=f}}}class ta{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);IM(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function hu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const LM=37297;let DM=0;function NM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const pu=new De;function UM(n){He._getMatrix(pu,He.workingColorSpace,n);const e=`mat3( ${pu.elements.map(t=>t.toFixed(4))} )`;switch(He.getTransfer(n)){case ua:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function mu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+NM(n.getShaderSource(e),o)}else return s}function FM(n,e){const t=UM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const OM={[fd]:"Linear",[hd]:"Reinhard",[pd]:"Cineon",[md]:"ACESFilmic",[_d]:"AgX",[vd]:"Neutral",[gd]:"Custom"};function zM(n,e){const t=OM[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qs=new F;function BM(){He.getLuminanceCoefficients(qs);const n=qs.x.toFixed(4),e=qs.y.toFixed(4),t=qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function GM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function VM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Kr(n){return n!==""}function gu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _u(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HM=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(n){return n.replace(HM,XM)}const WM=new Map;function XM(n,e){let t=ze[e];if(t===void 0){const i=WM.get(e);if(i!==void 0)t=ze[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return uc(t)}const $M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(n){return n.replace($M,ZM)}function ZM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const qM={[Js]:"SHADOWMAP_TYPE_PCF",[Yr]:"SHADOWMAP_TYPE_VSM"};function YM(n){return qM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const JM={[$i]:"ENVMAP_TYPE_CUBE",[Cr]:"ENVMAP_TYPE_CUBE",[Ea]:"ENVMAP_TYPE_CUBE_UV"};function KM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":JM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const QM={[Cr]:"ENVMAP_MODE_REFRACTION"};function jM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":QM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ey={[dd]:"ENVMAP_BLENDING_MULTIPLY",[z_]:"ENVMAP_BLENDING_MIX",[B_]:"ENVMAP_BLENDING_ADD"};function ty(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ey[n.combine]||"ENVMAP_BLENDING_NONE"}function ny(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function iy(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=YM(t),l=KM(t),u=jM(t),f=ty(t),d=ny(t),h=kM(t),_=GM(s),S=r.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Kr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Kr).join(`
`),p.length>0&&(p+=`
`)):(m=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),p=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Hn?zM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,FM("linearToOutputTexel",t.outputColorSpace),BM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kr).join(`
`)),a=uc(a),a=gu(a,t),a=_u(a,t),o=uc(o),o=gu(o,t),o=_u(o,t),a=vu(a),o=vu(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=w+m+a,M=w+p+o,y=hu(r,r.VERTEX_SHADER,A),b=hu(r,r.FRAGMENT_SHADER,M);r.attachShader(S,y),r.attachShader(S,b),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function R(N){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(S)||"",H=r.getShaderInfoLog(y)||"",D=r.getShaderInfoLog(b)||"",k=B.trim(),Y=H.trim(),W=D.trim();let ie=!0,$=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,y,b);else{const ee=mu(r,y,"vertex"),ne=mu(r,b,"fragment");Ye("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+ee+`
`+ne)}else k!==""?Ie("WebGLProgram: Program Info Log:",k):(Y===""||W==="")&&($=!1);$&&(N.diagnostics={runnable:ie,programLog:k,vertexShader:{log:Y,prefix:m},fragmentShader:{log:W,prefix:p}})}r.deleteShader(y),r.deleteShader(b),v=new ta(r,S),T=VM(r,S)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(S,LM)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=DM++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=y,this.fragmentShader=b,this}let ry=0;class sy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ay(e),t.set(e,i)),i}}class ay{constructor(e){this.id=ry++,this.code=e,this.usedTimes=0}}function oy(n){return n===Zi||n===oa||n===ca}function cy(n,e,t,i,r,s){const a=new Cd,o=new sy,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function S(v,T,I,N,B,H){const D=N.fog,k=B.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ie=e.get(v.envMap||Y,W),$=ie&&ie.mapping===Ea?ie.image.height:null,ee=h[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&Ie("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const ne=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ce=ne!==void 0?ne.length:0;let Ae=0;k.morphAttributes.position!==void 0&&(Ae=1),k.morphAttributes.normal!==void 0&&(Ae=2),k.morphAttributes.color!==void 0&&(Ae=3);let lt,Xe,Qe,Z;if(ee){const dt=zn[ee];lt=dt.vertexShader,Xe=dt.fragmentShader}else{lt=v.vertexShader,Xe=v.fragmentShader;const dt=o.getVertexShaderStage(v),je=o.getFragmentShaderStage(v);o.update(v,dt,je),Qe=dt.id,Z=je.id}const j=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),Le=B.isInstancedMesh===!0,ge=B.isBatchedMesh===!0,Be=!!v.map,Pt=!!v.matcap,ke=!!ie,qe=!!v.aoMap,ut=!!v.lightMap,Ve=!!v.bumpMap&&v.wireframe===!1,mt=!!v.normalMap,Dt=!!v.displacementMap,en=!!v.emissiveMap,xt=!!v.metalnessMap,wt=!!v.roughnessMap,L=v.anisotropy>0,Bt=v.clearcoat>0,tt=v.dispersion>0,E=v.retroreflectivity>0,g=v.iridescence>0,U=v.sheen>0,G=v.transmission>0,X=L&&!!v.anisotropyMap,re=Bt&&!!v.clearcoatMap,se=Bt&&!!v.clearcoatNormalMap,q=Bt&&!!v.clearcoatRoughnessMap,Q=g&&!!v.iridescenceMap,ae=g&&!!v.iridescenceThicknessMap,Ee=U&&!!v.sheenColorMap,ue=U&&!!v.sheenRoughnessMap,oe=!!v.specularMap,we=!!v.specularColorMap,Pe=!!v.specularIntensityMap,Fe=G&&!!v.transmissionMap,P=G&&!!v.thicknessMap,ce=!!v.gradientMap,K=!!v.alphaMap,le=v.alphaTest>0,pe=!!v.alphaHash,te=!!v.extensions;let Re=Hn;v.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Re=n.toneMapping);const Me={shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:lt,fragmentShader:Xe,defines:v.defines,customVertexShaderID:Qe,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:ge,batchingColor:ge&&B._colorsTexture!==null,instancing:Le,instancingColor:Le&&B.instanceColor!==null,instancingMorph:Le&&B.morphTexture!==null,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Be,matcap:Pt,envMap:ke,envMapMode:ke&&ie.mapping,envMapCubeUVHeight:$,aoMap:qe,lightMap:ut,bumpMap:Ve,normalMap:mt,displacementMap:Dt,emissiveMap:en,normalMapObjectSpace:mt&&v.normalMapType===V_,normalMapTangentSpace:mt&&v.normalMapType===Cl,packedNormalMap:mt&&v.normalMapType===Cl&&oy(v.normalMap.format),metalnessMap:xt,roughnessMap:wt,anisotropy:L,anisotropyMap:X,clearcoat:Bt,clearcoatMap:re,clearcoatNormalMap:se,clearcoatRoughnessMap:q,dispersion:tt,retroreflection:E,iridescence:g,iridescenceMap:Q,iridescenceThicknessMap:ae,sheen:U,sheenColorMap:Ee,sheenRoughnessMap:ue,specularMap:oe,specularColorMap:we,specularIntensityMap:Pe,transmission:G,transmissionMap:Fe,thicknessMap:P,gradientMap:ce,opaque:v.transparent===!1&&v.blending===ts&&v.alphaToCoverage===!1,alphaMap:K,alphaTest:le,alphaHash:pe,combine:v.combine,mapUv:Be&&_(v.map.channel),aoMapUv:qe&&_(v.aoMap.channel),lightMapUv:ut&&_(v.lightMap.channel),bumpMapUv:Ve&&_(v.bumpMap.channel),normalMapUv:mt&&_(v.normalMap.channel),displacementMapUv:Dt&&_(v.displacementMap.channel),emissiveMapUv:en&&_(v.emissiveMap.channel),metalnessMapUv:xt&&_(v.metalnessMap.channel),roughnessMapUv:wt&&_(v.roughnessMap.channel),anisotropyMapUv:X&&_(v.anisotropyMap.channel),clearcoatMapUv:re&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ue&&_(v.sheenRoughnessMap.channel),specularMapUv:oe&&_(v.specularMap.channel),specularColorMapUv:we&&_(v.specularColorMap.channel),specularIntensityMapUv:Pe&&_(v.specularIntensityMap.channel),transmissionMapUv:Fe&&_(v.transmissionMap.channel),thicknessMapUv:P&&_(v.thicknessMap.channel),alphaMapUv:K&&_(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(mt||L),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(Be||K),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&mt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ve,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Ae,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Re,decodeVideoTexture:Be&&v.map.isVideoTexture===!0&&He.getTransfer(v.map.colorSpace)===nt,decodeVideoTextureEmissive:en&&v.emissiveMap.isVideoTexture===!0&&He.getTransfer(v.emissiveMap.colorSpace)===nt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===mn,flipSided:v.side===sn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:te&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&v.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function m(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)T.push(I),T.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(p(T,v),w(T,v),T.push(n.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function p(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function w(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function A(v){const T=h[v.type];let I;if(T){const N=zn[T];I=Pv.clone(N.uniforms)}else I=v.uniforms;return I}function M(v,T){let I=u.get(T);return I!==void 0?++I.usedTimes:(I=new iy(n,T,v,r),l.push(I),u.set(T,I)),I}function y(v){if(--v.usedTimes===0){const T=l.indexOf(v);l[T]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function R(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:A,acquireProgram:M,releaseProgram:y,releaseShaderCache:b,programs:l,dispose:R}}function ly(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function uy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Su(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Mu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function o(d,h,_,S,m,p){let w=n[e];return w===void 0?(w={id:d.id,object:d,geometry:h,material:_,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:m,group:p},n[e]=w):(w.id=d.id,w.object=d,w.geometry=h,w.material=_,w.materialVariant=a(d),w.groupOrder=S,w.renderOrder=d.renderOrder,w.z=m,w.group=p),e++,w}function c(d,h,_,S,m,p,w){w.reversedDepth===!0&&(m=-m);const A=o(d,h,_,S,m,p);_.transmission>0?i.push(A):_.transparent===!0?r.push(A):t.push(A)}function l(d,h,_,S,m,p){const w=o(d,h,_,S,m,p);_.transmission>0?i.unshift(w):_.transparent===!0?r.unshift(w):t.unshift(w)}function u(d,h){t.length>1&&t.sort(d||uy),i.length>1&&i.sort(h||Su),r.length>1&&r.sort(h||Su)}function f(){for(let d=e,h=n.length;d<h;d++){const _=n[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:f,sort:u}}function dy(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Mu,n.set(i,[a])):r>=s.length?(a=new Mu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function fy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Ze};break;case"SpotLight":t={position:new F,direction:new F,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function hy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let py=0;function my(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gy(n){const e=new fy,t=hy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);const r=new F,s=new it,a=new it;function o(l){let u=0,f=0,d=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let h=0,_=0,S=0,m=0,p=0,w=0,A=0,M=0,y=0,b=0,R=0,v=0,T=0,I=0;l.sort(my);for(let B=0,H=l.length;B<H;B++){const D=l[B],k=D.color,Y=D.intensity,W=D.distance;let ie=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Zi?ie=D.shadow.map.texture:ie=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=k.r*Y,f+=k.g*Y,d+=k.b*Y;else if(D.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(D.sh.coefficients[$],Y);I++}else if(D.isSunLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ee=D.shadow,ne=t.get(D);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),i.sunShadow[_]=ne,i.sunShadowMap[_]=ie;const Ce=ee.getViewportCount();for(let Ae=0;Ae<Ce;Ae++)i.sunShadowMatrix[S+Ae]=ee.getMatrix(Ae),i.sunShadowCascade[S+Ae]=ee._cascadeData[Ae];S+=Ce,_++}i.sun[h]=$,h++}else if(D.isDirectionalLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ee=D.shadow,ne=t.get(D);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.directionalShadow[m]=ne,i.directionalShadowMap[m]=ie,i.directionalShadowMatrix[m]=D.shadow.matrix,y++}i.directional[m]=$,m++}else if(D.isSpotLight){const $=e.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(k).multiplyScalar(Y),$.distance=W,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,i.spot[w]=$;const ee=D.shadow;if(D.map&&(i.spotLightMap[v]=D.map,v++,ee.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[w]=ee.matrix,D.castShadow){const ne=t.get(D);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.spotShadow[w]=ne,i.spotShadowMap[w]=ie,R++}w++}else if(D.isRectAreaLight){const $=e.get(D);$.color.copy(k).multiplyScalar(Y),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),i.rectArea[A]=$,A++}else if(D.isPointLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const ee=D.shadow,ne=t.get(D);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,ne.shadowCameraNear=ee.camera.near,ne.shadowCameraFar=ee.camera.far,i.pointShadow[p]=ne,i.pointShadowMap[p]=ie,i.pointShadowMatrix[p]=D.shadow.matrix,b++}i.point[p]=$,p++}else if(D.isHemisphereLight){const $=e.get(D);$.skyColor.copy(D.color).multiplyScalar(Y),$.groundColor.copy(D.groundColor).multiplyScalar(Y),i.hemi[M]=$,M++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const N=i.hash;(N.sunLength!==h||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==w||N.rectAreaLength!==A||N.hemiLength!==M||N.numSunShadows!==_||N.numDirectionalShadows!==y||N.numPointShadows!==b||N.numSpotShadows!==R||N.numSpotMaps!==v||N.numLightProbes!==I)&&(i.sun.length=h,i.directional.length=m,i.spot.length=w,i.rectArea.length=A,i.point.length=p,i.hemi.length=M,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.directionalShadowMatrix.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+v-T,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=I,N.sunLength=h,N.directionalLength=m,N.pointLength=p,N.spotLength=w,N.rectAreaLength=A,N.hemiLength=M,N.numSunShadows=_,N.numDirectionalShadows=y,N.numPointShadows=b,N.numSpotShadows=R,N.numSpotMaps=v,N.numLightProbes=I,i.version=py++)}function c(l,u){let f=0,d=0,h=0,_=0,S=0,m=0;const p=u.matrixWorldInverse;for(let w=0,A=l.length;w<A;w++){const M=l[w];if(M.isSunLight){const y=i.sun[f];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),f++}else if(M.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),d++}else if(M.isSpotLight){const y=i.spot[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),_++}else if(M.isRectAreaLight){const y=i.rectArea[S];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),h++}else if(M.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:i}}function yu(n){const e=new gy(n),t=[],i=[],r=[];function s(d){f.camera=d,t.length=0,i.length=0,r.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function c(d){r.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function _y(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new yu(n),e.set(r,[o])):s>=a.length?(o=new yu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const vy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Sy=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],My=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],bu=new it,Wr=new F,vo=new F;function yy(n,e,t){let i=new Ld;const r=new Ke,s=new Ke,a=new ct,o=new Nv,c=new Uv,l={},u=t.maxTextureSize,f={[Xi]:sn,[sn]:Xi,[mn]:mn},d=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:vy,fragmentShader:xy}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const _=new Kt;_.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new nn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Js;let p=this.type;this.render=function(b,R,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===x_&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Js);const T=n.getRenderTarget(),I=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ti),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=p!==this.type;H&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(k=>k.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,k=b.length;D<k;D++){const Y=b[D],W=Y.shadow;if(W===void 0){Ie("WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ie=W.getFrameExtents();r.multiply(ie),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,W.mapSize.y=s.y));const $=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=$,W.map===null||H===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Yr){if(Y.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Pn(r.x,r.y,{format:Zi,type:Xn,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),W.map.texture.name=Y.name+".shadowMap",W.map.depthTexture=new cs(r.x,r.y,Bn),W.map.depthTexture.name=Y.name+".shadowMapDepth",W.map.depthTexture.format=si,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=zt,W.map.depthTexture.magFilter=zt}else Y.isPointLight?(W.map=new kd(r.x),W.map.depthTexture=new Rv(r.x,Wn)):(W.map=new Pn(r.x,r.y),W.map.depthTexture=new cs(r.x,r.y,Wn)),W.map.depthTexture.name=Y.name+".shadowMap",W.map.depthTexture.format=si,this.type===Js?(W.map.depthTexture.compareFunction=$?Dc:Lc,W.map.depthTexture.minFilter=Xt,W.map.depthTexture.magFilter=Xt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=zt,W.map.depthTexture.magFilter=zt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==r.x||W.map.height!==r.y)&&W.map.setSize(r.x,r.y);const ee=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Y.isPointLight!==!0&&W.updateMatrices(Y,v);for(let ne=0;ne<ee;ne++){const Ce=W.getCamera(ne);if(Y.isPointLight){const Ae=W.camera,lt=W.matrix,Xe=Y.distance||Ae.far;Xe!==Ae.far&&(Ae.far=Xe,Ae.updateProjectionMatrix()),Wr.setFromMatrixPosition(Y.matrixWorld),Ae.position.copy(Wr),vo.copy(Ae.position),vo.add(Sy[ne]),Ae.up.copy(My[ne]),Ae.lookAt(vo),Ae.updateMatrixWorld(),lt.makeTranslation(-Wr.x,-Wr.y,-Wr.z),bu.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),W._frustum.setFromProjectionMatrix(bu,Ae.coordinateSystem,Ae.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,ne),n.clear();else{ne===0&&(n.setRenderTarget(W.map),n.clear());const Ae=W.getViewport(ne);a.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),B.viewport(a)}i=W.getFrustum(ne),M(R,v,Ce,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Yr&&w(W,v),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,I,N)};function w(b,R){const v=e.update(S);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null?b.mapPass=new Pn(r.x,r.y,{format:Zi,type:Xn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(R,null,v,d,S,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(R,null,v,h,S,null)}function A(b,R,v,T){let I=null;const N=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)I=N;else if(I=v.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const B=I.uuid,H=R.uuid;let D=l[B];D===void 0&&(D={},l[B]=D);let k=D[H];k===void 0&&(k=I.clone(),D[H]=k,R.addEventListener("dispose",y)),I=k}if(I.visible=R.visible,I.wireframe=R.wireframe,T===Yr?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:f[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const B=n.properties.get(I);B.light=v}return I}function M(b,R,v,T,I){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===Yr)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const H=e.update(b),D=b.material;if(Array.isArray(D)){const k=H.groups;for(let Y=0,W=k.length;Y<W;Y++){const ie=k[Y],$=D[ie.materialIndex];if($&&$.visible){const ee=A(b,$,T,I);b.onBeforeShadow(n,b,R,v,H,ee,ie),n.renderBufferDirect(v,null,H,ee,b,ie),b.onAfterShadow(n,b,R,v,H,ee,ie)}}}else if(D.visible){const k=A(b,D,T,I);b.onBeforeShadow(n,b,R,v,H,k,null),n.renderBufferDirect(v,null,H,k,b,null),b.onAfterShadow(n,b,R,v,H,k,null)}}const B=b.children;for(let H=0,D=B.length;H<D;H++)M(B[H],R,v,T,I)}function y(b){b.target.removeEventListener("dispose",y);for(const v in l){const T=l[v],I=b.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function by(n,e){function t(){let P=!1;const ce=new ct;let K=null;const le=new ct(0,0,0,0);return{setMask:function(pe){K!==pe&&!P&&(n.colorMask(pe,pe,pe,pe),K=pe)},setLocked:function(pe){P=pe},setClear:function(pe,te,Re,Me,dt){dt===!0&&(pe*=Me,te*=Me,Re*=Me),ce.set(pe,te,Re,Me),le.equals(ce)===!1&&(n.clearColor(pe,te,Re,Me),le.copy(ce))},reset:function(){P=!1,K=null,le.set(-1,0,0,0)}}}function i(){let P=!1,ce=!1,K=null,le=null,pe=null;return{setReversed:function(te){if(ce!==te){const Re=e.get("EXT_clip_control");te?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ce=te;const Me=pe;pe=null,this.setClear(Me)}},getReversed:function(){return ce},setTest:function(te){te?j(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(te){K!==te&&!P&&(n.depthMask(te),K=te)},setFunc:function(te){if(ce&&(te=ev[te]),le!==te){switch(te){case yo:n.depthFunc(n.NEVER);break;case bo:n.depthFunc(n.ALWAYS);break;case Eo:n.depthFunc(n.LESS);break;case ss:n.depthFunc(n.LEQUAL);break;case wo:n.depthFunc(n.EQUAL);break;case To:n.depthFunc(n.GEQUAL);break;case Ao:n.depthFunc(n.GREATER);break;case Ro:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=te}},setLocked:function(te){P=te},setClear:function(te){pe!==te&&(pe=te,ce&&(te=1-te),n.clearDepth(te))},reset:function(){P=!1,K=null,le=null,pe=null,ce=!1}}}function r(){let P=!1,ce=null,K=null,le=null,pe=null,te=null,Re=null,Me=null,dt=null;return{setTest:function(je){P||(je?j(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(je){ce!==je&&!P&&(n.stencilMask(je),ce=je)},setFunc:function(je,Sn,Nn){(K!==je||le!==Sn||pe!==Nn)&&(n.stencilFunc(je,Sn,Nn),K=je,le=Sn,pe=Nn)},setOp:function(je,Sn,Nn){(te!==je||Re!==Sn||Me!==Nn)&&(n.stencilOp(je,Sn,Nn),te=je,Re=Sn,Me=Nn)},setLocked:function(je){P=je},setClear:function(je){dt!==je&&(n.clearStencil(je),dt=je)},reset:function(){P=!1,ce=null,K=null,le=null,pe=null,te=null,Re=null,Me=null,dt=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},f={},d={},h=new WeakMap,_=[],S=null,m=!1,p=null,w=null,A=null,M=null,y=null,b=null,R=null,v=new Ze(0,0,0),T=0,I=!1,N=null,B=null,H=null,D=null,k=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ie=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec($)[1]),W=ie>=1):$.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=ie>=2);let ee=null,ne={};const Ce=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),lt=new ct().fromArray(Ce),Xe=new ct().fromArray(Ae);function Qe(P,ce,K,le){const pe=new Uint8Array(4),te=n.createTexture();n.bindTexture(P,te),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<K;Re++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(ce+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return te}const Z={};Z[n.TEXTURE_2D]=Qe(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=Qe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=Qe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=Qe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(n.DEPTH_TEST),a.setFunc(ss),Ve(!1),mt(wl),j(n.CULL_FACE),qe(ti);function j(P){u[P]!==!0&&(n.enable(P),u[P]=!0)}function ve(P){u[P]!==!1&&(n.disable(P),u[P]=!1)}function Le(P,ce){return d[P]!==ce?(n.bindFramebuffer(P,ce),d[P]=ce,P===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ce),P===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function ge(P,ce){let K=_,le=!1;if(P){K=h.get(ce),K===void 0&&(K=[],h.set(ce,K));const pe=P.textures;if(K.length!==pe.length||K[0]!==n.COLOR_ATTACHMENT0){for(let te=0,Re=pe.length;te<Re;te++)K[te]=n.COLOR_ATTACHMENT0+te;K.length=pe.length,le=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,le=!0);le&&n.drawBuffers(K)}function Be(P){return S!==P?(n.useProgram(P),S=P,!0):!1}const Pt={[mr]:n.FUNC_ADD,[M_]:n.FUNC_SUBTRACT,[y_]:n.FUNC_REVERSE_SUBTRACT};Pt[b_]=n.MIN,Pt[E_]=n.MAX;const ke={[w_]:n.ZERO,[T_]:n.ONE,[A_]:n.SRC_COLOR,[ld]:n.SRC_ALPHA,[D_]:n.SRC_ALPHA_SATURATE,[I_]:n.DST_COLOR,[C_]:n.DST_ALPHA,[R_]:n.ONE_MINUS_SRC_COLOR,[ud]:n.ONE_MINUS_SRC_ALPHA,[L_]:n.ONE_MINUS_DST_COLOR,[P_]:n.ONE_MINUS_DST_ALPHA,[N_]:n.CONSTANT_COLOR,[U_]:n.ONE_MINUS_CONSTANT_COLOR,[F_]:n.CONSTANT_ALPHA,[O_]:n.ONE_MINUS_CONSTANT_ALPHA};function qe(P,ce,K,le,pe,te,Re,Me,dt,je){if(P===ti){m===!0&&(ve(n.BLEND),m=!1);return}if(m===!1&&(j(n.BLEND),m=!0),P!==S_){if(P!==p||je!==I){if((w!==mr||y!==mr)&&(n.blendEquation(n.FUNC_ADD),w=mr,y=mr),je)switch(P){case ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tl:n.blendFunc(n.ONE,n.ONE);break;case Al:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ye("WebGLState: Invalid blending: ",P);break}else switch(P){case ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Al:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rl:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",P);break}A=null,M=null,b=null,R=null,v.set(0,0,0),T=0,p=P,I=je}return}pe=pe||ce,te=te||K,Re=Re||le,(ce!==w||pe!==y)&&(n.blendEquationSeparate(Pt[ce],Pt[pe]),w=ce,y=pe),(K!==A||le!==M||te!==b||Re!==R)&&(n.blendFuncSeparate(ke[K],ke[le],ke[te],ke[Re]),A=K,M=le,b=te,R=Re),(Me.equals(v)===!1||dt!==T)&&(n.blendColor(Me.r,Me.g,Me.b,dt),v.copy(Me),T=dt),p=P,I=!1}function ut(P,ce){P.side===mn?ve(n.CULL_FACE):j(n.CULL_FACE);let K=P.side===sn;ce&&(K=!K),Ve(K),P.blending===ts&&P.transparent===!1?qe(ti):qe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const le=P.stencilWrite;o.setTest(le),le&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),en(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(P){N!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),N=P)}function mt(P){P!==__?(j(n.CULL_FACE),P!==B&&(P===wl?n.cullFace(n.BACK):P===v_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),B=P}function Dt(P){P!==H&&(W&&n.lineWidth(P),H=P)}function en(P,ce,K){P?(j(n.POLYGON_OFFSET_FILL),(D!==ce||k!==K)&&(D=ce,k=K,a.getReversed()&&(ce=-ce),n.polygonOffset(ce,K))):ve(n.POLYGON_OFFSET_FILL)}function xt(P){P?j(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function wt(P){P===void 0&&(P=n.TEXTURE0+Y-1),ee!==P&&(n.activeTexture(P),ee=P)}function L(P,ce,K){K===void 0&&(ee===null?K=n.TEXTURE0+Y-1:K=ee);let le=ne[K];le===void 0&&(le={type:void 0,texture:void 0},ne[K]=le),(le.type!==P||le.texture!==ce)&&(ee!==K&&(n.activeTexture(K),ee=K),n.bindTexture(P,ce||Z[P]),le.type=P,le.texture=ce)}function Bt(){const P=ne[ee];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function tt(){try{n.compressedTexImage2D(...arguments)}catch(P){Ye("WebGLState:",P)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(P){Ye("WebGLState:",P)}}function g(){try{n.texSubImage2D(...arguments)}catch(P){Ye("WebGLState:",P)}}function U(){try{n.texSubImage3D(...arguments)}catch(P){Ye("WebGLState:",P)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(P){Ye("WebGLState:",P)}}function X(){try{n.compressedTexSubImage3D(...arguments)}catch(P){Ye("WebGLState:",P)}}function re(){try{n.texStorage2D(...arguments)}catch(P){Ye("WebGLState:",P)}}function se(){try{n.texStorage3D(...arguments)}catch(P){Ye("WebGLState:",P)}}function q(){try{n.texImage2D(...arguments)}catch(P){Ye("WebGLState:",P)}}function Q(){try{n.texImage3D(...arguments)}catch(P){Ye("WebGLState:",P)}}function ae(P){return f[P]!==void 0?f[P]:n.getParameter(P)}function Ee(P,ce){f[P]!==ce&&(n.pixelStorei(P,ce),f[P]=ce)}function ue(P){lt.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),lt.copy(P))}function oe(P){Xe.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Xe.copy(P))}function we(P,ce){let K=l.get(ce);K===void 0&&(K=new WeakMap,l.set(ce,K));let le=K.get(P);le===void 0&&(le=n.getUniformBlockIndex(ce,P.name),K.set(P,le))}function Pe(P,ce){const le=l.get(ce).get(P);c.get(ce)!==le&&(n.uniformBlockBinding(ce,le,P.__bindingPointIndex),c.set(ce,le))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},ee=null,ne={},d={},h=new WeakMap,_=[],S=null,m=!1,p=null,w=null,A=null,M=null,y=null,b=null,R=null,v=new Ze(0,0,0),T=0,I=!1,N=null,B=null,H=null,D=null,k=null,lt.set(0,0,n.canvas.width,n.canvas.height),Xe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:ve,bindFramebuffer:Le,drawBuffers:ge,useProgram:Be,setBlending:qe,setMaterial:ut,setFlipSided:Ve,setCullFace:mt,setLineWidth:Dt,setPolygonOffset:en,setScissorTest:xt,activeTexture:wt,bindTexture:L,unbindTexture:Bt,compressedTexImage2D:tt,compressedTexImage3D:E,texImage2D:q,texImage3D:Q,pixelStorei:Ee,getParameter:ae,updateUBOMapping:we,uniformBlockBinding:Pe,texStorage2D:re,texStorage3D:se,texSubImage2D:g,texSubImage3D:U,compressedTexSubImage2D:G,compressedTexSubImage3D:X,scissor:ue,viewport:oe,reset:Fe}}function Ey(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ke,u=new WeakMap,f=new Set;let d;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(E,g){return _?new OffscreenCanvas(E,g):fa("canvas")}function m(E,g,U){let G=1;const X=tt(E);if((X.width>U||X.height>U)&&(G=U/Math.max(X.width,X.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const re=Math.floor(G*X.width),se=Math.floor(G*X.height);d===void 0&&(d=S(re,se));const q=g?S(re,se):d;return q.width=re,q.height=se,q.getContext("2d").drawImage(E,0,0,re,se),Ie("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+re+"x"+se+")."),q}else return"data"in E&&Ie("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),E;return E}function p(E){return E.generateMipmaps}function w(E){n.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(E,g,U,G,X,re=!1){if(E!==null){if(n[E]!==void 0)return n[E];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let se;G&&(se=e.get("EXT_texture_norm16"),se||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=g;if(g===n.RED&&(U===n.FLOAT&&(q=n.R32F),U===n.HALF_FLOAT&&(q=n.R16F),U===n.UNSIGNED_BYTE&&(q=n.R8),U===n.UNSIGNED_SHORT&&se&&(q=se.R16_EXT),U===n.SHORT&&se&&(q=se.R16_SNORM_EXT)),g===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.R8UI),U===n.UNSIGNED_SHORT&&(q=n.R16UI),U===n.UNSIGNED_INT&&(q=n.R32UI),U===n.BYTE&&(q=n.R8I),U===n.SHORT&&(q=n.R16I),U===n.INT&&(q=n.R32I)),g===n.RG&&(U===n.FLOAT&&(q=n.RG32F),U===n.HALF_FLOAT&&(q=n.RG16F),U===n.UNSIGNED_BYTE&&(q=n.RG8),U===n.UNSIGNED_SHORT&&se&&(q=se.RG16_EXT),U===n.SHORT&&se&&(q=se.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RG8UI),U===n.UNSIGNED_SHORT&&(q=n.RG16UI),U===n.UNSIGNED_INT&&(q=n.RG32UI),U===n.BYTE&&(q=n.RG8I),U===n.SHORT&&(q=n.RG16I),U===n.INT&&(q=n.RG32I)),g===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RGB8UI),U===n.UNSIGNED_SHORT&&(q=n.RGB16UI),U===n.UNSIGNED_INT&&(q=n.RGB32UI),U===n.BYTE&&(q=n.RGB8I),U===n.SHORT&&(q=n.RGB16I),U===n.INT&&(q=n.RGB32I)),g===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),U===n.UNSIGNED_INT&&(q=n.RGBA32UI),U===n.BYTE&&(q=n.RGBA8I),U===n.SHORT&&(q=n.RGBA16I),U===n.INT&&(q=n.RGBA32I)),g===n.RGB&&(U===n.UNSIGNED_SHORT&&se&&(q=se.RGB16_EXT),U===n.SHORT&&se&&(q=se.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),g===n.RGBA){const Q=re?ua:He.getTransfer(X);U===n.FLOAT&&(q=n.RGBA32F),U===n.HALF_FLOAT&&(q=n.RGBA16F),U===n.UNSIGNED_BYTE&&(q=Q===nt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&se&&(q=se.RGBA16_EXT),U===n.SHORT&&se&&(q=se.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(E,g){let U;return E?g===null||g===Wn||g===os?U=n.DEPTH24_STENCIL8:g===Bn?U=n.DEPTH32F_STENCIL8:g===as&&(U=n.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Wn||g===os?U=n.DEPTH_COMPONENT24:g===Bn?U=n.DEPTH_COMPONENT32F:g===as&&(U=n.DEPTH_COMPONENT16),U}function b(E,g){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==zt&&E.minFilter!==Xt?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function R(E){const g=E.target;g.removeEventListener("dispose",R),T(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function v(E){const g=E.target;g.removeEventListener("dispose",v),N(g)}function T(E){const g=i.get(E);if(g.__webglInit===void 0)return;const U=E.source,G=h.get(U);if(G){const X=G[g.__cacheKey];X.usedTimes--,X.usedTimes===0&&I(E),Object.keys(G).length===0&&h.delete(U)}i.remove(E)}function I(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const U=E.source,G=h.get(U);delete G[g.__cacheKey],a.memory.textures--}function N(E){const g=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(g.__webglFramebuffer[G]))for(let X=0;X<g.__webglFramebuffer[G].length;X++)n.deleteFramebuffer(g.__webglFramebuffer[G][X]);else n.deleteFramebuffer(g.__webglFramebuffer[G]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[G])}else{if(Array.isArray(g.__webglFramebuffer))for(let G=0;G<g.__webglFramebuffer.length;G++)n.deleteFramebuffer(g.__webglFramebuffer[G]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let G=0;G<g.__webglColorRenderbuffer.length;G++)g.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[G]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const U=E.textures;for(let G=0,X=U.length;G<X;G++){const re=i.get(U[G]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(U[G])}i.remove(E)}let B=0;function H(){B=0}function D(){return B}function k(E){B=E}function Y(){const E=B;return E>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+r.maxTextures),B+=1,E}function W(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function ie(E,g){const U=i.get(E);if(E.isVideoTexture&&L(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&U.__version!==E.version){const G=E.image;if(G===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(U,E,g);return}}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+g)}function $(E,g){const U=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){ve(U,E,g);return}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+g)}function ee(E,g){const U=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){ve(U,E,g);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+g)}function ne(E,g){const U=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&U.__version!==E.version){Le(U,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+g)}const Ce={[Co]:n.REPEAT,[ei]:n.CLAMP_TO_EDGE,[Po]:n.MIRRORED_REPEAT},Ae={[zt]:n.NEAREST,[k_]:n.NEAREST_MIPMAP_NEAREST,[bs]:n.NEAREST_MIPMAP_LINEAR,[Xt]:n.LINEAR,[ka]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR},lt={[W_]:n.NEVER,[Y_]:n.ALWAYS,[X_]:n.LESS,[Lc]:n.LEQUAL,[$_]:n.EQUAL,[Dc]:n.GEQUAL,[Z_]:n.GREATER,[q_]:n.NOTEQUAL};function Xe(E,g){if(g.type===Bn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Xt||g.magFilter===ka||g.magFilter===bs||g.magFilter===zi||g.minFilter===Xt||g.minFilter===ka||g.minFilter===bs||g.minFilter===zi)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Ce[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Ce[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Ce[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Ae[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Ae[g.minFilter]),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,lt[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===zt||g.minFilter!==bs&&g.minFilter!==zi||g.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Qe(E,g){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",R));const G=g.source;let X=h.get(G);X===void 0&&(X={},h.set(G,X));const re=W(g);if(re!==E.__cacheKey){X[re]===void 0&&(X[re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),X[re].usedTimes++;const se=X[E.__cacheKey];se!==void 0&&(X[E.__cacheKey].usedTimes--,se.usedTimes===0&&I(g)),E.__cacheKey=re,E.__webglTexture=X[re].texture}return U}function Z(E,g,U){return Math.floor(Math.floor(E/U)/g)}function j(E,g,U,G){const re=E.updateRanges;if(re.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,U,G,g.data);else{re.sort((Ee,ue)=>Ee.start-ue.start);let se=0;for(let Ee=1;Ee<re.length;Ee++){const ue=re[se],oe=re[Ee],we=ue.start+ue.count,Pe=Z(oe.start,g.width,4),Fe=Z(ue.start,g.width,4);oe.start<=we+1&&Pe===Fe&&Z(oe.start+oe.count-1,g.width,4)===Pe?ue.count=Math.max(ue.count,oe.start+oe.count-ue.start):(++se,re[se]=oe)}re.length=se+1;const q=t.getParameter(n.UNPACK_ROW_LENGTH),Q=t.getParameter(n.UNPACK_SKIP_PIXELS),ae=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Ee=0,ue=re.length;Ee<ue;Ee++){const oe=re[Ee],we=Math.floor(oe.start/4),Pe=Math.ceil(oe.count/4),Fe=we%g.width,P=Math.floor(we/g.width),ce=Pe,K=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,P),t.texSubImage2D(n.TEXTURE_2D,0,Fe,P,ce,K,U,G,g.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(n.UNPACK_SKIP_ROWS,ae)}}function ve(E,g,U){let G=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(G=n.TEXTURE_3D);const X=Qe(E,g),re=g.source;t.bindTexture(G,E.__webglTexture,n.TEXTURE0+U);const se=i.get(re);if(re.version!==se.__version||X===!0){if(t.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const K=He.getPrimaries(He.workingColorSpace),le=g.colorSpace===vi?null:He.getPrimaries(g.colorSpace),pe=g.colorSpace===vi||K===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let Q=m(g.image,!1,r.maxTextureSize);Q=Bt(g,Q);const ae=s.convert(g.format,g.colorSpace),Ee=s.convert(g.type);let ue=M(g.internalFormat,ae,Ee,g.normalized,g.colorSpace,g.isVideoTexture);Xe(G,g);let oe;const we=g.mipmaps,Pe=g.isVideoTexture!==!0,Fe=se.__version===void 0||X===!0,P=re.dataReady,ce=b(g,Q);if(g.isDepthTexture)ue=y(g.format===Bi,g.type),Fe&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,ue,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,ue,Q.width,Q.height,0,ae,Ee,null));else if(g.isDataTexture)if(we.length>0){Pe&&Fe&&t.texStorage2D(n.TEXTURE_2D,ce,ue,we[0].width,we[0].height);for(let K=0,le=we.length;K<le;K++)oe=we[K],Pe?P&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,oe.width,oe.height,ae,Ee,oe.data):t.texImage2D(n.TEXTURE_2D,K,ue,oe.width,oe.height,0,ae,Ee,oe.data);g.generateMipmaps=!1}else Pe?(Fe&&t.texStorage2D(n.TEXTURE_2D,ce,ue,Q.width,Q.height),P&&j(g,Q,ae,Ee)):t.texImage2D(n.TEXTURE_2D,0,ue,Q.width,Q.height,0,ae,Ee,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Pe&&Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,ue,we[0].width,we[0].height,Q.depth);for(let K=0,le=we.length;K<le;K++)if(oe=we[K],g.format!==Cn)if(ae!==null)if(Pe){if(P)if(g.layerUpdates.size>0){const pe=tu(oe.width,oe.height,g.format,g.type);for(const te of g.layerUpdates){const Re=oe.data.subarray(te*pe/oe.data.BYTES_PER_ELEMENT,(te+1)*pe/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,te,oe.width,oe.height,1,ae,Re)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,oe.width,oe.height,Q.depth,ae,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,ue,oe.width,oe.height,Q.depth,0,oe.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,oe.width,oe.height,Q.depth,ae,Ee,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,ue,oe.width,oe.height,Q.depth,0,ae,Ee,oe.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Pe&&Fe&&t.texStorage2D(n.TEXTURE_2D,ce,ue,we[0].width,we[0].height);for(let K=0,le=we.length;K<le;K++)oe=we[K],g.format!==Cn?ae!==null?Pe?P&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,K,ue,oe.width,oe.height,0,oe.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?P&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,oe.width,oe.height,ae,Ee,oe.data):t.texImage2D(n.TEXTURE_2D,K,ue,oe.width,oe.height,0,ae,Ee,oe.data)}else if(g.isDataArrayTexture)if(Pe){if(Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,ue,Q.width,Q.height,Q.depth),P)if(g.layerUpdates.size>0){const K=tu(Q.width,Q.height,g.format,g.type);for(const le of g.layerUpdates){const pe=Q.data.subarray(le*K/Q.data.BYTES_PER_ELEMENT,(le+1)*K/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,Q.width,Q.height,1,ae,Ee,pe)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ae,Ee,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ue,Q.width,Q.height,Q.depth,0,ae,Ee,Q.data);else if(g.isData3DTexture)Pe?(Fe&&t.texStorage3D(n.TEXTURE_3D,ce,ue,Q.width,Q.height,Q.depth),P&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ae,Ee,Q.data)):t.texImage3D(n.TEXTURE_3D,0,ue,Q.width,Q.height,Q.depth,0,ae,Ee,Q.data);else if(g.isFramebufferTexture){if(Fe)if(Pe)t.texStorage2D(n.TEXTURE_2D,ce,ue,Q.width,Q.height);else{let K=Q.width,le=Q.height;for(let pe=0;pe<ce;pe++)t.texImage2D(n.TEXTURE_2D,pe,ue,K,le,0,ae,Ee,null),K>>=1,le>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const K=n.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Q.parentNode!==K){K.appendChild(Q),f.add(g),K.onpaint=le=>{const pe=le.changedElements;for(const te of f)pe.includes(te.image)&&(te.needsUpdate=!0)},K.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{const pe=n.RGBA,te=n.RGBA,Re=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,pe,te,Re,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(we.length>0){if(Pe&&Fe){const K=tt(we[0]);t.texStorage2D(n.TEXTURE_2D,ce,ue,K.width,K.height)}for(let K=0,le=we.length;K<le;K++)oe=we[K],Pe?P&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ae,Ee,oe):t.texImage2D(n.TEXTURE_2D,K,ue,ae,Ee,oe);g.generateMipmaps=!1}else if(Pe){if(Fe){const K=tt(Q);t.texStorage2D(n.TEXTURE_2D,ce,ue,K.width,K.height)}P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,Ee,Q)}else t.texImage2D(n.TEXTURE_2D,0,ue,ae,Ee,Q);p(g)&&w(G),se.__version=re.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Le(E,g,U){if(g.image.length!==6)return;const G=Qe(E,g),X=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+U);const re=i.get(X);if(X.version!==re.__version||G===!0){t.activeTexture(n.TEXTURE0+U);const se=He.getPrimaries(He.workingColorSpace),q=g.colorSpace===vi?null:He.getPrimaries(g.colorSpace),Q=g.colorSpace===vi||se===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ae=g.isCompressedTexture||g.image[0].isCompressedTexture,Ee=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let te=0;te<6;te++)!ae&&!Ee?ue[te]=m(g.image[te],!0,r.maxCubemapSize):ue[te]=Ee?g.image[te].image:g.image[te],ue[te]=Bt(g,ue[te]);const oe=ue[0],we=s.convert(g.format,g.colorSpace),Pe=s.convert(g.type),Fe=M(g.internalFormat,we,Pe,g.normalized,g.colorSpace),P=g.isVideoTexture!==!0,ce=re.__version===void 0||G===!0,K=X.dataReady;let le=b(g,oe);Xe(n.TEXTURE_CUBE_MAP,g);let pe;if(ae){P&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,Fe,oe.width,oe.height);for(let te=0;te<6;te++){pe=ue[te].mipmaps;for(let Re=0;Re<pe.length;Re++){const Me=pe[Re];g.format!==Cn?we!==null?P?K&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,0,0,Me.width,Me.height,we,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,Fe,Me.width,Me.height,0,Me.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,0,0,Me.width,Me.height,we,Pe,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,Fe,Me.width,Me.height,0,we,Pe,Me.data)}}}else{if(pe=g.mipmaps,P&&ce){pe.length>0&&le++;const te=tt(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,le,Fe,te.width,te.height)}for(let te=0;te<6;te++)if(Ee){P?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ue[te].width,ue[te].height,we,Pe,ue[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Fe,ue[te].width,ue[te].height,0,we,Pe,ue[te].data);for(let Re=0;Re<pe.length;Re++){const dt=pe[Re].image[te].image;P?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,0,0,dt.width,dt.height,we,Pe,dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,Fe,dt.width,dt.height,0,we,Pe,dt.data)}}else{P?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,we,Pe,ue[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Fe,we,Pe,ue[te]);for(let Re=0;Re<pe.length;Re++){const Me=pe[Re];P?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,0,0,we,Pe,Me.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,Fe,we,Pe,Me.image[te])}}}p(g)&&w(n.TEXTURE_CUBE_MAP),re.__version=X.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ge(E,g,U,G,X,re){const se=s.convert(U.format,U.colorSpace),q=s.convert(U.type),Q=M(U.internalFormat,se,q,U.normalized,U.colorSpace),ae=i.get(g),Ee=i.get(U);if(Ee.__renderTarget=g,!ae.__hasExternalTextures){const ue=Math.max(1,g.width>>re),oe=Math.max(1,g.height>>re);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,re,Q,ue,oe,g.depth,0,se,q,null):t.texImage2D(X,re,Q,ue,oe,0,se,q,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),wt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,X,Ee.__webglTexture,0,xt(g)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,X,Ee.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(E,g,U){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer){const G=g.depthTexture,X=G&&G.isDepthTexture?G.type:null,re=y(g.stencilBuffer,X),se=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;wt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt(g),re,g.width,g.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt(g),re,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,re,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,E)}else{const G=g.textures;for(let X=0;X<G.length;X++){const re=G[X],se=s.convert(re.format,re.colorSpace),q=s.convert(re.type),Q=M(re.internalFormat,se,q,re.normalized,re.colorSpace);wt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt(g),Q,g.width,g.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt(g),Q,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Q,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pt(E,g,U){const G=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=i.get(g.depthTexture);if(X.__renderTarget=g,(!X.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),G){if(X.__webglInit===void 0&&(X.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),X.__webglTexture===void 0){X.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,g.depthTexture);const ae=s.convert(g.depthTexture.format),Ee=s.convert(g.depthTexture.type);let ue;g.depthTexture.format===si?ue=n.DEPTH_COMPONENT24:g.depthTexture.format===Bi&&(ue=n.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ue,g.width,g.height,0,ae,Ee,null)}}else ie(g.depthTexture,0);const re=X.__webglTexture,se=xt(g),q=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,Q=g.depthTexture.format===Bi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===si)wt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,q,re,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,Q,q,re,0);else if(g.depthTexture.format===Bi)wt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,q,re,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,Q,q,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(E){const g=i.get(E),U=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const G=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),G){const X=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,G.removeEventListener("dispose",X)};G.addEventListener("dispose",X),g.__depthDisposeCallback=X}g.__boundDepthTexture=G}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(U)for(let G=0;G<6;G++)Pt(g.__webglFramebuffer[G],E,G);else{const G=E.texture.mipmaps;G&&G.length>0?Pt(g.__webglFramebuffer[0],E,0):Pt(g.__webglFramebuffer,E,0)}else if(U){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]===void 0)g.__webglDepthbuffer[G]=n.createRenderbuffer(),Be(g.__webglDepthbuffer[G],E,!1);else{const X=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,re)}}else{const G=E.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Be(g.__webglDepthbuffer,E,!1);else{const X=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,re)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function qe(E,g,U){const G=i.get(E);g!==void 0&&ge(G.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&ke(E)}function ut(E){const g=E.texture,U=i.get(E),G=i.get(g);E.addEventListener("dispose",v);const X=E.textures,re=E.isWebGLCubeRenderTarget===!0,se=X.length>1;if(se||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=g.version,a.memory.textures++),re){U.__webglFramebuffer=[];for(let q=0;q<6;q++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[q]=[];for(let Q=0;Q<g.mipmaps.length;Q++)U.__webglFramebuffer[q][Q]=n.createFramebuffer()}else U.__webglFramebuffer[q]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let q=0;q<g.mipmaps.length;q++)U.__webglFramebuffer[q]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(se)for(let q=0,Q=X.length;q<Q;q++){const ae=i.get(X[q]);ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&wt(E)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let q=0;q<X.length;q++){const Q=X[q];U.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[q]);const ae=s.convert(Q.format,Q.colorSpace),Ee=s.convert(Q.type),ue=M(Q.internalFormat,ae,Ee,Q.normalized,Q.colorSpace,E.isXRRenderTarget===!0),oe=xt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,ue,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,U.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,g);for(let q=0;q<6;q++)if(g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)ge(U.__webglFramebuffer[q][Q],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Q);else ge(U.__webglFramebuffer[q],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);p(g)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let q=0,Q=X.length;q<Q;q++){const ae=X[q],Ee=i.get(ae);let ue=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ue=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,Ee.__webglTexture),Xe(ue,ae),ge(U.__webglFramebuffer,E,ae,n.COLOR_ATTACHMENT0+q,ue,0),p(ae)&&w(ue)}t.unbindTexture()}else{let q=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(q=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,G.__webglTexture),Xe(q,g),g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)ge(U.__webglFramebuffer[Q],E,g,n.COLOR_ATTACHMENT0,q,Q);else ge(U.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,q,0);p(g)&&w(q),t.unbindTexture()}E.depthBuffer&&ke(E)}function Ve(E){const g=E.textures;for(let U=0,G=g.length;U<G;U++){const X=g[U];if(p(X)){const re=A(E),se=i.get(X).__webglTexture;t.bindTexture(re,se),w(re),t.unbindTexture()}}}const mt=[],Dt=[];function en(E){if(E.samples>0){if(wt(E)===!1){const g=E.textures,U=E.width,G=E.height;let X=n.COLOR_BUFFER_BIT;const re=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(E),q=g.length>1;if(q)for(let ae=0;ae<g.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const Q=E.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let ae=0;ae<g.length;ae++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[ae]);const Ee=i.get(g[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ee,0)}n.blitFramebuffer(0,0,U,G,0,0,U,G,X,n.NEAREST),c===!0&&(mt.length=0,Dt.length=0,mt.push(n.COLOR_ATTACHMENT0+ae),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(mt.push(re),Dt.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Dt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let ae=0;ae<g.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,se.__webglColorRenderbuffer[ae]);const Ee=i.get(g[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){const g=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function xt(E){return Math.min(r.maxSamples,E.samples)}function wt(E){const g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function L(E){const g=a.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function Bt(E,g){const U=E.colorSpace,G=E.format,X=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==la&&U!==vi&&(He.getTransfer(U)===nt?(G!==Cn||X!==gn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",U)),g}function tt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=H,this.getTextureUnits=D,this.setTextureUnits=k,this.setTexture2D=ie,this.setTexture2DArray=$,this.setTexture3D=ee,this.setTextureCube=ne,this.rebindTextures=qe,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function wy(n,e){function t(i,r=vi){let s;const a=He.getTransfer(r);if(i===gn)return n.UNSIGNED_BYTE;if(i===Ac)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Rc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Sd)return n.BYTE;if(i===Md)return n.SHORT;if(i===as)return n.UNSIGNED_SHORT;if(i===Tc)return n.INT;if(i===Wn)return n.UNSIGNED_INT;if(i===Bn)return n.FLOAT;if(i===Xn)return n.HALF_FLOAT;if(i===Ed)return n.ALPHA;if(i===wd)return n.RGB;if(i===Cn)return n.RGBA;if(i===si)return n.DEPTH_COMPONENT;if(i===Bi)return n.DEPTH_STENCIL;if(i===Td)return n.RED;if(i===Cc)return n.RED_INTEGER;if(i===Zi)return n.RG;if(i===Pc)return n.RG_INTEGER;if(i===Ic)return n.RGBA_INTEGER;if(i===Ks||i===Qs||i===js||i===ea)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ks)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ks)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===js)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ea)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Io||i===Lo||i===Do||i===No)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Io)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Do)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===No)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Uo||i===Fo||i===Oo||i===zo||i===Bo||i===oa||i===ko)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Uo||i===Fo)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Oo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===zo)return s.COMPRESSED_R11_EAC;if(i===Bo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===oa)return s.COMPRESSED_RG11_EAC;if(i===ko)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Go||i===Vo||i===Ho||i===Wo||i===Xo||i===$o||i===Zo||i===qo||i===Yo||i===Jo||i===Ko||i===Qo||i===jo||i===ec)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Go)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ho)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$o)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ko)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ec)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tc||i===nc||i===ic)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===tc)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ic)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rc||i===sc||i===ca||i===ac)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===rc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ca)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ac)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===os?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Ty=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ay=`
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

}`;class Ry{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Nd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new rn({vertexShader:Ty,fragmentShader:Ay,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nn(new wa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cy extends Ki{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,h=null,_=null;const S=typeof XRWebGLBinding<"u",m=new Ry,p={},w=t.getContextAttributes();let A=null,M=null;const y=[],b=[],R=new Ke;let v=null,T=null;const I=new An;I.viewport=new ct;const N=new An;N.viewport=new ct;const B=[I,N],H=new Ov;let D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=y[Z];return j===void 0&&(j=new Ya,y[Z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=y[Z];return j===void 0&&(j=new Ya,y[Z]=j),j.getGripSpace()},this.getHand=function(Z){let j=y[Z];return j===void 0&&(j=new Ya,y[Z]=j),j.getHandSpace()};function Y(Z){const j=b.indexOf(Z.inputSource);if(j===-1)return;const ve=y[j];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,l||a),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",ie);for(let Z=0;Z<y.length;Z++){const j=b[Z];j!==null&&(b[Z]=null,y[Z].disconnect(j))}D=null,k=null,m.reset();for(const Z in p)delete p[Z];if(e.setRenderTarget(A),h=null,d=null,f=null,r=null,M=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),T!==null){const Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",W),r.addEventListener("inputsourceschange",ie),w.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Le=null,ge=null;w.depth&&(ge=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=w.stencil?Bi:si,Le=w.stencil?os:Wn);const Be={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Be),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Pn(d.textureWidth,d.textureHeight,{format:Cn,type:gn,depthTexture:new cs(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ve={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Pn(h.framebufferWidth,h.framebufferHeight,{format:Cn,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Qe.setContext(r),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(Z){for(let j=0;j<Z.removed.length;j++){const ve=Z.removed[j],Le=b.indexOf(ve);Le>=0&&(b[Le]=null,y[Le].disconnect(ve))}for(let j=0;j<Z.added.length;j++){const ve=Z.added[j];let Le=b.indexOf(ve);if(Le===-1){for(let Be=0;Be<y.length;Be++)if(Be>=b.length){b.push(ve),Le=Be;break}else if(b[Be]===null){b[Be]=ve,Le=Be;break}if(Le===-1)break}const ge=y[Le];ge&&ge.connect(ve)}}const $=new F,ee=new F;function ne(Z,j,ve){$.setFromMatrixPosition(j.matrixWorld),ee.setFromMatrixPosition(ve.matrixWorld);const Le=$.distanceTo(ee),ge=j.projectionMatrix.elements,Be=ve.projectionMatrix.elements,Pt=ge[14]/(ge[10]-1),ke=ge[14]/(ge[10]+1),qe=(ge[9]+1)/ge[5],ut=(ge[9]-1)/ge[5],Ve=(ge[8]-1)/ge[0],mt=(Be[8]+1)/Be[0],Dt=Pt*Ve,en=Pt*mt,xt=Le/(-Ve+mt),wt=xt*-Ve;if(j.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(wt),Z.translateZ(xt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ge[10]===-1)Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const L=Pt+xt,Bt=ke+xt,tt=Dt-wt,E=en+(Le-wt),g=qe*ke/Bt*L,U=ut*ke/Bt*L;Z.projectionMatrix.makePerspective(tt,E,g,U,L,Bt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Ce(Z,j){j===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let j=Z.near,ve=Z.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),H.near=N.near=I.near=j,H.far=N.far=I.far=ve,(D!==H.near||k!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),D=H.near,k=H.far),H.layers.mask=Z.layers.mask|6,I.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;const Le=Z.parent,ge=H.cameras;Ce(H,Le);for(let Be=0;Be<ge.length;Be++)Ce(ge[Be],Le);ge.length===2?ne(H,I,N):H.projectionMatrix.copy(I.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),Ae(Z,H,Le)};function Ae(Z,j,ve){ve===null?Z.matrix.copy(j.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=oc*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Z){return p[Z]};let lt=null;function Xe(Z,j){if(u=j.getViewerPose(l||a),_=j,u!==null){const ve=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let Le=!1;ve.length!==H.cameras.length&&(H.cameras.length=0,Le=!0);for(let ke=0;ke<ve.length;ke++){const qe=ve[ke];let ut=null;if(h!==null)ut=h.getViewport(qe);else{const mt=f.getViewSubImage(d,qe);ut=mt.viewport,ke===0&&(e.setRenderTargetTextures(M,mt.colorTexture,mt.depthStencilTexture),e.setRenderTarget(M))}let Ve=B[ke];Ve===void 0&&(Ve=new An,Ve.layers.enable(ke),Ve.viewport=new ct,B[ke]=Ve),Ve.matrix.fromArray(qe.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(qe.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ut.x,ut.y,ut.width,ut.height),ke===0&&(H.matrix.copy(Ve.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Le===!0&&H.cameras.push(Ve)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=i.getBinding();const ke=f.getDepthInformation(ve[0]);ke&&ke.isValid&&ke.texture&&m.init(ke,r.renderState)}if(ge&&ge.includes("camera-access")&&S){e.state.unbindTexture(),f=i.getBinding();for(let ke=0;ke<ve.length;ke++){const qe=ve[ke].camera;if(qe){let ut=p[qe];ut||(ut=new Nd,p[qe]=ut);const Ve=f.getCameraImage(qe);ut.sourceTexture=Ve}}}}for(let ve=0;ve<y.length;ve++){const Le=b[ve],ge=y[ve];Le!==null&&ge!==void 0&&ge.update(Le,j,l||a)}lt&&lt(Z,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),_=null}const Qe=new zd;Qe.setAnimationLoop(Xe),this.setAnimationLoop=function(Z){lt=Z},this.dispose=function(){}}}const Py=new it,Xd=new De;Xd.set(-1,0,0,0,1,0,0,0,1);function Iy(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ud(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,A,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),S(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,w,A):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),A=w.envMap,M=w.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Py.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Xd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ly(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){const b=y.program;i.uniformBlockBinding(M,b)}function l(M,y){let b=r[M.id];b===void 0&&(m(M),b=u(M),r[M.id]=b,M.addEventListener("dispose",w));const R=y.program;i.updateUBOMapping(M,R);const v=e.render.frame;s[M.id]!==v&&(d(M),s[M.id]=v)}function u(M){const y=f();M.__bindingPointIndex=y;const b=n.createBuffer(),R=M.__size,v=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const y=r[M.id],b=M.uniforms,R=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let v=0,T=b.length;v<T;v++){const I=b[v];if(Array.isArray(I))for(let N=0,B=I.length;N<B;N++)h(I[N],v,N,R);else h(I,v,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,y,b,R){if(S(M,y,b,R)===!0){const v=M.__offset,T=M.value;if(Array.isArray(T)){let I=0;for(let N=0;N<T.length;N++){const B=T[N],H=p(B);_(B,M.__data,I),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(I+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(T,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,M.__data)}}function _(M,y,b){typeof M=="number"||typeof M=="boolean"?y[0]=M:M.isMatrix3?(y[0]=M.elements[0],y[1]=M.elements[1],y[2]=M.elements[2],y[3]=0,y[4]=M.elements[3],y[5]=M.elements[4],y[6]=M.elements[5],y[7]=0,y[8]=M.elements[6],y[9]=M.elements[7],y[10]=M.elements[8],y[11]=0):ArrayBuffer.isView(M)?y.set(new M.constructor(M.buffer,M.byteOffset,y.length)):M.toArray(y,b)}function S(M,y,b,R){const v=M.value,T=y+"_"+b;if(R[T]===void 0)return typeof v=="number"||typeof v=="boolean"?R[T]=v:ArrayBuffer.isView(v)?R[T]=v.slice():R[T]=v.clone(),!0;{const I=R[T];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return R[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(I.equals(v)===!1)return I.copy(v),!0}}return!1}function m(M){const y=M.uniforms;let b=0;const R=16;for(let T=0,I=y.length;T<I;T++){const N=Array.isArray(y[T])?y[T]:[y[T]];for(let B=0,H=N.length;B<H;B++){const D=N[B],k=Array.isArray(D.value)?D.value:[D.value];for(let Y=0,W=k.length;Y<W;Y++){const ie=k[Y],$=p(ie),ee=b%R,ne=ee%$.boundary,Ce=ee+ne;b+=ne,Ce!==0&&R-Ce<$.storage&&(b+=R-Ce),D.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=$.storage}}}const v=b%R;return v>0&&(b+=R-v),M.__size=b,M.__cache={},this}function p(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",M),y}function w(M){const y=M.target;y.removeEventListener("dispose",w);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function A(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:A}}const Dy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let On=null;function Ny(){return On===null&&(On=new bv(Dy,16,16,Zi,Xn),On.name="DFG_LUT",On.minFilter=Xt,On.magFilter=Xt,On.wrapS=ei,On.wrapT=ei,On.generateMipmaps=!1,On.needsUpdate=!0),On}class Uy{constructor(e={}){const{canvas:t=Q_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=gn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const S=h,m=new Set([Ic,Pc,Cc]),p=new Set([gn,Wn,as,os,Ac,Rc]),w=new Uint32Array(4),A=new Int32Array(4),M=new F;let y=null,b=null;const R=[],v=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let N=!1,B=null,H=null,D=null,k=null;this._outputColorSpace=pn;let Y=0,W=0,ie=null,$=-1,ee=null;const ne=new ct,Ce=new ct;let Ae=null;const lt=new Ze(0);let Xe=0,Qe=t.width,Z=t.height,j=1,ve=null,Le=null;const ge=new ct(0,0,Qe,Z),Be=new ct(0,0,Qe,Z);let Pt=!1;const ke=new Ld;let qe=!1,ut=!1;const Ve=new it,mt=new F,Dt=new ct,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function wt(){return ie===null?j:1}let L=i;function Bt(x,C){return t.getContext(x,C)}let tt,E,g,U,G,X,re,se,q,Q,ae,Ee,ue,oe,we,Pe,Fe,P,ce,K,le,pe,te;try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wc}`),t.addEventListener("webglcontextlost",dt,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",Sn,!1),L===null){const C="webgl2";if(L=Bt(C,x),L===null)throw Bt(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Re()}catch(x){throw t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),Ye("WebGLRenderer: "+x.message),x}function Re(){tt=new NS(L),tt.init(),le=new wy(L,tt),E=new ES(L,tt,e,le),g=new by(L,tt),E.reversedDepthBuffer&&d&&g.buffers.depth.setReversed(!0),H=L.createFramebuffer(),D=L.createFramebuffer(),k=L.createFramebuffer(),U=new OS(L),G=new ly,X=new Ey(L,tt,g,G,E,le,U),re=new DS(I),se=new Bv(L),pe=new yS(L,se),q=new US(L,se,U,pe),Q=new BS(L,q,se,pe,U),P=new zS(L,E,X),we=new wS(G),ae=new cy(I,re,tt,E,pe,we),Ee=new Iy(I,G),ue=new dy,oe=new _y(tt),Fe=new MS(I,re,g,Q,_,c),Pe=new yy(I,Q,E),te=new Ly(L,U,E,g),ce=new bS(L,tt,U),K=new FS(L,tt,U),U.programs=ae.programs,I.capabilities=E,I.extensions=tt,I.properties=G,I.renderLists=ue,I.shadowMap=Pe,I.state=g,I.info=U}S!==gn&&(T=new GS(S,t.width,t.height,o,r,s));const Me=new Cy(I,L);this.xr=Me,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const x=tt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=tt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(x){x!==void 0&&(j=x,this.setSize(Qe,Z,!1))},this.getSize=function(x){return x.set(Qe,Z)},this.setSize=function(x,C,V=!0){if(Me.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Qe=x,Z=C,t.width=Math.floor(x*j),t.height=Math.floor(C*j),V===!0&&(t.style.width=x+"px",t.style.height=C+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,x,C)},this.getDrawingBufferSize=function(x){return x.set(Qe*j,Z*j).floor()},this.setDrawingBufferSize=function(x,C,V){Qe=x,Z=C,j=V,t.width=Math.floor(x*V),t.height=Math.floor(C*V),this.setViewport(0,0,x,C)},this.setEffects=function(x){if(S===gn){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let C=0;C<x.length;C++)if(x[C].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ne)},this.getViewport=function(x){return x.copy(ge)},this.setViewport=function(x,C,V,O){x.isVector4?ge.set(x.x,x.y,x.z,x.w):ge.set(x,C,V,O),g.viewport(ne.copy(ge).multiplyScalar(j).round())},this.getScissor=function(x){return x.copy(Be)},this.setScissor=function(x,C,V,O){x.isVector4?Be.set(x.x,x.y,x.z,x.w):Be.set(x,C,V,O),g.scissor(Ce.copy(Be).multiplyScalar(j).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(x){g.setScissorTest(Pt=x)},this.setOpaqueSort=function(x){ve=x},this.setTransparentSort=function(x){Le=x},this.getClearColor=function(x){return x.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(x=!0,C=!0,V=!0){let O=0;if(x){let z=!1;if(ie!==null){const he=ie.texture.format;z=m.has(he)}if(z){const he=ie.texture.type,_e=p.has(he),fe=Fe.getClearColor(),xe=Fe.getClearAlpha(),be=fe.r,Oe=fe.g,Ge=fe.b;_e?(w[0]=be,w[1]=Oe,w[2]=Ge,w[3]=xe,L.clearBufferuiv(L.COLOR,0,w)):(A[0]=be,A[1]=Oe,A[2]=Ge,A[3]=xe,L.clearBufferiv(L.COLOR,0,A))}else O|=L.COLOR_BUFFER_BIT}C&&(O|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(O|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&L.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),B=x},this.dispose=function(){t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),Fe.dispose(),ue.dispose(),oe.dispose(),G.dispose(),re.dispose(),Q.dispose(),pe.dispose(),te.dispose(),ae.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",qc),Me.removeEventListener("sessionend",Yc),Ri.stop()};function dt(x){x.preventDefault(),Dl("WebGLRenderer: Context Lost."),N=!0}function je(){Dl("WebGLRenderer: Context Restored."),N=!1;const x=U.autoReset,C=Pe.enabled,V=Pe.autoUpdate,O=Pe.needsUpdate,z=Pe.type;Re(),U.autoReset=x,Pe.enabled=C,Pe.autoUpdate=V,Pe.needsUpdate=O,Pe.type=z}function Sn(x){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Nn(x){const C=x.target;C.removeEventListener("dispose",Nn),Mf(C)}function Mf(x){yf(x),G.remove(x)}function yf(x){const C=G.get(x).programs;C!==void 0&&(C.forEach(function(V){ae.releaseProgram(V)}),x.isShaderMaterial&&ae.releaseShaderCache(x))}this.renderBufferDirect=function(x,C,V,O,z,he){C===null&&(C=en);const _e=z.isMesh&&z.matrixWorld.determinantAffine()<0,fe=wf(x,C,V,O,z);g.setMaterial(O,_e);let xe=V.index,be=1;if(O.wireframe===!0){if(xe=q.getWireframeAttribute(V),xe===void 0)return;be=2}const Oe=V.drawRange,Ge=V.attributes.position;let Se=Oe.start*be,et=(Oe.start+Oe.count)*be;he!==null&&(Se=Math.max(Se,he.start*be),et=Math.min(et,(he.start+he.count)*be)),xe!==null?(Se=Math.max(Se,0),et=Math.min(et,xe.count)):Ge!=null&&(Se=Math.max(Se,0),et=Math.min(et,Ge.count));const Tt=et-Se;if(Tt<0||Tt===1/0)return;pe.setup(z,O,fe,V,xe);let ht,ot=ce;if(xe!==null&&(ht=se.get(xe),ot=K,ot.setIndex(ht)),z.isMesh)O.wireframe===!0?(g.setLineWidth(O.wireframeLinewidth*wt()),ot.setMode(L.LINES)):ot.setMode(L.TRIANGLES);else if(z.isLine){let kt=O.linewidth;kt===void 0&&(kt=1),g.setLineWidth(kt*wt()),z.isLineSegments?ot.setMode(L.LINES):z.isLineLoop?ot.setMode(L.LINE_LOOP):ot.setMode(L.LINE_STRIP)}else z.isPoints?ot.setMode(L.POINTS):z.isSprite&&ot.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))ot.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const kt=z._multiDrawStarts,me=z._multiDrawCounts,$t=z._multiDrawCount,$e=xe?se.get(xe).bytesPerElement:1,fn=G.get(O).currentProgram.getUniforms();for(let Un=0;Un<$t;Un++)fn.setValue(L,"_gl_DrawID",Un),ot.render(kt[Un]/$e,me[Un])}else if(z.isInstancedMesh)ot.renderInstances(Se,Tt,z.count);else if(V.isInstancedBufferGeometry){const kt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,me=Math.min(V.instanceCount,kt);ot.renderInstances(Se,Tt,me)}else ot.render(Se,Tt)};function Zc(x,C,V,O){B!==null&&x.isNodeMaterial&&B.setObject(O,x),qe===!0&&we.setState(x,V,!1),x.transparent===!0&&x.side===mn&&x.forceSinglePass===!1?(x.side=sn,x.needsUpdate=!0,vs(x,C,O),x.side=Xi,x.needsUpdate=!0,vs(x,C,O),x.side=mn):vs(x,C,O)}this.compile=function(x,C,V=null){V===null&&(V=x),B!==null&&B.renderStart(x,C,V),b=oe.get(V),b.init(C),v.push(b),V.traverseVisible(function(z){z.isLight&&z.layers.test(C.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),x!==V&&x.traverseVisible(function(z){z.isLight&&z.layers.test(C.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights(),B!==null&&B.updateLights(b.state.lightsArray),ut=this.localClippingEnabled,qe=we.init(this.clippingPlanes,ut),qe===!0&&we.setGlobalState(this.clippingPlanes,C),B!==null&&Pe.render(b.state.shadowsArray,V,C);const O=new Set;return x.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const he=z.material;if(he)if(Array.isArray(he))for(let _e=0;_e<he.length;_e++){const fe=he[_e];Zc(fe,V,C,z),O.add(fe)}else Zc(he,V,C,z),O.add(he)}),b=v.pop(),B!==null&&B.renderEnd(),O},this.compileAsync=function(x,C,V=null){const O=this.compile(x,C,V);return new Promise(z=>{function he(){if(O.forEach(function(_e){const xe=G.get(_e).currentProgram;(xe===void 0||xe.isReady())&&O.delete(_e)}),O.size===0){z(x);return}setTimeout(he,10)}tt.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Na=null;function bf(x){Na&&Na(x)}function qc(){Ri.stop()}function Yc(){Ri.start()}const Ri=new zd;Ri.setAnimationLoop(bf),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(x){Na=x,Me.setAnimationLoop(x),x===null?Ri.stop():Ri.start()},Me.addEventListener("sessionstart",qc),Me.addEventListener("sessionend",Yc),this.render=function(x,C){if(C!==void 0&&C.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;B!==null&&B.renderStart(x,C);const V=Me.enabled===!0&&Me.isPresenting===!0,O=T!==null&&(ie===null||V)&&T.begin(I,ie);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(C),C=Me.getCamera()),x.isScene===!0&&x.onBeforeRender(I,x,C,ie),b=oe.get(x,v.length),b.init(C),b.state.textureUnits=X.getTextureUnits(),v.push(b),Ve.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),ke.setFromProjectionMatrix(Ve,kn,C.reversedDepth),ut=this.localClippingEnabled,qe=we.init(this.clippingPlanes,ut),y=ue.get(x,R.length),y.init(),R.push(y),Me.enabled===!0&&Me.isPresenting===!0){const _e=I.xr.getDepthSensingMesh();_e!==null&&Ua(_e,C,-1/0,I.sortObjects)}Ua(x,C,0,I.sortObjects),y.finish(),B!==null&&B.updateLights(b.state.lightsArray),I.sortObjects===!0&&y.sort(ve,Le),xt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,xt&&Fe.addToRenderList(y,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qe===!0&&we.beginShadows();const z=b.state.shadowsArray;if(Pe.render(z,x,C),qe===!0&&we.endShadows(),(O&&T.hasRenderPass())===!1){const _e=y.opaque,fe=y.transmissive;if(b.setupLights(),C.isArrayCamera){const xe=C.cameras;if(fe.length>0)for(let be=0,Oe=xe.length;be<Oe;be++){const Ge=xe[be];Kc(_e,fe,x,Ge)}xt&&Fe.render(x);for(let be=0,Oe=xe.length;be<Oe;be++){const Ge=xe[be];Jc(y,x,Ge,Ge.viewport)}}else fe.length>0&&Kc(_e,fe,x,C),xt&&Fe.render(x),Jc(y,x,C)}ie!==null&&W===0&&(X.updateMultisampleRenderTarget(ie),X.updateRenderTargetMipmap(ie)),O&&T.end(I),x.isScene===!0&&x.onAfterRender(I,x,C),pe.resetDefaultState(),$=-1,ee=null,v.pop(),v.length>0?(b=v[v.length-1],X.setTextureUnits(b.state.textureUnits),qe===!0&&we.setGlobalState(I.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?y=R[R.length-1]:y=null,B!==null&&B.renderEnd()};function Ua(x,C,V,O){if(x.visible===!1)return;if(x.layers.test(C.layers)){if(x.isGroup)V=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(C);else if(x.isLightProbeGrid)b.pushLightProbeGrid(x);else if(x.isLight)b.pushLight(x),x.castShadow&&b.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(ke)){O&&Dt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ve);const _e=Q.update(x),fe=x.material;fe.visible&&y.push(x,_e,fe,V,Dt.z,null,C)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(ke))){const _e=Q.update(x),fe=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Dt.copy(x.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Dt.copy(_e.boundingSphere.center)),Dt.applyMatrix4(x.matrixWorld).applyMatrix4(Ve)),Array.isArray(fe)){const xe=_e.groups;for(let be=0,Oe=xe.length;be<Oe;be++){const Ge=xe[be],Se=fe[Ge.materialIndex];Se&&Se.visible&&y.push(x,_e,Se,V,Dt.z,Ge,C)}}else fe.visible&&y.push(x,_e,fe,V,Dt.z,null,C)}}const he=x.children;for(let _e=0,fe=he.length;_e<fe;_e++)Ua(he[_e],C,V,O)}function Jc(x,C,V,O){const{opaque:z,transmissive:he,transparent:_e}=x;b.setupLightsView(V),qe===!0&&we.setGlobalState(I.clippingPlanes,V),O&&g.viewport(ne.copy(O)),z.length>0&&_s(z,C,V),he.length>0&&_s(he,C,V),_e.length>0&&_s(_e,C,V),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Kc(x,C,V,O){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[O.id]===void 0){const Se=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[O.id]=new Pn(1,1,{generateMipmaps:!0,type:Se?Xn:gn,minFilter:zi,samples:Math.max(4,E.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:He.workingColorSpace})}const he=b.state.transmissionRenderTarget[O.id],_e=O.viewport||ne;he.setSize(_e.z*I.transmissionResolutionScale,_e.w*I.transmissionResolutionScale);const fe=I.getRenderTarget(),xe=I.getActiveCubeFace(),be=I.getActiveMipmapLevel();I.setRenderTarget(he),I.getClearColor(lt),Xe=I.getClearAlpha(),Xe<1&&I.setClearColor(16777215,.5),I.clear(),xt&&Fe.render(V);const Oe=I.toneMapping;I.toneMapping=Hn;const Ge=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),b.setupLightsView(O),qe===!0&&we.setGlobalState(I.clippingPlanes,O),_s(x,V,O),X.updateMultisampleRenderTarget(he),X.updateRenderTargetMipmap(he),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let et=0,Tt=C.length;et<Tt;et++){const ht=C[et],{object:ot,geometry:kt,material:me,group:$t}=ht;if(me.side===mn&&ot.layers.test(O.layers)){const $e=me.side;me.side=sn,me.needsUpdate=!0,Qc(ot,V,O,kt,me,$t),me.side=$e,me.needsUpdate=!0,Se=!0}}Se===!0&&(X.updateMultisampleRenderTarget(he),X.updateRenderTargetMipmap(he))}I.setRenderTarget(fe,xe,be),I.setClearColor(lt,Xe),Ge!==void 0&&(O.viewport=Ge),I.toneMapping=Oe}function _s(x,C,V){const O=C.isScene===!0?C.overrideMaterial:null;for(let z=0,he=x.length;z<he;z++){const _e=x[z],{object:fe,geometry:xe,group:be}=_e;let Oe=_e.material;Oe.allowOverride===!0&&O!==null&&(Oe=O),fe.layers.test(V.layers)&&Qc(fe,C,V,xe,Oe,be)}}function Qc(x,C,V,O,z,he){B!==null&&z.isNodeMaterial&&B.setObject(x,z),x.onBeforeRender(I,C,V,O,z,he),x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(I,C,V,O,x,he),z.transparent===!0&&z.side===mn&&z.forceSinglePass===!1?(z.side=sn,z.needsUpdate=!0,I.renderBufferDirect(V,C,O,z,x,he),z.side=Xi,z.needsUpdate=!0,I.renderBufferDirect(V,C,O,z,x,he),z.side=mn):I.renderBufferDirect(V,C,O,z,x,he),x.onAfterRender(I,C,V,O,z,he)}function vs(x,C,V){C.isScene!==!0&&(C=en);const O=G.get(x),z=b.state.lights,he=b.state.shadowsArray,_e=z.state.version,fe=ae.getParameters(x,z.state,he,C,V,b.state.lightProbeGridArray),xe=ae.getProgramCacheKey(fe);let be=O.programs;O.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,O.fog=C.fog;const Oe=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;O.envMap=re.get(x.envMap||O.environment,Oe),O.envMapRotation=O.environment!==null&&x.envMap===null?C.environmentRotation:x.envMapRotation,be===void 0&&(x.addEventListener("dispose",Nn),be=new Map,O.programs=be);let Ge=be.get(xe);if(Ge!==void 0){if(O.currentProgram===Ge&&O.lightsStateVersion===_e)return el(x,fe),Ge}else fe.uniforms=ae.getUniforms(x),B!==null&&x.isNodeMaterial&&B.build(x,V,fe),x.onBeforeCompile(fe,I),Ge=ae.acquireProgram(fe,xe),be.set(xe,Ge),O.uniforms=fe.uniforms;const Se=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Se.clippingPlanes=we.uniform),el(x,fe),O.needsLights=Af(x),O.lightsStateVersion=_e,O.needsLights&&(Se.ambientLightColor.value=z.state.ambient,Se.lightProbe.value=z.state.probe,Se.sunLights.value=z.state.sun,Se.sunLightShadows.value=z.state.sunShadow,Se.directionalLights.value=z.state.directional,Se.directionalLightShadows.value=z.state.directionalShadow,Se.spotLights.value=z.state.spot,Se.spotLightShadows.value=z.state.spotShadow,Se.rectAreaLights.value=z.state.rectArea,Se.ltc_1.value=z.state.rectAreaLTC1,Se.ltc_2.value=z.state.rectAreaLTC2,Se.pointLights.value=z.state.point,Se.pointLightShadows.value=z.state.pointShadow,Se.hemisphereLights.value=z.state.hemi,Se.sunShadowMatrix.value=z.state.sunShadowMatrix,Se.sunShadowCascade.value=z.state.sunShadowCascade,Se.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Se.spotLightMatrix.value=z.state.spotLightMatrix,Se.spotLightMap.value=z.state.spotLightMap,Se.pointShadowMatrix.value=z.state.pointShadowMatrix),O.lightProbeGrid=b.state.lightProbeGridArray.length>0,O.currentProgram=Ge,O.uniformsList=null,Ge}function jc(x){if(x.uniformsList===null){const C=x.currentProgram.getUniforms();x.uniformsList=ta.seqWithValue(C.seq,x.uniforms)}return x.uniformsList}function el(x,C){const V=G.get(x);V.outputColorSpace=C.outputColorSpace,V.batching=C.batching,V.batchingColor=C.batchingColor,V.instancing=C.instancing,V.instancingColor=C.instancingColor,V.instancingMorph=C.instancingMorph,V.skinning=C.skinning,V.morphTargets=C.morphTargets,V.morphNormals=C.morphNormals,V.morphColors=C.morphColors,V.morphTargetsCount=C.morphTargetsCount,V.numClippingPlanes=C.numClippingPlanes,V.numIntersection=C.numClipIntersection,V.vertexAlphas=C.vertexAlphas,V.vertexTangents=C.vertexTangents,V.toneMapping=C.toneMapping}function Ef(x,C){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;M.setFromMatrixPosition(C.matrixWorld);for(let V=0,O=x.length;V<O;V++){const z=x[V];if(z.texture!==null&&z.boundingBox.containsPoint(M))return z}return null}function wf(x,C,V,O,z){C.isScene!==!0&&(C=en),X.resetTextureUnits();const he=C.fog,_e=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?C.environment:null,fe=ie===null?I.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:He.workingColorSpace,xe=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,be=re.get(O.envMap||_e,xe),Oe=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ge=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Se=!!V.morphAttributes.position,et=!!V.morphAttributes.normal,Tt=!!V.morphAttributes.color;let ht=Hn;O.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ht=I.toneMapping);const ot=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,kt=ot!==void 0?ot.length:0,me=G.get(O),$t=b.state.lights;if(qe===!0&&(ut===!0||x!==ee)){const ft=x===ee&&O.id===$;we.setState(O,x,ft)}let $e=!1;O.version===me.__version?(me.needsLights&&me.lightsStateVersion!==$t.state.version||me.outputColorSpace!==fe||z.isBatchedMesh&&me.batching===!1||!z.isBatchedMesh&&me.batching===!0||z.isBatchedMesh&&me.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&me.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&me.instancing===!1||!z.isInstancedMesh&&me.instancing===!0||z.isSkinnedMesh&&me.skinning===!1||!z.isSkinnedMesh&&me.skinning===!0||z.isInstancedMesh&&me.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&me.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&me.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&me.instancingMorph===!1&&z.morphTexture!==null||me.envMap!==be||O.fog===!0&&me.fog!==he||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==we.numPlanes||me.numIntersection!==we.numIntersection)||me.vertexAlphas!==Oe||me.vertexTangents!==Ge||me.morphTargets!==Se||me.morphNormals!==et||me.morphColors!==Tt||me.toneMapping!==ht||me.morphTargetsCount!==kt||!!me.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&($e=!0):($e=!0,me.__version=O.version);let fn=me.currentProgram;$e===!0&&(fn=vs(O,C,z),B&&O.isNodeMaterial&&B.onUpdateProgram(O,fn,me));let Un=!1,oi=!1,Qi=!1;const st=fn.getUniforms(),bt=me.uniforms;if(g.useProgram(fn.program)&&(Un=!0,oi=!0,Qi=!0),O.id!==$&&($=O.id,oi=!0),me.needsLights){const ft=Ef(b.state.lightProbeGridArray,z);me.lightProbeGrid!==ft&&(me.lightProbeGrid=ft,oi=!0)}if(Un||ee!==x){g.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),st.setValue(L,"projectionMatrix",x.projectionMatrix),st.setValue(L,"viewMatrix",x.matrixWorldInverse);const li=st.map.cameraPosition;li!==void 0&&li.setValue(L,mt.setFromMatrixPosition(x.matrixWorld)),E.logarithmicDepthBuffer&&st.setValue(L,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&st.setValue(L,"isOrthographic",x.isOrthographicCamera===!0),ee!==x&&(ee=x,oi=!0,Qi=!0)}if(me.needsLights&&($t.state.sunShadowMap.length>0&&st.setValue(L,"sunShadowMap",$t.state.sunShadowMap,X),$t.state.directionalShadowMap.length>0&&st.setValue(L,"directionalShadowMap",$t.state.directionalShadowMap,X),$t.state.spotShadowMap.length>0&&st.setValue(L,"spotShadowMap",$t.state.spotShadowMap,X),$t.state.pointShadowMap.length>0&&st.setValue(L,"pointShadowMap",$t.state.pointShadowMap,X)),z.isSkinnedMesh){st.setOptional(L,z,"bindMatrix"),st.setOptional(L,z,"bindMatrixInverse");const ft=z.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),st.setValue(L,"boneTexture",ft.boneTexture,X))}z.isBatchedMesh&&(st.setOptional(L,z,"batchingTexture"),st.setValue(L,"batchingTexture",z._matricesTexture,X),st.setOptional(L,z,"batchingIdTexture"),st.setValue(L,"batchingIdTexture",z._indirectTexture,X),st.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&st.setValue(L,"batchingColorTexture",z._colorsTexture,X));const ci=V.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&P.update(z,V,fn),(oi||me.receiveShadow!==z.receiveShadow)&&(me.receiveShadow=z.receiveShadow,st.setValue(L,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&C.environment!==null&&(bt.envMapIntensity.value=C.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=Ny()),oi){if(st.setValue(L,"toneMappingExposure",I.toneMappingExposure),me.needsLights&&Tf(bt,Qi),he&&O.fog===!0&&Ee.refreshFogUniforms(bt,he),Ee.refreshMaterialUniforms(bt,O,j,Z,b.state.transmissionRenderTarget[x.id]),me.needsLights&&me.lightProbeGrid){const ft=me.lightProbeGrid;bt.probesSH.value=ft.texture,bt.probesMin.value.copy(ft.boundingBox.min),bt.probesMax.value.copy(ft.boundingBox.max),bt.probesResolution.value.copy(ft.resolution)}ta.upload(L,jc(me),bt,X)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ta.upload(L,jc(me),bt,X),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&st.setValue(L,"center",z.center),st.setValue(L,"modelViewMatrix",z.modelViewMatrix),st.setValue(L,"normalMatrix",z.normalMatrix),st.setValue(L,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){const ft=O.uniformsGroups;for(let li=0,ji=ft.length;li<ji;li++){const nl=ft[li];te.update(nl,fn),te.bind(nl,fn)}}return fn}function Tf(x,C){x.ambientLightColor.needsUpdate=C,x.lightProbe.needsUpdate=C,x.sunLights.needsUpdate=C,x.sunLightShadows.needsUpdate=C,x.directionalLights.needsUpdate=C,x.directionalLightShadows.needsUpdate=C,x.pointLights.needsUpdate=C,x.pointLightShadows.needsUpdate=C,x.spotLights.needsUpdate=C,x.spotLightShadows.needsUpdate=C,x.rectAreaLights.needsUpdate=C,x.hemisphereLights.needsUpdate=C}function Af(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(x,C,V){const O=G.get(x);O.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),G.get(x.texture).__webglTexture=C,G.get(x.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:V,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,C){const V=G.get(x);V.__webglFramebuffer=C,V.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(x,C=0,V=0){ie=x,Y=C,W=V;let O=null,z=!1,he=!1;if(x){const fe=G.get(x);if(fe.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(L.FRAMEBUFFER,fe.__webglFramebuffer),ne.copy(x.viewport),Ce.copy(x.scissor),Ae=x.scissorTest,g.viewport(ne),g.scissor(Ce),g.setScissorTest(Ae),$=-1;return}else if(fe.__webglFramebuffer===void 0)X.setupRenderTarget(x);else if(fe.__hasExternalTextures)X.rebindTextures(x,G.get(x.texture).__webglTexture,G.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Oe=x.depthTexture;if(fe.__boundDepthTexture!==Oe){if(Oe!==null&&G.has(Oe)&&(x.width!==Oe.image.width||x.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(x)}}const xe=x.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(he=!0);const be=G.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(be[C])?O=be[C][V]:O=be[C],z=!0):x.samples>0&&X.useMultisampledRTT(x)===!1?O=G.get(x).__webglMultisampledFramebuffer:Array.isArray(be)?O=be[V]:O=be,ne.copy(x.viewport),Ce.copy(x.scissor),Ae=x.scissorTest}else ne.copy(ge).multiplyScalar(j).floor(),Ce.copy(Be).multiplyScalar(j).floor(),Ae=Pt;if(V!==0&&(O=H),g.bindFramebuffer(L.FRAMEBUFFER,O)&&g.drawBuffers(x,O),g.viewport(ne),g.scissor(Ce),g.setScissorTest(Ae),z){const fe=G.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+C,fe.__webglTexture,V)}else if(he){const fe=C;for(let xe=0;xe<x.textures.length;xe++){const be=G.get(x.textures[xe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+xe,be.__webglTexture,V,fe)}}else if(x!==null&&V!==0){const fe=G.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,fe.__webglTexture,V)}$=-1};function tl(x){const C=G.get(x);return(C.__readFormat!==x.format||C.__readType!==x.type)&&(C.__readFormat=x.format,C.__readType=x.type,C.__formatReadable=E.textureFormatReadable(x.format),C.__typeReadable=E.textureTypeReadable(x.type)),C}this.readRenderTargetPixels=function(x,C,V,O,z,he,_e,fe=0){if(!(x&&x.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_e!==void 0&&(xe=xe[_e]),xe){g.bindFramebuffer(L.FRAMEBUFFER,xe);try{const be=x.textures[fe],Oe=be.format,Ge=be.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe);const Se=tl(be);if(Se.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=x.width-O&&V>=0&&V<=x.height-z&&L.readPixels(C,V,O,z,le.convert(Oe),le.convert(Ge),he)}finally{const be=ie!==null?G.get(ie).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(x,C,V,O,z,he,_e,fe=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_e!==void 0&&(xe=xe[_e]),xe)if(C>=0&&C<=x.width-O&&V>=0&&V<=x.height-z){g.bindFramebuffer(L.FRAMEBUFFER,xe);const be=x.textures[fe],Oe=be.format,Ge=be.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe);const Se=tl(be);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,et),L.bufferData(L.PIXEL_PACK_BUFFER,he.byteLength,L.STREAM_READ),L.readPixels(C,V,O,z,le.convert(Oe),le.convert(Ge),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const Tt=ie!==null?G.get(ie).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,Tt);const ht=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await j_(L,ht,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,et),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,he),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(et),L.deleteSync(ht),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,C=null,V=0){const O=Math.pow(2,-V),z=Math.floor(x.image.width*O),he=Math.floor(x.image.height*O),_e=C!==null?C.x:0,fe=C!==null?C.y:0;X.setTexture2D(x,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,_e,fe,z,he),g.unbindTexture()},this.copyTextureToTexture=function(x,C,V=null,O=null,z=0,he=0){let _e,fe,xe,be,Oe,Ge,Se,et,Tt;const ht=x.isCompressedTexture?x.mipmaps[he]:x.image;if(V!==null)_e=V.max.x-V.min.x,fe=V.max.y-V.min.y,xe=V.isBox3?V.max.z-V.min.z:1,be=V.min.x,Oe=V.min.y,Ge=V.isBox3?V.min.z:0;else{const bt=Math.pow(2,-z);_e=Math.floor(ht.width*bt),fe=Math.floor(ht.height*bt),x.isDataArrayTexture?xe=ht.depth:x.isData3DTexture?xe=Math.floor(ht.depth*bt):xe=1,be=0,Oe=0,Ge=0}O!==null?(Se=O.x,et=O.y,Tt=O.z):(Se=0,et=0,Tt=0);const ot=le.convert(C.format),kt=le.convert(C.type);let me;C.isData3DTexture?(X.setTexture3D(C,0),me=L.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(X.setTexture2DArray(C,0),me=L.TEXTURE_2D_ARRAY):(X.setTexture2D(C,0),me=L.TEXTURE_2D),g.activeTexture(L.TEXTURE0),g.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,C.flipY),g.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),g.pixelStorei(L.UNPACK_ALIGNMENT,C.unpackAlignment);const $t=g.getParameter(L.UNPACK_ROW_LENGTH),$e=g.getParameter(L.UNPACK_IMAGE_HEIGHT),fn=g.getParameter(L.UNPACK_SKIP_PIXELS),Un=g.getParameter(L.UNPACK_SKIP_ROWS),oi=g.getParameter(L.UNPACK_SKIP_IMAGES);g.pixelStorei(L.UNPACK_ROW_LENGTH,ht.width),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht.height),g.pixelStorei(L.UNPACK_SKIP_PIXELS,be),g.pixelStorei(L.UNPACK_SKIP_ROWS,Oe),g.pixelStorei(L.UNPACK_SKIP_IMAGES,Ge);const Qi=x.isDataArrayTexture||x.isData3DTexture,st=C.isDataArrayTexture||C.isData3DTexture;if(x.isDepthTexture){const bt=G.get(x),ci=G.get(C),ft=G.get(bt.__renderTarget),li=G.get(ci.__renderTarget);g.bindFramebuffer(L.READ_FRAMEBUFFER,ft.__webglFramebuffer),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let ji=0;ji<xe;ji++)Qi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(x).__webglTexture,z,Ge+ji),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(C).__webglTexture,he,Tt+ji)),L.blitFramebuffer(be,Oe,_e,fe,Se,et,_e,fe,L.DEPTH_BUFFER_BIT,L.NEAREST);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||x.isRenderTargetTexture||G.has(x)){const bt=G.get(x),ci=G.get(C);g.bindFramebuffer(L.READ_FRAMEBUFFER,D),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,k);for(let ft=0;ft<xe;ft++)Qi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bt.__webglTexture,z,Ge+ft):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bt.__webglTexture,z),st?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ci.__webglTexture,he,Tt+ft):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ci.__webglTexture,he),z!==0?L.blitFramebuffer(be,Oe,_e,fe,Se,et,_e,fe,L.COLOR_BUFFER_BIT,L.NEAREST):st?L.copyTexSubImage3D(me,he,Se,et,Tt+ft,be,Oe,_e,fe):L.copyTexSubImage2D(me,he,Se,et,be,Oe,_e,fe);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else st?x.isDataTexture||x.isData3DTexture?L.texSubImage3D(me,he,Se,et,Tt,_e,fe,xe,ot,kt,ht.data):C.isCompressedArrayTexture?L.compressedTexSubImage3D(me,he,Se,et,Tt,_e,fe,xe,ot,ht.data):L.texSubImage3D(me,he,Se,et,Tt,_e,fe,xe,ot,kt,ht):x.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,he,Se,et,_e,fe,ot,kt,ht.data):x.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,he,Se,et,ht.width,ht.height,ot,ht.data):L.texSubImage2D(L.TEXTURE_2D,he,Se,et,_e,fe,ot,kt,ht);g.pixelStorei(L.UNPACK_ROW_LENGTH,$t),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$e),g.pixelStorei(L.UNPACK_SKIP_PIXELS,fn),g.pixelStorei(L.UNPACK_SKIP_ROWS,Un),g.pixelStorei(L.UNPACK_SKIP_IMAGES,oi),he===0&&C.generateMipmaps&&L.generateMipmap(me),g.unbindTexture()},this.initRenderTarget=function(x){G.get(x).__webglFramebuffer===void 0&&X.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?X.setTextureCube(x,0):x.isData3DTexture?X.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?X.setTexture2DArray(x,0):X.setTexture2D(x,0),g.unbindTexture()},this.resetState=function(){Y=0,W=0,ie=null,g.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}}const hr=jn([Ne().finite(),Ne().finite(),Ne().finite()]),Qn=jn([Ne().int().min(0).max(255),Ne().int().min(0).max(255),Ne().int().min(0).max(255),Ne().int().min(0).max(255)]),En=Ne().int().nonnegative(),Eu=at(Ne().finite()).length(16),Fy=Rt({background:Qn,grid:Qn,surface:Qn,bars:Qn,wireframe:Qn,stroke:Qn,points:Qn,text:Qn,line_width:Ne().nonnegative(),grid_width:Ne().nonnegative(),axis_width:Ne().nonnegative(),point_radius:Ne().nonnegative(),arrow_length:Ne().nonnegative(),arrow_width:Ne().nonnegative()}),$d=Rt({dimension:Ec([Vn(2),Vn(3)]),title:vn(),style:Fy,vertices:at(Rt({position:hr})).max(1e5),points:at(En).max(1e5),triangles:at(jn([En,En,En])).max(2e5),cells:at(Wi()).max(1e3),show_grid:Kn(),show_axes:Kn(),show_axis_arrows:Kn(),axes:at(Rt({label:vn(),unit:vn(),color:Qn,begin:hr,end:hr,ticks:at(Rt({value:Ne().finite(),position:hr})).max(1e3)})).max(3),rendering:Rt({version:Vn(1),host_background:Kn().default(!1),host_axis_colors:jn([Kn(),Kn(),Kn()]).default([!1,!1,!1]),canvas_size:jn([Ne().min(64).max(4096),Ne().min(64).max(4096)]).default([1e3,700]),view_matrix:Eu,projection_matrix:Eu,viewport:jn([Ne(),Ne(),Ne().positive(),Ne().positive()]),segment_indices:at(jn([En,En])).max(2e5),grid_lines:at(Rt({origin:hr,direction:hr})).max(1e3),surface:Rt({wireframe_indices:at(jn([En,En])).max(3e5),levels:at(Rt({triangles:at(jn([En,En,En])).max(2e5),max_error_world:Ne().finite().nonnegative()})).max(16),lod_enabled:Kn(),max_error_pixels:Ne().finite().positive().max(20)}).optional()})}),Oy=`
attribute vec3 direction;
attribute float edge;
attribute float side;
uniform float line_width;
uniform vec2 resolution;
bool plane_clip(float p, float q, inout float lo, inout float hi) {
	if (abs(q) < 1e-12) return p >= 0.0;
	float t = -p / q;
	if (q > 0.0) lo = max(lo, t); else hi = min(hi, t);
	return lo <= hi;
}
void main() {
	vec4 a = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	vec4 b = projectionMatrix * modelViewMatrix * vec4(direction, 0.0);
	float lo = -1e30, hi = 1e30;
	bool ok = plane_clip(a.w+a.x,b.w+b.x,lo,hi);
	ok = plane_clip(a.w-a.x,b.w-b.x,lo,hi) && ok;
	ok = plane_clip(a.w+a.y,b.w+b.y,lo,hi) && ok;
	ok = plane_clip(a.w-a.y,b.w-b.y,lo,hi) && ok;
	ok = plane_clip(a.w+a.z,b.w+b.z,lo,hi) && ok;
	ok = plane_clip(a.w-a.z,b.w-b.z,lo,hi) && ok;
	vec4 p = a + lo * b;
	vec4 q = a + hi * b;
	vec2 delta = (q.xy / q.w - p.xy / p.w) * resolution;
	vec2 normal = vec2(-delta.y, delta.x) / max(length(delta), 1e-12);
	vec4 end = mix(p, q, edge);
	end.xy += normal * side * line_width / resolution * end.w;
	gl_Position = ok ? end : vec4(2.0,2.0,2.0,1.0);
}`;function pr(n){return new Ze(`rgb(${n[0]},${n[1]},${n[2]})`)}class Zd{constructor(e,t){this.canvas=e,this.labels=t;const i=t.getContext("2d");if(!i)throw new Error("Canvas labels unavailable");this.ink=i,this.renderer=new Uy({canvas:e,antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(1e3,700,!1),this.renderer.setPixelRatio(1),t.width=1e3,t.height=700,this.camera.matrixAutoUpdate=!1,this.scene.add(this.root),e.dataset.renderer="webgl2",this.resize_observer=new ResizeObserver(()=>{this.resize()}),this.resize_observer.observe(e)}canvas;renderer;scene=new mv;root=new Jr;camera=new zc;ink;data;base;labels;frames=0;times=[];disposed=!1;dark=!1;pixel_scale=1;buffer_width=1e3;buffer_height=700;resize_observer;axis_lines=[];surface_geometry;levels=[];current_level=-1;line_updates=[];surface_bounds=new Nr;axis_tint(e){const t=this.data,i=t.axes[e].color;if(t.dimension===2&&t.rendering.host_axis_colors[e]){const r=this.dark?255:0;return[r,r,r,i[3]]}return i}set_theme(e){this.dark=e;for(const[t,i]of this.axis_lines.entries())if(i){const r=pr(this.axis_tint(t)),s=i.material.uniforms.tint.value;s.set(r.r,r.g,r.b,s.w)}this.draw()}resize(){const e=this.canvas.getBoundingClientRect().width;if(this.disposed||e<=0)return;const t=this.buffer_width/e,i=t/this.pixel_scale;this.pixel_scale=t,this.root.traverse(r=>{if(!(r instanceof nn||r instanceof fo))return;const s=Array.isArray(r.material)?r.material:[r.material];for(const a of s)if(a instanceof rn)for(const o of["line_width","size"])a.uniforms[o]&&(a.uniforms[o].value*=i)}),this.canvas.dataset.pixelScale=String(t),this.draw()}clear(){this.root.traverse(e=>{if(e instanceof nn||e instanceof Tv||e instanceof fo){e.geometry.dispose();const t=Array.isArray(e.material)?e.material:[e.material];for(const i of t)i.dispose()}}),this.root.clear(),this.axis_lines=[],this.surface_geometry=void 0,this.levels=[],this.current_level=-1,this.line_updates=[]}lines(e,t,i,r=!1){if(!e.length||!t[3]||!i)return;const s=e.length/6,a=new Float32Array(s*4*4),o=new Uint32Array(s*6);for(let M=0;M<s;++M)o.set([M*4,M*4+1,M*4+2,M*4+2,M*4+3,M*4],M*6);const c=new Kt,l=new In(a,4).setUsage(Pl);c.setAttribute("clip_position",l),c.setIndex(new In(o,1));const u=pr(t),f=new rn({vertexShader:"attribute vec4 clip_position; void main() { gl_Position = clip_position; }",fragmentShader:`uniform vec4 tint; void main() { gl_FragColor = tint;
				#include <colorspace_fragment>
			}`,uniforms:{tint:{value:new ct(u.r,u.g,u.b,t[3]/255)},line_width:{value:i*this.pixel_scale}},transparent:r||t[3]<255,depthWrite:!1,depthTest:!r,side:mn}),d=new nn(c,f);d.renderOrder=r?10:0,d.frustumCulled=!1,this.root.add(d);const h=new it,_=new it,S=new ct,m=new ct,[,,p,w]=this.data.rendering.viewport;let A=NaN;return this.line_updates.push(()=>{h.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse).multiply(this.root.matrix);const M=f.uniforms.line_width.value;if(!(h.equals(_)&&M===A)){_.copy(h),A=M;for(let y=0;y<s;++y){const b=y*6;S.set(e[b],e[b+1],e[b+2],1).applyMatrix4(h),m.set(e[b+3],e[b+4],e[b+5],1).applyMatrix4(h);const R=S.z+S.w,v=m.z+m.w;if(R<0&&v<0){a.fill(0,y*16,(y+1)*16);continue}R<0?S.lerp(m,R/(R-v)):v<0&&m.lerp(S,v/(v-R));const T=(m.x/m.w-S.x/S.w)*p,I=(m.y/m.w-S.y/S.w)*w,N=Math.hypot(T,I);if(N<=1e-10||!Number.isFinite(N)){a.fill(0,y*16,(y+1)*16);continue}const B=-I*M/(N*p),H=T*M/(N*w);for(let D=0;D<4;++D){const k=D<2?S:m,Y=D===0||D===3?-1:1,W=y*16+D*4;a[W]=k.x+B*Y*k.w,a[W+1]=k.y+H*Y*k.w,a[W+2]=k.z,a[W+3]=k.w}}l.needsUpdate=!0}}),d}load(e,t){const i=e.vertices.length,r=e.rendering.surface?.levels.flatMap(f=>f.triangles.flat())??[];for(const f of[...e.triangles.flat(),...e.rendering.segment_indices.flat(),...e.points,...e.rendering.surface?.wireframe_indices.flat()??[],...r])if(f>=i)throw new Error("Scene index exceeds vertex count");this.clear(),this.data=e,this.canvas.dataset.camera=JSON.stringify(t.camera),this.canvas.dataset.view=JSON.stringify(t.view),this.canvas.dataset.gridLines=String(e.rendering.grid_lines.length),[this.buffer_width,this.buffer_height]=e.rendering.canvas_size,this.renderer.setSize(this.buffer_width,this.buffer_height,!1),this.labels.width=this.buffer_width,this.labels.height=this.buffer_height,this.pixel_scale=this.buffer_width/Math.max(1,this.canvas.getBoundingClientRect().width),this.canvas.title=e.axes.map(f=>f.label+(f.unit?` (${f.unit})`:"")).join(" · "),this.base=structuredClone(t),this.root.matrixAutoUpdate=!1,this.root.matrix.identity(),this.camera.matrixWorld.fromArray(e.rendering.view_matrix).transpose().invert(),this.camera.matrix.copy(this.camera.matrixWorld),this.camera.matrixWorldInverse.copy(this.camera.matrixWorld).invert(),this.camera.projectionMatrix.fromArray(e.rendering.projection_matrix).transpose();const s=new it().set(1,0,0,0,0,1,0,0,0,0,2,-1,0,0,0,1);this.camera.projectionMatrix.premultiply(s),this.camera.projectionMatrixInverse.copy(this.camera.projectionMatrix).invert();const a=e.vertices.flatMap(f=>f.position),o=e.cells.length?e.style.bars:e.style.surface;if(e.triangles.length&&o[3]){const f=new Kt;f.setAttribute("position",new Wt(a,3)),f.setIndex(new Uc(e.triangles.flat(),1).setUsage(Pl)),this.surface_geometry=f,f.computeBoundingBox(),this.surface_bounds.copy(f.boundingBox),this.levels=[{indices:new Uint32Array(e.triangles.flat()),error:0}];for(const h of e.rendering.surface?.lod_enabled?e.rendering.surface.levels:[])this.levels.push({indices:new Uint32Array(h.triangles.flat()),error:h.max_error_world});const d=new Oc({color:pr(o),opacity:o[3]/255,transparent:o[3]<255,side:mn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,forceSinglePass:!0});this.root.add(new nn(f,d))}const c=[];if(!e.cells.length&&e.rendering.surface)for(const[f,d]of e.rendering.surface.wireframe_indices)c.push(...e.vertices[f].position,...e.vertices[d].position);const l=this.lines(c,e.style.wireframe,1);l&&(l.material.transparent=!0,l.renderOrder=1),this.canvas.dataset.wireSegments=String(c.length/6),this.canvas.dataset.sourceTriangles=String(e.triangles.length);const u=[];for(const[f,d]of e.rendering.segment_indices)u.push(...e.vertices[f].position,...e.vertices[d].position);if(this.lines(u,e.style.stroke,e.style.line_width),e.points.length&&e.style.points[3]&&e.style.point_radius){const f=new Kt;f.setAttribute("position",new Wt(e.points.flatMap(_=>e.vertices[_].position),3));const d=pr(e.style.points),h=new rn({vertexShader:`uniform float size; void main() {
					gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_PointSize = size;
				}`,fragmentShader:`uniform vec4 tint; void main() {
					if (length(gl_PointCoord - vec2(.5)) > .5) discard;
					gl_FragColor = tint;
					#include <colorspace_fragment>
				}`,uniforms:{tint:{value:new ct(d.r,d.g,d.b,e.style.points[3]/255)},size:{value:e.style.point_radius*2*this.pixel_scale}},transparent:!0});this.root.add(new fo(f,h))}if(e.show_grid&&e.style.grid[3]&&e.style.grid_width){const f=[],d=[],h=[],_=[];for(const A of e.rendering.grid_lines){for(let M=0;M<6;++M)f.push(...A.origin),d.push(...A.direction);h.push(0,0,1,1,1,0),_.push(-1,1,1,1,-1,-1)}const S=new Kt;S.setAttribute("position",new Wt(f,3)),S.setAttribute("direction",new Wt(d,3)),S.setAttribute("edge",new Wt(h,1)),S.setAttribute("side",new Wt(_,1));const m=pr(e.style.grid),p=new rn({vertexShader:Oy,fragmentShader:`uniform vec4 tint; void main() { gl_FragColor = tint;
					#include <colorspace_fragment>
				}`,uniforms:{tint:{value:new ct(m.r,m.g,m.b,e.style.grid[3]/255)},line_width:{value:e.style.grid_width*this.pixel_scale},resolution:{value:new Ke(e.rendering.viewport[2],e.rendering.viewport[3])}},transparent:!0,depthWrite:!1,side:mn}),w=new nn(S,p);w.renderOrder=-10,w.frustumCulled=!1,this.root.add(w)}if(e.show_axes)for(const[f,d]of e.axes.entries())this.axis_lines.push(this.lines([...d.begin,...d.end],this.axis_tint(f),e.style.axis_width,!0));this.renderer.setClearColor(pr(e.style.background),e.rendering.host_background?0:e.style.background[3]/255),this.draw()}preview(e){if(!this.base)return;const t=this.base;if(e.dimension===3){const i=e.camera,r=new F().fromArray(i.target);this.camera.matrix.lookAt(new F().fromArray(i.eye),r,new F().fromArray(i.up)),this.camera.matrix.setPosition(new F().fromArray(i.eye)),this.camera.matrixWorld.copy(this.camera.matrix),this.camera.matrixWorldInverse.copy(this.camera.matrixWorld).invert();const s=i.projection==="orthographic"?t.camera.orthographic_width/i.orthographic_width:1;this.root.matrix.makeTranslation(...r.toArray()),this.root.matrix.scale(new F(s,s,s)),this.root.matrix.multiply(new it().makeTranslation(...r.negate().toArray()))}else{const i=new F((t.view.lower[0]+t.view.upper[0])/2,(t.view.lower[1]+t.view.upper[1])/2,0),r=new F((e.view.lower[0]+e.view.upper[0])/2,(e.view.lower[1]+e.view.upper[1])/2,0),s=(t.view.upper[0]-t.view.lower[0])/(e.view.upper[0]-e.view.lower[0]);this.root.matrix.makeTranslation(...i.toArray()),this.root.matrix.scale(new F(s,s,1)),this.root.matrix.multiply(new it().makeTranslation(...r.negate().toArray()))}}pan_offset(e,t,i){const r=new F().fromArray(i).project(this.camera),s=r.clone().unproject(this.camera);return new F(r.x-e*2*this.buffer_width/this.data.rendering.viewport[2],r.y+t*2*this.buffer_height/this.data.rendering.viewport[3],r.z).unproject(this.camera).sub(s).toArray()}select_detail(){if(!this.surface_geometry||!this.data)return;const e=new it().multiplyMatrices(this.camera.matrixWorldInverse,this.root.matrix),t=this.camera.projectionMatrix.elements,[,,i,r]=this.data.rendering.viewport,s=Math.abs(t[0])*i/(2*this.pixel_scale),a=Math.abs(t[5])*r/(2*this.pixel_scale),o=new F().setFromMatrixColumn(this.root.matrix,0).length(),c=this.surface_bounds.clone().applyMatrix4(e),l=-c.max.z,u=t[15]===0,f=u?t[14]/(t[10]-1):0,d=this.data.rendering.surface?.max_error_pixels??1;let h=0,_=0;for(let S=1;S<this.levels.length;++S){const m=this.levels[S].error*o;let p=m*Math.hypot(s,a);if(u){if(l-m<=f)continue;const w=Math.max(Math.abs(c.min.x),Math.abs(c.max.x)),A=Math.max(Math.abs(c.min.y),Math.abs(c.max.y));p=m*Math.hypot(s*(1+w/l),a*(1+A/l))/(l-m)}p<=d&&(h=S,_=p)}if(h!==this.current_level){const S=this.surface_geometry.getIndex();S.array.set(this.levels[h].indices),S.needsUpdate=!0,this.surface_geometry.setDrawRange(0,this.levels[h].indices.length),this.current_level=h}this.canvas.dataset.lodLevel=String(h),this.canvas.dataset.renderTriangles=String(this.levels[h].indices.length/3),this.canvas.dataset.lodErrorPixels=String(_)}draw(){if(!this.data||this.disposed)return;const e=performance.now();this.select_detail();for(const a of this.line_updates)a();const[t,i,r,s]=this.data.rendering.viewport;for(this.renderer.setViewport(0,0,this.buffer_width,this.buffer_height),this.renderer.clear(),this.renderer.setViewport(t,this.buffer_height-i-s,r,s),this.renderer.setScissor(t,this.buffer_height-i-s,r,s),this.renderer.setScissorTest(!0),this.renderer.autoClear=!1,this.renderer.render(this.scene,this.camera),this.renderer.setScissorTest(!1),this.draw_labels(),++this.frames,this.times.push(e);this.times.length>2&&this.times[0]<e-1e3;)this.times.shift();this.canvas.dataset.frames=String(this.frames),this.canvas.dataset.fps=String((this.times.length-1)*1e3/Math.max(1,e-this.times[0])),this.canvas.dataset.drawMs=String(performance.now()-e)}draw_labels(){if(!this.data)return;const e=this.data,t=this.ink,[i,r,s,a]=e.rendering.viewport,o=this.pixel_scale,c=13*o,l=3*o,u=[];t.clearRect(0,0,this.buffer_width,this.buffer_height),t.font=`${c}px ${getComputedStyle(this.canvas).fontFamily||"system-ui"}`,t.textBaseline="top",t.save(),t.beginPath(),t.rect(i,r,s,a),t.clip();const f=w=>new F().fromArray(w).applyMatrix4(this.root.matrix).project(this.camera),[d,h,_,S]=e.style.background,m=e.rendering.host_background?getComputedStyle(this.canvas.parentElement).backgroundColor:`rgba(${d},${h},${_},${S/255})`,p=(w,A,M,y)=>{if(!w||!y[3])return;const b=s-l*2;if(t.measureText(w).width>b){const T=Array.from(w);let I=0,N=T.length;for(;I<N;){const B=Math.ceil((I+N)/2);t.measureText(T.slice(0,B).join("")+"…").width<=b?I=B:N=B-1}w=T.slice(0,I).join("")+"…"}const R=t.measureText(w).width,v={x:Math.max(i+l,Math.min(i+s-R-l,A)),y:Math.max(r+l,Math.min(r+a-c*1.25-l,M)),width:R,height:c*1.25};u.some(T=>v.x<T.x+T.width+l&&T.x<v.x+v.width+l&&v.y<T.y+T.height+l&&T.y<v.y+v.height+l)||(u.push(v),t.save(),t.globalAlpha=y[3]/255,t.strokeStyle=m,t.lineWidth=3*o,t.lineJoin="round",t.strokeText(w,v.x,v.y),t.fillStyle=`rgb(${y[0]},${y[1]},${y[2]})`,t.fillText(w,v.x,v.y),t.restore())};if(e.show_axes)for(const[w,A]of e.axes.entries()){const M=this.axis_tint(w);t.fillStyle=`rgba(${M[0]},${M[1]},${M[2]},${M[3]/255})`;const y=f(A.end);if(Math.abs(y.x)<=1&&Math.abs(y.y)<=1&&Math.abs(y.z)<=1){const b=i+(y.x+1)*s/2,R=r+(1-y.y)*a/2;if(p(A.label+(A.unit?` (${A.unit})`:""),b+5*o,R+5*o,M),e.show_axis_arrows){const v=f(A.begin),T=Math.atan2(-(y.y-v.y)*a,(y.x-v.x)*s);t.save(),t.translate(b,R),t.rotate(T),t.beginPath(),t.moveTo(0,0),t.lineTo(-e.style.arrow_length*o,-e.style.arrow_width*o/2),t.lineTo(-e.style.arrow_length*o,e.style.arrow_width*o/2),t.closePath(),t.fill(),t.restore()}}}if(e.show_axes)for(const[w,A]of e.axes.entries())for(const M of A.ticks){const y=f(M.position);Math.abs(y.x)>1||Math.abs(y.y)>1||Math.abs(y.z)>1||p(Number(M.value.toPrecision(3)).toString(),i+(y.x+1)*s/2+3*o,r+(1-y.y)*a/2+8*o,this.axis_tint(w))}t.restore()}dispose(){this.disposed=!0,this.resize_observer.disconnect(),this.clear(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.ink.clearRect(0,0,this.labels.width,this.labels.height)}}const Xr=Array.from({length:80},(n,e)=>[e/8-5,Math.sin(e/8)*2,Math.cos(e/8)*2,e%7+1]),qd=[];for(let n=0;n<9;++n)for(let e=0;e<9;++e)qd.push([e-4,n-4,((e-4)**2-(n-4)**2)/8]);const Bc=[{name:"3D 함수 · 파동",spec:{kind:"function",dimension_count:2,expression:"sin(x)*cos(y)",sampling:{axes:[{variable:0,lower:-5,upper:5,count:81},{variable:1,lower:-5,upper:5,count:81}],fixed:[null,null]},invalid_values:"skip"}},{name:"2D 함수 · sin",spec:{kind:"function",dimension_count:1,expression:"sin(x)",sampling:{axes:[{variable:0,lower:-8,upper:8,count:401}],fixed:[null]}}},{name:"ND 함수 · 고정 변수",spec:{kind:"function",dimension_count:4,expression:"sin(x0*x2)+cos(x1)+x3",sampling:{axes:[{variable:0,lower:-4,upper:4,count:71},{variable:1,lower:-4,upper:4,count:71}],fixed:[null,null,2,.5]}}},{name:"2D 데이터 · 점",spec:{kind:"dataset",dimension_count:4,rows:Xr,columns:[0,1],plot:"points"}},{name:"3D 데이터 · 곡선",spec:{kind:"dataset",dimension_count:4,rows:Xr,columns:[0,1,2],plot:"curve"}},{name:"데이터 · 임의 경로",spec:{kind:"dataset",dimension_count:4,rows:Xr,columns:[0,1,2],plot:"curve",paths:[[0,10,30,50],[5,25,45,65]]}},{name:"데이터 · 격자 곡면",spec:{kind:"dataset",dimension_count:3,rows:qd,columns:[0,1,2],plot:"surface",grid:{u_count:9,v_count:9}}},{name:"2D 히스토그램 · 개수",spec:{kind:"histogram",dimension_count:4,rows:Xr,histogram:{mode:"count",axes:[{column:0,uniform:{lower:-5,upper:5,step:1}}]}}},{name:"3D 히스토그램 · 합계",spec:{kind:"histogram",dimension_count:4,rows:Xr,histogram:{mode:"sum",value_column:3,axes:[{column:1,uniform:{lower:-2.5,upper:2.5,step:1}},{column:2,uniform:{lower:-2.5,upper:2.5,step:1}}]}}}],Yd=1024*1024;function dc(n){if(typeof n=="number"&&!Number.isFinite(n))throw new Error("유한한 숫자가 필요합니다.");if(Array.isArray(n))for(const e of n)dc(e);else if(n!==null&&typeof n=="object")for(const e of Object.values(n))dc(e)}function kc(n){if(new TextEncoder().encode(n).length>Yd)throw new Error("문서 파일 상한은 1 MiB입니다.");const e=Ot(JSON.parse(n)),t=Rt({spec:Ml(vn(),Wi()),history:at(Ml(vn(),Wi())).max(128).default([])}).strict(),i=e.spec===void 0?{spec:e,history:[]}:t.parse(e);return Rt({kind:sd(["function","dataset","histogram"]),dimension_count:Ne().int().min(1).max(64),version:Vn(1).optional()}).passthrough().parse(i.spec),dc(i),i}function fc(n){const e=Rt({version:Vn(1),name:vn().max(256),document:Wi()}).strict().parse(n);return{version:1,name:e.name,document:kc(JSON.stringify(e.document))}}async function na(n,e){const t=await new Promise((i,r)=>{const s=indexedDB.open(Vi()?.storage_namespace??"fgv-workspace",1);let a=!1;s.onupgradeneeded=()=>{s.result.createObjectStore("work")},s.onerror=()=>r(s.error??new Error("로컬 저장소 열기 실패")),s.onblocked=()=>{a=!0,r(new Error("다른 창이 로컬 저장소를 사용하고 있습니다."))},s.onsuccess=()=>{a?s.result.close():i(s.result)}});try{return await new Promise((i,r)=>{const s=t.transaction("work",n),a=e(s.objectStore("work"));s.oncomplete=()=>i(a.result),s.onabort=()=>r(s.error??new Error("로컬 저장 실패")),s.onerror=()=>r(s.error??new Error("로컬 저장 실패"))})}finally{t.close()}}let wu=Promise.resolve(),hc=null,Ys;function Jd(){if(Ys)return Ys;hc=sessionStorage.getItem(es("draft-id"));const n=e=>new Promise((t,i)=>{if(!navigator.locks){t(crypto.randomUUID());return}navigator.locks.request(`${es("draft")}:${e}`,{ifAvailable:!0},async r=>{if(!r){t(await n(crypto.randomUUID()));return}t(e),await new Promise(s=>{window.addEventListener("pagehide",()=>s(),{once:!0})})}).catch(r=>i(r instanceof Error?r:new Error(String(r))))});return Ys=n(hc??crypto.randomUUID()).then(e=>(sessionStorage.setItem(es("draft-id"),e),e)),Ys}async function zy(){const n=Vi()?.drafts;if(n)return n.read();const e=await Jd(),t=await na("readonly",s=>s.getAll()),i=at(Rt({tab:vn(),updated_at:Ne().finite(),record:Wi()}).strict()).parse(t),r=i.find(s=>s.tab===e)??i.find(s=>s.tab===hc);return i.sort((s,a)=>a.updated_at-s.updated_at),(r??i[0])?.record}function ma(n,e=!1){const t=wu.then(async()=>{const i=Vi()?.drafts;if(i)return n&&fc(n),i.store(n,e);const r=await Jd();e?await na("readwrite",s=>s.clear()):n===void 0?await na("readwrite",s=>s.delete(r)):(fc(n),await na("readwrite",s=>s.put({tab:r,updated_at:Date.now(),record:n},r)))});return wu=t.catch(()=>{}),t}const Kd="81696280c198214c73c27d3391cc08cea5042d4c542a434e14d9242c5aa598ad",By=Rt({schema:Vn(1),product:Vn("fgv"),component:Vn("web"),version:vn().regex(/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/),build:vn().regex(/^[a-f0-9]{64}$/),files:at(Rt({path:vn(),bytes:Ne().int().min(0).max(32*1024*1024),sha256:vn().regex(/^[a-f0-9]{64}$/)}).strict()).max(100)}).strict();async function Tu(n,e){if(!n.ok||!n.body)throw new Error("업데이트 원본에 연결할 수 없습니다.");const t=n.body.getReader(),i=[];let r=0;try{for(;;){const{done:o,value:c}=await t.read();if(o)break;if(r+=c.byteLength,e<r)throw new Error("업데이트 크기 상한을 초과했습니다.");i.push(c)}}finally{await t.cancel()}const s=new Uint8Array(r);let a=0;for(const o of i)s.set(o,a),a+=o.byteLength;return s}async function Au(n){const e=await fetch(new URL("update-manifest.json",n),{cache:"no-store",redirect:"error",signal:AbortSignal.timeout(15e3),credentials:"omit"}),t=By.parse(JSON.parse(new TextDecoder().decode(await Tu(e,65536)))),r="0.2.0".split(".").map(BigInt),s=t.version.split(".").map(BigInt);for(let f=0;f<3;++f)if(r[f]!==s[f]){if(s[f]<r[f])throw new Error("이전 버전은 적용하지 않습니다.");break}if(t.build===Kd)return t;const a=t.files.find(f=>f.path==="index.html");if(!a||a.bytes>1024*1024)throw new Error("업데이트 시작 파일이 없습니다.");const o=await fetch(new URL(a.path,n),{cache:"no-store",redirect:"error",signal:AbortSignal.timeout(15e3),credentials:"omit"}),c=await Tu(o,a.bytes),l=await crypto.subtle.digest("SHA-256",c),u=Array.from(new Uint8Array(l),f=>f.toString(16).padStart(2,"0")).join("");if(c.byteLength!==a.bytes||u!==a.sha256)throw new Error("업데이트 파일 검증에 실패했습니다. 현재 그래프를 유지합니다.");return t}function ky(n){if(!("serviceWorker"in navigator)||location.origin!=="https://jhb-1.github.io"&&!["127.0.0.1","localhost"].includes(location.hostname))return()=>{};const e=new URL("./",location.href),t=document.createElement("section");t.id="update-notice",t.hidden=!0,t.setAttribute("aria-label","업데이트"),t.setAttribute("role","status");const i=document.createElement("p"),r=document.createElement("button");r.textContent="현재 그래프 백업",r.disabled=!0,t.append(i,r),document.querySelector("#stage").append(t);let s=!1,a=!1,o,c;const l=()=>{s||!c?.waiting||!o||(i.textContent="새 버전 검증 완료. 그래프를 백업하고 모든 FGV 탭을 닫은 뒤 다시 열면 적용됩니다. 시작 화면에서 복구를 선택하세요.",r.disabled=!1,t.hidden=!1)},u=async()=>{if(!(s||a||document.visibilityState==="hidden")){a=!0;try{const h=await Au(e);!s&&h.build!==Kd&&(o=h,i.textContent="새 버전 다운로드와 검증 중. 현재 그래프를 유지합니다.",t.hidden=!1,await c?.update(),l())}catch{}finally{a=!1}}};r.onclick=()=>{(async()=>{r.disabled=!0;try{const h=await Au(e);if(!o||JSON.stringify(h)!==JSON.stringify(o))throw new Error("배포 버전이 변경됐습니다. 다시 확인하세요.");await n(),i.textContent="백업 완료. 모든 FGV 탭을 닫은 뒤 다시 열고 복구를 선택하세요. 자동 새로고침은 하지 않습니다."}catch(h){i.textContent=String(h)}finally{r.disabled=!1}})()};const f=setInterval(()=>{u()},300*1e3),d=()=>{u()};return document.addEventListener("visibilitychange",d),navigator.serviceWorker.register(new URL("update-worker.js",e),{updateViaCache:"none"}).then(h=>{c=h,h.addEventListener("updatefound",()=>{h.installing?.addEventListener("statechange",l)}),u()},()=>{}),()=>{s=!0,clearInterval(f),document.removeEventListener("visibilitychange",d),t.remove()}}const Ct=Vi(),Gy=document.querySelector("#app");Gy.innerHTML=`
<a class="skip-link" href="#graph">그래프로 이동</a>
<div class="app-shell">
<nav class="tab-rail" aria-label="작업 도구">
<a class="brand-mark" href="./" aria-label="Function Graph Visualizer">fgv</a>
<div id="tabs" role="tablist" aria-label="설정 패널" aria-orientation="vertical"></div>
<button id="theme" class="rail-bottom" aria-label="라이트/다크 모드"><span aria-hidden="true">☼</span>UI 밝기</button>
<a class="repo-link" href="https://github.com/JHB-1/function-graph-visualizer-web" target="_blank"
rel="noopener noreferrer" aria-label="GitHub 저장소">↗</a></nav>
<aside id="sidebar" class="sidebar" aria-label="그래프 조작부">
<header class="sidebar-heading"><div><h1>Function Graph Visualizer</h1><span>WORKSPACE</span></div>
<button id="fold" aria-label="조작부 접기" aria-controls="sidebar" aria-expanded="true">‹</button></header>
<div class="preset-row"><label for="preset">예제</label><select id="preset" aria-label="예제 선택"></select>
<div id="document-status" role="status" aria-live="polite"></div></div>
<section id="content" class="sidebar-body" role="tabpanel" aria-labelledby="tab-input" tabindex="0"></section>
<div class="panel-actions"><button id="apply" class="primary">변경 적용</button></div>
<footer class="sidebar-status"><span id="pulse" aria-hidden="true">●</span>
<span id="status" role="status" aria-live="polite">그래프를 준비하고 있습니다…</span></footer></aside>
<main id="stage" aria-label="그래프 작업 공간">
<canvas id="graph" tabindex="0" role="img" aria-label="2D/3D 그래프, 왼쪽 이동, 오른쪽 회전, 휠 확대"></canvas>
<canvas id="labels" aria-hidden="true"></canvas>
<div id="item-marker" hidden aria-hidden="true"></div>
<section id="recovery" aria-label="작업 복구" hidden><p>이전 작업을 복구할까요?</p>
<button id="recover">복구</button><button id="discard">버리기</button></section>
<div class="canvas-controls" role="group" aria-label="관찰 조작">
<button id="open" aria-label="조작부 열기" aria-controls="sidebar" aria-expanded="false">☰</button>
<button id="zoom-out" aria-label="축소">−</button><span id="zoom-level" aria-live="off">100%</span>
<button id="zoom-in" aria-label="확대">＋</button><button id="reset" aria-label="그래프 맞춤">맞춤</button></div>
<label id="touch_controls">터치 조작 <select id="drag_mode" aria-label="Touch drag mode">
<option value="orbit">회전</option><option value="pan">이동</option></select></label>
<div id="hud" class="canvas-caption">왼쪽 이동 <span>·</span> 오른쪽 회전 <span>·</span> 휠 확대</div>
<div id="error" role="alert"></div></main></div>
<input id="document-picker" type="file" accept=".json,application/json" hidden>`;if(Ct){const n=document.createElement("p");n.id="host-status",n.setAttribute("aria-live","polite"),document.querySelector(".preset-row").append(n)}function Ue(n){return document.getElementById(n)}const Et=Ue("graph"),Ln=new Zd(Et,Ue("labels")),ki=new g_,gt=Ue("content"),Qd=Rt({dimension:Ec([Vn(2),Vn(3)]),view:Rt({lower:at(Ne()).length(2),upper:at(Ne()).length(2),preserve_aspect:Kn()}),camera:Rt({eye:at(Ne()).length(3),target:at(Ne()).length(3),up:at(Ne()).length(3),projection:vn(),fov_y:Ne(),near_distance:Ne(),far_distance:Ne(),orthographic_width:Ne(),orthographic_height:Ne()})}),jd=Rt({source_index:Ne().int(),position:at(Ne()).length(3),screen:at(Ne()).length(3).nullable()});let un=[],dn=-1;const _i=[];let Yi=!1,Ei=!1,vr=1,ga=!1,_a=!1,Je=structuredClone(Ct?.initial_document??{spec:Bc[0].spec,history:[]}),ms="새 문서",Ra=JSON.stringify(Je),Ai=!1,ii="자동 저장 준비 중",_n=!0,yr=!1,br,ls,ns=0,ef=!1,Si,us=[],Qr="",mi=0,va=Ct?"":"0",ye,Ht,Tn,Gi=0,Ut="input",Fi=()=>structuredClone(Je.spec),Yt,xa=!1,Er,Mi,xi;const tf=matchMedia("(prefers-color-scheme: dark)");let ri=Ct?.dark??tf.matches,Gc=!1,ai=!1,nf=0,rf,jr,sf=!1,af="",of;function Ca(){return Ai||JSON.stringify(Je)!==Ra}function Gn(){Ue("document-status").textContent=`${ms} · ${Ca()?"미저장":"변경 없음"} · ${ii}`}function Dn(){if(Yt||Er!==void 0||Mi!==void 0||Yi||Ei)throw new Error("조작·계산·출력이 끝난 뒤 다시 시도하세요.")}async function Pa(n){return Ct?.confirm?Ct.confirm(n):confirm(n)}function Vc(){un=ye?[structuredClone(ye)]:[],dn=un.length-1,_i.length=0}function Vy(n){un[dn]?.dimension!==n.dimension&&(un=[],dn=-1,_i.length=0),JSON.stringify(un[dn])!==JSON.stringify(n)&&(un=un.slice(0,dn+1),un.push(structuredClone(n)),un.length>100&&un.shift(),dn=un.length-1)}async function cf(n,e=!0){if(Dn(),!ye||n.dimension!==ye.dimension)throw new Error("현재 그래프와 화면 차원이 다릅니다.");const t=structuredClone(ye);if(ye=structuredClone(n),!await gs(e))throw ye=t,Ln.preview(t),Ln.draw(),new Error("화면 복원 실패 · 이전 관찰 상태 유지")}async function Ru(n){Dn();const e=un[n];if(!e)return;const t=dn;dn=n;try{await cf(e,!1)}catch(i){throw dn=t,i}}function pc(n){if(!Si)throw new Error("항목을 먼저 선택하세요.");const e=at(jd).parse(n.vertices),t=Si==="graph"?e:e.filter(i=>i.source_index===Number(Si.split(":")[1]));if(!t.length)throw new Error("선택 항목에는 표시할 좌표가 없습니다.");return t}function Ia(){clearTimeout(ls);const n=++ns;if(!_n||yr||!ef){Gn();return}ii="저장 중…",Gn(),ls=setTimeout(()=>{const e={version:1,name:ms,document:structuredClone(Je)};ma(e).then(()=>{n!==ns||!_n||(ii="자동 저장됨",Gn())},t=>{n===ns&&(ii=`자동 저장 실패: ${String(t)}`,Gn())})},300)}async function mc(n=!1){clearTimeout(ls),++ns,await ma(void 0,n),sessionStorage.removeItem("fgv-update-recovery"),br=void 0,yr=!1,Ue("recovery").hidden=!0,ii=_n?"로컬 기록 없음":"자동 저장 꺼짐",Gn()}async function Hc(n,e){try{Dn()}catch(t){return an(t),!1}return Ca()&&!await Pa("저장하지 않은 변경 사항을 버리고 문서를 교체할까요?")||(Dn(),!await Jt(n,!0))?!1:(ms=e,Ra=JSON.stringify(Je),Ai=!1,Si=void 0,Qr="",mi=0,va="",Tr.value="",xi=ye?structuredClone(ye):void 0,Vc(),Wc(),$c(),Ut==="items"&&Hi(),Ia(),!0)}async function lf(n){if(n.size>Yd)throw new Error("문서 파일 상한은 1 MiB입니다.");const e=kc(await n.text());await Hc(e,n.name)}function uf(n){n.onchange=()=>{const e=n.files?.[0];e&&lf(e).catch(t=>an(t)),n.value=""}}async function df(){const n=JSON.stringify(Je);await ds("graph.fgv.json",JSON.stringify(Je,null,2)),Ra=n,Gn()}function an(n){Ue("error").textContent=n instanceof Error?n.message:String(n)}function ff(){Ue("error").textContent=""}function La(){document.body.classList.toggle("light",!ri),document.documentElement.dataset.theme=ri?"dark":"light",Ln.set_theme(ri)}La();tf.addEventListener("change",n=>{Gc||(ri=n.matches,La())});Ue("theme").onclick=()=>{Gc=!0,ri=!ri,La()};function Da(n){document.body.classList.toggle("collapsed",n),Ue("fold").setAttribute("aria-expanded",String(!n)),Ue("open").setAttribute("aria-expanded",String(!n))}Ue("fold").onclick=()=>Da(!0);Ue("open").onclick=()=>Da(!1);function Ir(){const n=Et.getBoundingClientRect();return[Math.max(64,Math.min(4096,Math.round(n.width))),Math.max(64,Math.min(4096,Math.round(n.height)))]}function Wc(){if(!ye||!xi)return;let n;if(ye.dimension===2)n=(xi.view.upper[0]-xi.view.lower[0])/(ye.view.upper[0]-ye.view.lower[0]);else if(ye.camera.projection==="orthographic")n=xi.camera.orthographic_width/ye.camera.orthographic_width;else{const e=t=>Math.hypot(...t.camera.eye.map((i,r)=>i-t.camera.target[r]));n=e(xi)/e(ye)}Ue("zoom-level").textContent=`${Math.round(n*100)}%`}async function Jt(n,e=!1,t=!0){if(Ei||ai)return!1;const i=++Gi;Yi=!0,ff(),Ue("status").textContent="코어 계산 중…";try{const r=n.spec,s={spec:r,history:n.history,canvas_size:Ir()};r.kind==="function"&&(s.expression_ast=cd(String(r.expression),Number(r.dimension_count)));const a=await ki.request(s);if(await document.fonts.ready,i!==Gi)return!1;const o=$d.parse(a),c=Qd.parse(a),l=Wy(a,o,n.spec);Ln.load(o,c),Ln.set_theme(ri);const u=JSON.stringify(Je)!==JSON.stringify(n);return Je=structuredClone(n),(u||e)&&(Ai=!1),ye=c,t&&Vy(c),xi??=structuredClone(c),Wc(),Ht=a,Tn=o,us=l,Et.dataset.ready="true",Et.dataset.dimension=String(o.dimension),Ue("drag_mode").disabled=o.dimension!==3,Et.dataset.revision=String(a.host_revision??a.cache_revision),Ue("status").textContent=`${o.dimension}D · ${o.vertices.length.toLocaleString()} 정점 · ${o.triangles.length.toLocaleString()} 면 · revision ${a.host_revision??a.cache_revision}`,(e||Ut==="items")&&Hi(),$c(),u?Ia():Gn(),!0}catch(r){return i===Gi&&(an(r),Ue("status").textContent="적용 실패 · 마지막 성공 그래프 유지"),!1}finally{i===Gi&&(Yi=!1)}}function wn(n,e){const t=document.createElement("h2");t.textContent=n;const i=document.createElement("p");i.textContent=e,gt.append(t,i)}function Ui(n,e,t=!1){const i=document.createElement("label");i.textContent=n;const r=document.createElement(t?"textarea":"input");return r instanceof HTMLInputElement&&(r.type="text"),r.value=e,i.append(r),gt.append(i),r}function Ft(n,e){return Ui(n,JSON.stringify(e,null,2),!0)}function Mt(n,e){const t=document.createElement("button");return t.textContent=n,t.onclick=()=>{ff(),Promise.resolve().then(e).catch(i=>an(i))},gt.append(t),t}function $r(n,e){const t=document.createElement("label");t.className="check";const i=document.createElement("input");return i.type="checkbox",i.checked=e,t.append(i,document.createTextNode(n)),gt.append(t),i}function Zr(n,e,t){const i=document.createElement("label");i.textContent=n;const r=document.createElement("select");r.setAttribute("aria-label",n);for(const s of e){const a=document.createElement("option");a.textContent=s,r.append(a)}return r.value=t,i.append(r),gt.append(i),r}async function ds(n,e,t="application/json"){if(Dn(),Ct)return Ct.download(n,new Blob([e],{type:t}));const i=URL.createObjectURL(new Blob([e],{type:t})),r=document.createElement("a");r.href=i,r.download=n,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}async function hf(){Dn();const[n,e]=Ir(),t=n*vr,i=e*vr;if(t>4096||i>4096||t*i>32e6)throw new Error("PNG 상한은 각 변 4096px, 전체 32MP입니다. 배율을 줄이세요.");_a&&Ht&&pc(Ht),Ei=!0;const r=document.createElement("div");r.dataset.exportPreview="true",r.style.cssText=`position:fixed;left:-100000px;top:0;width:${n}px;height:${e}px;pointer-events:none`;const s=document.createElement("canvas"),a=document.createElement("canvas");r.append(s,a),document.body.append(r);let o;try{await document.fonts.ready;const c=structuredClone(Je),l={...c,canvas_size:[t,i],grid_pixel_scale:vr};c.spec.kind==="function"&&(l.expression_ast=cd(String(c.spec.expression),Number(c.spec.dimension_count)));const u=await ki.request(l,!0),f=$d.parse(u);ga&&(f.style.background[3]=0,f.rendering.host_background=!1),o=new Zd(s,a),o.load(f,Qd.parse(u)),o.set_theme(ri),o.draw();let d=0,h=0,_=t,S=i;if(_a){const w=pc(u).flatMap(M=>M.screen?[M.screen]:[]);if(!w.length)throw new Error("선택 영역이 현재 화면에 없습니다.");const A=12*vr;if(d=Math.max(0,Math.floor(Math.min(...w.map(M=>M[0]))-A)),h=Math.max(0,Math.floor(Math.min(...w.map(M=>M[1]))-A)),_=Math.min(t,Math.ceil(Math.max(...w.map(M=>M[0]))+A)),S=Math.min(i,Math.ceil(Math.max(...w.map(M=>M[1]))+A)),d>=_||h>=S)throw new Error("선택 영역이 현재 화면에 없습니다.")}const m=document.createElement("canvas");m.width=_-d,m.height=S-h;const p=m.getContext("2d");if(ga||(p.fillStyle=getComputedStyle(Ue("stage")).backgroundColor,p.fillRect(0,0,m.width,m.height)),p.drawImage(s,-d,-h),p.drawImage(a,-d,-h),Ct){const w=await new Promise((A,M)=>{m.toBlob(y=>{y?A(y):M(new Error("PNG 생성 실패"))})});await Ct.download("graph.png",w)}else{const w=document.createElement("a");w.download="graph.png",w.href=m.toDataURL(),w.click()}}finally{o?.dispose(),r.remove(),Ei=!1}}function Hy(){const n=document.createElement("div");n.className="export-control";const e=document.createElement("div");e.id="export-menu",e.hidden=!0,e.setAttribute("role","group"),e.setAttribute("aria-label","파일 출력 형식");const t=Mt("파일 출력 ▾",()=>{e.hidden=!e.hidden,t.setAttribute("aria-expanded",String(!e.hidden))});t.id="export-toggle",t.setAttribute("aria-expanded","false"),t.setAttribute("aria-controls","export-menu"),n.append(t,e),gt.append(n);const i=[["이미지 파일로 출력 (.png)",hf],["그래프 문서로 출력 (.json)",df],["raw 데이터로 출력 (.json)",async()=>{const r=structuredClone(Je.spec);for(const s of["presentation","dimensions","output","theme","surface_rendering"])delete r[s];await ds("graph.raw.json",JSON.stringify({spec:r,history:Je.history},null,2))}],["코어 결과로 출력 (.json)",()=>ds("scene.json",JSON.stringify(Ht,null,2))]];for(const[r,s]of i)e.append(Mt(r,s));n.onkeydown=r=>{r.key==="Escape"&&(r.stopPropagation(),e.hidden=!0,t.setAttribute("aria-expanded","false"),t.focus())}}function Cu(n,e,t){const i=document.createElement("input");i.type="file",i.accept=e,i.setAttribute("aria-label",n),i.onchange=()=>{const s=i.files?.[0];if(s){if(s.size>8*1024*1024)return an(new Error("파일 상한은 8 MiB입니다."));s.text().then(t).catch(a=>an(a))}};const r=document.createElement("label");r.textContent=n,r.append(i),gt.append(r)}function wr(n){return n.presentation||(n.presentation={}),Ot(n.presentation)}function is(n){const e=wr(n);return e.overrides||(e.overrides={}),Ot(e.overrides)}function Hi(){clearTimeout(Mi),Mi=void 0,gt.replaceChildren(),gt.setAttribute("aria-labelledby",`tab-${Ut}`),Ue("apply").hidden=!["input","axes","camera"].includes(Ut);const n=structuredClone(Je.spec);if(Fi=()=>n,Ut==="input"){wn("입력 · ND 데이터","raw 입력에 표시 정보는 필요하지 않습니다. JSON 편집은 이 웹 호스트의 입력 양식입니다.");const e=Zr("시각화 대상",["function","dataset","histogram"],String(n.kind)),t=Ui("ND 차원 수",String(n.dimension_count)),i=Zr("결측값 정책 · null / 정의되지 않은 함수값",["reject","skip"],String(n.invalid_values??"reject")),r=[];if(n.kind==="function"){wn("함수","x/y/z 또는 x0…x63. + - * / ^, sin cos tan exp log sqrt abs min max pow, pi e. 코드 실행 없이 제한 AST만 사용합니다.");const s=Ui("수식",String(n.expression));s.className="code-input",s.spellcheck=!1,r.push(["expression",s,!1]),r.push(["sampling",Ft("변화 축 · 범위 · 해상도 / 나머지 고정값",n.sampling),!0]),r.push(["surface_rendering",Ft("와이어프레임 / LOD",n.surface_rendering??{wireframe:"grid",wireframe_lines:[11,11],lod:{enabled:!0,max_error_pixels:1}}),!0])}else r.push(["rows",Ft("행 우선 원본 데이터 · null 허용",n.rows),!0]),n.kind==="dataset"?(r.push(["plot",Zr("표현",["points","curve","surface"],String(n.plot)),!1]),r.push(["columns",Ft("선택할 2개 / 3개 열",n.columns),!0]),r.push(["paths",Ft("임의 경로 · null은 입력 순서, []는 연결 없음",n.paths??null),!0]),r.push(["grid",Ft("곡면 격자 · u_count/v_count/row_indices",n.grid??null),!0])):(wn("집계","mode: count / sum / mean. axes는 1개 또는 2개. uniform의 lower부터 step 간격으로 자르거나 intervals에 직접 구간을 지정합니다."),r.push(["histogram",Ft("구간 / 집계 / 값 열",n.histogram),!0]));Fi=()=>{if(e.value!==n.kind)throw new Error("대상 종류 변경은 위 예제 선택 또는 문서 탭의 전체 명세로 시작하세요.");n.dimension_count=Number(t.value),n.invalid_values=i.value;for(const[s,a,o]of r){const c=o?JSON.parse(a.value):a.value;c===null?delete n[s]:n[s]=c}return n}}else if(Ut==="axes"){wn("축 · 범위","격자는 무한 직선입니다. 축 길이는 샘플링·집계 범위와 독립입니다. 자동 설정으로 복원하려면 해당 필드를 null로 지정하세요.");const e=wr(n),t=is(n),i=$r("격자 표시",!!(t.show_grid??e.show_grid??!0)),r=$r("축 표시",!!(t.show_axes??e.show_axes??!0)),s=$r("축 화살표",!!(t.show_axis_arrows??e.show_axis_arrows??!0)),a={};for(const f of["display_range","grid_spacing","grid_origin","axis_lengths","axis_origin"])a[f]=t[f]??e[f]??null;const o=Ft("범위 / 간격 / 원점 / 축 길이",a),c=Ft("제목 / 출력 축 이름·단위",{title:e.title??"",axes:e.axes??[]}),l=Ft("ND 열·변수 이름·단위",n.dimensions??[]),u=Ft("함수 출력 이름·단위",n.output??{});Fi=()=>{const f=Ot(JSON.parse(o.value));for(const[d,h]of Object.entries(f))h===null?(delete t[d],delete e[d],d==="display_range"&&(t.automatic_range=!0)):(t[d]=h,d==="display_range"&&(t.automatic_range=!1));return t.show_grid=i.checked,t.show_axes=r.checked,t.show_axis_arrows=s.checked,Object.assign(e,Ot(JSON.parse(c.value))),n.dimensions=JSON.parse(l.value),n.output=JSON.parse(u.value),n}}else if(Ut==="style"){wn("색상 · 크기","값을 변경하면 바로 반영됩니다. 2D 기본 축은 UI 밝기를 따르고, 3D 기본 축은 RGB입니다. 지정한 색은 유지됩니다.");const e=is(n),t=Ot(e.style??{});e.style=t;const i=n.kind==="function"?Ot(n.sampling).axes instanceof Array&&Ot(n.sampling).axes.length===2:n.kind==="dataset"&&n.plot==="surface";for(const[c,l]of Object.entries({background:"배경",grid:"격자",axes:"공통 축",stroke:"곡선",points:"데이터 점",surface:"곡면",wireframe:"와이어프레임",bars:"히스토그램 막대",text:"일반 글자"})){if(c==="wireframe"&&!i)continue;const u=c==="axes"?[128,128,128,255]:Tn?.style[c],f=at(Ne()).length(4).parse(t[c]??u??[128,128,128,255]),d=document.createElement("label");d.textContent=l;const h=document.createElement("div");h.className="row";const _=document.createElement("input");_.type="color",_.value="#"+f.slice(0,3).map(p=>p.toString(16).padStart(2,"0")).join(""),_.setAttribute("aria-label",l+" 색상");const S=document.createElement("input");S.type="range",S.min="0",S.max="255",S.value=String(f[3]),S.setAttribute("aria-label",l+" 알파");const m=()=>{t[c]=[1,3,5].map(p=>parseInt(_.value.slice(p,p+2),16)),t[c].push(Number(S.value))};_.oninput=m,S.oninput=m,h.append(_,S),d.append(h),gt.append(d)}const r=Ft("축별 RGBA · null은 공통 설정",t.axis_colors??[null,null,null]),s={},a=Ot(wr(n).style??{});for(const c of["line_width","point_radius","grid_width","axis_width","arrow_length","arrow_width","bar_gap"])s[c]=t[c]??a[c]??(c==="bar_gap"?.1:Ot(Tn?.style??{})[c]);const o={line_width:"곡선 굵기",point_radius:"점 반지름",grid_width:"격자 굵기",axis_width:"축 굵기",arrow_length:"화살표 길이",arrow_width:"화살표 너비",bar_gap:"막대 간격"};for(const[c,l]of Object.entries(s)){const u=Ui(o[c],String(l));u.type="number",u.min="0",u.required=!0,u.step=c==="bar_gap"?"0.01":"0.1",c==="bar_gap"&&(u.max="0.99"),u.oninput=()=>{!u.validity.valid||!u.value.trim()||(t[c]=Number(u.value))}}Fi=()=>(t.axis_colors=JSON.parse(r.value),n),Mt("색상·크기 기본값 복원",async()=>{delete e.style,delete wr(n).style,await Jt({spec:n,history:Je.history},!0)})}else if(Ut==="camera"){wn("관찰 · 투영","왼쪽 드래그 이동, 오른쪽 드래그 3D 회전, 휠 확대·축소. 초기 3D는 양의 XYZ 쪽에서 보는 120° 등각 정투상입니다.");const e=is(n),t=Ft("2D 뷰 · preserve_aspect",e.view??ye?.view),i=Ft("3D 카메라 · 원근 / 정투상 · fov_y는 라디안",e.camera??ye?.camera);Fi=()=>(ye?.dimension===2?(e.view=Ot(JSON.parse(t.value)),e.automatic_view=!1):(e.camera=Ot(JSON.parse(i.value)),e.automatic_camera=!1),n)}else if(Ut==="stream"){wn("증분 · 스트림","행 ID는 삭제 후에도 재사용하지 않습니다. 실패 배치는 반영되지 않습니다. 웹 데모는 최대 128개 배치를 재현하고, 코어는 영향 행·셀만 증분 갱신합니다.");const e=Ft("append / replace / erase · 고정 row_id",{append:[[0,0,0,1]],replace:[],erase:[]});Mt("배치 적용",async()=>{await Jt({spec:Je.spec,history:[...Je.history,Ot(JSON.parse(e.value))]},!0)}),Cu("NDJSON 배치 파일 · 한 줄에 한 변경 객체",".ndjson,.jsonl,.txt",async i=>{for(const r of i.split(/\r?\n/).filter(s=>s.trim().length>0))if(!await Jt({spec:Je.spec,history:[...Je.history,Ot(JSON.parse(r))]}))throw new Error("스트림 중단 · 앞서 성공한 배치는 유지됩니다.");Hi()}),wn("전송 환경","브라우저는 임의 TCP 수신 소켓을 열 수 없습니다. 로컬/네트워크 Boost.Asio 수신은 네이티브 호스트의 역할입니다. 이 페이지는 파일 스트림과 증분 배치를 직접 시험합니다.");const t=document.createElement("pre");t.textContent=JSON.stringify({row_ids:Ht?.row_ids,cache_revision:Ht?.cache_revision,last_delta:Ht?.last_delta,cells:Ht?.cells},null,2),gt.append(t)}else if(Ut==="items"){wn("항목","현재 그래프와 원본 행 ID, 함수 샘플 또는 히스토그램 셀을 검색합니다. 선택 후 위치 찾기로 관찰 중심을 옮깁니다.");const e=Ui("이름·ID 검색",Qr);e.type="search";const t=document.createElement("p"),i=document.createElement("div");i.className="item-list",i.setAttribute("role","group"),i.setAttribute("aria-label","항목 목록"),gt.append(t,i);const r=()=>{const o=Qr.trim().toLocaleLowerCase(),c=us.filter(u=>`${u.id} ${u.label}`.toLocaleLowerCase().includes(o)),l=mi*100;t.textContent=`${c.length}개 항목 · ${mi+1}/${Math.max(1,Math.ceil(c.length/100))} 페이지`,i.replaceChildren();for(const u of c.slice(l,l+100)){const f=document.createElement("button");f.textContent=`${u.label} · ${u.id}`,f.dataset.itemId=u.id,f.setAttribute("aria-pressed",String(Si===u.id)),f.onclick=()=>{Si=u.id,$c(),r(),i.querySelector(`[data-item-id="${CSS.escape(u.id)}"]`)?.focus()},i.append(f)}};e.oninput=()=>{Qr=e.value,mi=0,r()},Mt("이전 페이지",()=>{mi=Math.max(0,mi-1),r()}),Mt("다음 페이지",()=>{const o=us.filter(c=>`${c.id} ${c.label}`.toLocaleLowerCase().includes(Qr.trim().toLocaleLowerCase())).length;mi=Math.min(Math.max(0,Math.ceil(o/100)-1),mi+1),r()}),Mt("위치 찾기",()=>Pu());const s=document.createElement("h3");s.textContent="화면",gt.append(s),Mt("이전",async()=>{await Ru(dn-1)}).disabled=dn<=0,Mt("다음",async()=>{await Ru(dn+1)}).disabled=dn+1>=un.length,Mt("선택 항목에 맞춤",()=>Pu(!0));const a=Ui("화면 이름","");a.maxLength=80,Mt("현재 화면 저장",()=>{Dn();const o=a.value.trim();if(!ye||!o||_i.length>=20||_i.some(c=>c.name===o))throw new Error("중복되지 않는 화면 이름이 필요합니다. 최대 20개까지 저장합니다.");_i.push({name:o,view:structuredClone(ye)}),Hi()});for(const o of _i)Mt(`${o.name} 열기`,async()=>{await cf(o.view)}),Mt(`${o.name} 삭제`,()=>{_i.splice(_i.indexOf(o),1),Hi()});r()}else if(Ut==="document"){if(wn("문서 · 테마","raw 입력과 표시 정보를 포함한 문서를 모두 받습니다. .fgvtheme은 실제 코어가 읽고 정규화합니다. 명시 override는 프로파일 기본값보다 우선합니다."),Ct?.recovery_note){const u=document.createElement("p");u.textContent=Ct.recovery_note,gt.append(u)}Mt("새 문서",async()=>{await Hc({spec:{kind:"dataset",dimension_count:2,rows:[],columns:[0,1],plot:"points"},history:[]},"새 문서")});const e=document.createElement("input");e.type="file",e.accept=".json,application/json",e.setAttribute("aria-label","파일 열기 (.json)"),uf(e),gt.append(e);const t=$r("자동 저장",_n);t.onchange=async()=>{_n=t.checked;try{Ct?.drafts?await Ct.drafts.set_enabled(_n):sessionStorage.setItem(es("autosave"),String(_n))}catch(u){an(u)}_n?Ia():mc().catch(u=>{ii=`로컬 기록 삭제 실패: ${String(u)}`,Gn()})},Mt("로컬 기록 지우기",async()=>{await Pa("FGV의 모든 탭에서 저장한 로컬 기록을 지울까요?")&&await mc(!0)});const i=document.createElement("h3");i.textContent="이미지 출력 옵션",gt.append(i);const r=Zr("PNG 배율",["1×","2×","3×"],`${vr}×`);r.onchange=()=>{vr=Number(r.value[0])};const s=$r("투명 배경",ga);s.onchange=()=>{ga=s.checked};const a=Zr("출력 범위",["현재 화면","선택 영역"],_a?"선택 영역":"현재 화면");a.onchange=()=>{_a=a.value==="선택 영역"};const o=document.createElement("p");o.textContent="PNG는 코어 뷰를 다시 계산해 출력합니다. 각 변 4096px 이하, 32MP 이하입니다. Ctrl/Cmd+S: JSON 출력 · Ctrl/Cmd+O: 파일 열기 · Ctrl/Cmd+F: 항목 검색",o.setAttribute("aria-label","단축키 안내"),gt.append(o);const c=Ft("전체 웹 호스트 문서 · spec / history",Je);c.className="long",Mt("문서 적용",async()=>{await Jt(kc(c.value),!0)}),Hy();const l=Ui(".fgvtheme 프로파일",String(n.theme??`fgv-theme 1
`),!0);Mt("테마 검증·적용",async()=>{const u=await ki.request({operation:"theme",text:l.value});n.theme=u.text,await Jt({spec:n,history:Je.history},!0)}),Mt("테마 저장",async()=>{const u=await ki.request({operation:"theme",text:l.value});await ds("default.fgvtheme",String(u.text),"text/plain")}),Cu("테마 파일 열기",".fgvtheme",async u=>{const f=await ki.request({operation:"theme",text:u});n.theme=f.text,await Jt({spec:n,history:Je.history},!0)})}else{wn("코어 · 진단","행렬·기하·집계·프레임은 C++23 코어에서 생성합니다. JavaScript는 입력 해석과 Three.js 렌더링을 담당합니다.");for(const r of Ct?.actions??[])Mt(r.label,r.run).id=r.id;const e=Ft("투영 / 역변환 / ray / 직선·선분 절단",{world:[0,0,0],screen:[Ir()[0]/2,Ir()[1]/2],end:[1,1,1],line:{origin:[0,0,0],direction:[1,0,0]}}),t=document.createElement("pre");Mt("현재 뷰에서 변환",async()=>{t.textContent=JSON.stringify(await ki.request({...Ot(JSON.parse(e.value)),operation:"transform",dimension:ye?.dimension,view:ye?.view,camera:ye?.camera,viewport:Tn?.rendering.viewport}),null,2)}),gt.append(t),Mt("코어 결과 JSON 저장",()=>ds("scene.json",JSON.stringify(Ht,null,2))),Mt("PNG 저장",hf);const i=document.createElement("pre");i.textContent=JSON.stringify({version:"web 0.1.0 · core 0.7.0",range:Ht?.range,bounds:Ht?.bounds,grid_spacing:Ht?.grid_spacing,grid_lines:Tn?.rendering.grid_lines.length,host:Ct?.info(),stats:Ht?.stats,sampling_axes:Ht?.sampling_axes,rendering:{canvas_size:Tn?.rendering.canvas_size,viewport:Tn?.rendering.viewport,view_matrix:Tn?.rendering.view_matrix,projection_matrix:Tn?.rendering.projection_matrix}},null,2),gt.append(i)}}const Ni=[["input","입력","⌘"],["style","스타일","◐"],["items","항목","☷"],["axes","축·범위","⌁"],["camera","관찰","◇"],["stream","증분","⇄"],["diagnostics","진단","⋈"],["document","파일","▤"]];function gc(n){Ut=n;for(const e of document.querySelectorAll("[role=tab]"))e.classList.toggle("active",e.dataset.tab===n),e.setAttribute("aria-selected",String(e.dataset.tab===n)),e.tabIndex=e.dataset.tab===n?0:-1;Da(!1),Hi()}for(const[n,[e,t,i]]of Ni.entries()){const r=document.createElement("button"),s=document.createElement("span");s.textContent=i,s.setAttribute("aria-hidden","true"),r.append(s,document.createTextNode(t)),r.id=`tab-${e}`,r.dataset.tab=e,r.setAttribute("role","tab"),r.setAttribute("aria-controls","content"),r.setAttribute("aria-selected",String(Ut===e)),r.tabIndex=Ut===e?0:-1,r.classList.toggle("active",Ut===e),r.onclick=()=>gc(e),r.onkeydown=a=>{let o;if(a.key==="ArrowDown"||a.key==="ArrowRight")o=(n+1)%Ni.length;else if(a.key==="ArrowUp"||a.key==="ArrowLeft")o=(n+Ni.length-1)%Ni.length;else if(a.key==="Home")o=0;else if(a.key==="End")o=Ni.length-1;else return;a.preventDefault(),gc(Ni[o][0]),Ue(`tab-${Ni[o][0]}`).focus()},Ue("tabs").append(r)}function pf(){Ut==="style"&&Mi===void 0&&(Mi=setTimeout(()=>{Mi=void 0;try{const n=structuredClone(Fi());if(gt.querySelector("input:invalid"))throw new Error("유효한 스타일 값을 입력하세요. 마지막 그래프는 유지됩니다.");Jt({spec:n,history:Je.history})}catch(n){an(n)}},90))}gt.addEventListener("input",pf);gt.addEventListener("change",pf);gt.addEventListener("input",n=>{!["input","style","axes","camera","document"].includes(Ut)||!(n.target instanceof HTMLInputElement||n.target instanceof HTMLTextAreaElement)||n.target.type==="file"||n.target.type==="checkbox"||(Ai=!0,Gn())});const Tr=Ue("preset");for(const[n,e]of Bc.entries()){const t=document.createElement("option");t.value=String(n),t.textContent=e.name,Tr.append(t)}Tr.value=va;Tr.onchange=async()=>{const n=Tr.value,e=Bc[Number(n)];await Hc({spec:structuredClone(e.spec),history:[]},e.name)&&(va=n),Tr.value=va};Ue("apply").onclick=()=>{try{Dn();const n=Fi();Jt({spec:n,history:Je.history},!0)}catch(n){an(n)}};Ue("reset").onclick=()=>{xi=void 0;const n=structuredClone(Je.spec),e=wr(n),t=is(n);for(const i of["view","camera","display_range"])delete e[i],delete t[i];Object.assign(t,{automatic_range:!0,automatic_view:!0,automatic_camera:!0}),Jt({spec:n,history:Je.history},!0)};async function gs(n=!0){if(!ye)return!1;const e=structuredClone(Je.spec),t=is(e);return ye.dimension===2?(t.view=ye.view,t.automatic_view=!1,delete t.display_range,delete wr(e).display_range,t.automatic_range=!0):(t.camera=ye.camera,t.automatic_camera=!1),Jt({spec:e,history:Je.history},Ut==="camera",n)}Et.oncontextmenu=n=>n.preventDefault();Et.onpointerdown=n=>{if(Ei||!ye||n.button!==0&&n.button!==2)return;Et.setPointerCapture(n.pointerId),Ue("item-marker").hidden=!0,++Gi,Yi=!1;const e=n.pointerType==="touch"&&ye.dimension===3&&Ue("drag_mode").value==="orbit"?2:n.button;Yt={pointer_id:n.pointerId,x:n.clientX,y:n.clientY,button:e,state:structuredClone(ye)}};Et.onpointermove=n=>{if(!Yt||!ye||Yt.pointer_id!==n.pointerId)return;const e=(n.clientX-Yt.x)/Et.getBoundingClientRect().width,t=(n.clientY-Yt.y)/Et.getBoundingClientRect().height,i=structuredClone(Yt.state);if(Yt.button===0)if(i.dimension===2){const r=-e*(i.view.upper[0]-i.view.lower[0]),s=t*(i.view.upper[1]-i.view.lower[1]);for(const a of[i.view.lower,i.view.upper])a[0]+=r,a[1]+=s}else{const r=Ln.pan_offset(e,t,i.camera.target);for(let s=0;s<3;++s)i.camera.eye[s]+=r[s],i.camera.target[s]+=r[s]}else if(i.dimension===3){const[r,s,a]=i.camera.eye.map((u,f)=>u-i.camera.target[f]),o=Math.hypot(r,s,a),c=Math.atan2(s,r)-e*Math.PI*2,l=Math.max(-1.52,Math.min(1.52,Math.asin(a/o)+t*Math.PI));i.camera.eye=[o*Math.cos(l)*Math.cos(c),o*Math.cos(l)*Math.sin(c),o*Math.sin(l)].map((u,f)=>u+i.camera.target[f])}ye=i,Ln.preview(i),xa=!0};Et.onpointerup=n=>{Yt?.pointer_id===n.pointerId&&(Yt=void 0,Et.hasPointerCapture(n.pointerId)&&Et.releasePointerCapture(n.pointerId),gs())};Et.onpointercancel=n=>{Yt?.pointer_id===n.pointerId&&(Yt=void 0,gs())};Et.onlostpointercapture=Et.onpointercancel;function mf(n){if(ye)if(ye.dimension===2)for(let e=0;e<2;++e){const t=(ye.view.lower[e]+ye.view.upper[e])/2;ye.view.lower[e]=t+(ye.view.lower[e]-t)/n,ye.view.upper[e]=t+(ye.view.upper[e]-t)/n}else ye.camera.projection==="orthographic"?(ye.camera.orthographic_width/=n,ye.camera.orthographic_height/=n):ye.camera.eye=ye.camera.eye.map((e,t)=>ye.camera.target[t]+(e-ye.camera.target[t])/n)}function Xc(n){Ei||!ye||(++Gi,Yi=!1,Ue("item-marker").hidden=!0,mf(n),Ln.preview(ye),xa=!0,clearTimeout(Er),Er=setTimeout(()=>{Er=void 0,gs()},140),Wc())}Ue("zoom-in").onclick=()=>Xc(1.2);Ue("zoom-out").onclick=()=>Xc(1/1.2);Et.addEventListener("wheel",n=>{n.preventDefault(),Xc(Math.exp(Math.max(-.4,Math.min(.4,-n.deltaY*.0015))))},{passive:!1});function gf(){ai||((xa||Yt)&&(Ln.draw(),xa=!1),nf=requestAnimationFrame(gf))}function Wy(n,e,t){const i=at(jd).parse(n.vertices),r=new Map(i.map(a=>[a.source_index,a])),s=[{id:"graph",label:e.title}];if(t.kind==="histogram")for(const[a,o]of at(Rt({count:Ne(),value:Ne().nullable()})).parse(n.cells).entries())s.push({id:`cell:${a}`,label:`셀 ${a} · 개수 ${o.count} · 값 ${o.value??"없음"}`,...r.get(a)});else if(t.kind==="function")for(const a of i)s.push({id:`sample:${a.source_index}`,label:`샘플 ${a.source_index}`,...a});else for(const a of at(Ne().int()).parse(n.row_ids))s.push({id:`row:${a}`,label:`행 ${a}`,...r.get(a)});return s}function $c(){const n=Ue("item-marker"),e=us.find(i=>i.id===Si);if(n.hidden=!e?.screen,!e?.screen)return;const t=Et.getBoundingClientRect();n.style.left=`${e.screen[0]*t.width/Et.width}px`,n.style.top=`${e.screen[1]*t.height/Et.height}px`}function Pu(n=!1){Dn();const e=us.find(r=>r.id===Si);if(!e||!ye)throw new Error("항목을 먼저 선택하세요.");if(e.id==="graph")return Ue("reset").click();if(!e.position)throw new Error("이 항목에는 표시할 좌표가 없습니다.");let t=e.position,i=1;if(n&&Ht){const r=pc(Ht);t=[0,1,2].map(a=>(Math.min(...r.map(o=>o.position[a]))+Math.max(...r.map(o=>o.position[a])))/2);const s=r.flatMap(a=>a.screen?[a.screen]:[]);s.length&&(i=Math.max(.1,Math.min(10,...[0,1].map(a=>.65*Ir()[a]/Math.max(10,Math.max(...s.map(o=>o[a]))-Math.min(...s.map(o=>o[a])))))))}if(ye.dimension===2)for(let r=0;r<2;++r){const s=t[r]-(ye.view.lower[r]+ye.view.upper[r])/2;ye.view.lower[r]+=s,ye.view.upper[r]+=s}else for(let r=0;r<3;++r)ye.camera.eye[r]+=t[r]-ye.camera.target[r],ye.camera.target[r]=t[r];mf(i),gs()}async function Xy(){try{_n=Ct?.drafts?await Ct.drafts.get_enabled():sessionStorage.getItem(es("autosave"))!=="false";const n=await zy();yr=(_n||sessionStorage.getItem("fgv-update-recovery")==="true")&&n!==void 0,yr?(Ue("recovery").hidden=!1,ii="복구 선택 대기",br=fc(n)):(ii=_n?"자동 저장 대기":"자동 저장 꺼짐",_n||await ma(void 0))}catch(n){ii=`로컬 저장소 오류: ${String(n)}`}ef=!0,Ue("recover").disabled=!br,Gn(),await Jt(Je,!0),Ct||(of=ky(async()=>{if(Dn(),Ai||yr)throw new Error("입력 변경을 적용하거나 이전 복구를 선택한 뒤 업데이트하세요.");clearTimeout(ls),++ns,await ma({version:1,name:ms,document:structuredClone(Je)}),sessionStorage.setItem("fgv-update-recovery","true"),sf=!0,af=JSON.stringify(Je)}))}Ue("recover").onclick=()=>{if(!br)return;const n=br;(async()=>Ca()&&!await Pa("저장하지 않은 변경 사항을 버리고 이전 작업을 복구할까요?")||await Jt(n.document,!0)&&(ms=n.name,Ra="",Vc(),Ai=!1,br=void 0,yr=!1,sessionStorage.removeItem("fgv-update-recovery"),Ue("recovery").hidden=!0,Ia()))()};Ue("discard").onclick=()=>{mc().catch(n=>an(n))};window.addEventListener("beforeunload",n=>{Ca()&&(!sf||Ai||JSON.stringify(Je)!==af)&&n.preventDefault()});Ue("stage").addEventListener("dragover",n=>{n.dataTransfer?.types.includes("Files")&&n.preventDefault()});Ue("stage").addEventListener("drop",n=>{n.preventDefault();const e=n.dataTransfer?.files[0];e&&lf(e).catch(t=>an(t))});gf();document.fonts.ready.then(()=>{ai||Ln.draw()});document.addEventListener("keydown",n=>{if((n.ctrlKey||n.metaKey)&&!n.altKey&&["KeyS","KeyO","KeyF"].includes(n.code)){n.preventDefault();try{if(n.code==="KeyS")df().catch(e=>an(e));else if(n.code==="KeyO")Dn(),Ue("document-picker").click();else{gc("items");const e=gt.querySelector('input[type="search"]');e.focus(),e.select()}}catch(e){an(e)}return}n.key!=="Escape"||document.body.classList.contains("collapsed")||(Da(!0),Ue("open").focus())});let Sa;function _f(){if(ai)return;const[n,e]=Ir();if(!(Tn?.rendering.canvas_size[0]===n&&Tn.rendering.canvas_size[1]===e)){if(Yi||Yt||Ei){Sa=setTimeout(_f,100);return}Jt(Je)}}const vf=new ResizeObserver(()=>{clearTimeout(Sa),Sa=setTimeout(_f,160)});vf.observe(Ue("stage"));function xf(){ai||(ai=!0,of?.(),++Gi,clearTimeout(ls),clearTimeout(Er),clearTimeout(Mi),clearTimeout(Sa),clearTimeout(rf),cancelAnimationFrame(nf),vf.disconnect(),ki.dispose(),Ln.dispose())}async function Sf(){if(ai||!jr)return;if(Yi||Yt||Ei||Er!==void 0||Mi!==void 0){rf=setTimeout(Sf,100);return}const n=jr;if(Ai&&!await Pa("서버의 새 그래프로 편집 중인 입력을 바꿀까요?")){Ue("host-status").textContent="서버에 새 변경 사항이 있습니다. 진단의 서버 새로고침으로 불러오세요.";return}jr!==n||ai||(jr=void 0,Vc(),Jt(n,!0))}Ct?.subscribe(n=>{if(n.type==="teardown")return xf();ai||(n.type==="document"?(jr=structuredClone(n.document),Sf()):n.type==="theme"&&!Gc?(ri=n.dark,La()):n.type==="notice"&&(Ue("host-status").textContent=n.text,n.error&&an(new Error(n.text))))});window.addEventListener("pagehide",xf);Hi();uf(Ue("document-picker"));Xy();
