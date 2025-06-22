const mongoose = require('mongoose');
const TodoSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    task: String,
    completed: Boolean
});
module.exports = mongoose.model('Todo', TodoSchema);
