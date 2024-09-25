// postar um post :)
async function post_post() {

    const user_id = localStorage.getItem("user_id")
    const content = document.getElementById("text-area-comment").value
    const parent_post_id = null

    try {
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user_id, content, parent_post_id})
          };
          
        fetch('http://localhost:3000/posts', options)
            .then(response => {
                if(!response.ok) {
                    throw new error('Erro no processamento dos dados')
                }
                return response.json()
            })
            .then(response => {
                console.log(response)
                window.location.href = "/Comentarios/index.html";
            })
            .catch(err => console.error(err));
    } catch (error) {
        console.error('Erro na requisição')
    }
}

document.getElementById("user-name").innerText = localStorage.getItem("user_name")