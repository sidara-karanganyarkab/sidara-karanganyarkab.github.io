import{B as p}from"./BasicService.a832d833.js";import{_ as h}from"./UiParentCard.f1125c3a.js";import{V as m,a as i}from"./VRow.48645a00.js";import{V as d}from"./VSheet.eb540cf0.js";import{o as g,W as f,w as s,b as e,aw as r,ax as u,a as k,ac as v}from"./index.fa88f1bf.js";import"./AuthService.5cd25173.js";/* empty css              */class V extends p{constructor(){super("kelompoks")}}var c=new V;const _=k("br",null,null,-1),b={data(){return{search:"",jenis:"",kode:"",uraian:"",headers:[{key:"jenis",title:"Jenis"},{key:"kode",title:"Kode"},{key:"uraian",title:"Uraian"}],itemsPerPage:10,serverItems:[],loading:!0,totalItems:0}},watch:{jenis(){this.search=String(Date.now())},kode(){this.search=String(Date.now())},uraian(){this.search=String(Date.now())}},methods:{loadItems({page:n,itemsPerPage:a,sortBy:l}){this.loading=!0,c.getAll(n,a,l,{jenis:this.jenis,kode:this.kode,uraian:this.uraian}).then(o=>{this.serverItems=[],o.data.data.forEach(t=>{this.serverItems.push({jenis:t.attributes.jenis,kode:t.attributes.kode,uraian:t.attributes.uraian})}),this.totalItems=o.data.meta.pagination.total,this.loading=!1}).catch(o=>{console.log(o)})}}},D=Object.assign(b,{setup(n){return(a,l)=>{const o=v("v-data-table-server");return g(),f(m,null,{default:s(()=>[e(i,{cols:"12",md:"12"},{default:s(()=>[e(h,{title:"Kelompok Standar Harga"},{default:s(()=>[e(o,{"items-per-page":a.itemsPerPage,"onUpdate:items-per-page":l[3]||(l[3]=t=>r(itemsPerPage)?itemsPerPage.value=t:null),headers:a.headers,"items-length":a.totalItems,items:a.serverItems,loading:a.loading,search:a.search,"item-value":"name","onUpdate:options":a.loadItems},{top:s(()=>[e(m,{"no-gutters":""},{default:s(()=>[e(i,null,{default:s(()=>[e(d,{class:"ma-2"},{default:s(()=>[e(u,{modelValue:a.jenis,"onUpdate:modelValue":l[0]||(l[0]=t=>r(jenis)?jenis.value=t:null),label:"Filter Jenis"},null,8,["modelValue"])]),_:1})]),_:1}),e(i,null,{default:s(()=>[e(d,{class:"ma-2"},{default:s(()=>[e(u,{modelValue:a.kode,"onUpdate:modelValue":l[1]||(l[1]=t=>r(kode)?kode.value=t:null),label:"Filter Kode"},null,8,["modelValue"])]),_:1})]),_:1}),e(i,null,{default:s(()=>[e(d,{class:"ma-2"},{default:s(()=>[e(u,{modelValue:a.uraian,"onUpdate:modelValue":l[2]||(l[2]=t=>r(uraian)?uraian.value=t:null),label:"Filter Uraian"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["items-per-page","headers","items-length","items","loading","search","onUpdate:options"]),_]),_:1})]),_:1})]),_:1})}}});export{D as default};
