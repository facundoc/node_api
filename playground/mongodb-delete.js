// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){  
        return console.log('Unable to connect to de db server');
    };
    
    console.log('Connected to MongoDB');

    //deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'hacer algo productivo'
    // }).then((result)=> console.log(result));

    // //deleteOne
    // db.collection('Todos').deleteOne({
    //     name: 'hacer algo productivo'
    // }).then((result)=> console.log(result));
    //findAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => console.log(result));
    
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5bc6c5a7f16190403d23a43d")
    }).then((results) => console.log(results));



});