const app = require('express')();
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const port = 8080;

app.use(express.json());
app.use(cors());

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


app.listen(port, () => console.log('Server Started on Port', port));
