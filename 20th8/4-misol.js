let x = {
    'Jamshid': 20,
    'Aziz': 19,
    'Sardor': 20,
    'Oxunjon': 21,
    'Jasur': 22,
}

function biryil(y){
    for(let i in y){
        if(y.hasOwnProperty(i)){
            y[i] = y[i] + 1
        }
    }
    return y
}

console.log(biryil(x))