function createOuterCounter() {
  let count = 0;
  return function createInnerCounter() {
    count++;
    console.log(count);
  };
}

let counter = createOuterCounter();
counter();
counter();
counter();
