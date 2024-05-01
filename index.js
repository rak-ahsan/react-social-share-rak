export function binaryToDecimal(binary) {
  let decimal = 0;
  let power = binary.length - 1;
  for (let i = 0; i < binary.length; i++) {
    decimal += parseInt(binary[i]) * Math.pow(2, power);
    power--;
  }
  return decimal;
}
