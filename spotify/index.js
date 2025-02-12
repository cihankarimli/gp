
let allButton=document.getElementById('All')
let cards = document.querySelectorAll('.card')
let buttons=document.querySelectorAll('.button-card')

allButton.addEventListener('click',function () {
    cards.forEach(card => {
        card.style.display = 'block';
    });
})

for (let i = 1; i < buttons.length; i++) {
   buttons[i].addEventListener('click',function () {
    cards.forEach(card => {
        card.style.display = 'none';
    });
  
   
     let h3=document.querySelectorAll('h3')
     for (let f = 0; f< h3.length; f++) {
        if (buttons[i].textContent===h3[f].textContent) {
          cards[f].style.display = 'block';
        }
       
     }   
 });
   }
