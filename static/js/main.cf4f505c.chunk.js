(this["webpackJsonpwinnie-ku-project-five"]=this["webpackJsonpwinnie-ku-project-five"]||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/origami.c4714cd6.png"},31:function(e,t,a){e.exports=a(60)},36:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(21),r=a.n(i),c=(a(36),a(22)),l=a(23),s=a(24),u=a(30),m=a(29),p=a(25),d=a.n(p),h=a(7),f=a.n(h);a(53);f.a.initializeApp({apiKey:"AIzaSyC2acaAMjzdXtheezetRsrw2gdVwpYEg8E",authDomain:"winnie-ku-project-five.firebaseapp.com",databaseURL:"https://winnie-ku-project-five.firebaseio.com",projectId:"winnie-ku-project-five",storageBucket:"winnie-ku-project-five.appspot.com",messagingSenderId:"255739567594",appId:"1:255739567594:web:d360859934c83adb6e2693"});var g=f.a,v=a(26),E=a(27),b=function(e){return o.a.createElement("main",null,o.a.createElement("div",{className:"wrapper"},o.a.createElement("ul",{className:"postItContainer"},e.displayedAdvice.map((function(t){return o.a.createElement("li",{key:t.key,className:"postItNotes"},o.a.createElement("h2",null,t.destination),o.a.createElement("p",null,t.advice),o.a.createElement("div",{className:"imageContainer"},o.a.createElement("img",{src:t.photo,alt:t.destination})),o.a.createElement("button",{onClick:function(){return e.deleteAdvice(t.key)},className:"deletePostIt"},o.a.createElement(v.a,{icon:E.a})))})))))},w=function(){return o.a.createElement("footer",null,o.a.createElement("p",null,o.a.createElement("span",{role:"img","aria-label":"heart emoji"},"\u2665\ufe0f")," Created by ",o.a.createElement("a",{href:"https://github.com/dubzku",target:"_blank",rel:"noopener noreferrer"},"Winnie Ku")),o.a.createElement("p",{className:"logoAttribution"},o.a.createElement("span",{role:"img","aria-label":"airplane emoji"},"\u2708")," Icon by ",o.a.createElement("a",{href:"https://www.flaticon.com/free-icon/paper-plane_312619?term=paper%20airplane&page=1&position=46",target:"_blank",rel:"noopener noreferrer",title:"Eight Black Dots"},"Eight Black Dots")," from ",o.a.createElement("a",{href:"https://www.flaticon.com/",target:"_blank",rel:"noopener noreferrer",title:"Flaticon"},"www.flaticon.com")))},k=a(28),y=a.n(k),I=(a(59),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState(Object(c.a)({},t.target.name,t.target.value))},e.buttonSubmit=function(t){t.preventDefault();var a=g.database().ref();document.getElementById("destination").value&&document.getElementById("advice").value?d()({url:"https://api.pexels.com/v1/search",method:"GET",responseType:"json",params:{dataType:"json",per_page:1,query:"".concat(e.state.userInputDestination)},headers:{Authorization:"Bearer ".concat("563492ad6f917000010000017a8698fdc0aa4677b4cda27aa4991d1a")}}).then((function(t){e.setState({destinationPhoto:t.data.photos[0].src.small}),a.push({destination:e.state.userInputDestination,advice:e.state.userInputAdvice,photo:e.state.destinationPhoto}),e.setState({userInputDestination:"",userInputAdvice:""})})).catch((function(e){alert("Sorry, we can't find that place!")})):alert("Please fill in both fields!")},e.deleteSuggestion=function(e){g.database().ref().child(e).remove()},e.state={userInputDestination:"",userInputAdvice:"",suggestions:[],destinationPhoto:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.database().ref().on("value",(function(t){var a=t.val(),n=[];for(var o in a)n.push({key:o,destination:a[o].destination,advice:a[o].advice,photo:a[o].photo});e.setState({suggestions:n})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement("div",{className:"wrapper"},o.a.createElement("h1",null,"Tell Me ",o.a.createElement("span",{className:"logoColour"},"Where")," To Go"),o.a.createElement("div",{className:"logoImageContainer"},o.a.createElement("img",{src:y.a,alt:"paper plane icon from Eight Black Dots"})),o.a.createElement("form",{action:""},o.a.createElement("label",{htmlFor:"destination"},"Where should I go?"),o.a.createElement("input",{onChange:this.handleChange,value:this.state.userInputDestination,type:"text",id:"destination",name:"userInputDestination",minLength:"2",maxLength:"15",placeholder:"Enter a country / city"}),o.a.createElement("label",{htmlFor:"advice"},"What should I do there?"),o.a.createElement("textarea",{onChange:this.handleChange,value:this.state.userInputAdvice,type:"text",id:"advice",name:"userInputAdvice",minLength:"5",maxLength:"60",placeholder:"Sites to see, foods to try, etc."}),o.a.createElement("button",{onClick:this.buttonSubmit,className:"submitButton"},"Post it!")))),o.a.createElement(b,{displayedAdvice:this.state.suggestions,deleteAdvice:this.deleteSuggestion}),o.a.createElement(w,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.cf4f505c.chunk.js.map