


/*  window.addEventListener('scroll',()=>{
   const scrolled = window.scrollY
   
   console.log(scrolled);
 })
*/


var x = window.matchMedia("(max-width: 768px)")

var elem=document.getElementsByClassName("hamburger")[0]

function ocultar_mostrar_menu(x){
  if(x){
    elem.removeAttribute("hidden")
    console.log("menor que 768px");
  }else{
    elem.setAttribute("hidden")
    onsole.log("mayor que 768px");
  } 

}
x.addEventListener("",ocultar_mostrar_menu)

ScrollReveal({ reset: true }).reveal('.imagen-inicio-correo', { delay: 100 })
ScrollReveal({ reset: true }).reveal('.imagen-inicio-mecanico', { delay: 100 })
ScrollReveal({ reset: true }).reveal('.imagen-quienes-somos', { delay: 100 })
ScrollReveal({ reset: true }).reveal('.inicio-h1', { delay: 300 })
ScrollReveal({ reset: true }).reveal('.quienes-somos-h1', { delay: 300 })
ScrollReveal({ reset: true }).reveal('.c-mision', { delay: 200 })
ScrollReveal({ reset: true }).reveal('.c-vision', { delay: 400 })




