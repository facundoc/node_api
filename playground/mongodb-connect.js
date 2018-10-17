// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){  
        return console.log('Unable to connect to de db server');
    };
    
    console.log('Connected to MongoDB');

    // db.collection('Todos').insertOne({
    //     text: 'something something',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log("error inserting to Todod", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 4))
    // })

    // db.collection('Users').insertOne({
    //     name: 'Pipi',
    //     age: 29,
    //     location: 'Italia'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Error inserting to Users')
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 4))
    // });


    db.close()
} );