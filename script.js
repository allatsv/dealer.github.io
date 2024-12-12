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




let menu = document.querySelector('.nav__list')
let burger = document.querySelector('.burger')
let categoriesList = document.querySelector('.categories-list')
let arrowRight = document.querySelectorAll('.arrow-right')
let arrowDown = document.querySelectorAll('.arrow-down')

burger.addEventListener('click',function(){
  menu.style.display =  menu.style.display === 'block' ? 'none' : 'block';
})

arrowRight.forEach(elem=>{
  elem.addEventListener('click',function(){

    elem.parentElement.nextElementSibling.style.display =  elem.parentElement.nextElementSibling.style.display === 'block' ? 'none' : 'block';
    elem.src =  elem.src  === 'icons/down.svg' ? 'icons/right.svg' : 'icons/down.svg' ;
    console.log(elem.src)
  })
})




