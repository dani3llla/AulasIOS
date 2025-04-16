// EXERCÍCIO 4: Validação de Palavra em Texto.

// Descrição > Crie um programa que receba um texto e uma palavra, e verifique se a palavra está
// contida no texto.
// Requisitos:
// Use métodos de string, como includes, para realizar a verificação.
// Utilize if/else para mostrar uma mensagem indicando se a palavra foi encontrada ou não.
// Pegue a mensagem com prompt() e exiba com Alert().

let sentence = prompt('Enter one sentence:')
let sentenceLower = sentence.toLowerCase();

let word = prompt('Enter one word:');
let wordLower = word.toLowerCase();

let exist = sentenceLower.includes(wordLower);

if (exist) {
    alert(`This word was found in the sentence ✅`);
} 

else {
    alert(`This word was found in the sentence ⛔`);
}
