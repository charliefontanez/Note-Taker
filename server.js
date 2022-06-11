const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

const { notes } = require('./db/notes.json');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('/api/notes', (req, res) => {
  let results = notes;
  res.json(results);
});










app.listen(PORT, function() {
  console.log("Listening on port " + PORT + "!");
});