var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');


// var newTodo = new Todo({ 
//     text: 'Buy coffee',
//     // completed: true,
//     // completedAt: Math.round((new Date()).getTime() / 1000) // unix timestamp
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc); 
//     mongoose.disconnect();
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
