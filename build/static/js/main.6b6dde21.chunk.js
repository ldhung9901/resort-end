(this.webpackJsonpbeach=this.webpackJsonpbeach||[]).push([[0],{113:function(e,t){},154:function(e,t,a){e.exports=a.p+"static/media/loading-arrow.e9ea7394.gif"},157:function(e,t,a){e.exports=a.p+"static/media/7433.72819284.jpg"},158:function(e,t,a){e.exports=a.p+"static/media/img.35db08f8.jpg"},172:function(e,t,a){e.exports=a(281)},177:function(e,t,a){},179:function(e,t,a){},281:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(56),c=a.n(l),o=(a(177),a(112)),i=a.n(o),m=a(20),s=a(38),u=a(150),d=a(54),p=a(12),f=(a(179),a(171)),E=Object(f.a)({space:"gfz60rpvb663",accessToken:"nsoyJ49ZuDjJosEtcqbIqaawRXmenRGgA0Numyeipb4"});function g(e){var t=e.children,a=e.hero;return r.a.createElement("header",{className:a}," ",t,"   ")}function h(e){var t=e.children,a=e.title,n=e.subtitle;return r.a.createElement("div",{className:"banner"},r.a.createElement("h1",null,a),r.a.createElement("div",null),r.a.createElement("p",null,n),t)}g.defaultProps={hero:"defaultHero"};var b=a(84),y=a(85),v=a(95),x=a(93),S=a(39);function N(e){var t=e.title;e.children;return r.a.createElement("div",{className:"section-title"},r.a.createElement("h4",null,t),r.a.createElement("div",null))}var O=a(282),j=a(283),w=a(284),k=function(e){Object(v.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={services:[{icon:r.a.createElement(S.FaCocktail,{style:{color:"yellow"},className:"yellow"}),title:"free cocktails",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{icon:r.a.createElement(S.FaHiking,{style:{color:"yellow"},className:"yellow"}),title:"free cocktails",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{icon:r.a.createElement(S.FaShuttleVan,{style:{color:"yellow"},className:"yellow"}),title:"free cocktails",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{icon:r.a.createElement(S.FaBeer,{style:{color:"yellow"},className:"yellow"}),title:"free cocktails",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}]},e}return Object(y.a)(a,[{key:"render",value:function(){return r.a.createElement(O.a,{className:"text-center"},r.a.createElement(N,{title:"Services"}),r.a.createElement(j.a,null,this.state.services.map((function(e,t){return r.a.createElement(w.a,{s:"12",sm:"6",md:"3",key:t},r.a.createElement("span",null,e.icon),r.a.createElement("h6",{style:{color:"white"},className:"margin"},e.title),r.a.createElement("p",{style:{color:"white"}},e.info))}))))}}]),a}(n.Component),C=a(154),z=a.n(C);function T(){return r.a.createElement("div",null,r.a.createElement("h3",null,"rooms data loading ..."),r.a.createElement("img",{src:z.a}))}var q=a(13),F=a(156),R=a(8),I=a(36),U=JSON.parse(localStorage.getItem("items")),M=Object(I.createSlice)({name:"Cart",initialState:{items:U||[],showCart:!1},reducers:{addToCart:function(e,t){var a=!1;return e.items.forEach((function(e){e.name===t.payload.name&&(a=!0,e.quantity+=1)})),!0===a||e.items.push(t.payload),localStorage.setItem("items",JSON.stringify(e.items)),e},increase:function(e,t){e.items.forEach((function(e){e.name===t.payload.name&&(e.quantity+=1)})),localStorage.setItem("items",JSON.stringify(e.items))},decrease:function(e,t){var a=null;return e.items.forEach((function(e,n){e.name===t.payload.name&&(e.quantity-=1,0===e.quantity&&(a=n))})),null!==a&&e.items.splice(a,1),localStorage.setItem("items",JSON.stringify(e.items)),e},getDataReducer2:function(e,t){return e=t.payload,localStorage.setItem("items",JSON.stringify(e.items)),e},toggleShowCart:function(e,t){return e.showCart=!e.showCart,localStorage.setItem("items",JSON.stringify(e.items)),e}}}),L=M.actions,P=L.addToCart,H=(L.getDataReducer2,L.toggleShowCart),J=L.increase,B=L.decrease,A=M.reducer,$=(0,a(36).createSlice)({name:"showMessage",initialState:{showMessage:!1},reducers:{toggleMessage:function(e,t){return t.payload?e.showMessage=!0:e.showMessage=!1,e}}}),D=$.actions.toggleMessage,V=$.reducer;function W(e){var t=e.room,a=t.name,n=t.slug,l=t.images,c=t.price,o=Object(R.b)();return r.a.createElement("article",{className:"room"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:l[0]}),r.a.createElement("div",{className:"price-top"},r.a.createElement("h6",null,"$",c),r.a.createElement("p",null,"per night")),r.a.createElement(q.b,{to:"/rooms/".concat(n),className:"btn-primary room-link"},"Features")),r.a.createElement("p",{className:"room-info",style:{position:"relative"}},a," ",r.a.createElement("a",{style:{position:"absolute",right:"30px"},onClick:function(){o(P(t)),o(D(!0))}},r.a.createElement(F.a,{style:{fontSize:"20px"}}))," "))}function G(){var e=Object(R.c)((function(e){return e.filter}));if(null!==e){var t=e.loading,a=e.featuredRooms;return a=a.map((function(e){return r.a.createElement(w.a,{s:"12",md:"4",style:{marginBottom:"3rem"}},r.a.createElement(W,{key:e.id,room:e}))})),r.a.createElement(O.a,null,r.a.createElement(N,{title:"Featured Room"}),r.a.createElement(j.a,null,t?r.a.createElement(T,null):a))}return r.a.createElement("div",null)}var Q=a(159),X=a(285),Y=a(286),Z=a(287),_=a(288),K=a(157),ee=a.n(K),te=a(158),ae=[{src:a.n(te).a,altText:"Slide 3",caption:"Slide 3"},{src:"https://vcdn-dulich.vnecdn.net/2020/03/26/5Spaactivities2-1585197298-2387-1585197616.jpg",altText:"Slide 1",caption:"Slide 1"},{src:ee.a,altText:"Slide 2",caption:"Slide 2"}],ne=function(e){var t=Object(n.useState)(0),a=Object(d.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(!1),i=Object(d.a)(o,2),m=i[0],s=i[1],u=function(){if(!m){var e=l===ae.length-1?0:l+1;c(e)}},p=function(){if(!m){var e=0===l?ae.length-1:l-1;c(e)}},f=ae.map((function(e){return r.a.createElement(Q.a,{onExiting:function(){return s(!0)},onExited:function(){return s(!1)},key:e.src},r.a.createElement("img",{src:e.src,alt:e.altText}),r.a.createElement(h,{title:"luxurious rooms",subtitle:"deluxe Rooms starting at $299"},r.a.createElement(q.b,{to:"/rooms",className:"btn-primary"},"our rooms")),r.a.createElement(X.a,{captionText:"",captionHeader:""}))}));return r.a.createElement(Y.a,{activeIndex:l,next:u,previous:p},r.a.createElement(Z.a,{items:ae,activeIndex:l,onClickHandler:function(e){m||c(e)}}),f,r.a.createElement(_.a,{direction:"prev",directionText:"Previous",onClickHandler:p}),r.a.createElement(_.a,{direction:"next",directionText:"Next",onClickHandler:u}))};function re(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,null),r.a.createElement(k,null),r.a.createElement(G,null))}var le=a(302),ce=a(289),oe=Object(I.createSlice)({name:"filter",initialState:null,reducers:{filted:function(e,t){},getDataReducer:function(e,t){return t.payload},getRoom:function(e,t){},handleChange:function(e,t){var a=t.payload,n=a.target,r="checkbox"===n.type?n.checked:n.value;e[a.target.name]=r;var l=e.rooms,c=e.type,o=e.capacity,i=e.price,m=e.minSize,s=e.maxSize,u=e.breakfast,d=e.pets,p=l;return o=parseInt(o),i=parseInt(i),u&&(p=p.filter((function(e){return!0===e.breakfast}))),d&&(p=p.filter((function(e){return!0===e.pets}))),1!==o&&(p=p.filter((function(e){return e.capacity>=o}))),p=(p=p.filter((function(e){return e.price>=i}))).filter((function(e){return e.size>=m&&e.size<=s})),"all"!==c&&(p=p.filter((function(e){return e.type===c}))),e.sortedRooms=p,e}}}),ie=oe.actions,me=(ie.filted,ie.getDataReducer),se=ie.handleChange,ue=oe.reducer,de=function(e,t){return Object(s.a)(new Set(e.map((function(e){return e[t]}))))};function pe(){var e=Object(R.c)((function(e){return e.filter})),t=Object(R.b)();if(null!==e){var a=e.rooms,n=e.type,l=e.capacity,c=e.price,o=e.minPrice,i=e.maxPrice,u=e.minSize,d=e.maxSize,p=e.breakfast,f=e.pets,E=de(a,"type");E=(E=["all"].concat(Object(s.a)(E))).map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}));var g=de(a,"capacity");return g=g.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),r.a.createElement(O.a,null,r.a.createElement(N,{title:"search rooms"}),r.a.createElement(j.a,{style:{textAlign:"center",color:"white",textTransform:"capitalize"}},r.a.createElement(w.a,{s:"12",md:"2"},r.a.createElement("label",{htmlFor:"type"},"room type"),r.a.createElement("select",{name:"type",id:"type",value:n,className:"form-control",onChange:function(e){t(se(Object(m.a)({},e)))}},E)),r.a.createElement(w.a,{s:"12",md:"2",className:"form-group"},r.a.createElement("label",{htmlFor:"capacity"},"Capacity"),r.a.createElement("select",{name:"capacity",id:"capacity",value:l,className:"form-control",onChange:function(e){t(se(Object(m.a)({},e)))}},g)),r.a.createElement(w.a,{s:"12",md:"3",className:"form-group"},r.a.createElement("label",{htmlFor:"price"},"Price $",c),r.a.createElement(le.a,{name:"price",id:"price",type:"range",min:o,max:i,value:c,className:"form-control",onChange:function(e){t(se(Object(m.a)({},e)))}})),r.a.createElement(w.a,{s:"12",md:"3",className:"form-group"},r.a.createElement("label",null,"Size "),r.a.createElement(j.a,{style:{justifyContent:"center"}},r.a.createElement(ce.a,{style:{width:"auto",margin:"0rem 0.5rem"},name:"minSize",id:"minSize",type:"number",min:u,max:d,value:u,className:"size-input",onChange:function(e){t(se(Object(m.a)({},e)))}}),r.a.createElement(ce.a,{style:{width:"auto"},name:"maxSize",id:"maxSize",type:"number",min:u,max:d,value:d,className:"size-input",onChange:function(e){t(se(Object(m.a)({},e)))}}))),r.a.createElement(w.a,{s:"12",md:"2"},r.a.createElement(j.a,{style:{paddingTop:"1rem",paddingLeft:"4rem"}}," ",r.a.createElement(w.a,{s:"12",md:"12",className:"jus-start"},r.a.createElement(ce.a,{type:"checkbox",name:"breakfast",id:"breakfast",checked:p,className:"single-extra",onChange:function(e){t(se(Object(m.a)({},e)))}}),r.a.createElement("label",{htmlFor:"breakfast"},"breakfast")),r.a.createElement(w.a,{s:"12",md:"12",className:"jus-start"},r.a.createElement(ce.a,{type:"checkbox",name:"pets",id:"pets",checked:f,className:"single-extra",onChange:function(e){t(se(Object(m.a)({},e)))}}),r.a.createElement("label",{htmlFor:"pets"},"pets"))))))}return r.a.createElement("div",null)}var fe=function(e){Object(v.a)(a,e);var t=Object(x.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(y.a)(a,[{key:"render",value:function(){var e=this.props.rooms;return 0===e.length?r.a.createElement("div",{className:"empty-search"},r.a.createElement("h3",null,"unfotunately no rooms matched your search parameters")):r.a.createElement("section",{className:"roomslist"},r.a.createElement("div",{className:"roomslist-center"},e.map((function(e){return r.a.createElement(W,{key:e.id,room:e})}))))}}]),a}(n.Component);var Ee=function(){var e=Object(R.c)((function(e){return e.filter}));if(null===e)return r.a.createElement("div",null);var t=e.loading,a=e.sortedRooms,n=e.rooms;return t?r.a.createElement(T,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(pe,{rooms:n}),r.a.createElement(fe,{rooms:a}))};function ge(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{hero:"roomsHero"},r.a.createElement(h,{title:"our rooms"},r.a.createElement(q.b,{to:"/",className:"btn-primary"},"Return Home"))),r.a.createElement(Ee,null))}function he(){return r.a.createElement(g,null,"  ",r.a.createElement(h,{title:"404!",subtitle:"page note found"},r.a.createElement(q.b,{to:"/",className:"btn-primary"},"return home"))," ")}var be=a(160);function ye(){var e=Object(be.a)(["\n height: 100vh!important;\n  background-image:url(",");\n  background-repeat: no-repeat;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width:100vw;\n  background-size: cover;\n  background-position: center\n"]);return ye=function(){return e},e}var ve=a(161).a.header(ye(),(function(e){return e.img})),xe=a(290);function Se(e){Object(n.useEffect)((function(){window.scrollTo(0,0)}));var t=Object(R.c)((function(e){return e.filter})),a=Object(p.g)().slug;if(null!==t){var l=function(e){return Object(s.a)(t.rooms).find((function(t){return t.slug===e}))}(a);if(!l)return r.a.createElement("div",{className:"error"},r.a.createElement("h3",null,"No such room could be found"),r.a.createElement(q.b,{to:"/rooms",className:"btn-primary"},"Back to Rooms"));var c=l.name,o=l.description,i=l.capacity,m=l.size,u=l.price,d=l.extras,f=l.breakfast,E=l.pets,g=l.images;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ve,{img:g[0]},r.a.createElement(h,{title:"".concat(c," room")},r.a.createElement(q.b,{to:"/rooms",className:"btn-primary"},"Back to Rooms"))),r.a.createElement(O.a,null,r.a.createElement(j.a,{style:{marginTop:"4rem"}},g.map((function(e,t){return r.a.createElement(w.a,{xs:"12",sm:"6",md:"3"},r.a.createElement(xe.a,{key:t,src:e,alt:c}))})))),r.a.createElement(O.a,null," ",r.a.createElement(j.a,null,r.a.createElement(w.a,{md:"8",xs:"12"},r.a.createElement("h3",null,"Details"),r.a.createElement("p",null,o)),r.a.createElement(w.a,{md:"4",xs:"12"},r.a.createElement("h3",null,"Infomation"),r.a.createElement("h6",{key:"6"},"Price : $",u),r.a.createElement("h6",{key:"4"},"Size : $",m),r.a.createElement("h6",{key:"3"},"Max capacity :"," ","".concat(i,i>1?" people":" person")),r.a.createElement("h6",{key:"2"},E?"pets allowed":"no pets allowed"),r.a.createElement("h6",{key:"1"},f?"free breakfast":"included")))),r.a.createElement(O.a,null,r.a.createElement(w.a,null,r.a.createElement("h6",null,"Extras"),r.a.createElement("br",null),r.a.createElement("p",null," ",r.a.createElement("ul",{className:"extras"},d.map((function(e,t){return r.a.createElement("li",{key:"index"},"- ",e)})))))))}return r.a.createElement("div",null)}var Ne=a(170),Oe=a(296),je=a(297),we=a(298),ke=a(299),Ce=a(300),ze=a(301),Te=a(291),qe=a(58),Fe=a(166),Re=a(165);function Ie(){var e=Object(R.b)(),t=Object(R.c)((function(e){return e.Cart})),a=t.items,n=t.showCart,l=0;return a.forEach((function(e){l+=e.quantity*e.price})),r.a.createElement("div",null,r.a.createElement("div",{className:n?"Cart":"Cart unShow"},r.a.createElement("div",{style:{margin:"0.1rem auto"}}," ",r.a.createElement("div",{onClick:function(t){e(H(t))},className:"escape",style:{marginTop:"1rem"}},r.a.createElement(qe.a,null))),r.a.createElement("div",{style:{overflowY:"scroll"}},0===a.length?r.a.createElement("div",{style:{marginTop:"3rem"}},"No room in your cart."):a.map((function(t,a){return r.a.createElement(j.a,{key:a,style:{margin:"2rem 0px"}},r.a.createElement(w.a,{xs:"1",lg:"1"},a+1),r.a.createElement(w.a,{xs:"2",lg:"2"},r.a.createElement("img",{src:t.images[0],style:{height:"20px",width:"50px"}})),r.a.createElement(w.a,{xs:"4",lg:"4",className:"text-lg-left",style:{textTransform:"capitalize"}},t.name),r.a.createElement(w.a,{xs:"4",lg:"4",className:"text-lg-left"},r.a.createElement(j.a,null,r.a.createElement(w.a,null," Qty: ",t.quantity," "),r.a.createElement(w.a,{xs:"1"}," ",r.a.createElement(Te.a,{outline:!0,size:"sm",onClick:function(a){e(B(t))}},r.a.createElement(Re.a,null))," "),r.a.createElement(w.a,{xs:"1"},r.a.createElement(Te.a,{outline:!0,size:"sm",onClick:function(a){e(J(t))}},r.a.createElement(Fe.a,null))))))}))),r.a.createElement("div",null,"Total Price: ",l," $"),r.a.createElement("a",{className:"item",style:{backgroundColor:"gold"}},"Check Out")))}var Ue=a(295),Me=a(57),Le=a.n(Me),Pe=a(36).createSlice,He=(a(39).FaSadCry,Pe({name:"login",initialState:{showLogin:!1,loggedInState:!1,userName:null},reducers:{toggleLogin:function(e,t){e.showLogin=!e.showLogin},loggedIn:function(e,t){e.loggedInState=!e.loggedInState,e.userName=t.payload},logout:function(e,t){Le.a.post()}}})),Je=He.actions,Be=Je.toggleLogin,Ae=Je.loggedIn,$e=He.reducer,De=a(29),Ve=a(292),We=a(293),Ge=a(294);function Qe(e){var t=e.field,a=e.form,n=e.type,l=e.label,c=e.placeholder,o=e.disabled,i=t.name,m=a.errors,s=a.touched,u=m[i]&&s[i];return r.a.createElement(Ve.a,null,l&&r.a.createElement(We.a,{for:"user"},l),r.a.createElement(ce.a,Object.assign({},t,{id:i,placeholder:c,type:n,disabled:o,invalid:u,autocapitalize:"none"})),r.a.createElement(De.a,{name:i,component:Ge.a}))}var Xe=a(49),Ye=a(57).default;function Ze(){Object(R.c)((function(e){return e.login}));var e=Object(R.b)(),t=Object(p.f)(),a=Xe.a().shape({user:Xe.b().required("This field is required."),password:Xe.b().required("This field is required.")});return r.a.createElement(De.d,{initialValues:{user:"",password:""},validationSchema:a,onSubmit:function(a,n){Ye.post("https://leduchung.herokuapp.com/api/login",a).then((function(a){alert("Login success"),e(Ae(a.data.user)),e(Be()),t.push("/"),n.setSubmitting(!1)})).catch((function(e){e.response&&alert(e.response.data.error)}))}},(function(t){t.values,t.errors,t.touched;var a=t.isSubmitting;return r.a.createElement("div",null,a&&r.a.createElement("div",{className:"loading"},r.a.createElement(Ue.a,{color:"primary"})),r.a.createElement("div",{style:{textAlign:"center",fontSize:"2rem",color:"gold",padding:"1rem auto"}},"Login"),r.a.createElement("div",{className:"login-closeBtn",onClick:function(){return e(Be())}},r.a.createElement(qe.a,null)),r.a.createElement(De.c,{className:"form"},r.a.createElement(De.b,{name:"user",component:Qe,label:"User name:",placeholder:"UserName",type:"text"}),r.a.createElement(De.b,{name:"password",component:Qe,label:"Password:",placeholder:"password",type:"password"}),r.a.createElement(Te.a,{type:"submit"},"Login")))}))}var _e=(0,a(36).createSlice)({name:"signUp",initialState:{showSignUp:!1},reducers:{toggleSignUp:function(e,t){e.showSignUp=!e.showSignUp}}}),Ke=_e.actions.toggleSignUp,et=_e.reducer,tt=a(57).default;function at(){Object(R.c)((function(e){return e.signUp}));var e=Object(R.b)(),t=Object(p.f)(),a=Xe.a().shape({user:Xe.b().required("This field is required."),password:Xe.b().required("This field is required.")});return r.a.createElement(De.d,{initialValues:{user:"",password:""},validationSchema:a,onSubmit:function(a,n){tt.post("https://leduchung.herokuapp.com/api/create",a).then((function(a){alert("User is created"),e(Ke()),t.push("/"),n.setSubmitting(!1)})).catch((function(e){alert(e)})),console.log({body:a})}},(function(t){t.values,t.errors,t.touched;var a=t.isSubmitting;return r.a.createElement("div",null,a&&r.a.createElement("div",{className:"loading"},r.a.createElement(Ue.a,{color:"primary"})),r.a.createElement("div",{style:{textAlign:"center",fontSize:"2rem",color:"gold",padding:"1rem auto"}},"Sign Up"),r.a.createElement("div",{className:"signUp-closeBtn",onClick:function(){return e(Ke())}},r.a.createElement(qe.a,null)),r.a.createElement(De.c,{className:"form"},r.a.createElement(De.b,{name:"user",component:Qe,label:"New user name:",placeholder:"New UserName",type:"text"}),r.a.createElement(De.b,{name:"password",component:Qe,label:"Password:",placeholder:"New password",type:"password"}),r.a.createElement(Te.a,{type:"submit"},"Create")))}))}function nt(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],l=t[1],c=Object(R.c)((function(e){return e.login})).userName,o=Object(R.b)(),i=Object(R.c)((function(e){return e.login})).loggedInState,m=Object(R.c)((function(e){return e.Cart})),s=Object(R.c)((function(e){return e.login})),u=Object(R.c)((function(e){return e.signUp})),p=m.items;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Oe.a,{transparent:!0,dark:!0,expand:"xl"},r.a.createElement(je.a,null,r.a.createElement(q.b,{to:"/"},r.a.createElement(Ne.a,null))),r.a.createElement("div",{className:"nav-cart"},r.a.createElement(S.FaShoppingCart,{onClick:function(e){o(H(e))}}),r.a.createElement(we.a,{color:"secondary"},p.length)),r.a.createElement(ke.a,{onClick:function(){return l(!a)}}),r.a.createElement(Ce.a,{isOpen:a,navbar:!0},r.a.createElement(j.a,{className:" w-100",navbar:!0},r.a.createElement(w.a,{xs:"12",sm:"12",xl:"1",className:"text-center"},r.a.createElement(ze.a,null,r.a.createElement(q.b,{className:"link hover-gold",to:"/"},"Home"))),r.a.createElement(w.a,{xs:"12",sm:"12",md:"12",xl:"1",className:"text-center"},r.a.createElement(ze.a,null,r.a.createElement(q.b,{className:"link hover-gold",to:"/rooms"},"Rooms"))),i?r.a.createElement(r.a.Fragment,null,r.a.createElement(ze.a,null,"Hi! ",c),r.a.createElement(ze.a,null,"Logout")):r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{xs:"12",sm:"12",xl:"1",className:"text-center text-xl-right  hover-gold "},r.a.createElement(ze.a,{onClick:function(){return o(Be())}},"Login")),r.a.createElement(w.a,{xs:"12",sm:"12",xl:"2",className:"text-center text-xl-left hover-gold special "},r.a.createElement(ze.a,{onClick:function(){return o(Ke())}},"Sign Up"))),r.a.createElement(w.a,{xs:"12",sm:"12",xl:"6",className:"text-center text-xl-right m-auto hover-gold nav-cart-lg",style:{cursor:"pointer"}},r.a.createElement(S.FaShoppingCart,{onClick:function(e){o(H(e))}}),r.a.createElement(we.a,{color:"secondary"},p.length))))),r.a.createElement(Ie,null),r.a.createElement("div",{className:s.showLogin?"login":"unShow"},r.a.createElement(Ze,null)),r.a.createElement("div",{className:u.showSignUp?"signUp":"unShow"},r.a.createElement(at,null)))}var rt=a(303);function lt(){var e={rooms:[],sortedRooms:[],featuredRooms:[],loading:!0,type:"all",capacity:1,price:0,minPrice:0,maxPrice:0,minSize:0,maxSize:1e3,breakfast:!1,pets:!1},t=Object(n.useState)(e),a=Object(d.a)(t,2),l=a[0],c=a[1];Object(n.useEffect)(Object(u.a)(i.a.mark((function t(){var a,n,r,l,o,u,d;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.getEntries({content_type:"myBeachResort",order:"fields.price"});case 2:return a=t.sent,i=a.items,n=(n=i.map((function(e){var t=e.sys.id,a=e.fields.images.map((function(e){return e.fields.file.url}));return Object(m.a)(Object(m.a)({},e.fields),{},{images:a,id:t})}))).map((function(e){return e.quantity=1,e})),r=n.filter((function(e){return!0===e.featured})),l=Math.max.apply(Math,Object(s.a)(n.map((function(e){return e.price})))),o=Math.min.apply(Math,Object(s.a)(n.map((function(e){return e.price})))),u=Math.max.apply(Math,Object(s.a)(n.map((function(e){return e.size})))),d=Math.min.apply(Math,Object(s.a)(n.map((function(e){return e.size})))),c(Object(m.a)(Object(m.a)({},e),{},{rooms:n,featuredRooms:r,sortedRooms:n,loading:!1,price:o,maxPrice:l,minPrice:o,minSize:d,maxSize:u})),t.abrupt("return",null);case 12:case"end":return t.stop()}var i}),t)}))),[]);var o=Object(R.b)(),f=(Object(R.c)((function(e){return e.login})).loggedInState,Object(R.c)((function(e){return e.message.showMessage})));return f&&setTimeout((function(){return o(D())}),1e3),o(me(l)),r.a.createElement("div",{className:"App"},r.a.createElement(rt.a,{color:"info",isOpen:f,toggle:function(){return o(D())}},"Added to cart!"),r.a.createElement(nt,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/"},r.a.createElement(re,null)),r.a.createElement(p.a,{exact:!0,path:"/rooms/:slug"},r.a.createElement(Se,null)),r.a.createElement(p.a,{exact:!0,path:"/rooms"},r.a.createElement(ge,null)),r.a.createElement(p.a,null,r.a.createElement(he,null))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ct=a(33),ot=Object(ct.d)({filter:ue,Cart:A,login:$e,signUp:et,message:V}),it=Object(I.configureStore)({reducer:ot});a(280);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R.a,{store:it}," ",r.a.createElement(q.a,null,r.a.createElement(lt,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[172,1,2]]]);
//# sourceMappingURL=main.6b6dde21.chunk.js.map