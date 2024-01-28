const express = require("express");
const cors = require("cors");
const zod = require("zod");
const { Todo } = require("./db");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json());
app.use(cors());

app.get('/todos', (req, res)=>{
    Todo.find({})
    .then((response)=>{
        res.json({
            msg: response
        });
    })
    .catch(()=>{
        msg: "Error. Todos not accessed"
    })
});

app.post('/todo', (req, res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        });
        return;
    }
    Todo.create({
        title: req.body.title,
        description: req.body.description,
        completed: false
    })
    .then(()=>{
        res.json({
            msg: "Todo created"
        })
    })
    .catch(()=>{
        res.json({
            msg: "Error. Todo not created"
        })
    })
});

app.put('/completed', (req, res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg: "You have sent the wrong inputs"
        });
        return;
    }
    Todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    })
    .then(()=>{
        res.json({
            msg: "Updated successfully"
        })
    })
    .catch(()=>{
        res.json({
            msg: "Error. Todo not updated."
        })
    })
    // update in mongoDB
});

app.listen(3000);