const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  // coverImg: { type: String, required: true },
  type:{ type: String, required: true },
  tags: { type: String , required: true },
  date: { type: String, required: true },
  duration: { type: String, required: true },
  context: { type: String, required: true },
  constraints: { type: String}
});

module.exports = mongoose.model('Project', projectSchema);