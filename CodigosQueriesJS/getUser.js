const options = {method: 'GET', headers: {'User-Agent': 'insomnia/10.0.0'}};

fetch('http://localhost:3000/users/1', options) //1 é o id do usuário, que é variável
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));