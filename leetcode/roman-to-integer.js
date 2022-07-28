/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    // 1. 문자 갯수 세어보기
   // 2. 특수조건 3가지 걸러내기 (if문 사용)
   // 3. IV IX 
   //    XL XC
   //    CD CM


   let arr = s.split('');

   let sum = 0;

   let inumber = 0;
   let vnumber = 0;
   let xnumber = 0;
   let lnumber = 0;
   let cnumber = 0;
   let dnumber = 0;
   let mnumber = 0;

   let iflag = false;
   let xflag = false;
   let cflag = false;

   for (i=0;i<s.length;i++){
       if (arr[i]+arr[i+1]==='IV') {
           iflag = true
       } else if (arr[i]+arr[i+1]==='IX'){
           iflag = true
       } else if (arr[i]+arr[i+1]==='XL'){
           xflag = true
       } else if (arr[i]+arr[i+1]==='XC'){
           xflag = true
       } else if (arr[i]+arr[i+1]==='CD'){
           cflag = true
       } else if (arr[i]+arr[i+1]==='CM'){
           cflag = true
       } 

       if (arr[i] === 'I') {
           inumber++;
       } else if (arr[i] === 'V') {
           vnumber++;
       } else if (arr[i] === 'X') {
           xnumber++;
       } else if (arr[i] === 'L') {
           lnumber++;
       } else if (arr[i] === 'C') {
           cnumber++;
       } else if (arr[i] === 'D') {
           dnumber++;
       } else if (arr[i] === 'M') {
           mnumber++;
       }
   }
   
 sum = inumber+(5*vnumber)+(10*xnumber)+(50*lnumber)+(100*cnumber)+(500*dnumber)+(1000*mnumber);    
   

   if (iflag) {
       sum -= 2;
   }
   if (xflag) {
       sum -= 20;
   }
   if (cflag) {
       sum -= 200;
   }

   return sum;
};

console.log(romanToInt('XXI'))