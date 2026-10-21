(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function K(n,e,t){function i(o,l){if(o._zod||Object.defineProperty(o,"_zod",{value:{def:l,constr:a,traits:new Set},enumerable:!1}),o._zod.traits.has(n))return;o._zod.traits.add(n),e(o,l);const c=a.prototype,f=Object.keys(c);for(let d=0;d<f.length;d++){const u=f[d];u in o||(o[u]=c[u].bind(o))}}const r=t?.Parent??Object;class s extends r{}Object.defineProperty(s,"name",{value:n});function a(o){var l;const c=t?.Parent?new s:this;i(c,o),(l=c._zod).deferred??(l.deferred=[]);for(const f of c._zod.deferred)f();return c}return Object.defineProperty(a,"init",{value:i}),Object.defineProperty(a,Symbol.hasInstance,{value:o=>t?.Parent&&o instanceof t.Parent?!0:o?._zod?.traits?.has(n)}),Object.defineProperty(a,"name",{value:n}),a}class Yi extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class Nl extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}}const Ul={};function ai(n){return Ul}function Fl(n){const e=Object.values(n).filter(i=>typeof i=="number");return Object.entries(n).filter(([i,r])=>e.indexOf(+i)===-1).map(([i,r])=>r)}function Ia(n,e){return typeof e=="bigint"?e.toString():e}function Ao(n){return{get value(){{const e=n();return Object.defineProperty(this,"value",{value:e}),e}}}}function Ro(n){return n==null}function Co(n){const e=n.startsWith("^")?1:0,t=n.endsWith("$")?n.length-1:n.length;return n.slice(e,t)}function lf(n,e){const t=(n.toString().split(".")[1]||"").length,i=e.toString();let r=(i.split(".")[1]||"").length;if(r===0&&/\d?e-\d?/.test(i)){const l=i.match(/\d?e-(\d?)/);l?.[1]&&(r=Number.parseInt(l[1]))}const s=t>r?t:r,a=Number.parseInt(n.toFixed(s).replace(".","")),o=Number.parseInt(e.toFixed(s).replace(".",""));return a%o/10**s}const lc=Symbol("evaluating");function nt(n,e,t){let i;Object.defineProperty(n,e,{get(){if(i!==lc)return i===void 0&&(i=lc,i=t()),i},set(r){Object.defineProperty(n,e,{value:r})},configurable:!0})}function Ti(n,e,t){Object.defineProperty(n,e,{value:t,writable:!0,enumerable:!0,configurable:!0})}function ci(...n){const e={};for(const t of n){const i=Object.getOwnPropertyDescriptors(t);Object.assign(e,i)}return Object.defineProperties({},e)}function uc(n){return JSON.stringify(n)}function uf(n){return n.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}const Ol="captureStackTrace"in Error?Error.captureStackTrace:(...n)=>{};function ys(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}const ff=Ao(()=>{if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{const n=Function;return new n(""),!0}catch{return!1}});function er(n){if(ys(n)===!1)return!1;const e=n.constructor;if(e===void 0||typeof e!="function")return!0;const t=e.prototype;return!(ys(t)===!1||Object.prototype.hasOwnProperty.call(t,"isPrototypeOf")===!1)}function zl(n){return er(n)?{...n}:Array.isArray(n)?[...n]:n}const df=new Set(["string","number","symbol"]);function tr(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function li(n,e,t){const i=new n._zod.constr(e??n._zod.def);return(!e||t?.parent)&&(i._zod.parent=n),i}function we(n){const e=n;if(!e)return{};if(typeof e=="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function hf(n){return Object.keys(n).filter(e=>n[e]._zod.optin==="optional"&&n[e]._zod.optout==="optional")}const pf={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]};function mf(n,e){const t=n._zod.def,i=t.checks;if(i&&i.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");const s=ci(n._zod.def,{get shape(){const a={};for(const o in e){if(!(o in t.shape))throw new Error(`Unrecognized key: "${o}"`);e[o]&&(a[o]=t.shape[o])}return Ti(this,"shape",a),a},checks:[]});return li(n,s)}function gf(n,e){const t=n._zod.def,i=t.checks;if(i&&i.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");const s=ci(n._zod.def,{get shape(){const a={...n._zod.def.shape};for(const o in e){if(!(o in t.shape))throw new Error(`Unrecognized key: "${o}"`);e[o]&&delete a[o]}return Ti(this,"shape",a),a},checks:[]});return li(n,s)}function _f(n,e){if(!er(e))throw new Error("Invalid input to extend: expected a plain object");const t=n._zod.def.checks;if(t&&t.length>0){const s=n._zod.def.shape;for(const a in e)if(Object.getOwnPropertyDescriptor(s,a)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}const r=ci(n._zod.def,{get shape(){const s={...n._zod.def.shape,...e};return Ti(this,"shape",s),s}});return li(n,r)}function vf(n,e){if(!er(e))throw new Error("Invalid input to safeExtend: expected a plain object");const t=ci(n._zod.def,{get shape(){const i={...n._zod.def.shape,...e};return Ti(this,"shape",i),i}});return li(n,t)}function xf(n,e){const t=ci(n._zod.def,{get shape(){const i={...n._zod.def.shape,...e._zod.def.shape};return Ti(this,"shape",i),i},get catchall(){return e._zod.def.catchall},checks:[]});return li(n,t)}function Sf(n,e,t){const r=e._zod.def.checks;if(r&&r.length>0)throw new Error(".partial() cannot be used on object schemas containing refinements");const a=ci(e._zod.def,{get shape(){const o=e._zod.def.shape,l={...o};if(t)for(const c in t){if(!(c in o))throw new Error(`Unrecognized key: "${c}"`);t[c]&&(l[c]=n?new n({type:"optional",innerType:o[c]}):o[c])}else for(const c in o)l[c]=n?new n({type:"optional",innerType:o[c]}):o[c];return Ti(this,"shape",l),l},checks:[]});return li(e,a)}function Mf(n,e,t){const i=ci(e._zod.def,{get shape(){const r=e._zod.def.shape,s={...r};if(t)for(const a in t){if(!(a in s))throw new Error(`Unrecognized key: "${a}"`);t[a]&&(s[a]=new n({type:"nonoptional",innerType:r[a]}))}else for(const a in r)s[a]=new n({type:"nonoptional",innerType:r[a]});return Ti(this,"shape",s),s}});return li(e,i)}function $i(n,e=0){if(n.aborted===!0)return!0;for(let t=e;t<n.issues.length;t++)if(n.issues[t]?.continue!==!0)return!0;return!1}function vi(n,e){return e.map(t=>{var i;return(i=t).path??(i.path=[]),t.path.unshift(n),t})}function kr(n){return typeof n=="string"?n:n?.message}function oi(n,e,t){const i={...n,path:n.path??[]};if(!n.message){const r=kr(n.inst?._zod.def?.error?.(n))??kr(e?.error?.(n))??kr(t.customError?.(n))??kr(t.localeError?.(n))??"Invalid input";i.message=r}return delete i.inst,delete i.continue,e?.reportInput||delete i.input,i}function Po(n){return Array.isArray(n)?"array":typeof n=="string"?"string":"unknown"}function Cr(...n){const[e,t,i]=n;return typeof e=="string"?{message:e,code:"custom",input:t,inst:i}:{...e}}const Bl=(n,e)=>{n.name="$ZodError",Object.defineProperty(n,"_zod",{value:n._zod,enumerable:!1}),Object.defineProperty(n,"issues",{value:e,enumerable:!1}),n.message=JSON.stringify(e,Ia,2),Object.defineProperty(n,"toString",{value:()=>n.message,enumerable:!1})},kl=K("$ZodError",Bl),Gl=K("$ZodError",Bl,{Parent:Error});function yf(n,e=t=>t.message){const t={},i=[];for(const r of n.issues)r.path.length>0?(t[r.path[0]]=t[r.path[0]]||[],t[r.path[0]].push(e(r))):i.push(e(r));return{formErrors:i,fieldErrors:t}}function bf(n,e=t=>t.message){const t={_errors:[]},i=r=>{for(const s of r.issues)if(s.code==="invalid_union"&&s.errors.length)s.errors.map(a=>i({issues:a}));else if(s.code==="invalid_key")i({issues:s.issues});else if(s.code==="invalid_element")i({issues:s.issues});else if(s.path.length===0)t._errors.push(e(s));else{let a=t,o=0;for(;o<s.path.length;){const l=s.path[o];o===s.path.length-1?(a[l]=a[l]||{_errors:[]},a[l]._errors.push(e(s))):a[l]=a[l]||{_errors:[]},a=a[l],o++}}};return i(n),t}const Io=n=>(e,t,i,r)=>{const s=i?Object.assign(i,{async:!1}):{async:!1},a=e._zod.run({value:t,issues:[]},s);if(a instanceof Promise)throw new Yi;if(a.issues.length){const o=new(r?.Err??n)(a.issues.map(l=>oi(l,s,ai())));throw Ol(o,r?.callee),o}return a.value},Do=n=>async(e,t,i,r)=>{const s=i?Object.assign(i,{async:!0}):{async:!0};let a=e._zod.run({value:t,issues:[]},s);if(a instanceof Promise&&(a=await a),a.issues.length){const o=new(r?.Err??n)(a.issues.map(l=>oi(l,s,ai())));throw Ol(o,r?.callee),o}return a.value},Us=n=>(e,t,i)=>{const r=i?{...i,async:!1}:{async:!1},s=e._zod.run({value:t,issues:[]},r);if(s instanceof Promise)throw new Yi;return s.issues.length?{success:!1,error:new(n??kl)(s.issues.map(a=>oi(a,r,ai())))}:{success:!0,data:s.value}},Ef=Us(Gl),Fs=n=>async(e,t,i)=>{const r=i?Object.assign(i,{async:!0}):{async:!0};let s=e._zod.run({value:t,issues:[]},r);return s instanceof Promise&&(s=await s),s.issues.length?{success:!1,error:new n(s.issues.map(a=>oi(a,r,ai())))}:{success:!0,data:s.value}},wf=Fs(Gl),Tf=n=>(e,t,i)=>{const r=i?Object.assign(i,{direction:"backward"}):{direction:"backward"};return Io(n)(e,t,r)},Af=n=>(e,t,i)=>Io(n)(e,t,i),Rf=n=>async(e,t,i)=>{const r=i?Object.assign(i,{direction:"backward"}):{direction:"backward"};return Do(n)(e,t,r)},Cf=n=>async(e,t,i)=>Do(n)(e,t,i),Pf=n=>(e,t,i)=>{const r=i?Object.assign(i,{direction:"backward"}):{direction:"backward"};return Us(n)(e,t,r)},If=n=>(e,t,i)=>Us(n)(e,t,i),Df=n=>async(e,t,i)=>{const r=i?Object.assign(i,{direction:"backward"}):{direction:"backward"};return Fs(n)(e,t,r)},Lf=n=>async(e,t,i)=>Fs(n)(e,t,i),Nf=/^[cC][^\s-]{8,}$/,Uf=/^[0-9a-z]+$/,Ff=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,Of=/^[0-9a-vA-V]{20}$/,zf=/^[A-Za-z0-9]{27}$/,Bf=/^[a-zA-Z0-9_-]{21}$/,kf=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Gf=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,fc=n=>n?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,Vf=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,Hf="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function Wf(){return new RegExp(Hf,"u")}const Xf=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,$f=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,Zf=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,qf=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Yf=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Vl=/^[A-Za-z0-9_-]*$/,Kf=/^\+[1-9]\d{6,14}$/,Hl="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",Jf=new RegExp(`^${Hl}$`);function Wl(n){const e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof n.precision=="number"?n.precision===-1?`${e}`:n.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${n.precision}}`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function Qf(n){return new RegExp(`^${Wl(n)}$`)}function jf(n){const e=Wl({precision:n.precision}),t=["Z"];n.local&&t.push(""),n.offset&&t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const i=`${e}(?:${t.join("|")})`;return new RegExp(`^${Hl}T(?:${i})$`)}const ed=n=>{const e=n?`[\\s\\S]{${n?.minimum??0},${n?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${e}$`)},td=/^-?\d+$/,Xl=/^-?\d+(?:\.\d+)?$/,nd=/^(?:true|false)$/i,id=/^[^A-Z]*$/,rd=/^[^a-z]*$/,en=K("$ZodCheck",(n,e)=>{var t;n._zod??(n._zod={}),n._zod.def=e,(t=n._zod).onattach??(t.onattach=[])}),$l={number:"number",bigint:"bigint",object:"date"},Zl=K("$ZodCheckLessThan",(n,e)=>{en.init(n,e);const t=$l[typeof e.value];n._zod.onattach.push(i=>{const r=i._zod.bag,s=(e.inclusive?r.maximum:r.exclusiveMaximum)??Number.POSITIVE_INFINITY;e.value<s&&(e.inclusive?r.maximum=e.value:r.exclusiveMaximum=e.value)}),n._zod.check=i=>{(e.inclusive?i.value<=e.value:i.value<e.value)||i.issues.push({origin:t,code:"too_big",maximum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:n,continue:!e.abort})}}),ql=K("$ZodCheckGreaterThan",(n,e)=>{en.init(n,e);const t=$l[typeof e.value];n._zod.onattach.push(i=>{const r=i._zod.bag,s=(e.inclusive?r.minimum:r.exclusiveMinimum)??Number.NEGATIVE_INFINITY;e.value>s&&(e.inclusive?r.minimum=e.value:r.exclusiveMinimum=e.value)}),n._zod.check=i=>{(e.inclusive?i.value>=e.value:i.value>e.value)||i.issues.push({origin:t,code:"too_small",minimum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:n,continue:!e.abort})}}),sd=K("$ZodCheckMultipleOf",(n,e)=>{en.init(n,e),n._zod.onattach.push(t=>{var i;(i=t._zod.bag).multipleOf??(i.multipleOf=e.value)}),n._zod.check=t=>{if(typeof t.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof t.value=="bigint"?t.value%e.value===BigInt(0):lf(t.value,e.value)===0)||t.issues.push({origin:typeof t.value,code:"not_multiple_of",divisor:e.value,input:t.value,inst:n,continue:!e.abort})}}),ad=K("$ZodCheckNumberFormat",(n,e)=>{en.init(n,e),e.format=e.format||"float64";const t=e.format?.includes("int"),i=t?"int":"number",[r,s]=pf[e.format];n._zod.onattach.push(a=>{const o=a._zod.bag;o.format=e.format,o.minimum=r,o.maximum=s,t&&(o.pattern=td)}),n._zod.check=a=>{const o=a.value;if(t){if(!Number.isInteger(o)){a.issues.push({expected:i,format:e.format,code:"invalid_type",continue:!1,input:o,inst:n});return}if(!Number.isSafeInteger(o)){o>0?a.issues.push({input:o,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:n,origin:i,inclusive:!0,continue:!e.abort}):a.issues.push({input:o,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:n,origin:i,inclusive:!0,continue:!e.abort});return}}o<r&&a.issues.push({origin:"number",input:o,code:"too_small",minimum:r,inclusive:!0,inst:n,continue:!e.abort}),o>s&&a.issues.push({origin:"number",input:o,code:"too_big",maximum:s,inclusive:!0,inst:n,continue:!e.abort})}}),od=K("$ZodCheckMaxLength",(n,e)=>{var t;en.init(n,e),(t=n._zod.def).when??(t.when=i=>{const r=i.value;return!Ro(r)&&r.length!==void 0}),n._zod.onattach.push(i=>{const r=i._zod.bag.maximum??Number.POSITIVE_INFINITY;e.maximum<r&&(i._zod.bag.maximum=e.maximum)}),n._zod.check=i=>{const r=i.value;if(r.length<=e.maximum)return;const a=Po(r);i.issues.push({origin:a,code:"too_big",maximum:e.maximum,inclusive:!0,input:r,inst:n,continue:!e.abort})}}),cd=K("$ZodCheckMinLength",(n,e)=>{var t;en.init(n,e),(t=n._zod.def).when??(t.when=i=>{const r=i.value;return!Ro(r)&&r.length!==void 0}),n._zod.onattach.push(i=>{const r=i._zod.bag.minimum??Number.NEGATIVE_INFINITY;e.minimum>r&&(i._zod.bag.minimum=e.minimum)}),n._zod.check=i=>{const r=i.value;if(r.length>=e.minimum)return;const a=Po(r);i.issues.push({origin:a,code:"too_small",minimum:e.minimum,inclusive:!0,input:r,inst:n,continue:!e.abort})}}),ld=K("$ZodCheckLengthEquals",(n,e)=>{var t;en.init(n,e),(t=n._zod.def).when??(t.when=i=>{const r=i.value;return!Ro(r)&&r.length!==void 0}),n._zod.onattach.push(i=>{const r=i._zod.bag;r.minimum=e.length,r.maximum=e.length,r.length=e.length}),n._zod.check=i=>{const r=i.value,s=r.length;if(s===e.length)return;const a=Po(r),o=s>e.length;i.issues.push({origin:a,...o?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:i.value,inst:n,continue:!e.abort})}}),Os=K("$ZodCheckStringFormat",(n,e)=>{var t,i;en.init(n,e),n._zod.onattach.push(r=>{const s=r._zod.bag;s.format=e.format,e.pattern&&(s.patterns??(s.patterns=new Set),s.patterns.add(e.pattern))}),e.pattern?(t=n._zod).check??(t.check=r=>{e.pattern.lastIndex=0,!e.pattern.test(r.value)&&r.issues.push({origin:"string",code:"invalid_format",format:e.format,input:r.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:n,continue:!e.abort})}):(i=n._zod).check??(i.check=()=>{})}),ud=K("$ZodCheckRegex",(n,e)=>{Os.init(n,e),n._zod.check=t=>{e.pattern.lastIndex=0,!e.pattern.test(t.value)&&t.issues.push({origin:"string",code:"invalid_format",format:"regex",input:t.value,pattern:e.pattern.toString(),inst:n,continue:!e.abort})}}),fd=K("$ZodCheckLowerCase",(n,e)=>{e.pattern??(e.pattern=id),Os.init(n,e)}),dd=K("$ZodCheckUpperCase",(n,e)=>{e.pattern??(e.pattern=rd),Os.init(n,e)}),hd=K("$ZodCheckIncludes",(n,e)=>{en.init(n,e);const t=tr(e.includes),i=new RegExp(typeof e.position=="number"?`^.{${e.position}}${t}`:t);e.pattern=i,n._zod.onattach.push(r=>{const s=r._zod.bag;s.patterns??(s.patterns=new Set),s.patterns.add(i)}),n._zod.check=r=>{r.value.includes(e.includes,e.position)||r.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:r.value,inst:n,continue:!e.abort})}}),pd=K("$ZodCheckStartsWith",(n,e)=>{en.init(n,e);const t=new RegExp(`^${tr(e.prefix)}.*`);e.pattern??(e.pattern=t),n._zod.onattach.push(i=>{const r=i._zod.bag;r.patterns??(r.patterns=new Set),r.patterns.add(t)}),n._zod.check=i=>{i.value.startsWith(e.prefix)||i.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:i.value,inst:n,continue:!e.abort})}}),md=K("$ZodCheckEndsWith",(n,e)=>{en.init(n,e);const t=new RegExp(`.*${tr(e.suffix)}$`);e.pattern??(e.pattern=t),n._zod.onattach.push(i=>{const r=i._zod.bag;r.patterns??(r.patterns=new Set),r.patterns.add(t)}),n._zod.check=i=>{i.value.endsWith(e.suffix)||i.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:i.value,inst:n,continue:!e.abort})}}),gd=K("$ZodCheckOverwrite",(n,e)=>{en.init(n,e),n._zod.check=t=>{t.value=e.tx(t.value)}});class _d{constructor(e=[]){this.content=[],this.indent=0,this&&(this.args=e)}indented(e){this.indent+=1,e(this),this.indent-=1}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}const i=e.split(`
`).filter(a=>a),r=Math.min(...i.map(a=>a.length-a.trimStart().length)),s=i.map(a=>a.slice(r)).map(a=>" ".repeat(this.indent*2)+a);for(const a of s)this.content.push(a)}compile(){const e=Function,t=this?.args,r=[...(this?.content??[""]).map(s=>`  ${s}`)];return new e(...t,r.join(`
`))}}const vd={major:4,minor:3,patch:6},dt=K("$ZodType",(n,e)=>{var t;n??(n={}),n._zod.def=e,n._zod.bag=n._zod.bag||{},n._zod.version=vd;const i=[...n._zod.def.checks??[]];n._zod.traits.has("$ZodCheck")&&i.unshift(n);for(const r of i)for(const s of r._zod.onattach)s(n);if(i.length===0)(t=n._zod).deferred??(t.deferred=[]),n._zod.deferred?.push(()=>{n._zod.run=n._zod.parse});else{const r=(a,o,l)=>{let c=$i(a),f;for(const d of o){if(d._zod.def.when){if(!d._zod.def.when(a))continue}else if(c)continue;const u=a.issues.length,h=d._zod.check(a);if(h instanceof Promise&&l?.async===!1)throw new Yi;if(f||h instanceof Promise)f=(f??Promise.resolve()).then(async()=>{await h,a.issues.length!==u&&(c||(c=$i(a,u)))});else{if(a.issues.length===u)continue;c||(c=$i(a,u))}}return f?f.then(()=>a):a},s=(a,o,l)=>{if($i(a))return a.aborted=!0,a;const c=r(o,i,l);if(c instanceof Promise){if(l.async===!1)throw new Yi;return c.then(f=>n._zod.parse(f,l))}return n._zod.parse(c,l)};n._zod.run=(a,o)=>{if(o.skipChecks)return n._zod.parse(a,o);if(o.direction==="backward"){const c=n._zod.parse({value:a.value,issues:[]},{...o,skipChecks:!0});return c instanceof Promise?c.then(f=>s(f,a,o)):s(c,a,o)}const l=n._zod.parse(a,o);if(l instanceof Promise){if(o.async===!1)throw new Yi;return l.then(c=>r(c,i,o))}return r(l,i,o)}}nt(n,"~standard",()=>({validate:r=>{try{const s=Ef(n,r);return s.success?{value:s.data}:{issues:s.error?.issues}}catch{return wf(n,r).then(a=>a.success?{value:a.data}:{issues:a.error?.issues})}},vendor:"zod",version:1}))}),Lo=K("$ZodString",(n,e)=>{dt.init(n,e),n._zod.pattern=[...n?._zod.bag?.patterns??[]].pop()??ed(n._zod.bag),n._zod.parse=(t,i)=>{if(e.coerce)try{t.value=String(t.value)}catch{}return typeof t.value=="string"||t.issues.push({expected:"string",code:"invalid_type",input:t.value,inst:n}),t}}),pt=K("$ZodStringFormat",(n,e)=>{Os.init(n,e),Lo.init(n,e)}),xd=K("$ZodGUID",(n,e)=>{e.pattern??(e.pattern=Gf),pt.init(n,e)}),Sd=K("$ZodUUID",(n,e)=>{if(e.version){const i={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(i===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=fc(i))}else e.pattern??(e.pattern=fc());pt.init(n,e)}),Md=K("$ZodEmail",(n,e)=>{e.pattern??(e.pattern=Vf),pt.init(n,e)}),yd=K("$ZodURL",(n,e)=>{pt.init(n,e),n._zod.check=t=>{try{const i=t.value.trim(),r=new URL(i);e.hostname&&(e.hostname.lastIndex=0,e.hostname.test(r.hostname)||t.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:e.hostname.source,input:t.value,inst:n,continue:!e.abort})),e.protocol&&(e.protocol.lastIndex=0,e.protocol.test(r.protocol.endsWith(":")?r.protocol.slice(0,-1):r.protocol)||t.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:t.value,inst:n,continue:!e.abort})),e.normalize?t.value=r.href:t.value=i;return}catch{t.issues.push({code:"invalid_format",format:"url",input:t.value,inst:n,continue:!e.abort})}}}),bd=K("$ZodEmoji",(n,e)=>{e.pattern??(e.pattern=Wf()),pt.init(n,e)}),Ed=K("$ZodNanoID",(n,e)=>{e.pattern??(e.pattern=Bf),pt.init(n,e)}),wd=K("$ZodCUID",(n,e)=>{e.pattern??(e.pattern=Nf),pt.init(n,e)}),Td=K("$ZodCUID2",(n,e)=>{e.pattern??(e.pattern=Uf),pt.init(n,e)}),Ad=K("$ZodULID",(n,e)=>{e.pattern??(e.pattern=Ff),pt.init(n,e)}),Rd=K("$ZodXID",(n,e)=>{e.pattern??(e.pattern=Of),pt.init(n,e)}),Cd=K("$ZodKSUID",(n,e)=>{e.pattern??(e.pattern=zf),pt.init(n,e)}),Pd=K("$ZodISODateTime",(n,e)=>{e.pattern??(e.pattern=jf(e)),pt.init(n,e)}),Id=K("$ZodISODate",(n,e)=>{e.pattern??(e.pattern=Jf),pt.init(n,e)}),Dd=K("$ZodISOTime",(n,e)=>{e.pattern??(e.pattern=Qf(e)),pt.init(n,e)}),Ld=K("$ZodISODuration",(n,e)=>{e.pattern??(e.pattern=kf),pt.init(n,e)}),Nd=K("$ZodIPv4",(n,e)=>{e.pattern??(e.pattern=Xf),pt.init(n,e),n._zod.bag.format="ipv4"}),Ud=K("$ZodIPv6",(n,e)=>{e.pattern??(e.pattern=$f),pt.init(n,e),n._zod.bag.format="ipv6",n._zod.check=t=>{try{new URL(`http://[${t.value}]`)}catch{t.issues.push({code:"invalid_format",format:"ipv6",input:t.value,inst:n,continue:!e.abort})}}}),Fd=K("$ZodCIDRv4",(n,e)=>{e.pattern??(e.pattern=Zf),pt.init(n,e)}),Od=K("$ZodCIDRv6",(n,e)=>{e.pattern??(e.pattern=qf),pt.init(n,e),n._zod.check=t=>{const i=t.value.split("/");try{if(i.length!==2)throw new Error;const[r,s]=i;if(!s)throw new Error;const a=Number(s);if(`${a}`!==s)throw new Error;if(a<0||a>128)throw new Error;new URL(`http://[${r}]`)}catch{t.issues.push({code:"invalid_format",format:"cidrv6",input:t.value,inst:n,continue:!e.abort})}}});function Yl(n){if(n==="")return!0;if(n.length%4!==0)return!1;try{return atob(n),!0}catch{return!1}}const zd=K("$ZodBase64",(n,e)=>{e.pattern??(e.pattern=Yf),pt.init(n,e),n._zod.bag.contentEncoding="base64",n._zod.check=t=>{Yl(t.value)||t.issues.push({code:"invalid_format",format:"base64",input:t.value,inst:n,continue:!e.abort})}});function Bd(n){if(!Vl.test(n))return!1;const e=n.replace(/[-_]/g,i=>i==="-"?"+":"/"),t=e.padEnd(Math.ceil(e.length/4)*4,"=");return Yl(t)}const kd=K("$ZodBase64URL",(n,e)=>{e.pattern??(e.pattern=Vl),pt.init(n,e),n._zod.bag.contentEncoding="base64url",n._zod.check=t=>{Bd(t.value)||t.issues.push({code:"invalid_format",format:"base64url",input:t.value,inst:n,continue:!e.abort})}}),Gd=K("$ZodE164",(n,e)=>{e.pattern??(e.pattern=Kf),pt.init(n,e)});function Vd(n,e=null){try{const t=n.split(".");if(t.length!==3)return!1;const[i]=t;if(!i)return!1;const r=JSON.parse(atob(i));return!("typ"in r&&r?.typ!=="JWT"||!r.alg||e&&(!("alg"in r)||r.alg!==e))}catch{return!1}}const Hd=K("$ZodJWT",(n,e)=>{pt.init(n,e),n._zod.check=t=>{Vd(t.value,e.alg)||t.issues.push({code:"invalid_format",format:"jwt",input:t.value,inst:n,continue:!e.abort})}}),Kl=K("$ZodNumber",(n,e)=>{dt.init(n,e),n._zod.pattern=n._zod.bag.pattern??Xl,n._zod.parse=(t,i)=>{if(e.coerce)try{t.value=Number(t.value)}catch{}const r=t.value;if(typeof r=="number"&&!Number.isNaN(r)&&Number.isFinite(r))return t;const s=typeof r=="number"?Number.isNaN(r)?"NaN":Number.isFinite(r)?void 0:"Infinity":void 0;return t.issues.push({expected:"number",code:"invalid_type",input:r,inst:n,...s?{received:s}:{}}),t}}),Wd=K("$ZodNumberFormat",(n,e)=>{ad.init(n,e),Kl.init(n,e)}),Xd=K("$ZodBoolean",(n,e)=>{dt.init(n,e),n._zod.pattern=nd,n._zod.parse=(t,i)=>{if(e.coerce)try{t.value=!!t.value}catch{}const r=t.value;return typeof r=="boolean"||t.issues.push({expected:"boolean",code:"invalid_type",input:r,inst:n}),t}}),$d=K("$ZodUnknown",(n,e)=>{dt.init(n,e),n._zod.parse=t=>t}),Zd=K("$ZodNever",(n,e)=>{dt.init(n,e),n._zod.parse=(t,i)=>(t.issues.push({expected:"never",code:"invalid_type",input:t.value,inst:n}),t)});function dc(n,e,t){n.issues.length&&e.issues.push(...vi(t,n.issues)),e.value[t]=n.value}const qd=K("$ZodArray",(n,e)=>{dt.init(n,e),n._zod.parse=(t,i)=>{const r=t.value;if(!Array.isArray(r))return t.issues.push({expected:"array",code:"invalid_type",input:r,inst:n}),t;t.value=Array(r.length);const s=[];for(let a=0;a<r.length;a++){const o=r[a],l=e.element._zod.run({value:o,issues:[]},i);l instanceof Promise?s.push(l.then(c=>dc(c,t,a))):dc(l,t,a)}return s.length?Promise.all(s).then(()=>t):t}});function bs(n,e,t,i,r){if(n.issues.length){if(r&&!(t in i))return;e.issues.push(...vi(t,n.issues))}n.value===void 0?t in i&&(e.value[t]=void 0):e.value[t]=n.value}function Jl(n){const e=Object.keys(n.shape);for(const i of e)if(!n.shape?.[i]?._zod?.traits?.has("$ZodType"))throw new Error(`Invalid element at key "${i}": expected a Zod schema`);const t=hf(n.shape);return{...n,keys:e,keySet:new Set(e),numKeys:e.length,optionalKeys:new Set(t)}}function Ql(n,e,t,i,r,s){const a=[],o=r.keySet,l=r.catchall._zod,c=l.def.type,f=l.optout==="optional";for(const d in e){if(o.has(d))continue;if(c==="never"){a.push(d);continue}const u=l.run({value:e[d],issues:[]},i);u instanceof Promise?n.push(u.then(h=>bs(h,t,d,e,f))):bs(u,t,d,e,f)}return a.length&&t.issues.push({code:"unrecognized_keys",keys:a,input:e,inst:s}),n.length?Promise.all(n).then(()=>t):t}const Yd=K("$ZodObject",(n,e)=>{if(dt.init(n,e),!Object.getOwnPropertyDescriptor(e,"shape")?.get){const o=e.shape;Object.defineProperty(e,"shape",{get:()=>{const l={...o};return Object.defineProperty(e,"shape",{value:l}),l}})}const i=Ao(()=>Jl(e));nt(n._zod,"propValues",()=>{const o=e.shape,l={};for(const c in o){const f=o[c]._zod;if(f.values){l[c]??(l[c]=new Set);for(const d of f.values)l[c].add(d)}}return l});const r=ys,s=e.catchall;let a;n._zod.parse=(o,l)=>{a??(a=i.value);const c=o.value;if(!r(c))return o.issues.push({expected:"object",code:"invalid_type",input:c,inst:n}),o;o.value={};const f=[],d=a.shape;for(const u of a.keys){const h=d[u],_=h._zod.optout==="optional",S=h._zod.run({value:c[u],issues:[]},l);S instanceof Promise?f.push(S.then(m=>bs(m,o,u,c,_))):bs(S,o,u,c,_)}return s?Ql(f,c,o,l,i.value,n):f.length?Promise.all(f).then(()=>o):o}}),Kd=K("$ZodObjectJIT",(n,e)=>{Yd.init(n,e);const t=n._zod.parse,i=Ao(()=>Jl(e)),r=u=>{const h=new _d(["shape","payload","ctx"]),_=i.value,S=R=>{const M=uc(R);return`shape[${M}]._zod.run({ value: input[${M}], issues: [] }, ctx)`};h.write("const input = payload.value;");const m=Object.create(null);let p=0;for(const R of _.keys)m[R]=`key_${p++}`;h.write("const newResult = {};");for(const R of _.keys){const M=m[R],y=uc(R),A=u[R]?._zod?.optout==="optional";h.write(`const ${M} = ${S(R)};`),A?h.write(`
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
        
      `)}h.write("payload.value = newResult;"),h.write("return payload;");const T=h.compile();return(R,M)=>T(u,R,M)};let s;const a=ys,o=!Ul.jitless,c=o&&ff.value,f=e.catchall;let d;n._zod.parse=(u,h)=>{d??(d=i.value);const _=u.value;return a(_)?o&&c&&h?.async===!1&&h.jitless!==!0?(s||(s=r(e.shape)),u=s(u,h),f?Ql([],_,u,h,d,n):u):t(u,h):(u.issues.push({expected:"object",code:"invalid_type",input:_,inst:n}),u)}});function hc(n,e,t,i){for(const s of n)if(s.issues.length===0)return e.value=s.value,e;const r=n.filter(s=>!$i(s));return r.length===1?(e.value=r[0].value,r[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:t,errors:n.map(s=>s.issues.map(a=>oi(a,i,ai())))}),e)}const Jd=K("$ZodUnion",(n,e)=>{dt.init(n,e),nt(n._zod,"optin",()=>e.options.some(r=>r._zod.optin==="optional")?"optional":void 0),nt(n._zod,"optout",()=>e.options.some(r=>r._zod.optout==="optional")?"optional":void 0),nt(n._zod,"values",()=>{if(e.options.every(r=>r._zod.values))return new Set(e.options.flatMap(r=>Array.from(r._zod.values)))}),nt(n._zod,"pattern",()=>{if(e.options.every(r=>r._zod.pattern)){const r=e.options.map(s=>s._zod.pattern);return new RegExp(`^(${r.map(s=>Co(s.source)).join("|")})$`)}});const t=e.options.length===1,i=e.options[0]._zod.run;n._zod.parse=(r,s)=>{if(t)return i(r,s);let a=!1;const o=[];for(const l of e.options){const c=l._zod.run({value:r.value,issues:[]},s);if(c instanceof Promise)o.push(c),a=!0;else{if(c.issues.length===0)return c;o.push(c)}}return a?Promise.all(o).then(l=>hc(l,r,n,s)):hc(o,r,n,s)}}),Qd=K("$ZodIntersection",(n,e)=>{dt.init(n,e),n._zod.parse=(t,i)=>{const r=t.value,s=e.left._zod.run({value:r,issues:[]},i),a=e.right._zod.run({value:r,issues:[]},i);return s instanceof Promise||a instanceof Promise?Promise.all([s,a]).then(([l,c])=>pc(t,l,c)):pc(t,s,a)}});function Da(n,e){if(n===e)return{valid:!0,data:n};if(n instanceof Date&&e instanceof Date&&+n==+e)return{valid:!0,data:n};if(er(n)&&er(e)){const t=Object.keys(e),i=Object.keys(n).filter(s=>t.indexOf(s)!==-1),r={...n,...e};for(const s of i){const a=Da(n[s],e[s]);if(!a.valid)return{valid:!1,mergeErrorPath:[s,...a.mergeErrorPath]};r[s]=a.data}return{valid:!0,data:r}}if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return{valid:!1,mergeErrorPath:[]};const t=[];for(let i=0;i<n.length;i++){const r=n[i],s=e[i],a=Da(r,s);if(!a.valid)return{valid:!1,mergeErrorPath:[i,...a.mergeErrorPath]};t.push(a.data)}return{valid:!0,data:t}}return{valid:!1,mergeErrorPath:[]}}function pc(n,e,t){const i=new Map;let r;for(const o of e.issues)if(o.code==="unrecognized_keys"){r??(r=o);for(const l of o.keys)i.has(l)||i.set(l,{}),i.get(l).l=!0}else n.issues.push(o);for(const o of t.issues)if(o.code==="unrecognized_keys")for(const l of o.keys)i.has(l)||i.set(l,{}),i.get(l).r=!0;else n.issues.push(o);const s=[...i].filter(([,o])=>o.l&&o.r).map(([o])=>o);if(s.length&&r&&n.issues.push({...r,keys:s}),$i(n))return n;const a=Da(e.value,t.value);if(!a.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);return n.value=a.data,n}const jd=K("$ZodTuple",(n,e)=>{dt.init(n,e);const t=e.items;n._zod.parse=(i,r)=>{const s=i.value;if(!Array.isArray(s))return i.issues.push({input:s,inst:n,expected:"tuple",code:"invalid_type"}),i;i.value=[];const a=[],o=[...t].reverse().findIndex(f=>f._zod.optin!=="optional"),l=o===-1?0:t.length-o;if(!e.rest){const f=s.length>t.length,d=s.length<l-1;if(f||d)return i.issues.push({...f?{code:"too_big",maximum:t.length,inclusive:!0}:{code:"too_small",minimum:t.length},input:s,inst:n,origin:"array"}),i}let c=-1;for(const f of t){if(c++,c>=s.length&&c>=l)continue;const d=f._zod.run({value:s[c],issues:[]},r);d instanceof Promise?a.push(d.then(u=>Gr(u,i,c))):Gr(d,i,c)}if(e.rest){const f=s.slice(t.length);for(const d of f){c++;const u=e.rest._zod.run({value:d,issues:[]},r);u instanceof Promise?a.push(u.then(h=>Gr(h,i,c))):Gr(u,i,c)}}return a.length?Promise.all(a).then(()=>i):i}});function Gr(n,e,t){n.issues.length&&e.issues.push(...vi(t,n.issues)),e.value[t]=n.value}const eh=K("$ZodRecord",(n,e)=>{dt.init(n,e),n._zod.parse=(t,i)=>{const r=t.value;if(!er(r))return t.issues.push({expected:"record",code:"invalid_type",input:r,inst:n}),t;const s=[],a=e.keyType._zod.values;if(a){t.value={};const o=new Set;for(const c of a)if(typeof c=="string"||typeof c=="number"||typeof c=="symbol"){o.add(typeof c=="number"?c.toString():c);const f=e.valueType._zod.run({value:r[c],issues:[]},i);f instanceof Promise?s.push(f.then(d=>{d.issues.length&&t.issues.push(...vi(c,d.issues)),t.value[c]=d.value})):(f.issues.length&&t.issues.push(...vi(c,f.issues)),t.value[c]=f.value)}let l;for(const c in r)o.has(c)||(l=l??[],l.push(c));l&&l.length>0&&t.issues.push({code:"unrecognized_keys",input:r,inst:n,keys:l})}else{t.value={};for(const o of Reflect.ownKeys(r)){if(o==="__proto__")continue;let l=e.keyType._zod.run({value:o,issues:[]},i);if(l instanceof Promise)throw new Error("Async schemas not supported in object keys currently");if(typeof o=="string"&&Xl.test(o)&&l.issues.length){const d=e.keyType._zod.run({value:Number(o),issues:[]},i);if(d instanceof Promise)throw new Error("Async schemas not supported in object keys currently");d.issues.length===0&&(l=d)}if(l.issues.length){e.mode==="loose"?t.value[o]=r[o]:t.issues.push({code:"invalid_key",origin:"record",issues:l.issues.map(d=>oi(d,i,ai())),input:o,path:[o],inst:n});continue}const f=e.valueType._zod.run({value:r[o],issues:[]},i);f instanceof Promise?s.push(f.then(d=>{d.issues.length&&t.issues.push(...vi(o,d.issues)),t.value[l.value]=d.value})):(f.issues.length&&t.issues.push(...vi(o,f.issues)),t.value[l.value]=f.value)}}return s.length?Promise.all(s).then(()=>t):t}}),th=K("$ZodEnum",(n,e)=>{dt.init(n,e);const t=Fl(e.entries),i=new Set(t);n._zod.values=i,n._zod.pattern=new RegExp(`^(${t.filter(r=>df.has(typeof r)).map(r=>typeof r=="string"?tr(r):r.toString()).join("|")})$`),n._zod.parse=(r,s)=>{const a=r.value;return i.has(a)||r.issues.push({code:"invalid_value",values:t,input:a,inst:n}),r}}),nh=K("$ZodLiteral",(n,e)=>{if(dt.init(n,e),e.values.length===0)throw new Error("Cannot create literal schema with no valid values");const t=new Set(e.values);n._zod.values=t,n._zod.pattern=new RegExp(`^(${e.values.map(i=>typeof i=="string"?tr(i):i?tr(i.toString()):String(i)).join("|")})$`),n._zod.parse=(i,r)=>{const s=i.value;return t.has(s)||i.issues.push({code:"invalid_value",values:e.values,input:s,inst:n}),i}}),ih=K("$ZodTransform",(n,e)=>{dt.init(n,e),n._zod.parse=(t,i)=>{if(i.direction==="backward")throw new Nl(n.constructor.name);const r=e.transform(t.value,t);if(i.async)return(r instanceof Promise?r:Promise.resolve(r)).then(a=>(t.value=a,t));if(r instanceof Promise)throw new Yi;return t.value=r,t}});function mc(n,e){return n.issues.length&&e===void 0?{issues:[],value:void 0}:n}const jl=K("$ZodOptional",(n,e)=>{dt.init(n,e),n._zod.optin="optional",n._zod.optout="optional",nt(n._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,void 0]):void 0),nt(n._zod,"pattern",()=>{const t=e.innerType._zod.pattern;return t?new RegExp(`^(${Co(t.source)})?$`):void 0}),n._zod.parse=(t,i)=>{if(e.innerType._zod.optin==="optional"){const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(s=>mc(s,t.value)):mc(r,t.value)}return t.value===void 0?t:e.innerType._zod.run(t,i)}}),rh=K("$ZodExactOptional",(n,e)=>{jl.init(n,e),nt(n._zod,"values",()=>e.innerType._zod.values),nt(n._zod,"pattern",()=>e.innerType._zod.pattern),n._zod.parse=(t,i)=>e.innerType._zod.run(t,i)}),sh=K("$ZodNullable",(n,e)=>{dt.init(n,e),nt(n._zod,"optin",()=>e.innerType._zod.optin),nt(n._zod,"optout",()=>e.innerType._zod.optout),nt(n._zod,"pattern",()=>{const t=e.innerType._zod.pattern;return t?new RegExp(`^(${Co(t.source)}|null)$`):void 0}),nt(n._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,null]):void 0),n._zod.parse=(t,i)=>t.value===null?t:e.innerType._zod.run(t,i)}),ah=K("$ZodDefault",(n,e)=>{dt.init(n,e),n._zod.optin="optional",nt(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(t,i)=>{if(i.direction==="backward")return e.innerType._zod.run(t,i);if(t.value===void 0)return t.value=e.defaultValue,t;const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(s=>gc(s,e)):gc(r,e)}});function gc(n,e){return n.value===void 0&&(n.value=e.defaultValue),n}const oh=K("$ZodPrefault",(n,e)=>{dt.init(n,e),n._zod.optin="optional",nt(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(t,i)=>(i.direction==="backward"||t.value===void 0&&(t.value=e.defaultValue),e.innerType._zod.run(t,i))}),ch=K("$ZodNonOptional",(n,e)=>{dt.init(n,e),nt(n._zod,"values",()=>{const t=e.innerType._zod.values;return t?new Set([...t].filter(i=>i!==void 0)):void 0}),n._zod.parse=(t,i)=>{const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(s=>_c(s,n)):_c(r,n)}});function _c(n,e){return!n.issues.length&&n.value===void 0&&n.issues.push({code:"invalid_type",expected:"nonoptional",input:n.value,inst:e}),n}const lh=K("$ZodCatch",(n,e)=>{dt.init(n,e),nt(n._zod,"optin",()=>e.innerType._zod.optin),nt(n._zod,"optout",()=>e.innerType._zod.optout),nt(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(t,i)=>{if(i.direction==="backward")return e.innerType._zod.run(t,i);const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(s=>(t.value=s.value,s.issues.length&&(t.value=e.catchValue({...t,error:{issues:s.issues.map(a=>oi(a,i,ai()))},input:t.value}),t.issues=[]),t)):(t.value=r.value,r.issues.length&&(t.value=e.catchValue({...t,error:{issues:r.issues.map(s=>oi(s,i,ai()))},input:t.value}),t.issues=[]),t)}}),uh=K("$ZodPipe",(n,e)=>{dt.init(n,e),nt(n._zod,"values",()=>e.in._zod.values),nt(n._zod,"optin",()=>e.in._zod.optin),nt(n._zod,"optout",()=>e.out._zod.optout),nt(n._zod,"propValues",()=>e.in._zod.propValues),n._zod.parse=(t,i)=>{if(i.direction==="backward"){const s=e.out._zod.run(t,i);return s instanceof Promise?s.then(a=>Vr(a,e.in,i)):Vr(s,e.in,i)}const r=e.in._zod.run(t,i);return r instanceof Promise?r.then(s=>Vr(s,e.out,i)):Vr(r,e.out,i)}});function Vr(n,e,t){return n.issues.length?(n.aborted=!0,n):e._zod.run({value:n.value,issues:n.issues},t)}const fh=K("$ZodReadonly",(n,e)=>{dt.init(n,e),nt(n._zod,"propValues",()=>e.innerType._zod.propValues),nt(n._zod,"values",()=>e.innerType._zod.values),nt(n._zod,"optin",()=>e.innerType?._zod?.optin),nt(n._zod,"optout",()=>e.innerType?._zod?.optout),n._zod.parse=(t,i)=>{if(i.direction==="backward")return e.innerType._zod.run(t,i);const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(vc):vc(r)}});function vc(n){return n.value=Object.freeze(n.value),n}const dh=K("$ZodCustom",(n,e)=>{en.init(n,e),dt.init(n,e),n._zod.parse=(t,i)=>t,n._zod.check=t=>{const i=t.value,r=e.fn(i);if(r instanceof Promise)return r.then(s=>xc(s,t,i,n));xc(r,t,i,n)}});function xc(n,e,t,i){if(!n){const r={code:"custom",input:t,inst:i,path:[...i._zod.def.path??[]],continue:!i._zod.def.abort};i._zod.def.params&&(r.params=i._zod.def.params),e.issues.push(Cr(r))}}var Sc;class hh{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...t){const i=t[0];return this._map.set(e,i),i&&typeof i=="object"&&"id"in i&&this._idmap.set(i.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){const t=this._map.get(e);return t&&typeof t=="object"&&"id"in t&&this._idmap.delete(t.id),this._map.delete(e),this}get(e){const t=e._zod.parent;if(t){const i={...this.get(t)??{}};delete i.id;const r={...i,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function ph(){return new hh}(Sc=globalThis).__zod_globalRegistry??(Sc.__zod_globalRegistry=ph());const xr=globalThis.__zod_globalRegistry;function mh(n,e){return new n({type:"string",...we(e)})}function gh(n,e){return new n({type:"string",format:"email",check:"string_format",abort:!1,...we(e)})}function Mc(n,e){return new n({type:"string",format:"guid",check:"string_format",abort:!1,...we(e)})}function _h(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,...we(e)})}function vh(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...we(e)})}function xh(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...we(e)})}function Sh(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...we(e)})}function Mh(n,e){return new n({type:"string",format:"url",check:"string_format",abort:!1,...we(e)})}function yh(n,e){return new n({type:"string",format:"emoji",check:"string_format",abort:!1,...we(e)})}function bh(n,e){return new n({type:"string",format:"nanoid",check:"string_format",abort:!1,...we(e)})}function Eh(n,e){return new n({type:"string",format:"cuid",check:"string_format",abort:!1,...we(e)})}function wh(n,e){return new n({type:"string",format:"cuid2",check:"string_format",abort:!1,...we(e)})}function Th(n,e){return new n({type:"string",format:"ulid",check:"string_format",abort:!1,...we(e)})}function Ah(n,e){return new n({type:"string",format:"xid",check:"string_format",abort:!1,...we(e)})}function Rh(n,e){return new n({type:"string",format:"ksuid",check:"string_format",abort:!1,...we(e)})}function Ch(n,e){return new n({type:"string",format:"ipv4",check:"string_format",abort:!1,...we(e)})}function Ph(n,e){return new n({type:"string",format:"ipv6",check:"string_format",abort:!1,...we(e)})}function Ih(n,e){return new n({type:"string",format:"cidrv4",check:"string_format",abort:!1,...we(e)})}function Dh(n,e){return new n({type:"string",format:"cidrv6",check:"string_format",abort:!1,...we(e)})}function Lh(n,e){return new n({type:"string",format:"base64",check:"string_format",abort:!1,...we(e)})}function Nh(n,e){return new n({type:"string",format:"base64url",check:"string_format",abort:!1,...we(e)})}function Uh(n,e){return new n({type:"string",format:"e164",check:"string_format",abort:!1,...we(e)})}function Fh(n,e){return new n({type:"string",format:"jwt",check:"string_format",abort:!1,...we(e)})}function Oh(n,e){return new n({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...we(e)})}function zh(n,e){return new n({type:"string",format:"date",check:"string_format",...we(e)})}function Bh(n,e){return new n({type:"string",format:"time",check:"string_format",precision:null,...we(e)})}function kh(n,e){return new n({type:"string",format:"duration",check:"string_format",...we(e)})}function Gh(n,e){return new n({type:"number",checks:[],...we(e)})}function Vh(n,e){return new n({type:"number",check:"number_format",abort:!1,format:"safeint",...we(e)})}function Hh(n,e){return new n({type:"boolean",...we(e)})}function Wh(n){return new n({type:"unknown"})}function Xh(n,e){return new n({type:"never",...we(e)})}function yc(n,e){return new Zl({check:"less_than",...we(e),value:n,inclusive:!1})}function $s(n,e){return new Zl({check:"less_than",...we(e),value:n,inclusive:!0})}function bc(n,e){return new ql({check:"greater_than",...we(e),value:n,inclusive:!1})}function Zs(n,e){return new ql({check:"greater_than",...we(e),value:n,inclusive:!0})}function Ec(n,e){return new sd({check:"multiple_of",...we(e),value:n})}function eu(n,e){return new od({check:"max_length",...we(e),maximum:n})}function Es(n,e){return new cd({check:"min_length",...we(e),minimum:n})}function tu(n,e){return new ld({check:"length_equals",...we(e),length:n})}function $h(n,e){return new ud({check:"string_format",format:"regex",...we(e),pattern:n})}function Zh(n){return new fd({check:"string_format",format:"lowercase",...we(n)})}function qh(n){return new dd({check:"string_format",format:"uppercase",...we(n)})}function Yh(n,e){return new hd({check:"string_format",format:"includes",...we(e),includes:n})}function Kh(n,e){return new pd({check:"string_format",format:"starts_with",...we(e),prefix:n})}function Jh(n,e){return new md({check:"string_format",format:"ends_with",...we(e),suffix:n})}function sr(n){return new gd({check:"overwrite",tx:n})}function Qh(n){return sr(e=>e.normalize(n))}function jh(){return sr(n=>n.trim())}function ep(){return sr(n=>n.toLowerCase())}function tp(){return sr(n=>n.toUpperCase())}function np(){return sr(n=>uf(n))}function ip(n,e,t){return new n({type:"array",element:e,...we(t)})}function rp(n,e,t){return new n({type:"custom",check:"custom",fn:e,...we(t)})}function sp(n){const e=ap(t=>(t.addIssue=i=>{if(typeof i=="string")t.issues.push(Cr(i,t.value,e._zod.def));else{const r=i;r.fatal&&(r.continue=!1),r.code??(r.code="custom"),r.input??(r.input=t.value),r.inst??(r.inst=e),r.continue??(r.continue=!e._zod.def.abort),t.issues.push(Cr(r))}},n(t.value,t)));return e}function ap(n,e){const t=new en({check:"custom",...we(e)});return t._zod.check=n,t}function nu(n){let e=n?.target??"draft-2020-12";return e==="draft-4"&&(e="draft-04"),e==="draft-7"&&(e="draft-07"),{processors:n.processors??{},metadataRegistry:n?.metadata??xr,target:e,unrepresentable:n?.unrepresentable??"throw",override:n?.override??(()=>{}),io:n?.io??"output",counter:0,seen:new Map,cycles:n?.cycles??"ref",reused:n?.reused??"inline",external:n?.external??void 0}}function xt(n,e,t={path:[],schemaPath:[]}){var i;const r=n._zod.def,s=e.seen.get(n);if(s)return s.count++,t.schemaPath.includes(n)&&(s.cycle=t.path),s.schema;const a={schema:{},count:1,cycle:void 0,path:t.path};e.seen.set(n,a);const o=n._zod.toJSONSchema?.();if(o)a.schema=o;else{const f={...t,schemaPath:[...t.schemaPath,n],path:t.path};if(n._zod.processJSONSchema)n._zod.processJSONSchema(e,a.schema,f);else{const u=a.schema,h=e.processors[r.type];if(!h)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);h(n,e,u,f)}const d=n._zod.parent;d&&(a.ref||(a.ref=d),xt(d,e,f),e.seen.get(d).isParent=!0)}const l=e.metadataRegistry.get(n);return l&&Object.assign(a.schema,l),e.io==="input"&&Vt(n)&&(delete a.schema.examples,delete a.schema.default),e.io==="input"&&a.schema._prefault&&((i=a.schema).default??(i.default=a.schema._prefault)),delete a.schema._prefault,e.seen.get(n).schema}function iu(n,e){const t=n.seen.get(e);if(!t)throw new Error("Unprocessed schema. This is a bug in Zod.");const i=new Map;for(const a of n.seen.entries()){const o=n.metadataRegistry.get(a[0])?.id;if(o){const l=i.get(o);if(l&&l!==a[0])throw new Error(`Duplicate schema id "${o}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);i.set(o,a[0])}}const r=a=>{const o=n.target==="draft-2020-12"?"$defs":"definitions";if(n.external){const d=n.external.registry.get(a[0])?.id,u=n.external.uri??(_=>_);if(d)return{ref:u(d)};const h=a[1].defId??a[1].schema.id??`schema${n.counter++}`;return a[1].defId=h,{defId:h,ref:`${u("__shared")}#/${o}/${h}`}}if(a[1]===t)return{ref:"#"};const c=`#/${o}/`,f=a[1].schema.id??`__schema${n.counter++}`;return{defId:f,ref:c+f}},s=a=>{if(a[1].schema.$ref)return;const o=a[1],{ref:l,defId:c}=r(a);o.def={...o.schema},c&&(o.defId=c);const f=o.schema;for(const d in f)delete f[d];f.$ref=l};if(n.cycles==="throw")for(const a of n.seen.entries()){const o=a[1];if(o.cycle)throw new Error(`Cycle detected: #/${o.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const a of n.seen.entries()){const o=a[1];if(e===a[0]){s(a);continue}if(n.external){const c=n.external.registry.get(a[0])?.id;if(e!==a[0]&&c){s(a);continue}}if(n.metadataRegistry.get(a[0])?.id){s(a);continue}if(o.cycle){s(a);continue}if(o.count>1&&n.reused==="ref"){s(a);continue}}}function ru(n,e){const t=n.seen.get(e);if(!t)throw new Error("Unprocessed schema. This is a bug in Zod.");const i=a=>{const o=n.seen.get(a);if(o.ref===null)return;const l=o.def??o.schema,c={...l},f=o.ref;if(o.ref=null,f){i(f);const u=n.seen.get(f),h=u.schema;if(h.$ref&&(n.target==="draft-07"||n.target==="draft-04"||n.target==="openapi-3.0")?(l.allOf=l.allOf??[],l.allOf.push(h)):Object.assign(l,h),Object.assign(l,c),a._zod.parent===f)for(const S in l)S==="$ref"||S==="allOf"||S in c||delete l[S];if(h.$ref&&u.def)for(const S in l)S==="$ref"||S==="allOf"||S in u.def&&JSON.stringify(l[S])===JSON.stringify(u.def[S])&&delete l[S]}const d=a._zod.parent;if(d&&d!==f){i(d);const u=n.seen.get(d);if(u?.schema.$ref&&(l.$ref=u.schema.$ref,u.def))for(const h in l)h==="$ref"||h==="allOf"||h in u.def&&JSON.stringify(l[h])===JSON.stringify(u.def[h])&&delete l[h]}n.override({zodSchema:a,jsonSchema:l,path:o.path??[]})};for(const a of[...n.seen.entries()].reverse())i(a[0]);const r={};if(n.target==="draft-2020-12"?r.$schema="https://json-schema.org/draft/2020-12/schema":n.target==="draft-07"?r.$schema="http://json-schema.org/draft-07/schema#":n.target==="draft-04"?r.$schema="http://json-schema.org/draft-04/schema#":n.target,n.external?.uri){const a=n.external.registry.get(e)?.id;if(!a)throw new Error("Schema is missing an `id` property");r.$id=n.external.uri(a)}Object.assign(r,t.def??t.schema);const s=n.external?.defs??{};for(const a of n.seen.entries()){const o=a[1];o.def&&o.defId&&(s[o.defId]=o.def)}n.external||Object.keys(s).length>0&&(n.target==="draft-2020-12"?r.$defs=s:r.definitions=s);try{const a=JSON.parse(JSON.stringify(r));return Object.defineProperty(a,"~standard",{value:{...e["~standard"],jsonSchema:{input:ws(e,"input",n.processors),output:ws(e,"output",n.processors)}},enumerable:!1,writable:!1}),a}catch{throw new Error("Error converting schema to JSON.")}}function Vt(n,e){const t=e??{seen:new Set};if(t.seen.has(n))return!1;t.seen.add(n);const i=n._zod.def;if(i.type==="transform")return!0;if(i.type==="array")return Vt(i.element,t);if(i.type==="set")return Vt(i.valueType,t);if(i.type==="lazy")return Vt(i.getter(),t);if(i.type==="promise"||i.type==="optional"||i.type==="nonoptional"||i.type==="nullable"||i.type==="readonly"||i.type==="default"||i.type==="prefault")return Vt(i.innerType,t);if(i.type==="intersection")return Vt(i.left,t)||Vt(i.right,t);if(i.type==="record"||i.type==="map")return Vt(i.keyType,t)||Vt(i.valueType,t);if(i.type==="pipe")return Vt(i.in,t)||Vt(i.out,t);if(i.type==="object"){for(const r in i.shape)if(Vt(i.shape[r],t))return!0;return!1}if(i.type==="union"){for(const r of i.options)if(Vt(r,t))return!0;return!1}if(i.type==="tuple"){for(const r of i.items)if(Vt(r,t))return!0;return!!(i.rest&&Vt(i.rest,t))}return!1}const op=(n,e={})=>t=>{const i=nu({...t,processors:e});return xt(n,i),iu(i,n),ru(i,n)},ws=(n,e,t={})=>i=>{const{libraryOptions:r,target:s}=i??{},a=nu({...r??{},target:s,io:e,processors:t});return xt(n,a),iu(a,n),ru(a,n)},cp={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},lp=(n,e,t,i)=>{const r=t;r.type="string";const{minimum:s,maximum:a,format:o,patterns:l,contentEncoding:c}=n._zod.bag;if(typeof s=="number"&&(r.minLength=s),typeof a=="number"&&(r.maxLength=a),o&&(r.format=cp[o]??o,r.format===""&&delete r.format,o==="time"&&delete r.format),c&&(r.contentEncoding=c),l&&l.size>0){const f=[...l];f.length===1?r.pattern=f[0].source:f.length>1&&(r.allOf=[...f.map(d=>({...e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"?{type:"string"}:{},pattern:d.source}))])}},up=(n,e,t,i)=>{const r=t,{minimum:s,maximum:a,format:o,multipleOf:l,exclusiveMaximum:c,exclusiveMinimum:f}=n._zod.bag;typeof o=="string"&&o.includes("int")?r.type="integer":r.type="number",typeof f=="number"&&(e.target==="draft-04"||e.target==="openapi-3.0"?(r.minimum=f,r.exclusiveMinimum=!0):r.exclusiveMinimum=f),typeof s=="number"&&(r.minimum=s,typeof f=="number"&&e.target!=="draft-04"&&(f>=s?delete r.minimum:delete r.exclusiveMinimum)),typeof c=="number"&&(e.target==="draft-04"||e.target==="openapi-3.0"?(r.maximum=c,r.exclusiveMaximum=!0):r.exclusiveMaximum=c),typeof a=="number"&&(r.maximum=a,typeof c=="number"&&e.target!=="draft-04"&&(c<=a?delete r.maximum:delete r.exclusiveMaximum)),typeof l=="number"&&(r.multipleOf=l)},fp=(n,e,t,i)=>{t.type="boolean"},dp=(n,e,t,i)=>{t.not={}},hp=(n,e,t,i)=>{},pp=(n,e,t,i)=>{const r=n._zod.def,s=Fl(r.entries);s.every(a=>typeof a=="number")&&(t.type="number"),s.every(a=>typeof a=="string")&&(t.type="string"),t.enum=s},mp=(n,e,t,i)=>{const r=n._zod.def,s=[];for(const a of r.values)if(a===void 0){if(e.unrepresentable==="throw")throw new Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof a=="bigint"){if(e.unrepresentable==="throw")throw new Error("BigInt literals cannot be represented in JSON Schema");s.push(Number(a))}else s.push(a);if(s.length!==0)if(s.length===1){const a=s[0];t.type=a===null?"null":typeof a,e.target==="draft-04"||e.target==="openapi-3.0"?t.enum=[a]:t.const=a}else s.every(a=>typeof a=="number")&&(t.type="number"),s.every(a=>typeof a=="string")&&(t.type="string"),s.every(a=>typeof a=="boolean")&&(t.type="boolean"),s.every(a=>a===null)&&(t.type="null"),t.enum=s},gp=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Custom types cannot be represented in JSON Schema")},_p=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Transforms cannot be represented in JSON Schema")},vp=(n,e,t,i)=>{const r=t,s=n._zod.def,{minimum:a,maximum:o}=n._zod.bag;typeof a=="number"&&(r.minItems=a),typeof o=="number"&&(r.maxItems=o),r.type="array",r.items=xt(s.element,e,{...i,path:[...i.path,"items"]})},xp=(n,e,t,i)=>{const r=t,s=n._zod.def;r.type="object",r.properties={};const a=s.shape;for(const c in a)r.properties[c]=xt(a[c],e,{...i,path:[...i.path,"properties",c]});const o=new Set(Object.keys(a)),l=new Set([...o].filter(c=>{const f=s.shape[c]._zod;return e.io==="input"?f.optin===void 0:f.optout===void 0}));l.size>0&&(r.required=Array.from(l)),s.catchall?._zod.def.type==="never"?r.additionalProperties=!1:s.catchall?s.catchall&&(r.additionalProperties=xt(s.catchall,e,{...i,path:[...i.path,"additionalProperties"]})):e.io==="output"&&(r.additionalProperties=!1)},Sp=(n,e,t,i)=>{const r=n._zod.def,s=r.inclusive===!1,a=r.options.map((o,l)=>xt(o,e,{...i,path:[...i.path,s?"oneOf":"anyOf",l]}));s?t.oneOf=a:t.anyOf=a},Mp=(n,e,t,i)=>{const r=n._zod.def,s=xt(r.left,e,{...i,path:[...i.path,"allOf",0]}),a=xt(r.right,e,{...i,path:[...i.path,"allOf",1]}),o=c=>"allOf"in c&&Object.keys(c).length===1,l=[...o(s)?s.allOf:[s],...o(a)?a.allOf:[a]];t.allOf=l},yp=(n,e,t,i)=>{const r=t,s=n._zod.def;r.type="array";const a=e.target==="draft-2020-12"?"prefixItems":"items",o=e.target==="draft-2020-12"||e.target==="openapi-3.0"?"items":"additionalItems",l=s.items.map((u,h)=>xt(u,e,{...i,path:[...i.path,a,h]})),c=s.rest?xt(s.rest,e,{...i,path:[...i.path,o,...e.target==="openapi-3.0"?[s.items.length]:[]]}):null;e.target==="draft-2020-12"?(r.prefixItems=l,c&&(r.items=c)):e.target==="openapi-3.0"?(r.items={anyOf:l},c&&r.items.anyOf.push(c),r.minItems=l.length,c||(r.maxItems=l.length)):(r.items=l,c&&(r.additionalItems=c));const{minimum:f,maximum:d}=n._zod.bag;typeof f=="number"&&(r.minItems=f),typeof d=="number"&&(r.maxItems=d)},bp=(n,e,t,i)=>{const r=t,s=n._zod.def;r.type="object";const a=s.keyType,l=a._zod.bag?.patterns;if(s.mode==="loose"&&l&&l.size>0){const f=xt(s.valueType,e,{...i,path:[...i.path,"patternProperties","*"]});r.patternProperties={};for(const d of l)r.patternProperties[d.source]=f}else(e.target==="draft-07"||e.target==="draft-2020-12")&&(r.propertyNames=xt(s.keyType,e,{...i,path:[...i.path,"propertyNames"]})),r.additionalProperties=xt(s.valueType,e,{...i,path:[...i.path,"additionalProperties"]});const c=a._zod.values;if(c){const f=[...c].filter(d=>typeof d=="string"||typeof d=="number");f.length>0&&(r.required=f)}},Ep=(n,e,t,i)=>{const r=n._zod.def,s=xt(r.innerType,e,i),a=e.seen.get(n);e.target==="openapi-3.0"?(a.ref=r.innerType,t.nullable=!0):t.anyOf=[s,{type:"null"}]},wp=(n,e,t,i)=>{const r=n._zod.def;xt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType},Tp=(n,e,t,i)=>{const r=n._zod.def;xt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType,t.default=JSON.parse(JSON.stringify(r.defaultValue))},Ap=(n,e,t,i)=>{const r=n._zod.def;xt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType,e.io==="input"&&(t._prefault=JSON.parse(JSON.stringify(r.defaultValue)))},Rp=(n,e,t,i)=>{const r=n._zod.def;xt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType;let a;try{a=r.catchValue(void 0)}catch{throw new Error("Dynamic catch values are not supported in JSON Schema")}t.default=a},Cp=(n,e,t,i)=>{const r=n._zod.def,s=e.io==="input"?r.in._zod.def.type==="transform"?r.out:r.in:r.out;xt(s,e,i);const a=e.seen.get(n);a.ref=s},Pp=(n,e,t,i)=>{const r=n._zod.def;xt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType,t.readOnly=!0},su=(n,e,t,i)=>{const r=n._zod.def;xt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType},Ip=K("ZodISODateTime",(n,e)=>{Pd.init(n,e),_t.init(n,e)});function Dp(n){return Oh(Ip,n)}const Lp=K("ZodISODate",(n,e)=>{Id.init(n,e),_t.init(n,e)});function Np(n){return zh(Lp,n)}const Up=K("ZodISOTime",(n,e)=>{Dd.init(n,e),_t.init(n,e)});function Fp(n){return Bh(Up,n)}const Op=K("ZodISODuration",(n,e)=>{Ld.init(n,e),_t.init(n,e)});function zp(n){return kh(Op,n)}const Bp=(n,e)=>{kl.init(n,e),n.name="ZodError",Object.defineProperties(n,{format:{value:t=>bf(n,t)},flatten:{value:t=>yf(n,t)},addIssue:{value:t=>{n.issues.push(t),n.message=JSON.stringify(n.issues,Ia,2)}},addIssues:{value:t=>{n.issues.push(...t),n.message=JSON.stringify(n.issues,Ia,2)}},isEmpty:{get(){return n.issues.length===0}}})},un=K("ZodError",Bp,{Parent:Error}),kp=Io(un),Gp=Do(un),Vp=Us(un),Hp=Fs(un),Wp=Tf(un),Xp=Af(un),$p=Rf(un),Zp=Cf(un),qp=Pf(un),Yp=If(un),Kp=Df(un),Jp=Lf(un),mt=K("ZodType",(n,e)=>(dt.init(n,e),Object.assign(n["~standard"],{jsonSchema:{input:ws(n,"input"),output:ws(n,"output")}}),n.toJSONSchema=op(n,{}),n.def=e,n.type=e.type,Object.defineProperty(n,"_def",{value:e}),n.check=(...t)=>n.clone(ci(e,{checks:[...e.checks??[],...t.map(i=>typeof i=="function"?{_zod:{check:i,def:{check:"custom"},onattach:[]}}:i)]}),{parent:!0}),n.with=n.check,n.clone=(t,i)=>li(n,t,i),n.brand=()=>n,n.register=((t,i)=>(t.add(n,i),n)),n.parse=(t,i)=>kp(n,t,i,{callee:n.parse}),n.safeParse=(t,i)=>Vp(n,t,i),n.parseAsync=async(t,i)=>Gp(n,t,i,{callee:n.parseAsync}),n.safeParseAsync=async(t,i)=>Hp(n,t,i),n.spa=n.safeParseAsync,n.encode=(t,i)=>Wp(n,t,i),n.decode=(t,i)=>Xp(n,t,i),n.encodeAsync=async(t,i)=>$p(n,t,i),n.decodeAsync=async(t,i)=>Zp(n,t,i),n.safeEncode=(t,i)=>qp(n,t,i),n.safeDecode=(t,i)=>Yp(n,t,i),n.safeEncodeAsync=async(t,i)=>Kp(n,t,i),n.safeDecodeAsync=async(t,i)=>Jp(n,t,i),n.refine=(t,i)=>n.check($m(t,i)),n.superRefine=t=>n.check(Zm(t)),n.overwrite=t=>n.check(sr(t)),n.optional=()=>Rc(n),n.exactOptional=()=>Lm(n),n.nullable=()=>Cc(n),n.nullish=()=>Rc(Cc(n)),n.nonoptional=t=>Bm(n,t),n.array=()=>Mt(n),n.or=t=>No([n,t]),n.and=t=>wm(n,t),n.transform=t=>Pc(n,Im(t)),n.default=t=>Fm(n,t),n.prefault=t=>zm(n,t),n.catch=t=>Gm(n,t),n.pipe=t=>Pc(n,t),n.readonly=()=>Wm(n),n.describe=t=>{const i=n.clone();return xr.add(i,{description:t}),i},Object.defineProperty(n,"description",{get(){return xr.get(n)?.description},configurable:!0}),n.meta=(...t)=>{if(t.length===0)return xr.get(n);const i=n.clone();return xr.add(i,t[0]),i},n.isOptional=()=>n.safeParse(void 0).success,n.isNullable=()=>n.safeParse(null).success,n.apply=t=>t(n),n)),au=K("_ZodString",(n,e)=>{Lo.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(i,r,s)=>lp(n,i,r);const t=n._zod.bag;n.format=t.format??null,n.minLength=t.minimum??null,n.maxLength=t.maximum??null,n.regex=(...i)=>n.check($h(...i)),n.includes=(...i)=>n.check(Yh(...i)),n.startsWith=(...i)=>n.check(Kh(...i)),n.endsWith=(...i)=>n.check(Jh(...i)),n.min=(...i)=>n.check(Es(...i)),n.max=(...i)=>n.check(eu(...i)),n.length=(...i)=>n.check(tu(...i)),n.nonempty=(...i)=>n.check(Es(1,...i)),n.lowercase=i=>n.check(Zh(i)),n.uppercase=i=>n.check(qh(i)),n.trim=()=>n.check(jh()),n.normalize=(...i)=>n.check(Qh(...i)),n.toLowerCase=()=>n.check(ep()),n.toUpperCase=()=>n.check(tp()),n.slugify=()=>n.check(np())}),Qp=K("ZodString",(n,e)=>{Lo.init(n,e),au.init(n,e),n.email=t=>n.check(gh(jp,t)),n.url=t=>n.check(Mh(em,t)),n.jwt=t=>n.check(Fh(mm,t)),n.emoji=t=>n.check(yh(tm,t)),n.guid=t=>n.check(Mc(wc,t)),n.uuid=t=>n.check(_h(Hr,t)),n.uuidv4=t=>n.check(vh(Hr,t)),n.uuidv6=t=>n.check(xh(Hr,t)),n.uuidv7=t=>n.check(Sh(Hr,t)),n.nanoid=t=>n.check(bh(nm,t)),n.guid=t=>n.check(Mc(wc,t)),n.cuid=t=>n.check(Eh(im,t)),n.cuid2=t=>n.check(wh(rm,t)),n.ulid=t=>n.check(Th(sm,t)),n.base64=t=>n.check(Lh(dm,t)),n.base64url=t=>n.check(Nh(hm,t)),n.xid=t=>n.check(Ah(am,t)),n.ksuid=t=>n.check(Rh(om,t)),n.ipv4=t=>n.check(Ch(cm,t)),n.ipv6=t=>n.check(Ph(lm,t)),n.cidrv4=t=>n.check(Ih(um,t)),n.cidrv6=t=>n.check(Dh(fm,t)),n.e164=t=>n.check(Uh(pm,t)),n.datetime=t=>n.check(Dp(t)),n.date=t=>n.check(Np(t)),n.time=t=>n.check(Fp(t)),n.duration=t=>n.check(zp(t))});function Ki(n){return mh(Qp,n)}const _t=K("ZodStringFormat",(n,e)=>{pt.init(n,e),au.init(n,e)}),jp=K("ZodEmail",(n,e)=>{Md.init(n,e),_t.init(n,e)}),wc=K("ZodGUID",(n,e)=>{xd.init(n,e),_t.init(n,e)}),Hr=K("ZodUUID",(n,e)=>{Sd.init(n,e),_t.init(n,e)}),em=K("ZodURL",(n,e)=>{yd.init(n,e),_t.init(n,e)}),tm=K("ZodEmoji",(n,e)=>{bd.init(n,e),_t.init(n,e)}),nm=K("ZodNanoID",(n,e)=>{Ed.init(n,e),_t.init(n,e)}),im=K("ZodCUID",(n,e)=>{wd.init(n,e),_t.init(n,e)}),rm=K("ZodCUID2",(n,e)=>{Td.init(n,e),_t.init(n,e)}),sm=K("ZodULID",(n,e)=>{Ad.init(n,e),_t.init(n,e)}),am=K("ZodXID",(n,e)=>{Rd.init(n,e),_t.init(n,e)}),om=K("ZodKSUID",(n,e)=>{Cd.init(n,e),_t.init(n,e)}),cm=K("ZodIPv4",(n,e)=>{Nd.init(n,e),_t.init(n,e)}),lm=K("ZodIPv6",(n,e)=>{Ud.init(n,e),_t.init(n,e)}),um=K("ZodCIDRv4",(n,e)=>{Fd.init(n,e),_t.init(n,e)}),fm=K("ZodCIDRv6",(n,e)=>{Od.init(n,e),_t.init(n,e)}),dm=K("ZodBase64",(n,e)=>{zd.init(n,e),_t.init(n,e)}),hm=K("ZodBase64URL",(n,e)=>{kd.init(n,e),_t.init(n,e)}),pm=K("ZodE164",(n,e)=>{Gd.init(n,e),_t.init(n,e)}),mm=K("ZodJWT",(n,e)=>{Hd.init(n,e),_t.init(n,e)}),ou=K("ZodNumber",(n,e)=>{Kl.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(i,r,s)=>up(n,i,r),n.gt=(i,r)=>n.check(bc(i,r)),n.gte=(i,r)=>n.check(Zs(i,r)),n.min=(i,r)=>n.check(Zs(i,r)),n.lt=(i,r)=>n.check(yc(i,r)),n.lte=(i,r)=>n.check($s(i,r)),n.max=(i,r)=>n.check($s(i,r)),n.int=i=>n.check(Tc(i)),n.safe=i=>n.check(Tc(i)),n.positive=i=>n.check(bc(0,i)),n.nonnegative=i=>n.check(Zs(0,i)),n.negative=i=>n.check(yc(0,i)),n.nonpositive=i=>n.check($s(0,i)),n.multipleOf=(i,r)=>n.check(Ec(i,r)),n.step=(i,r)=>n.check(Ec(i,r)),n.finite=()=>n;const t=n._zod.bag;n.minValue=Math.max(t.minimum??Number.NEGATIVE_INFINITY,t.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,n.maxValue=Math.min(t.maximum??Number.POSITIVE_INFINITY,t.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,n.isInt=(t.format??"").includes("int")||Number.isSafeInteger(t.multipleOf??.5),n.isFinite=!0,n.format=t.format??null});function Ve(n){return Gh(ou,n)}const gm=K("ZodNumberFormat",(n,e)=>{Wd.init(n,e),ou.init(n,e)});function Tc(n){return Vh(gm,n)}const _m=K("ZodBoolean",(n,e)=>{Xd.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>fp(n,t,i)});function kn(n){return Hh(_m,n)}const vm=K("ZodUnknown",(n,e)=>{$d.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>hp()});function Pr(){return Wh(vm)}const xm=K("ZodNever",(n,e)=>{Zd.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>dp(n,t,i)});function Sm(n){return Xh(xm,n)}const Mm=K("ZodArray",(n,e)=>{qd.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>vp(n,t,i,r),n.element=e.element,n.min=(t,i)=>n.check(Es(t,i)),n.nonempty=t=>n.check(Es(1,t)),n.max=(t,i)=>n.check(eu(t,i)),n.length=(t,i)=>n.check(tu(t,i)),n.unwrap=()=>n.element});function Mt(n,e){return ip(Mm,n,e)}const ym=K("ZodObject",(n,e)=>{Kd.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>xp(n,t,i,r),nt(n,"shape",()=>e.shape),n.keyof=()=>Rm(Object.keys(n._zod.def.shape)),n.catchall=t=>n.clone({...n._zod.def,catchall:t}),n.passthrough=()=>n.clone({...n._zod.def,catchall:Pr()}),n.loose=()=>n.clone({...n._zod.def,catchall:Pr()}),n.strict=()=>n.clone({...n._zod.def,catchall:Sm()}),n.strip=()=>n.clone({...n._zod.def,catchall:void 0}),n.extend=t=>_f(n,t),n.safeExtend=t=>vf(n,t),n.merge=t=>xf(n,t),n.pick=t=>mf(n,t),n.omit=t=>gf(n,t),n.partial=(...t)=>Sf(cu,n,t[0]),n.required=(...t)=>Mf(lu,n,t[0])});function an(n,e){const t={type:"object",shape:n??{},...we(e)};return new ym(t)}const bm=K("ZodUnion",(n,e)=>{Jd.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Sp(n,t,i,r),n.options=e.options});function No(n,e){return new bm({type:"union",options:n,...we(e)})}const Em=K("ZodIntersection",(n,e)=>{Qd.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Mp(n,t,i,r)});function wm(n,e){return new Em({type:"intersection",left:n,right:e})}const Tm=K("ZodTuple",(n,e)=>{jd.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>yp(n,t,i,r),n.rest=t=>n.clone({...n._zod.def,rest:t})});function Vn(n,e,t){const i=e instanceof dt,r=i?t:e,s=i?e:null;return new Tm({type:"tuple",items:n,rest:s,...we(r)})}const Am=K("ZodRecord",(n,e)=>{eh.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>bp(n,t,i,r),n.keyType=e.keyType,n.valueType=e.valueType});function Ac(n,e,t){return new Am({type:"record",keyType:n,valueType:e,...we(t)})}const La=K("ZodEnum",(n,e)=>{th.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(i,r,s)=>pp(n,i,r),n.enum=e.entries,n.options=Object.values(e.entries);const t=new Set(Object.keys(e.entries));n.extract=(i,r)=>{const s={};for(const a of i)if(t.has(a))s[a]=e.entries[a];else throw new Error(`Key ${a} not found in enum`);return new La({...e,checks:[],...we(r),entries:s})},n.exclude=(i,r)=>{const s={...e.entries};for(const a of i)if(t.has(a))delete s[a];else throw new Error(`Key ${a} not found in enum`);return new La({...e,checks:[],...we(r),entries:s})}});function Rm(n,e){const t=Array.isArray(n)?Object.fromEntries(n.map(i=>[i,i])):n;return new La({type:"enum",entries:t,...we(e)})}const Cm=K("ZodLiteral",(n,e)=>{nh.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>mp(n,t,i),n.values=new Set(e.values),Object.defineProperty(n,"value",{get(){if(e.values.length>1)throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");return e.values[0]}})});function Er(n,e){return new Cm({type:"literal",values:Array.isArray(n)?n:[n],...we(e)})}const Pm=K("ZodTransform",(n,e)=>{ih.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>_p(n,t),n._zod.parse=(t,i)=>{if(i.direction==="backward")throw new Nl(n.constructor.name);t.addIssue=s=>{if(typeof s=="string")t.issues.push(Cr(s,t.value,e));else{const a=s;a.fatal&&(a.continue=!1),a.code??(a.code="custom"),a.input??(a.input=t.value),a.inst??(a.inst=n),t.issues.push(Cr(a))}};const r=e.transform(t.value,t);return r instanceof Promise?r.then(s=>(t.value=s,t)):(t.value=r,t)}});function Im(n){return new Pm({type:"transform",transform:n})}const cu=K("ZodOptional",(n,e)=>{jl.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>su(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function Rc(n){return new cu({type:"optional",innerType:n})}const Dm=K("ZodExactOptional",(n,e)=>{rh.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>su(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function Lm(n){return new Dm({type:"optional",innerType:n})}const Nm=K("ZodNullable",(n,e)=>{sh.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Ep(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function Cc(n){return new Nm({type:"nullable",innerType:n})}const Um=K("ZodDefault",(n,e)=>{ah.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Tp(n,t,i,r),n.unwrap=()=>n._zod.def.innerType,n.removeDefault=n.unwrap});function Fm(n,e){return new Um({type:"default",innerType:n,get defaultValue(){return typeof e=="function"?e():zl(e)}})}const Om=K("ZodPrefault",(n,e)=>{oh.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Ap(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function zm(n,e){return new Om({type:"prefault",innerType:n,get defaultValue(){return typeof e=="function"?e():zl(e)}})}const lu=K("ZodNonOptional",(n,e)=>{ch.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>wp(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function Bm(n,e){return new lu({type:"nonoptional",innerType:n,...we(e)})}const km=K("ZodCatch",(n,e)=>{lh.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Rp(n,t,i,r),n.unwrap=()=>n._zod.def.innerType,n.removeCatch=n.unwrap});function Gm(n,e){return new km({type:"catch",innerType:n,catchValue:typeof e=="function"?e:()=>e})}const Vm=K("ZodPipe",(n,e)=>{uh.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Cp(n,t,i,r),n.in=e.in,n.out=e.out});function Pc(n,e){return new Vm({type:"pipe",in:n,out:e})}const Hm=K("ZodReadonly",(n,e)=>{fh.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Pp(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function Wm(n){return new Hm({type:"readonly",innerType:n})}const Xm=K("ZodCustom",(n,e)=>{dh.init(n,e),mt.init(n,e),n._zod.processJSONSchema=(t,i,r)=>gp(n,t)});function $m(n,e={}){return rp(Xm,n,e)}function Zm(n){return sp(n)}function Pt(n){if(typeof n!="object"||n===null||Array.isArray(n))throw new Error("JSON 객체가 필요합니다.");return n}class qm{worker=new Worker(new URL(""+new URL("worker-BMUASO-v.js",import.meta.url).href,import.meta.url),{type:"module"});sequence=0;pending=new Map;constructor(){this.worker.onmessage=e=>{const t=Pt(e.data),i=Number(t.id),r=this.pending.get(i);if(r)if(this.pending.delete(i),t.error)r.reject(new Error(String(t.error)));else{const s=Pt(t.output);s.native_error?r.reject(new Error(String(s.native_error))):r.resolve(s)}},this.worker.onerror=e=>{for(const t of this.pending.values())t.reject(new Error(e.message));this.pending.clear()}}request(e){const t=++this.sequence;return new Promise((i,r)=>{this.pending.set(t,{resolve:i,reject:r}),this.worker.postMessage({id:t,input:e,runtime_url:new URL("./runtime/fgv-runtime.mjs",document.baseURI).href})})}dispose(){this.worker.terminate();for(const e of this.pending.values())e.reject(new Error("Core worker disposed"));this.pending.clear()}}function Ym(n,e){if(n.length>4096)throw new Error("수식은 4096자 이내로 입력하세요.");const t=n.match(/(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|[A-Za-z_][A-Za-z_0-9]*|\*\*|[+\-*/^(),]|\S/gi)??[];let i=0,r=0;const s=new Set(["sin","cos","tan","exp","log","sqrt","abs"]),a=new Set(["min","max","pow"]),o={"+":"add","-":"sub","*":"mul","/":"div","^":"pow","**":"pow"};function l(d,...u){if(++r>512)throw new Error("수식 AST 한도는 512개입니다.");return[d,...u]}function c(d,u){if(u>64)throw new Error("수식 중첩은 64단계 이내로 입력하세요.");const h=t[i++];let _;if(h==="+"||h==="-")_=l(h==="+"?"pos":"neg",c(3,u+1));else if(h==="("){if(_=c(0,u+1),t[i++]!==")")throw new Error("닫는 괄호가 필요합니다.")}else if(h!==void 0&&/^(?:\d|\.)/.test(h)&&Number.isFinite(Number(h)))_=l("number",Number(h));else if(h==="pi"||h==="e")_=l("number",h==="pi"?Math.PI:Math.E);else if(h!==void 0&&(s.has(h)||a.has(h))){if(t[i++]!=="(")throw new Error(`${h} 뒤에는 괄호가 필요합니다.`);const S=c(0,u+1);if(a.has(h)){if(t[i++]!==",")throw new Error(`${h}에는 인자 두 개가 필요합니다.`);_=l(h,S,c(0,u+1))}else _=l(h,S);if(t[i++]!==")")throw new Error("닫는 괄호가 필요합니다.")}else{const S=h==="x"?0:h==="y"?1:h==="z"?2:/^x\d+$/.test(h??"")?Number(h.slice(1)):-1;if(S<0||S>=e)throw new Error(`지원하지 않는 변수/토큰: ${h??"입력 끝"}`);_=l("variable",S)}for(;i<t.length;){const S=t[i],m=S==="+"||S==="-"?1:S==="*"||S==="/"?2:S==="^"||S==="**"?4:-1;if(m<d)break;++i;const p=o[S];_=l(p,_,c(m+(m===4?0:1),u+1))}return _}const f=c(0,0);if(i!==t.length)throw new Error(`예상하지 못한 토큰: ${t[i]}`);return f}const Uo="186",Km=0,Ic=1,Jm=2,gs=1,Qm=2,Sr=3,yi=0,jt=1,cn=2,Xn=0,wr=1,Dc=2,Lc=3,Nc=4,jm=5,Xi=100,eg=101,tg=102,ng=103,ig=104,rg=200,sg=201,ag=202,og=203,uu=204,fu=205,cg=206,lg=207,ug=208,fg=209,dg=210,hg=211,pg=212,mg=213,gg=214,Na=0,Ua=1,Fa=2,Ir=3,Oa=4,za=5,Ba=6,ka=7,du=0,_g=1,vg=2,In=0,hu=1,pu=2,mu=3,gu=4,_u=5,vu=6,xu=7,Su=300,bi=301,nr=302,qs=303,Ys=304,zs=306,Ga=1e3,Wn=1001,Va=1002,Lt=1003,xg=1004,Wr=1005,kt=1006,Ks=1007,xi=1008,ln=1009,Mu=1010,yu=1011,Dr=1012,Fo=1013,Dn=1014,Cn=1015,Ln=1016,Oo=1017,zo=1018,Lr=1020,bu=35902,Eu=35899,wu=1021,Tu=1022,xn=1023,Zn=1026,Si=1027,Au=1028,Bo=1029,Ei=1030,ko=1031,Go=1033,_s=33776,vs=33777,xs=33778,Ss=33779,Ha=35840,Wa=35841,Xa=35842,$a=35843,Za=36196,qa=37492,Ya=37496,Ka=37488,Ja=37489,Ts=37490,Qa=37491,ja=37808,eo=37809,to=37810,no=37811,io=37812,ro=37813,so=37814,ao=37815,oo=37816,co=37817,lo=37818,uo=37819,fo=37820,ho=37821,po=36492,mo=36494,go=36495,_o=36283,vo=36284,As=36285,xo=36286,Sg=3200,Uc=0,Mg=1,ri="",on="srgb",Rs="srgb-linear",Cs="linear",et="srgb",Js=7680,yg=519,bg=512,Eg=513,wg=514,Vo=515,Tg=516,Ag=517,Ho=518,Rg=519,Cg=35044,Fc=35048,Oc="300 es",Pn=2e3,Ps=2001;function Pg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Is(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ig(){const n=Is("canvas");return n.style.display="block",n}const zc={};function Bc(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ru(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Pe(...n){n=Ru(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function qe(...n){n=Ru(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ji(...n){const e=n.join(" ");e in zc||(zc[e]=!0,Pe(...n))}function Dg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Lg={[Na]:Ua,[Fa]:Ba,[Oa]:ka,[Ir]:za,[Ua]:Na,[Ba]:Fa,[ka]:Oa,[za]:Ir};class Ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qs=Math.PI/180,So=180/Math.PI;function Ur(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function He(n,e,t){return Math.max(e,Math.min(t,n))}function Ng(n,e){return(n%e+e)%e}function js(n,e,t){return(1-t)*n+t*e}function ur(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class Ye{static{Ye.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ar{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3],u=s[a+0],h=s[a+1],_=s[a+2],S=s[a+3];if(d!==S||l!==u||c!==h||f!==_){let m=l*u+c*h+f*_+d*S;m<0&&(u=-u,h=-h,_=-_,S=-S,m=-m);let p=1-o;if(m<.9995){const T=Math.acos(m),R=Math.sin(T);p=Math.sin(p*T)/R,o=Math.sin(o*T)/R,l=l*p+u*o,c=c*p+h*o,f=f*p+_*o,d=d*p+S*o}else{l=l*p+u*o,c=c*p+h*o,f=f*p+_*o,d=d*p+S*o;const T=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=T,c*=T,f*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[a],u=s[a+1],h=s[a+2],_=s[a+3];return e[t]=o*_+f*d+l*h-c*u,e[t+1]=l*_+f*u+c*d-o*h,e[t+2]=c*_+f*h+o*u-l*d,e[t+3]=f*_-o*d-l*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),d=o(s/2),u=l(i/2),h=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=u*f*d+c*h*_,this._y=c*h*d-u*f*_,this._z=c*f*_+u*h*d,this._w=c*f*d-u*h*_;break;case"YXZ":this._x=u*f*d+c*h*_,this._y=c*h*d-u*f*_,this._z=c*f*_-u*h*d,this._w=c*f*d+u*h*_;break;case"ZXY":this._x=u*f*d-c*h*_,this._y=c*h*d+u*f*_,this._z=c*f*_+u*h*d,this._w=c*f*d-u*h*_;break;case"ZYX":this._x=u*f*d-c*h*_,this._y=c*h*d+u*f*_,this._z=c*f*_-u*h*d,this._w=c*f*d+u*h*_;break;case"YZX":this._x=u*f*d+c*h*_,this._y=c*h*d+u*f*_,this._z=c*f*_-u*h*d,this._w=c*f*d-u*h*_;break;case"XZY":this._x=u*f*d-c*h*_,this._y=c*h*d-u*f*_,this._z=c*f*_+u*h*d,this._w=c*f*d+u*h*_;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],d=t[10],u=i+o+d;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(f-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(i>o&&i>d){const h=2*Math.sqrt(1+i-o-d);this._w=(f-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-i-d);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+f)/h}else{const h=2*Math.sqrt(1+d-i-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{static{F.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*f,this.y=i+l*f+o*c-s*d,this.z=r+l*d+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ea.copy(this).projectOnVector(e),this.sub(ea)}reflect(e){return this.sub(ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ea=new F,kc=new ar;class De{static{De.prototype.isMatrix3=!0}constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],d=i[7],u=i[2],h=i[5],_=i[8],S=r[0],m=r[3],p=r[6],T=r[1],R=r[4],M=r[7],y=r[2],b=r[5],A=r[8];return s[0]=a*S+o*T+l*y,s[3]=a*m+o*R+l*b,s[6]=a*p+o*M+l*A,s[1]=c*S+f*T+d*y,s[4]=c*m+f*R+d*b,s[7]=c*p+f*M+d*A,s[2]=u*S+h*T+_*y,s[5]=u*m+h*R+_*b,s[8]=u*p+h*M+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=f*a-o*c,u=o*l-f*s,h=c*s-a*l,_=t*d+i*u+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=d*S,e[1]=(r*c-f*i)*S,e[2]=(o*i-r*a)*S,e[3]=u*S,e[4]=(f*t-r*l)*S,e[5]=(r*s-o*t)*S,e[6]=h*S,e[7]=(i*l-c*t)*S,e[8]=(a*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ta.makeScale(e,t)),this}rotate(e){return Ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ta.makeRotation(-e)),this}translate(e,t){return Ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ta=new De,Gc=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vc=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ug(){const n={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===et&&(r.r=$n(r.r),r.g=$n(r.g),r.b=$n(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(r.r=Qi(r.r),r.g=Qi(r.g),r.b=Qi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ri?Cs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Rs]:{primaries:e,whitePoint:i,transfer:Cs,toXYZ:Gc,fromXYZ:Vc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:i,transfer:et,toXYZ:Gc,fromXYZ:Vc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),n}const Ge=Ug();function $n(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Pi;class Fg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Pi===void 0&&(Pi=Is("canvas")),Pi.width=e.width,Pi.height=e.height;const r=Pi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Pi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Is("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=$n(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor($n(t[i]/255)*255):t[i]=$n(t[i]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Og=0;class Wo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Ur(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(na(r[a].image)):s.push(na(r[a]))}else s=na(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function na(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let zg=0;const ia=new F;class Xt extends Ai{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=Wn,r=Wn,s=kt,a=xi,o=xn,l=ln,c=Xt.DEFAULT_ANISOTROPY,f=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=Ur(),this.name="",this.source=new Wo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ia).x}get height(){return this.source.getSize(ia).y}get depth(){return this.source.getSize(ia).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ga:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ga:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Su;Xt.DEFAULT_ANISOTROPY=1;class st{static{st.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],u=l[1],h=l[5],_=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(f-u)<.01&&Math.abs(d-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(d+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,M=(h+1)/2,y=(p+1)/2,b=(f+u)/4,A=(d+S)/4,v=(_+m)/4;return R>M&&R>y?R<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(R),r=b/i,s=A/i):M>y?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=v/r):y<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),i=A/s,r=v/s),this.set(i,r,s,t),this}let T=Math.sqrt((m-_)*(m-_)+(d-S)*(d-S)+(u-f)*(u-f));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(d-S)/T,this.z=(u-f)/T,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bg extends Ai{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Xt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Wo(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends Bg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Cu extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kg extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class tt{static{tt.prototype.isMatrix4=!0}constructor(e,t,i,r,s,a,o,l,c,f,d,u,h,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,f,d,u,h,_,S,m)}set(e,t,i,r,s,a,o,l,c,f,d,u,h,_,S,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=f,p[10]=d,p[14]=u,p[3]=h,p[7]=_,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Ii.setFromMatrixColumn(e,0).length(),s=1/Ii.setFromMatrixColumn(e,1).length(),a=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*f,h=a*d,_=o*f,S=o*d;t[0]=l*f,t[4]=-l*d,t[8]=c,t[1]=h+_*c,t[5]=u-S*c,t[9]=-o*l,t[2]=S-u*c,t[6]=_+h*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*f,h=l*d,_=c*f,S=c*d;t[0]=u+S*o,t[4]=_*o-h,t[8]=a*c,t[1]=a*d,t[5]=a*f,t[9]=-o,t[2]=h*o-_,t[6]=S+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*f,h=l*d,_=c*f,S=c*d;t[0]=u-S*o,t[4]=-a*d,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*f,t[9]=S-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*f,h=a*d,_=o*f,S=o*d;t[0]=l*f,t[4]=_*c-h,t[8]=u*c+S,t[1]=l*d,t[5]=S*c+u,t[9]=h*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,h=a*c,_=o*l,S=o*c;t[0]=l*f,t[4]=S-u*d,t[8]=_*d+h,t[1]=d,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=h*d+_,t[10]=u-S*d}else if(e.order==="XZY"){const u=a*l,h=a*c,_=o*l,S=o*c;t[0]=l*f,t[4]=-d,t[8]=c*f,t[1]=u*d+S,t[5]=a*f,t[9]=h*d-_,t[2]=_*d-h,t[6]=o*f,t[10]=S*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gg,e,Vg)}lookAt(e,t,i){const r=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Jn.crossVectors(i,tn),Jn.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Jn.crossVectors(i,tn)),Jn.normalize(),Xr.crossVectors(tn,Jn),r[0]=Jn.x,r[4]=Xr.x,r[8]=tn.x,r[1]=Jn.y,r[5]=Xr.y,r[9]=tn.y,r[2]=Jn.z,r[6]=Xr.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],d=i[5],u=i[9],h=i[13],_=i[2],S=i[6],m=i[10],p=i[14],T=i[3],R=i[7],M=i[11],y=i[15],b=r[0],A=r[4],v=r[8],w=r[12],I=r[1],N=r[5],B=r[9],H=r[13],L=r[2],k=r[6],Y=r[10],W=r[14],ie=r[3],$=r[7],ee=r[11],ne=r[15];return s[0]=a*b+o*I+l*L+c*ie,s[4]=a*A+o*N+l*k+c*$,s[8]=a*v+o*B+l*Y+c*ee,s[12]=a*w+o*H+l*W+c*ne,s[1]=f*b+d*I+u*L+h*ie,s[5]=f*A+d*N+u*k+h*$,s[9]=f*v+d*B+u*Y+h*ee,s[13]=f*w+d*H+u*W+h*ne,s[2]=_*b+S*I+m*L+p*ie,s[6]=_*A+S*N+m*k+p*$,s[10]=_*v+S*B+m*Y+p*ee,s[14]=_*w+S*H+m*W+p*ne,s[3]=T*b+R*I+M*L+y*ie,s[7]=T*A+R*N+M*k+y*$,s[11]=T*v+R*B+M*Y+y*ee,s[15]=T*w+R*H+M*W+y*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],d=e[6],u=e[10],h=e[14],_=e[3],S=e[7],m=e[11],p=e[15],T=l*h-c*u,R=o*h-c*d,M=o*u-l*d,y=a*h-c*f,b=a*u-l*f,A=a*d-o*f;return t*(S*T-m*R+p*M)-i*(_*T-m*y+p*b)+r*(_*R-S*y+p*A)-s*(_*M-S*b+m*A)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return t*(a*f-o*c)-i*(s*f-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=e[9],u=e[10],h=e[11],_=e[12],S=e[13],m=e[14],p=e[15],T=t*o-i*a,R=t*l-r*a,M=t*c-s*a,y=i*l-r*o,b=i*c-s*o,A=r*c-s*l,v=f*S-d*_,w=f*m-u*_,I=f*p-h*_,N=d*m-u*S,B=d*p-h*S,H=u*p-h*m,L=T*H-R*B+M*N+y*I-b*w+A*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/L;return e[0]=(o*H-l*B+c*N)*k,e[1]=(r*B-i*H-s*N)*k,e[2]=(S*A-m*b+p*y)*k,e[3]=(u*b-d*A-h*y)*k,e[4]=(l*I-a*H-c*w)*k,e[5]=(t*H-r*I+s*w)*k,e[6]=(m*M-_*A-p*R)*k,e[7]=(f*A-u*M+h*R)*k,e[8]=(a*B-o*I+c*v)*k,e[9]=(i*I-t*B-s*v)*k,e[10]=(_*b-S*M+p*T)*k,e[11]=(d*M-f*b-h*T)*k,e[12]=(o*w-a*N-l*v)*k,e[13]=(t*N-i*w+r*v)*k,e[14]=(S*R-_*y-m*T)*k,e[15]=(f*y-d*R+u*T)*k,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,f=a+a,d=o+o,u=s*c,h=s*f,_=s*d,S=a*f,m=a*d,p=o*d,T=l*c,R=l*f,M=l*d,y=i.x,b=i.y,A=i.z;return r[0]=(1-(S+p))*y,r[1]=(h+M)*y,r[2]=(_-R)*y,r[3]=0,r[4]=(h-M)*b,r[5]=(1-(u+p))*b,r[6]=(m+T)*b,r[7]=0,r[8]=(_+R)*A,r[9]=(m-T)*A,r[10]=(1-(u+S))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Ii.set(r[0],r[1],r[2]).length();const o=Ii.set(r[4],r[5],r[6]).length(),l=Ii.set(r[8],r[9],r[10]).length();s<0&&(a=-a),dn.copy(this);const c=1/a,f=1/o,d=1/l;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=f,dn.elements[5]*=f,dn.elements[6]*=f,dn.elements[8]*=d,dn.elements[9]*=d,dn.elements[10]*=d,t.setFromRotationMatrix(dn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=Pn,l=!1){const c=this.elements,f=2*s/(t-e),d=2*s/(i-r),u=(t+e)/(t-e),h=(i+r)/(i-r);let _,S;if(l)_=s/(a-s),S=a*s/(a-s);else if(o===Pn)_=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Ps)_=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Pn,l=!1){const c=this.elements,f=2/(t-e),d=2/(i-r),u=-(t+e)/(t-e),h=-(i+r)/(i-r);let _,S;if(l)_=1/(a-s),S=a/(a-s);else if(o===Pn)_=-2/(a-s),S=-(a+s)/(a-s);else if(o===Ps)_=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ii=new F,dn=new tt,Gg=new F(0,0,0),Vg=new F(1,1,1),Jn=new F,Xr=new F,tn=new F,Hc=new tt,Wc=new ar;class wi{constructor(e=0,t=0,i=0,r=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],d=r[2],u=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,h),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Hc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class Pu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hg=0;const Xc=new F,Di=new ar,Un=new tt,$r=new F,fr=new F,Wg=new F,Xg=new ar,$c=new F(1,0,0),Zc=new F(0,1,0),qc=new F(0,0,1),Yc={type:"added"},$g={type:"removed"},Li={type:"childadded",child:null},ra={type:"childremoved",child:null};class $t extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new F,t=new wi,i=new ar,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new De}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis($c,e)}rotateY(e){return this.rotateOnAxis(Zc,e)}rotateZ(e){return this.rotateOnAxis(qc,e)}translateOnAxis(e,t){return Xc.copy(e).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($c,e)}translateY(e){return this.translateOnAxis(Zc,e)}translateZ(e){return this.translateOnAxis(qc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$r.copy(e):$r.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(fr,$r,this.up):Un.lookAt($r,fr,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),Di.setFromRotationMatrix(Un),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yc),Li.child=e,this.dispatchEvent(Li),Li.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($g),ra.child=e,this.dispatchEvent(ra),ra.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yc),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,Wg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Xg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),d=a(e.shapes),u=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}$t.DEFAULT_UP=new F(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Mr extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zg={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,i),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=f.position.distanceTo(d.position),h=.02,_=.005;c.inputState.pinching&&u>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Mr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function aa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ge.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ge.workingColorSpace){if(e=Ng(e,1),t=He(t,0,1),i=He(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=aa(a,s,e+1/3),this.g=aa(a,s,e),this.b=aa(a,s,e-1/3)}return Ge.colorSpaceToWorking(this,r),this}setStyle(e,t=on){function i(s){s!==void 0&&parseFloat(s)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const i=Iu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return Ge.workingToColorSpace(Ot.copy(this),e),Math.round(He(Ot.r*255,0,255))*65536+Math.round(He(Ot.g*255,0,255))*256+Math.round(He(Ot.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(Ot.copy(this),t);const i=Ot.r,r=Ot.g,s=Ot.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=f<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=on){Ge.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,r=Ot.b;return e!==on?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(Zr);const i=js(Qn.h,Zr.h,t),r=js(Qn.s,Zr.s,t),s=js(Qn.l,Zr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new $e;$e.NAMES=Iu;class qg extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hn=new F,Fn=new F,oa=new F,On=new F,Ni=new F,Ui=new F,Kc=new F,ca=new F,la=new F,ua=new F,fa=new st,da=new st,ha=new st;class vn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),hn.subVectors(e,t),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){hn.subVectors(r,t),Fn.subVectors(i,t),oa.subVectors(e,t);const a=hn.dot(hn),o=hn.dot(Fn),l=hn.dot(oa),c=Fn.dot(Fn),f=Fn.dot(oa),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,h=(c*l-o*f)*u,_=(a*f-o*l)*u;return s.set(1-h-_,_,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return fa.setScalar(0),da.setScalar(0),ha.setScalar(0),fa.fromBufferAttribute(e,t),da.fromBufferAttribute(e,i),ha.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(fa,s.x),a.addScaledVector(da,s.y),a.addScaledVector(ha,s.z),a}static isFrontFacing(e,t,i,r){return hn.subVectors(i,t),Fn.subVectors(e,t),hn.cross(Fn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),hn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return vn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ni.subVectors(r,i),Ui.subVectors(s,i),ca.subVectors(e,i);const l=Ni.dot(ca),c=Ui.dot(ca);if(l<=0&&c<=0)return t.copy(i);la.subVectors(e,r);const f=Ni.dot(la),d=Ui.dot(la);if(f>=0&&d<=f)return t.copy(r);const u=l*d-f*c;if(u<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(i).addScaledVector(Ni,a);ua.subVectors(e,s);const h=Ni.dot(ua),_=Ui.dot(ua);if(_>=0&&h<=_)return t.copy(s);const S=h*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Ui,o);const m=f*_-h*d;if(m<=0&&d-f>=0&&h-_>=0)return Kc.subVectors(s,r),o=(d-f)/(d-f+(h-_)),t.copy(r).addScaledVector(Kc,o);const p=1/(m+S+u);return a=S*p,o=u*p,t.copy(i).addScaledVector(Ni,a).addScaledVector(Ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class or{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,pn):pn.fromBufferAttribute(s,a),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qr.copy(i.boundingBox)),qr.applyMatrix4(e.matrixWorld),this.union(qr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),Yr.subVectors(this.max,dr),Fi.subVectors(e.a,dr),Oi.subVectors(e.b,dr),zi.subVectors(e.c,dr),jn.subVectors(Oi,Fi),ei.subVectors(zi,Oi),fi.subVectors(Fi,zi);let t=[0,-jn.z,jn.y,0,-ei.z,ei.y,0,-fi.z,fi.y,jn.z,0,-jn.x,ei.z,0,-ei.x,fi.z,0,-fi.x,-jn.y,jn.x,0,-ei.y,ei.x,0,-fi.y,fi.x,0];return!pa(t,Fi,Oi,zi,Yr)||(t=[1,0,0,0,1,0,0,0,1],!pa(t,Fi,Oi,zi,Yr))?!1:(Kr.crossVectors(jn,ei),t=[Kr.x,Kr.y,Kr.z],pa(t,Fi,Oi,zi,Yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zn=[new F,new F,new F,new F,new F,new F,new F,new F],pn=new F,qr=new or,Fi=new F,Oi=new F,zi=new F,jn=new F,ei=new F,fi=new F,dr=new F,Yr=new F,Kr=new F,di=new F;function pa(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){di.fromArray(n,s);const o=r.x*Math.abs(di.x)+r.y*Math.abs(di.y)+r.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),f=i.dot(di);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Et=new F,Jr=new Ye;let Yg=0;class Mn extends Ai{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cg,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ur(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Du extends Mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Xo extends Mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class zt extends Mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Kg=new or,hr=new F,ma=new F;class Fr{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Kg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);const t=hr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(hr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(ma)),this.expandByPoint(hr.copy(e.center).sub(ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Jg=0;const sn=new tt,ga=new $t,Bi=new F,nn=new or,pr=new or,Ct=new F;class Wt extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pg(e)?Xo:Du)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new De().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,i){return sn.makeTranslation(e,t,i),this.applyMatrix4(sn),this}scale(e,t,i){return sn.makeScale(e,t,i),this.applyMatrix4(sn),this}lookAt(e){return ga.lookAt(e),ga.updateMatrix(),this.applyMatrix4(ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(nn.min,pr.min),nn.expandByPoint(Ct),Ct.addVectors(nn.max,pr.max),nn.expandByPoint(Ct)):(nn.expandByPoint(pr.min),nn.expandByPoint(pr.max))}nn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Ct.fromBufferAttribute(o,c),l&&(Bi.fromBufferAttribute(e,c),Ct.add(Bi)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Mn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new F,l[v]=new F;const c=new F,f=new F,d=new F,u=new Ye,h=new Ye,_=new Ye,S=new F,m=new F;function p(v,w,I){c.fromBufferAttribute(i,v),f.fromBufferAttribute(i,w),d.fromBufferAttribute(i,I),u.fromBufferAttribute(s,v),h.fromBufferAttribute(s,w),_.fromBufferAttribute(s,I),f.sub(c),d.sub(c),h.sub(u),_.sub(u);const N=1/(h.x*_.y-_.x*h.y);isFinite(N)&&(S.copy(f).multiplyScalar(_.y).addScaledVector(d,-h.y).multiplyScalar(N),m.copy(d).multiplyScalar(h.x).addScaledVector(f,-_.x).multiplyScalar(N),o[v].add(S),o[w].add(S),o[I].add(S),l[v].add(m),l[w].add(m),l[I].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let v=0,w=T.length;v<w;++v){const I=T[v],N=I.start,B=I.count;for(let H=N,L=N+B;H<L;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const R=new F,M=new F,y=new F,b=new F;function A(v){y.fromBufferAttribute(r,v),b.copy(y);const w=o[v];R.copy(w),R.sub(y.multiplyScalar(y.dot(w))).normalize(),M.crossVectors(b,w);const N=M.dot(l[v])<0?-1:1;a.setXYZW(v,R.x,R.y,R.z,N)}for(let v=0,w=T.length;v<w;++v){const I=T[v],N=I.start,B=I.count;for(let H=N,L=N+B;H<L;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);const r=new F,s=new F,a=new F,o=new F,l=new F,c=new F,f=new F,d=new F;if(e)for(let u=0,h=e.count;u<h;u+=3){const _=e.getX(u+0),S=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,h=t.count;u<h;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,d=o.normalized,u=new c.constructor(l.length*f);let h=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?h=l[S]*o.data.stride+o.offset:h=l[S]*f;for(let p=0;p<f;p++)u[_++]=c[h++]}return new Mn(u,f,d)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,d=c.length;f<d;f++){const u=c[f],h=e(u,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,u=c.length;d<u;d++){const h=c[d];f.push(h.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let u=0,h=d.length;u<h;u++)f.push(d[u].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _a=new F,Qg=new F,jg=new De;class ii{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=_a.subVectors(i,t).cross(Qg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(_a),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jg.getNormalMatrix(e),r=this.coplanarPoint(_a).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let e_=0;class cr extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=wr,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uu,this.blendDst=fu,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ii().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ye().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Bn=new F,va=new F,Qr=new F,jr=new F;class $o{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){va.copy(e).add(t).multiplyScalar(.5),Qr.copy(t).sub(e).normalize(),jr.copy(this.origin).sub(va);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Qr),o=jr.dot(this.direction),l=-jr.dot(Qr),c=jr.lengthSq(),f=Math.abs(1-a*a);let d,u,h,_;if(f>0)if(d=a*l-o,u=a*o-l,_=s*f,d>=0)if(u>=-_)if(u<=_){const S=1/f;d*=S,u*=S,h=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),h=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),h=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-s,-l),s),h=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),h=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(va).addScaledVector(Qr,u),h}intersectSphere(e,t){if(e.radius<0)return null;Bn.subVectors(e.center,this.origin);const i=Bn.dot(this.direction),r=Bn.dot(Bn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,a=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,a=(e.min.y-u.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,d=e.x-a.x,u=e.y-a.y,h=e.z-a.z,_=t.x-a.x,S=t.y-a.y,m=t.z-a.z,p=i.x-a.x,T=i.y-a.y,R=i.z-a.z,M=Math.abs(l),y=Math.abs(c),b=Math.abs(f);let A,v,w,I,N,B,H,L,k,Y,W,ie;if(M>=y&&M>=b?(w=l,B=d,k=_,ie=p,l>=0?(A=c,v=f,I=u,N=h,H=S,L=m,Y=T,W=R):(A=f,v=c,I=h,N=u,H=m,L=S,Y=R,W=T)):y>=b?(w=c,B=u,k=S,ie=T,c>=0?(A=f,v=l,I=h,N=d,H=m,L=_,Y=R,W=p):(A=l,v=f,I=d,N=h,H=_,L=m,Y=p,W=R)):(w=f,B=h,k=m,ie=R,f>=0?(A=l,v=c,I=d,N=u,H=_,L=S,Y=p,W=T):(A=c,v=l,I=u,N=d,H=S,L=_,Y=T,W=p)),w===0)return null;const $=A/w,ee=v/w,ne=1/w,Re=I-$*B,Te=N-ee*B,at=H-$*k,We=L-ee*k,Ke=Y-$*ie,Z=W-ee*ie,j=Ke*We-Z*at,ve=Re*Z-Te*Ke,Ie=at*Te-We*Re;if(r){if(j<0||ve<0||Ie<0)return null}else if((j<0||ve<0||Ie<0)&&(j>0||ve>0||Ie>0))return null;const ge=j+ve+Ie;if(ge===0)return null;const Fe=ne*(j*B+ve*k+Ie*ie);return(ge>0?Fe<0:Fe>0)?null:this.at(Fe/ge,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zo extends cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jc=new tt,hi=new $o,es=new Fr,Qc=new F,ts=new F,ns=new F,is=new F,xa=new F,rs=new F,jc=new F,ss=new F;class Jt extends $t{constructor(e=new Wt,t=new Zo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){rs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],d=s[l];f!==0&&(xa.fromBufferAttribute(d,e),a?rs.addScaledVector(xa,f):rs.addScaledVector(xa.sub(t),f))}t.add(rs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),es.copy(i.boundingSphere),es.applyMatrix4(s),hi.copy(e.ray).recast(e.near),!(es.containsPoint(hi.origin)===!1&&(hi.intersectSphere(es,Qc)===null||hi.origin.distanceToSquared(Qc)>(e.far-e.near)**2))&&(Jc.copy(s).invert(),hi.copy(e.ray).applyMatrix4(Jc),!(i.boundingBox!==null&&hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,u=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){const m=u[_],p=a[m.materialIndex],T=Math.max(m.start,h.start),R=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let M=T,y=R;M<y;M+=3){const b=o.getX(M),A=o.getX(M+1),v=o.getX(M+2);r=as(this,p,e,i,c,f,d,b,A,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),S=Math.min(o.count,h.start+h.count);for(let m=_,p=S;m<p;m+=3){const T=o.getX(m),R=o.getX(m+1),M=o.getX(m+2);r=as(this,a,e,i,c,f,d,T,R,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){const m=u[_],p=a[m.materialIndex],T=Math.max(m.start,h.start),R=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let M=T,y=R;M<y;M+=3){const b=M,A=M+1,v=M+2;r=as(this,p,e,i,c,f,d,b,A,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),S=Math.min(l.count,h.start+h.count);for(let m=_,p=S;m<p;m+=3){const T=m,R=m+1,M=m+2;r=as(this,a,e,i,c,f,d,T,R,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function t_(n,e,t,i,r,s,a,o){let l;if(e.side===jt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===yi,o),l===null)return null;ss.copy(o),ss.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ss);return c<t.near||c>t.far?null:{distance:c,point:ss.clone(),object:n}}function as(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ts),n.getVertexPosition(l,ns),n.getVertexPosition(c,is);const f=t_(n,e,t,i,ts,ns,is,jc);if(f){const d=new F;vn.getBarycoord(jc,ts,ns,is,d),r&&(f.uv=vn.getInterpolatedAttribute(r,o,l,c,d,new Ye)),s&&(f.uv1=vn.getInterpolatedAttribute(s,o,l,c,d,new Ye)),a&&(f.normal=vn.getInterpolatedAttribute(a,o,l,c,d,new F),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new F,materialIndex:0};vn.getNormal(ts,ns,is,u.normal),f.face=u,f.barycoord=d}return f}class n_ extends Xt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Lt,f=Lt,d,u){super(null,a,o,l,c,f,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pi=new Fr,i_=new Ye(.5,.5),os=new F;class Lu{constructor(e=new ii,t=new ii,i=new ii,r=new ii,s=new ii,a=new ii){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],d=s[5],u=s[6],h=s[7],_=s[8],S=s[9],m=s[10],p=s[11],T=s[12],R=s[13],M=s[14],y=s[15];if(r[0].setComponents(c-a,h-f,p-_,y-T).normalize(),r[1].setComponents(c+a,h+f,p+_,y+T).normalize(),r[2].setComponents(c+o,h+d,p+S,y+R).normalize(),r[3].setComponents(c-o,h-d,p-S,y-R).normalize(),i)r[4].setComponents(l,u,m,M).normalize(),r[5].setComponents(c-l,h-u,p-m,y-M).normalize();else if(r[4].setComponents(c-l,h-u,p-m,y-M).normalize(),t===Pn)r[5].setComponents(c+l,h+u,p+m,y+M).normalize();else if(t===Ps)r[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){pi.center.set(0,0,0);const t=i_.distanceTo(e.center);return pi.radius=.7071067811865476+t,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(os.x=r.normal.x>0?e.max.x:e.min.x,os.y=r.normal.y>0?e.max.y:e.min.y,os.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(os)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class r_ extends cr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ds=new F,Ls=new F,el=new tt,mr=new $o,cs=new Fr,Sa=new F,tl=new F;class s_ extends $t{constructor(e=new Wt,t=new r_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ds.fromBufferAttribute(t,r-1),Ls.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ds.distanceTo(Ls);e.setAttribute("lineDistance",new zt(i,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cs.copy(i.boundingSphere),cs.applyMatrix4(r),cs.radius+=s,e.ray.intersectsSphere(cs)===!1)return;el.copy(r).invert(),mr.copy(e.ray).applyMatrix4(el);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){const h=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let S=h,m=_-1;S<m;S+=c){const p=f.getX(S),T=f.getX(S+1),R=ls(this,e,mr,l,p,T,S);R&&t.push(R)}if(this.isLineLoop){const S=f.getX(_-1),m=f.getX(h),p=ls(this,e,mr,l,S,m,_-1);p&&t.push(p)}}else{const h=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let S=h,m=_-1;S<m;S+=c){const p=ls(this,e,mr,l,S,S+1,S);p&&t.push(p)}if(this.isLineLoop){const S=ls(this,e,mr,l,_-1,h,_-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ls(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Ds.fromBufferAttribute(o,r),Ls.fromBufferAttribute(o,s),t.distanceSqToSegment(Ds,Ls,Sa,tl)>i)return;Sa.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Sa);if(!(c<e.near||c>e.far))return{distance:c,point:tl.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class a_ extends cr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nl=new tt,Mo=new $o,us=new Fr,fs=new F;class Ma extends $t{constructor(e=new Wt,t=new a_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),us.copy(i.boundingSphere),us.applyMatrix4(r),us.radius+=s,e.ray.intersectsSphere(us)===!1)return;nl.copy(r).invert(),Mo.copy(e.ray).applyMatrix4(nl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let _=u,S=h;_<S;_++){const m=c.getX(_);fs.fromBufferAttribute(d,m),il(fs,m,l,r,e,t,this)}}else{const u=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let _=u,S=h;_<S;_++)fs.fromBufferAttribute(d,_),il(fs,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function il(n,e,t,i,r,s,a){const o=Mo.distanceSqToPoint(n);if(o<t){const l=new F;Mo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Nu extends Xt{constructor(e=[],t=bi,i,r,s,a,o,l,c,f){super(e,t,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nr extends Xt{constructor(e,t,i=Dn,r,s,a,o=Lt,l=Lt,c,f=Zn,d=1){if(f!==Zn&&f!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class o_ extends Nr{constructor(e,t=Dn,i=bi,r,s,a=Lt,o=Lt,l,c=Zn){const f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,t,i,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Uu extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Or extends Wt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],d=[];let u=0,h=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(f,3)),this.setAttribute("uv",new zt(d,2));function _(S,m,p,T,R,M,y,b,A,v,w){const I=M/A,N=y/v,B=M/2,H=y/2,L=b/2,k=A+1,Y=v+1;let W=0,ie=0;const $=new F;for(let ee=0;ee<Y;ee++){const ne=ee*N-H;for(let Re=0;Re<k;Re++){const Te=Re*I-B;$[S]=Te*T,$[m]=ne*R,$[p]=L,c.push($.x,$.y,$.z),$[S]=0,$[m]=0,$[p]=b>0?1:-1,f.push($.x,$.y,$.z),d.push(Re/A),d.push(1-ee/v),W+=1}}for(let ee=0;ee<v;ee++)for(let ne=0;ne<A;ne++){const Re=u+ne+k*ee,Te=u+ne+k*(ee+1),at=u+(ne+1)+k*(ee+1),We=u+(ne+1)+k*ee;l.push(Re,Te,We),l.push(Te,at,We),ie+=6}o.addGroup(h,ie,w),h+=ie,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Bs extends Wt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,d=e/o,u=t/l,h=[],_=[],S=[],m=[];for(let p=0;p<f;p++){const T=p*u-a;for(let R=0;R<c;R++){const M=R*d-s;_.push(M,-T,0),S.push(0,0,1),m.push(R/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const R=T+c*p,M=T+c*(p+1),y=T+1+c*(p+1),b=T+1+c*p;h.push(R,M,b),h.push(M,y,b)}this.setIndex(h),this.setAttribute("position",new zt(_,3)),this.setAttribute("normal",new zt(S,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.width,e.height,e.widthSegments,e.heightSegments)}}function ir(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(rl(r))r.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(rl(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Ht(n){const e={};for(let t=0;t<n.length;t++){const i=ir(n[t]);for(const r in i)e[r]=i[r]}return e}function rl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function c_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const l_={clone:ir,merge:Ht};var u_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qt extends cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u_,this.fragmentShader=f_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=c_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ye().fromArray(r.value);break;case"v3":this.uniforms[i].value=new F().fromArray(r.value);break;case"v4":this.uniforms[i].value=new st().fromArray(r.value);break;case"m3":this.uniforms[i].value=new De().fromArray(r.value);break;case"m4":this.uniforms[i].value=new tt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class d_ extends Qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class h_ extends cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class p_ extends cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ds=new F,hs=new ar,En=new F;class qo extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ds,hs,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ds,hs,En.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ds,hs,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ds,hs,En.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ti=new F,sl=new Ye,al=new Ye;class _n extends qo{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=So*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return So*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,sl,al),t.subVectors(al,sl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ou extends qo{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ki=-90,Gi=1;class m_ extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(ki,Gi,e,t);r.layers=this.layers,this.add(r);const s=new _n(ki,Gi,e,t);s.layers=this.layers,this.add(s);const a=new _n(ki,Gi,e,t);a.layers=this.layers,this.add(a);const o=new _n(ki,Gi,e,t);o.layers=this.layers,this.add(o);const l=new _n(ki,Gi,e,t);l.layers=this.layers,this.add(l);const c=new _n(ki,Gi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(d,u,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class g_ extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class zu{static{zu.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}}function ol(n,e,t,i){const r=__(i);switch(t){case wu:return n*e;case Au:return n*e/r.components*r.byteLength;case Bo:return n*e/r.components*r.byteLength;case Ei:return n*e*2/r.components*r.byteLength;case ko:return n*e*2/r.components*r.byteLength;case Tu:return n*e*3/r.components*r.byteLength;case xn:return n*e*4/r.components*r.byteLength;case Go:return n*e*4/r.components*r.byteLength;case _s:case vs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xs:case Ss:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wa:case $a:return Math.max(n,16)*Math.max(e,8)/4;case Ha:case Xa:return Math.max(n,8)*Math.max(e,8)/2;case Za:case qa:case Ka:case Ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ya:case Ts:case Qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case eo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case to:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case no:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case io:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ro:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case so:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ao:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case oo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case co:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case lo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case uo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ho:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case po:case mo:case go:return Math.ceil(n/4)*Math.ceil(e/4)*16;case _o:case vo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case As:case xo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function __(n){switch(n){case ln:case Mu:return{byteLength:1,components:1};case Dr:case yu:case Ln:return{byteLength:2,components:1};case Oo:case zo:return{byteLength:2,components:4};case Dn:case Fo:case Cn:return{byteLength:4,components:1};case bu:case Eu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uo}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uo);function Bu(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function v_(n){const e=new WeakMap;function t(o,l){const c=o.array,f=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,f),o.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const f=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,f);else{d.sort((h,_)=>h.start-_.start);let u=0;for(let h=1;h<d.length;h++){const _=d[u],S=d[h];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++u,d[u]=S)}d.length=u+1;for(let h=0,_=d.length;h<_;h++){const S=d[h];n.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var x_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S_=`#ifdef USE_ALPHAHASH
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
#endif`,M_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w_=`#ifdef USE_AOMAP
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
#endif`,T_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A_=`#ifdef USE_BATCHING
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
#endif`,R_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,D_=`#ifdef USE_IRIDESCENCE
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
#endif`,L_=`#ifdef USE_BUMPMAP
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
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,B_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,k_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,G_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,V_=`#define PI 3.141592653589793
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
} // validated`,H_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,W_=`vec3 transformedNormal = objectNormal;
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
#endif`,X_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y_="gl_FragColor = linearToOutputTexel( gl_FragColor );",K_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J_=`#ifdef USE_ENVMAP
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
#endif`,Q_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,j_=`#ifdef USE_ENVMAP
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
#endif`,ev=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tv=`#ifdef USE_ENVMAP
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
#endif`,nv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,av=`#ifdef USE_GRADIENTMAP
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
}`,ov=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,fv=`#ifdef USE_ENVMAP
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
#endif`,dv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gv=`PhysicalMaterial material;
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
#endif`,_v=`uniform sampler2D dfgLUT;
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
}`,vv=`
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
#endif`,xv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,yv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ev=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Av=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cv=`#if defined( USE_POINTS_UV )
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
#endif`,Pv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uv=`#ifdef USE_MORPHTARGETS
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
#endif`,Fv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ov=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vv=`#ifdef USE_NORMALMAP
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
#endif`,Hv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$v=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,r0=`float getShadowMask() {
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
}`,s0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a0=`#ifdef USE_SKINNING
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
#endif`,o0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c0=`#ifdef USE_SKINNING
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
#endif`,l0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,h0=`#ifdef USE_TRANSMISSION
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
#endif`,p0=`#ifdef USE_TRANSMISSION
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S0=`uniform sampler2D t2D;
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`#include <common>
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
}`,T0=`#if DEPTH_PACKING == 3200
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
}`,A0=`#define DISTANCE
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
}`,R0=`#define DISTANCE
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
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`uniform float scale;
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
}`,D0=`uniform vec3 diffuse;
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
}`,L0=`#include <common>
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
}`,N0=`uniform vec3 diffuse;
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
}`,U0=`#define LAMBERT
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
}`,F0=`#define LAMBERT
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
}`,O0=`#define MATCAP
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
}`,z0=`#define MATCAP
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
}`,B0=`#define NORMAL
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
}`,k0=`#define NORMAL
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
}`,G0=`#define PHONG
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
}`,V0=`#define PHONG
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
}`,H0=`#define STANDARD
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
}`,W0=`#define STANDARD
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
}`,X0=`#define TOON
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
}`,$0=`#define TOON
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
}`,Z0=`uniform float size;
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
}`,q0=`uniform vec3 diffuse;
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
}`,Y0=`#include <common>
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
}`,K0=`uniform vec3 color;
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
}`,J0=`uniform float rotation;
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
}`,Q0=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:x_,alphahash_pars_fragment:S_,alphamap_fragment:M_,alphamap_pars_fragment:y_,alphatest_fragment:b_,alphatest_pars_fragment:E_,aomap_fragment:w_,aomap_pars_fragment:T_,batching_pars_vertex:A_,batching_vertex:R_,begin_vertex:C_,beginnormal_vertex:P_,bsdfs:I_,iridescence_fragment:D_,bumpmap_pars_fragment:L_,clipping_planes_fragment:N_,clipping_planes_pars_fragment:U_,clipping_planes_pars_vertex:F_,clipping_planes_vertex:O_,color_fragment:z_,color_pars_fragment:B_,color_pars_vertex:k_,color_vertex:G_,common:V_,cube_uv_reflection_fragment:H_,defaultnormal_vertex:W_,displacementmap_pars_vertex:X_,displacementmap_vertex:$_,emissivemap_fragment:Z_,emissivemap_pars_fragment:q_,colorspace_fragment:Y_,colorspace_pars_fragment:K_,envmap_fragment:J_,envmap_common_pars_fragment:Q_,envmap_pars_fragment:j_,envmap_pars_vertex:ev,envmap_physical_pars_fragment:fv,envmap_vertex:tv,fog_vertex:nv,fog_pars_vertex:iv,fog_fragment:rv,fog_pars_fragment:sv,gradientmap_pars_fragment:av,lightmap_pars_fragment:ov,lights_lambert_fragment:cv,lights_lambert_pars_fragment:lv,lights_pars_begin:uv,lights_toon_fragment:dv,lights_toon_pars_fragment:hv,lights_phong_fragment:pv,lights_phong_pars_fragment:mv,lights_physical_fragment:gv,lights_physical_pars_fragment:_v,lights_fragment_begin:vv,lights_fragment_maps:xv,lights_fragment_end:Sv,lightprobes_pars_fragment:Mv,logdepthbuf_fragment:yv,logdepthbuf_pars_fragment:bv,logdepthbuf_pars_vertex:Ev,logdepthbuf_vertex:wv,map_fragment:Tv,map_pars_fragment:Av,map_particle_fragment:Rv,map_particle_pars_fragment:Cv,metalnessmap_fragment:Pv,metalnessmap_pars_fragment:Iv,morphinstance_vertex:Dv,morphcolor_vertex:Lv,morphnormal_vertex:Nv,morphtarget_pars_vertex:Uv,morphtarget_vertex:Fv,normal_fragment_begin:Ov,normal_fragment_maps:zv,normal_pars_fragment:Bv,normal_pars_vertex:kv,normal_vertex:Gv,normalmap_pars_fragment:Vv,clearcoat_normal_fragment_begin:Hv,clearcoat_normal_fragment_maps:Wv,clearcoat_pars_fragment:Xv,iridescence_pars_fragment:$v,opaque_fragment:Zv,packing:qv,premultiplied_alpha_fragment:Yv,project_vertex:Kv,dithering_fragment:Jv,dithering_pars_fragment:Qv,roughnessmap_fragment:jv,roughnessmap_pars_fragment:e0,shadowmap_pars_fragment:t0,shadowmap_pars_vertex:n0,shadowmap_vertex:i0,shadowmask_pars_fragment:r0,skinbase_vertex:s0,skinning_pars_vertex:a0,skinning_vertex:o0,skinnormal_vertex:c0,specularmap_fragment:l0,specularmap_pars_fragment:u0,tonemapping_fragment:f0,tonemapping_pars_fragment:d0,transmission_fragment:h0,transmission_pars_fragment:p0,uv_pars_fragment:m0,uv_pars_vertex:g0,uv_vertex:_0,worldpos_vertex:v0,background_vert:x0,background_frag:S0,backgroundCube_vert:M0,backgroundCube_frag:y0,cube_vert:b0,cube_frag:E0,depth_vert:w0,depth_frag:T0,distance_vert:A0,distance_frag:R0,equirect_vert:C0,equirect_frag:P0,linedashed_vert:I0,linedashed_frag:D0,meshbasic_vert:L0,meshbasic_frag:N0,meshlambert_vert:U0,meshlambert_frag:F0,meshmatcap_vert:O0,meshmatcap_frag:z0,meshnormal_vert:B0,meshnormal_frag:k0,meshphong_vert:G0,meshphong_frag:V0,meshphysical_vert:H0,meshphysical_frag:W0,meshtoon_vert:X0,meshtoon_frag:$0,points_vert:Z0,points_frag:q0,shadow_vert:Y0,shadow_frag:K0,sprite_vert:J0,sprite_frag:Q0},fe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Rn={basic:{uniforms:Ht([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Ht([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Ht([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Ht([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Ht([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Ht([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Ht([fe.points,fe.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Ht([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Ht([fe.common,fe.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Ht([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Ht([fe.sprite,fe.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:Ht([fe.common,fe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:Ht([fe.lights,fe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Rn.physical={uniforms:Ht([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const ps={r:0,b:0,g:0},j0=new tt,ku=new De;ku.set(-1,0,0,0,1,0,0,0,1);function ex(n,e,t,i,r,s){const a=new $e(0);let o=r===!0?0:1,l,c,f=null,d=0,u=null;function h(T){let R=T.isScene===!0?T.background:null;if(R&&R.isTexture){const M=T.backgroundBlurriness>0;R=e.get(R,M)}return R}function _(T){let R=!1;const M=h(T);M===null?m(a,o):M&&M.isColor&&(m(M,1),R=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(T,R){const M=h(R);M&&(M.isCubeTexture||M.mapping===zs)?(c===void 0&&(c=new Jt(new Or(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:ir(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(j0.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ku),c.material.toneMapped=Ge.getTransfer(M.colorSpace)!==et,(f!==M||d!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,u=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Jt(new Bs(2,2),new Qt({name:"BackgroundMaterial",uniforms:ir(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(M.colorSpace)!==et,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,f=M,d=M.version,u=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,R){T.getRGB(ps,Fu(n)),t.buffers.color.setClear(ps.r,ps.g,ps.b,R,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,R=1){a.set(T),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:_,addToRenderList:S,dispose:p}}function tx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(N,B,H,L,k){let Y=!1;const W=d(N,L,H,B);s!==W&&(s=W,c(s.object)),Y=h(N,L,H,k),Y&&_(N,L,H,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(N,B,H,L),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function f(N){return n.deleteVertexArray(N)}function d(N,B,H,L){const k=L.wireframe===!0;let Y=i[B.id];Y===void 0&&(Y={},i[B.id]=Y);const W=N.isInstancedMesh===!0?N.id:0;let ie=Y[W];ie===void 0&&(ie={},Y[W]=ie);let $=ie[H.id];$===void 0&&($={},ie[H.id]=$);let ee=$[k];return ee===void 0&&(ee=u(l()),$[k]=ee),ee}function u(N){const B=[],H=[],L=[];for(let k=0;k<t;k++)B[k]=0,H[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:H,attributeDivisors:L,object:N,attributes:{},index:null}}function h(N,B,H,L){const k=s.attributes,Y=B.attributes;let W=0;const ie=H.getAttributes();for(const $ in ie)if(ie[$].location>=0){const ne=k[$];let Re=Y[$];if(Re===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(Re=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(Re=N.instanceColor)),ne===void 0||ne.attribute!==Re||Re&&ne.data!==Re.data)return!0;W++}return s.attributesNum!==W||s.index!==L}function _(N,B,H,L){const k={},Y=B.attributes;let W=0;const ie=H.getAttributes();for(const $ in ie)if(ie[$].location>=0){let ne=Y[$];ne===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor));const Re={};Re.attribute=ne,ne&&ne.data&&(Re.data=ne.data),k[$]=Re,W++}s.attributes=k,s.attributesNum=W,s.index=L}function S(){const N=s.newAttributes;for(let B=0,H=N.length;B<H;B++)N[B]=0}function m(N){p(N,0)}function p(N,B){const H=s.newAttributes,L=s.enabledAttributes,k=s.attributeDivisors;H[N]=1,L[N]===0&&(n.enableVertexAttribArray(N),L[N]=1),k[N]!==B&&(n.vertexAttribDivisor(N,B),k[N]=B)}function T(){const N=s.newAttributes,B=s.enabledAttributes;for(let H=0,L=B.length;H<L;H++)B[H]!==N[H]&&(n.disableVertexAttribArray(H),B[H]=0)}function R(N,B,H,L,k,Y,W){W===!0?n.vertexAttribIPointer(N,B,H,k,Y):n.vertexAttribPointer(N,B,H,L,k,Y)}function M(N,B,H,L){S();const k=L.attributes,Y=H.getAttributes(),W=B.defaultAttributeValues;for(const ie in Y){const $=Y[ie];if($.location>=0){let ee=k[ie];if(ee===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor)),ee!==void 0){const ne=ee.normalized,Re=ee.itemSize,Te=e.get(ee);if(Te===void 0)continue;const at=Te.buffer,We=Te.type,Ke=Te.bytesPerElement,Z=We===n.INT||We===n.UNSIGNED_INT||ee.gpuType===Fo;if(ee.isInterleavedBufferAttribute){const j=ee.data,ve=j.stride,Ie=ee.offset;if(j.isInstancedInterleavedBuffer){for(let ge=0;ge<$.locationSize;ge++)p($.location+ge,j.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ge=0;ge<$.locationSize;ge++)m($.location+ge);n.bindBuffer(n.ARRAY_BUFFER,at);for(let ge=0;ge<$.locationSize;ge++)R($.location+ge,Re/$.locationSize,We,ne,ve*Ke,(Ie+Re/$.locationSize*ge)*Ke,Z)}else{if(ee.isInstancedBufferAttribute){for(let j=0;j<$.locationSize;j++)p($.location+j,ee.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let j=0;j<$.locationSize;j++)m($.location+j);n.bindBuffer(n.ARRAY_BUFFER,at);for(let j=0;j<$.locationSize;j++)R($.location+j,Re/$.locationSize,We,ne,Re*Ke,Re/$.locationSize*j*Ke,Z)}}else if(W!==void 0){const ne=W[ie];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv($.location,ne);break;case 3:n.vertexAttrib3fv($.location,ne);break;case 4:n.vertexAttrib4fv($.location,ne);break;default:n.vertexAttrib1fv($.location,ne)}}}}T()}function y(){w();for(const N in i){const B=i[N];for(const H in B){const L=B[H];for(const k in L){const Y=L[k];for(const W in Y)f(Y[W].object),delete Y[W];delete L[k]}}delete i[N]}}function b(N){if(i[N.id]===void 0)return;const B=i[N.id];for(const H in B){const L=B[H];for(const k in L){const Y=L[k];for(const W in Y)f(Y[W].object),delete Y[W];delete L[k]}}delete i[N.id]}function A(N){for(const B in i){const H=i[B];for(const L in H){const k=H[L];if(k[N.id]===void 0)continue;const Y=k[N.id];for(const W in Y)f(Y[W].object),delete Y[W];delete k[N.id]}}}function v(N){for(const B in i){const H=i[B],L=N.isInstancedMesh===!0?N.id:0,k=H[L];if(k!==void 0){for(const Y in k){const W=k[Y];for(const ie in W)f(W[ie].object),delete W[ie];delete k[Y]}delete H[L],Object.keys(H).length===0&&delete i[B]}}}function w(){I(),a=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:I,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:m,disableUnusedAttributes:T}}function nx(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,f){f!==0&&(n.drawArraysInstanced(i,l,c,f),t.update(c,i,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let h=0;h<f;h++)u+=c[h];t.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function ix(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==xn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const v=A===Ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ln&&A!==Cn&&!v&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(Pe("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:R,maxFragmentUniforms:M,maxSamples:y,samples:b}}function rx(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ii,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const h=d.length!==0||u||i!==0||r;return r=u,i=d.length,h},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=f(d,u,0)},this.setState=function(d,u,h){const _=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?f(null):c();else{const T=s?0:i,R=T*4;let M=p.clippingState||null;l.value=M,M=f(_,u,R,h);for(let y=0;y!==R;++y)M[y]=t[y];p.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,u,h,_){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const p=h+S*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,M=h;R!==S;++R,M+=4)a.copy(d[R]).applyMatrix4(T,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const Zi=4,sx=6,ax=20,ox=256,gr=new Ou,cl=new $e;let ya=null,ba=0,Ea=0,wa=!1;const cx=new F,mi=new F;class ll{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=cx}=s;ya=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ya,ba,Ea),this._renderer.xr.enabled=wa,e.scissorTest=!1,Vi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bi||e.mapping===nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ya=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Ln,format:xn,colorSpace:Rs,depthBuffer:!1},r=ul(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ul(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lx(s)),this._blurMaterial=fx(s,e,t),this._ggxMaterial=ux(s,e,t)}return r}_compileMaterial(e){const t=new Jt(new Wt,e);this._renderer.compile(t,gr)}_sceneToCubeUV(e,t,i,r,s){const l=new _n(90,1,t,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(cl),d.toneMapping=In,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Jt(new Or,new Zo({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let p=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,p=!0):(m.color.copy(cl),p=!0);for(let R=0;R<6;R++){const M=R%3;M===0?(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[R],s.y,s.z)):M===1?(l.up.set(0,0,c[R]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[R],s.z)):(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[R]));const y=this._cubeSize;Vi(r,M*y,R>2?y:0,y,y),d.setRenderTarget(r),p&&d.render(S,l),d.render(e,l)}d.toneMapping=h,d.autoClear=u,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===bi||e.mapping===nr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Vi(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,gr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-f*f),u=c*1.25,h=d*u,{_lodMax:_}=this,S=this._sizeLods[i],m=3*S*(i>_-Zi?i-_+Zi:0),p=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=_-t,Vi(s,m,p,3*S,2*S),r.setRenderTarget(s),r.render(o,gr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Vi(e,m,p,3*S,2*S),r.setRenderTarget(e),r.render(o,gr)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,t,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const f=this._sizeLods[r],d=3*f*(r>this._lodMax-Zi?r-this._lodMax+Zi:0),u=4*(this._cubeSize-f);Vi(t,d,u,3*f,2*f),a.setRenderTarget(t),a.render(l,gr)}}function lx(n){const e=[],t=[];let i=n;const r=n-Zi+1+sx;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,f=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,h=3,_=new Float32Array(h*u*d),S=new Float32Array(h*u*d);for(let p=0;p<d;p++){const T=p%3*2/3-1,R=p>2?0:-1,M=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];_.set(M,h*u*p);for(let y=0;y<u;y++){const b=f[y*2]*2-1,A=f[y*2+1]*2-1;p===0?mi.set(1,A,b):p===1?mi.set(-b,1,-A):p===2?mi.set(-b,A,1):p===3?mi.set(-1,A,-b):p===4?mi.set(-b,-1,A):mi.set(b,A,-1),mi.toArray(S,(p*u+y)*h)}}const m=new Wt;m.setAttribute("position",new Mn(_,h)),m.setAttribute("outputDirection",new Mn(S,h)),t.push(new Jt(m,null)),i>Zi&&i--}return{lodMeshes:t,sizeLods:e}}function ul(n,e,t){const i=new Sn(n,e,t);return i.texture.mapping=zs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vi(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ux(n,e,t){return new Qt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ox,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ks(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function fx(n,e,t){return new Qt({name:"SphericalGaussianBlur",defines:{SAMPLES:ax,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ks(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function fl(){return new Qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ks(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function dl(){return new Qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function ks(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Gu extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Nu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Or(5,5,5),s=new Qt({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:Xn});s.uniforms.tEquirect.value=t;const a=new Jt(r,s),o=t.minFilter;return t.minFilter===xi&&(t.minFilter=kt),new m_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function dx(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,h=!1){return u==null?null:h?a(u):s(u)}function s(u){if(u&&u.isTexture){const h=u.mapping;if(h===qs||h===Ys)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const S=new Gu(_.height);return S.fromEquirectangularTexture(n,u),e.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const h=u.mapping,_=h===qs||h===Ys,S=h===bi||h===nr;if(_||S){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new ll(n)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const T=u.image;return _&&T&&T.height>0||S&&T&&l(T)?(i===null&&(i=new ll(n)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",f),m.texture):null}}}return u}function o(u,h){return h===qs?u.mapping=bi:h===Ys&&(u.mapping=nr),u}function l(u){let h=0;const _=6;for(let S=0;S<_;S++)u[S]!==void 0&&h++;return h===_}function c(u){const h=u.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function f(u){const h=u.target;h.removeEventListener("dispose",f);const _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function hx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ji("WebGLRenderer: "+i+" extension not supported."),r}}}function px(n,e,t,i){const r={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete r[u.id];const h=s.get(u);h&&(e.remove(h),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const h in u)e.update(u[h],n.ARRAY_BUFFER)}function c(d){const u=[],h=d.index,_=d.attributes.position;let S=0;if(_===void 0)return;if(h!==null){const T=h.array;S=h.version;for(let R=0,M=T.length;R<M;R+=3){const y=T[R+0],b=T[R+1],A=T[R+2];u.push(y,b,b,A,A,y)}}else{const T=_.array;S=_.version;for(let R=0,M=T.length/3-1;R<M;R+=3){const y=R+0,b=R+1,A=R+2;u.push(y,b,b,A,A,y)}}const m=new(_.count>=65535?Xo:Du)(u,1);m.version=S;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function f(d){const u=s.get(d);if(u){const h=d.index;h!==null&&u.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function mx(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,s,d*a),t.update(u,i,1)}function c(d,u,h){h!==0&&(n.drawElementsInstanced(i,u,s,d*a,h),t.update(u,i,h))}function f(d,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,h);let S=0;for(let m=0;m<h;m++)S+=u[m];t.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function gx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function _x(n,e,t){const i=new WeakMap,r=new st;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let w=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const h=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let R=0;h===!0&&(R=1),_===!0&&(R=2),S===!0&&(R=3);let M=o.attributes.position.count*R,y=1;M>e.maxTextureSize&&(y=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const b=new Float32Array(M*y*4*d),A=new Cu(b,M,y,d);A.type=Cn,A.needsUpdate=!0;const v=R*4;for(let I=0;I<d;I++){const N=m[I],B=p[I],H=T[I],L=M*y*4*I;for(let k=0;k<N.count;k++){const Y=k*v;h===!0&&(r.fromBufferAttribute(N,k),b[L+Y+0]=r.x,b[L+Y+1]=r.y,b[L+Y+2]=r.z,b[L+Y+3]=0),_===!0&&(r.fromBufferAttribute(B,k),b[L+Y+4]=r.x,b[L+Y+5]=r.y,b[L+Y+6]=r.z,b[L+Y+7]=0),S===!0&&(r.fromBufferAttribute(H,k),b[L+Y+8]=r.x,b[L+Y+9]=r.y,b[L+Y+10]=r.z,b[L+Y+11]=H.itemSize===4?r.w:1)}}u={count:d,texture:A,size:new Ye(M,y)},i.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let h=0;for(let S=0;S<c.length;S++)h+=c[S];const _=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function vx(n,e,t,i,r){let s=new WeakMap;function a(c){const f=r.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==f&&(h.update(),s.set(h,f))}return u}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const xx={[hu]:"LINEAR_TONE_MAPPING",[pu]:"REINHARD_TONE_MAPPING",[mu]:"CINEON_TONE_MAPPING",[gu]:"ACES_FILMIC_TONE_MAPPING",[vu]:"AGX_TONE_MAPPING",[xu]:"NEUTRAL_TONE_MAPPING",[_u]:"CUSTOM_TONE_MAPPING"};function Sx(n,e,t,i,r,s){const a=new Sn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Wt;c.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new zt([0,2,0,0,2,0],2));const f=new d_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Jt(c,f),u=new Ou(-1,1,1,-1,0,1);let h=null,_=null,S=!1,m,p=null,T=[],R=!1;this.setSize=function(M,y){a.setSize(M,y),o!==null&&o.setSize(M,y),l!==null&&l.setSize(M,y);for(let b=0;b<T.length;b++){const A=T[b];A.setSize&&A.setSize(M,y)}},this.setEffects=function(M){T=M,R=T.length>0&&T[0].isRenderPass===!0;const y=a.width,b=a.height;T.length>0&&o===null&&(o=new Sn(y,b,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),l=new Sn(y,b,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<T.length;A++){const v=T[A];v.setSize&&v.setSize(y,b)}},this.begin=function(M,y){if(S||M.toneMapping===In&&T.length===0)return!1;if(p=y,y!==null){const b=y.width,A=y.height;(a.width!==b||a.height!==A)&&this.setSize(b,A)}return R===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=In,!0},this.hasRenderPass=function(){return R},this.end=function(M,y){M.toneMapping=m,S=!0;let b=a,A=o;for(let v=0;v<T.length;v++){const w=T[v];w.enabled!==!1&&(w.render(M,A,b,y),w.needsSwap!==!1&&(b=A,A=A===o?l:o))}if(h!==M.outputColorSpace||_!==M.toneMapping){h=M.outputColorSpace,_=M.toneMapping,f.defines={},Ge.getTransfer(h)===et&&(f.defines.SRGB_TRANSFER="");const v=xx[_];v&&(f.defines[v]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(p),M.render(d,u),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}const Vu=new Xt,yo=new Nr(1,1),Hu=new Cu,Wu=new kg,Xu=new Nu,hl=[],pl=[],ml=new Float32Array(16),gl=new Float32Array(9),_l=new Float32Array(4);function lr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=hl[r];if(s===void 0&&(s=new Float32Array(r),hl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Gs(n,e){let t=pl[e];t===void 0&&(t=new Int32Array(e),pl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Mx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function Ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function wx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;_l.set(i),n.uniformMatrix2fv(this.addr,!1,_l),At(t,i)}}function Tx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;gl.set(i),n.uniformMatrix3fv(this.addr,!1,gl),At(t,i)}}function Ax(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;ml.set(i),n.uniformMatrix4fv(this.addr,!1,ml),At(t,i)}}function Rx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Cx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function Px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function Ix(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function Dx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function Nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function Ux(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function Fx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(yo.compareFunction=t.isReversedDepthBuffer()?Ho:Vo,s=yo):s=Vu,t.setTexture2D(e||s,r)}function Ox(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Wu,r)}function zx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Xu,r)}function Bx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Hu,r)}function kx(n){switch(n){case 5126:return Mx;case 35664:return yx;case 35665:return bx;case 35666:return Ex;case 35674:return wx;case 35675:return Tx;case 35676:return Ax;case 5124:case 35670:return Rx;case 35667:case 35671:return Cx;case 35668:case 35672:return Px;case 35669:case 35673:return Ix;case 5125:return Dx;case 36294:return Lx;case 36295:return Nx;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Fx;case 35679:case 36299:case 36307:return Ox;case 35680:case 36300:case 36308:case 36293:return zx;case 36289:case 36303:case 36311:case 36292:return Bx}}function Gx(n,e){n.uniform1fv(this.addr,e)}function Vx(n,e){const t=lr(e,this.size,2);n.uniform2fv(this.addr,t)}function Hx(n,e){const t=lr(e,this.size,3);n.uniform3fv(this.addr,t)}function Wx(n,e){const t=lr(e,this.size,4);n.uniform4fv(this.addr,t)}function Xx(n,e){const t=lr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $x(n,e){const t=lr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Zx(n,e){const t=lr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function qx(n,e){n.uniform1iv(this.addr,e)}function Yx(n,e){n.uniform2iv(this.addr,e)}function Kx(n,e){n.uniform3iv(this.addr,e)}function Jx(n,e){n.uniform4iv(this.addr,e)}function Qx(n,e){n.uniform1uiv(this.addr,e)}function jx(n,e){n.uniform2uiv(this.addr,e)}function eS(n,e){n.uniform3uiv(this.addr,e)}function tS(n,e){n.uniform4uiv(this.addr,e)}function nS(n,e,t){const i=this.cache,r=e.length,s=Gs(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=yo:a=Vu;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function iS(n,e,t){const i=this.cache,r=e.length,s=Gs(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Wu,s[a])}function rS(n,e,t){const i=this.cache,r=e.length,s=Gs(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Xu,s[a])}function sS(n,e,t){const i=this.cache,r=e.length,s=Gs(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Hu,s[a])}function aS(n){switch(n){case 5126:return Gx;case 35664:return Vx;case 35665:return Hx;case 35666:return Wx;case 35674:return Xx;case 35675:return $x;case 35676:return Zx;case 5124:case 35670:return qx;case 35667:case 35671:return Yx;case 35668:case 35672:return Kx;case 35669:case 35673:return Jx;case 5125:return Qx;case 36294:return jx;case 36295:return eS;case 36296:return tS;case 35678:case 36198:case 36298:case 36306:case 35682:return nS;case 35679:case 36299:case 36307:return iS;case 35680:case 36300:case 36308:case 36293:return rS;case 36289:case 36303:case 36311:case 36292:return sS}}class oS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=kx(t.type)}}class cS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aS(t.type)}}class lS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function vl(n,e){n.seq.push(e),n.map[e.id]=e}function uS(n,e,t){const i=n.name,r=i.length;for(Ta.lastIndex=0;;){const s=Ta.exec(i),a=Ta.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){vl(t,c===void 0?new oS(o,n,e):new cS(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new lS(o),vl(t,d)),t=d}}}class Ms{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);uS(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function xl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const fS=37297;let dS=0;function hS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Sl=new De;function pS(n){Ge._getMatrix(Sl,Ge.workingColorSpace,n);const e=`mat3( ${Sl.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(n)){case Cs:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ml(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+hS(n.getShaderSource(e),o)}else return s}function mS(n,e){const t=pS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const gS={[hu]:"Linear",[pu]:"Reinhard",[mu]:"Cineon",[gu]:"ACESFilmic",[vu]:"AgX",[xu]:"Neutral",[_u]:"Custom"};function _S(n,e){const t=gS[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ms=new F;function vS(){Ge.getLuminanceCoefficients(ms);const n=ms.x.toFixed(4),e=ms.y.toFixed(4),t=ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function SS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function MS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function yr(n){return n!==""}function yl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yS=/^[ \t]*#include +<([\w\d./]+)>/gm;function bo(n){return n.replace(yS,ES)}const bS=new Map;function ES(n,e){let t=Ue[e];if(t===void 0){const i=bS.get(e);if(i!==void 0)t=Ue[i],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return bo(t)}const wS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function El(n){return n.replace(wS,TS)}function TS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wl(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const AS={[gs]:"SHADOWMAP_TYPE_PCF",[Sr]:"SHADOWMAP_TYPE_VSM"};function RS(n){return AS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const CS={[bi]:"ENVMAP_TYPE_CUBE",[nr]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE_UV"};function PS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":CS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const IS={[nr]:"ENVMAP_MODE_REFRACTION"};function DS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":IS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const LS={[du]:"ENVMAP_BLENDING_MULTIPLY",[_g]:"ENVMAP_BLENDING_MIX",[vg]:"ENVMAP_BLENDING_ADD"};function NS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":LS[n.combine]||"ENVMAP_BLENDING_NONE"}function US(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function FS(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=RS(t),c=PS(t),f=DS(t),d=NS(t),u=US(t),h=xS(t),_=SS(s),S=r.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(yr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(yr).join(`
`),p.length>0&&(p+=`
`)):(m=[wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),p=[wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?Ue.tonemapping_pars_fragment:"",t.toneMapping!==In?_S("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,mS("linearToOutputTexel",t.outputColorSpace),vS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),a=bo(a),a=yl(a,t),a=bl(a,t),o=bo(o),o=yl(o,t),o=bl(o,t),a=El(a),o=El(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const R=T+m+a,M=T+p+o,y=xl(r,r.VERTEX_SHADER,R),b=xl(r,r.FRAGMENT_SHADER,M);r.attachShader(S,y),r.attachShader(S,b),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function A(N){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(S)||"",H=r.getShaderInfoLog(y)||"",L=r.getShaderInfoLog(b)||"",k=B.trim(),Y=H.trim(),W=L.trim();let ie=!0,$=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,y,b);else{const ee=Ml(r,y,"vertex"),ne=Ml(r,b,"fragment");qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+ee+`
`+ne)}else k!==""?Pe("WebGLProgram: Program Info Log:",k):(Y===""||W==="")&&($=!1);$&&(N.diagnostics={runnable:ie,programLog:k,vertexShader:{log:Y,prefix:m},fragmentShader:{log:W,prefix:p}})}r.deleteShader(y),r.deleteShader(b),v=new Ms(r,S),w=MS(r,S)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(S,fS)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dS++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=y,this.fragmentShader=b,this}let OS=0;class zS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new BS(e),t.set(e,i)),i}}class BS{constructor(e){this.id=OS++,this.code=e,this.usedTimes=0}}function kS(n){return n===Ei||n===Ts||n===As}function GS(n,e,t,i,r,s){const a=new Pu,o=new zS,l=new Set,c=[],f=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function S(v,w,I,N,B,H){const L=N.fog,k=B.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ie=e.get(v.envMap||Y,W),$=ie&&ie.mapping===zs?ie.image.height:null,ee=h[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Pe("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const ne=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Re=ne!==void 0?ne.length:0;let Te=0;k.morphAttributes.position!==void 0&&(Te=1),k.morphAttributes.normal!==void 0&&(Te=2),k.morphAttributes.color!==void 0&&(Te=3);let at,We,Ke,Z;if(ee){const ct=Rn[ee];at=ct.vertexShader,We=ct.fragmentShader}else{at=v.vertexShader,We=v.fragmentShader;const ct=o.getVertexShaderStage(v),Je=o.getFragmentShaderStage(v);o.update(v,ct,Je),Ke=ct.id,Z=Je.id}const j=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),Ie=B.isInstancedMesh===!0,ge=B.isBatchedMesh===!0,Fe=!!v.map,wt=!!v.matcap,ze=!!ie,Ze=!!v.aoMap,ot=!!v.lightMap,ke=!!v.bumpMap&&v.wireframe===!1,ht=!!v.normalMap,Rt=!!v.displacementMap,Zt=!!v.emissiveMap,gt=!!v.metalnessMap,yt=!!v.roughnessMap,D=v.anisotropy>0,Nt=v.clearcoat>0,je=v.dispersion>0,E=v.retroreflectivity>0,g=v.iridescence>0,U=v.sheen>0,G=v.transmission>0,X=D&&!!v.anisotropyMap,re=Nt&&!!v.clearcoatMap,se=Nt&&!!v.clearcoatNormalMap,q=Nt&&!!v.clearcoatRoughnessMap,Q=g&&!!v.iridescenceMap,ae=g&&!!v.iridescenceThicknessMap,be=U&&!!v.sheenColorMap,ue=U&&!!v.sheenRoughnessMap,oe=!!v.specularMap,Ee=!!v.specularColorMap,Ce=!!v.specularIntensityMap,Le=G&&!!v.transmissionMap,P=G&&!!v.thicknessMap,ce=!!v.gradientMap,J=!!v.alphaMap,le=v.alphaTest>0,pe=!!v.alphaHash,te=!!v.extensions;let Ae=In;v.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ae=n.toneMapping);const Me={shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:at,fragmentShader:We,defines:v.defines,customVertexShaderID:Ke,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:ge,batchingColor:ge&&B._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&B.instanceColor!==null,instancingMorph:Ie&&B.morphTexture!==null,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Fe,matcap:wt,envMap:ze,envMapMode:ze&&ie.mapping,envMapCubeUVHeight:$,aoMap:Ze,lightMap:ot,bumpMap:ke,normalMap:ht,displacementMap:Rt,emissiveMap:Zt,normalMapObjectSpace:ht&&v.normalMapType===Mg,normalMapTangentSpace:ht&&v.normalMapType===Uc,packedNormalMap:ht&&v.normalMapType===Uc&&kS(v.normalMap.format),metalnessMap:gt,roughnessMap:yt,anisotropy:D,anisotropyMap:X,clearcoat:Nt,clearcoatMap:re,clearcoatNormalMap:se,clearcoatRoughnessMap:q,dispersion:je,retroreflection:E,iridescence:g,iridescenceMap:Q,iridescenceThicknessMap:ae,sheen:U,sheenColorMap:be,sheenRoughnessMap:ue,specularMap:oe,specularColorMap:Ee,specularIntensityMap:Ce,transmission:G,transmissionMap:Le,thicknessMap:P,gradientMap:ce,opaque:v.transparent===!1&&v.blending===wr&&v.alphaToCoverage===!1,alphaMap:J,alphaTest:le,alphaHash:pe,combine:v.combine,mapUv:Fe&&_(v.map.channel),aoMapUv:Ze&&_(v.aoMap.channel),lightMapUv:ot&&_(v.lightMap.channel),bumpMapUv:ke&&_(v.bumpMap.channel),normalMapUv:ht&&_(v.normalMap.channel),displacementMapUv:Rt&&_(v.displacementMap.channel),emissiveMapUv:Zt&&_(v.emissiveMap.channel),metalnessMapUv:gt&&_(v.metalnessMap.channel),roughnessMapUv:yt&&_(v.roughnessMap.channel),anisotropyMapUv:X&&_(v.anisotropyMap.channel),clearcoatMapUv:re&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ue&&_(v.sheenRoughnessMap.channel),specularMapUv:oe&&_(v.specularMap.channel),specularColorMapUv:Ee&&_(v.specularColorMap.channel),specularIntensityMapUv:Ce&&_(v.specularIntensityMap.channel),transmissionMapUv:Le&&_(v.transmissionMap.channel),thicknessMapUv:P&&_(v.thicknessMap.channel),alphaMapUv:J&&_(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ht||D),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(Fe||J),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&ht===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Te,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Fe&&v.map.isVideoTexture===!0&&Ge.getTransfer(v.map.colorSpace)===et,decodeVideoTextureEmissive:Zt&&v.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(v.emissiveMap.colorSpace)===et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===cn,flipSided:v.side===jt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:te&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&v.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function m(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)w.push(I),w.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(p(w,v),T(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function p(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function T(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function R(v){const w=h[v.type];let I;if(w){const N=Rn[w];I=l_.clone(N.uniforms)}else I=v.uniforms;return I}function M(v,w){let I=f.get(w);return I!==void 0?++I.usedTimes:(I=new FS(n,w,v,r),c.push(I),f.set(w,I)),I}function y(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),f.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function A(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:R,acquireProgram:M,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:A}}function VS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function HS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Tl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Al(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function o(u,h,_,S,m,p){let T=n[e];return T===void 0?(T={id:u.id,object:u,geometry:h,material:_,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:p},n[e]=T):(T.id=u.id,T.object=u,T.geometry=h,T.material=_,T.materialVariant=a(u),T.groupOrder=S,T.renderOrder=u.renderOrder,T.z=m,T.group=p),e++,T}function l(u,h,_,S,m,p,T){T.reversedDepth===!0&&(m=-m);const R=o(u,h,_,S,m,p);_.transmission>0?i.push(R):_.transparent===!0?r.push(R):t.push(R)}function c(u,h,_,S,m,p){const T=o(u,h,_,S,m,p);_.transmission>0?i.unshift(T):_.transparent===!0?r.unshift(T):t.unshift(T)}function f(u,h){t.length>1&&t.sort(u||HS),i.length>1&&i.sort(h||Tl),r.length>1&&r.sort(h||Tl)}function d(){for(let u=e,h=n.length;u<h;u++){const _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:f}}function WS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Al,n.set(i,[a])):r>=s.length?(a=new Al,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function XS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new $e};break;case"SpotLight":t={position:new F,direction:new F,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function $S(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ZS=0;function qS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function YS(n){const e=new XS,t=$S(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new tt,a=new tt;function o(c){let f=0,d=0,u=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let h=0,_=0,S=0,m=0,p=0,T=0,R=0,M=0,y=0,b=0,A=0,v=0,w=0,I=0;c.sort(qS);for(let B=0,H=c.length;B<H;B++){const L=c[B],k=L.color,Y=L.intensity,W=L.distance;let ie=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ei?ie=L.shadow.map.texture:ie=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)f+=k.r*Y,d+=k.g*Y,u+=k.b*Y;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],Y);I++}else if(L.isSunLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,ne=t.get(L);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),i.sunShadow[_]=ne,i.sunShadowMap[_]=ie;const Re=ee.getViewportCount();for(let Te=0;Te<Re;Te++)i.sunShadowMatrix[S+Te]=ee.getMatrix(Te),i.sunShadowCascade[S+Te]=ee._cascadeData[Te];S+=Re,_++}i.sun[h]=$,h++}else if(L.isDirectionalLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,ne=t.get(L);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.directionalShadow[m]=ne,i.directionalShadowMap[m]=ie,i.directionalShadowMatrix[m]=L.shadow.matrix,y++}i.directional[m]=$,m++}else if(L.isSpotLight){const $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(k).multiplyScalar(Y),$.distance=W,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[T]=$;const ee=L.shadow;if(L.map&&(i.spotLightMap[v]=L.map,v++,ee.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[T]=ee.matrix,L.castShadow){const ne=t.get(L);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.spotShadow[T]=ne,i.spotShadowMap[T]=ie,A++}T++}else if(L.isRectAreaLight){const $=e.get(L);$.color.copy(k).multiplyScalar(Y),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[R]=$,R++}else if(L.isPointLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){const ee=L.shadow,ne=t.get(L);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,ne.shadowCameraNear=ee.camera.near,ne.shadowCameraFar=ee.camera.far,i.pointShadow[p]=ne,i.pointShadowMap[p]=ie,i.pointShadowMatrix[p]=L.shadow.matrix,b++}i.point[p]=$,p++}else if(L.isHemisphereLight){const $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(Y),$.groundColor.copy(L.groundColor).multiplyScalar(Y),i.hemi[M]=$,M++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=u;const N=i.hash;(N.sunLength!==h||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==T||N.rectAreaLength!==R||N.hemiLength!==M||N.numSunShadows!==_||N.numDirectionalShadows!==y||N.numPointShadows!==b||N.numSpotShadows!==A||N.numSpotMaps!==v||N.numLightProbes!==I)&&(i.sun.length=h,i.directional.length=m,i.spot.length=T,i.rectArea.length=R,i.point.length=p,i.hemi.length=M,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.directionalShadowMatrix.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+v-w,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=I,N.sunLength=h,N.directionalLength=m,N.pointLength=p,N.spotLength=T,N.rectAreaLength=R,N.hemiLength=M,N.numSunShadows=_,N.numDirectionalShadows=y,N.numPointShadows=b,N.numSpotShadows=A,N.numSpotMaps=v,N.numLightProbes=I,i.version=ZS++)}function l(c,f){let d=0,u=0,h=0,_=0,S=0,m=0;const p=f.matrixWorldInverse;for(let T=0,R=c.length;T<R;T++){const M=c[T];if(M.isSunLight){const y=i.sun[d];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),d++}else if(M.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),u++}else if(M.isSpotLight){const y=i.spot[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),_++}else if(M.isRectAreaLight){const y=i.rectArea[S];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),h++}else if(M.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Rl(n){const e=new YS(n),t=[],i=[],r=[];function s(u){d.camera=u,t.length=0,i.length=0,r.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function f(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function KS(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Rl(n),e.set(r,[o])):s>=a.length?(o=new Rl(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const JS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QS=`uniform sampler2D shadow_pass;
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
}`,jS=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],eM=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Cl=new tt,_r=new F,Aa=new F;function tM(n,e,t){let i=new Lu;const r=new Ye,s=new Ye,a=new st,o=new h_,l=new p_,c={},f=t.maxTextureSize,d={[yi]:jt,[jt]:yi,[cn]:cn},u=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:JS,fragmentShader:QS}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const _=new Wt;_.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Jt(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gs;let p=this.type;this.render=function(b,A,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Qm&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gs);const w=n.getRenderTarget(),I=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Xn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=p!==this.type;H&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(k=>k.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,k=b.length;L<k;L++){const Y=b[L],W=Y.shadow;if(W===void 0){Pe("WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ie=W.getFrameExtents();r.multiply(ie),s.copy(W.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/ie.x),r.x=s.x*ie.x,W.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/ie.y),r.y=s.y*ie.y,W.mapSize.y=s.y));const $=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=$,W.map===null||H===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Sr){if(Y.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Sn(r.x,r.y,{format:Ei,type:Ln,minFilter:kt,magFilter:kt,generateMipmaps:!1}),W.map.texture.name=Y.name+".shadowMap",W.map.depthTexture=new Nr(r.x,r.y,Cn),W.map.depthTexture.name=Y.name+".shadowMapDepth",W.map.depthTexture.format=Zn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Lt,W.map.depthTexture.magFilter=Lt}else Y.isPointLight?(W.map=new Gu(r.x),W.map.depthTexture=new o_(r.x,Dn)):(W.map=new Sn(r.x,r.y),W.map.depthTexture=new Nr(r.x,r.y,Dn)),W.map.depthTexture.name=Y.name+".shadowMap",W.map.depthTexture.format=Zn,this.type===gs?(W.map.depthTexture.compareFunction=$?Ho:Vo,W.map.depthTexture.minFilter=kt,W.map.depthTexture.magFilter=kt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Lt,W.map.depthTexture.magFilter=Lt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==r.x||W.map.height!==r.y)&&W.map.setSize(r.x,r.y);const ee=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Y.isPointLight!==!0&&W.updateMatrices(Y,v);for(let ne=0;ne<ee;ne++){const Re=W.getCamera(ne);if(Y.isPointLight){const Te=W.camera,at=W.matrix,We=Y.distance||Te.far;We!==Te.far&&(Te.far=We,Te.updateProjectionMatrix()),_r.setFromMatrixPosition(Y.matrixWorld),Te.position.copy(_r),Aa.copy(Te.position),Aa.add(jS[ne]),Te.up.copy(eM[ne]),Te.lookAt(Aa),Te.updateMatrixWorld(),at.makeTranslation(-_r.x,-_r.y,-_r.z),Cl.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Cl,Te.coordinateSystem,Te.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,ne),n.clear();else{ne===0&&(n.setRenderTarget(W.map),n.clear());const Te=W.getViewport(ne);a.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),B.viewport(a)}i=W.getFrustum(ne),M(A,v,Re,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Sr&&T(W,v),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,I,N)};function T(b,A){const v=e.update(S);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null?b.mapPass=new Sn(r.x,r.y,{format:Ei,type:Ln}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(A,null,v,u,S,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(A,null,v,h,S,null)}function R(b,A,v,w){let I=null;const N=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)I=N;else if(I=v.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const B=I.uuid,H=A.uuid;let L=c[B];L===void 0&&(L={},c[B]=L);let k=L[H];k===void 0&&(k=I.clone(),L[H]=k,A.addEventListener("dispose",y)),I=k}if(I.visible=A.visible,I.wireframe=A.wireframe,w===Sr?I.side=A.shadowSide!==null?A.shadowSide:A.side:I.side=A.shadowSide!==null?A.shadowSide:d[A.side],I.alphaMap=A.alphaMap,I.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,I.map=A.map,I.clipShadows=A.clipShadows,I.clippingPlanes=A.clippingPlanes,I.clipIntersection=A.clipIntersection,I.displacementMap=A.displacementMap,I.displacementScale=A.displacementScale,I.displacementBias=A.displacementBias,I.wireframeLinewidth=A.wireframeLinewidth,I.linewidth=A.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const B=n.properties.get(I);B.light=v}return I}function M(b,A,v,w,I){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===Sr)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const H=e.update(b),L=b.material;if(Array.isArray(L)){const k=H.groups;for(let Y=0,W=k.length;Y<W;Y++){const ie=k[Y],$=L[ie.materialIndex];if($&&$.visible){const ee=R(b,$,w,I);b.onBeforeShadow(n,b,A,v,H,ee,ie),n.renderBufferDirect(v,null,H,ee,b,ie),b.onAfterShadow(n,b,A,v,H,ee,ie)}}}else if(L.visible){const k=R(b,L,w,I);b.onBeforeShadow(n,b,A,v,H,k,null),n.renderBufferDirect(v,null,H,k,b,null),b.onAfterShadow(n,b,A,v,H,k,null)}}const B=b.children;for(let H=0,L=B.length;H<L;H++)M(B[H],A,v,w,I)}function y(b){b.target.removeEventListener("dispose",y);for(const v in c){const w=c[v],I=b.target.uuid;I in w&&(w[I].dispose(),delete w[I])}}}function nM(n,e){function t(){let P=!1;const ce=new st;let J=null;const le=new st(0,0,0,0);return{setMask:function(pe){J!==pe&&!P&&(n.colorMask(pe,pe,pe,pe),J=pe)},setLocked:function(pe){P=pe},setClear:function(pe,te,Ae,Me,ct){ct===!0&&(pe*=Me,te*=Me,Ae*=Me),ce.set(pe,te,Ae,Me),le.equals(ce)===!1&&(n.clearColor(pe,te,Ae,Me),le.copy(ce))},reset:function(){P=!1,J=null,le.set(-1,0,0,0)}}}function i(){let P=!1,ce=!1,J=null,le=null,pe=null;return{setReversed:function(te){if(ce!==te){const Ae=e.get("EXT_clip_control");te?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ce=te;const Me=pe;pe=null,this.setClear(Me)}},getReversed:function(){return ce},setTest:function(te){te?j(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(te){J!==te&&!P&&(n.depthMask(te),J=te)},setFunc:function(te){if(ce&&(te=Lg[te]),le!==te){switch(te){case Na:n.depthFunc(n.NEVER);break;case Ua:n.depthFunc(n.ALWAYS);break;case Fa:n.depthFunc(n.LESS);break;case Ir:n.depthFunc(n.LEQUAL);break;case Oa:n.depthFunc(n.EQUAL);break;case za:n.depthFunc(n.GEQUAL);break;case Ba:n.depthFunc(n.GREATER);break;case ka:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=te}},setLocked:function(te){P=te},setClear:function(te){pe!==te&&(pe=te,ce&&(te=1-te),n.clearDepth(te))},reset:function(){P=!1,J=null,le=null,pe=null,ce=!1}}}function r(){let P=!1,ce=null,J=null,le=null,pe=null,te=null,Ae=null,Me=null,ct=null;return{setTest:function(Je){P||(Je?j(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(Je){ce!==Je&&!P&&(n.stencilMask(Je),ce=Je)},setFunc:function(Je,fn,yn){(J!==Je||le!==fn||pe!==yn)&&(n.stencilFunc(Je,fn,yn),J=Je,le=fn,pe=yn)},setOp:function(Je,fn,yn){(te!==Je||Ae!==fn||Me!==yn)&&(n.stencilOp(Je,fn,yn),te=Je,Ae=fn,Me=yn)},setLocked:function(Je){P=Je},setClear:function(Je){ct!==Je&&(n.clearStencil(Je),ct=Je)},reset:function(){P=!1,ce=null,J=null,le=null,pe=null,te=null,Ae=null,Me=null,ct=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},d={},u={},h=new WeakMap,_=[],S=null,m=!1,p=null,T=null,R=null,M=null,y=null,b=null,A=null,v=new $e(0,0,0),w=0,I=!1,N=null,B=null,H=null,L=null,k=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ie=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec($)[1]),W=ie>=1):$.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=ie>=2);let ee=null,ne={};const Re=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),at=new st().fromArray(Re),We=new st().fromArray(Te);function Ke(P,ce,J,le){const pe=new Uint8Array(4),te=n.createTexture();n.bindTexture(P,te),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<J;Ae++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(ce+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return te}const Z={};Z[n.TEXTURE_2D]=Ke(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=Ke(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=Ke(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=Ke(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(n.DEPTH_TEST),a.setFunc(Ir),ke(!1),ht(Ic),j(n.CULL_FACE),Ze(Xn);function j(P){f[P]!==!0&&(n.enable(P),f[P]=!0)}function ve(P){f[P]!==!1&&(n.disable(P),f[P]=!1)}function Ie(P,ce){return u[P]!==ce?(n.bindFramebuffer(P,ce),u[P]=ce,P===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ce),P===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function ge(P,ce){let J=_,le=!1;if(P){J=h.get(ce),J===void 0&&(J=[],h.set(ce,J));const pe=P.textures;if(J.length!==pe.length||J[0]!==n.COLOR_ATTACHMENT0){for(let te=0,Ae=pe.length;te<Ae;te++)J[te]=n.COLOR_ATTACHMENT0+te;J.length=pe.length,le=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,le=!0);le&&n.drawBuffers(J)}function Fe(P){return S!==P?(n.useProgram(P),S=P,!0):!1}const wt={[Xi]:n.FUNC_ADD,[eg]:n.FUNC_SUBTRACT,[tg]:n.FUNC_REVERSE_SUBTRACT};wt[ng]=n.MIN,wt[ig]=n.MAX;const ze={[rg]:n.ZERO,[sg]:n.ONE,[ag]:n.SRC_COLOR,[uu]:n.SRC_ALPHA,[dg]:n.SRC_ALPHA_SATURATE,[ug]:n.DST_COLOR,[cg]:n.DST_ALPHA,[og]:n.ONE_MINUS_SRC_COLOR,[fu]:n.ONE_MINUS_SRC_ALPHA,[fg]:n.ONE_MINUS_DST_COLOR,[lg]:n.ONE_MINUS_DST_ALPHA,[hg]:n.CONSTANT_COLOR,[pg]:n.ONE_MINUS_CONSTANT_COLOR,[mg]:n.CONSTANT_ALPHA,[gg]:n.ONE_MINUS_CONSTANT_ALPHA};function Ze(P,ce,J,le,pe,te,Ae,Me,ct,Je){if(P===Xn){m===!0&&(ve(n.BLEND),m=!1);return}if(m===!1&&(j(n.BLEND),m=!0),P!==jm){if(P!==p||Je!==I){if((T!==Xi||y!==Xi)&&(n.blendEquation(n.FUNC_ADD),T=Xi,y=Xi),Je)switch(P){case wr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dc:n.blendFunc(n.ONE,n.ONE);break;case Lc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:qe("WebGLState: Invalid blending: ",P);break}else switch(P){case wr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Lc:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nc:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",P);break}R=null,M=null,b=null,A=null,v.set(0,0,0),w=0,p=P,I=Je}return}pe=pe||ce,te=te||J,Ae=Ae||le,(ce!==T||pe!==y)&&(n.blendEquationSeparate(wt[ce],wt[pe]),T=ce,y=pe),(J!==R||le!==M||te!==b||Ae!==A)&&(n.blendFuncSeparate(ze[J],ze[le],ze[te],ze[Ae]),R=J,M=le,b=te,A=Ae),(Me.equals(v)===!1||ct!==w)&&(n.blendColor(Me.r,Me.g,Me.b,ct),v.copy(Me),w=ct),p=P,I=!1}function ot(P,ce){P.side===cn?ve(n.CULL_FACE):j(n.CULL_FACE);let J=P.side===jt;ce&&(J=!J),ke(J),P.blending===wr&&P.transparent===!1?Ze(Xn):Ze(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const le=P.stencilWrite;o.setTest(le),le&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Zt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(P){N!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),N=P)}function ht(P){P!==Km?(j(n.CULL_FACE),P!==B&&(P===Ic?n.cullFace(n.BACK):P===Jm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),B=P}function Rt(P){P!==H&&(W&&n.lineWidth(P),H=P)}function Zt(P,ce,J){P?(j(n.POLYGON_OFFSET_FILL),(L!==ce||k!==J)&&(L=ce,k=J,a.getReversed()&&(ce=-ce),n.polygonOffset(ce,J))):ve(n.POLYGON_OFFSET_FILL)}function gt(P){P?j(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function yt(P){P===void 0&&(P=n.TEXTURE0+Y-1),ee!==P&&(n.activeTexture(P),ee=P)}function D(P,ce,J){J===void 0&&(ee===null?J=n.TEXTURE0+Y-1:J=ee);let le=ne[J];le===void 0&&(le={type:void 0,texture:void 0},ne[J]=le),(le.type!==P||le.texture!==ce)&&(ee!==J&&(n.activeTexture(J),ee=J),n.bindTexture(P,ce||Z[P]),le.type=P,le.texture=ce)}function Nt(){const P=ne[ee];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function je(){try{n.compressedTexImage2D(...arguments)}catch(P){qe("WebGLState:",P)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(P){qe("WebGLState:",P)}}function g(){try{n.texSubImage2D(...arguments)}catch(P){qe("WebGLState:",P)}}function U(){try{n.texSubImage3D(...arguments)}catch(P){qe("WebGLState:",P)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(P){qe("WebGLState:",P)}}function X(){try{n.compressedTexSubImage3D(...arguments)}catch(P){qe("WebGLState:",P)}}function re(){try{n.texStorage2D(...arguments)}catch(P){qe("WebGLState:",P)}}function se(){try{n.texStorage3D(...arguments)}catch(P){qe("WebGLState:",P)}}function q(){try{n.texImage2D(...arguments)}catch(P){qe("WebGLState:",P)}}function Q(){try{n.texImage3D(...arguments)}catch(P){qe("WebGLState:",P)}}function ae(P){return d[P]!==void 0?d[P]:n.getParameter(P)}function be(P,ce){d[P]!==ce&&(n.pixelStorei(P,ce),d[P]=ce)}function ue(P){at.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),at.copy(P))}function oe(P){We.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),We.copy(P))}function Ee(P,ce){let J=c.get(ce);J===void 0&&(J=new WeakMap,c.set(ce,J));let le=J.get(P);le===void 0&&(le=n.getUniformBlockIndex(ce,P.name),J.set(P,le))}function Ce(P,ce){const le=c.get(ce).get(P);l.get(ce)!==le&&(n.uniformBlockBinding(ce,le,P.__bindingPointIndex),l.set(ce,le))}function Le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},d={},ee=null,ne={},u={},h=new WeakMap,_=[],S=null,m=!1,p=null,T=null,R=null,M=null,y=null,b=null,A=null,v=new $e(0,0,0),w=0,I=!1,N=null,B=null,H=null,L=null,k=null,at.set(0,0,n.canvas.width,n.canvas.height),We.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:ve,bindFramebuffer:Ie,drawBuffers:ge,useProgram:Fe,setBlending:Ze,setMaterial:ot,setFlipSided:ke,setCullFace:ht,setLineWidth:Rt,setPolygonOffset:Zt,setScissorTest:gt,activeTexture:yt,bindTexture:D,unbindTexture:Nt,compressedTexImage2D:je,compressedTexImage3D:E,texImage2D:q,texImage3D:Q,pixelStorei:be,getParameter:ae,updateUBOMapping:Ee,uniformBlockBinding:Ce,texStorage2D:re,texStorage3D:se,texSubImage2D:g,texSubImage3D:U,compressedTexSubImage2D:G,compressedTexSubImage3D:X,scissor:ue,viewport:oe,reset:Le}}function iM(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,f=new WeakMap,d=new Set;let u;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(E,g){return _?new OffscreenCanvas(E,g):Is("canvas")}function m(E,g,U){let G=1;const X=je(E);if((X.width>U||X.height>U)&&(G=U/Math.max(X.width,X.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const re=Math.floor(G*X.width),se=Math.floor(G*X.height);u===void 0&&(u=S(re,se));const q=g?S(re,se):u;return q.width=re,q.height=se,q.getContext("2d").drawImage(E,0,0,re,se),Pe("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+re+"x"+se+")."),q}else return"data"in E&&Pe("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),E;return E}function p(E){return E.generateMipmaps}function T(E){n.generateMipmap(E)}function R(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(E,g,U,G,X,re=!1){if(E!==null){if(n[E]!==void 0)return n[E];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let se;G&&(se=e.get("EXT_texture_norm16"),se||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=g;if(g===n.RED&&(U===n.FLOAT&&(q=n.R32F),U===n.HALF_FLOAT&&(q=n.R16F),U===n.UNSIGNED_BYTE&&(q=n.R8),U===n.UNSIGNED_SHORT&&se&&(q=se.R16_EXT),U===n.SHORT&&se&&(q=se.R16_SNORM_EXT)),g===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.R8UI),U===n.UNSIGNED_SHORT&&(q=n.R16UI),U===n.UNSIGNED_INT&&(q=n.R32UI),U===n.BYTE&&(q=n.R8I),U===n.SHORT&&(q=n.R16I),U===n.INT&&(q=n.R32I)),g===n.RG&&(U===n.FLOAT&&(q=n.RG32F),U===n.HALF_FLOAT&&(q=n.RG16F),U===n.UNSIGNED_BYTE&&(q=n.RG8),U===n.UNSIGNED_SHORT&&se&&(q=se.RG16_EXT),U===n.SHORT&&se&&(q=se.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RG8UI),U===n.UNSIGNED_SHORT&&(q=n.RG16UI),U===n.UNSIGNED_INT&&(q=n.RG32UI),U===n.BYTE&&(q=n.RG8I),U===n.SHORT&&(q=n.RG16I),U===n.INT&&(q=n.RG32I)),g===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RGB8UI),U===n.UNSIGNED_SHORT&&(q=n.RGB16UI),U===n.UNSIGNED_INT&&(q=n.RGB32UI),U===n.BYTE&&(q=n.RGB8I),U===n.SHORT&&(q=n.RGB16I),U===n.INT&&(q=n.RGB32I)),g===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),U===n.UNSIGNED_INT&&(q=n.RGBA32UI),U===n.BYTE&&(q=n.RGBA8I),U===n.SHORT&&(q=n.RGBA16I),U===n.INT&&(q=n.RGBA32I)),g===n.RGB&&(U===n.UNSIGNED_SHORT&&se&&(q=se.RGB16_EXT),U===n.SHORT&&se&&(q=se.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),g===n.RGBA){const Q=re?Cs:Ge.getTransfer(X);U===n.FLOAT&&(q=n.RGBA32F),U===n.HALF_FLOAT&&(q=n.RGBA16F),U===n.UNSIGNED_BYTE&&(q=Q===et?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&se&&(q=se.RGBA16_EXT),U===n.SHORT&&se&&(q=se.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(E,g){let U;return E?g===null||g===Dn||g===Lr?U=n.DEPTH24_STENCIL8:g===Cn?U=n.DEPTH32F_STENCIL8:g===Dr&&(U=n.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Dn||g===Lr?U=n.DEPTH_COMPONENT24:g===Cn?U=n.DEPTH_COMPONENT32F:g===Dr&&(U=n.DEPTH_COMPONENT16),U}function b(E,g){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Lt&&E.minFilter!==kt?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function A(E){const g=E.target;g.removeEventListener("dispose",A),w(g),g.isVideoTexture&&f.delete(g),g.isHTMLTexture&&d.delete(g)}function v(E){const g=E.target;g.removeEventListener("dispose",v),N(g)}function w(E){const g=i.get(E);if(g.__webglInit===void 0)return;const U=E.source,G=h.get(U);if(G){const X=G[g.__cacheKey];X.usedTimes--,X.usedTimes===0&&I(E),Object.keys(G).length===0&&h.delete(U)}i.remove(E)}function I(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const U=E.source,G=h.get(U);delete G[g.__cacheKey],a.memory.textures--}function N(E){const g=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(g.__webglFramebuffer[G]))for(let X=0;X<g.__webglFramebuffer[G].length;X++)n.deleteFramebuffer(g.__webglFramebuffer[G][X]);else n.deleteFramebuffer(g.__webglFramebuffer[G]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[G])}else{if(Array.isArray(g.__webglFramebuffer))for(let G=0;G<g.__webglFramebuffer.length;G++)n.deleteFramebuffer(g.__webglFramebuffer[G]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let G=0;G<g.__webglColorRenderbuffer.length;G++)g.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[G]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const U=E.textures;for(let G=0,X=U.length;G<X;G++){const re=i.get(U[G]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(U[G])}i.remove(E)}let B=0;function H(){B=0}function L(){return B}function k(E){B=E}function Y(){const E=B;return E>=r.maxTextures&&Pe("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+r.maxTextures),B+=1,E}function W(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function ie(E,g){const U=i.get(E);if(E.isVideoTexture&&D(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&U.__version!==E.version){const G=E.image;if(G===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(U,E,g);return}}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+g)}function $(E,g){const U=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){ve(U,E,g);return}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+g)}function ee(E,g){const U=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){ve(U,E,g);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+g)}function ne(E,g){const U=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&U.__version!==E.version){Ie(U,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+g)}const Re={[Ga]:n.REPEAT,[Wn]:n.CLAMP_TO_EDGE,[Va]:n.MIRRORED_REPEAT},Te={[Lt]:n.NEAREST,[xg]:n.NEAREST_MIPMAP_NEAREST,[Wr]:n.NEAREST_MIPMAP_LINEAR,[kt]:n.LINEAR,[Ks]:n.LINEAR_MIPMAP_NEAREST,[xi]:n.LINEAR_MIPMAP_LINEAR},at={[bg]:n.NEVER,[Rg]:n.ALWAYS,[Eg]:n.LESS,[Vo]:n.LEQUAL,[wg]:n.EQUAL,[Ho]:n.GEQUAL,[Tg]:n.GREATER,[Ag]:n.NOTEQUAL};function We(E,g){if(g.type===Cn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===kt||g.magFilter===Ks||g.magFilter===Wr||g.magFilter===xi||g.minFilter===kt||g.minFilter===Ks||g.minFilter===Wr||g.minFilter===xi)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Re[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Re[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Re[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Te[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Te[g.minFilter]),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,at[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Lt||g.minFilter!==Wr&&g.minFilter!==xi||g.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ke(E,g){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",A));const G=g.source;let X=h.get(G);X===void 0&&(X={},h.set(G,X));const re=W(g);if(re!==E.__cacheKey){X[re]===void 0&&(X[re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),X[re].usedTimes++;const se=X[E.__cacheKey];se!==void 0&&(X[E.__cacheKey].usedTimes--,se.usedTimes===0&&I(g)),E.__cacheKey=re,E.__webglTexture=X[re].texture}return U}function Z(E,g,U){return Math.floor(Math.floor(E/U)/g)}function j(E,g,U,G){const re=E.updateRanges;if(re.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,U,G,g.data);else{re.sort((be,ue)=>be.start-ue.start);let se=0;for(let be=1;be<re.length;be++){const ue=re[se],oe=re[be],Ee=ue.start+ue.count,Ce=Z(oe.start,g.width,4),Le=Z(ue.start,g.width,4);oe.start<=Ee+1&&Ce===Le&&Z(oe.start+oe.count-1,g.width,4)===Ce?ue.count=Math.max(ue.count,oe.start+oe.count-ue.start):(++se,re[se]=oe)}re.length=se+1;const q=t.getParameter(n.UNPACK_ROW_LENGTH),Q=t.getParameter(n.UNPACK_SKIP_PIXELS),ae=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let be=0,ue=re.length;be<ue;be++){const oe=re[be],Ee=Math.floor(oe.start/4),Ce=Math.ceil(oe.count/4),Le=Ee%g.width,P=Math.floor(Ee/g.width),ce=Ce,J=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),t.pixelStorei(n.UNPACK_SKIP_ROWS,P),t.texSubImage2D(n.TEXTURE_2D,0,Le,P,ce,J,U,G,g.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(n.UNPACK_SKIP_ROWS,ae)}}function ve(E,g,U){let G=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(G=n.TEXTURE_3D);const X=Ke(E,g),re=g.source;t.bindTexture(G,E.__webglTexture,n.TEXTURE0+U);const se=i.get(re);if(re.version!==se.__version||X===!0){if(t.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const J=Ge.getPrimaries(Ge.workingColorSpace),le=g.colorSpace===ri?null:Ge.getPrimaries(g.colorSpace),pe=g.colorSpace===ri||J===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let Q=m(g.image,!1,r.maxTextureSize);Q=Nt(g,Q);const ae=s.convert(g.format,g.colorSpace),be=s.convert(g.type);let ue=M(g.internalFormat,ae,be,g.normalized,g.colorSpace,g.isVideoTexture);We(G,g);let oe;const Ee=g.mipmaps,Ce=g.isVideoTexture!==!0,Le=se.__version===void 0||X===!0,P=re.dataReady,ce=b(g,Q);if(g.isDepthTexture)ue=y(g.format===Si,g.type),Le&&(Ce?t.texStorage2D(n.TEXTURE_2D,1,ue,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,ue,Q.width,Q.height,0,ae,be,null));else if(g.isDataTexture)if(Ee.length>0){Ce&&Le&&t.texStorage2D(n.TEXTURE_2D,ce,ue,Ee[0].width,Ee[0].height);for(let J=0,le=Ee.length;J<le;J++)oe=Ee[J],Ce?P&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,oe.width,oe.height,ae,be,oe.data):t.texImage2D(n.TEXTURE_2D,J,ue,oe.width,oe.height,0,ae,be,oe.data);g.generateMipmaps=!1}else Ce?(Le&&t.texStorage2D(n.TEXTURE_2D,ce,ue,Q.width,Q.height),P&&j(g,Q,ae,be)):t.texImage2D(n.TEXTURE_2D,0,ue,Q.width,Q.height,0,ae,be,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ce&&Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,ue,Ee[0].width,Ee[0].height,Q.depth);for(let J=0,le=Ee.length;J<le;J++)if(oe=Ee[J],g.format!==xn)if(ae!==null)if(Ce){if(P)if(g.layerUpdates.size>0){const pe=ol(oe.width,oe.height,g.format,g.type);for(const te of g.layerUpdates){const Ae=oe.data.subarray(te*pe/oe.data.BYTES_PER_ELEMENT,(te+1)*pe/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,te,oe.width,oe.height,1,ae,Ae)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,Q.depth,ae,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,ue,oe.width,oe.height,Q.depth,0,oe.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,Q.depth,ae,be,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,ue,oe.width,oe.height,Q.depth,0,ae,be,oe.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Ce&&Le&&t.texStorage2D(n.TEXTURE_2D,ce,ue,Ee[0].width,Ee[0].height);for(let J=0,le=Ee.length;J<le;J++)oe=Ee[J],g.format!==xn?ae!==null?Ce?P&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,J,ue,oe.width,oe.height,0,oe.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?P&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,oe.width,oe.height,ae,be,oe.data):t.texImage2D(n.TEXTURE_2D,J,ue,oe.width,oe.height,0,ae,be,oe.data)}else if(g.isDataArrayTexture)if(Ce){if(Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,ue,Q.width,Q.height,Q.depth),P)if(g.layerUpdates.size>0){const J=ol(Q.width,Q.height,g.format,g.type);for(const le of g.layerUpdates){const pe=Q.data.subarray(le*J/Q.data.BYTES_PER_ELEMENT,(le+1)*J/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,Q.width,Q.height,1,ae,be,pe)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ae,be,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ue,Q.width,Q.height,Q.depth,0,ae,be,Q.data);else if(g.isData3DTexture)Ce?(Le&&t.texStorage3D(n.TEXTURE_3D,ce,ue,Q.width,Q.height,Q.depth),P&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ae,be,Q.data)):t.texImage3D(n.TEXTURE_3D,0,ue,Q.width,Q.height,Q.depth,0,ae,be,Q.data);else if(g.isFramebufferTexture){if(Le)if(Ce)t.texStorage2D(n.TEXTURE_2D,ce,ue,Q.width,Q.height);else{let J=Q.width,le=Q.height;for(let pe=0;pe<ce;pe++)t.texImage2D(n.TEXTURE_2D,pe,ue,J,le,0,ae,be,null),J>>=1,le>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const J=n.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),Q.parentNode!==J){J.appendChild(Q),d.add(g),J.onpaint=le=>{const pe=le.changedElements;for(const te of d)pe.includes(te.image)&&(te.needsUpdate=!0)},J.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{const pe=n.RGBA,te=n.RGBA,Ae=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,pe,te,Ae,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(Ce&&Le){const J=je(Ee[0]);t.texStorage2D(n.TEXTURE_2D,ce,ue,J.width,J.height)}for(let J=0,le=Ee.length;J<le;J++)oe=Ee[J],Ce?P&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ae,be,oe):t.texImage2D(n.TEXTURE_2D,J,ue,ae,be,oe);g.generateMipmaps=!1}else if(Ce){if(Le){const J=je(Q);t.texStorage2D(n.TEXTURE_2D,ce,ue,J.width,J.height)}P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,be,Q)}else t.texImage2D(n.TEXTURE_2D,0,ue,ae,be,Q);p(g)&&T(G),se.__version=re.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Ie(E,g,U){if(g.image.length!==6)return;const G=Ke(E,g),X=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+U);const re=i.get(X);if(X.version!==re.__version||G===!0){t.activeTexture(n.TEXTURE0+U);const se=Ge.getPrimaries(Ge.workingColorSpace),q=g.colorSpace===ri?null:Ge.getPrimaries(g.colorSpace),Q=g.colorSpace===ri||se===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ae=g.isCompressedTexture||g.image[0].isCompressedTexture,be=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let te=0;te<6;te++)!ae&&!be?ue[te]=m(g.image[te],!0,r.maxCubemapSize):ue[te]=be?g.image[te].image:g.image[te],ue[te]=Nt(g,ue[te]);const oe=ue[0],Ee=s.convert(g.format,g.colorSpace),Ce=s.convert(g.type),Le=M(g.internalFormat,Ee,Ce,g.normalized,g.colorSpace),P=g.isVideoTexture!==!0,ce=re.__version===void 0||G===!0,J=X.dataReady;let le=b(g,oe);We(n.TEXTURE_CUBE_MAP,g);let pe;if(ae){P&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,Le,oe.width,oe.height);for(let te=0;te<6;te++){pe=ue[te].mipmaps;for(let Ae=0;Ae<pe.length;Ae++){const Me=pe[Ae];g.format!==xn?Ee!==null?P?J&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,0,0,Me.width,Me.height,Ee,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,Le,Me.width,Me.height,0,Me.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,0,0,Me.width,Me.height,Ee,Ce,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,Le,Me.width,Me.height,0,Ee,Ce,Me.data)}}}else{if(pe=g.mipmaps,P&&ce){pe.length>0&&le++;const te=je(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,le,Le,te.width,te.height)}for(let te=0;te<6;te++)if(be){P?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ue[te].width,ue[te].height,Ee,Ce,ue[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Le,ue[te].width,ue[te].height,0,Ee,Ce,ue[te].data);for(let Ae=0;Ae<pe.length;Ae++){const ct=pe[Ae].image[te].image;P?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,0,0,ct.width,ct.height,Ee,Ce,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,Le,ct.width,ct.height,0,Ee,Ce,ct.data)}}else{P?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ee,Ce,ue[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Le,Ee,Ce,ue[te]);for(let Ae=0;Ae<pe.length;Ae++){const Me=pe[Ae];P?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,0,0,Ee,Ce,Me.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,Le,Ee,Ce,Me.image[te])}}}p(g)&&T(n.TEXTURE_CUBE_MAP),re.__version=X.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ge(E,g,U,G,X,re){const se=s.convert(U.format,U.colorSpace),q=s.convert(U.type),Q=M(U.internalFormat,se,q,U.normalized,U.colorSpace),ae=i.get(g),be=i.get(U);if(be.__renderTarget=g,!ae.__hasExternalTextures){const ue=Math.max(1,g.width>>re),oe=Math.max(1,g.height>>re);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,re,Q,ue,oe,g.depth,0,se,q,null):t.texImage2D(X,re,Q,ue,oe,0,se,q,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),yt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,X,be.__webglTexture,0,gt(g)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,X,be.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(E,g,U){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer){const G=g.depthTexture,X=G&&G.isDepthTexture?G.type:null,re=y(g.stencilBuffer,X),se=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;yt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,gt(g),re,g.width,g.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,gt(g),re,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,re,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,E)}else{const G=g.textures;for(let X=0;X<G.length;X++){const re=G[X],se=s.convert(re.format,re.colorSpace),q=s.convert(re.type),Q=M(re.internalFormat,se,q,re.normalized,re.colorSpace);yt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,gt(g),Q,g.width,g.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,gt(g),Q,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Q,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function wt(E,g,U){const G=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=i.get(g.depthTexture);if(X.__renderTarget=g,(!X.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),G){if(X.__webglInit===void 0&&(X.__webglInit=!0,g.depthTexture.addEventListener("dispose",A)),X.__webglTexture===void 0){X.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),We(n.TEXTURE_CUBE_MAP,g.depthTexture);const ae=s.convert(g.depthTexture.format),be=s.convert(g.depthTexture.type);let ue;g.depthTexture.format===Zn?ue=n.DEPTH_COMPONENT24:g.depthTexture.format===Si&&(ue=n.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ue,g.width,g.height,0,ae,be,null)}}else ie(g.depthTexture,0);const re=X.__webglTexture,se=gt(g),q=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,Q=g.depthTexture.format===Si?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Zn)yt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,q,re,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,Q,q,re,0);else if(g.depthTexture.format===Si)yt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,q,re,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,Q,q,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ze(E){const g=i.get(E),U=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const G=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),G){const X=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,G.removeEventListener("dispose",X)};G.addEventListener("dispose",X),g.__depthDisposeCallback=X}g.__boundDepthTexture=G}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(U)for(let G=0;G<6;G++)wt(g.__webglFramebuffer[G],E,G);else{const G=E.texture.mipmaps;G&&G.length>0?wt(g.__webglFramebuffer[0],E,0):wt(g.__webglFramebuffer,E,0)}else if(U){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]===void 0)g.__webglDepthbuffer[G]=n.createRenderbuffer(),Fe(g.__webglDepthbuffer[G],E,!1);else{const X=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,re)}}else{const G=E.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Fe(g.__webglDepthbuffer,E,!1);else{const X=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,re)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(E,g,U){const G=i.get(E);g!==void 0&&ge(G.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&ze(E)}function ot(E){const g=E.texture,U=i.get(E),G=i.get(g);E.addEventListener("dispose",v);const X=E.textures,re=E.isWebGLCubeRenderTarget===!0,se=X.length>1;if(se||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=g.version,a.memory.textures++),re){U.__webglFramebuffer=[];for(let q=0;q<6;q++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[q]=[];for(let Q=0;Q<g.mipmaps.length;Q++)U.__webglFramebuffer[q][Q]=n.createFramebuffer()}else U.__webglFramebuffer[q]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let q=0;q<g.mipmaps.length;q++)U.__webglFramebuffer[q]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(se)for(let q=0,Q=X.length;q<Q;q++){const ae=i.get(X[q]);ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&yt(E)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let q=0;q<X.length;q++){const Q=X[q];U.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[q]);const ae=s.convert(Q.format,Q.colorSpace),be=s.convert(Q.type),ue=M(Q.internalFormat,ae,be,Q.normalized,Q.colorSpace,E.isXRRenderTarget===!0),oe=gt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,ue,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,U.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Fe(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),We(n.TEXTURE_CUBE_MAP,g);for(let q=0;q<6;q++)if(g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)ge(U.__webglFramebuffer[q][Q],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Q);else ge(U.__webglFramebuffer[q],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);p(g)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let q=0,Q=X.length;q<Q;q++){const ae=X[q],be=i.get(ae);let ue=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ue=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,be.__webglTexture),We(ue,ae),ge(U.__webglFramebuffer,E,ae,n.COLOR_ATTACHMENT0+q,ue,0),p(ae)&&T(ue)}t.unbindTexture()}else{let q=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(q=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,G.__webglTexture),We(q,g),g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)ge(U.__webglFramebuffer[Q],E,g,n.COLOR_ATTACHMENT0,q,Q);else ge(U.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,q,0);p(g)&&T(q),t.unbindTexture()}E.depthBuffer&&ze(E)}function ke(E){const g=E.textures;for(let U=0,G=g.length;U<G;U++){const X=g[U];if(p(X)){const re=R(E),se=i.get(X).__webglTexture;t.bindTexture(re,se),T(re),t.unbindTexture()}}}const ht=[],Rt=[];function Zt(E){if(E.samples>0){if(yt(E)===!1){const g=E.textures,U=E.width,G=E.height;let X=n.COLOR_BUFFER_BIT;const re=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(E),q=g.length>1;if(q)for(let ae=0;ae<g.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const Q=E.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let ae=0;ae<g.length;ae++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[ae]);const be=i.get(g[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,be,0)}n.blitFramebuffer(0,0,U,G,0,0,U,G,X,n.NEAREST),l===!0&&(ht.length=0,Rt.length=0,ht.push(n.COLOR_ATTACHMENT0+ae),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(ht.push(re),Rt.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Rt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let ae=0;ae<g.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,se.__webglColorRenderbuffer[ae]);const be=i.get(g[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){const g=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function gt(E){return Math.min(r.maxSamples,E.samples)}function yt(E){const g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(E){const g=a.render.frame;f.get(E)!==g&&(f.set(E,g),E.update())}function Nt(E,g){const U=E.colorSpace,G=E.format,X=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==Rs&&U!==ri&&(Ge.getTransfer(U)===et?(G!==xn||X!==ln)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",U)),g}function je(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=H,this.getTextureUnits=L,this.setTextureUnits=k,this.setTexture2D=ie,this.setTexture2DArray=$,this.setTexture3D=ee,this.setTextureCube=ne,this.rebindTextures=Ze,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=yt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function rM(n,e){function t(i,r=ri){let s;const a=Ge.getTransfer(r);if(i===ln)return n.UNSIGNED_BYTE;if(i===Oo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===zo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Eu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Mu)return n.BYTE;if(i===yu)return n.SHORT;if(i===Dr)return n.UNSIGNED_SHORT;if(i===Fo)return n.INT;if(i===Dn)return n.UNSIGNED_INT;if(i===Cn)return n.FLOAT;if(i===Ln)return n.HALF_FLOAT;if(i===wu)return n.ALPHA;if(i===Tu)return n.RGB;if(i===xn)return n.RGBA;if(i===Zn)return n.DEPTH_COMPONENT;if(i===Si)return n.DEPTH_STENCIL;if(i===Au)return n.RED;if(i===Bo)return n.RED_INTEGER;if(i===Ei)return n.RG;if(i===ko)return n.RG_INTEGER;if(i===Go)return n.RGBA_INTEGER;if(i===_s||i===vs||i===xs||i===Ss)if(a===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===_s)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===_s)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ss)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ha||i===Wa||i===Xa||i===$a)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ha)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$a)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Za||i===qa||i===Ya||i===Ka||i===Ja||i===Ts||i===Qa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Za||i===qa)return a===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ya)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ka)return s.COMPRESSED_R11_EAC;if(i===Ja)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ts)return s.COMPRESSED_RG11_EAC;if(i===Qa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ja||i===eo||i===to||i===no||i===io||i===ro||i===so||i===ao||i===oo||i===co||i===lo||i===uo||i===fo||i===ho)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ja)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===eo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===to)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===no)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===io)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ro)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===so)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ao)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===oo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===co)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ho)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===po||i===mo||i===go)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===po)return a===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===go)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_o||i===vo||i===As||i===xo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===_o)return s.COMPRESSED_RED_RGTC1_EXT;if(i===vo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===As)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const sM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aM=`
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

}`;class oM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Uu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Qt({vertexShader:sM,fragmentShader:aM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jt(new Bs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cM extends Ai{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,d=null,u=null,h=null,_=null;const S=typeof XRWebGLBinding<"u",m=new oM,p={},T=t.getContextAttributes();let R=null,M=null;const y=[],b=[],A=new Ye;let v=null,w=null;const I=new _n;I.viewport=new st;const N=new _n;N.viewport=new st;const B=[I,N],H=new g_;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=y[Z];return j===void 0&&(j=new sa,y[Z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=y[Z];return j===void 0&&(j=new sa,y[Z]=j),j.getGripSpace()},this.getHand=function(Z){let j=y[Z];return j===void 0&&(j=new sa,y[Z]=j),j.getHandSpace()};function Y(Z){const j=b.indexOf(Z.inputSource);if(j===-1)return;const ve=y[j];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,c||a),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",ie);for(let Z=0;Z<y.length;Z++){const j=b[Z];j!==null&&(b[Z]=null,y[Z].disconnect(j))}L=null,k=null,m.reset();for(const Z in p)delete p[Z];if(e.setRenderTarget(R),h=null,u=null,d=null,r=null,M=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),w!==null){const Z=w.camera;Z.fov=w.fov,Z.zoom=w.zoom,Z.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",W),r.addEventListener("inputsourceschange",ie),T.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ie=null,ge=null;T.depth&&(ge=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=T.stencil?Si:Zn,Ie=T.stencil?Lr:Dn);const Fe={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Fe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Sn(u.textureWidth,u.textureHeight,{format:xn,type:ln,depthTexture:new Nr(u.textureWidth,u.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ve={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Sn(h.framebufferWidth,h.framebufferHeight,{format:xn,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(Z){for(let j=0;j<Z.removed.length;j++){const ve=Z.removed[j],Ie=b.indexOf(ve);Ie>=0&&(b[Ie]=null,y[Ie].disconnect(ve))}for(let j=0;j<Z.added.length;j++){const ve=Z.added[j];let Ie=b.indexOf(ve);if(Ie===-1){for(let Fe=0;Fe<y.length;Fe++)if(Fe>=b.length){b.push(ve),Ie=Fe;break}else if(b[Fe]===null){b[Fe]=ve,Ie=Fe;break}if(Ie===-1)break}const ge=y[Ie];ge&&ge.connect(ve)}}const $=new F,ee=new F;function ne(Z,j,ve){$.setFromMatrixPosition(j.matrixWorld),ee.setFromMatrixPosition(ve.matrixWorld);const Ie=$.distanceTo(ee),ge=j.projectionMatrix.elements,Fe=ve.projectionMatrix.elements,wt=ge[14]/(ge[10]-1),ze=ge[14]/(ge[10]+1),Ze=(ge[9]+1)/ge[5],ot=(ge[9]-1)/ge[5],ke=(ge[8]-1)/ge[0],ht=(Fe[8]+1)/Fe[0],Rt=wt*ke,Zt=wt*ht,gt=Ie/(-ke+ht),yt=gt*-ke;if(j.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(yt),Z.translateZ(gt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ge[10]===-1)Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const D=wt+gt,Nt=ze+gt,je=Rt-yt,E=Zt+(Ie-yt),g=Ze*ze/Nt*D,U=ot*ze/Nt*D;Z.projectionMatrix.makePerspective(je,E,g,U,D,Nt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Re(Z,j){j===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let j=Z.near,ve=Z.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),H.near=N.near=I.near=j,H.far=N.far=I.far=ve,(L!==H.near||k!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),L=H.near,k=H.far),H.layers.mask=Z.layers.mask|6,I.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;const Ie=Z.parent,ge=H.cameras;Re(H,Ie);for(let Fe=0;Fe<ge.length;Fe++)Re(ge[Fe],Ie);ge.length===2?ne(H,I,N):H.projectionMatrix.copy(I.projectionMatrix),w===null&&Z.isPerspectiveCamera&&(w={camera:Z,fov:Z.fov,zoom:Z.zoom}),Te(Z,H,Ie)};function Te(Z,j,ve){ve===null?Z.matrix.copy(j.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=So*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&h===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Z){return p[Z]};let at=null;function We(Z,j){if(f=j.getViewerPose(c||a),_=j,f!==null){const ve=f.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let Ie=!1;ve.length!==H.cameras.length&&(H.cameras.length=0,Ie=!0);for(let ze=0;ze<ve.length;ze++){const Ze=ve[ze];let ot=null;if(h!==null)ot=h.getViewport(Ze);else{const ht=d.getViewSubImage(u,Ze);ot=ht.viewport,ze===0&&(e.setRenderTargetTextures(M,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(M))}let ke=B[ze];ke===void 0&&(ke=new _n,ke.layers.enable(ze),ke.viewport=new st,B[ze]=ke),ke.matrix.fromArray(Ze.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Ze.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(ot.x,ot.y,ot.width,ot.height),ze===0&&(H.matrix.copy(ke.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ie===!0&&H.cameras.push(ke)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){d=i.getBinding();const ze=d.getDepthInformation(ve[0]);ze&&ze.isValid&&ze.texture&&m.init(ze,r.renderState)}if(ge&&ge.includes("camera-access")&&S){e.state.unbindTexture(),d=i.getBinding();for(let ze=0;ze<ve.length;ze++){const Ze=ve[ze].camera;if(Ze){let ot=p[Ze];ot||(ot=new Uu,p[Ze]=ot);const ke=d.getCameraImage(Ze);ot.sourceTexture=ke}}}}for(let ve=0;ve<y.length;ve++){const Ie=b[ve],ge=y[ve];Ie!==null&&ge!==void 0&&ge.update(Ie,j,c||a)}at&&at(Z,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),_=null}const Ke=new Bu;Ke.setAnimationLoop(We),this.setAnimationLoop=function(Z){at=Z},this.dispose=function(){}}}const lM=new tt,$u=new De;$u.set(-1,0,0,0,1,0,0,0,1);function uM(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Fu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,T,R,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),f(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&h(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),S(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,R):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),R=T.envMap,M=T.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(lM.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply($u),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=R*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function fM(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const b=y.program;i.uniformBlockBinding(M,b)}function c(M,y){let b=r[M.id];b===void 0&&(m(M),b=f(M),r[M.id]=b,M.addEventListener("dispose",T));const A=y.program;i.updateUBOMapping(M,A);const v=e.render.frame;s[M.id]!==v&&(u(M),s[M.id]=v)}function f(M){const y=d();M.__bindingPointIndex=y;const b=n.createBuffer(),A=M.__size,v=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,A,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const y=r[M.id],b=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let v=0,w=b.length;v<w;v++){const I=b[v];if(Array.isArray(I))for(let N=0,B=I.length;N<B;N++)h(I[N],v,N,A);else h(I,v,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,y,b,A){if(S(M,y,b,A)===!0){const v=M.__offset,w=M.value;if(Array.isArray(w)){let I=0;for(let N=0;N<w.length;N++){const B=w[N],H=p(B);_(B,M.__data,I),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(I+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(w,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,M.__data)}}function _(M,y,b){typeof M=="number"||typeof M=="boolean"?y[0]=M:M.isMatrix3?(y[0]=M.elements[0],y[1]=M.elements[1],y[2]=M.elements[2],y[3]=0,y[4]=M.elements[3],y[5]=M.elements[4],y[6]=M.elements[5],y[7]=0,y[8]=M.elements[6],y[9]=M.elements[7],y[10]=M.elements[8],y[11]=0):ArrayBuffer.isView(M)?y.set(new M.constructor(M.buffer,M.byteOffset,y.length)):M.toArray(y,b)}function S(M,y,b,A){const v=M.value,w=y+"_"+b;if(A[w]===void 0)return typeof v=="number"||typeof v=="boolean"?A[w]=v:ArrayBuffer.isView(v)?A[w]=v.slice():A[w]=v.clone(),!0;{const I=A[w];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return A[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(I.equals(v)===!1)return I.copy(v),!0}}return!1}function m(M){const y=M.uniforms;let b=0;const A=16;for(let w=0,I=y.length;w<I;w++){const N=Array.isArray(y[w])?y[w]:[y[w]];for(let B=0,H=N.length;B<H;B++){const L=N[B],k=Array.isArray(L.value)?L.value:[L.value];for(let Y=0,W=k.length;Y<W;Y++){const ie=k[Y],$=p(ie),ee=b%A,ne=ee%$.boundary,Re=ee+ne;b+=ne,Re!==0&&A-Re<$.storage&&(b+=A-Re),L.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=$.storage}}}const v=b%A;return v>0&&(b+=A-v),M.__size=b,M.__cache={},this}function p(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",M),y}function T(M){const y=M.target;y.removeEventListener("dispose",T);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function R(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:R}}const dM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wn=null;function hM(){return wn===null&&(wn=new n_(dM,16,16,Ei,Ln),wn.name="DFG_LUT",wn.minFilter=kt,wn.magFilter=kt,wn.wrapS=Wn,wn.wrapT=Wn,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn}class pM{constructor(e={}){const{canvas:t=Ig(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:h=ln}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const S=h,m=new Set([Go,ko,Bo]),p=new Set([ln,Dn,Dr,Lr,Oo,zo]),T=new Uint32Array(4),R=new Int32Array(4),M=new F;let y=null,b=null;const A=[],v=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let N=!1,B=null,H=null,L=null,k=null;this._outputColorSpace=on;let Y=0,W=0,ie=null,$=-1,ee=null;const ne=new st,Re=new st;let Te=null;const at=new $e(0);let We=0,Ke=t.width,Z=t.height,j=1,ve=null,Ie=null;const ge=new st(0,0,Ke,Z),Fe=new st(0,0,Ke,Z);let wt=!1;const ze=new Lu;let Ze=!1,ot=!1;const ke=new tt,ht=new F,Rt=new st,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function yt(){return ie===null?j:1}let D=i;function Nt(x,C){return t.getContext(x,C)}let je,E,g,U,G,X,re,se,q,Q,ae,be,ue,oe,Ee,Ce,Le,P,ce,J,le,pe,te;try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uo}`),t.addEventListener("webglcontextlost",ct,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",fn,!1),D===null){const C="webgl2";if(D=Nt(C,x),D===null)throw Nt(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ae()}catch(x){throw t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",fn,!1),qe("WebGLRenderer: "+x.message),x}function Ae(){je=new hx(D),je.init(),le=new rM(D,je),E=new ix(D,je,e,le),g=new nM(D,je),E.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),H=D.createFramebuffer(),L=D.createFramebuffer(),k=D.createFramebuffer(),U=new gx(D),G=new VS,X=new iM(D,je,g,G,E,le,U),re=new dx(I),se=new v_(D),pe=new tx(D,se),q=new px(D,se,U,pe),Q=new vx(D,q,se,pe,U),P=new _x(D,E,X),Ee=new rx(G),ae=new GS(I,re,je,E,pe,Ee),be=new uM(I,G),ue=new WS,oe=new KS(je),Le=new ex(I,re,g,Q,_,l),Ce=new tM(I,Q,E),te=new fM(D,U,E,g),ce=new nx(D,je,U),J=new mx(D,je,U),U.programs=ae.programs,I.capabilities=E,I.extensions=je,I.properties=G,I.renderLists=ue,I.shadowMap=Ce,I.state=g,I.info=U}S!==ln&&(w=new Sx(S,t.width,t.height,o,r,s));const Me=new cM(I,D);this.xr=Me,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const x=je.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=je.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(x){x!==void 0&&(j=x,this.setSize(Ke,Z,!1))},this.getSize=function(x){return x.set(Ke,Z)},this.setSize=function(x,C,V=!0){if(Me.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ke=x,Z=C,t.width=Math.floor(x*j),t.height=Math.floor(C*j),V===!0&&(t.style.width=x+"px",t.style.height=C+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,x,C)},this.getDrawingBufferSize=function(x){return x.set(Ke*j,Z*j).floor()},this.setDrawingBufferSize=function(x,C,V){Ke=x,Z=C,j=V,t.width=Math.floor(x*V),t.height=Math.floor(C*V),this.setViewport(0,0,x,C)},this.setEffects=function(x){if(S===ln){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let C=0;C<x.length;C++)if(x[C].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ne)},this.getViewport=function(x){return x.copy(ge)},this.setViewport=function(x,C,V,O){x.isVector4?ge.set(x.x,x.y,x.z,x.w):ge.set(x,C,V,O),g.viewport(ne.copy(ge).multiplyScalar(j).round())},this.getScissor=function(x){return x.copy(Fe)},this.setScissor=function(x,C,V,O){x.isVector4?Fe.set(x.x,x.y,x.z,x.w):Fe.set(x,C,V,O),g.scissor(Re.copy(Fe).multiplyScalar(j).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(x){g.setScissorTest(wt=x)},this.setOpaqueSort=function(x){ve=x},this.setTransparentSort=function(x){Ie=x},this.getClearColor=function(x){return x.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(x=!0,C=!0,V=!0){let O=0;if(x){let z=!1;if(ie!==null){const he=ie.texture.format;z=m.has(he)}if(z){const he=ie.texture.type,_e=p.has(he),de=Le.getClearColor(),xe=Le.getClearAlpha(),ye=de.r,Ne=de.g,Be=de.b;_e?(T[0]=ye,T[1]=Ne,T[2]=Be,T[3]=xe,D.clearBufferuiv(D.COLOR,0,T)):(R[0]=ye,R[1]=Ne,R[2]=Be,R[3]=xe,D.clearBufferiv(D.COLOR,0,R))}else O|=D.COLOR_BUFFER_BIT}C&&(O|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(O|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),B=x},this.dispose=function(){t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",fn,!1),Le.dispose(),ue.dispose(),oe.dispose(),G.dispose(),re.dispose(),Q.dispose(),pe.dispose(),te.dispose(),ae.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",ec),Me.removeEventListener("sessionend",tc),ui.stop()};function ct(x){x.preventDefault(),Bc("WebGLRenderer: Context Lost."),N=!0}function Je(){Bc("WebGLRenderer: Context Restored."),N=!1;const x=U.autoReset,C=Ce.enabled,V=Ce.autoUpdate,O=Ce.needsUpdate,z=Ce.type;Ae(),U.autoReset=x,Ce.enabled=C,Ce.autoUpdate=V,Ce.needsUpdate=O,Ce.type=z}function fn(x){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function yn(x){const C=x.target;C.removeEventListener("dispose",yn),tf(C)}function tf(x){nf(x),G.remove(x)}function nf(x){const C=G.get(x).programs;C!==void 0&&(C.forEach(function(V){ae.releaseProgram(V)}),x.isShaderMaterial&&ae.releaseShaderCache(x))}this.renderBufferDirect=function(x,C,V,O,z,he){C===null&&(C=Zt);const _e=z.isMesh&&z.matrixWorld.determinantAffine()<0,de=af(x,C,V,O,z);g.setMaterial(O,_e);let xe=V.index,ye=1;if(O.wireframe===!0){if(xe=q.getWireframeAttribute(V),xe===void 0)return;ye=2}const Ne=V.drawRange,Be=V.attributes.position;let Se=Ne.start*ye,Qe=(Ne.start+Ne.count)*ye;he!==null&&(Se=Math.max(Se,he.start*ye),Qe=Math.min(Qe,(he.start+he.count)*ye)),xe!==null?(Se=Math.max(Se,0),Qe=Math.min(Qe,xe.count)):Be!=null&&(Se=Math.max(Se,0),Qe=Math.min(Qe,Be.count));const bt=Qe-Se;if(bt<0||bt===1/0)return;pe.setup(z,O,de,V,xe);let ft,rt=ce;if(xe!==null&&(ft=se.get(xe),rt=J,rt.setIndex(ft)),z.isMesh)O.wireframe===!0?(g.setLineWidth(O.wireframeLinewidth*yt()),rt.setMode(D.LINES)):rt.setMode(D.TRIANGLES);else if(z.isLine){let Ut=O.linewidth;Ut===void 0&&(Ut=1),g.setLineWidth(Ut*yt()),z.isLineSegments?rt.setMode(D.LINES):z.isLineLoop?rt.setMode(D.LINE_LOOP):rt.setMode(D.LINE_STRIP)}else z.isPoints?rt.setMode(D.POINTS):z.isSprite&&rt.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(je.get("WEBGL_multi_draw"))rt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ut=z._multiDrawStarts,me=z._multiDrawCounts,Gt=z._multiDrawCount,Xe=xe?se.get(xe).bytesPerElement:1,rn=G.get(O).currentProgram.getUniforms();for(let bn=0;bn<Gt;bn++)rn.setValue(D,"_gl_DrawID",bn),rt.render(Ut[bn]/Xe,me[bn])}else if(z.isInstancedMesh)rt.renderInstances(Se,bt,z.count);else if(V.isInstancedBufferGeometry){const Ut=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,me=Math.min(V.instanceCount,Ut);rt.renderInstances(Se,bt,me)}else rt.render(Se,bt)};function jo(x,C,V,O){B!==null&&x.isNodeMaterial&&B.setObject(O,x),Ze===!0&&Ee.setState(x,V,!1),x.transparent===!0&&x.side===cn&&x.forceSinglePass===!1?(x.side=jt,x.needsUpdate=!0,Br(x,C,O),x.side=yi,x.needsUpdate=!0,Br(x,C,O),x.side=cn):Br(x,C,O)}this.compile=function(x,C,V=null){V===null&&(V=x),B!==null&&B.renderStart(x,C,V),b=oe.get(V),b.init(C),v.push(b),V.traverseVisible(function(z){z.isLight&&z.layers.test(C.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),x!==V&&x.traverseVisible(function(z){z.isLight&&z.layers.test(C.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights(),B!==null&&B.updateLights(b.state.lightsArray),ot=this.localClippingEnabled,Ze=Ee.init(this.clippingPlanes,ot),Ze===!0&&Ee.setGlobalState(this.clippingPlanes,C),B!==null&&Ce.render(b.state.shadowsArray,V,C);const O=new Set;return x.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const he=z.material;if(he)if(Array.isArray(he))for(let _e=0;_e<he.length;_e++){const de=he[_e];jo(de,V,C,z),O.add(de)}else jo(he,V,C,z),O.add(he)}),b=v.pop(),B!==null&&B.renderEnd(),O},this.compileAsync=function(x,C,V=null){const O=this.compile(x,C,V);return new Promise(z=>{function he(){if(O.forEach(function(_e){const xe=G.get(_e).currentProgram;(xe===void 0||xe.isReady())&&O.delete(_e)}),O.size===0){z(x);return}setTimeout(he,10)}je.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ws=null;function rf(x){Ws&&Ws(x)}function ec(){ui.stop()}function tc(){ui.start()}const ui=new Bu;ui.setAnimationLoop(rf),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(x){Ws=x,Me.setAnimationLoop(x),x===null?ui.stop():ui.start()},Me.addEventListener("sessionstart",ec),Me.addEventListener("sessionend",tc),this.render=function(x,C){if(C!==void 0&&C.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;B!==null&&B.renderStart(x,C);const V=Me.enabled===!0&&Me.isPresenting===!0,O=w!==null&&(ie===null||V)&&w.begin(I,ie);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(C),C=Me.getCamera()),x.isScene===!0&&x.onBeforeRender(I,x,C,ie),b=oe.get(x,v.length),b.init(C),b.state.textureUnits=X.getTextureUnits(),v.push(b),ke.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),ze.setFromProjectionMatrix(ke,Pn,C.reversedDepth),ot=this.localClippingEnabled,Ze=Ee.init(this.clippingPlanes,ot),y=ue.get(x,A.length),y.init(),A.push(y),Me.enabled===!0&&Me.isPresenting===!0){const _e=I.xr.getDepthSensingMesh();_e!==null&&Xs(_e,C,-1/0,I.sortObjects)}Xs(x,C,0,I.sortObjects),y.finish(),B!==null&&B.updateLights(b.state.lightsArray),I.sortObjects===!0&&y.sort(ve,Ie),gt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,gt&&Le.addToRenderList(y,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&Ee.beginShadows();const z=b.state.shadowsArray;if(Ce.render(z,x,C),Ze===!0&&Ee.endShadows(),(O&&w.hasRenderPass())===!1){const _e=y.opaque,de=y.transmissive;if(b.setupLights(),C.isArrayCamera){const xe=C.cameras;if(de.length>0)for(let ye=0,Ne=xe.length;ye<Ne;ye++){const Be=xe[ye];ic(_e,de,x,Be)}gt&&Le.render(x);for(let ye=0,Ne=xe.length;ye<Ne;ye++){const Be=xe[ye];nc(y,x,Be,Be.viewport)}}else de.length>0&&ic(_e,de,x,C),gt&&Le.render(x),nc(y,x,C)}ie!==null&&W===0&&(X.updateMultisampleRenderTarget(ie),X.updateRenderTargetMipmap(ie)),O&&w.end(I),x.isScene===!0&&x.onAfterRender(I,x,C),pe.resetDefaultState(),$=-1,ee=null,v.pop(),v.length>0?(b=v[v.length-1],X.setTextureUnits(b.state.textureUnits),Ze===!0&&Ee.setGlobalState(I.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?y=A[A.length-1]:y=null,B!==null&&B.renderEnd()};function Xs(x,C,V,O){if(x.visible===!1)return;if(x.layers.test(C.layers)){if(x.isGroup)V=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(C);else if(x.isLightProbeGrid)b.pushLightProbeGrid(x);else if(x.isLight)b.pushLight(x),x.castShadow&&b.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(ze)){O&&Rt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ke);const _e=Q.update(x),de=x.material;de.visible&&y.push(x,_e,de,V,Rt.z,null,C)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(ze))){const _e=Q.update(x),de=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Rt.copy(x.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Rt.copy(_e.boundingSphere.center)),Rt.applyMatrix4(x.matrixWorld).applyMatrix4(ke)),Array.isArray(de)){const xe=_e.groups;for(let ye=0,Ne=xe.length;ye<Ne;ye++){const Be=xe[ye],Se=de[Be.materialIndex];Se&&Se.visible&&y.push(x,_e,Se,V,Rt.z,Be,C)}}else de.visible&&y.push(x,_e,de,V,Rt.z,null,C)}}const he=x.children;for(let _e=0,de=he.length;_e<de;_e++)Xs(he[_e],C,V,O)}function nc(x,C,V,O){const{opaque:z,transmissive:he,transparent:_e}=x;b.setupLightsView(V),Ze===!0&&Ee.setGlobalState(I.clippingPlanes,V),O&&g.viewport(ne.copy(O)),z.length>0&&zr(z,C,V),he.length>0&&zr(he,C,V),_e.length>0&&zr(_e,C,V),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function ic(x,C,V,O){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[O.id]===void 0){const Se=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[O.id]=new Sn(1,1,{generateMipmaps:!0,type:Se?Ln:ln,minFilter:xi,samples:Math.max(4,E.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}const he=b.state.transmissionRenderTarget[O.id],_e=O.viewport||ne;he.setSize(_e.z*I.transmissionResolutionScale,_e.w*I.transmissionResolutionScale);const de=I.getRenderTarget(),xe=I.getActiveCubeFace(),ye=I.getActiveMipmapLevel();I.setRenderTarget(he),I.getClearColor(at),We=I.getClearAlpha(),We<1&&I.setClearColor(16777215,.5),I.clear(),gt&&Le.render(V);const Ne=I.toneMapping;I.toneMapping=In;const Be=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),b.setupLightsView(O),Ze===!0&&Ee.setGlobalState(I.clippingPlanes,O),zr(x,V,O),X.updateMultisampleRenderTarget(he),X.updateRenderTargetMipmap(he),je.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Qe=0,bt=C.length;Qe<bt;Qe++){const ft=C[Qe],{object:rt,geometry:Ut,material:me,group:Gt}=ft;if(me.side===cn&&rt.layers.test(O.layers)){const Xe=me.side;me.side=jt,me.needsUpdate=!0,rc(rt,V,O,Ut,me,Gt),me.side=Xe,me.needsUpdate=!0,Se=!0}}Se===!0&&(X.updateMultisampleRenderTarget(he),X.updateRenderTargetMipmap(he))}I.setRenderTarget(de,xe,ye),I.setClearColor(at,We),Be!==void 0&&(O.viewport=Be),I.toneMapping=Ne}function zr(x,C,V){const O=C.isScene===!0?C.overrideMaterial:null;for(let z=0,he=x.length;z<he;z++){const _e=x[z],{object:de,geometry:xe,group:ye}=_e;let Ne=_e.material;Ne.allowOverride===!0&&O!==null&&(Ne=O),de.layers.test(V.layers)&&rc(de,C,V,xe,Ne,ye)}}function rc(x,C,V,O,z,he){B!==null&&z.isNodeMaterial&&B.setObject(x,z),x.onBeforeRender(I,C,V,O,z,he),x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(I,C,V,O,x,he),z.transparent===!0&&z.side===cn&&z.forceSinglePass===!1?(z.side=jt,z.needsUpdate=!0,I.renderBufferDirect(V,C,O,z,x,he),z.side=yi,z.needsUpdate=!0,I.renderBufferDirect(V,C,O,z,x,he),z.side=cn):I.renderBufferDirect(V,C,O,z,x,he),x.onAfterRender(I,C,V,O,z,he)}function Br(x,C,V){C.isScene!==!0&&(C=Zt);const O=G.get(x),z=b.state.lights,he=b.state.shadowsArray,_e=z.state.version,de=ae.getParameters(x,z.state,he,C,V,b.state.lightProbeGridArray),xe=ae.getProgramCacheKey(de);let ye=O.programs;O.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,O.fog=C.fog;const Ne=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;O.envMap=re.get(x.envMap||O.environment,Ne),O.envMapRotation=O.environment!==null&&x.envMap===null?C.environmentRotation:x.envMapRotation,ye===void 0&&(x.addEventListener("dispose",yn),ye=new Map,O.programs=ye);let Be=ye.get(xe);if(Be!==void 0){if(O.currentProgram===Be&&O.lightsStateVersion===_e)return ac(x,de),Be}else de.uniforms=ae.getUniforms(x),B!==null&&x.isNodeMaterial&&B.build(x,V,de),x.onBeforeCompile(de,I),Be=ae.acquireProgram(de,xe),ye.set(xe,Be),O.uniforms=de.uniforms;const Se=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Se.clippingPlanes=Ee.uniform),ac(x,de),O.needsLights=cf(x),O.lightsStateVersion=_e,O.needsLights&&(Se.ambientLightColor.value=z.state.ambient,Se.lightProbe.value=z.state.probe,Se.sunLights.value=z.state.sun,Se.sunLightShadows.value=z.state.sunShadow,Se.directionalLights.value=z.state.directional,Se.directionalLightShadows.value=z.state.directionalShadow,Se.spotLights.value=z.state.spot,Se.spotLightShadows.value=z.state.spotShadow,Se.rectAreaLights.value=z.state.rectArea,Se.ltc_1.value=z.state.rectAreaLTC1,Se.ltc_2.value=z.state.rectAreaLTC2,Se.pointLights.value=z.state.point,Se.pointLightShadows.value=z.state.pointShadow,Se.hemisphereLights.value=z.state.hemi,Se.sunShadowMatrix.value=z.state.sunShadowMatrix,Se.sunShadowCascade.value=z.state.sunShadowCascade,Se.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Se.spotLightMatrix.value=z.state.spotLightMatrix,Se.spotLightMap.value=z.state.spotLightMap,Se.pointShadowMatrix.value=z.state.pointShadowMatrix),O.lightProbeGrid=b.state.lightProbeGridArray.length>0,O.currentProgram=Be,O.uniformsList=null,Be}function sc(x){if(x.uniformsList===null){const C=x.currentProgram.getUniforms();x.uniformsList=Ms.seqWithValue(C.seq,x.uniforms)}return x.uniformsList}function ac(x,C){const V=G.get(x);V.outputColorSpace=C.outputColorSpace,V.batching=C.batching,V.batchingColor=C.batchingColor,V.instancing=C.instancing,V.instancingColor=C.instancingColor,V.instancingMorph=C.instancingMorph,V.skinning=C.skinning,V.morphTargets=C.morphTargets,V.morphNormals=C.morphNormals,V.morphColors=C.morphColors,V.morphTargetsCount=C.morphTargetsCount,V.numClippingPlanes=C.numClippingPlanes,V.numIntersection=C.numClipIntersection,V.vertexAlphas=C.vertexAlphas,V.vertexTangents=C.vertexTangents,V.toneMapping=C.toneMapping}function sf(x,C){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;M.setFromMatrixPosition(C.matrixWorld);for(let V=0,O=x.length;V<O;V++){const z=x[V];if(z.texture!==null&&z.boundingBox.containsPoint(M))return z}return null}function af(x,C,V,O,z){C.isScene!==!0&&(C=Zt),X.resetTextureUnits();const he=C.fog,_e=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?C.environment:null,de=ie===null?I.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ge.workingColorSpace,xe=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,ye=re.get(O.envMap||_e,xe),Ne=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Be=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Se=!!V.morphAttributes.position,Qe=!!V.morphAttributes.normal,bt=!!V.morphAttributes.color;let ft=In;O.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ft=I.toneMapping);const rt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ut=rt!==void 0?rt.length:0,me=G.get(O),Gt=b.state.lights;if(Ze===!0&&(ot===!0||x!==ee)){const lt=x===ee&&O.id===$;Ee.setState(O,x,lt)}let Xe=!1;O.version===me.__version?(me.needsLights&&me.lightsStateVersion!==Gt.state.version||me.outputColorSpace!==de||z.isBatchedMesh&&me.batching===!1||!z.isBatchedMesh&&me.batching===!0||z.isBatchedMesh&&me.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&me.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&me.instancing===!1||!z.isInstancedMesh&&me.instancing===!0||z.isSkinnedMesh&&me.skinning===!1||!z.isSkinnedMesh&&me.skinning===!0||z.isInstancedMesh&&me.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&me.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&me.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&me.instancingMorph===!1&&z.morphTexture!==null||me.envMap!==ye||O.fog===!0&&me.fog!==he||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==Ee.numPlanes||me.numIntersection!==Ee.numIntersection)||me.vertexAlphas!==Ne||me.vertexTangents!==Be||me.morphTargets!==Se||me.morphNormals!==Qe||me.morphColors!==bt||me.toneMapping!==ft||me.morphTargetsCount!==Ut||!!me.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Xe=!0):(Xe=!0,me.__version=O.version);let rn=me.currentProgram;Xe===!0&&(rn=Br(O,C,z),B&&O.isNodeMaterial&&B.onUpdateProgram(O,rn,me));let bn=!1,qn=!1,Ri=!1;const it=rn.getUniforms(),St=me.uniforms;if(g.useProgram(rn.program)&&(bn=!0,qn=!0,Ri=!0),O.id!==$&&($=O.id,qn=!0),me.needsLights){const lt=sf(b.state.lightProbeGridArray,z);me.lightProbeGrid!==lt&&(me.lightProbeGrid=lt,qn=!0)}if(bn||ee!==x){g.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),it.setValue(D,"projectionMatrix",x.projectionMatrix),it.setValue(D,"viewMatrix",x.matrixWorldInverse);const Kn=it.map.cameraPosition;Kn!==void 0&&Kn.setValue(D,ht.setFromMatrixPosition(x.matrixWorld)),E.logarithmicDepthBuffer&&it.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&it.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),ee!==x&&(ee=x,qn=!0,Ri=!0)}if(me.needsLights&&(Gt.state.sunShadowMap.length>0&&it.setValue(D,"sunShadowMap",Gt.state.sunShadowMap,X),Gt.state.directionalShadowMap.length>0&&it.setValue(D,"directionalShadowMap",Gt.state.directionalShadowMap,X),Gt.state.spotShadowMap.length>0&&it.setValue(D,"spotShadowMap",Gt.state.spotShadowMap,X),Gt.state.pointShadowMap.length>0&&it.setValue(D,"pointShadowMap",Gt.state.pointShadowMap,X)),z.isSkinnedMesh){it.setOptional(D,z,"bindMatrix"),it.setOptional(D,z,"bindMatrixInverse");const lt=z.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),it.setValue(D,"boneTexture",lt.boneTexture,X))}z.isBatchedMesh&&(it.setOptional(D,z,"batchingTexture"),it.setValue(D,"batchingTexture",z._matricesTexture,X),it.setOptional(D,z,"batchingIdTexture"),it.setValue(D,"batchingIdTexture",z._indirectTexture,X),it.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&it.setValue(D,"batchingColorTexture",z._colorsTexture,X));const Yn=V.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&P.update(z,V,rn),(qn||me.receiveShadow!==z.receiveShadow)&&(me.receiveShadow=z.receiveShadow,it.setValue(D,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&C.environment!==null&&(St.envMapIntensity.value=C.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=hM()),qn){if(it.setValue(D,"toneMappingExposure",I.toneMappingExposure),me.needsLights&&of(St,Ri),he&&O.fog===!0&&be.refreshFogUniforms(St,he),be.refreshMaterialUniforms(St,O,j,Z,b.state.transmissionRenderTarget[x.id]),me.needsLights&&me.lightProbeGrid){const lt=me.lightProbeGrid;St.probesSH.value=lt.texture,St.probesMin.value.copy(lt.boundingBox.min),St.probesMax.value.copy(lt.boundingBox.max),St.probesResolution.value.copy(lt.resolution)}Ms.upload(D,sc(me),St,X)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ms.upload(D,sc(me),St,X),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&it.setValue(D,"center",z.center),it.setValue(D,"modelViewMatrix",z.modelViewMatrix),it.setValue(D,"normalMatrix",z.normalMatrix),it.setValue(D,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){const lt=O.uniformsGroups;for(let Kn=0,Ci=lt.length;Kn<Ci;Kn++){const cc=lt[Kn];te.update(cc,rn),te.bind(cc,rn)}}return rn}function of(x,C){x.ambientLightColor.needsUpdate=C,x.lightProbe.needsUpdate=C,x.sunLights.needsUpdate=C,x.sunLightShadows.needsUpdate=C,x.directionalLights.needsUpdate=C,x.directionalLightShadows.needsUpdate=C,x.pointLights.needsUpdate=C,x.pointLightShadows.needsUpdate=C,x.spotLights.needsUpdate=C,x.spotLightShadows.needsUpdate=C,x.rectAreaLights.needsUpdate=C,x.hemisphereLights.needsUpdate=C}function cf(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(x,C,V){const O=G.get(x);O.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),G.get(x.texture).__webglTexture=C,G.get(x.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:V,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,C){const V=G.get(x);V.__webglFramebuffer=C,V.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(x,C=0,V=0){ie=x,Y=C,W=V;let O=null,z=!1,he=!1;if(x){const de=G.get(x);if(de.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,de.__webglFramebuffer),ne.copy(x.viewport),Re.copy(x.scissor),Te=x.scissorTest,g.viewport(ne),g.scissor(Re),g.setScissorTest(Te),$=-1;return}else if(de.__webglFramebuffer===void 0)X.setupRenderTarget(x);else if(de.__hasExternalTextures)X.rebindTextures(x,G.get(x.texture).__webglTexture,G.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ne=x.depthTexture;if(de.__boundDepthTexture!==Ne){if(Ne!==null&&G.has(Ne)&&(x.width!==Ne.image.width||x.height!==Ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(x)}}const xe=x.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(he=!0);const ye=G.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(ye[C])?O=ye[C][V]:O=ye[C],z=!0):x.samples>0&&X.useMultisampledRTT(x)===!1?O=G.get(x).__webglMultisampledFramebuffer:Array.isArray(ye)?O=ye[V]:O=ye,ne.copy(x.viewport),Re.copy(x.scissor),Te=x.scissorTest}else ne.copy(ge).multiplyScalar(j).floor(),Re.copy(Fe).multiplyScalar(j).floor(),Te=wt;if(V!==0&&(O=H),g.bindFramebuffer(D.FRAMEBUFFER,O)&&g.drawBuffers(x,O),g.viewport(ne),g.scissor(Re),g.setScissorTest(Te),z){const de=G.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+C,de.__webglTexture,V)}else if(he){const de=C;for(let xe=0;xe<x.textures.length;xe++){const ye=G.get(x.textures[xe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+xe,ye.__webglTexture,V,de)}}else if(x!==null&&V!==0){const de=G.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,de.__webglTexture,V)}$=-1};function oc(x){const C=G.get(x);return(C.__readFormat!==x.format||C.__readType!==x.type)&&(C.__readFormat=x.format,C.__readType=x.type,C.__formatReadable=E.textureFormatReadable(x.format),C.__typeReadable=E.textureTypeReadable(x.type)),C}this.readRenderTargetPixels=function(x,C,V,O,z,he,_e,de=0){if(!(x&&x.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_e!==void 0&&(xe=xe[_e]),xe){g.bindFramebuffer(D.FRAMEBUFFER,xe);try{const ye=x.textures[de],Ne=ye.format,Be=ye.type;x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+de);const Se=oc(ye);if(Se.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=x.width-O&&V>=0&&V<=x.height-z&&D.readPixels(C,V,O,z,le.convert(Ne),le.convert(Be),he)}finally{const ye=ie!==null?G.get(ie).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(x,C,V,O,z,he,_e,de=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_e!==void 0&&(xe=xe[_e]),xe)if(C>=0&&C<=x.width-O&&V>=0&&V<=x.height-z){g.bindFramebuffer(D.FRAMEBUFFER,xe);const ye=x.textures[de],Ne=ye.format,Be=ye.type;x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+de);const Se=oc(ye);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Qe),D.bufferData(D.PIXEL_PACK_BUFFER,he.byteLength,D.STREAM_READ),D.readPixels(C,V,O,z,le.convert(Ne),le.convert(Be),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const bt=ie!==null?G.get(ie).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,bt);const ft=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Dg(D,ft,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Qe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,he),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Qe),D.deleteSync(ft),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,C=null,V=0){const O=Math.pow(2,-V),z=Math.floor(x.image.width*O),he=Math.floor(x.image.height*O),_e=C!==null?C.x:0,de=C!==null?C.y:0;X.setTexture2D(x,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,_e,de,z,he),g.unbindTexture()},this.copyTextureToTexture=function(x,C,V=null,O=null,z=0,he=0){let _e,de,xe,ye,Ne,Be,Se,Qe,bt;const ft=x.isCompressedTexture?x.mipmaps[he]:x.image;if(V!==null)_e=V.max.x-V.min.x,de=V.max.y-V.min.y,xe=V.isBox3?V.max.z-V.min.z:1,ye=V.min.x,Ne=V.min.y,Be=V.isBox3?V.min.z:0;else{const St=Math.pow(2,-z);_e=Math.floor(ft.width*St),de=Math.floor(ft.height*St),x.isDataArrayTexture?xe=ft.depth:x.isData3DTexture?xe=Math.floor(ft.depth*St):xe=1,ye=0,Ne=0,Be=0}O!==null?(Se=O.x,Qe=O.y,bt=O.z):(Se=0,Qe=0,bt=0);const rt=le.convert(C.format),Ut=le.convert(C.type);let me;C.isData3DTexture?(X.setTexture3D(C,0),me=D.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(X.setTexture2DArray(C,0),me=D.TEXTURE_2D_ARRAY):(X.setTexture2D(C,0),me=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,C.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,C.unpackAlignment);const Gt=g.getParameter(D.UNPACK_ROW_LENGTH),Xe=g.getParameter(D.UNPACK_IMAGE_HEIGHT),rn=g.getParameter(D.UNPACK_SKIP_PIXELS),bn=g.getParameter(D.UNPACK_SKIP_ROWS),qn=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,ft.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ft.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,ye),g.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Be);const Ri=x.isDataArrayTexture||x.isData3DTexture,it=C.isDataArrayTexture||C.isData3DTexture;if(x.isDepthTexture){const St=G.get(x),Yn=G.get(C),lt=G.get(St.__renderTarget),Kn=G.get(Yn.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,lt.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Ci=0;Ci<xe;Ci++)Ri&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(x).__webglTexture,z,Be+Ci),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(C).__webglTexture,he,bt+Ci)),D.blitFramebuffer(ye,Ne,_e,de,Se,Qe,_e,de,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||x.isRenderTargetTexture||G.has(x)){const St=G.get(x),Yn=G.get(C);g.bindFramebuffer(D.READ_FRAMEBUFFER,L),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,k);for(let lt=0;lt<xe;lt++)Ri?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.__webglTexture,z,Be+lt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,St.__webglTexture,z),it?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Yn.__webglTexture,he,bt+lt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Yn.__webglTexture,he),z!==0?D.blitFramebuffer(ye,Ne,_e,de,Se,Qe,_e,de,D.COLOR_BUFFER_BIT,D.NEAREST):it?D.copyTexSubImage3D(me,he,Se,Qe,bt+lt,ye,Ne,_e,de):D.copyTexSubImage2D(me,he,Se,Qe,ye,Ne,_e,de);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else it?x.isDataTexture||x.isData3DTexture?D.texSubImage3D(me,he,Se,Qe,bt,_e,de,xe,rt,Ut,ft.data):C.isCompressedArrayTexture?D.compressedTexSubImage3D(me,he,Se,Qe,bt,_e,de,xe,rt,ft.data):D.texSubImage3D(me,he,Se,Qe,bt,_e,de,xe,rt,Ut,ft):x.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,he,Se,Qe,_e,de,rt,Ut,ft.data):x.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,he,Se,Qe,ft.width,ft.height,rt,ft.data):D.texSubImage2D(D.TEXTURE_2D,he,Se,Qe,_e,de,rt,Ut,ft);g.pixelStorei(D.UNPACK_ROW_LENGTH,Gt),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Xe),g.pixelStorei(D.UNPACK_SKIP_PIXELS,rn),g.pixelStorei(D.UNPACK_SKIP_ROWS,bn),g.pixelStorei(D.UNPACK_SKIP_IMAGES,qn),he===0&&C.generateMipmaps&&D.generateMipmap(me),g.unbindTexture()},this.initRenderTarget=function(x){G.get(x).__webglFramebuffer===void 0&&X.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?X.setTextureCube(x,0):x.isData3DTexture?X.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?X.setTexture2DArray(x,0):X.setTexture2D(x,0),g.unbindTexture()},this.resetState=function(){Y=0,W=0,ie=null,g.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}const Hi=Vn([Ve().finite(),Ve().finite(),Ve().finite()]),Gn=Vn([Ve().int().min(0).max(255),Ve().int().min(0).max(255),Ve().int().min(0).max(255),Ve().int().min(0).max(255)]),mn=Ve().int().nonnegative(),Pl=Mt(Ve().finite()).length(16),mM=an({background:Gn,grid:Gn,surface:Gn,bars:Gn,wireframe:Gn,stroke:Gn,points:Gn,text:Gn,line_width:Ve().nonnegative(),grid_width:Ve().nonnegative(),axis_width:Ve().nonnegative(),point_radius:Ve().nonnegative(),arrow_length:Ve().nonnegative(),arrow_width:Ve().nonnegative()}),gM=an({dimension:No([Er(2),Er(3)]),title:Ki(),style:mM,vertices:Mt(an({position:Hi})).max(1e5),points:Mt(mn).max(1e5),triangles:Mt(Vn([mn,mn,mn])).max(2e5),cells:Mt(Pr()).max(1e3),show_grid:kn(),show_axes:kn(),show_axis_arrows:kn(),axes:Mt(an({label:Ki(),unit:Ki(),color:Gn,begin:Hi,end:Hi,ticks:Mt(an({value:Ve().finite(),position:Hi})).max(1e3)})).max(3),rendering:an({version:Er(1),host_background:kn().default(!1),host_axis_colors:Vn([kn(),kn(),kn()]).default([!1,!1,!1]),canvas_size:Vn([Ve().min(64).max(4096),Ve().min(64).max(4096)]).default([1e3,700]),view_matrix:Pl,projection_matrix:Pl,viewport:Vn([Ve(),Ve(),Ve().positive(),Ve().positive()]),segment_indices:Mt(Vn([mn,mn])).max(2e5),grid_lines:Mt(an({origin:Hi,direction:Hi})).max(1e3),surface:an({wireframe_indices:Mt(Vn([mn,mn])).max(3e5),levels:Mt(an({triangles:Mt(Vn([mn,mn,mn])).max(2e5),max_error_world:Ve().finite().nonnegative()})).max(16),lod_enabled:kn(),max_error_pixels:Ve().finite().positive().max(20)}).optional()})}),_M=`
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
}`;function Wi(n){return new $e(`rgb(${n[0]},${n[1]},${n[2]})`)}class vM{constructor(e,t){this.canvas=e,this.labels=t;const i=t.getContext("2d");if(!i)throw new Error("Canvas labels unavailable");this.ink=i,this.renderer=new pM({canvas:e,antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(1e3,700,!1),this.renderer.setPixelRatio(1),t.width=1e3,t.height=700,this.camera.matrixAutoUpdate=!1,this.scene.add(this.root),e.dataset.renderer="webgl2",this.resize_observer=new ResizeObserver(()=>{this.resize()}),this.resize_observer.observe(e)}canvas;renderer;scene=new qg;root=new Mr;camera=new qo;ink;data;base;labels;frames=0;times=[];disposed=!1;dark=!1;pixel_scale=1;buffer_width=1e3;buffer_height=700;resize_observer;axis_lines=[];surface_geometry;levels=[];current_level=-1;line_updates=[];surface_bounds=new or;axis_tint(e){const t=this.data,i=t.axes[e].color;if(t.dimension===2&&t.rendering.host_axis_colors[e]){const r=this.dark?255:0;return[r,r,r,i[3]]}return i}set_theme(e){this.dark=e;for(const[t,i]of this.axis_lines.entries())if(i){const r=Wi(this.axis_tint(t)),s=i.material.uniforms.tint.value;s.set(r.r,r.g,r.b,s.w)}this.draw()}resize(){const e=this.canvas.getBoundingClientRect().width;if(this.disposed||e<=0)return;const t=this.buffer_width/e,i=t/this.pixel_scale;this.pixel_scale=t,this.root.traverse(r=>{if(!(r instanceof Jt||r instanceof Ma))return;const s=Array.isArray(r.material)?r.material:[r.material];for(const a of s)if(a instanceof Qt)for(const o of["line_width","size"])a.uniforms[o]&&(a.uniforms[o].value*=i)}),this.canvas.dataset.pixelScale=String(t),this.draw()}clear(){this.root.traverse(e=>{if(e instanceof Jt||e instanceof s_||e instanceof Ma){e.geometry.dispose();const t=Array.isArray(e.material)?e.material:[e.material];for(const i of t)i.dispose()}}),this.root.clear(),this.axis_lines=[],this.surface_geometry=void 0,this.levels=[],this.current_level=-1,this.line_updates=[]}lines(e,t,i,r=!1){if(!e.length||!t[3]||!i)return;const s=e.length/6,a=new Float32Array(s*4*4),o=new Uint32Array(s*6);for(let M=0;M<s;++M)o.set([M*4,M*4+1,M*4+2,M*4+2,M*4+3,M*4],M*6);const l=new Wt,c=new Mn(a,4).setUsage(Fc);l.setAttribute("clip_position",c),l.setIndex(new Mn(o,1));const f=Wi(t),d=new Qt({vertexShader:"attribute vec4 clip_position; void main() { gl_Position = clip_position; }",fragmentShader:`uniform vec4 tint; void main() { gl_FragColor = tint;
				#include <colorspace_fragment>
			}`,uniforms:{tint:{value:new st(f.r,f.g,f.b,t[3]/255)},line_width:{value:i*this.pixel_scale}},transparent:r||t[3]<255,depthWrite:!1,depthTest:!r,side:cn}),u=new Jt(l,d);u.renderOrder=r?10:0,u.frustumCulled=!1,this.root.add(u);const h=new tt,_=new tt,S=new st,m=new st,[,,p,T]=this.data.rendering.viewport;let R=NaN;return this.line_updates.push(()=>{h.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse).multiply(this.root.matrix);const M=d.uniforms.line_width.value;if(!(h.equals(_)&&M===R)){_.copy(h),R=M;for(let y=0;y<s;++y){const b=y*6;S.set(e[b],e[b+1],e[b+2],1).applyMatrix4(h),m.set(e[b+3],e[b+4],e[b+5],1).applyMatrix4(h);const A=S.z+S.w,v=m.z+m.w;if(A<0&&v<0){a.fill(0,y*16,(y+1)*16);continue}A<0?S.lerp(m,A/(A-v)):v<0&&m.lerp(S,v/(v-A));const w=(m.x/m.w-S.x/S.w)*p,I=(m.y/m.w-S.y/S.w)*T,N=Math.hypot(w,I);if(N<=1e-10||!Number.isFinite(N)){a.fill(0,y*16,(y+1)*16);continue}const B=-I*M/(N*p),H=w*M/(N*T);for(let L=0;L<4;++L){const k=L<2?S:m,Y=L===0||L===3?-1:1,W=y*16+L*4;a[W]=k.x+B*Y*k.w,a[W+1]=k.y+H*Y*k.w,a[W+2]=k.z,a[W+3]=k.w}}c.needsUpdate=!0}}),u}load(e,t){const i=e.vertices.length,r=e.rendering.surface?.levels.flatMap(d=>d.triangles.flat())??[];for(const d of[...e.triangles.flat(),...e.rendering.segment_indices.flat(),...e.points,...e.rendering.surface?.wireframe_indices.flat()??[],...r])if(d>=i)throw new Error("Scene index exceeds vertex count");this.clear(),this.data=e,[this.buffer_width,this.buffer_height]=e.rendering.canvas_size,this.renderer.setSize(this.buffer_width,this.buffer_height,!1),this.labels.width=this.buffer_width,this.labels.height=this.buffer_height,this.pixel_scale=this.buffer_width/Math.max(1,this.canvas.getBoundingClientRect().width),this.canvas.title=e.axes.map(d=>d.label+(d.unit?` (${d.unit})`:"")).join(" · "),this.base=structuredClone(t),this.root.matrixAutoUpdate=!1,this.root.matrix.identity(),this.camera.matrixWorld.fromArray(e.rendering.view_matrix).transpose().invert(),this.camera.matrix.copy(this.camera.matrixWorld),this.camera.matrixWorldInverse.copy(this.camera.matrixWorld).invert(),this.camera.projectionMatrix.fromArray(e.rendering.projection_matrix).transpose();const s=new tt().set(1,0,0,0,0,1,0,0,0,0,2,-1,0,0,0,1);this.camera.projectionMatrix.premultiply(s),this.camera.projectionMatrixInverse.copy(this.camera.projectionMatrix).invert();const a=e.vertices.flatMap(d=>d.position),o=e.cells.length?e.style.bars:e.style.surface;if(e.triangles.length&&o[3]){const d=new Wt;d.setAttribute("position",new zt(a,3)),d.setIndex(new Xo(e.triangles.flat(),1).setUsage(Fc)),this.surface_geometry=d,d.computeBoundingBox(),this.surface_bounds.copy(d.boundingBox),this.levels=[{indices:new Uint32Array(e.triangles.flat()),error:0}];for(const h of e.rendering.surface?.lod_enabled?e.rendering.surface.levels:[])this.levels.push({indices:new Uint32Array(h.triangles.flat()),error:h.max_error_world});const u=new Zo({color:Wi(o),opacity:o[3]/255,transparent:o[3]<255,side:cn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,forceSinglePass:!0});this.root.add(new Jt(d,u))}const l=[],c=new Set;if(e.rendering.surface)for(const[d,u]of e.rendering.surface.wireframe_indices)l.push(...e.vertices[d].position,...e.vertices[u].position);else for(const d of e.triangles)for(let u=0;u<3;++u){const h=d[u],_=d[(u+1)%3],S=`${Math.min(h,_)}:${Math.max(h,_)}`;c.has(S)||(c.add(S),l.push(...e.vertices[h].position,...e.vertices[_].position))}this.lines(l,e.style.wireframe,1),this.canvas.dataset.wireSegments=String(l.length/6),this.canvas.dataset.sourceTriangles=String(e.triangles.length);const f=[];for(const[d,u]of e.rendering.segment_indices)f.push(...e.vertices[d].position,...e.vertices[u].position);if(this.lines(f,e.style.stroke,e.style.line_width),e.points.length&&e.style.points[3]&&e.style.point_radius){const d=new Wt;d.setAttribute("position",new zt(e.points.flatMap(_=>e.vertices[_].position),3));const u=Wi(e.style.points),h=new Qt({vertexShader:`uniform float size; void main() {
					gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_PointSize = size;
				}`,fragmentShader:`uniform vec4 tint; void main() {
					if (length(gl_PointCoord - vec2(.5)) > .5) discard;
					gl_FragColor = tint;
					#include <colorspace_fragment>
				}`,uniforms:{tint:{value:new st(u.r,u.g,u.b,e.style.points[3]/255)},size:{value:e.style.point_radius*2*this.pixel_scale}},transparent:!0});this.root.add(new Ma(d,h))}if(e.show_grid&&e.style.grid[3]&&e.style.grid_width){const d=[],u=[],h=[],_=[];for(const R of e.rendering.grid_lines){for(let M=0;M<6;++M)d.push(...R.origin),u.push(...R.direction);h.push(0,0,1,1,1,0),_.push(-1,1,1,1,-1,-1)}const S=new Wt;S.setAttribute("position",new zt(d,3)),S.setAttribute("direction",new zt(u,3)),S.setAttribute("edge",new zt(h,1)),S.setAttribute("side",new zt(_,1));const m=Wi(e.style.grid),p=new Qt({vertexShader:_M,fragmentShader:`uniform vec4 tint; void main() { gl_FragColor = tint;
					#include <colorspace_fragment>
				}`,uniforms:{tint:{value:new st(m.r,m.g,m.b,e.style.grid[3]/255)},line_width:{value:e.style.grid_width*this.pixel_scale},resolution:{value:new Ye(e.rendering.viewport[2],e.rendering.viewport[3])}},transparent:!0,depthWrite:!1,side:cn}),T=new Jt(S,p);T.renderOrder=-10,T.frustumCulled=!1,this.root.add(T)}if(e.show_axes)for(const[d,u]of e.axes.entries())this.axis_lines.push(this.lines([...u.begin,...u.end],this.axis_tint(d),e.style.axis_width,!0));this.renderer.setClearColor(Wi(e.style.background),e.rendering.host_background?0:e.style.background[3]/255),this.draw()}preview(e){if(!this.base)return;const t=this.base;if(e.dimension===3){const i=e.camera,r=new F().fromArray(i.target);this.camera.matrix.lookAt(new F().fromArray(i.eye),r,new F().fromArray(i.up)),this.camera.matrix.setPosition(new F().fromArray(i.eye)),this.camera.matrixWorld.copy(this.camera.matrix),this.camera.matrixWorldInverse.copy(this.camera.matrixWorld).invert();const s=i.projection==="orthographic"?t.camera.orthographic_width/i.orthographic_width:1;this.root.matrix.makeTranslation(...r.toArray()),this.root.matrix.scale(new F(s,s,s)),this.root.matrix.multiply(new tt().makeTranslation(...r.negate().toArray()))}else{const i=new F((t.view.lower[0]+t.view.upper[0])/2,(t.view.lower[1]+t.view.upper[1])/2,0),r=new F((e.view.lower[0]+e.view.upper[0])/2,(e.view.lower[1]+e.view.upper[1])/2,0),s=(t.view.upper[0]-t.view.lower[0])/(e.view.upper[0]-e.view.lower[0]);this.root.matrix.makeTranslation(...i.toArray()),this.root.matrix.scale(new F(s,s,1)),this.root.matrix.multiply(new tt().makeTranslation(...r.negate().toArray()))}}pan_offset(e,t,i){const r=new F().fromArray(i).project(this.camera),s=r.clone().unproject(this.camera);return new F(r.x-e*2*this.buffer_width/this.data.rendering.viewport[2],r.y+t*2*this.buffer_height/this.data.rendering.viewport[3],r.z).unproject(this.camera).sub(s).toArray()}select_detail(){if(!this.surface_geometry||!this.data)return;const e=new tt().multiplyMatrices(this.camera.matrixWorldInverse,this.root.matrix),t=this.camera.projectionMatrix.elements,[,,i,r]=this.data.rendering.viewport,s=Math.abs(t[0])*i/(2*this.pixel_scale),a=Math.abs(t[5])*r/(2*this.pixel_scale),o=new F().setFromMatrixColumn(this.root.matrix,0).length(),l=this.surface_bounds.clone().applyMatrix4(e),c=-l.max.z,f=t[15]===0,d=f?t[14]/(t[10]-1):0,u=this.data.rendering.surface?.max_error_pixels??1;let h=0,_=0;for(let S=1;S<this.levels.length;++S){const m=this.levels[S].error*o;let p=m*Math.hypot(s,a);if(f){if(c-m<=d)continue;const T=Math.max(Math.abs(l.min.x),Math.abs(l.max.x)),R=Math.max(Math.abs(l.min.y),Math.abs(l.max.y));p=m*Math.hypot(s*(1+T/c),a*(1+R/c))/(c-m)}p<=u&&(h=S,_=p)}if(h!==this.current_level){const S=this.surface_geometry.getIndex();S.array.set(this.levels[h].indices),S.needsUpdate=!0,this.surface_geometry.setDrawRange(0,this.levels[h].indices.length),this.current_level=h}this.canvas.dataset.lodLevel=String(h),this.canvas.dataset.renderTriangles=String(this.levels[h].indices.length/3),this.canvas.dataset.lodErrorPixels=String(_)}draw(){if(!this.data||this.disposed)return;const e=performance.now();this.select_detail();for(const a of this.line_updates)a();const[t,i,r,s]=this.data.rendering.viewport;for(this.renderer.setViewport(0,0,this.buffer_width,this.buffer_height),this.renderer.clear(),this.renderer.setViewport(t,this.buffer_height-i-s,r,s),this.renderer.setScissor(t,this.buffer_height-i-s,r,s),this.renderer.setScissorTest(!0),this.renderer.autoClear=!1,this.renderer.render(this.scene,this.camera),this.renderer.setScissorTest(!1),this.draw_labels(),++this.frames,this.times.push(e);this.times.length>2&&this.times[0]<e-1e3;)this.times.shift();this.canvas.dataset.frames=String(this.frames),this.canvas.dataset.fps=String((this.times.length-1)*1e3/Math.max(1,e-this.times[0])),this.canvas.dataset.drawMs=String(performance.now()-e)}draw_labels(){if(!this.data)return;const e=this.data,t=this.ink,[i,r,s,a]=e.rendering.viewport,o=this.pixel_scale,l=13*o,c=3*o,f=[];t.clearRect(0,0,this.buffer_width,this.buffer_height),t.font=`${l}px ${getComputedStyle(this.canvas).fontFamily||"system-ui"}`,t.textBaseline="top",t.save(),t.beginPath(),t.rect(i,r,s,a),t.clip();const d=T=>new F().fromArray(T).applyMatrix4(this.root.matrix).project(this.camera),[u,h,_,S]=e.style.background,m=e.rendering.host_background?getComputedStyle(this.canvas.parentElement).backgroundColor:`rgba(${u},${h},${_},${S/255})`,p=(T,R,M,y)=>{if(!T||!y[3])return;const b=s-c*2;if(t.measureText(T).width>b){const w=Array.from(T);let I=0,N=w.length;for(;I<N;){const B=Math.ceil((I+N)/2);t.measureText(w.slice(0,B).join("")+"…").width<=b?I=B:N=B-1}T=w.slice(0,I).join("")+"…"}const A=t.measureText(T).width,v={x:Math.max(i+c,Math.min(i+s-A-c,R)),y:Math.max(r+c,Math.min(r+a-l*1.25-c,M)),width:A,height:l*1.25};f.some(w=>v.x<w.x+w.width+c&&w.x<v.x+v.width+c&&v.y<w.y+w.height+c&&w.y<v.y+v.height+c)||(f.push(v),t.save(),t.globalAlpha=y[3]/255,t.strokeStyle=m,t.lineWidth=3*o,t.lineJoin="round",t.strokeText(T,v.x,v.y),t.fillStyle=`rgb(${y[0]},${y[1]},${y[2]})`,t.fillText(T,v.x,v.y),t.restore())};if(e.show_axes)for(const[T,R]of e.axes.entries()){const M=this.axis_tint(T);t.fillStyle=`rgba(${M[0]},${M[1]},${M[2]},${M[3]/255})`;const y=d(R.end);if(Math.abs(y.x)<=1&&Math.abs(y.y)<=1&&Math.abs(y.z)<=1){const b=i+(y.x+1)*s/2,A=r+(1-y.y)*a/2;if(p(R.label+(R.unit?` (${R.unit})`:""),b+5*o,A+5*o,M),e.show_axis_arrows){const v=d(R.begin),w=Math.atan2(-(y.y-v.y)*a,(y.x-v.x)*s);t.save(),t.translate(b,A),t.rotate(w),t.beginPath(),t.moveTo(0,0),t.lineTo(-e.style.arrow_length*o,-e.style.arrow_width*o/2),t.lineTo(-e.style.arrow_length*o,e.style.arrow_width*o/2),t.closePath(),t.fill(),t.restore()}}}if(e.show_axes)for(const[T,R]of e.axes.entries())for(const M of R.ticks){const y=d(M.position);Math.abs(y.x)>1||Math.abs(y.y)>1||Math.abs(y.z)>1||p(Number(M.value.toPrecision(3)).toString(),i+(y.x+1)*s/2+3*o,r+(1-y.y)*a/2+8*o,this.axis_tint(T))}t.restore()}dispose(){this.disposed=!0,this.resize_observer.disconnect(),this.clear(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.ink.clearRect(0,0,this.labels.width,this.labels.height)}}const vr=Array.from({length:80},(n,e)=>[e/8-5,Math.sin(e/8)*2,Math.cos(e/8)*2,e%7+1]),Zu=[];for(let n=0;n<9;++n)for(let e=0;e<9;++e)Zu.push([e-4,n-4,((e-4)**2-(n-4)**2)/8]);const Yo=[{name:"3D 함수 · 파동",spec:{kind:"function",dimension_count:2,expression:"sin(x)*cos(y)",sampling:{axes:[{variable:0,lower:-5,upper:5,count:81},{variable:1,lower:-5,upper:5,count:81}],fixed:[null,null]},invalid_values:"skip"}},{name:"2D 함수 · sin",spec:{kind:"function",dimension_count:1,expression:"sin(x)",sampling:{axes:[{variable:0,lower:-8,upper:8,count:401}],fixed:[null]}}},{name:"ND 함수 · 고정 변수",spec:{kind:"function",dimension_count:4,expression:"sin(x0*x2)+cos(x1)+x3",sampling:{axes:[{variable:0,lower:-4,upper:4,count:71},{variable:1,lower:-4,upper:4,count:71}],fixed:[null,null,2,.5]}}},{name:"2D 데이터 · 점",spec:{kind:"dataset",dimension_count:4,rows:vr,columns:[0,1],plot:"points"}},{name:"3D 데이터 · 곡선",spec:{kind:"dataset",dimension_count:4,rows:vr,columns:[0,1,2],plot:"curve"}},{name:"데이터 · 임의 경로",spec:{kind:"dataset",dimension_count:4,rows:vr,columns:[0,1,2],plot:"curve",paths:[[0,10,30,50],[5,25,45,65]]}},{name:"데이터 · 격자 곡면",spec:{kind:"dataset",dimension_count:3,rows:Zu,columns:[0,1,2],plot:"surface",grid:{u_count:9,v_count:9}}},{name:"2D 히스토그램 · 개수",spec:{kind:"histogram",dimension_count:4,rows:vr,histogram:{mode:"count",axes:[{column:0,uniform:{lower:-5,upper:5,step:1}}]}}},{name:"3D 히스토그램 · 합계",spec:{kind:"histogram",dimension_count:4,rows:vr,histogram:{mode:"sum",value_column:3,axes:[{column:1,uniform:{lower:-2.5,upper:2.5,step:1}},{column:2,uniform:{lower:-2.5,upper:2.5,step:1}}]}}}],xM=document.querySelector("#app");xM.innerHTML=`
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
<div class="preset-row"><label for="preset">예제</label><select id="preset" aria-label="예제 선택"></select></div>
<section id="content" class="sidebar-body" role="tabpanel" aria-labelledby="tab-input" tabindex="0"></section>
<div class="panel-actions"><button id="apply" class="primary">변경 적용</button></div>
<footer class="sidebar-status"><span id="pulse" aria-hidden="true">●</span>
<span id="status" role="status" aria-live="polite">그래프를 준비하고 있습니다…</span></footer></aside>
<main id="stage" aria-label="그래프 작업 공간">
<canvas id="graph" tabindex="0" role="img" aria-label="2D/3D 그래프, 왼쪽 이동, 오른쪽 회전, 휠 확대"></canvas>
<canvas id="labels" aria-hidden="true"></canvas>
<div class="canvas-controls" role="group" aria-label="관찰 조작">
<button id="open" aria-label="조작부 열기" aria-controls="sidebar" aria-expanded="false">☰</button>
<button id="zoom-out" aria-label="축소">−</button><span id="zoom-level" aria-live="off">100%</span>
<button id="zoom-in" aria-label="확대">＋</button><button id="reset" aria-label="그래프 맞춤">맞춤</button></div>
<div id="hud" class="canvas-caption">왼쪽 이동 <span>·</span> 오른쪽 회전 <span>·</span> 휠 확대</div>
<div id="error" role="alert"></div></main></div>`;function ut(n){return document.getElementById(n)}const It=ut("graph"),Nn=new vM(It,ut("labels")),qi=new qm,Bt=ut("content"),SM=an({dimension:No([Er(2),Er(3)]),view:an({lower:Mt(Ve()).length(2),upper:Mt(Ve()).length(2),preserve_aspect:kn()}),camera:an({eye:Mt(Ve()).length(3),target:Mt(Ve()).length(3),up:Mt(Ve()).length(3),projection:Ki(),fov_y:Ve(),near_distance:Ve(),far_distance:Ve(),orthographic_width:Ve(),orthographic_height:Ve()})});let vt={spec:structuredClone(Yo[0].spec),history:[]},Oe,gn,ni,Tr=0,Yt="input",_i=()=>structuredClone(vt.spec),Hn,Ns=!1,Il,Eo,si;const qu=matchMedia("(prefers-color-scheme: dark)");let Mi=qu.matches,Yu=!1;function rr(n){ut("error").textContent=n instanceof Error?n.message:String(n)}function Ku(){ut("error").textContent=""}function Ko(){document.body.classList.toggle("light",!Mi),document.documentElement.dataset.theme=Mi?"dark":"light",Nn.set_theme(Mi)}Ko();qu.addEventListener("change",n=>{Yu||(Mi=n.matches,Ko())});ut("theme").onclick=()=>{Yu=!0,Mi=!Mi,Ko()};function Vs(n){document.body.classList.toggle("collapsed",n),ut("fold").setAttribute("aria-expanded",String(!n)),ut("open").setAttribute("aria-expanded",String(!n))}ut("fold").onclick=()=>Vs(!0);ut("open").onclick=()=>Vs(!1);function wo(){const n=It.getBoundingClientRect();return[Math.max(64,Math.min(4096,Math.round(n.width))),Math.max(64,Math.min(4096,Math.round(n.height)))]}function Ju(){if(!Oe||!si)return;let n;if(Oe.dimension===2)n=(si.view.upper[0]-si.view.lower[0])/(Oe.view.upper[0]-Oe.view.lower[0]);else if(Oe.camera.projection==="orthographic")n=si.camera.orthographic_width/Oe.camera.orthographic_width;else{const e=t=>Math.hypot(...t.camera.eye.map((i,r)=>i-t.camera.target[r]));n=e(si)/e(Oe)}ut("zoom-level").textContent=`${Math.round(n*100)}%`}async function Kt(n,e=!1){const t=++Tr;Ku(),ut("status").textContent="코어 계산 중…";try{const i=n.spec,r={spec:i,history:n.history,canvas_size:wo()};i.kind==="function"&&(r.expression_ast=Ym(String(i.expression),Number(i.dimension_count)));const s=await qi.request(r);if(await document.fonts.ready,t!==Tr)return!1;const a=gM.parse(s),o=SM.parse(s);return Nn.load(a,o),Nn.set_theme(Mi),vt=structuredClone(n),Oe=o,si??=structuredClone(o),Ju(),gn=s,ni=a,It.dataset.ready="true",It.dataset.dimension=String(a.dimension),It.dataset.revision=String(s.cache_revision),ut("status").textContent=`${a.dimension}D · ${a.vertices.length.toLocaleString()} 정점 · ${a.triangles.length.toLocaleString()} 면 · revision ${s.cache_revision}`,e&&Hs(),!0}catch(i){return t===Tr&&(rr(i),ut("status").textContent="적용 실패 · 마지막 성공 그래프 유지"),!1}}function Tn(n,e){const t=document.createElement("h2");t.textContent=n;const i=document.createElement("p");i.textContent=e,Bt.append(t,i)}function br(n,e,t=!1){const i=document.createElement("label");i.textContent=n;const r=document.createElement(t?"textarea":"input");return r instanceof HTMLInputElement&&(r.type="text"),r.value=e,i.append(r),Bt.append(i),r}function Dt(n,e){return br(n,JSON.stringify(e,null,2),!0)}function An(n,e){const t=document.createElement("button");return t.textContent=n,t.onclick=()=>{Ku(),Promise.resolve().then(e).catch(i=>rr(i))},Bt.append(t),t}function Ra(n,e){const t=document.createElement("label");t.className="check";const i=document.createElement("input");return i.type="checkbox",i.checked=e,t.append(i,document.createTextNode(n)),Bt.append(t),i}function Ca(n,e,t){const i=document.createElement("label");i.textContent=n;const r=document.createElement("select");for(const s of e){const a=document.createElement("option");a.textContent=s,r.append(a)}return r.value=t,i.append(r),Bt.append(i),r}function Ar(n,e,t="application/json"){const i=URL.createObjectURL(new Blob([e],{type:t})),r=document.createElement("a");r.href=i,r.download=n,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}async function Qu(){await document.fonts.ready,Nn.draw();const n=document.createElement("canvas");n.width=It.width,n.height=It.height;const e=n.getContext("2d");e.fillStyle=getComputedStyle(ut("stage")).backgroundColor,e.fillRect(0,0,n.width,n.height),e.drawImage(It,0,0),e.drawImage(ut("labels"),0,0);const t=document.createElement("a");t.download="graph.png",t.href=n.toDataURL(),t.click()}function MM(){const n=document.createElement("div");n.className="export-control";const e=document.createElement("div");e.id="export-menu",e.hidden=!0,e.setAttribute("role","group"),e.setAttribute("aria-label","파일 출력 형식");const t=An("파일 출력 ▾",()=>{e.hidden=!e.hidden,t.setAttribute("aria-expanded",String(!e.hidden))});t.id="export-toggle",t.setAttribute("aria-expanded","false"),t.setAttribute("aria-controls","export-menu"),n.append(t,e),Bt.append(n);const i=[["이미지 파일로 출력 (.png)",Qu],["그래프 문서로 출력 (.json)",()=>Ar("graph.fgv.json",JSON.stringify(vt,null,2))],["raw 데이터로 출력 (.json)",()=>{const r=structuredClone(vt.spec);for(const s of["presentation","dimensions","output","theme","surface_rendering"])delete r[s];Ar("graph.raw.json",JSON.stringify({spec:r,history:vt.history},null,2))}],["코어 결과로 출력 (.json)",()=>Ar("scene.json",JSON.stringify(gn,null,2))]];for(const[r,s]of i)e.append(An(r,s));n.onkeydown=r=>{r.key==="Escape"&&(r.stopPropagation(),e.hidden=!0,t.setAttribute("aria-expanded","false"),t.focus())}}function Pa(n,e,t){const i=document.createElement("input");i.type="file",i.accept=e,i.setAttribute("aria-label",n),i.onchange=()=>{const s=i.files?.[0];if(s){if(s.size>8*1024*1024)return rr(new Error("파일 상한은 8 MiB입니다."));s.text().then(t).catch(a=>rr(a))}};const r=document.createElement("label");r.textContent=n,r.append(i),Bt.append(r)}function ji(n){return n.presentation||(n.presentation={}),Pt(n.presentation)}function Rr(n){const e=ji(n);return e.overrides||(e.overrides={}),Pt(e.overrides)}function Hs(){clearTimeout(Eo),Bt.replaceChildren(),Bt.setAttribute("aria-labelledby",`tab-${Yt}`),ut("apply").hidden=!["input","axes","camera"].includes(Yt);const n=structuredClone(vt.spec);if(_i=()=>n,Yt==="input"){Tn("입력 · ND 데이터","raw 입력에 표시 정보는 필요하지 않습니다. JSON 편집은 이 웹 호스트의 입력 양식입니다.");const e=Ca("시각화 대상",["function","dataset","histogram"],String(n.kind)),t=br("ND 차원 수",String(n.dimension_count)),i=Ca("결측값 정책 · null / 정의되지 않은 함수값",["reject","skip"],String(n.invalid_values??"reject")),r=[];if(n.kind==="function"){Tn("함수","x/y/z 또는 x0…x63. + - * / ^, sin cos tan exp log sqrt abs min max pow, pi e. 코드 실행 없이 제한 AST만 사용합니다.");const s=br("수식",String(n.expression));s.className="code-input",s.spellcheck=!1,r.push(["expression",s,!1]),r.push(["sampling",Dt("변화 축 · 범위 · 해상도 / 나머지 고정값",n.sampling),!0]),r.push(["surface_rendering",Dt("와이어프레임 / LOD",n.surface_rendering??{wireframe:"grid",wireframe_lines:[11,11],lod:{enabled:!0,max_error_pixels:1}}),!0])}else r.push(["rows",Dt("행 우선 원본 데이터 · null 허용",n.rows),!0]),n.kind==="dataset"?(r.push(["plot",Ca("표현",["points","curve","surface"],String(n.plot)),!1]),r.push(["columns",Dt("선택할 2개 / 3개 열",n.columns),!0]),r.push(["paths",Dt("임의 경로 · null은 입력 순서, []는 연결 없음",n.paths??null),!0]),r.push(["grid",Dt("곡면 격자 · u_count/v_count/row_indices",n.grid??null),!0])):(Tn("집계","mode: count / sum / mean. axes는 1개 또는 2개. uniform의 lower부터 step 간격으로 자르거나 intervals에 직접 구간을 지정합니다."),r.push(["histogram",Dt("구간 / 집계 / 값 열",n.histogram),!0]));_i=()=>{if(e.value!==n.kind)throw new Error("대상 종류 변경은 위 예제 선택 또는 문서 탭의 전체 명세로 시작하세요.");n.dimension_count=Number(t.value),n.invalid_values=i.value;for(const[s,a,o]of r){const l=o?JSON.parse(a.value):a.value;l===null?delete n[s]:n[s]=l}return n}}else if(Yt==="axes"){Tn("축 · 범위","격자는 무한 직선입니다. 축 길이는 샘플링·집계 범위와 독립입니다. 자동 설정으로 복원하려면 해당 필드를 null로 지정하세요.");const e=ji(n),t=Rr(n),i=Ra("격자 표시",!!(t.show_grid??e.show_grid??!0)),r=Ra("축 표시",!!(t.show_axes??e.show_axes??!0)),s=Ra("축 화살표",!!(t.show_axis_arrows??e.show_axis_arrows??!0)),a={};for(const d of["display_range","grid_spacing","grid_origin","axis_lengths","axis_origin"])a[d]=t[d]??e[d]??null;const o=Dt("범위 / 간격 / 원점 / 축 길이",a),l=Dt("제목 / 출력 축 이름·단위",{title:e.title??"",axes:e.axes??[]}),c=Dt("ND 열·변수 이름·단위",n.dimensions??[]),f=Dt("함수 출력 이름·단위",n.output??{});_i=()=>{const d=Pt(JSON.parse(o.value));for(const[u,h]of Object.entries(d))h===null?(delete t[u],delete e[u],u==="display_range"&&(t.automatic_range=!0)):(t[u]=h,u==="display_range"&&(t.automatic_range=!1));return t.show_grid=i.checked,t.show_axes=r.checked,t.show_axis_arrows=s.checked,Object.assign(e,Pt(JSON.parse(l.value))),n.dimensions=JSON.parse(c.value),n.output=JSON.parse(f.value),n}}else if(Yt==="style"){Tn("색상 · 크기","값을 변경하면 바로 반영됩니다. 2D 기본 축은 UI 밝기를 따르고, 3D 기본 축은 RGB입니다. 지정한 색은 유지됩니다.");const e=Rr(n),t=Pt(e.style??{});e.style=t;for(const[o,l]of Object.entries({background:"배경",grid:"격자",axes:"공통 축",stroke:"곡선",points:"데이터 점",surface:"곡면",wireframe:"곡면 격자",bars:"히스토그램 막대",text:"일반 글자"})){const c=o==="axes"?[128,128,128,255]:ni?.style[o],f=Mt(Ve()).length(4).parse(t[o]??c??[128,128,128,255]),d=document.createElement("label");d.textContent=l;const u=document.createElement("div");u.className="row";const h=document.createElement("input");h.type="color",h.value="#"+f.slice(0,3).map(m=>m.toString(16).padStart(2,"0")).join(""),h.setAttribute("aria-label",l+" 색상");const _=document.createElement("input");_.type="range",_.min="0",_.max="255",_.value=String(f[3]),_.setAttribute("aria-label",l+" 알파");const S=()=>{t[o]=[1,3,5].map(m=>parseInt(h.value.slice(m,m+2),16)),t[o].push(Number(_.value))};h.oninput=S,_.oninput=S,u.append(h,_),d.append(u),Bt.append(d)}const i=Dt("축별 RGBA · null은 공통 설정",t.axis_colors??[null,null,null]),r={},s=Pt(ji(n).style??{});for(const o of["line_width","point_radius","grid_width","axis_width","arrow_length","arrow_width","bar_gap"])r[o]=t[o]??s[o]??(o==="bar_gap"?.1:Pt(ni?.style??{})[o]);const a={line_width:"곡선 굵기",point_radius:"점 반지름",grid_width:"격자 굵기",axis_width:"축 굵기",arrow_length:"화살표 길이",arrow_width:"화살표 너비",bar_gap:"막대 간격"};for(const[o,l]of Object.entries(r)){const c=br(a[o],String(l));c.type="number",c.min="0",c.required=!0,c.step=o==="bar_gap"?"0.01":"0.1",o==="bar_gap"&&(c.max="0.99"),c.oninput=()=>{!c.validity.valid||!c.value.trim()||(t[o]=Number(c.value))}}_i=()=>(t.axis_colors=JSON.parse(i.value),n),An("색상·크기 기본값 복원",async()=>{delete e.style,delete ji(n).style,await Kt({spec:n,history:vt.history},!0)})}else if(Yt==="camera"){Tn("관찰 · 투영","왼쪽 드래그 이동, 오른쪽 드래그 3D 회전, 휠 확대·축소. 초기 3D는 양의 XYZ 쪽에서 보는 120° 등각 정투상입니다.");const e=Rr(n),t=Dt("2D 뷰 · preserve_aspect",e.view??Oe?.view),i=Dt("3D 카메라 · 원근 / 정투상 · fov_y는 라디안",e.camera??Oe?.camera);_i=()=>(Oe?.dimension===2?(e.view=Pt(JSON.parse(t.value)),e.automatic_view=!1):(e.camera=Pt(JSON.parse(i.value)),e.automatic_camera=!1),n)}else if(Yt==="stream"){Tn("증분 · 스트림","행 ID는 삭제 후에도 재사용하지 않습니다. 실패 배치는 반영되지 않습니다. 웹 데모는 최대 128개 배치를 재현하고, 코어는 영향 행·셀만 증분 갱신합니다.");const e=Dt("append / replace / erase · 고정 row_id",{append:[[0,0,0,1]],replace:[],erase:[]});An("배치 적용",async()=>{await Kt({spec:vt.spec,history:[...vt.history,Pt(JSON.parse(e.value))]},!0)}),Pa("NDJSON 배치 파일 · 한 줄에 한 변경 객체",".ndjson,.jsonl,.txt",async i=>{for(const r of i.split(/\r?\n/).filter(s=>s.trim().length>0))if(!await Kt({spec:vt.spec,history:[...vt.history,Pt(JSON.parse(r))]}))throw new Error("스트림 중단 · 앞서 성공한 배치는 유지됩니다.");Hs()}),Tn("전송 환경","브라우저는 임의 TCP 수신 소켓을 열 수 없습니다. 로컬/네트워크 Boost.Asio 수신은 네이티브 호스트의 역할입니다. 이 페이지는 파일 스트림과 증분 배치를 직접 시험합니다.");const t=document.createElement("pre");t.textContent=JSON.stringify({row_ids:gn?.row_ids,cache_revision:gn?.cache_revision,last_delta:gn?.last_delta,cells:gn?.cells},null,2),Bt.append(t)}else if(Yt==="document"){Tn("문서 · 테마","raw 입력과 표시 정보를 포함한 문서를 모두 받습니다. .fgvtheme은 실제 코어가 읽고 정규화합니다. 명시 override는 프로파일 기본값보다 우선합니다.");const e=Dt("전체 웹 호스트 문서 · spec / history",vt);e.className="long",An("문서 적용",async()=>{const i=Pt(JSON.parse(e.value));await Kt({spec:Pt(i.spec??i),history:Mt(Ac(Ki(),Pr())).parse(i.history??[])},!0)}),MM(),Pa("문서 / raw JSON 열기",".json",async i=>{const r=Pt(JSON.parse(i));await Kt({spec:Pt(r.spec??r),history:Mt(Ac(Ki(),Pr())).parse(r.history??[])},!0)});const t=br(".fgvtheme 프로파일",String(n.theme??`fgv-theme 1
`),!0);An("테마 검증·적용",async()=>{const i=await qi.request({operation:"theme",text:t.value});n.theme=i.text,await Kt({spec:n,history:vt.history},!0)}),An("테마 저장",async()=>{const i=await qi.request({operation:"theme",text:t.value});Ar("default.fgvtheme",String(i.text),"text/plain")}),Pa("테마 파일 열기",".fgvtheme",async i=>{const r=await qi.request({operation:"theme",text:i});n.theme=r.text,await Kt({spec:n,history:vt.history},!0)})}else{Tn("코어 · 진단","행렬·기하·집계·프레임은 C++23 코어에서 생성합니다. JavaScript는 입력 해석과 Three.js 렌더링을 담당합니다.");const e=Dt("투영 / 역변환 / ray / 직선·선분 절단",{world:[0,0,0],screen:[wo()[0]/2,wo()[1]/2],end:[1,1,1],line:{origin:[0,0,0],direction:[1,0,0]}}),t=document.createElement("pre");An("현재 뷰에서 변환",async()=>{t.textContent=JSON.stringify(await qi.request({...Pt(JSON.parse(e.value)),operation:"transform",dimension:Oe?.dimension,view:Oe?.view,camera:Oe?.camera,viewport:ni?.rendering.viewport}),null,2)}),Bt.append(t),An("코어 결과 JSON 저장",()=>Ar("scene.json",JSON.stringify(gn,null,2))),An("PNG 저장",Qu);const i=document.createElement("pre");i.textContent=JSON.stringify({version:"web 0.1.0 · core 0.7.0",range:gn?.range,bounds:gn?.bounds,stats:gn?.stats,sampling_axes:gn?.sampling_axes,rendering:{canvas_size:ni?.rendering.canvas_size,viewport:ni?.rendering.viewport,view_matrix:ni?.rendering.view_matrix,projection_matrix:ni?.rendering.projection_matrix}},null,2),Bt.append(i)}}const gi=[["input","입력","⌘"],["style","스타일","◐"],["axes","축·범위","⌁"],["camera","관찰","◇"],["stream","증분","⇄"],["diagnostics","진단","⋈"],["document","파일","▤"]];function Dl(n){Yt=n;for(const e of document.querySelectorAll("[role=tab]"))e.classList.toggle("active",e.dataset.tab===n),e.setAttribute("aria-selected",String(e.dataset.tab===n)),e.tabIndex=e.dataset.tab===n?0:-1;Vs(!1),Hs()}for(const[n,[e,t,i]]of gi.entries()){const r=document.createElement("button"),s=document.createElement("span");s.textContent=i,s.setAttribute("aria-hidden","true"),r.append(s,document.createTextNode(t)),r.id=`tab-${e}`,r.dataset.tab=e,r.setAttribute("role","tab"),r.setAttribute("aria-controls","content"),r.setAttribute("aria-selected",String(Yt===e)),r.tabIndex=Yt===e?0:-1,r.classList.toggle("active",Yt===e),r.onclick=()=>Dl(e),r.onkeydown=a=>{let o;if(a.key==="ArrowDown"||a.key==="ArrowRight")o=(n+1)%gi.length;else if(a.key==="ArrowUp"||a.key==="ArrowLeft")o=(n+gi.length-1)%gi.length;else if(a.key==="Home")o=0;else if(a.key==="End")o=gi.length-1;else return;a.preventDefault(),Dl(gi[o][0]),ut(`tab-${gi[o][0]}`).focus()},ut("tabs").append(r)}function ju(){Yt==="style"&&(clearTimeout(Eo),Eo=setTimeout(()=>{try{const n=structuredClone(_i());if(Bt.querySelector("input:invalid"))throw new Error("유효한 스타일 값을 입력하세요. 마지막 그래프는 유지됩니다.");Kt({spec:n,history:vt.history})}catch(n){rr(n)}},90))}Bt.addEventListener("input",ju);Bt.addEventListener("change",ju);const To=ut("preset");for(const[n,e]of Yo.entries()){const t=document.createElement("option");t.value=String(n),t.textContent=e.name,To.append(t)}To.onchange=()=>{si=void 0,Kt({spec:structuredClone(Yo[Number(To.value)].spec),history:[]},!0)};ut("apply").onclick=()=>{try{const n=_i();Kt({spec:n,history:vt.history},!0)}catch(n){rr(n)}};ut("reset").onclick=()=>{si=void 0;const n=structuredClone(vt.spec),e=ji(n),t=Rr(n);for(const i of["view","camera","display_range"])delete e[i],delete t[i];Object.assign(t,{automatic_range:!0,automatic_view:!0,automatic_camera:!0}),Kt({spec:n,history:vt.history},!0)};function Jo(){if(!Oe)return;const n=structuredClone(vt.spec),e=Rr(n);Oe.dimension===2?(e.view=Oe.view,e.automatic_view=!1,delete e.display_range,delete ji(n).display_range,e.automatic_range=!0):(e.camera=Oe.camera,e.automatic_camera=!1),Kt({spec:n,history:vt.history},Yt==="camera")}It.oncontextmenu=n=>n.preventDefault();It.onpointerdown=n=>{!Oe||n.button!==0&&n.button!==2||(It.setPointerCapture(n.pointerId),++Tr,Hn={x:n.clientX,y:n.clientY,button:n.button,state:structuredClone(Oe)})};It.onpointermove=n=>{if(!Hn||!Oe)return;const e=(n.clientX-Hn.x)/It.getBoundingClientRect().width,t=(n.clientY-Hn.y)/It.getBoundingClientRect().height,i=structuredClone(Hn.state);if(Hn.button===0)if(i.dimension===2){const r=-e*(i.view.upper[0]-i.view.lower[0]),s=t*(i.view.upper[1]-i.view.lower[1]);for(const a of[i.view.lower,i.view.upper])a[0]+=r,a[1]+=s}else{const r=Nn.pan_offset(e,t,i.camera.target);for(let s=0;s<3;++s)i.camera.eye[s]+=r[s],i.camera.target[s]+=r[s]}else if(i.dimension===3){const[r,s,a]=i.camera.eye.map((f,d)=>f-i.camera.target[d]),o=Math.hypot(r,s,a),l=Math.atan2(s,r)-e*Math.PI*2,c=Math.max(-1.52,Math.min(1.52,Math.asin(a/o)+t*Math.PI));i.camera.eye=[o*Math.cos(c)*Math.cos(l),o*Math.cos(c)*Math.sin(l),o*Math.sin(c)].map((f,d)=>f+i.camera.target[d])}Oe=i,Nn.preview(i),Ns=!0};It.onpointerup=n=>{Hn&&(Hn=void 0,It.releasePointerCapture(n.pointerId),Jo())};It.onpointercancel=()=>{Hn=void 0,Jo()};function Qo(n){if(Oe){if(++Tr,Oe.dimension===2)for(let e=0;e<2;++e){const t=(Oe.view.lower[e]+Oe.view.upper[e])/2;Oe.view.lower[e]=t+(Oe.view.lower[e]-t)/n,Oe.view.upper[e]=t+(Oe.view.upper[e]-t)/n}else Oe.camera.projection==="orthographic"?(Oe.camera.orthographic_width/=n,Oe.camera.orthographic_height/=n):Oe.camera.eye=Oe.camera.eye.map((e,t)=>Oe.camera.target[t]+(e-Oe.camera.target[t])/n);Nn.preview(Oe),Ns=!0,clearTimeout(Il),Il=setTimeout(Jo,140),Ju()}}ut("zoom-in").onclick=()=>Qo(1.2);ut("zoom-out").onclick=()=>Qo(1/1.2);It.addEventListener("wheel",n=>{n.preventDefault(),Qo(Math.exp(Math.max(-.4,Math.min(.4,-n.deltaY*.0015))))},{passive:!1});function ef(){Ns&&(Nn.draw(),Ns=!1),requestAnimationFrame(ef)}ef();document.fonts.ready.then(()=>{Nn.draw()});document.addEventListener("keydown",n=>{n.key!=="Escape"||document.body.classList.contains("collapsed")||(Vs(!0),ut("open").focus())});let Ll;new ResizeObserver(()=>{clearTimeout(Ll),Ll=setTimeout(()=>{Kt(vt)},160)}).observe(ut("stage"));window.addEventListener("pagehide",()=>{qi.dispose(),Nn.dispose()});Hs();Kt(vt,!0);
