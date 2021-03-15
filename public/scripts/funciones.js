


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


window.addEventListener("scroll",(e)=>{
  y = window.scrollY
  nclass=document.getElementsByClassName("navigator")
  hclass=document.getElementsByClassName("header")
  console.log(y);
  if(y<=278){
    nclass.className="navigator"
    hclass.className="header"
  }else{
    nclass.className="navigator-scroll"
    hclass.className="header-scroll"


    console.log("cambia clase a scroll");
    console.log(hclass);
  }

})

// if(document.getElementsByClassName("navigator-scroll")[0]){
//   document.getElementsByClassName("navigator-scroll")[0].addEventListener("transitionend",updateTNavigator,true)

// }
// if(document.getElementsByClassName("header-scroll")[0]){

//   document.getElementsByClassName("header-scroll")[0].addEventListener("transitionend",updateTHeader,true)
// }

// const updateTNavigator=()=>{
//   var el = document.querySelector("div.navigator-scroll");
//   el.className = "navigator-scroll-end";
    
// }

// const updateTHeader=()=>{
//   var el = document.querySelector("div.header-scroll");
//   el.className = "header-scroll-end";
    
// }

ScrollReveal({ reset: true }).reveal('.imagen-inicio-correo', { delay: 100 })
ScrollReveal({ reset: true }).reveal('.imagen-inicio-mecanico', { delay: 100 })
ScrollReveal({ reset: true }).reveal('.imagen-quienes-somos', { delay: 100 })
ScrollReveal({ reset: true }).reveal('.inicio-h1', { delay: 300 })
ScrollReveal({ reset: true }).reveal('.quienes-somos-h1', { delay: 300 })
ScrollReveal({ reset: true }).reveal('.c-mision', { delay: 200 })
ScrollReveal({ reset: true }).reveal('.c-vision', { delay: 400 })




