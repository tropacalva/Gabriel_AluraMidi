function tocaSom (idElementoAudio)  {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

 while (contador<listaDeTeclas.length)   {
    const tecla = listaDeTeclas(contador);

   const instrumento = listaDeTeclas[contador].classList[1];
   //templete string
   
  
   const idAudio = '#som_${instrumento}'
   console.log(idAudio);
    tecla[contador].onclick = function() {

    tocaSom('#som_tecla_pom');

 }

 contador = contador +1;


 console.log(contador);
  
 }







