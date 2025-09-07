//let a = 5;
//console.log(a*2);

import chalk from 'chalk';
import {failed,passed,flucky} from './constants.js';

console.log(chalk.blue('Greetings page testing result!'));
console.log(chalk.green('Passed: ',passed));
console.log(chalk.red('Failed: ', failed));
console.log(chalk.yellow('Flucky: ',flucky));