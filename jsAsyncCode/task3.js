async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function fetchToDoByID(id) {
  try {
    const res = await fetchData(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
    );
    console.log(res);
  } catch (error) {
    console.log('Error', error);
  }
}

async function fetchUserByID(id) {
  try {
    const res = await fetchData(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    console.log(res);
  } catch (error) {
    console.log('Error', error);
  }
}

fetchToDoByID(1);
fetchUserByID(1);
