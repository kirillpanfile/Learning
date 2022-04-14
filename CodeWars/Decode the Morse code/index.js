decodeMorse = function (morseCode) {
  return morseCode
    .split(" ")
    .map((el) => (MORSE_CODE[el] != undefined ? MORSE_CODE[el] : " "))
    .join("")
    .replace(/\s+/g, " ")
    .trim();
};
