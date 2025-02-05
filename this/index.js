const object={
    brand:'BMW',
    model:'F10',
    year:2015,


    getCarinfo:function(){
  console.log(`brand:${this.brand}  location:${this.model}`);
  
},
uptudeNewYear:function(Newyear){
    this.year=Newyear
    console.log(object);
},
displayInfo:function(){
    setTimeout(function(){
        console.log(`brand:${this.brand}  location:${this.model}  year:${this.year}` );
    }.bind(this),3000)
}
}

object.getCarinfo();
 object.uptudeNewYear(2016);
 object.displayInfo();
 
  