const validator = {
  // ...
  isValid(str) {
    //funcion con el algoritmo de luhn
    //revierte numero ingresado 
    const strReverse = str.split('').reverse().join('');
    //console.log(strReverse);
    //console.log(typeof strReverse);
    //ingresa en const par numeros de un indice
    const par = [];
    let sumaPar = 0;
    for (let i = 0; i < strReverse.length; i++) {
      let multPar = 0;
      //si es indice par multiplica por 2
      if (i % 2 !== 0) {
        multPar = strReverse[i] * 2;
        //toma el primer digito de un numero 
        //console.log(multPar);
        const splitPar = parseInt(multPar.toString().split(''));
        //console.log(splitPar);
        par.push(splitPar);
        //toma el segundo digito si el numero tiene dos digitos
        if (multPar > 9) {
          sumaPar = parseInt(multPar.toString().charAt(1))

          //console.log(suma);
          par.push(sumaPar)
        }
      } else {
        //si es indice impar va directo a const par despues de *1
        multPar = strReverse[i] * 1;

        par.push(multPar);
      }

    }
    //console.log(par);
    //va sumando cada numero
    let sumaArr = 0;
    for (let i = 0; i < par.length; i++) {
      sumaArr += par[i]; //sumaArr = sumaArr + par[i]
    }
    //console.log(sumaArr);
    //valida que el modulo de 10 de la suma sea 0, que el valor sea diferente de 0 
    //y que el numero sea mayor a 12
    if ((sumaArr % 10 === 0) && (sumaArr !== 0) && (par.length >12)) {
      //console.log("Tarjeta valida");
      return true;
    }
    return false;
  },

  maskify(str) {
    //clases caracteres: el . significa coincidir con cualquier caracter
    //g hace una busqueda global
    //esta funcion oculta numeros excepto los ultimos 4
    const ocultar = str.slice(0, -4).replace(/./g, '#');
    //console.log(ocultar);
    const ver = str.slice(-4);
    //console.log(ver);
    const numero = ocultar + ver;
    //console.log(numero);
    return numero;
  }
};

export default validator;


