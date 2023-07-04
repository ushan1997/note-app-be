const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
});

const Note = mongoose.model("Note", NoteSchema);
module.exports = Note;