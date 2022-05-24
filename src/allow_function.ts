export {};

// python の lambda と同じ
let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);
console.log(bmi(1.84, 64));
