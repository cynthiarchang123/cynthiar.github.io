(function(t){function e(e){for(var a,s,i=e[0],c=e[1],l=e[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},s={app:0},r={app:0},o=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f06167b7"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"9b330c9a"}[t]+".css",r=c.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return e()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){l=p[i],u=l.getAttribute("data-href");if(u===a||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete s[t],d.parentNode.removeChild(d),n(o)},d.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){s[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var p=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",p.name="ChunkLoadError",p.type=a,p.request=s,n[1](p)}r[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/cynthiarchang123.github.io/cynthiar.github.io/www/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),s=n.n(a);s.a},"0d66":function(t,e,n){"use strict";var a=n("8aa7"),s=n.n(a);s.a},1:function(t,e){},2:function(t,e){},"2ee1":function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="2ee1"},3:function(t,e){},"314b":function(t,e,n){"use strict";var a=n("bc3a"),s=n.n(a),r=s.a.create({baseURL:"http://cyappstore.azurewebsites.net/api/",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});e["a"]={getApps:function(){return r.get("/appLast")},getApp:function(t){return r.get("/member/App/"+t)},getMember:function(){return r.get("/member")},getMemberByID:function(t){return r.get("/member/"+t)},postLogin:function(t){return r.post("/member/login/",t)},postMember:function(t){return r.post("/member/",t)},getAllCategory:function(){return r.get("/getAllCategory")},getComment:function(t){return r.get("/member/comment/"+t)},getSearch:function(t){return r.post("/member/search",t)},getAppImg:function(t){return r.get("/member/Appimg/"+t)}}},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"devRegGrp"},[n("i",{staticClass:"material-icons hover",attrs:{onclick:"devRegClose()"}},[t._v("close")]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4 userImg"},[n("img",{attrs:{src:t.publicPath+"images/userImg1.jpg"}})]),n("div",{staticClass:"col-md-8 userGrp memberUl"},[t._v("\n              "+t._s(t.loginUser.email)),n("br"),n("router-link",{staticClass:"external hover",attrs:{to:{name:"add-member"}}},[t._v("開發人員申請")]),n("br"),n("a",{staticClass:"external hover",on:{click:t.logout}},[t._v("登出")])],1)])]),n("nav",{staticClass:"ubea-nav",attrs:{role:"navigation"}},[n("div",{staticClass:"ubea-container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-2 col-xs-2"},[n("div",{attrs:{id:"ubea-logo"}},[n("router-link",{attrs:{to:"/"}},[t._v("App Store")])],1)]),n("div",{staticClass:"col-xs-10 text-right main-nav menu-1"},[n("ul",[n("li",[n("a",{staticClass:"external",attrs:{href:""+t.publicPath}},[t._v("App List")])]),null!==t.loginUser.name?n("li",[n("a",{staticClass:"devRegOpen",attrs:{onclick:"devRegOpen()"}},[t._v(t._s(t.loginUser.email))])]):t._e(),null==t.loginUser.email?n("a",{staticClass:"external",attrs:{href:t.publicPath+"register"}},[t._v("註冊")]):t._e(),t._v("/\n                        "),null==t.loginUser.email?n("a",{staticClass:"external",attrs:{href:t.publicPath+"login"}},[t._v("登入")]):t._e()])])])])]),n("router-view")],1)},r=[],o=n("314b"),i={data:function(){return{loginUser:[],publicPath:"/cynthiarchang123.github.io/cynthiar.github.io/www/",imgPath:"http://cyappstore.azurewebsites.net/",isUser:!1}},created:function(){window.sessionStorage.setItem("imgPath",this.imgPath),0!==window.sessionStorage.length&&(this.loginUser=JSON.parse(window.sessionStorage.userData),console.log("loginUser--",this.loginUser))},methods:{logout:function(){window.sessionStorage.removeItem("userData"),window.sessionStorage.clear(),location.href="/"}}},c=i,l=(n("034f"),n("2877")),u=Object(l["a"])(c,s,r,!1,null,null,null),p=u.exports,d=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t.loading?n("span",[t._v("Loading…")]):n("ul",{staticClass:"posts"},t._l(t.posts,(function(e){return n("li",{key:e.title,staticClass:"post-item"},[n("h1",[t._v(t._s(e.title))])])})),0)])},m=[],f={data:function(){return{loading:!1}},computed:{posts:function(){return this.$store.state.posts}},created:function(){var t=this;this.loading=!0,this.$store.dispatch("fetchPosts").then((function(e){t.loading=!1}))}},g=f,v=(n("0d66"),Object(l["a"])(g,h,m,!1,null,"7398e720",null)),b=(v.exports,function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"event-create"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("h1",[t._v("Create Event")])])}],w={},_=Object(l["a"])(w,b,C,!1,null,null,null),y=_.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"event-list"},[n("div",{staticClass:"containt"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"搜尋App(類別、標籤、說明)"},domProps:{value:t.search},on:{keyup:function(e){return t.linkClick("search")},input:function(e){e.target.composing||(t.search=e.target.value)}}})]),n("div",{staticClass:"col-md-12 type-nav"},[n("div",{staticClass:"type-nav-data"},[n("span",[n("a",{on:{click:function(e){return t.linkClick("all")}}},[t._v("全部")])]),n("span",[n("a",{on:{click:function(e){return t.linkClick("hot")}}},[t._v("熱門")])]),n("span",[n("a",{on:{click:function(e){return t.linkClick("news")}}},[t._v("新品上架")])]),t._l(t.categorys,(function(e){return n("span",{key:e.id},[n("a",{on:{click:function(n){return t.linkClick(e.id)}}},[t._v(t._s(e.category))])])}))],2)])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 col-xs-12"},[n("h3",{staticClass:"pageTit"},[t._v("最新熱門")]),n("div",{staticClass:"row"},t._l(t.apps,(function(t){return n("EventCard",{key:t.id,attrs:{event:t}})})),1)])])]),n("nav",{staticClass:"footer-nav"},[n("ul",[n("li",{on:{click:function(e){return t.linkClick(1)}}},[n("i",{staticClass:"fas fa-gamepad"}),t._v("\n        遊戲\n      ")]),n("li",{on:{click:function(e){return t.linkClick("hot")}}},[n("i",{staticClass:"fas fa-cubes"}),t._v("\n        熱推\n      ")]),n("li",{on:{click:function(e){return t.linkClick("news")}}},[n("i",{staticClass:"fa fa-youtube-play"}),t._v("\n        最新\n      ")]),n("li",{on:{click:function(e){return t.linkClick(5)}}},[n("i",{staticClass:"fas fa-journal-whills"}),t._v("\n        工具\n      ")])])])])},A=[],x=(n("386d"),n("4917"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{attrs:{href:t.$router.resolve({name:"event-show",params:{id:t.event.id}}).href}},[n("div",{staticClass:"event-card -shadow col-lg-2 col-md-3 col-sm-4 col-xs-4 appGrp"},[n("div",{staticClass:"appGrpBox"},[n("ul",[n("li",[n("img",{attrs:{src:t.imgPath+t.event.appIcon}})]),n("li",[n("h4",[t._v(t._s(t.event.appName))])]),n("li",t._l(t.event.star,(function(t,e){return n("i",{key:e,staticClass:"fas fa-star"})})),0)])])])])])}),P=[],I={data:function(){return{publicPath:"/cynthiarchang123.github.io/cynthiar.github.io/www/",imgPath:window.sessionStorage.imgPath,appIcon_src:this.event.appIcon}},props:{event:Object}},O=I,j=(n("f85e"),Object(l["a"])(O,x,P,!1,null,"132636a2",null)),E=j.exports,S={components:{EventCard:E},data:function(){return{events:[],search:"",eventDatas:[],categorys:[],apps:[],comment:{},starAve:0,starCnt:{}}},created:function(){var t=this;o["a"].getAllCategory().then((function(e){t.categorys=e.data})).catch((function(t){console.log("There was an error:",t.response)})),o["a"].getApps().then((function(e){t.apps=e.data.list,t.eventDatas=e.data,t.starCnt=e.data.star,console.log("thisApps",t.starCnt);for(var n=0;n<t.starCnt.length;n++)t.apps[n].star=t.starCnt[n];console.log("thisApps",t.apps)})).catch((function(t){console.log("There was an error:",t.response)}))},methods:{linkClick:function(t){var e=this;this.apps=this.eventDatas.filter((function(n){if("all"==t||"hot"==t||"news"==t)return e.eventDatas;if(n.categoryId==t)return e.apps;if("search"==t){if(n.introduction.match(e.search))return n.introduction.match(e.search);if(n.appName.match(e.search))return n.appName.match(e.search);if(n.tags.match(e.search))return n.tags.match(e.search)}}))}},computed:{}},D=S,T=Object(l["a"])(D,k,A,!1,null,null,null),U=T.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"containt proShow"},[n("h3",{staticClass:"pageTit"},[t._v("商品明細")]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4 col-sm-12 col-xs-12 proShowIcon"},[n("img",{attrs:{src:t.imgPath+""+t.app.appIcon}})]),n("div",{staticClass:"col-md-8 col-sm-12 col-xs-12 appDetail"},[n("h3",[t._v(t._s(t.app.appName))]),n("div",{staticClass:"tag"},t._l(t.app.tagsArr,(function(e,a){return n("label",{key:a},[t._v(t._s(e))])})),0),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 col-sm-12 col-xs-12 starGrp"},t._l(t.starAve,(function(t,e){return n("i",{key:e,staticClass:"fas fa-star"})})),0)]),"android"==t.app.device?n("a",{staticClass:"btnDownload",attrs:{href:""+t.app.fileURL}},[t._v("android 下載")]):t._e(),"ios"==t.app.device?n("a",{staticClass:"btnDownload",attrs:{href:"itms-services://?action=download-manifest&url=https://dl.dropbox.com/s/y9xde17wpntkqg7/"+t.app.file}},[t._v("ios 下載")]):t._e()])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 col-sm-12 col-xs-12 slideImgGrp"},[n("div",{staticClass:"slideImg"},[n("img",{attrs:{src:t.imgPath+""+t.slideImg1}}),n("img",{attrs:{src:t.imgPath+""+t.slideImg2}})])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[n("p",{staticClass:"proShowDesc",domProps:{innerHTML:t._s(t.app.Introduction)}})])]),t._m(0),t._l(t.comment,(function(e,a){return n("div",{key:a,staticClass:"row QAGrp"},[n("div",{staticClass:"col-md-2 col-sm-2 col-xs-4 icon"},[n("img",{attrs:{src:t.publicPath+"images/icon"+e.imgId+".jpg"}})]),n("div",{staticClass:"col-md-10 col-sm-10 col-xs-8 QAData"},[n("h5",[t._v("\n            "+t._s(e.name)+"\n          ")]),t._l(e.star,(function(t,e){return n("i",{key:e,staticClass:"fas fa-star"})})),n("p",[t._v("\n              "+t._s(e.comment)+"\n          ")])],2)])}))],2)])},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 col-sm-12 col-xs-12 chartGrp"},[n("h3",[t._v("評論")])])])}],$=(n("28a5"),{name:"home",props:["id"],data:function(){return{event:{},app:{},comment:{},AppImgs:{},slideImg1:"",slideImg2:"",starAve:0,publicPath:"/cynthiarchang123.github.io/cynthiar.github.io/www/",imgPath:window.sessionStorage.imgPath,url:"https://78.media.tumblr.com/tumblr_m39nv7PcCU1r326q7o1_500.png"}},mounted:function(){var t="";t=this.app.file,console.log("appurl--",t)},methods:{forceFileDownload:function(t){this.app.file.createObjectURL(new Blob([t.data]));var e=document.createElement("a");e.href=this.publicPath+"appfiles/android/"+this.event.file,console.log("linkHref--",e.href),e.setAttribute("download","file.png"),document.body.appendChild(e),e.click()},downloadApp:function(){console.log("appUrl---",this.app.file),console.log("userAgent",window.navigator.userAgent),console.log("event---",this.event)},downloadWithVueResource:function(){var t=this;this.$http({method:"get",url:this.url,responseType:"arraybuffer"}).then((function(e){t.forceFileDownload(e)})).catch((function(){return console.log("error occured")}))},downloadWithAxios:function(){var t=this;axios({method:"get",url:this.url,responseType:"arraybuffer"}).then((function(e){t.forceFileDownload(e)})).catch((function(){return console.log("error occured")}))}},created:function(){var t=this;o["a"].getApp(this.id).then((function(e){t.app=e.data;var n=[];n=t.app.tags.split(","),t.app.tagsArr=n,console.log("detailData--",t.app),console.log("detailDataTags--",n)})).catch((function(t){console.log("There was an error:",t.response)})),o["a"].getComment(this.id).then((function(e){t.comment=e.data;var n=0;if(console.log("commentCount--",t.comment.length),0!==t.comment.length){for(var a=0;a<t.comment.length;a++)n+=t.comment[a].star;t.starAve=Math.ceil(n/parseInt(t.comment.length))}console.log("this.starAve--",t.starAve)})).catch((function(t){console.log("There was an error:",t.response)})),o["a"].getAppImg(this.id).then((function(e){t.AppImgs=e.data,console.log("AppIms",t.AppImgs),t.slideImg1=t.AppImgs[0].screenShot,console.log("slideImg1",t.slideImg1),t.slideImg2=t.AppImgs[1].screenShot,console.log("slideImg2",t.slideImg2)})).catch((function(t){console.log("There was an error:",t.response)}))}}),M=$,G=Object(l["a"])(M,L,N,!1,null,null,null),R=G.exports;a["a"].use(d["a"]);var B=new d["a"]({mode:"history",base:"/cynthiarchang123.github.io/cynthiar.github.io/www/",routes:[{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/app-stores",name:"app-stores",component:function(){return n.e("about").then(n.bind(null,"e490"))}},{path:"/app-stores-detail",name:"app-stores-detail",component:function(){return n.e("about").then(n.bind(null,"6c10"))}},{path:"/",name:"event-list",component:U},{path:"/event/create",name:"event-create",component:y},{path:"/event/:id",name:"event-show",component:R,props:!0},{path:"/add-member",name:"add-member",component:function(){return n.e("about").then(n.bind(null,"e300"))}},{path:"/register",name:"register",component:function(){return n.e("about").then(n.bind(null,"73cf"))}},{path:"/login",name:"login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}}]}),F=n("2f62"),q=n("0cb5"),H=n.n(q);a["a"].use(F["a"]);var J=new F["a"].Store({state:{posts:[]},mutations:{setPosts:function(t,e){t.posts=e}},actions:{fetchPosts:function(t){var e=t.commit;return H.a.fetchPosts().then((function(t){return e("setPosts",t)}))}}}),z=n("bc3a"),Q=n.n(z),W=n("a7fe"),K=n.n(W),V=n("0628"),X=n.n(V);a["a"].use(K.a,Q.a),a["a"].config.productionTip=!1,a["a"].prototype.$ajax=Q.a,a["a"].use(X.a),new a["a"]({router:B,store:J,render:function(t){return t(p)}}).$mount("#app")},"64a9":function(t,e,n){},"8aa7":function(t,e,n){},af76:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="af76"},e463:function(t,e,n){},f85e:function(t,e,n){"use strict";var a=n("e463"),s=n.n(a);s.a}});
//# sourceMappingURL=app.bc1a720c.js.map