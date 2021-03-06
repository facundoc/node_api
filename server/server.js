const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const _ = require('lodash');


var {mongoose} = require('./db/mongoose.js');
var {Users} = require('./models/users');
var {Todo} = require('./models/todo');

var app = express();
var port = process.env.PORT || 3000

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

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.sendStatus(400);
    }
    
    Todo.findById(id).then((todo) => {
        if(!todo) {
            return res.sendStatus(404);
        }
        res.send({todo});
    }).catch((e)=> res.sendStatus(400));
    

})

app.delete('/todos/:id', (req, res) => {

    var id = req.params.id;

    if(!ObjectID.isValid(id)) {
        return res.sendStatus(400)
    }

    Todo.findByIdAndDelete(id).then((todo) => {
        if(!todo) {
            return res.sendStatus(404)
        } 
        res.status(200).send({todo})
        
    }).catch((e) => res.status(404).send(e));
});

app.patch('/todos/:id', )

app.listen(port, () => console.log(`server started in port ${port}`));



module.exports = {app};
