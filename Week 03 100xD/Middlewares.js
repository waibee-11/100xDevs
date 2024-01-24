// MIDDLEWARES:
// - Middleware is an additional function that runs before
// the actual method runs.
// - A good analogy is a doctor's clinic. You never enter the
// doctor's cabin directly. You first go to the reception,
// pay bills, show your appointment, etc. before you can
// see the doctor.
// - Middlewares are like the pre-checks.
// - We know how to code the doctor's cabin (express app)
// - Now, we will see how to code middlewares.

// 2 COMMON CHECKS THAT WE WILL PERFORM:
// - Input validation
// - User Authentication

// CODING IT THE UGLY WAY:
// const express = require('express');
// const app = express();

// app.get('/health', (req, res) => {
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if (username != "yash" || password != "123"){
//         res.status(403).json({
//             msg: "User does not exist"
//         });
//         return;
//     }

//     if (kidneyId != 1 && kidneyId != 2){
//         res.status(411).json({
//             msg: "Wrong inputs",
//         });
//         return;
//     }
//     // do something with the kidneys
//     res.json({
//         msg: "Your request reached us successfully",
//     });
// });

// app.listen(3000);

// USING MIDDLEWARES:
// - Now imagine if there are 10 other routes where you need
// to perform both input validation and user authentication.
// - Using the above method, we would have to write the same
// code 20 times. (This violates the DRY principle)
// - So, we use Middlewares.

// const express = require("express");
// const app = express();

// function userMiddleware(req, res, next){
//     const username = req.headers.username;
//     const password = req.headers.password;
//     if (username != "yash" || password != "123"){
//         res.status(401).json({
//             msg: "User does not exist",
//         });
//     } else {
//         next();
//     }
// };

// function inputMiddleware(req, res, next){
//     const kidneyId = req.query.kidneyId;
//     if (kidneyId != 1 && kidneyId != 2){
//         res.status(403).json({
//             msg: "Wrong inputs",
//         });
//     } else {
//         next();
//     }
// };

// app.get('/health', userMiddleware, inputMiddleware, (req, res)=>{
//     // do something with kidney
//     res.json({
//         msg: "We have received your request!",
//     });
// });

// app.listen(3000);

// Even though this method feels longer, in the long run it is less long.

// QUERY PARAMS:
// - There are many ways of sending inputs to the backend.
// - So far we have seen headers, body and query params.
// - Headers and Body is straightforward. We can send data through
// headers and body while testing the requests in postman or via code.
// - However, for query params, we add parameters to the url.
// - The syntax is '?param=value' after the url.
// - Example: To send 'n=1' as a query params to the '/intro' endpoint,
// we would say '/intro?n=1'
// - Accessing the query param n inside the middlewares or functions
// can be done as 'req.query.n'