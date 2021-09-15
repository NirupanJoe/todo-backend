const express = require('express');
const todoRouter = require('./router/todoRouter');
const taskRouter = require('./router/taskRouter');

const app = express();
const port = 6000;

app.use(express.urlencoded());
app.use(express.json());
app.use("/todo", todoRouter);
app.use("/task", taskRouter);
app.listen(port, () => console.log(`running on ${ port }`));
