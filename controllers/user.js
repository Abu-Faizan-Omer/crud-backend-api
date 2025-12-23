


// controllers/userController.js
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

// Utility to generate JWT
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.TOKEN_SECRET, {
    expiresIn: '1h',
  });
};

// GET /users - list all
exports.getAll = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'name', 'email'], // do not send password
    });
    res.json(users);
  } catch (err) {
    console.error('Get all users error:', err);
    res.status(500).json({ message: 'Server error' })
  }
};

// GET /users/:id
exports.getById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const user = await User.findByPk(id, {
      attributes: ['id', 'name', 'email'],
    });

    if (!user) return res.status(404).json({ message: 'User not found' })

    res.json(user);
  } catch (err) {
    console.error('Get user by id error:', err)
    res.status(500).json({ message: 'Server error' })
  }
};

// POST /users (signup / create)
exports.create = async (req, res) => {
  try {
    const { name, email, password } = req.body
    console.log("inside create",name)

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'name, email, password required' })
    }

    const existing = await User.findOne({ where: { email } })
    if (existing) {
      return res.status(400).json({ message: 'Email already registered' })
    }

    const hashed = await bcrypt.hash(password, 10)

    const newUser = await User.create({name,email,password: hashed,})

    res.status(201).json({id: newUser.id,name: newUser.name,email: newUser.email,})
  } catch (err) {
    console.error('Create user error:', err)
    res.status(500).json({ message: 'Server error' })
  }
};

// POST /users/login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: 'email and password required' })
    }

    const user = await User.findOne({ where: { email } })
    if (!user) return res.status(404).json({ message: 'User not found' })

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid password' })

    const token = generateToken(user.id);

    res.json({token,user: {id: user.id,name: user.name,email: user.email,},})
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' })
  }
};

// PUT /users/:id (full update)
exports.update = async (req, res) => {
  try {
    const id = Number(req.params.id)
    const { name, email, password } = req.body

    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: 'User not found' })

    let hashed = user.password
    if (password) {
      hashed = await bcrypt.hash(password, 10)
    }

     if (name !== undefined) {
      user.name = name;
    }
    if (email !== undefined) {
      user.email = email;
    }
    if (password !== undefined) {
      user.password = await bcrypt.hash(password, 10);
    }

    await user.save()

    res.json({id: user.id,name: user.name,email: user.email})
  } catch (err) {
    console.error('Update user error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// PATCH /users/:id (partial update)
exports.patch = async (req, res) => {
  try {
    const id = Number(req.params.id)
    const { name, email, password } = req.body

    const user = await User.findByPk(id)
    if (!user) return res.status(404).json({ message: 'User not found' })

    if (name !== undefined) user.name = name
    if (email !== undefined) user.email = email
    if (password !== undefined) {
      user.password = await bcrypt.hash(password, 10)
    }

    await user.save()
    res.json({id: user.id,name: user.name,email: user.email})

  } catch (err) {
    console.error('Patch user error:', err)
    res.status(500).json({ message: 'Server error' })
  }
};

// DELETE /users/:id
exports.remove = async (req, res) => {
  try {
    const id = Number(req.params.id)
    const user = await User.findByPk(id)
    if (!user) return res.status(404).json({ message: 'User not found' })

    await user.destroy()

    res.json({ message: 'User deleted' })
  } catch (err) {
    console.error('Delete user error:', err)
    res.status(500).json({ message: 'Server error' })
  }
};

// GET / (home)
exports.home = (req, res) => {
  res.send('Home route working')
};
