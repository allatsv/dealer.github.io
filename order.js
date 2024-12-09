let itemCost = 0
let itemCost2 = 0
let result = 0
let cost = document.querySelectorAll('.cost')
let costRes = document.querySelector('.costRes')
let minus = document.querySelectorAll('.make-order__card-total-img')
let clean = document.querySelector('.make-order__clear-text')
let card = document.querySelectorAll('.make-order__card')
let quantity = document.querySelector('.quantity')
let counterProduct = 0




clean.addEventListener('click',function(){
    card.forEach(elem=>{
      elem.remove()
      costRes.innerHTML = 0
      quantity.innerHTML = 0
    })

})
function counter(){
  cost.forEach(elem=>{
    counterProduct++
    quantity.innerHTML = counterProduct
    itemCost = Number(elem.textContent)
    result = result + itemCost
    costRes.innerHTML = result
    }
    
    )
}



minus.forEach(elem=>{
    elem.addEventListener("click", function(){
      itemCost2 = (elem.previousElementSibling.firstChild.innerHTML)
      costRes.innerHTML = Number(costRes.innerHTML) - Number(itemCost2)
      
      elem.closest(".make-order__card-flex").remove()
      counterProduct = quantity.innerHTML-1
      quantity.innerHTML = counterProduct
    }
  )
  }
  
  )

