export {};

// Alias は必ず先頭大文字
type Mojiretsu = string;

let name: Mojiretsu = 'test';
console.log({ name });

type Profile = {
  name: string;
  age: number;
};

const example1: Profile = {
  name: 'Shumpei',
  age: 27,
};

console.log(example1);

type Profile2 = typeof example1;
let example2: Profile2 = {
  name: 'shumpei',
  age: 50,
};

console.log(example2);
