function solution(s) {
    var answer = '';
    
    if ( s.length % 2 === 0 ){
        answer = answer + s[s.length/2-1] + s[s.length/2]
        return answer
    } else{
        answer = answer + s[Math.ceil(s.length/2-1)]
        return answer
    }
    
    
    
    
}

console.log(solution('answerd'))