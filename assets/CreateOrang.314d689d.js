import{o as d,W as m,w as s,b as o,V as i,aw as p,ba as h,ax as n,be as f,d as u,a as c}from"./index.fa88f1bf.js";import{U as g}from"./UsulanDataService.91c5946e.js";import{_ as V}from"./UiParentCard.f1125c3a.js";import{V as k}from"./VSheet.eb540cf0.js";import{V as b}from"./VForm.d5fcb38f.js";import{a as w,V as S}from"./VRow.48645a00.js";import"./BasicService.a832d833.js";import"./AuthService.5cd25173.js";/* empty css              */const y=u("Kembali"),U=u(" submit "),_=c("br",null,null,-1),j={data(){return{form:!1,loading:!1,kelompoks:[{kode:"123123123123",uraian:"KAKAOAMAO AKOAMA"}],search:"",kelompok:"",jenis:"",kode:"",uraian:"",headers:[{key:"jenis",title:"Jenis"},{key:"kode",title:"Kode"},{key:"uraian",title:"Uraian"}],itemsPerPage:10,serverItems:[],totalItems:0}},watch:{jenis(){this.search=String(Date.now())},kode(){this.search=String(Date.now())},uraian(){this.search=String(Date.now())}},methods:{required(r){return!!r||"Field is required"},makeSearch:async(r,e)=>{r||(e.personOptions=[],e.person=""),!e.loadingPerson&&(e.loadingPerson=!0,await Person.where("name",r).get().then(a=>{e.personOptions=a.data}).catch(a=>{e.error="Unknown Error. Please check details and try again.",e.failed()}).finally(()=>e.loadingLearner=!1))},save(){alert(this.search)},customFilter(r,e,a){return console.log(r),console.log(e),console.log(a),!0},loadItems({page:r,itemsPerPage:e,sortBy:a}){this.loading=!0,g.getAll(r,e,a,{jenis:this.jenis,kode:this.kode,uraian:this.uraian}).then(t=>{this.serverItems=[],t.data.data.forEach(l=>{this.serverItems.push({jenis:l.attributes.jenis,kode:l.attributes.kode,uraian:l.attributes.uraian})}),this.totalItems=t.data.meta.pagination.total,this.loading=!1}).catch(t=>{console.log(t)})}}},F=Object.assign(j,{setup(r){return(e,a)=>(d(),m(S,null,{default:s(()=>[o(w,{cols:"12",md:"12"},{default:s(()=>[o(V,{title:"Buat Usulan Standar Harga"},{action:s(()=>[o(i,{to:"/orang",class:"ma-2",color:"warning",density:"default"},{default:s(()=>[y]),_:1})]),default:s(()=>[o(k,{class:"ma-2"},{default:s(()=>[o(b,{modelValue:e.form,"onUpdate:modelValue":a[2]||(a[2]=t=>p(form)?form.value=t:null),"fast-fail":"",onSubmit:h(e.submit,["prevent"])},{default:s(()=>[o(n,{modelValue:e.nama,"onUpdate:modelValue":a[0]||(a[0]=t=>e.nama=t),label:"Nama",rules:[e.required]},null,8,["modelValue","rules"]),o(f,{label:"Select",items:["laki-laki","perempuan"],rules:[e.required]},null,8,["rules"]),o(n,{type:"number",step:"any",min:"1",modelValue:e.umur,"onUpdate:modelValue":a[1]||(a[1]=t=>e.umur=t),label:"Umur",rules:[e.required]},null,8,["modelValue","rules"]),o(i,{loading:e.loading,disabled:!e.form,color:"success",class:"me-4",type:"submit"},{default:s(()=>[U]),_:1},8,["loading","disabled"])]),_:1},8,["modelValue","onSubmit"]),_]),_:1})]),_:1})]),_:1})]),_:1}))}});export{F as default};
