// 
//  @param {number} num
//  @return {string}
//  
// 2 315 673 456 
// 두자리 네자리 네자리로 자른다
//



 var numberToWords = function(num) {
    let str = String(num).padStart(10,'0')
    let word = []
    let ret = ""
    let one = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
    let teen = ['Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen']
    let ten = ['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety']
    arr = str.split('')
    if ( Number(str[0]) > 0 ){
        word.push(one[Number(str[0])])  
        word.push('Billion')
    } 
    if ( Number(str[1]) > 0 ){
        word.push(one[Number(str[1])])
        word.push('Hundred')
    }
    if ( Number(str[1]) > 0 && Number(str[2]) === 0 && Number(str[3]) === 0 ){
        word.push('Million')
    }
    if ( Number(str[2]) === 1){
        word.push(teen[Number(str[3])])
        word.push('Million')
    } else if ( Number(str[2]) > 1 && Number(str[3]) === 0 ){
        word.push(ten[Number(str[2])])
        word.push('Million')
    } else if ( Number(str[2]) > 1 ){
        word.push(ten[Number(str[2])])
    }
    if ( Number(str[3]) > 0 && Number(str[2]) !== 1){
        word.push(one[Number(str[3])]) 
        word.push('Million')
    }
    if ( Number(str[4]) > 0 ){
        word.push(one[Number(str[4])])
        word.push('Hundred')
    }
    if ( Number(str[4]) > 0 && Number(str[5]) === 0 && Number(str[6]) === 0 ){
        word.push('Thousand')
    }
    if ( Number(str[5]) === 1){
        word.push(teen[Number(str[6])])
        word.push('Thousand')
    } else if ( Number(str[5]) > 1 && Number(str[6]) === 0 ){
        word.push(ten[Number(str[5])])
        word.push('Thousand')
    } else if ( Number(str[5]) > 1 ){
        word.push(ten[Number(str[5])])
    }
    if ( Number(str[6]) > 0 && Number(str[5]) !== 1){
        word.push(one[Number(str[6])])
        word.push('Thousand')
    }
    if ( Number(str[7]) > 0 ){
        word.push(one[Number(str[7])])
        word.push('Hundred')
    }
    if ( Number(str[8]) === 1){
        word.push(teen[Number(str[9])])
    } else if ( Number(str[8]) > 1 && Number(str[9]) === 0 ){
        word.push(ten[Number(str[8])])
    } else if ( Number(str[8]) > 1 ){
        word.push(ten[Number(str[8])])
    }
    if ( Number(str[9]) > 0 && Number(str[8]) !== 1){
        word.push(one[Number(str[9])])
    }
    if (num === 0) {
        word.push('Zero')
    }
    ret = word.join(' ')
    return ret;
};

console.log( numberToWords(9437854) )