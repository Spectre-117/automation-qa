function mult(factor){
    return function (x){
        return x*factor;
    }
}

const name = mult(3);
console.log(name(8));
console.log(name(8));