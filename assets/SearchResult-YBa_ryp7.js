import{l as M,i as Z,m as ee,p as B,q as se,s as ae,v as te,x as le,j as T,y as A,z as re,A as Y,k as a,B as ue,R as O,C as ie,D as oe,E as ne,G as I,H as U,I as ce,J as ve,K as he,L as pe,O as de,M as me,N as ye,P as ge,Q as fe,S as He,T as x}from"./app-Bg66iIuu.js";const Re=["/","/demo/","/demo/disable.html","/demo/layout.html","/demo/markdown.html","/demo/page.html","/math/","/math/kuaisumi.html","/math/basic_math2/","/math/basic_math2/fta.html","/math/basic_math2/prime.html","/math/basic_math1/","/math/basic_math1/base_conversion.html","/math/basic_math1/digit_splitting.html","/404.html"],ke="SEARCH_PRO_QUERY_HISTORY",d=M(ke,[]),Qe=()=>{const{queryHistoryCount:t}=x,l=t>0;return{enabled:l,queryHistory:d,addQueryHistory:r=>{l&&(d.value.length<t?d.value=Array.from(new Set([r,...d.value])):d.value=Array.from(new Set([r,...d.value.slice(0,t-1)])))},removeQueryHistory:r=>{d.value=[...d.value.slice(0,r),...d.value.slice(r+1)]}}},P=t=>Re[t.id]+("anchor"in t?`#${t.anchor}`:""),be="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:E}=x,m=M(be,[]),we=()=>{const t=E>0;return{enabled:t,resultHistory:m,addResultHistory:l=>{if(t){const r={link:P(l),display:l.display};"header"in l&&(r.header=l.header),m.value.length<E?m.value=[r,...m.value]:m.value=[r,...m.value.slice(0,E-1)]}},removeResultHistory:l=>{m.value=[...m.value.slice(0,l),...m.value.slice(l+1)]}}},xe=t=>{const l=ce(),r=B(),q=ve(),i=T(!1),f=he([]);return pe(()=>{const{search:k,terminate:y}=de(),Q=()=>{f.value=[],i.value=!1},H=He(c=>{const R=c.join(" "),{searchFilter:C=p=>p,splitWord:S,suggestionsFilter:$,...g}=l.value;i.value=!0,R?k(c.join(" "),r.value,g).then(p=>C(p,R,r.value,q.value)).then(p=>{f.value=p,i.value=!1}).catch(p=>{console.error(p),Q()}):Q()},x.searchDelay-x.suggestDelay);Y([t,r],([c])=>H(c),{immediate:!0}),me(()=>{y()})}),{searching:i,results:f}};var Ce=Z({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(t,{emit:l}){const r=ee(),q=B(),i=se(ae),{enabled:f,addQueryHistory:k,queryHistory:y,removeQueryHistory:Q}=Qe(),{enabled:H,resultHistory:c,addResultHistory:R,removeResultHistory:C}=we(),S=f||H,$=te(t,"queries"),{results:g,searching:p}=xe($),u=le({isQuery:!0,index:0}),v=T(0),h=T(0),F=A(()=>S&&(y.value.length>0||c.value.length>0)),_=A(()=>g.value.length>0),D=A(()=>g.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{v.value=v.value>0?v.value-1:g.value.length-1,h.value=D.value.contents.length-1},K=()=>{v.value=v.value<g.value.length-1?v.value+1:0,h.value=0},N=()=>{h.value<D.value.contents.length-1?h.value+=1:K()},V=()=>{h.value>0?h.value-=1:J()},L=e=>e.map(s=>ye(s)?s:a(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=ge[e.index]||"$content",[o,w=""]=fe(s)?s[q.value].split("$content"):s.split("$content");return e.display.map(n=>a("div",L([o,...n,w])))}return e.display.map(s=>a("div",L(s)))},b=()=>{v.value=0,h.value=0,l("updateQuery",""),l("close")};return re("keydown",e=>{if(t.isFocusing){if(_.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const s=D.value.contents[h.value];k(t.queries.join(" ")),R(s),r.push(P(s)),b()}}else if(H){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",y.value[s]),e.preventDefault()):(r.push(c.value[s].link),b())}}}}),Y([v,h],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:t.queries.length?!_.value:!F.value}],id:"search-pro-results"},t.queries.length?p.value?a(ue,{hint:i.value.searching}):_.value?a("ul",{class:"search-pro-result-list"},g.value.map(({title:e,contents:s},o)=>{const w=v.value===o;return a("li",{class:["search-pro-result-list-item",{active:w}]},[a("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,X)=>{const j=w&&h.value===X;return a(O,{to:P(n),class:["search-pro-result-item",{active:j,"aria-selected":j}],onClick:()=>{k(t.queries.join(" ")),R(n),b()}},()=>[n.type==="text"?null:a(n.type==="title"?ie:n.type==="heading"?oe:ne,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?a("div",{class:"content-header"},n.header):null,a("div",W(n))])])})])})):i.value.emptyResult:S?F.value?[f?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,s)=>a("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[a(I,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:U,onClick:o=>{o.preventDefault(),o.stopPropagation(),Q(s)}})]))])):null,H?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>a(O,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{b()}},()=>[a(I,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(o=>L(o)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:U,onClick:o=>{o.preventDefault(),o.stopPropagation(),C(s)}})]))])):null]:i.value.emptyHistory:i.value.emptyResult)}});export{Ce as default};
