const options = {
    method: 'GET',
    headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/10.0.0'},
    body: 'false'
  };
  
  fetch('http://localhost:3000/posts', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));