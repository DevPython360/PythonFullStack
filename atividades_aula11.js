//Jogo de RPG Simples:
//Crie uma classe Personagem com vida, ataque, defesa e nome.
//Desenvolva subclasses Guerreiro, Mago e Arqueiro com habilidades especiais. 
//Implemente um sistema de batalha onde dois personagens podem lutar.
class Personagem {
    constructor(nome, vida, ataque, defesa) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }

    atacar(oponente) {
        const dano = Math.max(this.ataque - oponente.defesa, 0);
        oponente.vida -= dano;
        console.log(`${this.nome} ataca ${oponente.nome} causando ${dano} de dano.`);
        console.log(`${oponente.nome} agora tem ${oponente.vida} de vida.`);
    }
}

class Guerreiro extends Personagem {
    constructor(nome, vida, ataque, defesa, espada, velocidade, inteligencia) {
        super(nome, vida, ataque, defesa);
        this.espada = espada;
        this.velocidade = velocidade;
        this.inteligencia = inteligencia;
    }
}

class Mago extends Personagem {
    constructor(nome, vida, ataque, defesa, magia, inteligencia) {
        super(nome, vida, ataque, defesa);
        this.magia = magia;
        this.inteligencia = inteligencia;
    }

    lançarMagia(oponente) {
        const danoMagico = this.ataque + this.inteligencia;
        oponente.vida -= danoMagico;
        console.log(`${this.nome} lança uma magia em ${oponente.nome}, causando ${danoMagico} de dano.`);
        console.log(`${oponente.nome} agora tem ${oponente.vida} de vida.`);
    }
}

class Arqueiro extends Personagem {
    constructor(nome, vida, ataque, defesa, inteligencia, furtividade) {
        super(nome, vida, ataque, defesa);
        this.inteligencia = inteligencia;
        this.furtividade = furtividade;
    }
}
const guerreiro = new Guerreiro("Saladino", 100, 30, 20, "Espada Longa", 10, 5);
const mago = new Mago("Rasputin", 80, 25, 15, "Bola de Fogo", 20);
const arqueiro = new Arqueiro("FireWood", 90, 28, 18, 15, 10);

console.log("\n=== INICIANDO A BATALHA ===\n");
guerreiro.atacar(mago);
mago.lançarMagia(arqueiro);
arqueiro.atacar(guerreiro);
