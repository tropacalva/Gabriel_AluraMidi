function tocaSom (idElementoAudio)  {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

 while (contador<listaDeTeclas.length)   {

   const instrumento = listaDeTeclas[contador].classList[1];
   
   console.log(instrumento);
  
 listaDeTeclas[contador].onclick = function() {
    
    tocaSom('#som_tecla_pom');

 }

 contador = contador +1;


 console.log(contador);
  
 }







