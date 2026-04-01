// Write a function that takes a string as input and returns the string reversed.
function reverseString (str) {

    /* A função irá retornar a string com join () 
    split("") transforma a string em array
    reverse() inverte o array 
    join("") junta tudo de novo sem separador */
    return str.split("").reverse().join("");
}
// Exibir no console a String invertida
console.log(reverseString("Hello!"));
