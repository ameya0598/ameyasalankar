(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){},112:function(e,a,t){},113:function(e,a,t){},114:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),c=t.n(r),m=(t(64),t(18)),s=t.n(m),o=t(14),i=t.n(o),u=t(7),h=t.n(u),E=t(17),p=function(){return l.a.createElement(s.a,{style:{background:"#061526"},variant:"dark",expand:"lg",sticky:"top"},l.a.createElement(h.a,null,l.a.createElement(E.Link,{to:"root",spy:!0,smooth:!0,href:"#"},l.a.createElement(s.a.Brand,null,"Ameya Salankar")),l.a.createElement(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(s.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(i.a,{className:"mr-auto"},l.a.createElement("li",null," ")),l.a.createElement(i.a,{className:"mr-right",variant:"pills"},l.a.createElement(i.a.Item,null,l.a.createElement(E.Link,{to:"portfolio",spy:!0,smooth:!0,className:"nav-link",href:"#"},"Portfolio")),l.a.createElement(i.a.Item,null,l.a.createElement(E.Link,{to:"aboutme",spy:!0,smooth:!0,className:"nav-link",href:"#"},"About Me")),l.a.createElement(i.a.Item,null,l.a.createElement(E.Link,{to:"contactme",spy:!0,smooth:!0,className:"nav-link",href:"#"},"Contact"))))))},f=(t(99),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,null,l.a.createElement("div",{className:"header"},l.a.createElement("h2",{className:"title"},"Hey There!"),l.a.createElement("p",{className:"desc"},"I am Ameya Salankar!"))))}),g=t(22),d=t(23),b=t(25),v=t(24),w=t(26),k=t(13),y=t.n(k),N=t(8),S=t.n(N),_=(t(100),function(e){function a(){var e;return Object(g.a)(this,a),(e=Object(b.a)(this,Object(v.a)(a).call(this))).state={projects:[{title:"Hotel Booking Application",img:"/hotel_booking.png",link:"https://github.com/AtharvaSune/Oops-Project"},{title:"Research Paper Catalog",img:"/research_buddy.png",link:"https://github.com/ameya0598/ResearchBuddy"},{title:"Diff Tool",img:"/similarities.png",link:"https://github.com/ameya0598/similarities"},{title:"NGO Donation Website",img:"/ngo.png",link:"https://github.com/AtharvaSune/Nsemble"},{title:"Dummy Project",img:"https://picsum.photos/300",link:"https://www.github.com"}]},e}return Object(w.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("header",null,l.a.createElement("h2",null,"Some Projects made by Me")),l.a.createElement("p",null,"I have mostly focused on Web Development until now. I am interested in Machine Learning and Operating Systems. Hoping to do some exciting stuff in the future!"),l.a.createElement("div",{className:"content"},l.a.createElement(y.a,null,this.state.projects.map(function(e,a){return l.a.createElement(S.a,{md:4,sm:6,className:"topleveller",key:a},l.a.createElement("div",{className:"item"},l.a.createElement("a",{href:e.link,style:{textDecoration:"none"},className:"image fit"},l.a.createElement("img",{src:e.img,alt:" ",className:"img-x"})),l.a.createElement("div",{className:"center-block caption"},l.a.createElement("h3",null,e.title))))}))))}}]),a}(n.Component)),j=t(55),O=t.n(j),I=function(){return l.a.createElement(h.a,null,l.a.createElement("header",null,l.a.createElement("h2",null,"About Me")),l.a.createElement(O.a,{src:"https://avatars0.githubusercontent.com/u/18664817?s=460&v=4",thumbnail:!0}),l.a.createElement("p",{style:{marginTop:"2em"}},"I am pursuing my B.E. in CS from BITS Pilani, Hyderabad Campus.",l.a.createElement("br",null),"While not making websites and doing machine learning, I like to play cricket, watch movies and read lots of books.",l.a.createElement("br",null),"I also like to play Tabla and solve the Rubiks' Cube."))},x=t(58),A=t.n(x),C=t(16),M=t.n(C),T=t(57),B=t.n(T),D=t(19),L=t.n(D),H=t(56),P=!0;function R(e){var a=e.show,t=e.success;return a?t?l.a.createElement(L.a,{variant:"success"},l.a.createElement(L.a.Heading,null,"Message sent successfully!"),l.a.createElement("p",null,"Thanks for contacting me!")):l.a.createElement(L.a,{variant:"danger"},l.a.createElement(L.a.Heading,null,"Aw Snap! You got an error"),l.a.createElement("p",null,"That's all I know!")):l.a.createElement(B.a,{variant:"outline-primary",size:"lg",type:"submit",style:{marginTop:"8px",width:"175px"}},l.a.createElement("i",{className:"far fa-paper-plane"})," Send")}var W=function(e){function a(){var e;return Object(g.a)(this,a),(e=Object(b.a)(this,Object(v.a)(a).call(this))).sendForm=function(a){a.preventDefault();var t=Object.assign({},e.state);t.template_params.from_name=e.name.current.value,t.template_params.from_email=e.email.current.value,t.template_params.message_html=e.message.current.value,e.setState({template_params:t}),H.send("ameya_salankar","template_JyJbebGc",e.state.template_params,"user_Nzv5WfGX93Z0f4OLZIloB").then(function(e){console.log("SUCCESS!",e.status,e.text),P=!0},function(e){console.log("FAILED...",e),P=!1}),P?(e.name.current.value=" ",e.email.current.value=" ",e.message.current.value="Message sent!",e.setState({show:!0,success:!0})):(e.name.current.value=" ",e.email.current.value=" ",e.message.current.value="Message Not sent!",e.setState({show:!0,success:!1}))},e.name=l.a.createRef(),e.email=l.a.createRef(),e.message=l.a.createRef(),e.state={template_params:{from_name:"",from_email:"",message_html:""},show:!1,success:!1},e}return Object(w.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("header",null,l.a.createElement("h2",null,"Contact Me")),l.a.createElement(A.a,{id:"form",onSubmit:this.sendForm},l.a.createElement(y.a,null,l.a.createElement(S.a,{md:6,sm:12},l.a.createElement(M.a,{ref:this.name,placeholder:"Name",className:"form-unit",required:!0})),l.a.createElement(S.a,{md:6,sm:12},l.a.createElement(M.a,{ref:this.email,placeholder:"Email",className:"form-unit",required:!0})),l.a.createElement(S.a,{md:12},l.a.createElement(M.a,{as:"textarea",placeholder:"Your Message",rows:"8",className:"form-unit",ref:this.message}))),l.a.createElement(R,{show:this.state.show,success:this.state.success})))}}]),a}(l.a.Component),F=function(){return l.a.createElement("footer",{className:"footer text-center"},l.a.createElement(h.a,null,l.a.createElement(y.a,null,l.a.createElement(S.a,{lg:6,md:6,sm:12},l.a.createElement("a",{className:"btn btn-outline-light btn-social mx-1",href:"https://www.facebook.com/ameya.salankar.5"},l.a.createElement("i",{className:"fab fa-facebook-f fa-fw"})),l.a.createElement("a",{className:"btn btn-outline-light btn-social mx-1",href:"https://www.twitter.com/iamameya_s"},l.a.createElement("i",{className:"fab fa-fw fa-twitter"})),l.a.createElement("a",{className:"btn btn-outline-light btn-social mx-1",href:"https://www.github.com/ameya0598"},l.a.createElement("i",{className:"fab fa-fw fa-github"}))),l.a.createElement(S.a,{md:6,sm:12,className:"copyright"},l.a.createElement("i",{className:"far fa-copyright"})," Ameya Salankar"))))};t(112),t(113);var J=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement("section",{id:"intro"},l.a.createElement(f,null)),l.a.createElement("section",{id:"portfolio"},l.a.createElement(_,null)),l.a.createElement("section",{id:"aboutme"},l.a.createElement(I,null)),l.a.createElement("section",{id:"contactme"},l.a.createElement(W,null)),l.a.createElement("section",{id:"footer"},l.a.createElement(F,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},59:function(e,a,t){e.exports=t(114)},64:function(e,a,t){},99:function(e,a,t){}},[[59,1,2]]]);
//# sourceMappingURL=main.df037391.chunk.js.map