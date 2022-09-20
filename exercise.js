/*
    INSTRUCTIONS
    This function (cToF) will receive a number as input, this will be in celsius and you need to convert to fahrenheit.
    The formula that you need to use is C * 9/5 + 32

    Good luck!
*/



/** DO NOT CHANGE THE FUNCTION NAME **/
const cToF = (c) => {
    /* Only make changes below this comment */
    let f = c *9/5 + 32; //I created a new variable that will be the temperature un f (farenheit) and applied the formula
    return (f); // I console logged the solution, I could also have used the return keyword
    /* Only make changes below this comment */
}
cToF(0); // callback of the function with the temperature in celsius, the output will be in farenheit




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cToF = cToF;
