'use strict'
    module.exports = function(app){
        var todoList = require('../controllers/todoController')

        app
        .route("/todos")
        .get(todoList.listAllTodos)
        .post(todoList.createNewTodo)

        app
        .route("/todo/:id")
        .put(todoList.updateTodo)
        .delete(todoList.deleteTodo)
    }