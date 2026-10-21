(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function K(n,e,t){function i(o,c){if(o._zod||Object.defineProperty(o,"_zod",{value:{def:c,constr:a,traits:new Set},enumerable:!1}),o._zod.traits.has(n))return;o._zod.traits.add(n),e(o,c);const l=a.prototype,f=Object.keys(l);for(let d=0;d<f.length;d++){const u=f[d];u in o||(o[u]=l[u].bind(o))}}const r=t?.Parent??Object;class s extends r{}Object.defineProperty(s,"name",{value:n});function a(o){var c;const l=t?.Parent?new s:this;i(l,o),(c=l._zod).deferred??(c.deferred=[]);for(const f of l._zod.deferred)f();return l}return Object.defineProperty(a,"init",{value:i}),Object.defineProperty(a,Symbol.hasInstance,{value:o=>t?.Parent&&o instanceof t.Parent?!0:o?._zod?.traits?.has(n)}),Object.defineProperty(a,"name",{value:n}),a}class hr extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class Su extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}}const Mu={};function vi(n){return Mu}function yu(n){const e=Object.values(n).filter(i=>typeof i=="number");return Object.entries(n).filter(([i,r])=>e.indexOf(+i)===-1).map(([i,r])=>r)}function oo(n,e){return typeof e=="bigint"?e.toString():e}function cc(n){return{get value(){{const e=n();return Object.defineProperty(this,"value",{value:e}),e}}}}function lc(n){return n==null}function uc(n){const e=n.startsWith("^")?1:0,t=n.endsWith("$")?n.length-1:n.length;return n.slice(e,t)}function fd(n,e){const t=(n.toString().split(".")[1]||"").length,i=e.toString();let r=(i.split(".")[1]||"").length;if(r===0&&/\d?e-\d?/.test(i)){const c=i.match(/\d?e-(\d?)/);c?.[1]&&(r=Number.parseInt(c[1]))}const s=t>r?t:r,a=Number.parseInt(n.toFixed(s).replace(".","")),o=Number.parseInt(e.toFixed(s).replace(".",""));return a%o/10**s}const qc=Symbol("evaluating");function rt(n,e,t){let i;Object.defineProperty(n,e,{get(){if(i!==qc)return i===void 0&&(i=qc,i=t()),i},set(r){Object.defineProperty(n,e,{value:r})},configurable:!0})}function Hi(n,e,t){Object.defineProperty(n,e,{value:t,writable:!0,enumerable:!0,configurable:!0})}function Si(...n){const e={};for(const t of n){const i=Object.getOwnPropertyDescriptors(t);Object.assign(e,i)}return Object.defineProperties({},e)}function Yc(n){return JSON.stringify(n)}function dd(n){return n.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}const bu="captureStackTrace"in Error?Error.captureStackTrace:(...n)=>{};function Ks(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}const hd=cc(()=>{if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{const n=Function;return new n(""),!0}catch{return!1}});function xr(n){if(Ks(n)===!1)return!1;const e=n.constructor;if(e===void 0||typeof e!="function")return!0;const t=e.prototype;return!(Ks(t)===!1||Object.prototype.hasOwnProperty.call(t,"isPrototypeOf")===!1)}function Eu(n){return xr(n)?{...n}:Array.isArray(n)?[...n]:n}const pd=new Set(["string","number","symbol"]);function Sr(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Mi(n,e,t){const i=new n._zod.constr(e??n._zod.def);return(!e||t?.parent)&&(i._zod.parent=n),i}function Te(n){const e=n;if(!e)return{};if(typeof e=="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function md(n){return Object.keys(n).filter(e=>n[e]._zod.optin==="optional"&&n[e]._zod.optout==="optional")}const gd={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]};function _d(n,e){const t=n._zod.def,i=t.checks;if(i&&i.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");const s=Si(n._zod.def,{get shape(){const a={};for(const o in e){if(!(o in t.shape))throw new Error(`Unrecognized key: "${o}"`);e[o]&&(a[o]=t.shape[o])}return Hi(this,"shape",a),a},checks:[]});return Mi(n,s)}function vd(n,e){const t=n._zod.def,i=t.checks;if(i&&i.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");const s=Si(n._zod.def,{get shape(){const a={...n._zod.def.shape};for(const o in e){if(!(o in t.shape))throw new Error(`Unrecognized key: "${o}"`);e[o]&&delete a[o]}return Hi(this,"shape",a),a},checks:[]});return Mi(n,s)}function xd(n,e){if(!xr(e))throw new Error("Invalid input to extend: expected a plain object");const t=n._zod.def.checks;if(t&&t.length>0){const s=n._zod.def.shape;for(const a in e)if(Object.getOwnPropertyDescriptor(s,a)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}const r=Si(n._zod.def,{get shape(){const s={...n._zod.def.shape,...e};return Hi(this,"shape",s),s}});return Mi(n,r)}function Sd(n,e){if(!xr(e))throw new Error("Invalid input to safeExtend: expected a plain object");const t=Si(n._zod.def,{get shape(){const i={...n._zod.def.shape,...e};return Hi(this,"shape",i),i}});return Mi(n,t)}function Md(n,e){const t=Si(n._zod.def,{get shape(){const i={...n._zod.def.shape,...e._zod.def.shape};return Hi(this,"shape",i),i},get catchall(){return e._zod.def.catchall},checks:[]});return Mi(n,t)}function yd(n,e,t){const r=e._zod.def.checks;if(r&&r.length>0)throw new Error(".partial() cannot be used on object schemas containing refinements");const a=Si(e._zod.def,{get shape(){const o=e._zod.def.shape,c={...o};if(t)for(const l in t){if(!(l in o))throw new Error(`Unrecognized key: "${l}"`);t[l]&&(c[l]=n?new n({type:"optional",innerType:o[l]}):o[l])}else for(const l in o)c[l]=n?new n({type:"optional",innerType:o[l]}):o[l];return Hi(this,"shape",c),c},checks:[]});return Mi(e,a)}function bd(n,e,t){const i=Si(e._zod.def,{get shape(){const r=e._zod.def.shape,s={...r};if(t)for(const a in t){if(!(a in s))throw new Error(`Unrecognized key: "${a}"`);t[a]&&(s[a]=new n({type:"nonoptional",innerType:r[a]}))}else for(const a in r)s[a]=new n({type:"nonoptional",innerType:r[a]});return Hi(this,"shape",s),s}});return Mi(e,i)}function lr(n,e=0){if(n.aborted===!0)return!0;for(let t=e;t<n.issues.length;t++)if(n.issues[t]?.continue!==!0)return!0;return!1}function Di(n,e){return e.map(t=>{var i;return(i=t).path??(i.path=[]),t.path.unshift(n),t})}function us(n){return typeof n=="string"?n:n?.message}function xi(n,e,t){const i={...n,path:n.path??[]};if(!n.message){const r=us(n.inst?._zod.def?.error?.(n))??us(e?.error?.(n))??us(t.customError?.(n))??us(t.localeError?.(n))??"Invalid input";i.message=r}return delete i.inst,delete i.continue,e?.reportInput||delete i.input,i}function fc(n){return Array.isArray(n)?"array":typeof n=="string"?"string":"unknown"}function Yr(...n){const[e,t,i]=n;return typeof e=="string"?{message:e,code:"custom",input:t,inst:i}:{...e}}const wu=(n,e)=>{n.name="$ZodError",Object.defineProperty(n,"_zod",{value:n._zod,enumerable:!1}),Object.defineProperty(n,"issues",{value:e,enumerable:!1}),n.message=JSON.stringify(e,oo,2),Object.defineProperty(n,"toString",{value:()=>n.message,enumerable:!1})},Tu=K("$ZodError",wu),Au=K("$ZodError",wu,{Parent:Error});function Ed(n,e=t=>t.message){const t={},i=[];for(const r of n.issues)r.path.length>0?(t[r.path[0]]=t[r.path[0]]||[],t[r.path[0]].push(e(r))):i.push(e(r));return{formErrors:i,fieldErrors:t}}function wd(n,e=t=>t.message){const t={_errors:[]},i=r=>{for(const s of r.issues)if(s.code==="invalid_union"&&s.errors.length)s.errors.map(a=>i({issues:a}));else if(s.code==="invalid_key")i({issues:s.issues});else if(s.code==="invalid_element")i({issues:s.issues});else if(s.path.length===0)t._errors.push(e(s));else{let a=t,o=0;for(;o<s.path.length;){const c=s.path[o];o===s.path.length-1?(a[c]=a[c]||{_errors:[]},a[c]._errors.push(e(s))):a[c]=a[c]||{_errors:[]},a=a[c],o++}}};return i(n),t}const dc=n=>(e,t,i,r)=>{const s=i?Object.assign(i,{async:!1}):{async:!1},a=e._zod.run({value:t,issues:[]},s);if(a instanceof Promise)throw new hr;if(a.issues.length){const o=new(r?.Err??n)(a.issues.map(c=>xi(c,s,vi())));throw bu(o,r?.callee),o}return a.value},hc=n=>async(e,t,i,r)=>{const s=i?Object.assign(i,{async:!0}):{async:!0};let a=e._zod.run({value:t,issues:[]},s);if(a instanceof Promise&&(a=await a),a.issues.length){const o=new(r?.Err??n)(a.issues.map(c=>xi(c,s,vi())));throw bu(o,r?.callee),o}return a.value},fa=n=>(e,t,i)=>{const r=i?{...i,async:!1}:{async:!1},s=e._zod.run({value:t,issues:[]},r);if(s instanceof Promise)throw new hr;return s.issues.length?{success:!1,error:new(n??Tu)(s.issues.map(a=>xi(a,r,vi())))}:{success:!0,data:s.value}},Td=fa(Au),da=n=>async(e,t,i)=>{const r=i?Object.assign(i,{async:!0}):{async:!0};let s=e._zod.run({value:t,issues:[]},r);return s instanceof Promise&&(s=await s),s.issues.length?{success:!1,error:new n(s.issues.map(a=>xi(a,r,vi())))}:{success:!0,data:s.value}},Ad=da(Au),Rd=n=>(e,t,i)=>{const r=i?Object.assign(i,{direction:"backward"}):{direction:"backward"};return dc(n)(e,t,r)},Cd=n=>(e,t,i)=>dc(n)(e,t,i),Pd=n=>async(e,t,i)=>{const r=i?Object.assign(i,{direction:"backward"}):{direction:"backward"};return hc(n)(e,t,r)},Dd=n=>async(e,t,i)=>hc(n)(e,t,i),Id=n=>(e,t,i)=>{const r=i?Object.assign(i,{direction:"backward"}):{direction:"backward"};return fa(n)(e,t,r)},Ld=n=>(e,t,i)=>fa(n)(e,t,i),Nd=n=>async(e,t,i)=>{const r=i?Object.assign(i,{direction:"backward"}):{direction:"backward"};return da(n)(e,t,r)},Ud=n=>async(e,t,i)=>da(n)(e,t,i),Fd=/^[cC][^\s-]{8,}$/,Od=/^[0-9a-z]+$/,zd=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,Bd=/^[0-9a-vA-V]{20}$/,kd=/^[A-Za-z0-9]{27}$/,Gd=/^[a-zA-Z0-9_-]{21}$/,Vd=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Hd=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Kc=n=>n?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,Wd=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,Xd="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function $d(){return new RegExp(Xd,"u")}const Zd=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,qd=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,Yd=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Kd=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Jd=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Ru=/^[A-Za-z0-9_-]*$/,Qd=/^\+[1-9]\d{6,14}$/,Cu="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",jd=new RegExp(`^${Cu}$`);function Pu(n){const e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof n.precision=="number"?n.precision===-1?`${e}`:n.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${n.precision}}`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function eh(n){return new RegExp(`^${Pu(n)}$`)}function th(n){const e=Pu({precision:n.precision}),t=["Z"];n.local&&t.push(""),n.offset&&t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const i=`${e}(?:${t.join("|")})`;return new RegExp(`^${Cu}T(?:${i})$`)}const nh=n=>{const e=n?`[\\s\\S]{${n?.minimum??0},${n?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${e}$`)},ih=/^-?\d+$/,Du=/^-?\d+(?:\.\d+)?$/,rh=/^(?:true|false)$/i,sh=/^[^A-Z]*$/,ah=/^[^a-z]*$/,rn=K("$ZodCheck",(n,e)=>{var t;n._zod??(n._zod={}),n._zod.def=e,(t=n._zod).onattach??(t.onattach=[])}),Iu={number:"number",bigint:"bigint",object:"date"},Lu=K("$ZodCheckLessThan",(n,e)=>{rn.init(n,e);const t=Iu[typeof e.value];n._zod.onattach.push(i=>{const r=i._zod.bag,s=(e.inclusive?r.maximum:r.exclusiveMaximum)??Number.POSITIVE_INFINITY;e.value<s&&(e.inclusive?r.maximum=e.value:r.exclusiveMaximum=e.value)}),n._zod.check=i=>{(e.inclusive?i.value<=e.value:i.value<e.value)||i.issues.push({origin:t,code:"too_big",maximum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:n,continue:!e.abort})}}),Nu=K("$ZodCheckGreaterThan",(n,e)=>{rn.init(n,e);const t=Iu[typeof e.value];n._zod.onattach.push(i=>{const r=i._zod.bag,s=(e.inclusive?r.minimum:r.exclusiveMinimum)??Number.NEGATIVE_INFINITY;e.value>s&&(e.inclusive?r.minimum=e.value:r.exclusiveMinimum=e.value)}),n._zod.check=i=>{(e.inclusive?i.value>=e.value:i.value>e.value)||i.issues.push({origin:t,code:"too_small",minimum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:n,continue:!e.abort})}}),oh=K("$ZodCheckMultipleOf",(n,e)=>{rn.init(n,e),n._zod.onattach.push(t=>{var i;(i=t._zod.bag).multipleOf??(i.multipleOf=e.value)}),n._zod.check=t=>{if(typeof t.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof t.value=="bigint"?t.value%e.value===BigInt(0):fd(t.value,e.value)===0)||t.issues.push({origin:typeof t.value,code:"not_multiple_of",divisor:e.value,input:t.value,inst:n,continue:!e.abort})}}),ch=K("$ZodCheckNumberFormat",(n,e)=>{rn.init(n,e),e.format=e.format||"float64";const t=e.format?.includes("int"),i=t?"int":"number",[r,s]=gd[e.format];n._zod.onattach.push(a=>{const o=a._zod.bag;o.format=e.format,o.minimum=r,o.maximum=s,t&&(o.pattern=ih)}),n._zod.check=a=>{const o=a.value;if(t){if(!Number.isInteger(o)){a.issues.push({expected:i,format:e.format,code:"invalid_type",continue:!1,input:o,inst:n});return}if(!Number.isSafeInteger(o)){o>0?a.issues.push({input:o,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:n,origin:i,inclusive:!0,continue:!e.abort}):a.issues.push({input:o,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:n,origin:i,inclusive:!0,continue:!e.abort});return}}o<r&&a.issues.push({origin:"number",input:o,code:"too_small",minimum:r,inclusive:!0,inst:n,continue:!e.abort}),o>s&&a.issues.push({origin:"number",input:o,code:"too_big",maximum:s,inclusive:!0,inst:n,continue:!e.abort})}}),lh=K("$ZodCheckMaxLength",(n,e)=>{var t;rn.init(n,e),(t=n._zod.def).when??(t.when=i=>{const r=i.value;return!lc(r)&&r.length!==void 0}),n._zod.onattach.push(i=>{const r=i._zod.bag.maximum??Number.POSITIVE_INFINITY;e.maximum<r&&(i._zod.bag.maximum=e.maximum)}),n._zod.check=i=>{const r=i.value;if(r.length<=e.maximum)return;const a=fc(r);i.issues.push({origin:a,code:"too_big",maximum:e.maximum,inclusive:!0,input:r,inst:n,continue:!e.abort})}}),uh=K("$ZodCheckMinLength",(n,e)=>{var t;rn.init(n,e),(t=n._zod.def).when??(t.when=i=>{const r=i.value;return!lc(r)&&r.length!==void 0}),n._zod.onattach.push(i=>{const r=i._zod.bag.minimum??Number.NEGATIVE_INFINITY;e.minimum>r&&(i._zod.bag.minimum=e.minimum)}),n._zod.check=i=>{const r=i.value;if(r.length>=e.minimum)return;const a=fc(r);i.issues.push({origin:a,code:"too_small",minimum:e.minimum,inclusive:!0,input:r,inst:n,continue:!e.abort})}}),fh=K("$ZodCheckLengthEquals",(n,e)=>{var t;rn.init(n,e),(t=n._zod.def).when??(t.when=i=>{const r=i.value;return!lc(r)&&r.length!==void 0}),n._zod.onattach.push(i=>{const r=i._zod.bag;r.minimum=e.length,r.maximum=e.length,r.length=e.length}),n._zod.check=i=>{const r=i.value,s=r.length;if(s===e.length)return;const a=fc(r),o=s>e.length;i.issues.push({origin:a,...o?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:i.value,inst:n,continue:!e.abort})}}),ha=K("$ZodCheckStringFormat",(n,e)=>{var t,i;rn.init(n,e),n._zod.onattach.push(r=>{const s=r._zod.bag;s.format=e.format,e.pattern&&(s.patterns??(s.patterns=new Set),s.patterns.add(e.pattern))}),e.pattern?(t=n._zod).check??(t.check=r=>{e.pattern.lastIndex=0,!e.pattern.test(r.value)&&r.issues.push({origin:"string",code:"invalid_format",format:e.format,input:r.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:n,continue:!e.abort})}):(i=n._zod).check??(i.check=()=>{})}),dh=K("$ZodCheckRegex",(n,e)=>{ha.init(n,e),n._zod.check=t=>{e.pattern.lastIndex=0,!e.pattern.test(t.value)&&t.issues.push({origin:"string",code:"invalid_format",format:"regex",input:t.value,pattern:e.pattern.toString(),inst:n,continue:!e.abort})}}),hh=K("$ZodCheckLowerCase",(n,e)=>{e.pattern??(e.pattern=sh),ha.init(n,e)}),ph=K("$ZodCheckUpperCase",(n,e)=>{e.pattern??(e.pattern=ah),ha.init(n,e)}),mh=K("$ZodCheckIncludes",(n,e)=>{rn.init(n,e);const t=Sr(e.includes),i=new RegExp(typeof e.position=="number"?`^.{${e.position}}${t}`:t);e.pattern=i,n._zod.onattach.push(r=>{const s=r._zod.bag;s.patterns??(s.patterns=new Set),s.patterns.add(i)}),n._zod.check=r=>{r.value.includes(e.includes,e.position)||r.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:r.value,inst:n,continue:!e.abort})}}),gh=K("$ZodCheckStartsWith",(n,e)=>{rn.init(n,e);const t=new RegExp(`^${Sr(e.prefix)}.*`);e.pattern??(e.pattern=t),n._zod.onattach.push(i=>{const r=i._zod.bag;r.patterns??(r.patterns=new Set),r.patterns.add(t)}),n._zod.check=i=>{i.value.startsWith(e.prefix)||i.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:i.value,inst:n,continue:!e.abort})}}),_h=K("$ZodCheckEndsWith",(n,e)=>{rn.init(n,e);const t=new RegExp(`.*${Sr(e.suffix)}$`);e.pattern??(e.pattern=t),n._zod.onattach.push(i=>{const r=i._zod.bag;r.patterns??(r.patterns=new Set),r.patterns.add(t)}),n._zod.check=i=>{i.value.endsWith(e.suffix)||i.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:i.value,inst:n,continue:!e.abort})}}),vh=K("$ZodCheckOverwrite",(n,e)=>{rn.init(n,e),n._zod.check=t=>{t.value=e.tx(t.value)}});class xh{constructor(e=[]){this.content=[],this.indent=0,this&&(this.args=e)}indented(e){this.indent+=1,e(this),this.indent-=1}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}const i=e.split(`
`).filter(a=>a),r=Math.min(...i.map(a=>a.length-a.trimStart().length)),s=i.map(a=>a.slice(r)).map(a=>" ".repeat(this.indent*2)+a);for(const a of s)this.content.push(a)}compile(){const e=Function,t=this?.args,r=[...(this?.content??[""]).map(s=>`  ${s}`)];return new e(...t,r.join(`
`))}}const Sh={major:4,minor:3,patch:6},pt=K("$ZodType",(n,e)=>{var t;n??(n={}),n._zod.def=e,n._zod.bag=n._zod.bag||{},n._zod.version=Sh;const i=[...n._zod.def.checks??[]];n._zod.traits.has("$ZodCheck")&&i.unshift(n);for(const r of i)for(const s of r._zod.onattach)s(n);if(i.length===0)(t=n._zod).deferred??(t.deferred=[]),n._zod.deferred?.push(()=>{n._zod.run=n._zod.parse});else{const r=(a,o,c)=>{let l=lr(a),f;for(const d of o){if(d._zod.def.when){if(!d._zod.def.when(a))continue}else if(l)continue;const u=a.issues.length,h=d._zod.check(a);if(h instanceof Promise&&c?.async===!1)throw new hr;if(f||h instanceof Promise)f=(f??Promise.resolve()).then(async()=>{await h,a.issues.length!==u&&(l||(l=lr(a,u)))});else{if(a.issues.length===u)continue;l||(l=lr(a,u))}}return f?f.then(()=>a):a},s=(a,o,c)=>{if(lr(a))return a.aborted=!0,a;const l=r(o,i,c);if(l instanceof Promise){if(c.async===!1)throw new hr;return l.then(f=>n._zod.parse(f,c))}return n._zod.parse(l,c)};n._zod.run=(a,o)=>{if(o.skipChecks)return n._zod.parse(a,o);if(o.direction==="backward"){const l=n._zod.parse({value:a.value,issues:[]},{...o,skipChecks:!0});return l instanceof Promise?l.then(f=>s(f,a,o)):s(l,a,o)}const c=n._zod.parse(a,o);if(c instanceof Promise){if(o.async===!1)throw new hr;return c.then(l=>r(l,i,o))}return r(c,i,o)}}rt(n,"~standard",()=>({validate:r=>{try{const s=Td(n,r);return s.success?{value:s.data}:{issues:s.error?.issues}}catch{return Ad(n,r).then(a=>a.success?{value:a.data}:{issues:a.error?.issues})}},vendor:"zod",version:1}))}),pc=K("$ZodString",(n,e)=>{pt.init(n,e),n._zod.pattern=[...n?._zod.bag?.patterns??[]].pop()??nh(n._zod.bag),n._zod.parse=(t,i)=>{if(e.coerce)try{t.value=String(t.value)}catch{}return typeof t.value=="string"||t.issues.push({expected:"string",code:"invalid_type",input:t.value,inst:n}),t}}),gt=K("$ZodStringFormat",(n,e)=>{ha.init(n,e),pc.init(n,e)}),Mh=K("$ZodGUID",(n,e)=>{e.pattern??(e.pattern=Hd),gt.init(n,e)}),yh=K("$ZodUUID",(n,e)=>{if(e.version){const i={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(i===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=Kc(i))}else e.pattern??(e.pattern=Kc());gt.init(n,e)}),bh=K("$ZodEmail",(n,e)=>{e.pattern??(e.pattern=Wd),gt.init(n,e)}),Eh=K("$ZodURL",(n,e)=>{gt.init(n,e),n._zod.check=t=>{try{const i=t.value.trim(),r=new URL(i);e.hostname&&(e.hostname.lastIndex=0,e.hostname.test(r.hostname)||t.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:e.hostname.source,input:t.value,inst:n,continue:!e.abort})),e.protocol&&(e.protocol.lastIndex=0,e.protocol.test(r.protocol.endsWith(":")?r.protocol.slice(0,-1):r.protocol)||t.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:t.value,inst:n,continue:!e.abort})),e.normalize?t.value=r.href:t.value=i;return}catch{t.issues.push({code:"invalid_format",format:"url",input:t.value,inst:n,continue:!e.abort})}}}),wh=K("$ZodEmoji",(n,e)=>{e.pattern??(e.pattern=$d()),gt.init(n,e)}),Th=K("$ZodNanoID",(n,e)=>{e.pattern??(e.pattern=Gd),gt.init(n,e)}),Ah=K("$ZodCUID",(n,e)=>{e.pattern??(e.pattern=Fd),gt.init(n,e)}),Rh=K("$ZodCUID2",(n,e)=>{e.pattern??(e.pattern=Od),gt.init(n,e)}),Ch=K("$ZodULID",(n,e)=>{e.pattern??(e.pattern=zd),gt.init(n,e)}),Ph=K("$ZodXID",(n,e)=>{e.pattern??(e.pattern=Bd),gt.init(n,e)}),Dh=K("$ZodKSUID",(n,e)=>{e.pattern??(e.pattern=kd),gt.init(n,e)}),Ih=K("$ZodISODateTime",(n,e)=>{e.pattern??(e.pattern=th(e)),gt.init(n,e)}),Lh=K("$ZodISODate",(n,e)=>{e.pattern??(e.pattern=jd),gt.init(n,e)}),Nh=K("$ZodISOTime",(n,e)=>{e.pattern??(e.pattern=eh(e)),gt.init(n,e)}),Uh=K("$ZodISODuration",(n,e)=>{e.pattern??(e.pattern=Vd),gt.init(n,e)}),Fh=K("$ZodIPv4",(n,e)=>{e.pattern??(e.pattern=Zd),gt.init(n,e),n._zod.bag.format="ipv4"}),Oh=K("$ZodIPv6",(n,e)=>{e.pattern??(e.pattern=qd),gt.init(n,e),n._zod.bag.format="ipv6",n._zod.check=t=>{try{new URL(`http://[${t.value}]`)}catch{t.issues.push({code:"invalid_format",format:"ipv6",input:t.value,inst:n,continue:!e.abort})}}}),zh=K("$ZodCIDRv4",(n,e)=>{e.pattern??(e.pattern=Yd),gt.init(n,e)}),Bh=K("$ZodCIDRv6",(n,e)=>{e.pattern??(e.pattern=Kd),gt.init(n,e),n._zod.check=t=>{const i=t.value.split("/");try{if(i.length!==2)throw new Error;const[r,s]=i;if(!s)throw new Error;const a=Number(s);if(`${a}`!==s)throw new Error;if(a<0||a>128)throw new Error;new URL(`http://[${r}]`)}catch{t.issues.push({code:"invalid_format",format:"cidrv6",input:t.value,inst:n,continue:!e.abort})}}});function Uu(n){if(n==="")return!0;if(n.length%4!==0)return!1;try{return atob(n),!0}catch{return!1}}const kh=K("$ZodBase64",(n,e)=>{e.pattern??(e.pattern=Jd),gt.init(n,e),n._zod.bag.contentEncoding="base64",n._zod.check=t=>{Uu(t.value)||t.issues.push({code:"invalid_format",format:"base64",input:t.value,inst:n,continue:!e.abort})}});function Gh(n){if(!Ru.test(n))return!1;const e=n.replace(/[-_]/g,i=>i==="-"?"+":"/"),t=e.padEnd(Math.ceil(e.length/4)*4,"=");return Uu(t)}const Vh=K("$ZodBase64URL",(n,e)=>{e.pattern??(e.pattern=Ru),gt.init(n,e),n._zod.bag.contentEncoding="base64url",n._zod.check=t=>{Gh(t.value)||t.issues.push({code:"invalid_format",format:"base64url",input:t.value,inst:n,continue:!e.abort})}}),Hh=K("$ZodE164",(n,e)=>{e.pattern??(e.pattern=Qd),gt.init(n,e)});function Wh(n,e=null){try{const t=n.split(".");if(t.length!==3)return!1;const[i]=t;if(!i)return!1;const r=JSON.parse(atob(i));return!("typ"in r&&r?.typ!=="JWT"||!r.alg||e&&(!("alg"in r)||r.alg!==e))}catch{return!1}}const Xh=K("$ZodJWT",(n,e)=>{gt.init(n,e),n._zod.check=t=>{Wh(t.value,e.alg)||t.issues.push({code:"invalid_format",format:"jwt",input:t.value,inst:n,continue:!e.abort})}}),Fu=K("$ZodNumber",(n,e)=>{pt.init(n,e),n._zod.pattern=n._zod.bag.pattern??Du,n._zod.parse=(t,i)=>{if(e.coerce)try{t.value=Number(t.value)}catch{}const r=t.value;if(typeof r=="number"&&!Number.isNaN(r)&&Number.isFinite(r))return t;const s=typeof r=="number"?Number.isNaN(r)?"NaN":Number.isFinite(r)?void 0:"Infinity":void 0;return t.issues.push({expected:"number",code:"invalid_type",input:r,inst:n,...s?{received:s}:{}}),t}}),$h=K("$ZodNumberFormat",(n,e)=>{ch.init(n,e),Fu.init(n,e)}),Zh=K("$ZodBoolean",(n,e)=>{pt.init(n,e),n._zod.pattern=rh,n._zod.parse=(t,i)=>{if(e.coerce)try{t.value=!!t.value}catch{}const r=t.value;return typeof r=="boolean"||t.issues.push({expected:"boolean",code:"invalid_type",input:r,inst:n}),t}}),qh=K("$ZodUnknown",(n,e)=>{pt.init(n,e),n._zod.parse=t=>t}),Yh=K("$ZodNever",(n,e)=>{pt.init(n,e),n._zod.parse=(t,i)=>(t.issues.push({expected:"never",code:"invalid_type",input:t.value,inst:n}),t)});function Jc(n,e,t){n.issues.length&&e.issues.push(...Di(t,n.issues)),e.value[t]=n.value}const Kh=K("$ZodArray",(n,e)=>{pt.init(n,e),n._zod.parse=(t,i)=>{const r=t.value;if(!Array.isArray(r))return t.issues.push({expected:"array",code:"invalid_type",input:r,inst:n}),t;t.value=Array(r.length);const s=[];for(let a=0;a<r.length;a++){const o=r[a],c=e.element._zod.run({value:o,issues:[]},i);c instanceof Promise?s.push(c.then(l=>Jc(l,t,a))):Jc(c,t,a)}return s.length?Promise.all(s).then(()=>t):t}});function Js(n,e,t,i,r){if(n.issues.length){if(r&&!(t in i))return;e.issues.push(...Di(t,n.issues))}n.value===void 0?t in i&&(e.value[t]=void 0):e.value[t]=n.value}function Ou(n){const e=Object.keys(n.shape);for(const i of e)if(!n.shape?.[i]?._zod?.traits?.has("$ZodType"))throw new Error(`Invalid element at key "${i}": expected a Zod schema`);const t=md(n.shape);return{...n,keys:e,keySet:new Set(e),numKeys:e.length,optionalKeys:new Set(t)}}function zu(n,e,t,i,r,s){const a=[],o=r.keySet,c=r.catchall._zod,l=c.def.type,f=c.optout==="optional";for(const d in e){if(o.has(d))continue;if(l==="never"){a.push(d);continue}const u=c.run({value:e[d],issues:[]},i);u instanceof Promise?n.push(u.then(h=>Js(h,t,d,e,f))):Js(u,t,d,e,f)}return a.length&&t.issues.push({code:"unrecognized_keys",keys:a,input:e,inst:s}),n.length?Promise.all(n).then(()=>t):t}const Jh=K("$ZodObject",(n,e)=>{if(pt.init(n,e),!Object.getOwnPropertyDescriptor(e,"shape")?.get){const o=e.shape;Object.defineProperty(e,"shape",{get:()=>{const c={...o};return Object.defineProperty(e,"shape",{value:c}),c}})}const i=cc(()=>Ou(e));rt(n._zod,"propValues",()=>{const o=e.shape,c={};for(const l in o){const f=o[l]._zod;if(f.values){c[l]??(c[l]=new Set);for(const d of f.values)c[l].add(d)}}return c});const r=Ks,s=e.catchall;let a;n._zod.parse=(o,c)=>{a??(a=i.value);const l=o.value;if(!r(l))return o.issues.push({expected:"object",code:"invalid_type",input:l,inst:n}),o;o.value={};const f=[],d=a.shape;for(const u of a.keys){const h=d[u],_=h._zod.optout==="optional",S=h._zod.run({value:l[u],issues:[]},c);S instanceof Promise?f.push(S.then(m=>Js(m,o,u,l,_))):Js(S,o,u,l,_)}return s?zu(f,l,o,c,i.value,n):f.length?Promise.all(f).then(()=>o):o}}),Qh=K("$ZodObjectJIT",(n,e)=>{Jh.init(n,e);const t=n._zod.parse,i=cc(()=>Ou(e)),r=u=>{const h=new xh(["shape","payload","ctx"]),_=i.value,S=A=>{const M=Yc(A);return`shape[${M}]._zod.run({ value: input[${M}], issues: [] }, ctx)`};h.write("const input = payload.value;");const m=Object.create(null);let p=0;for(const A of _.keys)m[A]=`key_${p++}`;h.write("const newResult = {};");for(const A of _.keys){const M=m[A],y=Yc(A),R=u[A]?._zod?.optout==="optional";h.write(`const ${M} = ${S(A)};`),R?h.write(`
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
        
      `)}h.write("payload.value = newResult;"),h.write("return payload;");const T=h.compile();return(A,M)=>T(u,A,M)};let s;const a=Ks,o=!Mu.jitless,l=o&&hd.value,f=e.catchall;let d;n._zod.parse=(u,h)=>{d??(d=i.value);const _=u.value;return a(_)?o&&l&&h?.async===!1&&h.jitless!==!0?(s||(s=r(e.shape)),u=s(u,h),f?zu([],_,u,h,d,n):u):t(u,h):(u.issues.push({expected:"object",code:"invalid_type",input:_,inst:n}),u)}});function Qc(n,e,t,i){for(const s of n)if(s.issues.length===0)return e.value=s.value,e;const r=n.filter(s=>!lr(s));return r.length===1?(e.value=r[0].value,r[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:t,errors:n.map(s=>s.issues.map(a=>xi(a,i,vi())))}),e)}const jh=K("$ZodUnion",(n,e)=>{pt.init(n,e),rt(n._zod,"optin",()=>e.options.some(r=>r._zod.optin==="optional")?"optional":void 0),rt(n._zod,"optout",()=>e.options.some(r=>r._zod.optout==="optional")?"optional":void 0),rt(n._zod,"values",()=>{if(e.options.every(r=>r._zod.values))return new Set(e.options.flatMap(r=>Array.from(r._zod.values)))}),rt(n._zod,"pattern",()=>{if(e.options.every(r=>r._zod.pattern)){const r=e.options.map(s=>s._zod.pattern);return new RegExp(`^(${r.map(s=>uc(s.source)).join("|")})$`)}});const t=e.options.length===1,i=e.options[0]._zod.run;n._zod.parse=(r,s)=>{if(t)return i(r,s);let a=!1;const o=[];for(const c of e.options){const l=c._zod.run({value:r.value,issues:[]},s);if(l instanceof Promise)o.push(l),a=!0;else{if(l.issues.length===0)return l;o.push(l)}}return a?Promise.all(o).then(c=>Qc(c,r,n,s)):Qc(o,r,n,s)}}),ep=K("$ZodIntersection",(n,e)=>{pt.init(n,e),n._zod.parse=(t,i)=>{const r=t.value,s=e.left._zod.run({value:r,issues:[]},i),a=e.right._zod.run({value:r,issues:[]},i);return s instanceof Promise||a instanceof Promise?Promise.all([s,a]).then(([c,l])=>jc(t,c,l)):jc(t,s,a)}});function co(n,e){if(n===e)return{valid:!0,data:n};if(n instanceof Date&&e instanceof Date&&+n==+e)return{valid:!0,data:n};if(xr(n)&&xr(e)){const t=Object.keys(e),i=Object.keys(n).filter(s=>t.indexOf(s)!==-1),r={...n,...e};for(const s of i){const a=co(n[s],e[s]);if(!a.valid)return{valid:!1,mergeErrorPath:[s,...a.mergeErrorPath]};r[s]=a.data}return{valid:!0,data:r}}if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return{valid:!1,mergeErrorPath:[]};const t=[];for(let i=0;i<n.length;i++){const r=n[i],s=e[i],a=co(r,s);if(!a.valid)return{valid:!1,mergeErrorPath:[i,...a.mergeErrorPath]};t.push(a.data)}return{valid:!0,data:t}}return{valid:!1,mergeErrorPath:[]}}function jc(n,e,t){const i=new Map;let r;for(const o of e.issues)if(o.code==="unrecognized_keys"){r??(r=o);for(const c of o.keys)i.has(c)||i.set(c,{}),i.get(c).l=!0}else n.issues.push(o);for(const o of t.issues)if(o.code==="unrecognized_keys")for(const c of o.keys)i.has(c)||i.set(c,{}),i.get(c).r=!0;else n.issues.push(o);const s=[...i].filter(([,o])=>o.l&&o.r).map(([o])=>o);if(s.length&&r&&n.issues.push({...r,keys:s}),lr(n))return n;const a=co(e.value,t.value);if(!a.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);return n.value=a.data,n}const tp=K("$ZodTuple",(n,e)=>{pt.init(n,e);const t=e.items;n._zod.parse=(i,r)=>{const s=i.value;if(!Array.isArray(s))return i.issues.push({input:s,inst:n,expected:"tuple",code:"invalid_type"}),i;i.value=[];const a=[],o=[...t].reverse().findIndex(f=>f._zod.optin!=="optional"),c=o===-1?0:t.length-o;if(!e.rest){const f=s.length>t.length,d=s.length<c-1;if(f||d)return i.issues.push({...f?{code:"too_big",maximum:t.length,inclusive:!0}:{code:"too_small",minimum:t.length},input:s,inst:n,origin:"array"}),i}let l=-1;for(const f of t){if(l++,l>=s.length&&l>=c)continue;const d=f._zod.run({value:s[l],issues:[]},r);d instanceof Promise?a.push(d.then(u=>fs(u,i,l))):fs(d,i,l)}if(e.rest){const f=s.slice(t.length);for(const d of f){l++;const u=e.rest._zod.run({value:d,issues:[]},r);u instanceof Promise?a.push(u.then(h=>fs(h,i,l))):fs(u,i,l)}}return a.length?Promise.all(a).then(()=>i):i}});function fs(n,e,t){n.issues.length&&e.issues.push(...Di(t,n.issues)),e.value[t]=n.value}const np=K("$ZodRecord",(n,e)=>{pt.init(n,e),n._zod.parse=(t,i)=>{const r=t.value;if(!xr(r))return t.issues.push({expected:"record",code:"invalid_type",input:r,inst:n}),t;const s=[],a=e.keyType._zod.values;if(a){t.value={};const o=new Set;for(const l of a)if(typeof l=="string"||typeof l=="number"||typeof l=="symbol"){o.add(typeof l=="number"?l.toString():l);const f=e.valueType._zod.run({value:r[l],issues:[]},i);f instanceof Promise?s.push(f.then(d=>{d.issues.length&&t.issues.push(...Di(l,d.issues)),t.value[l]=d.value})):(f.issues.length&&t.issues.push(...Di(l,f.issues)),t.value[l]=f.value)}let c;for(const l in r)o.has(l)||(c=c??[],c.push(l));c&&c.length>0&&t.issues.push({code:"unrecognized_keys",input:r,inst:n,keys:c})}else{t.value={};for(const o of Reflect.ownKeys(r)){if(o==="__proto__")continue;let c=e.keyType._zod.run({value:o,issues:[]},i);if(c instanceof Promise)throw new Error("Async schemas not supported in object keys currently");if(typeof o=="string"&&Du.test(o)&&c.issues.length){const d=e.keyType._zod.run({value:Number(o),issues:[]},i);if(d instanceof Promise)throw new Error("Async schemas not supported in object keys currently");d.issues.length===0&&(c=d)}if(c.issues.length){e.mode==="loose"?t.value[o]=r[o]:t.issues.push({code:"invalid_key",origin:"record",issues:c.issues.map(d=>xi(d,i,vi())),input:o,path:[o],inst:n});continue}const f=e.valueType._zod.run({value:r[o],issues:[]},i);f instanceof Promise?s.push(f.then(d=>{d.issues.length&&t.issues.push(...Di(o,d.issues)),t.value[c.value]=d.value})):(f.issues.length&&t.issues.push(...Di(o,f.issues)),t.value[c.value]=f.value)}}return s.length?Promise.all(s).then(()=>t):t}}),ip=K("$ZodEnum",(n,e)=>{pt.init(n,e);const t=yu(e.entries),i=new Set(t);n._zod.values=i,n._zod.pattern=new RegExp(`^(${t.filter(r=>pd.has(typeof r)).map(r=>typeof r=="string"?Sr(r):r.toString()).join("|")})$`),n._zod.parse=(r,s)=>{const a=r.value;return i.has(a)||r.issues.push({code:"invalid_value",values:t,input:a,inst:n}),r}}),rp=K("$ZodLiteral",(n,e)=>{if(pt.init(n,e),e.values.length===0)throw new Error("Cannot create literal schema with no valid values");const t=new Set(e.values);n._zod.values=t,n._zod.pattern=new RegExp(`^(${e.values.map(i=>typeof i=="string"?Sr(i):i?Sr(i.toString()):String(i)).join("|")})$`),n._zod.parse=(i,r)=>{const s=i.value;return t.has(s)||i.issues.push({code:"invalid_value",values:e.values,input:s,inst:n}),i}}),sp=K("$ZodTransform",(n,e)=>{pt.init(n,e),n._zod.parse=(t,i)=>{if(i.direction==="backward")throw new Su(n.constructor.name);const r=e.transform(t.value,t);if(i.async)return(r instanceof Promise?r:Promise.resolve(r)).then(a=>(t.value=a,t));if(r instanceof Promise)throw new hr;return t.value=r,t}});function el(n,e){return n.issues.length&&e===void 0?{issues:[],value:void 0}:n}const Bu=K("$ZodOptional",(n,e)=>{pt.init(n,e),n._zod.optin="optional",n._zod.optout="optional",rt(n._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,void 0]):void 0),rt(n._zod,"pattern",()=>{const t=e.innerType._zod.pattern;return t?new RegExp(`^(${uc(t.source)})?$`):void 0}),n._zod.parse=(t,i)=>{if(e.innerType._zod.optin==="optional"){const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(s=>el(s,t.value)):el(r,t.value)}return t.value===void 0?t:e.innerType._zod.run(t,i)}}),ap=K("$ZodExactOptional",(n,e)=>{Bu.init(n,e),rt(n._zod,"values",()=>e.innerType._zod.values),rt(n._zod,"pattern",()=>e.innerType._zod.pattern),n._zod.parse=(t,i)=>e.innerType._zod.run(t,i)}),op=K("$ZodNullable",(n,e)=>{pt.init(n,e),rt(n._zod,"optin",()=>e.innerType._zod.optin),rt(n._zod,"optout",()=>e.innerType._zod.optout),rt(n._zod,"pattern",()=>{const t=e.innerType._zod.pattern;return t?new RegExp(`^(${uc(t.source)}|null)$`):void 0}),rt(n._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,null]):void 0),n._zod.parse=(t,i)=>t.value===null?t:e.innerType._zod.run(t,i)}),cp=K("$ZodDefault",(n,e)=>{pt.init(n,e),n._zod.optin="optional",rt(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(t,i)=>{if(i.direction==="backward")return e.innerType._zod.run(t,i);if(t.value===void 0)return t.value=e.defaultValue,t;const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(s=>tl(s,e)):tl(r,e)}});function tl(n,e){return n.value===void 0&&(n.value=e.defaultValue),n}const lp=K("$ZodPrefault",(n,e)=>{pt.init(n,e),n._zod.optin="optional",rt(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(t,i)=>(i.direction==="backward"||t.value===void 0&&(t.value=e.defaultValue),e.innerType._zod.run(t,i))}),up=K("$ZodNonOptional",(n,e)=>{pt.init(n,e),rt(n._zod,"values",()=>{const t=e.innerType._zod.values;return t?new Set([...t].filter(i=>i!==void 0)):void 0}),n._zod.parse=(t,i)=>{const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(s=>nl(s,n)):nl(r,n)}});function nl(n,e){return!n.issues.length&&n.value===void 0&&n.issues.push({code:"invalid_type",expected:"nonoptional",input:n.value,inst:e}),n}const fp=K("$ZodCatch",(n,e)=>{pt.init(n,e),rt(n._zod,"optin",()=>e.innerType._zod.optin),rt(n._zod,"optout",()=>e.innerType._zod.optout),rt(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(t,i)=>{if(i.direction==="backward")return e.innerType._zod.run(t,i);const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(s=>(t.value=s.value,s.issues.length&&(t.value=e.catchValue({...t,error:{issues:s.issues.map(a=>xi(a,i,vi()))},input:t.value}),t.issues=[]),t)):(t.value=r.value,r.issues.length&&(t.value=e.catchValue({...t,error:{issues:r.issues.map(s=>xi(s,i,vi()))},input:t.value}),t.issues=[]),t)}}),dp=K("$ZodPipe",(n,e)=>{pt.init(n,e),rt(n._zod,"values",()=>e.in._zod.values),rt(n._zod,"optin",()=>e.in._zod.optin),rt(n._zod,"optout",()=>e.out._zod.optout),rt(n._zod,"propValues",()=>e.in._zod.propValues),n._zod.parse=(t,i)=>{if(i.direction==="backward"){const s=e.out._zod.run(t,i);return s instanceof Promise?s.then(a=>ds(a,e.in,i)):ds(s,e.in,i)}const r=e.in._zod.run(t,i);return r instanceof Promise?r.then(s=>ds(s,e.out,i)):ds(r,e.out,i)}});function ds(n,e,t){return n.issues.length?(n.aborted=!0,n):e._zod.run({value:n.value,issues:n.issues},t)}const hp=K("$ZodReadonly",(n,e)=>{pt.init(n,e),rt(n._zod,"propValues",()=>e.innerType._zod.propValues),rt(n._zod,"values",()=>e.innerType._zod.values),rt(n._zod,"optin",()=>e.innerType?._zod?.optin),rt(n._zod,"optout",()=>e.innerType?._zod?.optout),n._zod.parse=(t,i)=>{if(i.direction==="backward")return e.innerType._zod.run(t,i);const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(il):il(r)}});function il(n){return n.value=Object.freeze(n.value),n}const pp=K("$ZodCustom",(n,e)=>{rn.init(n,e),pt.init(n,e),n._zod.parse=(t,i)=>t,n._zod.check=t=>{const i=t.value,r=e.fn(i);if(r instanceof Promise)return r.then(s=>rl(s,t,i,n));rl(r,t,i,n)}});function rl(n,e,t,i){if(!n){const r={code:"custom",input:t,inst:i,path:[...i._zod.def.path??[]],continue:!i._zod.def.abort};i._zod.def.params&&(r.params=i._zod.def.params),e.issues.push(Yr(r))}}var sl;class mp{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...t){const i=t[0];return this._map.set(e,i),i&&typeof i=="object"&&"id"in i&&this._idmap.set(i.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){const t=this._map.get(e);return t&&typeof t=="object"&&"id"in t&&this._idmap.delete(t.id),this._map.delete(e),this}get(e){const t=e._zod.parent;if(t){const i={...this.get(t)??{}};delete i.id;const r={...i,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function gp(){return new mp}(sl=globalThis).__zod_globalRegistry??(sl.__zod_globalRegistry=gp());const Gr=globalThis.__zod_globalRegistry;function _p(n,e){return new n({type:"string",...Te(e)})}function vp(n,e){return new n({type:"string",format:"email",check:"string_format",abort:!1,...Te(e)})}function al(n,e){return new n({type:"string",format:"guid",check:"string_format",abort:!1,...Te(e)})}function xp(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,...Te(e)})}function Sp(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...Te(e)})}function Mp(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...Te(e)})}function yp(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...Te(e)})}function bp(n,e){return new n({type:"string",format:"url",check:"string_format",abort:!1,...Te(e)})}function Ep(n,e){return new n({type:"string",format:"emoji",check:"string_format",abort:!1,...Te(e)})}function wp(n,e){return new n({type:"string",format:"nanoid",check:"string_format",abort:!1,...Te(e)})}function Tp(n,e){return new n({type:"string",format:"cuid",check:"string_format",abort:!1,...Te(e)})}function Ap(n,e){return new n({type:"string",format:"cuid2",check:"string_format",abort:!1,...Te(e)})}function Rp(n,e){return new n({type:"string",format:"ulid",check:"string_format",abort:!1,...Te(e)})}function Cp(n,e){return new n({type:"string",format:"xid",check:"string_format",abort:!1,...Te(e)})}function Pp(n,e){return new n({type:"string",format:"ksuid",check:"string_format",abort:!1,...Te(e)})}function Dp(n,e){return new n({type:"string",format:"ipv4",check:"string_format",abort:!1,...Te(e)})}function Ip(n,e){return new n({type:"string",format:"ipv6",check:"string_format",abort:!1,...Te(e)})}function Lp(n,e){return new n({type:"string",format:"cidrv4",check:"string_format",abort:!1,...Te(e)})}function Np(n,e){return new n({type:"string",format:"cidrv6",check:"string_format",abort:!1,...Te(e)})}function Up(n,e){return new n({type:"string",format:"base64",check:"string_format",abort:!1,...Te(e)})}function Fp(n,e){return new n({type:"string",format:"base64url",check:"string_format",abort:!1,...Te(e)})}function Op(n,e){return new n({type:"string",format:"e164",check:"string_format",abort:!1,...Te(e)})}function zp(n,e){return new n({type:"string",format:"jwt",check:"string_format",abort:!1,...Te(e)})}function Bp(n,e){return new n({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...Te(e)})}function kp(n,e){return new n({type:"string",format:"date",check:"string_format",...Te(e)})}function Gp(n,e){return new n({type:"string",format:"time",check:"string_format",precision:null,...Te(e)})}function Vp(n,e){return new n({type:"string",format:"duration",check:"string_format",...Te(e)})}function Hp(n,e){return new n({type:"number",checks:[],...Te(e)})}function Wp(n,e){return new n({type:"number",check:"number_format",abort:!1,format:"safeint",...Te(e)})}function Xp(n,e){return new n({type:"boolean",...Te(e)})}function $p(n){return new n({type:"unknown"})}function Zp(n,e){return new n({type:"never",...Te(e)})}function ol(n,e){return new Lu({check:"less_than",...Te(e),value:n,inclusive:!1})}function wa(n,e){return new Lu({check:"less_than",...Te(e),value:n,inclusive:!0})}function cl(n,e){return new Nu({check:"greater_than",...Te(e),value:n,inclusive:!1})}function Ta(n,e){return new Nu({check:"greater_than",...Te(e),value:n,inclusive:!0})}function ll(n,e){return new oh({check:"multiple_of",...Te(e),value:n})}function ku(n,e){return new lh({check:"max_length",...Te(e),maximum:n})}function Qs(n,e){return new uh({check:"min_length",...Te(e),minimum:n})}function Gu(n,e){return new fh({check:"length_equals",...Te(e),length:n})}function qp(n,e){return new dh({check:"string_format",format:"regex",...Te(e),pattern:n})}function Yp(n){return new hh({check:"string_format",format:"lowercase",...Te(n)})}function Kp(n){return new ph({check:"string_format",format:"uppercase",...Te(n)})}function Jp(n,e){return new mh({check:"string_format",format:"includes",...Te(e),includes:n})}function Qp(n,e){return new gh({check:"string_format",format:"starts_with",...Te(e),prefix:n})}function jp(n,e){return new _h({check:"string_format",format:"ends_with",...Te(e),suffix:n})}function wr(n){return new vh({check:"overwrite",tx:n})}function em(n){return wr(e=>e.normalize(n))}function tm(){return wr(n=>n.trim())}function nm(){return wr(n=>n.toLowerCase())}function im(){return wr(n=>n.toUpperCase())}function rm(){return wr(n=>dd(n))}function sm(n,e,t){return new n({type:"array",element:e,...Te(t)})}function am(n,e,t){return new n({type:"custom",check:"custom",fn:e,...Te(t)})}function om(n){const e=cm(t=>(t.addIssue=i=>{if(typeof i=="string")t.issues.push(Yr(i,t.value,e._zod.def));else{const r=i;r.fatal&&(r.continue=!1),r.code??(r.code="custom"),r.input??(r.input=t.value),r.inst??(r.inst=e),r.continue??(r.continue=!e._zod.def.abort),t.issues.push(Yr(r))}},n(t.value,t)));return e}function cm(n,e){const t=new rn({check:"custom",...Te(e)});return t._zod.check=n,t}function Vu(n){let e=n?.target??"draft-2020-12";return e==="draft-4"&&(e="draft-04"),e==="draft-7"&&(e="draft-07"),{processors:n.processors??{},metadataRegistry:n?.metadata??Gr,target:e,unrepresentable:n?.unrepresentable??"throw",override:n?.override??(()=>{}),io:n?.io??"output",counter:0,seen:new Map,cycles:n?.cycles??"ref",reused:n?.reused??"inline",external:n?.external??void 0}}function Mt(n,e,t={path:[],schemaPath:[]}){var i;const r=n._zod.def,s=e.seen.get(n);if(s)return s.count++,t.schemaPath.includes(n)&&(s.cycle=t.path),s.schema;const a={schema:{},count:1,cycle:void 0,path:t.path};e.seen.set(n,a);const o=n._zod.toJSONSchema?.();if(o)a.schema=o;else{const f={...t,schemaPath:[...t.schemaPath,n],path:t.path};if(n._zod.processJSONSchema)n._zod.processJSONSchema(e,a.schema,f);else{const u=a.schema,h=e.processors[r.type];if(!h)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);h(n,e,u,f)}const d=n._zod.parent;d&&(a.ref||(a.ref=d),Mt(d,e,f),e.seen.get(d).isParent=!0)}const c=e.metadataRegistry.get(n);return c&&Object.assign(a.schema,c),e.io==="input"&&$t(n)&&(delete a.schema.examples,delete a.schema.default),e.io==="input"&&a.schema._prefault&&((i=a.schema).default??(i.default=a.schema._prefault)),delete a.schema._prefault,e.seen.get(n).schema}function Hu(n,e){const t=n.seen.get(e);if(!t)throw new Error("Unprocessed schema. This is a bug in Zod.");const i=new Map;for(const a of n.seen.entries()){const o=n.metadataRegistry.get(a[0])?.id;if(o){const c=i.get(o);if(c&&c!==a[0])throw new Error(`Duplicate schema id "${o}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);i.set(o,a[0])}}const r=a=>{const o=n.target==="draft-2020-12"?"$defs":"definitions";if(n.external){const d=n.external.registry.get(a[0])?.id,u=n.external.uri??(_=>_);if(d)return{ref:u(d)};const h=a[1].defId??a[1].schema.id??`schema${n.counter++}`;return a[1].defId=h,{defId:h,ref:`${u("__shared")}#/${o}/${h}`}}if(a[1]===t)return{ref:"#"};const l=`#/${o}/`,f=a[1].schema.id??`__schema${n.counter++}`;return{defId:f,ref:l+f}},s=a=>{if(a[1].schema.$ref)return;const o=a[1],{ref:c,defId:l}=r(a);o.def={...o.schema},l&&(o.defId=l);const f=o.schema;for(const d in f)delete f[d];f.$ref=c};if(n.cycles==="throw")for(const a of n.seen.entries()){const o=a[1];if(o.cycle)throw new Error(`Cycle detected: #/${o.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const a of n.seen.entries()){const o=a[1];if(e===a[0]){s(a);continue}if(n.external){const l=n.external.registry.get(a[0])?.id;if(e!==a[0]&&l){s(a);continue}}if(n.metadataRegistry.get(a[0])?.id){s(a);continue}if(o.cycle){s(a);continue}if(o.count>1&&n.reused==="ref"){s(a);continue}}}function Wu(n,e){const t=n.seen.get(e);if(!t)throw new Error("Unprocessed schema. This is a bug in Zod.");const i=a=>{const o=n.seen.get(a);if(o.ref===null)return;const c=o.def??o.schema,l={...c},f=o.ref;if(o.ref=null,f){i(f);const u=n.seen.get(f),h=u.schema;if(h.$ref&&(n.target==="draft-07"||n.target==="draft-04"||n.target==="openapi-3.0")?(c.allOf=c.allOf??[],c.allOf.push(h)):Object.assign(c,h),Object.assign(c,l),a._zod.parent===f)for(const S in c)S==="$ref"||S==="allOf"||S in l||delete c[S];if(h.$ref&&u.def)for(const S in c)S==="$ref"||S==="allOf"||S in u.def&&JSON.stringify(c[S])===JSON.stringify(u.def[S])&&delete c[S]}const d=a._zod.parent;if(d&&d!==f){i(d);const u=n.seen.get(d);if(u?.schema.$ref&&(c.$ref=u.schema.$ref,u.def))for(const h in c)h==="$ref"||h==="allOf"||h in u.def&&JSON.stringify(c[h])===JSON.stringify(u.def[h])&&delete c[h]}n.override({zodSchema:a,jsonSchema:c,path:o.path??[]})};for(const a of[...n.seen.entries()].reverse())i(a[0]);const r={};if(n.target==="draft-2020-12"?r.$schema="https://json-schema.org/draft/2020-12/schema":n.target==="draft-07"?r.$schema="http://json-schema.org/draft-07/schema#":n.target==="draft-04"?r.$schema="http://json-schema.org/draft-04/schema#":n.target,n.external?.uri){const a=n.external.registry.get(e)?.id;if(!a)throw new Error("Schema is missing an `id` property");r.$id=n.external.uri(a)}Object.assign(r,t.def??t.schema);const s=n.external?.defs??{};for(const a of n.seen.entries()){const o=a[1];o.def&&o.defId&&(s[o.defId]=o.def)}n.external||Object.keys(s).length>0&&(n.target==="draft-2020-12"?r.$defs=s:r.definitions=s);try{const a=JSON.parse(JSON.stringify(r));return Object.defineProperty(a,"~standard",{value:{...e["~standard"],jsonSchema:{input:js(e,"input",n.processors),output:js(e,"output",n.processors)}},enumerable:!1,writable:!1}),a}catch{throw new Error("Error converting schema to JSON.")}}function $t(n,e){const t=e??{seen:new Set};if(t.seen.has(n))return!1;t.seen.add(n);const i=n._zod.def;if(i.type==="transform")return!0;if(i.type==="array")return $t(i.element,t);if(i.type==="set")return $t(i.valueType,t);if(i.type==="lazy")return $t(i.getter(),t);if(i.type==="promise"||i.type==="optional"||i.type==="nonoptional"||i.type==="nullable"||i.type==="readonly"||i.type==="default"||i.type==="prefault")return $t(i.innerType,t);if(i.type==="intersection")return $t(i.left,t)||$t(i.right,t);if(i.type==="record"||i.type==="map")return $t(i.keyType,t)||$t(i.valueType,t);if(i.type==="pipe")return $t(i.in,t)||$t(i.out,t);if(i.type==="object"){for(const r in i.shape)if($t(i.shape[r],t))return!0;return!1}if(i.type==="union"){for(const r of i.options)if($t(r,t))return!0;return!1}if(i.type==="tuple"){for(const r of i.items)if($t(r,t))return!0;return!!(i.rest&&$t(i.rest,t))}return!1}const lm=(n,e={})=>t=>{const i=Vu({...t,processors:e});return Mt(n,i),Hu(i,n),Wu(i,n)},js=(n,e,t={})=>i=>{const{libraryOptions:r,target:s}=i??{},a=Vu({...r??{},target:s,io:e,processors:t});return Mt(n,a),Hu(a,n),Wu(a,n)},um={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},fm=(n,e,t,i)=>{const r=t;r.type="string";const{minimum:s,maximum:a,format:o,patterns:c,contentEncoding:l}=n._zod.bag;if(typeof s=="number"&&(r.minLength=s),typeof a=="number"&&(r.maxLength=a),o&&(r.format=um[o]??o,r.format===""&&delete r.format,o==="time"&&delete r.format),l&&(r.contentEncoding=l),c&&c.size>0){const f=[...c];f.length===1?r.pattern=f[0].source:f.length>1&&(r.allOf=[...f.map(d=>({...e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"?{type:"string"}:{},pattern:d.source}))])}},dm=(n,e,t,i)=>{const r=t,{minimum:s,maximum:a,format:o,multipleOf:c,exclusiveMaximum:l,exclusiveMinimum:f}=n._zod.bag;typeof o=="string"&&o.includes("int")?r.type="integer":r.type="number",typeof f=="number"&&(e.target==="draft-04"||e.target==="openapi-3.0"?(r.minimum=f,r.exclusiveMinimum=!0):r.exclusiveMinimum=f),typeof s=="number"&&(r.minimum=s,typeof f=="number"&&e.target!=="draft-04"&&(f>=s?delete r.minimum:delete r.exclusiveMinimum)),typeof l=="number"&&(e.target==="draft-04"||e.target==="openapi-3.0"?(r.maximum=l,r.exclusiveMaximum=!0):r.exclusiveMaximum=l),typeof a=="number"&&(r.maximum=a,typeof l=="number"&&e.target!=="draft-04"&&(l<=a?delete r.maximum:delete r.exclusiveMaximum)),typeof c=="number"&&(r.multipleOf=c)},hm=(n,e,t,i)=>{t.type="boolean"},pm=(n,e,t,i)=>{t.not={}},mm=(n,e,t,i)=>{},gm=(n,e,t,i)=>{const r=n._zod.def,s=yu(r.entries);s.every(a=>typeof a=="number")&&(t.type="number"),s.every(a=>typeof a=="string")&&(t.type="string"),t.enum=s},_m=(n,e,t,i)=>{const r=n._zod.def,s=[];for(const a of r.values)if(a===void 0){if(e.unrepresentable==="throw")throw new Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof a=="bigint"){if(e.unrepresentable==="throw")throw new Error("BigInt literals cannot be represented in JSON Schema");s.push(Number(a))}else s.push(a);if(s.length!==0)if(s.length===1){const a=s[0];t.type=a===null?"null":typeof a,e.target==="draft-04"||e.target==="openapi-3.0"?t.enum=[a]:t.const=a}else s.every(a=>typeof a=="number")&&(t.type="number"),s.every(a=>typeof a=="string")&&(t.type="string"),s.every(a=>typeof a=="boolean")&&(t.type="boolean"),s.every(a=>a===null)&&(t.type="null"),t.enum=s},vm=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Custom types cannot be represented in JSON Schema")},xm=(n,e,t,i)=>{if(e.unrepresentable==="throw")throw new Error("Transforms cannot be represented in JSON Schema")},Sm=(n,e,t,i)=>{const r=t,s=n._zod.def,{minimum:a,maximum:o}=n._zod.bag;typeof a=="number"&&(r.minItems=a),typeof o=="number"&&(r.maxItems=o),r.type="array",r.items=Mt(s.element,e,{...i,path:[...i.path,"items"]})},Mm=(n,e,t,i)=>{const r=t,s=n._zod.def;r.type="object",r.properties={};const a=s.shape;for(const l in a)r.properties[l]=Mt(a[l],e,{...i,path:[...i.path,"properties",l]});const o=new Set(Object.keys(a)),c=new Set([...o].filter(l=>{const f=s.shape[l]._zod;return e.io==="input"?f.optin===void 0:f.optout===void 0}));c.size>0&&(r.required=Array.from(c)),s.catchall?._zod.def.type==="never"?r.additionalProperties=!1:s.catchall?s.catchall&&(r.additionalProperties=Mt(s.catchall,e,{...i,path:[...i.path,"additionalProperties"]})):e.io==="output"&&(r.additionalProperties=!1)},ym=(n,e,t,i)=>{const r=n._zod.def,s=r.inclusive===!1,a=r.options.map((o,c)=>Mt(o,e,{...i,path:[...i.path,s?"oneOf":"anyOf",c]}));s?t.oneOf=a:t.anyOf=a},bm=(n,e,t,i)=>{const r=n._zod.def,s=Mt(r.left,e,{...i,path:[...i.path,"allOf",0]}),a=Mt(r.right,e,{...i,path:[...i.path,"allOf",1]}),o=l=>"allOf"in l&&Object.keys(l).length===1,c=[...o(s)?s.allOf:[s],...o(a)?a.allOf:[a]];t.allOf=c},Em=(n,e,t,i)=>{const r=t,s=n._zod.def;r.type="array";const a=e.target==="draft-2020-12"?"prefixItems":"items",o=e.target==="draft-2020-12"||e.target==="openapi-3.0"?"items":"additionalItems",c=s.items.map((u,h)=>Mt(u,e,{...i,path:[...i.path,a,h]})),l=s.rest?Mt(s.rest,e,{...i,path:[...i.path,o,...e.target==="openapi-3.0"?[s.items.length]:[]]}):null;e.target==="draft-2020-12"?(r.prefixItems=c,l&&(r.items=l)):e.target==="openapi-3.0"?(r.items={anyOf:c},l&&r.items.anyOf.push(l),r.minItems=c.length,l||(r.maxItems=c.length)):(r.items=c,l&&(r.additionalItems=l));const{minimum:f,maximum:d}=n._zod.bag;typeof f=="number"&&(r.minItems=f),typeof d=="number"&&(r.maxItems=d)},wm=(n,e,t,i)=>{const r=t,s=n._zod.def;r.type="object";const a=s.keyType,c=a._zod.bag?.patterns;if(s.mode==="loose"&&c&&c.size>0){const f=Mt(s.valueType,e,{...i,path:[...i.path,"patternProperties","*"]});r.patternProperties={};for(const d of c)r.patternProperties[d.source]=f}else(e.target==="draft-07"||e.target==="draft-2020-12")&&(r.propertyNames=Mt(s.keyType,e,{...i,path:[...i.path,"propertyNames"]})),r.additionalProperties=Mt(s.valueType,e,{...i,path:[...i.path,"additionalProperties"]});const l=a._zod.values;if(l){const f=[...l].filter(d=>typeof d=="string"||typeof d=="number");f.length>0&&(r.required=f)}},Tm=(n,e,t,i)=>{const r=n._zod.def,s=Mt(r.innerType,e,i),a=e.seen.get(n);e.target==="openapi-3.0"?(a.ref=r.innerType,t.nullable=!0):t.anyOf=[s,{type:"null"}]},Am=(n,e,t,i)=>{const r=n._zod.def;Mt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType},Rm=(n,e,t,i)=>{const r=n._zod.def;Mt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType,t.default=JSON.parse(JSON.stringify(r.defaultValue))},Cm=(n,e,t,i)=>{const r=n._zod.def;Mt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType,e.io==="input"&&(t._prefault=JSON.parse(JSON.stringify(r.defaultValue)))},Pm=(n,e,t,i)=>{const r=n._zod.def;Mt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType;let a;try{a=r.catchValue(void 0)}catch{throw new Error("Dynamic catch values are not supported in JSON Schema")}t.default=a},Dm=(n,e,t,i)=>{const r=n._zod.def,s=e.io==="input"?r.in._zod.def.type==="transform"?r.out:r.in:r.out;Mt(s,e,i);const a=e.seen.get(n);a.ref=s},Im=(n,e,t,i)=>{const r=n._zod.def;Mt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType,t.readOnly=!0},Xu=(n,e,t,i)=>{const r=n._zod.def;Mt(r.innerType,e,i);const s=e.seen.get(n);s.ref=r.innerType},Lm=K("ZodISODateTime",(n,e)=>{Ih.init(n,e),St.init(n,e)});function Nm(n){return Bp(Lm,n)}const Um=K("ZodISODate",(n,e)=>{Lh.init(n,e),St.init(n,e)});function Fm(n){return kp(Um,n)}const Om=K("ZodISOTime",(n,e)=>{Nh.init(n,e),St.init(n,e)});function zm(n){return Gp(Om,n)}const Bm=K("ZodISODuration",(n,e)=>{Uh.init(n,e),St.init(n,e)});function km(n){return Vp(Bm,n)}const Gm=(n,e)=>{Tu.init(n,e),n.name="ZodError",Object.defineProperties(n,{format:{value:t=>wd(n,t)},flatten:{value:t=>Ed(n,t)},addIssue:{value:t=>{n.issues.push(t),n.message=JSON.stringify(n.issues,oo,2)}},addIssues:{value:t=>{n.issues.push(...t),n.message=JSON.stringify(n.issues,oo,2)}},isEmpty:{get(){return n.issues.length===0}}})},mn=K("ZodError",Gm,{Parent:Error}),Vm=dc(mn),Hm=hc(mn),Wm=fa(mn),Xm=da(mn),$m=Rd(mn),Zm=Cd(mn),qm=Pd(mn),Ym=Dd(mn),Km=Id(mn),Jm=Ld(mn),Qm=Nd(mn),jm=Ud(mn),_t=K("ZodType",(n,e)=>(pt.init(n,e),Object.assign(n["~standard"],{jsonSchema:{input:js(n,"input"),output:js(n,"output")}}),n.toJSONSchema=lm(n,{}),n.def=e,n.type=e.type,Object.defineProperty(n,"_def",{value:e}),n.check=(...t)=>n.clone(Si(e,{checks:[...e.checks??[],...t.map(i=>typeof i=="function"?{_zod:{check:i,def:{check:"custom"},onattach:[]}}:i)]}),{parent:!0}),n.with=n.check,n.clone=(t,i)=>Mi(n,t,i),n.brand=()=>n,n.register=((t,i)=>(t.add(n,i),n)),n.parse=(t,i)=>Vm(n,t,i,{callee:n.parse}),n.safeParse=(t,i)=>Wm(n,t,i),n.parseAsync=async(t,i)=>Hm(n,t,i,{callee:n.parseAsync}),n.safeParseAsync=async(t,i)=>Xm(n,t,i),n.spa=n.safeParseAsync,n.encode=(t,i)=>$m(n,t,i),n.decode=(t,i)=>Zm(n,t,i),n.encodeAsync=async(t,i)=>qm(n,t,i),n.decodeAsync=async(t,i)=>Ym(n,t,i),n.safeEncode=(t,i)=>Km(n,t,i),n.safeDecode=(t,i)=>Jm(n,t,i),n.safeEncodeAsync=async(t,i)=>Qm(n,t,i),n.safeDecodeAsync=async(t,i)=>jm(n,t,i),n.refine=(t,i)=>n.check(Zg(t,i)),n.superRefine=t=>n.check(qg(t)),n.overwrite=t=>n.check(wr(t)),n.optional=()=>hl(n),n.exactOptional=()=>Ng(n),n.nullable=()=>pl(n),n.nullish=()=>hl(pl(n)),n.nonoptional=t=>kg(n,t),n.array=()=>ot(n),n.or=t=>mc([n,t]),n.and=t=>Ag(n,t),n.transform=t=>ml(n,Ig(t)),n.default=t=>Og(n,t),n.prefault=t=>Bg(n,t),n.catch=t=>Vg(n,t),n.pipe=t=>ml(n,t),n.readonly=()=>Xg(n),n.describe=t=>{const i=n.clone();return Gr.add(i,{description:t}),i},Object.defineProperty(n,"description",{get(){return Gr.get(n)?.description},configurable:!0}),n.meta=(...t)=>{if(t.length===0)return Gr.get(n);const i=n.clone();return Gr.add(i,t[0]),i},n.isOptional=()=>n.safeParse(void 0).success,n.isNullable=()=>n.safeParse(null).success,n.apply=t=>t(n),n)),$u=K("_ZodString",(n,e)=>{pc.init(n,e),_t.init(n,e),n._zod.processJSONSchema=(i,r,s)=>fm(n,i,r);const t=n._zod.bag;n.format=t.format??null,n.minLength=t.minimum??null,n.maxLength=t.maximum??null,n.regex=(...i)=>n.check(qp(...i)),n.includes=(...i)=>n.check(Jp(...i)),n.startsWith=(...i)=>n.check(Qp(...i)),n.endsWith=(...i)=>n.check(jp(...i)),n.min=(...i)=>n.check(Qs(...i)),n.max=(...i)=>n.check(ku(...i)),n.length=(...i)=>n.check(Gu(...i)),n.nonempty=(...i)=>n.check(Qs(1,...i)),n.lowercase=i=>n.check(Yp(i)),n.uppercase=i=>n.check(Kp(i)),n.trim=()=>n.check(tm()),n.normalize=(...i)=>n.check(em(...i)),n.toLowerCase=()=>n.check(nm()),n.toUpperCase=()=>n.check(im()),n.slugify=()=>n.check(rm())}),eg=K("ZodString",(n,e)=>{pc.init(n,e),$u.init(n,e),n.email=t=>n.check(vp(tg,t)),n.url=t=>n.check(bp(ng,t)),n.jwt=t=>n.check(zp(_g,t)),n.emoji=t=>n.check(Ep(ig,t)),n.guid=t=>n.check(al(ul,t)),n.uuid=t=>n.check(xp(hs,t)),n.uuidv4=t=>n.check(Sp(hs,t)),n.uuidv6=t=>n.check(Mp(hs,t)),n.uuidv7=t=>n.check(yp(hs,t)),n.nanoid=t=>n.check(wp(rg,t)),n.guid=t=>n.check(al(ul,t)),n.cuid=t=>n.check(Tp(sg,t)),n.cuid2=t=>n.check(Ap(ag,t)),n.ulid=t=>n.check(Rp(og,t)),n.base64=t=>n.check(Up(pg,t)),n.base64url=t=>n.check(Fp(mg,t)),n.xid=t=>n.check(Cp(cg,t)),n.ksuid=t=>n.check(Pp(lg,t)),n.ipv4=t=>n.check(Dp(ug,t)),n.ipv6=t=>n.check(Ip(fg,t)),n.cidrv4=t=>n.check(Lp(dg,t)),n.cidrv6=t=>n.check(Np(hg,t)),n.e164=t=>n.check(Op(gg,t)),n.datetime=t=>n.check(Nm(t)),n.date=t=>n.check(Fm(t)),n.time=t=>n.check(zm(t)),n.duration=t=>n.check(km(t))});function mi(n){return _p(eg,n)}const St=K("ZodStringFormat",(n,e)=>{gt.init(n,e),$u.init(n,e)}),tg=K("ZodEmail",(n,e)=>{bh.init(n,e),St.init(n,e)}),ul=K("ZodGUID",(n,e)=>{Mh.init(n,e),St.init(n,e)}),hs=K("ZodUUID",(n,e)=>{yh.init(n,e),St.init(n,e)}),ng=K("ZodURL",(n,e)=>{Eh.init(n,e),St.init(n,e)}),ig=K("ZodEmoji",(n,e)=>{wh.init(n,e),St.init(n,e)}),rg=K("ZodNanoID",(n,e)=>{Th.init(n,e),St.init(n,e)}),sg=K("ZodCUID",(n,e)=>{Ah.init(n,e),St.init(n,e)}),ag=K("ZodCUID2",(n,e)=>{Rh.init(n,e),St.init(n,e)}),og=K("ZodULID",(n,e)=>{Ch.init(n,e),St.init(n,e)}),cg=K("ZodXID",(n,e)=>{Ph.init(n,e),St.init(n,e)}),lg=K("ZodKSUID",(n,e)=>{Dh.init(n,e),St.init(n,e)}),ug=K("ZodIPv4",(n,e)=>{Fh.init(n,e),St.init(n,e)}),fg=K("ZodIPv6",(n,e)=>{Oh.init(n,e),St.init(n,e)}),dg=K("ZodCIDRv4",(n,e)=>{zh.init(n,e),St.init(n,e)}),hg=K("ZodCIDRv6",(n,e)=>{Bh.init(n,e),St.init(n,e)}),pg=K("ZodBase64",(n,e)=>{kh.init(n,e),St.init(n,e)}),mg=K("ZodBase64URL",(n,e)=>{Vh.init(n,e),St.init(n,e)}),gg=K("ZodE164",(n,e)=>{Hh.init(n,e),St.init(n,e)}),_g=K("ZodJWT",(n,e)=>{Xh.init(n,e),St.init(n,e)}),Zu=K("ZodNumber",(n,e)=>{Fu.init(n,e),_t.init(n,e),n._zod.processJSONSchema=(i,r,s)=>dm(n,i,r),n.gt=(i,r)=>n.check(cl(i,r)),n.gte=(i,r)=>n.check(Ta(i,r)),n.min=(i,r)=>n.check(Ta(i,r)),n.lt=(i,r)=>n.check(ol(i,r)),n.lte=(i,r)=>n.check(wa(i,r)),n.max=(i,r)=>n.check(wa(i,r)),n.int=i=>n.check(fl(i)),n.safe=i=>n.check(fl(i)),n.positive=i=>n.check(cl(0,i)),n.nonnegative=i=>n.check(Ta(0,i)),n.negative=i=>n.check(ol(0,i)),n.nonpositive=i=>n.check(wa(0,i)),n.multipleOf=(i,r)=>n.check(ll(i,r)),n.step=(i,r)=>n.check(ll(i,r)),n.finite=()=>n;const t=n._zod.bag;n.minValue=Math.max(t.minimum??Number.NEGATIVE_INFINITY,t.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,n.maxValue=Math.min(t.maximum??Number.POSITIVE_INFINITY,t.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,n.isInt=(t.format??"").includes("int")||Number.isSafeInteger(t.multipleOf??.5),n.isFinite=!0,n.format=t.format??null});function Ne(n){return Hp(Zu,n)}const vg=K("ZodNumberFormat",(n,e)=>{$h.init(n,e),Zu.init(n,e)});function fl(n){return Wp(vg,n)}const xg=K("ZodBoolean",(n,e)=>{Zh.init(n,e),_t.init(n,e),n._zod.processJSONSchema=(t,i,r)=>hm(n,t,i)});function Zn(n){return Xp(xg,n)}const Sg=K("ZodUnknown",(n,e)=>{qh.init(n,e),_t.init(n,e),n._zod.processJSONSchema=(t,i,r)=>mm()});function Oi(){return $p(Sg)}const Mg=K("ZodNever",(n,e)=>{Yh.init(n,e),_t.init(n,e),n._zod.processJSONSchema=(t,i,r)=>pm(n,t,i)});function yg(n){return Zp(Mg,n)}const bg=K("ZodArray",(n,e)=>{Kh.init(n,e),_t.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Sm(n,t,i,r),n.element=e.element,n.min=(t,i)=>n.check(Qs(t,i)),n.nonempty=t=>n.check(Qs(1,t)),n.max=(t,i)=>n.check(ku(t,i)),n.length=(t,i)=>n.check(Gu(t,i)),n.unwrap=()=>n.element});function ot(n,e){return sm(bg,n,e)}const Eg=K("ZodObject",(n,e)=>{Qh.init(n,e),_t.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Mm(n,t,i,r),rt(n,"shape",()=>e.shape),n.keyof=()=>qu(Object.keys(n._zod.def.shape)),n.catchall=t=>n.clone({...n._zod.def,catchall:t}),n.passthrough=()=>n.clone({...n._zod.def,catchall:Oi()}),n.loose=()=>n.clone({...n._zod.def,catchall:Oi()}),n.strict=()=>n.clone({...n._zod.def,catchall:yg()}),n.strip=()=>n.clone({...n._zod.def,catchall:void 0}),n.extend=t=>xd(n,t),n.safeExtend=t=>Sd(n,t),n.merge=t=>Md(n,t),n.pick=t=>_d(n,t),n.omit=t=>vd(n,t),n.partial=(...t)=>yd(Yu,n,t[0]),n.required=(...t)=>bd(Ku,n,t[0])});function Lt(n,e){const t={type:"object",shape:n??{},...Te(e)};return new Eg(t)}const wg=K("ZodUnion",(n,e)=>{jh.init(n,e),_t.init(n,e),n._zod.processJSONSchema=(t,i,r)=>ym(n,t,i,r),n.options=e.options});function mc(n,e){return new wg({type:"union",options:n,...Te(e)})}const Tg=K("ZodIntersection",(n,e)=>{ep.init(n,e),_t.init(n,e),n._zod.processJSONSchema=(t,i,r)=>bm(n,t,i,r)});function Ag(n,e){return new Tg({type:"intersection",left:n,right:e})}const Rg=K("ZodTuple",(n,e)=>{tp.init(n,e),_t.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Em(n,t,i,r),n.rest=t=>n.clone({...n._zod.def,rest:t})});function Yn(n,e,t){const i=e instanceof pt,r=i?t:e,s=i?e:null;return new Rg({type:"tuple",items:n,rest:s,...Te(r)})}const Cg=K("ZodRecord",(n,e)=>{np.init(n,e),_t.init(n,e),n._zod.processJSONSchema=(t,i,r)=>wm(n,t,i,r),n.keyType=e.keyType,n.valueType=e.valueType});function dl(n,e,t){return new Cg({type:"record",keyType:n,valueType:e,...Te(t)})}const lo=K("ZodEnum",(n,e)=>{ip.init(n,e),_t.init(n,e),n._zod.processJSONSchema=(i,r,s)=>gm(n,i,r),n.enum=e.entries,n.options=Object.values(e.entries);const t=new Set(Object.keys(e.entries));n.extract=(i,r)=>{const s={};for(const a of i)if(t.has(a))s[a]=e.entries[a];else throw new Error(`Key ${a} not found in enum`);return new lo({...e,checks:[],...Te(r),entries:s})},n.exclude=(i,r)=>{const s={...e.entries};for(const a of i)if(t.has(a))delete s[a];else throw new Error(`Key ${a} not found in enum`);return new lo({...e,checks:[],...Te(r),entries:s})}});function qu(n,e){const t=Array.isArray(n)?Object.fromEntries(n.map(i=>[i,i])):n;return new lo({type:"enum",entries:t,...Te(e)})}const Pg=K("ZodLiteral",(n,e)=>{rp.init(n,e),_t.init(n,e),n._zod.processJSONSchema=(t,i,r)=>_m(n,t,i),n.values=new Set(e.values),Object.defineProperty(n,"value",{get(){if(e.values.length>1)throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");return e.values[0]}})});function Ui(n,e){return new Pg({type:"literal",values:Array.isArray(n)?n:[n],...Te(e)})}const Dg=K("ZodTransform",(n,e)=>{sp.init(n,e),_t.init(n,e),n._zod.processJSONSchema=(t,i,r)=>xm(n,t),n._zod.parse=(t,i)=>{if(i.direction==="backward")throw new Su(n.constructor.name);t.addIssue=s=>{if(typeof s=="string")t.issues.push(Yr(s,t.value,e));else{const a=s;a.fatal&&(a.continue=!1),a.code??(a.code="custom"),a.input??(a.input=t.value),a.inst??(a.inst=n),t.issues.push(Yr(a))}};const r=e.transform(t.value,t);return r instanceof Promise?r.then(s=>(t.value=s,t)):(t.value=r,t)}});function Ig(n){return new Dg({type:"transform",transform:n})}const Yu=K("ZodOptional",(n,e)=>{Bu.init(n,e),_t.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Xu(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function hl(n){return new Yu({type:"optional",innerType:n})}const Lg=K("ZodExactOptional",(n,e)=>{ap.init(n,e),_t.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Xu(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function Ng(n){return new Lg({type:"optional",innerType:n})}const Ug=K("ZodNullable",(n,e)=>{op.init(n,e),_t.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Tm(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function pl(n){return new Ug({type:"nullable",innerType:n})}const Fg=K("ZodDefault",(n,e)=>{cp.init(n,e),_t.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Rm(n,t,i,r),n.unwrap=()=>n._zod.def.innerType,n.removeDefault=n.unwrap});function Og(n,e){return new Fg({type:"default",innerType:n,get defaultValue(){return typeof e=="function"?e():Eu(e)}})}const zg=K("ZodPrefault",(n,e)=>{lp.init(n,e),_t.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Cm(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function Bg(n,e){return new zg({type:"prefault",innerType:n,get defaultValue(){return typeof e=="function"?e():Eu(e)}})}const Ku=K("ZodNonOptional",(n,e)=>{up.init(n,e),_t.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Am(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function kg(n,e){return new Ku({type:"nonoptional",innerType:n,...Te(e)})}const Gg=K("ZodCatch",(n,e)=>{fp.init(n,e),_t.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Pm(n,t,i,r),n.unwrap=()=>n._zod.def.innerType,n.removeCatch=n.unwrap});function Vg(n,e){return new Gg({type:"catch",innerType:n,catchValue:typeof e=="function"?e:()=>e})}const Hg=K("ZodPipe",(n,e)=>{dp.init(n,e),_t.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Dm(n,t,i,r),n.in=e.in,n.out=e.out});function ml(n,e){return new Hg({type:"pipe",in:n,out:e})}const Wg=K("ZodReadonly",(n,e)=>{hp.init(n,e),_t.init(n,e),n._zod.processJSONSchema=(t,i,r)=>Im(n,t,i,r),n.unwrap=()=>n._zod.def.innerType});function Xg(n){return new Wg({type:"readonly",innerType:n})}const $g=K("ZodCustom",(n,e)=>{pp.init(n,e),_t.init(n,e),n._zod.processJSONSchema=(t,i,r)=>vm(n,t)});function Zg(n,e={}){return am($g,n,e)}function qg(n){return om(n)}const Yg=[{name:"fgv-runtime.mjs",url:"https://raw.githubusercontent.com/JHB-1/function-graph-visualizer-web/5bdced5cd3638050f931fa53366887f93cabf103/runtime/core-0f3c8ac/fgv-runtime.mjs",sha256:"def5b81b708a61cca3e3f05b13800cf874e710f03c351453f29b22493b321afe"},{name:"fgv-runtime.wasm",url:"https://raw.githubusercontent.com/JHB-1/function-graph-visualizer-web/5bdced5cd3638050f931fa53366887f93cabf103/runtime/core-0f3c8ac/fgv-runtime.wasm",sha256:"7da4ac058c6ba3776e96669c0fe757ad6075efbea65b5b93eaabcc92b6ec2b1c"}],Kg={files:Yg},Jg=Kg.files.map(n=>n.sha256).join("-");function Ft(n){if(typeof n!="object"||n===null||Array.isArray(n))throw new Error("JSON 객체가 필요합니다.");return n}class Qg{worker=new Worker(new URL(""+new URL("worker-DNkyt0ou.js",import.meta.url).href,import.meta.url),{type:"module"});sequence=0;pending=new Map;constructor(){this.worker.onmessage=e=>{const t=Ft(e.data),i=Number(t.id),r=this.pending.get(i);if(r)if(this.pending.delete(i),t.error)r.reject(new Error(String(t.error)));else{const s=Ft(t.output);s.native_error?r.reject(new Error(String(s.native_error))):r.resolve(s)}},this.worker.onerror=e=>{for(const t of this.pending.values())t.reject(new Error(e.message));this.pending.clear()}}request(e){const t=++this.sequence;return new Promise((i,r)=>{this.pending.set(t,{resolve:i,reject:r});const s=new URL("./runtime/fgv-runtime.mjs",document.baseURI);s.searchParams.set("v",Jg),this.worker.postMessage({id:t,input:e,runtime_url:s.href})})}dispose(){this.worker.terminate();for(const e of this.pending.values())e.reject(new Error("Core worker disposed"));this.pending.clear()}}function Ju(n,e){if(n.length>4096)throw new Error("수식은 4096자 이내로 입력하세요.");const t=n.match(/(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|[A-Za-z_][A-Za-z_0-9]*|\*\*|[+\-*/^(),]|\S/gi)??[];let i=0,r=0;const s=new Set(["sin","cos","tan","exp","log","sqrt","abs"]),a=new Set(["min","max","pow"]),o={"+":"add","-":"sub","*":"mul","/":"div","^":"pow","**":"pow"};function c(d,...u){if(++r>512)throw new Error("수식 AST 한도는 512개입니다.");return[d,...u]}function l(d,u){if(u>64)throw new Error("수식 중첩은 64단계 이내로 입력하세요.");const h=t[i++];let _;if(h==="+"||h==="-")_=c(h==="+"?"pos":"neg",l(3,u+1));else if(h==="("){if(_=l(0,u+1),t[i++]!==")")throw new Error("닫는 괄호가 필요합니다.")}else if(h!==void 0&&/^(?:\d|\.)/.test(h)&&Number.isFinite(Number(h)))_=c("number",Number(h));else if(h==="pi"||h==="e")_=c("number",h==="pi"?Math.PI:Math.E);else if(h!==void 0&&(s.has(h)||a.has(h))){if(t[i++]!=="(")throw new Error(`${h} 뒤에는 괄호가 필요합니다.`);const S=l(0,u+1);if(a.has(h)){if(t[i++]!==",")throw new Error(`${h}에는 인자 두 개가 필요합니다.`);_=c(h,S,l(0,u+1))}else _=c(h,S);if(t[i++]!==")")throw new Error("닫는 괄호가 필요합니다.")}else{const S=h==="x"?0:h==="y"?1:h==="z"?2:/^x\d+$/.test(h??"")?Number(h.slice(1)):-1;if(S<0||S>=e)throw new Error(`지원하지 않는 변수/토큰: ${h??"입력 끝"}`);_=c("variable",S)}for(;i<t.length;){const S=t[i],m=S==="+"||S==="-"?1:S==="*"||S==="/"?2:S==="^"||S==="**"?4:-1;if(m<d)break;++i;const p=o[S];_=c(p,_,l(m+(m===4?0:1),u+1))}return _}const f=l(0,0);if(i!==t.length)throw new Error(`예상하지 못한 토큰: ${t[i]}`);return f}const gc="186",jg=0,gl=1,e_=2,Gs=1,t_=2,Vr=3,zi=0,nn=1,dn=2,Jn=0,$r=1,_l=2,vl=3,xl=4,n_=5,cr=100,i_=101,r_=102,s_=103,a_=104,o_=200,c_=201,l_=202,u_=203,Qu=204,ju=205,f_=206,d_=207,h_=208,p_=209,m_=210,g_=211,__=212,v_=213,x_=214,uo=0,fo=1,ho=2,Kr=3,po=4,mo=5,go=6,_o=7,ef=0,S_=1,M_=2,Bn=0,tf=1,nf=2,rf=3,sf=4,af=5,of=6,cf=7,lf=300,Bi=301,Mr=302,Aa=303,Ra=304,pa=306,vo=1e3,Kn=1001,xo=1002,Ot=1003,y_=1004,ps=1005,Wt=1006,Ca=1007,Ii=1008,hn=1009,uf=1010,ff=1011,Jr=1012,_c=1013,kn=1014,Fn=1015,Gn=1016,vc=1017,xc=1018,Qr=1020,df=35902,hf=35899,pf=1021,mf=1022,Tn=1023,ei=1026,Li=1027,gf=1028,Sc=1029,ki=1030,Mc=1031,yc=1033,Vs=33776,Hs=33777,Ws=33778,Xs=33779,So=35840,Mo=35841,yo=35842,bo=35843,Eo=36196,wo=37492,To=37496,Ao=37488,Ro=37489,ea=37490,Co=37491,Po=37808,Do=37809,Io=37810,Lo=37811,No=37812,Uo=37813,Fo=37814,Oo=37815,zo=37816,Bo=37817,ko=37818,Go=37819,Vo=37820,Ho=37821,Wo=36492,Xo=36494,$o=36495,Zo=36283,qo=36284,ta=36285,Yo=36286,b_=3200,Sl=0,E_=1,hi="",fn="srgb",na="srgb-linear",ia="linear",tt="srgb",Pa=7680,w_=519,T_=512,A_=513,R_=514,bc=515,C_=516,P_=517,Ec=518,D_=519,I_=35044,Ml=35048,yl="300 es",On=2e3,ra=2001;function L_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function sa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function N_(){const n=sa("canvas");return n.style.display="block",n}const bl={};function El(...n){const e="THREE."+n.shift();console.log(e,...n)}function _f(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function De(...n){n=_f(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ye(...n){n=_f(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function pr(...n){const e=n.join(" ");e in bl||(bl[e]=!0,De(...n))}function U_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const F_={[uo]:fo,[ho]:go,[po]:_o,[Kr]:mo,[fo]:uo,[go]:ho,[_o]:po,[mo]:Kr};class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Da=Math.PI/180,Ko=180/Math.PI;function is(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function O_(n,e){return(n%e+e)%e}function Ia(n,e,t){return(1-t)*n+t*e}function Pr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class Ke{static{Ke.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],f=i[r+2],d=i[r+3],u=s[a+0],h=s[a+1],_=s[a+2],S=s[a+3];if(d!==S||c!==u||l!==h||f!==_){let m=c*u+l*h+f*_+d*S;m<0&&(u=-u,h=-h,_=-_,S=-S,m=-m);let p=1-o;if(m<.9995){const T=Math.acos(m),A=Math.sin(T);p=Math.sin(p*T)/A,o=Math.sin(o*T)/A,c=c*p+u*o,l=l*p+h*o,f=f*p+_*o,d=d*p+S*o}else{c=c*p+u*o,l=l*p+h*o,f=f*p+_*o,d=d*p+S*o;const T=1/Math.sqrt(c*c+l*l+f*f+d*d);c*=T,l*=T,f*=T,d*=T}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],f=i[r+3],d=s[a],u=s[a+1],h=s[a+2],_=s[a+3];return e[t]=o*_+f*d+c*h-l*u,e[t+1]=c*_+f*u+l*d-o*h,e[t+2]=l*_+f*h+o*u-c*d,e[t+3]=f*_-o*d-c*u-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),f=o(r/2),d=o(s/2),u=c(i/2),h=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=u*f*d+l*h*_,this._y=l*h*d-u*f*_,this._z=l*f*_+u*h*d,this._w=l*f*d-u*h*_;break;case"YXZ":this._x=u*f*d+l*h*_,this._y=l*h*d-u*f*_,this._z=l*f*_-u*h*d,this._w=l*f*d+u*h*_;break;case"ZXY":this._x=u*f*d-l*h*_,this._y=l*h*d+u*f*_,this._z=l*f*_+u*h*d,this._w=l*f*d-u*h*_;break;case"ZYX":this._x=u*f*d-l*h*_,this._y=l*h*d+u*f*_,this._z=l*f*_-u*h*d,this._w=l*f*d+u*h*_;break;case"YZX":this._x=u*f*d+l*h*_,this._y=l*h*d+u*f*_,this._z=l*f*_-u*h*d,this._w=l*f*d-u*h*_;break;case"XZY":this._x=u*f*d-l*h*_,this._y=l*h*d-u*f*_,this._z=l*f*_+u*h*d,this._w=l*f*d+u*h*_;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],d=t[10],u=i+o+d;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(f-c)*h,this._y=(s-l)*h,this._z=(a-r)*h}else if(i>o&&i>d){const h=2*Math.sqrt(1+i-o-d);this._w=(f-c)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+l)/h}else if(o>d){const h=2*Math.sqrt(1+o-i-d);this._w=(s-l)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(c+f)/h}else{const h=2*Math.sqrt(1+d-i-o);this._w=(a-r)/h,this._x=(s+l)/h,this._y=(c+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=i*f+a*o+r*l-s*c,this._y=r*f+a*c+s*o-i*l,this._z=s*f+a*l+i*c-r*o,this._w=a*f-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),f=Math.sin(l);c=Math.sin(c*l)/f,t=Math.sin(t*l)/f,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{static{F.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),f=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+c*l+a*d-o*f,this.y=i+c*f+o*l-s*d,this.z=r+c*d+s*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return La.copy(this).projectOnVector(e),this.sub(La)}reflect(e){return this.sub(La.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const La=new F,wl=new Tr;class Le{static{Le.prototype.isMatrix3=!0}constructor(e,t,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=c,f[6]=i,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],f=i[4],d=i[7],u=i[2],h=i[5],_=i[8],S=r[0],m=r[3],p=r[6],T=r[1],A=r[4],M=r[7],y=r[2],b=r[5],R=r[8];return s[0]=a*S+o*T+c*y,s[3]=a*m+o*A+c*b,s[6]=a*p+o*M+c*R,s[1]=l*S+f*T+d*y,s[4]=l*m+f*A+d*b,s[7]=l*p+f*M+d*R,s[2]=u*S+h*T+_*y,s[5]=u*m+h*A+_*b,s[8]=u*p+h*M+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-i*s*f+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],d=f*a-o*l,u=o*c-f*s,h=l*s-a*c,_=t*d+i*u+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=d*S,e[1]=(r*l-f*i)*S,e[2]=(o*i-r*a)*S,e[3]=u*S,e[4]=(f*t-r*c)*S,e[5]=(r*s-o*t)*S,e[6]=h*S,e[7]=(i*c-l*t)*S,e[8]=(a*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Na.makeScale(e,t)),this}rotate(e){return pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Na.makeRotation(-e)),this}translate(e,t){return pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Na=new Le,Tl=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Al=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function z_(){const n={enabled:!0,workingColorSpace:na,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===tt&&(r.r=Qn(r.r),r.g=Qn(r.g),r.b=Qn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(r.r=mr(r.r),r.g=mr(r.g),r.b=mr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hi?ia:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return pr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return pr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[na]:{primaries:e,whitePoint:i,transfer:ia,toXYZ:Tl,fromXYZ:Al,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:Tl,fromXYZ:Al,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),n}const He=z_();function Qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zi;class B_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Zi===void 0&&(Zi=sa("canvas")),Zi.width=e.width,Zi.height=e.height;const r=Zi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Zi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Qn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qn(t[i]/255)*255):t[i]=Qn(t[i]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let k_=0;class wc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=is(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ua(r[a].image)):s.push(Ua(r[a]))}else s=Ua(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ua(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?B_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let G_=0;const Fa=new F;class Yt extends Wi{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=Kn,r=Kn,s=Wt,a=Ii,o=Tn,c=hn,l=Yt.DEFAULT_ANISOTROPY,f=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=is(),this.name="",this.source=new wc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fa).x}get height(){return this.source.getSize(Fa).y}get depth(){return this.source.getSize(Fa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vo:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vo:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=lf;Yt.DEFAULT_ANISOTROPY=1;class ct{static{ct.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],f=c[4],d=c[8],u=c[1],h=c[5],_=c[9],S=c[2],m=c[6],p=c[10];if(Math.abs(f-u)<.01&&Math.abs(d-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(d+S)<.1&&Math.abs(_+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,M=(h+1)/2,y=(p+1)/2,b=(f+u)/4,R=(d+S)/4,v=(_+m)/4;return A>M&&A>y?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=b/i,s=R/i):M>y?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=v/r):y<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),i=R/s,r=v/s),this.set(i,r,s,t),this}let T=Math.sqrt((m-_)*(m-_)+(d-S)*(d-S)+(u-f)*(u-f));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(d-S)/T,this.z=(u-f)/T,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class V_ extends Wi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Yt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new wc(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends V_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vf extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class H_ extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class it{static{it.prototype.isMatrix4=!0}constructor(e,t,i,r,s,a,o,c,l,f,d,u,h,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,f,d,u,h,_,S,m)}set(e,t,i,r,s,a,o,c,l,f,d,u,h,_,S,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=f,p[10]=d,p[14]=u,p[3]=h,p[7]=_,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/qi.setFromMatrixColumn(e,0).length(),s=1/qi.setFromMatrixColumn(e,1).length(),a=1/qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*f,h=a*d,_=o*f,S=o*d;t[0]=c*f,t[4]=-c*d,t[8]=l,t[1]=h+_*l,t[5]=u-S*l,t[9]=-o*c,t[2]=S-u*l,t[6]=_+h*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*f,h=c*d,_=l*f,S=l*d;t[0]=u+S*o,t[4]=_*o-h,t[8]=a*l,t[1]=a*d,t[5]=a*f,t[9]=-o,t[2]=h*o-_,t[6]=S+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*f,h=c*d,_=l*f,S=l*d;t[0]=u-S*o,t[4]=-a*d,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*f,t[9]=S-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*f,h=a*d,_=o*f,S=o*d;t[0]=c*f,t[4]=_*l-h,t[8]=u*l+S,t[1]=c*d,t[5]=S*l+u,t[9]=h*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,h=a*l,_=o*c,S=o*l;t[0]=c*f,t[4]=S-u*d,t[8]=_*d+h,t[1]=d,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=h*d+_,t[10]=u-S*d}else if(e.order==="XZY"){const u=a*c,h=a*l,_=o*c,S=o*l;t[0]=c*f,t[4]=-d,t[8]=l*f,t[1]=u*d+S,t[5]=a*f,t[9]=h*d-_,t[2]=_*d-h,t[6]=o*f,t[10]=S*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W_,e,X_)}lookAt(e,t,i){const r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),si.crossVectors(i,sn),si.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),si.crossVectors(i,sn)),si.normalize(),ms.crossVectors(sn,si),r[0]=si.x,r[4]=ms.x,r[8]=sn.x,r[1]=si.y,r[5]=ms.y,r[9]=sn.y,r[2]=si.z,r[6]=ms.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],f=i[1],d=i[5],u=i[9],h=i[13],_=i[2],S=i[6],m=i[10],p=i[14],T=i[3],A=i[7],M=i[11],y=i[15],b=r[0],R=r[4],v=r[8],w=r[12],D=r[1],N=r[5],B=r[9],H=r[13],L=r[2],k=r[6],Y=r[10],W=r[14],ie=r[3],$=r[7],ee=r[11],ne=r[15];return s[0]=a*b+o*D+c*L+l*ie,s[4]=a*R+o*N+c*k+l*$,s[8]=a*v+o*B+c*Y+l*ee,s[12]=a*w+o*H+c*W+l*ne,s[1]=f*b+d*D+u*L+h*ie,s[5]=f*R+d*N+u*k+h*$,s[9]=f*v+d*B+u*Y+h*ee,s[13]=f*w+d*H+u*W+h*ne,s[2]=_*b+S*D+m*L+p*ie,s[6]=_*R+S*N+m*k+p*$,s[10]=_*v+S*B+m*Y+p*ee,s[14]=_*w+S*H+m*W+p*ne,s[3]=T*b+A*D+M*L+y*ie,s[7]=T*R+A*N+M*k+y*$,s[11]=T*v+A*B+M*Y+y*ee,s[15]=T*w+A*H+M*W+y*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],d=e[6],u=e[10],h=e[14],_=e[3],S=e[7],m=e[11],p=e[15],T=c*h-l*u,A=o*h-l*d,M=o*u-c*d,y=a*h-l*f,b=a*u-c*f,R=a*d-o*f;return t*(S*T-m*A+p*M)-i*(_*T-m*y+p*b)+r*(_*A-S*y+p*R)-s*(_*M-S*b+m*R)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],f=e[10];return t*(a*f-o*l)-i*(s*f-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],d=e[9],u=e[10],h=e[11],_=e[12],S=e[13],m=e[14],p=e[15],T=t*o-i*a,A=t*c-r*a,M=t*l-s*a,y=i*c-r*o,b=i*l-s*o,R=r*l-s*c,v=f*S-d*_,w=f*m-u*_,D=f*p-h*_,N=d*m-u*S,B=d*p-h*S,H=u*p-h*m,L=T*H-A*B+M*N+y*D-b*w+R*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/L;return e[0]=(o*H-c*B+l*N)*k,e[1]=(r*B-i*H-s*N)*k,e[2]=(S*R-m*b+p*y)*k,e[3]=(u*b-d*R-h*y)*k,e[4]=(c*D-a*H-l*w)*k,e[5]=(t*H-r*D+s*w)*k,e[6]=(m*M-_*R-p*A)*k,e[7]=(f*R-u*M+h*A)*k,e[8]=(a*B-o*D+l*v)*k,e[9]=(i*D-t*B-s*v)*k,e[10]=(_*b-S*M+p*T)*k,e[11]=(d*M-f*b-h*T)*k,e[12]=(o*w-a*N-c*v)*k,e[13]=(t*N-i*w+r*v)*k,e[14]=(S*A-_*y-m*T)*k,e[15]=(f*y-d*A+u*T)*k,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,f=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,f*o+i,f*c-r*a,0,l*c-r*o,f*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,f=a+a,d=o+o,u=s*l,h=s*f,_=s*d,S=a*f,m=a*d,p=o*d,T=c*l,A=c*f,M=c*d,y=i.x,b=i.y,R=i.z;return r[0]=(1-(S+p))*y,r[1]=(h+M)*y,r[2]=(_-A)*y,r[3]=0,r[4]=(h-M)*b,r[5]=(1-(u+p))*b,r[6]=(m+T)*b,r[7]=0,r[8]=(_+A)*R,r[9]=(m-T)*R,r[10]=(1-(u+S))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=qi.set(r[0],r[1],r[2]).length();const o=qi.set(r[4],r[5],r[6]).length(),c=qi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),_n.copy(this);const l=1/a,f=1/o,d=1/c;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=f,_n.elements[5]*=f,_n.elements[6]*=f,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,t.setFromRotationMatrix(_n),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,r,s,a,o=On,c=!1){const l=this.elements,f=2*s/(t-e),d=2*s/(i-r),u=(t+e)/(t-e),h=(i+r)/(i-r);let _,S;if(c)_=s/(a-s),S=a*s/(a-s);else if(o===On)_=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===ra)_=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=On,c=!1){const l=this.elements,f=2/(t-e),d=2/(i-r),u=-(t+e)/(t-e),h=-(i+r)/(i-r);let _,S;if(c)_=1/(a-s),S=a/(a-s);else if(o===On)_=-2/(a-s),S=-(a+s)/(a-s);else if(o===ra)_=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qi=new F,_n=new it,W_=new F(0,0,0),X_=new F(1,1,1),si=new F,ms=new F,sn=new F,Rl=new it,Cl=new Tr;class Gi{constructor(e=0,t=0,i=0,r=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],f=r[9],d=r[2],u=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,h),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Rl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class xf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $_=0;const Pl=new F,Yi=new Tr,Vn=new it,gs=new F,Dr=new F,Z_=new F,q_=new Tr,Dl=new F(1,0,0),Il=new F(0,1,0),Ll=new F(0,0,1),Nl={type:"added"},Y_={type:"removed"},Ki={type:"childadded",child:null},Oa={type:"childremoved",child:null};class Kt extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new F,t=new Gi,i=new Tr,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new Le}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(Dl,e)}rotateY(e){return this.rotateOnAxis(Il,e)}rotateZ(e){return this.rotateOnAxis(Ll,e)}translateOnAxis(e,t){return Pl.copy(e).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dl,e)}translateY(e){return this.translateOnAxis(Il,e)}translateZ(e){return this.translateOnAxis(Ll,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?gs.copy(e):gs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Dr,gs,this.up):Vn.lookAt(gs,Dr,this.up),this.quaternion.setFromRotationMatrix(Vn),r&&(Vn.extractRotation(r.matrixWorld),Yi.setFromRotationMatrix(Vn),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nl),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Y_),Oa.child=e,this.dispatchEvent(Oa),Oa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nl),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,Z_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,q_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),d=a(e.shapes),u=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Kt.DEFAULT_UP=new F(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hr extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K_={type:"move"};class za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,i),p=this._getHandJoint(l,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=f.position.distanceTo(d.position),h=.02,_=.005;l.inputState.pinching&&u>h+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=h-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(K_)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Hr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Ba(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=He.workingColorSpace){return this.r=e,this.g=t,this.b=i,He.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=He.workingColorSpace){if(e=O_(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ba(a,s,e+1/3),this.g=Ba(a,s,e),this.b=Ba(a,s,e-1/3)}return He.colorSpaceToWorking(this,r),this}setStyle(e,t=fn){function i(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const i=Sf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return He.workingToColorSpace(Gt.copy(this),e),Math.round(We(Gt.r*255,0,255))*65536+Math.round(We(Gt.g*255,0,255))*256+Math.round(We(Gt.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(Gt.copy(this),t);const i=Gt.r,r=Gt.g,s=Gt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=f<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=fn){He.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,r=Gt.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(_s);const i=Ia(ai.h,_s.h,t),r=Ia(ai.s,_s.s,t),s=Ia(ai.l,_s.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Ze;Ze.NAMES=Sf;class J_ extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const vn=new F,Hn=new F,ka=new F,Wn=new F,Ji=new F,Qi=new F,Ul=new F,Ga=new F,Va=new F,Ha=new F,Wa=new ct,Xa=new ct,$a=new ct;class En{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),vn.subVectors(e,t),r.cross(vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){vn.subVectors(r,t),Hn.subVectors(i,t),ka.subVectors(e,t);const a=vn.dot(vn),o=vn.dot(Hn),c=vn.dot(ka),l=Hn.dot(Hn),f=Hn.dot(ka),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,h=(l*c-o*f)*u,_=(a*f-o*c)*u;return s.set(1-h-_,_,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Wn.x),c.addScaledVector(a,Wn.y),c.addScaledVector(o,Wn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Wa.setScalar(0),Xa.setScalar(0),$a.setScalar(0),Wa.fromBufferAttribute(e,t),Xa.fromBufferAttribute(e,i),$a.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Wa,s.x),a.addScaledVector(Xa,s.y),a.addScaledVector($a,s.z),a}static isFrontFacing(e,t,i,r){return vn.subVectors(i,t),Hn.subVectors(e,t),vn.cross(Hn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),vn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return En.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ji.subVectors(r,i),Qi.subVectors(s,i),Ga.subVectors(e,i);const c=Ji.dot(Ga),l=Qi.dot(Ga);if(c<=0&&l<=0)return t.copy(i);Va.subVectors(e,r);const f=Ji.dot(Va),d=Qi.dot(Va);if(f>=0&&d<=f)return t.copy(r);const u=c*d-f*l;if(u<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(i).addScaledVector(Ji,a);Ha.subVectors(e,s);const h=Ji.dot(Ha),_=Qi.dot(Ha);if(_>=0&&h<=_)return t.copy(s);const S=h*l-c*_;if(S<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(i).addScaledVector(Qi,o);const m=f*_-h*d;if(m<=0&&d-f>=0&&h-_>=0)return Ul.subVectors(s,r),o=(d-f)/(d-f+(h-_)),t.copy(r).addScaledVector(Ul,o);const p=1/(m+S+u);return a=S*p,o=u*p,t.copy(i).addScaledVector(Ji,a).addScaledVector(Qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ar{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xn):xn.fromBufferAttribute(s,a),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vs.copy(i.boundingBox)),vs.applyMatrix4(e.matrixWorld),this.union(vs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),xs.subVectors(this.max,Ir),ji.subVectors(e.a,Ir),er.subVectors(e.b,Ir),tr.subVectors(e.c,Ir),oi.subVectors(er,ji),ci.subVectors(tr,er),bi.subVectors(ji,tr);let t=[0,-oi.z,oi.y,0,-ci.z,ci.y,0,-bi.z,bi.y,oi.z,0,-oi.x,ci.z,0,-ci.x,bi.z,0,-bi.x,-oi.y,oi.x,0,-ci.y,ci.x,0,-bi.y,bi.x,0];return!Za(t,ji,er,tr,xs)||(t=[1,0,0,0,1,0,0,0,1],!Za(t,ji,er,tr,xs))?!1:(Ss.crossVectors(oi,ci),t=[Ss.x,Ss.y,Ss.z],Za(t,ji,er,tr,xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xn=[new F,new F,new F,new F,new F,new F,new F,new F],xn=new F,vs=new Ar,ji=new F,er=new F,tr=new F,oi=new F,ci=new F,bi=new F,Ir=new F,xs=new F,Ss=new F,Ei=new F;function Za(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ei.fromArray(n,s);const o=r.x*Math.abs(Ei.x)+r.y*Math.abs(Ei.y)+r.z*Math.abs(Ei.z),c=e.dot(Ei),l=t.dot(Ei),f=i.dot(Ei);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const Tt=new F,Ms=new Ke;let Q_=0;class Cn extends Wi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Q_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=I_,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ms.fromBufferAttribute(this,t),Ms.applyMatrix3(e),this.setXY(t,Ms.x,Ms.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Mf extends Cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Tc extends Cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ht extends Cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const j_=new Ar,Lr=new F,qa=new F;class rs{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):j_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Lr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(qa)),this.expandByPoint(Lr.copy(e.center).sub(qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ev=0;const un=new it,Ya=new Kt,nr=new F,an=new Ar,Nr=new Ar,Dt=new F;class qt extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(L_(e)?Tc:Mf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Le().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return Ya.lookAt(e),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ht(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Nr.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(an.min,Nr.min),an.expandByPoint(Dt),Dt.addVectors(an.max,Nr.max),an.expandByPoint(Dt)):(an.expandByPoint(Nr.min),an.expandByPoint(Nr.max))}an.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)Dt.fromBufferAttribute(o,l),c&&(nr.fromBufferAttribute(e,l),Dt.add(nr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Cn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let v=0;v<i.count;v++)o[v]=new F,c[v]=new F;const l=new F,f=new F,d=new F,u=new Ke,h=new Ke,_=new Ke,S=new F,m=new F;function p(v,w,D){l.fromBufferAttribute(i,v),f.fromBufferAttribute(i,w),d.fromBufferAttribute(i,D),u.fromBufferAttribute(s,v),h.fromBufferAttribute(s,w),_.fromBufferAttribute(s,D),f.sub(l),d.sub(l),h.sub(u),_.sub(u);const N=1/(h.x*_.y-_.x*h.y);isFinite(N)&&(S.copy(f).multiplyScalar(_.y).addScaledVector(d,-h.y).multiplyScalar(N),m.copy(d).multiplyScalar(h.x).addScaledVector(f,-_.x).multiplyScalar(N),o[v].add(S),o[w].add(S),o[D].add(S),c[v].add(m),c[w].add(m),c[D].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let v=0,w=T.length;v<w;++v){const D=T[v],N=D.start,B=D.count;for(let H=N,L=N+B;H<L;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const A=new F,M=new F,y=new F,b=new F;function R(v){y.fromBufferAttribute(r,v),b.copy(y);const w=o[v];A.copy(w),A.sub(y.multiplyScalar(y.dot(w))).normalize(),M.crossVectors(b,w);const N=M.dot(c[v])<0?-1:1;a.setXYZW(v,A.x,A.y,A.z,N)}for(let v=0,w=T.length;v<w;++v){const D=T[v],N=D.start,B=D.count;for(let H=N,L=N+B;H<L;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);const r=new F,s=new F,a=new F,o=new F,c=new F,l=new F,f=new F,d=new F;if(e)for(let u=0,h=e.count;u<h;u+=3){const _=e.getX(u+0),S=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,m),o.add(f),c.add(f),l.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,h=t.count;u<h;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,d=o.normalized,u=new l.constructor(c.length*f);let h=0,_=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?h=c[S]*o.data.stride+o.offset:h=c[S]*f;for(let p=0;p<f;p++)u[_++]=l[h++]}return new Cn(u,f,d)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let f=0,d=l.length;f<d;f++){const u=l[f],h=e(u,i);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let d=0,u=l.length;d<u;d++){const h=l[d];f.push(h.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],d=s[l];for(let u=0,h=d.length;u<h;u++)f.push(d[u].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ka=new F,tv=new F,nv=new Le;class fi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ka.subVectors(i,t).cross(tv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Ka),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||nv.getNormalMatrix(e),r=this.coplanarPoint(Ka).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let iv=0;class Rr extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=is(),this.name="",this.type="Material",this.blending=$r,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qu,this.blendDst=ju,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pa,this.stencilZFail=Pa,this.stencilZPass=Pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new fi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ke().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $n=new F,Ja=new F,ys=new F,bs=new F;class Ac{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ja.copy(e).add(t).multiplyScalar(.5),ys.copy(t).sub(e).normalize(),bs.copy(this.origin).sub(Ja);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ys),o=bs.dot(this.direction),c=-bs.dot(ys),l=bs.lengthSq(),f=Math.abs(1-a*a);let d,u,h,_;if(f>0)if(d=a*c-o,u=a*o-c,_=s*f,d>=0)if(u>=-_)if(u<=_){const S=1/f;d*=S,u*=S,h=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),h=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),h=-d*d+u*(u+2*c)+l;else u<=-_?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),h=-d*d+u*(u+2*c)+l):u<=_?(d=0,u=Math.min(Math.max(-s,-c),s),h=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),h=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),h=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ja).addScaledVector(ys,u),h}intersectSphere(e,t){if(e.radius<0)return null;$n.subVectors(e.center,this.origin);const i=$n.dot(this.direction),r=$n.dot($n)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),f>=0?(s=(e.min.y-u.y)*f,a=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,a=(e.min.y-u.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,f=o.z,d=e.x-a.x,u=e.y-a.y,h=e.z-a.z,_=t.x-a.x,S=t.y-a.y,m=t.z-a.z,p=i.x-a.x,T=i.y-a.y,A=i.z-a.z,M=Math.abs(c),y=Math.abs(l),b=Math.abs(f);let R,v,w,D,N,B,H,L,k,Y,W,ie;if(M>=y&&M>=b?(w=c,B=d,k=_,ie=p,c>=0?(R=l,v=f,D=u,N=h,H=S,L=m,Y=T,W=A):(R=f,v=l,D=h,N=u,H=m,L=S,Y=A,W=T)):y>=b?(w=l,B=u,k=S,ie=T,l>=0?(R=f,v=c,D=h,N=d,H=m,L=_,Y=A,W=p):(R=c,v=f,D=d,N=h,H=_,L=m,Y=p,W=A)):(w=f,B=h,k=m,ie=A,f>=0?(R=c,v=l,D=d,N=u,H=_,L=S,Y=p,W=T):(R=l,v=c,D=u,N=d,H=S,L=_,Y=T,W=p)),w===0)return null;const $=R/w,ee=v/w,ne=1/w,Ce=D-$*B,Ae=N-ee*B,lt=H-$*k,Xe=L-ee*k,Je=Y-$*ie,Z=W-ee*ie,j=Je*Xe-Z*lt,ve=Ce*Z-Ae*Je,Ie=lt*Ae-Xe*Ce;if(r){if(j<0||ve<0||Ie<0)return null}else if((j<0||ve<0||Ie<0)&&(j>0||ve>0||Ie>0))return null;const ge=j+ve+Ie;if(ge===0)return null;const Be=ne*(j*B+ve*k+Ie*ie);return(ge>0?Be<0:Be>0)?null:this.at(Be/ge,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rc extends Rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Fl=new it,wi=new Ac,Es=new rs,Ol=new F,ws=new F,Ts=new F,As=new F,Qa=new F,Rs=new F,zl=new F,Cs=new F;class en extends Kt{constructor(e=new qt,t=new Rc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Rs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=o[c],d=s[c];f!==0&&(Qa.fromBufferAttribute(d,e),a?Rs.addScaledVector(Qa,f):Rs.addScaledVector(Qa.sub(t),f))}t.add(Rs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere),Es.applyMatrix4(s),wi.copy(e.ray).recast(e.near),!(Es.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Es,Ol)===null||wi.origin.distanceToSquared(Ol)>(e.far-e.near)**2))&&(Fl.copy(s).invert(),wi.copy(e.ray).applyMatrix4(Fl),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,u=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){const m=u[_],p=a[m.materialIndex],T=Math.max(m.start,h.start),A=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let M=T,y=A;M<y;M+=3){const b=o.getX(M),R=o.getX(M+1),v=o.getX(M+2);r=Ps(this,p,e,i,l,f,d,b,R,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),S=Math.min(o.count,h.start+h.count);for(let m=_,p=S;m<p;m+=3){const T=o.getX(m),A=o.getX(m+1),M=o.getX(m+2);r=Ps(this,a,e,i,l,f,d,T,A,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){const m=u[_],p=a[m.materialIndex],T=Math.max(m.start,h.start),A=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let M=T,y=A;M<y;M+=3){const b=M,R=M+1,v=M+2;r=Ps(this,p,e,i,l,f,d,b,R,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),S=Math.min(c.count,h.start+h.count);for(let m=_,p=S;m<p;m+=3){const T=m,A=m+1,M=m+2;r=Ps(this,a,e,i,l,f,d,T,A,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function rv(n,e,t,i,r,s,a,o){let c;if(e.side===nn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===zi,o),c===null)return null;Cs.copy(o),Cs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Cs);return l<t.near||l>t.far?null:{distance:l,point:Cs.clone(),object:n}}function Ps(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,ws),n.getVertexPosition(c,Ts),n.getVertexPosition(l,As);const f=rv(n,e,t,i,ws,Ts,As,zl);if(f){const d=new F;En.getBarycoord(zl,ws,Ts,As,d),r&&(f.uv=En.getInterpolatedAttribute(r,o,c,l,d,new Ke)),s&&(f.uv1=En.getInterpolatedAttribute(s,o,c,l,d,new Ke)),a&&(f.normal=En.getInterpolatedAttribute(a,o,c,l,d,new F),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new F,materialIndex:0};En.getNormal(ws,Ts,As,u.normal),f.face=u,f.barycoord=d}return f}class sv extends Yt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=Ot,f=Ot,d,u){super(null,a,o,c,l,f,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ti=new rs,av=new Ke(.5,.5),Ds=new F;class yf{constructor(e=new fi,t=new fi,i=new fi,r=new fi,s=new fi,a=new fi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=On,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],f=s[4],d=s[5],u=s[6],h=s[7],_=s[8],S=s[9],m=s[10],p=s[11],T=s[12],A=s[13],M=s[14],y=s[15];if(r[0].setComponents(l-a,h-f,p-_,y-T).normalize(),r[1].setComponents(l+a,h+f,p+_,y+T).normalize(),r[2].setComponents(l+o,h+d,p+S,y+A).normalize(),r[3].setComponents(l-o,h-d,p-S,y-A).normalize(),i)r[4].setComponents(c,u,m,M).normalize(),r[5].setComponents(l-c,h-u,p-m,y-M).normalize();else if(r[4].setComponents(l-c,h-u,p-m,y-M).normalize(),t===On)r[5].setComponents(l+c,h+u,p+m,y+M).normalize();else if(t===ra)r[5].setComponents(c,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){Ti.center.set(0,0,0);const t=av.distanceTo(e.center);return Ti.radius=.7071067811865476+t,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ds.x=r.normal.x>0?e.max.x:e.min.x,Ds.y=r.normal.y>0?e.max.y:e.min.y,Ds.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ov extends Rr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const aa=new F,oa=new F,Bl=new it,Ur=new Ac,Is=new rs,ja=new F,kl=new F;class cv extends Kt{constructor(e=new qt,t=new ov){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)aa.fromBufferAttribute(t,r-1),oa.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=aa.distanceTo(oa);e.setAttribute("lineDistance",new Ht(i,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Is.copy(i.boundingSphere),Is.applyMatrix4(r),Is.radius+=s,e.ray.intersectsSphere(Is)===!1)return;Bl.copy(r).invert(),Ur.copy(e.ray).applyMatrix4(Bl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){const h=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let S=h,m=_-1;S<m;S+=l){const p=f.getX(S),T=f.getX(S+1),A=Ls(this,e,Ur,c,p,T,S);A&&t.push(A)}if(this.isLineLoop){const S=f.getX(_-1),m=f.getX(h),p=Ls(this,e,Ur,c,S,m,_-1);p&&t.push(p)}}else{const h=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let S=h,m=_-1;S<m;S+=l){const p=Ls(this,e,Ur,c,S,S+1,S);p&&t.push(p)}if(this.isLineLoop){const S=Ls(this,e,Ur,c,_-1,h,_-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ls(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(aa.fromBufferAttribute(o,r),oa.fromBufferAttribute(o,s),t.distanceSqToSegment(aa,oa,ja,kl)>i)return;ja.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ja);if(!(l<e.near||l>e.far))return{distance:l,point:kl.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class lv extends Rr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gl=new it,Jo=new Ac,Ns=new rs,Us=new F;class eo extends Kt{constructor(e=new qt,t=new lv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere),Ns.applyMatrix4(r),Ns.radius+=s,e.ray.intersectsSphere(Ns)===!1)return;Gl.copy(r).invert(),Jo.copy(e.ray).applyMatrix4(Gl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,d=i.attributes.position;if(l!==null){const u=Math.max(0,a.start),h=Math.min(l.count,a.start+a.count);for(let _=u,S=h;_<S;_++){const m=l.getX(_);Us.fromBufferAttribute(d,m),Vl(Us,m,c,r,e,t,this)}}else{const u=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let _=u,S=h;_<S;_++)Us.fromBufferAttribute(d,_),Vl(Us,_,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Vl(n,e,t,i,r,s,a){const o=Jo.distanceSqToPoint(n);if(o<t){const c=new F;Jo.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class bf extends Yt{constructor(e=[],t=Bi,i,r,s,a,o,c,l,f){super(e,t,i,r,s,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jr extends Yt{constructor(e,t,i=kn,r,s,a,o=Ot,c=Ot,l,f=ei,d=1){if(f!==ei&&f!==Li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,r,s,a,o,c,f,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class uv extends jr{constructor(e,t=kn,i=Bi,r,s,a=Ot,o=Ot,c,l=ei){const f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,t,i,r,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ef extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ss extends qt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],f=[],d=[];let u=0,h=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(d,2));function _(S,m,p,T,A,M,y,b,R,v,w){const D=M/R,N=y/v,B=M/2,H=y/2,L=b/2,k=R+1,Y=v+1;let W=0,ie=0;const $=new F;for(let ee=0;ee<Y;ee++){const ne=ee*N-H;for(let Ce=0;Ce<k;Ce++){const Ae=Ce*D-B;$[S]=Ae*T,$[m]=ne*A,$[p]=L,l.push($.x,$.y,$.z),$[S]=0,$[m]=0,$[p]=b>0?1:-1,f.push($.x,$.y,$.z),d.push(Ce/R),d.push(1-ee/v),W+=1}}for(let ee=0;ee<v;ee++)for(let ne=0;ne<R;ne++){const Ce=u+ne+k*ee,Ae=u+ne+k*(ee+1),lt=u+(ne+1)+k*(ee+1),Xe=u+(ne+1)+k*ee;c.push(Ce,Ae,Xe),c.push(Ae,lt,Xe),ie+=6}o.addGroup(h,ie,w),h+=ie,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ma extends qt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,f=c+1,d=e/o,u=t/c,h=[],_=[],S=[],m=[];for(let p=0;p<f;p++){const T=p*u-a;for(let A=0;A<l;A++){const M=A*d-s;_.push(M,-T,0),S.push(0,0,1),m.push(A/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<o;T++){const A=T+l*p,M=T+l*(p+1),y=T+1+l*(p+1),b=T+1+l*p;h.push(A,M,b),h.push(M,y,b)}this.setIndex(h),this.setAttribute("position",new Ht(_,3)),this.setAttribute("normal",new Ht(S,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.width,e.height,e.widthSegments,e.heightSegments)}}function yr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Hl(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Hl(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=yr(n[t]);for(const r in i)e[r]=i[r]}return e}function Hl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function fv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}const dv={clone:yr,merge:Zt};var hv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends Rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hv,this.fragmentShader=pv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=fv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Ze().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ke().fromArray(r.value);break;case"v3":this.uniforms[i].value=new F().fromArray(r.value);break;case"v4":this.uniforms[i].value=new ct().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Le().fromArray(r.value);break;case"m4":this.uniforms[i].value=new it().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class mv extends tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gv extends Rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=b_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _v extends Rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fs=new F,Os=new Tr,Ln=new F;class Cc extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fs,Os,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fs,Os,Ln.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Fs,Os,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fs,Os,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const li=new F,Wl=new Ke,Xl=new Ke;class bn extends Cc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ko*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ko*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,Wl,Xl),t.subVectors(Xl,Wl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Da*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Tf extends Cc{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ir=-90,rr=1;class vv extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(ir,rr,e,t);r.layers=this.layers,this.add(r);const s=new bn(ir,rr,e,t);s.layers=this.layers,this.add(s);const a=new bn(ir,rr,e,t);a.layers=this.layers,this.add(a);const o=new bn(ir,rr,e,t);o.layers=this.layers,this.add(o);const c=new bn(ir,rr,e,t);c.layers=this.layers,this.add(c);const l=new bn(ir,rr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===On)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ra)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,f]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(d,u,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class xv extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Af{static{Af.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}}function $l(n,e,t,i){const r=Sv(i);switch(t){case pf:return n*e;case gf:return n*e/r.components*r.byteLength;case Sc:return n*e/r.components*r.byteLength;case ki:return n*e*2/r.components*r.byteLength;case Mc:return n*e*2/r.components*r.byteLength;case mf:return n*e*3/r.components*r.byteLength;case Tn:return n*e*4/r.components*r.byteLength;case yc:return n*e*4/r.components*r.byteLength;case Vs:case Hs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ws:case Xs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mo:case bo:return Math.max(n,16)*Math.max(e,8)/4;case So:case yo:return Math.max(n,8)*Math.max(e,8)/2;case Eo:case wo:case Ao:case Ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case To:case ea:case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Do:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Io:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case No:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case zo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ko:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Go:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ho:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Wo:case Xo:case $o:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Zo:case qo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ta:case Yo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sv(n){switch(n){case hn:case uf:return{byteLength:1,components:1};case Jr:case ff:case Gn:return{byteLength:2,components:1};case vc:case xc:return{byteLength:2,components:4};case kn:case _c:case Fn:return{byteLength:4,components:1};case df:case hf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gc}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gc);function Rf(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Mv(n){const e=new WeakMap;function t(o,c){const l=o.array,f=o.usage,d=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,f),o.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const f=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,f);else{d.sort((h,_)=>h.start-_.start);let u=0;for(let h=1;h<d.length;h++){const _=d[u],S=d[h];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++u,d[u]=S)}d.length=u+1;for(let h=0,_=d.length;h<_;h++){const S=d[h];n.bufferSubData(l,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var yv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bv=`#ifdef USE_ALPHAHASH
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
#endif`,Ev=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Av=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rv=`#ifdef USE_AOMAP
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
#endif`,Cv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pv=`#ifdef USE_BATCHING
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
#endif`,Dv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Uv=`#ifdef USE_IRIDESCENCE
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
#endif`,Fv=`#ifdef USE_BUMPMAP
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
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Xv=`#define PI 3.141592653589793
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
} // validated`,$v=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zv=`vec3 transformedNormal = objectNormal;
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
#endif`,qv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qv="gl_FragColor = linearToOutputTexel( gl_FragColor );",jv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e0=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,n0=`#ifdef USE_ENVMAP
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
#endif`,i0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l0=`#ifdef USE_GRADIENTMAP
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
}`,u0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x0=`PhysicalMaterial material;
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
#endif`,S0=`uniform sampler2D dfgLUT;
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
}`,M0=`
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
#endif`,y0=`#if defined( RE_IndirectDiffuse )
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
#endif`,b0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,w0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,I0=`#if defined( USE_POINTS_UV )
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
#endif`,L0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z0=`#ifdef USE_MORPHTARGETS
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
#endif`,B0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,G0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,V0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,X0=`#ifdef USE_NORMALMAP
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
#endif`,$0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Q0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ex=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ix=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ox=`float getShadowMask() {
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
}`,cx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lx=`#ifdef USE_SKINNING
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
#endif`,ux=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fx=`#ifdef USE_SKINNING
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
#endif`,dx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,px=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gx=`#ifdef USE_TRANSMISSION
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
#endif`,_x=`#ifdef USE_TRANSMISSION
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
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bx=`uniform sampler2D t2D;
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
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`#include <common>
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
}`,Cx=`#if DEPTH_PACKING == 3200
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
}`,Px=`#define DISTANCE
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
}`,Dx=`#define DISTANCE
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
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`uniform float scale;
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
}`,Ux=`uniform vec3 diffuse;
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
}`,Fx=`#include <common>
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
}`,Ox=`uniform vec3 diffuse;
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
}`,zx=`#define LAMBERT
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
}`,Bx=`#define LAMBERT
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
}`,kx=`#define MATCAP
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
}`,Gx=`#define MATCAP
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
}`,Vx=`#define NORMAL
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
}`,Hx=`#define NORMAL
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
}`,Wx=`#define PHONG
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
}`,Xx=`#define PHONG
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
}`,$x=`#define STANDARD
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
}`,Zx=`#define STANDARD
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
}`,qx=`#define TOON
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
}`,Yx=`#define TOON
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
}`,Kx=`uniform float size;
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
}`,Jx=`uniform vec3 diffuse;
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
}`,Qx=`#include <common>
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
}`,jx=`uniform vec3 color;
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
}`,eS=`uniform float rotation;
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
}`,tS=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:yv,alphahash_pars_fragment:bv,alphamap_fragment:Ev,alphamap_pars_fragment:wv,alphatest_fragment:Tv,alphatest_pars_fragment:Av,aomap_fragment:Rv,aomap_pars_fragment:Cv,batching_pars_vertex:Pv,batching_vertex:Dv,begin_vertex:Iv,beginnormal_vertex:Lv,bsdfs:Nv,iridescence_fragment:Uv,bumpmap_pars_fragment:Fv,clipping_planes_fragment:Ov,clipping_planes_pars_fragment:zv,clipping_planes_pars_vertex:Bv,clipping_planes_vertex:kv,color_fragment:Gv,color_pars_fragment:Vv,color_pars_vertex:Hv,color_vertex:Wv,common:Xv,cube_uv_reflection_fragment:$v,defaultnormal_vertex:Zv,displacementmap_pars_vertex:qv,displacementmap_vertex:Yv,emissivemap_fragment:Kv,emissivemap_pars_fragment:Jv,colorspace_fragment:Qv,colorspace_pars_fragment:jv,envmap_fragment:e0,envmap_common_pars_fragment:t0,envmap_pars_fragment:n0,envmap_pars_vertex:i0,envmap_physical_pars_fragment:p0,envmap_vertex:r0,fog_vertex:s0,fog_pars_vertex:a0,fog_fragment:o0,fog_pars_fragment:c0,gradientmap_pars_fragment:l0,lightmap_pars_fragment:u0,lights_lambert_fragment:f0,lights_lambert_pars_fragment:d0,lights_pars_begin:h0,lights_toon_fragment:m0,lights_toon_pars_fragment:g0,lights_phong_fragment:_0,lights_phong_pars_fragment:v0,lights_physical_fragment:x0,lights_physical_pars_fragment:S0,lights_fragment_begin:M0,lights_fragment_maps:y0,lights_fragment_end:b0,lightprobes_pars_fragment:E0,logdepthbuf_fragment:w0,logdepthbuf_pars_fragment:T0,logdepthbuf_pars_vertex:A0,logdepthbuf_vertex:R0,map_fragment:C0,map_pars_fragment:P0,map_particle_fragment:D0,map_particle_pars_fragment:I0,metalnessmap_fragment:L0,metalnessmap_pars_fragment:N0,morphinstance_vertex:U0,morphcolor_vertex:F0,morphnormal_vertex:O0,morphtarget_pars_vertex:z0,morphtarget_vertex:B0,normal_fragment_begin:k0,normal_fragment_maps:G0,normal_pars_fragment:V0,normal_pars_vertex:H0,normal_vertex:W0,normalmap_pars_fragment:X0,clearcoat_normal_fragment_begin:$0,clearcoat_normal_fragment_maps:Z0,clearcoat_pars_fragment:q0,iridescence_pars_fragment:Y0,opaque_fragment:K0,packing:J0,premultiplied_alpha_fragment:Q0,project_vertex:j0,dithering_fragment:ex,dithering_pars_fragment:tx,roughnessmap_fragment:nx,roughnessmap_pars_fragment:ix,shadowmap_pars_fragment:rx,shadowmap_pars_vertex:sx,shadowmap_vertex:ax,shadowmask_pars_fragment:ox,skinbase_vertex:cx,skinning_pars_vertex:lx,skinning_vertex:ux,skinnormal_vertex:fx,specularmap_fragment:dx,specularmap_pars_fragment:hx,tonemapping_fragment:px,tonemapping_pars_fragment:mx,transmission_fragment:gx,transmission_pars_fragment:_x,uv_pars_fragment:vx,uv_pars_vertex:xx,uv_vertex:Sx,worldpos_vertex:Mx,background_vert:yx,background_frag:bx,backgroundCube_vert:Ex,backgroundCube_frag:wx,cube_vert:Tx,cube_frag:Ax,depth_vert:Rx,depth_frag:Cx,distance_vert:Px,distance_frag:Dx,equirect_vert:Ix,equirect_frag:Lx,linedashed_vert:Nx,linedashed_frag:Ux,meshbasic_vert:Fx,meshbasic_frag:Ox,meshlambert_vert:zx,meshlambert_frag:Bx,meshmatcap_vert:kx,meshmatcap_frag:Gx,meshnormal_vert:Vx,meshnormal_frag:Hx,meshphong_vert:Wx,meshphong_frag:Xx,meshphysical_vert:$x,meshphysical_frag:Zx,meshtoon_vert:qx,meshtoon_frag:Yx,points_vert:Kx,points_frag:Jx,shadow_vert:Qx,shadow_frag:jx,sprite_vert:eS,sprite_frag:tS},fe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},Un={basic:{uniforms:Zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Zt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Zt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Zt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Zt([fe.points,fe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Zt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Zt([fe.common,fe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Zt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Zt([fe.sprite,fe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Zt([fe.common,fe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Zt([fe.lights,fe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Un.physical={uniforms:Zt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const zs={r:0,b:0,g:0},nS=new it,Cf=new Le;Cf.set(-1,0,0,0,1,0,0,0,1);function iS(n,e,t,i,r,s){const a=new Ze(0);let o=r===!0?0:1,c,l,f=null,d=0,u=null;function h(T){let A=T.isScene===!0?T.background:null;if(A&&A.isTexture){const M=T.backgroundBlurriness>0;A=e.get(A,M)}return A}function _(T){let A=!1;const M=h(T);M===null?m(a,o):M&&M.isColor&&(m(M,1),A=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(T,A){const M=h(A);M&&(M.isCubeTexture||M.mapping===pa)?(l===void 0&&(l=new en(new ss(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:yr(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(nS.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Cf),l.material.toneMapped=He.getTransfer(M.colorSpace)!==tt,(f!==M||d!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,f=M,d=M.version,u=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new en(new ma(2,2),new tn({name:"BackgroundMaterial",uniforms:yr(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=He.getTransfer(M.colorSpace)!==tt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,u=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function m(T,A){T.getRGB(zs,wf(n)),t.buffers.color.setClear(zs.r,zs.g,zs.b,A,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,A=1){a.set(T),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:_,addToRenderList:S,dispose:p}}function rS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(N,B,H,L,k){let Y=!1;const W=d(N,L,H,B);s!==W&&(s=W,l(s.object)),Y=h(N,L,H,k),Y&&_(N,L,H,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(N,B,H,L),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return n.createVertexArray()}function l(N){return n.bindVertexArray(N)}function f(N){return n.deleteVertexArray(N)}function d(N,B,H,L){const k=L.wireframe===!0;let Y=i[B.id];Y===void 0&&(Y={},i[B.id]=Y);const W=N.isInstancedMesh===!0?N.id:0;let ie=Y[W];ie===void 0&&(ie={},Y[W]=ie);let $=ie[H.id];$===void 0&&($={},ie[H.id]=$);let ee=$[k];return ee===void 0&&(ee=u(c()),$[k]=ee),ee}function u(N){const B=[],H=[],L=[];for(let k=0;k<t;k++)B[k]=0,H[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:H,attributeDivisors:L,object:N,attributes:{},index:null}}function h(N,B,H,L){const k=s.attributes,Y=B.attributes;let W=0;const ie=H.getAttributes();for(const $ in ie)if(ie[$].location>=0){const ne=k[$];let Ce=Y[$];if(Ce===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(Ce=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(Ce=N.instanceColor)),ne===void 0||ne.attribute!==Ce||Ce&&ne.data!==Ce.data)return!0;W++}return s.attributesNum!==W||s.index!==L}function _(N,B,H,L){const k={},Y=B.attributes;let W=0;const ie=H.getAttributes();for(const $ in ie)if(ie[$].location>=0){let ne=Y[$];ne===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor));const Ce={};Ce.attribute=ne,ne&&ne.data&&(Ce.data=ne.data),k[$]=Ce,W++}s.attributes=k,s.attributesNum=W,s.index=L}function S(){const N=s.newAttributes;for(let B=0,H=N.length;B<H;B++)N[B]=0}function m(N){p(N,0)}function p(N,B){const H=s.newAttributes,L=s.enabledAttributes,k=s.attributeDivisors;H[N]=1,L[N]===0&&(n.enableVertexAttribArray(N),L[N]=1),k[N]!==B&&(n.vertexAttribDivisor(N,B),k[N]=B)}function T(){const N=s.newAttributes,B=s.enabledAttributes;for(let H=0,L=B.length;H<L;H++)B[H]!==N[H]&&(n.disableVertexAttribArray(H),B[H]=0)}function A(N,B,H,L,k,Y,W){W===!0?n.vertexAttribIPointer(N,B,H,k,Y):n.vertexAttribPointer(N,B,H,L,k,Y)}function M(N,B,H,L){S();const k=L.attributes,Y=H.getAttributes(),W=B.defaultAttributeValues;for(const ie in Y){const $=Y[ie];if($.location>=0){let ee=k[ie];if(ee===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor)),ee!==void 0){const ne=ee.normalized,Ce=ee.itemSize,Ae=e.get(ee);if(Ae===void 0)continue;const lt=Ae.buffer,Xe=Ae.type,Je=Ae.bytesPerElement,Z=Xe===n.INT||Xe===n.UNSIGNED_INT||ee.gpuType===_c;if(ee.isInterleavedBufferAttribute){const j=ee.data,ve=j.stride,Ie=ee.offset;if(j.isInstancedInterleavedBuffer){for(let ge=0;ge<$.locationSize;ge++)p($.location+ge,j.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ge=0;ge<$.locationSize;ge++)m($.location+ge);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let ge=0;ge<$.locationSize;ge++)A($.location+ge,Ce/$.locationSize,Xe,ne,ve*Je,(Ie+Ce/$.locationSize*ge)*Je,Z)}else{if(ee.isInstancedBufferAttribute){for(let j=0;j<$.locationSize;j++)p($.location+j,ee.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let j=0;j<$.locationSize;j++)m($.location+j);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let j=0;j<$.locationSize;j++)A($.location+j,Ce/$.locationSize,Xe,ne,Ce*Je,Ce/$.locationSize*j*Je,Z)}}else if(W!==void 0){const ne=W[ie];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv($.location,ne);break;case 3:n.vertexAttrib3fv($.location,ne);break;case 4:n.vertexAttrib4fv($.location,ne);break;default:n.vertexAttrib1fv($.location,ne)}}}}T()}function y(){w();for(const N in i){const B=i[N];for(const H in B){const L=B[H];for(const k in L){const Y=L[k];for(const W in Y)f(Y[W].object),delete Y[W];delete L[k]}}delete i[N]}}function b(N){if(i[N.id]===void 0)return;const B=i[N.id];for(const H in B){const L=B[H];for(const k in L){const Y=L[k];for(const W in Y)f(Y[W].object),delete Y[W];delete L[k]}}delete i[N.id]}function R(N){for(const B in i){const H=i[B];for(const L in H){const k=H[L];if(k[N.id]===void 0)continue;const Y=k[N.id];for(const W in Y)f(Y[W].object),delete Y[W];delete k[N.id]}}}function v(N){for(const B in i){const H=i[B],L=N.isInstancedMesh===!0?N.id:0,k=H[L];if(k!==void 0){for(const Y in k){const W=k[Y];for(const ie in W)f(W[ie].object),delete W[ie];delete k[Y]}delete H[L],Object.keys(H).length===0&&delete i[B]}}}function w(){D(),a=!0,s!==r&&(s=r,l(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:D,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:m,disableUnusedAttributes:T}}function sS(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,f){f!==0&&(n.drawArraysInstanced(i,c,l,f),t.update(l,i,f))}function o(c,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,f);let u=0;for(let h=0;h<f;h++)u+=l[h];t.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function aS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Tn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const v=R===Gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==hn&&R!==Fn&&!v&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(De("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:M,maxSamples:y,samples:b}}function oS(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new fi,o=new Le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const h=d.length!==0||u||i!==0||r;return r=u,i=d.length,h},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=f(d,u,0)},this.setState=function(d,u,h){const _=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?f(null):l();else{const T=s?0:i,A=T*4;let M=p.clippingState||null;c.value=M,M=f(_,u,A,h);for(let y=0;y!==A;++y)M[y]=t[y];p.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,u,h,_){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=c.value,_!==!0||m===null){const p=h+S*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,M=h;A!==S;++A,M+=4)a.copy(d[A]).applyMatrix4(T,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const ur=4,cS=6,lS=20,uS=256,Fr=new Tf,Zl=new Ze;let to=null,no=0,io=0,ro=!1;const fS=new F,Ai=new F;class ql{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=fS}=s;to=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(to,no,io),this._renderer.xr.enabled=ro,e.scissorTest=!1,sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===Mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),to=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Gn,format:Tn,colorSpace:na,depthBuffer:!1},r=Yl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yl(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=dS(s)),this._blurMaterial=pS(s,e,t),this._ggxMaterial=hS(s,e,t)}return r}_compileMaterial(e){const t=new en(new qt,e);this._renderer.compile(t,Fr)}_sceneToCubeUV(e,t,i,r,s){const c=new bn(90,1,t,i),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(Zl),d.toneMapping=Bn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new en(new ss,new Rc({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let p=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,p=!0):(m.color.copy(Zl),p=!0);for(let A=0;A<6;A++){const M=A%3;M===0?(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[A],s.y,s.z)):M===1?(c.up.set(0,0,l[A]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[A],s.z)):(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[A]));const y=this._cubeSize;sr(r,M*y,A>2?y:0,y,y),d.setRenderTarget(r),p&&d.render(S,c),d.render(e,c)}d.toneMapping=h,d.autoClear=u,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Bi||e.mapping===Mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;sr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Fr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-f*f),u=l*1.25,h=d*u,{_lodMax:_}=this,S=this._sizeLods[i],m=3*S*(i>_-ur?i-_+ur:0),p=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=_-t,sr(s,m,p,3*S,2*S),r.setRenderTarget(s),r.render(o,Fr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=_-i,sr(e,m,p,3*S,2*S),r.setRenderTarget(e),r.render(o,Fr)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,t,i,r,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-i;const f=this._sizeLods[r],d=3*f*(r>this._lodMax-ur?r-this._lodMax+ur:0),u=4*(this._cubeSize-f);sr(t,d,u,3*f,2*f),a.setRenderTarget(t),a.render(c,Fr)}}function dS(n){const e=[],t=[];let i=n;const r=n-ur+1+cS;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),c=-o,l=1+o,f=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,h=3,_=new Float32Array(h*u*d),S=new Float32Array(h*u*d);for(let p=0;p<d;p++){const T=p%3*2/3-1,A=p>2?0:-1,M=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];_.set(M,h*u*p);for(let y=0;y<u;y++){const b=f[y*2]*2-1,R=f[y*2+1]*2-1;p===0?Ai.set(1,R,b):p===1?Ai.set(-b,1,-R):p===2?Ai.set(-b,R,1):p===3?Ai.set(-1,R,-b):p===4?Ai.set(-b,-1,R):Ai.set(b,R,-1),Ai.toArray(S,(p*u+y)*h)}}const m=new qt;m.setAttribute("position",new Cn(_,h)),m.setAttribute("outputDirection",new Cn(S,h)),t.push(new en(m,null)),i>ur&&i--}return{lodMeshes:t,sizeLods:e}}function Yl(n,e,t){const i=new Rn(n,e,t);return i.texture.mapping=pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function hS(n,e,t){return new tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ga(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function pS(n,e,t){return new tn({name:"SphericalGaussianBlur",defines:{SAMPLES:lS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ga(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Kl(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ga(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Jl(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function ga(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Pf extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new bf(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ss(5,5,5),s=new tn({name:"CubemapFromEquirect",uniforms:yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Jn});s.uniforms.tEquirect.value=t;const a=new en(r,s),o=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Wt),new vv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function mS(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,h=!1){return u==null?null:h?a(u):s(u)}function s(u){if(u&&u.isTexture){const h=u.mapping;if(h===Aa||h===Ra)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const S=new Pf(_.height);return S.fromEquirectangularTexture(n,u),e.set(u,S),u.addEventListener("dispose",l),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const h=u.mapping,_=h===Aa||h===Ra,S=h===Bi||h===Mr;if(_||S){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new ql(n)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const T=u.image;return _&&T&&T.height>0||S&&T&&c(T)?(i===null&&(i=new ql(n)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",f),m.texture):null}}}return u}function o(u,h){return h===Aa?u.mapping=Bi:h===Ra&&(u.mapping=Mr),u}function c(u){let h=0;const _=6;for(let S=0;S<_;S++)u[S]!==void 0&&h++;return h===_}function l(u){const h=u.target;h.removeEventListener("dispose",l);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function f(u){const h=u.target;h.removeEventListener("dispose",f);const _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function gS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&pr("WebGLRenderer: "+i+" extension not supported."),r}}}function _S(n,e,t,i){const r={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete r[u.id];const h=s.get(u);h&&(e.remove(h),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const h in u)e.update(u[h],n.ARRAY_BUFFER)}function l(d){const u=[],h=d.index,_=d.attributes.position;let S=0;if(_===void 0)return;if(h!==null){const T=h.array;S=h.version;for(let A=0,M=T.length;A<M;A+=3){const y=T[A+0],b=T[A+1],R=T[A+2];u.push(y,b,b,R,R,y)}}else{const T=_.array;S=_.version;for(let A=0,M=T.length/3-1;A<M;A+=3){const y=A+0,b=A+1,R=A+2;u.push(y,b,b,R,R,y)}}const m=new(_.count>=65535?Tc:Mf)(u,1);m.version=S;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function f(d){const u=s.get(d);if(u){const h=d.index;h!==null&&u.version<h.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:f}}function vS(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,u){n.drawElements(i,u,s,d*a),t.update(u,i,1)}function l(d,u,h){h!==0&&(n.drawElementsInstanced(i,u,s,d*a,h),t.update(u,i,h))}function f(d,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,h);let S=0;for(let m=0;m<h;m++)S+=u[m];t.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f}function xS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function SS(n,e,t){const i=new WeakMap,r=new ct;function s(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let w=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const h=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let A=0;h===!0&&(A=1),_===!0&&(A=2),S===!0&&(A=3);let M=o.attributes.position.count*A,y=1;M>e.maxTextureSize&&(y=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const b=new Float32Array(M*y*4*d),R=new vf(b,M,y,d);R.type=Fn,R.needsUpdate=!0;const v=A*4;for(let D=0;D<d;D++){const N=m[D],B=p[D],H=T[D],L=M*y*4*D;for(let k=0;k<N.count;k++){const Y=k*v;h===!0&&(r.fromBufferAttribute(N,k),b[L+Y+0]=r.x,b[L+Y+1]=r.y,b[L+Y+2]=r.z,b[L+Y+3]=0),_===!0&&(r.fromBufferAttribute(B,k),b[L+Y+4]=r.x,b[L+Y+5]=r.y,b[L+Y+6]=r.z,b[L+Y+7]=0),S===!0&&(r.fromBufferAttribute(H,k),b[L+Y+8]=r.x,b[L+Y+9]=r.y,b[L+Y+10]=r.z,b[L+Y+11]=H.itemSize===4?r.w:1)}}u={count:d,texture:R,size:new Ke(M,y)},i.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let h=0;for(let S=0;S<l.length;S++)h+=l[S];const _=o.morphTargetsRelative?1:1-h;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function MS(n,e,t,i,r){let s=new WeakMap;function a(l){const f=r.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==f&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,f))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==f&&(h.update(),s.set(h,f))}return u}function o(){s=new WeakMap}function c(l){const f=l.target;f.removeEventListener("dispose",c),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const yS={[tf]:"LINEAR_TONE_MAPPING",[nf]:"REINHARD_TONE_MAPPING",[rf]:"CINEON_TONE_MAPPING",[sf]:"ACES_FILMIC_TONE_MAPPING",[of]:"AGX_TONE_MAPPING",[cf]:"NEUTRAL_TONE_MAPPING",[af]:"CUSTOM_TONE_MAPPING"};function bS(n,e,t,i,r,s){const a=new Rn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new qt;l.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ht([0,2,0,0,2,0],2));const f=new mv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new en(l,f),u=new Tf(-1,1,1,-1,0,1);let h=null,_=null,S=!1,m,p=null,T=[],A=!1;this.setSize=function(M,y){a.setSize(M,y),o!==null&&o.setSize(M,y),c!==null&&c.setSize(M,y);for(let b=0;b<T.length;b++){const R=T[b];R.setSize&&R.setSize(M,y)}},this.setEffects=function(M){T=M,A=T.length>0&&T[0].isRenderPass===!0;const y=a.width,b=a.height;T.length>0&&o===null&&(o=new Rn(y,b,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),c=new Rn(y,b,{type:Gn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<T.length;R++){const v=T[R];v.setSize&&v.setSize(y,b)}},this.begin=function(M,y){if(S||M.toneMapping===Bn&&T.length===0)return!1;if(p=y,y!==null){const b=y.width,R=y.height;(a.width!==b||a.height!==R)&&this.setSize(b,R)}return A===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=Bn,!0},this.hasRenderPass=function(){return A},this.end=function(M,y){M.toneMapping=m,S=!0;let b=a,R=o;for(let v=0;v<T.length;v++){const w=T[v];w.enabled!==!1&&(w.render(M,R,b,y),w.needsSwap!==!1&&(b=R,R=R===o?c:o))}if(h!==M.outputColorSpace||_!==M.toneMapping){h=M.outputColorSpace,_=M.toneMapping,f.defines={},He.getTransfer(h)===tt&&(f.defines.SRGB_TRANSFER="");const v=yS[_];v&&(f.defines[v]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(p),M.render(d,u),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),f.dispose()}}const Df=new Yt,Qo=new jr(1,1),If=new vf,Lf=new H_,Nf=new bf,Ql=[],jl=[],eu=new Float32Array(16),tu=new Float32Array(9),nu=new Float32Array(4);function Cr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ql[r];if(s===void 0&&(s=new Float32Array(r),Ql[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _a(n,e){let t=jl[e];t===void 0&&(t=new Int32Array(e),jl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ES(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function wS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function TS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function AS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function RS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;nu.set(i),n.uniformMatrix2fv(this.addr,!1,nu),Ct(t,i)}}function CS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;tu.set(i),n.uniformMatrix3fv(this.addr,!1,tu),Ct(t,i)}}function PS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;eu.set(i),n.uniformMatrix4fv(this.addr,!1,eu),Ct(t,i)}}function DS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function IS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function LS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function NS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function US(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function FS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function OS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function zS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function BS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Qo.compareFunction=t.isReversedDepthBuffer()?Ec:bc,s=Qo):s=Df,t.setTexture2D(e||s,r)}function kS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Lf,r)}function GS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Nf,r)}function VS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||If,r)}function HS(n){switch(n){case 5126:return ES;case 35664:return wS;case 35665:return TS;case 35666:return AS;case 35674:return RS;case 35675:return CS;case 35676:return PS;case 5124:case 35670:return DS;case 35667:case 35671:return IS;case 35668:case 35672:return LS;case 35669:case 35673:return NS;case 5125:return US;case 36294:return FS;case 36295:return OS;case 36296:return zS;case 35678:case 36198:case 36298:case 36306:case 35682:return BS;case 35679:case 36299:case 36307:return kS;case 35680:case 36300:case 36308:case 36293:return GS;case 36289:case 36303:case 36311:case 36292:return VS}}function WS(n,e){n.uniform1fv(this.addr,e)}function XS(n,e){const t=Cr(e,this.size,2);n.uniform2fv(this.addr,t)}function $S(n,e){const t=Cr(e,this.size,3);n.uniform3fv(this.addr,t)}function ZS(n,e){const t=Cr(e,this.size,4);n.uniform4fv(this.addr,t)}function qS(n,e){const t=Cr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function YS(n,e){const t=Cr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function KS(n,e){const t=Cr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function JS(n,e){n.uniform1iv(this.addr,e)}function QS(n,e){n.uniform2iv(this.addr,e)}function jS(n,e){n.uniform3iv(this.addr,e)}function eM(n,e){n.uniform4iv(this.addr,e)}function tM(n,e){n.uniform1uiv(this.addr,e)}function nM(n,e){n.uniform2uiv(this.addr,e)}function iM(n,e){n.uniform3uiv(this.addr,e)}function rM(n,e){n.uniform4uiv(this.addr,e)}function sM(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Qo:a=Df;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function aM(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Lf,s[a])}function oM(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Nf,s[a])}function cM(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||If,s[a])}function lM(n){switch(n){case 5126:return WS;case 35664:return XS;case 35665:return $S;case 35666:return ZS;case 35674:return qS;case 35675:return YS;case 35676:return KS;case 5124:case 35670:return JS;case 35667:case 35671:return QS;case 35668:case 35672:return jS;case 35669:case 35673:return eM;case 5125:return tM;case 36294:return nM;case 36295:return iM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return sM;case 35679:case 36299:case 36307:return aM;case 35680:case 36300:case 36308:case 36293:return oM;case 36289:case 36303:case 36311:case 36292:return cM}}class uM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=HS(t.type)}}class fM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lM(t.type)}}class dM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const so=/(\w+)(\])?(\[|\.)?/g;function iu(n,e){n.seq.push(e),n.map[e.id]=e}function hM(n,e,t){const i=n.name,r=i.length;for(so.lastIndex=0;;){const s=so.exec(i),a=so.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){iu(t,l===void 0?new uM(o,n,e):new fM(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new dM(o),iu(t,d)),t=d}}}class $s{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);hM(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function ru(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const pM=37297;let mM=0;function gM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const su=new Le;function _M(n){He._getMatrix(su,He.workingColorSpace,n);const e=`mat3( ${su.elements.map(t=>t.toFixed(4))} )`;switch(He.getTransfer(n)){case ia:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function au(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+gM(n.getShaderSource(e),o)}else return s}function vM(n,e){const t=_M(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const xM={[tf]:"Linear",[nf]:"Reinhard",[rf]:"Cineon",[sf]:"ACESFilmic",[of]:"AgX",[cf]:"Neutral",[af]:"Custom"};function SM(n,e){const t=xM[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Bs=new F;function MM(){He.getLuminanceCoefficients(Bs);const n=Bs.x.toFixed(4),e=Bs.y.toFixed(4),t=Bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function bM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function EM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Wr(n){return n!==""}function ou(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wM=/^[ \t]*#include +<([\w\d./]+)>/gm;function jo(n){return n.replace(wM,AM)}const TM=new Map;function AM(n,e){let t=Oe[e];if(t===void 0){const i=TM.get(e);if(i!==void 0)t=Oe[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return jo(t)}const RM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lu(n){return n.replace(RM,CM)}function CM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function uu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const PM={[Gs]:"SHADOWMAP_TYPE_PCF",[Vr]:"SHADOWMAP_TYPE_VSM"};function DM(n){return PM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const IM={[Bi]:"ENVMAP_TYPE_CUBE",[Mr]:"ENVMAP_TYPE_CUBE",[pa]:"ENVMAP_TYPE_CUBE_UV"};function LM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":IM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const NM={[Mr]:"ENVMAP_MODE_REFRACTION"};function UM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":NM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const FM={[ef]:"ENVMAP_BLENDING_MULTIPLY",[S_]:"ENVMAP_BLENDING_MIX",[M_]:"ENVMAP_BLENDING_ADD"};function OM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":FM[n.combine]||"ENVMAP_BLENDING_NONE"}function zM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function BM(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=DM(t),l=LM(t),f=UM(t),d=OM(t),u=zM(t),h=yM(t),_=bM(s),S=r.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wr).join(`
`),p.length>0&&(p+=`
`)):(m=[uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),p=[uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Bn?SM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,vM("linearToOutputTexel",t.outputColorSpace),MM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),a=jo(a),a=ou(a,t),a=cu(a,t),o=jo(o),o=ou(o,t),o=cu(o,t),a=lu(a),o=lu(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=T+m+a,M=T+p+o,y=ru(r,r.VERTEX_SHADER,A),b=ru(r,r.FRAGMENT_SHADER,M);r.attachShader(S,y),r.attachShader(S,b),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function R(N){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(S)||"",H=r.getShaderInfoLog(y)||"",L=r.getShaderInfoLog(b)||"",k=B.trim(),Y=H.trim(),W=L.trim();let ie=!0,$=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,y,b);else{const ee=au(r,y,"vertex"),ne=au(r,b,"fragment");Ye("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+ee+`
`+ne)}else k!==""?De("WebGLProgram: Program Info Log:",k):(Y===""||W==="")&&($=!1);$&&(N.diagnostics={runnable:ie,programLog:k,vertexShader:{log:Y,prefix:m},fragmentShader:{log:W,prefix:p}})}r.deleteShader(y),r.deleteShader(b),v=new $s(r,S),w=EM(r,S)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(S,pM)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mM++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=y,this.fragmentShader=b,this}let kM=0;class GM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new VM(e),t.set(e,i)),i}}class VM{constructor(e){this.id=kM++,this.code=e,this.usedTimes=0}}function HM(n){return n===ki||n===ea||n===ta}function WM(n,e,t,i,r,s){const a=new xf,o=new GM,c=new Set,l=[],f=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function S(v,w,D,N,B,H){const L=N.fog,k=B.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ie=e.get(v.envMap||Y,W),$=ie&&ie.mapping===pa?ie.image.height:null,ee=h[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&De("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const ne=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ce=ne!==void 0?ne.length:0;let Ae=0;k.morphAttributes.position!==void 0&&(Ae=1),k.morphAttributes.normal!==void 0&&(Ae=2),k.morphAttributes.color!==void 0&&(Ae=3);let lt,Xe,Je,Z;if(ee){const ft=Un[ee];lt=ft.vertexShader,Xe=ft.fragmentShader}else{lt=v.vertexShader,Xe=v.fragmentShader;const ft=o.getVertexShaderStage(v),Qe=o.getFragmentShaderStage(v);o.update(v,ft,Qe),Je=ft.id,Z=Qe.id}const j=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),Ie=B.isInstancedMesh===!0,ge=B.isBatchedMesh===!0,Be=!!v.map,At=!!v.matcap,ke=!!ie,qe=!!v.aoMap,ut=!!v.lightMap,Ve=!!v.bumpMap&&v.wireframe===!1,mt=!!v.normalMap,Pt=!!v.displacementMap,Jt=!!v.emissiveMap,vt=!!v.metalnessMap,Et=!!v.roughnessMap,I=v.anisotropy>0,zt=v.clearcoat>0,et=v.dispersion>0,E=v.retroreflectivity>0,g=v.iridescence>0,U=v.sheen>0,G=v.transmission>0,X=I&&!!v.anisotropyMap,re=zt&&!!v.clearcoatMap,se=zt&&!!v.clearcoatNormalMap,q=zt&&!!v.clearcoatRoughnessMap,Q=g&&!!v.iridescenceMap,ae=g&&!!v.iridescenceThicknessMap,Ee=U&&!!v.sheenColorMap,ue=U&&!!v.sheenRoughnessMap,oe=!!v.specularMap,we=!!v.specularColorMap,Pe=!!v.specularIntensityMap,Ue=G&&!!v.transmissionMap,P=G&&!!v.thicknessMap,ce=!!v.gradientMap,J=!!v.alphaMap,le=v.alphaTest>0,pe=!!v.alphaHash,te=!!v.extensions;let Re=Bn;v.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Re=n.toneMapping);const Me={shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:lt,fragmentShader:Xe,defines:v.defines,customVertexShaderID:Je,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:ge,batchingColor:ge&&B._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&B.instanceColor!==null,instancingMorph:Ie&&B.morphTexture!==null,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Be,matcap:At,envMap:ke,envMapMode:ke&&ie.mapping,envMapCubeUVHeight:$,aoMap:qe,lightMap:ut,bumpMap:Ve,normalMap:mt,displacementMap:Pt,emissiveMap:Jt,normalMapObjectSpace:mt&&v.normalMapType===E_,normalMapTangentSpace:mt&&v.normalMapType===Sl,packedNormalMap:mt&&v.normalMapType===Sl&&HM(v.normalMap.format),metalnessMap:vt,roughnessMap:Et,anisotropy:I,anisotropyMap:X,clearcoat:zt,clearcoatMap:re,clearcoatNormalMap:se,clearcoatRoughnessMap:q,dispersion:et,retroreflection:E,iridescence:g,iridescenceMap:Q,iridescenceThicknessMap:ae,sheen:U,sheenColorMap:Ee,sheenRoughnessMap:ue,specularMap:oe,specularColorMap:we,specularIntensityMap:Pe,transmission:G,transmissionMap:Ue,thicknessMap:P,gradientMap:ce,opaque:v.transparent===!1&&v.blending===$r&&v.alphaToCoverage===!1,alphaMap:J,alphaTest:le,alphaHash:pe,combine:v.combine,mapUv:Be&&_(v.map.channel),aoMapUv:qe&&_(v.aoMap.channel),lightMapUv:ut&&_(v.lightMap.channel),bumpMapUv:Ve&&_(v.bumpMap.channel),normalMapUv:mt&&_(v.normalMap.channel),displacementMapUv:Pt&&_(v.displacementMap.channel),emissiveMapUv:Jt&&_(v.emissiveMap.channel),metalnessMapUv:vt&&_(v.metalnessMap.channel),roughnessMapUv:Et&&_(v.roughnessMap.channel),anisotropyMapUv:X&&_(v.anisotropyMap.channel),clearcoatMapUv:re&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ue&&_(v.sheenRoughnessMap.channel),specularMapUv:oe&&_(v.specularMap.channel),specularColorMapUv:we&&_(v.specularColorMap.channel),specularIntensityMapUv:Pe&&_(v.specularIntensityMap.channel),transmissionMapUv:Ue&&_(v.transmissionMap.channel),thicknessMapUv:P&&_(v.thicknessMap.channel),alphaMapUv:J&&_(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(mt||I),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(Be||J),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&mt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Ae,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Re,decodeVideoTexture:Be&&v.map.isVideoTexture===!0&&He.getTransfer(v.map.colorSpace)===tt,decodeVideoTextureEmissive:Jt&&v.emissiveMap.isVideoTexture===!0&&He.getTransfer(v.emissiveMap.colorSpace)===tt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===dn,flipSided:v.side===nn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:te&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&v.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function m(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)w.push(D),w.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(p(w,v),T(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function p(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function T(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function A(v){const w=h[v.type];let D;if(w){const N=Un[w];D=dv.clone(N.uniforms)}else D=v.uniforms;return D}function M(v,w){let D=f.get(w);return D!==void 0?++D.usedTimes:(D=new BM(n,w,v,r),l.push(D),f.set(w,D)),D}function y(v){if(--v.usedTimes===0){const w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),f.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function R(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:A,acquireProgram:M,releaseProgram:y,releaseShaderCache:b,programs:l,dispose:R}}function XM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function $M(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function fu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function du(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function o(u,h,_,S,m,p){let T=n[e];return T===void 0?(T={id:u.id,object:u,geometry:h,material:_,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:p},n[e]=T):(T.id=u.id,T.object=u,T.geometry=h,T.material=_,T.materialVariant=a(u),T.groupOrder=S,T.renderOrder=u.renderOrder,T.z=m,T.group=p),e++,T}function c(u,h,_,S,m,p,T){T.reversedDepth===!0&&(m=-m);const A=o(u,h,_,S,m,p);_.transmission>0?i.push(A):_.transparent===!0?r.push(A):t.push(A)}function l(u,h,_,S,m,p){const T=o(u,h,_,S,m,p);_.transmission>0?i.unshift(T):_.transparent===!0?r.unshift(T):t.unshift(T)}function f(u,h){t.length>1&&t.sort(u||$M),i.length>1&&i.sort(h||fu),r.length>1&&r.sort(h||fu)}function d(){for(let u=e,h=n.length;u<h;u++){const _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:d,sort:f}}function ZM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new du,n.set(i,[a])):r>=s.length?(a=new du,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function qM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Ze};break;case"SpotLight":t={position:new F,direction:new F,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function YM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let KM=0;function JM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function QM(n){const e=new qM,t=YM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);const r=new F,s=new it,a=new it;function o(l){let f=0,d=0,u=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let h=0,_=0,S=0,m=0,p=0,T=0,A=0,M=0,y=0,b=0,R=0,v=0,w=0,D=0;l.sort(JM);for(let B=0,H=l.length;B<H;B++){const L=l[B],k=L.color,Y=L.intensity,W=L.distance;let ie=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ki?ie=L.shadow.map.texture:ie=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)f+=k.r*Y,d+=k.g*Y,u+=k.b*Y;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],Y);D++}else if(L.isSunLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,ne=t.get(L);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),i.sunShadow[_]=ne,i.sunShadowMap[_]=ie;const Ce=ee.getViewportCount();for(let Ae=0;Ae<Ce;Ae++)i.sunShadowMatrix[S+Ae]=ee.getMatrix(Ae),i.sunShadowCascade[S+Ae]=ee._cascadeData[Ae];S+=Ce,_++}i.sun[h]=$,h++}else if(L.isDirectionalLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,ne=t.get(L);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.directionalShadow[m]=ne,i.directionalShadowMap[m]=ie,i.directionalShadowMatrix[m]=L.shadow.matrix,y++}i.directional[m]=$,m++}else if(L.isSpotLight){const $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(k).multiplyScalar(Y),$.distance=W,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[T]=$;const ee=L.shadow;if(L.map&&(i.spotLightMap[v]=L.map,v++,ee.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[T]=ee.matrix,L.castShadow){const ne=t.get(L);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.spotShadow[T]=ne,i.spotShadowMap[T]=ie,R++}T++}else if(L.isRectAreaLight){const $=e.get(L);$.color.copy(k).multiplyScalar(Y),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[A]=$,A++}else if(L.isPointLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){const ee=L.shadow,ne=t.get(L);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,ne.shadowCameraNear=ee.camera.near,ne.shadowCameraFar=ee.camera.far,i.pointShadow[p]=ne,i.pointShadowMap[p]=ie,i.pointShadowMatrix[p]=L.shadow.matrix,b++}i.point[p]=$,p++}else if(L.isHemisphereLight){const $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(Y),$.groundColor.copy(L.groundColor).multiplyScalar(Y),i.hemi[M]=$,M++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=u;const N=i.hash;(N.sunLength!==h||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==T||N.rectAreaLength!==A||N.hemiLength!==M||N.numSunShadows!==_||N.numDirectionalShadows!==y||N.numPointShadows!==b||N.numSpotShadows!==R||N.numSpotMaps!==v||N.numLightProbes!==D)&&(i.sun.length=h,i.directional.length=m,i.spot.length=T,i.rectArea.length=A,i.point.length=p,i.hemi.length=M,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.directionalShadowMatrix.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+v-w,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=D,N.sunLength=h,N.directionalLength=m,N.pointLength=p,N.spotLength=T,N.rectAreaLength=A,N.hemiLength=M,N.numSunShadows=_,N.numDirectionalShadows=y,N.numPointShadows=b,N.numSpotShadows=R,N.numSpotMaps=v,N.numLightProbes=D,i.version=KM++)}function c(l,f){let d=0,u=0,h=0,_=0,S=0,m=0;const p=f.matrixWorldInverse;for(let T=0,A=l.length;T<A;T++){const M=l[T];if(M.isSunLight){const y=i.sun[d];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),d++}else if(M.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),u++}else if(M.isSpotLight){const y=i.spot[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),_++}else if(M.isRectAreaLight){const y=i.rectArea[S];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),h++}else if(M.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:i}}function hu(n){const e=new QM(n),t=[],i=[],r=[];function s(u){d.camera=u,t.length=0,i.length=0,r.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function c(u){r.push(u)}function l(){e.setup(t)}function f(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function jM(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new hu(n),e.set(r,[o])):s>=a.length?(o=new hu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const ey=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ty=`uniform sampler2D shadow_pass;
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
}`,ny=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],iy=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],pu=new it,Or=new F,ao=new F;function ry(n,e,t){let i=new yf;const r=new Ke,s=new Ke,a=new ct,o=new gv,c=new _v,l={},f=t.maxTextureSize,d={[zi]:nn,[nn]:zi,[dn]:dn},u=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:ey,fragmentShader:ty}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const _=new qt;_.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new en(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gs;let p=this.type;this.render=function(b,R,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===t_&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gs);const w=n.getRenderTarget(),D=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Jn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=p!==this.type;H&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(k=>k.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,k=b.length;L<k;L++){const Y=b[L],W=Y.shadow;if(W===void 0){De("WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ie=W.getFrameExtents();r.multiply(ie),s.copy(W.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/ie.x),r.x=s.x*ie.x,W.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/ie.y),r.y=s.y*ie.y,W.mapSize.y=s.y));const $=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=$,W.map===null||H===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Vr){if(Y.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Rn(r.x,r.y,{format:ki,type:Gn,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),W.map.texture.name=Y.name+".shadowMap",W.map.depthTexture=new jr(r.x,r.y,Fn),W.map.depthTexture.name=Y.name+".shadowMapDepth",W.map.depthTexture.format=ei,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ot,W.map.depthTexture.magFilter=Ot}else Y.isPointLight?(W.map=new Pf(r.x),W.map.depthTexture=new uv(r.x,kn)):(W.map=new Rn(r.x,r.y),W.map.depthTexture=new jr(r.x,r.y,kn)),W.map.depthTexture.name=Y.name+".shadowMap",W.map.depthTexture.format=ei,this.type===Gs?(W.map.depthTexture.compareFunction=$?Ec:bc,W.map.depthTexture.minFilter=Wt,W.map.depthTexture.magFilter=Wt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ot,W.map.depthTexture.magFilter=Ot);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==r.x||W.map.height!==r.y)&&W.map.setSize(r.x,r.y);const ee=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Y.isPointLight!==!0&&W.updateMatrices(Y,v);for(let ne=0;ne<ee;ne++){const Ce=W.getCamera(ne);if(Y.isPointLight){const Ae=W.camera,lt=W.matrix,Xe=Y.distance||Ae.far;Xe!==Ae.far&&(Ae.far=Xe,Ae.updateProjectionMatrix()),Or.setFromMatrixPosition(Y.matrixWorld),Ae.position.copy(Or),ao.copy(Ae.position),ao.add(ny[ne]),Ae.up.copy(iy[ne]),Ae.lookAt(ao),Ae.updateMatrixWorld(),lt.makeTranslation(-Or.x,-Or.y,-Or.z),pu.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),W._frustum.setFromProjectionMatrix(pu,Ae.coordinateSystem,Ae.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,ne),n.clear();else{ne===0&&(n.setRenderTarget(W.map),n.clear());const Ae=W.getViewport(ne);a.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),B.viewport(a)}i=W.getFrustum(ne),M(R,v,Ce,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Vr&&T(W,v),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,D,N)};function T(b,R){const v=e.update(S);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null?b.mapPass=new Rn(r.x,r.y,{format:ki,type:Gn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(R,null,v,u,S,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(R,null,v,h,S,null)}function A(b,R,v,w){let D=null;const N=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)D=N;else if(D=v.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const B=D.uuid,H=R.uuid;let L=l[B];L===void 0&&(L={},l[B]=L);let k=L[H];k===void 0&&(k=D.clone(),L[H]=k,R.addEventListener("dispose",y)),D=k}if(D.visible=R.visible,D.wireframe=R.wireframe,w===Vr?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:d[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,v.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const B=n.properties.get(D);B.light=v}return D}function M(b,R,v,w,D){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===Vr)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const H=e.update(b),L=b.material;if(Array.isArray(L)){const k=H.groups;for(let Y=0,W=k.length;Y<W;Y++){const ie=k[Y],$=L[ie.materialIndex];if($&&$.visible){const ee=A(b,$,w,D);b.onBeforeShadow(n,b,R,v,H,ee,ie),n.renderBufferDirect(v,null,H,ee,b,ie),b.onAfterShadow(n,b,R,v,H,ee,ie)}}}else if(L.visible){const k=A(b,L,w,D);b.onBeforeShadow(n,b,R,v,H,k,null),n.renderBufferDirect(v,null,H,k,b,null),b.onAfterShadow(n,b,R,v,H,k,null)}}const B=b.children;for(let H=0,L=B.length;H<L;H++)M(B[H],R,v,w,D)}function y(b){b.target.removeEventListener("dispose",y);for(const v in l){const w=l[v],D=b.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}function sy(n,e){function t(){let P=!1;const ce=new ct;let J=null;const le=new ct(0,0,0,0);return{setMask:function(pe){J!==pe&&!P&&(n.colorMask(pe,pe,pe,pe),J=pe)},setLocked:function(pe){P=pe},setClear:function(pe,te,Re,Me,ft){ft===!0&&(pe*=Me,te*=Me,Re*=Me),ce.set(pe,te,Re,Me),le.equals(ce)===!1&&(n.clearColor(pe,te,Re,Me),le.copy(ce))},reset:function(){P=!1,J=null,le.set(-1,0,0,0)}}}function i(){let P=!1,ce=!1,J=null,le=null,pe=null;return{setReversed:function(te){if(ce!==te){const Re=e.get("EXT_clip_control");te?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ce=te;const Me=pe;pe=null,this.setClear(Me)}},getReversed:function(){return ce},setTest:function(te){te?j(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(te){J!==te&&!P&&(n.depthMask(te),J=te)},setFunc:function(te){if(ce&&(te=F_[te]),le!==te){switch(te){case uo:n.depthFunc(n.NEVER);break;case fo:n.depthFunc(n.ALWAYS);break;case ho:n.depthFunc(n.LESS);break;case Kr:n.depthFunc(n.LEQUAL);break;case po:n.depthFunc(n.EQUAL);break;case mo:n.depthFunc(n.GEQUAL);break;case go:n.depthFunc(n.GREATER);break;case _o:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=te}},setLocked:function(te){P=te},setClear:function(te){pe!==te&&(pe=te,ce&&(te=1-te),n.clearDepth(te))},reset:function(){P=!1,J=null,le=null,pe=null,ce=!1}}}function r(){let P=!1,ce=null,J=null,le=null,pe=null,te=null,Re=null,Me=null,ft=null;return{setTest:function(Qe){P||(Qe?j(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(Qe){ce!==Qe&&!P&&(n.stencilMask(Qe),ce=Qe)},setFunc:function(Qe,gn,Dn){(J!==Qe||le!==gn||pe!==Dn)&&(n.stencilFunc(Qe,gn,Dn),J=Qe,le=gn,pe=Dn)},setOp:function(Qe,gn,Dn){(te!==Qe||Re!==gn||Me!==Dn)&&(n.stencilOp(Qe,gn,Dn),te=Qe,Re=gn,Me=Dn)},setLocked:function(Qe){P=Qe},setClear:function(Qe){ft!==Qe&&(n.clearStencil(Qe),ft=Qe)},reset:function(){P=!1,ce=null,J=null,le=null,pe=null,te=null,Re=null,Me=null,ft=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let f={},d={},u={},h=new WeakMap,_=[],S=null,m=!1,p=null,T=null,A=null,M=null,y=null,b=null,R=null,v=new Ze(0,0,0),w=0,D=!1,N=null,B=null,H=null,L=null,k=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ie=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec($)[1]),W=ie>=1):$.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=ie>=2);let ee=null,ne={};const Ce=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),lt=new ct().fromArray(Ce),Xe=new ct().fromArray(Ae);function Je(P,ce,J,le){const pe=new Uint8Array(4),te=n.createTexture();n.bindTexture(P,te),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<J;Re++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(ce+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return te}const Z={};Z[n.TEXTURE_2D]=Je(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=Je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=Je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=Je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(n.DEPTH_TEST),a.setFunc(Kr),Ve(!1),mt(gl),j(n.CULL_FACE),qe(Jn);function j(P){f[P]!==!0&&(n.enable(P),f[P]=!0)}function ve(P){f[P]!==!1&&(n.disable(P),f[P]=!1)}function Ie(P,ce){return u[P]!==ce?(n.bindFramebuffer(P,ce),u[P]=ce,P===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ce),P===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function ge(P,ce){let J=_,le=!1;if(P){J=h.get(ce),J===void 0&&(J=[],h.set(ce,J));const pe=P.textures;if(J.length!==pe.length||J[0]!==n.COLOR_ATTACHMENT0){for(let te=0,Re=pe.length;te<Re;te++)J[te]=n.COLOR_ATTACHMENT0+te;J.length=pe.length,le=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,le=!0);le&&n.drawBuffers(J)}function Be(P){return S!==P?(n.useProgram(P),S=P,!0):!1}const At={[cr]:n.FUNC_ADD,[i_]:n.FUNC_SUBTRACT,[r_]:n.FUNC_REVERSE_SUBTRACT};At[s_]=n.MIN,At[a_]=n.MAX;const ke={[o_]:n.ZERO,[c_]:n.ONE,[l_]:n.SRC_COLOR,[Qu]:n.SRC_ALPHA,[m_]:n.SRC_ALPHA_SATURATE,[h_]:n.DST_COLOR,[f_]:n.DST_ALPHA,[u_]:n.ONE_MINUS_SRC_COLOR,[ju]:n.ONE_MINUS_SRC_ALPHA,[p_]:n.ONE_MINUS_DST_COLOR,[d_]:n.ONE_MINUS_DST_ALPHA,[g_]:n.CONSTANT_COLOR,[__]:n.ONE_MINUS_CONSTANT_COLOR,[v_]:n.CONSTANT_ALPHA,[x_]:n.ONE_MINUS_CONSTANT_ALPHA};function qe(P,ce,J,le,pe,te,Re,Me,ft,Qe){if(P===Jn){m===!0&&(ve(n.BLEND),m=!1);return}if(m===!1&&(j(n.BLEND),m=!0),P!==n_){if(P!==p||Qe!==D){if((T!==cr||y!==cr)&&(n.blendEquation(n.FUNC_ADD),T=cr,y=cr),Qe)switch(P){case $r:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _l:n.blendFunc(n.ONE,n.ONE);break;case vl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ye("WebGLState: Invalid blending: ",P);break}else switch(P){case $r:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _l:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case vl:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xl:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",P);break}A=null,M=null,b=null,R=null,v.set(0,0,0),w=0,p=P,D=Qe}return}pe=pe||ce,te=te||J,Re=Re||le,(ce!==T||pe!==y)&&(n.blendEquationSeparate(At[ce],At[pe]),T=ce,y=pe),(J!==A||le!==M||te!==b||Re!==R)&&(n.blendFuncSeparate(ke[J],ke[le],ke[te],ke[Re]),A=J,M=le,b=te,R=Re),(Me.equals(v)===!1||ft!==w)&&(n.blendColor(Me.r,Me.g,Me.b,ft),v.copy(Me),w=ft),p=P,D=!1}function ut(P,ce){P.side===dn?ve(n.CULL_FACE):j(n.CULL_FACE);let J=P.side===nn;ce&&(J=!J),Ve(J),P.blending===$r&&P.transparent===!1?qe(Jn):qe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const le=P.stencilWrite;o.setTest(le),le&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Jt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(P){N!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),N=P)}function mt(P){P!==jg?(j(n.CULL_FACE),P!==B&&(P===gl?n.cullFace(n.BACK):P===e_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),B=P}function Pt(P){P!==H&&(W&&n.lineWidth(P),H=P)}function Jt(P,ce,J){P?(j(n.POLYGON_OFFSET_FILL),(L!==ce||k!==J)&&(L=ce,k=J,a.getReversed()&&(ce=-ce),n.polygonOffset(ce,J))):ve(n.POLYGON_OFFSET_FILL)}function vt(P){P?j(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function Et(P){P===void 0&&(P=n.TEXTURE0+Y-1),ee!==P&&(n.activeTexture(P),ee=P)}function I(P,ce,J){J===void 0&&(ee===null?J=n.TEXTURE0+Y-1:J=ee);let le=ne[J];le===void 0&&(le={type:void 0,texture:void 0},ne[J]=le),(le.type!==P||le.texture!==ce)&&(ee!==J&&(n.activeTexture(J),ee=J),n.bindTexture(P,ce||Z[P]),le.type=P,le.texture=ce)}function zt(){const P=ne[ee];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function et(){try{n.compressedTexImage2D(...arguments)}catch(P){Ye("WebGLState:",P)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(P){Ye("WebGLState:",P)}}function g(){try{n.texSubImage2D(...arguments)}catch(P){Ye("WebGLState:",P)}}function U(){try{n.texSubImage3D(...arguments)}catch(P){Ye("WebGLState:",P)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(P){Ye("WebGLState:",P)}}function X(){try{n.compressedTexSubImage3D(...arguments)}catch(P){Ye("WebGLState:",P)}}function re(){try{n.texStorage2D(...arguments)}catch(P){Ye("WebGLState:",P)}}function se(){try{n.texStorage3D(...arguments)}catch(P){Ye("WebGLState:",P)}}function q(){try{n.texImage2D(...arguments)}catch(P){Ye("WebGLState:",P)}}function Q(){try{n.texImage3D(...arguments)}catch(P){Ye("WebGLState:",P)}}function ae(P){return d[P]!==void 0?d[P]:n.getParameter(P)}function Ee(P,ce){d[P]!==ce&&(n.pixelStorei(P,ce),d[P]=ce)}function ue(P){lt.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),lt.copy(P))}function oe(P){Xe.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Xe.copy(P))}function we(P,ce){let J=l.get(ce);J===void 0&&(J=new WeakMap,l.set(ce,J));let le=J.get(P);le===void 0&&(le=n.getUniformBlockIndex(ce,P.name),J.set(P,le))}function Pe(P,ce){const le=l.get(ce).get(P);c.get(ce)!==le&&(n.uniformBlockBinding(ce,le,P.__bindingPointIndex),c.set(ce,le))}function Ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},d={},ee=null,ne={},u={},h=new WeakMap,_=[],S=null,m=!1,p=null,T=null,A=null,M=null,y=null,b=null,R=null,v=new Ze(0,0,0),w=0,D=!1,N=null,B=null,H=null,L=null,k=null,lt.set(0,0,n.canvas.width,n.canvas.height),Xe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:ve,bindFramebuffer:Ie,drawBuffers:ge,useProgram:Be,setBlending:qe,setMaterial:ut,setFlipSided:Ve,setCullFace:mt,setLineWidth:Pt,setPolygonOffset:Jt,setScissorTest:vt,activeTexture:Et,bindTexture:I,unbindTexture:zt,compressedTexImage2D:et,compressedTexImage3D:E,texImage2D:q,texImage3D:Q,pixelStorei:Ee,getParameter:ae,updateUBOMapping:we,uniformBlockBinding:Pe,texStorage2D:re,texStorage3D:se,texSubImage2D:g,texSubImage3D:U,compressedTexSubImage2D:G,compressedTexSubImage3D:X,scissor:ue,viewport:oe,reset:Ue}}function ay(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ke,f=new WeakMap,d=new Set;let u;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(E,g){return _?new OffscreenCanvas(E,g):sa("canvas")}function m(E,g,U){let G=1;const X=et(E);if((X.width>U||X.height>U)&&(G=U/Math.max(X.width,X.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const re=Math.floor(G*X.width),se=Math.floor(G*X.height);u===void 0&&(u=S(re,se));const q=g?S(re,se):u;return q.width=re,q.height=se,q.getContext("2d").drawImage(E,0,0,re,se),De("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+re+"x"+se+")."),q}else return"data"in E&&De("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),E;return E}function p(E){return E.generateMipmaps}function T(E){n.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(E,g,U,G,X,re=!1){if(E!==null){if(n[E]!==void 0)return n[E];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let se;G&&(se=e.get("EXT_texture_norm16"),se||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=g;if(g===n.RED&&(U===n.FLOAT&&(q=n.R32F),U===n.HALF_FLOAT&&(q=n.R16F),U===n.UNSIGNED_BYTE&&(q=n.R8),U===n.UNSIGNED_SHORT&&se&&(q=se.R16_EXT),U===n.SHORT&&se&&(q=se.R16_SNORM_EXT)),g===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.R8UI),U===n.UNSIGNED_SHORT&&(q=n.R16UI),U===n.UNSIGNED_INT&&(q=n.R32UI),U===n.BYTE&&(q=n.R8I),U===n.SHORT&&(q=n.R16I),U===n.INT&&(q=n.R32I)),g===n.RG&&(U===n.FLOAT&&(q=n.RG32F),U===n.HALF_FLOAT&&(q=n.RG16F),U===n.UNSIGNED_BYTE&&(q=n.RG8),U===n.UNSIGNED_SHORT&&se&&(q=se.RG16_EXT),U===n.SHORT&&se&&(q=se.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RG8UI),U===n.UNSIGNED_SHORT&&(q=n.RG16UI),U===n.UNSIGNED_INT&&(q=n.RG32UI),U===n.BYTE&&(q=n.RG8I),U===n.SHORT&&(q=n.RG16I),U===n.INT&&(q=n.RG32I)),g===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RGB8UI),U===n.UNSIGNED_SHORT&&(q=n.RGB16UI),U===n.UNSIGNED_INT&&(q=n.RGB32UI),U===n.BYTE&&(q=n.RGB8I),U===n.SHORT&&(q=n.RGB16I),U===n.INT&&(q=n.RGB32I)),g===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),U===n.UNSIGNED_INT&&(q=n.RGBA32UI),U===n.BYTE&&(q=n.RGBA8I),U===n.SHORT&&(q=n.RGBA16I),U===n.INT&&(q=n.RGBA32I)),g===n.RGB&&(U===n.UNSIGNED_SHORT&&se&&(q=se.RGB16_EXT),U===n.SHORT&&se&&(q=se.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),g===n.RGBA){const Q=re?ia:He.getTransfer(X);U===n.FLOAT&&(q=n.RGBA32F),U===n.HALF_FLOAT&&(q=n.RGBA16F),U===n.UNSIGNED_BYTE&&(q=Q===tt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&se&&(q=se.RGBA16_EXT),U===n.SHORT&&se&&(q=se.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(E,g){let U;return E?g===null||g===kn||g===Qr?U=n.DEPTH24_STENCIL8:g===Fn?U=n.DEPTH32F_STENCIL8:g===Jr&&(U=n.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===kn||g===Qr?U=n.DEPTH_COMPONENT24:g===Fn?U=n.DEPTH_COMPONENT32F:g===Jr&&(U=n.DEPTH_COMPONENT16),U}function b(E,g){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ot&&E.minFilter!==Wt?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function R(E){const g=E.target;g.removeEventListener("dispose",R),w(g),g.isVideoTexture&&f.delete(g),g.isHTMLTexture&&d.delete(g)}function v(E){const g=E.target;g.removeEventListener("dispose",v),N(g)}function w(E){const g=i.get(E);if(g.__webglInit===void 0)return;const U=E.source,G=h.get(U);if(G){const X=G[g.__cacheKey];X.usedTimes--,X.usedTimes===0&&D(E),Object.keys(G).length===0&&h.delete(U)}i.remove(E)}function D(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const U=E.source,G=h.get(U);delete G[g.__cacheKey],a.memory.textures--}function N(E){const g=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(g.__webglFramebuffer[G]))for(let X=0;X<g.__webglFramebuffer[G].length;X++)n.deleteFramebuffer(g.__webglFramebuffer[G][X]);else n.deleteFramebuffer(g.__webglFramebuffer[G]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[G])}else{if(Array.isArray(g.__webglFramebuffer))for(let G=0;G<g.__webglFramebuffer.length;G++)n.deleteFramebuffer(g.__webglFramebuffer[G]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let G=0;G<g.__webglColorRenderbuffer.length;G++)g.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[G]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const U=E.textures;for(let G=0,X=U.length;G<X;G++){const re=i.get(U[G]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(U[G])}i.remove(E)}let B=0;function H(){B=0}function L(){return B}function k(E){B=E}function Y(){const E=B;return E>=r.maxTextures&&De("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+r.maxTextures),B+=1,E}function W(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function ie(E,g){const U=i.get(E);if(E.isVideoTexture&&I(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&U.__version!==E.version){const G=E.image;if(G===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(U,E,g);return}}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+g)}function $(E,g){const U=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){ve(U,E,g);return}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+g)}function ee(E,g){const U=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){ve(U,E,g);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+g)}function ne(E,g){const U=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&U.__version!==E.version){Ie(U,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+g)}const Ce={[vo]:n.REPEAT,[Kn]:n.CLAMP_TO_EDGE,[xo]:n.MIRRORED_REPEAT},Ae={[Ot]:n.NEAREST,[y_]:n.NEAREST_MIPMAP_NEAREST,[ps]:n.NEAREST_MIPMAP_LINEAR,[Wt]:n.LINEAR,[Ca]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},lt={[T_]:n.NEVER,[D_]:n.ALWAYS,[A_]:n.LESS,[bc]:n.LEQUAL,[R_]:n.EQUAL,[Ec]:n.GEQUAL,[C_]:n.GREATER,[P_]:n.NOTEQUAL};function Xe(E,g){if(g.type===Fn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Wt||g.magFilter===Ca||g.magFilter===ps||g.magFilter===Ii||g.minFilter===Wt||g.minFilter===Ca||g.minFilter===ps||g.minFilter===Ii)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Ce[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Ce[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Ce[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Ae[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Ae[g.minFilter]),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,lt[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ot||g.minFilter!==ps&&g.minFilter!==Ii||g.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Je(E,g){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",R));const G=g.source;let X=h.get(G);X===void 0&&(X={},h.set(G,X));const re=W(g);if(re!==E.__cacheKey){X[re]===void 0&&(X[re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),X[re].usedTimes++;const se=X[E.__cacheKey];se!==void 0&&(X[E.__cacheKey].usedTimes--,se.usedTimes===0&&D(g)),E.__cacheKey=re,E.__webglTexture=X[re].texture}return U}function Z(E,g,U){return Math.floor(Math.floor(E/U)/g)}function j(E,g,U,G){const re=E.updateRanges;if(re.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,U,G,g.data);else{re.sort((Ee,ue)=>Ee.start-ue.start);let se=0;for(let Ee=1;Ee<re.length;Ee++){const ue=re[se],oe=re[Ee],we=ue.start+ue.count,Pe=Z(oe.start,g.width,4),Ue=Z(ue.start,g.width,4);oe.start<=we+1&&Pe===Ue&&Z(oe.start+oe.count-1,g.width,4)===Pe?ue.count=Math.max(ue.count,oe.start+oe.count-ue.start):(++se,re[se]=oe)}re.length=se+1;const q=t.getParameter(n.UNPACK_ROW_LENGTH),Q=t.getParameter(n.UNPACK_SKIP_PIXELS),ae=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Ee=0,ue=re.length;Ee<ue;Ee++){const oe=re[Ee],we=Math.floor(oe.start/4),Pe=Math.ceil(oe.count/4),Ue=we%g.width,P=Math.floor(we/g.width),ce=Pe,J=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(n.UNPACK_SKIP_ROWS,P),t.texSubImage2D(n.TEXTURE_2D,0,Ue,P,ce,J,U,G,g.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(n.UNPACK_SKIP_ROWS,ae)}}function ve(E,g,U){let G=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(G=n.TEXTURE_3D);const X=Je(E,g),re=g.source;t.bindTexture(G,E.__webglTexture,n.TEXTURE0+U);const se=i.get(re);if(re.version!==se.__version||X===!0){if(t.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const J=He.getPrimaries(He.workingColorSpace),le=g.colorSpace===hi?null:He.getPrimaries(g.colorSpace),pe=g.colorSpace===hi||J===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let Q=m(g.image,!1,r.maxTextureSize);Q=zt(g,Q);const ae=s.convert(g.format,g.colorSpace),Ee=s.convert(g.type);let ue=M(g.internalFormat,ae,Ee,g.normalized,g.colorSpace,g.isVideoTexture);Xe(G,g);let oe;const we=g.mipmaps,Pe=g.isVideoTexture!==!0,Ue=se.__version===void 0||X===!0,P=re.dataReady,ce=b(g,Q);if(g.isDepthTexture)ue=y(g.format===Li,g.type),Ue&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,ue,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,ue,Q.width,Q.height,0,ae,Ee,null));else if(g.isDataTexture)if(we.length>0){Pe&&Ue&&t.texStorage2D(n.TEXTURE_2D,ce,ue,we[0].width,we[0].height);for(let J=0,le=we.length;J<le;J++)oe=we[J],Pe?P&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,oe.width,oe.height,ae,Ee,oe.data):t.texImage2D(n.TEXTURE_2D,J,ue,oe.width,oe.height,0,ae,Ee,oe.data);g.generateMipmaps=!1}else Pe?(Ue&&t.texStorage2D(n.TEXTURE_2D,ce,ue,Q.width,Q.height),P&&j(g,Q,ae,Ee)):t.texImage2D(n.TEXTURE_2D,0,ue,Q.width,Q.height,0,ae,Ee,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Pe&&Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,ue,we[0].width,we[0].height,Q.depth);for(let J=0,le=we.length;J<le;J++)if(oe=we[J],g.format!==Tn)if(ae!==null)if(Pe){if(P)if(g.layerUpdates.size>0){const pe=$l(oe.width,oe.height,g.format,g.type);for(const te of g.layerUpdates){const Re=oe.data.subarray(te*pe/oe.data.BYTES_PER_ELEMENT,(te+1)*pe/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,te,oe.width,oe.height,1,ae,Re)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,Q.depth,ae,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,ue,oe.width,oe.height,Q.depth,0,oe.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,Q.depth,ae,Ee,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,ue,oe.width,oe.height,Q.depth,0,ae,Ee,oe.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Pe&&Ue&&t.texStorage2D(n.TEXTURE_2D,ce,ue,we[0].width,we[0].height);for(let J=0,le=we.length;J<le;J++)oe=we[J],g.format!==Tn?ae!==null?Pe?P&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,J,ue,oe.width,oe.height,0,oe.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?P&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,oe.width,oe.height,ae,Ee,oe.data):t.texImage2D(n.TEXTURE_2D,J,ue,oe.width,oe.height,0,ae,Ee,oe.data)}else if(g.isDataArrayTexture)if(Pe){if(Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,ue,Q.width,Q.height,Q.depth),P)if(g.layerUpdates.size>0){const J=$l(Q.width,Q.height,g.format,g.type);for(const le of g.layerUpdates){const pe=Q.data.subarray(le*J/Q.data.BYTES_PER_ELEMENT,(le+1)*J/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,Q.width,Q.height,1,ae,Ee,pe)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ae,Ee,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ue,Q.width,Q.height,Q.depth,0,ae,Ee,Q.data);else if(g.isData3DTexture)Pe?(Ue&&t.texStorage3D(n.TEXTURE_3D,ce,ue,Q.width,Q.height,Q.depth),P&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ae,Ee,Q.data)):t.texImage3D(n.TEXTURE_3D,0,ue,Q.width,Q.height,Q.depth,0,ae,Ee,Q.data);else if(g.isFramebufferTexture){if(Ue)if(Pe)t.texStorage2D(n.TEXTURE_2D,ce,ue,Q.width,Q.height);else{let J=Q.width,le=Q.height;for(let pe=0;pe<ce;pe++)t.texImage2D(n.TEXTURE_2D,pe,ue,J,le,0,ae,Ee,null),J>>=1,le>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const J=n.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),Q.parentNode!==J){J.appendChild(Q),d.add(g),J.onpaint=le=>{const pe=le.changedElements;for(const te of d)pe.includes(te.image)&&(te.needsUpdate=!0)},J.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{const pe=n.RGBA,te=n.RGBA,Re=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,pe,te,Re,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(we.length>0){if(Pe&&Ue){const J=et(we[0]);t.texStorage2D(n.TEXTURE_2D,ce,ue,J.width,J.height)}for(let J=0,le=we.length;J<le;J++)oe=we[J],Pe?P&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ae,Ee,oe):t.texImage2D(n.TEXTURE_2D,J,ue,ae,Ee,oe);g.generateMipmaps=!1}else if(Pe){if(Ue){const J=et(Q);t.texStorage2D(n.TEXTURE_2D,ce,ue,J.width,J.height)}P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,Ee,Q)}else t.texImage2D(n.TEXTURE_2D,0,ue,ae,Ee,Q);p(g)&&T(G),se.__version=re.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Ie(E,g,U){if(g.image.length!==6)return;const G=Je(E,g),X=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+U);const re=i.get(X);if(X.version!==re.__version||G===!0){t.activeTexture(n.TEXTURE0+U);const se=He.getPrimaries(He.workingColorSpace),q=g.colorSpace===hi?null:He.getPrimaries(g.colorSpace),Q=g.colorSpace===hi||se===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ae=g.isCompressedTexture||g.image[0].isCompressedTexture,Ee=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let te=0;te<6;te++)!ae&&!Ee?ue[te]=m(g.image[te],!0,r.maxCubemapSize):ue[te]=Ee?g.image[te].image:g.image[te],ue[te]=zt(g,ue[te]);const oe=ue[0],we=s.convert(g.format,g.colorSpace),Pe=s.convert(g.type),Ue=M(g.internalFormat,we,Pe,g.normalized,g.colorSpace),P=g.isVideoTexture!==!0,ce=re.__version===void 0||G===!0,J=X.dataReady;let le=b(g,oe);Xe(n.TEXTURE_CUBE_MAP,g);let pe;if(ae){P&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,Ue,oe.width,oe.height);for(let te=0;te<6;te++){pe=ue[te].mipmaps;for(let Re=0;Re<pe.length;Re++){const Me=pe[Re];g.format!==Tn?we!==null?P?J&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,0,0,Me.width,Me.height,we,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,Ue,Me.width,Me.height,0,Me.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,0,0,Me.width,Me.height,we,Pe,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,Ue,Me.width,Me.height,0,we,Pe,Me.data)}}}else{if(pe=g.mipmaps,P&&ce){pe.length>0&&le++;const te=et(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,le,Ue,te.width,te.height)}for(let te=0;te<6;te++)if(Ee){P?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ue[te].width,ue[te].height,we,Pe,ue[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ue,ue[te].width,ue[te].height,0,we,Pe,ue[te].data);for(let Re=0;Re<pe.length;Re++){const ft=pe[Re].image[te].image;P?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,0,0,ft.width,ft.height,we,Pe,ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,Ue,ft.width,ft.height,0,we,Pe,ft.data)}}else{P?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,we,Pe,ue[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ue,we,Pe,ue[te]);for(let Re=0;Re<pe.length;Re++){const Me=pe[Re];P?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,0,0,we,Pe,Me.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,Ue,we,Pe,Me.image[te])}}}p(g)&&T(n.TEXTURE_CUBE_MAP),re.__version=X.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ge(E,g,U,G,X,re){const se=s.convert(U.format,U.colorSpace),q=s.convert(U.type),Q=M(U.internalFormat,se,q,U.normalized,U.colorSpace),ae=i.get(g),Ee=i.get(U);if(Ee.__renderTarget=g,!ae.__hasExternalTextures){const ue=Math.max(1,g.width>>re),oe=Math.max(1,g.height>>re);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,re,Q,ue,oe,g.depth,0,se,q,null):t.texImage2D(X,re,Q,ue,oe,0,se,q,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Et(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,X,Ee.__webglTexture,0,vt(g)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,X,Ee.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(E,g,U){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer){const G=g.depthTexture,X=G&&G.isDepthTexture?G.type:null,re=y(g.stencilBuffer,X),se=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Et(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt(g),re,g.width,g.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt(g),re,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,re,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,E)}else{const G=g.textures;for(let X=0;X<G.length;X++){const re=G[X],se=s.convert(re.format,re.colorSpace),q=s.convert(re.type),Q=M(re.internalFormat,se,q,re.normalized,re.colorSpace);Et(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt(g),Q,g.width,g.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt(g),Q,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Q,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function At(E,g,U){const G=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=i.get(g.depthTexture);if(X.__renderTarget=g,(!X.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),G){if(X.__webglInit===void 0&&(X.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),X.__webglTexture===void 0){X.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,g.depthTexture);const ae=s.convert(g.depthTexture.format),Ee=s.convert(g.depthTexture.type);let ue;g.depthTexture.format===ei?ue=n.DEPTH_COMPONENT24:g.depthTexture.format===Li&&(ue=n.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ue,g.width,g.height,0,ae,Ee,null)}}else ie(g.depthTexture,0);const re=X.__webglTexture,se=vt(g),q=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,Q=g.depthTexture.format===Li?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===ei)Et(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,q,re,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,Q,q,re,0);else if(g.depthTexture.format===Li)Et(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,q,re,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,Q,q,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(E){const g=i.get(E),U=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const G=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),G){const X=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,G.removeEventListener("dispose",X)};G.addEventListener("dispose",X),g.__depthDisposeCallback=X}g.__boundDepthTexture=G}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(U)for(let G=0;G<6;G++)At(g.__webglFramebuffer[G],E,G);else{const G=E.texture.mipmaps;G&&G.length>0?At(g.__webglFramebuffer[0],E,0):At(g.__webglFramebuffer,E,0)}else if(U){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]===void 0)g.__webglDepthbuffer[G]=n.createRenderbuffer(),Be(g.__webglDepthbuffer[G],E,!1);else{const X=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,re)}}else{const G=E.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Be(g.__webglDepthbuffer,E,!1);else{const X=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,re)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function qe(E,g,U){const G=i.get(E);g!==void 0&&ge(G.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&ke(E)}function ut(E){const g=E.texture,U=i.get(E),G=i.get(g);E.addEventListener("dispose",v);const X=E.textures,re=E.isWebGLCubeRenderTarget===!0,se=X.length>1;if(se||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=g.version,a.memory.textures++),re){U.__webglFramebuffer=[];for(let q=0;q<6;q++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[q]=[];for(let Q=0;Q<g.mipmaps.length;Q++)U.__webglFramebuffer[q][Q]=n.createFramebuffer()}else U.__webglFramebuffer[q]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let q=0;q<g.mipmaps.length;q++)U.__webglFramebuffer[q]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(se)for(let q=0,Q=X.length;q<Q;q++){const ae=i.get(X[q]);ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Et(E)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let q=0;q<X.length;q++){const Q=X[q];U.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[q]);const ae=s.convert(Q.format,Q.colorSpace),Ee=s.convert(Q.type),ue=M(Q.internalFormat,ae,Ee,Q.normalized,Q.colorSpace,E.isXRRenderTarget===!0),oe=vt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,ue,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,U.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,g);for(let q=0;q<6;q++)if(g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)ge(U.__webglFramebuffer[q][Q],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Q);else ge(U.__webglFramebuffer[q],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);p(g)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let q=0,Q=X.length;q<Q;q++){const ae=X[q],Ee=i.get(ae);let ue=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ue=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,Ee.__webglTexture),Xe(ue,ae),ge(U.__webglFramebuffer,E,ae,n.COLOR_ATTACHMENT0+q,ue,0),p(ae)&&T(ue)}t.unbindTexture()}else{let q=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(q=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,G.__webglTexture),Xe(q,g),g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)ge(U.__webglFramebuffer[Q],E,g,n.COLOR_ATTACHMENT0,q,Q);else ge(U.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,q,0);p(g)&&T(q),t.unbindTexture()}E.depthBuffer&&ke(E)}function Ve(E){const g=E.textures;for(let U=0,G=g.length;U<G;U++){const X=g[U];if(p(X)){const re=A(E),se=i.get(X).__webglTexture;t.bindTexture(re,se),T(re),t.unbindTexture()}}}const mt=[],Pt=[];function Jt(E){if(E.samples>0){if(Et(E)===!1){const g=E.textures,U=E.width,G=E.height;let X=n.COLOR_BUFFER_BIT;const re=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(E),q=g.length>1;if(q)for(let ae=0;ae<g.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const Q=E.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let ae=0;ae<g.length;ae++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[ae]);const Ee=i.get(g[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ee,0)}n.blitFramebuffer(0,0,U,G,0,0,U,G,X,n.NEAREST),c===!0&&(mt.length=0,Pt.length=0,mt.push(n.COLOR_ATTACHMENT0+ae),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(mt.push(re),Pt.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Pt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let ae=0;ae<g.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,se.__webglColorRenderbuffer[ae]);const Ee=i.get(g[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){const g=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function vt(E){return Math.min(r.maxSamples,E.samples)}function Et(E){const g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function I(E){const g=a.render.frame;f.get(E)!==g&&(f.set(E,g),E.update())}function zt(E,g){const U=E.colorSpace,G=E.format,X=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==na&&U!==hi&&(He.getTransfer(U)===tt?(G!==Tn||X!==hn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",U)),g}function et(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=H,this.getTextureUnits=L,this.setTextureUnits=k,this.setTexture2D=ie,this.setTexture2DArray=$,this.setTexture3D=ee,this.setTextureCube=ne,this.rebindTextures=qe,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function oy(n,e){function t(i,r=hi){let s;const a=He.getTransfer(r);if(i===hn)return n.UNSIGNED_BYTE;if(i===vc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===df)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===uf)return n.BYTE;if(i===ff)return n.SHORT;if(i===Jr)return n.UNSIGNED_SHORT;if(i===_c)return n.INT;if(i===kn)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===Gn)return n.HALF_FLOAT;if(i===pf)return n.ALPHA;if(i===mf)return n.RGB;if(i===Tn)return n.RGBA;if(i===ei)return n.DEPTH_COMPONENT;if(i===Li)return n.DEPTH_STENCIL;if(i===gf)return n.RED;if(i===Sc)return n.RED_INTEGER;if(i===ki)return n.RG;if(i===Mc)return n.RG_INTEGER;if(i===yc)return n.RGBA_INTEGER;if(i===Vs||i===Hs||i===Ws||i===Xs)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Vs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Vs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===So||i===Mo||i===yo||i===bo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===So)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Eo||i===wo||i===To||i===Ao||i===Ro||i===ea||i===Co)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Eo||i===wo)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===To)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ao)return s.COMPRESSED_R11_EAC;if(i===Ro)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ea)return s.COMPRESSED_RG11_EAC;if(i===Co)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Po||i===Do||i===Io||i===Lo||i===No||i===Uo||i===Fo||i===Oo||i===zo||i===Bo||i===ko||i===Go||i===Vo||i===Ho)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Po)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Do)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Io)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===No)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ko)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Go)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ho)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wo||i===Xo||i===$o)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Wo)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$o)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zo||i===qo||i===ta||i===Yo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Zo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===qo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ta)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const cy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ly=`
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

}`;class uy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ef(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new tn({vertexShader:cy,fragmentShader:ly,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new en(new ma(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fy extends Wi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,f=null,d=null,u=null,h=null,_=null;const S=typeof XRWebGLBinding<"u",m=new uy,p={},T=t.getContextAttributes();let A=null,M=null;const y=[],b=[],R=new Ke;let v=null,w=null;const D=new bn;D.viewport=new ct;const N=new bn;N.viewport=new ct;const B=[D,N],H=new xv;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=y[Z];return j===void 0&&(j=new za,y[Z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=y[Z];return j===void 0&&(j=new za,y[Z]=j),j.getGripSpace()},this.getHand=function(Z){let j=y[Z];return j===void 0&&(j=new za,y[Z]=j),j.getHandSpace()};function Y(Z){const j=b.indexOf(Z.inputSource);if(j===-1)return;const ve=y[j];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,l||a),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",ie);for(let Z=0;Z<y.length;Z++){const j=b[Z];j!==null&&(b[Z]=null,y[Z].disconnect(j))}L=null,k=null,m.reset();for(const Z in p)delete p[Z];if(e.setRenderTarget(A),h=null,u=null,d=null,r=null,M=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),w!==null){const Z=w.camera;Z.fov=w.fov,Z.zoom=w.zoom,Z.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",W),r.addEventListener("inputsourceschange",ie),T.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ie=null,ge=null;T.depth&&(ge=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=T.stencil?Li:ei,Ie=T.stencil?Qr:kn);const Be={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Be),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Rn(u.textureWidth,u.textureHeight,{format:Tn,type:hn,depthTexture:new jr(u.textureWidth,u.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ve={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Rn(h.framebufferWidth,h.framebufferHeight,{format:Tn,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(Z){for(let j=0;j<Z.removed.length;j++){const ve=Z.removed[j],Ie=b.indexOf(ve);Ie>=0&&(b[Ie]=null,y[Ie].disconnect(ve))}for(let j=0;j<Z.added.length;j++){const ve=Z.added[j];let Ie=b.indexOf(ve);if(Ie===-1){for(let Be=0;Be<y.length;Be++)if(Be>=b.length){b.push(ve),Ie=Be;break}else if(b[Be]===null){b[Be]=ve,Ie=Be;break}if(Ie===-1)break}const ge=y[Ie];ge&&ge.connect(ve)}}const $=new F,ee=new F;function ne(Z,j,ve){$.setFromMatrixPosition(j.matrixWorld),ee.setFromMatrixPosition(ve.matrixWorld);const Ie=$.distanceTo(ee),ge=j.projectionMatrix.elements,Be=ve.projectionMatrix.elements,At=ge[14]/(ge[10]-1),ke=ge[14]/(ge[10]+1),qe=(ge[9]+1)/ge[5],ut=(ge[9]-1)/ge[5],Ve=(ge[8]-1)/ge[0],mt=(Be[8]+1)/Be[0],Pt=At*Ve,Jt=At*mt,vt=Ie/(-Ve+mt),Et=vt*-Ve;if(j.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Et),Z.translateZ(vt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ge[10]===-1)Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const I=At+vt,zt=ke+vt,et=Pt-Et,E=Jt+(Ie-Et),g=qe*ke/zt*I,U=ut*ke/zt*I;Z.projectionMatrix.makePerspective(et,E,g,U,I,zt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Ce(Z,j){j===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let j=Z.near,ve=Z.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),H.near=N.near=D.near=j,H.far=N.far=D.far=ve,(L!==H.near||k!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),L=H.near,k=H.far),H.layers.mask=Z.layers.mask|6,D.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;const Ie=Z.parent,ge=H.cameras;Ce(H,Ie);for(let Be=0;Be<ge.length;Be++)Ce(ge[Be],Ie);ge.length===2?ne(H,D,N):H.projectionMatrix.copy(D.projectionMatrix),w===null&&Z.isPerspectiveCamera&&(w={camera:Z,fov:Z.fov,zoom:Z.zoom}),Ae(Z,H,Ie)};function Ae(Z,j,ve){ve===null?Z.matrix.copy(j.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ko*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&h===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Z){return p[Z]};let lt=null;function Xe(Z,j){if(f=j.getViewerPose(l||a),_=j,f!==null){const ve=f.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let Ie=!1;ve.length!==H.cameras.length&&(H.cameras.length=0,Ie=!0);for(let ke=0;ke<ve.length;ke++){const qe=ve[ke];let ut=null;if(h!==null)ut=h.getViewport(qe);else{const mt=d.getViewSubImage(u,qe);ut=mt.viewport,ke===0&&(e.setRenderTargetTextures(M,mt.colorTexture,mt.depthStencilTexture),e.setRenderTarget(M))}let Ve=B[ke];Ve===void 0&&(Ve=new bn,Ve.layers.enable(ke),Ve.viewport=new ct,B[ke]=Ve),Ve.matrix.fromArray(qe.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(qe.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ut.x,ut.y,ut.width,ut.height),ke===0&&(H.matrix.copy(Ve.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ie===!0&&H.cameras.push(Ve)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){d=i.getBinding();const ke=d.getDepthInformation(ve[0]);ke&&ke.isValid&&ke.texture&&m.init(ke,r.renderState)}if(ge&&ge.includes("camera-access")&&S){e.state.unbindTexture(),d=i.getBinding();for(let ke=0;ke<ve.length;ke++){const qe=ve[ke].camera;if(qe){let ut=p[qe];ut||(ut=new Ef,p[qe]=ut);const Ve=d.getCameraImage(qe);ut.sourceTexture=Ve}}}}for(let ve=0;ve<y.length;ve++){const Ie=b[ve],ge=y[ve];Ie!==null&&ge!==void 0&&ge.update(Ie,j,l||a)}lt&&lt(Z,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),_=null}const Je=new Rf;Je.setAnimationLoop(Xe),this.setAnimationLoop=function(Z){lt=Z},this.dispose=function(){}}}const dy=new it,Uf=new Le;Uf.set(-1,0,0,0,1,0,0,0,1);function hy(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,wf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,T,A,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),f(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&h(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),S(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,T,A):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),A=T.envMap,M=T.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(dy.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Uf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function py(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){const b=y.program;i.uniformBlockBinding(M,b)}function l(M,y){let b=r[M.id];b===void 0&&(m(M),b=f(M),r[M.id]=b,M.addEventListener("dispose",T));const R=y.program;i.updateUBOMapping(M,R);const v=e.render.frame;s[M.id]!==v&&(u(M),s[M.id]=v)}function f(M){const y=d();M.__bindingPointIndex=y;const b=n.createBuffer(),R=M.__size,v=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const y=r[M.id],b=M.uniforms,R=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let v=0,w=b.length;v<w;v++){const D=b[v];if(Array.isArray(D))for(let N=0,B=D.length;N<B;N++)h(D[N],v,N,R);else h(D,v,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,y,b,R){if(S(M,y,b,R)===!0){const v=M.__offset,w=M.value;if(Array.isArray(w)){let D=0;for(let N=0;N<w.length;N++){const B=w[N],H=p(B);_(B,M.__data,D),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(D+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(w,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,M.__data)}}function _(M,y,b){typeof M=="number"||typeof M=="boolean"?y[0]=M:M.isMatrix3?(y[0]=M.elements[0],y[1]=M.elements[1],y[2]=M.elements[2],y[3]=0,y[4]=M.elements[3],y[5]=M.elements[4],y[6]=M.elements[5],y[7]=0,y[8]=M.elements[6],y[9]=M.elements[7],y[10]=M.elements[8],y[11]=0):ArrayBuffer.isView(M)?y.set(new M.constructor(M.buffer,M.byteOffset,y.length)):M.toArray(y,b)}function S(M,y,b,R){const v=M.value,w=y+"_"+b;if(R[w]===void 0)return typeof v=="number"||typeof v=="boolean"?R[w]=v:ArrayBuffer.isView(v)?R[w]=v.slice():R[w]=v.clone(),!0;{const D=R[w];if(typeof v=="number"||typeof v=="boolean"){if(D!==v)return R[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(D.equals(v)===!1)return D.copy(v),!0}}return!1}function m(M){const y=M.uniforms;let b=0;const R=16;for(let w=0,D=y.length;w<D;w++){const N=Array.isArray(y[w])?y[w]:[y[w]];for(let B=0,H=N.length;B<H;B++){const L=N[B],k=Array.isArray(L.value)?L.value:[L.value];for(let Y=0,W=k.length;Y<W;Y++){const ie=k[Y],$=p(ie),ee=b%R,ne=ee%$.boundary,Ce=ee+ne;b+=ne,Ce!==0&&R-Ce<$.storage&&(b+=R-Ce),L.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=$.storage}}}const v=b%R;return v>0&&(b+=R-v),M.__size=b,M.__cache={},this}function p(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):De("WebGLRenderer: Unsupported uniform value type.",M),y}function T(M){const y=M.target;y.removeEventListener("dispose",T);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function A(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:A}}const my=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Nn=null;function gy(){return Nn===null&&(Nn=new sv(my,16,16,ki,Gn),Nn.name="DFG_LUT",Nn.minFilter=Wt,Nn.magFilter=Wt,Nn.wrapS=Kn,Nn.wrapT=Kn,Nn.generateMipmaps=!1,Nn.needsUpdate=!0),Nn}class _y{constructor(e={}){const{canvas:t=N_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:h=hn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const S=h,m=new Set([yc,Mc,Sc]),p=new Set([hn,kn,Jr,Qr,vc,xc]),T=new Uint32Array(4),A=new Int32Array(4),M=new F;let y=null,b=null;const R=[],v=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let N=!1,B=null,H=null,L=null,k=null;this._outputColorSpace=fn;let Y=0,W=0,ie=null,$=-1,ee=null;const ne=new ct,Ce=new ct;let Ae=null;const lt=new Ze(0);let Xe=0,Je=t.width,Z=t.height,j=1,ve=null,Ie=null;const ge=new ct(0,0,Je,Z),Be=new ct(0,0,Je,Z);let At=!1;const ke=new yf;let qe=!1,ut=!1;const Ve=new it,mt=new F,Pt=new ct,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Et(){return ie===null?j:1}let I=i;function zt(x,C){return t.getContext(x,C)}let et,E,g,U,G,X,re,se,q,Q,ae,Ee,ue,oe,we,Pe,Ue,P,ce,J,le,pe,te;try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gc}`),t.addEventListener("webglcontextlost",ft,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",gn,!1),I===null){const C="webgl2";if(I=zt(C,x),I===null)throw zt(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Re()}catch(x){throw t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),Ye("WebGLRenderer: "+x.message),x}function Re(){et=new gS(I),et.init(),le=new oy(I,et),E=new aS(I,et,e,le),g=new sy(I,et),E.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),H=I.createFramebuffer(),L=I.createFramebuffer(),k=I.createFramebuffer(),U=new xS(I),G=new XM,X=new ay(I,et,g,G,E,le,U),re=new mS(D),se=new Mv(I),pe=new rS(I,se),q=new _S(I,se,U,pe),Q=new MS(I,q,se,pe,U),P=new SS(I,E,X),we=new oS(G),ae=new WM(D,re,et,E,pe,we),Ee=new hy(D,G),ue=new ZM,oe=new jM(et),Ue=new iS(D,re,g,Q,_,c),Pe=new ry(D,Q,E),te=new py(I,U,E,g),ce=new sS(I,et,U),J=new vS(I,et,U),U.programs=ae.programs,D.capabilities=E,D.extensions=et,D.properties=G,D.renderLists=ue,D.shadowMap=Pe,D.state=g,D.info=U}S!==hn&&(w=new bS(S,t.width,t.height,o,r,s));const Me=new fy(D,I);this.xr=Me,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const x=et.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=et.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(x){x!==void 0&&(j=x,this.setSize(Je,Z,!1))},this.getSize=function(x){return x.set(Je,Z)},this.setSize=function(x,C,V=!0){if(Me.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}Je=x,Z=C,t.width=Math.floor(x*j),t.height=Math.floor(C*j),V===!0&&(t.style.width=x+"px",t.style.height=C+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,x,C)},this.getDrawingBufferSize=function(x){return x.set(Je*j,Z*j).floor()},this.setDrawingBufferSize=function(x,C,V){Je=x,Z=C,j=V,t.width=Math.floor(x*V),t.height=Math.floor(C*V),this.setViewport(0,0,x,C)},this.setEffects=function(x){if(S===hn){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let C=0;C<x.length;C++)if(x[C].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ne)},this.getViewport=function(x){return x.copy(ge)},this.setViewport=function(x,C,V,O){x.isVector4?ge.set(x.x,x.y,x.z,x.w):ge.set(x,C,V,O),g.viewport(ne.copy(ge).multiplyScalar(j).round())},this.getScissor=function(x){return x.copy(Be)},this.setScissor=function(x,C,V,O){x.isVector4?Be.set(x.x,x.y,x.z,x.w):Be.set(x,C,V,O),g.scissor(Ce.copy(Be).multiplyScalar(j).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(x){g.setScissorTest(At=x)},this.setOpaqueSort=function(x){ve=x},this.setTransparentSort=function(x){Ie=x},this.getClearColor=function(x){return x.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(x=!0,C=!0,V=!0){let O=0;if(x){let z=!1;if(ie!==null){const he=ie.texture.format;z=m.has(he)}if(z){const he=ie.texture.type,_e=p.has(he),de=Ue.getClearColor(),xe=Ue.getClearAlpha(),ye=de.r,Fe=de.g,Ge=de.b;_e?(T[0]=ye,T[1]=Fe,T[2]=Ge,T[3]=xe,I.clearBufferuiv(I.COLOR,0,T)):(A[0]=ye,A[1]=Fe,A[2]=Ge,A[3]=xe,I.clearBufferiv(I.COLOR,0,A))}else O|=I.COLOR_BUFFER_BIT}C&&(O|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(O|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&I.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),B=x},this.dispose=function(){t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),Ue.dispose(),ue.dispose(),oe.dispose(),G.dispose(),re.dispose(),Q.dispose(),pe.dispose(),te.dispose(),ae.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Bc),Me.removeEventListener("sessionend",kc),yi.stop()};function ft(x){x.preventDefault(),El("WebGLRenderer: Context Lost."),N=!0}function Qe(){El("WebGLRenderer: Context Restored."),N=!1;const x=U.autoReset,C=Pe.enabled,V=Pe.autoUpdate,O=Pe.needsUpdate,z=Pe.type;Re(),U.autoReset=x,Pe.enabled=C,Pe.autoUpdate=V,Pe.needsUpdate=O,Pe.type=z}function gn(x){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Dn(x){const C=x.target;C.removeEventListener("dispose",Dn),rd(C)}function rd(x){sd(x),G.remove(x)}function sd(x){const C=G.get(x).programs;C!==void 0&&(C.forEach(function(V){ae.releaseProgram(V)}),x.isShaderMaterial&&ae.releaseShaderCache(x))}this.renderBufferDirect=function(x,C,V,O,z,he){C===null&&(C=Jt);const _e=z.isMesh&&z.matrixWorld.determinantAffine()<0,de=cd(x,C,V,O,z);g.setMaterial(O,_e);let xe=V.index,ye=1;if(O.wireframe===!0){if(xe=q.getWireframeAttribute(V),xe===void 0)return;ye=2}const Fe=V.drawRange,Ge=V.attributes.position;let Se=Fe.start*ye,je=(Fe.start+Fe.count)*ye;he!==null&&(Se=Math.max(Se,he.start*ye),je=Math.min(je,(he.start+he.count)*ye)),xe!==null?(Se=Math.max(Se,0),je=Math.min(je,xe.count)):Ge!=null&&(Se=Math.max(Se,0),je=Math.min(je,Ge.count));const wt=je-Se;if(wt<0||wt===1/0)return;pe.setup(z,O,de,V,xe);let ht,at=ce;if(xe!==null&&(ht=se.get(xe),at=J,at.setIndex(ht)),z.isMesh)O.wireframe===!0?(g.setLineWidth(O.wireframeLinewidth*Et()),at.setMode(I.LINES)):at.setMode(I.TRIANGLES);else if(z.isLine){let Bt=O.linewidth;Bt===void 0&&(Bt=1),g.setLineWidth(Bt*Et()),z.isLineSegments?at.setMode(I.LINES):z.isLineLoop?at.setMode(I.LINE_LOOP):at.setMode(I.LINE_STRIP)}else z.isPoints?at.setMode(I.POINTS):z.isSprite&&at.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(et.get("WEBGL_multi_draw"))at.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Bt=z._multiDrawStarts,me=z._multiDrawCounts,Xt=z._multiDrawCount,$e=xe?se.get(xe).bytesPerElement:1,ln=G.get(O).currentProgram.getUniforms();for(let In=0;In<Xt;In++)ln.setValue(I,"_gl_DrawID",In),at.render(Bt[In]/$e,me[In])}else if(z.isInstancedMesh)at.renderInstances(Se,wt,z.count);else if(V.isInstancedBufferGeometry){const Bt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,me=Math.min(V.instanceCount,Bt);at.renderInstances(Se,wt,me)}else at.render(Se,wt)};function zc(x,C,V,O){B!==null&&x.isNodeMaterial&&B.setObject(O,x),qe===!0&&we.setState(x,V,!1),x.transparent===!0&&x.side===dn&&x.forceSinglePass===!1?(x.side=nn,x.needsUpdate=!0,ls(x,C,O),x.side=zi,x.needsUpdate=!0,ls(x,C,O),x.side=dn):ls(x,C,O)}this.compile=function(x,C,V=null){V===null&&(V=x),B!==null&&B.renderStart(x,C,V),b=oe.get(V),b.init(C),v.push(b),V.traverseVisible(function(z){z.isLight&&z.layers.test(C.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),x!==V&&x.traverseVisible(function(z){z.isLight&&z.layers.test(C.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights(),B!==null&&B.updateLights(b.state.lightsArray),ut=this.localClippingEnabled,qe=we.init(this.clippingPlanes,ut),qe===!0&&we.setGlobalState(this.clippingPlanes,C),B!==null&&Pe.render(b.state.shadowsArray,V,C);const O=new Set;return x.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const he=z.material;if(he)if(Array.isArray(he))for(let _e=0;_e<he.length;_e++){const de=he[_e];zc(de,V,C,z),O.add(de)}else zc(he,V,C,z),O.add(he)}),b=v.pop(),B!==null&&B.renderEnd(),O},this.compileAsync=function(x,C,V=null){const O=this.compile(x,C,V);return new Promise(z=>{function he(){if(O.forEach(function(_e){const xe=G.get(_e).currentProgram;(xe===void 0||xe.isReady())&&O.delete(_e)}),O.size===0){z(x);return}setTimeout(he,10)}et.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let ba=null;function ad(x){ba&&ba(x)}function Bc(){yi.stop()}function kc(){yi.start()}const yi=new Rf;yi.setAnimationLoop(ad),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(x){ba=x,Me.setAnimationLoop(x),x===null?yi.stop():yi.start()},Me.addEventListener("sessionstart",Bc),Me.addEventListener("sessionend",kc),this.render=function(x,C){if(C!==void 0&&C.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;B!==null&&B.renderStart(x,C);const V=Me.enabled===!0&&Me.isPresenting===!0,O=w!==null&&(ie===null||V)&&w.begin(D,ie);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(C),C=Me.getCamera()),x.isScene===!0&&x.onBeforeRender(D,x,C,ie),b=oe.get(x,v.length),b.init(C),b.state.textureUnits=X.getTextureUnits(),v.push(b),Ve.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),ke.setFromProjectionMatrix(Ve,On,C.reversedDepth),ut=this.localClippingEnabled,qe=we.init(this.clippingPlanes,ut),y=ue.get(x,R.length),y.init(),R.push(y),Me.enabled===!0&&Me.isPresenting===!0){const _e=D.xr.getDepthSensingMesh();_e!==null&&Ea(_e,C,-1/0,D.sortObjects)}Ea(x,C,0,D.sortObjects),y.finish(),B!==null&&B.updateLights(b.state.lightsArray),D.sortObjects===!0&&y.sort(ve,Ie),vt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,vt&&Ue.addToRenderList(y,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qe===!0&&we.beginShadows();const z=b.state.shadowsArray;if(Pe.render(z,x,C),qe===!0&&we.endShadows(),(O&&w.hasRenderPass())===!1){const _e=y.opaque,de=y.transmissive;if(b.setupLights(),C.isArrayCamera){const xe=C.cameras;if(de.length>0)for(let ye=0,Fe=xe.length;ye<Fe;ye++){const Ge=xe[ye];Vc(_e,de,x,Ge)}vt&&Ue.render(x);for(let ye=0,Fe=xe.length;ye<Fe;ye++){const Ge=xe[ye];Gc(y,x,Ge,Ge.viewport)}}else de.length>0&&Vc(_e,de,x,C),vt&&Ue.render(x),Gc(y,x,C)}ie!==null&&W===0&&(X.updateMultisampleRenderTarget(ie),X.updateRenderTargetMipmap(ie)),O&&w.end(D),x.isScene===!0&&x.onAfterRender(D,x,C),pe.resetDefaultState(),$=-1,ee=null,v.pop(),v.length>0?(b=v[v.length-1],X.setTextureUnits(b.state.textureUnits),qe===!0&&we.setGlobalState(D.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?y=R[R.length-1]:y=null,B!==null&&B.renderEnd()};function Ea(x,C,V,O){if(x.visible===!1)return;if(x.layers.test(C.layers)){if(x.isGroup)V=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(C);else if(x.isLightProbeGrid)b.pushLightProbeGrid(x);else if(x.isLight)b.pushLight(x),x.castShadow&&b.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(ke)){O&&Pt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ve);const _e=Q.update(x),de=x.material;de.visible&&y.push(x,_e,de,V,Pt.z,null,C)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(ke))){const _e=Q.update(x),de=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Pt.copy(x.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Pt.copy(_e.boundingSphere.center)),Pt.applyMatrix4(x.matrixWorld).applyMatrix4(Ve)),Array.isArray(de)){const xe=_e.groups;for(let ye=0,Fe=xe.length;ye<Fe;ye++){const Ge=xe[ye],Se=de[Ge.materialIndex];Se&&Se.visible&&y.push(x,_e,Se,V,Pt.z,Ge,C)}}else de.visible&&y.push(x,_e,de,V,Pt.z,null,C)}}const he=x.children;for(let _e=0,de=he.length;_e<de;_e++)Ea(he[_e],C,V,O)}function Gc(x,C,V,O){const{opaque:z,transmissive:he,transparent:_e}=x;b.setupLightsView(V),qe===!0&&we.setGlobalState(D.clippingPlanes,V),O&&g.viewport(ne.copy(O)),z.length>0&&cs(z,C,V),he.length>0&&cs(he,C,V),_e.length>0&&cs(_e,C,V),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Vc(x,C,V,O){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[O.id]===void 0){const Se=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[O.id]=new Rn(1,1,{generateMipmaps:!0,type:Se?Gn:hn,minFilter:Ii,samples:Math.max(4,E.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:He.workingColorSpace})}const he=b.state.transmissionRenderTarget[O.id],_e=O.viewport||ne;he.setSize(_e.z*D.transmissionResolutionScale,_e.w*D.transmissionResolutionScale);const de=D.getRenderTarget(),xe=D.getActiveCubeFace(),ye=D.getActiveMipmapLevel();D.setRenderTarget(he),D.getClearColor(lt),Xe=D.getClearAlpha(),Xe<1&&D.setClearColor(16777215,.5),D.clear(),vt&&Ue.render(V);const Fe=D.toneMapping;D.toneMapping=Bn;const Ge=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),b.setupLightsView(O),qe===!0&&we.setGlobalState(D.clippingPlanes,O),cs(x,V,O),X.updateMultisampleRenderTarget(he),X.updateRenderTargetMipmap(he),et.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let je=0,wt=C.length;je<wt;je++){const ht=C[je],{object:at,geometry:Bt,material:me,group:Xt}=ht;if(me.side===dn&&at.layers.test(O.layers)){const $e=me.side;me.side=nn,me.needsUpdate=!0,Hc(at,V,O,Bt,me,Xt),me.side=$e,me.needsUpdate=!0,Se=!0}}Se===!0&&(X.updateMultisampleRenderTarget(he),X.updateRenderTargetMipmap(he))}D.setRenderTarget(de,xe,ye),D.setClearColor(lt,Xe),Ge!==void 0&&(O.viewport=Ge),D.toneMapping=Fe}function cs(x,C,V){const O=C.isScene===!0?C.overrideMaterial:null;for(let z=0,he=x.length;z<he;z++){const _e=x[z],{object:de,geometry:xe,group:ye}=_e;let Fe=_e.material;Fe.allowOverride===!0&&O!==null&&(Fe=O),de.layers.test(V.layers)&&Hc(de,C,V,xe,Fe,ye)}}function Hc(x,C,V,O,z,he){B!==null&&z.isNodeMaterial&&B.setObject(x,z),x.onBeforeRender(D,C,V,O,z,he),x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(D,C,V,O,x,he),z.transparent===!0&&z.side===dn&&z.forceSinglePass===!1?(z.side=nn,z.needsUpdate=!0,D.renderBufferDirect(V,C,O,z,x,he),z.side=zi,z.needsUpdate=!0,D.renderBufferDirect(V,C,O,z,x,he),z.side=dn):D.renderBufferDirect(V,C,O,z,x,he),x.onAfterRender(D,C,V,O,z,he)}function ls(x,C,V){C.isScene!==!0&&(C=Jt);const O=G.get(x),z=b.state.lights,he=b.state.shadowsArray,_e=z.state.version,de=ae.getParameters(x,z.state,he,C,V,b.state.lightProbeGridArray),xe=ae.getProgramCacheKey(de);let ye=O.programs;O.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,O.fog=C.fog;const Fe=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;O.envMap=re.get(x.envMap||O.environment,Fe),O.envMapRotation=O.environment!==null&&x.envMap===null?C.environmentRotation:x.envMapRotation,ye===void 0&&(x.addEventListener("dispose",Dn),ye=new Map,O.programs=ye);let Ge=ye.get(xe);if(Ge!==void 0){if(O.currentProgram===Ge&&O.lightsStateVersion===_e)return Xc(x,de),Ge}else de.uniforms=ae.getUniforms(x),B!==null&&x.isNodeMaterial&&B.build(x,V,de),x.onBeforeCompile(de,D),Ge=ae.acquireProgram(de,xe),ye.set(xe,Ge),O.uniforms=de.uniforms;const Se=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Se.clippingPlanes=we.uniform),Xc(x,de),O.needsLights=ud(x),O.lightsStateVersion=_e,O.needsLights&&(Se.ambientLightColor.value=z.state.ambient,Se.lightProbe.value=z.state.probe,Se.sunLights.value=z.state.sun,Se.sunLightShadows.value=z.state.sunShadow,Se.directionalLights.value=z.state.directional,Se.directionalLightShadows.value=z.state.directionalShadow,Se.spotLights.value=z.state.spot,Se.spotLightShadows.value=z.state.spotShadow,Se.rectAreaLights.value=z.state.rectArea,Se.ltc_1.value=z.state.rectAreaLTC1,Se.ltc_2.value=z.state.rectAreaLTC2,Se.pointLights.value=z.state.point,Se.pointLightShadows.value=z.state.pointShadow,Se.hemisphereLights.value=z.state.hemi,Se.sunShadowMatrix.value=z.state.sunShadowMatrix,Se.sunShadowCascade.value=z.state.sunShadowCascade,Se.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Se.spotLightMatrix.value=z.state.spotLightMatrix,Se.spotLightMap.value=z.state.spotLightMap,Se.pointShadowMatrix.value=z.state.pointShadowMatrix),O.lightProbeGrid=b.state.lightProbeGridArray.length>0,O.currentProgram=Ge,O.uniformsList=null,Ge}function Wc(x){if(x.uniformsList===null){const C=x.currentProgram.getUniforms();x.uniformsList=$s.seqWithValue(C.seq,x.uniforms)}return x.uniformsList}function Xc(x,C){const V=G.get(x);V.outputColorSpace=C.outputColorSpace,V.batching=C.batching,V.batchingColor=C.batchingColor,V.instancing=C.instancing,V.instancingColor=C.instancingColor,V.instancingMorph=C.instancingMorph,V.skinning=C.skinning,V.morphTargets=C.morphTargets,V.morphNormals=C.morphNormals,V.morphColors=C.morphColors,V.morphTargetsCount=C.morphTargetsCount,V.numClippingPlanes=C.numClippingPlanes,V.numIntersection=C.numClipIntersection,V.vertexAlphas=C.vertexAlphas,V.vertexTangents=C.vertexTangents,V.toneMapping=C.toneMapping}function od(x,C){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;M.setFromMatrixPosition(C.matrixWorld);for(let V=0,O=x.length;V<O;V++){const z=x[V];if(z.texture!==null&&z.boundingBox.containsPoint(M))return z}return null}function cd(x,C,V,O,z){C.isScene!==!0&&(C=Jt),X.resetTextureUnits();const he=C.fog,_e=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?C.environment:null,de=ie===null?D.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:He.workingColorSpace,xe=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,ye=re.get(O.envMap||_e,xe),Fe=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ge=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Se=!!V.morphAttributes.position,je=!!V.morphAttributes.normal,wt=!!V.morphAttributes.color;let ht=Bn;O.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ht=D.toneMapping);const at=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Bt=at!==void 0?at.length:0,me=G.get(O),Xt=b.state.lights;if(qe===!0&&(ut===!0||x!==ee)){const dt=x===ee&&O.id===$;we.setState(O,x,dt)}let $e=!1;O.version===me.__version?(me.needsLights&&me.lightsStateVersion!==Xt.state.version||me.outputColorSpace!==de||z.isBatchedMesh&&me.batching===!1||!z.isBatchedMesh&&me.batching===!0||z.isBatchedMesh&&me.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&me.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&me.instancing===!1||!z.isInstancedMesh&&me.instancing===!0||z.isSkinnedMesh&&me.skinning===!1||!z.isSkinnedMesh&&me.skinning===!0||z.isInstancedMesh&&me.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&me.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&me.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&me.instancingMorph===!1&&z.morphTexture!==null||me.envMap!==ye||O.fog===!0&&me.fog!==he||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==we.numPlanes||me.numIntersection!==we.numIntersection)||me.vertexAlphas!==Fe||me.vertexTangents!==Ge||me.morphTargets!==Se||me.morphNormals!==je||me.morphColors!==wt||me.toneMapping!==ht||me.morphTargetsCount!==Bt||!!me.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&($e=!0):($e=!0,me.__version=O.version);let ln=me.currentProgram;$e===!0&&(ln=ls(O,C,z),B&&O.isNodeMaterial&&B.onUpdateProgram(O,ln,me));let In=!1,ni=!1,Xi=!1;const st=ln.getUniforms(),yt=me.uniforms;if(g.useProgram(ln.program)&&(In=!0,ni=!0,Xi=!0),O.id!==$&&($=O.id,ni=!0),me.needsLights){const dt=od(b.state.lightProbeGridArray,z);me.lightProbeGrid!==dt&&(me.lightProbeGrid=dt,ni=!0)}if(In||ee!==x){g.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),st.setValue(I,"projectionMatrix",x.projectionMatrix),st.setValue(I,"viewMatrix",x.matrixWorldInverse);const ri=st.map.cameraPosition;ri!==void 0&&ri.setValue(I,mt.setFromMatrixPosition(x.matrixWorld)),E.logarithmicDepthBuffer&&st.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&st.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),ee!==x&&(ee=x,ni=!0,Xi=!0)}if(me.needsLights&&(Xt.state.sunShadowMap.length>0&&st.setValue(I,"sunShadowMap",Xt.state.sunShadowMap,X),Xt.state.directionalShadowMap.length>0&&st.setValue(I,"directionalShadowMap",Xt.state.directionalShadowMap,X),Xt.state.spotShadowMap.length>0&&st.setValue(I,"spotShadowMap",Xt.state.spotShadowMap,X),Xt.state.pointShadowMap.length>0&&st.setValue(I,"pointShadowMap",Xt.state.pointShadowMap,X)),z.isSkinnedMesh){st.setOptional(I,z,"bindMatrix"),st.setOptional(I,z,"bindMatrixInverse");const dt=z.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),st.setValue(I,"boneTexture",dt.boneTexture,X))}z.isBatchedMesh&&(st.setOptional(I,z,"batchingTexture"),st.setValue(I,"batchingTexture",z._matricesTexture,X),st.setOptional(I,z,"batchingIdTexture"),st.setValue(I,"batchingIdTexture",z._indirectTexture,X),st.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&st.setValue(I,"batchingColorTexture",z._colorsTexture,X));const ii=V.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&P.update(z,V,ln),(ni||me.receiveShadow!==z.receiveShadow)&&(me.receiveShadow=z.receiveShadow,st.setValue(I,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&C.environment!==null&&(yt.envMapIntensity.value=C.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=gy()),ni){if(st.setValue(I,"toneMappingExposure",D.toneMappingExposure),me.needsLights&&ld(yt,Xi),he&&O.fog===!0&&Ee.refreshFogUniforms(yt,he),Ee.refreshMaterialUniforms(yt,O,j,Z,b.state.transmissionRenderTarget[x.id]),me.needsLights&&me.lightProbeGrid){const dt=me.lightProbeGrid;yt.probesSH.value=dt.texture,yt.probesMin.value.copy(dt.boundingBox.min),yt.probesMax.value.copy(dt.boundingBox.max),yt.probesResolution.value.copy(dt.resolution)}$s.upload(I,Wc(me),yt,X)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&($s.upload(I,Wc(me),yt,X),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&st.setValue(I,"center",z.center),st.setValue(I,"modelViewMatrix",z.modelViewMatrix),st.setValue(I,"normalMatrix",z.normalMatrix),st.setValue(I,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){const dt=O.uniformsGroups;for(let ri=0,$i=dt.length;ri<$i;ri++){const Zc=dt[ri];te.update(Zc,ln),te.bind(Zc,ln)}}return ln}function ld(x,C){x.ambientLightColor.needsUpdate=C,x.lightProbe.needsUpdate=C,x.sunLights.needsUpdate=C,x.sunLightShadows.needsUpdate=C,x.directionalLights.needsUpdate=C,x.directionalLightShadows.needsUpdate=C,x.pointLights.needsUpdate=C,x.pointLightShadows.needsUpdate=C,x.spotLights.needsUpdate=C,x.spotLightShadows.needsUpdate=C,x.rectAreaLights.needsUpdate=C,x.hemisphereLights.needsUpdate=C}function ud(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(x,C,V){const O=G.get(x);O.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),G.get(x.texture).__webglTexture=C,G.get(x.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:V,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,C){const V=G.get(x);V.__webglFramebuffer=C,V.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(x,C=0,V=0){ie=x,Y=C,W=V;let O=null,z=!1,he=!1;if(x){const de=G.get(x);if(de.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(I.FRAMEBUFFER,de.__webglFramebuffer),ne.copy(x.viewport),Ce.copy(x.scissor),Ae=x.scissorTest,g.viewport(ne),g.scissor(Ce),g.setScissorTest(Ae),$=-1;return}else if(de.__webglFramebuffer===void 0)X.setupRenderTarget(x);else if(de.__hasExternalTextures)X.rebindTextures(x,G.get(x.texture).__webglTexture,G.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Fe=x.depthTexture;if(de.__boundDepthTexture!==Fe){if(Fe!==null&&G.has(Fe)&&(x.width!==Fe.image.width||x.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(x)}}const xe=x.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(he=!0);const ye=G.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(ye[C])?O=ye[C][V]:O=ye[C],z=!0):x.samples>0&&X.useMultisampledRTT(x)===!1?O=G.get(x).__webglMultisampledFramebuffer:Array.isArray(ye)?O=ye[V]:O=ye,ne.copy(x.viewport),Ce.copy(x.scissor),Ae=x.scissorTest}else ne.copy(ge).multiplyScalar(j).floor(),Ce.copy(Be).multiplyScalar(j).floor(),Ae=At;if(V!==0&&(O=H),g.bindFramebuffer(I.FRAMEBUFFER,O)&&g.drawBuffers(x,O),g.viewport(ne),g.scissor(Ce),g.setScissorTest(Ae),z){const de=G.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+C,de.__webglTexture,V)}else if(he){const de=C;for(let xe=0;xe<x.textures.length;xe++){const ye=G.get(x.textures[xe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+xe,ye.__webglTexture,V,de)}}else if(x!==null&&V!==0){const de=G.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,de.__webglTexture,V)}$=-1};function $c(x){const C=G.get(x);return(C.__readFormat!==x.format||C.__readType!==x.type)&&(C.__readFormat=x.format,C.__readType=x.type,C.__formatReadable=E.textureFormatReadable(x.format),C.__typeReadable=E.textureTypeReadable(x.type)),C}this.readRenderTargetPixels=function(x,C,V,O,z,he,_e,de=0){if(!(x&&x.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_e!==void 0&&(xe=xe[_e]),xe){g.bindFramebuffer(I.FRAMEBUFFER,xe);try{const ye=x.textures[de],Fe=ye.format,Ge=ye.type;x.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+de);const Se=$c(ye);if(Se.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=x.width-O&&V>=0&&V<=x.height-z&&I.readPixels(C,V,O,z,le.convert(Fe),le.convert(Ge),he)}finally{const ye=ie!==null?G.get(ie).__webglFramebuffer:null;g.bindFramebuffer(I.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(x,C,V,O,z,he,_e,de=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_e!==void 0&&(xe=xe[_e]),xe)if(C>=0&&C<=x.width-O&&V>=0&&V<=x.height-z){g.bindFramebuffer(I.FRAMEBUFFER,xe);const ye=x.textures[de],Fe=ye.format,Ge=ye.type;x.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+de);const Se=$c(ye);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,je),I.bufferData(I.PIXEL_PACK_BUFFER,he.byteLength,I.STREAM_READ),I.readPixels(C,V,O,z,le.convert(Fe),le.convert(Ge),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const wt=ie!==null?G.get(ie).__webglFramebuffer:null;g.bindFramebuffer(I.FRAMEBUFFER,wt);const ht=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await U_(I,ht,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,je),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,he),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(je),I.deleteSync(ht),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,C=null,V=0){const O=Math.pow(2,-V),z=Math.floor(x.image.width*O),he=Math.floor(x.image.height*O),_e=C!==null?C.x:0,de=C!==null?C.y:0;X.setTexture2D(x,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,_e,de,z,he),g.unbindTexture()},this.copyTextureToTexture=function(x,C,V=null,O=null,z=0,he=0){let _e,de,xe,ye,Fe,Ge,Se,je,wt;const ht=x.isCompressedTexture?x.mipmaps[he]:x.image;if(V!==null)_e=V.max.x-V.min.x,de=V.max.y-V.min.y,xe=V.isBox3?V.max.z-V.min.z:1,ye=V.min.x,Fe=V.min.y,Ge=V.isBox3?V.min.z:0;else{const yt=Math.pow(2,-z);_e=Math.floor(ht.width*yt),de=Math.floor(ht.height*yt),x.isDataArrayTexture?xe=ht.depth:x.isData3DTexture?xe=Math.floor(ht.depth*yt):xe=1,ye=0,Fe=0,Ge=0}O!==null?(Se=O.x,je=O.y,wt=O.z):(Se=0,je=0,wt=0);const at=le.convert(C.format),Bt=le.convert(C.type);let me;C.isData3DTexture?(X.setTexture3D(C,0),me=I.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(X.setTexture2DArray(C,0),me=I.TEXTURE_2D_ARRAY):(X.setTexture2D(C,0),me=I.TEXTURE_2D),g.activeTexture(I.TEXTURE0),g.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,C.flipY),g.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),g.pixelStorei(I.UNPACK_ALIGNMENT,C.unpackAlignment);const Xt=g.getParameter(I.UNPACK_ROW_LENGTH),$e=g.getParameter(I.UNPACK_IMAGE_HEIGHT),ln=g.getParameter(I.UNPACK_SKIP_PIXELS),In=g.getParameter(I.UNPACK_SKIP_ROWS),ni=g.getParameter(I.UNPACK_SKIP_IMAGES);g.pixelStorei(I.UNPACK_ROW_LENGTH,ht.width),g.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht.height),g.pixelStorei(I.UNPACK_SKIP_PIXELS,ye),g.pixelStorei(I.UNPACK_SKIP_ROWS,Fe),g.pixelStorei(I.UNPACK_SKIP_IMAGES,Ge);const Xi=x.isDataArrayTexture||x.isData3DTexture,st=C.isDataArrayTexture||C.isData3DTexture;if(x.isDepthTexture){const yt=G.get(x),ii=G.get(C),dt=G.get(yt.__renderTarget),ri=G.get(ii.__renderTarget);g.bindFramebuffer(I.READ_FRAMEBUFFER,dt.__webglFramebuffer),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let $i=0;$i<xe;$i++)Xi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(x).__webglTexture,z,Ge+$i),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(C).__webglTexture,he,wt+$i)),I.blitFramebuffer(ye,Fe,_e,de,Se,je,_e,de,I.DEPTH_BUFFER_BIT,I.NEAREST);g.bindFramebuffer(I.READ_FRAMEBUFFER,null),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||x.isRenderTargetTexture||G.has(x)){const yt=G.get(x),ii=G.get(C);g.bindFramebuffer(I.READ_FRAMEBUFFER,L),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,k);for(let dt=0;dt<xe;dt++)Xi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.__webglTexture,z,Ge+dt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,yt.__webglTexture,z),st?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ii.__webglTexture,he,wt+dt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ii.__webglTexture,he),z!==0?I.blitFramebuffer(ye,Fe,_e,de,Se,je,_e,de,I.COLOR_BUFFER_BIT,I.NEAREST):st?I.copyTexSubImage3D(me,he,Se,je,wt+dt,ye,Fe,_e,de):I.copyTexSubImage2D(me,he,Se,je,ye,Fe,_e,de);g.bindFramebuffer(I.READ_FRAMEBUFFER,null),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else st?x.isDataTexture||x.isData3DTexture?I.texSubImage3D(me,he,Se,je,wt,_e,de,xe,at,Bt,ht.data):C.isCompressedArrayTexture?I.compressedTexSubImage3D(me,he,Se,je,wt,_e,de,xe,at,ht.data):I.texSubImage3D(me,he,Se,je,wt,_e,de,xe,at,Bt,ht):x.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,he,Se,je,_e,de,at,Bt,ht.data):x.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,he,Se,je,ht.width,ht.height,at,ht.data):I.texSubImage2D(I.TEXTURE_2D,he,Se,je,_e,de,at,Bt,ht);g.pixelStorei(I.UNPACK_ROW_LENGTH,Xt),g.pixelStorei(I.UNPACK_IMAGE_HEIGHT,$e),g.pixelStorei(I.UNPACK_SKIP_PIXELS,ln),g.pixelStorei(I.UNPACK_SKIP_ROWS,In),g.pixelStorei(I.UNPACK_SKIP_IMAGES,ni),he===0&&C.generateMipmaps&&I.generateMipmap(me),g.unbindTexture()},this.initRenderTarget=function(x){G.get(x).__webglFramebuffer===void 0&&X.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?X.setTextureCube(x,0):x.isData3DTexture?X.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?X.setTexture2DArray(x,0):X.setTexture2D(x,0),g.unbindTexture()},this.resetState=function(){Y=0,W=0,ie=null,g.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}}const ar=Yn([Ne().finite(),Ne().finite(),Ne().finite()]),qn=Yn([Ne().int().min(0).max(255),Ne().int().min(0).max(255),Ne().int().min(0).max(255),Ne().int().min(0).max(255)]),Sn=Ne().int().nonnegative(),mu=ot(Ne().finite()).length(16),vy=Lt({background:qn,grid:qn,surface:qn,bars:qn,wireframe:qn,stroke:qn,points:qn,text:qn,line_width:Ne().nonnegative(),grid_width:Ne().nonnegative(),axis_width:Ne().nonnegative(),point_radius:Ne().nonnegative(),arrow_length:Ne().nonnegative(),arrow_width:Ne().nonnegative()}),Ff=Lt({dimension:mc([Ui(2),Ui(3)]),title:mi(),style:vy,vertices:ot(Lt({position:ar})).max(1e5),points:ot(Sn).max(1e5),triangles:ot(Yn([Sn,Sn,Sn])).max(2e5),cells:ot(Oi()).max(1e3),show_grid:Zn(),show_axes:Zn(),show_axis_arrows:Zn(),axes:ot(Lt({label:mi(),unit:mi(),color:qn,begin:ar,end:ar,ticks:ot(Lt({value:Ne().finite(),position:ar})).max(1e3)})).max(3),rendering:Lt({version:Ui(1),host_background:Zn().default(!1),host_axis_colors:Yn([Zn(),Zn(),Zn()]).default([!1,!1,!1]),canvas_size:Yn([Ne().min(64).max(4096),Ne().min(64).max(4096)]).default([1e3,700]),view_matrix:mu,projection_matrix:mu,viewport:Yn([Ne(),Ne(),Ne().positive(),Ne().positive()]),segment_indices:ot(Yn([Sn,Sn])).max(2e5),grid_lines:ot(Lt({origin:ar,direction:ar})).max(1e3),surface:Lt({wireframe_indices:ot(Yn([Sn,Sn])).max(3e5),levels:ot(Lt({triangles:ot(Yn([Sn,Sn,Sn])).max(2e5),max_error_world:Ne().finite().nonnegative()})).max(16),lod_enabled:Zn(),max_error_pixels:Ne().finite().positive().max(20)}).optional()})}),xy=`
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
}`;function or(n){return new Ze(`rgb(${n[0]},${n[1]},${n[2]})`)}class Of{constructor(e,t){this.canvas=e,this.labels=t;const i=t.getContext("2d");if(!i)throw new Error("Canvas labels unavailable");this.ink=i,this.renderer=new _y({canvas:e,antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(1e3,700,!1),this.renderer.setPixelRatio(1),t.width=1e3,t.height=700,this.camera.matrixAutoUpdate=!1,this.scene.add(this.root),e.dataset.renderer="webgl2",this.resize_observer=new ResizeObserver(()=>{this.resize()}),this.resize_observer.observe(e)}canvas;renderer;scene=new J_;root=new Hr;camera=new Cc;ink;data;base;labels;frames=0;times=[];disposed=!1;dark=!1;pixel_scale=1;buffer_width=1e3;buffer_height=700;resize_observer;axis_lines=[];surface_geometry;levels=[];current_level=-1;line_updates=[];surface_bounds=new Ar;axis_tint(e){const t=this.data,i=t.axes[e].color;if(t.dimension===2&&t.rendering.host_axis_colors[e]){const r=this.dark?255:0;return[r,r,r,i[3]]}return i}set_theme(e){this.dark=e;for(const[t,i]of this.axis_lines.entries())if(i){const r=or(this.axis_tint(t)),s=i.material.uniforms.tint.value;s.set(r.r,r.g,r.b,s.w)}this.draw()}resize(){const e=this.canvas.getBoundingClientRect().width;if(this.disposed||e<=0)return;const t=this.buffer_width/e,i=t/this.pixel_scale;this.pixel_scale=t,this.root.traverse(r=>{if(!(r instanceof en||r instanceof eo))return;const s=Array.isArray(r.material)?r.material:[r.material];for(const a of s)if(a instanceof tn)for(const o of["line_width","size"])a.uniforms[o]&&(a.uniforms[o].value*=i)}),this.canvas.dataset.pixelScale=String(t),this.draw()}clear(){this.root.traverse(e=>{if(e instanceof en||e instanceof cv||e instanceof eo){e.geometry.dispose();const t=Array.isArray(e.material)?e.material:[e.material];for(const i of t)i.dispose()}}),this.root.clear(),this.axis_lines=[],this.surface_geometry=void 0,this.levels=[],this.current_level=-1,this.line_updates=[]}lines(e,t,i,r=!1){if(!e.length||!t[3]||!i)return;const s=e.length/6,a=new Float32Array(s*4*4),o=new Uint32Array(s*6);for(let M=0;M<s;++M)o.set([M*4,M*4+1,M*4+2,M*4+2,M*4+3,M*4],M*6);const c=new qt,l=new Cn(a,4).setUsage(Ml);c.setAttribute("clip_position",l),c.setIndex(new Cn(o,1));const f=or(t),d=new tn({vertexShader:"attribute vec4 clip_position; void main() { gl_Position = clip_position; }",fragmentShader:`uniform vec4 tint; void main() { gl_FragColor = tint;
				#include <colorspace_fragment>
			}`,uniforms:{tint:{value:new ct(f.r,f.g,f.b,t[3]/255)},line_width:{value:i*this.pixel_scale}},transparent:r||t[3]<255,depthWrite:!1,depthTest:!r,side:dn}),u=new en(c,d);u.renderOrder=r?10:0,u.frustumCulled=!1,this.root.add(u);const h=new it,_=new it,S=new ct,m=new ct,[,,p,T]=this.data.rendering.viewport;let A=NaN;return this.line_updates.push(()=>{h.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse).multiply(this.root.matrix);const M=d.uniforms.line_width.value;if(!(h.equals(_)&&M===A)){_.copy(h),A=M;for(let y=0;y<s;++y){const b=y*6;S.set(e[b],e[b+1],e[b+2],1).applyMatrix4(h),m.set(e[b+3],e[b+4],e[b+5],1).applyMatrix4(h);const R=S.z+S.w,v=m.z+m.w;if(R<0&&v<0){a.fill(0,y*16,(y+1)*16);continue}R<0?S.lerp(m,R/(R-v)):v<0&&m.lerp(S,v/(v-R));const w=(m.x/m.w-S.x/S.w)*p,D=(m.y/m.w-S.y/S.w)*T,N=Math.hypot(w,D);if(N<=1e-10||!Number.isFinite(N)){a.fill(0,y*16,(y+1)*16);continue}const B=-D*M/(N*p),H=w*M/(N*T);for(let L=0;L<4;++L){const k=L<2?S:m,Y=L===0||L===3?-1:1,W=y*16+L*4;a[W]=k.x+B*Y*k.w,a[W+1]=k.y+H*Y*k.w,a[W+2]=k.z,a[W+3]=k.w}}l.needsUpdate=!0}}),u}load(e,t){const i=e.vertices.length,r=e.rendering.surface?.levels.flatMap(d=>d.triangles.flat())??[];for(const d of[...e.triangles.flat(),...e.rendering.segment_indices.flat(),...e.points,...e.rendering.surface?.wireframe_indices.flat()??[],...r])if(d>=i)throw new Error("Scene index exceeds vertex count");this.clear(),this.data=e,this.canvas.dataset.gridLines=String(e.rendering.grid_lines.length),[this.buffer_width,this.buffer_height]=e.rendering.canvas_size,this.renderer.setSize(this.buffer_width,this.buffer_height,!1),this.labels.width=this.buffer_width,this.labels.height=this.buffer_height,this.pixel_scale=this.buffer_width/Math.max(1,this.canvas.getBoundingClientRect().width),this.canvas.title=e.axes.map(d=>d.label+(d.unit?` (${d.unit})`:"")).join(" · "),this.base=structuredClone(t),this.root.matrixAutoUpdate=!1,this.root.matrix.identity(),this.camera.matrixWorld.fromArray(e.rendering.view_matrix).transpose().invert(),this.camera.matrix.copy(this.camera.matrixWorld),this.camera.matrixWorldInverse.copy(this.camera.matrixWorld).invert(),this.camera.projectionMatrix.fromArray(e.rendering.projection_matrix).transpose();const s=new it().set(1,0,0,0,0,1,0,0,0,0,2,-1,0,0,0,1);this.camera.projectionMatrix.premultiply(s),this.camera.projectionMatrixInverse.copy(this.camera.projectionMatrix).invert();const a=e.vertices.flatMap(d=>d.position),o=e.cells.length?e.style.bars:e.style.surface;if(e.triangles.length&&o[3]){const d=new qt;d.setAttribute("position",new Ht(a,3)),d.setIndex(new Tc(e.triangles.flat(),1).setUsage(Ml)),this.surface_geometry=d,d.computeBoundingBox(),this.surface_bounds.copy(d.boundingBox),this.levels=[{indices:new Uint32Array(e.triangles.flat()),error:0}];for(const h of e.rendering.surface?.lod_enabled?e.rendering.surface.levels:[])this.levels.push({indices:new Uint32Array(h.triangles.flat()),error:h.max_error_world});const u=new Rc({color:or(o),opacity:o[3]/255,transparent:o[3]<255,side:dn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,forceSinglePass:!0});this.root.add(new en(d,u))}const c=[];if(!e.cells.length&&e.rendering.surface)for(const[d,u]of e.rendering.surface.wireframe_indices)c.push(...e.vertices[d].position,...e.vertices[u].position);const l=this.lines(c,e.style.wireframe,1);l&&(l.material.transparent=!0,l.renderOrder=1),this.canvas.dataset.wireSegments=String(c.length/6),this.canvas.dataset.sourceTriangles=String(e.triangles.length);const f=[];for(const[d,u]of e.rendering.segment_indices)f.push(...e.vertices[d].position,...e.vertices[u].position);if(this.lines(f,e.style.stroke,e.style.line_width),e.points.length&&e.style.points[3]&&e.style.point_radius){const d=new qt;d.setAttribute("position",new Ht(e.points.flatMap(_=>e.vertices[_].position),3));const u=or(e.style.points),h=new tn({vertexShader:`uniform float size; void main() {
					gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_PointSize = size;
				}`,fragmentShader:`uniform vec4 tint; void main() {
					if (length(gl_PointCoord - vec2(.5)) > .5) discard;
					gl_FragColor = tint;
					#include <colorspace_fragment>
				}`,uniforms:{tint:{value:new ct(u.r,u.g,u.b,e.style.points[3]/255)},size:{value:e.style.point_radius*2*this.pixel_scale}},transparent:!0});this.root.add(new eo(d,h))}if(e.show_grid&&e.style.grid[3]&&e.style.grid_width){const d=[],u=[],h=[],_=[];for(const A of e.rendering.grid_lines){for(let M=0;M<6;++M)d.push(...A.origin),u.push(...A.direction);h.push(0,0,1,1,1,0),_.push(-1,1,1,1,-1,-1)}const S=new qt;S.setAttribute("position",new Ht(d,3)),S.setAttribute("direction",new Ht(u,3)),S.setAttribute("edge",new Ht(h,1)),S.setAttribute("side",new Ht(_,1));const m=or(e.style.grid),p=new tn({vertexShader:xy,fragmentShader:`uniform vec4 tint; void main() { gl_FragColor = tint;
					#include <colorspace_fragment>
				}`,uniforms:{tint:{value:new ct(m.r,m.g,m.b,e.style.grid[3]/255)},line_width:{value:e.style.grid_width*this.pixel_scale},resolution:{value:new Ke(e.rendering.viewport[2],e.rendering.viewport[3])}},transparent:!0,depthWrite:!1,side:dn}),T=new en(S,p);T.renderOrder=-10,T.frustumCulled=!1,this.root.add(T)}if(e.show_axes)for(const[d,u]of e.axes.entries())this.axis_lines.push(this.lines([...u.begin,...u.end],this.axis_tint(d),e.style.axis_width,!0));this.renderer.setClearColor(or(e.style.background),e.rendering.host_background?0:e.style.background[3]/255),this.draw()}preview(e){if(!this.base)return;const t=this.base;if(e.dimension===3){const i=e.camera,r=new F().fromArray(i.target);this.camera.matrix.lookAt(new F().fromArray(i.eye),r,new F().fromArray(i.up)),this.camera.matrix.setPosition(new F().fromArray(i.eye)),this.camera.matrixWorld.copy(this.camera.matrix),this.camera.matrixWorldInverse.copy(this.camera.matrixWorld).invert();const s=i.projection==="orthographic"?t.camera.orthographic_width/i.orthographic_width:1;this.root.matrix.makeTranslation(...r.toArray()),this.root.matrix.scale(new F(s,s,s)),this.root.matrix.multiply(new it().makeTranslation(...r.negate().toArray()))}else{const i=new F((t.view.lower[0]+t.view.upper[0])/2,(t.view.lower[1]+t.view.upper[1])/2,0),r=new F((e.view.lower[0]+e.view.upper[0])/2,(e.view.lower[1]+e.view.upper[1])/2,0),s=(t.view.upper[0]-t.view.lower[0])/(e.view.upper[0]-e.view.lower[0]);this.root.matrix.makeTranslation(...i.toArray()),this.root.matrix.scale(new F(s,s,1)),this.root.matrix.multiply(new it().makeTranslation(...r.negate().toArray()))}}pan_offset(e,t,i){const r=new F().fromArray(i).project(this.camera),s=r.clone().unproject(this.camera);return new F(r.x-e*2*this.buffer_width/this.data.rendering.viewport[2],r.y+t*2*this.buffer_height/this.data.rendering.viewport[3],r.z).unproject(this.camera).sub(s).toArray()}select_detail(){if(!this.surface_geometry||!this.data)return;const e=new it().multiplyMatrices(this.camera.matrixWorldInverse,this.root.matrix),t=this.camera.projectionMatrix.elements,[,,i,r]=this.data.rendering.viewport,s=Math.abs(t[0])*i/(2*this.pixel_scale),a=Math.abs(t[5])*r/(2*this.pixel_scale),o=new F().setFromMatrixColumn(this.root.matrix,0).length(),c=this.surface_bounds.clone().applyMatrix4(e),l=-c.max.z,f=t[15]===0,d=f?t[14]/(t[10]-1):0,u=this.data.rendering.surface?.max_error_pixels??1;let h=0,_=0;for(let S=1;S<this.levels.length;++S){const m=this.levels[S].error*o;let p=m*Math.hypot(s,a);if(f){if(l-m<=d)continue;const T=Math.max(Math.abs(c.min.x),Math.abs(c.max.x)),A=Math.max(Math.abs(c.min.y),Math.abs(c.max.y));p=m*Math.hypot(s*(1+T/l),a*(1+A/l))/(l-m)}p<=u&&(h=S,_=p)}if(h!==this.current_level){const S=this.surface_geometry.getIndex();S.array.set(this.levels[h].indices),S.needsUpdate=!0,this.surface_geometry.setDrawRange(0,this.levels[h].indices.length),this.current_level=h}this.canvas.dataset.lodLevel=String(h),this.canvas.dataset.renderTriangles=String(this.levels[h].indices.length/3),this.canvas.dataset.lodErrorPixels=String(_)}draw(){if(!this.data||this.disposed)return;const e=performance.now();this.select_detail();for(const a of this.line_updates)a();const[t,i,r,s]=this.data.rendering.viewport;for(this.renderer.setViewport(0,0,this.buffer_width,this.buffer_height),this.renderer.clear(),this.renderer.setViewport(t,this.buffer_height-i-s,r,s),this.renderer.setScissor(t,this.buffer_height-i-s,r,s),this.renderer.setScissorTest(!0),this.renderer.autoClear=!1,this.renderer.render(this.scene,this.camera),this.renderer.setScissorTest(!1),this.draw_labels(),++this.frames,this.times.push(e);this.times.length>2&&this.times[0]<e-1e3;)this.times.shift();this.canvas.dataset.frames=String(this.frames),this.canvas.dataset.fps=String((this.times.length-1)*1e3/Math.max(1,e-this.times[0])),this.canvas.dataset.drawMs=String(performance.now()-e)}draw_labels(){if(!this.data)return;const e=this.data,t=this.ink,[i,r,s,a]=e.rendering.viewport,o=this.pixel_scale,c=13*o,l=3*o,f=[];t.clearRect(0,0,this.buffer_width,this.buffer_height),t.font=`${c}px ${getComputedStyle(this.canvas).fontFamily||"system-ui"}`,t.textBaseline="top",t.save(),t.beginPath(),t.rect(i,r,s,a),t.clip();const d=T=>new F().fromArray(T).applyMatrix4(this.root.matrix).project(this.camera),[u,h,_,S]=e.style.background,m=e.rendering.host_background?getComputedStyle(this.canvas.parentElement).backgroundColor:`rgba(${u},${h},${_},${S/255})`,p=(T,A,M,y)=>{if(!T||!y[3])return;const b=s-l*2;if(t.measureText(T).width>b){const w=Array.from(T);let D=0,N=w.length;for(;D<N;){const B=Math.ceil((D+N)/2);t.measureText(w.slice(0,B).join("")+"…").width<=b?D=B:N=B-1}T=w.slice(0,D).join("")+"…"}const R=t.measureText(T).width,v={x:Math.max(i+l,Math.min(i+s-R-l,A)),y:Math.max(r+l,Math.min(r+a-c*1.25-l,M)),width:R,height:c*1.25};f.some(w=>v.x<w.x+w.width+l&&w.x<v.x+v.width+l&&v.y<w.y+w.height+l&&w.y<v.y+v.height+l)||(f.push(v),t.save(),t.globalAlpha=y[3]/255,t.strokeStyle=m,t.lineWidth=3*o,t.lineJoin="round",t.strokeText(T,v.x,v.y),t.fillStyle=`rgb(${y[0]},${y[1]},${y[2]})`,t.fillText(T,v.x,v.y),t.restore())};if(e.show_axes)for(const[T,A]of e.axes.entries()){const M=this.axis_tint(T);t.fillStyle=`rgba(${M[0]},${M[1]},${M[2]},${M[3]/255})`;const y=d(A.end);if(Math.abs(y.x)<=1&&Math.abs(y.y)<=1&&Math.abs(y.z)<=1){const b=i+(y.x+1)*s/2,R=r+(1-y.y)*a/2;if(p(A.label+(A.unit?` (${A.unit})`:""),b+5*o,R+5*o,M),e.show_axis_arrows){const v=d(A.begin),w=Math.atan2(-(y.y-v.y)*a,(y.x-v.x)*s);t.save(),t.translate(b,R),t.rotate(w),t.beginPath(),t.moveTo(0,0),t.lineTo(-e.style.arrow_length*o,-e.style.arrow_width*o/2),t.lineTo(-e.style.arrow_length*o,e.style.arrow_width*o/2),t.closePath(),t.fill(),t.restore()}}}if(e.show_axes)for(const[T,A]of e.axes.entries())for(const M of A.ticks){const y=d(M.position);Math.abs(y.x)>1||Math.abs(y.y)>1||Math.abs(y.z)>1||p(Number(M.value.toPrecision(3)).toString(),i+(y.x+1)*s/2+3*o,r+(1-y.y)*a/2+8*o,this.axis_tint(T))}t.restore()}dispose(){this.disposed=!0,this.resize_observer.disconnect(),this.clear(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.ink.clearRect(0,0,this.labels.width,this.labels.height)}}const zr=Array.from({length:80},(n,e)=>[e/8-5,Math.sin(e/8)*2,Math.cos(e/8)*2,e%7+1]),zf=[];for(let n=0;n<9;++n)for(let e=0;e<9;++e)zf.push([e-4,n-4,((e-4)**2-(n-4)**2)/8]);const Pc=[{name:"3D 함수 · 파동",spec:{kind:"function",dimension_count:2,expression:"sin(x)*cos(y)",sampling:{axes:[{variable:0,lower:-5,upper:5,count:81},{variable:1,lower:-5,upper:5,count:81}],fixed:[null,null]},invalid_values:"skip"}},{name:"2D 함수 · sin",spec:{kind:"function",dimension_count:1,expression:"sin(x)",sampling:{axes:[{variable:0,lower:-8,upper:8,count:401}],fixed:[null]}}},{name:"ND 함수 · 고정 변수",spec:{kind:"function",dimension_count:4,expression:"sin(x0*x2)+cos(x1)+x3",sampling:{axes:[{variable:0,lower:-4,upper:4,count:71},{variable:1,lower:-4,upper:4,count:71}],fixed:[null,null,2,.5]}}},{name:"2D 데이터 · 점",spec:{kind:"dataset",dimension_count:4,rows:zr,columns:[0,1],plot:"points"}},{name:"3D 데이터 · 곡선",spec:{kind:"dataset",dimension_count:4,rows:zr,columns:[0,1,2],plot:"curve"}},{name:"데이터 · 임의 경로",spec:{kind:"dataset",dimension_count:4,rows:zr,columns:[0,1,2],plot:"curve",paths:[[0,10,30,50],[5,25,45,65]]}},{name:"데이터 · 격자 곡면",spec:{kind:"dataset",dimension_count:3,rows:zf,columns:[0,1,2],plot:"surface",grid:{u_count:9,v_count:9}}},{name:"2D 히스토그램 · 개수",spec:{kind:"histogram",dimension_count:4,rows:zr,histogram:{mode:"count",axes:[{column:0,uniform:{lower:-5,upper:5,step:1}}]}}},{name:"3D 히스토그램 · 합계",spec:{kind:"histogram",dimension_count:4,rows:zr,histogram:{mode:"sum",value_column:3,axes:[{column:1,uniform:{lower:-2.5,upper:2.5,step:1}},{column:2,uniform:{lower:-2.5,upper:2.5,step:1}}]}}}],Bf=1024*1024;function ec(n){if(typeof n=="number"&&!Number.isFinite(n))throw new Error("유한한 숫자가 필요합니다.");if(Array.isArray(n))for(const e of n)ec(e);else if(n!==null&&typeof n=="object")for(const e of Object.values(n))ec(e)}function Dc(n){if(new TextEncoder().encode(n).length>Bf)throw new Error("문서 파일 상한은 1 MiB입니다.");const e=Ft(JSON.parse(n)),t=Lt({spec:dl(mi(),Oi()),history:ot(dl(mi(),Oi())).max(128).default([])}).strict(),i=e.spec===void 0?{spec:e,history:[]}:t.parse(e);return Lt({kind:qu(["function","dataset","histogram"]),dimension_count:Ne().int().min(1).max(64),version:Ui(1).optional()}).passthrough().parse(i.spec),ec(i),i}function kf(n){const e=Lt({version:Ui(1),name:mi().max(256),document:Oi()}).strict().parse(n);return{version:1,name:e.name,document:Dc(JSON.stringify(e.document))}}async function Zs(n,e){const t=await new Promise((i,r)=>{const s=indexedDB.open("fgv-workspace",1);let a=!1;s.onupgradeneeded=()=>{s.result.createObjectStore("work")},s.onerror=()=>r(s.error??new Error("로컬 저장소 열기 실패")),s.onblocked=()=>{a=!0,r(new Error("다른 창이 로컬 저장소를 사용하고 있습니다."))},s.onsuccess=()=>{a?s.result.close():i(s.result)}});try{return await new Promise((i,r)=>{const s=t.transaction("work",n),a=e(s.objectStore("work"));s.oncomplete=()=>i(a.result),s.onabort=()=>r(s.error??new Error("로컬 저장 실패")),s.onerror=()=>r(s.error??new Error("로컬 저장 실패"))})}finally{t.close()}}let gu=Promise.resolve(),tc=null,ks;function Gf(){if(ks)return ks;tc=sessionStorage.getItem("fgv-draft-id");const n=e=>new Promise((t,i)=>{if(!navigator.locks){t(crypto.randomUUID());return}navigator.locks.request(`fgv-draft:${e}`,{ifAvailable:!0},async r=>{if(!r){t(await n(crypto.randomUUID()));return}t(e),await new Promise(s=>{window.addEventListener("pagehide",()=>s(),{once:!0})})}).catch(r=>i(r instanceof Error?r:new Error(String(r))))});return ks=n(tc??crypto.randomUUID()).then(e=>(sessionStorage.setItem("fgv-draft-id",e),e)),ks}async function Sy(){const n=await Gf(),e=await Zs("readonly",r=>r.getAll()),t=ot(Lt({tab:mi(),updated_at:Ne().finite(),record:Oi()}).strict()).parse(e),i=t.find(r=>r.tab===n)??t.find(r=>r.tab===tc);return t.sort((r,s)=>s.updated_at-r.updated_at),(i??t[0])?.record}function Ic(n,e=!1){const t=gu.then(async()=>{const i=await Gf();e?await Zs("readwrite",r=>r.clear()):n===void 0?await Zs("readwrite",r=>r.delete(i)):(kf(n),await Zs("readwrite",r=>r.put({tab:i,updated_at:Date.now(),record:n},i)))});return gu=t.catch(()=>{}),t}const My=document.querySelector("#app");My.innerHTML=`
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
<div id="hud" class="canvas-caption">왼쪽 이동 <span>·</span> 오른쪽 회전 <span>·</span> 휠 확대</div>
<div id="error" role="alert"></div></main></div>
<input id="document-picker" type="file" accept=".json,application/json" hidden>`;function ze(n){return document.getElementById(n)}const Nt=ze("graph"),Pn=new Of(Nt,ze("labels")),Ni=new Qg,xt=ze("content"),Vf=Lt({dimension:mc([Ui(2),Ui(3)]),view:Lt({lower:ot(Ne()).length(2),upper:ot(Ne()).length(2),preserve_aspect:Zn()}),camera:Lt({eye:ot(Ne()).length(3),target:ot(Ne()).length(3),up:ot(Ne()).length(3),projection:mi(),fov_y:Ne(),near_distance:Ne(),far_distance:Ne(),orthographic_width:Ne(),orthographic_height:Ne()})}),Hf=Lt({source_index:Ne().int(),position:ot(Ne()).length(3),screen:ot(Ne()).length(3).nullable()});let on=[],cn=-1;const di=[];let br=!1,Vi=!1,fr=1,ca=!1,la=!1,nt={spec:structuredClone(Pc[0].spec),history:[]},va="새 문서",xa=JSON.stringify(nt),as=!1,jn="자동 저장 준비 중",An=!0,es=!1,gr,nc,qs=0,Wf=!1,gi,ts=[],Xr="",ui=0,ic="0",be,Vt,yn,dr=0,It="input",Pi=()=>structuredClone(nt.spec),wn,ua=!1,Ys,_r,pi;const Xf=matchMedia("(prefers-color-scheme: dark)");let _i=Xf.matches,$f=!1;function Sa(){return as||JSON.stringify(nt)!==xa}function zn(){ze("document-status").textContent=`${va} · ${Sa()?"미저장":"변경 없음"} · ${jn}`}function ti(){if(wn||Ys!==void 0||_r!==void 0||br||Vi)throw new Error("조작·계산·출력이 끝난 뒤 다시 시도하세요.")}function Zf(){on=be?[structuredClone(be)]:[],cn=on.length-1,di.length=0}function yy(n){on[cn]?.dimension!==n.dimension&&(on=[],cn=-1,di.length=0),JSON.stringify(on[cn])!==JSON.stringify(n)&&(on=on.slice(0,cn+1),on.push(structuredClone(n)),on.length>100&&on.shift(),cn=on.length-1)}async function qf(n,e=!0){if(ti(),!be||n.dimension!==be.dimension)throw new Error("현재 그래프와 화면 차원이 다릅니다.");const t=structuredClone(be);if(be=structuredClone(n),!await os(e))throw be=t,Pn.preview(t),Pn.draw(),new Error("화면 복원 실패 · 이전 관찰 상태 유지")}async function _u(n){ti();const e=on[n];if(!e)return;const t=cn;cn=n;try{await qf(e,!1)}catch(i){throw cn=t,i}}function rc(n){if(!gi)throw new Error("항목을 먼저 선택하세요.");const e=ot(Hf).parse(n.vertices),t=gi==="graph"?e:e.filter(i=>i.source_index===Number(gi.split(":")[1]));if(!t.length)throw new Error("선택 항목에는 표시할 좌표가 없습니다.");return t}function Ma(){clearTimeout(nc);const n=++qs;if(!An||es||!Wf){zn();return}jn="저장 중…",zn(),nc=setTimeout(()=>{const e={version:1,name:va,document:structuredClone(nt)};Ic(e).then(()=>{n!==qs||!An||(jn="자동 저장됨",zn())},t=>{n===qs&&(jn=`자동 저장 실패: ${String(t)}`,zn())})},300)}async function sc(n=!1){clearTimeout(nc),++qs,await Ic(void 0,n),gr=void 0,es=!1,ze("recovery").hidden=!0,jn=An?"로컬 기록 없음":"자동 저장 꺼짐",zn()}async function Lc(n,e){try{ti()}catch(t){return pn(t),!1}return Sa()&&!confirm("저장하지 않은 변경 사항을 버리고 문서를 교체할까요?")||!await jt(n,!0)?!1:(va=e,xa=JSON.stringify(nt),as=!1,gi=void 0,Xr="",ui=0,ic="",qr.value="",pi=be?structuredClone(be):void 0,Zf(),Uc(),Oc(),It==="items"&&Fi(),Ma(),!0)}async function Yf(n){if(n.size>Bf)throw new Error("문서 파일 상한은 1 MiB입니다.");const e=Dc(await n.text());await Lc(e,n.name)}function Kf(n){n.onchange=()=>{const e=n.files?.[0];e&&Yf(e).catch(t=>pn(t)),n.value=""}}function Jf(){ns("graph.fgv.json",JSON.stringify(nt,null,2)),xa=JSON.stringify(nt),zn()}function pn(n){ze("error").textContent=n instanceof Error?n.message:String(n)}function Qf(){ze("error").textContent=""}function Nc(){document.body.classList.toggle("light",!_i),document.documentElement.dataset.theme=_i?"dark":"light",Pn.set_theme(_i)}Nc();Xf.addEventListener("change",n=>{$f||(_i=n.matches,Nc())});ze("theme").onclick=()=>{$f=!0,_i=!_i,Nc()};function ya(n){document.body.classList.toggle("collapsed",n),ze("fold").setAttribute("aria-expanded",String(!n)),ze("open").setAttribute("aria-expanded",String(!n))}ze("fold").onclick=()=>ya(!0);ze("open").onclick=()=>ya(!1);function Er(){const n=Nt.getBoundingClientRect();return[Math.max(64,Math.min(4096,Math.round(n.width))),Math.max(64,Math.min(4096,Math.round(n.height)))]}function Uc(){if(!be||!pi)return;let n;if(be.dimension===2)n=(pi.view.upper[0]-pi.view.lower[0])/(be.view.upper[0]-be.view.lower[0]);else if(be.camera.projection==="orthographic")n=pi.camera.orthographic_width/be.camera.orthographic_width;else{const e=t=>Math.hypot(...t.camera.eye.map((i,r)=>i-t.camera.target[r]));n=e(pi)/e(be)}ze("zoom-level").textContent=`${Math.round(n*100)}%`}async function jt(n,e=!1,t=!0){if(Vi)return!1;const i=++dr;br=!0,Qf(),ze("status").textContent="코어 계산 중…";try{const r=n.spec,s={spec:r,history:n.history,canvas_size:Er()};r.kind==="function"&&(s.expression_ast=Ju(String(r.expression),Number(r.dimension_count)));const a=await Ni.request(s);if(await document.fonts.ready,i!==dr)return!1;const o=Ff.parse(a),c=Vf.parse(a),l=Ey(a,o,n.spec);Pn.load(o,c),Pn.set_theme(_i);const f=JSON.stringify(nt)!==JSON.stringify(n);return nt=structuredClone(n),(f||e)&&(as=!1),be=c,t&&yy(c),pi??=structuredClone(c),Uc(),Vt=a,yn=o,ts=l,Nt.dataset.ready="true",Nt.dataset.dimension=String(o.dimension),Nt.dataset.revision=String(a.cache_revision),ze("status").textContent=`${o.dimension}D · ${o.vertices.length.toLocaleString()} 정점 · ${o.triangles.length.toLocaleString()} 면 · revision ${a.cache_revision}`,(e||It==="items")&&Fi(),Oc(),f?Ma():zn(),!0}catch(r){return i===dr&&(pn(r),ze("status").textContent="적용 실패 · 마지막 성공 그래프 유지"),!1}finally{i===dr&&(br=!1)}}function Mn(n,e){const t=document.createElement("h2");t.textContent=n;const i=document.createElement("p");i.textContent=e,xt.append(t,i)}function Ci(n,e,t=!1){const i=document.createElement("label");i.textContent=n;const r=document.createElement(t?"textarea":"input");return r instanceof HTMLInputElement&&(r.type="text"),r.value=e,i.append(r),xt.append(i),r}function Ut(n,e){return Ci(n,JSON.stringify(e,null,2),!0)}function bt(n,e){const t=document.createElement("button");return t.textContent=n,t.onclick=()=>{Qf(),Promise.resolve().then(e).catch(i=>pn(i))},xt.append(t),t}function Br(n,e){const t=document.createElement("label");t.className="check";const i=document.createElement("input");return i.type="checkbox",i.checked=e,t.append(i,document.createTextNode(n)),xt.append(t),i}function kr(n,e,t){const i=document.createElement("label");i.textContent=n;const r=document.createElement("select");r.setAttribute("aria-label",n);for(const s of e){const a=document.createElement("option");a.textContent=s,r.append(a)}return r.value=t,i.append(r),xt.append(i),r}function ns(n,e,t="application/json"){ti();const i=URL.createObjectURL(new Blob([e],{type:t})),r=document.createElement("a");r.href=i,r.download=n,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}async function jf(){ti();const[n,e]=Er(),t=n*fr,i=e*fr;if(t>4096||i>4096||t*i>32e6)throw new Error("PNG 상한은 각 변 4096px, 전체 32MP입니다. 배율을 줄이세요.");la&&Vt&&rc(Vt),Vi=!0;const r=document.createElement("div");r.dataset.exportPreview="true",r.style.cssText=`position:fixed;left:-100000px;top:0;width:${n}px;height:${e}px;pointer-events:none`;const s=document.createElement("canvas"),a=document.createElement("canvas");r.append(s,a),document.body.append(r);let o;try{await document.fonts.ready;const c=structuredClone(nt),l={...c,canvas_size:[t,i],grid_pixel_scale:fr};c.spec.kind==="function"&&(l.expression_ast=Ju(String(c.spec.expression),Number(c.spec.dimension_count)));const f=await Ni.request(l),d=Ff.parse(f);ca&&(d.style.background[3]=0,d.rendering.host_background=!1),o=new Of(s,a),o.load(d,Vf.parse(f)),o.set_theme(_i),o.draw();let u=0,h=0,_=t,S=i;if(la){const A=rc(f).flatMap(y=>y.screen?[y.screen]:[]);if(!A.length)throw new Error("선택 영역이 현재 화면에 없습니다.");const M=12*fr;if(u=Math.max(0,Math.floor(Math.min(...A.map(y=>y[0]))-M)),h=Math.max(0,Math.floor(Math.min(...A.map(y=>y[1]))-M)),_=Math.min(t,Math.ceil(Math.max(...A.map(y=>y[0]))+M)),S=Math.min(i,Math.ceil(Math.max(...A.map(y=>y[1]))+M)),u>=_||h>=S)throw new Error("선택 영역이 현재 화면에 없습니다.")}const m=document.createElement("canvas");m.width=_-u,m.height=S-h;const p=m.getContext("2d");ca||(p.fillStyle=getComputedStyle(ze("stage")).backgroundColor,p.fillRect(0,0,m.width,m.height)),p.drawImage(s,-u,-h),p.drawImage(a,-u,-h);const T=document.createElement("a");T.download="graph.png",T.href=m.toDataURL(),T.click()}finally{o?.dispose(),r.remove(),Vi=!1}}function by(){const n=document.createElement("div");n.className="export-control";const e=document.createElement("div");e.id="export-menu",e.hidden=!0,e.setAttribute("role","group"),e.setAttribute("aria-label","파일 출력 형식");const t=bt("파일 출력 ▾",()=>{e.hidden=!e.hidden,t.setAttribute("aria-expanded",String(!e.hidden))});t.id="export-toggle",t.setAttribute("aria-expanded","false"),t.setAttribute("aria-controls","export-menu"),n.append(t,e),xt.append(n);const i=[["이미지 파일로 출력 (.png)",jf],["그래프 문서로 출력 (.json)",Jf],["raw 데이터로 출력 (.json)",()=>{const r=structuredClone(nt.spec);for(const s of["presentation","dimensions","output","theme","surface_rendering"])delete r[s];ns("graph.raw.json",JSON.stringify({spec:r,history:nt.history},null,2))}],["코어 결과로 출력 (.json)",()=>ns("scene.json",JSON.stringify(Vt,null,2))]];for(const[r,s]of i)e.append(bt(r,s));n.onkeydown=r=>{r.key==="Escape"&&(r.stopPropagation(),e.hidden=!0,t.setAttribute("aria-expanded","false"),t.focus())}}function vu(n,e,t){const i=document.createElement("input");i.type="file",i.accept=e,i.setAttribute("aria-label",n),i.onchange=()=>{const s=i.files?.[0];if(s){if(s.size>8*1024*1024)return pn(new Error("파일 상한은 8 MiB입니다."));s.text().then(t).catch(a=>pn(a))}};const r=document.createElement("label");r.textContent=n,r.append(i),xt.append(r)}function vr(n){return n.presentation||(n.presentation={}),Ft(n.presentation)}function Zr(n){const e=vr(n);return e.overrides||(e.overrides={}),Ft(e.overrides)}function Fi(){clearTimeout(_r),_r=void 0,xt.replaceChildren(),xt.setAttribute("aria-labelledby",`tab-${It}`),ze("apply").hidden=!["input","axes","camera"].includes(It);const n=structuredClone(nt.spec);if(Pi=()=>n,It==="input"){Mn("입력 · ND 데이터","raw 입력에 표시 정보는 필요하지 않습니다. JSON 편집은 이 웹 호스트의 입력 양식입니다.");const e=kr("시각화 대상",["function","dataset","histogram"],String(n.kind)),t=Ci("ND 차원 수",String(n.dimension_count)),i=kr("결측값 정책 · null / 정의되지 않은 함수값",["reject","skip"],String(n.invalid_values??"reject")),r=[];if(n.kind==="function"){Mn("함수","x/y/z 또는 x0…x63. + - * / ^, sin cos tan exp log sqrt abs min max pow, pi e. 코드 실행 없이 제한 AST만 사용합니다.");const s=Ci("수식",String(n.expression));s.className="code-input",s.spellcheck=!1,r.push(["expression",s,!1]),r.push(["sampling",Ut("변화 축 · 범위 · 해상도 / 나머지 고정값",n.sampling),!0]),r.push(["surface_rendering",Ut("와이어프레임 / LOD",n.surface_rendering??{wireframe:"grid",wireframe_lines:[11,11],lod:{enabled:!0,max_error_pixels:1}}),!0])}else r.push(["rows",Ut("행 우선 원본 데이터 · null 허용",n.rows),!0]),n.kind==="dataset"?(r.push(["plot",kr("표현",["points","curve","surface"],String(n.plot)),!1]),r.push(["columns",Ut("선택할 2개 / 3개 열",n.columns),!0]),r.push(["paths",Ut("임의 경로 · null은 입력 순서, []는 연결 없음",n.paths??null),!0]),r.push(["grid",Ut("곡면 격자 · u_count/v_count/row_indices",n.grid??null),!0])):(Mn("집계","mode: count / sum / mean. axes는 1개 또는 2개. uniform의 lower부터 step 간격으로 자르거나 intervals에 직접 구간을 지정합니다."),r.push(["histogram",Ut("구간 / 집계 / 값 열",n.histogram),!0]));Pi=()=>{if(e.value!==n.kind)throw new Error("대상 종류 변경은 위 예제 선택 또는 문서 탭의 전체 명세로 시작하세요.");n.dimension_count=Number(t.value),n.invalid_values=i.value;for(const[s,a,o]of r){const c=o?JSON.parse(a.value):a.value;c===null?delete n[s]:n[s]=c}return n}}else if(It==="axes"){Mn("축 · 범위","격자는 무한 직선입니다. 축 길이는 샘플링·집계 범위와 독립입니다. 자동 설정으로 복원하려면 해당 필드를 null로 지정하세요.");const e=vr(n),t=Zr(n),i=Br("격자 표시",!!(t.show_grid??e.show_grid??!0)),r=Br("축 표시",!!(t.show_axes??e.show_axes??!0)),s=Br("축 화살표",!!(t.show_axis_arrows??e.show_axis_arrows??!0)),a={};for(const d of["display_range","grid_spacing","grid_origin","axis_lengths","axis_origin"])a[d]=t[d]??e[d]??null;const o=Ut("범위 / 간격 / 원점 / 축 길이",a),c=Ut("제목 / 출력 축 이름·단위",{title:e.title??"",axes:e.axes??[]}),l=Ut("ND 열·변수 이름·단위",n.dimensions??[]),f=Ut("함수 출력 이름·단위",n.output??{});Pi=()=>{const d=Ft(JSON.parse(o.value));for(const[u,h]of Object.entries(d))h===null?(delete t[u],delete e[u],u==="display_range"&&(t.automatic_range=!0)):(t[u]=h,u==="display_range"&&(t.automatic_range=!1));return t.show_grid=i.checked,t.show_axes=r.checked,t.show_axis_arrows=s.checked,Object.assign(e,Ft(JSON.parse(c.value))),n.dimensions=JSON.parse(l.value),n.output=JSON.parse(f.value),n}}else if(It==="style"){Mn("색상 · 크기","값을 변경하면 바로 반영됩니다. 2D 기본 축은 UI 밝기를 따르고, 3D 기본 축은 RGB입니다. 지정한 색은 유지됩니다.");const e=Zr(n),t=Ft(e.style??{});e.style=t;const i=n.kind==="function"?Ft(n.sampling).axes instanceof Array&&Ft(n.sampling).axes.length===2:n.kind==="dataset"&&n.plot==="surface";for(const[c,l]of Object.entries({background:"배경",grid:"격자",axes:"공통 축",stroke:"곡선",points:"데이터 점",surface:"곡면",wireframe:"와이어프레임",bars:"히스토그램 막대",text:"일반 글자"})){if(c==="wireframe"&&!i)continue;const f=c==="axes"?[128,128,128,255]:yn?.style[c],d=ot(Ne()).length(4).parse(t[c]??f??[128,128,128,255]),u=document.createElement("label");u.textContent=l;const h=document.createElement("div");h.className="row";const _=document.createElement("input");_.type="color",_.value="#"+d.slice(0,3).map(p=>p.toString(16).padStart(2,"0")).join(""),_.setAttribute("aria-label",l+" 색상");const S=document.createElement("input");S.type="range",S.min="0",S.max="255",S.value=String(d[3]),S.setAttribute("aria-label",l+" 알파");const m=()=>{t[c]=[1,3,5].map(p=>parseInt(_.value.slice(p,p+2),16)),t[c].push(Number(S.value))};_.oninput=m,S.oninput=m,h.append(_,S),u.append(h),xt.append(u)}const r=Ut("축별 RGBA · null은 공통 설정",t.axis_colors??[null,null,null]),s={},a=Ft(vr(n).style??{});for(const c of["line_width","point_radius","grid_width","axis_width","arrow_length","arrow_width","bar_gap"])s[c]=t[c]??a[c]??(c==="bar_gap"?.1:Ft(yn?.style??{})[c]);const o={line_width:"곡선 굵기",point_radius:"점 반지름",grid_width:"격자 굵기",axis_width:"축 굵기",arrow_length:"화살표 길이",arrow_width:"화살표 너비",bar_gap:"막대 간격"};for(const[c,l]of Object.entries(s)){const f=Ci(o[c],String(l));f.type="number",f.min="0",f.required=!0,f.step=c==="bar_gap"?"0.01":"0.1",c==="bar_gap"&&(f.max="0.99"),f.oninput=()=>{!f.validity.valid||!f.value.trim()||(t[c]=Number(f.value))}}Pi=()=>(t.axis_colors=JSON.parse(r.value),n),bt("색상·크기 기본값 복원",async()=>{delete e.style,delete vr(n).style,await jt({spec:n,history:nt.history},!0)})}else if(It==="camera"){Mn("관찰 · 투영","왼쪽 드래그 이동, 오른쪽 드래그 3D 회전, 휠 확대·축소. 초기 3D는 양의 XYZ 쪽에서 보는 120° 등각 정투상입니다.");const e=Zr(n),t=Ut("2D 뷰 · preserve_aspect",e.view??be?.view),i=Ut("3D 카메라 · 원근 / 정투상 · fov_y는 라디안",e.camera??be?.camera);Pi=()=>(be?.dimension===2?(e.view=Ft(JSON.parse(t.value)),e.automatic_view=!1):(e.camera=Ft(JSON.parse(i.value)),e.automatic_camera=!1),n)}else if(It==="stream"){Mn("증분 · 스트림","행 ID는 삭제 후에도 재사용하지 않습니다. 실패 배치는 반영되지 않습니다. 웹 데모는 최대 128개 배치를 재현하고, 코어는 영향 행·셀만 증분 갱신합니다.");const e=Ut("append / replace / erase · 고정 row_id",{append:[[0,0,0,1]],replace:[],erase:[]});bt("배치 적용",async()=>{await jt({spec:nt.spec,history:[...nt.history,Ft(JSON.parse(e.value))]},!0)}),vu("NDJSON 배치 파일 · 한 줄에 한 변경 객체",".ndjson,.jsonl,.txt",async i=>{for(const r of i.split(/\r?\n/).filter(s=>s.trim().length>0))if(!await jt({spec:nt.spec,history:[...nt.history,Ft(JSON.parse(r))]}))throw new Error("스트림 중단 · 앞서 성공한 배치는 유지됩니다.");Fi()}),Mn("전송 환경","브라우저는 임의 TCP 수신 소켓을 열 수 없습니다. 로컬/네트워크 Boost.Asio 수신은 네이티브 호스트의 역할입니다. 이 페이지는 파일 스트림과 증분 배치를 직접 시험합니다.");const t=document.createElement("pre");t.textContent=JSON.stringify({row_ids:Vt?.row_ids,cache_revision:Vt?.cache_revision,last_delta:Vt?.last_delta,cells:Vt?.cells},null,2),xt.append(t)}else if(It==="items"){Mn("항목","현재 그래프와 원본 행 ID, 함수 샘플 또는 히스토그램 셀을 검색합니다. 선택 후 위치 찾기로 관찰 중심을 옮깁니다.");const e=Ci("이름·ID 검색",Xr);e.type="search";const t=document.createElement("p"),i=document.createElement("div");i.className="item-list",i.setAttribute("role","group"),i.setAttribute("aria-label","항목 목록"),xt.append(t,i);const r=()=>{const o=Xr.trim().toLocaleLowerCase(),c=ts.filter(f=>`${f.id} ${f.label}`.toLocaleLowerCase().includes(o)),l=ui*100;t.textContent=`${c.length}개 항목 · ${ui+1}/${Math.max(1,Math.ceil(c.length/100))} 페이지`,i.replaceChildren();for(const f of c.slice(l,l+100)){const d=document.createElement("button");d.textContent=`${f.label} · ${f.id}`,d.dataset.itemId=f.id,d.setAttribute("aria-pressed",String(gi===f.id)),d.onclick=()=>{gi=f.id,Oc(),r(),i.querySelector(`[data-item-id="${CSS.escape(f.id)}"]`)?.focus()},i.append(d)}};e.oninput=()=>{Xr=e.value,ui=0,r()},bt("이전 페이지",()=>{ui=Math.max(0,ui-1),r()}),bt("다음 페이지",()=>{const o=ts.filter(c=>`${c.id} ${c.label}`.toLocaleLowerCase().includes(Xr.trim().toLocaleLowerCase())).length;ui=Math.min(Math.max(0,Math.ceil(o/100)-1),ui+1),r()}),bt("위치 찾기",()=>xu());const s=document.createElement("h3");s.textContent="화면",xt.append(s),bt("이전",async()=>{await _u(cn-1)}).disabled=cn<=0,bt("다음",async()=>{await _u(cn+1)}).disabled=cn+1>=on.length,bt("선택 항목에 맞춤",()=>xu(!0));const a=Ci("화면 이름","");a.maxLength=80,bt("현재 화면 저장",()=>{ti();const o=a.value.trim();if(!be||!o||di.length>=20||di.some(c=>c.name===o))throw new Error("중복되지 않는 화면 이름이 필요합니다. 최대 20개까지 저장합니다.");di.push({name:o,view:structuredClone(be)}),Fi()});for(const o of di)bt(`${o.name} 열기`,async()=>{await qf(o.view)}),bt(`${o.name} 삭제`,()=>{di.splice(di.indexOf(o),1),Fi()});r()}else if(It==="document"){Mn("문서 · 테마","raw 입력과 표시 정보를 포함한 문서를 모두 받습니다. .fgvtheme은 실제 코어가 읽고 정규화합니다. 명시 override는 프로파일 기본값보다 우선합니다."),bt("새 문서",async()=>{await Lc({spec:{kind:"dataset",dimension_count:2,rows:[],columns:[0,1],plot:"points"},history:[]},"새 문서")});const e=document.createElement("input");e.type="file",e.accept=".json,application/json",e.setAttribute("aria-label","파일 열기 (.json)"),Kf(e),xt.append(e);const t=Br("자동 저장",An);t.onchange=()=>{An=t.checked;try{sessionStorage.setItem("fgv-autosave",String(An))}catch(f){pn(f)}An?Ma():sc().catch(f=>{jn=`로컬 기록 삭제 실패: ${String(f)}`,zn()})},bt("로컬 기록 지우기",async()=>{confirm("FGV의 모든 탭에서 저장한 로컬 기록을 지울까요?")&&await sc(!0)});const i=document.createElement("h3");i.textContent="이미지 출력 옵션",xt.append(i);const r=kr("PNG 배율",["1×","2×","3×"],`${fr}×`);r.onchange=()=>{fr=Number(r.value[0])};const s=Br("투명 배경",ca);s.onchange=()=>{ca=s.checked};const a=kr("출력 범위",["현재 화면","선택 영역"],la?"선택 영역":"현재 화면");a.onchange=()=>{la=a.value==="선택 영역"};const o=document.createElement("p");o.textContent="PNG는 코어 뷰를 다시 계산해 출력합니다. 각 변 4096px 이하, 32MP 이하입니다. Ctrl/Cmd+S: JSON 출력 · Ctrl/Cmd+O: 파일 열기 · Ctrl/Cmd+F: 항목 검색",o.setAttribute("aria-label","단축키 안내"),xt.append(o);const c=Ut("전체 웹 호스트 문서 · spec / history",nt);c.className="long",bt("문서 적용",async()=>{await jt(Dc(c.value),!0)}),by();const l=Ci(".fgvtheme 프로파일",String(n.theme??`fgv-theme 1
`),!0);bt("테마 검증·적용",async()=>{const f=await Ni.request({operation:"theme",text:l.value});n.theme=f.text,await jt({spec:n,history:nt.history},!0)}),bt("테마 저장",async()=>{const f=await Ni.request({operation:"theme",text:l.value});ns("default.fgvtheme",String(f.text),"text/plain")}),vu("테마 파일 열기",".fgvtheme",async f=>{const d=await Ni.request({operation:"theme",text:f});n.theme=d.text,await jt({spec:n,history:nt.history},!0)})}else{Mn("코어 · 진단","행렬·기하·집계·프레임은 C++23 코어에서 생성합니다. JavaScript는 입력 해석과 Three.js 렌더링을 담당합니다.");const e=Ut("투영 / 역변환 / ray / 직선·선분 절단",{world:[0,0,0],screen:[Er()[0]/2,Er()[1]/2],end:[1,1,1],line:{origin:[0,0,0],direction:[1,0,0]}}),t=document.createElement("pre");bt("현재 뷰에서 변환",async()=>{t.textContent=JSON.stringify(await Ni.request({...Ft(JSON.parse(e.value)),operation:"transform",dimension:be?.dimension,view:be?.view,camera:be?.camera,viewport:yn?.rendering.viewport}),null,2)}),xt.append(t),bt("코어 결과 JSON 저장",()=>ns("scene.json",JSON.stringify(Vt,null,2))),bt("PNG 저장",jf);const i=document.createElement("pre");i.textContent=JSON.stringify({version:"web 0.1.0 · core 0.7.0",range:Vt?.range,bounds:Vt?.bounds,grid_spacing:Vt?.grid_spacing,grid_lines:yn?.rendering.grid_lines.length,stats:Vt?.stats,sampling_axes:Vt?.sampling_axes,rendering:{canvas_size:yn?.rendering.canvas_size,viewport:yn?.rendering.viewport,view_matrix:yn?.rendering.view_matrix,projection_matrix:yn?.rendering.projection_matrix}},null,2),xt.append(i)}}const Ri=[["input","입력","⌘"],["style","스타일","◐"],["items","항목","☷"],["axes","축·범위","⌁"],["camera","관찰","◇"],["stream","증분","⇄"],["diagnostics","진단","⋈"],["document","파일","▤"]];function ac(n){It=n;for(const e of document.querySelectorAll("[role=tab]"))e.classList.toggle("active",e.dataset.tab===n),e.setAttribute("aria-selected",String(e.dataset.tab===n)),e.tabIndex=e.dataset.tab===n?0:-1;ya(!1),Fi()}for(const[n,[e,t,i]]of Ri.entries()){const r=document.createElement("button"),s=document.createElement("span");s.textContent=i,s.setAttribute("aria-hidden","true"),r.append(s,document.createTextNode(t)),r.id=`tab-${e}`,r.dataset.tab=e,r.setAttribute("role","tab"),r.setAttribute("aria-controls","content"),r.setAttribute("aria-selected",String(It===e)),r.tabIndex=It===e?0:-1,r.classList.toggle("active",It===e),r.onclick=()=>ac(e),r.onkeydown=a=>{let o;if(a.key==="ArrowDown"||a.key==="ArrowRight")o=(n+1)%Ri.length;else if(a.key==="ArrowUp"||a.key==="ArrowLeft")o=(n+Ri.length-1)%Ri.length;else if(a.key==="Home")o=0;else if(a.key==="End")o=Ri.length-1;else return;a.preventDefault(),ac(Ri[o][0]),ze(`tab-${Ri[o][0]}`).focus()},ze("tabs").append(r)}function ed(){It==="style"&&_r===void 0&&(_r=setTimeout(()=>{_r=void 0;try{const n=structuredClone(Pi());if(xt.querySelector("input:invalid"))throw new Error("유효한 스타일 값을 입력하세요. 마지막 그래프는 유지됩니다.");jt({spec:n,history:nt.history})}catch(n){pn(n)}},90))}xt.addEventListener("input",ed);xt.addEventListener("change",ed);xt.addEventListener("input",n=>{!["input","style","axes","camera","document"].includes(It)||!(n.target instanceof HTMLInputElement||n.target instanceof HTMLTextAreaElement)||n.target.type==="file"||n.target.type==="checkbox"||(as=!0,zn())});const qr=ze("preset");for(const[n,e]of Pc.entries()){const t=document.createElement("option");t.value=String(n),t.textContent=e.name,qr.append(t)}qr.onchange=async()=>{const n=qr.value,e=Pc[Number(n)];await Lc({spec:structuredClone(e.spec),history:[]},e.name)&&(ic=n),qr.value=ic};ze("apply").onclick=()=>{try{ti();const n=Pi();jt({spec:n,history:nt.history},!0)}catch(n){pn(n)}};ze("reset").onclick=()=>{pi=void 0;const n=structuredClone(nt.spec),e=vr(n),t=Zr(n);for(const i of["view","camera","display_range"])delete e[i],delete t[i];Object.assign(t,{automatic_range:!0,automatic_view:!0,automatic_camera:!0}),jt({spec:n,history:nt.history},!0)};async function os(n=!0){if(!be)return!1;const e=structuredClone(nt.spec),t=Zr(e);return be.dimension===2?(t.view=be.view,t.automatic_view=!1,delete t.display_range,delete vr(e).display_range,t.automatic_range=!0):(t.camera=be.camera,t.automatic_camera=!1),jt({spec:e,history:nt.history},It==="camera",n)}Nt.oncontextmenu=n=>n.preventDefault();Nt.onpointerdown=n=>{Vi||!be||n.button!==0&&n.button!==2||(Nt.setPointerCapture(n.pointerId),ze("item-marker").hidden=!0,++dr,br=!1,wn={x:n.clientX,y:n.clientY,button:n.button,state:structuredClone(be)})};Nt.onpointermove=n=>{if(!wn||!be)return;const e=(n.clientX-wn.x)/Nt.getBoundingClientRect().width,t=(n.clientY-wn.y)/Nt.getBoundingClientRect().height,i=structuredClone(wn.state);if(wn.button===0)if(i.dimension===2){const r=-e*(i.view.upper[0]-i.view.lower[0]),s=t*(i.view.upper[1]-i.view.lower[1]);for(const a of[i.view.lower,i.view.upper])a[0]+=r,a[1]+=s}else{const r=Pn.pan_offset(e,t,i.camera.target);for(let s=0;s<3;++s)i.camera.eye[s]+=r[s],i.camera.target[s]+=r[s]}else if(i.dimension===3){const[r,s,a]=i.camera.eye.map((f,d)=>f-i.camera.target[d]),o=Math.hypot(r,s,a),c=Math.atan2(s,r)-e*Math.PI*2,l=Math.max(-1.52,Math.min(1.52,Math.asin(a/o)+t*Math.PI));i.camera.eye=[o*Math.cos(l)*Math.cos(c),o*Math.cos(l)*Math.sin(c),o*Math.sin(l)].map((f,d)=>f+i.camera.target[d])}be=i,Pn.preview(i),ua=!0};Nt.onpointerup=n=>{wn&&(wn=void 0,Nt.releasePointerCapture(n.pointerId),os())};Nt.onpointercancel=()=>{wn=void 0,os()};function td(n){if(be)if(be.dimension===2)for(let e=0;e<2;++e){const t=(be.view.lower[e]+be.view.upper[e])/2;be.view.lower[e]=t+(be.view.lower[e]-t)/n,be.view.upper[e]=t+(be.view.upper[e]-t)/n}else be.camera.projection==="orthographic"?(be.camera.orthographic_width/=n,be.camera.orthographic_height/=n):be.camera.eye=be.camera.eye.map((e,t)=>be.camera.target[t]+(e-be.camera.target[t])/n)}function Fc(n){Vi||!be||(++dr,br=!1,ze("item-marker").hidden=!0,td(n),Pn.preview(be),ua=!0,clearTimeout(Ys),Ys=setTimeout(()=>{Ys=void 0,os()},140),Uc())}ze("zoom-in").onclick=()=>Fc(1.2);ze("zoom-out").onclick=()=>Fc(1/1.2);Nt.addEventListener("wheel",n=>{n.preventDefault(),Fc(Math.exp(Math.max(-.4,Math.min(.4,-n.deltaY*.0015))))},{passive:!1});function nd(){ua&&(Pn.draw(),ua=!1),requestAnimationFrame(nd)}function Ey(n,e,t){const i=ot(Hf).parse(n.vertices),r=new Map(i.map(a=>[a.source_index,a])),s=[{id:"graph",label:e.title}];if(t.kind==="histogram")for(const[a,o]of ot(Lt({count:Ne(),value:Ne().nullable()})).parse(n.cells).entries())s.push({id:`cell:${a}`,label:`셀 ${a} · 개수 ${o.count} · 값 ${o.value??"없음"}`,...r.get(a)});else if(t.kind==="function")for(const a of i)s.push({id:`sample:${a.source_index}`,label:`샘플 ${a.source_index}`,...a});else for(const a of ot(Ne().int()).parse(n.row_ids))s.push({id:`row:${a}`,label:`행 ${a}`,...r.get(a)});return s}function Oc(){const n=ze("item-marker"),e=ts.find(i=>i.id===gi);if(n.hidden=!e?.screen,!e?.screen)return;const t=Nt.getBoundingClientRect();n.style.left=`${e.screen[0]*t.width/Nt.width}px`,n.style.top=`${e.screen[1]*t.height/Nt.height}px`}function xu(n=!1){ti();const e=ts.find(r=>r.id===gi);if(!e||!be)throw new Error("항목을 먼저 선택하세요.");if(e.id==="graph")return ze("reset").click();if(!e.position)throw new Error("이 항목에는 표시할 좌표가 없습니다.");let t=e.position,i=1;if(n&&Vt){const r=rc(Vt);t=[0,1,2].map(a=>(Math.min(...r.map(o=>o.position[a]))+Math.max(...r.map(o=>o.position[a])))/2);const s=r.flatMap(a=>a.screen?[a.screen]:[]);s.length&&(i=Math.max(.1,Math.min(10,...[0,1].map(a=>.65*Er()[a]/Math.max(10,Math.max(...s.map(o=>o[a]))-Math.min(...s.map(o=>o[a])))))))}if(be.dimension===2)for(let r=0;r<2;++r){const s=t[r]-(be.view.lower[r]+be.view.upper[r])/2;be.view.lower[r]+=s,be.view.upper[r]+=s}else for(let r=0;r<3;++r)be.camera.eye[r]+=t[r]-be.camera.target[r],be.camera.target[r]=t[r];td(i),os()}async function wy(){try{An=sessionStorage.getItem("fgv-autosave")!=="false";const n=await Sy();es=An&&n!==void 0,es?(ze("recovery").hidden=!1,jn="복구 선택 대기",gr=kf(n)):(jn=An?"자동 저장 대기":"자동 저장 꺼짐",An||await Ic(void 0))}catch(n){jn=`로컬 저장소 오류: ${String(n)}`}Wf=!0,ze("recover").disabled=!gr,zn(),await jt(nt,!0)}ze("recover").onclick=()=>{if(!gr)return;const n=gr;(async()=>Sa()&&!confirm("저장하지 않은 변경 사항을 버리고 이전 작업을 복구할까요?")||await jt(n.document,!0)&&(va=n.name,xa="",Zf(),as=!1,gr=void 0,es=!1,ze("recovery").hidden=!0,Ma()))()};ze("discard").onclick=()=>{sc().catch(n=>pn(n))};window.addEventListener("beforeunload",n=>{Sa()&&n.preventDefault()});ze("stage").addEventListener("dragover",n=>{n.dataTransfer?.types.includes("Files")&&n.preventDefault()});ze("stage").addEventListener("drop",n=>{n.preventDefault();const e=n.dataTransfer?.files[0];e&&Yf(e).catch(t=>pn(t))});nd();document.fonts.ready.then(()=>{Pn.draw()});document.addEventListener("keydown",n=>{if((n.ctrlKey||n.metaKey)&&!n.altKey&&["KeyS","KeyO","KeyF"].includes(n.code)){n.preventDefault();try{if(n.code==="KeyS")Jf();else if(n.code==="KeyO")ti(),ze("document-picker").click();else{ac("items");const e=xt.querySelector('input[type="search"]');e.focus(),e.select()}}catch(e){pn(e)}return}n.key!=="Escape"||document.body.classList.contains("collapsed")||(ya(!0),ze("open").focus())});let oc;function id(){const[n,e]=Er();if(!(yn?.rendering.canvas_size[0]===n&&yn.rendering.canvas_size[1]===e)){if(br||wn||Vi){oc=setTimeout(id,100);return}jt(nt)}}new ResizeObserver(()=>{clearTimeout(oc),oc=setTimeout(id,160)}).observe(ze("stage"));window.addEventListener("pagehide",()=>{Ni.dispose(),Pn.dispose()});Fi();Kf(ze("document-picker"));wy();
