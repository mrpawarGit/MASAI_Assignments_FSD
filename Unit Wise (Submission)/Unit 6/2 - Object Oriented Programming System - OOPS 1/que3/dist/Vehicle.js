"use strict";
class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    drive() {
        console.log(`Driving at ${this.speed} km/h`);
    }
}
class Car extends Vehicle {
    constructor(brand, speed, fuelType) {
        super(brand, speed);
        this.fuelType = fuelType;
    }
    refuel() {
        console.log(`Refueling ${this.fuelType}`);
    }
}
let c1 = new Car("BMW", 300, "petrol");
c1.drive();
c1.refuel();
