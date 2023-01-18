
function contagem(){
  var inicio = document.getElementById('inicio')
  var fim = document.getElementById('fim')
  var passo = document.getElementById('passo')
  var res = document.querySelector('div#res')
  
  if(passo.value == 0 || fim.value == 0 || passo.value.length == 0){
    window.alert('erro, digite um valor não nulo para o passo')
  } else {
    res.innerHTML = 'contando: '
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
   do {
      res.innerHTML += `${i} \u{1F9D1}	, `
      console.log (i)
      i=i+p
      
    }  while (i < f)
    }

  

}