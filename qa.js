let plus = document.querySelectorAll('.questions__answer-plus');
let closeQa = document.querySelectorAll('.questions__answer-cross')


plus.forEach(elem=>{
    elem.addEventListener('click',function(){
        elem.style.display = elem.style.display === 'none' ? 'block' : 'none';
        elem.nextElementSibling.style.display  = elem.nextElementSibling.style.display === 'none' ? 'block' : 'none';
       elem.previousElementSibling.querySelector('.questions__answer-answer').style.display = elem.previousElementSibling.querySelector('.questions__answer-answer').style.display ==='block' ? 'none' : 'block';
       
    })
    }
)

closeQa.forEach(elem=>{
    elem.addEventListener('click',function(){
        elem.style.display = elem.style.display === 'none' ? 'block' : 'none';
        elem.previousElementSibling.style.display= elem.previousElementSibling.style.display=== 'block' ? 'none' : 'block';
        elem.previousElementSibling.previousElementSibling.querySelector('.questions__answer-answer').style.display = elem.previousElementSibling.previousElementSibling.querySelector('.questions__answer-answer').style.display ==='none' ? 'block' : 'none';
        console.log(elem.previousElementSibling.previousElementSibling.querySelector('.questions__answer-answer').style.display)
        
       
    })
    }
)



