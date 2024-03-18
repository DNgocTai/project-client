import './polyfills.server.mjs';
import{c as J,d as K,f as Y,h as Z,i as ee,j as te,k as ie,l as ne,m as re,n as oe,o as ae,p as le,q as me,r as de}from"./chunk-IVN3MSIV.mjs";import{d as q}from"./chunk-PUEK35PK.mjs";import{M as $,ca as G,ea as Q,ga as U,ha as W,ma as X,o as w,q as A,r as B,s as V,v as k}from"./chunk-SDTOFMW7.mjs";import"./chunk-UB6DA732.mjs";import{C as I,D as F,sa as j}from"./chunk-ZIF7NW3R.mjs";import"./chunk-ULKW5OLO.mjs";import"./chunk-PL6GSD7N.mjs";import{v as L,w as H,y as ce,z as R}from"./chunk-EEJHWMI6.mjs";import{$ as z,$a as x,Ac as P,Ga as l,Ha as c,Pa as u,Pb as se,Va as v,Wa as e,Xa as t,Ya as f,Yb as T,cb as E,ea as g,eb as M,fa as C,fc as D,gc as _,hb as b,ib as n,jb as p,kb as h,mb as N,nc as y,qb as S,tb as O}from"./chunk-UYPILK5A.mjs";import"./chunk-YELSAYKL.mjs";ce();y();se();y();function pe(m,a){if(m&1){let i=x();e(0,"tr")(1,"td",3),n(2),t(),e(3,"td",3),n(4),t(),e(5,"td",3),n(6),t(),e(7,"td",3),n(8),t(),e(9,"td",3),n(10),S(11,"currency"),t(),e(12,"td",3),f(13,"nz-divider",4),e(14,"a")(15,"button",5),E("nzOnConfirm",function(){let d=g(i).$implicit,s=M();return C(s.delete(d._id))}),f(16,"span",6),t()()()()}if(m&2){let i=a.$implicit;l(2),p(i==null?null:i._id),l(2),p(i==null?null:i.fullName),l(2),h(" ",i==null?null:i.address," "),l(2),p(i==null?null:i.totalQty),l(2),h(" ",O(11,5,i==null?null:i.totalAmount," ","symbol","1.0-0"),"\u0111 ")}}var $e=(()=>{let a=class a{constructor(r,o,d,s){this.accountSrv=r,this.orderSrv=o,this.message=d,this.title=s,this.orders=[],this.isVisible=!1,this.isConfirmLoading=!1}ngOnInit(){this.title.setTitle("\u0110\u01A1n h\xE0ng | Grocery Coffee"),this.loadOrders()}delete(r){this.orderSrv.deleteOrder(r).subscribe(()=>{this.orders=this.orders.filter(o=>o.id!==r),this.message.success("X\xF3a \u0111\u01A1n h\xE0ng th\xE0nh c\xF4ng"),this.loadOrders()})}loadOrders(){this.orderSrv.getOrders().subscribe(r=>{this.orders=r.data})}showModal(){this.isVisible=!0}handleOk(){this.isConfirmLoading=!0,setTimeout(()=>{this.isVisible=!1,this.isConfirmLoading=!1},1e3)}handleCancel(){this.isVisible=!1}};a.\u0275fac=function(o){return new(o||a)(c(R),c($),c(j),c(P))},a.\u0275cmp=z({type:a,selectors:[["app-dashboard-order"]],standalone:!0,features:[N],decls:18,vars:2,consts:[["ngSkipHydration","",3,"nzData"],["basicTable",""],[4,"ngFor","ngForOf"],[2,"vertical-align","middle"],["nzType","vertical"],["nz-button","","nzType","primary","nzDanger","","nz-popconfirm","","nzPopconfirmTitle","B\u1EA1n ch\u1EAFc ch\u1EE9?","nzOkText","x\xE1c nh\u1EADn","nzCancelText","h\u1EE7y",3,"nzOnConfirm"],["nz-icon","","nzType","delete","nzTheme","outline"]],template:function(o,d){if(o&1&&(e(0,"nz-table",0,1)(2,"thead")(3,"tr")(4,"th"),n(5,"M\xE3 \u0111\u01A1n h\xE0ng"),t(),e(6,"th"),n(7,"T\xEAn ng\u01B0\u1EDDi d\xF9ng"),t(),e(8,"th"),n(9,"\u0110\u1ECBa ch\u1EC9"),t(),e(10,"th"),n(11,"S\u1ED1 l\u01B0\u1EE3ng"),t(),e(12,"th"),n(13,"T\u1ED5ng"),t(),e(14,"th"),n(15,"Ch\u1EE9c n\u0103ng"),t()()(),e(16,"tbody"),v(17,pe,17,10,"tr",2),t()()),o&2){let s=b(1);u("nzData",d.orders),l(17),u("ngForOf",s.data)}},dependencies:[_,T,D,re,te,Y,Z,ne,ee,ie,K,L,ae,oe,F,I,X,V,B,w,A,me,le,q,H,U,W,G,Q,k,de,J],styles:["nz-table[_ngcontent-%COMP%]{margin-top:1.6rem}.search-box[_ngcontent-%COMP%]{padding:8px}.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:188px;margin-bottom:8px;display:block}.search-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:90px}.search-button[_ngcontent-%COMP%]{margin-right:8px}"]});let m=a;return m})();export{$e as DashboardOrderComponent};
