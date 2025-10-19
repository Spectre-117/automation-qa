import chalk from 'chalk';

const nameOne = 'Serhii';
const nameTwo = 'Anna';
console.log(
  chalk.blue(
    'Hello everyone. Please meet ' +
      nameOne +
      ' and ' +
      nameTwo,
  ),
);
console.log(
  chalk.red(
    `Hello everyone. Please meet ${nameOne} and ${nameTwo}`,
  ),
);
