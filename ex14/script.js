function carregar (){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var saudacao = window.document.getElementById('saudacao')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
//hora = 15
msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`
if (hora >= 0 && hora < 12){
    img.src = 'img/manha.png'
    saudacao = 'um bom dia'
    document.body.style.background = '#ffd0ae'
} else if  (hora >= 12 && hora < 18){
    saudacao = 'uma boa tarde'
    img.src = 'img/tarde.png'
    document.body.style.background = '#ffa044'
} else {
    saudacao = 'uma ótima Noite'//Boa Noite
    img.src = 'img/noite.png'
    document.body.style.background = '#161924'}

sauda.innerHTML = `tenha ${saudacao}`  //Boa tarde

}