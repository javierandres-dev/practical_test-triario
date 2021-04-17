/* Crea una clase llamada Triangle que tenga dos atributos baseline y height,
además crear dos métodos que calculen el perimeter() y el surface() */
class Triangle {
  constructor(baseline, height) {
    this.baseline = baseline;
    this.height = height;
  }
  perimeter() {
    const hypotenuse = Math.sqrt(this.baseline ** 2 + this.height ** 2);
    return this.baseline + this.height + hypotenuse;
  }
  surface() {
    return (this.baseline * this.height) / 2;
  }
}

// tests
const triangle1 = new Triangle(24, 7);

console.log(triangle1.perimeter());
console.log(triangle1.surface());
