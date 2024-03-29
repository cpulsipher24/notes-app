const path = require('path');
const router = require('express').Router();

// Landing page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
});

// Notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/notes.html'));
});

module.exports = router;