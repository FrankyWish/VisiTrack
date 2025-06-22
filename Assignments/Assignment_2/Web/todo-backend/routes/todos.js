const router = require('express').Router();
const Todo = require('../models/Todo');
const auth = require('../middleware/auth');

// Get all todos
router.get('/', auth, async (req, res) => {
    const todos = await Todo.find({ userId: req.user.id });
    res.json(todos);
});

// Add todo
router.post('/', auth, async (req, res) => {
    const todo = new Todo({ ...req.body, userId: req.user.id });
    await todo.save();
    res.json(todo);
});

// Delete todo
router.delete('/:id', auth, async (req, res) => {
    await Todo.deleteOne({ _id: req.params.id, userId: req.user.id });
    res.send("Todo deleted");
});

// Update todo
router.put('/:id', auth, async (req, res) => {
    const todo = await Todo.findOneAndUpdate(
        { _id: req.params.id, userId: req.user.id },
        req.body,
        { new: true }
    );
    res.json(todo);
});

module.exports = router;
