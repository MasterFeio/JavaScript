function Verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente.');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var gen = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked){
            gen = 'Homem';

            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'noimage.jpg');
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'noimage.jpg');
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'noimage.jpg');
            } else {
                //Idoso
                img.setAttribute('src', 'noimage.jpg');
            }
        }else if (fsex[1].checked){
            gen = 'Mulher';

            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'noimage.jpg');
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'noimage.jpg');
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'noimage.jpg');
            } else {
                //Idoso
                img.setAttribute('src', 'noimage.jpg');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Dectectamos ${gen} com ${idade} anos.`
        img.style.width = '250px';
        res.appendChild(img);
    }
}