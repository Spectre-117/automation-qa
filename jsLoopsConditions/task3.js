const number = 9;

console.log("Multiplication table on \'for\' loop");
for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}
console.log("Multiplication table on \'while\' loop");
let j = 1;
while (j <= 10) {
    console.log(`${number} * ${j} = ${number * j}`)
    j++;
}