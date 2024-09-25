function add_posts(response_json)
{
    const container = document.getElementById("container-posts")
    container.innerHTML = ''

    for (var i=0; i<response_json.length; i++){
        let postdata = response_json[i]
        container.innerHTML += `
            <div class="commit">
                <div class="commit-left">
                    <img class="imgPerfil" src="imgs/imgPerfil.svg" alt="">
                    ${postdata.user_id}
                    <div>
                        <img src="imgs/like.png" alt="">
                        <img src="imgs/dislike.png" alt="">
                    </div>
                </div>

                <div class="commit-right">
                    <p>
                        ${postdata.content}
                    </p>
                </div>
            </div>`    
    }
}

try {
    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
        };
        
    fetch('http://localhost:3000/posts/0', options)
        .then(response => {
            return response.json()
        })
        .then(response => {
            console.log(response)
            add_posts(response)
        })
        .catch(err => console.error(err));
} catch (error) {
    console.error('Erro na requisição')
}