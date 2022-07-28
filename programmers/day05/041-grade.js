function grade(score) {
    if ( score >= 90 && score <= 100){
        return 'A'
    } else if (score >= 80 && score <= 89){
        return 'B'
    } else if (score >= 70 && score <= 79){
        return 'C'
    } else if (score >= 60 && score <=69){
        return 'D'
    } else if (score <= 59 && score >= 0){
        return 'F'
    } else if (score > 100 || score < 0){
        return '잘못된 점수입니다'
    }
}

console.log(grade(105))  // "잘못된 점수입니다"
console.log(grade(-10))   // "잘못된 점수입니다"
console.log(grade(97))    // "A"
console.log(grade(86))    // "B"
console.log(grade(75))  // "C"
console.log(grade(66))    // "D"
console.log(grade(52))    // "F"