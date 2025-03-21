const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const listSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    user: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'user'
        }
    ]
})
const listModel = mongoose.model('list', listSchema);
module.exports = listModel;