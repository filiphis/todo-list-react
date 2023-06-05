import{H as l,C as c}from"./styled-components.browser.esm.dd33e753.js";import{a as o,F as r,j as n,r as u}from"./jsx-runtime.4babca41.js";import{I as k,r as f}from"./IconBase.esm.b69587c8.js";import"./iframe.ea2107c7.js";var t=new Map;t.set("bold",function(e){return o(r,{children:[n("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n("line",{x1:"88",y1:"128",x2:"168",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n("line",{x1:"128",y1:"88",x2:"128",y2:"168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});t.set("duotone",function(e){return o(r,{children:[n("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),n("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),n("line",{x1:"88",y1:"128",x2:"168",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("line",{x1:"128",y1:"88",x2:"128",y2:"168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});t.set("fill",function(){return n(r,{children:n("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm40,112H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"})})});t.set("light",function(e){return o(r,{children:[n("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n("line",{x1:"88",y1:"128",x2:"168",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n("line",{x1:"128",y1:"88",x2:"128",y2:"168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});t.set("thin",function(e){return o(r,{children:[n("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n("line",{x1:"88",y1:"128",x2:"168",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n("line",{x1:"128",y1:"88",x2:"128",y2:"168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});t.set("regular",function(e){return o(r,{children:[n("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),n("line",{x1:"88",y1:"128",x2:"168",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("line",{x1:"128",y1:"88",x2:"128",y2:"168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var p=function(s,d){return f(s,d,t)},a=u.exports.forwardRef(function(e,s){return n(k,{...Object.assign({ref:s},e,{renderPath:p})})});a.displayName="PlusCircle";const y=a,h=l.button`
  ${({theme:e})=>c`
    background-color: ${e.colors["blue-dark"]};
    color: ${e.colors["gray-100"]};
    padding: 1.6rem;
    min-width: 9rem;
    height: 5.2rem;
    border-radius: ${e.border.radius};
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 0.8rem;
    border: none;
    transition: filter 300ms ease, transform 150ms ease;
    transform: translateY(0);

    font-size: ${e.font.sizes.small};
    font-weight: ${e.font.bold};

    &:hover:not(:disabled) {
      cursor: pointer;
      filter: opacity(0.8);
      transform: translateY(-0.8px);
      transition: filter 300ms ease, transform 150ms ease;
    }

    div {
      display: flex;
      gap: 0.8rem;
      justify-content: space-around;
      align-items: center;
    }

    &:disabled {
      filter: opacity(0.7);
      cursor: not-allowed;
    }
  `}
`;function i({...e}){return n(h,{...e,children:n(r,{children:o("div",{children:["Criar",n(y,{size:20})]})})})}try{i.displayName="Button",i.__docgenInfo={description:"",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:i.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch{}const W={title:"Bot\xE3o",component:i},x=()=>n(i,{}),_=x.bind({});export{_ as Padrao,W as default};
//# sourceMappingURL=stories.cc26a2be.js.map
