const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        unique: true
    }
    , password: {
        type: String,
        required: true
    },
    list: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'list'
        }
    ]
})
const userModel = mongoose.model('user', userSchema);
module.exports = userModel;