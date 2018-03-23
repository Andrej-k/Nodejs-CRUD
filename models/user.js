const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  gender: { type: String },
  year: { type: Number },
  month: { type: Number },
  day: { type: Number },
  code: { type: Number },
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
