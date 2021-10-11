// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function

// describe("", () => {
//   it("", () => {
//     expect().toEqual()
//   })
// })

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// function - codedMessage
// parameters - string
// split string to array of individual characters
// iteration - map
// conditional - replace particular values in both casings
// join to string

// a) Create a test with expect statements using the variables provided.

describe("codedMessage", () => {
  it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
    var secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    var secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    var secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

// b) Create the function that makes the test pass.

// const codedMessage = (string) => {
//   let coded = string.split("").map(value => {
//     if(value === "a"){
//       return 4
//     } else if(value.toLowerCase() === "e"){
//       return 3
//     } else if(value.toLowerCase() === "i"){
//       return 1
//     } else if(value.toLowerCase() === "o"){
//       return 0
//     } else {
//       return value
//     }
//   })
//   return coded.join("")
// }

// Regular Expressions:
const codedMessage = (string) => {
  return string.replaceAll(/a/gi, 4).replaceAll(/e/gi, 3).replaceAll(/i/gi, 1).replaceAll(/o/gi, 0)
}

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// function - letterFinder
// parameters - array, string
// iteration - filter
// includes, consider the casing

// a) Create a test with expects statement using the variable provided.

describe("letterFinder", () => {
  it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
    var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    var letterA = "a"
    // Expected output: ["Apple", "Banana", "Orange"]
    var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    var letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    expect(letterFinder(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
    expect(letterFinder(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})

// b) Create the function that makes the test pass.

// const letterFinder = (array, string) => {
//   return array.filter(value => {
//     return value.toLowerCase().includes(string)
//   })
// }
// const letterFinder = (array, string) => {
//   return array.filter(value => {
//     return value.toLowerCase().indexOf(string.toLowerCase()) !== -1
//   })
// }
const letterFinder = (array, string) => array.filter(value => value.toLowerCase().indexOf(string.toLowerCase()) !== -1)

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// function - fullHouse
// parameters - array
// anchor - first item
// iterate - checking how many times that item appears
// second item - if first iteration, and we reach something that is not the anchor, save that thing as a variable
// iterate - checking how many times the second item appears
// the count on those two items should be 2, 3 or 3, 2
// anything else is not a fullhouse

// a) Create a test with expect statements using the variable provided.


describe("fullHouse", () => {
  it("takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.", () => {
    var hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    var hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    var hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
  })
})

// b) Create the function that makes the test pass.

const fullHouse = (array) => {
  let firstCard = array[0]
  let firstCardCounter = 0
  let secondCard = null
  let secondCardCounter = 0
  array.forEach(value => {
    if(value === firstCard){
      firstCardCounter += 1
    } else {
      secondCard = value
    }
  })
  array.forEach(value => {
    if(value === secondCard){
      secondCardCounter += 1
    }
  })
  if(firstCardCounter === 3 && secondCardCounter === 2){
    return true
  } else if(firstCardCounter === 2 && secondCardCounter === 3){
    return true
  } else {
    return false
  }
}
