const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/tasks");

const app = express();
const connectionString = `mongodb+srv://Sayantikag:Sayantika98@database-practice.3cjpm.mongodb.net/task-database?retryWrites=true&w=majority`;

mongoose.connect(connectionString)
.then(result => {
    console.log("Connection to database established");
    app.listen(5000);
})
.catch(error => {
    console.log(error.message);
})

app.use(express.json()); // using this line is important otherwise req.body will be undefined
app.use("/tasks", router);