let x = 'Salom'
function karra(y){
    let natija = ''
    for (let i=0; i<y.length; i++){
        natija += y[i] + y[i]
    }
    return natija
}
console.log(karra(x))
