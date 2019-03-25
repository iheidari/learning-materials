const withCounter = fn => {
  let counter = 0;
  return (...args) => {
    counter++;
    console.log(`ran ${counter} time`);
    return fn(...args);
  };
};

const add = (a, b) => {
  return a + b;
};

const addWithCounter = withCounter(add);

console.log(addWithCounter(2, 3));
console.log(addWithCounter(5, 1));
