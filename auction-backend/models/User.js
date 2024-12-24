const mongoose = require('mongoose');
const argon2 = require('argon2'); // For password hashing
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: { type: String, required: true }, // Added name field
  username: { type: String, required: true, unique: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  password: { type: String, required: true },
  role: { type: String, enum: ['bidder', 'auctioneer', 'admin'], required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

// Password Hashing Middleware
userSchema.pre('save', async function (next) {
  this.updated_at = Date.now();
  if (this.isModified('password')) {
    this.password = await argon2.hash(this.password); // Hashing the password
  }
  next();
});

// Method to validate password
userSchema.methods.isValidPassword = async function (password) {
  return await argon2.verify(this.password, password); // Verifying password
};

const User = mongoose.model('User', userSchema);
module.exports = User;
