import{a2 as o,r as i,ac as U,a0 as _,j as P}from"./index-f22446e5.js";import{a as k,g as z,s as b,d as f,c as D}from"./Typography-493ceae3.js";import{a as I,A as T}from"./Avatar-934745ac.js";function V(a){return z("MuiAvatarGroup",a)}const W=k("MuiAvatarGroup",["root","avatar"]),q=W,B=["children","className","component","componentsProps","max","renderSurplus","slotProps","spacing","total","variant"],S={small:-16,medium:null},F=a=>{const{classes:t}=a;return D({root:["root"],avatar:["avatar"]},V,t)},H=b("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(a,t)=>o({[`& .${q.avatar}`]:t.avatar},t.root)})(({theme:a})=>({[`& .${I.root}`]:{border:`2px solid ${(a.vars||a).palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"})),J=b(T,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:(a,t)=>t.avatar})(({theme:a})=>({border:`2px solid ${(a.vars||a).palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}})),K=i.forwardRef(function(t,g){var G;const c=U({props:t,name:"MuiAvatarGroup"}),{children:M,className:N,component:h="div",componentsProps:$={},max:p=5,renderSurplus:y,slotProps:L={},spacing:e="medium",total:R,variant:v="circular"}=c,j=_(c,B);let r=p<2?2:p;const u=o({},c,{max:p,spacing:e,component:h,variant:v}),d=F(u),m=i.Children.toArray(M).filter(s=>i.isValidElement(s)),l=R||m.length;l===r&&(r+=1),r=Math.min(l+1,r);const A=Math.min(m.length,r-1),x=Math.max(l-r,l-A,0),w=y?y(x):`+${x}`,C=e&&S[e]!==void 0?S[e]:-e,n=(G=L.additionalAvatar)!=null?G:$.additionalAvatar;return P.jsxs(H,o({as:h,ownerState:u,className:f(d.root,N),ref:g},j,{children:[x?P.jsx(J,o({ownerState:u,variant:v},n,{className:f(d.avatar,n==null?void 0:n.className),style:o({marginLeft:C},n==null?void 0:n.style),children:w})):null,m.slice(0,A).reverse().map((s,E)=>i.cloneElement(s,{className:f(s.props.className,d.avatar),style:o({marginLeft:E===A-1?void 0:C},s.props.style),variant:s.props.variant||v}))]}))}),Y=K;export{Y as A};
