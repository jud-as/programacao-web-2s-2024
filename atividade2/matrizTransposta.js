
var matrizA= new Array(2);
matrizA[0] = [1, 2];
matrizA[1] = [3, 4];
matrizA[2] = [5, 6];

function transporMatriz(A) {
    var matrizB = [];
    for(var i = 0; i < A.length; i++){
        matrizB.push([]);
    };
    for (var i = 0; i < A.length; i++){
        for(var j = 0; j < A.length; j++){
            matrizB[j].push(A[i][j]);
        };
    };
    return matrizB
}

function exibirMatriz(matriz){
    for(let linha = 0; linha < matriz.length; linha++) {
        console.log(matriz[linha]);
    }
}

exibirMatriz(matrizA);
console.log("\n");
exibirMatriz(transporMatriz(matrizA));