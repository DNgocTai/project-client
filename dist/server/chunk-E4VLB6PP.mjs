import './polyfills.server.mjs';
import{c as q,d as G,f as $,h as J,i as K,j as Q,k as W,l as X,m as Y,o as Z,q as ee,r as te}from"./chunk-IVN3MSIV.mjs";import{d as R}from"./chunk-PUEK35PK.mjs";import{ca as k,ea as V,ga as B,ha as H,ma as L,s as O,v as I}from"./chunk-SDTOFMW7.mjs";import"./chunk-UB6DA732.mjs";import{D,sa as P}from"./chunk-ZIF7NW3R.mjs";import"./chunk-ULKW5OLO.mjs";import"./chunk-PL6GSD7N.mjs";import{h as f,u as U,v as w,w as _,y as A,z as j}from"./chunk-EEJHWMI6.mjs";import{$ as g,Ac as y,Ga as a,Ha as m,Pa as d,Pb as ie,Va as b,Wa as t,Xa as i,Ya as M,Yb as S,ec as F,gc as E,hb as N,ib as r,jb as c,kb as h,mb as z,nc as T,qb as x,rb as C,wa as v}from"./chunk-UYPILK5A.mjs";import"./chunk-YELSAYKL.mjs";A();T();ie();A();T();function re(s,o){if(s&1&&(t(0,"tr")(1,"td"),M(2,"img",3),i(),t(3,"td",4),r(4),i(),t(5,"td",4),r(6),i(),t(7,"td",4),r(8),x(9,"date"),i(),t(10,"td",4),r(11),i()()),s&2){let e=o.$implicit;a(2),d("src",(e==null?null:e.avatarUrl)||"../../../assets/images/avatar/user.jpg",v)("alt",e==null?null:e.name),a(2),c(e==null?null:e.fullName),a(2),h(" ",e==null?null:e.username," "),a(2),c(C(9,6,e==null?null:e.createdAt)),a(3),h(" ",e==null?null:e.role," ")}}var ye=(()=>{let o=class o{constructor(n,l,u,p){this.accountSrv=n,this.message=l,this.fb=u,this.title=p,this.users=[],this.isVisible=!1,this.isConfirmLoading=!1,this.data={username:"",password:"",fullName:"",role:""},this.userForm=this.fb.group({username:["",f.required],password:["",f.required],fullName:[""],role:[""]})}ngOnInit(){this.title.setTitle("Ng\u01B0\u1EDDi d\xF9ng | Grocery Coffee"),this.loadUsers()}createUser(n){this.accountSrv.createUser(n).subscribe(()=>{this.users=[...this.users],this.message.success("T\u1EA1o m\u1EDBi ng\u01B0\u1EDDi d\xF9ng th\xE0nh c\xF4ng"),this.loadUsers()})}loadUsers(){this.accountSrv.getUsers().subscribe(n=>{this.users=n.data})}showModal(){this.isVisible=!0}handleOk(){this.isConfirmLoading=!0,setTimeout(()=>{this.isVisible=!1,this.isConfirmLoading=!1,this.submitForm()},1e3)}handleCancel(){this.isVisible=!1,this.userForm.reset()}submitForm(){this.data.username=this.userForm.value.username,this.data.password=this.userForm.value.password,this.data.fullName=this.userForm.value.fullName,this.data.role=this.userForm.value.role,this.createUser(this.data),this.userForm.reset()}};o.\u0275fac=function(l){return new(l||o)(m(j),m(P),m(U),m(y))},o.\u0275cmp=g({type:o,selectors:[["app-dashboard-user"]],standalone:!0,features:[z],decls:16,vars:2,consts:[["ngSkipHydration","",3,"nzData"],["basicTable",""],[4,"ngFor","ngForOf"],["width","50px","height","50px",2,"border-radius","999px",3,"src","alt"],[2,"vertical-align","middle"]],template:function(l,u){if(l&1&&(t(0,"nz-table",0,1)(2,"thead")(3,"tr")(4,"th"),r(5,"Avatar"),i(),t(6,"th"),r(7,"H\u1ECD v\xE0 t\xEAn"),i(),t(8,"th"),r(9,"T\xE0i kho\u1EA3n"),i(),t(10,"th"),r(11,"Ng\xE0y t\u1EA1o"),i(),t(12,"th"),r(13,"Role"),i()()(),t(14,"tbody"),b(15,re,12,8,"tr",2),i()()),l&2){let p=N(1);d("nzData",u.users),a(15),d("ngForOf",p.data)}},dependencies:[E,S,F,Y,Q,$,J,X,K,W,G,w,Z,D,L,O,ee,R,_,B,H,k,V,I,te,q],styles:["nz-table[_ngcontent-%COMP%]{margin-top:1.6rem}.search-box[_ngcontent-%COMP%]{padding:8px}.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:188px;margin-bottom:8px;display:block}.search-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:90px}.search-button[_ngcontent-%COMP%]{margin-right:8px}"]});let s=o;return s})();export{ye as DashboardUserComponent};