function shiftChar(char, shift) {
  const code = char.charCodeAt(0);
  let shiftedCode = code;

  if (code >= 65 && code <= 90) {
    shiftedCode = ((code - 65 + shift) % 26) + 65;
  } else if (code >= 97 && code <= 122) {
    shiftedCode = ((code - 97 + shift) % 26) + 97;
  }

  return String.fromCharCode(shiftedCode);
}

export function caesarCipher(string, shift) {
  return string
    .split("")
    .map((char) => {
      if (char.match(/[a-z]/i)) {
        return shiftChar(char, shift);
      }
      return char;
    })
    .join("");
}
