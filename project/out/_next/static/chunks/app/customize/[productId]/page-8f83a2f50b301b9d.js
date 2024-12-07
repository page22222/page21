(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[101],{7327:function(e,t,r){Promise.resolve().then(r.bind(r,5301)),Promise.resolve().then(r.t.bind(r,3388,23))},5301:function(e,t,r){"use strict";r.r(t),r.d(t,{ProductCustomizer:function(){return et}});var n=r(7437),o=r(2265);function i(e,[t,r]){return Math.min(r,Math.max(t,e))}function a(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}var s=r(2210);function l(e){let t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>(...e)=>t.current?.(...e),[])}var u=o.createContext(void 0),c=globalThis?.document?o.useLayoutEffect:()=>{};r(4887);var d=r(7256),f=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=o.forwardRef((e,r)=>{let{asChild:o,...i}=e,a=o?d.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,n.jsx)(a,{...i,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),m=["PageUp","PageDown"],p=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],h={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},v="Slider",[g,x,b]=function(e){let t=e+"CollectionProvider",[r,i]=function(e,t=[]){let r=[],i=()=>{let t=r.map(e=>o.createContext(e));return function(r){let n=r?.[e]||t;return o.useMemo(()=>({[`__scope${e}`]:{...r,[e]:n}}),[r,n])}};return i.scopeName=e,[function(t,i){let a=o.createContext(i),s=r.length;function l(t){let{scope:r,children:i,...l}=t,u=r?.[e][s]||a,c=o.useMemo(()=>l,Object.values(l));return(0,n.jsx)(u.Provider,{value:c,children:i})}return r=[...r,i],l.displayName=t+"Provider",[l,function(r,n){let l=n?.[e][s]||a,u=o.useContext(l);if(u)return u;if(void 0!==i)return i;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e),i=o[`__scope${n}`];return{...t,...i}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:n}),[n])}};return r.scopeName=t.scopeName,r}(i,...t)]}(t),[a,l]=r(t,{collectionRef:{current:null},itemMap:new Map}),u=e=>{let{scope:t,children:r}=e,i=o.useRef(null),s=o.useRef(new Map).current;return(0,n.jsx)(a,{scope:t,itemMap:s,collectionRef:i,children:r})};u.displayName=t;let c=e+"CollectionSlot",f=o.forwardRef((e,t)=>{let{scope:r,children:o}=e,i=l(c,r),a=(0,s.e)(t,i.collectionRef);return(0,n.jsx)(d.g7,{ref:a,children:o})});f.displayName=c;let m=e+"CollectionItemSlot",p="data-radix-collection-item",h=o.forwardRef((e,t)=>{let{scope:r,children:i,...a}=e,u=o.useRef(null),c=(0,s.e)(t,u),f=l(m,r);return o.useEffect(()=>(f.itemMap.set(u,{ref:u,...a}),()=>void f.itemMap.delete(u))),(0,n.jsx)(d.g7,{[p]:"",ref:c,children:i})});return h.displayName=m,[{Provider:u,Slot:f,ItemSlot:h},function(t){let r=l(e+"CollectionConsumer",t),n=o.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`)),n=Array.from(r.itemMap.values()),o=n.sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current));return o},[r.collectionRef,r.itemMap]);return n},i]}(v),[w,y]=function(e,t=[]){let r=[],i=()=>{let t=r.map(e=>o.createContext(e));return function(r){let n=r?.[e]||t;return o.useMemo(()=>({[`__scope${e}`]:{...r,[e]:n}}),[r,n])}};return i.scopeName=e,[function(t,i){let a=o.createContext(i),s=r.length;r=[...r,i];let l=t=>{let{scope:r,children:i,...l}=t,u=r?.[e]?.[s]||a,c=o.useMemo(()=>l,Object.values(l));return(0,n.jsx)(u.Provider,{value:c,children:i})};return l.displayName=t+"Provider",[l,function(r,n){let l=n?.[e]?.[s]||a,u=o.useContext(l);if(u)return u;if(void 0!==i)return i;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e),i=o[`__scope${n}`];return{...t,...i}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:n}),[n])}};return r.scopeName=t.scopeName,r}(i,...t)]}(v,[b]),[S,j]=w(v),N=o.forwardRef((e,t)=>{let{name:r,min:s=0,max:u=100,step:c=1,orientation:d="horizontal",disabled:f=!1,minStepsBetweenThumbs:h=0,defaultValue:v=[s],value:x,onValueChange:b=()=>{},onValueCommit:w=()=>{},inverted:y=!1,form:j,...N}=e,_=o.useRef(new Set),R=o.useRef(0),M="horizontal"===d,D=M?C:E,[A=[],P]=function({prop:e,defaultProp:t,onChange:r=()=>{}}){let[n,i]=function({defaultProp:e,onChange:t}){let r=o.useState(e),[n]=r,i=o.useRef(n),a=l(t);return o.useEffect(()=>{i.current!==n&&(a(n),i.current=n)},[n,i,a]),r}({defaultProp:t,onChange:r}),a=void 0!==e,s=a?e:n,u=l(r),c=o.useCallback(t=>{if(a){let r="function"==typeof t?t(e):t;r!==e&&u(r)}else i(t)},[a,e,i,u]);return[s,c]}({prop:x,defaultProp:v,onChange:e=>{let t=[..._.current];t[R.current]?.focus(),b(e)}}),O=o.useRef(A);function T(e,t,{commit:r}={commit:!1}){let n=(String(c).split(".")[1]||"").length,o=function(e,t){let r=Math.pow(10,t);return Math.round(e*r)/r}(Math.round((e-s)/c)*c+s,n),a=i(o,[s,u]);P((e=[])=>{let n=function(e=[],t,r){let n=[...e];return n[r]=t,n.sort((e,t)=>e-t)}(e,a,t);if(!function(e,t){if(t>0){let r=e.slice(0,-1).map((t,r)=>e[r+1]-t);return Math.min(...r)>=t}return!0}(n,h*c))return e;{R.current=n.indexOf(a);let t=String(n)!==String(e);return t&&r&&w(n),t?n:e}})}return(0,n.jsx)(S,{scope:e.__scopeSlider,name:r,disabled:f,min:s,max:u,valueIndexToChangeRef:R,thumbs:_.current,values:A,orientation:d,form:j,children:(0,n.jsx)(g.Provider,{scope:e.__scopeSlider,children:(0,n.jsx)(g.Slot,{scope:e.__scopeSlider,children:(0,n.jsx)(D,{"aria-disabled":f,"data-disabled":f?"":void 0,...N,ref:t,onPointerDown:a(N.onPointerDown,()=>{f||(O.current=A)}),min:s,max:u,inverted:y,onSlideStart:f?void 0:function(e){let t=function(e,t){if(1===e.length)return 0;let r=e.map(e=>Math.abs(e-t)),n=Math.min(...r);return r.indexOf(n)}(A,e);T(e,t)},onSlideMove:f?void 0:function(e){T(e,R.current)},onSlideEnd:f?void 0:function(){let e=O.current[R.current],t=A[R.current];t!==e&&w(A)},onHomeKeyDown:()=>!f&&T(s,0,{commit:!0}),onEndKeyDown:()=>!f&&T(u,A.length-1,{commit:!0}),onStepKeyDown:({event:e,direction:t})=>{if(!f){let r=m.includes(e.key),n=r||e.shiftKey&&p.includes(e.key),o=R.current,i=A[o],a=c*(n?10:1)*t;T(i+a,o,{commit:!0})}}})})})})});N.displayName=v;var[_,R]=w(v,{startEdge:"left",endEdge:"right",size:"width",direction:1}),C=o.forwardRef((e,t)=>{let{min:r,max:i,dir:a,inverted:l,onSlideStart:c,onSlideMove:d,onSlideEnd:f,onStepKeyDown:m,...p}=e,[v,g]=o.useState(null),x=(0,s.e)(t,e=>g(e)),b=o.useRef(),w=function(e){let t=o.useContext(u);return e||t||"ltr"}(a),y="ltr"===w,S=y&&!l||!y&&l;function j(e){let t=b.current||v.getBoundingClientRect(),n=[0,t.width],o=H(n,S?[r,i]:[i,r]);return b.current=t,o(e-t.left)}return(0,n.jsx)(_,{scope:e.__scopeSlider,startEdge:S?"left":"right",endEdge:S?"right":"left",direction:S?1:-1,size:"width",children:(0,n.jsx)(M,{dir:w,"data-orientation":"horizontal",...p,ref:x,style:{...p.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:e=>{let t=j(e.clientX);c?.(t)},onSlideMove:e=>{let t=j(e.clientX);d?.(t)},onSlideEnd:()=>{b.current=void 0,f?.()},onStepKeyDown:e=>{let t=h[S?"from-left":"from-right"].includes(e.key);m?.({event:e,direction:t?-1:1})}})})}),E=o.forwardRef((e,t)=>{let{min:r,max:i,inverted:a,onSlideStart:l,onSlideMove:u,onSlideEnd:c,onStepKeyDown:d,...f}=e,m=o.useRef(null),p=(0,s.e)(t,m),v=o.useRef(),g=!a;function x(e){let t=v.current||m.current.getBoundingClientRect(),n=[0,t.height],o=H(n,g?[i,r]:[r,i]);return v.current=t,o(e-t.top)}return(0,n.jsx)(_,{scope:e.__scopeSlider,startEdge:g?"bottom":"top",endEdge:g?"top":"bottom",size:"height",direction:g?1:-1,children:(0,n.jsx)(M,{"data-orientation":"vertical",...f,ref:p,style:{...f.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:e=>{let t=x(e.clientY);l?.(t)},onSlideMove:e=>{let t=x(e.clientY);u?.(t)},onSlideEnd:()=>{v.current=void 0,c?.()},onStepKeyDown:e=>{let t=h[g?"from-bottom":"from-top"].includes(e.key);d?.({event:e,direction:t?-1:1})}})})}),M=o.forwardRef((e,t)=>{let{__scopeSlider:r,onSlideStart:o,onSlideMove:i,onSlideEnd:s,onHomeKeyDown:l,onEndKeyDown:u,onStepKeyDown:c,...d}=e,h=j(v,r);return(0,n.jsx)(f.span,{...d,ref:t,onKeyDown:a(e.onKeyDown,e=>{"Home"===e.key?(l(e),e.preventDefault()):"End"===e.key?(u(e),e.preventDefault()):m.concat(p).includes(e.key)&&(c(e),e.preventDefault())}),onPointerDown:a(e.onPointerDown,e=>{let t=e.target;t.setPointerCapture(e.pointerId),e.preventDefault(),h.thumbs.has(t)?t.focus():o(e)}),onPointerMove:a(e.onPointerMove,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&i(e)}),onPointerUp:a(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&(t.releasePointerCapture(e.pointerId),s(e))})})}),D="SliderTrack",A=o.forwardRef((e,t)=>{let{__scopeSlider:r,...o}=e,i=j(D,r);return(0,n.jsx)(f.span,{"data-disabled":i.disabled?"":void 0,"data-orientation":i.orientation,...o,ref:t})});A.displayName=D;var P="SliderRange",O=o.forwardRef((e,t)=>{let{__scopeSlider:r,...i}=e,a=j(P,r),l=R(P,r),u=o.useRef(null),c=(0,s.e)(t,u),d=a.values.length,m=a.values.map(e=>$(e,a.min,a.max));return(0,n.jsx)(f.span,{"data-orientation":a.orientation,"data-disabled":a.disabled?"":void 0,...i,ref:c,style:{...e.style,[l.startEdge]:(d>1?Math.min(...m):0)+"%",[l.endEdge]:100-Math.max(...m)+"%"}})});O.displayName=P;var T="SliderThumb",k=o.forwardRef((e,t)=>{let r=x(e.__scopeSlider),[i,a]=o.useState(null),l=(0,s.e)(t,e=>a(e)),u=o.useMemo(()=>i?r().findIndex(e=>e.ref.current===i):-1,[r,i]);return(0,n.jsx)(I,{...e,ref:l,index:u})}),I=o.forwardRef((e,t)=>{var r;let{__scopeSlider:i,index:l,name:u,...d}=e,m=j(T,i),p=R(T,i),[h,v]=o.useState(null),x=(0,s.e)(t,e=>v(e)),b=!h||m.form||!!h.closest("form"),w=function(e){let[t,r]=o.useState(void 0);return c(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let n,o;if(!Array.isArray(t)||!t.length)return;let i=t[0];if("borderBoxSize"in i){let e=i.borderBoxSize,t=Array.isArray(e)?e[0]:e;n=t.inlineSize,o=t.blockSize}else n=e.offsetWidth,o=e.offsetHeight;r({width:n,height:o})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}r(void 0)},[e]),t}(h),y=m.values[l],S=void 0===y?0:$(y,m.min,m.max),N=(r=m.values.length)>2?`Value ${l+1} of ${r}`:2===r?["Minimum","Maximum"][l]:void 0,_=w?.[p.size],C=_?function(e,t,r){let n=e/2,o=H([0,50],[0,n]);return(n-o(t)*r)*r}(_,S,p.direction):0;return o.useEffect(()=>{if(h)return m.thumbs.add(h),()=>{m.thumbs.delete(h)}},[h,m.thumbs]),(0,n.jsxs)("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[p.startEdge]:`calc(${S}% + ${C}px)`},children:[(0,n.jsx)(g.ItemSlot,{scope:e.__scopeSlider,children:(0,n.jsx)(f.span,{role:"slider","aria-label":e["aria-label"]||N,"aria-valuemin":m.min,"aria-valuenow":y,"aria-valuemax":m.max,"aria-orientation":m.orientation,"data-orientation":m.orientation,"data-disabled":m.disabled?"":void 0,tabIndex:m.disabled?void 0:0,...d,ref:x,style:void 0===y?{display:"none"}:e.style,onFocus:a(e.onFocus,()=>{m.valueIndexToChangeRef.current=l})})}),b&&(0,n.jsx)(z,{name:u??(m.name?m.name+(m.values.length>1?"[]":""):void 0),form:m.form,value:y},l)]})});k.displayName=T;var z=e=>{let{value:t,...r}=e,i=o.useRef(null),a=function(e){let t=o.useRef({value:e,previous:e});return o.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(t);return o.useEffect(()=>{let e=i.current,r=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(r,"value"),o=n.set;if(a!==t&&o){let r=new Event("input",{bubbles:!0});o.call(e,t),e.dispatchEvent(r)}},[a,t]),(0,n.jsx)("input",{style:{display:"none"},...r,ref:i,defaultValue:t})};function $(e,t,r){return i(100/(r-t)*(e-t),[0,100])}function H(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}var Y=r(9311);let K=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsxs)(N,{ref:t,className:(0,Y.cn)("relative flex w-full touch-none select-none items-center",r),...o,children:[(0,n.jsx)(A,{className:"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",children:(0,n.jsx)(O,{className:"absolute h-full bg-primary"})}),(0,n.jsx)(k,{className:"block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"})]})});K.displayName=N.displayName;var V=r(3023),U=r(6691),X=r.n(U),L=r(6110);function B(e){let{design:t,selected:r,onClick:o}=e;return(0,n.jsxs)(L.Zb,{className:(0,Y.cn)("cursor-pointer transition-all hover:scale-105",r&&"ring-2 ring-primary"),onClick:o,children:[(0,n.jsx)(L.Ol,{children:(0,n.jsx)(L.ll,{className:"text-sm line-clamp-1",children:t.name})}),(0,n.jsx)(L.aY,{className:"p-0",children:(0,n.jsx)("div",{className:"relative aspect-square",children:(0,n.jsx)(X(),{src:t.image,alt:t.name,fill:!0,className:"object-cover"})})})]})}let F=0,W=new Map,q=e=>{if(W.has(e))return;let t=setTimeout(()=>{W.delete(e),Q({type:"REMOVE_TOAST",toastId:e})},1e6);W.set(e,t)},Z=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?q(r):e.toasts.forEach(e=>{q(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},G=[],J={toasts:[]};function Q(e){J=Z(J,e),G.forEach(e=>{e(J)})}function ee(e){let{...t}=e,r=(F=(F+1)%Number.MAX_SAFE_INTEGER).toString(),n=()=>Q({type:"DISMISS_TOAST",toastId:r});return Q({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||n()}}}),{id:r,dismiss:n,update:e=>Q({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function et(e){let{product:t,designs:r}=e,[i,a]=(0,o.useState)(null),[s,l]=(0,o.useState)({x:50,y:50}),[u,c]=(0,o.useState)(100),{toast:d}=function(){let[e,t]=o.useState(J);return o.useEffect(()=>(G.push(t),()=>{let e=G.indexOf(t);e>-1&&G.splice(e,1)}),[e]),{...e,toast:ee,dismiss:e=>Q({type:"DISMISS_TOAST",toastId:e})}}();return(0,n.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[(0,n.jsxs)("div",{className:"relative aspect-square bg-muted rounded-lg overflow-hidden",children:[(0,n.jsx)(X(),{src:t.image,alt:t.name,fill:!0,className:"object-cover"}),i&&(0,n.jsx)("div",{className:"absolute transition-all",style:{left:"".concat(s.x,"%"),top:"".concat(s.y,"%"),transform:"translate(-50%, -50%) scale(".concat(u/100,")")},children:(0,n.jsx)(X(),{src:i.image,alt:i.name,width:150,height:150,className:"object-contain"})})]}),(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"Select Design"}),(0,n.jsx)("div",{className:"grid grid-cols-2 gap-4",children:r.map(e=>(0,n.jsx)(B,{design:e,selected:(null==i?void 0:i.id)===e.id,onClick:()=>a(e)},e.id))})]}),i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"font-semibold mb-2",children:"Position X"}),(0,n.jsx)(K,{value:[s.x],onValueChange:e=>{let[t]=e;return l(e=>({...e,x:t}))},min:0,max:100})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"font-semibold mb-2",children:"Position Y"}),(0,n.jsx)(K,{value:[s.y],onValueChange:e=>{let[t]=e;return l(e=>({...e,y:t}))},min:0,max:100})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"font-semibold mb-2",children:"Size"}),(0,n.jsx)(K,{value:[u],onValueChange:e=>{let[t]=e;return c(t)},min:50,max:150})]})]}),(0,n.jsxs)(V.z,{onClick:()=>{if(!i){d({title:"Please select a design",description:"You need to choose a design before adding to cart",variant:"destructive"});return}d({title:"Added to cart!",description:"Your customized product has been added to the cart"})},className:"w-full",children:["Add to Cart - $",t.price]})]})]})}},3023:function(e,t,r){"use strict";r.d(t,{z:function(){return u}});var n=r(7437),o=r(2265),i=r(7256),a=r(9213),s=r(9311);let l=(0,a.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),u=o.forwardRef((e,t)=>{let{className:r,variant:o,size:a,asChild:u=!1,...c}=e,d=u?i.g7:"button";return(0,n.jsx)(d,{className:(0,s.cn)(l({variant:o,size:a,className:r})),ref:t,...c})});u.displayName="Button"},6110:function(e,t,r){"use strict";r.d(t,{Ol:function(){return s},Zb:function(){return a},aY:function(){return c},eW:function(){return d},ll:function(){return l}});var n=r(7437),o=r(2265),i=r(9311);let a=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...o})});a.displayName="Card";let s=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",r),...o})});s.displayName="CardHeader";let l=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("h3",{ref:t,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",r),...o})});l.displayName="CardTitle";let u=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("p",{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",r),...o})});u.displayName="CardDescription";let c=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("p-6 pt-0",r),...o})});c.displayName="CardContent";let d=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("flex items-center p-6 pt-0",r),...o})});d.displayName="CardFooter"},9311:function(e,t,r){"use strict";r.d(t,{cn:function(){return i}});var n=r(7042),o=r(4769);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.m6)((0,n.W)(t))}},3388:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{suspense:function(){return o},NoSSR:function(){return i}}),r(1024),r(2265);let n=r(4922);function o(){let e=Error(n.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=n.NEXT_DYNAMIC_NO_SSR_CODE,e}function i(e){let{children:t}=e;return t}}},function(e){e.O(0,[264,971,864,744],function(){return e(e.s=7327)}),_N_E=e.O()}]);