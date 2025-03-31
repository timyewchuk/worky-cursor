const mongoose = require('mongoose');

const OrganizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  logo: {
    type: String // URL to logo image
  },
  settings: {
    timezone: {
      type: String,
      default: 'UTC'
    },
    theme: {
      type: String,
      default: 'default'
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the 'updatedAt' field before saving
OrganizationSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Organization', OrganizationSchema); 