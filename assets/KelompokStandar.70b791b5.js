import{_ as i}from"./UiParentCard.4dfa5ecf.js";import{o as n,$ as l,w as a,b as r,au as c,av as m,ag as p}from"./index.a6a3998a.js";import{V as d,a as f}from"./VRow.af2deaf3.js";/* empty css              */const b={data(){return{search:"",headers:[{align:"start",key:"name",sortable:!1,title:"Dessert (100g serving)"},{key:"calories",title:"Calories"},{key:"fat",title:"Fat (g)"},{key:"carbs",title:"Carbs (g)"},{key:"protein",title:"Protein (g)"},{key:"iron",title:"Iron (%)"}],desserts:[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,iron:1},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,iron:1},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,iron:7},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,iron:8},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,iron:16},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,iron:0},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,iron:2},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,iron:45},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,iron:22},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,iron:6},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,iron:6}]}}},y=Object.assign(b,{setup(u){return(e,t)=>{const o=p("v-data-table");return n(),l(f,null,{default:a(()=>[r(d,{cols:"12",md:"12"},{default:a(()=>[r(i,{title:"Kelompok Standar Harga"},{default:a(()=>[r(o,{headers:e.headers,items:e.desserts,search:e.search},{top:a(()=>[r(c,{modelValue:e.search,"onUpdate:modelValue":t[0]||(t[0]=s=>m(search)?search.value=s:null),label:"Search","single-line":"","hide-details":""},null,8,["modelValue"])]),_:1},8,["headers","items","search"])]),_:1})]),_:1})]),_:1})}}});export{y as default};
