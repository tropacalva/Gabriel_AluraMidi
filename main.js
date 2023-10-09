function tocaSom (idElementoAudio)  {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

 while (contador<listaDeTeclas.length)   {
    const tecla = listaDeTeclas(contador);

   const instrumento = listaDeTeclas[contador].classList[1];
   //templete string
   const idAudio = `#som_${instrumento}`
  //console.log(idAudio);

    lista.onclick = function() {

    tocaSom(idAudio);

 }

 contador = contador +1;

 //console.log(contador);
  
 tecla.onkeydown = function () {

    tecla.classList.add('ativa');
 } 
 tecla.onkeyup = function () {
    tecla.claasList.remove('ativa');
    
 }

 }







