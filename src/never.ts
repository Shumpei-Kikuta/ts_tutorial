export {};

// this function is never return
function error(message: string): never {
  throw Error(message);
}

try {
  let result = error('error');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
let bar: never = error('onlyme');
