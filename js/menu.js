const  hamburguer =  document.querySelector('#menu');
 const menu =  document.querySelector('.menu');

  
 hamburguer.addEventListener('click',()=>{
 	menu.classList.toggle("propagar")
 })
 window.addEventListener('click',e=>{
 	/*console.log(e.target)muestre el elemento en consola*/
 	if (menu.classList.contains('propagar') && e.target != menu && e.target != hamburguer) {
 	menu.classList.toggle("propagar")
 	}
 })