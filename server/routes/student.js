const express = require('express');
const router = express.Router();
const db = require('../Db.js');

 
router.get('/fetch', (req, res) => {
  const query = 'SELECT * FROM students';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});


router.post('/add', (req, res) => {
  const { firstName, lastName, dob, gender } = req.body;
  const query = 'INSERT INTO students (firstName, lastName, dob, gender) VALUES (?, ?, ?, ?)';
  db.query(query, [firstName, lastName, dob, gender], (err, result) => {
    if (err) throw err;
    res.status(201).json({ id: result.insertId, ...req.body });
  });
});
 

router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, dob, gender } = req.body;
  const query = 'UPDATE students SET firstName = ?, lastName = ?, dob = ?, gender = ? WHERE id = ?';
  db.query(query, [firstName, lastName, dob, gender, id], (err, result) => {
    if (err) throw err;
    res.status(200).json({ id, ...req.body });
  });
});



router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM students WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) throw err;
    res.status(200).json({ id });
  });
});

module.exports = router;
