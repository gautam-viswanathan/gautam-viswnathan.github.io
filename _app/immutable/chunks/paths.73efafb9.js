import{n as b,s as h}from"./index.ac6d7a03.js";const e=[];function d(i,f=b){let n;const o=new Set;function r(t){if(h(i,t)&&(i=t,n)){const u=!e.length;for(const s of o)s[1](),e.push(s,i);if(u){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function l(t){r(t(i))}function _(t,u=b){const s=[t,u];return o.add(s),o.size===1&&(n=f(r)||b),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:l,subscribe:_}}var a;const g=((a=globalThis.__sveltekit_ukoirj)==null?void 0:a.base)??"/gautam-viswnathan.github.io";var c;const k=((c=globalThis.__sveltekit_ukoirj)==null?void 0:c.assets)??g;export{k as a,g as b,d as w};
