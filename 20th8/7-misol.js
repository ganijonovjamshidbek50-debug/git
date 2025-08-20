function kattami(a) {
    let words = a.split(" ")
    for (let word of words) {
        if (word[0] !== word[0].toUpperCase()) {
            return false
        }
    }
    return true
}
x = prompt('Matnni kiriting: ')
console.log(kattami(x))