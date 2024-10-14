// // server.js
// const express = require('express');
// const mysql = require('mysql');
// const cors= require("cors");


// const app = express();


// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'Signup',
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to database:', err);
//     return;
//   }
//   console.log('Connected to database');
// });

// app.use(cors());
// app.use(express.json());

// app.post('/Signup', (req, res) => {
//   const sql = `INSERT INTO users (name, number) VALUES (?, ?)`;

//   const values=
//   [
//     req.body.name,
//     req.body.number,
//   ]
//   db.query(sql, [values], (err, data) => {
//     if (err)return res.json(err);
//     return res.json(data);
//   });
// });

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });