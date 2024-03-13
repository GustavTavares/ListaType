function calculaMedia(...medias:number[]):number {
    let soma : number = 0;
    
    for(let i = 0; i < medias.length; i++) {
        soma += medias[i];
    }
    
    let media : number = soma / medias.length;
    return media;
}

console.log(calculaMedia(1, 9, 10, 7, 8, 4).toFixed(2));
console.log(calculaMedia(3, 3, 5, 10, 9, 8).toFixed(2));
