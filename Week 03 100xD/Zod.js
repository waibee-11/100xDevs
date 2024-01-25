// ZOD:
// - ZOD is an input validation library.
// - It allows you to provide it with a required schema that
// you expect to receive as inputs.
// - ZOD will do the input validation for you.

const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

app.get('/health', (req, res, next)=>{
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    res.json({
        response,
    });
});

app.listen(3000);

// - The main focus here is creating the correct zod schema
// - Use 'www.zod.dev' to learn how to create more complex
// zod schemas.
// NOTE: Line 13 is required to read inputs from req.body