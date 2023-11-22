import{i as ie,P as fe,g as F}from"../chunks/params.949fabd1.js";import{S as ue,i as pe,s as _e,z as T,a as x,k as w,A as M,c as V,l as E,m as j,h as _,p as b,B as N,b as y,d as I,f as G,g as k,C as B,w as Y,D as d,r as U,u as q,n as L,v as H,F as W,N as me}from"../chunks/index.ac6d7a03.js";import{C as de}from"../chunks/CardLogo.b0f97a1d.js";import{M as $e}from"../chunks/MainTitle.425c8d2b.js";import{b as ee}from"../chunks/paths.e1541c66.js";import{B as he,M as ge}from"../chunks/Banner.b1bf75d3.js";import{T as ve}from"../chunks/TabTitle.b50c3dde.js";import{C as ae}from"../chunks/Chip.1b905c58.js";import{U as K}from"../chunks/UIcon.caedd93e.js";import{C as ce}from"../chunks/CardDivider.ae9ddcb9.js";function be({params:u}){if(u.slug)return{project:ie.find(r=>r.slug===u.slug)}}const Je=Object.freeze(Object.defineProperty({__proto__:null,load:be},Symbol.toStringTag,{value:"Module"}));function te(u,e,r){const t=u.slice();return t[4]=e[r],t}function le(u,e,r){const t=u.slice();return t[4]=e[r],t}function re(u,e,r){const t=u.slice();return t[4]=e[r],t}function ke(u){let e,r,t,l,n,s,a,o,f,c,g,C,S,A;r=new he({props:{img:F(u[0].project.logo),$$slots:{default:[Ie]},$$scope:{ctx:u}}});const z=[Ve,xe],P=[];function $(v,i){return v[0].project.description?0:1}s=$(u),a=P[s]=z[s](u),c=new ce({});const Q=[Pe,Ce],O=[];function h(v,i){return v[2].length>0?0:1}return C=h(u),S=O[C]=Q[C](u),{c(){e=w("div"),T(r.$$.fragment),t=x(),l=w("div"),n=w("div"),a.c(),o=x(),f=w("div"),T(c.$$.fragment),g=x(),S.c(),this.h()},l(v){e=E(v,"DIV",{class:!0});var i=j(e);M(r.$$.fragment,i),t=V(i),l=E(i,"DIV",{class:!0});var p=j(l);n=E(p,"DIV",{class:!0});var D=j(n);a.l(D),D.forEach(_),o=V(p),f=E(p,"DIV",{class:!0});var m=j(f);M(c.$$.fragment,m),m.forEach(_),g=V(p),S.l(p),p.forEach(_),i.forEach(_),this.h()},h(){b(n,"class","px-10px m-y-5"),b(f,"class","w-100% m-t-8"),b(l,"class","pt-3 pb-1 overflow-x-hidden w-full"),b(e,"class","flex flex-col items-center overflow-x-hidden")},m(v,i){y(v,e,i),N(r,e,null),d(e,t),d(e,l),d(l,n),P[s].m(n,null),d(l,o),d(l,f),N(c,f,null),d(l,g),O[C].m(l,null),A=!0},p(v,i){const p={};i&1&&(p.img=F(v[0].project.logo)),i&2049&&(p.$$scope={dirty:i,ctx:v}),r.$set(p);let D=s;s=$(v),s===D?P[s].p(v,i):(Y(),I(P[D],1,1,()=>{P[D]=null}),G(),a=P[s],a?a.p(v,i):(a=P[s]=z[s](v),a.c()),k(a,1),a.m(n,null)),S.p(v,i)},i(v){A||(k(r.$$.fragment,v),k(a),k(c.$$.fragment,v),k(S),A=!0)},o(v){I(r.$$.fragment,v),I(a),I(c.$$.fragment,v),I(S),A=!1},d(v){v&&_(e),B(r),P[s].d(),B(c),O[C].d()}}}function we(u){let e,r,t,l,n,s;return r=new K({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=w("div"),T(r.$$.fragment),t=x(),l=w("p"),n=U("Could not load project data..."),this.h()},l(a){e=E(a,"DIV",{class:!0});var o=j(e);M(r.$$.fragment,o),t=V(o),l=E(o,"P",{class:!0});var f=j(l);n=q(f,"Could not load project data..."),f.forEach(_),o.forEach(_),this.h()},h(){b(l,"class","font-300"),b(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(a,o){y(a,e,o),N(r,e,null),d(e,t),d(e,l),d(l,n),s=!0},p:L,i(a){s||(k(r.$$.fragment,a),s=!0)},o(a){I(r.$$.fragment,a),s=!1},d(a){a&&_(e),B(r)}}}function Ee(u){let e=u[0].project.name+"",r;return{c(){r=U(e)},l(t){r=q(t,e)},m(t,l){y(t,r,l)},p(t,l){l&1&&e!==(e=t[0].project.name+"")&&H(r,e)},d(t){t&&_(r)}}}function je(u){let e,r,t,l,n=u[4].label+"",s,a,o;return r=new K({props:{icon:"i-carbon-link"}}),{c(){e=w("div"),T(r.$$.fragment),t=x(),l=w("span"),s=U(n),a=x(),this.h()},l(f){e=E(f,"DIV",{class:!0});var c=j(e);M(r.$$.fragment,c),t=V(c),l=E(c,"SPAN",{});var g=j(l);s=q(g,n),g.forEach(_),c.forEach(_),a=V(f),this.h()},h(){b(e,"class","row-center gap-2")},m(f,c){y(f,e,c),N(r,e,null),d(e,t),d(e,l),d(l,s),y(f,a,c),o=!0},p(f,c){(!o||c&1)&&n!==(n=f[4].label+"")&&H(s,n)},i(f){o||(k(r.$$.fragment,f),o=!0)},o(f){I(r.$$.fragment,f),o=!1},d(f){f&&_(e),B(r),f&&_(a)}}}function ne(u){let e,r;return e=new ae({props:{href:u[4].to,$$slots:{default:[je]},$$scope:{ctx:u}}}),{c(){T(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p(t,l){const n={};l&1&&(n.href=t[4].to),l&2049&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){I(e.$$.fragment,t),r=!1},d(t){B(e,t)}}}function De(u){let e,r,t,l=u[4].name+"",n,s,a;return e=new de({props:{src:F(u[4].logo),alt:u[4].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){T(e.$$.fragment),r=x(),t=w("span"),n=U(l),s=x(),this.h()},l(o){M(e.$$.fragment,o),r=V(o),t=E(o,"SPAN",{class:!0});var f=j(t);n=q(f,l),f.forEach(_),s=V(o),this.h()},h(){b(t,"class","text-[0.9em]")},m(o,f){N(e,o,f),y(o,r,f),y(o,t,f),d(t,n),y(o,s,f),a=!0},p(o,f){const c={};f&1&&(c.src=F(o[4].logo)),f&1&&(c.alt=o[4].name),e.$set(c),(!a||f&1)&&l!==(l=o[4].name+"")&&H(n,l)},i(o){a||(k(e.$$.fragment,o),a=!0)},o(o){I(e.$$.fragment,o),a=!1},d(o){B(e,o),o&&_(r),o&&_(t),o&&_(s)}}}function se(u){let e,r;return e=new ae({props:{classes:"inline-flex flex-row items-center justify-center",href:`${ee}/skills/${u[4].slug}`,$$slots:{default:[De]},$$scope:{ctx:u}}}),{c(){T(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p(t,l){const n={};l&1&&(n.href=`${ee}/skills/${t[4].slug}`),l&2049&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){I(e.$$.fragment,t),r=!1},d(t){B(e,t)}}}function Ie(u){let e,r,t,l,n,s=u[0].project.type+"",a,o,f,c,g,C,S,A,z;t=new $e({props:{$$slots:{default:[Ee]},$$scope:{ctx:u}}}),c=new ce({});let P=u[0].project.links,$=[];for(let i=0;i<P.length;i+=1)$[i]=ne(re(u,P,i));const Q=i=>I($[i],1,1,()=>{$[i]=null});let O=u[0].project.skills,h=[];for(let i=0;i<O.length;i+=1)h[i]=se(le(u,O,i));const v=i=>I(h[i],1,1,()=>{h[i]=null});return{c(){e=w("div"),r=w("div"),T(t.$$.fragment),l=x(),n=w("p"),a=U(s),o=x(),f=w("div"),T(c.$$.fragment),g=x(),C=w("div");for(let i=0;i<$.length;i+=1)$[i].c();S=x(),A=w("div");for(let i=0;i<h.length;i+=1)h[i].c();this.h()},l(i){e=E(i,"DIV",{class:!0});var p=j(e);r=E(p,"DIV",{class:!0});var D=j(r);M(t.$$.fragment,D),D.forEach(_),l=V(p),n=E(p,"P",{class:!0});var m=j(n);a=q(m,s),m.forEach(_),o=V(p),f=E(p,"DIV",{class:!0});var R=j(f);M(c.$$.fragment,R),R.forEach(_),g=V(p),C=E(p,"DIV",{class:!0});var X=j(C);for(let J=0;J<$.length;J+=1)$[J].l(X);X.forEach(_),S=V(p),A=E(p,"DIV",{class:!0});var Z=j(A);for(let J=0;J<h.length;J+=1)h[J].l(Z);Z.forEach(_),p.forEach(_),this.h()},h(){b(r,"class","text-0.9em"),b(n,"class","font-300 text-center text-[var(--tertiary-text)] m-y-2"),b(f,"class","w-75%"),b(C,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),b(A,"class","row-center flex-wrap m-b-2"),b(e,"class","col-center p-y-20")},m(i,p){y(i,e,p),d(e,r),N(t,r,null),d(e,l),d(e,n),d(n,a),d(e,o),d(e,f),N(c,f,null),d(e,g),d(e,C);for(let D=0;D<$.length;D+=1)$[D]&&$[D].m(C,null);d(e,S),d(e,A);for(let D=0;D<h.length;D+=1)h[D]&&h[D].m(A,null);z=!0},p(i,p){const D={};if(p&2049&&(D.$$scope={dirty:p,ctx:i}),t.$set(D),(!z||p&1)&&s!==(s=i[0].project.type+"")&&H(a,s),p&1){P=i[0].project.links;let m;for(m=0;m<P.length;m+=1){const R=re(i,P,m);$[m]?($[m].p(R,p),k($[m],1)):($[m]=ne(R),$[m].c(),k($[m],1),$[m].m(C,null))}for(Y(),m=P.length;m<$.length;m+=1)Q(m);G()}if(p&1){O=i[0].project.skills;let m;for(m=0;m<O.length;m+=1){const R=le(i,O,m);h[m]?(h[m].p(R,p),k(h[m],1)):(h[m]=se(R),h[m].c(),k(h[m],1),h[m].m(A,null))}for(Y(),m=O.length;m<h.length;m+=1)v(m);G()}},i(i){if(!z){k(t.$$.fragment,i),k(c.$$.fragment,i);for(let p=0;p<P.length;p+=1)k($[p]);for(let p=0;p<O.length;p+=1)k(h[p]);z=!0}},o(i){I(t.$$.fragment,i),I(c.$$.fragment,i),$=$.filter(Boolean);for(let p=0;p<$.length;p+=1)I($[p]);h=h.filter(Boolean);for(let p=0;p<h.length;p+=1)I(h[p]);z=!1},d(i){i&&_(e),B(t),B(c),W($,i),W(h,i)}}}function xe(u){let e,r,t,l,n,s;return r=new K({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=w("div"),T(r.$$.fragment),t=x(),l=w("p"),n=U("No description"),this.h()},l(a){e=E(a,"DIV",{class:!0});var o=j(e);M(r.$$.fragment,o),t=V(o),l=E(o,"P",{class:!0});var f=j(l);n=q(f,"No description"),f.forEach(_),o.forEach(_),this.h()},h(){b(l,"class","font-300"),b(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(a,o){y(a,e,o),N(r,e,null),d(e,t),d(e,l),d(l,n),s=!0},p:L,i(a){s||(k(r.$$.fragment,a),s=!0)},o(a){I(r.$$.fragment,a),s=!1},d(a){a&&_(e),B(r)}}}function Ve(u){let e,r;return e=new ge({props:{content:u[0].project.description}}),{c(){T(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p(t,l){const n={};l&1&&(n.content=t[0].project.description),e.$set(n)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){I(e.$$.fragment,t),r=!1},d(t){B(e,t)}}}function Ce(u){let e,r,t,l,n,s;return r=new K({props:{icon:"i-carbon-image",classes:"text-3.5em"}}),{c(){e=w("div"),T(r.$$.fragment),t=x(),l=w("p"),n=U("No screenshots"),this.h()},l(a){e=E(a,"DIV",{class:!0});var o=j(e);M(r.$$.fragment,o),t=V(o),l=E(o,"P",{class:!0});var f=j(l);n=q(f,"No screenshots"),f.forEach(_),o.forEach(_),this.h()},h(){b(l,"class","font-300"),b(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(a,o){y(a,e,o),N(r,e,null),d(e,t),d(e,l),d(l,n),s=!0},p:L,i(a){s||(k(r.$$.fragment,a),s=!0)},o(a){I(r.$$.fragment,a),s=!1},d(a){a&&_(e),B(r)}}}function Pe(u){let e,r=u[2],t=[];for(let l=0;l<r.length;l+=1)t[l]=oe(te(u,r,l));return{c(){e=w("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=E(l,"DIV",{class:!0});var n=j(e);for(let s=0;s<t.length;s+=1)t[s].l(n);n.forEach(_),this.h()},h(){b(e,"class","px-10px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-t-10 ")},m(l,n){y(l,e,n);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(l,n){if(n&4){r=l[2];let s;for(s=0;s<r.length;s+=1){const a=te(l,r,s);t[s]?t[s].p(a,n):(t[s]=oe(a),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=r.length}},i:L,o:L,d(l){l&&_(e),W(t,l)}}}function oe(u){let e,r,t,l,n,s=u[4].label+"",a,o;return{c(){e=w("div"),r=w("img"),l=x(),n=w("p"),a=U(s),o=x(),this.h()},l(f){e=E(f,"DIV",{class:!0});var c=j(e);r=E(c,"IMG",{class:!0,src:!0,alt:!0}),l=V(c),n=E(c,"P",{class:!0});var g=j(n);a=q(g,s),g.forEach(_),o=V(c),c.forEach(_),this.h()},h(){b(r,"class","aspect-video w-100%"),me(r.src,t=u[4].src)||b(r,"src",t),b(r,"alt",u[4].label),b(n,"class","text-[var(--tertiary-text)] font-300"),b(e,"class","col-center gap-3 overflow-hidden w-100% h-100% rounded-10px")},m(f,c){y(f,e,c),d(e,r),d(e,l),d(e,n),d(n,a),d(e,o)},p:L,d(f){f&&_(e)}}}function ye(u){let e,r,t,l,n,s;e=new ve({props:{title:u[1]}});const a=[we,ke],o=[];function f(c,g){return c[0].project===void 0?0:1}return l=f(u),n=o[l]=a[l](u),{c(){T(e.$$.fragment),r=x(),t=w("div"),n.c(),this.h()},l(c){M(e.$$.fragment,c),r=V(c),t=E(c,"DIV",{class:!0});var g=j(t);n.l(g),g.forEach(_),this.h()},h(){b(t,"class","pb-10 overflow-x-hidden col flex-1")},m(c,g){N(e,c,g),y(c,r,g),y(c,t,g),o[l].m(t,null),s=!0},p(c,[g]){const C={};g&2&&(C.title=c[1]),e.$set(C);let S=l;l=f(c),l===S?o[l].p(c,g):(Y(),I(o[S],1,1,()=>{o[S]=null}),G(),n=o[l],n?n.p(c,g):(n=o[l]=a[l](c),n.c()),k(n,1),n.m(t,null))},i(c){s||(k(e.$$.fragment,c),k(n),s=!0)},o(c){I(e.$$.fragment,c),I(n),s=!1},d(c){B(e,c),c&&_(r),c&&_(t),o[l].d()}}}function Se(u,e,r){var a;let t,{data:l}=e;const{title:n}=fe,s=((a=l.project)==null?void 0:a.screenshots)??[];return u.$$set=o=>{"data"in o&&r(0,l=o.data)},u.$$.update=()=>{u.$$.dirty&1&&r(1,t=l.project?`${l.project.name} - ${n}`:n)},[l,t,s]}class Le extends ue{constructor(e){super(),pe(this,e,Se,ye,_e,{data:0})}}export{Le as component,Je as universal};
