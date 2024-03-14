class Calculadora {

    adicionar(a: number, b: number): number {
        return a + b;
    }


    subtrair(a: number, b: number): number {
        return a - b;
    }


    multiplicar(a: number, b: number): number {
        return a * b;
    }


    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error('Divisão por zero não é permitida.');
        }
        return a / b;
    }
}


const calculadora = new Calculadora();


console.log(calculadora.adicionar(10, 5));  
console.log(calculadora.subtrair(10, 5));   
console.log(calculadora.multiplicar(10, 5));
console.log(calculadora.dividir(10, 5));   
