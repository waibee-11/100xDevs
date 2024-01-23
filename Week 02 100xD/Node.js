// ECMASCRIPT:
// - It is a scripting language specification on which JS is
// based.
// - There are many other languages that are based on ECMAScript.

// JAVASCRIPT:
// - Javascript is one implementation and the most widely known 
// implementation of ECMAScript.
// - JS also includes additional features that are not a part of
// the ECMA specification. For example, setTimeout() is a part of
// WEB API.
// - Common JS compilers are v8 (by Google and written in C/C++),
// and SpiderMonkey (by Firefox and written in Rust and C++)

// NODEJS:
// - It is a JS runtime.
// - JS originally was meant to be run in the browser
// - Some smart people took out the v8 engine, added some backend
// functionalities and created an environment to run it locally.
// - NodeJS basically made JS a backend language
// - We will use NodeJS in this course

// BUN:
// - NodeJS is very slow (for multiple reasons)
// - So, BUN is basically another runtime for JS and is much faster
// - It is written in ZIG

// WHAT YOU CAN DO WITH NODEJS:
// - Create Command Line Interfaces (CLI)
// - Create a video player
// - Create an HTTP Server
// - Create a game

// HTTP:
// - Full form: Hyper Text Transfer Protocol
// - It is a protocol that is defined for machines to communicate
// - Specifically for websites, it is the most common way for a
// website's frontend to communicate with its backend

// FRONTEND:
// - Whatever you can see or interact with is a frontend
// - Use languages like HTML, CSS, JS, React

// BACKEND:
// - Backend is the place where some proprietary code runs.
// - Functions like user authentication, accessing or storing data.
// - Backend server is a computer that performs these functions.

// HTTP SERVER:
// - An HTTP Server is some code that follows the HTTP Protocol.
// - An HTTP request usually has components like url, header, body.
// - Common request types are PUT, POST, GET, DELETE (many more!)

// CREATING AN HTTP SERVER:
// const express = require('express');
// const app = express();
// app.get('/', (req, res)=>{
//     res.status(200).json({
//         msg: "Hello Yash",
//         status: "200"
//     })
// })
// app.post('/conversations', (req, res)=>{
//     console.log(req.headers);
//     res.json({
//         msg: "Received your request",
//         status: "200"
//     })
// })
// app.listen(3000);

// DESCRIPTION OF THE ABOVE CODE:
// - We use a library called EXPRESS to create an HTTP Server.
// - Express makes it very easy, but we can also use C++, etc.
// - We are creating 2 requests (GET AND POST).
// - Get request is on the url '/' and the Post request is on the
// url '/conversations'
// - Other stuff is a little more advanced to explain now
