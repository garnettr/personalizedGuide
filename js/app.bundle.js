!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n="";(n="ActiveXObject"in window?new ActiveXObject("Msxml2.XMLHTTP"):new XMLHttpRequest).open("GET","guide-content.json"),n.onreadystatechange=function(){4!=n.readyState&&(n.responseType="json");JSON.parse(n.responseText)},n.send(null);var s=document.getElementById("page-template"),i=(document.getElementById("HomeCheckbox-container"),document.querySelector("#left-container"),document.getElementById("previous-button")),c=document.getElementById("next-button"),d=document.getElementById("welcomePage-button"),a=document.getElementById("img-wrapper"),o=document.createElement("div"),u=" ",r=0,l=document.getElementById("icon-container"),m=document.getElementById("buildButton"),f=document.createElement("div"),y=document.getElementById("createChecklistButton"),g=document.getElementById("category1"),p=document.getElementById("category2"),S=document.getElementById("category3"),L=document.getElementById("category4"),v=document.getElementById("category5");c.style.display="none";var h=[];function b(){JSON.parse(sessionStorage.getItem("currentPageValue"));for(var e=s.querySelectorAll("div"),t=Array.prototype.slice.call(s.children),n=document.querySelector(".active-slide"),i=t.indexOf(n)+1,c=e.length-1;c>=0;c--){e[c].classList.contains("active-slide")&&sessionStorage.setItem("currentPageValue",JSON.stringify(i));var d=sessionStorage.getItem("currentPageValue");parseInt(d)}var a=JSON.parse(sessionStorage.getItem("checkboxValues"))||{},o=$("*:checkbox");o.on("change",function(){o.each(function(){a[this.id]=this.checked}),sessionStorage.setItem("checkboxValues",JSON.stringify(a))}),$.each(a,function(e,t){$("#"+e).prop("checked",t)})}function q(e){var t=n.response,s=document.createElement("section"),i=document.createElement("ul"),c=document.createElement("h4"),d=document.createElement("div"),a=document.createElement("span");a.innerText="0",i.setAttribute("id","".concat(t[1].questionSets[e].catergoryListHeader)),i.classList.add("".concat(t[1].questionSets[e].catergoryListHeader)),a.setAttribute("id","".concat(t[1].questionSets[e].counterName)),c.innerHTML="".concat(t[1].questionSets[e].title),s.classList.add("optionContainer","slide"),s.id="".concat(t[1].questionSets[e].id),s.innerHTML='<h3 class="'.concat(t[1].questionSets[e].classList,'">').concat(t[1].questionSets[e].title,'</h3>\n\n    <div class="intro-copy"> \n    <p>').concat(t[1].questionSets[e].guideInfo,'</p>\n    </div>\n\n    <form action="" method="get" id="checkbox-container">\n    <h4>').concat(t[1].questionSets[e].categoryFormHeadline,'</h4>\n    <div>\n      <input type="checkbox" id="').concat(t[1].questionSets[e].questionId1,'" class="').concat(t[1].questionSets[e].classList,'" name="choice" value="').concat(t[1].questionSets[e].value1,'">\n      <label for="').concat(t[1].questionSets[e].questionId1,'">\n        ').concat(t[1].questionSets[e].question1,'<br>\n      </label>\n    </div>\n    <div>\n      <input type="checkbox" id="').concat(t[1].questionSets[e].questionId2,'" class="').concat(t[1].questionSets[e].classList,'" name="choice" value="').concat(t[1].questionSets[e].value2,'">\n      <label for="').concat(t[1].questionSets[e].questionId2,'">\n        ').concat(t[1].questionSets[e].question2,'<br>\n      </label>\n    </div>\n    <div>\n      <input type="checkbox" id="').concat(t[1].questionSets[e].questionId3,'" class="').concat(t[1].questionSets[e].classList,'" name="choice" value="').concat(t[1].questionSets[e].value3,'">\n       <label for="').concat(t[1].questionSets[e].questionId3,'">\n        ').concat(t[1].questionSets[e].question3,'<br>\n      </label>\n    </div>\n    <div>\n      <input type="checkbox" id="').concat(t[1].questionSets[e].questionId4,'" class="').concat(t[1].questionSets[e].classList,'" name="choice" value="').concat(t[1].questionSets[e].value4,'">\n       <label for="').concat(t[1].questionSets[e].questionId4,'">\n        ').concat(t[1].questionSets[e].question4,'<br>\n      </label>\n    </div>\n    <div>\n      <input type="checkbox" id="').concat(t[1].questionSets[e].questionId5,'" class="').concat(t[1].questionSets[e].classList,'" name="choice" value="').concat(t[1].questionSets[e].value5,'">\n       <label for="').concat(t[1].questionSets[e].questionId5,'">\n        ').concat(t[1].questionSets[e].question5,"<br>\n      </label>\n    </div>\n    </form>\n    "),d.appendChild(a),i.appendChild(c),i.appendChild(d),l.appendChild(i),h.push(s)}function H(e){for(var t=e,n=0;n<h.length;n++){var s=h[n];-1!==t.indexOf(s.id)&&h.splice(n,1)}}function I(e){u[r].classList.remove("active-slide"),u[e].classList.add("active-slide"),0===(r=e)?(c.style.display="none",s.innerHTML=" "):c.style.display="inline-flex",r===u.length-2?(f.innerHTML=" ",c.style.display="none",m.style.display="none",y.style.display="inline-flex"):r===u.length-1?m.style.display="inline-flex":(m.style.display="none",y.style.display="none"),E()}function E(){var e=document.querySelectorAll(".active-slide");"0"===e[0].id&&(document.body.setAttribute("id","welcome-page"),a.className="img-wrapper",l.style.display="none",o.style.display="none"),"1"===e[0].id&&(document.body.setAttribute("id","academics-page"),o.style.display="none",m.style.display="none"),"2"===e[0].id&&(document.body.setAttribute("id","student-life-page"),m.style.display="none"),"3"===e[0].id&&(document.body.setAttribute("id","fin-assistance-page"),m.style.display="none"),"4"===e[0].id&&(document.body.setAttribute("id","resources-page"),m.style.display="none"),"5"===e[0].id&&(document.body.setAttribute("id","student-success-page"),a.classList.add("overlay-container"),o.style.display="none",m.style.display="none",l.style.display="block"),"checkListContainer"===e[0].id?(document.body.setAttribute("id","checklist-page"),l.style.display="none",o.style.display="block",a.className="img-wrapper",y.style.display="none",m.style.display="inline-flex"):"checkListContainer"!=e[0].id&&(a.classList.add("overlay-container"),l.style.display="block")}function Q(){I(r+1),b(),x("currentPage"),x("currentPage-mobile")}function k(e,t,s){var i=n.response,c=document.getElementById(e),d=document.createElement("li");d.innerHTML='<span onclick="jumpToPage(event)">'.concat(i[0].categoryInfo[s].headerInterest,"</span>"),d.setAttribute("id",t),d.classList.add(t),c.appendChild(d)}function x(e){document.getElementById(e).innerText=r}function A(e,t,n){var s=document.getElementById(e);s.innerText=document.getElementById(t).getElementsByTagName(n).length,sessionStorage.setItem(t,JSON.stringify(s.innerHTML))}function C(e){for(var t=l.querySelectorAll("ul"),n=t.length-1;n>=0;n--){-1!=t[n].classList.value.indexOf(e)&&t[n].parentNode.removeChild(t[n])}}function B(e,t,n,s){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),e.target.matches(t)&&e.target.checked?(k(n,"".concat(e.target.id,"-div"),"".concat(e.target.value)),A(s,n,"li")):e.target.matches(t)&&0==e.target.checked&&(!function(e){document.getElementById("img-wrapper");var t=document.getElementById(e);t.parentNode.removeChild(t)}("".concat(e.target.id,"-div")),A(s,n,"li"))}b(),window.onload=function(){var e=sessionStorage.getItem("checkboxValues"),t=JSON.parse(e),n=sessionStorage.getItem("academicsListHeader"),i=sessionStorage.getItem("studentSuccessListHeader"),c=sessionStorage.getItem("studentLifeListHeader"),d=sessionStorage.getItem("finAssistanceListHeader"),a=sessionStorage.getItem("resourcesListHeader"),o=t.category1,r=t.category2,l=t.category3,m=t.category4,y=t.category5,g=t.academincsQue1,p=t.academincsQue2,S=t.academincsQue3,L=t.academincsQue4,v=t.academincsQue5,b=t.SudentLifeQue1,H=t.SudentLifeQue2,I=t.SudentLifeQue3,x=t.SudentLifeQue4,C=t.SudentLifeQue5,B=t.finAssistanceQue1,T=t.finAssistanceQue2,M=t.finAssistanceQue3,O=t.resourcesQue1,P=t.resourcesQue2,w=t.resourcesQue3,N=t.studentSuccessQue1,j=t.studentSuccessQue2,J=t.studentSuccessQue3,V=t.studentSuccessQue4;(0!=o&&"null"!=o&&"undefined"!=o&&(q(0),1==g&&"undefined"!=g&&k("academicsListHeader","academincsQue1-div","0"),1==p&&"undefined"!=p&&k("academicsListHeader","academincsQue2-div","1"),1==S&&"undefined"!=S&&k("academicsListHeader","academincsQue3-div","2"),1==L&&"undefined"!=L&&k("academicsListHeader","academincsQue4-div","3"),1==v&&"undefined"!=v&&k("academicsListHeader","academincsQue5-div","4")),0!=r&&"null"!=r&&"undefined"!=r&&(q(1),1==b&&"undefined"!=b&&k("studentLifeListHeader","SudentLifeQue1-div","5"),1==H&&"undefined"!=H&&k("studentLifeListHeader","SudentLifeQue2-div","6"),1==I&&"undefined"!=I&&k("studentLifeListHeader","SudentLifeQue3-div","7"),1==x&&"undefined"!=x&&k("studentLifeListHeader","SudentLifeQue4-div","8"),1==C&&"undefined"!=C&&k("studentLifeListHeader","SudentLifeQue5-div","9")),0!=l&&"null"!=l&&"undefined"!=l&&(q(2),1==B&&"undefined"!=B&&k("finAssistanceListHeader","finAssistanceQue1-div","10"),1==T&&"undefined"!=T&&k("finAssistanceListHeader","finAssistanceQue2-div","11"),1==M&&"undefined"!=M&&k("finAssistanceListHeader","finAssistanceQue3-div","12")),0!=m&&"null"!=l&&"undefined"!=m&&(q(3),1==O&&"undefined"!=O&&k("resourcesListHeader","resourcesQue1-div","13"),1==P&&"undefined"!=P&&k("resourcesListHeader","resourcesQue2-div","14"),1==w&&"undefined"!=w&&k("resourcesListHeader","resourcesQue3-div","15")),0!=y&&"null"!=y&&"undefined"!=y&&(q(4),1==N&&"undefined"!=N&&k("studentSuccessListHeader","studentSuccessQue1-div","16"),1==j&&"undefined"!=j&&k("studentSuccessListHeader","studentSuccessQue2-div","17"),1==J&&"undefined"!=J&&k("studentSuccessListHeader","studentSuccessQue3-div","18"),1==V&&"undefined"!=V&&k("studentSuccessListHeader","studentSuccessQue4-div","19")),h.forEach(function(e){s.appendChild(e)}),f.classList.add("checkListContainer","slide"),f.setAttribute("id","checkListContainer"),s.appendChild(f),u=document.querySelectorAll(".slide"),Q(),E(),A("totalPages-mobile","page-template","section"),A("totalPages","page-template","section"),"undefined"!=n)&&(document.getElementById("academicsCounter").innerHTML=n.replace(/['"]+/g,""));null!=i&&i&&(document.getElementById("StudentSuccessCounter").innerHTML=i.replace(/['"]+/g,""));null!=c&&"0"!=c&&(console.log(c),document.getElementById("StudentLifeCounter").innerHTML=c.replace(/['"]+/g,""));null!=d&&(console.log(d),document.getElementById("finAssistanceCounter").innerHTML=d.replace(/['"]+/g,""));null!=a&&(console.log(a),document.getElementById("ResourcesCounter").innerHTML=a.replace(/['"]+/g,""))},d.disabled=!0,g.addEventListener("change",function(){this.checked?(q(0),console.log(h),d.disabled=!1):(H("1"),C("academicsListHeader"))}),p.addEventListener("change",function(){this.checked?(q(1),d.disabled=!1):(H("2"),C("studentLifeListHeader"))}),S.addEventListener("change",function(){this.checked?(q(2),d.disabled=!1):(H("3"),C("finAssistanceListHeader"))}),L.addEventListener("change",function(){this.checked?(q(3),d.disabled=!1):(H("4"),C("resourcesListHeader"))}),v.addEventListener("change",function(){this.checked?(q(4),d.disabled=!1):(H("5"),C("studentSuccessListHeader"))}),i.addEventListener("click",function(){I(r-1),x("currentPage"),x("currentPage-mobile")}),c.addEventListener("click",Q),document.addEventListener("click",function(e){B(e,".Academics-Checkbox","academicsListHeader","academicsCounter"),B(e,".finAssistance-Checkbox","finAssistanceListHeader","finAssistanceCounter"),B(e,".resources-Checkbox","resourcesListHeader","ResourcesCounter"),B(e,".studentSuccess-Checkbox","studentSuccessListHeader","StudentSuccessCounter"),B(e,".Student-Checkbox","studentLifeListHeader","StudentLifeCounter")},!1)}]);
//# sourceMappingURL=app.bundle.js.map