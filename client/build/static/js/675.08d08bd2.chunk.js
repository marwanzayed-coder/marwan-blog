"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[675],{675:function(e,r,t){t.r(r);var a=t(439),s=t(791),n=t(87),o=t(48),l=t.n(o),c=t(263),i=t(184);r.default=function(){var e=(0,s.useState)([]),r=(0,a.Z)(e,2),t=r[0],o=r[1],d=(0,s.useState)(!1),u=(0,a.Z)(d,2),f=u[0],h=u[1];(0,s.useEffect)((function(){c.Z.get("/api/getposts").then((function(e){o(e.data.posts)})).catch((function(e){return h(!0)}))}),[]);var b=(0,s.useState)(0),g=(0,a.Z)(b,2),p=g[0],m=g[1],x=p+9,v=t.slice(p,x),j=Math.ceil(t.length/9);return(0,i.jsxs)("div",{children:[f?(0,i.jsx)("div",{className:"alert alert-error shadow-lg",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,i.jsxs)("span",{children:["\u0644\u0644\u0627\u0633\u0641 \u062a\u0648\u062c\u062f \u0645\u0634\u0643\u0644\u0647 \u0627\u0644\u0627\u0646 \u0648 \u0633\u064a\u062a\u0645 \u062d\u0644\u0647\u0627 \u0628\u0627\u0633\u0631\u0639 \u0648\u0642\u062a \u0648 \u0627\u0630\u0627 \u0644\u0645 \u064a\u062a\u0645 \u062d\u0644\u0647\u0627 \u064a\u0645\u0643\u0646\u0643 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a"," ",(0,i.jsx)("a",{href:"https://www.marwan.gq/contact",target:"_blank",rel:"noopener noreferrer",className:"link",children:"\u0648 \u0647\u0646\u0627 \u062a\u0648\u062c\u062f \u0643\u0644 \u0627\u0644\u0637\u0631\u0642 \u0644\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a"})]})]})}):(0,i.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:v.map((function(e,r){return(0,i.jsxs)("div",{className:"card card-compact bg-base-100 shadow-xl mt-6",children:[(0,i.jsx)("figure",{children:(0,i.jsx)("img",{src:e.img,alt:"Album"})}),(0,i.jsxs)("div",{className:"card-body relative",children:[(0,i.jsx)(n.rU,{className:"card-title relative before:content before:w-10 hover:before:w-full before:h-10 before:bg-primary before:opacity-10 before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:rounded-tl-[50px] before:rounded-br-[50px] before:rounded-tr-[10px] before:rounded-bl-[10px] before:transition-all",to:"/blog/".concat(e.href),children:e.title}),(0,i.jsx)("p",{children:e.desc}),(0,i.jsx)("div",{className:"card-actions justify-end",children:(0,i.jsx)(n.rU,{to:"/category/"+e.category,className:"badge badge-outline",children:e.category})})]})]},r)}))}),t.length>9?(0,i.jsx)(l(),{className:"btn-group flex justify-center mt-5",pageClassName:"btn",activeClassName:"btn-active",previousLabel:"\xab",nextLabel:"\xbb",previousClassName:"btn rounded-none",nextClassName:"btn rounded-none",onPageChange:function(e){var r=9*e.selected%t.length;console.log("User requested page number ".concat(e.selected,", which is offset ").concat(r)),m(r)},pageRangeDisplayed:6,pageCount:j,renderOnZeroPageCount:void 0}):""]})}}}]);
//# sourceMappingURL=675.08d08bd2.chunk.js.map