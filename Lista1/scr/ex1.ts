function MaiorVal(...lista : number []): number {
    let maior : number = 0;
    for(let i=0; i < lista.length; i++){
        if(lista[i] > maior){
            maior = lista[i];
        }
    }
    return maior;
    
}

console.log(MaiorVal(2,3,10,22,33,99));