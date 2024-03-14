function calculaMedia() {
    var medias = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        medias[_i] = arguments[_i];
    }
    var soma = 0;
    for (var i = 0; i < medias.length; i++) {
        soma += medias[i];
    }
    var media = soma / medias.length;
    return media;
}
console.log(calculaMedia(1, 9, 10, 7, 8, 4).toFixed(2));
console.log(calculaMedia(3, 3, 5, 10, 9, 8).toFixed(2));
