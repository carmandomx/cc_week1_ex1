/*
    INSTRUCTIONS
    This function (cToF) will receive a number as input, this will be in celsius and you need to convert to fahrenheit.
    The formula that you need to use is C * 9/5 + 32

    Good luck!
*/



/** DO NOT CHANGE THE FUNCTION NAME **/
const cToF = (c) => {
    /* Only make changes below this comment */
    // create a variable where the result of the conversion formula is stored
    let fahrenheit = c*9/5+32;
    //show the result on console
    console.log(fahrenheit);
    // return the conversion
    return fahrenheit;

    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cToF = cToF;
