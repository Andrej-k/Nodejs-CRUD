const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CodeSchema = new Schema({
  code: { type: Number }
});

module.exports = mongoose.model('Code', CodeSchema);