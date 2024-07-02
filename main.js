class Veiculo {
    constructor(modelo, fabricante, anoModelo, anoFabricacao) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.anoModelo = anoModelo;
        this.anoFabricacao = anoFabricacao;
    }

    acelerar() {
        console.log("acelerar");
    }
}

class Carro extends Veiculo {
    constructor(modelo, fabricante, anoModelo, anoFabricacao, numeroDePortas) {
        super(modelo, fabricante, anoModelo, anoFabricacao);
        this.numeroDePortas = numeroDePortas;
    }

    acelerar() {
        console.log("O carro está acelerando");
    }
}

class Moto extends Veiculo {
    constructor(modelo, fabricante, anoModelo, anoFabricacao, tipoDeGuidom) {
        super(modelo, fabricante, anoModelo, anoFabricacao);
        this.tipoDeGuidom = tipoDeGuidom;
    }

    acelerar() {
        console.log("A moto está acelerando");
    }
}

const carroDoJoao = new Carro("Fiesta", "Ford", 2020, 2019, 4);
const carroDaMaria = new Carro("Ka", "Ford", 2021, 2020, 4);
const motoDoPedro = new Moto("CB500", "Honda", 2022, 2021, "Esportivo");

console.log(carroDoJoao);
console.log(carroDaMaria);
console.log(motoDoPedro);

carroDoJoao.acelerar();
carroDaMaria.acelerar();
motoDoPedro.acelerar();
