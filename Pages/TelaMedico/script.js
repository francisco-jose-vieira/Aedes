function abrirModal() {
   const modal = document.getElementById("modal")
   modal.classList.add('abrir')

   modal.addEventListener('click', (e) => {
      if(e.target.id == 'fechar') {
         modal.classList.remove('abrir')
      }
   })
}
