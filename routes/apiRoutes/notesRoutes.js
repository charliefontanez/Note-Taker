const router = require('express').Router();
// const { createNewNote } = require('../../lib/noteFunctions');
const notes = require('../../db/notes');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

function createNewNote(body, notes) {
  body.id = uuidv4();
  const note = body;
  console.log(body);
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../../db/notes.json'), 
    JSON.stringify(notes, null, 2)
  );
  return note;
}

function deleteNote() {}


router.get('/notes', (req, res) => {
  let results = notes;
  console.log(results);
  res.json(notes);
});

router.post('/notes', (req, res) => {
  const note = createNewNote(req.body, notes);
  res.json(note);
})

module.exports = router;