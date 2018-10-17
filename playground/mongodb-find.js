// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){  
        return console.log('Unable to connect to de db server');
    };
    
    console.log('Connected to MongoDB');

    // db.collection('Todos').find({_id: new ObjectID('5bc6c2735f75ec778da05e10')}).toArray().then( (docs) => {
    //     console.log('TODOS: ');
    //     console.log(JSON.stringify(docs, undefined, 4));
    // }, (err) => {
    //     console.log('unable to fetch', err)
    // })

    db.collection('Todos').find().count().then( (count) => {
        console.log('Count: ');
        console.log(count);
    }, (err) => {
        console.log('unable to fetch', err)
    })

    
} );