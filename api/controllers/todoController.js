const Todo = require("../models/todoModel")

// READ OPERATIONS
exports.listAllTodos = (req, res) => {
    Todo.find({}, (err, todo) => {
        if(err) {
            res.status(500).send(err)
        }
        res.status(200).json(todo)
    })
}

// CREATE OPERATIONS
exports.createNewTodo = (req, res) => {
    let newTodo = new Todo (req.body)
    newTodo.save((err, todo) => {
        if(err) {
            res.status(500).send(err)
        }
        res.status(201).json(todo)
    })
}

// UPDATE OPERATIONS
exports.updateTodo = (req, res) => {
    Todo.findOneAndUpdate({ _id:req.params.id }, req.body, { new:true }, (err, todo) => {
        if(err) {
            res.status(500).send(err)
        }
        res.status(200).json(todo)
    })
}

// DELETE OPERATIONS
exports.deleteTodo = async (req, res) => {
    await Todo.deleteOne({ _id:req.params.id }, (err) => {
        if(err) {
            return res.status(404).send(err)
        }
        res.status(200).json({ message:"Todo successfully deleted"})
    })
}