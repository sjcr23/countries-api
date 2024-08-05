import{A as u,B as R,C as w,D as L,E as V,F as X,G as M,H as f,I as N,J as Y,K as Z,O as ee,Q as te,R as ie,S as q,V as b,W as O,Y as ne,a as k,b as z,c as U,d as J,e as v,f as H,g as B,h as G,i as g,j as P,k as K,l as Q,m as T,n as s,o as h,p as d,q as m,r,s as o,t as p,u as W,v as x,w as C,x as F,y as a,z as _}from"./chunk-K7W6JTOO.js";var y=(()=>{let e=class e{constructor(t){this.httpClient=t,this.url="https://restcountries.com/v3.1",this.cacheStorage={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStorage))}loadLocalStorage(){let t=localStorage.getItem("cacheStore");t&&(this.cacheStorage=JSON.parse(t))}getCountriesRequest(t){return this.httpClient.get(t).pipe(U(n=>k([])))}searchById(t){let n=`${this.url}/alpha/${t}`;return this.httpClient.get(n).pipe(z(c=>c.length>0?c[0]:null),U(c=>k(null)))}searchCapital(t){let n=`${this.url}/capital/${t}`;return this.getCountriesRequest(n).pipe(v(c=>this.cacheStorage.byCapital={term:t,countries:c}),v(()=>this.saveToLocalStorage()))}searchCountry(t){let n=`${this.url}/name/${t}`;return this.httpClient.get(n).pipe(v(c=>this.cacheStorage.byCountries={term:t,countries:c}),v(()=>this.saveToLocalStorage()))}searchRegion(t){let n=`${this.url}/region/${t}`;return this.getCountriesRequest(n).pipe(v(c=>this.cacheStorage.byRegion={region:t,countries:c}),v(()=>this.saveToLocalStorage()))}};e.\u0275fac=function(n){return new(n||e)(G(Z))},e.\u0275prov=H({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var pe=i=>["/countries/by/",i];function ue(i,e){i&1&&(r(0,"div",2),a(1,` No hay informaci\xF3n que mostrar
`),o())}function de(i,e){if(i&1&&(r(0,"tr")(1,"td"),a(2),o(),r(3,"td"),a(4),o(),r(5,"td"),p(6,"img",5),o(),r(7,"td"),a(8),o(),r(9,"td"),a(10),o(),r(11,"td"),a(12),w(13,"number"),o(),r(14,"td")(15,"a",6),a(16,"Ver m\xE1s"),o()()()),i&2){let l=e.$implicit,t=e.index;s(2),_(t+1),s(2),u(" ",l.flag," "),s(2),m("src",l.flags.svg,T)("alt",l.name.common),s(2),_(l.name.common),s(2),_(l.capital),s(2),_(L(13,8,l.population)),s(3),m("routerLink",R(10,pe,l.cca3))}}function ge(i,e){if(i&1&&(r(0,"table",3)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),o(),r(5,"th"),a(6,"Icon"),o(),r(7,"th"),a(8,"Bandera"),o(),r(9,"th"),a(10,"Nombre"),o(),r(11,"th"),a(12,"Capital"),o(),r(13,"th"),a(14,"Poblaci\xF3n"),o(),p(15,"th"),o()(),r(16,"tbody"),d(17,de,17,12,"tr",4),o()()),i&2){let l=C();s(17),m("ngForOf",l.countries)}}var I=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center mt-2",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center","mt-2"],[1,"table","table-hover","mt-2"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(n,c){if(n&1&&d(0,ue,2,0,"div",1)(1,ge,18,1,"ng-template",null,0,V),n&2){let E=F(2);m("ngIf",c.countries.length===0)("ngIfElse",E)}},dependencies:[M,f,ie,N],styles:["img[_ngcontent-%COMP%]{width:25px}"]});let i=e;return i})();function fe(i,e){i&1&&p(0,"shared-loading-spinner")}var re=(()=>{let e=class e{constructor(t){this.countriesService=t,this.countries=[],this.capitalValue="",this.isLoading=!0}ngOnInit(){this.countries=this.countriesService.cacheStorage.byCapital.countries,this.capitalValue=this.countriesService.cacheStorage.byCapital.term}searchByCapital(t){console.log("From ByCapitalPage"),console.log({query:t}),this.countriesService.searchCapital(t).subscribe(n=>{this.countries=n,this.isLoading=!1})}};e.\u0275fac=function(n){return new(n||e)(h(y))},e.\u0275cmp=g({type:e,selectors:[["app-by-capital-page"]],decls:10,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Ingrese su b\xFAsqueda ...",3,"onValue","initialValue"],[4,"ngIf"],[3,"countries"]],template:function(n,c){n&1&&(r(0,"h2"),a(1,"Por Capital"),o(),p(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),x("onValue",function($){return c.searchByCapital($)}),o()()(),r(6,"div",0)(7,"div",1),d(8,fe,1,0,"shared-loading-spinner",3),p(9,"countries-table",4),o()()),n&2&&(s(5),m("initialValue",c.capitalValue),s(3),m("ngIf",c.isLoading),s(),m("countries",c.countries))},dependencies:[f,b,O,I]});let i=e;return i})();function ye(i,e){i&1&&p(0,"shared-loading-spinner")}var ae=(()=>{let e=class e{constructor(t){this.countriesService=t,this.countries=[],this.countryValue="",this.isLoading=!0}ngOnInit(){this.countries=this.countriesService.cacheStorage.byCountries.countries,this.countryValue=this.countriesService.cacheStorage.byCountries.term}searchByCountry(t){console.log("From ByCountryPage"),console.log({query:t}),this.countriesService.searchCountry(t).subscribe(n=>{this.countries=n,this.isLoading=!1})}};e.\u0275fac=function(n){return new(n||e)(h(y))},e.\u0275cmp=g({type:e,selectors:[["app-by-country-page"]],decls:10,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Ingrese su b\xFAsqueda ...",3,"onValue","initialValue"],[4,"ngIf"],[3,"countries"]],template:function(n,c){n&1&&(r(0,"h2"),a(1,"Por Pais"),o(),p(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),x("onValue",function($){return c.searchByCountry($)}),o()()(),r(6,"div",0)(7,"div",1),d(8,ye,1,0,"shared-loading-spinner",3),p(9,"countries-table",4),o()()),n&2&&(s(5),m("initialValue",c.countryValue),s(3),m("ngIf",c.isLoading),s(),m("countries",c.countries))},dependencies:[f,b,O,I]});let i=e;return i})();var ve=i=>({"btn-outline-primary":i});function Ce(i,e){if(i&1){let l=W();r(0,"button",6),x("click",function(){let n=K(l).$implicit,c=C();return Q(c.searchByRegion(n))}),a(1),o()}if(i&2){let l=e.$implicit,t=C();m("value",t.searchByRegion)("ngClass",R(3,ve,t.selectedRegion===l)),s(),u(" ",l," ")}}function Se(i,e){i&1&&p(0,"shared-loading-spinner")}var se=(()=>{let e=class e{constructor(t){this.countriesService=t,this.regions=["Africa","Americas","Asia","Europe","Oceania"],this.countries=[],this.isLoading=!0}ngOnInit(){this.selectedRegion=this.countriesService.cacheStorage.byRegion.region,this.countries=this.countriesService.cacheStorage.byRegion.countries}searchByRegion(t){console.log("From ByRegionPage"),console.log({query:t}),this.selectedRegion=t,this.countriesService.searchRegion(t).subscribe(n=>{this.countries=n,this.isLoading=!1})}};e.\u0275fac=function(n){return new(n||e)(h(y))},e.\u0275cmp=g({type:e,selectors:[["app-by-region-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"value","ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[4,"ngIf"],[3,"countries"],[1,"btn","mx-2",3,"click","value","ngClass"]],template:function(n,c){n&1&&(r(0,"h2"),a(1,"Por Regi\xF3n"),o(),p(2,"hr"),r(3,"div",0)(4,"div",1),d(5,Ce,2,5,"button",2),o()(),p(6,"hr"),r(7,"div",0)(8,"div",3),d(9,Se,1,0,"shared-loading-spinner",4),p(10,"countries-table",5),o()()),n&2&&(s(5),m("ngForOf",c.regions),s(4),m("ngIf",c.isLoading),s(),m("countries",c.countries))},dependencies:[X,M,f,b,I]});let i=e;return i})();function xe(i,e){i&1&&(r(0,"div",2),a(1," Porfavor espere "),o())}function be(i,e){if(i&1&&(r(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),a(4),o()(),p(5,"hr"),o(),r(6,"div",3)(7,"div",5)(8,"h3"),a(9,"Bandera"),o(),p(10,"img",6),o(),r(11,"div",7)(12,"h3"),a(13,"Informaci\xF3n"),o(),r(14,"ul",8)(15,"li",9)(16,"strong"),a(17,"C\xF3digo:"),o(),a(18),o(),r(19,"li",9)(20,"strong"),a(21,"Capital:"),o(),a(22),o(),r(23,"li",9)(24,"strong"),a(25,"Poblaci\xF3n:"),o(),a(26),w(27,"number"),o()()()(),p(28,"hr"),r(29,"div",10)(30,"div",7)(31,"h3"),a(32,"Traducciones"),o(),r(33,"div",11)(34,"span",12),a(35),o(),r(36,"span",12),a(37),o(),r(38,"span",12),a(39),o(),r(40,"span",12),a(41),o(),r(42,"span",12),a(43),o()()()()()),i&2){let l=C();s(4),u("Pa\xEDs: ",l.country.name.common,""),s(6),m("src",l.country.flags.svg,T)("alt",l.country.name.common),s(8),u(" ",l.country.cca3," "),s(4),u(" ",l.country.capital," "),s(4),u(" ",L(27,11,l.country.population)," "),s(9),u(" ",l.country.translations.ara.common,""),s(2),u(" ",l.country.translations.kor.common,""),s(2),u(" ",l.country.translations.ces.common,""),s(2),u(" ",l.country.translations.per.common,""),s(2),u(" ",l.country.translations.spa.common,"")}}var ce=(()=>{let e=class e{constructor(t,n,c){this.activatedRoute=t,this.countriesService=n,this.router=c}ngOnInit(){this.activatedRoute.params.pipe(J(({id:t})=>this.countriesService.searchById(t))).subscribe(t=>t?this.country=t:this.router.navigateByUrl(""))}};e.\u0275fac=function(n){return new(n||e)(h(ee),h(y),h(te))},e.\u0275cmp=g({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loadign",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"df-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(n,c){if(n&1&&d(0,xe,2,0,"ng-template",null,0,V)(2,be,44,13,"div",1),n&2){let E=F(1);s(2),m("ngIf",c.country)("ngIfElse",E)}},dependencies:[f,N]});let i=e;return i})();var Ie=[{path:"by-capital",component:re},{path:"by-country",component:ae},{path:"by-region",component:se},{path:"by/:id",component:ce},{path:"**",redirectTo:"by-capital"}],le=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=P({type:e}),e.\u0275inj=B({imports:[q.forChild(Ie),q]});let i=e;return i})();var We=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=P({type:e}),e.\u0275inj=B({imports:[Y,le,ne]});let i=e;return i})();export{We as CountriesModule};
