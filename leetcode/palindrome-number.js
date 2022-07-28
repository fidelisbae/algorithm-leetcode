/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let str;
    str = String(x);
    if (x<0) {
        return false;
    }
    for (i=0;i<str.length;i++){
        if (str[i]!==str[str.length-1-i]){
            return false;
        }
    }
    return true;
};

console.log( isPalindrome(13431222) )