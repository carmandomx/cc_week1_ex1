/*
    INSTRUCTIONS
    This function (cToF) will receive a number as input, this will be in celsius and you need to convert to fahrenheit.
    The formula that you need to use is C * 9/5 + 32

    Good luck!
*/



/** DO NOT CHANGE THE FUNCTION NAME **/
const cToF = (c) => {
    /* Only make changes below this comment */

    /* We assign the formula from centigrade to fahrenheit to the variable 'conversion' */
    let convertion = 0;
    convertion = c * (9/5) + 32;    

    /* Return the final value */
    return convertion;

    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cToF = cToF;
