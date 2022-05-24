export {};

class Person {
  // constructor にアクセス修飾詞をつけるといい感じに初期化処理をしてくれる
  //  python の dataclass と同じ
  constructor(public name: string, protected age: number) {}
}

const me = new Person('Shumpei', 27);
console.log(me);
