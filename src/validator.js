const validator = {
  // Algoritmo de Luhn
  //1. Tomar numero original/tarjeta
  //2. Reversar numero
  //3. Doblar cada segundo digito (indice par)
  //3.1 Sumar los digitos mayores a 9
  //4. Sumar todos los digitos, si es divisible para 10 es un numero valido

  isValid(str) {
    //revertir numero
    const strReverse = str.split('').reverse().join('');
    // console.log('reverse', strReverse);
    const parIndex = [];
    const imparIndex = [];
    for (let i = 0; i < strReverse.length; i++) {
      let multPar = 0;
      //multiplicar numeros de indice par por 2
      if (i % 2 !== 0) {
        multPar = strReverse[i] * 2;
        // console.log('multPar',multPar);
        //separamos los valores de dos digitos y sumamos
        // console.log('prueba', multPar.toString().split(''))
        const splitPar = multPar.toString().split('');
        // console.log('splitPar',splitPar);
        parIndex.push(splitPar);
      } else {
        imparIndex.push(strReverse[i]);
      }
    }
    // console.log('parIndex', parIndex.flat());
    // console.log('imparIndex', imparIndex);
    //pasar de string a numero
    const parNumbers = parIndex.flat().map(e => parseInt(e));
    // console.log('parNumbers', parNumbers);
    const imparNumbers = imparIndex.map(e => parseInt(e));
    // console.log('imparNumbers', imparNumbers);
    const arrTotal = parNumbers.concat(imparNumbers);
    // console.log(arrTotal);
    const sumaArr = arrTotal.reduce((a, b) => a + b);
    // console.log(sumaArr);

    // validar que el modulo de la suma sea 0, que el valor sea diferente de 0 
    // y que el numero sea mayor a 12  && (parNumbers.length >12)
    if ((sumaArr % 10 === 0) && (sumaArr !== 0)) {
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
