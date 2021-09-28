const { Router } = require('express');
const temperament = Router();

const {
    getTemperaments
} = require('../Controllers/Temperaments')

temperament.get('/', getTemperaments)

module.exports = temperament
