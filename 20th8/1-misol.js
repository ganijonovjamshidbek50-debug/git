let ichimlik = [
    {nomi: 'cola', narxi: 7000},
    {nomi: 'pepsi', narxi: 6000},
    {nomi: 'asu', narxi: 5000},
    {nomi: 'moxito', narxi: 13000}
]

// for(let i = 0; i<ichimlik.length - 1; i++){
//     for(let j=0; j<ichimlik.length - i - 1; j++){
//         if(ichimlik[j].narxi>ichimlik[j + 1].narxi){
//             let x = ichimlik[j].narxi
//             ichimlik[j].narxi = ichimlik[j + 1].narxi
//             ichimlik[j + 1].narxi = x
//         }
//     }
// }

ichimlik.sort((a, b) => a.narxi - b.narxi)
console.log(ichimlik);
