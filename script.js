let slides = document.querySelectorAll('.slider-header');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
  slides[currentSlide].className = 'slider-header';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slider-header showing';
}




