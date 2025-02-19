
let allButton=document.getElementById('All')
let cards = document.querySelectorAll('.card')
let buttons=document.querySelectorAll('.button-card')
let h3=document.querySelectorAll('h3')

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
  
   
     for (let f = 0; f< h3.length; f++) {
        if (buttons[i].textContent===h3[f].textContent) {
          cards[f].style.display = 'block';
        }
       
     }   
 });
   }
let plus=document.querySelectorAll('.plus')
let cardTitle=document.querySelectorAll('card-title')
let listCardsimg=document.querySelectorAll('.playlist-img')
let cardImg=document.querySelectorAll('.card-img')
let favoritedSongsList = document.querySelector(".fav-list")

const favoritedSongs = []




for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click',function () {

    var img = document.createElement("img")
    img.src=cardImg[i].src;
    img.style.cssText='width:100px;height:100px';
    // element.insertBefore(para, element.firstChild);


    
    // favoritedSongsList.append(img)
    favoritedSongsList.insertBefore(img,favoritedSongsList.firstChild)

        console.log("Favorited Songs: ", favoritedSongs)
    });




  }















    
            




