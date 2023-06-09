// Code Talks 
// Week 2 of Node.js

// Instructions
// Please review the questions/problems below.  Please come prepared to explain the concept, or code out the question in front of the class. 



// Coding Problem 1--------------------------------------------------------------------
// What is a promise? What are promises used for?  What are pro/cons to using a promise?  Please code some examples of promises to show to the class. Make sure to go into detail as you explain your code to the class.
// 


// A promise in JavaScript is an object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A promise can have a state of Pending,Fulfilled or Rejected.
function delay(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  }
  
  console.log("Start");
  delay(2000)
    .then(() => {
      console.log("Two seconds have passed!");
      return delay(1000);
    })
    .then(() => {
      console.log("Another second has passed!");
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });


// Coding Problem 2-------------------------------------------------------------------- 
// What is a callback? What is callback hell? Why does callback hell occur and why should we avoid callback hell?  Please code an example of callback hell to show to the class. Make sure to go into detail as you explain your code to the class.

// A callback function is a function that is passed as an argument to another function and is executed later when a certain event or task is completed. 
//Callback hell happens when you have multiple nested callback functions within callbacks, making the code difficult to read and maintain

console.log("Start");

setTimeout(() => {
  console.log("First operation completed");

  setTimeout(() => {
    console.log("Second operation completed");

    setTimeout(() => {
      console.log("Third operation completed");

      setTimeout(() => {
        console.log("All operations completed");
      }, 1000); // Fourth operation

    }, 2000); // Third operation

  }, 3000); // Second operation

}, 4000); // First operation


// Coding Problem 3--------------------------------------------------------------------
// The “this” keyword works differently in arrow functions vs regularly declared functions.  Explain how the “this” keyword works differently in arrow functions vs normal functions.  Write some code that shows that you understand the difference between how the “this” keyword is used.  Make sure to go into detail as you explain your code to the class.



// Coding Problem 4--------------------------------------------------------------------
// Using only the filter method on the numbers array, create a function that returns a new array that only contains the numbers divisible by both 3 and 6 but NOT 9. 
// const numbers = [48, 20, 18, 7, 12,9, 8,10,12, 96, 3,36,51];


// Coding Problem 5--------------------------------------------------------------------
// What is a async/await? Why is async/await useful?  What are pro/cons to using async/await?  Please code some examples of async/await to show to the class. Make sure to go into detail as you explain your code to the class.

