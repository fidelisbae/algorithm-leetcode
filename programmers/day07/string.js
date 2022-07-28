console.log(isNaN('a'))
function solution(s) {
    let num = isNaN(s)
    if ( (s.length === 4 || s.length === 6) ){
        for (i=0;i<s.length;i++){
            if ( isNaN(s[i]) ){
                return false
            } 
        } return true
    } else {
        return false
    }
}



// 음수인 케이스도 고려해야함
