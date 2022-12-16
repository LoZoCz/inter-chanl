const nextBtn = document.querySelectorAll('.next-step');
const backBtn = document.querySelectorAll('.back-step');
const arts = document.querySelectorAll('article');
const lis = document.querySelectorAll('li');

const cb = document.querySelector('#box');

let currentForm = 0

for(let i = 0; i < nextBtn.length; i++){
    nextBtn[i].addEventListener('click', () => {
        changeForm(currentForm + 1);
        console.log(currentForm)
    })
    
    backBtn[i].addEventListener('click', () => {
        changeForm(currentForm - 1);
    })
}

function changeForm(a){
    arts[currentForm].classList.toggle("active");
    arts[a].classList.toggle("active");
    lis[currentForm].classList.toggle("active");
    lis[a].classList.toggle("active");

    currentForm = a;
}

console.log(cb.cheked);