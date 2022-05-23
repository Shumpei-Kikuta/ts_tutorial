export {};

let profile1: object = { name: 'Shumpei' };
profile1 = { a: 12 };

let profile2: {
  name: string;
} = { name: 'Shumpei' };
// profile2 = { a: 12 };
profile2['name'] = 'Shumpei2';
console.log(profile2);
