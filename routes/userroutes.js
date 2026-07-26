const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const { authMiddleware } = require('../middleware/authMiddleware'); // 1. Import karo

router.post('/register', registerUser);
router.post('/login', loginUser);

// 2. Protected Route: authMiddleware ko controller se pehle lagao
router.get('/profile', authMiddleware, getUserProfile); 

module.exports = router;