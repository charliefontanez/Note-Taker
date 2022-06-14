const fs = require('fs');
const path = require('path');

function createNewNote(body, notes) {
  const note = body;
  console.log(body);
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../../db/notes.json'), 
    JSON.stringify(notes, null, 2)
  );
  return note;
}


module.exports = {
  createNewNote
}