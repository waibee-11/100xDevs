const { Router } = require("express");
const { Admin, Course } = require("../db");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
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

router.post('/courses', adminMiddleware, async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    // do some input validation using ZOD
    const newCourse = await Course.create({
        title,
        description,
        price,
        imageLink
    });
    res.json({
        msg: "Course created successfully",
        courseid: newCourse._id
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    Course.find({})
    .then((response)=>{
        res.json({
            courses: response
        })
    })
    .catch(()=>{
        msg: "Internal Server Error"
    })
});

module.exports = router;