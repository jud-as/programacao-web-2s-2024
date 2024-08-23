function verificarNumeroPrimo(n) {
    let bool = 1;
    if (n == 0 || n == 1) {
        bool = 0;
        console.log(n + " --- " + bool);
    }
    if (n == 2) {
        console.log(n + " --- " + bool);
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            bool = 0;
            console.log(n + " --- " + bool);
            break;
        }
        console.log(n + " --- " + bool);
        return bool;
    }
}

verificarNumeroPrimo(0);
verificarNumeroPrimo(1);
verificarNumeroPrimo(2);
verificarNumeroPrimo(3);
verificarNumeroPrimo(7);
verificarNumeroPrimo(83);
verificarNumeroPrimo(100);
verificarNumeroPrimo(991);
verificarNumeroPrimo(104729);
verificarNumeroPrimo(14348907);






