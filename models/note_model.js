const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "users",
  },
  noteTittle: { type: String, required: false, trim: true },
  noteMessage: { type: String, required: false, trim: true },
});

const Note = mongoose.model("notes", NoteSchema);
module.exports = Note;
