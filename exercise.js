/*
    INSTRUCTIONS
    This function (cToF) will receive a number as input, this will be in celsius and you need to convert to fahrenheit.
    The formula that you need to use is C * 9/5 + 32

    Good luck!
*/

/** DO   CHANGE THE FUNCTION NAME **/
const cToF = (c) => {
  /* Only make changes below this comment */
  if (typeof c === "number" && c !== undefined) {
    let farh = (c * 9) / 5 + 32;
    return farh;
  } else {
    return "Please only number for 'c'";
  }
  /* Only make changes below this comment */
};

/*console.log(cToF());
console.log(cToF(100));
console.log(cToF(0));
console.log(cToF("100"));*/

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cToF = cToF;
