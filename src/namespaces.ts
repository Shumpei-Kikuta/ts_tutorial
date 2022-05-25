export {};

namespace Japanese {
  // 外からのアクセスが可能にするため、export をつける
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}
const me = new Japanese.Tokyo.Person('Shumpei');
const you = new Japanese.Osaka.Person('Shumpei');

console.log(me);
console.log(you);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);
