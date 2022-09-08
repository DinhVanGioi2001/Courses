const express = require('express');
const route = express.Router();

const newsController = require('../app/controller/NewsController');

route.get('/', newsController.index);

module.exports = route;
