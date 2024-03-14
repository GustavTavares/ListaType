class Carro {
    private modelo: string;
    private marca: string;
    private anoFabricacao: number;

constructor(modelo: string, marca: string, anoFabricacao: number){
this.modelo = modelo;
this.marca = marca;
this.anoFabricacao = anoFabricacao;    
}

getModelo(): string {
    return this.modelo;
}

getMarca(): string{
    return this.marca;
}

getanoFabricacao(): number{
    return this.anoFabricacao;
}

setModelo(modelo: string): void{
    this.modelo = modelo;
}

setMarca(marca: string): void{
    this.marca = marca;
}

setAnoFabricacao(anoFabricacao: number): void {
    this.anoFabricacao = anoFabricacao;
}

calcularIdade(): number {
    const anoAtual = new Date().getFullYear();
    return anoAtual - this.anoFabricacao;
    }
}

const myCar = new Carro('Civic', 'Honda', 2010);
console.log(`Modelo: ${myCar.getModelo()}, Marca: ${myCar.getMarca()}, Ano de Fabricação> ${myCar.getanoFabricacao()}, Idade: ${myCar.calcularIdade()} anos.`);
