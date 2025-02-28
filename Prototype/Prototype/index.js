function Vihecle(brand,year){
    this.brand=brand
    this.year=year
}
function car(brand,year) {
    Vihecle.call(this,brand,year)
    this.fuelType='Dizel'
}

car.prototype=Object.create(Vihecle.prototype)

let porche= new car('Porche',2007)
console.log(porche);


