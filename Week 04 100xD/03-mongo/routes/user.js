const { Router } = require("express");
const { User, Course } = require("../db");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username,
        password,
        purchasedCourses: []
    })
    .then(()=>{
        res.json({
            msg: "User created successfully"
        })
    })
    .catch(()=>{
        res.json({
            msg: "User not created"
        })
    })
});

router.get('/courses', (req, res) => {
    Course.find({})
    .then((response)=>{
        res.json({
            courses: response
        })
    })
    .catch(()=>{
        res.json({
            msg: "Error occurred"
        })
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    const username = req.headers.username;
    const courseId = req.params.courseId;
    User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    .then(()=>{
        res.json({
            msg: "Course added successfully"
        })
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const username = req.headers.username;
    const user = await User.findOne({
        username
    });
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({
        msg: courses
    })
});

module.exports = router