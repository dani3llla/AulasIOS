// 2. Sistema de Exibição de Mensagem com switch - Verificação de Dia da Semana
// Esse sistema recebe um número correspondente a um dia da semana (1 para segunda-feira, 2 para terça-feira, etc.)
//e exibe uma mensagem informando qual é o dia atual. Se o número informado não corresponder a um dia válido (1 a 7), 
//uma mensagem de erro é mostrada, indicando que o valor inserido é inválido.

let dia = 7
let diasemana = ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado', 'domingo']


switch (dia) {
    case 1:
        console.log('Hoje é', diasemana[0], '😭');
        break;
    
    case 2:
        console.log('Hoje é', diasemana[1],'😪');
        break;
    
    case 3:
        console.log('Hoje é', diasemana[2],'💻');
        break;
    
    case 4:
        console.log('Hoje é', diasemana[3],'📕');
        break;
    
    case 5:
        console.log('Hoje é', diasemana[4], '🎉');
        break;
    
    case 6:
        console.log('Hoje é', diasemana[5], '💤');
        break;
    
    case 7:
        console.log('Hoje é', diasemana[6], '🥂');
        break;
    
        
    default:
        break;
}