const { Router } = require('express');
const temperamentsRouter = require('./Temperaments')
const dogsRouter = require('./Dogs')


const router = Router();

router.use('/temperaments', temperamentsRouter)
router.use('/dogs', dogsRouter)


module.exports = router;
