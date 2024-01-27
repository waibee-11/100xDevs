const { Router } = require("express");
const JWT_SECRET = require("..");
const { User } = require("../../03-mongo/db");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({
        username,
        password
    })
    .then(()=>{
        res.json({
            msg: "Admin created successfully"
        })
    })
    .catch(()=>{
        res.status(500).json({
            msg: "Admin not created"
        })
    })
});

router.post('/signin', async (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;

    const user = await User.find({
        username,
        password
    });

    if (user){
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            token
        })
    } else {
        res.json({
            msg: "User does not exist"
        })
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;