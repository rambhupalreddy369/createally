
//
var slideIndex0 = 1;
showSlides0(slideIndex0);

function plusSlides0(n) {
  showSlides0(slideIndex0 += n);
}

function currentSlide0(n) {
  showSlides0(slideIndex0 = n);
}

function showSlides0(n) {
  var i;
  var slides0 = document.getElementsByClassName("mySlides0");
  var dots0 = document.getElementsByClassName("dot0");
  if (n > slides0.length) {slideIndex0 = 1}    
  if (n < 1) {slideIndex0 = slides0.length}
  for (i = 0; i < slides0.length; i++) {
      slides0[i].style.display = "none";  
  }
  for (i = 0; i < dots0.length; i++) {
      dots0[i].className = dots0[i].className.replace(" active0", "");
  }
  slides0[slideIndex0-1].style.display = "block";  
  dots0[slideIndex0-1].className += " active0";
}

//2nd slide
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// 3rd slide
var slideIndex1 = 1;
showSlide(slideIndex1);

function plusSlides1(n) {
  showSlide(slideIndex1 += n);
}

function currentSlide(n) {
  showSlide(slideIndex1 = n);
}

function showSlide(n) {
  var i;
  var slides1 = document.getElementsByClassName("mySlides1");
  var dots1 = document.getElementsByClassName("dot1");
  if (n > slides1.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = slides1.length}
  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";  
  }
  for (i = 0; i < dots1.length; i++) {
      dots1[i].className = dots1[i].className.replace(" active1", " ");
  }
  slides1[slideIndex1-1].style.display = "block";  
  dots1[slideIndex1-1].className += " active1";
}
//in-house machinary
var slideIndex=0;
Slides();
var i;
var timer;
function Slides() {
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dots");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  timer = setTimeout(Slides, 3000); // Change image every 2 seconds
}
function stopShow()
{
  clearTimeout(timer);
}
function runShow()
{
  Slides();  
}

//works section

// filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == " ") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
