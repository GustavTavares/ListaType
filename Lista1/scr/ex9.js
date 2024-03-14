function somaPares(array) {
    return array.reduce(function (acumulador, valorAtual) {
        if (valorAtual % 2 === 0) { // Verifica se o número é par
            return acumulador + valorAtual; // Soma ao acumulador se for par
        }
        else {
            return acumulador;
        }
    });
}
console.log(somaPares([1, 2, 3, 4, 5, 6]));
