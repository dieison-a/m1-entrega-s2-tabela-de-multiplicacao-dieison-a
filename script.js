// criando matriz vazia
let matrizDez = []

// criando função para gerar a matriz, sem parâmetro porque eu que vou declarar (tamanho de 10)
function criandoMatriz() {
    // criando loop para percorrer array com tamanho determinado em 10
    for (let i = 0; i <= 10; i++) {
        // índices da matriz declarados como vazios, mas contendo o valor do próprio índice
        matrizDez[i] = []

        //criando segundo loop para percorrer arrays dentro dos arrays (colunas dentro das linhas)
        for (let j = 0; j <= 10; j++) {
            // índice dos arrays dentro dos arrays vai ser a multiplicação dos tanto de índices (que estão ambos declarado como 10)
            matrizDez[i][j] = i * j
        }
    }
    return matrizDez
}
console.table(criandoMatriz(matrizDez))