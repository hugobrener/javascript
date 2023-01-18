function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!') 
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 14) {
                img.setAttribute('src' , 'foto-bebe-menino.png') //criança
            } else if(idade >=15 && idade <50) {
                img.setAttribute('src' , 'foto-homem-novo.png') 
                // jovem
            } else {
                img.setAttribute('src' , 'foto-homem-velho.png') 
                //idoso
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 14) {
                img.setAttribute('src' , 'foto-bebe-menina.png') 
                //criança
            } else if(idade >=15 && idade <50) {
                img.setAttribute('src' , 'foto-mulher-nova.png') 
                
            } else {
                img.setAttribute('src' , 'foto-mulher-idosa.png') 
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML=`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}