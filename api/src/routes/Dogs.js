const { Router } = require('express');
const dog = Router();

const {
    getDogs,
    breedsIncludesWord,
    breedDetail,
    creatingBreed
} = require('../Controllers/Dog')

dog.get('/', getDogs)
dog.get('/', breedsIncludesWord)
dog.get('/:idBreed', breedDetail)
dog.post('/', creatingBreed)

module.exports = dog
