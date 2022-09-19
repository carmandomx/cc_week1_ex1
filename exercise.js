/*
    INSTRUCTIONS
    This function (cToF) will receive a number as input, this will be in celsius and you need to convert to fahrenheit.
    The formula that you need to use is C * 9/5 + 32

    Good luck!
*/



/** DO NOT CHANGE THE FUNCTION NAME **/
const cToF = (c) => {
    /* Only make changes below this comment */
    
    // Declare a constant and assign to it the expresion to calculate Fahrenheit degrees using the parameter received
    const cToFahrenheit = c * (9 / 5) + 32;
    // Return the calculated value
    return cToFahrenheit;
    /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cToF = cToF;
