//  Write a function to generate the nth Fibonacci number.

function fibonacci(n) { //Recebe n, que representa a posição que queremos calcular.
    if (n <= 0) return 0 // 0 ou menor que ele retorna 0
    if (n === 1) return 1 // caso contrário, retorna 1

    let a = 0; // guarda o penúltimo número
    let b = 1; // guarda o último número
    let fib = b; // guarda o valor atual calculado

    for(let i=2; i<=n; i++){ // laço començando em 2, porque 0 e 1já foram tratados anteriormente
        fib = a+b;
        a = b;
        b = fib;
    }

    return fib;
}

// Fibonacci nada mais é, que a soma dos números anteriores