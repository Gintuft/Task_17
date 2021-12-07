import '../css/style.css'
import { Car } from './car'
import { Truck } from './truck'
import { SportCar } from './sport-car'

const car = new Car('Toyota', '2015', '5', '300')
car.getinfo()

const sportCar = new SportCar('Lancia', '2009', '6.7', '500', '150', '150')
sportCar.start()
sportCar.getinfo()

const truck = new Truck('BMW', '2010', '15', '450', '200', '25')

truck.getinfo()
