import{g as b,bc as p,bd as v,r as h,u as R,b as V,a$ as F}from"./index.2ab1e309.js";const g=b()({name:"VForm",props:{...p()},emits:{"update:modelValue":n=>!0,submit:n=>!0},setup(n,m){let{slots:o,emit:u}=m;const r=v(n),s=h();function f(t){t.preventDefault(),r.reset()}function l(t){const a=t,e=r.validate();a.then=e.then.bind(e),a.catch=e.catch.bind(e),a.finally=e.finally.bind(e),u("submit",a),a.defaultPrevented||e.then(c=>{var i;let{valid:d}=c;d&&((i=s.value)==null||i.submit())}),a.preventDefault()}return R(()=>{var t;return V("form",{ref:s,class:"v-form",novalidate:!0,onReset:f,onSubmit:l},[(t=o.default)==null?void 0:t.call(o,r)])}),F(r,s)}});export{g as V};
