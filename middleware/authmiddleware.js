const jwt = require('jsonwebtoken');
const User = require('../models/User'); // agar user DB se check karna ho

const authMiddleware = async (req, res, next) => {
  let token;

  // 1. Header Interception: Check if token exists
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // 2. Token Extraction: Get token from "Bearer TOKEN"
      token = req.headers.authorization.split(' ')[1];

      // 3. Signature Verification: Verify token with JWT_SECRET
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // 4. Context Attachment: Attach user to req object
      // decoded.id is what we put in token during login
      req.user = await User.findById(decoded.id).select('-password'); 

      // 5. Pipeline Continuity
      next();

    } catch (error) {
      console.error(error);
      // 6. Error handling for expired/invalid token
      res.status(403).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    // Format Validation: No token found
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { authMiddleware };