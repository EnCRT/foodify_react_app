(this.webpackJsonpfoodify_app=this.webpackJsonpfoodify_app||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(6),i=s.n(n),r=s(2),l=s.n(r),o=s(4),j=s(3),d=s(0);function b(e){var t=e.setPage;return Object(d.jsxs)("nav",{className:"navbar",role:"navigation","aria-label":"main navigation",children:[Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)("a",{className:"navbar-item",href:"/",children:Object(d.jsx)("img",{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28"})}),Object(d.jsx)("a",{role:"button",className:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"})]}),Object(d.jsx)("div",{id:"navbarBasicExample",className:"navbar-menu",children:Object(d.jsxs)("div",{className:"navbar-start",children:[Object(d.jsx)("a",{className:"navbar-item",onClick:function(){return t("random")},children:"Random Meal"}),Object(d.jsx)("a",{className:"navbar-item",onClick:function(){return t("saved")},children:"Added Meal"})]})})]})}function u(e){var t=e.meal,s=e.setModalVisibility,a=e.MealsRemover,c=e.MealsSaver,n=t.idMeal,i=t.strMeal,r=t.strMealThumb,l=t.strInstructions,o=t.strYoutube,j=t.strSource;return Object(d.jsxs)("div",{className:"modal is-active",children:[Object(d.jsx)("div",{className:"modal-background"}),Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsx)("p",{className:"modal-card-title",children:"Details"}),Object(d.jsx)("button",{className:"delete",onClick:function(){return s(!1)},"aria-label":"close"})]}),Object(d.jsx)("section",{className:"modal-card-body",children:Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("figure",{className:"image is-4by3",children:Object(d.jsx)("img",{src:r,alt:"Placeholder image"})}),Object(d.jsx)("h1",{children:i}),Object(d.jsx)("p",{children:"Below is the recipe for the dish and the ingredients you need. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque."}),Object(d.jsx)("h2",{children:"Required Ingredients"}),Object(d.jsxs)("ol",{children:[Object(d.jsx)("li",{children:"Donec blandit a lorem id convallis."}),Object(d.jsx)("li",{children:"Cras gravida arcu at diam gravida gravida."}),Object(d.jsx)("li",{children:"Integer in volutpat libero."}),Object(d.jsx)("li",{children:"Donec a diam tellus."}),Object(d.jsx)("li",{children:"Aenean nec tortor orci."}),Object(d.jsx)("li",{children:"Quisque aliquam cursus urna, non bibendum massa viverra eget."}),Object(d.jsx)("li",{children:"Vivamus maximus ultricies pulvinar."})]}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"In fermentum leo eu lectus mollis, quis dictum mi aliquet."}),Object(d.jsx)("li",{children:"Morbi eu nulla lobortis, lobortis est in, fringilla felis."}),Object(d.jsx)("li",{children:"Aliquam nec felis in sapien venenatis viverra fermentum nec lectus."}),Object(d.jsx)("li",{children:"Ut non enim metus."})]}),Object(d.jsx)("h3",{children:"Instructions"}),Object(d.jsx)("p",{children:l}),Object(d.jsx)("article",{className:"message is-primary",children:Object(d.jsxs)("div",{className:"message-body",children:[Object(d.jsx)("p",{children:Object(d.jsx)("strong",{children:"Source links:"})}),Object(d.jsx)("a",{href:o,children:"Youtube Guide"})," ",Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:j,children:"Source"})]})})]})}),Object(d.jsxs)("footer",{className:"modal-card-foot",children:[Object(d.jsx)("button",{className:"button is-success",onClick:function(){s(!1),c(t)},children:"Save"}),Object(d.jsx)("button",{className:"button",onClick:function(){return s(!1)},children:"Close"}),Object(d.jsx)("button",{className:"button is-danger",onClick:function(){return s(!1)},onclick:function(){return a(n)},children:"Delete"})]})]})]})}function m(e){var t=e.meal,s=e.MealsSaver,c=e.MealsRemover,n=e.getMeal,i=e.setMeal,r=e.setLoading,b=t.idMeal,m=t.strMeal,h=t.strMealThumb,O=t.strTags,x=t.strYoutube,v=t.strSource,f=Object(a.useState)(!1),p=Object(j.a)(f,2),g=p[0],N=p[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("figure",{className:"image is-4by3",children:Object(d.jsx)("img",{src:"".concat(h,"/preview"),alt:"Placeholder image"})})}),Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsx)("div",{className:"media",children:Object(d.jsxs)("div",{className:"media-content",children:[Object(d.jsx)("p",{className:"title is-5",children:m}),Object(d.jsx)("a",{href:x,children:"Youtube Guide"})]})}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("p",{children:'Click on the "All Info" button to get more instructions.'}),"Resources: ",Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:v,target:"_blank",rel:"noreferrer",children:"themealdb.com"}),Object(d.jsx)("br",{}),O?O.split(",").map((function(e){return Object(d.jsxs)("a",{href:"#",children:[" #",e]})})):null,Object(d.jsx)("br",{}),Object(d.jsx)("time",{datetime:"2016-1-1",children:"11:09 PM - 1 Jan 2016"})]}),Object(d.jsxs)("div",{className:"buttons",children:[s?Object(d.jsx)("button",{className:"button is-primary is-light",onClick:function(){s(t),console.log(t)},children:"Save"}):Object(d.jsx)("button",{className:"button is-danger",onclick:function(){return c(b)},children:"Delete"}),Object(d.jsx)("button",{className:"button is-link is-light",onClick:function(){return N(!0)},children:"All info"}),n?Object(d.jsx)("button",{className:"button is-warning is-light",onClick:function(){Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:t=e.sent,i(t),r(!1);case 5:case"end":return e.stop()}}),e)})))()},children:"Next"}):null]})]})]}),g?Object(d.jsx)(u,{meal:t,setModalVisibility:N,MealsRemover:c,MealsSaver:s}):Object(d.jsx)(d.Fragment,{})]})}function h(){return Object(d.jsx)("div",{class:"hero-body container main-container is-fluid",children:Object(d.jsxs)("div",{class:"notification is-primary loading-content",children:[Object(d.jsx)("strong",{children:"Data is loading, please wait..."})," ",Object(d.jsx)("br",{}),Object(d.jsx)("button",{class:"button is-link is-loading",children:"Loading"})]})})}function O(e,t){var s=e.meal,a=e.MealsSaver,c=e.MealsRemover,n=(e.setPage,e.getMeal),i=e.setMeal,r=e.setLoading;return Object(d.jsx)("div",{className:"hero-body",children:t?Object(d.jsx)(m,{meal:s,MealsSaver:a,MealsRemover:c,getMeal:n,setMeal:i,setLoading:r}):Object(d.jsx)(h,{})})}function x(e){var t=e.savedMeals,s=e.MealsRemover;return console.log(t),Object(d.jsx)("div",{className:"hero-body saved-meals",children:t.map((function(e){return Object(d.jsx)(m,{meal:e,MealsRemover:s})}))})}function v(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("div",{className:"content has-text-centered",children:Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"React and Bulma"})," practice by ",Object(d.jsx)("a",{href:"https://github.com/EnCRT",children:"Anosov Dmytro"}),". The source code is licensed ",Object(d.jsx)("a",{href:"http://opensource.org/licenses/mit-license.php",children:"MIT"}),"."]})})})}var f="https://www.themealdb.com/api/json/v1/1",p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{method:"GET"};return fetch("".concat(f).concat(e),t).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))},g=function(){var e=Object(o.a)(l.a.mark((function e(t){var s,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t?"/lookup.php?i=".concat(t):"/random.php",e.next=3,p(s);case 3:return a=e.sent,e.abrupt("return",a.meals[0]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();s(13);var N=function(){var e=Object(a.useState)(0),t=Object(j.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(!0),i=Object(j.a)(n,2),r=i[0],u=i[1],m=Object(a.useState)("random"),f=Object(j.a)(m,2),p=f[0],N=f[1],M=Object(a.useState)([]),k=Object(j.a)(M,2),w=k[0],y=k[1],S=function(e){var t=w.filter((function(t){return t.id===e}));y(t)};return Object(a.useEffect)((function(){u(!0),Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,c(t),u(!1);case 5:case"end":return e.stop()}}),e)})))()}),[p]),Object(d.jsx)("div",{className:"container is-fullhd",children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{setPage:N}),Object(d.jsx)("div",{className:"container main-container is-fluid",children:Object(d.jsxs)("div",{className:"notification is-primary",children:[Object(d.jsx)("p",{className:"title",children:"Foodify Application"}),Object(d.jsxs)("p",{className:"subtitle",children:["You need to create an application which will allow the user to get a random recipe and give him / her an ability to save it in the favorite dishes list. API ",Object(d.jsx)("a",{href:"https://www.themealdb.com/api.php",children:"endpoint"}),". Task ",Object(d.jsx)("a",{href:"https://docs.google.com/document/d/15XyAsgQTlaFUdy6YOQg1nvLcB2MGfHND47S1_Y_nTT8/edit#",children:"guideline"}),"."]})]})}),"random"===p?r?Object(d.jsx)(h,{}):Object(d.jsx)(O,{meal:s,MealsSaver:function(e){console.log(w),w.push(e),y(w),console.log(w)},MealsRemover:S,getMeal:g,setMeal:c,setLoading:u}):Object(d.jsx)(x,{savedMeals:w,MealsRemover:S}),Object(d.jsx)(v,{})]})})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.65787407.chunk.js.map