const initialArray = [1, 2, 3, 4, 5];
const arrayMutant = initialArray.map(
  (element) =>
    element * initialArray.indexOf(element),
);
console.log(arrayMutant);
