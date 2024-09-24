const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/10.0.0'},
    body: '{"email":"gabriel@example.com","password":"senha123","display_name":"gabriel123","user_type":"normal"}'
  };
  
  fetch('http://localhost:3000/users', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));