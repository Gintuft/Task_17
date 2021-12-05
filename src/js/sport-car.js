// Создать файл sport-car.js с классом SportCar, в котором есть:

//   - свойства и методы родительского класса Car

//   - свойство maxSpeed, зависящее от аргумента maxSpeed

//   - свойство currentSpeed, равное 0

//   - свойство isWorking, равное false

//   - метод start() заводит машину (isWorking = true)

//   - метод speedUp(value) - ускорить машину на value, если currentSpeed превышает maxSpeed показать ошибку, не работает, если isWorking == false, то показать сообщение

import { Car } from './car'

class SportCar extends Car {

  currentSpeed = 0
  isWorking = false

  constructor(brand, year, fuelRate, distance, maxSpeed, value) {
    super(brand, year, fuelRate, distance)
    this.maxSpeed = maxSpeed
    this.value = value

  }

  getinfo() {
    super.getinfo()
    console.log('Максимальная скорость = ' + this.maxSpeed)
    this.speedUp()

  }

  start() {
    this.isWorking = true
  }

  speedUp() {
    const currentSpeedUp = Number(this.currentSpeed + this.value)
    if (currentSpeedUp > this.maxSpeed) {
      console.log('Too fast')
    } else if (this.isWorking == false) {
      console.log("Doesn't work")
    } else {
      console.log('Текущая скорость = ' + currentSpeedUp)

    }

  }
}


export { SportCar }