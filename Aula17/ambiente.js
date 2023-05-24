/* OBJETO usa {}*/

let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engoardar(p=0){
        this.peso += p;
    }
}

amigo.engoardar(2);

console.log(amigo);
console.log(amigo.nome);