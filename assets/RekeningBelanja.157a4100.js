import{B as p}from"./BasicService.24d238b0.js";import{_ as g}from"./UiParentCard.8ea34135.js";import{V as d,a as i}from"./VRow.9eba0281.js";import{V as u}from"./VSheet.62e00de9.js";import{o as h,S as f,w as t,b as a,au as n,av as m,a as k,aa as v}from"./index.a952784d.js";import"./AuthService.00a71ac6.js";/* empty css              */class c extends p{constructor(){super("rekenings")}}var V=new c;const _=k("br",null,null,-1),b={data(){return{search:"",kode:"",uraian:"",headers:[{key:"kode",title:"Kode"},{key:"uraian",title:"Uraian"}],itemsPerPage:10,serverItems:[],loading:!0,totalItems:0}},watch:{kode(){this.search=String(Date.now())},uraian(){this.search=String(Date.now())}},methods:{loadItems({page:r,itemsPerPage:e,sortBy:s}){this.loading=!0,V.getAll(r,e,s,{kode:this.kode,uraian:this.uraian}).then(o=>{this.serverItems=[],o.data.data.forEach(l=>{this.serverItems.push({kode:l.attributes.kode,uraian:l.attributes.uraian})}),this.totalItems=o.data.meta.pagination.total,this.loading=!1}).catch(o=>{console.log(o)})}}},D=Object.assign(b,{setup(r){return(e,s)=>{const o=v("v-data-table-server");return h(),f(d,null,{default:t(()=>[a(i,{cols:"12",md:"12"},{default:t(()=>[a(g,{title:"Rekening Belanja"},{default:t(()=>[a(o,{"items-per-page":e.itemsPerPage,"onUpdate:items-per-page":s[2]||(s[2]=l=>n(itemsPerPage)?itemsPerPage.value=l:null),headers:e.headers,"items-length":e.totalItems,items:e.serverItems,loading:e.loading,search:e.search,"item-value":"name","onUpdate:options":e.loadItems},{top:t(()=>[a(d,{"no-gutters":""},{default:t(()=>[a(i,null,{default:t(()=>[a(u,{class:"ma-2"},{default:t(()=>[a(m,{modelValue:e.kode,"onUpdate:modelValue":s[0]||(s[0]=l=>n(kode)?kode.value=l:null),label:"Filter Kode"},null,8,["modelValue"])]),_:1})]),_:1}),a(i,null,{default:t(()=>[a(u,{class:"ma-2"},{default:t(()=>[a(m,{modelValue:e.uraian,"onUpdate:modelValue":s[1]||(s[1]=l=>n(uraian)?uraian.value=l:null),label:"Filter Uraian"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["items-per-page","headers","items-length","items","loading","search","onUpdate:options"]),_]),_:1})]),_:1})]),_:1})}}});export{D as default};
