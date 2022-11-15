// ----------- Burger menu animation --------------

const burgerBtn = document.querySelector('.burger');
var mobileNav = document.querySelector('.mobileNav');
let navOpen = false;

burgerBtn.addEventListener('click', () => {
    if(!navOpen) {
        burgerBtn.classList.add('open');
        navOpen = true;
        mobileNav.style.display = 'flex';
        mobileNav.style.transition = 'all 0.5s ease-in-out 0s';
    } else {
        burgerBtn.classList.remove('open');
        navOpen = false;
        mobileNav.style.display = 'none';
    }   
});


// Carroussel témoignages 

// set the default active slide to the first one
// const slidesContainer = document.getElementById("slides-container");
// const slide = document.querySelector(".slide");
// const prevButton = document.getElementById("slide-arrow-prev");
// const nextButton = document.getElementById("slide-arrow-next");

// nextButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
//   slidesContainer.scrollLeft += slideWidth;
// });

// prevButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
//   slidesContainer.scrollLeft -= slideWidth;
// });

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("testimony");
  let numbers = document.getElementsByClassName("number");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < numbers.length; i++) {
    numbers[i].className = numbers[i].className.replace(" bold", " light");
  }
  slides[slideIndex-1].style.display = "flex";
    numbers[slideIndex-1].className += " bold";
    numbers[slideIndex-1].classList.remove ('light');
    setTimeout(showSlides, 2000); // Change image every 2 seconds

}


// --------- Caroussel des logos ------------

let slideIndex2 = 0;
showLogoSlides();

function showLogoSlides() {
  let i;
  let logoSlides = document.getElementsByClassName("logo_slide");
  for (i = 0; i < logoSlides.length; i++) {
    logoSlides[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > logoSlides.length-4) {slideIndex2 = 1}
  logoSlides[slideIndex2-1].style.display = "block";
  logoSlides[slideIndex2].style.display = "block";
  logoSlides[slideIndex2+1].style.display = "block";
  logoSlides[slideIndex2+2].style.display = "block";
  logoSlides[slideIndex2+3].style.display = "block";

  setTimeout(showLogoSlides, 2000); // Change image every 2 seconds
  // console.log(slideIndex2);
}
var playing = true;
var pauseButton = document.querySelector('.pause');

function pauseSlideshow(){
	playing = false;
	clearInterval;
}

function playSlideshow(){
	playing = true;
  setTimeout(showLogoSlides, 2000); // Change image every 2 seconds
}

pauseButton.onclick = function(){
	if(playing){ pauseSlideshow(); }
	else{ playSlideshow(); }
};

