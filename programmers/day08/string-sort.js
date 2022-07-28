// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.
// 입출력 예
//    s	         return
// "Zbcdefg"	"gfedcbZ"

// 소문자가 대문자보다 크다.
// c가 a보다 크다. 즉, 뒤로 갈수록 커진다.

function solution(s) {
    var answer = ''
    let tem;
    let arr = s.split('')
    for (j=0;j<s.length;j++){
        for (i=0;i<s.length;i++){
            if ( arr[i] < arr[i+1] ){
                tem = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = tem
            }
        }
    }
    answer = arr.join('')
    return answer
}

// 시간복잡도 n2인 쓰레기코드