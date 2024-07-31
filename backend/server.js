const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 5001;

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'auth_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database.');
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  });
});

app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(query, [name, email, password], (err, results) => {
    if (err) throw err;
    res.json({ success: true });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
