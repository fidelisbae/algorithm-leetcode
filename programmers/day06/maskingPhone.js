function solution(phone_number) {
    var answer = '';
    let length = phone_number.length
    answer = phone_number.substr(length-4,length)
    answer = answer.padStart(length,'*')
    return answer;
}

console.log(solution('3347'))