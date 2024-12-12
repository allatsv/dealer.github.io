document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector(".carousel");
    let items = carousel.querySelectorAll(".item");
  
    items.forEach((_, index) => {
      let dot = document.createElement("span");
      if (index === 0) dot.classList.add("active");
    });
  
 
  
    function showItem(index) {
      items.forEach((item, idx) => {
        item.classList.remove("active-modal");
        if (idx === index) {
          item.classList.add("active-modal");
        }
      });
    }
  
    document.querySelector(".prev-modal").addEventListener("click", () => {
      let index = [...items].findIndex((item) =>
        item.classList.contains("active-modal")
      );
      showItem((index - 1 + items.length) % items.length);
    });
  
    document.querySelector(".next-modal").addEventListener("click", () => {
      let index = [...items].findIndex((item) =>
        item.classList.contains("active-modal")
      );
      showItem((index + 1) % items.length);
    });
  });
  


  let blurModal = document.querySelector('.blur')
  let imgCustom = document.querySelectorAll('.gallery__row-img')
  let galleryModal = document.querySelector('.gallery-Modal')
  imgCustom.forEach(elem=>{
    elem.addEventListener('click', function(){
        console.log('hut')
        galleryModal.classList.remove('gallery-Modal-none')
        blurModal.classList.toggle('blur-none')
    })
  })


  blurModal.addEventListener('click',function(){
    blurModal.classList.add('blur-none')
    galleryModal.classList.add('gallery-Modal-none')
}
)