(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},s={app:0},r={app:0},i=[];function o(t){return l.p+"js/"+({algebra:"algebra"}[t]||t)+"."+{algebra:"2e40a755"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={algebra:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var n="css/"+({algebra:"algebra"}[t]||t)+"."+{algebra:"0578a620"}[t]+".css",r=l.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var c=i[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===r))return e()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){c=p[o],u=c.getAttribute("data-href");if(u===n||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete s[t],d.parentNode.removeChild(d),a(i)},d.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){s[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t);var p=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",p.name="ChunkLoadError",p.type=n,p.request=s,a[1](p)}r[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var d=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034b":function(t,e,a){},"034f":function(t,e,a){"use strict";a("85ec")},"0361":function(t,e,a){t.exports=a.p+"img/audio.1188015e.png"},"3a4d":function(t,e,a){t.exports=a.p+"img/cube.33535790.png"},4239:function(t,e,a){t.exports=a.p+"img/landscape-props.080bb0ff.png"},"4d5c":function(t,e,a){t.exports=a.p+"img/playbtn.839c077a.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("transition",{attrs:{name:"scale",mode:"out-in"}},[a("router-view")],1)],1)},r=[],i={mounted:function(){}},o=i,l=(a("034f"),a("2877")),c=a("6544"),u=a.n(c),p=a("7496"),d=Object(l["a"])(o,s,r,!1,null,null,null),m=d.exports;u()(d,{VApp:p["a"]});var g=a("f309");n["a"].use(g["a"]);var f=new g["a"]({}),b=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"bg-aqua bg-home vh-100 overflow-y-hidden",attrs:{fluid:""}},[n("v-row",{staticClass:"mt-8",attrs:{align:"center",justify:"center"}},[n("img",{staticClass:"img-logo",attrs:{src:a("9d64"),alt:""}}),n("img",{staticClass:"img-landscape",attrs:{src:a("5c33"),alt:""}}),n("picture",[n("source",{staticClass:"img-landscape-props",attrs:{media:"(max-width: 768px)",srcset:a("d4ed")}}),n("img",{staticClass:"img-landscape-props",attrs:{src:a("4239"),alt:"Chris standing up holding his daughter Elva"}})]),n("img",{staticClass:"cloud-1",attrs:{src:a("8771"),alt:""}}),n("img",{staticClass:"cloud-2",attrs:{src:a("991c"),alt:""}}),n("img",{staticClass:"cloud-3",attrs:{src:a("991c"),alt:""}}),n("img",{staticClass:"cloud-4",attrs:{src:a("991c"),alt:""}}),n("img",{staticClass:"cloud-5",attrs:{src:a("991c"),alt:""}}),n("img",{staticClass:"img-rectangle",attrs:{src:a("b524"),alt:""}}),n("img",{staticClass:"img-circle",attrs:{src:a("ad57"),alt:""}}),n("img",{staticClass:"img-cone",attrs:{src:a("f2aa"),alt:""}}),n("img",{staticClass:"img-cube",attrs:{src:a("3a4d"),alt:""}}),n("div",{staticClass:"btn-container"},[n("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.startGame.apply(null,arguments)}}},[n("img",{staticClass:"img-playbtn d-inline",attrs:{src:a("4d5c"),alt:""}})]),n("v-layout",[n("a",{staticClass:"mt-n4",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.setAudioVolume.apply(null,arguments)}}},[n("img",{staticClass:"img-optionbtn",attrs:{src:a("0361"),alt:""}})]),n("a",{staticClass:"mt-4 ml-1 mr-1",attrs:{href:""},on:{click:function(e){e.preventDefault(),t.dialogCredits=!0}}},[n("img",{staticClass:"img-optionbtn",attrs:{src:a("888c"),alt:""}})]),n("a",{staticClass:"mt-n4",attrs:{href:""},on:{click:function(e){e.preventDefault(),t.dialog=!0}}},[n("img",{staticClass:"img-optionbtn",attrs:{src:a("860c"),alt:""}})])])],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.dialogGame,expression:"dialogGame"}],staticClass:"modal-container"},[n("div",{staticClass:"game-modal bg-home"},[n("img",{staticClass:"img-cube-modal",attrs:{src:a("3a4d"),alt:""}}),n("img",{staticClass:"img-circle-modal",attrs:{src:a("ad57"),alt:""}}),n("div",{staticClass:"game-modal--close"},[n("button",{staticClass:"btn btn-game pl-4 pr-4 pt-2 pb-2 rounded-circle",on:{click:function(e){e.preventDefault(),t.dialogGame=!1}}},[t._v("X")])]),n("h2",{staticClass:"color-title text-uppercase font-flabby mt-4"},[t._v("Select an Option")]),n("v-layout",{staticClass:"mt-8 mb-5",attrs:{"align-center":"","justify-center":"",column:""}},[n("button",{staticClass:"btn btn-game-option btn-game-option--geometry font-flabby rounded-md",on:{click:function(e){return e.preventDefault(),t.pushRoute("geometry")}}},[t._v("Geometry")]),n("button",{staticClass:"btn btn-game-option btn-game-option--algebra mt-4 font-flabby rounded-md",on:{click:function(e){return e.preventDefault(),t.pushRoute("algebra")}}},[t._v("Algebra")])])],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.dialog,expression:"dialog"}],staticClass:"modal-container"},[n("div",{staticClass:"game-modal"},[n("div",{staticClass:"game-modal--close"},[n("button",{staticClass:"btn btn-game pl-4 pr-4 pt-2 pb-2 rounded-circle",on:{click:function(e){e.preventDefault(),t.dialog=!1}}},[t._v("X")])]),n("h2",{staticClass:"color-title text-uppercase font-flabby"},[t._v("About")]),n("div",{staticClass:"game-modal--content"},[n("h4",{staticClass:"mt-5 font-weight-regular pl-4 pr-4"},[t._v("GEOBRA is derived from the words Geometry and Algebra which are branches of Mathematics. This game aimed to develop high schoolers’ understanding and appreciation for Mathematics through tackling its two major types-Geometry and Algebra. Mathematics can be a little intimidating sometimes especially when letters, different symbols, and functions are included in it. Problems also become much harder to solve. But as you learn the basics, you’ll be more confident in solving difficult mathematical problems. "),n("br"),n("br"),t._v(" Teachers and parents can utilize this game as an assistive tool for the learning and instruction of their students. In playing this game, earn points by answering the questions and problems with varying levels of difficulty such as easy and intermediate. "),n("br"),n("br"),t._v(" GEOBRA is a game-based learning platform that features Mathematical questions and problems, developed by a group of 4th year BTVTE-Visual Graphics Design students from Rizal Technological University-Mandaluyong City as compliance for their thesis. "),n("br"),n("br"),t._v(" Learn more and further elevate your basic knowledge and skills in the subject while having fun! ")])])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.dialogCredits,expression:"dialogCredits"}],staticClass:"modal-container"},[n("div",{staticClass:"game-modal"},[n("div",{staticClass:"game-modal--close"},[n("button",{staticClass:"btn btn-game pl-4 pr-4 pt-2 pb-2 rounded-circle",on:{click:function(e){e.preventDefault(),t.dialogCredits=!1}}},[t._v("X")])]),n("h2",{staticClass:"color-title text-uppercase font-flabby"},[t._v("Credits")]),n("div",{staticClass:"game-modal--content"},[n("h3",{staticClass:"color-title mt-4 font-flabby text-uppercase"},[t._v("Game Designer")]),n("h4",{staticClass:"mt-1 font-weight-regular"},[t._v("JESSIE REPOLLO")]),n("h3",{staticClass:"color-title mt-4 font-flabby text-uppercase"},[t._v("UI Designer")]),n("h4",{staticClass:"mt-1 font-weight-regular"},[t._v("ROMEO BRYAN BOLONIA")]),n("h3",{staticClass:"color-title mt-4 font-flabby text-uppercase"},[t._v("Sound Designer")]),n("h4",{staticClass:"mt-1 font-weight-regular"},[t._v("JESSE VIRAY JR.")]),n("h3",{staticClass:"color-title mt-4 font-flabby text-uppercase"},[t._v("UI Designer")]),n("h4",{staticClass:"mt-1 font-weight-regular"},[t._v("ROMEO BRYAN BOLONIA")]),n("h3",{staticClass:"color-title mt-4 font-flabby text-uppercase"},[t._v("Artists")]),n("h4",{staticClass:"mt-1 font-weight-regular"},[t._v("JHAN ESTEVINTH DIAZ "),n("br"),t._v(" CRIZZA ELAINE ILUSTRE "),n("br"),t._v(" MARIBEL TROPEL")]),n("h3",{staticClass:"color-title mt-4 font-flabby text-uppercase"},[t._v("SPECIAL THANKS")]),n("h4",{staticClass:"mt-1 font-weight-regular"},[t._v(" RODOLFO ALDEON JR. "),n("br"),n("span",{staticClass:"font-weight-bold"},[n("small",[t._v("PROFESSOR")])]),n("br"),t._v(" KENNETH MARTINEZ "),n("br"),n("span",{staticClass:"font-weight-bold"},[n("small",[t._v("THESIS ADVISER ")])])]),n("h5",{staticClass:"mt-6 font-weight-regular pl-5 pr-5"},[t._v("A RESEARCH PROPOSAL PRESENTED TO THE FACULTY OF THE COLLEGE OF EDUCATION RIZAL TECHNOLOGICAL UNIVERSITY, BONI AVENUE, MANDALUYONG CITY "),n("br"),n("br"),t._v("IN PARTIAL FULFILLMENT OF THE REQUIREMENTS FOR THE DEGREE OF BACHELOR OF TECHNICAL-VOCATIONAL TEACHERS EDUCATION MAJOR IN VISUAL GRAPHICS DESIGN "),n("br"),n("br"),t._v(" S.Y. 2021-2022 ")])])])])],1)},v=[],C={name:"Home",data:function(){return{vol:1,dialog:!1,dialogCredits:!1,dialogGame:!1}},mounted:function(){document.title="Welcome to Geometry - Algebra "},methods:{startGame:function(){this.dialogGame=!0,console.log("clicked")},setAudioVolume:function(){this.vol=this.$refs.audio.volume,1==this.vol?(this.$refs.audio.volume=0,this.vol=0):(this.$refs.audio.volume=1,this.vol=1)},pushRoute:function(t){this.dialogGame=!1,this.$router.push("/".concat(t))}},components:{}},y=C,E=a("a523"),A=a("a722"),O=a("0fd9"),w=Object(l["a"])(y,h,v,!1,null,null,null),_=w.exports;u()(w,{VContainer:E["a"],VLayout:A["a"],VRow:O["a"]}),n["a"].use(b["a"]);var I=[{path:"/",name:"Home",component:_},{path:"/geometry",name:"Geometry",component:function(){return a.e("algebra").then(a.bind(null,"3c64"))}},{path:"/algebra",name:"Algebra",component:function(){return a.e("algebra").then(a.bind(null,"c6e6"))}}],R=new b["a"]({mode:"history",base:"/",routes:I}),T=R,x=(a("034b"),a("15f5"),a("7051"),a("59ca"));n["a"].config.productionTip=!1;var N={apiKey:"AIzaSyBbKODpUvb5kEojJMWmjoyG9ihdKMqxpVQ",authDomain:"quiz-f308b.firebaseapp.com",projectId:"quiz-f308b",storageBucket:"quiz-f308b.appspot.com",messagingSenderId:"906128623112",appId:"1:906128623112:web:b9426935851921e6c3b3bd"};Object(x["initializeApp"])(N),new n["a"]({vuetify:f,router:T,render:function(t){return t(m)}}).$mount("#app")},"5c33":function(t,e,a){t.exports=a.p+"img/landscape.15ed2cac.png"},"85ec":function(t,e,a){},"860c":function(t,e,a){t.exports=a.p+"img/aboutbtn.b0f3aec6.png"},8771:function(t,e,a){t.exports=a.p+"img/cloud1.a18ba400.png"},"888c":function(t,e,a){t.exports=a.p+"img/creditsbtn.48dcf422.png"},"991c":function(t,e,a){t.exports=a.p+"img/cloud2.2f9c2179.png"},"9d64":function(t,e,a){t.exports=a.p+"img/logo.288d8a0e.png"},ad57:function(t,e,a){t.exports=a.p+"img/circle.cb8d21ed.png"},b524:function(t,e,a){t.exports=a.p+"img/rectangle.8c76e8c1.png"},d4ed:function(t,e,a){t.exports=a.p+"img/landscape-props-md.3cc14003.png"},f2aa:function(t,e,a){t.exports=a.p+"img/cone.1c8f8dde.png"}});
//# sourceMappingURL=app.d3dabadb.js.map