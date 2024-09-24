const options = {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/10.0.0'},
    body: 'false'
  };
  
  fetch('http://localhost:3000/posts/11', options) //11 é o id do post removido, que é variável
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));