// TRY-CATCH:
// - It is used to handle errors and prevent the program
//   from crashing.
// - By using a try-catch block, the program will run a
//   different code when an error occurs and the rest of the
//   program will run normally.
try {
    let a;
    console.log(a.length);
    console.log("Hi from try");
} catch (e){
    console.log("Hi from catch");
    console.log(e);
}
console.log("Hi from outside");

// - Once you run the above code, you will see that line 15
//   runs even though line 9 is wrong.