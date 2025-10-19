const name = 'Serhii';
const age = 34;
const isTester = true;
const personalProject = undefined;
const asteroidsInSystem = 1234567890n;
const highestMark = Symbol('A');
const carObject = null;

console.log('My name is ', name);
console.log("I'm ", age);
console.log(
  'My current job is tester: ',
  isTester,
);
console.log(
  `Status of personal project: ${personalProject}`,
);
console.log(
  `I\'ve sold my car. My current car: ${carObject}`,
);
console.log(
  'Solar system has such amount of asteroids: ',
  asteroidsInSystem,
);
console.log(
  'Highest mark at college is: ',
  highestMark.toString(),
);
