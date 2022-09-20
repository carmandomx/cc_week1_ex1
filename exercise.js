/*
    INSTRUCTIONS
    This function (cToF) will receive a number as input, this will be in celsius and you need to convert to fahrenheit.
    The formula that you need to use is C * 9/5 + 32

    Good luck!
*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const cToF = (c) => {
    /* Only make changes below this comment */
    let f = c * (9/5) + 32;

    //c makes a reference to celcius degrees and it is the variable that my function receives
    //f store the result of convert celcius to fahrenheit degrees

    return f;
    //At the final we print the solution
    /* Only make changes below this comment */
}







/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cToF = cToF;
