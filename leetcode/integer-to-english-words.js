// 
//  @param {number} num
//  @return {string}
//  
// 2 315 673 456 
// 두자리 네자리 네자리로 자른다
//



 var numberToWords = function(num) {
    let str = String(num).padStart(10,'0') // 입력받은 숫자를 0000394800 10자리 스트링으로 변경
    let word = '' // 출력할 결과 스트링

    let one = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'] // 1의자리
    let teen = ['Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen']
    // 10~19
    let ten = ['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety']
    // 2~90

    // 2 384 837 593

    if ( Number(str[0]) > 0 ){
        word = one[Number(str[0])] + ' Billion '
    } 

    if ( Number(str[1]) > 0 ){
        word = word + one[Number(str[1])] + ' Hundred '
    }

    if ( Number(str[2]) === 1){
        word = word + teen[Number(str[3])] + ' Million '
    } else if ( Number(str[2]) > 1 && Number(str[3]) === 0 ){
        word = word + ten[Number(str[2])] + ' Million '
    } else if ( Number(str[2]) > 1 ){
        word = word + ten[Number(str[2])] + ' '
    }

    if ( Number(str[3]) > 0 && Number(str[2]) !== 1){
        word = word + one[Number(str[3])] + ' Million '
    }

    if ( Number(str[4]) > 0 ){
        word = word + one[Number(str[4])] + ' Hundred '
    }

    if ( Number(str[5]) === 1){
        word = word + teen[Number(str[6])] + ' Thousand '
    } else if ( Number(str[5]) > 1 && Number(str[6]) === 0 ){
        word = word + ten[Number(str[5])] + ' Thousand '
    } else if ( Number(str[5]) > 1 ){
        word = word + ten[Number(str[5])] + ' '
    }

    if ( Number(str[6]) > 0 && Number(str[5]) !== 1){
        word = word + one[Number(str[6])] + ' Thousand '
    }

    if ( Number(str[7]) > 0 ){
        word = word + one[Number(str[7])] + ' Hundred '
    }

    if ( Number(str[8]) === 1){
        word = word + teen[Number(str[9])]
    } else if ( Number(str[8]) > 1 && Number(str[9]) === 0 ){
        word = word + ten[Number(str[8])] 
    } else if ( Number(str[8]) > 1 ){
        word = word + ten[Number(str[8])] + ' '
    }

    if ( Number(str[9]) > 0 && Number(str[8]) !== 1){
        word = word + one[Number(str[9])]
    }

    if (num === 0) {
        word = 'Zero'
    }

    
    return word;
    
};

console.log( numberToWords(4) )