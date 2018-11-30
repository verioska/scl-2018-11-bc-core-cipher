window.cipher = {
  encode: (strng,offset1) => {
    offset1 = parseInt(offset1)
    let total=[];    //Vvariable local
    for(i=0; i< strng.length;i++) {




      let ascii= strng.charCodeAt(i);
      if(ascii>=65 && ascii<=90)
      {                //variable local
        let resultado=(ascii-65+offset1) %26+65;
        let resultadofinal=String.fromCharCode(resultado);
        total.push(resultadofinal);
      }

      else {
        alert("caracter no valido")
        return ;
      }
    }
    let total1Joined=total.join("");
    return total1Joined;
  },



  decode: (strng1,offset1) => {

    let total=[];    //Vvariable local
    for(i=0; i< strng1.length;i++) {


      let ascii= strng1.charCodeAt(i);
      if(ascii>=65 && ascii<=90){
        let resultado=(ascii-90-offset1) %26+90 ;
        let resultadofinal=String.fromCharCode(resultado);
        total.push(resultadofinal);
      }


      else {

        return;
      }
    }
    let total1Joined=total.join("");
    return total1Joined;
  }
};
