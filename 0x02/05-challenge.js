/* Hacer superclase Maestro y subclases MaestroDeFísica y Maestro de Música y a
cada uno asignarle su materia y calcular su promedio de grupo a partir de
calificaciones (usar arreglos).
El maestro de física tiene un atributo "antiguedad" que guarda un valor
numerico, mientras que el maestro de música tiene un atributo "edad" también
guardando un valor numérico. */
class Maestro {
  constructor(materia, calificaciones) {
    this.materia = materia;
    this.calificaciones = calificaciones;
  }
  promedio() {
    return (
      this.calificaciones.reduce((sum, grade) => sum + grade, 0) /
      this.calificaciones.length
    );
  }
}

class MaestroDeFisica extends Maestro {
  constructor(materia, calificaciones, antiguedad) {
    super(materia, calificaciones);
    this.antiguedad = antiguedad;
  }
}

class MaestroDeMusica extends Maestro {
  constructor(materia, calificaciones, edad) {
    super(materia, calificaciones);
    this.edad = edad;
  }
}

// tests
const mFisica = new MaestroDeFisica('relatividad', [4, 4.4, 3.9, 5, 3.2], 30);
const mMusica = new MaestroDeMusica('historia', [2.4, 3.2, 3.7, 4, 4.8], 10);

console.log(mFisica.promedio());
console.log(mFisica.materia);
console.log(mFisica.calificaciones);
console.log(mFisica.antiguedad);
console.log(mMusica.promedio());
console.log(mMusica.materia);
console.log(mMusica.calificaciones);
console.log(mMusica.edad);
