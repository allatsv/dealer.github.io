let cart = document.querySelector('.cart')
let modalCart = document.querySelector('.make-order-none')
let blurModal = document.querySelector('.blur')
let close = document.querySelector('.cart-close')
cart.addEventListener('click', function(){
  modalCart.classList.toggle('make-order-none')
  blurModal.classList.toggle('blur-none')
  
})

blurModal.addEventListener('click',function(){
    blurModal.classList.add('blur-none')
    modalCart.classList.add('make-order-none')
}
)

close.addEventListener('click',function(){
    blurModal.classList.add('blur-none')
    modalCart.classList.add('make-order-none')
}
)