const {SHA256} = require('crypto-js');

var message = 'I am user number 3';
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

var data = {
    id: 4
};
var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'somesecretsalt').toString()
};

token.data.id = 5;
token.data.hash = SHA256(JSON.stringify(token.data)).toString();

var resultHash = SHA256(JSON.stringify(token.data) + 'somesecretsalt').toString();
if (resultHash === token.hash){
    console.log('Data was not changed');
} else {
    console.log('Data was changed. Do not trust.')
};


const jwt = require('jsonwebtoken');

var token = jwt.sign(data, 'somesecretsalt');
console.log(token);

var decoded = jwt.verify(token, 'somesecretsalt');
console.log(decoded);


const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        // console.log(hash);
    });
});

var hashedPassword = '$2a$10$qWx5ohpEULuXqYFf2zxqX.st8kvtMeoY.8Wtva3BuUnGxVo1TwaLa';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});