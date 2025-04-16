//  Variável      Teste         Executado ao fim do loop
//Inicialização / Condição     /  Incrmento        
for(contador =0; contador <=50; contador++){
    console.log(contador);
}

let tiposBanana=['Terra', 'Nanica', 'Prata', 'Maçã', 'Ouro', 'Pão']

for(contador = 0; contador < tiposBanana.length; contador++){
    console.log(` ${contador +1} ${tiposBanana[contador]}`);
}

contador = 0;
while (contador < 50) {
    console.log(contador + 'Pamonha🌽');
    contador++

    if (contador == 50) {
        console.log('CHEGA DE PAMONHA! NINGUÉM PRECISA DE 50 PAMONHAS');
    }
}