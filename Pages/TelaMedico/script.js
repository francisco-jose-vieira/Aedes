function abrirModal() {
   const modal = document.getElementById("modal")
   modal.classList.add('abrir')

   modal.addEventListener('click', (e) => {
      if(e.target.id == 'fechar') {
         modal.classList.remove('abrir')
      }
   })
}

async function fetch_comments(event) {
   event.preventDefault();

   try {
       const options = {
           method: 'GET',
           headers: {'Content-Type': 'application/json'},
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
           })
           .catch(err => console.error(err));
   } catch (error) {
       console.error('Erro na requisição')
   }
}