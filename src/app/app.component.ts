import { Component, OnInit } from '@angular/core';

class Greeting {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  greet() {
    return "Hello, " + this.message;
  }
}

class Animal {
  private name: string;

  constructor(animalName: string) {
    this.name = animalName;
  }

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  bark() {
    console.log('Woof!');
  }

  move(distanceMovedByDog: number = 5) {
    console.log('dog is moving...');
    super.move(distanceMovedByDog);
  }
}

class Poodle extends Dog {
  constructor(name: string) {
    super(name);
  }

  move() {
    let moving = super.move();
    console.log('poodle is walking...');
  }
}

class Horse extends Animal {
  // create constructor to set Animal name
  constructor(name: string) {
    super(name);
  }

  // create move to set default distance to 45
  move(distanceMovedByHorse: number = 45) {
    console.log('Horse is charging...');
    super.move(distanceMovedByHorse);
  }
}

class User {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class John extends User {
  constructor() { 
    super("John");
  }
}

class Employee {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Person {
  protected name: string;

  protected constructor(name: string) {
    this.name = name;
  }
}

class Worker extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  getDetails() {
    return `My name is ${this.name} and I work in ${this.department}.`;
  }
}

// Modules
module Shapes {
  export class Rectangle {
    // height: number;
    // width: number;
    // constructor(height: number, width: number) {
    //   this.height = height;
    //   this.width = width;
    // }
    constructor(public height: number, public width: number) { }
  }

  const rect1 = new Rectangle(10, 4);
}
// End Modules
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  ngOnInit() {
    // this.classTesting();
    // this.animalClassTesting();
    // this.classCompatibilityTesting();
    // this.extendDerivedClassTesting();
    // this.protectedTesting();
    // testing modules
    const rect2 = new Shapes.Rectangle(20, 10);
    console.log(rect2);
    // console.log(Shapes.rect1); //not accessible since rect1 is not exported.
  }

  classTesting() {
    const greeter = new Greeting('world!');
    console.log(greeter.greet());
  }

  animalClassTesting() {
    const dog = new Dog("Goofy");
    dog.bark();
    dog.move();

    const horse: Animal = new Horse("Bulls eye");
    horse.move(20);

    const animal = new Animal("Cat");
    console.log(animal);
  }

  classCompatibilityTesting() {
    let user = new User("Doe");
    const john = new John();

    console.log(user);
    console.log(john);

    const employee = new Employee("Smith");
    console.log(employee);

    user = john; // compatible because User and John use same private field (name)
    console.log(user);

    // user = employee; // incompatible since User and Employee have different private fields (name)
  }

  extendDerivedClassTesting() {
    const poodle = new Poodle("Tom");
    poodle.move();
  }

  protectedTesting() {
    const worker = new Worker("Steve", "Sales");
    console.log(worker.getDetails());
    // console.log(worker.name);
    // const person = new Person("Patrick");
    // console.log(person);
  }

}