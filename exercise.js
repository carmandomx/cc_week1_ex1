/*
    INSTRUCTIONS
    This function (cToF) will receive a number as input, this will be in celsius and you need to convert to fahrenheit.
    The formula that you need to use is C * 9/5 + 32

    Good luck!
*/



/** DO   CHANGE THE FUNCTION NAME **/
const CFConv = (c) => {
    /* Only make changes below this comment */

    let f = c * (1.8) + 32;      /*Mathematical formula to convert Celsius into Fahrenheit. Used [1.8] instead of [9/5] to save memory */
    return f                     /*I must return a "result" everytime a function finish its action, here im returning °F*/

    /* Only make changes below this comment */
}


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cToF = CFConv;