function  Vehicle(brand,year){
    this.brand=brand
    this.year=year
}
Vehicle.prototype.getinfo=function(){
    return `Brand: ${this.brand}, Year: ${this.year}`;
}
function Car(brand,year,fuelType) {
    Vehicle.call(this,brand,year)
    this.fuelType=fuelType
}

Car.prototype=Object.create( Vehicle.prototype)


let car= new Car('Porche',2007,'Dizel')
let  vehicle=new  Vehicle('Bmw',2015)

console.log(car.getinfo());
console.log(car);
console.log(vehicle);



