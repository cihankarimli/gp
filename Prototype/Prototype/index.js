function  Vehicle(brand,year){
    this.brand=brand
    this.year=year
}
Vehicle.prototype.getinfo=function(){
    return `Brand: ${this.brand}, Year: ${this.year}`;
}
function car(brand,year,fuelType) {
    Vehicle.call(this,brand,year)
    this.fuelType=fuelType
}

car.prototype=Object.create( Vehicle.prototype)


let porche= new car('Porche',2007,'Dizel')
let  vehicle=new  Vehicle('Bmw',2015)

console.log(porche.getinfo());
console.log(porche);
console.log(vehicle);



