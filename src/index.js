import validator from './validator.js';
//llama a boton y agrega el evento click para que realice la funcion de luhn y devuelva msj
document.getElementById("btn").addEventListener("click", function () {
  //obtener inputs
  const valor = validator.isValid(document.getElementById("cardnumber").value);
  //console.log(valor);
  if (valor === true) {
    document.getElementById("respuesta").innerHTML = 'Número de tarjeta válido';
  } else {
    document.getElementById("respuesta").innerHTML = 'Número de tarjeta no válido';
  }
});
//llama a boton y agraga el evento click para que enmascare el valor despues de hacer click
document.getElementById("btn").addEventListener("click", function () {
  const enmascarar = validator.maskify(document.getElementById('cardnumber').value);
  //console.log(enmascarar);
  return document.getElementById('cardnumber').value = enmascarar;
});
//console.log(document.getElementById("cardnumber").addEventListener("click", enmascarar()));
//console.log(validator);
