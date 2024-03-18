function inverteArray() {
    var lista = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        lista[_i] = arguments[_i];
    }
    var novaLista = [];
    for (var i = lista.length - 1; i >= 0; i--) {
        novaLista.push(lista[i]);
    }
    return novaLista;
}
console.log(inverteArray(1, 2, 3, 4, 5));
