
const navLinks = document.querySelectorAll('nav li');


document.querySelector('.about').addEventListener('click', function () {
  
    navLinks.forEach(link => link.classList.remove('active'));
    
   
    this.classList.add('active');
    

    document.querySelector('.about-section').scrollIntoView({
        behavior: 'smooth'
    });
});




document.querySelector('.home').addEventListener('click', function () {
   
    navLinks.forEach(link => link.classList.remove('active'));
    
    this.classList.add('active');
    
    
    document.querySelector('.home-section').scrollIntoView({
        behavior: 'smooth'
    });
});


document.getElementById("get-started").addEventListener("click", function() {
    window.location.href = "index.html"; 
});