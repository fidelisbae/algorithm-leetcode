function solution(n) {
    var answer = n;
    for (i=1;i<=n/2;i++){
        if ( n % i === 0 ){
            answer = answer + i
        }
    }
    return answer;
}

