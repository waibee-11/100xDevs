// GLOBAL CATCHES:
// - It is a type of middleware in JS.
// - It is defined at the very end, after all the routes.
// - Whenever a server goes down, instead of exposing the
// error, we can use global catches to provide a clean
// message like "Error: Server is down"
// - The syntax is:
// app.use((err, req, res, next)=>{
//     res.json({
//         msg: "Sorry, something is up with our server",
//     });
// });

// - We add this particular block of code at the very end
// of our express app. Whenever there is an error, instead
// of displaying the error message, the above function will
// run.
// - Usually you have only one of these at the end, and then
// you forget about it.