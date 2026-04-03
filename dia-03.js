// Write a function that takes a sentence (string) and finds the longest word.
function longestWord(sentence) {
    /* 
     Em (sentence) ela recebe um parâmetro chamado sentence, que é a frase.
     O método split(" ") separa o texto sempre que encontra um espaço.
    */
    const words = sentence.split(" ");
    /* 
    Ela começa vazia.
    */
    let bigger = "";
    /* 
    Esse loop percorre cada item do array words.
    Ou seja, ele pega uma palavra por vez.
    */
    for (const word of words) {
        if (word.length > bigger.length) {
            bigger =  word;
        }
    }

    return bigger;
}

console.log(longestWord (""));

/* Resumo rápido do ocorre no código:

quebra a frase em palavras
percorre uma por uma
compara os tamanhos
guarda a maior
retorna essa palavra 

*/