(()=>{"use strict";var e={9111:(e,t,r)=>{r(6992),r(8674),r(9601),r(7727);var n=r(9242),a=r(3396),o={id:"app"};function s(e,t,r,n,s,i){var c=(0,a.up)("router-link"),l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("nav",null,[(0,a.Wm)(c,{to:"/create-registro"},{default:(0,a.w5)((function(){return[(0,a.Uk)("registro")]})),_:1}),(0,a.Uk)(" | "),(0,a.Wm)(c,{to:"/create-login"},{default:(0,a.w5)((function(){return[(0,a.Uk)("login")]})),_:1}),(0,a.Uk)(" | "),(0,a.Wm)(c,{to:"/carrito-compra"},{default:(0,a.w5)((function(){return[(0,a.Uk)("carrito compra")]})),_:1}),(0,a.Uk)(" | "),(0,a.Wm)(c,{to:"/view-product"},{default:(0,a.w5)((function(){return[(0,a.Uk)("lista de Productos")]})),_:1})]),(0,a.Wm)(l)])}var i=r(8366),c=r(9217);const l={name:"viewProduct",components:{CarritoCompra:i.Z,ListaProductos:c.Z},data:function(){return{}},methods:{}};var u=r(89);const d=(0,u.Z)(l,[["render",s]]),p=d;r(1539),r(8783),r(3948);var _=r(2483),m=[{path:"/create-registro",name:"createRegistro",component:function(){return r.e(443).then(r.bind(r,2197))}},{path:"/create-login",name:"createLogin",component:function(){return r.e(443).then(r.bind(r,6579))}},{path:"/carrito-compra",name:"carritoCompra",component:function(){return r.e(443).then(r.bind(r,588))}},{path:"/view-Product",name:"viewProduct",component:function(){return r.e(443).then(r.bind(r,5624))}}],f=(0,_.p7)({history:(0,_.PO)("/carrito/"),routes:m});const h=f;r(7658),r(561),r(2772);var b=r(847);const v=(0,b.MT)({state:{selectedItems:[]},mutations:{addToSelectedItems:function(e,t){e.selectedItems.push(t)},removeFromSelectedItems:function(e,t){e.selectedItems.splice(t,1)}},actions:{addItem:function(e,t){var r=e.commit;r("addToSelectedItems",t)},removeItem:function(e,t){var r=e.commit,n=e.state,a=n.selectedItems.indexOf(t);-1!==a&&r("removeFromSelectedItems",a)}},getters:{selectedItems:function(e){return e.selectedItems}}});var g=r(4161),w=r(6423);r(6463),r(5654);(0,n.ri)(p).use(v).use(w.Z,g.Z).use(h).mount("#app")},8366:(e,t,r)=>{r.d(t,{Z:()=>T});r(8309);var n=r(3396),a=r(7139),o=r(9242),s=function(e){return(0,n.dD)("data-v-b826aa8a"),e=e(),(0,n.Cn)(),e},i=s((function(){return(0,n._)("h1",null,"Carrito de compra",-1)})),c={class:"container"},l={class:"col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex"},u={class:"table"},d=s((function(){return(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"Producto"),(0,n._)("th",null,"Precio"),(0,n._)("th",null,"Cantidad"),(0,n._)("th",null,"Total"),(0,n._)("th")])],-1)})),p={class:"row"},_={class:"col-3"},m=["onClick","disabled"],f={class:"col-4"},h=["onUpdate:modelValue"],b={class:"col-3"},v=["onClick"],g=["onClick"];function w(e,t,r,s,w,y){return(0,n.wg)(),(0,n.iD)("div",null,[i,(0,n._)("div",c,[(0,n._)("div",l,[(0,n._)("table",u,[d,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(y.cartItems,(function(e,t){return(0,n.wg)(),(0,n.iD)("tr",{key:e.name},[(0,n._)("td",null,(0,a.zw)(e.name),1),(0,n._)("td",null,(0,a.zw)(e.price),1),(0,n._)("td",null,[(0,n._)("div",p,[(0,n._)("div",_,[(0,n._)("button",{onClick:function(t){return y.decrementQuantity(e)},disabled:1===e.quantity,class:"btn btn-secondary mt-2 ms-2",id:"decrement-btn"}," - ",8,m)]),(0,n._)("div",f,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":function(t){return e.quantity=t},class:(0,a.C_)(["form-control",e.quantity>0?"positive":"negative"]),id:"quantity-input"},null,10,h),[[o.nr,e.quantity]])]),(0,n._)("div",b,[(0,n._)("button",{onClick:function(t){return y.incrementQuantity(e)},class:"btn btn-secondary mt-2",id:"increment-btn"}," + ",8,v)])])]),(0,n._)("td",null,(0,a.zw)(y.getTotal(e)),1),(0,n._)("td",null,[(0,n._)("button",{class:"btn btn-danger",onClick:function(t){return y.removeFromCart(e)}}," Eliminar ",8,g)])])})),128))])])])])])}var y=r(5082);r(9554),r(1539),r(4747),r(9826),r(7658);const k={name:"CarritoCompra",computed:{cartItems:function(){var e=[],t=this.$store.getters.selectedItems;return t.forEach((function(t){var r=e.find((function(e){return e.name===t.name}));r?r.quantity+=1:e.push((0,y.Z)((0,y.Z)({},t),{},{quantity:1}))})),e}},methods:{decrementQuantity:function(e){e.quantity>1&&e.quantity--},incrementQuantity:function(e){e.quantity++},getTotal:function(e){return e.price*e.quantity},removeFromCart:function(e){this.$store.dispatch("removeItem",e)}}};var C=r(89);const j=(0,C.Z)(k,[["render",w],["__scopeId","data-v-b826aa8a"]]),T=j},9217:(e,t,r)=>{r.d(t,{Z:()=>g});r(8309);var n=r(3396),a=r(7139),o=function(e){return(0,n.dD)("data-v-949d60ea"),e=e(),(0,n.Cn)(),e},s=o((function(){return(0,n._)("h1",null,"Lista de Productos",-1)})),i={class:"row"},c={class:"card card-item"},l=["src"],u={class:"card-body"},d={class:"card-title"},p={class:"card-text"},_=["onClick"];function m(e,t,r,o,m,f){return(0,n.wg)(),(0,n.iD)("div",null,[s,(0,n._)("form",null,[(0,n._)("div",i,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(m.items,(function(e){return(0,n.wg)(),(0,n.iD)("div",{class:"col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 col p-5",key:e.name},[(0,n._)("div",c,[(0,n._)("img",{src:e.url,class:"card-img-top d-flex justify-content-center product-image",alt:"Imagen del producto",id:"cake"},null,8,l),(0,n._)("div",u,[(0,n._)("h5",d,(0,a.zw)(e.name),1),(0,n._)("p",p,"Precio: "+(0,a.zw)(e.price),1)]),(0,n._)("div",null,[(0,n._)("button",{type:"button",onClick:function(t){return f.agregarAlCarrito(e)},class:"btn btn-success mb-2"}," Agregar Carrito ",8,_)])])])})),128))])])])}const f=JSON.parse('[{"name":"Torta de Vainilla","price":1000,"url":"https://cdn0.recetasgratis.net/es/posts/9/2/1/torta_clasica_de_vainilla_34129_600.webp"},{"name":"Torta de Naranja y Chocolate","price":1200,"url":"https://cdn0.recetasgratis.net/es/posts/5/2/1/torta_de_naranja_y_chocolate_57125_600.webp"},{"name":"Bizcocho de Limón","price":1400,"url":"https://cdn0.recetasgratis.net/es/posts/3/9/4/bizcocho_de_limon_sin_azucar_59493_600.webp"},{"name":"Bizcocho de Aceite","price":400,"url":"https://cdn0.recetasgratis.net/es/posts/4/1/1/bizcocho_de_aceite_15114_600.webp"},{"name":"Flan de Arroz","price":800,"url":"https://cdn0.recetasgratis.net/es/posts/7/1/9/flan_de_arroz_con_leche_sin_horno_66917_600.webp"},{"name":"Torta Keto","price":700,"url":"https://cdn0.recetasgratis.net/es/posts/2/0/2/torta_keto_76202_600.webp"},{"name":"Bunelos Rapidos","price":600,"url":"https://cdn0.recetasgratis.net/es/posts/9/8/2/bunuelos_rapidos_15289_600.webp"},{"name":"Donas","price":700,"url":"https://cdn0.recetasgratis.net/es/posts/8/3/0/masa_para_donas_51038_300_square.webp"},{"name":"Tarta de Frutas","price":15000,"url":"https://cdn0.recetasgratis.net/es/posts/3/5/9/tarta_de_frutas_sin_horno_60953_600.webp"},{"name":"Bizcocho 3 ingredientes","price":10600,"url":"https://cdn0.recetasgratis.net/es/posts/2/4/5/bizcocho_con_3_ingredientes_76542_600.webp"},{"name":"Tartas de Galletas y Chocolate","price":6000,"url":"https://cdn0.recetasgratis.net/es/posts/7/6/3/tarta_de_galletas_y_chocolate_de_la_abuela_73367_600.webp"},{"name":"Galletas de vainilla","price":6800,"url":"https://cdn0.recetasgratis.net/es/posts/5/4/2/galletas_de_vainilla_faciles_32245_600.webp"},{"name":"Tortitas Veganas","price":9000,"url":"https://cdn0.recetasgratis.net/es/posts/7/2/2/tortitas_veganas_61227_600.webp"},{"name":"Budin de avena","price":11900,"url":"https://cdn0.recetasgratis.net/es/posts/9/4/4/budin_de_avena_sin_harina_ni_azucar_76449_600.webp"},{"name":"Torta de Platano","price":600,"url":"https://cdn0.recetasgratis.net/es/posts/1/9/4/torta_de_platano_maduro_51491_600.webp"},{"name":"Alfajores","price":1000,"url":"https://cdn0.recetasgratis.net/es/posts/9/7/0/alfajores_chilenos_15079_600.webp"},{"name":"Tortilla Souffle con queso y perejil","price":7600,"url":"https://cdn0.recetasgratis.net/es/posts/4/1/7/tortilla_souffle_con_queso_y_perejil_28714_600.webp"},{"name":"Flan de Naranja","price":4600,"url":"https://cdn0.recetasgratis.net/es/posts/7/8/1/flan_de_naranja_sin_leche_70187_600.webp"},{"name":"Bizcocho de Yoghurt y Manzana","price":5600,"url":"https://cdn0.recetasgratis.net/es/posts/5/0/3/bizcocho_de_yogur_y_manzana_67305_600.webp"},{"name":"Torta con queso","price":17000,"url":"https://cdn0.recetasgratis.net/es/posts/2/7/9/tarta_de_limon_sin_queso_75972_600.webp"},{"name":"Torta con queso","price":1700,"url":"https://cdn0.recetasgratis.net/es/posts/5/6/7/torta_de_auyama_facil_10765_600.webp"}]'),h={name:"ListaProductos",data:function(){return{items:[]}},mounted:function(){this.items=f,console.log("items",this.items)},methods:{agregarAlCarrito:function(e){this.$store.dispatch("addItem",e),console.log("selectedItems",this.$store.getters.selectedItems)}}};var b=r(89);const v=(0,b.Z)(h,[["render",m],["__scopeId","data-v-949d60ea"]]),g=v}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,(()=>{r.amdO={}})(),(()=>{var e=[];r.O=(t,n,a,o)=>{if(!n){var s=1/0;for(u=0;u<e.length;u++){for(var[n,a,o]=e[u],i=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(i=!1,o<s&&(s=o));if(i){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,a,o]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/about.bd3806ba.js"})(),(()=>{r.miniCssF=e=>{}})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.hmd=e=>(e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e)})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="listaproductos:";r.l=(n,a,o,s)=>{if(e[n])e[n].push(a);else{var i,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+o),i.src=n),e[n]=[a];var p=(t,r)=>{i.onerror=i.onload=null,clearTimeout(_);var a=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(r))),t)return t(r)},_=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/carrito/"})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var o=new Promise(((r,n)=>a=e[t]=[r,n]));n.push(a[2]=o);var s=r.p+r.u(t),i=new Error,c=n=>{if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,a[1](i)}};r.l(s,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[s,i,c]=n,l=0;if(s.some((t=>0!==e[t]))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(c)var u=c(r)}for(t&&t(n);l<s.length;l++)o=s[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},n=self["webpackChunklistaproductos"]=self["webpackChunklistaproductos"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[998],(()=>r(9111)));n=r.O(n)})();
//# sourceMappingURL=app.1e433f4f.js.map