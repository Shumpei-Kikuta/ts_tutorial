export {};

class Me {
  // static: seiteki member
  static isProgrammer: boolean = true;
  static firstName: string = 'Kikuta';
  static lastName: string = 'Ishida';

  static work(): string {
    return `hey guys! This is ${this.firstName} Are you interested in TS?`;
  }
}

// dont need to make instance
console.log(Me.work());
console.log(Me.work());
