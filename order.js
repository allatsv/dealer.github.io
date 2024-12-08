let buttonCountMinus = document.querySelectorAll('.make-order__card-total-img')
let price = document.querySelectorAll('.cost')
let finalPrice = document.querySelector('.costRes')
let priceF = 0
finalPrice.innerHTML = priceF

price.forEach((elem) => {
    console.log(elem.innerHTML)
    priceF =  0+ Number(finalPrice.innerHTML)+ Number(elem.innerHTML)
    finalPrice.innerHTML = priceF
})



function resetPrice(){
  buttonCountMinus.forEach((elem) => {
    elem.addEventListener('click',function(){
        finalPrice.innerHTML = priceF - 21999
    })
  })
}


resetPrice()