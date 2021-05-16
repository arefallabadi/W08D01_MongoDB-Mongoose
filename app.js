const express = require("express");
const todoModel = require("./schema");
const db = require("./db");

const app = express();
app.use(express.json());

app.get("/todos", (req, res) => {
  todoModel.find({})
  .then((result)=>{
    res.json(result);
  }).catch((err)=>{res.json(err)})
});


app.post("/create/todo", (req, res) => {
  const { task, description, deadline, isCompleted, priority } = req.body;
  const newTodo =new todoModel({ task, description, deadline, isCompleted, priority});
  newTodo
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
});


app.get("/todos/done", (req, res) => {
  todoModel.find({isCompleted:"yes"})
  .then((result)=>{
    res.json(result);
  }).catch((err)=>{res.json(err)})
});


app.put("/update/todo", (req, res) => {});
app.delete("/delete/todo", (req, res) => {});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
