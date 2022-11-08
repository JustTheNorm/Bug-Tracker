// const ticket = require('./ticket');
const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const ticketSchema = new Schema({
  project_name: { type: String, required: true },
  emoji: String,
  category: { type: String, required: true },
  description: {type: String, required: true},
  users: { type: String,},
  resolution_date: {type: String}

}, {
  timestamps: true
});

module.exports = mongoose.model('ticket', ticketSchema);