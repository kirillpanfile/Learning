let stringOne: string = "This is the first string"
let stringTwo: string = "This is the second string"

// charAt()
console.log(stringOne.charAt(0)); //* T

//charCodeAt()
console.log(stringOne.charCodeAt(0)); //* 84

//concat()
console.log(stringOne.concat(stringTwo)); //* This is the first stringThis is the second string

//endWith()
console.log(stringOne.endsWith("ng")); //* true

// fromCharCode()

console.log(String.fromCharCode(84)); //* T