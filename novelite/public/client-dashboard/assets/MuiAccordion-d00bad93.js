import{R as u,j as e}from"./index-f22446e5.js";import{B as m}from"./Breadcrumb-c1517ab0.js";import{P as j}from"./PageContainer-53646ac6.js";import{P as g}from"./ParentCard-c6023dea.js";import{C as c}from"./ChildCard-37e943a8.js";import{g as n}from"./index.esm-e0300107.js";import{G as o}from"./Grid-6c01a67e.js";import{A as t,a,b as r}from"./AccordionSummary-a2050d54.js";import{T as i}from"./Typography-493ceae3.js";import{D as d}from"./Divider-efe6cf9e.js";import"./Link-f430d0ec.js";import"./Box-f8c4e902.js";import"./Card-99a14ea7.js";import"./Paper-eafa25ad.js";import"./CardHeader-53ac68d8.js";import"./CardContent-621adc32.js";import"./useControlled-7a3bcd39.js";import"./Collapse-44c0c5ba.js";import"./utils-e57cfcaa.js";import"./dividerClasses-0b6de4a8.js";const v=[{to:"/",title:"Home"},{title:"Accordion"}],M=()=>{const[s,x]=u.useState(!1),l=h=>(b,p)=>{x(p?h:!1)};return e.jsxs(j,{title:"Accordion",description:"this is Accordion page",children:[e.jsx(m,{title:"Accordion",items:v}),e.jsx(g,{title:"Accordion",children:e.jsxs(o,{container:!0,spacing:3,children:[e.jsx(o,{item:!0,xs:12,display:"flex",alignItems:"stretch",children:e.jsxs(c,{title:"Basic",children:[e.jsxs(t,{children:[e.jsx(a,{expandIcon:e.jsx(n,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:e.jsx(i,{variant:"h6",children:"Accordion 1"})}),e.jsx(r,{children:e.jsx(i,{variant:"subtitle1",color:"textSecondary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsx(d,{}),e.jsxs(t,{children:[e.jsx(a,{expandIcon:e.jsx(n,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:e.jsx(i,{variant:"h6",children:"Accordion 2"})}),e.jsx(r,{children:e.jsx(i,{variant:"subtitle1",color:"textSecondary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsx(d,{}),e.jsx(t,{disabled:!0,children:e.jsx(a,{expandIcon:e.jsx(n,{}),"aria-controls":"panel3a-content",id:"panel3a-header",children:e.jsx(i,{variant:"h6",children:"Disabled Accordion"})})})]})}),e.jsx(o,{item:!0,xs:12,display:"flex",alignItems:"stretch",children:e.jsxs(c,{title:"Controlled",children:[e.jsxs(t,{expanded:s==="panel1",onChange:l("panel1"),children:[e.jsxs(a,{expandIcon:e.jsx(n,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:[e.jsx(i,{variant:"h6",sx:{width:"47%",flexShrink:0},children:"General settings"}),e.jsx(i,{variant:"subtitle2",color:"textSecondary",children:"I am an accordion"})]}),e.jsx(r,{children:e.jsx(i,{variant:"subtitle1",color:"textSecondary",children:"Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."})})]}),e.jsxs(t,{expanded:s==="panel2",onChange:l("panel2"),children:[e.jsxs(a,{expandIcon:e.jsx(n,{}),"aria-controls":"panel2bh-content",id:"panel2bh-header",children:[e.jsx(i,{variant:"h6",sx:{width:"47%",flexShrink:0},children:"Users"}),e.jsx(i,{variant:"subtitle2",color:"textSecondary",children:"You are currently not an owner"})]}),e.jsx(r,{children:e.jsx(i,{variant:"subtitle1",color:"textSecondary",children:"Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet."})})]}),e.jsxs(t,{expanded:s==="panel3",onChange:l("panel3"),children:[e.jsxs(a,{expandIcon:e.jsx(n,{}),"aria-controls":"panel3bh-content",id:"panel3bh-header",children:[e.jsx(i,{variant:"h6",sx:{width:"47%",flexShrink:0},children:"Advanced settings"}),e.jsx(i,{variant:"subtitle2",color:"textSecondary",children:"Filtering has been entirely disabled for whole web server"})]}),e.jsx(r,{children:e.jsx(i,{variant:"subtitle1",color:"textSecondary",children:"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."})})]}),e.jsxs(t,{expanded:s==="panel4",onChange:l("panel4"),children:[e.jsx(a,{expandIcon:e.jsx(n,{}),"aria-controls":"panel4bh-content",id:"panel4bh-header",children:e.jsx(i,{variant:"h6",sx:{width:"47%",flexShrink:0},children:"Personal data"})}),e.jsx(r,{children:e.jsx(i,{variant:"subtitle1",color:"textSecondary",children:"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."})})]})]})})]})})]})};export{M as default};