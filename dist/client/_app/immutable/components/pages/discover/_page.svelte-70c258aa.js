import{S as ve,i as me,s as be,k as g,q as A,a as T,l as v,m as _,r as S,h as f,c as F,n as u,Y as Te,b as P,I as d,a6 as ce,a7 as Fe,J as ae,N as J,a8 as ge,K as Ye,L as Ge,o as He,a9 as Oe,w as R,x as W,y as X,g as qe,t as j,d as Je,f as z,z as x,aj as Qe,ab as se,ac as ie}from"../../../chunks/index-a8b8d47a.js";import{L as Re,N as We,F as Xe}from"../../../chunks/Layout-67523153.js";import{a as xe}from"../../../chunks/Api-2c191f3d.js";import"../../../chunks/navigation-ed3d85a4.js";import{p as Ke}from"../../../chunks/stores-d6e4c71c.js";/* empty css                                                          */import{T as et}from"../../../chunks/TripCard-1585f56a.js";import{n as tt}from"../../../chunks/notification-52aa96ff.js";import{G as lt}from"../../../chunks/GenericHero-47dc0bcf.js";function Me(i,e,r){const t=i.slice();return t[8]=e[r],t}function Le(i,e,r){const t=i.slice();return t[8]=e[r],t}function Ae(i){let e,r=i[8]+"",t,l;return{c(){e=g("option"),t=A(r),this.h()},l(a){e=v(a,"OPTION",{});var s=_(e);t=S(s,r),s.forEach(f),this.h()},h(){e.disabled=l=i[8]===i[0].destination,e.__value=i[8],e.value=e.__value},m(a,s){P(a,e,s),d(e,t)},p(a,s){s&3&&l!==(l=a[8]===a[0].destination)&&(e.disabled=l)},d(a){a&&f(e)}}}function Se(i){let e,r=i[8]+"",t,l;return{c(){e=g("option"),t=A(r),this.h()},l(a){e=v(a,"OPTION",{});var s=_(e);t=S(s,r),s.forEach(f),this.h()},h(){e.disabled=l=i[8]===i[0].origin,e.__value=i[8],e.value=e.__value},m(a,s){P(a,e,s),d(e,t)},p(a,s){s&3&&l!==(l=a[8]===a[0].origin)&&(e.disabled=l)},d(a){a&&f(e)}}}function rt(i){let e,r,t,l,a,s,o,n,h,$,c,C,m,y,Z,k,I,O,ee,w,E,B,M,H,L,U,G,K,fe,ue,te,Y,de,_e,Ce,le=i[1],N=[];for(let b=0;b<le.length;b+=1)N[b]=Ae(Le(i,le,b));let re=i[1],V=[];for(let b=0;b<re.length;b+=1)V[b]=Se(Me(i,re,b));return{c(){e=g("div"),r=g("div"),t=g("label"),l=g("span"),a=A("Filtrer par lieu de d\xE9part:"),s=T(),o=g("select"),n=g("option"),h=A("Choisissez un lieu");for(let b=0;b<N.length;b+=1)N[b].c();$=T(),c=g("div"),C=g("label"),m=g("span"),y=A("Filtrer par lieu de destination:"),Z=T(),k=g("select"),I=g("option"),O=A("Choisissez un lieu");for(let b=0;b<V.length;b+=1)V[b].c();ee=T(),w=g("div"),E=g("label"),B=g("span"),M=A("Filtrer par date de d\xE9part souhait\xE9e:"),H=T(),L=g("input"),U=T(),G=g("div"),K=g("button"),fe=A("Filtrer"),ue=T(),te=g("div"),Y=g("button"),de=A("Effacer"),this.h()},l(b){e=v(b,"DIV",{class:!0});var D=_(e);r=v(D,"DIV",{class:!0});var p=_(r);t=v(p,"LABEL",{class:!0,for:!0});var q=_(t);l=v(q,"SPAN",{class:!0});var Ee=_(l);a=S(Ee,"Filtrer par lieu de d\xE9part:"),Ee.forEach(f),q.forEach(f),s=F(p),o=v(p,"SELECT",{id:!0,class:!0});var he=_(o);n=v(he,"OPTION",{});var we=_(n);h=S(we,"Choisissez un lieu"),we.forEach(f);for(let Q=0;Q<N.length;Q+=1)N[Q].l(he);he.forEach(f),p.forEach(f),$=F(D),c=v(D,"DIV",{class:!0});var ne=_(c);C=v(ne,"LABEL",{class:!0,for:!0});var $e=_(C);m=v($e,"SPAN",{class:!0});var ke=_(m);y=S(ke,"Filtrer par lieu de destination:"),ke.forEach(f),$e.forEach(f),Z=F(ne),k=v(ne,"SELECT",{id:!0,class:!0});var pe=_(k);I=v(pe,"OPTION",{});var De=_(I);O=S(De,"Choisissez un lieu"),De.forEach(f);for(let Q=0;Q<V.length;Q+=1)V[Q].l(pe);pe.forEach(f),ne.forEach(f),ee=F(D),w=v(D,"DIV",{class:!0});var oe=_(w);E=v(oe,"LABEL",{class:!0,for:!0});var ye=_(E);B=v(ye,"SPAN",{class:!0});var Ie=_(B);M=S(Ie,"Filtrer par date de d\xE9part souhait\xE9e:"),Ie.forEach(f),ye.forEach(f),H=F(oe),L=v(oe,"INPUT",{id:!0,type:!0,class:!0}),oe.forEach(f),U=F(D),G=v(D,"DIV",{class:!0});var Be=_(G);K=v(Be,"BUTTON",{class:!0});var Ne=_(K);fe=S(Ne,"Filtrer"),Ne.forEach(f),Be.forEach(f),ue=F(D),te=v(D,"DIV",{class:!0});var Ve=_(te);Y=v(Ve,"BUTTON",{class:!0});var Pe=_(Y);de=S(Pe,"Effacer"),Pe.forEach(f),Ve.forEach(f),D.forEach(f),this.h()},h(){u(l,"class","label-text"),u(t,"class","label"),u(t,"for","island_start"),n.disabled=!0,n.selected=!0,n.__value="",n.value=n.__value,u(o,"id","island_start"),u(o,"class","select w-full select-bordered border-black"),i[0].origin===void 0&&Te(()=>i[4].call(o)),u(r,"class","form-control w-full"),u(m,"class","label-text"),u(C,"class","label"),u(C,"for","island_end"),I.disabled=!0,I.selected=!0,I.__value="",I.value=I.__value,u(k,"id","island_end"),u(k,"class","select w-full select-bordered border-black"),i[0].destination===void 0&&Te(()=>i[5].call(k)),u(c,"class","form-control w-full"),u(B,"class","label-text"),u(E,"class","label"),u(E,"for","departure_date"),u(L,"id","departure_date"),u(L,"type","date"),u(L,"class","input input-bordered w-full border-black"),u(w,"class","form-control w-full"),u(K,"class","btn btn-primary rounded w-48 text-xs"),u(G,"class",""),u(Y,"class","btn btn-danger rounded w-48 text-xs"),u(te,"class",""),u(e,"class","lg:flex flex-row gap-3 items-end hidden")},m(b,D){P(b,e,D),d(e,r),d(r,t),d(t,l),d(l,a),d(r,s),d(r,o),d(o,n),d(n,h);for(let p=0;p<N.length;p+=1)N[p].m(o,null);ce(o,i[0].origin),d(e,$),d(e,c),d(c,C),d(C,m),d(m,y),d(c,Z),d(c,k),d(k,I),d(I,O);for(let p=0;p<V.length;p+=1)V[p].m(k,null);ce(k,i[0].destination),d(e,ee),d(e,w),d(w,E),d(E,B),d(B,M),d(w,H),d(w,L),Fe(L,i[0].departure_date),d(e,U),d(e,G),d(G,K),d(K,fe),d(e,ue),d(e,te),d(te,Y),d(Y,de),_e||(Ce=[ae(o,"change",i[4]),ae(k,"change",i[5]),ae(L,"input",i[6]),ae(K,"click",i[2]),ae(Y,"click",i[3])],_e=!0)},p(b,[D]){if(D&3){le=b[1];let p;for(p=0;p<le.length;p+=1){const q=Le(b,le,p);N[p]?N[p].p(q,D):(N[p]=Ae(q),N[p].c(),N[p].m(o,null))}for(;p<N.length;p+=1)N[p].d(1);N.length=le.length}if(D&3&&ce(o,b[0].origin),D&3){re=b[1];let p;for(p=0;p<re.length;p+=1){const q=Me(b,re,p);V[p]?V[p].p(q,D):(V[p]=Se(q),V[p].c(),V[p].m(k,null))}for(;p<V.length;p+=1)V[p].d(1);V.length=re.length}D&3&&ce(k,b[0].destination),D&3&&Fe(L,b[0].departure_date)},i:J,o:J,d(b){b&&f(e),ge(N,b),ge(V,b),_e=!1,Ye(Ce)}}}function at(i,e,r){let t;Ge(i,Ke,c=>r(7,t=c));let l={origin:"",destination:"",departure_date:""},a=["Anjouan","Grande Comore","Moheli","Mayotte","Tanzanie"];const s=c=>{c.preventDefault(),window.location.href=`/discover?filterByOrigin=${l.origin}&filterByDestination=${l.destination}&filterByDepartureDate=${l.departure_date}`},o=c=>{window.location.href="/discover"};He(()=>{var c,C,m;r(0,l={...l,origin:(c=t.url.searchParams.get("filterByOrigin"))!=null?c:""}),r(0,l={...l,destination:(C=t.url.searchParams.get("filterByDestination"))!=null?C:""}),r(0,l={...l,departure_date:(m=t.url.searchParams.get("filterByDepartureDate"))!=null?m:""})});function n(){l.origin=Oe(this),r(0,l),r(1,a)}function h(){l.destination=Oe(this),r(0,l),r(1,a)}function $(){l.departure_date=this.value,r(0,l),r(1,a)}return[l,a,s,o,n,h,$]}class st extends ve{constructor(e){super(),me(this,e,at,rt,be,{})}}function ze(i,e,r){const t=i.slice();return t[5]=e[r],t}function it(i){let e,r,t=i[0],l=[];for(let s=0;s<t.length;s+=1)l[s]=Ze(ze(i,t,s));const a=s=>j(l[s],1,1,()=>{l[s]=null});return{c(){e=g("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=v(s,"DIV",{class:!0});var o=_(e);for(let n=0;n<l.length;n+=1)l[n].l(o);o.forEach(f),this.h()},h(){u(e,"class","grid grid-cols-1 lg:grid-cols-4 gap-8")},m(s,o){P(s,e,o);for(let n=0;n<l.length;n+=1)l[n].m(e,null);r=!0},p(s,o){if(o&1){t=s[0];let n;for(n=0;n<t.length;n+=1){const h=ze(s,t,n);l[n]?(l[n].p(h,o),z(l[n],1)):(l[n]=Ze(h),l[n].c(),z(l[n],1),l[n].m(e,null))}for(qe(),n=t.length;n<l.length;n+=1)a(n);Je()}},i(s){if(!r){for(let o=0;o<t.length;o+=1)z(l[o]);r=!0}},o(s){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)j(l[o]);r=!1},d(s){s&&f(e),ge(l,s)}}}function nt(i){let e,r,t;return{c(){e=g("div"),r=g("p"),t=A("Aucun vol n'a \xE9t\xE9 trouv\xE9"),this.h()},l(l){e=v(l,"DIV",{class:!0});var a=_(e);r=v(a,"P",{});var s=_(r);t=S(s,"Aucun vol n'a \xE9t\xE9 trouv\xE9"),s.forEach(f),a.forEach(f),this.h()},h(){u(e,"class","flex justify-center items-center")},m(l,a){P(l,e,a),d(e,r),d(r,t)},p:J,i:J,o:J,d(l){l&&f(e)}}}function ot(i){let e,r,t,l;return{c(){e=g("div"),r=se("svg"),t=se("path"),l=se("path"),this.h()},l(a){e=v(a,"DIV",{class:!0});var s=_(e);r=ie(s,"svg",{role:!0,class:!0,viewBox:!0,fill:!0,xmlns:!0});var o=_(r);t=ie(o,"path",{d:!0,fill:!0}),_(t).forEach(f),l=ie(o,"path",{d:!0,fill:!0}),_(l).forEach(f),o.forEach(f),s.forEach(f),this.h()},h(){u(t,"d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"),u(t,"fill","currentColor"),u(l,"d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"),u(l,"fill","currentFill"),u(r,"role","status"),u(r,"class","mr-2 w-8 h-8 text-primary animate-spin dark:text-neutral fill-primary"),u(r,"viewBox","0 0 100 101"),u(r,"fill","none"),u(r,"xmlns","http://www.w3.org/2000/svg"),u(e,"class","flex justify-center")},m(a,s){P(a,e,s),d(e,r),d(r,t),d(r,l)},p:J,i:J,o:J,d(a){a&&f(e)}}}function Ze(i){let e,r;return e=new et({props:{id:i[5].id,trip_type:"flight",origin_airport_code:i[5].origin_airport_code,destination_airport_code:i[5].destination_airport_code,departure_date:i[5].departure_date,departure_time:i[5].departure_time,arrival_date:i[5].arrival_date,arrival_time:i[5].arrival_time,origin:i[5].origin,destination:i[5].destination,company_logo:i[5].company_logo}}),{c(){R(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,l){X(e,t,l),r=!0},p(t,l){const a={};l&1&&(a.id=t[5].id),l&1&&(a.origin_airport_code=t[5].origin_airport_code),l&1&&(a.destination_airport_code=t[5].destination_airport_code),l&1&&(a.departure_date=t[5].departure_date),l&1&&(a.departure_time=t[5].departure_time),l&1&&(a.arrival_date=t[5].arrival_date),l&1&&(a.arrival_time=t[5].arrival_time),l&1&&(a.origin=t[5].origin),l&1&&(a.destination=t[5].destination),l&1&&(a.company_logo=t[5].company_logo),e.$set(a)},i(t){r||(z(e.$$.fragment,t),r=!0)},o(t){j(e.$$.fragment,t),r=!1},d(t){x(e,t)}}}function je(i){let e,r,t,l;function a(n,h){return n[1]?ft:ct}let s=a(i),o=s(i);return{c(){e=g("div"),r=g("button"),o.c(),this.h()},l(n){e=v(n,"DIV",{class:!0});var h=_(e);r=v(h,"BUTTON",{class:!0});var $=_(r);o.l($),$.forEach(f),h.forEach(f),this.h()},h(){u(r,"class","btn btn-primary rounded-full w-48 text-xs mb-10"),u(e,"class","flex justify-center items-center mt-20")},m(n,h){P(n,e,h),d(e,r),o.m(r,null),t||(l=ae(r,"click",i[4]),t=!0)},p(n,h){s!==(s=a(n))&&(o.d(1),o=s(n),o&&(o.c(),o.m(r,null)))},d(n){n&&f(e),o.d(),t=!1,l()}}}function ct(i){let e,r;return{c(){e=g("span"),r=A("Charger plus")},l(t){e=v(t,"SPAN",{});var l=_(e);r=S(l,"Charger plus"),l.forEach(f)},m(t,l){P(t,e,l),d(e,r)},d(t){t&&f(e)}}}function ft(i){let e,r,t,l;return{c(){e=g("div"),r=se("svg"),t=se("path"),l=se("path"),this.h()},l(a){e=v(a,"DIV",{class:!0});var s=_(e);r=ie(s,"svg",{role:!0,class:!0,viewBox:!0,fill:!0,xmlns:!0});var o=_(r);t=ie(o,"path",{d:!0,fill:!0}),_(t).forEach(f),l=ie(o,"path",{d:!0,fill:!0}),_(l).forEach(f),o.forEach(f),s.forEach(f),this.h()},h(){u(t,"d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"),u(t,"fill","currentColor"),u(l,"d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"),u(l,"fill","currentFill"),u(r,"role","status"),u(r,"class","mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-white fill-primary"),u(r,"viewBox","0 0 100 101"),u(r,"fill","none"),u(r,"xmlns","http://www.w3.org/2000/svg"),u(e,"class","spin")},m(a,s){P(a,e,s),d(e,r),d(r,t),d(r,l)},d(a){a&&f(e)}}}function ut(i){let e,r,t,l,a,s,o,n,h,$,c,C,m,y,Z,k;c=new st({props:{type:"flights"}});const I=[ot,nt,it],O=[];function ee(E,B){return E[1]?0:E[0].length===0?1:2}m=ee(i),y=O[m]=I[m](i);let w=i[0].length<i[2]&&je(i);return{c(){e=g("div"),r=g("div"),t=g("div"),l=g("h2"),a=A("Nos offres de voyages"),s=T(),o=g("div"),n=T(),h=g("div"),$=g("div"),R(c.$$.fragment),C=T(),y.c(),Z=T(),w&&w.c(),this.h()},l(E){e=v(E,"DIV",{class:!0});var B=_(e);r=v(B,"DIV",{class:!0});var M=_(r);t=v(M,"DIV",{class:!0});var H=_(t);l=v(H,"H2",{class:!0});var L=_(l);a=S(L,"Nos offres de voyages"),L.forEach(f),s=F(H),o=v(H,"DIV",{class:!0}),_(o).forEach(f),H.forEach(f),n=F(M),h=v(M,"DIV",{class:!0});var U=_(h);$=v(U,"DIV",{class:!0});var G=_($);W(c.$$.fragment,G),G.forEach(f),C=F(U),y.l(U),Z=F(U),w&&w.l(U),U.forEach(f),M.forEach(f),B.forEach(f),this.h()},h(){u(l,"class","text-xl lg:text-2xl font-bold text-neutral uppercase"),u(o,"class","h-[5px] mt-2 bg-primary w-24 md:w-48 md:self-end"),u(t,"class","flex flex-col w-fit"),u($,"class","mb-16"),u(h,"class","mt-16"),u(r,"class","container"),u(e,"class","px-8 lg:px-16")},m(E,B){P(E,e,B),d(e,r),d(r,t),d(t,l),d(l,a),d(t,s),d(t,o),d(r,n),d(r,h),d(h,$),X(c,$,null),d(h,C),O[m].m(h,null),d(h,Z),w&&w.m(h,null),k=!0},p(E,[B]){let M=m;m=ee(E),m===M?O[m].p(E,B):(qe(),j(O[M],1,1,()=>{O[M]=null}),Je(),y=O[m],y?y.p(E,B):(y=O[m]=I[m](E),y.c()),z(y,1),y.m(h,Z)),E[0].length<E[2]?w?w.p(E,B):(w=je(E),w.c(),w.m(h,null)):w&&(w.d(1),w=null)},i(E){k||(z(c.$$.fragment,E),z(y),k=!0)},o(E){j(c.$$.fragment,E),j(y),k=!1},d(E){E&&f(e),x(c),O[m].d(),w&&w.d()}}}function dt(i,e,r){let{flights:t=[]}=e,{loading:l=!1}=e,{total:a=0}=e;const s=Qe(),o=()=>s("loadMore");return i.$$set=n=>{"flights"in n&&r(0,t=n.flights),"loading"in n&&r(1,l=n.loading),"total"in n&&r(2,a=n.total)},[t,l,a,s,o]}class _t extends ve{constructor(e){super(),me(this,e,dt,ut,be,{flights:0,loading:1,total:2})}}function ht(i){let e,r,t,l,a,s,o,n,h,$;return e=new We({}),t=new lt({props:{title:"D\xE9couvrir",titleClassName:"text-3xl lg:text-6xl",separatorClassName:"w-48",containerClassName:"h-[300px]"}}),s=new _t({props:{flights:i[1],loading:i[0],total:i[2]}}),s.$on("loadMore",i[3]),h=new Xe({}),{c(){R(e.$$.fragment),r=T(),R(t.$$.fragment),l=T(),a=g("div"),R(s.$$.fragment),o=T(),n=g("div"),R(h.$$.fragment),this.h()},l(c){W(e.$$.fragment,c),r=F(c),W(t.$$.fragment,c),l=F(c),a=v(c,"DIV",{class:!0});var C=_(a);W(s.$$.fragment,C),C.forEach(f),o=F(c),n=v(c,"DIV",{class:!0});var m=_(n);W(h.$$.fragment,m),m.forEach(f),this.h()},h(){u(a,"class","mt-20"),u(n,"class","mt-20")},m(c,C){X(e,c,C),P(c,r,C),X(t,c,C),P(c,l,C),P(c,a,C),X(s,a,null),P(c,o,C),P(c,n,C),X(h,n,null),$=!0},p(c,C){const m={};C&2&&(m.flights=c[1]),C&1&&(m.loading=c[0]),C&4&&(m.total=c[2]),s.$set(m)},i(c){$||(z(e.$$.fragment,c),z(t.$$.fragment,c),z(s.$$.fragment,c),z(h.$$.fragment,c),$=!0)},o(c){j(e.$$.fragment,c),j(t.$$.fragment,c),j(s.$$.fragment,c),j(h.$$.fragment,c),$=!1},d(c){x(e,c),c&&f(r),x(t,c),c&&f(l),c&&f(a),x(s),c&&f(o),c&&f(n),x(h)}}}function pt(i){let e,r;return e=new Re({props:{$$slots:{default:[ht]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,l){X(e,t,l),r=!0},p(t,[l]){const a={};l&135&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){r||(z(e.$$.fragment,t),r=!0)},o(t){j(e.$$.fragment,t),r=!1},d(t){x(e,t)}}}let Ue=8;function gt(i,e,r){let t;Ge(i,Ke,$=>r(5,t=$));let l=0,a=!1,s=[],o=0;const n=async($,c)=>{var C,m,y,Z;r(0,a=!0);try{let k={filterByOrigin:(C=t.url.searchParams.get("filterByOrigin"))!=null?C:"",filterByDestination:(m=t.url.searchParams.get("filterByDestination"))!=null?m:"",filterByDepartureDate:(y=t.url.searchParams.get("filterByDepartureDate"))!=null?y:""};const I=await xe.getFlights($,c,k);r(1,s=[...s,...I.data.flights]),r(2,o=(Z=I.data)==null?void 0:Z.total_count)}catch(k){console.log(k),tt.displayErrorNotification("Une erreur est survenue lors du chargement des vols.")}finally{r(0,a=!1)}},h=()=>{l++,n(l,Ue)};return He(()=>{n(l,Ue)}),[a,s,o,h]}class yt extends ve{constructor(e){super(),me(this,e,gt,pt,be,{})}}export{yt as default};
