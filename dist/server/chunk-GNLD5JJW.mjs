import './polyfills.server.mjs';
import{a as bt,b as xt,c as vt,d as St,f as Nt,h as Tt,i as yt,j as Dt,k as Pt,l as Ft,m as At,n as Mt,o as Vt,p as wt,q as Ot,r as It}from"./chunk-KREXQVCC.mjs";import{a as Ct}from"./chunk-D35C2CAA.mjs";import{d as gt}from"./chunk-BF3DVIIK.mjs";import{$ as st,I as ot,Q as at,R as lt,_ as mt,aa as ct,ba as pt,ca as ut,da as dt,ea as ht,fa as ft,ga as zt,ha as _t,o as $,pa as Et,q as j,r as B,s as U,v as q,x as X}from"./chunk-I33TF6FU.mjs";import"./chunk-MYPL3S4U.mjs";import{C as G,D as H,ta as W}from"./chunk-MTOZBATF.mjs";import"./chunk-ULKW5OLO.mjs";import"./chunk-LWZVMZIC.mjs";import{h as J,i as K,k as Q,l as Y,p as Z,r as tt,s as et,v as it,w as nt,x as rt,z as T}from"./chunk-NL7WNEJB.mjs";import{$ as y,$a as F,$b as O,Bb as b,Cc as R,Ga as a,Ha as _,Pa as m,Rb as Rt,Wa as E,Xa as i,Ya as n,Za as u,_a as P,_b as w,ab as S,db as h,ea as f,fa as z,fb as d,hc as I,ib as C,ic as k,jb as l,kb as x,lb as N,ob as A,pc as L,sb as M,vb as V,wa as D}from"./chunk-QBAPEAMH.mjs";import{a as v}from"./chunk-YELSAYKL.mjs";T();T();L();Rt();T();L();function Gt(r,c){if(r&1){let t=S();i(0,"tr")(1,"td"),u(2,"img",8),n(),i(3,"td",9),l(4),n(),i(5,"td",9),l(6),M(7,"currency"),n(),i(8,"td",9),l(9),n(),i(10,"td",9)(11,"app-switch",10),h("click",function(){let s=f(t).$implicit,p=d();return z(p.toggleActive(s))}),n()(),i(12,"td",9)(13,"a")(14,"button",11),h("click",function(){let s=f(t).$implicit,p=d();return z(p.patchValue(s))}),u(15,"span",12),l(16," S\u1EEDa "),n()(),u(17,"nz-divider",13),i(18,"a")(19,"button",14),h("nzOnConfirm",function(){let s=f(t).$implicit,p=d();return z(p.delete(s._id))}),u(20,"span",15),n()()()()}if(r&2){let t=c.$implicit;a(2),m("src",t==null?null:t.avatarUrl,D)("alt",t==null?null:t.name),a(2),x(t==null?null:t.name),a(2),N(" ",V(7,6,t==null?null:t.price," ","symbol","1.0-0"),"\u0111 "),a(3),x(t==null?null:t.star),a(2),m("switchValue",t==null?null:t.status)}}function Ht(r,c){if(r&1&&l(0),r&2){let t=d();x(t.isEdit?"Ch\u1EC9nh s\u1EEDa s\u1EA3n ph\u1EA9m":"Th\xEAm s\u1EA3n ph\u1EA9m")}}function $t(r,c){r&1&&(P(0),l(1,"H\xE3y nh\u1EADp t\xEAn s\u1EA3n ph\u1EA9m!"),F())}function jt(r,c){if(r&1&&E(0,$t,2,0,"ng-container",25),r&2){let t=c.$implicit;m("ngIf",t.hasError("required"))}}function Bt(r,c){if(r&1&&u(0,"nz-option",26),r&2){let t=c.$implicit;m("nzValue",t.name)("nzLabel",t.name)}}function Ut(r,c){if(r&1&&(i(0,"form",16)(1,"nz-form-item")(2,"nz-form-label",17),l(3,"T\xEAn s\u1EA3n ph\u1EA9m"),n(),i(4,"nz-form-control",18),u(5,"input",19),E(6,jt,1,1,"ng-template",null,20,b),n()(),i(8,"nz-form-item")(9,"nz-form-label",17),l(10,"Gi\xE1"),n(),i(11,"nz-form-control",18),u(12,"input",21),n()(),i(13,"nz-form-item")(14,"nz-form-label",17),l(15,"\u0110\xE1nh gi\xE1"),n(),i(16,"nz-form-control",18),u(17,"input",22),n()(),i(18,"nz-form-item")(19,"nz-form-label",17),l(20,"T\xEAn danh m\u1EE5c"),n(),i(21,"nz-form-control",18)(22,"nz-select",23),E(23,Bt,1,2,"nz-option",24),n()()()()),r&2){let t=C(7),e=d();m("formGroup",e.productForm),a(2),m("nzSpan",7),a(2),m("nzSpan",12)("nzErrorTip",t),a(5),m("nzSpan",7),a(2),m("nzSpan",12)("nzErrorTip",t),a(3),m("nzSpan",7),a(2),m("nzSpan",12)("nzErrorTip",t),a(3),m("nzSpan",7),a(2),m("nzSpan",12)("nzErrorTip",t),a(2),m("ngForOf",e.productCat)}}function qt(r,c){if(r&1){let t=S();i(0,"button",11),h("click",function(){f(t);let o=d();return z(o.handleCancel())}),l(1,"H\u1EE7y"),n(),i(2,"button",27),h("click",function(){f(t);let o=d();return z(o.handleOk())}),l(3),n()}if(r&2){let t=d();a(2),m("nzLoading",t.isConfirmLoading)("disabled",!t.productForm.valid),a(1),N(" ",t.isEdit?"C\u1EADp nh\u1EADt":"X\xE1c nh\u1EADn"," ")}}var Ae=(()=>{let c=class c{constructor(e,o,s,p,g){this.productSrv=e,this.message=o,this.fb=s,this.categorySrv=p,this.title=g,this.products=[],this.productCat=[],this.fileUrl="",this.editId="",this.isEdit=!1,this.isVisible=!1,this.isConfirmLoading=!1,this.visibleSearch=!1,this.data={name:"",price:"",star:"",categoryName:""},this.productForm=this.fb.group({name:["",K.required],price:[""],star:[""],categoryName:[""]})}ngOnInit(){this.title.setTitle("S\u1EA3n ph\u1EA9m | Grocery Coffee"),this.loadProducts(),this.categorySrv.getCategories().subscribe(e=>{this.productCat=e.data.filter(o=>o.status===!0)})}createProduct(e){this.productSrv.createProduct(e).subscribe(()=>{this.products=[...this.products],this.message.success("T\u1EA1o m\u1EDBi s\u1EA3n ph\u1EA9m th\xE0nh c\xF4ng"),this.loadProducts()})}updateProduct(e,o){this.productSrv.updateProduct(o,e).subscribe(()=>{this.products=this.products.map(s=>s._id===o?v(v({},s),e):s)})}delete(e){this.productSrv.deleteProduct(e).subscribe(()=>{this.products=this.products.filter(o=>o.id!==e),this.message.success("Xo\xE1 s\u1EA3n ph\u1EA9m th\xE0nh c\xF4ng"),this.loadProducts()})}loadProducts(){this.productSrv.getProducts().subscribe(e=>{this.products=e.data})}toggleActive(e){e.status=!e.status,this.updateProduct(e,e._id)}showModal(){this.isVisible=!0}patchValue(e){this.isEdit=!0,this.editId=e._id,this.productForm.patchValue({name:e.name,price:e.price,star:e.star,categoryName:e.categoryName}),this.showModal()}handleOk(){this.isConfirmLoading=!0,setTimeout(()=>{this.isVisible=!1,this.isConfirmLoading=!1,this.submitForm()},1e3)}handleCancel(){this.isVisible=!1,this.isEdit&&(this.isEdit=!1),this.productForm.reset()}submitForm(){this.data.name=this.productForm.value.name,this.data.price=this.productForm.value.price.toString(),this.data.star=this.productForm.value.star.toString(),this.data.categoryName=this.productForm.value.categoryName,this.isEdit?(this.updateProduct(this.data,this.editId),this.message.success("C\u1EADp nh\u1EADt s\u1EA3n ph\u1EA9m th\xE0nh c\xF4ng")):this.createProduct(this.data),this.productForm.reset(),this.isEdit=!1}};c.\u0275fac=function(o){return new(o||c)(_(X),_(W),_(it),_(Ct),_(R))},c.\u0275cmp=y({type:c,selectors:[["app-dashboard-product"]],standalone:!0,features:[A],decls:27,vars:6,consts:[["nz-button","","nzType","primary",3,"click"],["ngSkipHydration","",3,"nzData"],["basicTable",""],[4,"ngFor","ngForOf"],[3,"nzVisible","nzTitle","nzContent","nzFooter","nzVisibleChange","nzOnCancel"],["modalTitle",""],["modalContent",""],["modalFooter",""],["width","70px",3,"src","alt"],[2,"vertical-align","middle"],[3,"switchValue","click"],["nz-button","","nzType","default",3,"click"],["nz-icon","","nzType","edit","nzTheme","outline"],["nzType","vertical"],["nz-button","","nzType","primary","nzDanger","","nz-popconfirm","","nzPopconfirmTitle","B\u1EA1n ch\u1EAFc ch\u1EE9?","nzOkText","x\xE1c nh\u1EADn","nzCancelText","h\u1EE7y",3,"nzOnConfirm"],["nz-icon","","nzType","delete","nzTheme","outline"],["nz-form","",3,"formGroup"],["nzRequired","",3,"nzSpan"],[3,"nzSpan","nzErrorTip"],["nz-input","","formControlName","name","placeholder","Nh\u1EADp t\xEAn s\u1EA3n ph\u1EA9m"],["userErrorTpl",""],["nz-input","","formControlName","price","placeholder","H\xE3y nh\u1EADp gi\xE1 ti\u1EC1n"],["nz-input","","formControlName","star","placeholder","Nh\u1EADp s\u1ED1 sao"],["formControlName","categoryName"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"nzValue","nzLabel"],["nz-button","","nzType","primary",3,"nzLoading","disabled","click"]],template:function(o,s){if(o&1&&(i(0,"button",0),h("click",function(){return s.showModal()}),l(1,` + Th\xEAm s\u1EA3n ph\u1EA9m
`),n(),i(2,"nz-table",1,2)(4,"thead")(5,"tr")(6,"th"),l(7,"H\xECnh \u1EA3nh"),n(),i(8,"th"),l(9,"T\xEAn"),n(),i(10,"th"),l(11,"Gi\xE1"),n(),i(12,"th"),l(13,"\u0110\xE1nh gi\xE1"),n(),i(14,"th"),l(15,"Tr\u1EA1ng th\xE1i"),n(),i(16,"th"),l(17,"Ch\u1EE9c n\u0103ng"),n()()(),i(18,"tbody"),E(19,Gt,21,11,"tr",3),n()(),i(20,"nz-modal",4),h("nzVisibleChange",function(g){return s.isVisible=g})("nzOnCancel",function(){return s.handleCancel()}),E(21,Ht,1,1,"ng-template",null,5,b)(23,Ut,24,14,"ng-template",null,6,b)(25,qt,4,3,"ng-template",null,7,b),n()),o&2){let p=C(3),g=C(22),kt=C(24),Lt=C(26);a(2),m("nzData",s.products),a(17),m("ngForOf",p.data),a(1),m("nzVisible",s.isVisible)("nzTitle",g)("nzContent",kt)("nzFooter",Lt)}},dependencies:[k,w,O,I,At,Dt,Nt,Tt,Ft,yt,Pt,St,nt,Z,J,Q,Y,Vt,Mt,H,G,Et,ot,U,B,$,j,Ot,wt,gt,rt,tt,et,zt,ft,_t,ut,lt,at,st,mt,pt,ct,ht,dt,q,It,vt,bt,xt],styles:["nz-table[_ngcontent-%COMP%]{margin-top:1.6rem}.search-box[_ngcontent-%COMP%]{padding:8px}.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:188px;margin-bottom:8px;display:block}.search-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:90px}.search-button[_ngcontent-%COMP%]{margin-right:8px}"]});let r=c;return r})();export{Ae as DashboardProductComponent};
