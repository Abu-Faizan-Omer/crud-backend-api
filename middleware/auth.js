// middleware/auth.js
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const authenticate = async (req, res, next) => {
  try {

    let token = req.header('Authorization')
    
    console.log(' Raw token:', token)

    if (!token) {
      return res.status(401).json({ message: 'Token missing' })
    }

    if (token.startsWith('Bearer ')) {
      token = token.slice(7)
    }

    console.log(' Clean token:', token?.substring(0, 20) + '...')

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
    console.log('Decoded userId:', decoded.userId)

    const user = await User.findByPk(decoded.userId)
    if (!user) {
      return res.status(401).json({ message: 'User not found for this token' })
    }

    req.user = user
    req.userId = user.id
    next()

  } catch (err) {
    console.error(' Auth error:', err.message)
    return res.status(401).json({ message: 'Invalid or expired token' })
  }
}

module.exports = { authenticate }
