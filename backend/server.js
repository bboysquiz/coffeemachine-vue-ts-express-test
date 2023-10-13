const express = require('express');
const app = express();
const PORT = 3000;

let configurations = [];

app.use(express.json());

app.get('/api/configurations', (req, res) => {
  res.json(configurations);
});

app.post('/api/configurations', (req, res) => {
  configurations.push(req.body);
  res.status(201).json(req.body);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});