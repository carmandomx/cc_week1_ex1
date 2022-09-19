/*
    INSTRUCTIONS
    This function (cToF) will receive a number as input, this will be in celsius and you need to convert to fahrenheit.
    The formula that you need to use is C * 9/5 + 32

    Good luck!
*/



/** DO   CHANGE THE FUNCTION NAME **/
const cToF = (c) => {
    /* Only make changes below this comment */

    /* We create a variable to storage the result of the formula for convert celcius to fahrenheit */
    let f = c * 9 / 5 + 32

    /* Then we return de result storage on F to show outside this fuction*/
    return f

    /* Only make changes below this comment */
}


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cToF = cToF;