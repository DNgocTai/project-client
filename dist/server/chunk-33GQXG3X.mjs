import './polyfills.server.mjs';
import{la as F,pa as h,x as g,z as C}from"./chunk-I33TF6FU.mjs";import"./chunk-MYPL3S4U.mjs";import"./chunk-MTOZBATF.mjs";import"./chunk-ULKW5OLO.mjs";import"./chunk-LWZVMZIC.mjs";import"./chunk-NL7WNEJB.mjs";import{$ as n,Ga as c,Ha as s,Pa as i,Rb as w,Wa as a,Xa as m,Ya as d,Za as p,_b as l,ic as f,ob as u,pc as v}from"./chunk-QBAPEAMH.mjs";import"./chunk-YELSAYKL.mjs";v();w();v();function S(e,t){if(e&1&&p(0,"app-product-comp",2),e&2){let y=t.$implicit;i("product",y)}}var L=(()=>{let t=class t{constructor(r){this.productsService=r,this.products=[]}ngOnInit(){this.productsService.getProducts().subscribe(r=>{this.products=r.data.filter(o=>o.categoryName==="LavAzza"&&o.status===!0)})}};t.\u0275fac=function(o){return new(o||t)(s(g))},t.\u0275cmp=n({type:t,selectors:[["app-lavazza"]],standalone:!0,features:[u],decls:3,vars:1,consts:[["id","products",1,"row","row-cols-5","row-cols-lg-2","row-cols-sm-1","g-3"],[3,"product",4,"ngFor","ngForOf"],[3,"product"]],template:function(o,z){o&1&&(p(0,"app-filter"),m(1,"div",0),a(2,S,1,1,"app-product-comp",1),d()),o&2&&(c(2),i("ngForOf",z.products))},dependencies:[f,l,h,C,F]});let e=t;return e})();export{L as LavazzaComponent};
