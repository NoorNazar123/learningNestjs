class ArithmeticOperation {
  #num1; // Private field
  #num2; // Private field

  constructor(num1, num2) {
    this.#num1 = num1;
    this.#num2 = num2;
  }

  add() {
    return this.#num1 + this.#num2;
  }

  sub() {
    return this.#num1 - this.#num2;
  }

  mult() {
    return this.#num1 * this.#num2;
  }

  div() {
    if (this.#num2 === 0) {
      return "Division by zero is not allowed.";
    }
    return this.#num1 / this.#num2;
  }

  mod() {
    return this.#num1 % this.#num2;
  }
}

module.exports = ArithmeticOperation;
