import{j as a}from"./index-f22446e5.js";import{_ as s}from"./react-apexcharts.min-ff44eb59.js";import{P as h}from"./PageContainer-53646ac6.js";import{B as u}from"./Breadcrumb-c1517ab0.js";import{P as i}from"./ParentCard-c6023dea.js";import{u as f,G as r}from"./Grid-6c01a67e.js";import"./index.esm-e0300107.js";import"./Typography-493ceae3.js";import"./Link-f430d0ec.js";import"./Box-f8c4e902.js";import"./Card-99a14ea7.js";import"./Paper-eafa25ad.js";import"./CardHeader-53ac68d8.js";import"./Divider-efe6cf9e.js";import"./dividerClasses-0b6de4a8.js";import"./CardContent-621adc32.js";const x=[{to:"/",title:"Home"},{title:"Radialbar Chart"}],T=()=>{const t=f(),e=t.palette.primary.main,o=t.palette.secondary.main,n=t.palette.success.main,l=t.palette.warning.main,m={chart:{id:"pie-chart",fontFamily:"'Plus Jakarta Sans', sans-serif",foreColor:"#adb0bb",toolbar:{show:!1}},colors:[e,o,n,l],plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter(){return 249}}}}},tooltip:{theme:"dark"}},p=[44,55,67,83],c={chart:{id:"pie-chart",fontFamily:"'Plus Jakarta Sans', sans-serif",toolbar:{show:!1}},colors:[e],labels:["January","February","March","April","May","June"],tooltip:{theme:"dark"}},d=[{name:"Sales",data:[80,50,30,40,100,20]}];return a.jsxs(h,{title:"Radialbar & Radar Chart",description:"this is innerpage",children:[a.jsx(u,{title:"Radialbar Chart",items:x}),a.jsxs(r,{container:!0,spacing:3,children:[a.jsx(r,{item:!0,lg:6,md:12,xs:12,children:a.jsx(i,{title:"Radialbar Charts",children:a.jsx(s,{options:m,series:p,type:"radialBar",height:"300px"})})}),a.jsx(r,{item:!0,lg:6,md:12,xs:12,children:a.jsx(i,{title:"Radar Charts",children:a.jsx(s,{options:c,series:d,type:"radar",height:"300px"})})})]})]})};export{T as default};
