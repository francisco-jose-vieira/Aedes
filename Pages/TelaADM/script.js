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
                  ${postdata.author_name}
                  <div>
                     <img src="imgs/like.png" alt="">
                     <img src="imgs/dislike.png" alt="">
                  </div>
               </div>

               <div class="commit-right">
                  <p>${postdata.content}</p>
                  <div class="btn-responder">
                     <button onclick="abrirModal(${postdata.id})" type="submit">
                           Excluir
                     </button>
                  </div>
               </div>
         </div>`
   }
}

async function delete_comment(post_id) {

   try {
      const options = {
         method: 'DELETE',
         headers: {'Content-Type': 'application/json'}
         // body: JSON.stringify({user_id, content, parent_post_id})
         };
         
      fetch(`http://localhost:3000/posts/${post_id}`, options)
         .then(response => {
               if(!response.ok) {
                  throw new error('erro no processamento dos dados')
               }
               return response.json()
         })
         .then(response => {
               console.log(response)
         })
         .catch(err => console.error(err));
   } catch (error) {
      console.error('Erro na requisição')
   }
}

function abrirModal(id_post) {
   const modal = document.getElementById('modal')

   modal.classList.add('abrir')

   modal.addEventListener('click', (e) => {
      if(e.target.id == 'cancelar') {
         modal.classList.remove('abrir')
      }
      else if(e.target.id == 'enviar'){
         delete_comment(id_post)
         modal.classList.remove('abrir')
         fetch_posts()
      }
   })
}

async function fetch_posts()
{
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
}

document.getElementById("user-name").innerText = localStorage.getItem("user_name")
fetch_posts()