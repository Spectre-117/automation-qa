const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 34,
};

person.email = 'slia@gmail.com';
delete person.age;
console.log(person);
