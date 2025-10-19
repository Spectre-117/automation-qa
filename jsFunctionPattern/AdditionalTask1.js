/*
 * Імплементуйте функцію makeCounter, яка приймає число та повертає іншу функцію.
 * Ця повернена функція буде повертати число, що завжди більше попереднього на 5.
 * Щоразу, коли ви викликаєте цю функцію, вона повертає число, яке більше на 5, ніж попереднє.
 * Використовуючи механізм замикання, це можна легко вирішити.
 */
function makeCounter(num) {
  return function mult() {
    num += 5;
    return num;
  };
}

const myCounter = makeCounter(5);
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
