const router = require('express').Router();
const notes = require('../../db/notes');

const fs = require('fs');
const path = require('path');

function createNewNote(body, notes) {
  const note = body;
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../../db/notes.json'), 
    JSON.stringify(notes, null, 2)
  );
  return note;
}

router.get('/notes', (req, res) => {
  let results = notes;
  console.log(results);
  res.json(notes);
});

router.post('/notes', (req, res) => {

})

module.exports = router;