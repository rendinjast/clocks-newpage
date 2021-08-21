var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,s=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&i(e,r,t[r]);if(n)for(var r of n(t))o.call(t,r)&&i(e,r,t[r]);return e},l=(e,n)=>t(e,r(n));import{j as d,r as p,s as c,R as m,a as u}from"./vendor.812e65b6.js";const h=(e,t)=>{switch(t.type){case"CHANGE_THEME":return l(s({},e),{theme:t.payload});case"CHANGE_NAME":return l(s({},e),{name:t.payload});default:return e}},g=d.exports.jsx,x=d.exports.jsxs,b=d.exports.Fragment,f={theme:localStorage.getItem("theme")||"light",name:localStorage.getItem("name")||""},y=p.exports.createContext({state:f,dispatch:()=>{}}),w=()=>p.exports.useContext(y),v=({children:e})=>{const[t,r]=p.exports.useReducer(h,f);return p.exports.useEffect((()=>{localStorage.setItem("theme",t.theme)}),[t.theme]),g(y.Provider,{value:{state:t,dispatch:r},children:e})},j=c.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 45px;
  border: 1px solid ${({borderColor:e})=>e};
`,E=c.div`
  position: absolute;
  z-index: 5;
  width: 3px;
  height: 23px;
  background: ${({color:e})=>e};
  right: 50%;
  top: -2%;
  transform-origin: bottom;
  transform: rotate(${({rotate:e})=>e}deg);
  margin-left: -2px;
  transition: all 1s;
  @media only screen and (max-width: 1400px) {
    & {
      height: 18px;
    }
  }
  @media only screen and (max-width: 1150px) {
    & {
      width: 2px;
      height: 14px;
    }
  }
  @media only screen and (max-width: 900px) {
    & {
      height: 11px;
    }
  }
  @media only screen and (max-width: 700px) {
    & {
      height: 9px;
    }
  }
`,S=({rotate:e})=>{const[t,r]=p.exports.useState(),{state:n}=w();return p.exports.useEffect((()=>{r("light"!==n.theme)}),[n.theme]),g(j,{borderColor:t?"#eeeeee47":"rgba(0,0,0,.2)",children:e.map(((e,r)=>g(E,{color:t?"#eee":"rgb(66, 66, 66)",rotate:e},r)))})},C=[45,45],$=[0,90],O=[0,180],k=[0,270],I=[90,180],H=[90,270],P=[180,270],M=[C,C,P,I,k,$,P,I,k,$,C,C],A=[C,P,H,I,C,O,P,$,C,O,O,C,C,O,O,C,P,$,k,I,k,H,H,$],N=[P,H,H,I,O,P,H,$,O,k,H,I,k,H,I,O,P,H,$,O,k,H,H,$],G=[P,H,H,I,O,P,H,$,O,k,H,I,O,P,H,$,O,k,H,I,k,H,H,$],_=[P,I,P,I,O,O,O,O,O,k,$,O,O,P,H,$,O,O,C,C,k,$,C,C],z=[P,H,H,I,k,H,I,O,P,H,$,O,O,P,H,$,O,k,H,I,k,H,H,$],D=[C,C,P,I,C,C,O,O,P,H,$,O,O,P,I,O,O,k,$,O,k,H,H,$],R=[P,H,H,I,O,P,H,$,O,O,C,C,O,O,C,C,O,O,C,C,k,$,C,C],T=[P,H,H,I,O,P,I,O,O,k,$,O,O,P,I,O,O,k,$,O,k,H,H,$],B=[P,H,H,I,O,P,I,O,O,k,$,O,O,P,H,$,O,O,C,C,k,$,C,C],F=e=>{switch(e){case"0":case"1":return A;case"2":return N;case"3":return G;case"4":return _;case"5":return z;case"6":return D;case"7":return R;case"8":return T;case"9":return B;default:return M}},q=c.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(${({separator:e})=>e}, 46px);
  grid-template-rows: repeat(6, 46px);
  margin-bottom: 10rem;
  align-items: center;
  direction: rtl;
  @media only screen and (max-width: 1400px) {
    & {
      grid-template-columns: repeat(${({separator:e})=>e}, 36px);
      grid-template-rows: repeat(6, 36px);
    }
  }
  @media only screen and (max-width: 1150px) {
    & {
      grid-template-columns: repeat(${({separator:e})=>e}, 28px);
      grid-template-rows: repeat(6, 28px);
    }
  }
  @media only screen and (max-width: 900px) {
    & {
      grid-template-columns: repeat(${({separator:e})=>e}, 22px);
      grid-template-rows: repeat(6, 22px);
    }
  }
  @media only screen and (max-width: 700px) {
    & {
      grid-template-columns: repeat(${({separator:e})=>e}, 18px);
      grid-template-rows: repeat(6, 18px);
    }
  }
  /* @media only screen and (max-width: 500px) {
    & {

      grid-template-columns: repeat(${({separator:e})=>e}, 20px);
      grid-template-rows: repeat(6, 20px);
    }
  } */
`,J=({number:e})=>g(q,{separator:4,children:e.map(((e,t)=>g(S,{rotate:e},t)))}),K=()=>g(q,{separator:2,children:M.map(((e,t)=>g(S,{rotate:e},t)))}),L=c.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`,Q=c.button`
  font-size: 1.4rem;
  background: none;
  border: none;
  margin: 12px;
  outline: none;
`,U=()=>{const{state:e,dispatch:t}=w();return g(L,{children:g(Q,{onClick:()=>{t({type:"CHANGE_THEME",payload:"light"===e.theme?"dark":"light"})},children:"light"===e.theme?"🌝":"🌚"})})},V=c.div`
  background-color: ${({backgroundColor:e})=>e};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 1s ease-out;
`;function W(){const[e,t]=p.exports.useState(),{state:r}=w();return p.exports.useEffect((()=>{const e=setInterval((()=>{const e=new Date;let r=e.getHours().toString().split(""),n=e.getMinutes().toString().split(""),a=e.getSeconds().toString().split("");1===r.length&&(r=["0",r[0]]),1===n.length&&(n=["0",n[0]]),1===a.length&&(a=["0",a[0]]),t({hour:[r[0],r[1]],minute:[n[0],n[1]],second:[a[0],a[1]]})}),1e3);return()=>clearInterval(e)}),[]),x(b,{children:[g(U,{}),x(V,{backgroundColor:"light"===r.theme?"#f7f7f7":"#0e0e0e",children:[g(J,{number:F((null==e?void 0:e.hour[0])||"0")}),g(J,{number:F((null==e?void 0:e.hour[1])||"0")}),g(K,{}),g(J,{number:F((null==e?void 0:e.minute[0])||"0")}),g(J,{number:F((null==e?void 0:e.minute[1])||"0")}),g(K,{}),g(J,{number:F((null==e?void 0:e.second[0])||"0")}),g(J,{number:F((null==e?void 0:e.second[1])||"0")})]})]})}m.render(g(u.StrictMode,{children:g(v,{children:g(W,{})})}),document.getElementById("root"));
