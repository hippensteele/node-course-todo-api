// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');
    
    const db = client.db('TodoApp');
    
    // db.collection('Todos').find({
    //     // completed: false,
    //     _id: new ObjectID('5b79a6bb88f1321325492225')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    
    db.collection('Users').find({name: 'Tom'}).count().then((count) => {
        console.log(`Users: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
   
    client.close();
});