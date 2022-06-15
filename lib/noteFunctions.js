const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

function createNewNote(body, notes) {
  const note = body;
  note.id = uuidv4();
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/notes.json'), 
    JSON.stringify(notes, null, 2)
  );
  return note;
}

function deleteNote(id, notes) {
  var note;
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      note = notes[i].id;
      notes.splice(i, 1);
      break;
    }
  }
  fs.writeFileSync(
    path.join(__dirname, '../db/notes.json'),
    JSON.stringify(notes, null, 2)
  )
  return note;
}

module.exports = {
  createNewNote,
  deleteNote
}