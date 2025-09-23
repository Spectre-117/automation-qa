function checkOrder(available, ordered) {
    switch (true) {
        case ordered === 0:
            console.log("Your order is empty");
            break;
        case available < ordered:
            console.log("Your order is too large, we don’t have enough goods.");
            break;
        case available >= ordered:
            console.log("Your order is accepted");
            break;
        default:
            console.log("Unknown issue");
    }
}

// Using pattern Early return
function checkOrder2(available, ordered) {
    if (ordered === 0) {
        console.log("Your order is empty");
        return;
    }
    if (available < ordered) {
        console.log("Your order is too large, we don’t have enough goods.");
        return;
    }
    console.log("Your order is accepted");
}

checkOrder(5, 5);
checkOrder(5, 0);
checkOrder(5, 6);
checkOrder("5",);
console.log("---------------------");
checkOrder2(5, 5);
checkOrder2(5, 0);
checkOrder2(5, 6);