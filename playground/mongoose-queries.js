const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b819200a4d90a134fd8f632';
// var id = '6b819200a4d90a134fd8f632';
// var id = '5b819200a4d90a134fd8f63211';

// if (!ObjectID.isValid(id)) {
//     return console.log('ID not valid');
// };

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo){
//         return console.log('ID not found');
//     };
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

var id = '5b7ae8ec7589ca12261c303d';

if (!ObjectID.isValid(id)) {
    return console.log('ID not valid');
};

User.findById(id).then((user) => {
    if (!user){
        return console.log('User ID not found');
    };
    console.log('User by ID', user);
}).catch((e) => console.log(e));
