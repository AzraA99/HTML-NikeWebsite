  function validacijaForme() {
    
    
    if(document.forma.message.value == "") {
      alert("Unesite sve podatke!");

      return false;

    } 
    
    if(document.forma.email.value == "") {
      alert("Unesite sve podatke!");

      return false;

    } 

    var godine = document.forma.number.value;

    if (godine == "") {
      alert("Unesite sve podatke!");
      
      return false;
    }
    
    if (document.forma.name.value == "") {
      alert("Unesite sve podatke!");
    

  }
}