const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true
    },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    note: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Note' }
});

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;