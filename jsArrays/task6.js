const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const copiedNumbersList = [...numbersList];
//const copiedNumbersList = Array.from(numbersList);
//const copiedNumbersList = [].concat(numbersList);
//const copiedNumbersList = numbersList.slice();
copiedNumbersList.sort((a, b) => a - b);
console.log(numbersList);
console.log(copiedNumbersList);
