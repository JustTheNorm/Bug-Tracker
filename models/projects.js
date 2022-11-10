// const ticket = require('./ticket');
const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const projectSchema = new Schema({
  project_name: { type: String, required: true, unique: true, },
  emoji: String,
  users: { type: String,},

}, {
  timestamps: true
});

module.exports = mongoose.model('project', projectSchema);