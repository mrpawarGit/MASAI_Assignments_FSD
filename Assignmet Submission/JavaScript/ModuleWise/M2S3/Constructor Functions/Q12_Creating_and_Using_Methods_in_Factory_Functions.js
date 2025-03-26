/**
Q: 12 Title: - Creating and Using Methods in Factory Functions

Problem Statement:
Create a factory function createCar that returns an object representing a car. Each car should have make, model, and year as properties. Add a method describeCar() to the object that outputs a description of the car's make, model, and year.

Steps:

-Define the factory function createCar.
-The function should accept make, model, and year as parameters.
-Return an object with the properties make, model, and year.
-The describeCar() method should print "This car is a [year] [make] [model]."

Example:
const car = createCar("Toyota", "Camry", 2022);
car.describeCar();

Output: This car is a 2022 Toyota Camry.
 */

function createCar(make, model, year){
  return{
    make,
    model,
    year,
    describeCar(){
      console.log("This car is a", this.year, this.make, this.model+".")
    }
  }
}

const car = createCar("Toyota", "Camry", 2022);
car.describeCar();
// Output: This car is a 2022 Toyota Camry.

















