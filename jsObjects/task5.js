const users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'jd@gmail.com',
    age: 24,
  },
  {
    firstName: 'Sam',
    lastName: 'Smith',
    email: 'ss@gmail.com',
    age: 33,
  },
];

for (const {
  firstName,
  lastName,
  email,
  age,
} of users) {
  console.log(
    `first name: ${firstName}, last name: ${lastName}, email: ${email}, age: ${age}`,
  );
}
