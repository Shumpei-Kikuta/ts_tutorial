export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }
  run(): string {
    const parent_message = super.run();
    return `${parent_message} ${this.speed} km`;
  }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());

let animal = new Animal('Mickey');
console.log(animal.run());

let lion = new Lion('shinba', 80);
console.log(lion.run());
