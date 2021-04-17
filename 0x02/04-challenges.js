/* Haz una clase llamada Person que siga las siguientes condiciones:
Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
Creá método llamado calcularIMC() (indice de masa corporal)
Crear un método llamado esMayorDeEdad() y regrese un booleano
El constructor pide nombre, edad,sexo,peso y altura
Generar el RFC a partir de el nombre, edad y sexo con obtenerRFC() */
class Person {
  constructor(nombre, edad, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.rfc = this.obtenerRFC();
  }
  calcularIMC() {
    return (this.peso / this.altura ** 2).toFixed(2);
  }
  esMayorDeEdad() {
    if (this.edad < 18) return false;
    return true;
  }
  obtenerRFC() {
    return `Datos: ${this.nombre}, ${this.edad}, ${this.sexo}.\nLa Recuperación de la Frecuencia Cardíaca (RFC) es la diferencia de frecuencia cardíaca tomada en un pico de esfuerzo y la medida en un periodo fijo tras el cese de la actividad física.\nFaltan datos para poder generar RFC.`;
  }
}

// tests
const person1 = new Person('María', 17, 'Femenino', 52.1, 1.66);
const person2 = new Person('Javier', 45, 'Masculino', 71, 1.69);

console.log(person1.calcularIMC());
console.log(person1.esMayorDeEdad());
console.log(person1.obtenerRFC());
console.log(person2.calcularIMC());
console.log(person2.esMayorDeEdad());
console.log(person2.obtenerRFC());
