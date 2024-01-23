// COMPILED VS INTERPRETED LANGUAGES:
// - Compiled languages like C++ come with a 
// compiler (like G++) which converts code into
// binary.
// - Compiled languages will never run if there is
// an error in the code.

// - Interpreted languages on the other hand will
// simply run. It converts the code into binary
// line-by-line.
// - Interpreted languages will run partially until
// an error is encountered.

// DYNAMIC VS STATIC LANGUAGES:
// - JAVASCRIPT is a dynamic language. This means that
// we don't need to define data types for variables.
// - C++ however is a static language. We need to
// define data types like int, str, etc. for every
// variable.

// SINGLE THREADED NATURE OF JS:
// - Every machine has several performance cores.
// - JS can use only one of these at a time, which is
// why it is referred to as single-threaded.
// - Therefore, it is considered to be a bad language
// for scalable systems.
// - There is context switching, but it does only one
// task at a time.

// SIMPLE PRIMITIVES:
// - Variables (let, var, const)
// - Datatypes (int, str, bool)
// - Conditionals (if, else if, else)
// - Loops (for, while)

// COMPLEX PRIMITIVES:
// - Arrays
// - Objects

// PQ1 - Write a JS program that greets a person given
// the first name and last name.
// Answer:
// const fname = "Yash";
// const lname = "Barve";
// console.log(`Hi ${fname} ${lname}`);

// FUNCTIONS:
// - Let you abstract out logic in the program
// - Prevent repetition of code (DRY principle)
// - Functions can take other functions as
// input too (CALLBACKS)

// SYNCHRONOUS vs ASYNCHRONOUS functions:
// - Synchronous (sync) functions run line by line

// - Asynchronous (async) functions are those that
// allow a program to start a potentially huge
// operation and continue executing other tasks
// without waiting for this one to end.
// - Examples include reading from a file, or
// built-in functions like setTimeout()

// - Another example of async functions:
// fs.readFile("a.txt", "utf-8", (err, data) => {
//     console.log(data);
// });
// console.log("Hi There");
// The above code will produce "Hi There" first and then
// produce the contents of the file a.txt (assuming it exists)
// This is because of fs.readFile() being an async function

// JS BROWSER ARCHITECTURE:
// JS Browser usually has 4 parts: Call Stack, Callback Queue,
// Event Loop, Web API's
// Once the asnyc function renders, it is put on the 
// CALLBACK QUEUE. Once the thread is free, it is pulled.
// The thread is running on the CALL STACK

// CALLBACK FUNCTIONS
// - Sometimes, functions take other functions as
// inputs and execute them on some other input.
// - The input functions are called callback functions.
// Example:
// setTimeout(function timeout(){
//     console.log("Function executed!")
// }, 5000)

// PROMISES
// - It is just syntactical sugar and callbacks under the hood
// Syntax:
// function yashReadFile(){
//     return new Promise((resolve)=>{
//         fs.readFile("a.txt", "utf-8", (err, data)=>{
//             resolve(data);
//         });
//     });
// }
// function onDone(data){
//     console.log(data);
// }
// yashReadFile().then(onDone);

// EXPLAINING HOW PROMISES WORK:
// A promise has a resolve function.
// Whatever is passed in the resolve function is passed to the
// callback function (onDone() in the above example)
// ".then()" tells the promise where to send data
// Basically promise is a class that makes callbacks and
// async functions more readable

// ASYNC-AWAIT SYNTAX:
// Again, it is just syntactical sugar and uses callbacks and
// promises under the hood.
// Syntax:
// function yashAsyncFunction(){
//     let p = new Promise((resolve)=>{
//         // do something async stuff here
//         resolve("Hi There");
//     });
//     return p;
// }
// async function main(){
//     let value = await yashAsyncFunction();
//     console.log(value);
// }
// main();
// The async and await keywords help you get rid of the .then()
// syntax