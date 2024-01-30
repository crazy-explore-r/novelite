import{j as o,r as p,aT as x,ac as f,a0 as g,a2 as r}from"./index-f22446e5.js";import{D as U}from"./DashboardCard-df26d18d.js";import{u as B}from"./Grid-6c01a67e.js";import{S as D}from"./Stack-58acc4b3.js";import{A as P}from"./Avatar-934745ac.js";import{B as W}from"./Box-f8c4e902.js";import{T as h,g as C,a as T,s as j,c as v}from"./Typography-493ceae3.js";import{B as k}from"./Button-7d294087.js";import{c as y}from"./clsx.m-1229b3e0.js";import{i as G}from"./isMuiElement-0a1be5b6.js";import{L as I}from"./Link-f430d0ec.js";const E="/assets/novelite/client-dashboard/assets/icon-paypal-2fd983b9.svg",z="/assets/novelite/client-dashboard/assets/icon-office-bag-c5bb57e7.svg",F="/assets/novelite/client-dashboard/assets/icon-master-card-b0d31e2f.svg",V="/assets/novelite/client-dashboard/assets/icon-pie-8ceae68f.svg",Ee=()=>{const e=B(),t=e.palette.primary.main,n=e.palette.primary.light,i=e.palette.error.main,s=e.palette.error.light,c=e.palette.warning.main,a=e.palette.warning.light,l=e.palette.success.main,m=e.palette.success.light,u=[{title:"Paypal",subtitle:"Big Brands",price:6235,color:t,lightcolor:n,icon:E},{title:"Wallet",subtitle:"Bill payment",price:345,color:l,lightcolor:m,icon:z},{title:"Credit Card",subtitle:"Money reversed",price:2235,color:c,lightcolor:a,icon:F},{title:"Refund",subtitle:"Bill Payment",price:32,color:i,lightcolor:s,icon:V}];return o.jsx(U,{title:"Payment Gateways",subtitle:"Platform For Income",children:o.jsx(o.Fragment,{children:o.jsxs(D,{spacing:3,mt:5,children:[u.map((d,O)=>o.jsxs(D,{direction:"row",spacing:2,justifyContent:"space-between",alignItems:"center",children:[o.jsxs(D,{direction:"row",alignItems:"center",spacing:2,children:[o.jsx(P,{variant:"rounded",sx:{bgcolor:d.lightcolor,color:d.color,width:40,height:40},children:o.jsx(P,{src:d.icon,alt:d.icon,sx:{width:24,height:24}})}),o.jsxs(W,{children:[o.jsx(h,{variant:"h6",mb:"4px",children:d.title}),o.jsx(h,{variant:"subtitle2",color:"textSecondary",children:d.subtitle})]})]}),d.price<400?o.jsxs(h,{variant:"subtitle2",color:"textSecondary",fontWeight:"600",children:["-$",d.price]}):o.jsxs(h,{variant:"subtitle2",fontWeight:"600",children:["+$",d.price]})]},O)),o.jsx(k,{variant:"outlined",color:"primary",sx:{mt:"40px !important"},children:"View all transactions"})]})})})},H=p.createContext({}),N=H;function J(e){return C("MuiTimeline",e)}T("MuiTimeline",["root","positionLeft","positionRight","positionAlternate"]);const q=["position","className"],K=e=>{const{position:t,classes:n}=e,i={root:["root",t&&`position${x(t)}`]};return v(i,J,n)},Q=j("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.position&&t[`position${x(n.position)}`]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),X=p.forwardRef(function(t,n){const i=f({props:t,name:"MuiTimeline"}),{position:s="right",className:c}=i,a=g(i,q),l=r({},i,{position:s}),m=K(l),u=p.useMemo(()=>({position:s}),[s]);return o.jsx(N.Provider,{value:u,children:o.jsx(Q,r({className:y(m.root,c),ownerState:l,ref:n},a))})}),Y=X;function Z(e){return C("MuiTimelineConnector",e)}T("MuiTimelineConnector",["root"]);const ee=["className"],oe=e=>{const{classes:t}=e;return v({root:["root"]},Z,t)},te=j("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({width:2,backgroundColor:(e.vars||e).palette.grey[400],flexGrow:1})),ne=p.forwardRef(function(t,n){const i=f({props:t,name:"MuiTimelineConnector"}),{className:s}=i,c=g(i,ee),a=i,l=oe(a);return o.jsx(te,r({className:y(l.root,s),ownerState:a,ref:n},c))}),S=ne;function ie(e){return C("MuiTimelineContent",e)}const se=T("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate"]),re=se,le=["className"],ae=e=>{const{position:t,classes:n}=e,i={root:["root",`position${x(t)}`]};return v(i,ie,n)},ce=j(h,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`position${x(n.position)}`]]}})(({ownerState:e})=>r({flex:1,padding:"6px 16px",textAlign:"left"},e.position==="left"&&{textAlign:"right"})),pe=p.forwardRef(function(t,n){const i=f({props:t,name:"MuiTimelineContent"}),{className:s}=i,c=g(i,le),{position:a}=p.useContext(N),l=r({},i,{position:a||"right"}),m=ae(l);return o.jsx(ce,r({component:"div",className:y(m.root,s),ownerState:l,ref:n},c))}),w=pe;function me(e){return C("MuiTimelineDot",e)}T("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const de=["className","color","variant"],ue=e=>{const{color:t,variant:n,classes:i}=e,s={root:["root",n,t!=="inherit"&&`${n}${x(t)}`]};return v(s,me,i)},xe=j("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.color!=="inherit"&&`${n.variant}${x(n.color)}`],t[n.variant]]}})(({ownerState:e,theme:t})=>r({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(t.vars||t).shadows[1],margin:"11.5px 0"},e.variant==="filled"&&r({borderColor:"transparent"},e.color!=="inherit"&&r({},e.color==="grey"?{color:(t.vars||t).palette.grey[50],backgroundColor:(t.vars||t).palette.grey[400]}:{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main})),e.variant==="outlined"&&r({boxShadow:"none",backgroundColor:"transparent"},e.color!=="inherit"&&r({},e.color==="grey"?{borderColor:(t.vars||t).palette.grey[400]}:{borderColor:(t.vars||t).palette[e.color].main})))),he=p.forwardRef(function(t,n){const i=f({props:t,name:"MuiTimelineDot"}),{className:s,color:c="grey",variant:a="filled"}=i,l=g(i,de),m=r({},i,{color:c,variant:a}),u=ue(m);return o.jsx(xe,r({className:y(u.root,s),ownerState:m,ref:n},l))}),R=he;function fe(e){return C("MuiTimelineOppositeContent",e)}const ge=T("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate"]),A=ge,Ce=["className"],Te=e=>{const{position:t,classes:n}=e,i={root:["root",`position${x(t)}`]};return v(i,fe,n)},je=j(h,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`position${x(n.position)}`]]}})(({ownerState:e})=>r({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},e.position==="left"&&{textAlign:"left"})),L=p.forwardRef(function(t,n){const i=f({props:t,name:"MuiTimelineOppositeContent"}),{className:s}=i,c=g(i,Ce),{position:a}=p.useContext(N),l=r({},i,{position:a||"left"}),m=Te(l);return o.jsx(je,r({component:"div",className:y(m.root,s),ownerState:l,ref:n},c))});L.muiName="TimelineOppositeContent";const $=L;function ve(e){return C("MuiTimelineItem",e)}T("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","missingOppositeContent"]);const ye=["position","className"],we=e=>{const{position:t,classes:n,hasOppositeContent:i}=e,s={root:["root",`position${x(t)}`,!i&&"missingOppositeContent"]};return v(s,ve,n)},Re=j("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`position${x(n.position)}`]]}})(({ownerState:e})=>r({listStyle:"none",display:"flex",position:"relative",minHeight:70},e.position==="left"&&{flexDirection:"row-reverse"},e.position==="alternate"&&{"&:nth-of-type(even)":{flexDirection:"row-reverse",[`& .${re.root}`]:{textAlign:"right"},[`& .${A.root}`]:{textAlign:"left"}}},!e.hasOppositeContent&&{"&:before":{content:'""',flex:1,padding:"6px 16px"}})),$e=p.forwardRef(function(t,n){const i=f({props:t,name:"MuiTimelineItem"}),{position:s,className:c}=i,a=g(i,ye),{position:l}=p.useContext(N);let m=!1;p.Children.forEach(i.children,_=>{G(_,["TimelineOppositeContent"])&&(m=!0)});const u=r({},i,{position:s||l||"right",hasOppositeContent:m}),d=we(u),O=p.useMemo(()=>({position:u.position}),[u.position]);return o.jsx(N.Provider,{value:O,children:o.jsx(Re,r({className:y(d.root,c),ownerState:u,ref:n},a))})}),b=$e;function be(e){return C("MuiTimelineSeparator",e)}T("MuiTimelineSeparator",["root"]);const Me=["className"],Se=e=>{const{classes:t}=e;return v({root:["root"]},be,t)},Ne=j("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),Oe=p.forwardRef(function(t,n){const i=f({props:t,name:"MuiTimelineSeparator"}),{className:s}=i,c=g(i,Me),a=i,l=Se(a);return o.jsx(Ne,r({className:y(l.root,s),ownerState:a,ref:n},c))}),M=Oe,ze=()=>o.jsx(U,{title:"Recent Transactions",children:o.jsx(o.Fragment,{children:o.jsxs(Y,{className:"theme-timeline",nonce:void 0,onResize:void 0,onResizeCapture:void 0,sx:{p:0,mb:"-40px",[`& .${A.root}`]:{flex:.5,paddingLeft:0}},children:[o.jsxs(b,{children:[o.jsx($,{children:"09:30 am"}),o.jsxs(M,{children:[o.jsx(R,{color:"primary",variant:"outlined"}),o.jsx(S,{})]}),o.jsx(w,{children:"Payment received from John Doe of $385.90"})]}),o.jsxs(b,{children:[o.jsx($,{children:"10:00 am"}),o.jsxs(M,{children:[o.jsx(R,{color:"secondary",variant:"outlined"}),o.jsx(S,{})]}),o.jsxs(w,{children:[o.jsx(h,{fontWeight:"600",children:"New sale recorded"})," ",o.jsx(I,{href:"/",underline:"none",children:"#ML-3467"})]})]}),o.jsxs(b,{children:[o.jsx($,{children:"12:00 am"}),o.jsxs(M,{children:[o.jsx(R,{color:"success",variant:"outlined"}),o.jsx(S,{})]}),o.jsx(w,{children:"Payment was made of $64.95 to Michael"})]}),o.jsxs(b,{children:[o.jsx($,{children:"09:30 am"}),o.jsxs(M,{children:[o.jsx(R,{color:"warning",variant:"outlined"}),o.jsx(S,{})]}),o.jsxs(w,{children:[o.jsx(h,{fontWeight:"600",children:"New sale recorded"})," ",o.jsx(I,{href:"/",underline:"none",children:"#ML-3467"})]})]}),o.jsxs(b,{children:[o.jsx($,{children:"09:30 am"}),o.jsxs(M,{children:[o.jsx(R,{color:"error",variant:"outlined"}),o.jsx(S,{})]}),o.jsxs(w,{children:[o.jsx(h,{fontWeight:"600",children:"New arrival recorded"})," ",o.jsx(I,{href:"/",underline:"none",children:"#ML-3467"})]})]}),o.jsxs(b,{children:[o.jsx($,{children:"12:00 am"}),o.jsx(M,{children:o.jsx(R,{color:"success",variant:"outlined"})}),o.jsx(w,{children:"Payment Done"})]})]})})});export{Ee as P,ze as R};