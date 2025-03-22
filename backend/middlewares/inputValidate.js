// The code above is the input validation middleware. It uses the zod library to define the schema for the signup and signin data. The validateSignup and validateSignin functions validate the request body against the defined schema and return an error if the input is incorrect. The middleware is used in the auth.js file to validate the input data before processing the request.

const { z } = require('zod');
const signupSchema = z.object({
    email: z.string().email(),
    username: z.string().min(3).max(20),
    password: z.string().min(6)
});
// Signin schema
const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});

// Validate signup data
const validateSignup = (req, res, next) => {
    const result = signupSchema.safeParse(req.body);
    if (result.success) {
        next();
    }
    else {
        res.status(400).json({ error: "wrong input" });
    }
};
const validateSignin = (req, res, next) => {
    const result = signinSchema.safeParse(req.body);
    if (result.success) {
        next();
    }
    else {
        res.status(400).json({ error: "wrong input" });
    }
};
module.exports = { validateSignup, validateSignin };
