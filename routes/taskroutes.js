const express = require('express');
const router = express.Router();
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');
const { authMiddleware } = require('../middleware/authMiddleware');

router.route('/').post(authMiddleware, createTask).get(authMiddleware, getTasks);
router.route('/:id').put(authMiddleware, updateTask).delete(authMiddleware, deleteTask);

module.exports = router;