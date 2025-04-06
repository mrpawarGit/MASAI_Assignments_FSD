/**
Problem: Employee Data Transformation

Create a function that transforms employee data using Higher Order Functions. The function should:

Filter employees with salary above a certain threshold
Map to create a new array with name and revised salary (10% raise)
Sort by years of experience in descending order
Input:

Employees: [
  { id: 1, name: "Alice", salary: 50000, experience: 3, department: "Engineering" },
  { id: 2, name: "Bob", salary: 75000, experience: 5, department: "Sales" },
  { id: 3, name: "Charlie", salary: 60000, experience: 2, department: "Marketing" },
  { id: 4, name: "Dave", salary: 45000, experience: 1, department: "Engineering" },
  { id: 5, name: "Eve", salary: 85000, experience: 7, department: "Engineering" }
]

Salary threshold: 55000

Expected Output:

[
  { name: "Eve", newSalary: 93500, experience: 7 },
  { name: "Bob", newSalary: 82500, experience: 5 },
  { name: "Charlie", newSalary: 66000, experience: 2 }
]

Problem: Vehicle Rental System

Implement a simple vehicle rental system using constructor functions and inheritance. Create a base class Vehicle with common properties, and derived classes Car, Bike, and Truck with specific properties and methods.

Requirements:

Vehicle should track all rented vehicles.
Each vehicle should have methods to rent and returnVehicle.
Include a static method to list all currently rented vehicles.
Input:

// Creating new vehicle entries
const car1 = new Car("Honda Civic", "Sedan", "Petrol", 5);
const bike1 = new Bike("Yamaha R15", "Sports", 150);
const truck1 = new Truck("Tata Ace", "Mini Truck", 1200);

// Rent and return operations
car1.rent("Customer001");
car1.returnVehicle();
car1.rent("Customer007");

// Get all rented vehicles
const rentedVehicles = Vehicle.getRentedVehicles();

Expected Output:

[Car] Honda Civic has been rented by Customer007
Current status: rented
All rented vehicles: [
  {
    model: "Honda Civic",
    type: "Car",
    fuelType: "Petrol",
    rentedBy: "Customer007"
  }
]
 */