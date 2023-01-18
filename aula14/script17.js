
function tabuada(){
  let num = document.getElementById('num')
  let res = ''
  let tab = document.getElementById('seltab')
  if(num.value.length ==0) {
    alert('Por favor, digite um número!')
  } else {
    let i = Number(num.value)
    let c = 0
    tab.innerHTML = ''
    while(c <= 10){
      let item = document.createElement('option')
      item.text = `${i} x ${c} = ${i*c}`
      tab.appendChild(item)
      console.log(`${i} x ${c} = ${i*c}`)
      c++
    }
    
    
  }
}