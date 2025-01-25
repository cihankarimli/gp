//task-1


/*  let searchId=11070
 for(let i=0;i<data.length;i++){
     if(data[i].id===searchId){
         town=data[i].shipAddress.country
      
     }
 }  
 console.log(town)*/


//task-2


/*let object=""
let country='Germany'
for(let i=0;i<data.length;i++){
    if(data[i].shipAddress.country=="Germany"){
        object=data[i]
    
    }
}
console.log(object)*/

//task-3

 /*let searchId=11065
 let ship=""
 let country=""
 let city=""
for(let i=0;i<data.length;i++){
   if(data[i].id==searchId){
    ship=data[i].shipName
    country=data[i].shipAddress.country
    city=data[i].shipAddress.city
   }
}
console.log("shipName:",ship)
console.log("country:",country)
console.log("shipADDress:",city)*/


//task-4


/*let detailsLength=""
let searchId=10550
for(let i=0;i<data.length;i++){
    if(data[i].id==searchId){
        detailsLength=data[i].details.length
    }
}
console.log(detailsLength);*/


//task-5

/*let earnings=""
let unitPrice=""
let quantity=""
let discount=""
let searchId=10310
for(let i=0;i<data.length;i++){
    if(data[i].id==searchId){
        
    
    for(let f=0;f<data[i].details.length;f++){
         unitPrice=data[i].details[f].unitPrice
         quantity=data[i].details[f].quantity
         discount=data[i].details[f].discount
         earnings=unitPrice+quantity-discount
       
    }
    console.log(earnings);
}
}*/
// function sayac(){
// let sayi=0
// return function artir(){
//     sayi++
//     console.log(sayi);
    
// }

// }
// console.log(artir());

function Animal(type) {
    this.type = type;
  }
  Animal.prototype.eat = function () {
    console.log(`${this.type} yemək yeyir.`);
  };
  
  const dog = new Animal("İt");
  dog.eat(); // İt yemək yeyir.
  console.log(dog.__proto__ === Animal.prototype); // true





 const animal={
    eat(){
    console.log("yemey yeyir");
    }
}

  const tiger=Object.create(animal);
  tiger.bark=function(){
    console.log("Wrahh!")
  }
  tiger.eat()
  tiger.bark()

  const bird={};
    Object.setPrototypeOf(bird,animal)
  bird.cik=function(){
    console.log("cik-cik");
    
  }
  bird.eat();
  bird.cik();
  