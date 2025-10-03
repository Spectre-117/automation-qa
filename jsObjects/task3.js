const car1 = {
    brand: "Volkswagen",
    model: "Golf",
    year: 2012
}
const car2 = {
    brand: "Skoda",
    model: "Superb",
    owner: "Serhii"
}

const car3 = {...car1, ...car2};

console.log(car3);