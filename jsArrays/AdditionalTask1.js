/* Імплементуйте функцію `filterGreaterThanValue`, яка приймає число minValue та масив з числами numbersList.
* Функція має повертати новий масив який містить лише числа більші за передане minValue.
*/

function filterGreaterThanValue(minValue, numbersList) {
    return numbersList.filter((element) => element > minValue);
}

const minValue = 5;
const numbersList = [1, 18, 14, 22, 6, 5, 11, -22, 23, 18];

console.log(filterGreaterThanValue(minValue, numbersList));