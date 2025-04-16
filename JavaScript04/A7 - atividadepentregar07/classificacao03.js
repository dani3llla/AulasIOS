let nota = 78;

if (nota >= 90 && nota <= 100) {
    console.log(`Parabéns! Com a sua nota ${nota}, você tirou A!`);
}
else if (nota >= 80 && nota < 90) {
    console.log(`Parabéns! Com a sua nota ${nota}, você tirou B!`);
}
else if (nota >= 70 && nota < 80) {
    console.log(`Parabéns! Com a sua nota ${nota}, você tirou C!`);
}
else if (nota >= 60 && nota < 70) {
    console.log(`Parabéns! Com a sua nota ${nota}, você tirou D!`);
}
else if (nota <= 59 && nota > 1 ) {
    console.log(`Parabéns! Com a sua nota ${nota}, você tirou F!`);
} else if (nota >=0) {
    console.log(`Erro!❌ Nossas classificações são de 1 a 100. notas menores ou maiores que essas são inexistentes.`);
}