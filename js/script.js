const nextBtn = document.querySelectorAll('.next-step');
const backBtn = document.querySelectorAll('.back-step');
const arts = document.querySelectorAll('article');
const lis = document.querySelectorAll('.sideIcon');
const additionPrice = document.querySelectorAll('.additionPrice');

var arcadePlan = 9;
var advancedPlan = 12;
var proPlan = 15;

var addPrice = 1;

let currentForm = 0;

var arr = [];

// console.log(additionPrice);

for(let i = 0; i < nextBtn.length; i++){
    nextBtn[i].addEventListener('click', () => {
        changeForm(currentForm + 1);
        // console.log(currentForm);
    })
}

for(let i = 0; i < backBtn.length; i++){
    backBtn[i].addEventListener('click', () => {
        changeForm(currentForm - 1);
        // console.log(currentForm);
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

const swtch = document.querySelector('#box');
const yearly = document.querySelector('.yearly');
const monthly = document.querySelector('.monthly');
const yearInfo = document.querySelectorAll('.yearlyInfo');
const addCosts = document.querySelectorAll('.addCosts');

swtch.addEventListener('click', () => {
    if (swtch.checked) {
        // console.log("radio1");
        yearly.classList.add('ymActive');
        monthly.classList.remove('ymActive');
        for(let i =0; i<yearInfo.length; i++){
            yearInfo[i].innerHTML = '2 months free'
        }
        addCosts[0].innerHTML = '+$' + addPrice*10 + '/mon'
        addCosts[1].innerHTML = '+$' + addPrice*20 + '/mon'
        addCosts[2].innerHTML = '+$' + addPrice*20 + '/mon'
      } else {
        // console.log('ajngihbalgi');
        yearly.classList.remove('ymActive');
        monthly.classList.add('ymActive');
        for(let i =0; i<yearInfo.length; i++){
            yearInfo[i].innerHTML = ''
        }
        addCosts[0].innerHTML = '+$' + addPrice + '/mon'
        addCosts[1].innerHTML = '+$' + addPrice*2 + '/mon'
        addCosts[2].innerHTML = '+$' + addPrice*2 + '/mon'
      }
  })

const plans = document.querySelectorAll('.planRadio');
const whichPlan = document.querySelector('.whichPlan');
const planCost = document.querySelector('.planCost');
const totalCost = document.querySelector('.totalCost');
const changePlan = document.querySelector('.change');

changePlan.addEventListener('click', () => {
    changeForm(currentForm - 2);
    // console.log('change');
});

for(let b=0; b<plans.length; b++){
    plans[b].addEventListener('change', () => {
        // console.log(plans[b]);
        if(swtch.checked){
            if(plans[0].checked){
                whichPlan.innerHTML=`Arcade (yearly)`
                planCost.innerHTML=`$${arcadePlan*10}/mon`
                var numx = planCost.innerHTML.match(/(\d+)/);

                console.log(numx[0]);
                totalCost.innerHTML=numx[0]
            } else if(plans[1].checked){
                whichPlan.innerHTML=`Advanced (yearly)`
                planCost.innerHTML=`$${advancedPlan*10}/mon`
                var numx = planCost.innerHTML.match(/(\d+)/);
                console.log(numx[0]);
                totalCost.innerHTML=numx[0]
            } else if(plans[2].checked){
                whichPlan.innerHTML=`Pro (yearly)`
                planCost.innerHTML=`$${proPlan*10}/mon`
                var numx = planCost.innerHTML.match(/(\d+)/);
                console.log(numx[0]);
                totalCost.innerHTML=numx[0]
            }
        var num = planCost.innerHTML.match(/(\d+)/);
        console.log(num[0]);
        } else {
            if(plans[0].checked){
                whichPlan.innerHTML=`Arcade (monthly)`
                planCost.innerHTML=`$${arcadePlan}/mon`
                var numx = planCost.innerHTML.match(/(\d+)/);
                console.log(numx[0]);
                totalCost.innerHTML=numx[0]
            } else if(plans[1].checked){
                whichPlan.innerHTML=`Advanced (monthly)`
                planCost.innerHTML=`$${advancedPlan}/mon`
                var numx = planCost.innerHTML.match(/(\d+)/);
                console.log(numx[0]);
                totalCost.innerHTML=numx[0]
            } else if(plans[2].checked){
                whichPlan.innerHTML=`Pro (monthly)`
                planCost.innerHTML=`$${proPlan}/mon`
                var numx = planCost.innerHTML.match(/(\d+)/);
                console.log(numx[0]);
                totalCost.innerHTML=numx[0]
            }
        }
    })
};

const addInputs = document.querySelectorAll('.addInp');
const addOns = document.querySelectorAll('.addOns');
const additions = document.querySelectorAll('.additions');

for(let v=0; v<addInputs.length; v++){
    addInputs[v].addEventListener('change', function() {
    if(swtch.checked){
        if (addInputs[v].checked) {
            additions[v].innerHTML = addInputs[v].value;
            additionPrice[v].innerHTML = `+$${addPrice*20}/mon`
                if (addInputs[0].checked){
                    additions[0].innerHTML = addInputs[0].value;
                    additionPrice[0].innerHTML = `+$${addPrice*10}/mon`
                }
        } else {
        additions[v].innerHTML = '';
        additionPrice[v].innerHTML = ``
        }
    var num = additionPrice[v].innerHTML.match(/(\d+)/);
    arr.push(num[0])
    console.log(arr);
    } else {
        if (addInputs[v].checked) {
            additions[v].innerHTML = addInputs[v].value;
            additionPrice[v].innerHTML = `+$${addPrice*2}/mon`
            var num = additionPrice[v].innerHTML.match(/(\d+)/);
            console.log(num[0]);
                if (addInputs[0].checked){
                    additions[0].innerHTML = addInputs[0].value;
                    additionPrice[0].innerHTML = `+$${addPrice}/mon`
                    var num = additionPrice[v].innerHTML.match(/(\d+)/);
                    console.log(num[0]);
                }
        } else {
        additions[v].innerHTML = '';
        additionPrice[v].innerHTML = '';
        }
    }
  });
}

