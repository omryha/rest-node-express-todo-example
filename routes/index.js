import express from 'express';
import db from '../db/db';
import TodoController from '../todosControllers/todos';

const router = express.Router();

// get all todos
router.get('/api/v1/todos', TodoController.getAllTodos);

// get a single todo
router.get('/api/v1/todos/:id', TodoController.getTodo);

// create a todo
router.post('/api/v1/todos', TodoController.createTodo);

// update a todo
router.put('/api/v1/todos/:id', TodoController.updateTodo);

// delete a todo
router.delete('/api/v1/todos/:id', TodoController.deleteTodo);

export default router;