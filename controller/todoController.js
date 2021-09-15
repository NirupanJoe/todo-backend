const todo = require('../models').Todo;
const sequelize = require('sequelize');
const Op = sequelize.Op;

exports.createTodo = async(req, res) => {
    const { text, isCompleted } = req.body;
    const result = await todo.create({
        text,
        isCompleted,
    });

    res.json({
        message: result ? 'Success' : 'Error',
    });
};

exports.listTodo = async(req, res) => {
    const result = await todo.findAll();

    res.json({
        todo: result,
    });
};

exports.deleteTodo = async(req, res) => {
    const { todo_id } = req.params;
    const result = await todo.destroy({
        where: {
            id: {
                [Op.eq]: todo_id,
            },
        },
    });

    res.json({
        message: result ? 'Success' : 'ID does not exists ',
    });
};

exports.updateTodo = async(req, res) => {
    const { text, isCompleted } = req.body;
    const { todo_id } = req.params;

    const result = await todo.update({
        text,
        isCompleted,
    },
    {
        where: {
            id: {
                [Op.eq]: todo_id,
            },
        },
    },
    );

    res.json({
        message: result ? 'Success' : 'Error'
    });
};

exports.getTodo = async(req, res) => {
    const { todo_id } = req.params;
    const result = await todo.findOne({
        where: {
            id: {
                [Op.eq]: todo_id,
            },
        },
    });

    res.json({
        task: result || 'Id does not exists',
    });
};
