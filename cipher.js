window.cipher = {
  encode: (strng,offset1) => {
    offset1 = parseInt(offset1)
    let total=[];    //Vvariable local



   if(offset1>=0 && typeof offset1==="number" ){

         for(let i=0; i< strng.length;i++) {

            let ascii= strng.charCodeAt(i);

            if (ascii===32){
                total.push(String.fromCharCode(ascii))
          }
          else if (ascii>=65 && ascii<=90 ){

                let resultado=(ascii-65+offset1) %26+65;
                let resultadofinal=String.fromCharCode(resultado);
                total.push(resultadofinal);
               //let totalJoined=total.join("");

          } else {
                alert("caracter no valido")
                return "ESO NO SE HACE";
          }

                                   } //llave for
        let totalJoined=total.join("");
       return totalJoined;
     }//lave if mayor
   else {
     alert("EL NUMERO ES NEGATIVO ")
     return "ESO NO SE HACE";
       }
}, //LLAVE DE ENCODE



  decode: (strng1,offset1) => {

  let total=[];

  if(offset1<0){

    alert('El NUMERO ES NEGATIVO ')
    return " ";
  }



             for(let i=0; i< strng1.length;i++) {

                let ascii= strng1.charCodeAt(i);

                  if (ascii===32){
                    total.push(String.fromCharCode(ascii))
              }
              else if (ascii>=65 && ascii<=90 ){

                    let resultado=(ascii-90-offset1) %26+90;
                    let resultadofinal=String.fromCharCode(resultado);
                    total.push(resultadofinal);
                  //  let totalJoined=total.join("");

              } else {
                    alert("caracter no valido")
                    return "ESO NO SE HACE";
              }
            }
           let totalJoined=total.join("");                                  //llave for
           return totalJoined;
}
};
