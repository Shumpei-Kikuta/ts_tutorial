export {};

let fooCompatible: any;
let barCompatible: string = 'TypleScript';

console.log(typeof fooCompatible);

// anyはstringと互換性がある
fooCompatible = barCompatible;

// stringを代入すると、any型はstringになる
console.log(typeof fooCompatible);

let fooInCompatible: string;
let varInCompatible: number = 1;

// number は string と互換性がない
// fooInCompatible = varInCompatible;

let fooString: string;
let varString: string = 'string';

fooString = varString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
// 文字列リテラル方は文字列型の一つ
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

// 構造的部分型
let me: Animal;
me = new Person(43, 'Shumpei');
