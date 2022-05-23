export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

enum Colors {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#00800',
}

let green = Colors.RED;
console.log(green);
