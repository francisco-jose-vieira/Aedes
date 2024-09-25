async function login(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('senha').value;

    try {
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
          };
          
        fetch('http://localhost:3000/users/login', options)
            .then(response => {
                if(!response.ok) {
                    document.getElementById('credencial-invalida').style.display = 'inline';
                    throw new error('usuário ou senha incorretos')
                }
                return response.json()
            })
            .then(response => {
                console.log(response)
                localStorage.setItem('userdata', response);
                window.location.href = "../Comentarios/index.html";
            })
            .catch(err => console.error(err));
    } catch (error) {
        console.error('Erro na requisição')
    }
}