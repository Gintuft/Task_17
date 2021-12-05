// Создать файл car.js с классом Car, в котором есть:

//   - свойство brand, зависящее от аргумента brand

//   - свойство year, зависящее от аргумента year

//   - свойство fuelRate, зависящее от аргумента fuelRate (расход топлива)

//   - метод getInfo выводит всю информацию о car

//   - метод calcFuel(distance) возвращает объем топлива на указанную distance

class Car {
    constructor(brand, year, fuelRate, distance) {
        this.brand = brand
        this.year = year
        this.fuelRate = fuelRate
        this.distance = distance
        
    }
    getinfo() {
        console.log('Бренд: '+ this.brand + ', год выпуска: ' + this.year + ', расход топлива: ' + this.fuelRate + ' л/100км')
        console.log(`Расход топлива на ${this.distance} км = ${this.calcFuel()} литров`)
    }
    calcFuel() {
        const fuelConsumption = this.distance /100 * this.fuelRate
        return fuelConsumption
    }

}
export { Car }
