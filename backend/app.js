const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const bodyParser = require('body-parser')

const projectsRoutes = require('./routes/projects');
const userRoutes = require('./routes/user');


const app = express();  


mongoose.connect('mongodb+srv://mandi:YSmu4GkKgqPInVXd@portfoliocluster.7whaxow.mongodb.net/?retryWrites=true&w=majority&appName=portfolioCluster')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(bodyParser.json())

  app.use('/images', express.static(path.join(__dirname, 'images')));

  app.use('/api/projects', projectsRoutes);
  app.use('/api/auth', userRoutes);

module.exports = app;