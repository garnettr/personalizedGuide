
let requestURL = 'guide-content.json';
let request = "";

if('ActiveXObject' in window){
  request = new ActiveXObject('Msxml2.XMLHTTP');
}else{
  request = new XMLHttpRequest();
}

request.open('GET', requestURL);
request.responseType = 'json';


request.send();

const pageTemplate = document.getElementById("page-template");
const homePageForm = document.getElementById("HomeCheckbox-container");
const leftContainer = document.querySelector("#left-container");

const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const welcomeButton = document.getElementById("welcomePage-button");
const imageWrapper = document.getElementById('img-wrapper'); 
const checkListThanks = document.createElement('div'); 

let slides = " ";
let currentSlide = 0;
let iconContainer = document.getElementById("icon-container");
let buildGuideButton = document.getElementById("buildButton");
let checkListContainer = document.createElement("div");
let createChecklistButton = document.getElementById("createChecklistButton");

let category1Checkbox = document.getElementById("category1");
let category2Checkbox = document.getElementById("category2");
let category3Checkbox = document.getElementById("category3");
let category4Checkbox = document.getElementById("category4");
let category5Checkbox = document.getElementById("category5");


let subStepOption1 = false;
let subStepOption2 = false;
let subStepOption3 = false;
let subStepOption4 = false;
let subStepOption5 = false;
let subStepOption6 = false;

nextButton.style.display = 'none';


// catefory array
let categoryInfo = [];
let sessionArray = [];



// Session Storage
function sessionChecker() {

  // --- GRAB CURRENT PAGE ---- checks what page you are on and stores in Session Storage
  let currentPageValue = JSON.parse(sessionStorage.getItem('currentPageValue')) || {};

  let elementDivList = pageTemplate.querySelectorAll("div");
  let nodes = Array.prototype.slice.call(pageTemplate.children),
  liRef = document.querySelector(".active-slide");

  let currentPage = nodes.indexOf( liRef ) + 1;

  for (let i = elementDivList.length - 1; i >= 0; i--) {
    if (elementDivList[i].classList.contains("active-slide")) {
      sessionStorage.setItem("currentPageValue", JSON.stringify(currentPage));
    }
    let pop = sessionStorage.getItem("currentPageValue");
    let poppedPage = parseInt(pop);
    // showNextSlide(poppedPage);
  }

  // -------------------

    let checkboxValues = JSON.parse(sessionStorage.getItem('checkboxValues')) || {},
    $checkboxes = $("*:checkbox");

    $checkboxes.on("change", function(){
      $checkboxes.each(function(){
        checkboxValues[this.id] = this.checked;
      });
      
      sessionStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
    });

    // On page load
    $.each(checkboxValues, function(key, value) {
      $("#" + key).prop('checked', value);
    });

  // -------------------

}

sessionChecker()

// console.log(checkBoxData.category1);

window.onload = function() {
  let data = sessionStorage.getItem("checkboxValues");
  let checkBoxData = JSON.parse(data);

  let academicsCounterData = sessionStorage.getItem("academicsListHeader");
  let studentSuccessCounterData = sessionStorage.getItem("studentSuccessListHeader");
  let studentLifeCounterData = sessionStorage.getItem("studentLifeListHeader");
  let finAssistanceCounterData = sessionStorage.getItem("finAssistanceListHeader");
  let resourcesCounterData = sessionStorage.getItem("resourcesListHeader");

  // Retrieve the users name.
  let category1 = checkBoxData.category1;
  let category2 = checkBoxData.category2;
  let category3 = checkBoxData.category3;
  let category4 = checkBoxData.category4;
  let category5 = checkBoxData.category5;
  let academicsQue1 = checkBoxData.academincsQue1;
  let academicsQue2 = checkBoxData.academincsQue2;
  let academicsQue3 = checkBoxData.academincsQue3;
  let academicsQue4 = checkBoxData.academincsQue4;
  let academicsQue5 = checkBoxData.academincsQue5;
  let studentLifeQue1 = checkBoxData.SudentLifeQue1;
  let studentLifeQue2 = checkBoxData.SudentLifeQue2;
  let studentLifeQue3 = checkBoxData.SudentLifeQue3;
  let studentLifeQue4 = checkBoxData.SudentLifeQue4;
  let studentLifeQue5 = checkBoxData.SudentLifeQue5;
  let finAssistanceQue1 = checkBoxData.finAssistanceQue1;
  let finAssistanceQue2 = checkBoxData.finAssistanceQue2;
  let finAssistanceQue3 = checkBoxData.finAssistanceQue3;
  let resourcesQueQue1 = checkBoxData.resourcesQue1;
  let resourcesQueQue2 = checkBoxData.resourcesQue2;
  let resourcesQueQue3 = checkBoxData.resourcesQue3;
  let studentSuccessQue1 = checkBoxData.studentSuccessQue1;
  let studentSuccessQue2 = checkBoxData.studentSuccessQue2;
  let studentSuccessQue3 = checkBoxData.studentSuccessQue3;
  let studentSuccessQue4 = checkBoxData.studentSuccessQue4;

  if (category1 != false && category1 != 'null' && category1 != 'undefined') {
    fillTemplate(0);
    if (academicsQue1 == true && academicsQue1 != 'undefined')  {
      addElement("academicsListHeader", "academincsQue1-div", "0");
    }
    if (academicsQue2 == true && academicsQue2 != 'undefined')  {
      addElement("academicsListHeader", "academincsQue2-div", "1");
    }
    if (academicsQue3 == true && academicsQue3 != 'undefined')  {
      addElement("academicsListHeader", "academincsQue3-div", "2");
    }
    if (academicsQue4 == true && academicsQue4 != 'undefined')  {
      addElement("academicsListHeader", "academincsQue4-div", "3");
    }
    if (academicsQue5 == true && academicsQue5 != 'undefined')  {
      addElement("academicsListHeader", "academincsQue5-div", "4");
    }
  } 
  if (category2 != false && category2 != 'null' && category2 != 'undefined') {
    fillTemplate(1);
    if (studentLifeQue1 == true && studentLifeQue1 != 'undefined')  {
      addElement("studentLifeListHeader", "SudentLifeQue1-div", "5");
    }
    if (studentLifeQue2 == true && studentLifeQue2 != 'undefined')  {
      addElement("studentLifeListHeader", "SudentLifeQue2-div", "6");
    }
    if (studentLifeQue3 == true && studentLifeQue3 != 'undefined')  {
      addElement("studentLifeListHeader", "SudentLifeQue3-div", "7");
    }
    if (studentLifeQue4 == true && studentLifeQue4 != 'undefined')  {
      addElement("studentLifeListHeader", "SudentLifeQue4-div", "8");
    }
    if (studentLifeQue5 == true && studentLifeQue5 != 'undefined')  {
      addElement("studentLifeListHeader", "SudentLifeQue5-div", "9");
    } 
  }
  if (category3 != false && category3 != 'null' && category3 != 'undefined') {
    fillTemplate(2);
    if (finAssistanceQue1 == true && finAssistanceQue1 != 'undefined')  {
      addElement("finAssistanceListHeader", "finAssistanceQue1-div", "10");
    }
    if (finAssistanceQue2 == true && finAssistanceQue2 != 'undefined')  {
      addElement("finAssistanceListHeader", "finAssistanceQue2-div", "11");
    }
    if (finAssistanceQue3 == true && finAssistanceQue3 != 'undefined')  {
      addElement("finAssistanceListHeader", "finAssistanceQue3-div", "12");
    }
  }
  if (category4 != false && category3 != 'null' && category4 != 'undefined') {
    fillTemplate(3);
    if (resourcesQueQue1 == true && resourcesQueQue1 != 'undefined')  {
      addElement("resourcesListHeader", "resourcesQue1-div", "13");
    }
    if (resourcesQueQue2 == true && resourcesQueQue2 != 'undefined')  {
      addElement("resourcesListHeader", "resourcesQue2-div", "14");
    }
    if (resourcesQueQue3 == true && resourcesQueQue3 != 'undefined')  {
      addElement("resourcesListHeader", "resourcesQue3-div", "15");
    } 
  }
  if (category5 != false && category5 != 'null' && category5 != 'undefined') {
    fillTemplate(4);
    if (studentSuccessQue1 == true && studentSuccessQue1 != 'undefined')  {
      addElement("studentSuccessListHeader", "studentSuccessQue1-div", "16");
    }
    if (studentSuccessQue2 == true && studentSuccessQue2 != 'undefined')  {
      addElement("studentSuccessListHeader", "studentSuccessQue2-div", "17");
    }
    if (studentSuccessQue3 == true && studentSuccessQue3 != 'undefined')  {
      addElement("studentSuccessListHeader", "studentSuccessQue3-div", "18");
    }
    if (studentSuccessQue4 == true && studentSuccessQue4 != 'undefined')  {
      addElement("studentSuccessListHeader", "studentSuccessQue4-div", "19");
    }
  }
  checkInputs();
 
  if (academicsCounterData != 'undefined')  { 
    let academCounter = document.getElementById("academicsCounter");
    academCounter.innerHTML = academicsCounterData.replace(/['"]+/g, '');
  }
  if (studentSuccessCounterData != null && studentSuccessCounterData)  { 
    let studentSuccessCounter = document.getElementById("StudentSuccessCounter");
    studentSuccessCounter.innerHTML = studentSuccessCounterData.replace(/['"]+/g, '');
  }
  if (studentLifeCounterData != null && studentLifeCounterData != "0")  { 
    console.log(studentLifeCounterData);
    let studentLifeCounter = document.getElementById("StudentLifeCounter");
    studentLifeCounter.innerHTML = studentLifeCounterData.replace(/['"]+/g, '');
  }
  if (finAssistanceCounterData != null)  { 
    console.log(finAssistanceCounterData);
    let finAssistanceCounter = document.getElementById("finAssistanceCounter");
    finAssistanceCounter.innerHTML = finAssistanceCounterData.replace(/['"]+/g, '');
  }
  if (resourcesCounterData != null)  { 
    console.log(resourcesCounterData);
    let resourcesCounter = document.getElementById("ResourcesCounter");
    resourcesCounter.innerHTML = resourcesCounterData.replace(/['"]+/g, '');
  }
  // triggers the internal pages to pop on load.
}


welcomeButton.disabled = true;

  
// -- START SECTION -- Category event listeners 

category1Checkbox.addEventListener( 'change', function() {
    if(this.checked) {
      fillTemplate(0)
      console.log(categoryInfo);
      welcomeButton.disabled = false;
    } else {
      removeItem(`${'1'}`);
      removeCheckedFromContainer("academicsListHeader");
    }
});

category2Checkbox.addEventListener( 'change', function() {
    if(this.checked) {
      fillTemplate(1)
      welcomeButton.disabled = false;fillTemplate
    } else {
      removeItem(`${'2'}`);
      removeCheckedFromContainer("studentLifeListHeader");
    }
});

category3Checkbox.addEventListener( 'change', function() {
    if(this.checked) {
      fillTemplate(2)
      welcomeButton.disabled = false;
    } else {
      removeItem(`${'3'}`);
      removeCheckedFromContainer("finAssistanceListHeader");
    }
});

category4Checkbox.addEventListener( 'change', function() {
    if(this.checked) {
      fillTemplate(3)
      welcomeButton.disabled = false;
    } else {
      removeItem(`${'4'}`);
      removeCheckedFromContainer("resourcesListHeader");
    }
});

category5Checkbox.addEventListener( 'change', function() {
    if(this.checked) {
      fillTemplate(4)
      welcomeButton.disabled = false;
    } else {
      removeItem(`${'5'}`);
      removeCheckedFromContainer("studentSuccessListHeader");
    }
});

// -- END SECTION -- Category event listeners 


// -- Check Inputs Function -- triggered on click of welcome page --
function checkInputs() {
  categoryInfo.forEach(function(element) {
    pageTemplate.appendChild(element);
  });
  checkListContainer.classList.add("checkListContainer", "slide");
  checkListContainer.setAttribute("id", "checkListContainer");
  pageTemplate.appendChild(checkListContainer);
  slides = document.querySelectorAll(".slide");
  showNextSlide(0); 
  currentPage();
  updateCounter("totalPages-mobile", "page-template", "section");
  updateCounter("totalPages", "page-template", "section");
}


// Filling Template Function -- Populates template with correct info 
function fillTemplate(projectNum) {
  let project_content = request.response;
  let optionContainer = document.createElement("section");
  let categoryContainer = document.createElement("ul");
  let categoryHeader = document.createElement("h4");
  let counterContainer = document.createElement("div");
  let counterSpan = document.createElement("span");
  counterSpan.innerText = "0";

  categoryContainer.setAttribute('id',`${project_content[1].questionSets[projectNum].catergoryListHeader}`);
  categoryContainer.classList.add(`${project_content[1].questionSets[projectNum].catergoryListHeader}`);
  counterSpan.setAttribute('id',`${project_content[1].questionSets[projectNum].counterName}`);

  categoryHeader.innerHTML = `${project_content[1].questionSets[projectNum].title}`;

  optionContainer.classList.add("optionContainer", "slide");
  optionContainer.id = `${project_content[1].questionSets[projectNum].id}`;


  optionContainer.innerHTML = 
    `<h3 class="${project_content[1].questionSets[projectNum].classList}">${project_content[1].questionSets[projectNum].title}</h3>

    <div class="intro-copy"> 
    <p>${project_content[1].questionSets[projectNum].guideInfo}</p>
    </div>

    <form action="" method="get" id="checkbox-container">
    <h4>${project_content[1].questionSets[projectNum].categoryFormHeadline}</h4>
    <div>
      <input type="checkbox" id="${project_content[1].questionSets[projectNum].questionId1}" class="${project_content[1].questionSets[projectNum].classList}" name="choice" value="${project_content[1].questionSets[projectNum].value1}">
      <label for="${project_content[1].questionSets[projectNum].questionId1}">
        ${project_content[1].questionSets[projectNum].question1}<br>
      </label>
    </div>
    <div>
      <input type="checkbox" id="${project_content[1].questionSets[projectNum].questionId2}" class="${project_content[1].questionSets[projectNum].classList}" name="choice" value="${project_content[1].questionSets[projectNum].value2}">
      <label for="${project_content[1].questionSets[projectNum].questionId2}">
        ${project_content[1].questionSets[projectNum].question2}<br>
      </label>
    </div>
    <div>
      <input type="checkbox" id="${project_content[1].questionSets[projectNum].questionId3}" class="${project_content[1].questionSets[projectNum].classList}" name="choice" value="${project_content[1].questionSets[projectNum].value3}">
       <label for="${project_content[1].questionSets[projectNum].questionId3}">
        ${project_content[1].questionSets[projectNum].question3}<br>
      </label>
    </div>
    <div>
      <input type="checkbox" id="${project_content[1].questionSets[projectNum].questionId4}" class="${project_content[1].questionSets[projectNum].classList}" name="choice" value="${project_content[1].questionSets[projectNum].value4}">
       <label for="${project_content[1].questionSets[projectNum].questionId4}">
        ${project_content[1].questionSets[projectNum].question4}<br>
      </label>
    </div>
    <div>
      <input type="checkbox" id="${project_content[1].questionSets[projectNum].questionId5}" class="${project_content[1].questionSets[projectNum].classList}" name="choice" value="${project_content[1].questionSets[projectNum].value5}">
       <label for="${project_content[1].questionSets[projectNum].questionId5}">
        ${project_content[1].questionSets[projectNum].question5}<br>
      </label>
    </div>
    </form>
    `;


  counterContainer.appendChild(counterSpan);
  categoryContainer.appendChild(categoryHeader);
  categoryContainer.appendChild(counterContainer);
  iconContainer.appendChild(categoryContainer);
  categoryInfo.push(optionContainer);
}

// -- Remove Items Function -- used to remove a item from catergory array
function removeItem(num) {
  var itemToDelete = num;
  for (var i = 0; i < categoryInfo.length; i++) {
      var obj = categoryInfo[i];

      if (itemToDelete.indexOf(obj.id) !== -1) {
         categoryInfo.splice(i, 1);
      }
  }
}

/// -- Start of Slides Section -- 

function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;

  if(currentSlide===0){
    nextButton.style.display = 'none';
    pageTemplate.innerHTML = " ";
  } else {
    nextButton.style.display = 'inline-flex';
  }
  if(currentSlide === slides.length - 2){
    checkListContainer.innerHTML = " ";
    nextButton.style.display = 'none';
    buildGuideButton.style.display = 'none';
    //show checklist button 
    createChecklistButton.style.display = 'inline-flex';
  } else if (currentSlide === slides.length - 1){
    //Hide Create Checklist Button 
    buildGuideButton.style.display = 'inline-flex';
  }

  else{
    buildGuideButton.style.display = 'none';
    createChecklistButton.style.display = 'none';
  }
  currentPage();
}

// (current slide) specific-changes -- change right column elements 
function currentPage() {
  let currentpage = document.querySelectorAll(".active-slide");
  if (currentpage[0].id === "0") { 
    document.body.setAttribute("id", "welcome-page");
    imageWrapper.className = "img-wrapper";
    iconContainer.style.display = 'none';
    checkListThanks.style.display = 'none';
  }
  if (currentpage[0].id === "1") {
    document.body.setAttribute("id", "academics-page");
    checkListThanks.style.display = 'none';
    buildGuideButton.style.display = 'none';
  }
  if (currentpage[0].id === "2") { 
    document.body.setAttribute("id", "student-life-page");
    buildGuideButton.style.display = 'none';
  }
  if (currentpage[0].id === "3") { 
    document.body.setAttribute("id", "fin-assistance-page");
    buildGuideButton.style.display = 'none';
  }
  if (currentpage[0].id === "4") { 
    document.body.setAttribute("id", "resources-page");
    buildGuideButton.style.display = 'none';
  }
  if (currentpage[0].id === "5") { 
    document.body.setAttribute("id", "student-success-page");
    imageWrapper.classList.add("overlay-container");
    checkListThanks.style.display = 'none';
    buildGuideButton.style.display = 'none';
    iconContainer.style.display = 'block';
  }
  if (currentpage[0].id === "checkListContainer") { 
    document.body.setAttribute("id", "checklist-page");
    iconContainer.style.display = 'none';
    checkListThanks.style.display = 'block';
    imageWrapper.className = "img-wrapper";
    createChecklistButton.style.display = 'none';
    buildGuideButton.style.display = 'inline-flex';
  } else if (currentpage[0].id != "checkListContainer") {
    imageWrapper.classList.add("overlay-container");
    iconContainer.style.display = 'block';
  }
}

function showNextSlide() {
  showSlide(currentSlide + 1);
  sessionChecker();
  currentProgress("currentPage");
  currentProgress("currentPage-mobile");
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
  currentProgress("currentPage");
  currentProgress("currentPage-mobile");
}

previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

/// -- END of Slides Section -- 


// -- Funtion -- NOT IN USE
function ImageColumnSwitch(addRemove, innerContent) {
  imageWrapper.className = addRemove;
  imageWrapper.innerHTML = innerContent;
}

// -- Create Element Function -- Used in build check list function
function createThanksElement(element, inner, addRemove) {
  let nodeElement = document.createElement(element);
  nodeElement.innerText = inner;
  nodeElement.classList.add(addRemove);
  pageTemplate.prepend(nodeElement);
}

function removeElement(elementId) {
    // Removes an element from the document
    let imageWrapper = document.getElementById('img-wrapper');
    let element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

// -- Add Elements Function -- creats list items on Right Container
function addElement(parentId, elementId, value) {
  let project_content = request.response;
    // Adds an element to the document
    let p = document.getElementById(parentId);
    let newDivElement = document.createElement("li");
    newDivElement.innerHTML = `<span onclick="jumpToPage(event)">${project_content[0].categoryInfo[value].headerInterest}</span>`;

    newDivElement.setAttribute('id', elementId);
    newDivElement.classList.add(elementId);
    p.appendChild(newDivElement);
}

// -- Create Image Divs Function -- used in build guide function
function createImageDiv(divName) {
  let curentImage = document.createElement("section");
  let imageWrapper = document.getElementById('img-wrapper');
  curentImage.classList.add(divName);
  imageWrapper.appendChild(curentImage);
}

// -- NOT IN USE -- Pages Function -- used to poplute string in URL
function pages(currentPage, currentTitle, currentUrl) {
  history.pushState({
      id: currentPage
  }, currentTitle, currentUrl);
}

function currentProgress(element) {
  let currentPageProgress = document.getElementById(element);
  currentPageProgress.innerText = currentSlide;
}

function updateCounter(curentCounter, elementName, tagName) {
  let counterUpdated = document.getElementById(curentCounter);
  counterUpdated.innerText = document.getElementById(elementName).getElementsByTagName(tagName).length; 
  sessionStorage.setItem(elementName, JSON.stringify(counterUpdated.innerHTML));
}

function reloadAndClear() {
  window.location.reload();
  sessionStorage.clear();
}

// Build Checklist Function -- populates check list page with correct content
function buildCheckList() {
  showNextSlide()
  let project_content = request.response;
  let nodeElement = document.createElement("p");
  nextButton.style.display = 'none';

  nodeElement.innerHTML = `${project_content[2].ThanksCopy[0].thanksMessage}`;
  nodeElement.classList.add("checklist-thanks-copy");

  // duplicating the right collumn and inserting that content into the page template
  checkListContainer.innerHTML += document.getElementById("icon-container").innerHTML;
  checkListContainer.prepend(nodeElement);
}


// Build Guide Function -- populates final guide page with correct content
function buildGuide() {

  let project_content = request.response;
  pageTemplate.innerHTML = " ";

  let data = sessionStorage.getItem("checkboxValues");
  let checkBoxData = JSON.parse(data);

  let category1 = checkBoxData.category1;
  let category2 = checkBoxData.category2;
  let category3 = checkBoxData.category3;
  let category4 = checkBoxData.category4;
  let category5 = checkBoxData.category5;

  const academincs1Checkbox = checkBoxData.academincsQue1;
  const academincs2Checkbox = checkBoxData.academincsQue2;
  const academincs3Checkbox = checkBoxData.academincsQue3;
  const academincs4Checkbox = checkBoxData.academincsQue4;
  const academincs5Checkbox = checkBoxData.academincsQue5;

  const studentLife1Checkbox = checkBoxData.SudentLifeQue1;
  const studentLife2Checkbox = checkBoxData.SudentLifeQue2;
  const studentLife3Checkbox = checkBoxData.SudentLifeQue3;
  const studentLife4Checkbox = checkBoxData.SudentLifeQue4;
  const studentLife5Checkbox = checkBoxData.SudentLifeQue5;

  let finAssistance1Checkbox = checkBoxData.finAssistanceQue1;
  let finAssistance2Checkbox = checkBoxData.finAssistanceQue2;
  let finAssistance3Checkbox = checkBoxData.finAssistanceQue3;

  let resources1Checkbox = checkBoxData.resourcesQue1;
  let resources2Checkbox = checkBoxData.resourcesQue2;
  let resources3Checkbox = checkBoxData.resourcesQue3;

  let studentSuccess1Checkbox = checkBoxData.studentSuccessQue1;
  let studentSuccess2Checkbox = checkBoxData.studentSuccessQue2;
  let studentSuccess3Checkbox = checkBoxData.studentSuccessQue3;
  let studentSuccess4Checkbox = checkBoxData.studentSuccessQue4;

  let introContainer = document.createElement("div");
  let guideIntroContent = document.createElement("p");
  guideIntroContent.innerHTML = `${project_content[2].ThanksCopy[0].guideIntro}`;
  introContainer.classList.add("guideIntroContainer");

  introContainer.appendChild(guideIntroContent);
  pageTemplate.prepend(introContainer);

  let guideContainer = document.createElement("section");
  guideContainer.classList.add("guideContainer", "slide", "active-slide");
  guideContainer.setAttribute("id", "guide-container");

  let refreshPageButton = document.createElement("span"); 
  refreshPageButton.innerHTML = 
  `<button class="reloadButton" onclick="reloadAndClear()" type="submit">Start Again</button>
  <button class="printButton" onclick="window.print()" type="submit">Save My Guide</button>
  <p clas="sharingInstuctions">You may save your guide to your desktop, print it to have on-hand or share it as a PDF with your family and friends.</p>
  `;


  function createCatSection(sectionName, projectNum) {
    let categorySection = document.createElement("section");
    let sectionHeader = document.createElement("h2");
    let introCopy = document.createElement("p");

    categorySection.classList.add(sectionName);
    sectionHeader.innerText = `${project_content[1].questionSets[projectNum].guideHeader}`;
    introCopy.innerText = `${project_content[1].questionSets[projectNum].introCopy}`;

    categorySection.appendChild(sectionHeader);
    categorySection.appendChild(introCopy);
    guideContainer.appendChild(categorySection);
  
   return {
    // place selected options header and text on page
    populateSelected: function(divName, catNum) {
      let categoryContainer = document.createElement("div");
      categoryContainer.classList.add(divName);
      categoryContainer.innerHTML = `
      <h4>${project_content[0].categoryInfo[catNum].guideHeader}</h4>
      <p>${project_content[0].categoryInfo[catNum].guideInfo}</p>
      <a href="${project_content[0].categoryInfo[catNum].buttonLink}" target="_blank">${project_content[0].categoryInfo[catNum].buttonText}</a>`
      ;
      categorySection.appendChild(categoryContainer);
    }
   }
  }

  if (category1 != false && category1 != 'null' && category1 != 'undefined') { 
    let startSection = createCatSection("academicsSection", 0);
    if(academincs1Checkbox == true) { 
      startSection.populateSelected(`${"academicsSubCat1"}`, 0);
    }
    if(academincs2Checkbox == true) { 
      startSection.populateSelected(`${"academicsSubCat2"}`, 1);
    }
    if(academincs3Checkbox == true) { 
      startSection.populateSelected(`${"academicsSubCat3"}`, 2);
    }
    if(academincs4Checkbox == true) { 
      startSection.populateSelected(`${"academicsSubCat4"}`, 3);
    }
    if(academincs5Checkbox == true) { 
      startSection.populateSelected(`${"academicsSubCat5"}`, 4);
    }
  }

  if (category2 != false && category2 != 'null' && category2 != 'undefined') { 
    let startSection = createCatSection("studentLifeSection", 1);
    if(studentLife1Checkbox == true) { 
      startSection.populateSelected(`${"studentLifeSubCat1"}`, 5);
    }
    if(studentLife2Checkbox == true) { 
      startSection.populateSelected(`${"studentLifeSubCat2"}`, 6);
    }
    if(studentLife3Checkbox == true) { 
      startSection.populateSelected(`${"studentLifeSubCat3"}`, 7);
    }
    if(studentLife4Checkbox == true) { 
      startSection.populateSelected(`${"studentLifeSubCat4"}`, 8);
    }
    if(studentLife5Checkbox == true) { 
      startSection.populateSelected(`${"studentLifeSubCat5"}`, 9);
    }
  }

  if (category3 != false && category3 != 'null' && category3 != 'undefined') { 
    let startSection = createCatSection("finAssistanceSection", 2);
    if(finAssistance1Checkbox == true) { 
      startSection.populateSelected(`${"finAssistanceSubCat1"}`, 10);
    }
    if(finAssistance2Checkbox == true) { 
      startSection.populateSelected(`${"finAssistanceSubCat2"}`, 11);
    }
    if(finAssistance3Checkbox == true) { 
      startSection.populateSelected(`${"finAssistanceSubCat3"}`, 12);
    }
  }

  if (category4 != false && category4 != 'null' && category4 != 'undefined') { 
    let startSection = createCatSection("resourcesSection", 3);
    if(resources1Checkbox == true) { 
      startSection.populateSelected(`${"resourcesSubCat1"}`, 13);
    }
    if(resources2Checkbox == true) { 
      startSection.populateSelected(`${"resourcesSubCat2"}`, 14);
    }
    if(resources3Checkbox == true) { 
      startSection.populateSelected(`${"resourcesSubCat3"}`, 15);
    }
  }

  if (category5 != false && category5 != 'null' && category5 != 'undefined') { 
    let startSection = createCatSection("studentSuccessSection", 4);
    if(studentSuccess1Checkbox == true) { 
      startSection.populateSelected(`${"studentSuccessSubCat1"}`, 16);
    }
    if(studentSuccess2Checkbox == true) { 
      startSection.populateSelected(`${"studentSuccessSubCat2"}`, 17);
    }
    if(studentSuccess3Checkbox == true) { 
      startSection.populateSelected(`${"studentSuccessSubCat3"}`, 18);
    }
    if(studentSuccess4Checkbox == true) { 
      startSection.populateSelected(`${"studentSuccessSubCat4"}`, 19);
    }
  }

  guideContainer.appendChild(refreshPageButton);
  pageTemplate.appendChild(guideContainer);

  document.body.setAttribute("id", "guide-page");

  nextButton.style.display = 'none';
}


// Removes Lists from Right Collumn on De-Select of Category on welcome page
function removeCheckedFromContainer(specified) {
  let elementDivList = iconContainer.querySelectorAll("ul");
  let value = " ";

  for (let i = elementDivList.length - 1; i >= 0; i--) {
    value = elementDivList[i].classList.value; 
    let result = value.indexOf(specified);

      if(result != -1) {
        elementDivList[i].parentNode.removeChild(elementDivList[i])
      }
  }
}
   

//Student-Checkbox -- populate right image colum with appropriate element
document.addEventListener('click', function (event) {
  categoryCheckbox(event, '.Academics-Checkbox', "academicsListHeader", "academicsCounter");
  categoryCheckbox(event, '.finAssistance-Checkbox', "finAssistanceListHeader", "finAssistanceCounter");
  categoryCheckbox(event, '.resources-Checkbox', "resourcesListHeader", "ResourcesCounter");
  categoryCheckbox(event, '.studentSuccess-Checkbox', "studentSuccessListHeader", "StudentSuccessCounter");
  categoryCheckbox(event, '.Student-Checkbox', "studentLifeListHeader", "StudentLifeCounter");
}, false);



function categoryCheckbox(event, checkBoxName, elementName, counterName) {
    // If the event target doesn't match bail

/**
* Element.matches() polyfill (simple version)
* https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
*/
if (!Element.prototype.matches) {
Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

  if (event.target.matches(checkBoxName) && event.target.checked) {
    addElement(elementName, `${event.target.id}-div`, `${event.target.value}`);
    updateCounter(counterName, elementName, "li");
  } else if (event.target.matches(checkBoxName) && event.target.checked == false) { 
    removeElement(`${event.target.id}-div`);
    updateCounter(counterName, elementName, "li");
  }

}

// Targets the item on right collum -- and shows associated slide
function jumpToPage(event) {
  let targetDiv = event.target.parentNode.classList.value;
  let elementDivList = pageTemplate.querySelectorAll("section");
  let value = " ";

  function changeToCorrectPage(pageID) {
    var nodes = Array.prototype.slice.call(pageTemplate.children),
    liRef = document.getElementById(pageID);

    let currentPage = nodes.indexOf( liRef ) + 1;

      for (let i = elementDivList.length - 1; i >= 0; i--) {
        if (elementDivList[i].id == pageID) {
          elementDivList[i].classList.add("active-slide");
          showSlide(currentPage);
        } else if (elementDivList[i].id != pageID) {
          elementDivList[i].classList.remove("active-slide");
      }
    }
  }

  if (targetDiv.indexOf("academincsQue") != -1) {
    changeToCorrectPage("1");
  }
  if (targetDiv.indexOf("SudentLifeQue") != -1) {
    changeToCorrectPage("2")
  }
  if (targetDiv.indexOf("finAssistanceQue") != -1) {
    changeToCorrectPage("3")
  }
  if (targetDiv.indexOf("resourcesQueQue") != -1) {
    changeToCorrectPage("4")
  }
  if (targetDiv.indexOf("studentSuccessQue") != -1) {
    changeToCorrectPage("5")
  }
}




// showNextSlide("2");











