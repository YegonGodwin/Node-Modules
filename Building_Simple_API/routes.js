// API routes for modules

const express = require('express');
const router = express.Router();

router.get('/todos', (req, res) => {
    res.json([{id:1, task: 'Learn Node.js'}]);
}) 

router.post('/todos', (req, res) => {
    const newTodo = req.body;
    res.json({message: 'Todo added', todo: newTodo});
})

module.exports = router;