
var slideshow = document.getElementById("slideshow");
var slides = slideshow.getElementsByTagName("img");
var index = 0;

function nextSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}
function prevSlide() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

var slideshowText = document.getElementById("slideshowText");
var slidesText = slideshowText.getElementsByTagName("div");
var i = 0;

function nextSlideText() {
  slidesText[i].classList.remove("active");
  i = (i + 1) % slidesText.length;
  slidesText[i].classList.add("active");
}
function prevSlideText() {
  slidesText[i].classList.remove("active");
  i = (i - 1 + slidesText.length) % slidesText.length;
  slidesText[i].classList.add("active");
}

function closeMenu() {
  var nav = document.getElementById("navbar");
  nav.classList.remove("active");
}

// Call closeMenu when the page loads
window.onload = closeMenu;

function menuToggle() {
  var nav = document.getElementById("navbar");
  nav.classList.toggle("active");
}
