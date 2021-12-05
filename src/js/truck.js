// Создать файл truck.js с классом Truck, в котором есть:

//   - свойства и методы родительского класса Car

//   - свойство cargoCabin, равное []

//   - свойство maxSlots, зависящее от аргумента maxSlots

//   - метод addCargo(item) добавляет item в cargoCabin, cargoCabin.length не должна быть больше maxSlots

import { Car } from './car'

class Truck extends Car {

    cargoCabin = []

    constructor(brand, year, fuelRate, distance, maxSlots, item) {
        super(brand, year, fuelRate, distance)
        this.maxSlots = maxSlots
        this.item = item
    }

    addCargo() {
        for(let i=1; i<= this.item; i++)
            this.cargoCabin.push(Number(i))
                             
            if (this.cargoCabin.length <= this.maxSlots){
                console.log('Текущая загрузка '+ this.cargoCabin.length/this.maxSlots*100 + '%') 
                                
            } else{
                console.log('Too much')
            }
           
        }

                       
    
    getinfo() {
        super.getinfo()
        console.log(`Максимальное количество груза = ${this.maxSlots}`)
        this.addCargo()
        
    }
}
export { Truck }



