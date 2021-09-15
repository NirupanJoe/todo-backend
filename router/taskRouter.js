const express = require('express');
const { createTask, deleteTask, updateTask, listTask, getTask } = require('../controller/taskController');

const router = express.Router();

router.route('/').post(createTask).get(listTask);
router.route('/:task_id').delete(deleteTask).put(updateTask).get(getTask);

module.exports = router;
