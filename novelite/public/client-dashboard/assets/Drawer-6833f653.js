import{aT as h,a2 as t,r as f,ac as U,a0 as B,j as p}from"./index-f22446e5.js";import{g as _,a as E,s as v,r as H,d as l,c as F}from"./Typography-493ceae3.js";import{u as O}from"./Grid-6c01a67e.js";import{M as W}from"./Modal-99caf082.js";import{P as q}from"./Paper-eafa25ad.js";import{S as V}from"./Slide-008ae128.js";function Y(o){return _("MuiDrawer",o)}E("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const G=["BackdropProps"],J=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],R=(o,r)=>{const{ownerState:e}=o;return[r.root,(e.variant==="permanent"||e.variant==="persistent")&&r.docked,r.modal]},K=o=>{const{classes:r,anchor:e,variant:a}=o,s={root:["root"],docked:[(a==="permanent"||a==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${h(e)}`,a!=="temporary"&&`paperAnchorDocked${h(e)}`]};return F(s,Y,r)},Q=v(W,{name:"MuiDrawer",slot:"Root",overridesResolver:R})(({theme:o})=>({zIndex:(o.vars||o).zIndex.drawer})),M=v("div",{shouldForwardProp:H,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:R})({flex:"0 0 auto"}),X=v(q,{name:"MuiDrawer",slot:"Paper",overridesResolver:(o,r)=>{const{ownerState:e}=o;return[r.paper,r[`paperAnchor${h(e.anchor)}`],e.variant!=="temporary"&&r[`paperAnchorDocked${h(e.anchor)}`]]}})(({theme:o,ownerState:r})=>t({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(o.vars||o).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},r.anchor==="left"&&{left:0},r.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},r.anchor==="right"&&{right:0},r.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},r.anchor==="left"&&r.variant!=="temporary"&&{borderRight:`1px solid ${(o.vars||o).palette.divider}`},r.anchor==="top"&&r.variant!=="temporary"&&{borderBottom:`1px solid ${(o.vars||o).palette.divider}`},r.anchor==="right"&&r.variant!=="temporary"&&{borderLeft:`1px solid ${(o.vars||o).palette.divider}`},r.anchor==="bottom"&&r.variant!=="temporary"&&{borderTop:`1px solid ${(o.vars||o).palette.divider}`})),b={left:"right",right:"left",top:"down",bottom:"up"};function Z(o){return["left","right"].indexOf(o)!==-1}function rr(o,r){return o.direction==="rtl"&&Z(r)?b[r]:r}const or=f.forwardRef(function(r,e){const a=U({props:r,name:"MuiDrawer"}),s=O(),y={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{anchor:x="left",BackdropProps:C,children:T,className:u,elevation:D=16,hideBackdrop:$=!1,ModalProps:{BackdropProps:j}={},onClose:N,open:m=!1,PaperProps:P={},SlideProps:z,TransitionComponent:I=V,transitionDuration:g=y,variant:c="temporary"}=a,L=B(a.ModalProps,G),d=B(a,J),k=f.useRef(!1);f.useEffect(()=>{k.current=!0},[]);const S=rr(s,x),i=t({},a,{anchor:x,elevation:D,open:m,variant:c},d),n=K(i),w=p.jsx(X,t({elevation:c==="temporary"?D:0,square:!0},P,{className:l(n.paper,P.className),ownerState:i,children:T}));if(c==="permanent")return p.jsx(M,t({className:l(n.root,n.docked,u),ownerState:i,ref:e},d,{children:w}));const A=p.jsx(I,t({in:m,direction:b[S],timeout:g,appear:k.current},z,{children:w}));return c==="persistent"?p.jsx(M,t({className:l(n.root,n.docked,u),ownerState:i,ref:e},d,{children:A})):p.jsx(Q,t({BackdropProps:t({},C,j,{transitionDuration:g}),className:l(n.root,n.modal,u),open:m,ownerState:i,onClose:N,hideBackdrop:$,ref:e},d,L,{children:A}))}),cr=or;export{cr as D};