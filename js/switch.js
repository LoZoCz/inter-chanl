const swtch = document.querySelector('#box');
const yearly = document.querySelector('.yearly');
const monthly = document.querySelector('.monthly');
const yearInfo = document.querySelectorAll('.yearlyInfo');
const addCosts = document.querySelectorAll('.addCosts');

swtch.addEventListener('click', () => {
    if(swtch.checked == true){
        // console.log(yearly);
        yearly.classList.add('ymActive');
        monthly.classList.remove('ymActive');
        for(let i =0; i<yearInfo.length; i++){
            yearInfo[i].innerHTML = '2 months free'
        }
        addCosts[0].innerHTML = '+$10/mon'
        addCosts[1].innerHTML = '+$20/mon'
        addCosts[2].innerHTML = '+$20/mon'
    } else if((swtch.checked == false)) {
        // console.log(monthly);
        yearly.classList.remove('ymActive');
        monthly.classList.add('ymActive');
        for(let i =0; i<yearInfo.length; i++){
            yearInfo[i].innerHTML = ''
        }
        addCosts[0].innerHTML = '+$1/mon'
        addCosts[1].innerHTML = '+$2/mon'
        addCosts[2].innerHTML = '+$2/mon'
    }
});

