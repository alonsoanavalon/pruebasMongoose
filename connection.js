const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/mywebstore';

const db = mongoose.connection

mongoose.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true
}); // esto lo cambiaria si estuviera en otro sv y puerto


db.once('open', () => {
    console.log('database is connected to ' + uri)
})

db.on('error' , error => {
    console.log(error)
})