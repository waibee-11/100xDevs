const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:nI4PpT3NUtTjIdML@cluster0.s1bp51g.mongodb.net/");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const Todo = mongoose.model('todos', todoSchema);

module.exports = {
    Todo
};