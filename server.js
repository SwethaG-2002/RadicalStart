const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./Db.js');
const studentRoutes = require('./routes/student');

const app = express();
 
app.use(cors());
app.use(bodyParser.json());

 
app.use('/api/students', studentRoutes);
 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
