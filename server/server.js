var express = require('express');
var bodyParser = require('body-parser');

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
        res.status(400).send(e); 
    });
});

app.listen(port, () => {
    console.log('Listening on port ${port}')
});




// var newTodo = new Todo({ 
//     text: 'Buy coffee',
//     // completed: true,
//     // completedAt: Math.round((new Date()).getTime() / 1000) // unix timestamp
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc); 
    // mongoose.disconnect();
// },(e) => {
//     console.log('Unable to save todo', e); 
// });

// var newUser = new User({
//     email: 'hippensteele@gmail.com'
// });

// newUser.save().then((doc) => {
//     console.log('Saved user', doc);
//     mongoose.disconnect();
// },(e) => {
//     console.log('Unable to save user', e);
// });
