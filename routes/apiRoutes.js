const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const router = require('express').Router();

// Read notes from db.json
router.get('/api/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db.json'), 'utf-8'));
  res.json(notes);
});

// Save a new note to db.json
router.post('/api/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4(); // Add unique ID using the uuid package

  const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db.json'), 'utf-8'));
  notes.push(newNote);

  fs.writeFileSync(path.join(__dirname, '../db.json'), JSON.stringify(notes, null, 2));
  
  res.json(newNote);
});

// Delete a note from db.json
router.delete('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;

  let notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db.json'), 'utf-8'));

  // Filter out the note with the given ID
  notes = notes.filter((note) => note.id !== noteId);

  // Save the updated notes array to db.json
  fs.writeFileSync(path.join(__dirname, '../db.json'), JSON.stringify(notes, null, 2));

  res.json({ message: 'Note deleted successfully' });
});

module.exports = router;
