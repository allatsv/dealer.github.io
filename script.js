let slides = document.querySelectorAll('.slider-header');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
  slides[currentSlide].className = 'slider-header';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slider-header showing';
}




const formBtns = document.querySelectorAll('.button-gradient');
const body = document.querySelector('body');
const form = document.querySelectorAll('.form');

let unlock = true;

const timeout = 800;

if (formBtns.length > 0) {
  for (let index = 0; index < formBtns.length; index++) {
    const formBtn = formBtns[index];
    formBtn.addEventListener("click", function () {
      form.classList.add('form-open');
    })
  }
}



