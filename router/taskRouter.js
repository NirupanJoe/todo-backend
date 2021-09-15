const express = require('express');
const { createTask, allTask, deleteTask, updateTask } = require('../controller/taskController');

const router = express.Router();

router.route('/').post(createTask).get(allTask);
router.route('/:task_id').delete(deleteTask).put(updateTask);

module.exports = router;
