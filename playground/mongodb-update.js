// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){  
        return console.log('Unable to connect to de db server');
    };
    
    console.log('Connected to MongoDB');
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5bcf84705f75ec778da08ae8")
    // },{
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((res)=> console.log(res))

    // db.collection('Users').findOneAndUpdate({
    //         _id: new ObjectID("5bc6c5b92cd6d0403e63ade8")
    //     },
    //     {
    //         $inc: {age: 1}
    //     },
    //     {
    //         returnOriginal: false
    //     }
    // ).then((res)=>console.log(res));

    //db.close()
});