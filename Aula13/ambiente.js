var contador = 1;

//TESTE LOGICO NO INCIO
while (contador <= 6){
    console.log(`Passo ${contador}`);
    contador++;
}

//PRIMEIRO EXECUTA O BLOCO E DEPOIS O TESTE
do {
    console.log(`Passo ${contador}`);
    contador++;
} while (contador <= 6)