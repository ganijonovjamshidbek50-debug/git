let son1 = prompt('Birinchi sonni kiriting: ')
let son2 = prompt('Ikkinchi sonni kiriting: ')
function yigindi(x1, x2){
    let son1 = parseInt(x1)
    let son2 = parseInt(x2)
    let sum = son1 + son2
    return sum.toString()
}
console.log(yigindi(son1, son2))