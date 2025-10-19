function getUserByID (id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data)
    });
}

getUserByID(2);


function printLine() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve("This string will be printed")},2000);
    })
}
console.log("this line in code is before function with promise");
printLine().then((value) => {console.log(value)
return value+"!"}).then((value) => {console.log(value)})
console.log("this line in code is after function with promise");