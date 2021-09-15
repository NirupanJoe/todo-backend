const express = require('express');
const { createTask, allTask, deleteTask } = require('../controller/taskController');

const router = express.Router();

router.route('/').post(createTask).get(allTask);
router.route('/:task_id').delete(deleteTask);

module.exports = router;
