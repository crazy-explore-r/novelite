import{a2 as e,r as p,ac as f,a0 as w,j as x}from"./index-f22446e5.js";import{g as F,a as d,s as G,d as C,c as y}from"./Typography-493ceae3.js";import{u as R}from"./useFormControl-c5cffc22.js";import{f as g}from"./formControlState-02eb4045.js";function j(o){return F("MuiFormGroup",o)}d("MuiFormGroup",["root","row","error"]);const M=["className","row"],S=o=>{const{classes:r,row:t,error:s}=o;return y({root:["root",t&&"row",s&&"error"]},j,r)},U=G("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:t}=o;return[r.root,t.row&&r.row]}})(({ownerState:o})=>e({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})),h=p.forwardRef(function(r,t){const s=f({props:r,name:"MuiFormGroup"}),{className:a,row:c=!1}=s,l=w(s,M),m=R(),i=g({props:s,muiFormControl:m,states:["error"]}),n=e({},s,{row:c,error:i.error}),u=S(n);return x.jsx(U,e({className:C(u.root,a),ownerState:n,ref:t},l))}),E=h;export{E as F};