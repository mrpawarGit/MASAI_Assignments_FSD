/**
Q: 10
Title
Prototypical Inheritance and Constructor Functions - I

Level
1

Time to solve the problem
40 mins

Problem Statement
You are developing a simulation for a car rental service. The simulation should manage the inventory of cars, track rentals by customers, and handle the return and maintenance of cars. Additionally, there are different types of cars with varying rental rules and prices. The system should be able to process rentals asynchronously to simulate real-world delays.

To implement this system, follow these steps:

Create a constructor function for Car that takes the following parameters:
make: the make of the car (e.g., Toyota)
model: the model of the car (e.g., Corolla)
year: the year of the car (e.g., 2020)
isAvailable: a boolean indicating if the car is available for rent (default is true)
Create a constructor function for Customer that takes the following parameters:
name: the name of the customer
rentedCars: an array to store the cars rented by the customer (default is an empty array)
Add a method to the Customer prototype to allow customers to rent a car. This method should:
Take a Car object as an argument.
Check if the car is available.
If the car is available, mark it as not available and add the car to the customer's rentedCars array.
If the car is not available, log a message saying the car is already rented.
Create a constructor function for PremiumCustomer that inherits from Customer and takes the same parameters. Additionally, PremiumCustomer should have:
A discountRate property indicating a discount on rental prices (e.g., 10%).
Create a function to calculate rental prices that considers:
Base rental price per day (e.g., $50).
Different rates for different car types (e.g., SUV, Sedan).
Apply discounts for premium customers.
Handle car returns by adding a method to the Customer prototype to return a car. This method should:
Take a Car object as an argument.
Mark the car as available.
Remove the car from the customer's rentedCars array.
Simulate a delay in processing the return (e.g., 2 seconds).
Extend the system to handle maintenance:
Create a Maintenance function that takes a Car object and a delay (in milliseconds).
After the delay, mark the car as available.
Demonstrate the functionality:
Create several car objects of different types.
Create regular and premium customers.
Show renting and returning cars, applying discounts, and handling maintenance.
Use call, apply, and bind where appropriate to demonstrate your understanding.
 */

function Car(make, model, year, isAvailable = true) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isAvailable = isAvailable;
}

function Customer(name) {
  this.name = name;
  this.rentedCars = [];
}

Customer.prototype.rentACar = function (car_obj) {
  if (car_obj.isAvailable) {
    car_obj.isAvailable = false;
    this.rentedCars.push(car_obj);
    console.log(this.name, "rented", car_obj.model, car_obj.make, "car!");
  } else {
    console.log("Sorry, this car is already rented.");
  }
};

Customer.prototype.returnCar = function (car_obj) {
  setTimeout(() => {
    car_obj.isAvailable = true;
    this.rentedCars = this.rentedCars.filter((c) => c !== car_obj);
    console.log("Car", car_obj.make, "-", car_obj.model, "Return Done");
  }, 2000);
};

function PremiumCustomer(name, discountRate) {
  Customer.call(this, name); 
  this.discountRate = discountRate;
}

PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;

function calculateRentalPrice(pri_cust){
  let basePrice = 50;
  let discount = basePrice * (pri_cust.discountRate / 100);
  console.log(`BasePrice: ${basePrice},After ${pri_cust.discountRate}% discount, Final Price:${basePrice - discount}`);
};

function maintenance(car_obj, delay) {
  setTimeout(() => {
    car_obj.isAvailable = true;
    console.log(car_obj.model,car_obj.make,"Maintenance Done")
  }, delay);
}

const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Maruti", "Swift", 2022);
const car3 = new Car("Tata", "Nexon", 2024);

const cust1 = new Customer("Rohan");
const cust2 = new PremiumCustomer("Soham", 10);

//renting car
cust1.rentACar(car2);
cust2.rentACar(car1); 

//calculating rental price after discount for primium customers
calculateRentalPrice(cust2)

//return car
cust1.returnCar(car1)

//car maintenance
maintenance(car1,3000);