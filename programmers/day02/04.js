let fruits = ["사과", "바나나"]

// for (i=0;i<fruits.length;i++){
//     fruits[i] = '맛있는 '+fruits[i]
// }

function cb (ele, idx, arr) {
    return '맛있는 '+ele
}

fruits = fruits.map(cb);

console.log(fruits)