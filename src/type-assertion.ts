export {};

let name: any = 'Shumpei';

// number 型であることを compilar に教える
let length = name.length;
length = (name as string).length;

// react の JSX と同じ記法だから推奨されていない
length = (<string>name).length;
console.log(length);

// any だと 代入できてしまう
// length = 'fooo';
