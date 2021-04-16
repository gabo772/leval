
/*  window.addEventListener('scroll',()=>{
   const scrolled = window.scrollY
   
   console.log(scrolled);
 })
*/

// INTERACTIBILIDAD MENU HAMBURGER

var menuHamburgerAbierto=false


const createMenuHamburger=()=>{
    let items=[
        "Inicio",
        "Quienes somos",
        "Misión",
        "Visión",
        "Contáctenos"
    ]
    let menuContainer=document.createElement("div")
    
    menuContainer.className="menu-hamburger"
   
    for(i=0; i<5;i++ ){
        let item = document.createElement("div")
        let a= document.createElement("a")
        a.innerText=items[i]
        a.href="#"
        item.className="item-menu"
        item.appendChild(a)
        menuContainer.appendChild(item)
    }
    document.querySelector(".container").insertBefore(menuContainer,document.querySelector(".c-inicio"))

}


const toogleHamburger=async()=>{
    console.log("onclick triggered");
    if(!menuHamburgerAbierto){
        createMenuHamburger()
        let menu=document.querySelector(".menu-hamburger")
        
        setTimeout(()=>{
            menu.className="menu-hamburgerend"
            
            menuHamburgerAbierto=true
            
        },10)
        

        
    }else{
        let menu=document.querySelector(".menu-hamburgerend")
        
        await setearClase(menu,"menu-hamburger")
        
        setTimeout(()=>{
            menu.remove()
            menuHamburgerAbierto=false
        },500)
        
    }
}


const setearClase=(elemento,nombre_clase)=>{
    return new Promise((resolve,reject)=>{
        elemento.className=nombre_clase
        resolve()
        
    })
}


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

const eliminarMenuHamburger=()=>{
    if(document.querySelector(".menu-hamburgerend")){
        document.querySelector(".menu-hamburgerend").remove()
        menuHamburgerAbierto=false
    }
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
    eliminarMenuHamburger()
    console.log("mayor que 768px");
  } 

}
var x = window.matchMedia("(max-width: 768px)")
ocultar_mostrar_menu(x)
x.addEventListener("change",ocultar_mostrar_menu)













/* ###########################  TRANSICIONES  ###############################*/

var flag = true

window.addEventListener("scroll",()=>{
    // Limite es el valor el cual se despliega el nav estático 
    let limite=220
    let y = window.scrollY
    let width = document.body.clientWidth
    
    
    console.log(y);

    if(y>=220 && y<2954){
        //INICIO
    }else if(y>=2954 && y<4279){
        //QUIENES SOMOS
    }else if(y>=4279 && y<4438){
        //MISION
    }else if (y>=4438 && y<4862){
        //VISION
    }else if(y>4862){
        //CONTACTENOS
    }


    if(width>768){
        if(flag && y>=limite){
            myFunc(y,limite)
            flag=false
        }
        if(!flag && y<limite){
            flag=true
            myFunc(y,limite)
        }
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




