//window.onload = ()=> {


const botonComenzar1 = document.getElementById("botonComenzar1");
const botonComenzar2 = document.getElementById("botonComenzar2");
const main = document.getElementById("main");

botonComenzar1.addEventListener("click",function(){


  main.innerHTML=`<p align='center'> Ingresa tu mensaje que deseas cifrar<p>
  <p align='center'> NOTA: No debes ingresar letras minuscula, ni caracteres, ni la letra ñ<p>
  <p align='center'><textarea id="mensaje" rows="5" cols="70"></textarea><p>
  <p align='center'> Ingrese el numero de recorrido<p>
  <p align='center'> NOTA: No debes ingresar numeros negativos<p>
  <p align='center'><textarea id="offset" rows="1" cols="3"></textarea><p>



  <center>
  <button id="botonOk" onclick="next()">Siguiente</button>



  <button id="buttonBack" onclick=location=URL> Volver al inicio </button>
  <center>`;


});
function next(){
  let strng = document.getElementById("mensaje").value;
//  console.log(strng);
  let offset1 = document.getElementById("offset").value;
  //console.log(offset1)


  main.innerHTML=`<p align='center'> Tu mensaje codificado es: <br><br><br>${window.cipher.encode(strng,offset1)} <br><br><br><p>
  <center>


  <button id="buttonBack" onclick=location=URL> Volver al inicio </button>
  <center>`;




};


botonComenzar2.addEventListener("click",function(){

  main.innerHTML=`<p align='center'>Ingresa tu mensaje que deseas decodificar<p>
  <p align='center'> NOTA: No debes ingresar letras minuscula, ni caracteres, ni la letra ñ<p>
  <p align='center'><textarea id="mensajedecodificado" rows="5" cols="70"></textarea><p>
  <p align='center'> Ingrese el numero de recorrido<p>
  <p align='center'> NOTA: No debes ingresar numeros negativos<p>
  <p align='center'><textarea id="offset1" rows="1" cols="3"></textarea><p>



  <center>
  <button id="botonOk" onclick="next1()">Siguiente</button>

  <button id="buttonBack" onclick=location=URL> Volver al inicio </button>
  <center>`;



});
function next1(){
  let strng1 = document.getElementById("mensajedecodificado").value;
  //console.log(strng1);
  let offset1 = document.getElementById("offset1").value;
  console.log(window.cipher.decode(strng1,offset1));

  main.innerHTML=`<p align='center'> Tu mensaje decodificado es:<br><br><br>${window.cipher.decode(strng1,offset1)}<p>

  <center>
  <button id="buttonBack" onclick=location=URL> Volver al inicio </button>
  <center>`;

}
