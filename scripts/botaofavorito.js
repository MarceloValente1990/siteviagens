
  function abrirPopup () {
     document.getElementById("popup").style.display = "block";
  }

  function closePopup() {
     document.getElementById("popup").style.display = "none";
     document.getElementById("heart-btn").classList.add('clicado');  
  } 
  
  function removeFav() {
    if(document.getElementById("heart-btn").classList.contains("clicado")){
        document.getElementById("popup").style.display = "none";
        document.getElementById("heart-btn").classList.remove('clicado'); 
    }
  }