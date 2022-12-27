const nextBtn = document.querySelectorAll('.next-step');
const backBtn = document.querySelectorAll('.back-step');
const arts = document.querySelectorAll('article');
const lis = document.querySelectorAll('.sideIcon');

let currentForm = 0

for(let i = 0; i < nextBtn.length; i++){
    nextBtn[i].addEventListener('click', () => {
        changeForm(currentForm + 1);
        console.log(currentForm);
    })
}

for(let i = 0; i < backBtn.length; i++){
    backBtn[i].addEventListener('click', () => {
        changeForm(currentForm - 1);
        console.log(currentForm);
    })
}


function changeForm(a){
    arts[currentForm].classList.toggle("active");
    arts[a].classList.toggle("active");

    if(currentForm > 3){
        lis[3].classList.toggle("active");
        lis[3].classList.toggle("active");
    } else {
        lis[currentForm].classList.toggle("active");
        lis[a].classList.toggle("active");
    }
    
    currentForm = a;
}
