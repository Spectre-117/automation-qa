const user1 = {
  firstName: 'JoHn',
};
const user2 = {
  firstName: 'John',
};

function isObjectsEqual(obj1, obj2) {
  for (const objKey in obj1) {
    if (obj1.hasOwnProperty(objKey)) {
      if (typeof obj1[objKey] === 'string') {
        if (
          obj1[objKey].localeCompare(
            obj2[objKey],
            'en',
            { sensitivity: 'base' },
          ) === 0
        ) {
          return true;
        }
      }
      if (obj1[objKey] !== obj2[objKey]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isObjectsEqual(user1, user2));

const str1 = 'Hello World';
const str2 = 'hello world';

console.log(str1.localeCompare(str2));
