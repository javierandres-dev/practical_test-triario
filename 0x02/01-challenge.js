/* Crea una función llamada decimalToBinary() que reciba como parámetro un
número entero decimal y lo convierta en un número binario retornando su
resultado. */

const decimalToBinary = (aNumber) =>
  isNumInteger(aNumber)
    ? aNumber.toString(2)
    : `Error: "${aNumber}" no es un número entero decimal.`;

const isNumInteger = (aNum) => Number.isInteger(aNum);

// tests
console.log(decimalToBinary(8));
console.log(decimalToBinary(8.5));
console.log(decimalToBinary('x'));
