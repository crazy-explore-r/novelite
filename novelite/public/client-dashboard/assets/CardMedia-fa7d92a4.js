import{a2 as d,r as M,ac as f,a0 as x,j as y}from"./index-f22446e5.js";import{g as b,a as h,s as v,d as I,c as N}from"./Typography-493ceae3.js";function E(e){return b("MuiCardMedia",e)}h("MuiCardMedia",["root","media","img"]);const O=["children","className","component","image","src","style"],R=e=>{const{classes:o,isMediaComponent:t,isImageComponent:s}=e;return N({root:["root",t&&"media",s&&"img"]},E,o)},S=v("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e,{isMediaComponent:s,isImageComponent:a}=t;return[o.root,s&&o.media,a&&o.img]}})(({ownerState:e})=>d({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),j=["video","audio","picture","iframe","img"],k=["picture","img"],P=M.forwardRef(function(o,t){const s=f({props:o,name:"MuiCardMedia"}),{children:a,className:l,component:i="div",image:n,src:p,style:c}=s,u=x(s,O),r=j.indexOf(i)!==-1,C=!r&&n?d({backgroundImage:`url("${n}")`},c):c,m=d({},s,{component:i,isMediaComponent:r,isImageComponent:k.indexOf(i)!==-1}),g=R(m);return y.jsx(S,d({className:I(g.root,l),as:i,role:!r&&n?"img":void 0,ref:t,style:C,ownerState:m,src:r?n||p:void 0},u,{children:a}))}),U=P;export{U as C};