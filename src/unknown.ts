export {};

const kansu = (): number => 43;
let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

// any 型は conpile 時に検知できず、Runtime Error になりやすい
// unknown であれば、タイプガードを使って型安全で実行できる

let sumAny = numberAny + 10;
// タイプガード
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
  console.log(sumUnknown);
}
// unknown では コンパイル時に足し算ができるかわからないため。
