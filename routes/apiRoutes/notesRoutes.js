const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/noteFunctions');
const notes = require('../../db/notes');

router.get('/notes', (req, res) => {
  let results = notes;
  res.json(notes);
});

router.post('/notes', (req, res) => {
  const note = createNewNote(req.body, notes);
  res.json(note);
});

router.delete('/notes/:id', (req, res) => {
  const note = deleteNote(req.params.id, notes);
  res.json(note);
})

module.exports = router;