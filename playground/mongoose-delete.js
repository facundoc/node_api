const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {Users} = require('../server/models/users');
const {ObjectID} = require('mongodb');


Todo.findByIdAndDelete( '5bfc9add728dc785890ff6be').then((doc) => console.log(doc));

