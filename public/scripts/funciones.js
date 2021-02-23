function loadDoc(link) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("body").innerHTML = this.responseText;
      }
    };
    
    xhttp.open("GET", `http://localhost:3000/${link}`, true);
    xhttp.send();
  }



  window.addEventListener('scroll',()=>{
    const scrolled = window.scrollY
    
    console.log(scrolled);
  })

  

