try {
    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
        };
        
    fetch('http://localhost:3000/posts/null', options)
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

`<div class="commit">
    <div class="commit-left">
        <img class="imgPerfil" src="imgs/imgPerfil.svg" alt="">
        <div>
            $1
            <img src="imgs/like.png" alt="">
            <img src="imgs/dislike.png" alt="">
        </div>
    </div>

    <div class="commit-right">
        <p>
            $2
        </p>
    </div>
</div>
`