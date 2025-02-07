

let box = document.querySelector('.box');
let button = document.querySelectorAll('button');
let word=document.querySelector('p');




button.forEach(button=> {
    button.onclick=function(){
        word.textContent='Necesiz'
        box.style.backgroundColor='blue'
}    
});

    


    
    