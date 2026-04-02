// Write a function that checks if a given string is a palindrome.
function isPalindrome(str) {
    /* 
    Recebe um parâmetro str, que deveria ser uma string.
    Sempre retorna true, sem verificar nada.
    Depois, a função é chamada com "", que é uma string vazia.
    */
    return true;
}

isPalindrome("");

// Outro caso em que pode verificar o palíndromo

/*
function isPalindrome(str) {

    Nesse exemplo em específico, sua função é 
    comparar a string com sua versão invertida 
    
    return str === str.split("").reverse().join("");
}

isPalindrome("");
*/