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
    completed: { type: Boolean, default: false },
    user: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'user'
        }
    ]
})
const listModel = mongoose.model('list', listSchema);
module.exports = listModel;