
  function validationRequiredInput () {
  let nome = document.getElementById("nome");
  let email = document.getElementById("email");
  

  if (nome.value != '' && email.value != '') {
      document.getElementById("popup").style.display = "block";
      
  }

  }
  function closePopup() {
    document.getElementById("popup").style.display = "none";

    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    

    nome.value= '';
    email.value= '';
    
    
    
  } 
