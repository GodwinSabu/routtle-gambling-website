class Car {
    private static carCount: number = 0; // Shared across all cars (static)
    private id: number;                 // Unique for each car
    private brand: string;              // Private property
    private color: string;              // Private property
  
    constructor(brand: string, color: string) {
      // Called when creating a new car
      Car.carCount++; // Increment the static car counter
      this.id = Car.carCount;
      this.brand = brand;
      this.color = color;
    }
  
    // Public method to access car details
    public getDetails(): string {
      return `Car ID: ${this.id}, Brand: ${this.brand}, Color: ${this.color}`;
    }
  
    // Static method to get the total number of cars
    public static getCarCount(): number {
      return Car.carCount;
    }
  }
  
  // Create car objects
  const car1 = new Car("Toyota", "Red");
  const car2 = new Car("Honda", "Blue");
  
  console.log(car1.getDetails()); // Car ID: 1, Brand: Toyota, Color: Red
  console.log(car2.getDetails()); // Car ID: 2, Brand: Honda, Color: Blue
  
  console.log(Car.getCarCount()); // 2 (Static method usage)

  



  export class User {
    id :number 
    name:  string
    
  }