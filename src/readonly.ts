export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let card = new VisaCard('test');
console.log(card.owner);
