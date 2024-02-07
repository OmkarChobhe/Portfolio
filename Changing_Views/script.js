var button = document.querySelector("#change-view-button");

button.addEventListener("click", function() {
  var mainPage = document.querySelector("#main-page");
  var subPage1 = document.querySelector("#sub-page1");
    var subPage2 = document.querySelector("#sub-page2");

  if (subPage1.style.display !== "none" ) {
    subPage1.style.display = "none";
    subPage2.style.display = "none";
    mainPage.style.display = "block";
  }
  else{
    mainPage.style.display = "block";
    subPage2.style.display = "none";
  }
});


var button = document.querySelector("#change-view-button2");

button.addEventListener("click", function() {
  var mainPage = document.querySelector("#main-page");
  var subPage1 = document.querySelector("#sub-page1");
   var subPage2 = document.querySelector("#sub-page2");

  if (mainPage.style.display !== "none" || subPage2.style.display !== "none" ) {
    mainPage.style.display = "none";
    subPage2.style.display = "none";
    subPage1.style.display = "block";
  }
  else{
    subPage1.style.display ="block";
    mainPage.style.display ="none";
     subPage2.style.display ="none";
    
  }
});



var button = document.querySelector("#change-view-button3");

button.addEventListener("click", function() {
  var mainPage = document.querySelector("#main-page");
  var subPage1 = document.querySelector("#sub-page1");
    var subPage2 = document.querySelector("#sub-page2");

  if (subPage1.style.display !== "none" ||  mainPage.style.display !== "none") {
     mainPage.style.display = "none";
    subPage1.style.display = "none";
    subPage2.style.display = "block";
  }
  else{
    mainPage.style.display = "none";
    subPage1.style.display = "none";
    subPage2.style.display = "block";

  }
});
