import{r as a,a as I,j as g}from"./jsx-runtime.4babca41.js";var _=a.exports.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),y=function(i,o,t){var r=t.get(i);return r?r(o):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function x(e,i){if(e==null)return{};var o={},t=Object.keys(e),r,n;for(n=0;n<t.length;n++)r=t[n],!(i.indexOf(r)>=0)&&(o[r]=e[r]);return o}var f=a.exports.forwardRef(function(e,i){var o=e.alt,t=e.color,r=e.size,n=e.weight,w=e.mirrored,v=e.children,m=e.renderPath,C=x(e,["alt","color","size","weight","mirrored","children","renderPath"]),l=a.exports.useContext(_),s=l.color,c=s===void 0?"currentColor":s,h=l.size,d=l.weight,z=d===void 0?"regular":d,u=l.mirrored,P=u===void 0?!1:u,j=x(l,["color","size","weight","mirrored"]);return I("svg",{...Object.assign({ref:i,xmlns:"http://www.w3.org/2000/svg",width:r!=null?r:h,height:r!=null?r:h,fill:t!=null?t:c,viewBox:"0 0 256 256",transform:w||P?"scale(-1, 1)":void 0},j,C),children:[!!o&&g("title",{children:o}),v,g("rect",{width:"256",height:"256",fill:"none"}),m(n!=null?n:z,t!=null?t:c)]})});f.displayName="IconBase";const B=f;export{B as I,y as r};
//# sourceMappingURL=IconBase.esm.b69587c8.js.map