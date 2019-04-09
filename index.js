const config = require('config');
const mongoose = require('mongoose');
const express = require("express");
const app = express();

mongoose.connect(config.get('db'), { useNewUrlParser: true })
    .then(() => console.log(`Connected to ${config.get('db')}`))
    .catch(() => console.error('Failed to connect to MongoDB'));

app.get("/", (req, res) => {
  res.send({message: "Hello World!"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));
