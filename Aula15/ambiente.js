let num = [5, 8, 2, 9, 3];

console.log(num);
console.log(`O vetor tem ${num.length} posições`);

//num[3] = 6; Coloca valor na key 3 com o valor 6
//num.push(7) Coloca o valor "7" no Final da array
//num.length Diz a quantidade de valores numa array
//num.indexOf(5) Vai procurar o valor "5" caso não exista ele irá retornar -1 de não existente.

console.log(`Nosso vetor é o ${num[1]}`);

/* TRADICIONAL */ 
/*for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posição tem ${pos} tem o valor ${num[pos]}`);
}*/

/* MAIS "ATUALIZADO" */
for(let pos in num){
    console.log(`A posição tem ${pos} tem o valor ${num[pos]}`);
}