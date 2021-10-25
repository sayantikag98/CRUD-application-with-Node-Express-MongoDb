const Task = require("../models/tasks");


const getAllTasks = (req, res) => {
    Task.find()
    .then(result => {
        if(result.length === 0){
            res.send(`No task present in the database.`);
        }
        else res.send(result);
    })
    .catch(error => {
        console.log(error.message);
    });
};

const addTask = (req, res) => {
    const task = new Task(req.body);
    task.save()
    .then(result => {
        res.send(`New task ${req.body.name} added to the database.`);
    })
    .catch(error => {
        console.log(error.message);
    });
};

const getTaskById = (req, res) => {
    Task.findById(req.params.id)
    .then(result => {
        // This is to handle the case when there is no task in the database
        if(!result){
            res.send(`No task present in the database.`);
        }
        else res.send(result);
    })
    // This is to handle the case when the task with the given id is not there in the database
    .catch(error => {
        res.send(`No such task with id ${req.params.id} present in the database.`);
    });
};

const deleteTask = (req, res) => {
    Task.findByIdAndDelete(req.params.id)
    .then(result=> {
        res.redirect("/tasks");
    })
    .catch(error => {
        res.send(`No such task with id ${req.params.id} present in the database.`);
    });
};

const updateTask = (req, res) => {
    Task.findByIdAndUpdate(req.params.id, req.body)
    .then(result => {
         // This is to handle the case when there is no task in the database
        if(!result){
            res.send(`No task present in the database.`);
        }
        else res.redirect("/tasks");
    })
    // This is to handle the case when the task with the given id is not there in the database
    .catch(error => {
        res.send(`No such task with id ${req.params.id} exist in the database`);
    });
};

module.exports = {getAllTasks, addTask, getTaskById, deleteTask, updateTask};