const todo = require('../models').Todo;
const sequelize = require('sequelize');
const Op = sequelize.Op;

exports.createTodo = async(req, res) => {
    const { text, completed } = req.body;
    const result = await todo.create({
        text,
        completed,
    });

    res.json(result);
};

exports.listTodo = async(req, res) => {
    const result = await todo.findAll();

    res.json(result);

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

    res.json(result);

};

exports.updateTodo = async(req, res) => {
    const { text, completed } = req.body;
    const { todo_id } = req.params;

    const result = await todo.update({
        text,
        completed,
    },
    {
        where: {
            id: {
                [Op.eq]: todo_id,
            },
        },
    },
    );

    res.json(result);
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

    res.json(result);
};
