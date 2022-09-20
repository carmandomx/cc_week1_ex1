/*
    INSTRUCTIONS
    This function (cToF) will receive a number as input, this will be in celsius and you need to convert to fahrenheit.
    The formula that you need to use is C * 9/5 + 32

    Good luck!
*/



/** DO NOT CHANGE THE FUNCTION NAME **/
const cToF = (c) => {
    /* Only make changes below this comment */
    var cTemp = c;  /* using a temp var equalizing it to the one used in the function */
    var F = (cTemp)*(9/5) + 32; /* plugging the tempvar into the equation to go from celsius to farenheit*/
        console.log(F);    /* printing the result */
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cToF = cToF;
