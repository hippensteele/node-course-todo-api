var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

const port = process.env.PORT || 8080;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc); 
    },(e) => {
        res.status(400).send(); 
        // console.log(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos}); 
    },(e) => {
        res.status(400).send(); 
        // console.log(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)){
        return res.status(404).send();
    };
    Todo.findById(id).then((todo) => {
        if (!todo){
            return res.status(404).send();
        }
        res.send({todo}); 
    },(e) => {
        res.status(400).send(); 
        // console.log(e);
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

module.exports = {app};


// var newUser = new User({
//     email: 'hippensteele@gmail.com'
// });

// newUser.save().then((doc) => {
//     console.log('Saved user', doc);
//     mongoose.disconnect();
// },(e) => {
//     console.log('Unable to save user', e);
// });
