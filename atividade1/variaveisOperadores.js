let a = 2;
let b = 3;
let c;

c = a + b;
console.log("O resultado da soma entre " + a + " e " + b + " é " + c);
c = a * b;
console.log("O resultado da multiplicação entre " + a + " e " + b + " é " + c);
c = a / b;
console.log("O resultado da divisão entre " + a + " e " + b + " é " + c);
c = a - b;
console.log("O resultado da subtração entre " + a + " e " + b + " é " + c);

let notas = [9, 8.5, 7, "10"];

console.log(notas);
console.log(notas.length);

let capitais = {
    DF : 'Brasília',
    DF_DDD : 61,
    BA : 'Salvador',
    BA_DDD : 71
};
console.log(capitais.DF);

for (const key in capitais) {
    const valor = capitais[key];
    console.log(key + " --- " + valor);
}




function verificaPares(num) {
    if(num % 2 == 0){
        return true;
    }
    return false;
}

console.log(verificaPares(1));
console.log(verificaPares(2));
console.log(verificaPares(3));
