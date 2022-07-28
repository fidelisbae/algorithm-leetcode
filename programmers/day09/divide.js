// 나누어 떨어지는 숫자 배열
// 문제 설명
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.

function solution(arr, divisor) {
    var answer = [];
    for (i=0;i<arr.length;i++){
        if ( arr[i] % divisor === 0 ){
            answer.push(arr[i])
        }
    }
    if ( answer === undefined){
        answer[0] = -1
    }
    let tem
    for (j=0;j<answer.length;j++){
        for(i=0;i<answer.length-1;i++){
            if (answer[i]>answer[i+1]){
                tem = answer[i]
                answer[i] = answer[i+1]
                answer[i+1] = tem
            }
    }
    }
    console.log(answer)
    return answer;
}

let arr = [1,532,6,23,4,7,88,2]
let di =1
solution(arr,di)