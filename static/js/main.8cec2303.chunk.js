(this.webpackJsonpwhysolo=this.webpackJsonpwhysolo||[]).push([[0],{24:function(e,s,c){},25:function(e,s,c){},26:function(e,s,c){},31:function(e,s,c){"use strict";c.r(s);var t=c(8),i=c.n(t),n=c(18),a=c.n(n),l=(c(24),c(13)),o=(c.p,c(25),c(26),c(12));c(17),c(29);o.a.initializeApp({apiKey:"AIzaSyCY44NmMaX-1m-ziUHuyOR26D0OJAc927c",authDomain:"personal-38ff2.firebaseapp.com",databaseURL:"https://personal-38ff2.firebaseio.com",projectId:"personal-38ff2",storageBucket:"personal-38ff2.appspot.com",messagingSenderId:"1052030309142",appId:"1:1052030309142:web:c910b04497ce69dd1a3637",measurementId:"G-YDW2FCR93G"});var r=c(2),j=function(){Object(t.useEffect)((function(){o.a.auth().signOut().then((function(){})).catch((function(e){console.error("Sign Out Error",e)}));var e=document.querySelector("#sign-in-btn"),s=document.querySelector("#sign-up-btn"),c=document.querySelector(".container");s.addEventListener("click",(function(){c.classList.add("sign-up-mode")})),e.addEventListener("click",(function(){c.classList.remove("sign-up-mode")}))}),[]);return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{class:"container",children:[Object(r.jsx)("div",{class:"forms-container",children:Object(r.jsxs)("div",{class:"signin-signup",children:[Object(r.jsxs)("form",{class:"sign-in-form",children:[Object(r.jsx)("h2",{class:"title",children:"Sign in"}),Object(r.jsxs)("div",{class:"input-field",children:[Object(r.jsx)("i",{class:"fas fa-user"}),Object(r.jsx)("input",{type:"text",placeholder:"User E-mail",id:"login_mail"})]}),Object(r.jsxs)("div",{class:"input-field",children:[Object(r.jsx)("i",{class:"fas fa-lock"}),Object(r.jsx)("input",{type:"password",placeholder:"Password",id:"login_pass"})]}),Object(r.jsx)("input",{type:"button",value:"Login",class:"btn solid",onClick:function(){var e=document.getElementById("login_mail").value,s=document.getElementById("login_pass").value;o.a.auth().signInWithEmailAndPassword(e,s).then((function(e){console.log(e)})).catch((function(e){alert(e.message)}))}}),Object(r.jsx)("p",{class:"social-text",children:"Or Sign in with social platforms"}),Object(r.jsxs)("div",{class:"social-media",children:[Object(r.jsx)("a",{href:"#",class:"social-icon",children:Object(r.jsx)("i",{class:"fab fa-facebook-f"})}),Object(r.jsx)("a",{href:"#",class:"social-icon",children:Object(r.jsx)("i",{class:"fab fa-twitter"})}),Object(r.jsx)("a",{href:"#",class:"social-icon",children:Object(r.jsx)("i",{class:"fab fa-google"})}),Object(r.jsx)("a",{href:"#",class:"social-icon",children:Object(r.jsx)("i",{class:"fab fa-linkedin-in"})})]})]}),Object(r.jsxs)("form",{class:"sign-up-form",children:[Object(r.jsx)("h2",{class:"title",children:"Sign up"}),Object(r.jsxs)("div",{class:"input-field",children:[Object(r.jsx)("i",{class:"fas fa-user"}),Object(r.jsx)("input",{type:"text",placeholder:"Username",id:"sign_user"})]}),Object(r.jsxs)("div",{class:"input-field",children:[Object(r.jsx)("i",{class:"fas fa-envelope"}),Object(r.jsx)("input",{type:"email",placeholder:"Email",id:"sign_mail"})]}),Object(r.jsxs)("div",{class:"input-field",children:[Object(r.jsx)("i",{class:"fas fa-lock"}),Object(r.jsx)("input",{type:"password",placeholder:"Password",id:"sign_pass"})]}),Object(r.jsx)("input",{type:"button",class:"btn",value:"Sign up",onClick:function(){var e=document.getElementById("sign_mail").value,s=document.getElementById("sign_pass").value;o.a.auth().createUserWithEmailAndPassword(e,s).then((function(c){o.a.auth().signInWithEmailAndPassword(e,s).then((function(e){})).catch((function(e){alert(e.message)}))})).catch((function(e){alert(e.message)}))}}),Object(r.jsx)("p",{class:"social-text",children:"Or Sign up with social platforms"}),Object(r.jsxs)("div",{class:"social-media",children:[Object(r.jsx)("a",{href:"#",class:"social-icon",children:Object(r.jsx)("i",{class:"fab fa-facebook-f"})}),Object(r.jsx)("a",{href:"#",class:"social-icon",children:Object(r.jsx)("i",{class:"fab fa-twitter"})}),Object(r.jsx)("a",{href:"#",class:"social-icon",children:Object(r.jsx)("i",{class:"fab fa-google"})}),Object(r.jsx)("a",{href:"#",class:"social-icon",children:Object(r.jsx)("i",{class:"fab fa-linkedin-in"})})]})]})]})}),Object(r.jsxs)("div",{class:"panels-container",children:[Object(r.jsxs)("div",{class:"panel left-panel",children:[Object(r.jsxs)("div",{class:"content",children:[Object(r.jsx)("h3",{children:"New here ?"}),Object(r.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!"}),Object(r.jsx)("button",{class:"btn transparent",id:"sign-up-btn",children:"Sign up"})]}),Object(r.jsx)("img",{src:"img/log.svg",class:"image",alt:""})]}),Object(r.jsxs)("div",{class:"panel right-panel",children:[Object(r.jsxs)("div",{class:"content",children:[Object(r.jsx)("h3",{children:"One of us ?"}),Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti."}),Object(r.jsx)("button",{class:"btn transparent",id:"sign-in-btn",children:"Sign in"})]}),Object(r.jsx)("img",{src:"img/register.svg",class:"image",alt:""})]})]})]})})},d=function(){return Object(t.useEffect)((function(){}),[]),Object(r.jsx)("div",{children:"DASH"})},b=c(19),u=c.n(b);var f=function(){var e=Object(t.useState)(!1),s=Object(l.a)(e,2),c=s[0],i=s[1],n=Object(t.useState)(!0),a=Object(l.a)(n,2),b=a[0],f=a[1];return Object(t.useEffect)((function(){f(!0),o.a.auth().onAuthStateChanged((function(e){f(!0),e?(i(!0),f(!1)):(i(!1),f(!1))}))}),[]),Object(r.jsx)("div",{className:"App",children:b?Object(r.jsx)("div",{children:Object(r.jsx)("center",{children:Object(r.jsx)(u.a,{type:"bars",color:"grey",height:667,width:375})})}):c?Object(r.jsx)(d,{}):Object(r.jsx)(j,{})})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(s){var c=s.getCLS,t=s.getFID,i=s.getFCP,n=s.getLCP,a=s.getTTFB;c(e),t(e),i(e),n(e),a(e)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),h()}},[[31,1,2]]]);
//# sourceMappingURL=main.8cec2303.chunk.js.map