/*
    INSTRUCTIONS
    This function (cToF) will receive a number as input, this will be in celsius and you need to convert to fahrenheit.
    The formula that you need to use is C * 9/5 + 32

    Good luck!
*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cToF = (c) => {
  /* Only make changes below this comment */

  //conditional for only number values and for a "c" defined.
  if (typeof c === "number" && c !== undefined) {
    //We define a variable called 'fahrenheit' and assign the operation for convert Celcius to fahrenheit degrees.
    let fahrenheit = (c * 9) / 5 + 32;
    //return the value for 'fahrenheit'.
    return fahrenheit;
  } else {
    //otherwise we send a warning for value of "c"
    return "Please only number for 'c'";
  }

  /* Only make changes below this comment */
};
/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cToF = cToF;
