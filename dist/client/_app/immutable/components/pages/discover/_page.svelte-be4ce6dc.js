import{S as ge,i as me,s as be,k as v,q as A,a as T,l as g,m as _,r as S,h as f,c as F,n as u,Y as Te,b as P,I as d,a6 as ce,a7 as Fe,J as ae,N as Y,a8 as ve,K as Ke,L as Ge,o as He,a9 as Oe,w as R,x as W,y as X,g as qe,t as U,d as Ye,f as z,z as x,ak as Qe,ab as se,ac as ie,ad as Re}from"../../../chunks/index-238b7a49.js";import{L as We,N as Xe,F as xe}from"../../../chunks/Layout-41497be9.js";import{a as et}from"../../../chunks/Api-422a0345.js";import"../../../chunks/navigation-ea050fcb.js";import{p as Je}from"../../../chunks/stores-1681d161.js";/* empty css                                                          */import{T as tt}from"../../../chunks/TripCard-7bef2b53.js";import{n as lt}from"../../../chunks/notification-fe6ae2a9.js";import{G as rt}from"../../../chunks/GenericHero-ed301f40.js";function Le(i,e,l){const r=i.slice();return r[8]=e[l],r}function Me(i,e,l){const r=i.slice();return r[8]=e[l],r}function Ae(i){let e,l=i[8]+"",r,t;return{c(){e=v("option"),r=A(l),this.h()},l(a){e=g(a,"OPTION",{});var s=_(e);r=S(s,l),s.forEach(f),this.h()},h(){e.disabled=t=i[8]===i[0].destination,e.__value=i[8],e.value=e.__value},m(a,s){P(a,e,s),d(e,r)},p(a,s){s&3&&t!==(t=a[8]===a[0].destination)&&(e.disabled=t)},d(a){a&&f(e)}}}function Se(i){let e,l=i[8]+"",r,t;return{c(){e=v("option"),r=A(l),this.h()},l(a){e=g(a,"OPTION",{});var s=_(e);r=S(s,l),s.forEach(f),this.h()},h(){e.disabled=t=i[8]===i[0].origin,e.__value=i[8],e.value=e.__value},m(a,s){P(a,e,s),d(e,r)},p(a,s){s&3&&t!==(t=a[8]===a[0].origin)&&(e.disabled=t)},d(a){a&&f(e)}}}function at(i){let e,l,r,t,a,s,o,n,h,$,c,C,m,y,Z,k,I,O,ee,w,E,B,L,H,M,j,G,J,fe,ue,te,K,de,_e,Ce,le=i[1],N=[];for(let b=0;b<le.length;b+=1)N[b]=Ae(Me(i,le,b));let re=i[1],V=[];for(let b=0;b<re.length;b+=1)V[b]=Se(Le(i,re,b));return{c(){e=v("div"),l=v("div"),r=v("label"),t=v("span"),a=A("Filtrer par lieu de d\xE9part:"),s=T(),o=v("select"),n=v("option"),h=A("Choisissez un lieu");for(let b=0;b<N.length;b+=1)N[b].c();$=T(),c=v("div"),C=v("label"),m=v("span"),y=A("Filtrer par lieu de destination:"),Z=T(),k=v("select"),I=v("option"),O=A("Choisissez un lieu");for(let b=0;b<V.length;b+=1)V[b].c();ee=T(),w=v("div"),E=v("label"),B=v("span"),L=A("Filtrer par date de d\xE9part souhait\xE9e:"),H=T(),M=v("input"),j=T(),G=v("div"),J=v("button"),fe=A("Filtrer"),ue=T(),te=v("div"),K=v("button"),de=A("Effacer"),this.h()},l(b){e=g(b,"DIV",{class:!0});var D=_(e);l=g(D,"DIV",{class:!0});var p=_(l);r=g(p,"LABEL",{class:!0,for:!0});var q=_(r);t=g(q,"SPAN",{class:!0});var Ee=_(t);a=S(Ee,"Filtrer par lieu de d\xE9part:"),Ee.forEach(f),q.forEach(f),s=F(p),o=g(p,"SELECT",{id:!0,class:!0});var he=_(o);n=g(he,"OPTION",{});var we=_(n);h=S(we,"Choisissez un lieu"),we.forEach(f);for(let Q=0;Q<N.length;Q+=1)N[Q].l(he);he.forEach(f),p.forEach(f),$=F(D),c=g(D,"DIV",{class:!0});var ne=_(c);C=g(ne,"LABEL",{class:!0,for:!0});var $e=_(C);m=g($e,"SPAN",{class:!0});var ke=_(m);y=S(ke,"Filtrer par lieu de destination:"),ke.forEach(f),$e.forEach(f),Z=F(ne),k=g(ne,"SELECT",{id:!0,class:!0});var pe=_(k);I=g(pe,"OPTION",{});var De=_(I);O=S(De,"Choisissez un lieu"),De.forEach(f);for(let Q=0;Q<V.length;Q+=1)V[Q].l(pe);pe.forEach(f),ne.forEach(f),ee=F(D),w=g(D,"DIV",{class:!0});var oe=_(w);E=g(oe,"LABEL",{class:!0,for:!0});var ye=_(E);B=g(ye,"SPAN",{class:!0});var Ie=_(B);L=S(Ie,"Filtrer par date de d\xE9part souhait\xE9e:"),Ie.forEach(f),ye.forEach(f),H=F(oe),M=g(oe,"INPUT",{id:!0,type:!0,class:!0}),oe.forEach(f),j=F(D),G=g(D,"DIV",{class:!0});var Be=_(G);J=g(Be,"BUTTON",{class:!0});var Ne=_(J);fe=S(Ne,"Filtrer"),Ne.forEach(f),Be.forEach(f),ue=F(D),te=g(D,"DIV",{class:!0});var Ve=_(te);K=g(Ve,"BUTTON",{class:!0});var Pe=_(K);de=S(Pe,"Effacer"),Pe.forEach(f),Ve.forEach(f),D.forEach(f),this.h()},h(){u(t,"class","label-text"),u(r,"class","label"),u(r,"for","island_start"),n.disabled=!0,n.selected=!0,n.__value="",n.value=n.__value,u(o,"id","island_start"),u(o,"class","select w-full select-bordered border-black"),i[0].origin===void 0&&Te(()=>i[4].call(o)),u(l,"class","form-control w-full"),u(m,"class","label-text"),u(C,"class","label"),u(C,"for","island_end"),I.disabled=!0,I.selected=!0,I.__value="",I.value=I.__value,u(k,"id","island_end"),u(k,"class","select w-full select-bordered border-black"),i[0].destination===void 0&&Te(()=>i[5].call(k)),u(c,"class","form-control w-full"),u(B,"class","label-text"),u(E,"class","label"),u(E,"for","departure_date"),u(M,"id","departure_date"),u(M,"type","date"),u(M,"class","input input-bordered w-full border-black"),u(w,"class","form-control w-full"),u(J,"class","btn btn-primary rounded w-48 text-xs"),u(G,"class",""),u(K,"class","btn btn-danger rounded w-48 text-xs"),u(te,"class",""),u(e,"class","lg:flex flex-row gap-3 items-end hidden")},m(b,D){P(b,e,D),d(e,l),d(l,r),d(r,t),d(t,a),d(l,s),d(l,o),d(o,n),d(n,h);for(let p=0;p<N.length;p+=1)N[p].m(o,null);ce(o,i[0].origin),d(e,$),d(e,c),d(c,C),d(C,m),d(m,y),d(c,Z),d(c,k),d(k,I),d(I,O);for(let p=0;p<V.length;p+=1)V[p].m(k,null);ce(k,i[0].destination),d(e,ee),d(e,w),d(w,E),d(E,B),d(B,L),d(w,H),d(w,M),Fe(M,i[0].departure_date),d(e,j),d(e,G),d(G,J),d(J,fe),d(e,ue),d(e,te),d(te,K),d(K,de),_e||(Ce=[ae(o,"change",i[4]),ae(k,"change",i[5]),ae(M,"input",i[6]),ae(J,"click",i[2]),ae(K,"click",i[3])],_e=!0)},p(b,[D]){if(D&3){le=b[1];let p;for(p=0;p<le.length;p+=1){const q=Me(b,le,p);N[p]?N[p].p(q,D):(N[p]=Ae(q),N[p].c(),N[p].m(o,null))}for(;p<N.length;p+=1)N[p].d(1);N.length=le.length}if(D&3&&ce(o,b[0].origin),D&3){re=b[1];let p;for(p=0;p<re.length;p+=1){const q=Le(b,re,p);V[p]?V[p].p(q,D):(V[p]=Se(q),V[p].c(),V[p].m(k,null))}for(;p<V.length;p+=1)V[p].d(1);V.length=re.length}D&3&&ce(k,b[0].destination),D&3&&Fe(M,b[0].departure_date)},i:Y,o:Y,d(b){b&&f(e),ve(N,b),ve(V,b),_e=!1,Ke(Ce)}}}function st(i,e,l){let r;Ge(i,Je,c=>l(7,r=c));let t={origin:"",destination:"",departure_date:""},a=["Anjouan","Grande Comore","Moheli","Mayotte","Tanzanie"];const s=c=>{c.preventDefault(),window.location.href=`/discover?filterByOrigin=${t.origin}&filterByDestination=${t.destination}&filterByDepartureDate=${t.departure_date}`},o=c=>{window.location.href="/discover"};He(()=>{var c,C,m;l(0,t={...t,origin:(c=r.url.searchParams.get("filterByOrigin"))!=null?c:""}),l(0,t={...t,destination:(C=r.url.searchParams.get("filterByDestination"))!=null?C:""}),l(0,t={...t,departure_date:(m=r.url.searchParams.get("filterByDepartureDate"))!=null?m:""})});function n(){t.origin=Oe(this),l(0,t),l(1,a)}function h(){t.destination=Oe(this),l(0,t),l(1,a)}function $(){t.departure_date=this.value,l(0,t),l(1,a)}return[t,a,s,o,n,h,$]}class it extends ge{constructor(e){super(),me(this,e,st,at,be,{})}}function ze(i,e,l){const r=i.slice();return r[5]=e[l],r}function nt(i){let e,l,r=i[0],t=[];for(let s=0;s<r.length;s+=1)t[s]=Ze(ze(i,r,s));const a=s=>U(t[s],1,1,()=>{t[s]=null});return{c(){e=v("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=g(s,"DIV",{class:!0});var o=_(e);for(let n=0;n<t.length;n+=1)t[n].l(o);o.forEach(f),this.h()},h(){u(e,"class","grid grid-cols-1 lg:grid-cols-4 gap-8")},m(s,o){P(s,e,o);for(let n=0;n<t.length;n+=1)t[n].m(e,null);l=!0},p(s,o){if(o&1){r=s[0];let n;for(n=0;n<r.length;n+=1){const h=ze(s,r,n);t[n]?(t[n].p(h,o),z(t[n],1)):(t[n]=Ze(h),t[n].c(),z(t[n],1),t[n].m(e,null))}for(qe(),n=r.length;n<t.length;n+=1)a(n);Ye()}},i(s){if(!l){for(let o=0;o<r.length;o+=1)z(t[o]);l=!0}},o(s){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)U(t[o]);l=!1},d(s){s&&f(e),ve(t,s)}}}function ot(i){let e,l,r;return{c(){e=v("div"),l=v("p"),r=A("Aucun vol n'a \xE9t\xE9 trouv\xE9"),this.h()},l(t){e=g(t,"DIV",{class:!0});var a=_(e);l=g(a,"P",{});var s=_(l);r=S(s,"Aucun vol n'a \xE9t\xE9 trouv\xE9"),s.forEach(f),a.forEach(f),this.h()},h(){u(e,"class","flex justify-center items-center")},m(t,a){P(t,e,a),d(e,l),d(l,r)},p:Y,i:Y,o:Y,d(t){t&&f(e)}}}function ct(i){let e,l,r,t;return{c(){e=v("div"),l=se("svg"),r=se("path"),t=se("path"),this.h()},l(a){e=g(a,"DIV",{class:!0});var s=_(e);l=ie(s,"svg",{role:!0,class:!0,viewBox:!0,fill:!0,xmlns:!0});var o=_(l);r=ie(o,"path",{d:!0,fill:!0}),_(r).forEach(f),t=ie(o,"path",{d:!0,fill:!0}),_(t).forEach(f),o.forEach(f),s.forEach(f),this.h()},h(){u(r,"d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"),u(r,"fill","currentColor"),u(t,"d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"),u(t,"fill","currentFill"),u(l,"role","status"),u(l,"class","mr-2 w-8 h-8 text-primary animate-spin dark:text-neutral fill-primary"),u(l,"viewBox","0 0 100 101"),u(l,"fill","none"),u(l,"xmlns","http://www.w3.org/2000/svg"),u(e,"class","flex justify-center")},m(a,s){P(a,e,s),d(e,l),d(l,r),d(l,t)},p:Y,i:Y,o:Y,d(a){a&&f(e)}}}function Ze(i){let e,l;return e=new tt({props:{id:i[5].id,trip_type:"flight",origin_airport_code:i[5].origin_airport_code,destination_airport_code:i[5].destination_airport_code,departure_date:i[5].departure_date,departure_time:i[5].departure_time,arrival_date:i[5].arrival_date,arrival_time:i[5].arrival_time,origin:i[5].origin,destination:i[5].destination,company_logo:i[5].company_logo}}),{c(){R(e.$$.fragment)},l(r){W(e.$$.fragment,r)},m(r,t){X(e,r,t),l=!0},p(r,t){const a={};t&1&&(a.id=r[5].id),t&1&&(a.origin_airport_code=r[5].origin_airport_code),t&1&&(a.destination_airport_code=r[5].destination_airport_code),t&1&&(a.departure_date=r[5].departure_date),t&1&&(a.departure_time=r[5].departure_time),t&1&&(a.arrival_date=r[5].arrival_date),t&1&&(a.arrival_time=r[5].arrival_time),t&1&&(a.origin=r[5].origin),t&1&&(a.destination=r[5].destination),t&1&&(a.company_logo=r[5].company_logo),e.$set(a)},i(r){l||(z(e.$$.fragment,r),l=!0)},o(r){U(e.$$.fragment,r),l=!1},d(r){x(e,r)}}}function Ue(i){let e,l,r,t;function a(n,h){return n[1]?ut:ft}let s=a(i),o=s(i);return{c(){e=v("div"),l=v("button"),o.c(),this.h()},l(n){e=g(n,"DIV",{class:!0});var h=_(e);l=g(h,"BUTTON",{class:!0});var $=_(l);o.l($),$.forEach(f),h.forEach(f),this.h()},h(){u(l,"class","btn btn-primary rounded-full w-48 text-xs mb-10"),u(e,"class","flex justify-center items-center mt-20")},m(n,h){P(n,e,h),d(e,l),o.m(l,null),r||(t=ae(l,"click",i[4]),r=!0)},p(n,h){s!==(s=a(n))&&(o.d(1),o=s(n),o&&(o.c(),o.m(l,null)))},d(n){n&&f(e),o.d(),r=!1,t()}}}function ft(i){let e,l;return{c(){e=v("span"),l=A("Charger plus")},l(r){e=g(r,"SPAN",{});var t=_(e);l=S(t,"Charger plus"),t.forEach(f)},m(r,t){P(r,e,t),d(e,l)},d(r){r&&f(e)}}}function ut(i){let e,l,r,t;return{c(){e=v("div"),l=se("svg"),r=se("path"),t=se("path"),this.h()},l(a){e=g(a,"DIV",{class:!0});var s=_(e);l=ie(s,"svg",{role:!0,class:!0,viewBox:!0,fill:!0,xmlns:!0});var o=_(l);r=ie(o,"path",{d:!0,fill:!0}),_(r).forEach(f),t=ie(o,"path",{d:!0,fill:!0}),_(t).forEach(f),o.forEach(f),s.forEach(f),this.h()},h(){u(r,"d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"),u(r,"fill","currentColor"),u(t,"d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"),u(t,"fill","currentFill"),u(l,"role","status"),u(l,"class","mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-white fill-primary"),u(l,"viewBox","0 0 100 101"),u(l,"fill","none"),u(l,"xmlns","http://www.w3.org/2000/svg"),u(e,"class","spin")},m(a,s){P(a,e,s),d(e,l),d(l,r),d(l,t)},d(a){a&&f(e)}}}function dt(i){let e,l,r,t,a,s,o,n,h,$,c,C,m,y,Z,k;c=new it({props:{type:"flights"}});const I=[ct,ot,nt],O=[];function ee(E,B){return E[1]?0:E[0].length===0?1:2}m=ee(i),y=O[m]=I[m](i);let w=i[0].length<i[2]&&Ue(i);return{c(){e=v("div"),l=v("div"),r=v("div"),t=v("h2"),a=A("Nos offres de voyages"),s=T(),o=v("div"),n=T(),h=v("div"),$=v("div"),R(c.$$.fragment),C=T(),y.c(),Z=T(),w&&w.c(),this.h()},l(E){e=g(E,"DIV",{class:!0});var B=_(e);l=g(B,"DIV",{class:!0});var L=_(l);r=g(L,"DIV",{class:!0});var H=_(r);t=g(H,"H2",{class:!0});var M=_(t);a=S(M,"Nos offres de voyages"),M.forEach(f),s=F(H),o=g(H,"DIV",{class:!0}),_(o).forEach(f),H.forEach(f),n=F(L),h=g(L,"DIV",{class:!0});var j=_(h);$=g(j,"DIV",{class:!0});var G=_($);W(c.$$.fragment,G),G.forEach(f),C=F(j),y.l(j),Z=F(j),w&&w.l(j),j.forEach(f),L.forEach(f),B.forEach(f),this.h()},h(){u(t,"class","text-xl lg:text-2xl font-bold text-neutral uppercase"),u(o,"class","h-[5px] mt-2 bg-primary w-24 md:w-48 md:self-end"),u(r,"class","flex flex-col w-fit"),u($,"class","mb-16"),u(h,"class","mt-16"),u(l,"class","container"),u(e,"class","px-8 lg:px-16")},m(E,B){P(E,e,B),d(e,l),d(l,r),d(r,t),d(t,a),d(r,s),d(r,o),d(l,n),d(l,h),d(h,$),X(c,$,null),d(h,C),O[m].m(h,null),d(h,Z),w&&w.m(h,null),k=!0},p(E,[B]){let L=m;m=ee(E),m===L?O[m].p(E,B):(qe(),U(O[L],1,1,()=>{O[L]=null}),Ye(),y=O[m],y?y.p(E,B):(y=O[m]=I[m](E),y.c()),z(y,1),y.m(h,Z)),E[0].length<E[2]?w?w.p(E,B):(w=Ue(E),w.c(),w.m(h,null)):w&&(w.d(1),w=null)},i(E){k||(z(c.$$.fragment,E),z(y),k=!0)},o(E){U(c.$$.fragment,E),U(y),k=!1},d(E){E&&f(e),x(c),O[m].d(),w&&w.d()}}}function _t(i,e,l){let{flights:r=[]}=e,{loading:t=!1}=e,{total:a=0}=e;const s=Qe(),o=()=>s("loadMore");return i.$$set=n=>{"flights"in n&&l(0,r=n.flights),"loading"in n&&l(1,t=n.loading),"total"in n&&l(2,a=n.total)},[r,t,a,s,o]}class ht extends ge{constructor(e){super(),me(this,e,_t,dt,be,{flights:0,loading:1,total:2})}}function pt(i){let e,l,r,t,a,s,o,n,h,$;return e=new Xe({props:{darkLink:!0}}),r=new rt({props:{title:"D\xE9couvrir",titleClassName:"text-3xl lg:text-6xl",separatorClassName:"w-48",containerClassName:"h-[300px]"}}),s=new ht({props:{flights:i[1],loading:i[0],total:i[2]}}),s.$on("loadMore",i[3]),h=new xe({}),{c(){R(e.$$.fragment),l=T(),R(r.$$.fragment),t=T(),a=v("div"),R(s.$$.fragment),o=T(),n=v("div"),R(h.$$.fragment),this.h()},l(c){W(e.$$.fragment,c),l=F(c),W(r.$$.fragment,c),t=F(c),a=g(c,"DIV",{class:!0});var C=_(a);W(s.$$.fragment,C),C.forEach(f),o=F(c),n=g(c,"DIV",{class:!0});var m=_(n);W(h.$$.fragment,m),m.forEach(f),this.h()},h(){u(a,"class","mt-20"),u(n,"class","mt-20")},m(c,C){X(e,c,C),P(c,l,C),X(r,c,C),P(c,t,C),P(c,a,C),X(s,a,null),P(c,o,C),P(c,n,C),X(h,n,null),$=!0},p(c,C){const m={};C&2&&(m.flights=c[1]),C&1&&(m.loading=c[0]),C&4&&(m.total=c[2]),s.$set(m)},i(c){$||(z(e.$$.fragment,c),z(r.$$.fragment,c),z(s.$$.fragment,c),z(h.$$.fragment,c),$=!0)},o(c){U(e.$$.fragment,c),U(r.$$.fragment,c),U(s.$$.fragment,c),U(h.$$.fragment,c),$=!1},d(c){x(e,c),c&&f(l),x(r,c),c&&f(t),c&&f(a),x(s),c&&f(o),c&&f(n),x(h)}}}function vt(i){let e,l,r;return l=new We({props:{$$slots:{default:[pt]},$$scope:{ctx:i}}}),{c(){e=T(),R(l.$$.fragment),this.h()},l(t){Re("svelte-1hwr375",document.head).forEach(f),e=F(t),W(l.$$.fragment,t),this.h()},h(){document.title="Yvanig Agency - D\xE9couvrir"},m(t,a){P(t,e,a),X(l,t,a),r=!0},p(t,[a]){const s={};a&135&&(s.$$scope={dirty:a,ctx:t}),l.$set(s)},i(t){r||(z(l.$$.fragment,t),r=!0)},o(t){U(l.$$.fragment,t),r=!1},d(t){t&&f(e),x(l,t)}}}let je=8;function gt(i,e,l){let r;Ge(i,Je,$=>l(5,r=$));let t=0,a=!1,s=[],o=0;const n=async($,c)=>{var C,m,y,Z;l(0,a=!0);try{let k={filterByOrigin:(C=r.url.searchParams.get("filterByOrigin"))!=null?C:"",filterByDestination:(m=r.url.searchParams.get("filterByDestination"))!=null?m:"",filterByDepartureDate:(y=r.url.searchParams.get("filterByDepartureDate"))!=null?y:""};const I=await et.getFlights($,c,k);l(1,s=[...s,...I.data.flights]),l(2,o=(Z=I.data)==null?void 0:Z.total_count)}catch(k){console.log(k),lt.displayErrorNotification("Une erreur est survenue lors du chargement des vols.")}finally{l(0,a=!1)}},h=()=>{t++,n(t,je)};return He(()=>{n(t,je)}),[a,s,o,h]}class It extends ge{constructor(e){super(),me(this,e,gt,vt,be,{})}}export{It as default};