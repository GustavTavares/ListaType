var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.adicionar = function (a, b) {
        return a + b;
    };
    Calculadora.prototype.subtrair = function (a, b) {
        return a - b;
    };
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    Calculadora.prototype.dividir = function (a, b) {
        if (b === 0) {
            throw new Error('Divisão por zero não é permitida.');
        }
        return a / b;
    };
    return Calculadora;
}());
var calculadora = new Calculadora();
console.log(calculadora.adicionar(10, 5));
console.log(calculadora.subtrair(10, 5));
console.log(calculadora.multiplicar(10, 5));
console.log(calculadora.dividir(10, 5));
