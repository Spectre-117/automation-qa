/*
* Імплементуйте функцію генератор fibonacciGenerator, який повертає послідовні числа Фібоначчі.
* Функція повинна генерувати числа Фібоначчі починаючи з 0.
* Числа повинні генеруватися по одному за раз.
* Перевірка виконується викликом методу next() генератора.
* Перевірка виконується для перших 10 чисел Фібоначчі.
* Очікуванні значення: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
*/

function* fibonacciGenerator() {
    let a0 = 0;
    let a1 = 1;
    yield a0;
    yield a1;
    for (let i = 0; i < 8; i++) {
        const a3 = a0 + a1;
        yield a3;
        a0 = a1;
        a1 = a3;
    }
}

const generator = fibonacciGenerator();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());