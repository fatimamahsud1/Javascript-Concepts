function rot13(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const shift = 13;
  
  return str.replace(/[A-Z]/g, (char) => {
    const charIndex = alphabet.indexOf(char);
    const decodedIndex = (charIndex + shift) % 26;
    return alphabet[decodedIndex];
  });
}

// Test case
console.log(rot13("EBG13")); 
console.log(rot13("LBH QVQ VG!")); 
