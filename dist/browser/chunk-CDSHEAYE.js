import{Cb as g,Hc as n,Ic as p,Kc as S,Wb as c,Y as d,aa as s,da as a,i as h,v as u}from"./chunk-7GT6WUS2.js";g();var m=(()=>{let r=class r{constructor(e,t){this.http=e,this.localStorage=t,this.baseUrl="http://localhost:3000",this.cart=[],this.subTotal=0}getTotalQty(){return this.cart?.reduce((e,t)=>e+=t.quantity,0)}getTotalPrice(){return this.cart?.reduce((e,t)=>e+=t.totalAmount,0)}addToCart(e,t){this.getLocalStorage();let i=this.cart.find(l=>l._id===t);console.log(!i),i?this.addOne(t):this.cart.push(e),this.setLocalStorage()}deleteCart(e){let t=this.cart.filter(i=>i._id!==e);this.cart=[...t],this.setLocalStorage()}addOne(e){let t=this.cart.find(i=>i._id===e);t.quantity=t.quantity+1,t.totalAmount=t.price*t.quantity,this.cart=[...this.cart],this.setLocalStorage(),this.getLocalStorage(),console.log(this.cart)}minusOne(e){let t=this.cart.find(i=>i._id===e);t.quantity>1&&(t.quantity=t.quantity-1,t.totalAmount=t.price*t.quantity,this.cart=[...this.cart],this.setLocalStorage(),this.getLocalStorage(),console.log(this.cart))}setLocalStorage(){this.cart=this.localStorage.store("shopping-cart",this.cart)}getLocalStorage(){this.cart=this.localStorage.retrieve("shopping-cart")}isEmptyCart(){return this.cart?.length===0}clearAllCart(){this.cart=[],this.setLocalStorage()}};r.\u0275fac=function(t){return new(t||r)(a(c),a(n))},r.\u0275prov=s({token:r,factory:r.\u0275fac,providedIn:"root"});let o=r;return o})();d();g();var T=(()=>{let r=class r{constructor(e,t,i,l,f){this.http=e,this._localStorage=t,this.$sessionStorage=i,this.accountSrv=l,this.cartSrv=f,this.baseUrl="http://localhost:3000"}login(e){return this.http.post(`${this.baseUrl}/auth/login`,e).pipe(u(t=>this.authenticateSuccess(t,!0)))}logout(){return new h(e=>{this._localStorage.clear("authToken"),this.$sessionStorage.clear("authToken"),this.cartSrv.clearAllCart(),this._localStorage.clear("role"),e.complete()})}signUp(e){return this.accountSrv.createUser(e)}authenticateSuccess(e,t){let i=e.data.access_token;t?(this._localStorage.store("authToken",i),this.$sessionStorage.clear("authToken")):(this.$sessionStorage.store("authToken",i),this._localStorage.clear("authToken"))}isMatchPassword(e,t){debugger;return e===t}};r.\u0275fac=function(t){return new(t||r)(a(c),a(n),a(p),a(S),a(m))},r.\u0275prov=s({token:r,factory:r.\u0275fac,providedIn:"root"});let o=r;return o})();export{m as a,T as b};
