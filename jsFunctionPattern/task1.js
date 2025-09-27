function handleEvenMain() {
    console.log("number is even");
}

function handleOddMain() {
    console.log("number is odd");
}

function handleNum(number, handleEven, handleOdd) {
    if (number % 2 === 0) {
        handleEven();
        return;
    }
    handleOdd();
}

handleNum(5, handleEvenMain, handleOddMain);
handleNum(4, handleEvenMain, handleOddMain);
handleNum(0, handleEvenMain, handleOddMain);
handleNum(-3, handleEvenMain, handleOddMain);
handleNum(-8, handleEvenMain, handleOddMain);