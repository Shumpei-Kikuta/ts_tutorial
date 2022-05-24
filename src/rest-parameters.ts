export {};

const reducer = (previousValue: number, currentValue: number) =>
  previousValue + currentValue;

const sum: (...values: number[]) => number = (...values: number[]): number => {
  const sumWithInitial = values.reduce(reducer);
  return sumWithInitial;
};

console.log(sum(1, 2, 3, 4, 5));
