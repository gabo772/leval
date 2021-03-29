
/*  window.addEventListener('scroll',()=>{
   const scrolled = window.scrollY
   
   console.log(scrolled);
 })
*/

const filtroMostrarOcultar=(elemento,accion)=>{
    
    if(accion==="ocultar"){
        elemento.setAttribute("hidden",true)
        console.log("ocultar");
    }else if(accion==="mostrar"){
        elemento.removeAttribute("hidden")
        console.log("mostrar");
    }
}

const mostrarOcultarNavegador=(accion)=>{
    
    let navigator=document.querySelector(".navigator")
    filtroMostrarOcultar(navigator,accion)
    let navLeft=document.querySelector(".nav-left")
    filtroMostrarOcultar(navLeft,accion)
    let navRight=document.querySelector(".nav-right")
    filtroMostrarOcultar(navRight,accion)

    let itemInicio=document.getElementsByClassName("item inicio")[0]
    filtroMostrarOcultar(itemInicio,accion)
    let aInicio=itemInicio.children[0]
    console.log(aInicio);
    filtroMostrarOcultar(aInicio,accion)
    let itemQS=document.getElementsByClassName("item quienes-somos")[0]
    filtroMostrarOcultar(itemQS,accion)
    let aQS=itemQS.children[0]
    filtroMostrarOcultar(aQS,accion)
    
    let itemMision=document.getElementsByClassName("item mision")[0]
    filtroMostrarOcultar(itemMision,accion)
    let aMision=itemMision.children[0]
    filtroMostrarOcultar(aMision,accion)
   
    let itemVision=document.getElementsByClassName("item vision")[0]
    filtroMostrarOcultar(itemVision,accion)
    let aVision=itemVision.children[0]
    filtroMostrarOcultar(aVision,accion)
    
    let itemContactenos=document.getElementsByClassName("item contactenos")[0]
    filtroMostrarOcultar(itemContactenos,accion)
    let aContactenos=itemContactenos.children[0]
    filtroMostrarOcultar(aContactenos,accion)
}

const createMenuHamburger=()=>{
    let menuContainer=document.createElement("div")
    menuContainer.className="menu-hamburger"

}






const ocultar_mostrar_menu=(x)=>{
  let hamburger_ico=document.getElementsByClassName("hamburger")[0]
  if(x.matches){
    hamburger_ico.removeAttribute("hidden")
    mostrarOcultarNavegador("ocultar")
    console.log("menor que 768px");
  }else{
    hamburger_ico.setAttribute("hidden",true)
    mostrarOcultarNavegador("mostrar")
    console.log("mayor que 768px");
  } 

}
var x = window.matchMedia("(max-width: 768px)")
ocultar_mostrar_menu(x)
x.addEventListener("change",ocultar_mostrar_menu)


/* ###########################  TRANSICIONES  ###############################*/

var flag = true

window.addEventListener("scroll",()=>{
    let limite=244
    let y = window.scrollY
    let width = document.body.clientWidth
    if(width<=768){
        limite=143
    }
    
    console.log(y);
    if(flag && y>=limite){
        myFunc(y,limite)
        flag=false
    }
    if(!flag && y<limite){
        flag=true
        myFunc(y,limite)
    }
})

const myFunc=(scrollY,limite)=>{
    let headerScroll,navigatorScroll
    if(scrollY<limite ){
        
        
        if(document.querySelector(".header-scroll")){
            headerScroll=document.querySelector(".header-scroll")
            headerScroll.setAttribute("hidden",true)
        }
        if(document.querySelector(".header-scrollend")){
            headerScroll=document.querySelector(".header-scrollend")
            headerScroll.className="header-scroll"
            headerScroll.setAttribute("hidden",true)
        }
        if(document.querySelector(".navigator-scrollend")){
            navScroll=document.querySelector(".navigator-scrollend")
            navScroll.remove()
        }
        
        
    }else{
        headerScroll=document.querySelector(".header-scroll")
        headerScroll.removeAttribute("hidden")
        headerScroll.className="header-scrollend"

        //NAVIGATOR
        navScroll=document.querySelector(".navigator").cloneNode(true)
        navScroll.className="navigator-scroll"
        document.querySelector(".container").insertBefore(navScroll,document.querySelector(".c-inicio"))
        setTimeout(()=>{
            navScroll.className="navigator-scrollend"
        },1)
        //navScroll.className="navigator-scrollend"
        
       
    }
}




/*##############################################################################*/



ScrollReveal({ reset: true }).reveal('.imagen-inicio-correo', { delay: 100 })
ScrollReveal({ reset: true }).reveal('.imagen-inicio-mecanico', { delay: 100 })
ScrollReveal({ reset: true }).reveal('.imagen-quienes-somos', { delay: 100 })
ScrollReveal({ reset: true }).reveal('.inicio-h1', { delay: 300 })
ScrollReveal({ reset: true }).reveal('.quienes-somos-h1', { delay: 300 })
ScrollReveal({ reset: true }).reveal('.c-mision', { delay: 200 })
ScrollReveal({ reset: true }).reveal('.c-vision', { delay: 400 })




