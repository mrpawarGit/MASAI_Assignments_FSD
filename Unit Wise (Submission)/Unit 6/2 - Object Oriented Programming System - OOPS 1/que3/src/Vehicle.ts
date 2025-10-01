class Vehicle {
  protected brand: string;
  protected speed: number;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  drive(): void {
    console.log(`Driving at ${this.speed} km/h`);
  }
}

class Car extends Vehicle {
  private fuelType: string;
  constructor(brand: string, speed: number, fuelType: string) {
    super(brand, speed);
    this.fuelType = fuelType;
  }
  refuel(): void {
    console.log(`Refueling ${this.fuelType}`);
  }
}

let c1 = new Car("BMW", 300, "petrol");
c1.drive();
c1.refuel();
