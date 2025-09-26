function executeDescendingCounter(number) {
    if (number <= 0) {
        console.log(number);
        return 0;
    }
    console.log(number);
    executeDescendingCounter(number - 1);
}

executeDescendingCounter(5);
