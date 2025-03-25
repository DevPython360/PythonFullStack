//Jogo de RPG Simples. Crie uma classe Personagem com vida, ataque, defesa e nome.
//Desenvolva subclasses Guerreiro, Mago e Arqueiro com habilidades especiais.
//Implemente um sistema de batalha onde dois personagens podem lutar.

class Personagem {
    constructor(vida, ataque, defesa, nome){
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
        this.nome = nome;
        this.batalha = [];
    }
    
    
}
class Guerreiro extends Personagem {
    constructor(nome, vida, ataque, defesa, espada, velocidade, inteligencia){
        super(vida, ataque, defesa, nome);
        this.espada = espada;
        this.velocidade = velocidade;
        this.inteligencia = inteligencia;

    }
} 

class Mago extends Personagem {
    constructor(nome, vida, ataque, defesa, magia, inteligencia){
        super(vida, ataque, defesa, nome);
        this.magia = magia;
        this.inteligencia = inteligencia;

    }
}

class Arqueiro extends Personagem {
    constructor(nome, vida, ataque, defesa, inteligencia, furtividade){
        super(vida, ataque, defesa, nome);
        this.inteligencia = inteligencia;
        this.furtividade = furtividade;

    }
}

const guerreiro = new Guerreiro("Saladino" , 30, 30, 35,);
const mago = new Mago("Rasputin" , 30, 40, 40);
const arqueiro = new Arqueiro("FireWood" , 20, 35, 32)

console.log(`${guerreiro.nome} , ${guerreiro.vida} , ${guerreiro.ataque} , ${guerreiro.defesa}`);
console.log(`${mago.nome} , ${mago.vida} , ${mago.ataque} , ${mago.defesa}`);
console.log(`${arqueiro.nome} , ${arqueiro.vida} , ${arqueiro.ataque} , ${arqueiro.defesa}`);
