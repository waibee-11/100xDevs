// ARROW FUNCTIONS:
// - This is another way of writing functions.
// - We can avoid the 'function' keyword.
// - Example:
// // Traditional Function
// function sum(a,b){
//     return a+b;
// }
// // Arrow Function
// const sum = (a,b)=>{
//     return a+b;
// }

// MAP FUNCTION:
// Problem: Given an array, give back another array
// in which every array is multiplied by 2
// Solution:
// const input = [1,2,3,4,5];
// const output1 = [];
// for (let i = 0; i < input.length, i++){
//     output.push(input[i]*2);
// }
// This is one possible solution

// However, this method is very lengthy (in JS).
// We can use another method called MAP
// function transform(i){
//     return i*2;
// }
// const output2 = input.map(transform);
// Here, we defined a transformation function that
// multiplies the input given to it.
// In JS, there exists a function called MAP which takes
// an array and a transformation which it applies on
// every element of that array.

// We can define the transformation function inside the
// map function
// const output3 = input.map((i)=>{return 2*i})

// FILTER FUNCTION:
// This is similar to map function, but here we want to
// choose certain elements based on a condition
// We will once again define our condition and feed it
// to the filter function along with the array.
// Problem: Given an array, return an array of even no.s
// const input = [1,2,3,4,5];
// const output4 = input.filter((i)=>{
//     if (i%2 == 0){
//         return i;
//     }
// })