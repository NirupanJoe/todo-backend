const task = require('../models').Task;
const sequelize = require('sequelize');

const { eq } = sequelize.Op;

exports.createTask = async(req, res) => {
    const { text, dueOn } = req.body;
    const result = await task.create({
        text,
        dueOn,
    });

    res.json(result);
};

exports.listTask = async(req, res) => {
    const result = await task.findAll();

    res.json(result);
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

    res.json(result);
};

exports.updateTask = async(req, res) => {
    const { text, dueOn } = req.body;
    const { task_id } = req.params;

    const result = await task.update({
        text,
        dueOn,
    },
    {
        where: {
            id: {
                [eq]: task_id,
            },
        },
    });

    res.json(result);
};

exports.getTask = async(req, res) => {
    const { task_id } = req.params;
    const result = await task.findOne({
        where: {
            id: {
                [eq]: task_id,
            },
        },
    });

    res.json(result);
};
