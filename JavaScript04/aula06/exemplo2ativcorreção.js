// 2. Sistema de Exibição de Mensagem com switch - Verificação de Dia da Semana
// Esse sistema recebe um número correspondente a um dia da semana (1 para segunda-feira, 2 para terça-feira, etc.)
//e exibe uma mensagem informando qual é o dia atual. Se o número informado não corresponder a um dia válido (1 a 7), 
//uma mensagem de erro é mostrada, indicando que o valor inserido é inválido.

let dia = 1

switch (dia) {
    case 1:
        console.log('Hoje é Segunda-Feira 😭');
        break;
    
    case 2:
        console.log('Hoje é Terça-Feira 😪');
        break;
    
    case 3:
        console.log('Hoje é Quarta-Feira 💻');
        break;
    
    case 4:
        console.log('Hoje é Quinta-Feira 📕');
        break;
    
    case 5:
        console.log('Hoje é Sexta-Feira 🎉');
        break;
    
    case 6:
        console.log('Hoje é Sábado 💤');
        break;
    
    case 7:
        console.log('Hoje é Domingo 🥂');
        break;
    
        
    default:
        break;
}