const ringClass=document.querySelector('body');
const ring1=document.querySelector('#trafficLight_1');
const ring2=document.querySelector('#trafficLight_2');
const ring3=document.querySelector('#trafficLight_3');

function makeGreen(){
    ring3.style.background=('black');
    ring1.style.background=('green');
    ringClass.removeEventListener('click',makeGreen);
    ringClass.addEventListener('click',makeYellow);
    
    
}

function makeYellow(){
    ring1.style.background=('black');
    ring2.style.background=('yellow');
    ringClass.removeEventListener('click',makeYellow);
    ringClass.addEventListener('click', makeRed);
}
function makeRed(){
    ring2.style.background=('black')
    ring3.style.background=('red');
    ringClass.removeEventListener('click',makeRed);
    ringClass.addEventListener('click',makeGreen);
}

ringClass.addEventListener('click', makeGreen);