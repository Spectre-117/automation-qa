function fetchToDoByID(id) {
  return fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

function fetchUserByID(id) {
  return fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

const responses = await Promise.all([
  fetchToDoByID('1'),
  fetchUserByID('1'),
]);

console.log(responses);

const responseFirst = await Promise.race([
  fetchToDoByID('1'),
  fetchUserByID('1'),
]);

console.log(responseFirst);
