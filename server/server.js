const express = require('express');
const bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose.js');
var {Users} = require('./models/users');
var {Todo} = require('./models/todo');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc) => {
        res.send(doc)
    }, (e) =>{
        res.status(400).send(e);
    })

});

app.get('/todos', (req, res) => {
    Todo.find().then( (todos) => {
        res.send({
            todos
        });
    }, (err)=>{
        res.status(400).send(err)

    });
})

app.listen(3000, () => console.log('server started in port 3000'));



module.exports = {app};
