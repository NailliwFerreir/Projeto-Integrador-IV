export function removeCurrencyMaskBR(inputStr) {
  let numericStr = inputStr
    .replace("R$", "")
    .replace(".", "")
    .replace(",", ".");
  try {
    return parseFloat(numericStr).toFixed(2);
  } catch (error) {
    return numericStr;
  }
}

export function currencyMaskBR(inputStr) {
  if (typeof inputStr === "number")
    inputStr = inputStr.toString().replace(".", "");
  var numericStr = inputStr.replace(/[^0-9]/g, "");
  numericStr = numericStr.replace(/^0+/, "");
  if (numericStr.length < 2) {
    numericStr = numericStr.padStart(2, "0");
  }
  if (numericStr.length <= 2) {
    numericStr = numericStr.padStart(3, "0");
  }
  var integerPart = numericStr.slice(0, -2);
  var decimalPart = numericStr.slice(-2);
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  var formattedValue = "R$ " + integerPart + "," + decimalPart;
  return formattedValue;
}

export function dateBRMask(str) {
  let formattedDate = "";
  for (let i = 0; i < str.length; i++) {
    if (/[0-9]/.test(str[i])) {
      formattedDate += str[i];
      if (i === 1 || i === 4) {
        formattedDate += "/";
      }
      if (i === 9) break;
    }
  }
  return formattedDate;
}
