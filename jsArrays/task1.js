const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0, negativeCount = 0, zeroCount = 0;
for (let i = 0; i < numbers.length - 1; i++) {
    switch (true) {
        case (numbers[i] < 0):
            negativeCount++;
            break;
        case (numbers[i] > 0):
            positiveCount++;
            break;
        case (numbers[i] === 0):
            zeroCount++;
            break;
        default:
            console.log("Array element with index " + i + " is not a number");
    }
}
console.log("Кількість позитивних чисел: " + positiveCount);
console.log("Кількість негативних чисел: " + negativeCount);
console.log("Кількість нульових чисел: " + zeroCount);