const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {Users} = require('../server/models/users');
const {ObjectID} = require('mongodb');

// var id = '5be4b3a5e808f17111430706#####';

// Todo.find({
//     _id: id
// }).then((todos) => console.log(todos));


// Todo.findOne({
//     _id : id
// }).then((todo)=> console.log(todo));

// if(!ObjectID.isValid(id)){

//     return console.log('id not valid')
// }

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('no todo')
//     }
//     console.log('todo by id: ', todo)
// }).catch((e)=> console.log(e))

var id = '6be48fdafd7724679e3158a2####';
if (ObjectID.isValid(id)) {
    Users.findById(id).then(
    
        (user) => {
            if (!user) {
                return console.log('no user found')
            }
            console.log('user: ', user)
        }
    ).catch(
        (e) => console.log(e)
    );
} else {
    console.log('objectID is invalid')
}

