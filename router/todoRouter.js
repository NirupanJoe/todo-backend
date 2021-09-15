const express = require('express');
const controller = require('../controller/todoController');

const router = express.Router();

router.route('/').get(controller.allTodo).post(controller.createTodo);
router.route('/:todo_id').delete(controller.deleteTodo).put(controller.updateTodo);

module.exports = router;
