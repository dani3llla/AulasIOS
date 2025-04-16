// 1. Sistema de Verificação de Idade com if-else
// // Este sistema verifica se a pessoa tem idade suficiente para acessar um conteúdo restrito, como um site ou serviço. 
// Se a idade for maior ou igual a 18 anos, a pessoa tem permissão para acessar o conteúdo; caso contrário,
// uma mensagem de erro é exibida informando que a idade mínima não foi atingida.

let idade 
let nome = 'Luiza'
idade = 17

if (idade <=17) {
    console.log(nome, 'Você não tem idade suficiente para acessar o conteúdo❌');
} else if (idade >=18) {
    console.log(nome, 'Você tem idade o suficiente para acessar, verificação completa✅');
}