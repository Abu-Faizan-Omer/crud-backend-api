// routes/user.js
const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/usermongo');
const { authenticate } = require('../middleware/auth');

// Route-level middleware (optional)
router.use((req, res, next) => {
  console.log('route middleware');
  next();
});

// Public routes
router.get('/', userControllers.home);
router.post('/users', userControllers.create);      // signup
router.post('/users/login', userControllers.login); // login

// Protected routes (JWT required)
router.get('/users', authenticate, userControllers.getAll);
router.get('/users/:id', authenticate, userControllers.getById);
router.put('/users/:id', authenticate, userControllers.update);
router.patch('/users/:id', authenticate, userControllers.patch);
router.delete('/users/:id', authenticate, userControllers.remove);

module.exports = router;
