// Create web server application with express
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

// Set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get comments
app.get('/comments', (req, res) => {
  const comments = JSON.parse(fs.readFileSync('comments.json'));
  res.send(comments);
});

// Post comments
app.post('/comments', (req, res) => {
  const comments = JSON.parse(fs.readFileSync('comments.json'));
  const comment = {
    id: comments.length + 1,
    name: req.body.name,
    comment: req.body.comment,
  };
  comments.push(comment);
  fs.writeFileSync('comments.json', JSON.stringify(comments));
  res.send(comments);
});

// Start server
app.listen(port, () => console.log(`Server listening on port ${port}`));

