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

//includes()
console.log(stringTwo.includes("sec")); //* true

//indexOf()
console.log(stringOne.indexOf('first')); //* 12

//lastIndexOf()
console.log(stringOne.lastIndexOf('first')); //* 12

//match()
console.log(stringTwo.match(/second/g)); //*  ['second']

//repeat()
console.log(stringTwo.repeat(3)); //* This is the second stringThis is the second stringThis is the second string

//search()
console.log(stringOne.search("the")); //* 8

//slice()
console.log(stringTwo.slice(2, 4)); //* is

//split()
console.log(stringOne.split(' ')); //* [ 'This', 'is', 'the', 'first', 'string' ]


//startsWith()
console.log(stringTwo.startsWith("This")); //* true

//substr()
console.log(stringTwo.substr(1, 8)); //* his is t

//substring()
console.log(stringTwo.substring(1, 8)); //* his is

//toUpperCase()
console.log(stringOne.toUpperCase()); //* THIS IS THE FIRST STRING

//toLowerCase()
console.log(stringOne.toLowerCase()); //* this is the first string


