/*
    INSTRUCTIONS
    This function (cToF) will receive a number as input, this will be in celsius and you need to convert to fahrenheit.
    The formula that you need to use is C * 9/5 + 32

    Good luck!
*/



/** DO NOT CHANGE THE FUNCTION NAME **/
const cToF = (c) => {
    /* Only make changes below this comment */
    let F = (c*(9/5)) + 32;
    return F;
    /* Only make changes below this comment */
}

console.log(cToF(50)) //The result is 122 (50*(9/5) + 32)




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cToF = cToF;
