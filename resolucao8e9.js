//Soma de Matrizes: Crie duas matrizes 3x3 e escreva uma função para somá-las. 
// A função deve retornar uma nova matriz com o resultado.
function calcularMatriz() {
    let matriz1 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    
    let matriz2 = [
        [9, 8, 7],
        [6, 5, 4],
        [3, 2, 1]
    ];
    
    let soma = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            soma[i][j] = matriz1[i][j] + matriz2[i][j];
        }
    }

    return soma;
}

console.log("Soma da Matriz:", calcularMatriz());

//Transposição de Matriz: Escreva uma função que receba uma matriz 3x3 e retorne sua transposta
//(troque linhas por colunas).

function transporMatriz(matriz) {
    if (matriz.length !== 3 || matriz.some(linha => linha.length !== 3)) {
        throw new Error("A matriz deve ser 3x3.");
    }
    const matrizTransposta = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            matrizTransposta[j][i] = matriz[i][j];
        }
    }

    return matrizTransposta;
}

const matrizOriginal = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrizResultante = transporMatriz(matrizOriginal);
console.log(matrizResultante);

//Multiplicação de Matrizes: Crie duas matrizes 2x2 e escreva uma função para multiplicá-las.

const matrizA = [
    [1, 2],
    [3, 4]
];

const matrizB = [
    [5, 6],
    [7, 8]
];
function multiplicarMatrizes(matriz1, matriz2) {
    const resultado = [
        [0, 0],
        [0, 0]
    ];

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            for (let k = 0; k < 2; k++) {
                resultado[i][j] += matriz1[i][k] * matriz2[k][j];
            }
        }
    }

    return resultado;
}
const resultado = multiplicarMatrizes(matrizA, matrizB);
console.log(resultado);

//Jogo da Velha: Implemente um jogo da velha usando uma matriz 3x3. 
// O programa deve permitir que dois jogadores façam jogadas alternadas e verifique se há um vencedor.

function imprimirTabuleiro(tabuleiro) {
    for (let i = 0; i < 3; i++) {
        console.log(tabuleiro[i].join(" | "));
        if (i < 2) {
            console.log("---------");
        }
    }
}
function verificarVencedor(tabuleiro) {
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2] && tabuleiro[i][0] !== " ") {
            return tabuleiro[i][0];
        }
        if (tabuleiro[0][i] === tabuleiro[1][i] && tabuleiro[1][i] === tabuleiro[2][i] && tabuleiro[0][i] !== " ") {
            return tabuleiro[0][i];
        }
    }
    if (tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2] && tabuleiro[0][0] !== " ") {
        return tabuleiro[0][0];
    }
    if (tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0] && tabuleiro[0][2] !== " ") {
        return tabuleiro[0][2];
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tabuleiro[i][j] === " ") {
                return null; // Jogo continua
            }
        }
    }

    return "Empate"; // Se não houver mais espaços
}
function jogoDaVelha() {
    const tabuleiro = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ];

    let jogadorAtual = "X";
    let vencedor = null;

    while (!vencedor) {
        imprimirTabuleiro(tabuleiro);
        const linha = parseInt(prompt(`Jogador ${jogadorAtual}, escolha a linha (0-2):`));
        const coluna = parseInt(prompt(`Jogador ${jogadorAtual}, escolha a coluna (0-2):`));
        if (tabuleiro[linha][coluna] !== " ") {
            console.log("Posição ocupada, tente novamente.");
            continue;
        }
        tabuleiro[linha][coluna] = jogadorAtual;
        vencedor = verificarVencedor(tabuleiro);
        if (vencedor) {
            imprimirTabuleiro(tabuleiro);
            if (vencedor === "Empate") {
                console.log("O jogo terminou em empate!");
            } else {
                console.log(`Jogador ${vencedor} venceu!`);
            }
            break;
        }
        jogadorAtual = (jogadorAtual === "X") ? "O" : "X";
}
jogoDaVelha();

//Busca em Matriz: Escreva uma função que receba uma matriz e um número, 
// e retorne a posição (linha e coluna) desse número na matriz. Se o número não estiver na matriz, 
// retorne null.

function buscarNumeroNaMatriz(matriz, numero) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === numero) {
                return { linha: i, coluna: j }; 
            }
        }
    }
    
    return null; 
}


const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const numero = 5;
const resultado = buscarNumeroNaMatriz(matriz, numero);

if (resultado) {
    console.log(`Número encontrado na posição: Linha ${resultado.linha}, Coluna ${resultado.coluna}`);
} else {
    console.log("Número não encontrado na matriz");
}

//Matriz Identidade: Crie uma função que gere uma matriz identidade de tamanho NxN
//(uma matriz onde os elementos da diagonal principal são 1 e os demais são 0)

function gerarMatrizIdentidade(N) {
    const matriz = Array.from({ length: N }, () => Array(N).fill(0));
    for (let i = 0; i < N; i++) {
        matriz[i][i] = 1;
    }

    return matriz;
}
const N = 5;  
const matrizIdentidade = gerarMatrizIdentidade(N);
console.log(matrizIdentidade);

//Rotação de Matriz: Escreva uma função que rotacione uma matriz 3x3 em 90 graus no sentido horário.

function rotacionarMatriz90Graus(mat) {
    const n = mat.length;
    const matrizRotacionada = Array.from({ length: n }, () => Array(n));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrizRotacionada[j][n - 1 - i] = mat[i][j];
        }
    }

    return matrizRotacionada;
}
const matrizOriginal = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Matriz Original:");
console.log(matrizOriginal);

const matrizRotacionada = rotacionarMatriz90Graus(matrizOriginal);

console.log("Matriz Rotacionada (90 graus no sentido horário):");
console.log(matrizRotacionada);

//Soma das Bordas: Escreva uma função que calcule a soma dos elementos das bordas de uma matriz NxN.

function somaDasBordas(matriz) {
    const n = matriz.length;
    let soma = 0;
    for (let i = 0; i < n; i++) {
        soma += matriz[0][i];          
        soma += matriz[n-1][i];       
    }
    for (let i = 1; i < n-1; i++) {
        soma += matriz[i][0];          
        soma += matriz[i][n-1];        
    }

    return soma;
}

const matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

console.log("Soma das bordas:", somaDasBordas(matriz));