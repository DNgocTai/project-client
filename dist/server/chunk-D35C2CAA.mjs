import './polyfills.server.mjs';
import{a as n}from"./chunk-NL7WNEJB.mjs";import{Rb as h,S as c,W as s,Z as a,o,rc as p}from"./chunk-QBAPEAMH.mjs";c();h();var u=(()=>{let e=class e{constructor(t){this.http=t,this.baseUrl=n.apiUrl}createCategory(t){return this.http.post(`${this.baseUrl}/categories`,t)}getCategories(){return this.http.get(`${this.baseUrl}/categories`).pipe(o(t=>t))}updateCategory(t,i){return this.http.patch(`${this.baseUrl}/categories/${t}`,i)}deleteCategory(t){return this.http.delete(`${this.baseUrl}/categories/${t}`)}};e.\u0275fac=function(i){return new(i||e)(a(p))},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();export{u as a};
