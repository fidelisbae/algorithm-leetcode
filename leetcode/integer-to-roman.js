/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    
    let four = ['','M','MM','MMM']
    let three = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM']
    let two = ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC']
    let one = ['','I','II','III','IV','V','VI','VII','VIII','IX']

    str = String(num).padStart(4,'0')

    

    let roman = four[Number(str[0])] + three[Number(str[1])] + two[Number(str[2])] + one[Number(str[3])]

    return roman;
};

console.log( intToRoman(3479) )