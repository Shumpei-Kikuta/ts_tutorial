export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable === true) {
    console.log(bmi);
  }
  return weight / (height * height);
};

// bmi (身長、体重, console.logで出力するかどうか)
// bmi(1.84, 64, true);
bmi(1.84, 64, false);
bmi(1.84, 64);
