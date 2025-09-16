import chalk from "chalk";

const circleRadius = 15;
console.log(chalk.blue(`Square of Circle with radius ${circleRadius} equals ${(Math.PI*Math.pow(circleRadius,2)).toFixed(2)}`));
const rectangleLength =10.3;
const rectangleWidth = 20.74;
console.log(chalk.red(`Rectangle square with length ${rectangleLength} and width ${rectangleWidth} equals ${(rectangleWidth*rectangleLength).toFixed(2)}`));
const cylinderRadius =5;
const cylinderLength =22;
console.log(chalk.yellow(`Volume of cylinder with radius ${cylinderRadius} and length ${cylinderLength} equals ${(Math.PI*Math.pow(cylinderRadius,2)*cylinderLength).toFixed(2)}`));

