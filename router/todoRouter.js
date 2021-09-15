const express = require('express');
const controller = require('../controller/todoController');

const router = express.Router();

router.route('/').get(controller.listTodo).post(controller.createTodo);
router.route('/:todo_id').delete(controller.deleteTodo).put(controller.updateTodo)
    .get(controller.getTodo);

module.exports = router;
