const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import the User model
const User = require('./models/User');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection (No .env file, hardcoded connection string)
const MONGO_URI = 'mongodb://127.0.0.1:27017/auction_bazaar'; // Replace with your MongoDB URI if necessary
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes

// User Registration
app.post('/register', async (req, res) => {
  try {
    const { name, username, email, password, role } = req.body;

    // Validate required fields
    if (!name || !username || !email || !password || !role) {
      return res.status(400).send({ error: 'All fields are required' });
    }

    // Create and save the user
    const user = new User({ name, username, email, password, role });
    await user.save();

    res.status(201).send({ message: 'User created successfully!' });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});


// User Login
app.post('/login', async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists and if the password is valid
    if (!user || !await user.isValidPassword(password)) {
      return res.status(400).send({ error: 'Invalid email or password' });
    }

    // Check if the role matches
    if (user.role !== role) {
      return res.status(400).send({ error: 'Role does not match' });
    }

    // If everything is valid, send response with name and success message
    res.status(200).send({ name: user.username, role: user.role, message: 'Login successful' });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});


// Start Server
const PORT = 5000; // Hardcoded port value
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
