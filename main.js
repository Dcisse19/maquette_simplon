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
    // numbers[i].className = numbers[i].className.add("light");
  }
  slides[slideIndex-1].style.display = "flex";
    numbers[slideIndex-1].className += " bold";
    numbers[slideIndex-1].classList.remove ('light');
}


// --------- Caroussel des logos ------------

$(document).ready(function(){
    $('.logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});