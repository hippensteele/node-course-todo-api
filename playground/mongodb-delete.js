// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');
    
    const db = client.db('TodoApp');
    
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    
    // db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
    //     console.log(result);
    // });
  
    db.collection('Users').deleteMany({name:'Tom'}).then((result) => {
        console.log(result.result);
    });
    
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b7a0f83a900651a252952e6')}).then((result) => {
        console.log(result);
    });
    
    client.close();
});