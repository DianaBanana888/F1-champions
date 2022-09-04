fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((r) => console.log('1', r, r.json()))
  .then((r) => r.json())
  .then((data) => console.log(data))
  .catch((e) => console.log('error'));
