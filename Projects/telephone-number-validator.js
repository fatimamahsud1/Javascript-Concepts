function telephoneCheck(str) {
  return /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/.test(str);
}

// Test cases
console.log(telephoneCheck("555-555-5555"));      
console.log(telephoneCheck("1 555-555-5555"));   
console.log(telephoneCheck("1 (555) 555-5555")); 
console.log(telephoneCheck("5555555555"));        
console.log(telephoneCheck("(555)555-5555"));     
console.log(telephoneCheck("1(555)555-5555"));    
console.log(telephoneCheck("555-5555"));          
console.log(telephoneCheck("5555555"));          
console.log(telephoneCheck("1 555)555-5555"));    
console.log(telephoneCheck("1 555 555 5555"));    
console.log(telephoneCheck("1 456 789 4444"));    
console.log(telephoneCheck("123**&!!asdf#"));     
console.log(telephoneCheck("55555555"));         

