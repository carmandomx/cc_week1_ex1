/*
    INSTRUCTIONS
    This function (cToF) will receive a number as input, this will be in celsius and you need to convert to fahrenheit.
    The formula that you need to use is C * 9/5 + 32

    Good luck!
*/



/** DO NOT CHANGE THE FUNCTION NAME **/
const cToF = (c) => {
    /* Only make changes below this comment */

    // Creation of local variables used through this function.
    const cTemp = c;
    let Farenheit = 0;

    /* Using the switch control flow to decide between wheter the parameter 
       given is 0°C which would return the value of 32°F, or any other value 
       in °C where the formula °F=°C*(9/5)+32. */

    switch (cTemp) {
        case 0:
            Farenheit = 32;
            break;
        default:
            Farenheit = cTemp * (9/5) + 32;
            break;
    }
    return Farenheit;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cToF = cToF;
