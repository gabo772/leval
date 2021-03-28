
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
    console.log("mayor que 768px");
  } 

}
x.addEventListener("",ocultar_mostrar_menu)


/* ###########################  TRANSICIONES  ###############################*/

var flag = true

window.addEventListener("scroll",()=>{
    let y = window.scrollY
    console.log(y);
    if(flag && y>=270){
        myFunc(y)
        flag=false
    }
    if(!flag && y<270){
        flag=true
        myFunc(y)
    }
})

const myFunc=(scrollY)=>{
    let headerScroll,navigatorScroll
    if(scrollY<270 ){
        
        
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




