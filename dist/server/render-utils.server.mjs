import './polyfills.server.mjs';
import{a as w,b as P,d as A,e as I,f as V}from"./chunk-TWDH7NYL.mjs";import"./chunk-UB6DA732.mjs";import"./chunk-ULKW5OLO.mjs";import{Ab as f,Bb as g,Fb as h,Gb as p,Gc as S,Hc as T,Ib as y,Kb as C,Pb as E}from"./chunk-UYPILK5A.mjs";import{k as l,l as d,m as u}from"./chunk-YELSAYKL.mjs";E();E();function a(e,n,i,t=""){return d(this,null,function*(){for(let r of e){let{path:o,redirectTo:c,loadChildren:_,children:R}=r;if(o===void 0)continue;let s=F(t,o);if(c!==void 0){yield{route:s,success:!1,redirect:!0};continue}if(/[:*]/.test(o)){yield{route:s,success:!1,redirect:!1};continue}if(yield{route:s,success:!0,redirect:!1},R?.length&&(yield*u(a(R,n,i,s))),_){let m=yield new l(S(r,n,i).toPromise());if(m){let{routes:L,injector:N=i}=m;yield*u(a(L,n,N,s))}}}})}function b(e,n){return d(this,null,function*(){let i=y(C,"server",[{provide:w,useValue:{document:n,url:""}},{provide:f,useFactory:()=>{class t extends f{ignoredLogs=new Set(["Angular is running in development mode."]);log(o){this.ignoredLogs.has(o)||super.log(o)}}return new t}},...P])();try{let t;x(e)?t=yield new l(e()):t=(yield new l(i.bootstrapModule(e))).injector.get(h),yield new l(p(t));let r=t.injector,o=r.get(T);if(o.config.length===0)yield{route:"",success:!0,redirect:!1};else{let c=r.get(g);yield*u(a(o.config,c,r))}}finally{i.destroy()}})}function x(e){return typeof e=="function"&&!("\u0275mod"in e)}function F(...e){return e.filter(Boolean).join("/")}export{b as extractRoutes,V as renderApplication,I as renderModule,f as \u0275Console,A as \u0275SERVER_CONTEXT};