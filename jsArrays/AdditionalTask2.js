/*
 * Імплементуйте функцію getNumbersAverage, яка приймає масив з числами.
 * Задача: вирахувати та повернути середнє значення чисел у масиві.
 * Очікуваний результат: Середнє значення - сума всіх чисел у масиві поділена на кількість цих чисел у масиві
 * Примітка: Якщо середнє значення не є цілим числом - його треба округлити до найближчого цілого числа
 */

function getNumbersAverage(numbersList) {
  let sum = 0;
  for (const element of numbersList) {
    sum += element;
  }
  return Math.round(sum / numbersList.length);
}

const numbersOne = [
  2, 3, 7, 45, 789, 45, 66, -9, 0, 44, 1, -765,
  -867,
];
console.log(getNumbersAverage(numbersOne));
