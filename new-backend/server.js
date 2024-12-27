const express = require('express');
const { Pool } = require('pg');
const cors = require('cors')
const app = express();
const port = 3001;

// PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dads_website',
  password: 'andy',
  port: 5432,
});

// Enable CORS for all routes
app.use(cors());

// Endpoint to get users
app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
