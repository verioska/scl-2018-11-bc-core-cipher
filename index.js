//window.onload = ()=> {

const botonComenzar1 = document.getElementById("botonComenzar1");
const botonComenzar2 = document.getElementById("botonComenzar2");
const main = document.getElementById("main");
const siguiente=document.getElementById("oculto1");
const ocultmain=document.getElementById("main");
const resul1=document.getElementById("resul1");
const siguientedecode=document.getElementById("oculto2");
const botonregresa=document.getElementById("buttoBack");
const botonregresa1=document.getElementById("buttoBack2");
const x=document.getElementById("resultado2");
//const xx=document.getElementById("resultado3");



botonComenzar1.addEventListener("click",function(){
  siguiente.style.display = "block"; 
  ocultmain.style.display="none";
  
  
});


document.getElementById("botonOk").addEventListener("click",function(){

  let strng = document.getElementById("mensaje").value;
  let offset1 = document.getElementById("offset").value;
  
  document.getElementById("resul2").innerHTML=`<p align='center'> Tu mensaje descifrado es:<br><br><br>${window.cipher.encode(strng,offset1)}</p>`;
  main.style.display = "none";
  siguiente.style.display = "none";
  resul1.style.display ="block";
  botonregresa.style.display="block";
})

botonComenzar2.addEventListener("click",function(){
    siguientedecode.style.display = "block";
    ocultmain.style.display="none";
});



//const resul=document.getElementById("resultado2");
document.getElementById("botonOk1").addEventListener("click",function(){

  let strng1 = document.getElementById("mensajedecodificado").value;
  let offset1 = document.getElementById("offset1").value;
  

  document.getElementById("resultado3").innerHTML=`<p align='center'> Tu mensaje descifrado es:<br><br><br>${window.cipher.decode(strng1,offset1)}</p>`;
  
  main.style.display = "none";
  siguientedecode.style.display = "none";
  ocultmain.style.display="none";
  botonregresa1.style.display = "block";
});

botonregresa.addEventListener("click",function(){

  ocultmain.style.display="block";
  resul1.style.display = "none"; 
});

document.getElementById("buttonBack").addEventListener("click",function(){

  ocultmain.style.display="block";
  siguiente.style.display = "none"; 
});
//boton volrver al inicio de la parte descifrar , despues que muestra el resultado final

botonregresa1.addEventListener("click",function(){

  main.style.display = "block";
  x.style.display = "none";
  
  

});
//boton siguiente de descifrar
document.getElementById("botonOk1").addEventListener("click",function(){
main.style.display = "none";
x.style.display = "block";
});
//boton volver al inicio de la parte descifrar
document.getElementById("buttonBack1").addEventListener("click",function(){
  main.style.display = "block";
  siguientedecode.style.display ="none";
});

