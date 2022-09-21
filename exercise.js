/*
    INSTRUCTIONS
    This function (cToF) will receive a number as input, this will be in celsius and you need to convert to fahrenheit.
    The formula that you need to use is C * 9/5 + 32

    Good luck!
*/



/** DO NOT CHANGE THE FUNCTION NAME **/
const cToF = (c) => {
    /* Only make changes below this comment */
    
    return (c * 9/5) + 32;

    /* Only make changes below this comment */
}


function palindrome(str) {
    
    var re = /[\W_]/g;
    
    var lowRegStr = str.toLowerCase().replace(re, '');    
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    
    return reverseStr === lowRegStr; 
  }





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cToF = cToF;
