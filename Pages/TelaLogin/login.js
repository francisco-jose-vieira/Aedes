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
                localStorage.setItem('user_id', response.id)
                localStorage.setItem('user_name', response.display_name)
                localStorage.setItem('user_type', response.user_type)
                
                const user_type = localStorage.getItem('user_type')

                if (user_type == "normal"){
                    window.location.href = "/Comentarios/index.html";
                }
                else if (user_type == "admin"){
                    window.location.href = "/TelaADM/index.html";
                }
                else{
                    window.location.href = "/TelaMedico/index.html";
                }
            })
            .catch(err => console.error(err));
    } catch (error) {
        console.error('Erro na requisição')
    }
}