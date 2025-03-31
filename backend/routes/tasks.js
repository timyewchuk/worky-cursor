const express = require('express');
const router = express.Router();

// Get all tasks
router.get('/', (req, res) => {
  // This would be connected to a database in a complete app
  res.json({ message: 'Get all tasks endpoint (to be implemented)' });
});

// Get a specific task
router.get('/:id', (req, res) => {
  res.json({ message: `Get task with id ${req.params.id} (to be implemented)` });
});

// Create a new task
router.post('/', (req, res) => {
  const { title, description, dueDate, assignee } = req.body;
  res.json({ 
    message: 'Create task endpoint (to be implemented)',
    task: { title, description, dueDate, assignee }
  });
});

// Update a task
router.put('/:id', (req, res) => {
  const { title, description, dueDate, assignee, status } = req.body;
  res.json({ 
    message: `Update task with id ${req.params.id} (to be implemented)`,
    task: { title, description, dueDate, assignee, status }
  });
});

// Delete a task
router.delete('/:id', (req, res) => {
  res.json({ message: `Delete task with id ${req.params.id} (to be implemented)` });
});

module.exports = router; 