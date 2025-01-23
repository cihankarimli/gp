//task-1


/* let searchId=11070
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
let searchId=11310
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