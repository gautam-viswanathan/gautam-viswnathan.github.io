import{S as _e,i as he,s as de,k as g,z as T,a as j,r as W,l as b,m as x,A as U,c as D,u as X,h as $,p,b as ee,D as m,B as C,E as $e,g as k,w as oe,f as ce,d as w,C as L,F as ge,G as Y,n as be,H as xe,I as ie,J as ke,K as ye,L as Ee,o as we}from"../chunks/index.ac6d7a03.js";import{b as Z}from"../chunks/paths.e1541c66.js";import{p as Ne}from"../chunks/stores.d7e4f668.js";import{t as pe,H as ue,N as F,a as Ae,o as Ie}from"../chunks/params.949fabd1.js";import{U as O}from"../chunks/UIcon.caedd93e.js";function fe(l,e,n){const t=l.slice();return t[5]=e[n],t}function me(l){let e,n,t,a,h=l[5].title+"",o,_,i;return n=new O({props:{icon:l[5].icon,classes:"text-1.3em"}}),{c(){e=g("a"),T(n.$$.fragment),t=j(),a=g("span"),o=W(h),_=j(),this.h()},l(r){e=b(r,"A",{href:!0,class:!0});var u=x(e);U(n.$$.fragment,u),t=D(u),a=b(u,"SPAN",{class:!0});var N=x(a);o=X(N,h),N.forEach($),_=D(u),u.forEach($),this.h()},h(){p(a,"class","nav-menu-item-label svelte-z8k68j"),p(e,"href",`${Z}${l[5].to}`),p(e,"class","nav-menu-item !text-[var(--secondary-text)] svelte-z8k68j")},m(r,u){ee(r,e,u),C(n,e,null),m(e,t),m(e,a),m(a,o),m(e,_),i=!0},p:be,i(r){i||(k(n.$$.fragment,r),i=!0)},o(r){w(n.$$.fragment,r),i=!1},d(r){r&&$(e),L(n)}}}function je(l){let e,n;return e=new O({props:{icon:"i-carbon-sun"}}),{c(){T(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,a){C(e,t,a),n=!0},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function De(l){let e,n;return e=new O({props:{icon:"i-carbon-moon"}}),{c(){T(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,a){C(e,t,a),n=!0},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function Ve(l){let e,n,t,a,h,o,_=ue.name+"",i,r,u=ue.lastName+"",N,G,V,J,A,z,B,K,I,y,E,P,Q,te;a=new O({props:{icon:"i-carbon-code",classes:"text-2em "}});let H=l[1],c=[];for(let s=0;s<H.length;s+=1)c[s]=me(fe(l,H,s));const ve=s=>w(c[s],1,1,()=>{c[s]=null});B=new O({props:{icon:"i-carbon-search"}});const ne=[De,je],M=[];function re(s,d){return s[0]?0:1}return y=re(l),E=M[y]=ne[y](l),{c(){e=g("div"),n=g("nav"),t=g("a"),T(a.$$.fragment),h=j(),o=g("span"),i=W(_),r=j(),N=W(u),G=j(),V=g("div");for(let s=0;s<c.length;s+=1)c[s].c();J=j(),A=g("div"),z=g("a"),T(B.$$.fragment),K=j(),I=g("button"),E.c(),this.h()},l(s){e=b(s,"DIV",{class:!0});var d=x(e);n=b(d,"NAV",{class:!0});var v=x(n);t=b(v,"A",{href:!0,class:!0});var f=x(t);U(a.$$.fragment,f),h=D(f),o=b(f,"SPAN",{class:!0});var S=x(o);i=X(S,_),r=D(S),N=X(S,u),S.forEach($),f.forEach($),G=D(v),V=b(v,"DIV",{class:!0});var se=x(V);for(let R=0;R<c.length;R+=1)c[R].l(se);se.forEach($),J=D(v),A=b(v,"DIV",{class:!0});var q=x(A);z=b(q,"A",{href:!0,class:!0});var ae=x(z);U(B.$$.fragment,ae),ae.forEach($),K=D(q),I=b(q,"BUTTON",{class:!0});var le=x(I);E.l(le),le.forEach($),q.forEach($),v.forEach($),d.forEach($),this.h()},h(){p(o,"class","ml-2 text-md font-bold hidden md:inline"),p(t,"href",`${Z}/`),p(t,"class","nav-menu-left decoration-none flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch hover:bg-[color:var(--main-hover)]"),p(V,"class","flex flex-row flex-1 self-center justify-center"),p(z,"href",`${Z}/search`),p(z,"class","text-inherit col-center self-stretch px-2 hover:bg-[color:var(--main-hover)]"),p(I,"class","bg-transparent text-1em border-none cursor-pointer hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2"),p(A,"class","flex flex-row self-stretch items-stretch gap-1 text-1.15em"),p(n,"class","container !justify-between flex flex-row items-center text-sm"),p(e,"class","nav-menu svelte-z8k68j")},m(s,d){ee(s,e,d),m(e,n),m(n,t),C(a,t,null),m(t,h),m(t,o),m(o,i),m(o,r),m(o,N),m(n,G),m(n,V);for(let v=0;v<c.length;v+=1)c[v]&&c[v].m(V,null);m(n,J),m(n,A),m(A,z),C(B,z,null),m(A,K),m(A,I),M[y].m(I,null),P=!0,Q||(te=$e(I,"click",l[3]),Q=!0)},p(s,[d]){if(d&2){H=s[1];let f;for(f=0;f<H.length;f+=1){const S=fe(s,H,f);c[f]?(c[f].p(S,d),k(c[f],1)):(c[f]=me(S),c[f].c(),k(c[f],1),c[f].m(V,null))}for(oe(),f=H.length;f<c.length;f+=1)ve(f);ce()}let v=y;y=re(s),y!==v&&(oe(),w(M[v],1,1,()=>{M[v]=null}),ce(),E=M[y],E||(E=M[y]=ne[y](s),E.c()),k(E,1),E.m(I,null))},i(s){if(!P){k(a.$$.fragment,s);for(let d=0;d<H.length;d+=1)k(c[d]);k(B.$$.fragment,s),k(E),P=!0}},o(s){w(a.$$.fragment,s),c=c.filter(Boolean);for(let d=0;d<c.length;d+=1)w(c[d]);w(B.$$.fragment,s),w(E),P=!1},d(s){s&&$(e),L(a),ge(c,s),L(B),M[y].d(),Q=!1,te()}}}function ze(l,e,n){let t,a;Y(l,Ne,_=>n(2,t=_)),Y(l,pe,_=>n(0,a=_));const h=[{title:F.skills,to:"/skills",icon:"i-carbon-software-resource-cluster"},{title:F.personal,to:"/projects",icon:"i-carbon-cube"},{title:F.career,to:"/experience",icon:"i-carbon-development"},{title:F.resume,to:"/resume",icon:"i-carbon-result"}],o=()=>Ae();return l.$$.update=()=>{l.$$.dirty&4&&t&&t.url.pathname},[a,h,t,o]}class Be extends _e{constructor(e){super(),he(this,e,ze,Ve,de,{})}}function He(l){let e,n,t,a,h,o;n=new Be({});const _=l[3].default,i=xe(_,l,l[2],null);return{c(){e=g("div"),T(n.$$.fragment),t=j(),a=g("div"),i&&i.c(),this.h()},l(r){e=b(r,"DIV",{class:!0});var u=x(e);U(n.$$.fragment,u),t=D(u),a=b(u,"DIV",{class:!0});var N=x(a);i&&i.l(N),N.forEach($),u.forEach($),this.h()},h(){p(a,"class","content container svelte-mb6t29"),p(e,"class",h=ie(`body contents ${l[0]?"theme-dark":"theme-light"}`)+" svelte-mb6t29")},m(r,u){ee(r,e,u),C(n,e,null),m(e,t),m(e,a),i&&i.m(a,null),o=!0},p(r,[u]){i&&i.p&&(!o||u&4)&&ke(i,_,r,r[2],o?Ee(_,r[2],u,null):ye(r[2]),null),(!o||u&1&&h!==(h=ie(`body contents ${r[0]?"theme-dark":"theme-light"}`)+" svelte-mb6t29"))&&p(e,"class",h)},i(r){o||(k(n.$$.fragment,r),k(i,r),o=!0)},o(r){w(n.$$.fragment,r),w(i,r),o=!1},d(r){r&&$(e),L(n),i&&i.d(r)}}}function Me(l,e,n){let t;Y(l,pe,_=>n(0,t=_));let{$$slots:a={},$$scope:h}=e;const o=!0;return we(()=>Ie()),l.$$set=_=>{"$$scope"in _&&n(2,h=_.$$scope)},[t,o,h,a]}class Oe extends _e{constructor(e){super(),he(this,e,Me,He,de,{prerender:1})}get prerender(){return this.$$.ctx[1]}}export{Oe as component};
