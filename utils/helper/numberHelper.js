export const RoundToDecimal = (number) => {
    const parsedNumber = parseFloat(number);
    if (isNaN(parsedNumber)) {
      return NaN; // Return NaN if the input is not a valid number
    }
    return Number(parsedNumber.toFixed(2));
}
  