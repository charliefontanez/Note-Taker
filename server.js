const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;
const apiRoutes = require('./routes/apiRoutes/notesRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, function() {
  console.log("Listening on port " + PORT + "!");
});