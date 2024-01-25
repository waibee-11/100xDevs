// AUTHENTICATION:
// - Anyone can send a request to the backend via Postman.
// - You need an authentication system in place to check if 
//   the user is logged in
// - A dumb way is to ask the user to send username and
//   password in every request as headers.
// - A slightly better way is:
//     - Give the user a token on sign in / sign up.
//     - Ask the user to give the token in every request.
//     - When the user logs out, ask the user to forget the
//       token.

// JSON WEB TOKEN (JWT):
// - Imagine this analogy:
//     - Yash goes to the bank to open an account.
//     - The bank will open the account and give Yash
//       cheque book.
//     - Yash can now send money via cheques. The bank will
//       only accept Yash's cheque with his sign.
// - The bank is similar to backend and the cheque book is
//   similar to JWT.
// - When a user signs up or logs in, the backend will send
//   a JWT, which the user will have to send back in all
//   future requests.

// FUNCTIONS INVOLVED WITH JWT:
// - Generating
// - Decoding
// - Verifying

// GENERATING:
// - It is obvious what will happen here. The backend creates
//   a JWT and sends it to the user.
// - It is usually a random sequence of characters and digits.

// DECODING:
// - This is the process by which anyone can get back the
//   information decoded in the JWT.
// - The important note is that anyone can decode a JWT.

// VERIFICATION:
// - This is the process by which backends recognize a user.
// - This requires a special key that only the backend has.
// - So, even if anyone can decode the JWT, only the backend
//   can verify it.

const jwt = require("jsonwebtoken");

const value = {
    name: "yash",
    accountNumber: 123123123,
}

const token = jwt.sign(value, "secret");

// - The secret is very important. The backend needs to store
//   the secret key securely.