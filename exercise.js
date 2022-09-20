/*
    INSTRUCTIONS
    This function (cToF) will receive a number as input, this will be in celsius and you need to convert to fahrenheit.
    The formula that you need to use is C * 9/5 + 32

    Good luck!
*/



/** DO NOT CHANGE THE FUNCTION NAME **/
const cToF = (c) => {
    /* Only make changes below this comment */

    /*First I declare the variable f (as a reference to fahrenheit) using let to disallow other 
    declarations of that variable. In the same line I proceed to do the given calculation for the 
    conversion from Celsius to Fahrenheit storing the result in the variable f. */

    let f = (c * (9/5)) + 32;

    return f; //Finally I return the value of f (our result).

    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cToF = cToF;
