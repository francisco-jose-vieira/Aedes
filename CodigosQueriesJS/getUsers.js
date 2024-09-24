const options = {method: 'GET', headers: {'User-Agent': 'insomnia/10.0.0'}};

fetch('http://localhost:3000/users', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));