import chalk from "chalk";

let circleRadius = 15;
console.log(chalk.blue(`Square of Circle with radius ${circleRadius} equals ${Math.PI*Math.pow(circleRadius,2)}`));
let rectangleLength =10;
let rectangleWidth = 20;
console.log(chalk.red(`Rectangle square with length ${rectangleLength} and width ${rectangleWidth} equals ${rectangleWidth*rectangleLength}`));
let cylinderRadius =5;
let cylinderLength =22;
console.log(chalk.yellow(`Volume of cylinder with radius ${cylinderRadius} and length ${cylinderLength} equals ${Math.PI*Math.pow(cylinderRadius,2)*cylinderLength}`));

