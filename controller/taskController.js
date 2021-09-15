const task = require('../models').Task;
const sequelize = require('sequelize');

const { eq } = sequelize.Op;

exports.createTask = async(req, res) => {
    const { text, date } = req.body;
    const result = await task.create({
        text,
        date,
    });

    res.json({
        message: result ? 'Success' : 'Error',
    });
};

exports.allTask = async(req, res) => {
    const result = await task.findAll();

    res.json({
        task: result,
    });
};

exports.deleteTask = async(req, res) => {
    const { task_id } = req.params;
    const result = await task.destroy({
        where: {
            id: {
                [eq]: task_id,
            },
        },
    });

    res.json({
        message: result ? 'Success' : 'ID does not exists',
    });
};

exports.updateTask = async(req, res) => {
    const { text, date } = req.body;
    const { task_id } = req.params;

    const result = await task.update({
        text,
        date,
    },
    {
        where: {
            id: {
                [eq]: task_id,
            },
        },
    });
};
