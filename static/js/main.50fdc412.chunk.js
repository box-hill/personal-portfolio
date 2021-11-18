(this["webpackJsonppersonal-portfolio"]=this["webpackJsonppersonal-portfolio"]||[]).push([[0],{14:function(e,t,o){},21:function(e,t,o){"use strict";o.r(t);var s=o(2),n=o.n(s),c=o(8),i=o.n(c),r=(o(14),o(0));var a=function(){return Object(r.jsx)("section",{id:"intro-section",children:Object(r.jsxs)("h1",{children:[Object(r.jsxs)("span",{className:"fade-in-delayed",children:["Hi! I'm ",Object(r.jsx)("span",{id:"first-name",children:"Aaron"}),"."]}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{className:"slide-in-right",children:"Bringing ideas"}),Object(r.jsx)("span",{className:"slide-in-left",children:"to life"}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{className:"slide-in-delayed",children:"is my passion."})]})})};var l=function(){return Object(s.useEffect)((function(){var e=0,t=document.getElementById("navbar");window.onload=function(){e=t.offsetTop},window.addEventListener("resize",(function(){e=t.offsetTop})),window.onscroll=function(){window.pageYOffset>=e?t.classList.add("sticky"):t.classList.remove("sticky")}}),[]),Object(r.jsx)("nav",{id:"navbar",children:Object(r.jsxs)("ul",{id:"navbar-container",children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#intro-section",children:"Introduction"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#projects",children:"Projects"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"mailto:aaronlim314@gmail.com",children:"Contact Me"})})]})})},d=o(9);var h=function(e){var t=e.framework,o=t.text,s=t.icon;return Object(r.jsxs)("div",{className:"icon-wrapper",children:[Object(r.jsx)("img",{className:"svg-icon",src:s,alt:o}),Object(r.jsx)("div",{className:"icon-text",children:o})]})},g=o(3),p=o(4);var j=function(e){var t=e.project,o=t.madeWith,s=t.description,n=t.motivation,c=t.demoUrl,i=t.githubUrl;return Object(r.jsxs)("div",{className:"project-info",children:[Object(r.jsx)("h4",{children:"Description"}),Object(r.jsx)("p",{children:s}),Object(r.jsx)("h4",{children:"Motivation"}),Object(r.jsx)("p",{children:n}),Object(r.jsx)("h4",{children:"Built with"}),Object(r.jsx)("div",{className:"icon-container",children:o.map((function(e,t){return Object(r.jsx)(h,{framework:e},t)}))}),c?Object(r.jsxs)("a",{href:c,target:"none",children:["Live Demo ",Object(r.jsx)(g.a,{icon:p.b})]}):null,Object(r.jsxs)("a",{href:i,target:"none",children:["Github Code ",Object(r.jsx)(g.a,{icon:p.b})]})]})};var b=function(e){var t=e.project,o=t.title,n=t.imgUrl,c=t.background,i=Object(s.useState)(!1),a=Object(d.a)(i,2),l=a[0],h=a[1];return Object(r.jsxs)("section",{className:"project-section",style:{background:"".concat(c)},children:[Object(r.jsxs)("h3",{className:"project-title",onClick:function(){return h(!l)},children:[Object(r.jsx)(g.a,{icon:p.a,className:l?"rotate-left":"rotate-right"}),o]}),l?null:Object(r.jsxs)("div",{className:"slide-in",children:[Object(r.jsx)("img",{className:"project-image",src:n}),Object(r.jsx)(j,{project:t})]})]})},w={title:"Japanese Sentence Searcher",background:"#ececec",imgUrl:"./project1.png",demoUrl:"https://reibun-kensaku.web.app/",githubUrl:"https://github.com/box-hill/reibun-kensaku",description:"A powerful Japanese sentence search engine, capable of generating sentences from long complex phrases.",motivation:"Many popular Japanese sentence searchers are great at generating sentences from one word searches, but fail once that word is turned into a phrase. My goal was to create a language learning tool that wasn\u2019t limited by a traditional dictionary API/database query search.",madeWith:[{text:"HTML5",icon:"https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"},{text:"CSS3",icon:"https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"},{text:"React.js",icon:"https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"},{text:"Sass",icon:"https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg"},{text:"Firebase",icon:"https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"},{text:"Google Search API",icon:"https://www.vectorlogo.zone/logos/google/google-icon.svg"}]},m={title:"Food Ordering Website",background:"#dddddd",imgUrl:"./project2.png",demoUrl:"https://github.com/box-hill/order-with-me",githubUrl:"https://box-hill.github.io/order-with-me/#/",description:"A food ordering collaboration website where users can place orders to their table, view the pending orders and see what others on the same table have ordered. Orders can also be marked as complete from the restaurant kitchen.",motivation:"To create a website that is capable of helping small businesses/restaurants by using Firebase realtime database as the backend service.",madeWith:[{text:"HTML5",icon:"https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"},{text:"CSS3",icon:"https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"},{text:"React.js",icon:"https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"},{text:"Typescript",icon:"https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"},{text:"Sass",icon:"https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg"},{text:"Firebase",icon:"https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"}]},u={title:"Personal Portfolio",background:"#ececec",imgUrl:"#",githubUrl:"https://github.com/box-hill/personal-portfolio",description:"My personal portfolio of projects.",motivation:"To create reusable React components that will allow me to easily update my portfolio in the future.",madeWith:[{text:"HTML5",icon:"https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"},{text:"CSS3",icon:"https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"},{text:"React.js",icon:"https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"},{text:"Sass",icon:"https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg"}]},v={title:"Final Year Project: Rubik's Cube Solving Robot",background:"#dddddd",imgUrl:"./fyp.png",demoUrl:"./fyp.mp4",githubUrl:"https://github.com/box-hill/raspi_rubiks",description:"A robot that uses computer vision (OpenCV) to map out a Rubik's cube layout and then generate a solution using Kociemba's algorithm. The solution is sent from the Raspberry Pi to another microcontroller (Cypress PSoC) where a series of arm rotations are executed to solve the puzzle. This project was done by 2 Mechatronics Engineering students, funded by Monash University.",motivation:"To design and construct a robot that is able to independently communicate between different systems to solve a complex puzzle.",madeWith:[{text:"RaspberryPi",icon:"https://www.vectorlogo.zone/logos/raspberrypi/raspberrypi-icon.svg"},{text:"C",icon:"https://img.icons8.com/color/144/000000/c-programming.png"},{text:"OpenCV",icon:"https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg"},{text:"SolidWorks",icon:"https://img.icons8.com/color/144/000000/solidworks.png"}]};var x=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(a,{}),Object(r.jsx)(l,{}),Object(r.jsxs)("div",{id:"projects",children:[Object(r.jsx)(b,{project:w}),Object(r.jsx)(b,{project:m}),Object(r.jsx)(b,{project:u}),Object(r.jsx)(b,{project:v})]})]})};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.50fdc412.chunk.js.map