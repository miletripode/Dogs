const { Temperament } = require('../db');
const axios = require('axios').default;
const { v4: uuidv4 } = require("uuid");
const {API_KEY} = process.env;


/*[ ] GET /temperament:
Obtener todos los temperamentos posibles
En una primera instancia deberán obtenerlos desde la API externa y guardarlos en su propia base de datos 
y luego ya utilizarlos desde allí*/
async function getTemperaments(req, res){
    let responseAxios = await axios.get(` https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    let breeds = responseAxios.data
    let temperaments = breeds.map(dog => dog.temperament).toString().split(",").filter(a => a != ' ').map(s => s.trim());

    const mySet = new Set(temperaments)
    temperaments = Array.from(mySet)

    temperaments.forEach(async (aux) => {
        await Temperament.findOrCreate({
            where: { name: aux }
        })
    })

    return Temperament.findAll({ attributes: ["name"]})
        .then((temperaments) => res.send(temperaments))
        .catch((error) => next(error))

}

module.exports = {
    getTemperaments
}