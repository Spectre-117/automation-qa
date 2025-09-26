let divide = function (numerator, denominator) {
    if (denominator === 0) {
        throw new Error("denominator can't equal 0");
    }
    if (typeof denominator !== "number" || typeof numerator !== "number") {
        throw new Error("Yuo have to use only numbers");
    }
    return (numerator / denominator).toFixed(2);
}

try {
    console.log(divide(5, 3));
} catch (error) {
    console.log("Error happened!!!", error.message);
} finally {
    console.log("End of the function call");
}
console.log("-----------------");
try {
    console.log(divide(5, 0));
} catch (error) {
    console.log("Error happened!!!", error.message);
} finally {
    console.log("End of the function call");
}
console.log("-----------------");
try {
    console.log(divide(5, "ftyh"));
} catch (error) {
    console.log("Error happened!!!", error.message);
} finally {
    console.log("End of the function call");
}
console.log("-----------------");
try {
    console.log(divide("ftyh", 10));
} catch (error) {
    console.log("Error happened!!!", error.message);
} finally {
    console.log("End of the function call");
}